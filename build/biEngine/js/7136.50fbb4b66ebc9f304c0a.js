"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7136],{

/***/ 312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementsClippedBoundingBox)
/* harmony export */ });
/* harmony import */ var _geometry_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85932);


function elementsClippedBoundingBox(elements, transformation) {
    var boundingBox;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.visible()) {
            var elementBoundingBox = element.clippedBBox(transformation);
            if (elementBoundingBox) {
                if (boundingBox) {
                    boundingBox = _geometry_rect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.union(boundingBox, elementBoundingBox);
                } else {
                    boundingBox = elementBoundingBox;
                }
            }
        }
    }

    return boundingBox;
}

/***/ },

/***/ 1039
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ segment)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var has_observers = __webpack_require__(33857);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var geometry_rect = __webpack_require__(85932);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var point = __webpack_require__(76786);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js + 1 modules
var transform = __webpack_require__(95739);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/deg.js
var deg = __webpack_require__(77152);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/constants.js
var constants = __webpack_require__(8441);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/is-out-of-end-point.js



function isOutOfEndPoint(endPoint, controlPoint, point) {
    var angle = (0,deg/* default */.A)(Math.atan2(controlPoint.y - endPoint.y, controlPoint.x - endPoint.x));
    var rotatedPoint = point.transformCopy((0,transform/* default */.A)().rotate(-angle, endPoint));

    return rotatedPoint.x < endPoint.x;
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/calculate-curve-at.js
function calculateCurveAt(t, field, points) {
    var t1 = 1 - t;
    return Math.pow(t1, 3) * points[0][field] +
        3 * Math.pow(t1, 2) * t * points[1][field] +
        3 * Math.pow(t, 2) * t1 * points[2][field] +
        Math.pow(t, 3) * points[3][field];
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/to-cubic-polynomial.js
function toCubicPolynomial(points, field) {
    return [ -points[0][field] + 3 * points[1][field] - 3 * points[2][field] + points[3][field],
        3 * (points[0][field] - 2 * points[1][field] + points[2][field]),
        3 * (-points[0][field] + points[1][field]),
        points[0][field]
    ];
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/constants.js
var geometry_constants = __webpack_require__(57757);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/class.js
var common_class = __webpack_require__(11773);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/round.js
var round = __webpack_require__(96276);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/complex-number.js




var ComplexNumber = (function (Class) {
    function ComplexNumber(real, img) {
        if ( real === void 0 ) real = 0;
        if ( img === void 0 ) img = 0;

        Class.call(this);

        this.real = real;
        this.img = img;
    }

    if ( Class ) ComplexNumber.__proto__ = Class;
    ComplexNumber.prototype = Object.create( Class && Class.prototype );
    ComplexNumber.prototype.constructor = ComplexNumber;

    ComplexNumber.prototype.add = function add (cNumber) {
        return new ComplexNumber((0,round/* default */.A)(this.real + cNumber.real, geometry_constants/* PRECISION */.P), (0,round/* default */.A)(this.img + cNumber.img, geometry_constants/* PRECISION */.P));
    };

    ComplexNumber.prototype.addConstant = function addConstant (value) {
        return new ComplexNumber(this.real + value, this.img);
    };

    ComplexNumber.prototype.negate = function negate () {
        return new ComplexNumber(-this.real, -this.img);
    };

    ComplexNumber.prototype.multiply = function multiply (cNumber) {
        return new ComplexNumber(this.real * cNumber.real - this.img * cNumber.img,
            this.real * cNumber.img + this.img * cNumber.real);
    };

    ComplexNumber.prototype.multiplyConstant = function multiplyConstant (value) {
        return new ComplexNumber(this.real * value, this.img * value);
    };

    ComplexNumber.prototype.nthRoot = function nthRoot (n) {
        var rad = Math.atan2(this.img, this.real);
        var r = Math.sqrt(Math.pow(this.img, 2) + Math.pow(this.real, 2));
        var nthR = Math.pow(r, 1 / n);

        return new ComplexNumber(nthR * Math.cos(rad / n), nthR * Math.sin(rad / n)); //Moivre's formula
    };

    ComplexNumber.prototype.equals = function equals (cNumber) {
        return this.real === cNumber.real && this.img === cNumber.img;
    };

    ComplexNumber.prototype.isReal = function isReal () {
        return this.img === 0;
    };

    return ComplexNumber;
}(common_class/* default */.A));

/* harmony default export */ const complex_number = (ComplexNumber);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/solve-cubic-equation.js




function numberSign(x) {
    return x < 0 ? -1 : 1;
}

function solveQuadraticEquation(a, b, c) {
    var squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    return [
        (-b + squareRoot) / (2 * a),
        (-b - squareRoot) / (2 * a)
    ];
}

//Cardano's formula
function solveCubicEquation(a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }

    var p = (3 * a * c - Math.pow(b, 2)) / (3 * Math.pow(a, 2));
    var q = (2 * Math.pow(b, 3) - 9 * a * b * c + 27 * Math.pow(a, 2) * d) / (27 * Math.pow(a, 3));
    var Q = Math.pow(p / 3, 3) + Math.pow(q / 2, 2);
    var i = new complex_number(0,1);
    var b3a = -b / (3 * a);
    var x1, x2, y1, y2, y3, z1, z2;

    if (Q < 0) {
        x1 = new complex_number(-q / 2, Math.sqrt(-Q)).nthRoot(3);
        x2 = new complex_number(-q / 2, - Math.sqrt(-Q)).nthRoot(3);
    } else {
        x1 = -q / 2 + Math.sqrt(Q);
        x1 = new complex_number(numberSign(x1) * Math.pow(Math.abs(x1), 1 / 3));
        x2 = -q / 2 - Math.sqrt(Q);
        x2 = new complex_number(numberSign(x2) * Math.pow(Math.abs(x2), 1 / 3));
    }

    y1 = x1.add(x2);

    z1 = x1.add(x2).multiplyConstant(-1 / 2);
    z2 = x1.add(x2.negate()).multiplyConstant(Math.sqrt(3) / 2);

    y2 = z1.add(i.multiply(z2));
    y3 = z1.add(i.negate().multiply(z2));

    var result = [];

    if (y1.isReal()) {
        result.push((0,round/* default */.A)(y1.real + b3a, geometry_constants/* PRECISION */.P));
    }
    if (y2.isReal()) {
        result.push((0,round/* default */.A)(y2.real + b3a, geometry_constants/* PRECISION */.P));
    }
    if (y3.isReal()) {
        result.push((0,round/* default */.A)(y3.real + b3a, geometry_constants/* PRECISION */.P));
    }

    return result;
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/has-roots-in-range.js




function hasRootsInRange(points, point, field, rootField, range) {
    var polynomial = toCubicPolynomial(points, rootField);
    var roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point[rootField]);
    var intersection;

    for (var idx = 0; idx < roots.length; idx++) {
        if (0 <= roots[idx] && roots[idx] <= 1) {
            intersection = calculateCurveAt(roots[idx], field, points);
            if (Math.abs(intersection - point[field]) <= range) {
                return true;
            }
        }
    }
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/close.js
var math_close = __webpack_require__(67923);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/curve-intersections-count.js





function curveIntersectionsCount(points, point, bbox) {
    var polynomial = toCubicPolynomial(points, "x");
    var roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point.x);
    var rayIntersection, intersectsRay;
    var count = 0;
    for (var i = 0; i < roots.length; i++) {
        rayIntersection = calculateCurveAt(roots[i], "y", points);
        intersectsRay = (0,math_close/* default */.A)(rayIntersection, point.y) || rayIntersection > point.y;
        if (intersectsRay && (((roots[i] === 0 || roots[i] === 1) && bbox.bottomRight().x > point.x) || (0 < roots[i] && roots[i] < 1))) {
            count++;
        }
    }

    return count;
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersections-count.js
var line_intersections_count = __webpack_require__(97704);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/with-points.js
var with_points = __webpack_require__(30478);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/segment.js













var points = [ "anchor", "controlIn", "controlOut" ];

var Segment = (function (superclass) {
    function Segment(anchor, controlIn, controlOut) {
        superclass.call(this);

        this.anchor(anchor || new point/* default */.A());
        this.controlIn(controlIn);
        this.controlOut(controlOut);
    }

    if ( superclass ) Segment.__proto__ = superclass;
    Segment.prototype = Object.create( superclass && superclass.prototype );
    Segment.prototype.constructor = Segment;

    Segment.prototype.bboxTo = function bboxTo (toSegment, matrix) {
        var segmentAnchor = this.anchor().transformCopy(matrix);
        var toSegmentAnchor = toSegment.anchor().transformCopy(matrix);
        var rect;

        if (this.controlOut() && toSegment.controlIn()) {
            rect = this._curveBoundingBox(
                segmentAnchor, this.controlOut().transformCopy(matrix),
                toSegment.controlIn().transformCopy(matrix), toSegmentAnchor
            );
        } else {
            rect = this._lineBoundingBox(segmentAnchor, toSegmentAnchor);
        }

        return rect;
    };

    Segment.prototype._lineBoundingBox = function _lineBoundingBox (p1, p2) {
        return geometry_rect/* default */.A.fromPoints(p1, p2);
    };

    Segment.prototype._curveBoundingBox = function _curveBoundingBox (p1, cp1, cp2, p2) {
        var points = [ p1, cp1, cp2, p2 ];
        var extremesX = this._curveExtremesFor(points, "x");
        var extremesY = this._curveExtremesFor(points, "y");
        var xLimits = arrayLimits([ extremesX.min, extremesX.max, p1.x, p2.x ]);
        var yLimits = arrayLimits([ extremesY.min, extremesY.max, p1.y, p2.y ]);

        return geometry_rect/* default */.A.fromPoints(new point/* default */.A(xLimits.min, yLimits.min), new point/* default */.A(xLimits.max, yLimits.max));
    };

    Segment.prototype._curveExtremesFor = function _curveExtremesFor (points, field) {
        var extremes = this._curveExtremes(
            points[0][field], points[1][field],
            points[2][field], points[3][field]
        );

        return {
            min: calculateCurveAt(extremes.min, field, points),
            max: calculateCurveAt(extremes.max, field, points)
        };
    };

    Segment.prototype._curveExtremes = function _curveExtremes (x1, x2, x3, x4) {
        var a = x1 - 3 * x2 + 3 * x3 - x4;
        var b = - 2 * (x1 - 2 * x2 + x3);
        var c = x1 - x2;
        var sqrt = Math.sqrt(b * b - 4 * a * c);
        var t1 = 0;
        var t2 = 1;

        if (a === 0) {
            if (b !== 0) {
                t1 = t2 = -c / b;
            }
        } else if (!isNaN(sqrt)) {
            t1 = (- b + sqrt) / (2 * a);
            t2 = (- b - sqrt) / (2 * a);
        }

        var min = Math.max(Math.min(t1, t2), 0);
        if (min < 0 || min > 1) {
            min = 0;
        }

        var max = Math.min(Math.max(t1, t2), 1);
        if (max > 1 || max < 0) {
            max = 1;
        }

        return {
            min: min,
            max: max
        };
    };

    Segment.prototype._intersectionsTo = function _intersectionsTo (segment, point) {
        var intersectionsCount;
        if (this.controlOut() && segment.controlIn()) {
            intersectionsCount = curveIntersectionsCount([ this.anchor(), this.controlOut(), segment.controlIn(), segment.anchor() ], point, this.bboxTo(segment));
        } else {
            intersectionsCount = (0,line_intersections_count/* default */.A)(this.anchor(), segment.anchor(), point);
        }
        return intersectionsCount;
    };

    Segment.prototype._isOnCurveTo = function _isOnCurveTo (segment, point, width, endSegment) {
        var bbox = this.bboxTo(segment).expand(width, width);
        if (bbox.containsPoint(point)) {
            var p1 = this.anchor();
            var p2 = this.controlOut();
            var p3 = segment.controlIn();
            var p4 = segment.anchor();

            if (endSegment === "start" && p1.distanceTo(point) <= width) {
                return !isOutOfEndPoint(p1, p2, point);
            } else if (endSegment === "end" && p4.distanceTo(point) <= width) {
                return !isOutOfEndPoint(p4, p3, point);
            }

            //the approach is not entirely correct but is close and the alternatives are solving a 6th degree polynomial or testing the segment points
            var points = [ p1, p2, p3, p4 ];
            if (hasRootsInRange(points, point, "x", "y", width) || hasRootsInRange(points, point, "y", "x", width)) {
                return true;
            }
            var rotation = (0,transform/* default */.A)().rotate(45, point);
            var rotatedPoints = [ p1.transformCopy(rotation), p2.transformCopy(rotation), p3.transformCopy(rotation), p4.transformCopy(rotation) ];
            return hasRootsInRange(rotatedPoints, point, "x", "y", width) || hasRootsInRange(rotatedPoints, point, "y", "x", width);
        }
    };

    Segment.prototype._isOnLineTo = function _isOnLineTo (segment, point, width) {
        var p1 = this.anchor();
        var p2 = segment.anchor();
        var angle = (0,deg/* default */.A)(Math.atan2(p2.y - p1.y, p2.x - p1.x));
        var rect = new geometry_rect/* default */.A([ p1.x, p1.y - width / 2 ], [ p1.distanceTo(p2), width ]);
        return rect.containsPoint(point.transformCopy((0,transform/* default */.A)().rotate(-angle, p1)));
    };

    Segment.prototype._isOnPathTo = function _isOnPathTo (segment, point, width, endSegment) {
        var isOnPath;
        if (this.controlOut() && segment.controlIn()) {
            isOnPath = this._isOnCurveTo(segment, point, width / 2, endSegment);
        } else {
            isOnPath = this._isOnLineTo(segment, point, width);
        }
        return isOnPath;
    };

    return Segment;
}((0,with_points/* default */.A)(has_observers/* default */.A, points)));

function arrayLimits(arr) {
    var length = arr.length;
    var min = constants/* MAX_NUM */.eN;
    var max = constants/* MIN_NUM */.uo;

    for (var i = 0; i < length; i ++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    return {
        min: min,
        max: max
    };
}

/* harmony default export */ const segment = (Segment);


/***/ },

/***/ 3257
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13560);


function throttle(fn, delay) {
    var lastExecTime = 0;
    var timeout;

    if (!delay || delay <= 0) {
        return fn;
    }

    var throttled = function() {
        var elapsed = (0,_util_now__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)() - lastExecTime;
        var args = arguments;

        var exec = function() {
            fn.apply(null, args);
            lastExecTime = (0,_util_now__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
        };

        // first execution
        if (!lastExecTime) {
            return exec();
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        if (elapsed > delay) {
            exec();
        } else {
            timeout = setTimeout(exec, delay - elapsed);
        }
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
    };

    return throttled;
}


/***/ },

/***/ 4632
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ arc)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var has_observers = __webpack_require__(33857);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/rad.js
var rad = __webpack_require__(99867);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/deg.js
var deg = __webpack_require__(77152);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/round.js
var round = __webpack_require__(96276);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/with-accessors.js
var with_accessors = __webpack_require__(24097);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/close.js
var math_close = __webpack_require__(67923);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/close-or-less.js


function closeOrLess(a, b, tolerance) {
    return a < b || (0,math_close/* default */.A)(a, b, tolerance);
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var point = __webpack_require__(76786);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersection.js


function lineIntersection(p0, p1, p2, p3) {
    var s1x = p1.x - p0.x;
    var s2x = p3.x - p2.x;
    var s1y = p1.y - p0.y;
    var s2y = p3.y - p2.y;
    var nx = p0.x - p2.x;
    var ny = p0.y - p2.y;
    var d = s1x * s2y - s2x * s1y;
    var s = (s1x * ny - s1y * nx) / d;
    var t = (s2x * ny - s2y * nx) / d;

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return new point/* default */.A(p0.x + t * s1x, p0.y + t * s1y);
    }
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/ellipse-extreme-angles.js
var ellipse_extreme_angles = __webpack_require__(29409);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/constants.js
var constants = __webpack_require__(57757);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var rect = __webpack_require__(85932);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js + 1 modules
var transform = __webpack_require__(95739);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/arc.js














var MAX_INTERVAL = 45;
var pow = Math.pow;
var accessors = [ "radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise" ];

var Arc = (function (superclass) {
    function Arc(center, options) {
        if ( center === void 0 ) center = new point/* default */.A();
        if ( options === void 0 ) options = {};

        superclass.call(this);

        this.setCenter(center);

        this.radiusX = options.radiusX;
        this.radiusY = options.radiusY || options.radiusX;
        this.startAngle = options.startAngle;
        this.endAngle = options.endAngle;
        this.anticlockwise = options.anticlockwise || false;
        this.xRotation = options.xRotation;
    }

    if ( superclass ) Arc.__proto__ = superclass;
    Arc.prototype = Object.create( superclass && superclass.prototype );
    Arc.prototype.constructor = Arc;

    Arc.prototype.clone = function clone () {
        return new Arc(this.center, {
            radiusX: this.radiusX,
            radiusY: this.radiusY,
            startAngle: this.startAngle,
            endAngle: this.endAngle,
            anticlockwise: this.anticlockwise
        });
    };

    Arc.prototype.setCenter = function setCenter (value) {
        this._observerField("center", point/* default */.A.create(value));
        this.geometryChange();
        return this;
    };

    Arc.prototype.getCenter = function getCenter () {
        return this.center;
    };

    Arc.prototype.pointAt = function pointAt (angle) {
        var center = this.center;
        var radian = (0,rad/* default */.A)(angle);

        return new point/* default */.A(
            center.x + this.radiusX * Math.cos(radian),
            center.y + this.radiusY * Math.sin(radian)
        );
    };

    Arc.prototype.curvePoints = function curvePoints () {
        var this$1 = this;

        var startAngle = this.startAngle;
        var dir = this.anticlockwise ? -1 : 1;
        var curvePoints = [ this.pointAt(startAngle) ];
        var interval = this._arcInterval();
        var intervalAngle = interval.endAngle - interval.startAngle;
        var subIntervalsCount = Math.ceil(intervalAngle / MAX_INTERVAL);
        var subIntervalAngle = intervalAngle / subIntervalsCount;
        var currentAngle = startAngle;
        var transformation;
        if (this.xRotation) {
            transformation = (0,transform/* default */.A)().rotate(this.xRotation, this.center);
        }

        for (var i = 1; i <= subIntervalsCount; i++) {
            var nextAngle = currentAngle + dir * subIntervalAngle;
            var points = this$1._intervalCurvePoints(currentAngle, nextAngle, transformation);

            curvePoints.push(points.cp1, points.cp2, points.p2);
            currentAngle = nextAngle;
        }

        return curvePoints;
    };

    Arc.prototype.bbox = function bbox (matrix) {
        var this$1 = this;

        var interval = this._arcInterval();
        var startAngle = interval.startAngle;
        var endAngle = interval.endAngle;
        var extremeAngles = (0,ellipse_extreme_angles/* default */.A)(this.center, this.radiusX, this.radiusY, matrix);
        var extremeX = (0,deg/* default */.A)(extremeAngles.x);
        var extremeY = (0,deg/* default */.A)(extremeAngles.y);
        var endPoint = this.pointAt(endAngle).transformCopy(matrix);
        var currentAngleX = bboxStartAngle(extremeX, startAngle);
        var currentAngleY = bboxStartAngle(extremeY, startAngle);
        var currentPoint = this.pointAt(startAngle).transformCopy(matrix);
        var minPoint = point/* default */.A.min(currentPoint, endPoint);
        var maxPoint = point/* default */.A.max(currentPoint, endPoint);

        while (currentAngleX < endAngle || currentAngleY < endAngle) {
            var currentPointX = (void 0);
            if (currentAngleX < endAngle) {
                currentPointX = this$1.pointAt(currentAngleX).transformCopy(matrix);
                currentAngleX += 90;
            }

            var currentPointY = (void 0);
            if (currentAngleY < endAngle) {
                currentPointY = this$1.pointAt(currentAngleY).transformCopy(matrix);
                currentAngleY += 90;
            }

            currentPoint = new point/* default */.A(currentPointX.x, currentPointY.y);
            minPoint = point/* default */.A.min(minPoint, currentPoint);
            maxPoint = point/* default */.A.max(maxPoint, currentPoint);
        }

        return rect/* default */.A.fromPoints(minPoint, maxPoint);
    };

    Arc.prototype._arcInterval = function _arcInterval () {
        var ref = this;
        var startAngle = ref.startAngle;
        var endAngle = ref.endAngle;
        var anticlockwise = ref.anticlockwise;

        if (anticlockwise) {
            var oldStart = startAngle;
            startAngle = endAngle;
            endAngle = oldStart;
        }

        if (startAngle > endAngle || (anticlockwise && startAngle === endAngle)) {
            endAngle += 360;
        }

        return {
            startAngle: startAngle,
            endAngle: endAngle
        };
    };

    Arc.prototype._intervalCurvePoints = function _intervalCurvePoints (startAngle, endAngle, transformation) {
        var p1 = this.pointAt(startAngle);
        var p2 = this.pointAt(endAngle);
        var p1Derivative = this._derivativeAt(startAngle);
        var p2Derivative = this._derivativeAt(endAngle);
        var t = ((0,rad/* default */.A)(endAngle) - (0,rad/* default */.A)(startAngle)) / 3;
        var cp1 = new point/* default */.A(p1.x + t * p1Derivative.x, p1.y + t * p1Derivative.y);
        var cp2 = new point/* default */.A(p2.x - t * p2Derivative.x, p2.y - t * p2Derivative.y);
        if (transformation) {
            p1.transform(transformation);
            p2.transform(transformation);
            cp1.transform(transformation);
            cp2.transform(transformation);
        }

        return {
            p1: p1,
            cp1: cp1,
            cp2: cp2,
            p2: p2
        };
    };

    Arc.prototype._derivativeAt = function _derivativeAt (angle) {
        var radian = (0,rad/* default */.A)(angle);

        return new point/* default */.A(-this.radiusX * Math.sin(radian), this.radiusY * Math.cos(radian));
    };

    Arc.prototype.containsPoint = function containsPoint (point) {
        var interval = this._arcInterval();
        var intervalAngle = interval.endAngle - interval.startAngle;
        var ref = this;
        var center = ref.center;
        var radiusX = ref.radiusX;
        var radiusY = ref.radiusY;
        var distance = center.distanceTo(point);
        var angleRad = Math.atan2(point.y - center.y, point.x - center.x);
        var pointRadius = (radiusX * radiusY) /
            Math.sqrt(pow(radiusX, 2) * pow(Math.sin(angleRad), 2) + pow(radiusY, 2) * pow(Math.cos(angleRad), 2));
        var startPoint = this.pointAt(this.startAngle).round(constants/* PRECISION */.P);
        var endPoint = this.pointAt(this.endAngle).round(constants/* PRECISION */.P);
        var intersection = lineIntersection(center, point.round(constants/* PRECISION */.P), startPoint, endPoint);
        var containsPoint;

        if (intervalAngle < 180) {
            containsPoint = intersection && closeOrLess(center.distanceTo(intersection), distance) && closeOrLess(distance, pointRadius);
        } else {
            var angle = calculateAngle(center.x, center.y, radiusX, radiusY, point.x, point.y);
            if (angle !== 360) {
                angle = (360 + angle) % 360;
            }

            var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
            containsPoint = (inAngleRange && closeOrLess(distance, pointRadius)) || (!inAngleRange && (!intersection || intersection.equals(point)));
        }
        return containsPoint;
    };

    Arc.prototype._isOnPath = function _isOnPath (point, width) {
        var interval = this._arcInterval();
        var center = this.center;
        var angle = calculateAngle(center.x, center.y, this.radiusX, this.radiusY, point.x, point.y);
        if (angle !== 360) {
            angle = (360 + angle) % 360;
        }

        var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;

        return inAngleRange && this.pointAt(angle).distanceTo(point) <= width;
    };

    Arc.fromPoints = function fromPoints (start, end, rx, ry, largeArc, swipe, rotation) {// eslint-disable-line max-params
        var arcParameters = normalizeArcParameters({
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y,
            rx: rx,
            ry: ry,
            largeArc: largeArc,
            swipe: swipe,
            rotation: rotation
        });

        return new Arc(arcParameters.center, {
            startAngle: arcParameters.startAngle,
            endAngle: arcParameters.endAngle,
            radiusX: arcParameters.radiusX,
            radiusY: arcParameters.radiusY,
            xRotation: arcParameters.xRotation,
            anticlockwise: swipe === 0
        });
    };

    return Arc;
}((0,with_accessors/* default */.A)(has_observers/* default */.A, accessors)));

function calculateAngle(cx, cy, rx, ry, x, y) {
    var cos = (0,round/* default */.A)((x - cx) / rx, 3);
    var sin = (0,round/* default */.A)((y - cy) / ry, 3);

    return (0,round/* default */.A)((0,deg/* default */.A)(Math.atan2(sin, cos)));
}

function normalizeArcParameters(parameters) {
    var x1 = parameters.x1;
    var y1 = parameters.y1;
    var x2 = parameters.x2;
    var y2 = parameters.y2;
    var rx = parameters.rx;
    var ry = parameters.ry;
    var largeArc = parameters.largeArc;
    var swipe = parameters.swipe;
    var rotation = parameters.rotation; if ( rotation === void 0 ) rotation = 0;

    var radians = (0,rad/* default */.A)(rotation);
    var cosine = Math.cos(radians);
    var sine = Math.sin(radians);

    var xT = cosine * (x1 - x2) / 2 + sine * (y1 - y2) / 2;
    var yT = -sine * (x1 - x2) / 2 + cosine * (y1 - y2) / 2;

    var sign = largeArc !== swipe ? 1 : -1;

    var xt2 = Math.pow(xT, 2);
    var yt2 = Math.pow(yT, 2);
    var rx2 = Math.pow(rx, 2);
    var ry2 = Math.pow(ry, 2);

    var delta = xt2 / rx2 + yt2 / ry2;

    if (delta > 1) {
        delta = Math.sqrt(xt2 / rx2 + yt2 / ry2);
        rx = delta * rx;
        rx2 = Math.pow(rx, 2);

        ry = delta * ry;
        ry2 = Math.pow(ry, 2);
    }

    var constT = sign * Math.sqrt((rx2 * ry2 - rx2 * yt2 - ry2 * xt2) / (rx2 * yt2 + ry2 * xt2));
    // due to rounding errors the value could become NaN even after radii correction
    if (isNaN(constT)) {
        constT = 0;
    }

    var cxT = constT * (rx * yT) / ry;
    var cyT = - constT * (ry * xT) / rx;

    var cx = cosine * cxT - sine * cyT + (x1 + x2) / 2;
    var cy = sine * cxT + cosine * cyT + (y1 + y2) / 2;


    var uX = (xT - cxT) / rx;
    var uY = (yT - cyT) / ry;
    var vX = -(xT + cxT) / rx;
    var vY = -(yT + cyT) / ry;

    var startAngle = (uY >= 0 ? 1 : -1) * (0,deg/* default */.A)(Math.acos(uX / Math.sqrt(uX * uX + uY * uY)));

    var angleCosine = (0,round/* default */.A)((uX * vX + uY * vY) / (Math.sqrt(uX * uX + uY * uY) * Math.sqrt(vX * vX + vY * vY)), 10);
    var angle = (uX * vY - uY * vX >= 0 ? 1 : -1) * (0,deg/* default */.A)(Math.acos(angleCosine));

    if (!swipe && angle > 0) {
        angle -= 360;
    }

    if (swipe && angle < 0) {
        angle += 360;
    }
    var endAngle = startAngle + angle;
    var signEndAngle = endAngle >= 0 ? 1 : -1;
    endAngle = (Math.abs(endAngle) % 360) * signEndAngle;

    return {
        center: new point/* default */.A(cx, cy),
        startAngle: startAngle,
        endAngle: endAngle,
        radiusX: rx,
        radiusY: ry,
        xRotation: rotation
    };
}

function bboxStartAngle(angle, start) {
    var startAngle = angle;

    while (startAngle < start) {
        startAngle += 90;
    }

    return startAngle;
}

/* harmony default export */ const arc = (Arc);


/***/ },

/***/ 5865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ defined)
/* harmony export */ });
var UNDEFINED = "undefined";

function defined(value) {
    return typeof value !== UNDEFINED;
}

/***/ },

/***/ 6214
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I$: () => (/* binding */ SOLID),
/* harmony export */   MT: () => (/* binding */ DASH_ARRAYS),
/* harmony export */   SQ: () => (/* binding */ BUTT),
/* harmony export */   XF: () => (/* binding */ PATTERN)
/* harmony export */ });
var DASH_ARRAYS = {
    dot: [ 1.5, 3.5 ],
    dash: [ 4, 3.5 ],
    longdash: [ 8, 3.5 ],
    dashdot: [ 3.5, 3.5, 1.5, 3.5 ],
    longdashdot: [ 8, 3.5, 1.5, 3.5 ],
    longdashdotdot: [ 8, 3.5, 1.5, 3.5, 1.5, 3.5 ]
};

var SOLID = "solid";
var BUTT = "butt";
var PATTERN = "Pattern";




/***/ },

/***/ 8441
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Td: () => (/* binding */ DEG_TO_RAD),
/* harmony export */   eN: () => (/* binding */ MAX_NUM),
/* harmony export */   uo: () => (/* binding */ MIN_NUM)
/* harmony export */ });
var DEG_TO_RAD = Math.PI / 180;
var MAX_NUM = Number.MAX_VALUE;
var MIN_NUM = -Number.MAX_VALUE;



/***/ },

/***/ 8449
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);


var LRUCache = (function (Class) {
    function LRUCache(size) {
        Class.call(this);

        this._size = size;
        this._length = 0;
        this._map = {};
    }

    if ( Class ) LRUCache.__proto__ = Class;
    LRUCache.prototype = Object.create( Class && Class.prototype );
    LRUCache.prototype.constructor = LRUCache;

    LRUCache.prototype.put = function put (key, value) {
        var map = this._map;
        var entry = { key: key, value: value };

        map[key] = entry;

        if (!this._head) {
            this._head = this._tail = entry;
        } else {
            this._tail.newer = entry;
            entry.older = this._tail;
            this._tail = entry;
        }

        if (this._length >= this._size) {
            map[this._head.key] = null;
            this._head = this._head.newer;
            this._head.older = null;
        } else {
            this._length++;
        }
    };

    LRUCache.prototype.get = function get (key) {
        var entry = this._map[key];

        if (entry) {
            if (entry === this._head && entry !== this._tail) {
                this._head = entry.newer;
                this._head.older = null;
            }

            if (entry !== this._tail) {
                if (entry.older) {
                    entry.older.newer = entry.newer;
                    entry.newer.older = entry.older;
                }

                entry.older = this._tail;
                entry.newer = null;

                this._tail.newer = entry;
                this._tail = entry;
            }

            return entry.value;
        }
    };

    return LRUCache;
}(_common__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LRUCache);

/***/ },

/***/ 10030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ encodeBase64)
/* harmony export */ });
/* harmony import */ var _encode_utf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12564);


var KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encodeBase64(input) {
    var output = "";
    var i = 0;

    var utfInput = (0,_encode_utf__WEBPACK_IMPORTED_MODULE_0__/* .encodeUTF8 */ .YH)(input);

    while (i < utfInput.length) {
        var chr1 = utfInput.charCodeAt(i++);
        var chr2 = utfInput.charCodeAt(i++);
        var chr3 = utfInput.charCodeAt(i++);

        var enc1 = chr1 >> 2;
        var enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        var enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        var enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
            KEY_STR.charAt(enc1) + KEY_STR.charAt(enc2) +
            KEY_STR.charAt(enc3) + KEY_STR.charAt(enc4);
    }

    return output;
}

/***/ },

/***/ 11437
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);
/* harmony import */ var _has_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33857);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5865);





var toString = {}.toString;

var OptionsStore = (function (HasObservers) {
    function OptionsStore(options, prefix) {
        var this$1 = this;
        if ( prefix === void 0 ) prefix = "";

        HasObservers.call(this);

        this.prefix = prefix;

        for (var field in options) {
            var member = options[field];
            member = this$1._wrap(member, field);
            this$1[field] = member;
        }
    }

    if ( HasObservers ) OptionsStore.__proto__ = HasObservers;
    OptionsStore.prototype = Object.create( HasObservers && HasObservers.prototype );
    OptionsStore.prototype.constructor = OptionsStore;

    OptionsStore.prototype.get = function get (field) {
        var parts = field.split(".");
        var result = this;

        while (parts.length && result) {
            var part = parts.shift();
            result = result[part];
        }

        return result;
    };

    OptionsStore.prototype.set = function set (field, value) {
        var current = this.get(field);

        if (current !== value) {
            this._set(field, this._wrap(value, field));
            this.optionsChange({
                field: this.prefix + field,
                value: value
            });
        }
    };

    OptionsStore.prototype._set = function _set (field, value) {
        var this$1 = this;

        var composite = field.indexOf(".") >= 0;
        var parentObj = this;
        var fieldName = field;

        if (composite) {
            var parts = fieldName.split(".");
            var prefix = this.prefix;

            while (parts.length > 1) {
                fieldName = parts.shift();
                prefix += fieldName + ".";

                var obj = parentObj[fieldName];

                if (!obj) {
                    obj = new OptionsStore({}, prefix);
                    obj.addObserver(this$1);
                    parentObj[fieldName] = obj;
                }
                parentObj = obj;
            }
            fieldName = parts[0];
        }

        parentObj._clear(fieldName);
        parentObj[fieldName] = value;
    };

    OptionsStore.prototype._clear = function _clear (field) {
        var current = this[field];
        if (current && current.removeObserver) {
            current.removeObserver(this);
        }
    };

    OptionsStore.prototype._wrap = function _wrap (object, field) {
        var type = toString.call(object);
        var wrapped = object;

        if (wrapped !== null && (0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(wrapped) && type === "[object Object]") {
            if (!(object instanceof OptionsStore) && !(object instanceof _common__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)) {
                wrapped = new OptionsStore(wrapped, this.prefix + field + ".");
            }

            wrapped.addObserver(this);
        }

        return wrapped;
    };

    return OptionsStore;
}(_has_observers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsStore);


/***/ },

/***/ 11773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Class = function Class () {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Class);


/***/ },

/***/ 12564
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CH: () => (/* binding */ encodeUTF16BE),
/* harmony export */   YH: () => (/* binding */ encodeUTF8),
/* harmony export */   bh: () => (/* binding */ BOM)
/* harmony export */ });
var fromCharCode = String.fromCharCode;

var BOM = '\xfe\xff';

// Encodes a string as UTF-8
function encodeUTF8(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
        var code = input.charCodeAt(i);

        if (0xD800 <= code && code <= 0xDBFF) {
            var hi = code;
            var low = input.charCodeAt(++i);

            if (!isNaN(low)) {
                // Combine high and low surrogate
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
                code = (hi - 0xD800) * 0x400 +
                       (low - 0xDC00) + 0x10000;
            }
        }

        if (code < 0x80) {
            // One byte
            output += fromCharCode(code);
        } else if (code < 0x800) {
            // Two bytes
            output += fromCharCode(0xC0 | (code >>> 6));
            output += fromCharCode(0x80 | (code & 0x3f));
        } else if (code < 0x10000) {
            // Three bytes
            output += fromCharCode(0xE0 | (code >>> 12));
            output += fromCharCode(0x80 | (code >>> 6 & 0x3f));
            output += fromCharCode(0x80 | (code & 0x3f));
        } else if (code < 0x10FFFF) {
            // Four bytes
            output += fromCharCode(0xF0 | (code >>> 18));
            output += fromCharCode(0x80 | (code >>> 12 & 0x3f));
            output += fromCharCode(0x80 | (code >>> 6 & 0x3f));
            output += fromCharCode(0x80 | (code & 0x3f));
        }
    }

    return output;
}

function encodeUnit(codeUnit) {
    return fromCharCode(codeUnit >> 8) + fromCharCode(codeUnit & 0x00ff);
}

// Encodes a string as UTF-16 big-endian
function encodeUTF16BE(input) {
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);

        if (c < 0xFFFF) {
            output += encodeUnit(c);
        } else {
            var lead = ((c - 0x10000) >> 10) + 0xD800;
            var trail = ((c - 0x10000) & 0x3FF) + 0xDC00;
            output += encodeUnit(lead);
            output += encodeUnit(trail);
        }
    }

    return output;
}


/***/ },

/***/ 13560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var now = Date.now || function() {
    return new Date().getTime();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ },

/***/ 16333
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_has_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33857);


var push = [].push;
var pop = [].pop;
var splice = [].splice;
var shift = [].shift;
var slice = [].slice;
var unshift = [].unshift;

var ElementsArray = (function (HasObservers) {
    function ElementsArray(array) {
        if ( array === void 0 ) array = [];

        HasObservers.call(this);

        this.length = 0;
        this._splice(0, array.length, array);
    }

    if ( HasObservers ) ElementsArray.__proto__ = HasObservers;
    ElementsArray.prototype = Object.create( HasObservers && HasObservers.prototype );
    ElementsArray.prototype.constructor = ElementsArray;

    ElementsArray.prototype.elements = function elements (value) {
        if (value) {
            this._splice(0, this.length, value);

            this._change();
            return this;
        }

        return this.slice(0);
    };

    ElementsArray.prototype.push = function push$1 () {
        var elements = arguments;
        var result = push.apply(this, elements);

        this._add(elements);

        return result;
    };

    ElementsArray.prototype.slice = function slice$1 () {
        return slice.call(this);
    };

    ElementsArray.prototype.pop = function pop$1 () {
        var length = this.length;
        var result = pop.apply(this);

        if (length) {
            this._remove([ result ]);
        }

        return result;
    };

    ElementsArray.prototype.splice = function splice (index, howMany) {
        var elements = slice.call(arguments, 2);
        var result = this._splice(index, howMany, elements);

        this._change();

        return result;
    };

    ElementsArray.prototype.shift = function shift$1 () {
        var length = this.length;
        var result = shift.apply(this);

        if (length) {
            this._remove([ result ]);
        }

        return result;
    };

    ElementsArray.prototype.unshift = function unshift$1 () {
        var elements = arguments;
        var result = unshift.apply(this, elements);

        this._add(elements);

        return result;
    };

    ElementsArray.prototype.indexOf = function indexOf (element) {
        var this$1 = this;

        var length = this.length;

        for (var idx = 0; idx < length; idx++) {
            if (this$1[idx] === element) {
                return idx;
            }
        }
        return -1;
    };

    ElementsArray.prototype._splice = function _splice (index, howMany, elements) {
        var result = splice.apply(this, [ index, howMany ].concat(elements));

        this._clearObserver(result);
        this._setObserver(elements);

        return result;
    };

    ElementsArray.prototype._add = function _add (elements) {
        this._setObserver(elements);
        this._change();
    };

    ElementsArray.prototype._remove = function _remove (elements) {
        this._clearObserver(elements);
        this._change();
    };

    ElementsArray.prototype._setObserver = function _setObserver (elements) {
        var this$1 = this;

        for (var idx = 0; idx < elements.length; idx++) {
            elements[idx].addObserver(this$1);
        }
    };

    ElementsArray.prototype._clearObserver = function _clearObserver (elements) {
        var this$1 = this;

        for (var idx = 0; idx < elements.length; idx++) {
            elements[idx].removeObserver(this$1);
        }
    };

    ElementsArray.prototype._change = function _change () {};

    return ElementsArray;
}(_core_has_observers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementsArray);


/***/ },

/***/ 18187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ measureText)
/* harmony export */ });
/* harmony import */ var _text_metrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59692);


function measureText(text, style, measureBox) {
    return _text_metrics__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.current.measure(text, style, measureBox);
}


/***/ },

/***/ 23368
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ parseColor),
/* harmony export */   Ix: () => (/* binding */ Bytes),
/* harmony export */   WV: () => (/* binding */ HSV),
/* harmony export */   i8: () => (/* binding */ HSL),
/* harmony export */   m0: () => (/* binding */ RGB)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81954);
/* harmony import */ var _named_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50061);




var browser = _support__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.browser;

var matchNamedColor = function (color) {
    var colorNames = Object.keys(_named_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
    colorNames.push("transparent");

    var regexp = new RegExp("^(" + colorNames.join("|") + ")(\\W|$)", "i");
    matchNamedColor = function (color) { return regexp.exec(color); };

    return regexp.exec(color);
};

var BaseColor = (function (Class) {
    function BaseColor() { Class.call(this); }

    if ( Class ) BaseColor.__proto__ = Class;
    BaseColor.prototype = Object.create( Class && Class.prototype );
    BaseColor.prototype.constructor = BaseColor;
    BaseColor.prototype.toHSV = function toHSV () { return this; };

    BaseColor.prototype.toRGB = function toRGB () { return this; };

    BaseColor.prototype.toHex = function toHex (options) { return this.toBytes().toHex(options); };

    BaseColor.prototype.toBytes = function toBytes () { return this; };

    BaseColor.prototype.toCss = function toCss (options) { return "#" + this.toHex(options); };

    BaseColor.prototype.toCssRgba = function toCssRgba () {
        var rgb = this.toBytes();
        return ("rgba(" + (rgb.r) + ", " + (rgb.g) + ", " + (rgb.b) + ", " + (parseFloat((Number(this.a)).toFixed(3))) + ")");
    };

    BaseColor.prototype.toDisplay = function toDisplay () {
        if (browser.msie && browser.version < 9) {
            return this.toCss(); // no RGBA support; does it support any opacity in colors?
        }
        return this.toCssRgba();
    };

    BaseColor.prototype.equals = function equals (c) {
        return c === this || ((c !== null && c !== undefined) && this.toCssRgba() === parseColor(c).toCssRgba());
    };

    BaseColor.prototype.diff = function diff (other) {
        if (other === null) {
            return NaN;
        }

        var c1 = this.toBytes();
        var c2 = other.toBytes();

        return Math.sqrt(Math.pow((c1.r - c2.r) * 0.30, 2) +
                         Math.pow((c1.g - c2.g) * 0.59, 2) +
                         Math.pow((c1.b - c2.b) * 0.11, 2));
    };

    BaseColor.prototype.clone = function clone () {
        var c = this.toBytes();
        if (c === this) {
            c = new Bytes(c.r, c.g, c.b, c.a);
        }

        return c;
    };

    return BaseColor;
}(_class__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

var RGB = (function (BaseColor) {
    function RGB(r, g, b, a) {
        BaseColor.call(this);

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    if ( BaseColor ) RGB.__proto__ = BaseColor;
    RGB.prototype = Object.create( BaseColor && BaseColor.prototype );
    RGB.prototype.constructor = RGB;

    RGB.prototype.toHSV = function toHSV () {
        var ref = this;
        var r = ref.r;
        var g = ref.g;
        var b = ref.b;
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var v = max;
        var h, s;

        if (delta === 0) {
            return new HSV(0, 0, v, this.a);
        }

        if (max !== 0) {
            s = delta / max;
            if (r === max) {
                h = (g - b) / delta;
            } else if (g === max) {
                h = 2 + (b - r) / delta;
            } else {
                h = 4 + (r - g) / delta;
            }

            h *= 60;
            if (h < 0) {
                h += 360;
            }
        } else {
            s = 0;
            h = -1;
        }

        return new HSV(h, s, v, this.a);
    };

    RGB.prototype.toHSL = function toHSL () {
        var ref = this;
        var r = ref.r;
        var g = ref.g;
        var b = ref.b;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
            }
        }

        return new HSL(h * 60, s * 100, l * 100, this.a);
    };

    RGB.prototype.toBytes = function toBytes () {
        return new Bytes(this.r * 255, this.g * 255, this.b * 255, this.a);
    };

    return RGB;
}(BaseColor));

var Bytes = (function (RGB) {
    function Bytes(r, g, b, a) {
        RGB.call(this, Math.round(r), Math.round(g), Math.round(b), a);
    }

    if ( RGB ) Bytes.__proto__ = RGB;
    Bytes.prototype = Object.create( RGB && RGB.prototype );
    Bytes.prototype.constructor = Bytes;

    Bytes.prototype.toRGB = function toRGB () {
        return new RGB(this.r / 255, this.g / 255, this.b / 255, this.a);
    };

    Bytes.prototype.toHSV = function toHSV () {
        return this.toRGB().toHSV();
    };

    Bytes.prototype.toHSL = function toHSL () {
        return this.toRGB().toHSL();
    };

    Bytes.prototype.toHex = function toHex (options) {
        var value = hex(this.r, 2) + hex(this.g, 2) + hex(this.b, 2);

        if (options && options.alpha) {
            value += hex(Math.round(this.a * 255), 2);
        }

        return value;
    };

    Bytes.prototype.toBytes = function toBytes () {
        return this;
    };

    return Bytes;
}(RGB));

function hex(n, width, pad) {
    if ( pad === void 0 ) pad = "0";

    var result = n.toString(16);
    while (width > result.length) {
        result = pad + result;
    }

    return result;
}

var HSV = (function (BaseColor) {
    function HSV(h, s, v, a) {
        BaseColor.call(this);

        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }

    if ( BaseColor ) HSV.__proto__ = BaseColor;
    HSV.prototype = Object.create( BaseColor && BaseColor.prototype );
    HSV.prototype.constructor = HSV;

    HSV.prototype.toRGB = function toRGB () {
        var ref = this;
        var h = ref.h;
        var s = ref.s;
        var v = ref.v;
        var r, g, b;

        if (s === 0) {
            r = g = b = v;
        } else {
            h /= 60;

            var i = Math.floor(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
            case 0: r = v; g = t; b = p; break;
            case 1: r = q; g = v; b = p; break;
            case 2: r = p; g = v; b = t; break;
            case 3: r = p; g = q; b = v; break;
            case 4: r = t; g = p; b = v; break;
            default: r = v; g = p; b = q; break;
            }
        }

        return new RGB(r, g, b, this.a);
    };

    HSV.prototype.toHSL = function toHSL () {
        return this.toRGB().toHSL();
    };

    HSV.prototype.toBytes = function toBytes () {
        return this.toRGB().toBytes();
    };

    return HSV;
}(BaseColor));

var HSL = (function (BaseColor) {
    function HSL(h, s, l, a) {
        BaseColor.call(this);

        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }

    if ( BaseColor ) HSL.__proto__ = BaseColor;
    HSL.prototype = Object.create( BaseColor && BaseColor.prototype );
    HSL.prototype.constructor = HSL;

    HSL.prototype.toRGB = function toRGB () {
        var h = this.h / 360;
        var s = this.s / 100;
        var l = this.l / 100;
        var r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return new RGB(r, g, b, this.a);
    };

    HSL.prototype.toHSV = function toHSV () {
        return this.toRGB().toHSV();
    };

    HSL.prototype.toBytes = function toBytes () {
        return this.toRGB().toBytes();
    };

    return HSL;
}(BaseColor));

function hue2rgb(p, q, s) {
    var t = s;

    if (t < 0) {
        t += 1;
    }

    if (t > 1) {
        t -= 1;
    }

    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
        return q;
    }

    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
}

function alphaFromHex(a) {
    return parseFloat(parseFloat(parseInt(a, 16) / 255 ).toFixed(3));
}



function parseColor(value, safe) {
    var m, ret;

    if (!value || value === "none") {
        return null;
    }

    if (value instanceof BaseColor) {
        return value;
    }

    var color = value.toLowerCase();
    if ((m = matchNamedColor(color))) {
        if (m[1] === "transparent") {
            color = new RGB(1, 1, 1, 0);
        } else {
            color = parseColor(_named_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A[m[1]], safe);
        }
        color.match = [ m[1] ];
        return color;
    }
    if ((m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color))) {
        ret = new Bytes(parseInt(m[1], 16),
            parseInt(m[2], 16),
            parseInt(m[3], 16), 1);
    } else if ((m = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color))) {
        ret = new Bytes(parseInt(m[1] + m[1], 16),
            parseInt(m[2] + m[2], 16),
            parseInt(m[3] + m[3], 16), 1);
    } else if ((m = /^#?([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color))) { // Parse 4 digit hex color
        ret = new Bytes(parseInt(m[1] + m[1], 16),
            parseInt(m[2] + m[2], 16),
            parseInt(m[3] + m[3], 16),
            alphaFromHex(m[4] + m[4]));
    } else if ((m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color))) { // Parse 8 digit hex color
        ret = new Bytes(parseInt(m[1], 16),
            parseInt(m[2], 16),
            parseInt(m[3], 16),
            alphaFromHex(m[4]));
    } else if ((m = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(color))) {
        ret = new Bytes(parseInt(m[1], 10),
            parseInt(m[2], 10),
            parseInt(m[3], 10), 1);
    } else if ((m = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(color))) {
        ret = new Bytes(parseInt(m[1], 10),
            parseInt(m[2], 10),
            parseInt(m[3], 10), parseFloat(m[4]));
    } else if ((m = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(color))) {
        ret = new RGB(parseFloat(m[1]) / 100,
            parseFloat(m[2]) / 100,
            parseFloat(m[3]) / 100, 1);
    } else if ((m = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(color))) {
        ret = new RGB(parseFloat(m[1]) / 100,
            parseFloat(m[2]) / 100,
            parseFloat(m[3]) / 100, parseFloat(m[4]));
    } else if ((m = /^color\(\s*srgb\s*([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s*(\/\s+([0-9]*\.?[0-9]+))?\)/.exec(color))) {
        ret = new RGB(
            parseFloat(m[1]),
            parseFloat(m[2]),
            parseFloat(m[3]),
            parseFloat(m[5] || '1'));
    }

    if (ret) {
        ret.match = m;
    } else if (!safe) {
        throw new Error("Cannot parse color: " + color);
    }

    return ret;
}


/***/ },

/***/ 24097
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function setAccessor(field) {
    return function(value) {
        if (this[field] !== value) {
            this[field] = value;
            this.geometryChange();
        }

        return this;
    };
}

function getAccessor(field) {
    return function() {
        return this[field];
    };
}

function defineAccessors(fn, fields) {
    for (var i = 0; i < fields.length; i++) {
        var name = fields[i];
        var capitalized = name.charAt(0).toUpperCase() +
                          name.substring(1, name.length);

        fn["set" + capitalized] = setAccessor(name);
        fn["get" + capitalized] = getAccessor(name);
    }
}

var withAccessors = function (TBase, names) {
    var result = (function (TBase) {
        function result () {
            TBase.apply(this, arguments);
        }if ( TBase ) result.__proto__ = TBase;
        result.prototype = Object.create( TBase && TBase.prototype );
        result.prototype.constructor = result;

        

        return result;
    }(TBase));
    defineAccessors(result.prototype, names);

    return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAccessors);


/***/ },

/***/ 24211
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);


var BaseNode = (function (Class) {
    function BaseNode(srcElement) {
        Class.call(this);

        this.childNodes = [];
        this.parent = null;

        if (srcElement) {
            this.srcElement = srcElement;
            this.observe();
        }
    }

    if ( Class ) BaseNode.__proto__ = Class;
    BaseNode.prototype = Object.create( Class && Class.prototype );
    BaseNode.prototype.constructor = BaseNode;

    BaseNode.prototype.destroy = function destroy () {
        var this$1 = this;

        if (this.srcElement) {
            this.srcElement.removeObserver(this);
        }

        var children = this.childNodes;
        for (var i = 0; i < children.length; i++) {
            this$1.childNodes[i].destroy();
        }

        this.parent = null;
    };

    BaseNode.prototype.load = function load () {};

    BaseNode.prototype.observe = function observe () {
        if (this.srcElement) {
            this.srcElement.addObserver(this);
        }
    };

    BaseNode.prototype.append = function append (node) {
        this.childNodes.push(node);
        node.parent = this;
    };

    BaseNode.prototype.insertAt = function insertAt (node, pos) {
        this.childNodes.splice(pos, 0, node);
        node.parent = this;
    };

    BaseNode.prototype.remove = function remove (index, count) {
        var this$1 = this;

        var end = index + count;
        for (var i = index; i < end; i++) {
            this$1.childNodes[i].removeSelf();
        }
        this.childNodes.splice(index, count);
    };

    BaseNode.prototype.removeSelf = function removeSelf () {
        this.clear();
        this.destroy();
    };

    BaseNode.prototype.clear = function clear () {
        this.remove(0, this.childNodes.length);
    };

    BaseNode.prototype.invalidate = function invalidate () {
        if (this.parent) {
            this.parent.invalidate();
        }
    };

    BaseNode.prototype.geometryChange = function geometryChange () {
        this.invalidate();
    };

    BaseNode.prototype.optionsChange = function optionsChange () {
        this.invalidate();
    };

    BaseNode.prototype.childrenChange = function childrenChange (e) {
        if (e.action === "add") {
            this.load(e.items, e.index);
        } else if (e.action === "remove") {
            this.remove(e.index, e.items.length);
        }

        this.invalidate();
    };

    return BaseNode;
}(_common__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseNode);

/***/ },

/***/ 29121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75482);
/* harmony import */ var _mixins_traversable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94725);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78142);
/* harmony import */ var _utils_elements_bounding_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57080);
/* harmony import */ var _utils_elements_clippend_bounding_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(312);







var Group = (function (superclass) {
    function Group(options) {
        superclass.call(this, options);
        this.children = [];
    }

    if ( superclass ) Group.__proto__ = superclass;
    Group.prototype = Object.create( superclass && superclass.prototype );
    Group.prototype.constructor = Group;

    var prototypeAccessors = { nodeType: { configurable: true } };

    prototypeAccessors.nodeType.get = function () {
        return "Group";
    };

    Group.prototype.childrenChange = function childrenChange (action, items, index) {
        this.trigger("childrenChange",{
            action: action,
            items: items,
            index: index
        });
    };

    Group.prototype.append = function append$1 () {
        (0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this.children, arguments);
        this._reparent(arguments, this);

        this.childrenChange("add", arguments);

        return this;
    };

    Group.prototype.insert = function insert (index, element) {
        this.children.splice(index, 0, element);
        element.parent = this;

        this.childrenChange("add", [ element ], index);

        return this;
    };

    Group.prototype.insertAt = function insertAt (element, index) {
        return this.insert(index, element);
    };

    Group.prototype.remove = function remove (element) {
        var index = this.children.indexOf(element);
        if (index >= 0) {
            this.children.splice(index, 1);
            element.parent = null;
            this.childrenChange("remove", [ element ], index);
        }

        return this;
    };

    Group.prototype.removeAt = function removeAt (index) {
        if (0 <= index && index < this.children.length) {
            var element = this.children[index];
            this.children.splice(index, 1);
            element.parent = null;
            this.childrenChange("remove", [ element ], index);
        }

        return this;
    };

    Group.prototype.clear = function clear () {
        var items = this.children;
        this.children = [];
        this._reparent(items, null);

        this.childrenChange("remove", items, 0);

        return this;
    };

    Group.prototype.bbox = function bbox (transformation) {
        return (0,_utils_elements_bounding_box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.children, true, this.currentTransform(transformation));
    };

    Group.prototype.rawBBox = function rawBBox () {
        return (0,_utils_elements_bounding_box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.children, false);
    };

    Group.prototype._clippedBBox = function _clippedBBox (transformation) {
        return (0,_utils_elements_clippend_bounding_box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(this.children, this.currentTransform(transformation));
    };

    Group.prototype.currentTransform = function currentTransform (transformation) {
        return _element__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.prototype.currentTransform.call(this, transformation) || null;
    };

    Group.prototype.containsPoint = function containsPoint (point, parentTransform) {
        if (this.visible()) {
            var children = this.children;
            var transform = this.currentTransform(parentTransform);
            for (var idx = 0; idx < children.length; idx++) {
                if (children[idx].containsPoint(point, transform)) {
                    return true;
                }
            }
        }
        return false;
    };

    Group.prototype._reparent = function _reparent (elements, newParent) {
        var this$1 = this;

        for (var i = 0; i < elements.length; i++) {
            var child = elements[i];
            var parent = child.parent;
            if (parent && parent !== this$1 && parent.remove) {
                parent.remove(child);
            }

            child.parent = newParent;
        }
    };

    Object.defineProperties( Group.prototype, prototypeAccessors );

    return Group;
}((0,_mixins_traversable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_element__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, "children")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);

/***/ },

/***/ 29409
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ellipseExtremeAngles)
/* harmony export */ });
function ellipseExtremeAngles(center, rx, ry, matrix) {
    var extremeX = 0;
    var extremeY = 0;

    if (matrix) {
        extremeX = Math.atan2(matrix.c * ry, matrix.a * rx);
        if (matrix.b !== 0) {
            extremeY = Math.atan2(matrix.d * ry, matrix.b * rx);
        }
    }

    return {
        x: extremeX,
        y: extremeY
    };
}

/***/ },

/***/ 29938
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEG_TO_RAD: () => (/* reexport */ constants/* DEG_TO_RAD */.Td),
  LRUCache: () => (/* reexport */ lru_cache/* default */.A),
  MAX_NUM: () => (/* reexport */ constants/* MAX_NUM */.eN),
  MIN_NUM: () => (/* reexport */ constants/* MIN_NUM */.uo),
  TextMetrics: () => (/* reexport */ text_metrics/* default */.A),
  append: () => (/* reexport */ append/* default */.A),
  arabicToRoman: () => (/* reexport */ arabic_to_roman/* default */.A),
  bindEvents: () => (/* reexport */ bind_events/* default */.A),
  createPromise: () => (/* reexport */ create_promise/* default */.A),
  defined: () => (/* reexport */ defined/* default */.A),
  definitionId: () => (/* reexport */ definition_id/* default */.A),
  deg: () => (/* reexport */ deg/* default */.A),
  elementOffset: () => (/* reexport */ element_offset/* default */.A),
  elementPadding: () => (/* reexport */ element_padding/* default */.A),
  elementScale: () => (/* reexport */ element_scale/* default */.A),
  elementSize: () => (/* reexport */ element_size/* default */.A),
  elementStyles: () => (/* reexport */ element_styles/* default */.A),
  encodeBase64: () => (/* reexport */ encode_base64/* default */.A),
  eventCoordinates: () => (/* reexport */ event_coordinates/* default */.A),
  eventElement: () => (/* reexport */ event_element/* default */.A),
  hashKey: () => (/* reexport */ util/* hashKey */.EN),
  isTransparent: () => (/* reexport */ is_transparent/* default */.A),
  last: () => (/* reexport */ last/* default */.A),
  limitValue: () => (/* reexport */ limit_value/* default */.A),
  measureText: () => (/* reexport */ measure_text/* default */.A),
  mergeSort: () => (/* reexport */ merge_sort/* default */.A),
  normalizeText: () => (/* reexport */ util/* normalizeText */.fQ),
  now: () => (/* reexport */ now/* default */.A),
  objectKey: () => (/* reexport */ util/* objectKey */.T5),
  promiseAll: () => (/* reexport */ promise_all/* default */.A),
  rad: () => (/* reexport */ rad/* default */.A),
  round: () => (/* reexport */ round/* default */.A),
  unbindEvents: () => (/* reexport */ unbind_events/* default */.A),
  valueOrDefault: () => (/* reexport */ value_or_default/* default */.A)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/append.js
var append = __webpack_require__(78142);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/arabic-to-roman.js
var arabic_to_roman = __webpack_require__(51618);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/create-promise.js
var create_promise = __webpack_require__(56486);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var defined = __webpack_require__(5865);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/definition-id.js
var definition_id = __webpack_require__(91681);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/deg.js
var deg = __webpack_require__(77152);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/encode-base64.js
var encode_base64 = __webpack_require__(10030);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/event-coordinates.js
var event_coordinates = __webpack_require__(69998);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/event-element.js
var event_element = __webpack_require__(74445);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/is-transparent.js
var is_transparent = __webpack_require__(92273);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/last.js
var last = __webpack_require__(38454);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/limit-value.js
var limit_value = __webpack_require__(85515);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/merge-sort.js
var merge_sort = __webpack_require__(93405);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/now.js
var now = __webpack_require__(13560);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/promise-all.js
var promise_all = __webpack_require__(93015);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/rad.js
var rad = __webpack_require__(99867);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/round.js
var round = __webpack_require__(96276);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/value-or-default.js
var value_or_default = __webpack_require__(80743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/bind-events.js
var bind_events = __webpack_require__(61427);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-offset.js
var element_offset = __webpack_require__(85014);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-size.js
var element_size = __webpack_require__(73728);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-styles.js
var element_styles = __webpack_require__(52883);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/unbind-events.js
var unbind_events = __webpack_require__(91418);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-padding.js
var element_padding = __webpack_require__(84896);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-scale.js
var element_scale = __webpack_require__(80007);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/constants.js
var constants = __webpack_require__(8441);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics/lru-cache.js
var lru_cache = __webpack_require__(8449);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics/text-metrics.js
var text_metrics = __webpack_require__(59692);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics/measure-text.js
var measure_text = __webpack_require__(18187);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics/util.js
var util = __webpack_require__(71999);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics.js





;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util.js






























/***/ },

/***/ 30478
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76786);



function pointAccessor(name) {
    var fieldName = "_" + name;
    return function(value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
            this._observerField(fieldName, _geometry_point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.create(value));
            this.geometryChange();
            return this;
        }

        return this[fieldName];
    };
}

function definePointAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = pointAccessor(names[i]);
    }
}

var withPoints = function (TBase, names) {
    var result = (function (TBase) {
        function result () {
            TBase.apply(this, arguments);
        }if ( TBase ) result.__proto__ = TBase;
        result.prototype = Object.create( TBase && TBase.prototype );
        result.prototype.constructor = result;

        

        return result;
    }(TBase));
    definePointAccessors(result.prototype, names);

    return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPoints);


/***/ },

/***/ 33857
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);


var HasObservers = (function (Class) {
    function HasObservers () {
        Class.apply(this, arguments);
    }

    if ( Class ) HasObservers.__proto__ = Class;
    HasObservers.prototype = Object.create( Class && Class.prototype );
    HasObservers.prototype.constructor = HasObservers;

    HasObservers.prototype.observers = function observers () {
        this._observers = this._observers || [];
        return this._observers;
    };

    HasObservers.prototype.addObserver = function addObserver (element) {
        if (!this._observers) {
            this._observers = [ element ];
        } else {
            this._observers.push(element);
        }
        return this;
    };

    HasObservers.prototype.removeObserver = function removeObserver (element) {
        var observers = this.observers();
        var index = observers.indexOf(element);
        if (index !== -1) {
            observers.splice(index, 1);
        }
        return this;
    };

    HasObservers.prototype.trigger = function trigger (methodName, event) {
        var observers = this._observers;

        if (observers && !this._suspended) {
            for (var idx = 0; idx < observers.length; idx++) {
                var observer = observers[idx];
                if (observer[methodName]) {
                    observer[methodName](event);
                }
            }
        }
        return this;
    };

    HasObservers.prototype.optionsChange = function optionsChange (e) {
        if ( e === void 0 ) e = {};

        e.element = this;
        this.trigger("optionsChange", e);
    };

    HasObservers.prototype.geometryChange = function geometryChange () {
        this.trigger("geometryChange", {
            element: this
        });
    };

    HasObservers.prototype.suspend = function suspend () {
        this._suspended = (this._suspended || 0) + 1;
        return this;
    };

    HasObservers.prototype.resume = function resume () {
        this._suspended = Math.max((this._suspended || 0) - 1, 0);
        return this;
    };

    HasObservers.prototype._observerField = function _observerField (field, value) {
        if (this[field]) {
            this[field].removeObserver(this);
        }
        this[field] = value;
        value.addObserver(this);
    };

    return HasObservers;
}(_common__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HasObservers);



/***/ },

/***/ 38296
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ exportImage)
/* harmony export */ });
/* harmony import */ var _surface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52185);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95739);
/* harmony import */ var _shapes_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29121);




function exportImage(group, options) {
    var defaults = {
        width: "800px", height: "600px",
        cors: "Anonymous"
    };

    var exportRoot = group;
    var bbox = group.clippedBBox();


    if (bbox) {
        var origin = bbox.getOrigin();
        exportRoot = new _shapes_group__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A();
        exportRoot.transform((0,_geometry__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)().translate(-origin.x, -origin.y));
        exportRoot.children.push(group);

        var size = bbox.getSize();
        defaults.width = size.width + "px";
        defaults.height = size.height + "px";
    }

    var surfaceOptions = Object.assign(defaults, options);

    var container = document.createElement("div");
    var style = container.style;

    style.display = "none";
    style.width = surfaceOptions.width;
    style.height = surfaceOptions.height;
    document.body.appendChild(container);

    var surface = new _surface__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(container, surfaceOptions);
    surface.suspendTracking();
    surface.draw(exportRoot);

    var promise = surface.image();
    var destroy = function () {
        surface.destroy();
        document.body.removeChild(container);
    };
    promise.then(destroy, destroy);

    return promise;
}

/***/ },

/***/ 38454
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ last)
/* harmony export */ });
function last(array) {
    if (array) {
        return array[array.length - 1];
    }
}

/***/ },

/***/ 38578
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);
/* harmony import */ var _named_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50061);
/* harmony import */ var _parse_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23368);




var DARK_TRESHOLD = 180;

var Color = (function (Class) {
    function Color(value) {
        var this$1 = this;

        Class.call(this);

        if (arguments.length === 1) {
            var formats = Color.formats;
            var resolvedColor = this.resolveColor(value);

            for (var idx = 0; idx < formats.length; idx++) {
                var formatRegex = formats[idx].re;
                var processor = formats[idx].process;
                var parts = formatRegex.exec(resolvedColor);

                if (parts) {
                    var channels = processor(parts);
                    this$1.r = channels[0];
                    this$1.g = channels[1];
                    this$1.b = channels[2];
                }
            }
        } else {
            this.r = arguments[0];
            this.g = arguments[1];
            this.b = arguments[2];
        }

        this.r = this.normalizeByte(this.r);
        this.g = this.normalizeByte(this.g);
        this.b = this.normalizeByte(this.b);
    }

    if ( Class ) Color.__proto__ = Class;
    Color.prototype = Object.create( Class && Class.prototype );
    Color.prototype.constructor = Color;

    Color.prototype.toHex = function toHex () {
        var pad = this.padDigit;
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);

        return "#" + pad(r) + pad(g) + pad(b);
    };

    Color.prototype.resolveColor = function resolveColor (value) {
        var color = value || "black";

        if (color.charAt(0) === "#") {
            color = color.substr(1, 6);
        }

        color = color.replace(/ /g, "");
        color = color.toLowerCase();
        color = Color.namedColors[color] || color;

        return color;
    };

    Color.prototype.normalizeByte = function normalizeByte (value) {
        if (value < 0 || isNaN(value)) {
            return 0;
        }

        return value > 255 ? 255 : value;
    };

    Color.prototype.padDigit = function padDigit (value) {
        return (value.length === 1) ? "0" + value : value;
    };

    Color.prototype.brightness = function brightness (value) {
        var round = Math.round;

        this.r = round(this.normalizeByte(this.r * value));
        this.g = round(this.normalizeByte(this.g * value));
        this.b = round(this.normalizeByte(this.b * value));

        return this;
    };

    Color.prototype.percBrightness = function percBrightness () {
        return Math.sqrt(0.241 * this.r * this.r + 0.691 * this.g * this.g + 0.068 * this.b * this.b);
    };

    Color.prototype.isDark = function isDark () {
        return this.percBrightness() < DARK_TRESHOLD;
    };

    Color.fromBytes = function fromBytes (r, g, b, a) {
        return new _parse_color__WEBPACK_IMPORTED_MODULE_2__/* .Bytes */ .Ix(r, g, b, a != null ? a : 1);
    };

    Color.fromRGB = function fromRGB (r, g, b, a) {
        return new _parse_color__WEBPACK_IMPORTED_MODULE_2__/* .RGB */ .m0(r, g, b, a != null ? a : 1);
    };

    Color.fromHSV = function fromHSV (h, s, v, a) {
        return new _parse_color__WEBPACK_IMPORTED_MODULE_2__/* .HSV */ .WV(h, s, v, a != null ? a : 1);
    };

    Color.fromHSL = function fromHSL (h, s, l, a) {
        return new _parse_color__WEBPACK_IMPORTED_MODULE_2__/* .HSL */ .i8(h, s, l, a != null ? a : 1);
    };

    return Color;
}(_class__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

Color.formats = [ {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    process: function(parts) {
        return [
            parseInt(parts[1], 10), parseInt(parts[2], 10), parseInt(parts[3], 10)
        ];
    }
}, {
    re: /^(\w{2})(\w{2})(\w{2})$/,
    process: function(parts) {
        return [
            parseInt(parts[1], 16), parseInt(parts[2], 16), parseInt(parts[3], 16)
        ];
    }
}, {
    re: /^(\w{1})(\w{1})(\w{1})$/,
    process: function(parts) {
        return [
            parseInt(parts[1] + parts[1], 16),
            parseInt(parts[2] + parts[2], 16),
            parseInt(parts[3] + parts[3], 16)
        ];
    }
} ];

Color.namedColors = _named_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);

/***/ },

/***/ 38853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53419);
/* harmony import */ var _geometry_to_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61377);



var IDENTITY_MATRIX_HASH = _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.IDENTITY.toString();

var measurable = function (TBase) { return (
    (function (TBase) {
        function anonymous () {
            TBase.apply(this, arguments);
        }

        if ( TBase ) anonymous.__proto__ = TBase;
        anonymous.prototype = Object.create( TBase && TBase.prototype );
        anonymous.prototype.constructor = anonymous;

        anonymous.prototype.bbox = function bbox (transformation) {
            var combinedMatrix = (0,_geometry_to_matrix__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this.currentTransform(transformation));
            var matrixHash = combinedMatrix ? combinedMatrix.toString() : IDENTITY_MATRIX_HASH;
            var bbox;

            if (this._bboxCache && this._matrixHash === matrixHash) {
                bbox = this._bboxCache.clone();
            } else {
                bbox = this._bbox(combinedMatrix);
                this._bboxCache = bbox ? bbox.clone() : null;
                this._matrixHash = matrixHash;
            }

            var strokeWidth = this.options.get("stroke.width");
            if (strokeWidth && bbox) {
                bbox.expand(strokeWidth / 2);
            }

            return bbox;
        };

        anonymous.prototype.geometryChange = function geometryChange () {
            delete this._bboxCache;
            this.trigger("geometryChange", {
                element: this
            });
        };

        return anonymous;
    }(TBase))
); };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (measurable);

/***/ },

/***/ 41012
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PI: () => (/* binding */ replaceStyleAttr),
  dW: () => (/* binding */ restoreStyleAttr),
  mA: () => (/* binding */ setInnerHTML),
  eC: () => (/* binding */ setStyle)
});

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/util.js
/**
 * @hidden
 */
var isWindowAvailable = function () {
    return typeof window !== 'undefined';
};

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/support.js
/* tslint:disable:object-literal-sort-keys max-line-length */

var agentRxs = {
    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)(\.(\d+(\.\d+)?))?/,
    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
};
var osRxs = {
    ios: /^i(phone|pad|pod)$/i,
    android: /^android|fire$/i,
    blackberry: /^blackberry|playbook/i,
    windows: /windows/,
    wp: /wp/,
    flat: /sailfish|ffos|tizen/i,
    meego: /meego/
};
var desktopBrowserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
var mobileBrowserRxs = {
    omini: /Opera\sMini/i,
    omobile: /Opera\sMobi/i,
    firefox: /Firefox|Fennec/i,
    mobilesafari: /version\/.*safari/i,
    ie: /MSIE|Windows\sPhone/i,
    chrome: /chrome|crios/i,
    webkit: /webkit/i
};
var testRx = function (agent, rxs, dflt) {
    for (var rx in rxs) {
        if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
            return rx;
        }
    }
    return dflt !== undefined ? dflt : agent;
};
/**
 * A function that detects the mobile browser based on the given UserAgent.
 *
 * @param ua - The user agent string.
 * @returns - A browser info object containing the browser type and version.
 *
 * @example
 * ```ts-no-run
 * const userAgent = 'Mozilla/5.0 (Linux; Android 8.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.3 Chrome/61.0.3163.81 Mobile Safari/537.36';
 * detectMobileOS(userAgent); // { android: true };
 * ```
 */
var detectMobileOS = function (ua) {
    var minorVersion;
    var match = [];
    for (var agent in agentRxs) {
        if (agentRxs.hasOwnProperty(agent)) {
            match = ua.match(agentRxs[agent]);
            if (!match) {
                continue;
            }
            if (agent === 'windows' && 'plugins' in window.navigator) {
                return null;
            } // Break if not Metro/Mobile Windows
            var os = {};
            os.device = agent;
            os.browser = testRx(ua, mobileBrowserRxs, 'default');
            os.name = testRx(agent, osRxs);
            os[os.name] = true;
            os.majorVersion = match[2];
            os.minorVersion = match[3] ? match[3].replace('_', '.') : '.0';
            minorVersion = os.minorVersion.replace('.', '').substr(0, 2);
            os.flatVersion = os.majorVersion + minorVersion +
                (new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join('0'));
            os.cordova = typeof window.PhoneGap !== undefined
                || typeof window.cordova !== undefined; // Use file protocol to detect appModes.
            os.appMode = window.navigator.standalone
                || (/file|local|wmapp/).test(window.location.protocol)
                || os.cordova; // Use file protocol to detect appModes.
            return os;
        }
    }
    return null;
};
/**
 * A function that detects the desktop browser based on the given UserAgent.
 *
 * @param ua - The user agent string.
 * @returns - A browser info object containing the browser type and version.
 *
 * @example
 * ```ts-no-run
 * const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19';
 * detectDesktopBrowser(userAgent); // { chrome: true, webkit: true };
 * ```
 */
var detectDesktopBrowser = function (ua) {
    var browserInfo = null;
    var match = [];
    for (var agent in desktopBrowserRxs) {
        if (desktopBrowserRxs.hasOwnProperty(agent)) {
            match = ua.match(desktopBrowserRxs[agent]);
            if (match) {
                browserInfo = {};
                browserInfo[agent] = true;
                browserInfo[match[1].toLowerCase().split(' ')[0].split('/')[0]] = true;
                browserInfo.version = parseInt(document.documentMode || match[2], 10);
                break;
            }
        }
    }
    return browserInfo;
};
var userAgent = isWindowAvailable() && window.navigator ? window.navigator.userAgent : null;
/**
 * A constant holding the desktop browser info. The variable persists the result of the detectDesktopBrowser(window.navigator.userAgent) call.
 * If no desktop browser is detected, the constant will be `null`.
 */
var browser = userAgent ? detectDesktopBrowser(userAgent) : null;
/**
 * A constant holding the mobile OS info. The variable persists the result of the detectMobileOS(window.navigator.userAgent) call.
 * If no mobile OS is detected, the constant will be `null`.
 */
var mobileOS = userAgent ? detectMobileOS(userAgent) : null;
/**
 * A constant reporting the browser `touch` events support.
 */
var touch = isWindowAvailable() && 'ontouchstart' in window;
/**
 * @hidden
 * A constant reporting the browser `msPointers` events support.
 */
var msPointers = browser && !browser.chrome && window.MSPointerEvent;
/**
 * A constant reporting the browser `pointers` events support.
 */
var pointers = browser && !browser.chrome && window.PointerEvent;
/**
 * A constant reporting whether the browser is touch enabled.
 */
var touchEnabled = (/* unused pure expression or super */ null && (mobileOS && (touch || msPointers || pointers)));

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/accessors/getter.js

var getterCache = {};
// tslint:disable-next-line:no-string-literal
getterCache['undefined'] = function (obj) { return obj; };
/**
 * @hidden
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

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/accessors/setter.js

var setterCache = {};
// tslint:disable-next-line:no-string-literal
setterCache['undefined'] = function (obj) { return obj; };
var defaultValue = function (nextField, options) {
    return options && options.arrays && !isNaN(Number(nextField)) ? [] : {};
};
/**
 * @hidden
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

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/parse-style.js
var reComment = /\/\*[\s\S]*?\*\//g;
/*
([^\s:;]+?)\s*:\s*         # Property name and colon
(
  (?:
    (?:                    # Begin alternation
      url\(                # Match 'url('
        \s*
        (?:
          (?:[^"')\\]|\\.)*  # Content inside url(), excluding quotes and closing parenthesis
          |
          "(?:[^"\\]|\\.)*"  # Double-quoted strings, handling escaped characters
          |
          '(?:[^'\\]|\\.)*'  # Single-quoted strings, handling escaped characters
        )
        \s*
      \)
      |
      "(?:[^"\\]|\\.)*"     # Double-quoted strings, handling escaped characters
      |
      '(?:[^'\\]|\\.)*'     # Single-quoted strings, handling escaped characters
      |
      [^;"']                # Any character except ';', double or single quotes
    )*?                     # Repeat zero or more times, non-greedy
    \s*
  )
)
(?=;|$)                     # Lookahead for ';' or end of string
*/
var reDeclaration = /([^\s:;]+?)\s*:\s*((?:(?:url\(\s*(?:(?:[^"')\\]|\\.)*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^;"'])*?)\s*)(?=;|$)/gi;
var reDoubleQuoted = /&quot;|&#34;|&#x22;/gi;
var reSingleQuoted = /&apos;|&#39;|&#x27;/gi;
var doubleQuote = '"';
var singleQuote = "'";
var empty = '';
function replaceQuoteEntities(str) {
    return str.replace(reDoubleQuoted, doubleQuote)
        .replace(reSingleQuoted, singleQuote);
}
/**
 * Parse inline styles string into object.
 *
 * @param styleString - inline styles string
 * @returns object with styles
 */
function parseInlineStyles(styleString) {
    var styleObject = {};
    var input = replaceQuoteEntities((styleString || empty).replace(reComment, empty));
    var match = reDeclaration.exec(input), property, value;
    while (match !== null) {
        property = match[1].trim();
        value = match[2].trim();
        styleObject[property] = value;
        match = reDeclaration.exec(input);
    }
    return styleObject;
}

;// ../node_modules/.pnpm/@progress+kendo-common@1.0.2/node_modules/@progress/kendo-common/dist/es/main.js





;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-set-styles-safe.js


var setStyle = function (element, styleString) {
    var styles = parseInlineStyles(styleString);
    Object.keys(styles).forEach(function (key) {
        element.style[key] = styles[key];
    });
};

var styleAttr = 'data-style';
var replaceStyleAttr = function (html) { return (html || '').replace(/\sstyle=/g, ' ' + styleAttr + '='); };
var restoreStyleAttr = function (container) {
    Array.from(container.querySelectorAll('[' + styleAttr +']')).forEach(function (element) {
        var styleString = element.getAttribute(styleAttr);
        element.removeAttribute(styleAttr);
        setStyle(element, styleString);
    });
};

var setInnerHTML = function (container, html) {
    container.innerHTML = replaceStyleAttr(html);
    restoreStyleAttr(container);
};


/***/ },

/***/ 44945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);


function geometryAccessor(name) {
    var fieldName = "_" + name;
    return function(value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
            this._observerField(fieldName, value);
            this.geometryChange();
            return this;
        }

        return this[fieldName];
    };
}

function defineGeometryAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = geometryAccessor(names[i]);
    }
}

var withGeometry = function (TBase, names) {
    if ( names === void 0 ) names = [ "geometry" ];

    var result = (function (TBase) {
        function result () {
            TBase.apply(this, arguments);
        }if ( TBase ) result.__proto__ = TBase;
        result.prototype = Object.create( TBase && TBase.prototype );
        result.prototype.constructor = result;

        

        return result;
    }(TBase));
    defineGeometryAccessors(result.prototype, names);

    return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withGeometry);


/***/ },

/***/ 46774
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ surface)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/group.js
var group = __webpack_require__(29121);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var geometry_point = __webpack_require__(76786);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/class.js
var common_class = __webpack_require__(11773);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/observable.js


var Observable = (function (Class) {
    function Observable() {
        Class.call(this);

        this._events = {};
    }

    if ( Class ) Observable.__proto__ = Class;
    Observable.prototype = Object.create( Class && Class.prototype );
    Observable.prototype.constructor = Observable;

    Observable.prototype.bind = function bind (eventName, handlers, one) {
        var arguments$1 = arguments;
        var this$1 = this;

        var eventNames = getArray(eventName);
        var handlersIsFunction = isFunction(handlers);
        var length = eventNames.length;

        if (handlers === undefined) {
            for (var field in eventName) {
                this$1.bind(field, eventName[field]);
            }
            return this;
        }

        var loop = function ( idx ) {
            var eventName$1 = eventNames[idx];

            var handler = handlersIsFunction ? handlers : handlers[eventName$1];

            if (handler) {
                if (one) {
                    var original = handler;
                    handler = function () { // eslint-disable-line no-loop-func
                        this$1.unbind(eventName$1, handler);
                        original.apply(this$1, arguments$1);
                    };
                    handler.original = original;
                }
                var events = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
                events.push(handler);
            }
        };

        for (var idx = 0; idx < length; idx++) loop( idx );

        return this;
    };

    Observable.prototype.one = function one (eventNames, handlers) {
        return this.bind(eventNames, handlers, true);
    };

    Observable.prototype.first = function first (eventName, handlers) {
        var this$1 = this;

        var eventNames = getArray(eventName);
        var handlersIsFunction = isFunction(handlers);

        for (var idx = 0, length = eventNames.length; idx < length; idx++) {
            var eventName$1 = eventNames[idx];

            var handler = handlersIsFunction ? handlers : handlers[eventName$1];

            if (handler) {
                var events = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
                events.unshift(handler);
            }
        }

        return this;
    };

    Observable.prototype.trigger = function trigger (eventName, e) {
        var this$1 = this;
        if ( e === void 0 ) e = {};

        var events = this._events[eventName];

        if (events) {
            var length = events.length;

            e.sender = this;
            e._defaultPrevented = false;
            e.preventDefault = preventDefault;
            e.isDefaultPrevented = isDefaultPrevented;

            events = events.slice();

            for (var idx = 0; idx < length; idx++) {
                events[idx].call(this$1, e);
            }

            return e._defaultPrevented === true;
        }

        return false;
    };

    Observable.prototype.unbind = function unbind (eventName, handler) {
        var events = this._events[eventName];

        if (eventName === undefined) {
            this._events = {};
        } else if (events) {
            if (handler) {
                for (var idx = events.length - 1; idx >= 0; idx--) {
                    if (events[idx] === handler || events[idx].original === handler) {
                        events.splice(idx, 1);
                    }
                }
            } else {
                this._events[eventName] = [];
            }
        }

        return this;
    };

    return Observable;
}(common_class/* default */.A));

function isFunction(value) {
    return typeof value === "function";
}

function getArray(value) {
    return typeof value === "string" ? [ value ] : value;
}

function preventDefault() {
    this._defaultPrevented = true;
}

function isDefaultPrevented() {
    return this._defaultPrevented === true;
}

/* harmony default export */ const observable = (Observable);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-size.js
var element_size = __webpack_require__(73728);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/event-element.js
var event_element = __webpack_require__(74445);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-padding.js
var element_padding = __webpack_require__(84896);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-offset.js
var element_offset = __webpack_require__(85014);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/event-coordinates.js
var event_coordinates = __webpack_require__(69998);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-scale.js
var element_scale = __webpack_require__(80007);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/surface.js





var events = [
    "click",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "resize"
];

var Surface = (function (Observable) {
    function Surface(element, options) {
        Observable.call(this);

        this.options = Object.assign({}, options);
        this.element = element;
        this.element._kendoExportVisual = this.exportVisual.bind(this);

        this._click = this._handler("click");
        this._mouseenter = this._handler("mouseenter");
        this._mouseleave = this._handler("mouseleave");
        this._mousemove = this._handler("mousemove");

        this._visual = new group/* default */.A();

        (0,element_size/* default */.A)(element, this.options);

        this.bind(events, this.options);

        this._enableTracking();
    }

    if ( Observable ) Surface.__proto__ = Observable;
    Surface.prototype = Object.create( Observable && Observable.prototype );
    Surface.prototype.constructor = Surface;

    Surface.prototype.draw = function draw (element) {
        this._visual.children.push(element);
    };

    Surface.prototype.clear = function clear () {
        this._visual.children = [];
    };

    Surface.prototype.destroy = function destroy () {
        this._visual = null;
        this.element._kendoExportVisual = null;
        this.unbind();
    };

    Surface.prototype.eventTarget = function eventTarget (e) {
        var this$1 = this;

        var domNode = (0,event_element/* default */.A)(e);
        var node;

        while (!node && domNode) {
            node = domNode._kendoNode;
            if (domNode === this$1.element) {
                break;
            }

            domNode = domNode.parentElement;
        }

        if (node) {
            return node.srcElement;
        }
    };

    Surface.prototype.exportVisual = function exportVisual () {
        return this._visual;
    };

    Surface.prototype.getSize = function getSize () {
        return (0,element_size/* default */.A)(this.element);
    };

    Surface.prototype.currentSize = function currentSize (size) {
        if (size) {
            this._size = size;
        } else {
            return this._size;
        }
    };

    Surface.prototype.setSize = function setSize (size) {
        (0,element_size/* default */.A)(this.element, size);

        this.currentSize(size);
        this._resize();
    };

    Surface.prototype.resize = function resize (force) {
        var size = this.getSize();
        var currentSize = this.currentSize();

        if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
            this.currentSize(size);
            this._resize(size, force);
            this.trigger("resize", size);
        }
    };

    Surface.prototype.size = function size (value) {
        if (!value) {
            return this.getSize();
        }

        this.setSize(value);
    };

    Surface.prototype.suspendTracking = function suspendTracking () {
        this._suspendedTracking = true;
    };

    Surface.prototype.resumeTracking = function resumeTracking () {
        this._suspendedTracking = false;
    };

    Surface.prototype._enableTracking = function _enableTracking () {};

    Surface.prototype._resize = function _resize () {};

    Surface.prototype._handler = function _handler (eventName) {
        var this$1 = this;

        return function (e) {
            var node = this$1.eventTarget(e);
            if (node && !this$1._suspendedTracking) {
                this$1.trigger(eventName, {
                    element: node,
                    originalEvent: e,
                    type: eventName
                });
            }
        };
    };

    Surface.prototype._elementOffset = function _elementOffset () {
        var element = this.element;
        var padding = (0,element_padding/* default */.A)(element);
        var ref = (0,element_offset/* default */.A)(element);
        var left = ref.left;
        var top = ref.top;

        return {
            left: left + padding.left,
            top: top + padding.top
        };
    };

    Surface.prototype._surfacePoint = function _surfacePoint (e) {
        var offset = this._elementOffset();
        var coord = (0,event_coordinates/* default */.A)(e);
        var x = coord.x - offset.left;
        var y = coord.y - offset.top;

        var inverseTransform = (0,element_scale/* default */.A)(this.element).invert();
        var point = new geometry_point/* default */.A(
            x,
            y
        ).transform(inverseTransform);

        return point;
    };

    return Surface;
}(observable));

/* harmony default export */ const surface = (Surface);


/***/ },

/***/ 48506
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ MultiPath),
  w: () => (/* binding */ Path)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/elements-array.js
var elements_array = __webpack_require__(16333);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/geometry-elements-array.js


var GeometryElementsArray = (function (ElementsArray) {
    function GeometryElementsArray () {
        ElementsArray.apply(this, arguments);
    }

    if ( ElementsArray ) GeometryElementsArray.__proto__ = ElementsArray;
    GeometryElementsArray.prototype = Object.create( ElementsArray && ElementsArray.prototype );
    GeometryElementsArray.prototype.constructor = GeometryElementsArray;

    GeometryElementsArray.prototype._change = function _change () {
        this.geometryChange();
    };

    return GeometryElementsArray;
}(elements_array/* default */.A));

/* harmony default export */ const geometry_elements_array = (GeometryElementsArray);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/element.js
var shapes_element = __webpack_require__(75482);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/segment.js + 7 modules
var geometry_segment = __webpack_require__(1039);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var geometry_point = __webpack_require__(76786);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/last.js
var last = __webpack_require__(38454);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/round.js
var round = __webpack_require__(96276);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/utils/points-to-curve.js



var WEIGHT = 0.333;
var EXTREMUM_ALLOWED_DEVIATION = 0.01;
var X = "x";
var Y = "y";

function pointsToCurve(pointsIn, closed) {
    var points = pointsIn.slice(0);
    var segments = [];
    var length = points.length;

    if (length > 2) {
        removeDuplicates(0, points);
        length = points.length;
    }

    if (length < 2 || (length === 2 && points[0].equals(points[1]))) {
        return segments;
    }

    var p0 = points[0];
    var p1 = points[1];
    var p2 = points[2];

    segments.push(new geometry_segment/* default */.A(p0));

    while (p0.equals(points[length - 1])) {
        closed = true;
        points.pop();
        length--;
    }

    if (length === 2) {
        var tangent = getTangent(p0,p1, X, Y);

        (0,last/* default */.A)(segments).controlOut(
            firstControlPoint(tangent, p0, p1, X, Y)
        );

        segments.push(new geometry_segment/* default */.A(
            p1,
            secondControlPoint(tangent, p0, p1, X, Y)
        ));

        return segments;
    }

    var initialControlPoint, lastControlPoint;

    if (closed) {
        p0 = points[length - 1]; p1 = points[0]; p2 = points[1];
        var controlPoints = getControlPoints(p0, p1, p2);
        initialControlPoint = controlPoints[1];
        lastControlPoint = controlPoints[0];
    } else {
        var tangent$1 = getTangent(p0, p1, X,Y);
        initialControlPoint = firstControlPoint(tangent$1, p0, p1, X, Y);
    }

    var cp0 = initialControlPoint;
    for (var idx = 0; idx <= length - 3; idx++) {
        removeDuplicates(idx, points);
        length = points.length;
        if (idx + 3 <= length) {
            p0 = points[idx]; p1 = points[idx + 1]; p2 = points[idx + 2];
            var controlPoints$1 = getControlPoints(p0,p1,p2);

            (0,last/* default */.A)(segments).controlOut(cp0);
            cp0 = controlPoints$1[1];

            var cp1 = controlPoints$1[0];
            segments.push(new geometry_segment/* default */.A(p1, cp1));
        }
    }

    if (closed) {
        p0 = points[length - 2]; p1 = points[length - 1]; p2 = points[0];
        var controlPoints$2 = getControlPoints(p0, p1, p2);

        (0,last/* default */.A)(segments).controlOut(cp0);
        segments.push(new geometry_segment/* default */.A(
            p1,
            controlPoints$2[0]
        ));

        (0,last/* default */.A)(segments).controlOut(controlPoints$2[1]);
        segments.push(new geometry_segment/* default */.A(
            p2,
            lastControlPoint
        ));
    } else {
        var tangent$2 = getTangent(p1, p2, X, Y);

        (0,last/* default */.A)(segments).controlOut(cp0);
        segments.push(new geometry_segment/* default */.A(
            p2,
            secondControlPoint(tangent$2, p1, p2, X, Y)
        ));
    }

    return segments;
}

function pointsToClosedCurve(pointsIn) {
    return pointsToCurve(pointsIn, true);
}

function removeDuplicates(idx, points) {
    while (points[idx + 1] && (points[idx].equals(points[idx + 1]) || points[idx + 1].equals(points[idx + 2]))) {
        points.splice(idx + 1, 1);
    }
}

function invertAxis(p0, p1, p2) {
    var invertAxis = false;

    if (p0.x === p1.x) {
        invertAxis = true;
    } else if (p1.x === p2.x) {
        if ((p1.y < p2.y && p0.y <= p1.y) || (p2.y < p1.y && p1.y <= p0.y)) {
            invertAxis = true;
        }
    } else {
        var fn = lineFunction(p0,p1);
        var y2 = calculateFunction(fn, p2.x);
        if (!(p0.y <= p1.y && p2.y <= y2) &&
            !(p1.y <= p0.y && p2.y >= y2)) {
            invertAxis = true;
        }
    }

    return invertAxis;
}

function isLine(p0, p1, p2) {
    var fn = lineFunction(p0, p1);
    var y2 = calculateFunction(fn, p2.x);

    return (p0.x === p1.x && p1.x === p2.x) || (0,round/* default */.A)(y2, 1) === (0,round/* default */.A)(p2.y, 1);
}

function lineFunction(p1, p2) {
    var a = (p2.y - p1.y) / (p2.x - p1.x);
    var b = p1.y - a * p1.x;

    return [ b, a ];
}

function getControlPoints(p0, p1, p2) {
    var xField = X;
    var yField = Y;
    var restrict = false;
    var switchOrientation = false;
    var tangent;

    if (isLine(p0, p1, p2)) {
        tangent = getTangent(p0, p1, X, Y);
    } else {
        var monotonic = {
            x: isMonotonicByField(p0, p1, p2, X),
            y: isMonotonicByField(p0, p1, p2, Y)
        };

        if (monotonic.x && monotonic.y) {
            tangent = getTangent(p0, p2, X, Y);
            restrict = true;
        } else {
            if (invertAxis(p0, p1, p2)) {
                xField = Y;
                yField = X;
            }

            if (monotonic[xField]) {
                tangent = 0;
            } else {
                var sign;
                if ((p2[yField] < p0[yField] && p0[yField] <= p1[yField]) ||
                    (p0[yField] < p2[yField] && p1[yField] <= p0[yField])) {
                    sign = numberSign((p2[yField] - p0[yField]) * (p1[xField] - p0[xField]));
                } else {
                    sign = -numberSign((p2[xField] - p0[xField]) * (p1[yField] - p0[yField]));
                }

                tangent = EXTREMUM_ALLOWED_DEVIATION * sign;
                switchOrientation = true;
            }
        }
    }

    var secondCP = secondControlPoint(tangent, p0, p1, xField, yField);

    if (switchOrientation) {
        var oldXField = xField;
        xField = yField;
        yField = oldXField;
    }

    var firstCP = firstControlPoint(tangent, p1, p2, xField, yField);

    if (restrict) {
        restrictControlPoint(p0, p1, secondCP, tangent);
        restrictControlPoint(p1, p2, firstCP, tangent);
    }

    return [ secondCP, firstCP ];
}

function restrictControlPoint(p1, p2, cp, tangent) {
    if (p1.y < p2.y) {
        if (p2.y < cp.y) {
            cp.x = p1.x + (p2.y - p1.y) / tangent;
            cp.y = p2.y;
        } else if (cp.y < p1.y) {
            cp.x = p2.x - (p2.y - p1.y) / tangent;
            cp.y = p1.y;
        }
    } else {
        if (cp.y < p2.y) {
            cp.x = p1.x - (p1.y - p2.y) / tangent;
            cp.y = p2.y;
        } else if (p1.y < cp.y) {
            cp.x = p2.x + (p1.y - p2.y) / tangent;
            cp.y = p1.y;
        }
    }
}

function getTangent(p0, p1, xField, yField) {
    var x = p1[xField] - p0[xField];
    var y = p1[yField] - p0[yField];
    var tangent;

    if (x === 0) {
        tangent = 0;
    } else {
        tangent = y / x;
    }

    return tangent;
}

function isMonotonicByField(p0, p1, p2, field) {
    return (p2[field] > p1[field] && p1[field] > p0[field]) ||
                (p2[field] < p1[field] && p1[field] < p0[field]);
}

function firstControlPoint(tangent, p0, p3, xField, yField) {
    var t1 = p0[xField];
    var t2 = p3[xField];
    var distance = (t2 - t1) * WEIGHT;

    return point(t1 + distance, p0[yField] + distance * tangent, xField, yField);
}

function secondControlPoint(tangent, p0, p3, xField, yField) {
    var t1 = p0[xField];
    var t2 = p3[xField];
    var distance = (t2 - t1) * WEIGHT;

    return point(t2 - distance, p3[yField] - distance * tangent, xField, yField);
}

function point(xValue, yValue, xField, yField) {
    var controlPoint = new geometry_point/* default */.A();
    controlPoint[xField] = xValue;
    controlPoint[yField] = yValue;

    return controlPoint;
}

function calculateFunction(fn, x) {
    var length = fn.length;
    var result = 0;

    for (var i = 0; i < length; i++) {
        result += Math.pow(x,i) * fn[i];
    }
    return result;
}

function numberSign(value) {
    return value <= 0 ? -1 : 1;
}

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/paintable.js
var paintable = __webpack_require__(69866);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/measurable.js
var measurable = __webpack_require__(38853);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/arc.js + 2 modules
var geometry_arc = __webpack_require__(4632);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var rect = __webpack_require__(85932);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/size.js
var size = __webpack_require__(57011);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersections-count.js
var line_intersections_count = __webpack_require__(97704);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var defined = __webpack_require__(5865);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/rad.js
var rad = __webpack_require__(99867);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/parsing/shape-map.js



var ShapeMap = {
    l: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;

        for (var i = 0; i < parameters.length; i += 2) {
            var point = new geometry_point/* default */.A(parameters[i], parameters[i + 1]);

            if (options.isRelative) {
                point.translateWith(position);
            }

            path.lineTo(point.x, point.y);

            position.x = point.x;
            position.y = point.y;
        }
    },

    c: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;

        for (var i = 0; i < parameters.length; i += 6) {
            var controlOut = new geometry_point/* default */.A(parameters[i], parameters[i + 1]);
            var controlIn = new geometry_point/* default */.A(parameters[i + 2], parameters[i + 3]);
            var point = new geometry_point/* default */.A(parameters[i + 4], parameters[i + 5]);
            if (options.isRelative) {
                controlIn.translateWith(position);
                controlOut.translateWith(position);
                point.translateWith(position);
            }

            path.curveTo(controlOut, controlIn, point);

            position.x = point.x;
            position.y = point.y;
        }
    },

    v: function(path, options) {
        var value = options.isRelative ? 0 : options.position.x;

        toLineParamaters(options.parameters, true, value);
        this.l(path, options);
    },

    h: function(path, options) {
        var value = options.isRelative ? 0 : options.position.y;

        toLineParamaters(options.parameters, false, value);
        this.l(path, options);
    },

    a: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;

        for (var i = 0; i < parameters.length; i += 7) {
            var radiusX = parameters[i];
            var radiusY = parameters[i + 1];
            var rotation = parameters[i + 2];
            var largeArc = parameters[i + 3];
            var swipe = parameters[i + 4];
            var endPoint = new geometry_point/* default */.A(parameters[i + 5], parameters[i + 6]);

            if (options.isRelative) {
                endPoint.translateWith(position);
            }
            if (position.x !== endPoint.x || position.y !== endPoint.y) {
                path.arcTo(endPoint, radiusX, radiusY, largeArc, swipe, rotation);

                position.x = endPoint.x;
                position.y = endPoint.y;
            }
        }
    },

    s: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;
        var previousCommand = options.previousCommand;
        var lastControlIn;

        if (previousCommand === "s" || previousCommand === "c") {
            lastControlIn = (0,last/* default */.A)((0,last/* default */.A)(path.paths).segments).controlIn();
        }

        for (var i = 0; i < parameters.length; i += 4) {
            var controlIn = new geometry_point/* default */.A(parameters[i], parameters[i + 1]);
            var endPoint = new geometry_point/* default */.A(parameters[i + 2], parameters[i + 3]);
            var controlOut = (void 0);

            if (options.isRelative) {
                controlIn.translateWith(position);
                endPoint.translateWith(position);
            }

            if (lastControlIn) {
                controlOut = reflectionPoint(lastControlIn, position);
            } else {
                controlOut = position.clone();
            }

            lastControlIn = controlIn;

            path.curveTo(controlOut, controlIn, endPoint);

            position.x = endPoint.x;
            position.y = endPoint.y;
        }
    },

    q: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;

        for (var i = 0; i < parameters.length; i += 4) {
            var controlPoint = new geometry_point/* default */.A(parameters[i], parameters[i + 1]);
            var endPoint = new geometry_point/* default */.A(parameters[i + 2], parameters[i + 3]);

            if (options.isRelative) {
                controlPoint.translateWith(position);
                endPoint.translateWith(position);
            }

            var cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);

            path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);

            position.x = endPoint.x;
            position.y = endPoint.y;
        }
    },

    t: function(path, options) {
        var parameters = options.parameters;
        var position = options.position;
        var previousCommand = options.previousCommand;
        var controlPoint;

        if (previousCommand === "q" || previousCommand === "t") {
            var lastSegment = (0,last/* default */.A)((0,last/* default */.A)(path.paths).segments);
            controlPoint = lastSegment.controlIn().clone()
                .translateWith(position.scaleCopy(-1 / 3))
                .scale(3 / 2);
        }

        for (var i = 0; i < parameters.length; i += 2) {
            var endPoint = new geometry_point/* default */.A(parameters[i], parameters[i + 1]);
            if (options.isRelative) {
                endPoint.translateWith(position);
            }

            if (controlPoint) {
                controlPoint = reflectionPoint(controlPoint, position);
            } else {
                controlPoint = position.clone();
            }

            var cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);

            path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);

            position.x = endPoint.x;
            position.y = endPoint.y;
        }
    }
};

function toLineParamaters(parameters, isVertical, value) {
    var insertPosition = isVertical ? 0 : 1;

    for (var i = 0; i < parameters.length; i += 2) {
        parameters.splice(i + insertPosition, 0, value);
    }
}

function reflectionPoint(point, center) {
    if (point && center) {
        return center.scaleCopy(2).translate(-point.x, -point.y);
    }
}

var third = 1 / 3;

function quadraticToCubicControlPoints(position, controlPoint, endPoint) {
    var scaledPoint = controlPoint.clone().scale(2 / 3);
    return {
        controlOut: scaledPoint.clone().translateWith(position.scaleCopy(third)),
        controlIn: scaledPoint.translateWith(endPoint.scaleCopy(third))
    };
}

/* harmony default export */ const shape_map = (ShapeMap);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/parsing/parse-path.js



var SEGMENT_REGEX = /([a-df-z]{1})([^a-df-z]*)(z)?/gi;
var SPLIT_REGEX = /[,\s]?([+\-]?(?:\d*\.\d+|\d+)(?:[eE][+\-]?\d+)?)/g;
var MOVE = "m";
var CLOSE = "z";

function parseParameters(str) {
    var parameters = [];
    str.replace(SPLIT_REGEX, function(match, number) {
        parameters.push(parseFloat(number));
    });
    return parameters;
}

function parsePath(pathInstance, str) {
    var position = new geometry_point/* default */.A();
    var previousCommand;

    str.replace(SEGMENT_REGEX, function (match, element, params, closePath) {
        var command = element.toLowerCase();
        var isRelative = command === element;
        var parameters = parseParameters(params.trim());

        if (command === MOVE) {
            if (isRelative) {
                position.x += parameters[0];
                position.y += parameters[1];
            } else {
                position.x = parameters[0];
                position.y = parameters[1];
            }

            pathInstance.moveTo(position.x, position.y);

            if (parameters.length > 2) {
                command = "l";
                parameters.splice(0, 2);
            }
        }

        if (shape_map[command]) {
            shape_map[command](
                pathInstance, {
                    parameters: parameters,
                    position: position,
                    isRelative: isRelative,
                    previousCommand: previousCommand
                }
            );

            if (closePath && closePath.toLowerCase() === CLOSE) {
                pathInstance.close();
            }
        } else if (command !== MOVE) {
            throw new Error("Error while parsing SVG path. Unsupported command: " + command);
        }

        previousCommand = command;
    });

    return pathInstance;
}

/* harmony default export */ const parse_path = (parsePath);


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-bounding-box.js
var elements_bounding_box = __webpack_require__(57080);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-clippend-bounding-box.js
var elements_clippend_bounding_box = __webpack_require__(312);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/limit-value.js
var limit_value = __webpack_require__(85515);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/path.js

















var SPACE = ' ';
var printPoints = function (precision) { return function () {
    var points = [], len = arguments.length;
    while ( len-- ) points[ len ] = arguments[ len ];

    return points.map(function (p) { return p.toString(precision); }).join(SPACE);
// removed by dead control flow
 }    };
var segmentType = function (segmentStart, segmentEnd) { return segmentStart.controlOut() && segmentEnd.controlIn() ? 'C' : 'L'; };

var Path = (function (superclass) {
    function Path(options) {
        superclass.call(this, options);
        this.segments = new geometry_elements_array();
        this.segments.addObserver(this);

        if (!(0,defined/* default */.A)(this.options.stroke)) {
            this.stroke('#000');

            if (!(0,defined/* default */.A)(this.options.stroke.lineJoin)) {
                this.options.set('stroke.lineJoin', 'miter');
            }
        }
    }

    if ( superclass ) Path.__proto__ = superclass;
    Path.prototype = Object.create( superclass && superclass.prototype );
    Path.prototype.constructor = Path;

    var prototypeAccessors = { nodeType: { configurable: true } };

    prototypeAccessors.nodeType.get = function () {
        return 'Path';
    };

    Path.prototype.moveTo = function moveTo (x, y) {
        this.suspend();
        this.segments.elements([]);
        this.resume();

        this.lineTo(x, y);

        return this;
    };

    Path.prototype.lineTo = function lineTo (x, y) {
        var point = (0,defined/* default */.A)(y) ? new geometry_point/* default */.A(x, y) : x;
        var segment = new geometry_segment/* default */.A(point);

        this.segments.push(segment);

        return this;
    };

    Path.prototype.curveTo = function curveTo (controlOut, controlIn, point) {
        if (this.segments.length > 0) {
            var lastSegment = (0,last/* default */.A)(this.segments);
            var segment = new geometry_segment/* default */.A(point, controlIn);
            this.suspend();
            lastSegment.controlOut(controlOut);
            this.resume();

            this.segments.push(segment);
        }

        return this;
    };

    Path.prototype.arc = function arc (startAngle, endAngle, radiusX, radiusY, anticlockwise) {
        if (this.segments.length > 0) {
            var lastSegment = (0,last/* default */.A)(this.segments);
            var anchor = lastSegment.anchor();
            var start = (0,rad/* default */.A)(startAngle);
            var center = new geometry_point/* default */.A(anchor.x - radiusX * Math.cos(start),
                anchor.y - radiusY * Math.sin(start));
            var arc = new geometry_arc/* default */.A(center, {
                startAngle: startAngle,
                endAngle: endAngle,
                radiusX: radiusX,
                radiusY: radiusY,
                anticlockwise: anticlockwise
            });

            this._addArcSegments(arc);
        }

        return this;
    };

    Path.prototype.arcTo = function arcTo (end, rx, ry, largeArc, swipe, rotation) {
        if (this.segments.length > 0) {
            var lastSegment = (0,last/* default */.A)(this.segments);
            var anchor = lastSegment.anchor();
            var arc = geometry_arc/* default */.A.fromPoints(anchor, geometry_point/* default */.A.create(end), rx, ry, largeArc, swipe, rotation);

            this._addArcSegments(arc);
        }
        return this;
    };

    Path.prototype._addArcSegments = function _addArcSegments (arc) {
        var this$1 = this;

        this.suspend();

        var curvePoints = arc.curvePoints();

        for (var i = 1; i < curvePoints.length; i += 3) {
            this$1.curveTo(curvePoints[i], curvePoints[i + 1], curvePoints[i + 2]);
        }

        this.resume();
        this.geometryChange();
    };

    Path.prototype.close = function close () {
        this.options.closed = true;
        this.geometryChange();

        return this;
    };

    Path.prototype.rawBBox = function rawBBox () {
        return this._bbox();
    };

    Path.prototype.toString = function toString (digits) {
        var output = '';

        var segments = this.segments;
        var length = segments.length;
        if (length > 0) {
            var parts = [];
            var print = printPoints(digits);
            var currentType;

            for (var i = 1; i < length; i++) {
                var type = segmentType(segments[i - 1], segments[i]);
                if (type !== currentType) {
                    currentType = type;
                    parts.push(type);
                }

                if (type === 'L') {
                    parts.push(print(segments[i].anchor()));
                } else {
                    parts.push(print(
                        segments[i - 1].controlOut(), segments[i].controlIn(), segments[i].anchor()
                    ));
                }
            }

            output = 'M' + print(segments[0].anchor()) + SPACE + parts.join(SPACE);
            if (this.options.closed) {
                output += 'Z';
            }
        }

        return output;
    };

    Path.prototype._containsPoint = function _containsPoint (point) {
        var segments = this.segments;
        var length = segments.length;
        var intersectionsCount = 0;
        var previous, current;

        for (var idx = 1; idx < length; idx++) {
            previous = segments[idx - 1];
            current = segments[idx];
            intersectionsCount += previous._intersectionsTo(current, point);
        }

        if (this.options.closed || !segments[0].anchor().equals(segments[length - 1].anchor())) {
            intersectionsCount += (0,line_intersections_count/* default */.A)(segments[0].anchor(), segments[length - 1].anchor(), point);
        }

        return intersectionsCount % 2 !== 0;
    };

    Path.prototype._isOnPath = function _isOnPath (point, width) {
        var segments = this.segments;
        var length = segments.length;
        var pathWidth = width || this.options.stroke.width;

        if (length > 1) {
            if (segments[0]._isOnPathTo(segments[1], point, pathWidth, 'start')) {
                return true;
            }

            for (var idx = 2; idx <= length - 2; idx++) {
                if (segments[idx - 1]._isOnPathTo(segments[idx], point, pathWidth)) {
                    return true;
                }
            }

            if (segments[length - 2]._isOnPathTo(segments[length - 1], point, pathWidth, 'end')) {
                return true;
            }
        }
        return false;
    };

    Path.prototype._bbox = function _bbox (matrix) {
        var segments = this.segments;
        var length = segments.length;
        var boundingBox;

        if (length === 1) {
            var anchor = segments[0].anchor().transformCopy(matrix);
            boundingBox = new rect/* default */.A(anchor, size/* default */.A.ZERO);
        } else if (length > 0) {
            for (var i = 1; i < length; i++) {
                var segmentBox = segments[i - 1].bboxTo(segments[i], matrix);
                if (boundingBox) {
                    boundingBox = rect/* default */.A.union(boundingBox, segmentBox);
                } else {
                    boundingBox = segmentBox;
                }
            }
        }

        return boundingBox;
    };

    Path.parse = function parse (str, options) {
        return MultiPath.parse(str, options);
    };

    Path.fromRect = function fromRect (rect, options) {
        var path = new Path(options);
        var ref = rect.cornerRadius;
        var rx = ref[0];
        var ry = ref[1];

        if (rx === 0 && ry === 0) {
            path.moveTo(rect.topLeft())
                .lineTo(rect.topRight())
                .lineTo(rect.bottomRight())
                .lineTo(rect.bottomLeft())
                .close();
        } else {
            var origin = rect.origin;
            var x = origin.x;
            var y = origin.y;
            var width = rect.width();
            var height = rect.height();
            rx = (0,limit_value/* default */.A)(rx, 0, width / 2);
            ry = (0,limit_value/* default */.A)(ry, 0, height / 2);

            path.moveTo(x + rx, y)
                .lineTo(x + width - rx, y)
                .arcTo([ x + width, y + ry ], rx, ry, false)
                .lineTo(x + width, y + height - ry)
                .arcTo([ x + width - rx, y + height ], rx, ry, false)
                .lineTo(x + rx, y + height)
                .arcTo([ x, y + height - ry ], rx, ry, false)
                .lineTo(x, y + ry)
                .arcTo([ x + rx, y ], rx, ry, false);
        }

        return path;
    };

    Path.fromPoints = function fromPoints (points, options) {
        if (points) {
            var path = new Path(options);

            for (var i = 0; i < points.length; i++) {
                var point = geometry_point/* default */.A.create(points[i]);
                if (point) {
                    if (i === 0) {
                        path.moveTo(point);
                    } else {
                        path.lineTo(point);
                    }
                }
            }

            return path;
        }
    };

    Path.curveFromPoints = function curveFromPoints (points, options) {
        if (points) {
            var segments = pointsToCurve(points);
            var path = new Path(options);
            path.segments.push.apply(path.segments, segments);

            return path;
        }
    };

    Path.fromArc = function fromArc (arc, options) {
        var path = new Path(options);
        var startAngle = arc.startAngle;
        var start = arc.pointAt(startAngle);
        path.moveTo(start.x, start.y);
        path.arc(startAngle, arc.endAngle, arc.radiusX, arc.radiusY, arc.anticlockwise);
        return path;
    };

    Object.defineProperties( Path.prototype, prototypeAccessors );

    return Path;
}((0,paintable/* default */.A)((0,measurable/* default */.A)(shapes_element/* default */.A))));

var MultiPath = (function (superclass) {
    function MultiPath(options) {
        superclass.call(this, options);
        this.paths = new geometry_elements_array();
        this.paths.addObserver(this);

        if (!(0,defined/* default */.A)(this.options.stroke)) {
            this.stroke('#000');
        }
    }

    if ( superclass ) MultiPath.__proto__ = superclass;
    MultiPath.prototype = Object.create( superclass && superclass.prototype );
    MultiPath.prototype.constructor = MultiPath;

    var prototypeAccessors$1 = { nodeType: { configurable: true } };

    MultiPath.parse = function parse (str, options) {
        var instance = new MultiPath(options);
        return parse_path(instance, str);
    };

    MultiPath.prototype.toString = function toString (digits) {
        var paths = this.paths;
        var output = '';

        if (paths.length > 0) {
            var result = [];

            for (var i = 0; i < paths.length; i++) {
                result.push(paths[i].toString(digits));
            }

            output = result.join(SPACE);
        }

        return output;
    };

    prototypeAccessors$1.nodeType.get = function () {
        return 'MultiPath';
    };

    MultiPath.prototype.moveTo = function moveTo (x, y) {
        var path = new Path();
        path.moveTo(x, y);

        this.paths.push(path);

        return this;
    };

    MultiPath.prototype.lineTo = function lineTo (x, y) {
        if (this.paths.length > 0) {
            (0,last/* default */.A)(this.paths).lineTo(x, y);
        }

        return this;
    };

    MultiPath.prototype.curveTo = function curveTo (controlOut, controlIn, point) {
        if (this.paths.length > 0) {
            (0,last/* default */.A)(this.paths).curveTo(controlOut, controlIn, point);
        }

        return this;
    };

    MultiPath.prototype.arc = function arc (startAngle, endAngle, radiusX, radiusY, anticlockwise) {
        if (this.paths.length > 0) {
            (0,last/* default */.A)(this.paths).arc(startAngle, endAngle, radiusX, radiusY, anticlockwise);
        }

        return this;
    };

    MultiPath.prototype.arcTo = function arcTo (end, rx, ry, largeArc, swipe, rotation) {
        if (this.paths.length > 0) {
            (0,last/* default */.A)(this.paths).arcTo(end, rx, ry, largeArc, swipe, rotation);
        }

        return this;
    };

    MultiPath.prototype.close = function close () {
        if (this.paths.length > 0) {
            (0,last/* default */.A)(this.paths).close();
        }

        return this;
    };

    MultiPath.prototype._bbox = function _bbox (matrix) {
        return (0,elements_bounding_box/* default */.A)(this.paths, true, matrix);
    };

    MultiPath.prototype.rawBBox = function rawBBox () {
        return (0,elements_bounding_box/* default */.A)(this.paths, false);
    };

    MultiPath.prototype._containsPoint = function _containsPoint (point) {
        var paths = this.paths;

        for (var idx = 0; idx < paths.length; idx++) {
            if (paths[idx]._containsPoint(point)) {
                return true;
            }
        }
        return false;
    };

    MultiPath.prototype._isOnPath = function _isOnPath (point) {
        var paths = this.paths;
        var width = this.options.stroke.width;

        for (var idx = 0; idx < paths.length; idx++) {
            if (paths[idx]._isOnPath(point, width)) {
                return true;
            }
        }
        return false;
    };

    MultiPath.prototype._clippedBBox = function _clippedBBox (transformation) {
        return (0,elements_clippend_bounding_box/* default */.A)(this.paths, this.currentTransform(transformation));
    };

    Object.defineProperties( MultiPath.prototype, prototypeAccessors$1 );

    return MultiPath;
}((0,paintable/* default */.A)((0,measurable/* default */.A)(shapes_element/* default */.A))));



/***/ },

/***/ 50061
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var namedColors = {
    aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff",
    aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc",
    bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd",
    blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a",
    burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00",
    chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed",
    cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff",
    darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b",
    darkgray: "a9a9a9", darkgrey: "a9a9a9", darkgreen: "006400",
    darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f",
    darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000",
    darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b",
    darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1",
    darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff",
    dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff",
    firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22",
    fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff",
    gold: "ffd700", goldenrod: "daa520", gray: "808080",
    grey: "808080", green: "008000", greenyellow: "adff2f",
    honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c",
    indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c",
    lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00",
    lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080",
    lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3",
    lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1",
    lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa",
    lightslategray: "778899", lightslategrey: "778899", lightsteelblue: "b0c4de",
    lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32",
    linen: "faf0e6", magenta: "ff00ff", maroon: "800000",
    mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3",
    mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585",
    midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1",
    moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080",
    oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23",
    orange: "ffa500", orangered: "ff4500", orchid: "da70d6",
    palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee",
    palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9",
    peru: "cd853f", pink: "ffc0cb", plum: "dda0dd",
    powderblue: "b0e0e6", purple: "800080", red: "ff0000",
    rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513",
    salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57",
    seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0",
    skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090",
    slategrey: "708090", snow: "fffafa", springgreen: "00ff7f",
    steelblue: "4682b4", tan: "d2b48c", teal: "008080",
    thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0",
    violet: "ee82ee", wheat: "f5deb3", white: "ffffff",
    whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32"
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (namedColors);

/***/ },

/***/ 51618
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ arabicToRoman)
/* harmony export */ });
/* eslint-disable key-spacing,no-multi-spaces,no-param-reassign */

var literals = {
    1    : "i",       10   : "x",       100  : "c",
    2    : "ii",      20   : "xx",      200  : "cc",
    3    : "iii",     30   : "xxx",     300  : "ccc",
    4    : "iv",      40   : "xl",      400  : "cd",
    5    : "v",       50   : "l",       500  : "d",
    6    : "vi",      60   : "lx",      600  : "dc",
    7    : "vii",     70   : "lxx",     700  : "dcc",
    8    : "viii",    80   : "lxxx",    800  : "dccc",
    9    : "ix",      90   : "xc",      900  : "cm",
    1000 : "m"
};

function arabicToRoman(n) {
    var values = [ 1000,
        900 , 800, 700, 600, 500, 400, 300, 200, 100,
        90  , 80 , 70 , 60 , 50 , 40 , 30 , 20 , 10 ,
        9   , 8  , 7  , 6  , 5  , 4  , 3  , 2  , 1 ];

    var roman = "";
    while (n > 0) {
        if (n < values[0]) {
            values.shift();
        } else {
            roman += literals[values[0]];
            n -= values[0];
        }
    }
    return roman;
}


/***/ },

/***/ 52185
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ canvas_surface)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/surface.js + 1 modules
var surface = __webpack_require__(46774);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-size.js
var element_size = __webpack_require__(73728);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/bind-events.js
var bind_events = __webpack_require__(61427);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/unbind-events.js
var unbind_events = __webpack_require__(91418);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/create-promise.js
var create_promise = __webpack_require__(56486);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/promise-all.js
var promise_all = __webpack_require__(93015);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/base-node.js
var base_node = __webpack_require__(24211);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/node-map.js
var NODE_MAP = {};

/* harmony default export */ const node_map = (NODE_MAP);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var defined = __webpack_require__(5865);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/node.js




var Node = (function (BaseNode) {
    function Node(srcElement) {
        BaseNode.call(this, srcElement);
        if (srcElement) {
            this.initClip();
        }
    }

    if ( BaseNode ) Node.__proto__ = BaseNode;
    Node.prototype = Object.create( BaseNode && BaseNode.prototype );
    Node.prototype.constructor = Node;

    Node.prototype.initClip = function initClip () {
        var clip = this.srcElement.clip();
        if (clip) {
            this.clip = clip;
            clip.addObserver(this);
        }
    };

    Node.prototype.clear = function clear () {
        if (this.srcElement) {
            this.srcElement.removeObserver(this);
        }

        this.clearClip();

        BaseNode.prototype.clear.call(this);
    };

    Node.prototype.clearClip = function clearClip () {
        if (this.clip) {
            this.clip.removeObserver(this);
            delete this.clip;
        }
    };

    Node.prototype.setClip = function setClip (ctx) {
        if (this.clip) {
            ctx.beginPath();

            var clipNode = new node_map[this.clip.nodeType](this.clip);
            clipNode.renderPoints(ctx, this.clip);

            ctx.clip("evenodd");
        }
    };

    Node.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "clip") {
            this.clearClip();
            this.initClip();
        }

        BaseNode.prototype.optionsChange.call(this, e);
    };

    Node.prototype.setTransform = function setTransform (ctx) {
        if (this.srcElement) {
            var transform = this.srcElement.transform();
            if (transform) {
                ctx.transform.apply(ctx, transform.matrix().toArray(6));
            }
        }
    };

    Node.prototype.loadElements = function loadElements (elements, pos, cors) {
        var this$1 = this;

        for (var i = 0; i < elements.length; i++) {
            var srcElement = elements[i];
            var children = srcElement.children;

            var childNode = new node_map[srcElement.nodeType](srcElement, cors);

            if (children && children.length > 0) {
                childNode.load(children, pos, cors);
            }

            if ((0,defined/* default */.A)(pos)) {
                this$1.insertAt(childNode, pos);
            } else {
                this$1.append(childNode);
            }
        }
    };

    Node.prototype.load = function load (elements, pos, cors) {
        this.loadElements(elements, pos, cors);

        this.invalidate();
    };

    Node.prototype.setOpacity = function setOpacity (ctx) {
        if (this.srcElement) {
            var opacity = this.srcElement.opacity();
            if ((0,defined/* default */.A)(opacity)) {
                this.globalAlpha(ctx, opacity);
            }
        }
    };

    Node.prototype.globalAlpha = function globalAlpha (ctx, value) {
        var opactity = value;
        if (opactity && ctx.globalAlpha) {
            opactity *= ctx.globalAlpha;
        }
        ctx.globalAlpha = opactity;
    };

    Node.prototype.visible = function visible () {
        var src = this.srcElement;
        return !src || (src && src.options.visible !== false);
    };

    return Node;
}(base_node/* default */.A));

/* harmony default export */ const node = (Node);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/traversable.js
var traversable = __webpack_require__(94725);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/group-node.js




var GroupNode = (function (superclass) {
    function GroupNode () {
        superclass.apply(this, arguments);
    }

    if ( superclass ) GroupNode.__proto__ = superclass;
    GroupNode.prototype = Object.create( superclass && superclass.prototype );
    GroupNode.prototype.constructor = GroupNode;

    GroupNode.prototype.renderTo = function renderTo (ctx) {
        if (!this.visible()) {
            return;
        }

        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        var childNodes = this.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            if (child.visible()) {
                child.renderTo(ctx);
            }
        }

        ctx.restore();
    };

    return GroupNode;
}((0,traversable/* default */.A)(node, "childNodes")));

/* harmony default export */ const group_node = (GroupNode);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/throttle.js
var throttle = __webpack_require__(3257);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/animation-frame.js
var animation_frame = __webpack_require__(80427);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/root-node.js





var FRAME_DELAY = 1000 / 60;

var RootNode = (function (superclass) {
    function RootNode(canvas, size) {
        superclass.call(this);

        this.canvas = canvas;
        this.size = size;
        this.ctx = canvas.getContext("2d");

        var invalidateHandler = this._invalidate.bind(this);
        this.invalidate = (0,throttle/* default */.A)(function () {
            (0,animation_frame/* default */.A)(invalidateHandler);
        }, FRAME_DELAY);
    }

    if ( superclass ) RootNode.__proto__ = superclass;
    RootNode.prototype = Object.create( superclass && superclass.prototype );
    RootNode.prototype.constructor = RootNode;

    RootNode.prototype.destroy = function destroy () {
        superclass.prototype.destroy.call(this);
        this.canvas = null;
        this.ctx = null;
    };

    RootNode.prototype.load = function load (elements, pos, cors) {
        this.loadElements(elements, pos, cors);
        this._invalidate();
    };

    RootNode.prototype._rescale = function _rescale (scale) {
        var ref = this;
        var canvas = ref.canvas;
        var size = ref.size;
        canvas.width = size.width * scale;
        canvas.height = size.height * scale;
        this.ctx.scale(scale, scale);
    };

    RootNode.prototype._devicePixelRatio = function _devicePixelRatio () {
        if (typeof window.devicePixelRatio === 'number') {
            return window.devicePixelRatio;
        }

        return 1;
    };

    RootNode.prototype._invalidate = function _invalidate (options) {
        if (!this.ctx) {
            return;
        }

        var fixedScale = options && options.fixedScale;
        var scale = fixedScale ? 1 : this._devicePixelRatio();
        this._rescale(scale);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderTo(this.ctx);
    };

    return RootNode;
}((0,traversable/* default */.A)(group_node, "childNodes")));

/* harmony default export */ const root_node = (RootNode);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/class.js
var common_class = __webpack_require__(11773);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/search/quad-root.js


var QuadRoot = (function (Class) {
    function QuadRoot() {
        Class.call(this);

        this.shapes = [];
    }

    if ( Class ) QuadRoot.__proto__ = Class;
    QuadRoot.prototype = Object.create( Class && Class.prototype );
    QuadRoot.prototype.constructor = QuadRoot;

    QuadRoot.prototype._add = function _add (shape, bbox) {
        this.shapes.push({
            bbox: bbox,
            shape: shape
        });
        shape._quadNode = this;
    };

    QuadRoot.prototype.pointShapes = function pointShapes (point) {
        var shapes = this.shapes;
        var length = shapes.length;
        var result = [];
        for (var idx = 0; idx < length; idx++) {
            if (shapes[idx].bbox.containsPoint(point)) {
                result.push(shapes[idx].shape);
            }
        }
        return result;
    };

    QuadRoot.prototype.insert = function insert (shape, bbox) {
        this._add(shape, bbox);
    };

    QuadRoot.prototype.remove = function remove (shape) {
        var shapes = this.shapes;
        var length = shapes.length;

        for (var idx = 0; idx < length; idx++) {
            if (shapes[idx].shape === shape) {
                shapes.splice(idx, 1);
                break;
            }
        }
    };

    return QuadRoot;
}(common_class/* default */.A));

/* harmony default export */ const quad_root = (QuadRoot);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var geometry_rect = __webpack_require__(85932);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/append.js
var append = __webpack_require__(78142);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/search/quad-node.js




var QuadNode = (function (QuadRoot) {
    function QuadNode(rect) {
        QuadRoot.call(this);
        this.children = [];
        this.rect = rect;
    }

    if ( QuadRoot ) QuadNode.__proto__ = QuadRoot;
    QuadNode.prototype = Object.create( QuadRoot && QuadRoot.prototype );
    QuadNode.prototype.constructor = QuadNode;

    QuadNode.prototype.inBounds = function inBounds (rect) {
        var nodeRect = this.rect;
        var nodeBottomRight = nodeRect.bottomRight();
        var bottomRight = rect.bottomRight();
        var inBounds = nodeRect.origin.x <= rect.origin.x && nodeRect.origin.y <= rect.origin.y && bottomRight.x <= nodeBottomRight.x &&
            bottomRight.y <= nodeBottomRight.y;
        return inBounds;
    };

    QuadNode.prototype.pointShapes = function pointShapes (point) {
        var children = this.children;
        var length = children.length;
        var result = QuadRoot.prototype.pointShapes.call(this, point);
        for (var idx = 0; idx < length; idx++) {
            (0,append/* default */.A)(result, children[idx].pointShapes(point));
        }
        return result;
    };

    QuadNode.prototype.insert = function insert (shape, bbox) {
        var children = this.children;
        var inserted = false;

        if (this.inBounds(bbox)) {
            if (this.shapes.length < 4) {
                this._add(shape, bbox);
            } else {
                if (!children.length) {
                    this._initChildren();
                }

                for (var idx = 0; idx < children.length; idx++) {
                    if (children[idx].insert(shape, bbox)) {
                        inserted = true;
                        break;
                    }
                }

                if (!inserted) {
                    this._add(shape, bbox);
                }
            }
            inserted = true;
        }

        return inserted;
    };

    QuadNode.prototype._initChildren = function _initChildren () {
        var ref = this;
        var rect = ref.rect;
        var children = ref.children;
        var center = rect.center();
        var halfWidth = rect.width() / 2;
        var halfHeight = rect.height() / 2;

        children.push(
            new QuadNode(new geometry_rect/* default */.A([ rect.origin.x, rect.origin.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new geometry_rect/* default */.A([ center.x, rect.origin.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new geometry_rect/* default */.A([ rect.origin.x, center.y ], [ halfWidth, halfHeight ])),
            new QuadNode(new geometry_rect/* default */.A([ center.x, center.y ], [ halfWidth, halfHeight ]))
        );
    };

    return QuadNode;
}(quad_root));

/* harmony default export */ const quad_node = (QuadNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/search/shapes-quad-tree.js






var ROOT_SIZE = 3000;
var LEVEL_STEP = 10000;
var MAX_LEVEL = 75;

var ShapesQuadTree = (function (Class) {
    function ShapesQuadTree() {
        Class.call(this);

        this.initRoots();
    }

    if ( Class ) ShapesQuadTree.__proto__ = Class;
    ShapesQuadTree.prototype = Object.create( Class && Class.prototype );
    ShapesQuadTree.prototype.constructor = ShapesQuadTree;

    ShapesQuadTree.prototype.initRoots = function initRoots () {
        this.rootMap = {};
        this.root = new quad_root();
        this.rootElements = [];
    };

    ShapesQuadTree.prototype.clear = function clear () {
        var this$1 = this;

        var rootElements = this.rootElements;
        for (var idx = 0; idx < rootElements.length; idx++) {
            this$1.remove(rootElements[idx]);
        }
        this.initRoots();
    };

    ShapesQuadTree.prototype.pointShape = function pointShape (point) {
        var sectorRoot = ( this.rootMap[ Math.floor( point.x / ROOT_SIZE ) ] || {} )[ Math.floor( point.y / ROOT_SIZE ) ];
        var result = this.root.pointShapes(point);

        if (sectorRoot) {
            result = result.concat(sectorRoot.pointShapes(point));
        }

        this.assignZindex(result);

        result.sort(zIndexComparer);
        for (var idx = 0; idx < result.length; idx++) {
            if (result[idx].containsPoint(point)) {
                return result[idx];
            }
        }
    };

    ShapesQuadTree.prototype.assignZindex = function assignZindex (elements) {
        var this$1 = this;

        for (var idx = 0; idx < elements.length; idx++) {
            var element = elements[idx];
            var zIndex = 0;
            var levelWeight = Math.pow(LEVEL_STEP, MAX_LEVEL);
            var parents = [];

            while (element) {
                parents.push(element);
                element = element.parent;
            }

            while (parents.length) {
                element = parents.pop();
                zIndex += ((element.parent ? element.parent.children : this$1.rootElements).indexOf(element) + 1) * levelWeight;
                levelWeight /= LEVEL_STEP;
            }

            elements[idx]._zIndex = zIndex;
        }
    };

    ShapesQuadTree.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "transform" || e.field === "stroke.width") {
            this.bboxChange(e.element);
        }
    };

    ShapesQuadTree.prototype.geometryChange = function geometryChange (e) {
        this.bboxChange(e.element);
    };

    ShapesQuadTree.prototype.bboxChange = function bboxChange (element) {
        var this$1 = this;

        if (element.nodeType === "Group") {
            for (var idx = 0; idx < element.children.length; idx++) {
                this$1.bboxChange(element.children[idx]);
            }
        } else {
            if (element._quadNode) {
                element._quadNode.remove(element);
            }
            this._insertShape(element);
        }
    };

    ShapesQuadTree.prototype.add = function add (elements) {
        var elementsArray = Array.isArray(elements) ? elements.slice(0) : [ elements ];

        (0,append/* default */.A)(this.rootElements, elementsArray);
        this._insert(elementsArray);
    };

    ShapesQuadTree.prototype.childrenChange = function childrenChange (e) {
        var this$1 = this;

        if (e.action === "remove") {
            for (var idx = 0; idx < e.items.length; idx++) {
                this$1.remove(e.items[idx]);
            }
        } else {
            this._insert(Array.prototype.slice.call(e.items, 0));
        }
    };

    ShapesQuadTree.prototype._insert = function _insert (elements) {
        var this$1 = this;

        var element;

        while (elements.length > 0) {
            element = elements.pop();
            element.addObserver(this$1);
            if (element.nodeType === "Group") {
                (0,append/* default */.A)(elements, element.children);
            } else {
                this$1._insertShape(element);
            }
        }
    };

    ShapesQuadTree.prototype._insertShape = function _insertShape (shape) {
        var bbox = shape.bbox();
        if (bbox) {
            var sectors = this.getSectors(bbox);
            var x = sectors[0][0];
            var y = sectors[1][0];

            if (this.inRoot(sectors)) {
                this.root.insert(shape, bbox);
            } else {
                var rootMap = this.rootMap;
                if (!rootMap[x]) {
                    rootMap[x] = {};
                }

                if (!rootMap[x][y]) {
                    rootMap[x][y] = new quad_node(
                        new geometry_rect/* default */.A([ x * ROOT_SIZE, y * ROOT_SIZE ], [ ROOT_SIZE, ROOT_SIZE ])
                    );
                }

                rootMap[x][y].insert(shape, bbox);
            }
        }
    };

    ShapesQuadTree.prototype.remove = function remove (element) {
        var this$1 = this;

        element.removeObserver(this);

        if (element.nodeType === "Group") {
            var children = element.children;
            for (var idx = 0; idx < children.length; idx++) {
                this$1.remove(children[idx]);
            }
        } else if (element._quadNode) {
            element._quadNode.remove(element);
            delete element._quadNode;
        }
    };

    ShapesQuadTree.prototype.inRoot = function inRoot (sectors) {
        return sectors[0].length > 1 || sectors[1].length > 1;
    };

    ShapesQuadTree.prototype.getSectors = function getSectors (rect) {
        var bottomRight = rect.bottomRight();
        var bottomX = Math.floor(bottomRight.x / ROOT_SIZE);
        var bottomY = Math.floor(bottomRight.y / ROOT_SIZE);
        var sectors = [ [], [] ];
        for (var x = Math.floor(rect.origin.x / ROOT_SIZE); x <= bottomX; x++) {
            sectors[0].push(x);
        }
        for (var y = Math.floor(rect.origin.y / ROOT_SIZE); y <= bottomY; y++) {
            sectors[1].push(y);
        }
        return sectors;
    };

    return ShapesQuadTree;
}(common_class/* default */.A));

function zIndexComparer(x1, x2) {
    if (x1._zIndex < x2._zIndex) {
        return 1;
    }
    if (x1._zIndex > x2._zIndex) {
        return -1;
    }

    return 0;
}

/* harmony default export */ const shapes_quad_tree = (ShapesQuadTree);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/surface-cursor.js


var SurfaceCursor = function SurfaceCursor(surface) {
    surface.bind("mouseenter", this._mouseenter.bind(this));
    surface.bind("mouseleave", this._mouseleave.bind(this));

    this.element = surface.element;
};

SurfaceCursor.prototype.clear = function clear () {
    this._resetCursor();
};

SurfaceCursor.prototype.destroy = function destroy () {
    this._resetCursor();
    delete this.element;
};

SurfaceCursor.prototype._mouseenter = function _mouseenter (e) {
    var cursor = this._shapeCursor(e);

    if (!cursor) {
        this._resetCursor();
    } else {
        if (!this._current) {
            this._defaultCursor = this._getCursor();
        }

        this._setCursor(cursor);
    }
};

SurfaceCursor.prototype._mouseleave = function _mouseleave () {
    this._resetCursor();
};

SurfaceCursor.prototype._shapeCursor = function _shapeCursor (e) {
    var shape = e.element;

    while (shape && !(0,defined/* default */.A)(shape.options.cursor)) {
        shape = shape.parent;
    }

    if (shape) {
        return shape.options.cursor;
    }
};

SurfaceCursor.prototype._getCursor = function _getCursor () {
    if (this.element) {
        return this.element.style.cursor;
    }
};

SurfaceCursor.prototype._setCursor = function _setCursor (cursor) {
    if (this.element) {
        this.element.style.cursor = cursor;
        this._current = cursor;
    }
};

SurfaceCursor.prototype._resetCursor = function _resetCursor () {
    if (this._current) {
        this._setCursor(this._defaultCursor || "");
        delete this._current;
    }
};

/* harmony default export */ const surface_cursor = (SurfaceCursor);


// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/color/parse-color.js
var parse_color = __webpack_require__(23368);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/is-transparent.js
var is_transparent = __webpack_require__(92273);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/value-or-default.js
var value_or_default = __webpack_require__(80743);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/linear-gradient.js
var linear_gradient = __webpack_require__(70985);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/radial-gradient.js
var radial_gradient = __webpack_require__(98163);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/constants.js
var constants = __webpack_require__(6214);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/utils/render-path.js

function renderPath(ctx, path) {
    var segments = path.segments;

    if (segments.length === 0) {
        return;
    }

    var segment = segments[0];
    var anchor = segment.anchor();
    ctx.moveTo(anchor.x, anchor.y);

    for (var i = 1; i < segments.length; i++) {
        segment = segments[i];
        anchor = segment.anchor();

        var prevSeg = segments[i - 1];
        var prevOut = prevSeg.controlOut();
        var controlIn = segment.controlIn();

        if (prevOut && controlIn) {
            ctx.bezierCurveTo(prevOut.x, prevOut.y,
                controlIn.x, controlIn.y,
                anchor.x, anchor.y);
        } else {
            ctx.lineTo(anchor.x, anchor.y);
        }
    }

    if (path.options.closed) {
        ctx.closePath();
    }
}

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/path-node.js








function addGradientStops(gradient, stops) {
    for (var idx = 0; idx < stops.length; idx++) {
        var stop = stops[idx];
        var color = (0,parse_color/* default */.Ay)(stop.color());

        color.a *= stop.opacity();

        gradient.addColorStop(stop.offset(), color.toCssRgba());
    }
}

var PathNode = (function (Node) {
    function PathNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) PathNode.__proto__ = Node;
    PathNode.prototype = Object.create( Node && Node.prototype );
    PathNode.prototype.constructor = PathNode;

    PathNode.prototype.renderTo = function renderTo (ctx) {
        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        ctx.beginPath();

        this.renderPoints(ctx, this.srcElement);

        this.setLineDash(ctx);
        this.setLineCap(ctx);
        this.setLineJoin(ctx);

        this.setFill(ctx);
        this.setStroke(ctx);

        ctx.restore();
    };

    PathNode.prototype.setFill = function setFill (ctx) {
        var fill = this.srcElement.options.fill;
        var hasFill = false;

        if (fill) {
            if (fill.nodeType === "Gradient") {
                this.setGradientFill(ctx, fill);
                hasFill = true;
            } else if (fill.nodeType === constants/* PATTERN */.XF) {
                this.setPatternFill(ctx, fill);
                hasFill = true;
            } else if (!(0,is_transparent/* default */.A)(fill.color)) {
                ctx.fillStyle = fill.color;

                ctx.save();
                this.globalAlpha(ctx, fill.opacity);
                ctx.fill();
                ctx.restore();

                hasFill = true;
            }
        }

        return hasFill;
    };

    PathNode.prototype.setGradientFill = function setGradientFill (ctx, fill) {
        var bbox = this.srcElement.rawBBox();
        var gradient;

        if (fill instanceof linear_gradient/* default */.A) {
            var start = fill.start();
            var end = fill.end();
            gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        } else if (fill instanceof radial_gradient/* default */.A) {
            var center = fill.center();
            gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, fill.radius());
        }

        addGradientStops(gradient, fill.stops);

        ctx.save();

        if (!fill.userSpace()) {
            ctx.transform(bbox.width(), 0, 0, bbox.height(), bbox.origin.x, bbox.origin.y);
        }
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
    };

    PathNode.prototype.setPatternFill = function setPatternFill (ctx, pattern) {
        var size = pattern.size();
        var patternCanvas = document.createElement("canvas");
        var patternContext = patternCanvas.getContext("2d");

        patternCanvas.width = size.getWidth();
        patternCanvas.height = size.getHeight();

        this.childNodes.length = 0;
        this.loadElements(pattern.children);

        var childNodes = this.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var child = childNodes[i];
            child.renderTo(patternContext);
        }

        ctx.save();
        ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
        ctx.fill();
        ctx.restore();
    };

    PathNode.prototype.setStroke = function setStroke (ctx) {
        var stroke = this.srcElement.options.stroke;
        if (stroke && !(0,is_transparent/* default */.A)(stroke.color) && stroke.width > 0) {
            ctx.strokeStyle = stroke.color;
            ctx.lineWidth = (0,value_or_default/* default */.A)(stroke.width, 1);
            ctx.lineJoin = (0,value_or_default/* default */.A)(stroke.lineJoin, ctx.lineJoin);

            ctx.save();
            this.globalAlpha(ctx, stroke.opacity);
            ctx.stroke();
            ctx.restore();

            return true;
        }
    };

    PathNode.prototype.dashType = function dashType () {
        var stroke = this.srcElement.options.stroke;
        if (stroke && stroke.dashType) {
            return stroke.dashType.toLowerCase();
        }
    };

    PathNode.prototype.setLineDash = function setLineDash (ctx) {
        var dashType = this.dashType();
        if (dashType && dashType !== constants/* SOLID */.I$) {
            var dashArray = constants/* DASH_ARRAYS */.MT[dashType];
            if (ctx.setLineDash) {
                ctx.setLineDash(dashArray);
            } else {
                ctx.mozDash = dashArray;
                ctx.webkitLineDash = dashArray;
            }
        }
    };

    PathNode.prototype.setLineCap = function setLineCap (ctx) {
        var dashType = this.dashType();
        var stroke = this.srcElement.options.stroke;
        if (dashType && dashType !== constants/* SOLID */.I$) {
            ctx.lineCap = constants/* BUTT */.SQ;
        } else if (stroke && stroke.lineCap) {
            ctx.lineCap = stroke.lineCap;
        }
    };

    PathNode.prototype.setLineJoin = function setLineJoin (ctx) {
        var stroke = this.srcElement.options.stroke;
        if (stroke && stroke.lineJoin) {
            ctx.lineJoin = stroke.lineJoin;
        }
    };

    PathNode.prototype.renderPoints = function renderPoints (ctx, path) {
        renderPath(ctx, path);
    };

    return PathNode;
}(node));

/* harmony default export */ const path_node = (PathNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/arc-node.js



var ArcNode = (function (PathNode) {
    function ArcNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) ArcNode.__proto__ = PathNode;
    ArcNode.prototype = Object.create( PathNode && PathNode.prototype );
    ArcNode.prototype.constructor = ArcNode;

    ArcNode.prototype.renderPoints = function renderPoints (ctx) {
        var path = this.srcElement.toPath();
        renderPath(ctx, path);
    };

    return ArcNode;
}(path_node));

/* harmony default export */ const arc_node = (ArcNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/circle-node.js


var CircleNode = (function (PathNode) {
    function CircleNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) CircleNode.__proto__ = PathNode;
    CircleNode.prototype = Object.create( PathNode && PathNode.prototype );
    CircleNode.prototype.constructor = CircleNode;

    CircleNode.prototype.renderPoints = function renderPoints (ctx) {
        var ref = this.srcElement.geometry();
        var center = ref.center;
        var radius = ref.radius;

        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    };

    return CircleNode;
}(path_node));

/* harmony default export */ const circle_node = (CircleNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/image-node.js



var ImageNode = (function (PathNode) {
    function ImageNode(srcElement, cors) {
        PathNode.call(this, srcElement);

        this.onLoad = this.onLoad.bind(this);
        this.onError = this.onError.bind(this);

        this.loading = (0,create_promise/* default */.A)();

        var img = this.img = new Image();
        var src = srcElement.src();

        if (cors && !(/^data:/i.test(src))) {
            img.crossOrigin = cors;
        }

        if (src) {
            img.src = src;
        }

        if (img.complete) {
            this.onLoad();
        } else {
            img.onload = this.onLoad;
            img.onerror = this.onError;
        }
    }

    if ( PathNode ) ImageNode.__proto__ = PathNode;
    ImageNode.prototype = Object.create( PathNode && PathNode.prototype );
    ImageNode.prototype.constructor = ImageNode;

    ImageNode.prototype.renderTo = function renderTo (ctx) {
        if (this.loading.state() === "resolved") {
            ctx.save();

            this.setTransform(ctx);
            this.setClip(ctx);

            this.drawImage(ctx);

            ctx.restore();
        }
    };

    ImageNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "src") {
            this.loading = (0,create_promise/* default */.A)();
            this.img.src = this.srcElement.src();
        } else {
            PathNode.prototype.optionsChange.call(this, e);
        }
    };

    ImageNode.prototype.onLoad = function onLoad () {
        this.loading.resolve();
        this.invalidate();
    };

    ImageNode.prototype.onError = function onError () {
        this.loading.reject(new Error(
            "Unable to load image '" + this.img.src +
            "'. Check for connectivity and verify CORS headers."
        ));
    };

    ImageNode.prototype.drawImage = function drawImage (ctx) {
        var rect = this.srcElement.rect();
        var topLeft = rect.topLeft();

        ctx.drawImage(
            this.img, topLeft.x, topLeft.y, rect.width(), rect.height()
        );
    };

    return ImageNode;
}(path_node));

/* harmony default export */ const image_node = (ImageNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/multi-path-node.js



var MultiPathNode = (function (PathNode) {
    function MultiPathNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) MultiPathNode.__proto__ = PathNode;
    MultiPathNode.prototype = Object.create( PathNode && PathNode.prototype );
    MultiPathNode.prototype.constructor = MultiPathNode;

    MultiPathNode.prototype.renderPoints = function renderPoints (ctx) {
        var paths = this.srcElement.paths;
        for (var i = 0; i < paths.length; i++) {
            renderPath(ctx, paths[i]);
        }
    };

    return MultiPathNode;
}(path_node));

/* harmony default export */ const multi_path_node = (MultiPathNode);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/path.js + 4 modules
var path = __webpack_require__(48506);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/rect-node.js



var RectNode = (function (PathNode) {
    function RectNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) RectNode.__proto__ = PathNode;
    RectNode.prototype = Object.create( PathNode && PathNode.prototype );
    RectNode.prototype.constructor = RectNode;

    RectNode.prototype.renderPoints = function renderPoints (ctx) {
        var geometry = this.srcElement.geometry();
        var ref = geometry.cornerRadius;
        var rx = ref[0];
        var ry = ref[1];

        if (rx === 0 && ry === 0) {
            var origin = geometry.origin;
            var size = geometry.size;
            ctx.rect(origin.x, origin.y, size.width, size.height);
        } else {
            PathNode.prototype.renderPoints.call(this, ctx, path/* Path */.w.fromRect(geometry));
        }
    };

    return RectNode;
}(path_node));

/* harmony default export */ const rect_node = (RectNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/text-node.js


var TextNode = (function (PathNode) {
    function TextNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) TextNode.__proto__ = PathNode;
    TextNode.prototype = Object.create( PathNode && PathNode.prototype );
    TextNode.prototype.constructor = TextNode;

    TextNode.prototype.renderTo = function renderTo (ctx) {
        var text = this.srcElement;
        var pos = text.position();
        var size = text.measure();

        ctx.save();

        this.setTransform(ctx);
        this.setClip(ctx);
        this.setOpacity(ctx);

        ctx.beginPath();

        ctx.font = text.options.font;
        ctx.textAlign = 'left';

        if (text.options.paintOrder === 'stroke') {
            this.stroke(ctx, text, pos, size);
            this.fill(ctx, text, pos, size);
        } else {
            this.fill(ctx, text, pos, size);
            this.stroke(ctx, text, pos, size);
        }

        ctx.restore();
    };

    TextNode.prototype.stroke = function stroke (ctx, text, pos, size) {
        if (this.setStroke(ctx)) {
            this.setLineDash(ctx);
            ctx.strokeText(text.content(), pos.x, pos.y + size.baseline);
        }
    };

    TextNode.prototype.fill = function fill (ctx, text, pos, size) {
        if (this.setFill(ctx)) {
            ctx.fillText(text.content(), pos.x, pos.y + size.baseline);
        }
    };

    return TextNode;
}(path_node));


/* harmony default export */ const text_node = (TextNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/surface.js
















node_map.Arc = arc_node;
node_map.Circle = circle_node;
node_map.Group = group_node;
node_map.Image = image_node;
node_map.MultiPath = multi_path_node;
node_map.Path = path_node;
node_map.Rect = rect_node;
node_map.Text = text_node;


var Surface = (function (BaseSurface) {
    function Surface(element, options) {
        BaseSurface.call(this, element, options);

        this.element.innerHTML = this._template(this);

        var canvas = this.element.firstElementChild;
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        var size = (0,element_size/* default */.A)(element);

        canvas.width = size.width;
        canvas.height = size.height;

        this._rootElement = canvas;

        this._root = new root_node(canvas, size);

        this._mouseTrackHandler = this._trackMouse.bind(this);

        (0,bind_events/* default */.A)(this.element, {
            click: this._mouseTrackHandler,
            mousemove: this._mouseTrackHandler
        });
    }

    if ( BaseSurface ) Surface.__proto__ = BaseSurface;
    Surface.prototype = Object.create( BaseSurface && BaseSurface.prototype );
    Surface.prototype.constructor = Surface;

    var prototypeAccessors = { type: { configurable: true } };

    prototypeAccessors.type.get = function () {
        return "canvas";
    };

    Surface.prototype.destroy = function destroy () {
        BaseSurface.prototype.destroy.call(this);

        if (this._root) {
            this._root.destroy();
            this._root = null;
        }

        if (this._searchTree) {
            this._searchTree.clear();
            delete this._searchTree;
        }

        if (this._cursor) {
            this._cursor.destroy();
            delete this._cursor;
        }

        (0,unbind_events/* default */.A)(this.element, {
            click: this._mouseTrackHandler,
            mousemove: this._mouseTrackHandler
        });
    };

    Surface.prototype.draw = function draw (element) {
        BaseSurface.prototype.draw.call(this, element);
        this._root.load([ element ], undefined, this.options.cors);

        if (this._searchTree) {
            this._searchTree.add([ element ]);
        }
    };

    Surface.prototype.clear = function clear () {
        BaseSurface.prototype.clear.call(this);
        this._root.clear();

        if (this._searchTree) {
            this._searchTree.clear();
        }

        if (this._cursor) {
            this._cursor.clear();
        }
    };

    Surface.prototype.eventTarget = function eventTarget (e) {
        if (this._searchTree) {
            var point = this._surfacePoint(e);
            var shape = this._searchTree.pointShape(point);
            return shape;
        }
    };

    Surface.prototype.image = function image () {
        var ref = this;
        var root = ref._root;
        var rootElement = ref._rootElement;
        var loadingStates = [];

        root.traverse(function (childNode) {
            if (childNode.loading) {
                loadingStates.push(childNode.loading);
            }
        });

        var promise = (0,create_promise/* default */.A)();
        var resolveDataURL = function () {
            root._invalidate({ fixedScale: true });

            try {
                var data = rootElement.toDataURL();
                promise.resolve(data);
            } catch (e) {
                promise.reject(e);
            }
        };

        (0,promise_all/* default */.A)(loadingStates).then(resolveDataURL, resolveDataURL);

        return promise;
    };

    Surface.prototype.suspendTracking = function suspendTracking () {
        BaseSurface.prototype.suspendTracking.call(this);
        if (this._searchTree) {
            this._searchTree.clear();
            delete this._searchTree;
        }
    };

    Surface.prototype.resumeTracking = function resumeTracking () {
        BaseSurface.prototype.resumeTracking.call(this);
        if (!this._searchTree) {
            this._searchTree = new shapes_quad_tree();

            var childNodes = this._root.childNodes;
            var rootElements = [];
            for (var idx = 0; idx < childNodes.length; idx++) {
                rootElements.push(childNodes[idx].srcElement);
            }
            this._searchTree.add(rootElements);
        }
    };

    Surface.prototype._resize = function _resize () {
        this._rootElement.width = this._size.width;
        this._rootElement.height = this._size.height;

        this._root.size = this._size;
        this._root.invalidate();
    };

    Surface.prototype._template = function _template () {
        return "<canvas></canvas>";
    };

    Surface.prototype._enableTracking = function _enableTracking () {
        this._searchTree = new shapes_quad_tree();
        this._cursor = new surface_cursor(this);

        BaseSurface.prototype._enableTracking.call(this);
    };

    Surface.prototype._trackMouse = function _trackMouse (e) {
        if (this._suspendedTracking) {
            return;
        }

        var shape = this.eventTarget(e);

        if (e.type !== "click") {
            var currentShape = this._currentShape;
            if (currentShape && currentShape !== shape) {
                this.trigger("mouseleave", {
                    element: currentShape,
                    originalEvent: e,
                    type: "mouseleave"
                });
            }

            if (shape && currentShape !== shape) {
                this.trigger("mouseenter", {
                    element: shape,
                    originalEvent: e,
                    type: "mouseenter"
                });
            }

            this.trigger("mousemove", {
                element: shape,
                originalEvent: e,
                type: "mousemove"
            });

            this._currentShape = shape;
        } else if (shape) {
            this.trigger("click", {
                element: shape,
                originalEvent: e,
                type: "click"
            });
        }
    };

    Object.defineProperties( Surface.prototype, prototypeAccessors );

    return Surface;
}(surface/* default */.A));

/* harmony default export */ const canvas_surface = (Surface);


/***/ },

/***/ 52883
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementStyles)
/* harmony export */ });
function elementStyles(element, styles) {
    var result = {};
    var style = window.getComputedStyle(element) || {};
    var stylesArray = Array.isArray(styles) ? styles : [ styles ];

    for (var idx = 0; idx < stylesArray.length; idx++) {
        var field = stylesArray[idx];
        result[field] = style[field];
    }

    return result;
}

/***/ },

/***/ 53419
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11773);
/* harmony import */ var _util_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5865);
/* harmony import */ var _util_rad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99867);
/* harmony import */ var _util_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96276);





var Matrix = (function (Class) {
    function Matrix(a, b, c, d, e, f) {
        if ( a === void 0 ) a = 0;
        if ( b === void 0 ) b = 0;
        if ( c === void 0 ) c = 0;
        if ( d === void 0 ) d = 0;
        if ( e === void 0 ) e = 0;
        if ( f === void 0 ) f = 0;

        Class.call(this);

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }

    if ( Class ) Matrix.__proto__ = Class;
    Matrix.prototype = Object.create( Class && Class.prototype );
    Matrix.prototype.constructor = Matrix;

    Matrix.prototype.multiplyCopy = function multiplyCopy (matrix) {
        return new Matrix(
            this.a * matrix.a + this.c * matrix.b,
            this.b * matrix.a + this.d * matrix.b,
            this.a * matrix.c + this.c * matrix.d,
            this.b * matrix.c + this.d * matrix.d,
            this.a * matrix.e + this.c * matrix.f + this.e,
            this.b * matrix.e + this.d * matrix.f + this.f
        );
    };

    Matrix.prototype.invert = function invert () {
        var ref = this;
        var a = ref.a;
        var b = ref.b;
        var d = ref.c;
        var e = ref.d;
        var g = ref.e;
        var h = ref.f;
        var det = a * e - b * d;

        if (det === 0) {
            return null;
        }

        return new Matrix(e / det, -b / det, -d / det, a / det,
            (d * h - e * g) / det, (b * g - a * h) / det);
    };

    Matrix.prototype.clone = function clone () {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    Matrix.prototype.equals = function equals (other) {
        if (!other) {
            return false;
        }

        return this.a === other.a && this.b === other.b &&
            this.c === other.c && this.d === other.d &&
            this.e === other.e && this.f === other.f;
    };

    Matrix.prototype.round = function round$1 (precision) {
        this.a = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.a, precision);
        this.b = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.b, precision);
        this.c = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.c, precision);
        this.d = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.d, precision);
        this.e = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.e, precision);
        this.f = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.f, precision);

        return this;
    };

    Matrix.prototype.toArray = function toArray (precision) {
        var result = [ this.a, this.b, this.c, this.d, this.e, this.f ];

        if ((0,_util_defined__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(precision)) {
            for (var i = 0; i < result.length; i++) {
                result[i] = (0,_util_round__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(result[i], precision);
            }
        }

        return result;
    };

    Matrix.prototype.toString = function toString (precision, separator) {
        if ( separator === void 0 ) separator = ",";

        return this.toArray(precision).join(separator);
    };

    Matrix.translate = function translate (x, y) {
        return new Matrix(1, 0, 0, 1, x, y);
    };

    Matrix.unit = function unit () {
        return new Matrix(1, 0, 0, 1, 0, 0);
    };

    Matrix.rotate = function rotate (angle, x, y) {
        var matrix = new Matrix();
        matrix.a = Math.cos((0,_util_rad__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(angle));
        matrix.b = Math.sin((0,_util_rad__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(angle));
        matrix.c = -matrix.b;
        matrix.d = matrix.a;
        matrix.e = (x - x * matrix.a + y * matrix.b) || 0;
        matrix.f = (y - y * matrix.a - x * matrix.b) || 0;

        return matrix;
    };

    Matrix.scale = function scale (scaleX, scaleY) {
        return new Matrix(scaleX, 0, 0, scaleY, 0, 0);
    };

    return Matrix;
}(_common__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

Matrix.IDENTITY = Matrix.unit();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Matrix);


/***/ },

/***/ 56486
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createPromise)
/* harmony export */ });
function createPromise() {
    var resolveFn, rejectFn;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = function (data) {
            promise._state = "resolved";
            resolve(data);
            return promise;
        };
        rejectFn = function (data) {
            promise._state = "rejected";
            reject(data);

            return promise;
        };
    });
    promise._state = "pending";
    promise.resolve = resolveFn;
    promise.reject = rejectFn;
    promise.state = function () { return promise._state; };

    return promise;
}


/***/ },

/***/ 57011
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_has_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33857);
/* harmony import */ var _mixins_with_accessors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24097);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5865);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96276);





var Size = (function (superclass) {
    function Size(width, height) {
        superclass.call(this);

        this.width = width || 0;
        this.height = height || 0;
    }

    if ( superclass ) Size.__proto__ = superclass;
    Size.prototype = Object.create( superclass && superclass.prototype );
    Size.prototype.constructor = Size;

    var staticAccessors = { ZERO: { configurable: true } };

    Size.prototype.equals = function equals (other) {
        return other && other.width === this.width && other.height === this.height;
    };

    Size.prototype.clone = function clone () {
        return new Size(this.width, this.height);
    };

    Size.prototype.toArray = function toArray (digits) {
        var doRound = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(digits);
        var width = doRound ? (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.width, digits) : this.width;
        var height = doRound ? (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.height, digits) : this.height;

        return [ width, height ];
    };

    Size.create = function create (arg0, arg1) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(arg0)) {
            if (arg0 instanceof Size) {
                return arg0;
            } else if (arguments.length === 1 && arg0.length === 2) {
                return new Size(arg0[0], arg0[1]);
            }

            return new Size(arg0, arg1);
        }
    };

    staticAccessors.ZERO.get = function () {
        return new Size(0, 0);
    };

    Object.defineProperties( Size, staticAccessors );

    return Size;
}((0,_mixins_with_accessors__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_core_has_observers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, [ "width", "height" ])));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Size);


/***/ },

/***/ 57080
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementsBoundingBox)
/* harmony export */ });
/* harmony import */ var _geometry_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85932);


function elementsBoundingBox(elements, applyTransform, transformation) {
    var boundingBox;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.visible()) {
            var elementBoundingBox = applyTransform ? element.bbox(transformation) : element.rawBBox();
            if (elementBoundingBox) {
                if (boundingBox) {
                    boundingBox = _geometry_rect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.union(boundingBox, elementBoundingBox);
                } else {
                    boundingBox = elementBoundingBox;
                }
            }
        }
    }

    return boundingBox;
}



/***/ },

/***/ 57757
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ PRECISION)
/* harmony export */ });
var PRECISION = 10;



/***/ },

/***/ 59692
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8449);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11773);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71999);




function zeroSize() {
    return { width: 0, height: 0, baseline: 0 };
}

var DEFAULT_OPTIONS = {
    baselineMarkerSize: 1
};

var defaultMeasureBox;

if (typeof document !== "undefined") {
    defaultMeasureBox = document.createElement("div");
    defaultMeasureBox.style.setProperty("position", "absolute", "important");
    defaultMeasureBox.style.setProperty("top", "-4000px", "important");
    defaultMeasureBox.style.setProperty("width", "auto", "important");
    defaultMeasureBox.style.setProperty("height", "auto", "important");
    defaultMeasureBox.style.setProperty("padding", "0", "important");
    defaultMeasureBox.style.setProperty("margin", "0", "important");
    defaultMeasureBox.style.setProperty("border", "0", "important");
    defaultMeasureBox.style.setProperty("line-height", "normal", "important");
    defaultMeasureBox.style.setProperty("visibility", "hidden", "important");
    defaultMeasureBox.style.setProperty("white-space", "pre", "important");
}

var TextMetrics = (function (Class) {
    function TextMetrics(options) {
        Class.call(this);

        this._cache = new _lru_cache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(1000);
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    }

    if ( Class ) TextMetrics.__proto__ = Class;
    TextMetrics.prototype = Object.create( Class && Class.prototype );
    TextMetrics.prototype.constructor = TextMetrics;

    TextMetrics.prototype.measure = function measure (text, style, options) {
        if ( options === void 0 ) options = {};

        if (typeof text === 'undefined' || text === null) {
            return zeroSize();
        }

        var styleKey = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .objectKey */ .T5)(style);
        var cacheKey = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .hashKey */ .EN)(text + styleKey);
        var cachedResult = this._cache.get(cacheKey);

        if (cachedResult) {
            return cachedResult;
        }

        var size = zeroSize();
        var measureBox = options.box || defaultMeasureBox;
        var baselineMarker = this._baselineMarker().cloneNode(false);

        for (var key in style) {
            var value = style[key];
            if (typeof value !== "undefined") {
                measureBox.style[key] = value;
            }
        }

        var textStr = options.normalizeText !== false ? (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .normalizeText */ .fQ)(text) : String(text);

        measureBox.textContent = textStr;
        measureBox.appendChild(baselineMarker);
        document.body.appendChild(measureBox);

        if (textStr.length) {
            size.width = measureBox.offsetWidth - this.options.baselineMarkerSize;
            size.height = measureBox.offsetHeight;
            size.baseline = baselineMarker.offsetTop + this.options.baselineMarkerSize;
        }

        if (size.width > 0 && size.height > 0) {
            this._cache.put(cacheKey, size);
        }

        measureBox.parentNode.removeChild(measureBox);

        return size;
    };

    TextMetrics.prototype._baselineMarker = function _baselineMarker () {
        var marker = document.createElement("div");
        marker.style.display = "inline-block";
        marker.style.verticalAlign = "baseline";
        marker.style.width = this.options.baselineMarkerSize + "px";
        marker.style.height = this.options.baselineMarkerSize + "px";
        marker.style.overflow = "hidden";

        return marker;
    };

    return TextMetrics;
}(_common__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A));

TextMetrics.current = new TextMetrics();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextMetrics);


/***/ },

/***/ 61377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toMatrix)
/* harmony export */ });
function toMatrix(transformation) {
    if (transformation && typeof transformation.matrix === "function") {
        return transformation.matrix();
    }

    return transformation;
}

/***/ },

/***/ 61427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ bindEvents)
/* harmony export */ });
function bindEvents(element, events) {
    for (var eventName in events) {
        var eventNames = eventName.trim().split(" ");
        for (var idx = 0; idx < eventNames.length; idx++) {
            element.addEventListener(eventNames[idx], events[eventName], false);
        }
    }
}

/***/ },

/***/ 67923
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ close)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57757);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96276);




function close(a, b, tolerance) {
    if ( tolerance === void 0 ) tolerance = _constants__WEBPACK_IMPORTED_MODULE_0__/* .PRECISION */ .P;

    return (0,_util__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(Math.abs(a - b), tolerance) === 0;
}

/***/ },

/***/ 69866
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);


var GRADIENT = "Gradient";

var paintable = function (TBase) { return (
    (function (TBase) {
        function anonymous () {
            TBase.apply(this, arguments);
        }

        if ( TBase ) anonymous.__proto__ = TBase;
        anonymous.prototype = Object.create( TBase && TBase.prototype );
        anonymous.prototype.constructor = anonymous;

        anonymous.prototype.fill = function fill (color, opacity) {
            var options = this.options;

            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(color)) {
                if (color && color.nodeType !== GRADIENT) {
                    var newFill = {
                        color: color
                    };
                    if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(opacity)) {
                        newFill.opacity = opacity;
                    }
                    options.set("fill", newFill);
                } else {
                    options.set("fill", color);
                }

                return this;
            }

            return options.get("fill");
        };

        anonymous.prototype.stroke = function stroke (color, width, opacity) {
            if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(color)) {
                this.options.set("stroke.color", color);

                if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(width)) {
                    this.options.set("stroke.width", width);
                }

                if ((0,_util__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(opacity)) {
                    this.options.set("stroke.opacity", opacity);
                }

                return this;
            }

            return this.options.get("stroke");
        };

        return anonymous;
    }(TBase))
); };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paintable);


/***/ },

/***/ 69998
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ eventCoordinates)
/* harmony export */ });
/* harmony import */ var _defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);


function eventCoordinates(e) {
    if ((0,_defined__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((e.x || {}).location)) {
        return {
            x: e.x.location,
            y: e.y.location
        };
    }

    return {
        x: e.pageX || e.clientX || 0,
        y: e.pageY || e.clientY || 0
    };
}

/***/ },

/***/ 70985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_with_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30478);
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76786);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87816);





var points = [ "start", "end" ];

var LinearGradient = (function (superclass) {
    function LinearGradient(options) {
        if ( options === void 0 ) options = {};

        superclass.call(this, options);

        this.start(options.start || new _geometry_point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A());
        this.end(options.end || new _geometry_point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(1, 0));
    }

    if ( superclass ) LinearGradient.__proto__ = superclass;
    LinearGradient.prototype = Object.create( superclass && superclass.prototype );
    LinearGradient.prototype.constructor = LinearGradient;

    return LinearGradient;
}((0,_mixins_with_points__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_gradient__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, points)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinearGradient);


/***/ },

/***/ 71999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EN: () => (/* binding */ hashKey),
/* harmony export */   T5: () => (/* binding */ objectKey),
/* harmony export */   fQ: () => (/* binding */ normalizeText)
/* harmony export */ });
var REPLACE_REGEX = /\r?\n|\r|\t/g;
var SPACE = ' ';

function normalizeText(text) {
    return String(text).replace(REPLACE_REGEX, SPACE);
}

function objectKey(object) {
    var parts = [];
    for (var key in object) {
        parts.push(key + object[key]);
    }

    return parts.sort().join("");
}

// Computes FNV-1 hash
// See http://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
function hashKey(str) {
    // 32-bit FNV-1 offset basis
    // See http://isthe.com/chongo/tech/comp/fnv/#FNV-param
    var hash = 0x811C9DC5;

    for (var i = 0; i < str.length; ++i) {
        hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
        hash ^= str.charCodeAt(i);
    }

    return hash >>> 0;
}



/***/ },

/***/ 73728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementSize)
/* harmony export */ });
/* harmony import */ var _element_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52883);
/* harmony import */ var _defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5865);



function getPixels(value) {
    if (isNaN(value)) {
        return value;
    }
    return value + "px";
}

function elementSize(element, size) {
    if (size) {
        var width = size.width;
        var height = size.height;

        if ((0,_defined__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(width)) {
            element.style.width = getPixels(width);
        }

        if ((0,_defined__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(height)) {
            element.style.height = getPixels(height);
        }

    } else {
        var size$1 = (0,_element_styles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(element, [ 'width', 'height' ]);

        return {
            width: parseInt(size$1.width, 10),
            height: parseInt(size$1.height, 10)
        };
    }
}

/***/ },

/***/ 74445
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ eventElement)
/* harmony export */ });
function eventElement(e) {
    if ( e === void 0 ) e = {};

    return e.touch ? e.touch.initialTouch : e.target;
}

/***/ },

/***/ 75482
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_options_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11437);
/* harmony import */ var _geometry_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85932);
/* harmony import */ var _geometry_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53419);
/* harmony import */ var _geometry_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95739);
/* harmony import */ var _geometry_to_matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61377);
/* harmony import */ var _core_has_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33857);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5865);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91681);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92273);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80743);
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6214);









var Element = (function (HasObservers) {
    function Element(options) {
        HasObservers.call(this);

        this._initOptions(options);
    }

    if ( HasObservers ) Element.__proto__ = HasObservers;
    Element.prototype = Object.create( HasObservers && HasObservers.prototype );
    Element.prototype.constructor = Element;

    var prototypeAccessors = { nodeType: { configurable: true } };

    prototypeAccessors.nodeType.get = function () {
        return "Rect";
    };

    Element.prototype._initOptions = function _initOptions (options) {
        if ( options === void 0 ) options = {};

        var clip = options.clip;
        var transform = options.transform;

        if (transform) {
            options.transform = (0,_geometry_transform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(transform);
        }

        if (clip && !clip.id) {
            clip.id = (0,_util__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();
        }

        this.options = new _core_options_store__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(options);
        this.options.addObserver(this);
    };

    Element.prototype.transform = function transform (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value)) {
            this.options.set("transform", (0,_geometry_transform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value));
        } else {
            return this.options.get("transform");
        }
    };

    Element.prototype.parentTransform = function parentTransform () {
        var element = this;
        var parentMatrix;

        while (element.parent) {
            element = element.parent;
            var transformation = element.transform();
            if (transformation) {
                parentMatrix = transformation.matrix().multiplyCopy(parentMatrix || _geometry_matrix__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.unit());
            }
        }

        if (parentMatrix) {
            return (0,_geometry_transform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(parentMatrix);
        }
    };

    Element.prototype.currentTransform = function currentTransform (parentTransform) {
        if ( parentTransform === void 0 ) parentTransform = this.parentTransform();

        var elementTransform = this.transform();
        var elementMatrix = (0,_geometry_to_matrix__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(elementTransform);

        var parentMatrix = (0,_geometry_to_matrix__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(parentTransform);
        var combinedMatrix;

        if (elementMatrix && parentMatrix) {
            combinedMatrix = parentMatrix.multiplyCopy(elementMatrix);
        } else {
            combinedMatrix = elementMatrix || parentMatrix;
        }

        if (combinedMatrix) {
            return (0,_geometry_transform__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(combinedMatrix);
        }
    };

    Element.prototype.visible = function visible (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value)) {
            this.options.set("visible", value);
            return this;
        }

        return this.options.get("visible") !== false;
    };

    Element.prototype.clip = function clip (value) {
        var options = this.options;
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value)) {
            if (value && !value.id) {
                value.id = (0,_util__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();
            }
            options.set("clip", value);
            return this;
        }

        return options.get("clip");
    };

    Element.prototype.opacity = function opacity (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value)) {
            this.options.set("opacity", value);
            return this;
        }

        return (0,_util__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(this.options.get("opacity"), 1);
    };

    Element.prototype.className = function className (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(value)) {
            this.options.set("className", value);
            return this;
        }

        return this.options.get("className");
    };

    Element.prototype.clippedBBox = function clippedBBox (transformation) {
        var bbox = this._clippedBBox(transformation);
        if (bbox) {
            var clip = this.clip();
            return clip ? _geometry_rect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.intersect(bbox, clip.bbox(transformation)) : bbox;
        }
    };

    Element.prototype.containsPoint = function containsPoint (point, parentTransform) {
        if (this.visible()) {
            var transform = this.currentTransform(parentTransform);
            var transformedPoint = point;
            if (transform) {
                transformedPoint = point.transformCopy(transform.matrix().invert());
            }
            return (this._hasFill() && this._containsPoint(transformedPoint)) || (this._isOnPath && this._hasStroke() && this._isOnPath(transformedPoint));
        }
        return false;
    };

    Element.prototype._hasFill = function _hasFill () {
        var fill = this.options.fill;
        return fill && (fill.nodeType === _core_constants__WEBPACK_IMPORTED_MODULE_10__/* .PATTERN */ .XF || !(0,_util__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(fill.color));
    };

    Element.prototype._hasStroke = function _hasStroke () {
        var stroke = this.options.stroke;
        return stroke && stroke.width > 0 && !(0,_util__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(stroke.color);
    };

    Element.prototype._clippedBBox = function _clippedBBox (transformation) {
        return this.bbox(transformation);
    };

    Object.defineProperties( Element.prototype, prototypeAccessors );

    return Element;
}(_core_has_observers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);


/***/ },

/***/ 76786
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_with_accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24097);
/* harmony import */ var _core_has_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33857);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5865);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96276);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8441);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53419);
/* harmony import */ var _to_matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61377);







var Point = (function (superclass) {
    function Point(x, y) {
        superclass.call(this);

        this.x = x || 0;
        this.y = y || 0;
    }

    if ( superclass ) Point.__proto__ = superclass;
    Point.prototype = Object.create( superclass && superclass.prototype );
    Point.prototype.constructor = Point;

    var staticAccessors = { ZERO: { configurable: true } };

    Point.prototype.equals = function equals (other) {
        return other && other.x === this.x && other.y === this.y;
    };

    Point.prototype.clone = function clone () {
        return new Point(this.x, this.y);
    };

    Point.prototype.rotate = function rotate (angle, origin) {
        var originPoint = Point.create(origin) || Point.ZERO;

        return this.transform(_matrix__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.rotate(angle, originPoint.x, originPoint.y));
    };

    Point.prototype.translate = function translate (x, y) {
        this.x += x;
        this.y += y;

        this.geometryChange();

        return this;
    };

    Point.prototype.translateWith = function translateWith (point) {
        return this.translate(point.x, point.y);
    };

    Point.prototype.move = function move (x, y) {
        this.x = this.y = 0;
        return this.translate(x, y);
    };

    Point.prototype.scale = function scale (scaleX, scaleY) {
        if ( scaleY === void 0 ) scaleY = scaleX;

        this.x *= scaleX;
        this.y *= scaleY;

        this.geometryChange();

        return this;
    };

    Point.prototype.scaleCopy = function scaleCopy (scaleX, scaleY) {
        return this.clone().scale(scaleX, scaleY);
    };

    Point.prototype.transform = function transform (transformation) {
        var matrix = (0,_to_matrix__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(transformation);
        var ref = this;
        var x = ref.x;
        var y = ref.y;

        this.x = matrix.a * x + matrix.c * y + matrix.e;
        this.y = matrix.b * x + matrix.d * y + matrix.f;

        this.geometryChange();

        return this;
    };

    Point.prototype.transformCopy = function transformCopy (transformation) {
        var point = this.clone();

        if (transformation) {
            point.transform(transformation);
        }

        return point;
    };

    Point.prototype.distanceTo = function distanceTo (point) {
        var dx = this.x - point.x;
        var dy = this.y - point.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    Point.prototype.round = function round$1 (digits) {
        this.x = (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.x, digits);
        this.y = (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.y, digits);

        this.geometryChange();

        return this;
    };

    Point.prototype.toArray = function toArray (digits) {
        var doRound = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(digits);
        var x = doRound ? (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.x, digits) : this.x;
        var y = doRound ? (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.y, digits) : this.y;

        return [ x, y ];
    };

    Point.prototype.toString = function toString (digits, separator) {
        if ( separator === void 0 ) separator = " ";

        var ref = this;
        var x = ref.x;
        var y = ref.y;

        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(digits)) {
            x = (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(x, digits);
            y = (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(y, digits);
        }

        return x + separator + y;
    };

    Point.create = function create (arg0, arg1) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(arg0)) {
            if (arg0 instanceof Point) {
                return arg0;
            } else if (arguments.length === 1 && arg0.length === 2) {
                return new Point(arg0[0], arg0[1]);
            }

            return new Point(arg0, arg1);
        }
    };

    Point.min = function min () {
        var arguments$1 = arguments;

        var minX = _util__WEBPACK_IMPORTED_MODULE_4__/* .MAX_NUM */ .eN;
        var minY = _util__WEBPACK_IMPORTED_MODULE_4__/* .MAX_NUM */ .eN;

        for (var i = 0; i < arguments.length; i++) {
            var point = arguments$1[i];
            minX = Math.min(point.x, minX);
            minY = Math.min(point.y, minY);
        }

        return new Point(minX, minY);
    };

    Point.max = function max () {
        var arguments$1 = arguments;

        var maxX = _util__WEBPACK_IMPORTED_MODULE_4__/* .MIN_NUM */ .uo;
        var maxY = _util__WEBPACK_IMPORTED_MODULE_4__/* .MIN_NUM */ .uo;

        for (var i = 0; i < arguments.length; i++) {
            var point = arguments$1[i];
            maxX = Math.max(point.x, maxX);
            maxY = Math.max(point.y, maxY);
        }

        return new Point(maxX, maxY);
    };

    Point.minPoint = function minPoint () {
        return new Point(_util__WEBPACK_IMPORTED_MODULE_4__/* .MIN_NUM */ .uo, _util__WEBPACK_IMPORTED_MODULE_4__/* .MIN_NUM */ .uo);
    };

    Point.maxPoint = function maxPoint () {
        return new Point(_util__WEBPACK_IMPORTED_MODULE_4__/* .MAX_NUM */ .eN, _util__WEBPACK_IMPORTED_MODULE_4__/* .MAX_NUM */ .eN);
    };

    staticAccessors.ZERO.get = function () {
        return new Point(0, 0);
    };

    Object.defineProperties( Point, staticAccessors );

    return Point;
}((0,_mixins_with_accessors__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_core_has_observers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, [ "x", "y" ])));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);


/***/ },

/***/ 77051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_with_geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44945);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75482);
/* harmony import */ var _geometry_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85932);
/* harmony import */ var _geometry_to_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61377);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5865);







var Image = (function (superclass) {
    function Image(src, rect, options) {
        if ( rect === void 0 ) rect = new _geometry_rect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A();
        if ( options === void 0 ) options = {};

        superclass.call(this, options);

        this.src(src);
        this.rect(rect);
    }

    if ( superclass ) Image.__proto__ = superclass;
    Image.prototype = Object.create( superclass && superclass.prototype );
    Image.prototype.constructor = Image;

    var prototypeAccessors = { nodeType: { configurable: true } };

    prototypeAccessors.nodeType.get = function () {
        return "Image";
    };

    Image.prototype.src = function src (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(value)) {
            this.options.set("src", value);
            return this;
        }

        return this.options.get("src");
    };

    Image.prototype.bbox = function bbox (transformation) {
        var combinedMatrix = (0,_geometry_to_matrix__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this.currentTransform(transformation));
        return this._rect.bbox(combinedMatrix);
    };

    Image.prototype.rawBBox = function rawBBox () {
        return this._rect.bbox();
    };

    Image.prototype._containsPoint = function _containsPoint (point) {
        return this._rect.containsPoint(point);
    };

    Image.prototype._hasFill = function _hasFill () {
        return this.src();
    };

    Object.defineProperties( Image.prototype, prototypeAccessors );

    return Image;
}((0,_mixins_with_geometry__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_element__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, [ "rect" ])));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ },

/***/ 77152
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deg)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8441);


function deg(radians) {
    return radians / _constants__WEBPACK_IMPORTED_MODULE_0__/* .DEG_TO_RAD */ .Td;
}

/***/ },

/***/ 78142
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ append)
/* harmony export */ });
function append(first, second) {
    first.push.apply(first, second);
    return first;
}

/***/ },

/***/ 80007
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementScale)
/* harmony export */ });
/* harmony import */ var _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53419);


var matrixRegexp = /matrix\((.*)\)/;

function parseMatrix(matrixString) {
    var match = matrixString.match(matrixRegexp);
    if (match === null || match.length !== 2) {
        return _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.unit();
    }

    var members = match[1].split(',').map(function (x) { return parseFloat(x); });
    return new (Function.prototype.bind.apply( _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, [ null ].concat( members) ));
}

function transformMatrix(element) {
    var transform = getComputedStyle(element).transform;

    if (transform === 'none') {
        return _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.unit();
    }

    return parseMatrix(transform);
}

function elementScale(element) {
    if (!element) {
        return _geometry_matrix__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.unit();
    }

    var matrix = transformMatrix(element);
    var parent = element.parentElement;
    while (parent) {
        var parentMatrix = transformMatrix(parent);
        matrix = matrix.multiplyCopy(parentMatrix);
        parent = parent.parentElement;
    }

    matrix.b = matrix.c = matrix.e = matrix.f = 0;
    return matrix;
}


/***/ },

/***/ 80427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var animationFrameProxy = function (callback) {
    var wnd = typeof window !== "undefined" ? window : {};
    var animationFrame = wnd.requestAnimationFrame ||
                        wnd.webkitRequestAnimationFrame ||
                        wnd.mozRequestAnimationFrame ||
                        wnd.oRequestAnimationFrame ||
                        wnd.msRequestAnimationFrame ||
                        function(callback) { setTimeout(callback, 1000 / 60); };

    animationFrameProxy = function (callback) { return animationFrame.call(wnd, callback); };
    animationFrameProxy(callback);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationFrameProxy);


/***/ },

/***/ 80743
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ valueOrDefault)
/* harmony export */ });
/* harmony import */ var _defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);


function valueOrDefault(value, defaultValue) {
    return (0,_defined__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) ? value : defaultValue;
}

/***/ },

/***/ 81954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function matchUserAgent(userAgent) {
    var browserRxs = {
        edge: /(edge)[ \/]([\w.]+)/i,
        webkit: /(chrome)[ \/]([\w.]+)/i,
        safari: /(webkit)[ \/]([\w.]+)/i,
        opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
        msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
        mozilla: /(mozilla)(?:.*? rv:([\w.]+))/i
    };

    var browser = {};

    for (var agent in browserRxs) {
        if (browserRxs.hasOwnProperty(agent)) {
            var match = userAgent.match(browserRxs[agent]);
            if (match) {
                browser[agent] = true;
                browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
                browser.version = parseInt(document.documentMode || match[2], 10);

                break;
            }
        }
    }

    return browser;
}

var browser = null;

var support = {
    get browser() {
        if (typeof window === 'undefined' || browser) {
            return browser;
        }

        browser = matchUserAgent(window.navigator.userAgent);
        return browser;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (support);


/***/ },

/***/ 84896
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementPadding)
/* harmony export */ });
/* harmony import */ var _element_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52883);


function elementPadding(element) {
    var ref = (0,_element_styles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(element, [ "paddingLeft", "paddingTop" ]);
    var paddingLeft = ref.paddingLeft;
    var paddingTop = ref.paddingTop;
    return {
        top: parseFloat(paddingTop),
        left: parseFloat(paddingLeft)
    };
}


/***/ },

/***/ 85014
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ elementOffset)
/* harmony export */ });
function elementOffset(element) {
    var box = element.getBoundingClientRect();

    var documentElement = document.documentElement;

    return {
        top: box.top + (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0),
        left: box.left + (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0)
    };
}

/***/ },

/***/ 85443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ es_surface)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/surface.js + 1 modules
var surface = __webpack_require__(46774);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/log-to-console.js
var log_to_console = __webpack_require__(98037);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/class.js
var common_class = __webpack_require__(11773);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/base-node.js
var base_node = __webpack_require__(24211);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var defined = __webpack_require__(5865);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-attribute.js


function renderAttr(name, value) {
    return ((0,defined/* default */.A)(value) && value !== null) ? (" " + name + "=\"" + value + "\" ") : "";
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-all-attributes.js


function renderAllAttr(attrs) {
    var output = "";
    for (var i = 0; i < attrs.length; i++) {
        output += renderAttr(attrs[i][0], attrs[i][1]);
    }

    return output;
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-style.js


function renderStyle(attrs) {
    var output = "";
    for (var i = 0; i < attrs.length; i++) {
        var value = attrs[i][1];
        if ((0,defined/* default */.A)(value)) {
            output += attrs[i][0] + ":" + value + ";";
        }
    }

    if (output !== "") {
        return output;
    }
}
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/node-map.js
var NODE_MAP = {};

/* harmony default export */ const node_map = (NODE_MAP);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-set-styles-safe.js + 6 modules
var element_set_styles_safe = __webpack_require__(41012);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/constants.js
var SVG_NS = "http://www.w3.org/2000/svg";
var NONE = "none";
var POINT_DIGITS = 3;


;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-svg.js



var renderSVG = function(container, svg) {
    (0,element_set_styles_safe/* setInnerHTML */.mA)(container, svg);
};

if (typeof document !== "undefined") {
    var testFragment = "<svg xmlns='" + SVG_NS + "'></svg>";
    var testContainer = document.createElement("div");
    var hasParser = typeof DOMParser !== "undefined";

    testContainer.innerHTML = testFragment;

    if (hasParser && testContainer.firstChild.namespaceURI !== SVG_NS) {
        renderSVG = function(container, svg) {
            var parser = new DOMParser();
            var chartDoc = parser.parseFromString((0,element_set_styles_safe/* replaceStyleAttr */.PI)(svg), "text/xml");
            (0,element_set_styles_safe/* restoreStyleAttr */.dW)(chartDoc);
            var importedDoc = document.adoptNode(chartDoc.documentElement);

            container.innerHTML = "";
            container.appendChild(importedDoc);
        };
    }
}

/* harmony default export */ const render_svg = (renderSVG);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/support.js
var support = __webpack_require__(81954);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/common/html-encode.js
var ampRegExp = /&/g;
var ltRegExp = /</g;
var quoteRegExp = /"/g;
var aposRegExp = /'/g;
var gtRegExp = />/g;

function htmlEncode(value) {
    return String(value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
}
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/constants.js
var constants = __webpack_require__(6214);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/node.js











var TRANSFORM = "transform";
var DefinitionMap = {
    clip: "clip-path",
    fill: "fill"
};

function isDefinition(type, value) {
    return type === "clip" || (type === "fill" && (!value || value.nodeType === "Gradient" || value.nodeType === constants/* PATTERN */.XF));
}

function baseUrl() {
    var base = document.getElementsByTagName("base")[0];
    var href = document.location.href;
    var url = "";

    if (base && !(support/* default */.A.browser || {}).msie) {
        var hashIndex = href.indexOf("#");
        if (hashIndex !== -1) {
            href = href.substring(0, hashIndex);
        }

        url = href;
    }

    return url;
}

var Node = (function (BaseNode) {
    function Node(srcElement, options) {
        BaseNode.call(this, srcElement);
        this.definitions = {};

        this.options = options;
    }

    if ( BaseNode ) Node.__proto__ = BaseNode;
    Node.prototype = Object.create( BaseNode && BaseNode.prototype );
    Node.prototype.constructor = Node;

    Node.prototype.destroy = function destroy () {
        if (this.element) {
            this.element._kendoNode = null;
            this.element = null;
        }

        this.clearDefinitions();
        BaseNode.prototype.destroy.call(this);
    };

    Node.prototype.load = function load (elements, pos) {
        var this$1 = this;

        for (var i = 0; i < elements.length; i++) {
            var srcElement = elements[i];
            var children = srcElement.children;

            var childNode = new node_map[srcElement.nodeType](srcElement, this$1.options);

            if ((0,defined/* default */.A)(pos)) {
                this$1.insertAt(childNode, pos);
            } else {
                this$1.append(childNode);
            }

            childNode.createDefinitions();

            if (children && children.length > 0) {
                childNode.load(children);
            }

            var element = this$1.element;
            if (element) {
                childNode.attachTo(element, pos);
            }
        }
    };

    Node.prototype.root = function root () {
        var root = this;

        while (root.parent) {
            root = root.parent;
        }

        return root;
    };

    Node.prototype.attachTo = function attachTo (domElement, pos) {
        var container = document.createElement("div");
        render_svg(container,
            "<svg xmlns='" + SVG_NS + "' version='1.1'>" +
                this.render() +
            "</svg>"
        );

        var element = container.firstChild.firstChild;
        if (element) {
            if ((0,defined/* default */.A)(pos)) {
                domElement.insertBefore(element, domElement.childNodes[pos] || null);
            } else {
                domElement.appendChild(element);
            }
            this.setElement(element);
        }
    };

    Node.prototype.setElement = function setElement (element) {
        if (this.element) {
            this.element._kendoNode = null;
        }

        this.element = element;
        this.element._kendoNode = this;

        var nodes = this.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            var childElement = element.childNodes[i];
            nodes[i].setElement(childElement);
        }
    };

    Node.prototype.clear = function clear () {
        this.clearDefinitions();

        if (this.element) {
            this.element.innerHTML = "";
        }

        var children = this.childNodes;
        for (var i = 0; i < children.length; i++) {
            children[i].destroy();
        }

        this.childNodes = [];
    };

    Node.prototype.removeSelf = function removeSelf () {
        if (this.element) {
            var parentNode = this.element.parentNode;
            if (parentNode) {
                parentNode.removeChild(this.element);
            }
            this.element = null;
        }

        BaseNode.prototype.removeSelf.call(this);
    };

    Node.prototype.template = function template () {
        return this.renderChildren();
    };

    Node.prototype.render = function render () {
        return this.template();
    };

    Node.prototype.renderChildren = function renderChildren () {
        var nodes = this.childNodes;
        var output = "";

        for (var i = 0; i < nodes.length; i++) {
            output += nodes[i].render();
        }

        return output;
    };

    Node.prototype.optionsChange = function optionsChange (e) {
        var field = e.field;
        var value = e.value;

        if (field === "visible") {
            this.css("display", value ? "" : NONE);
        } else if (DefinitionMap[field] && isDefinition(field, value)) {
            this.updateDefinition(field, value);
        } else if (field === "opacity") {
            this.attr("opacity", value);
        } else if (field === "cursor") {
            this.css("cursor", value);
        } else if (field === "id") {
            if (value) {
                this.attr("id", value);
            } else {
                this.removeAttr("id");
            }
        }

        BaseNode.prototype.optionsChange.call(this, e);
    };

    Node.prototype.accessibilityOptionsChange = function accessibilityOptionsChange (e) {
        var field = e.field;
        var value = e.value;


        if (field === "role") {
            if (value) {
                this.attr("role", value);
            } else {
                this.removeAttr("role");
            }
        } else if (field === "ariaLabel") {
            if (value) {
                this.attr("aria-label", htmlEncode(value));
            } else {
                this.removeAttr("aria-label");
            }
        } else if (field === "ariaRoleDescription") {
            if (value) {
                this.attr("aria-roledescription", htmlEncode(value));
            } else {
                this.removeAttr("aria-roledescription");
            }
        } else if (field === "ariaChecked") {
            if ((0,defined/* default */.A)(value)) {
                this.attr("aria-checked", value);
            } else {
                this.removeAttr("aria-checked");
            }
        } else if (field === "className") {
            this.className(value);
        }
    };

    Node.prototype.attr = function attr (name, value) {
        if (this.element) {
            this.element.setAttribute(name, value);
        }
    };

    Node.prototype.allAttr = function allAttr (attrs) {
        var this$1 = this;

        for (var i = 0; i < attrs.length; i++) {
            this$1.attr(attrs[i][0], attrs[i][1]);
        }
    };

    Node.prototype.toggleAttr = function toggleAttr (name, value) {
        if (value) {
            this.attr(name, value);
        } else {
            this.removeAttr(name);
        }
    };

    Node.prototype.css = function css (name, value) {
        if (this.element) {
            this.element.style[name] = value;
        }
    };

    Node.prototype.allCss = function allCss (styles) {
        var this$1 = this;

        for (var i = 0; i < styles.length; i++) {
            this$1.css(styles[i][0], styles[i][1]);
        }
    };

    Node.prototype.className = function className (value) {
        var this$1 = this;

        if (this.element) {
            (ref = this.element.classList).remove.apply(ref, this.element.classList);
            value.split(" ").forEach(function (item) {
                this$1.element.classList.add(item);
            });
        }
        var ref;
    };

    Node.prototype.removeAttr = function removeAttr (name) {
        if (this.element) {
            this.element.removeAttribute(name);
        }
    };

    Node.prototype.mapTransform = function mapTransform (transform) {
        var attrs = [];
        if (transform) {
            attrs.push([
                TRANSFORM,
                "matrix(" + transform.matrix().toString(6) + ")"
            ]);
        }

        return attrs;
    };

    Node.prototype.renderTransform = function renderTransform () {
        return renderAllAttr(
            this.mapTransform(this.srcElement.transform())
        );
    };

    Node.prototype.transformChange = function transformChange (value) {
        if (value) {
            this.allAttr(this.mapTransform(value));
        } else {
            this.removeAttr(TRANSFORM);
        }
    };

    Node.prototype.mapStyle = function mapStyle () {
        var options = this.srcElement.options;
        var style = [ [ "cursor", options.cursor ] ];

        if (options.visible === false) {
            style.push([ "display", NONE ]);
        }

        return style;
    };

    Node.prototype.renderStyle = function renderStyle$1 () {
        return renderAttr("style", renderStyle(this.mapStyle(true)));
    };

    Node.prototype.renderOpacity = function renderOpacity () {
        return renderAttr("opacity", this.srcElement.options.opacity);
    };

    Node.prototype.renderId = function renderId () {
        return renderAttr("id", this.srcElement.options.id);
    };

    Node.prototype.renderClassName = function renderClassName () {
        return renderAttr("class", this.srcElement.options.className);
    };

    Node.prototype.renderRole = function renderRole () {
        return renderAttr("role", this.srcElement.options.role);
    };

    Node.prototype.renderAriaLabel = function renderAriaLabel () {
        var value = this.srcElement.options.ariaLabel;
        if (value) {
            value = htmlEncode(value);
        }
        return renderAttr("aria-label", value);
    };

    Node.prototype.renderAriaRoleDescription = function renderAriaRoleDescription () {
        var value = this.srcElement.options.ariaRoleDescription;
        if (value) {
            value = htmlEncode(value);
        }
        return renderAttr("aria-roledescription", value);
    };

    Node.prototype.renderAriaChecked = function renderAriaChecked () {
        return renderAttr("aria-checked", this.srcElement.options.ariaChecked);
    };

    Node.prototype.createDefinitions = function createDefinitions () {
        var srcElement = this.srcElement;
        var definitions = this.definitions;
        if (srcElement) {
            var options = srcElement.options;
            var hasDefinitions;

            for (var field in DefinitionMap) {
                var definition = options.get(field);
                if (definition && isDefinition(field, definition)) {
                    definitions[field] = definition;
                    hasDefinitions = true;
                }
            }
            if (hasDefinitions) {
                this.definitionChange({
                    action: "add",
                    definitions: definitions
                });
            }
        }
    };

    Node.prototype.definitionChange = function definitionChange (e) {
        if (this.parent) {
            this.parent.definitionChange(e);
        }
    };

    Node.prototype.updateDefinition = function updateDefinition (type, value) {
        var definitions = this.definitions;
        var current = definitions[type];
        var attr = DefinitionMap[type];
        var definition = {};
        if (current) {
            definition[type] = current;
            this.definitionChange({
                action: "remove",
                definitions: definition
            });
            delete definitions[type];
        }

        if (!value) {
            if (current) {
                this.removeAttr(attr);
            }
        } else {
            definition[type] = value;
            this.definitionChange({
                action: "add",
                definitions: definition
            });
            definitions[type] = value;
            this.attr(attr, this.refUrl(value.id));
        }
    };

    Node.prototype.clearDefinitions = function clearDefinitions () {
        var definitions = this.definitions;

        this.definitionChange({
            action: "remove",
            definitions: definitions
        });
        this.definitions = {};
    };

    Node.prototype.renderDefinitions = function renderDefinitions () {
        return renderAllAttr(this.mapDefinitions());
    };

    Node.prototype.mapDefinitions = function mapDefinitions () {
        var this$1 = this;

        var definitions = this.definitions;
        var attrs = [];

        for (var field in definitions) {
            attrs.push([ DefinitionMap[field], this$1.refUrl(definitions[field].id) ]);
        }

        return attrs;
    };

    Node.prototype.refUrl = function refUrl (id) {
        var skipBaseHref = (this.options || {}).skipBaseHref;
        var baseHref = this.baseUrl().replace(/'/g, "\\'");
        var base = skipBaseHref ? '' : baseHref;
        return ("url(" + base + "#" + id + ")");
    };

    Node.prototype.baseUrl = function baseUrl$1 () {
        return baseUrl();
    };

    return Node;
}(base_node/* default */.A));

/* harmony default export */ const node = (Node);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/linear-gradient.js
var linear_gradient = __webpack_require__(70985);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/radial-gradient.js
var radial_gradient = __webpack_require__(98163);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/gradient-stop-node.js



var GradientStopNode = (function (Node) {
    function GradientStopNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) GradientStopNode.__proto__ = Node;
    GradientStopNode.prototype = Object.create( Node && Node.prototype );
    GradientStopNode.prototype.constructor = GradientStopNode;

    GradientStopNode.prototype.template = function template () {
        return ("<stop " + (this.renderOffset()) + " " + (this.renderStyle()) + " />");
    };

    GradientStopNode.prototype.renderOffset = function renderOffset () {
        return renderAttr("offset", this.srcElement.offset());
    };

    GradientStopNode.prototype.mapStyle = function mapStyle () {
        var srcElement = this.srcElement;
        return [
            [ "stop-color", srcElement.color() ],
            [ "stop-opacity", srcElement.opacity() ]
        ];
    };

    GradientStopNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "offset") {
            this.attr(e.field, e.value);
        } else if (e.field === "color" || e.field === "opacity") {
            this.css("stop-" + e.field, e.value);
        }
    };

    return GradientStopNode;
}(node));

/* harmony default export */ const gradient_stop_node = (GradientStopNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/gradient-node.js





var GradientNode = (function (Node) {
    function GradientNode(srcElement) {
        Node.call(this, srcElement);

        this.id = srcElement.id;

        this.loadStops();
    }

    if ( Node ) GradientNode.__proto__ = Node;
    GradientNode.prototype = Object.create( Node && Node.prototype );
    GradientNode.prototype.constructor = GradientNode;

    GradientNode.prototype.loadStops = function loadStops () {
        var this$1 = this;

        var stops = this.srcElement.stops;
        var element = this.element;

        for (var idx = 0; idx < stops.length; idx++) {
            var stopNode = new gradient_stop_node(stops[idx]);
            this$1.append(stopNode);
            if (element) {
                stopNode.attachTo(element);
            }
        }
    };

    GradientNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "gradient.stops") {
            base_node/* default */.A.prototype.clear.call(this);
            this.loadStops();
        } else if (e.field === "gradient") {
            this.allAttr(this.mapCoordinates());
        }
    };

    GradientNode.prototype.renderCoordinates = function renderCoordinates () {
        return renderAllAttr(this.mapCoordinates());
    };

    GradientNode.prototype.mapSpace = function mapSpace () {
        return [ "gradientUnits", this.srcElement.userSpace() ? "userSpaceOnUse" : "objectBoundingBox" ];
    };

    return GradientNode;
}(node));

/* harmony default export */ const gradient_node = (GradientNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/linear-gradient-node.js


var LinearGradientNode = (function (GradientNode) {
    function LinearGradientNode () {
        GradientNode.apply(this, arguments);
    }

    if ( GradientNode ) LinearGradientNode.__proto__ = GradientNode;
    LinearGradientNode.prototype = Object.create( GradientNode && GradientNode.prototype );
    LinearGradientNode.prototype.constructor = LinearGradientNode;

    LinearGradientNode.prototype.template = function template () {
        return ("<linearGradient id='" + (this.id) + "' " + (this.renderCoordinates()) + ">" + (this.renderChildren()) + "</linearGradient>");
    };

    LinearGradientNode.prototype.mapCoordinates = function mapCoordinates () {
        var srcElement = this.srcElement;
        var start = srcElement.start();
        var end = srcElement.end();
        var attrs = [
            [ "x1", start.x ],
            [ "y1", start.y ],
            [ "x2", end.x ],
            [ "y2", end.y ],
            this.mapSpace()
        ];

        return attrs;
    };

    return LinearGradientNode;
}(gradient_node));

/* harmony default export */ const linear_gradient_node = (LinearGradientNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/radial-gradient-node.js


var RadialGradientNode = (function (GradientNode) {
    function RadialGradientNode () {
        GradientNode.apply(this, arguments);
    }

    if ( GradientNode ) RadialGradientNode.__proto__ = GradientNode;
    RadialGradientNode.prototype = Object.create( GradientNode && GradientNode.prototype );
    RadialGradientNode.prototype.constructor = RadialGradientNode;

    RadialGradientNode.prototype.template = function template () {
        return ("<radialGradient id='" + (this.id) + "' " + (this.renderCoordinates()) + ">" + (this.renderChildren()) + "</radialGradient>");
    };

    RadialGradientNode.prototype.mapCoordinates = function mapCoordinates () {
        var srcElement = this.srcElement;
        var center = srcElement.center();
        var radius = srcElement.radius();
        var attrs = [
            [ "cx", center.x ],
            [ "cy", center.y ],
            [ "r", radius ],
            this.mapSpace()
        ];
        return attrs;
    };

    return RadialGradientNode;
}(gradient_node));

/* harmony default export */ const radial_gradient_node = (RadialGradientNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/pattern-node.js


var PatternNode = (function (Node) {
    function PatternNode(pattern) {
        Node.call(this, pattern);

        this.id = pattern.id;
        this.load(pattern.children);
    }

    if ( Node ) PatternNode.__proto__ = Node;
    PatternNode.prototype = Object.create( Node && Node.prototype );
    PatternNode.prototype.constructor = PatternNode;

    PatternNode.prototype.template = function template () {
        var width = this.srcElement.size().getWidth();
        var height = this.srcElement.size().getHeight();

        return "<pattern id='" + (this.srcElement.id) + "' width='" + width + "' height='" + height + "' patternUnits='userSpaceOnUse'>" +
                    "" + (this.renderChildren()) +
                "</pattern>";
    };

    return PatternNode;
}(node));

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/clip-node.js



var ClipNode = (function (Node) {
    function ClipNode(srcElement) {
        Node.call(this);

        this.srcElement = srcElement;
        this.id = srcElement.id;

        this.load([ srcElement ]);
    }

    if ( Node ) ClipNode.__proto__ = Node;
    ClipNode.prototype = Object.create( Node && Node.prototype );
    ClipNode.prototype.constructor = ClipNode;

    ClipNode.prototype.renderClipRule = function renderClipRule () {
        return renderAttr("clip-rule", "evenodd");
    };
    ClipNode.prototype.template = function template () {
        return ("<clipPath " + (this.renderClipRule()) + " id='" + (this.id) + "'>" + (this.renderChildren()) + "</clipPath>");
    };

    return ClipNode;
}(node));

/* harmony default export */ const clip_node = (ClipNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/definition-node.js









var DefinitionNode = (function (Node) {
    function DefinitionNode() {
        Node.call(this);
        this.definitionMap = {};
    }

    if ( Node ) DefinitionNode.__proto__ = Node;
    DefinitionNode.prototype = Object.create( Node && Node.prototype );
    DefinitionNode.prototype.constructor = DefinitionNode;

    DefinitionNode.prototype.attachTo = function attachTo (domElement) {
        this.element = domElement;
    };

    DefinitionNode.prototype.template = function template () {
        return ("<defs>" + (this.renderChildren()) + "</defs>");
    };

    DefinitionNode.prototype.definitionChange = function definitionChange (e) {
        var definitions = e.definitions;
        var action = e.action;

        if (action === "add") {
            this.addDefinitions(definitions);
        } else if (action === "remove") {
            this.removeDefinitions(definitions);
        }
    };

    DefinitionNode.prototype.createDefinition = function createDefinition (type, item) {
        var nodeType;
        if (type === "clip") {
            nodeType = clip_node;
        } else if (type === "fill") {
            if (item instanceof linear_gradient/* default */.A) {
                nodeType = linear_gradient_node;
            } else if (item instanceof radial_gradient/* default */.A) {
                nodeType = radial_gradient_node;
            } else if (item.nodeType === constants/* PATTERN */.XF) {
                nodeType = PatternNode;
            }
        }
        return new nodeType(item);
    };

    DefinitionNode.prototype.addDefinitions = function addDefinitions (definitions) {
        var this$1 = this;

        for (var field in definitions) {
            this$1.addDefinition(field, definitions[field]);
        }
    };

    DefinitionNode.prototype.addDefinition = function addDefinition (type, srcElement) {
        var ref = this;
        var element = ref.element;
        var definitionMap = ref.definitionMap;
        var id = srcElement.id;
        var mapItem = definitionMap[id];
        if (!mapItem) {
            var node = this.createDefinition(type, srcElement);
            definitionMap[id] = {
                element: node,
                count: 1
            };
            this.append(node);
            if (element) {
                node.attachTo(this.element);
            }
        } else {
            mapItem.count++;
        }
    };

    DefinitionNode.prototype.removeDefinitions = function removeDefinitions (definitions) {
        var this$1 = this;

        for (var field in definitions) {
            this$1.removeDefinition(definitions[field]);
        }
    };

    DefinitionNode.prototype.removeDefinition = function removeDefinition (srcElement) {
        var definitionMap = this.definitionMap;
        var id = srcElement.id;
        var mapItem = definitionMap[id];

        if (mapItem) {
            mapItem.count--;
            if (mapItem.count === 0) {
                this.remove(this.childNodes.indexOf(mapItem.element), 1);
                delete definitionMap[id];
            }
        }
    };

    return DefinitionNode;
}(node));

/* harmony default export */ const definition_node = (DefinitionNode);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/root-node.js




var RootNode = (function (Node) {
    function RootNode(options) {
        Node.call(this);
        this.options = options;
        this.defs = new definition_node();
    }

    if ( Node ) RootNode.__proto__ = Node;
    RootNode.prototype = Object.create( Node && Node.prototype );
    RootNode.prototype.constructor = RootNode;

    RootNode.prototype.attachTo = function attachTo (domElement) {
        this.element = domElement;
        this.defs.attachTo(domElement.firstElementChild);
    };

    RootNode.prototype.clear = function clear () {
        base_node/* default */.A.prototype.clear.call(this);
    };

    RootNode.prototype.template = function template () {
        return this.defs.render() + this.renderChildren();
    };

    RootNode.prototype.definitionChange = function definitionChange (e) {
        this.defs.definitionChange(e);
    };

    return RootNode;
}(node));

/* harmony default export */ const root_node = (RootNode);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/group.js
var group = __webpack_require__(29121);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js + 1 modules
var transform = __webpack_require__(95739);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/element-styles.js
var element_styles = __webpack_require__(52883);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/bind-events.js
var bind_events = __webpack_require__(61427);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/unbind-events.js
var unbind_events = __webpack_require__(91418);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/is-transparent.js
var is_transparent = __webpack_require__(92273);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/path-node.js







var ATTRIBUTE_MAP = {
    "fill.opacity": "fill-opacity",
    "stroke.color": "stroke",
    "stroke.width": "stroke-width",
    "stroke.opacity": "stroke-opacity"
};

var PathNode = (function (Node) {
    function PathNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) PathNode.__proto__ = Node;
    PathNode.prototype = Object.create( Node && Node.prototype );
    PathNode.prototype.constructor = PathNode;

    PathNode.prototype.geometryChange = function geometryChange () {
        this.attr("d", this.renderData());
        this.invalidate();
    };

    PathNode.prototype.optionsChange = function optionsChange (e) {
        switch (e.field) {
        case "fill":
            if (e.value) {
                this.allAttr(this.mapFill(e.value));
            } else {
                this.removeAttr("fill");
            }
            break;

        case "fill.color":
            this.allAttr(this.mapFill({ color: e.value }));
            break;

        case "stroke":
            if (e.value) {
                this.allAttr(this.mapStroke(e.value));
            } else {
                this.removeAttr("stroke");
            }
            break;

        case "transform":
            this.transformChange(e.value);
            break;

        default:
            var name = ATTRIBUTE_MAP[e.field];
            if (name) {
                this.attr(name, e.value);
            }
            break;
        }

        this.accessibilityOptionsChange(e);

        Node.prototype.optionsChange.call(this, e);
    };

    PathNode.prototype.content = function content () {
        if (this.element) {
            this.element.textContent = this.srcElement.content();
        }
    };

    PathNode.prototype.renderData = function renderData () {
        return this.srcElement.toString(POINT_DIGITS) || undefined;
    };

    PathNode.prototype.mapStroke = function mapStroke (stroke) {
        var attrs = [];

        if (stroke && !(0,is_transparent/* default */.A)(stroke.color)) {
            attrs.push([ "stroke", stroke.color ]);
            attrs.push([ "stroke-width", stroke.width ]);
            attrs.push([ "stroke-linecap", this.renderLinecap(stroke) ]);
            attrs.push([ "stroke-linejoin", stroke.lineJoin ]);

            if ((0,defined/* default */.A)(stroke.opacity)) {
                attrs.push([ "stroke-opacity", stroke.opacity ]);
            }

            if ((0,defined/* default */.A)(stroke.dashType)) {
                attrs.push([ "stroke-dasharray", this.renderDashType(stroke) ]);
            }
        } else {
            attrs.push([ "stroke", NONE ]);
        }

        return attrs;
    };

    PathNode.prototype.renderStroke = function renderStroke () {
        return renderAllAttr(
            this.mapStroke(this.srcElement.options.stroke)
        );
    };

    PathNode.prototype.renderDashType = function renderDashType (stroke) {
        var dashType = stroke.dashType;
        var width = stroke.width; if ( width === void 0 ) width = 1;

        if (dashType && dashType !== constants/* SOLID */.I$) {
            var dashArray = constants/* DASH_ARRAYS */.MT[dashType.toLowerCase()];
            var result = [];

            for (var i = 0; i < dashArray.length; i++) {
                result.push(dashArray[i] * width);
            }

            return result.join(" ");
        }
    };

    PathNode.prototype.renderLinecap = function renderLinecap (stroke) {
        var dashType = stroke.dashType;
        var lineCap = stroke.lineCap;

        return (dashType && dashType !== constants/* SOLID */.I$) ? constants/* BUTT */.SQ : lineCap;
    };

    PathNode.prototype.mapFill = function mapFill (fill) {
        var attrs = [];
        if (!(fill && (fill.nodeType === "Gradient" || fill.nodeType === constants/* PATTERN */.XF))) {
            if (fill && !(0,is_transparent/* default */.A)(fill.color)) {
                attrs.push([ "fill", fill.color ]);

                if ((0,defined/* default */.A)(fill.opacity)) {
                    attrs.push([ "fill-opacity", fill.opacity ]);
                }
            } else {
                attrs.push([ "fill", NONE ]);
            }
        }

        return attrs;
    };

    PathNode.prototype.renderFill = function renderFill () {
        return renderAllAttr(
            this.mapFill(this.srcElement.options.fill)
        );
    };

    PathNode.prototype.template = function template () {
        return "<path " + (this.renderId()) + " " + (this.renderStyle()) + " " + (this.renderOpacity()) + " " + (renderAttr('d', this.renderData())) +
                "" + (this.renderStroke()) + (this.renderFill()) + (this.renderDefinitions()) + (this.renderTransform()) +
                (this.renderClassName()) + " " + (this.renderRole()) +
                (this.renderAriaLabel()) + " " + (this.renderAriaRoleDescription()) +
                (this.renderAriaChecked()) + " ></path>";
    };

    return PathNode;
}(node));

/* harmony default export */ const path_node = (PathNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/arc-node.js



var ArcNode = (function (PathNode) {
    function ArcNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) ArcNode.__proto__ = PathNode;
    ArcNode.prototype = Object.create( PathNode && PathNode.prototype );
    ArcNode.prototype.constructor = ArcNode;

    ArcNode.prototype.renderData = function renderData () {
        return this.srcElement.toPath().toString(POINT_DIGITS);
    };

    return ArcNode;
}(path_node));

/* harmony default export */ const arc_node = (ArcNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/circle-node.js


var CircleNode = (function (PathNode) {
    function CircleNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) CircleNode.__proto__ = PathNode;
    CircleNode.prototype = Object.create( PathNode && PathNode.prototype );
    CircleNode.prototype.constructor = CircleNode;

    CircleNode.prototype.geometryChange = function geometryChange () {
        var center = this.center();
        this.attr("cx", center.x);
        this.attr("cy", center.y);
        this.attr("r", this.radius());
        this.invalidate();
    };

    CircleNode.prototype.center = function center () {
        return this.srcElement.geometry().center;
    };

    CircleNode.prototype.radius = function radius () {
        return this.srcElement.geometry().radius;
    };

    CircleNode.prototype.template = function template () {
        return "<circle " + (this.renderId()) + " " + (this.renderStyle()) + " " + (this.renderOpacity()) +
                    "cx='" + (this.center().x) + "' cy='" + (this.center().y) + "' r='" + (this.radius()) + "'" +
                    (this.renderStroke()) + " " + (this.renderFill()) + " " + (this.renderDefinitions()) +
                    (this.renderClassName()) + " " + (this.renderRole()) +
                    (this.renderAriaLabel()) + " " + (this.renderAriaRoleDescription()) +
                    (this.renderAriaChecked()) + " " + (this.renderTransform()) + " ></circle>";
    };

    return CircleNode;
}(path_node));

/* harmony default export */ const circle_node = (CircleNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/group-node.js



var GroupNode = (function (Node) {
    function GroupNode () {
        Node.apply(this, arguments);
    }

    if ( Node ) GroupNode.__proto__ = Node;
    GroupNode.prototype = Object.create( Node && Node.prototype );
    GroupNode.prototype.constructor = GroupNode;

    GroupNode.prototype.template = function template () {
        return ("<g" + (this.renderId() + 
            this.renderTransform() + 
            this.renderClassName() + 
            this.renderStyle() + 
            this.renderOpacity() + 
            this.renderRole() + 
            this.renderAriaLabel() + 
            this.renderAriaRoleDescription() + 
            this.renderAriaChecked() +
            this.renderDefinitions()) + ">" + (this.renderChildren()) + "</g>");
    };

    GroupNode.prototype.optionsChange = function optionsChange (e) {
        var field = e.field;
        var value = e.value;

        if (field === "transform") {
            this.transformChange(value);
        }

        this.accessibilityOptionsChange(e);

        Node.prototype.optionsChange.call(this, e);
    };

    return GroupNode;
}(node));

/* harmony default export */ const group_node = (GroupNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/image-node.js




var ImageNode = (function (PathNode) {
    function ImageNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) ImageNode.__proto__ = PathNode;
    ImageNode.prototype = Object.create( PathNode && PathNode.prototype );
    ImageNode.prototype.constructor = ImageNode;

    ImageNode.prototype.geometryChange = function geometryChange () {
        this.allAttr(this.mapPosition());
        this.invalidate();
    };

    ImageNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "src") {
            this.allAttr(this.mapSource());
        }

        PathNode.prototype.optionsChange.call(this, e);
    };

    ImageNode.prototype.mapPosition = function mapPosition () {
        var rect = this.srcElement.rect();
        var tl = rect.topLeft();

        return [
            [ "x", tl.x ],
            [ "y", tl.y ],
            [ "width", rect.width() + "px" ],
            [ "height", rect.height() + "px" ]
        ];
    };

    ImageNode.prototype.renderPosition = function renderPosition () {
        return renderAllAttr(this.mapPosition());
    };

    ImageNode.prototype.mapSource = function mapSource (encode) {
        var src = this.srcElement.src();

        if (encode) {
            src = htmlEncode(src);
        }

        return [ [ "xlink:href", src ] ];
    };

    ImageNode.prototype.renderSource = function renderSource () {
        return renderAllAttr(this.mapSource(true));
    };

    ImageNode.prototype.template = function template () {
        return "<image preserveAspectRatio='none' " + (this.renderId()) + " " + (this.renderStyle()) + " " + (this.renderTransform()) + " " + (this.renderOpacity()) +
               (this.renderPosition()) + " " + (this.renderSource()) + " " + (this.renderDefinitions()) +
               (this.renderClassName()) + " " + (this.renderRole()) +
                (this.renderAriaLabel()) + " " + (this.renderAriaRoleDescription()) +
                (this.renderAriaChecked()) + " >" +
               "</image>";
    };

    return ImageNode;
}(path_node));

/* harmony default export */ const image_node = (ImageNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/multi-path-node.js



var MultiPathNode = (function (PathNode) {
    function MultiPathNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) MultiPathNode.__proto__ = PathNode;
    MultiPathNode.prototype = Object.create( PathNode && PathNode.prototype );
    MultiPathNode.prototype.constructor = MultiPathNode;

    MultiPathNode.prototype.renderData = function renderData () {
        return this.srcElement.toString(POINT_DIGITS) || 'undefined';
    };

    return MultiPathNode;
}(path_node));

/* harmony default export */ const multi_path_node = (MultiPathNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/rect-node.js


var RectNode = (function (PathNode) {
    function RectNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) RectNode.__proto__ = PathNode;
    RectNode.prototype = Object.create( PathNode && PathNode.prototype );
    RectNode.prototype.constructor = RectNode;

    RectNode.prototype.geometryChange = function geometryChange () {
        var geometry = this.srcElement.geometry();
        this.attr("x", geometry.origin.x);
        this.attr("y", geometry.origin.y);
        this.attr("width", geometry.size.width);
        this.attr("height", geometry.size.height);
        this.attr("rx", geometry.cornerRadius[0]);
        this.attr("ry", geometry.cornerRadius[1]);
        this.invalidate();
    };

    RectNode.prototype.size = function size () {
        return this.srcElement.geometry().size;
    };

    RectNode.prototype.origin = function origin () {
        return this.srcElement.geometry().origin;
    };

    RectNode.prototype.rx = function rx () {
        return this.srcElement.geometry().cornerRadius[0];
    };

    RectNode.prototype.ry = function ry () {
        return this.srcElement.geometry().cornerRadius[1];
    };

    RectNode.prototype.template = function template () {
        return "<rect " + (this.renderId()) + " " + (this.renderStyle()) + " " + (this.renderOpacity()) + " x='" + (this.origin().x) + "' y='" + (this.origin().y) + "' " +
                    "rx='" + (this.rx()) + "' ry='" + (this.ry()) + "' " +
                    "width='" + (this.size().width) + "' height='" + (this.size().height) + "' " + (this.renderStroke()) + " " +
                    (this.renderFill()) + " " + (this.renderDefinitions()) + " " + (this.renderTransform()) +
                    (this.renderClassName()) + " " + (this.renderRole()) +
                    (this.renderAriaLabel()) + " " + (this.renderAriaRoleDescription()) +
                    (this.renderAriaChecked()) + " />";
    };

    return RectNode;
}(path_node));

/* harmony default export */ const rect_node = (RectNode);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/text-metrics/util.js
var util = __webpack_require__(71999);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/text-node.js






var ENTITY_REGEX = /&(?:[a-zA-Z]+|#\d+);/g;

function decodeEntities(text) {
    if (!text || typeof text !== "string" || !ENTITY_REGEX.test(text)) {
        return text;
    }

    var element = decodeEntities._element;
    ENTITY_REGEX.lastIndex = 0;

    return text.replace(ENTITY_REGEX, function (match) {
        element.innerHTML = match;

        return element.textContent || element.innerText;
    });
}

if (typeof document !== "undefined") {
    decodeEntities._element = document.createElement("span");
}

var TextNode = (function (PathNode) {
    function TextNode () {
        PathNode.apply(this, arguments);
    }

    if ( PathNode ) TextNode.__proto__ = PathNode;
    TextNode.prototype = Object.create( PathNode && PathNode.prototype );
    TextNode.prototype.constructor = TextNode;

    TextNode.prototype.geometryChange = function geometryChange () {
        var pos = this.pos();
        this.attr("x", pos.x);
        this.attr("y", pos.y);
        this.invalidate();
    };

    TextNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "font") {
            this.attr("style", renderStyle(this.mapStyle()));
            this.geometryChange();
        } else if (e.field === "content") {
            PathNode.prototype.content.call(this, this.srcElement.content());
        }

        PathNode.prototype.optionsChange.call(this, e);
    };

    TextNode.prototype.mapStyle = function mapStyle (encode) {
        var style = PathNode.prototype.mapStyle.call(this, encode);
        var font = this.srcElement.options.font;

        if (encode) {
            font = htmlEncode(font);
        }

        style.push([ "font", font ], [ "white-space", "pre" ]);

        return style;
    };

    TextNode.prototype.pos = function pos () {
        var pos = this.srcElement.position();
        var size = this.srcElement.measure();
        return pos.clone().setY(pos.y + size.baseline);
    };

    TextNode.prototype.renderContent = function renderContent () {
        var content = this.srcElement.content();
        content = decodeEntities(content);
        content = htmlEncode(content);

        return (0,util/* normalizeText */.fQ)(content);
    };

    TextNode.prototype.renderTextAnchor = function renderTextAnchor () {
        var anchor;

        if ((this.options || {}).rtl && !(support/* default */.A.browser.msie || support/* default */.A.browser.edge)) {
            anchor = 'end';
        }

        return renderAttr("text-anchor", anchor);
    };

    TextNode.prototype.renderPaintOrder = function renderPaintOrder () {
        var paintOrder = this.srcElement.options.paintOrder;
        return paintOrder ? renderAttr("paint-order", paintOrder) : "";
    };

    TextNode.prototype.template = function template () {
        return "<text " + (this.renderId()) + " " + (this.renderTextAnchor()) + " " + (this.renderStyle()) + " " + (this.renderOpacity()) +
                    "x='" + (this.pos().x) + "' y='" + (this.pos().y) + "' " + (this.renderStroke()) + " " + (this.renderTransform()) + " " + (this.renderDefinitions()) +
                    "" + (this.renderPaintOrder()) +
                    "" + (this.renderFill()) +
                    (this.renderClassName()) + " " + (this.renderRole()) +
                    (this.renderAriaLabel()) + " " + (this.renderAriaRoleDescription()) +
                    (this.renderAriaChecked()) + ">" + (this.renderContent()) + "</text>";
    };

    return TextNode;
}(path_node));

/* harmony default export */ const text_node = (TextNode);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/svg/surface.js


















node_map.Arc = arc_node;
node_map.Circle = circle_node;
node_map.Group = group_node;
node_map.Image = image_node;
node_map.MultiPath = multi_path_node;
node_map.Path = path_node;
node_map.Rect = rect_node;
node_map.Text = text_node;

var RTL = 'rtl';

function alignToScreen(element) {
    var ctm;

    try {
        ctm = element.getScreenCTM ? element.getScreenCTM() : null;
    } catch (e) { } // eslint-disable-line no-empty

    if (ctm) {
        var left = - ctm.e % 1;
        var top = - ctm.f % 1;
        var style = element.style;

        if (left !== 0 || top !== 0) {
            style.left = left + "px";
            style.top = top + "px";
        }
    }
}

var Surface = (function (BaseSurface) {
    function Surface(element, options) {
        BaseSurface.call(this, element, options);

        this._root = new root_node(Object.assign({
            rtl: (0,element_styles/* default */.A)(element, 'direction').direction === RTL
        }, this.options));

        render_svg(this.element, this._template(''));

        this._rootElement = this.element.firstElementChild;
        this._rootElement.style.width = '100%';
        this._rootElement.style.height = '100%';
        this._rootElement.style.overflow = 'hidden';

        alignToScreen(this._rootElement);

        this._root.attachTo(this._rootElement);

        (0,bind_events/* default */.A)(this.element, {
            click: this._click,
            mouseover: this._mouseenter,
            mouseout: this._mouseleave,
            mousemove: this._mousemove
        });

        this.resize();
    }

    if ( BaseSurface ) Surface.__proto__ = BaseSurface;
    Surface.prototype = Object.create( BaseSurface && BaseSurface.prototype );
    Surface.prototype.constructor = Surface;

    var prototypeAccessors = { type: { configurable: true } };

    prototypeAccessors.type.get = function () {
        return "svg";
    };

    Surface.prototype.destroy = function destroy () {
        if (this._root) {
            this._root.destroy();
            this._root = null;
            this._rootElement = null;
            (0,unbind_events/* default */.A)(this.element, {
                click: this._click,
                mouseover: this._mouseenter,
                mouseout: this._mouseleave,
                mousemove: this._mousemove
            });
        }

        BaseSurface.prototype.destroy.call(this);
    };

    Surface.prototype.translate = function translate (offset) {
        var viewBox = (Math.round(offset.x)) + " " + (Math.round(offset.y)) + " " + (this._size.width) + " " + (this._size.height);

        this._offset = offset;
        this._rootElement.setAttribute("viewBox", viewBox);
    };

    Surface.prototype.draw = function draw (element) {
        BaseSurface.prototype.draw.call(this, element);
        this._root.load([ element ]);
    };

    Surface.prototype.clear = function clear () {
        BaseSurface.prototype.clear.call(this);
        this._root.clear();
    };

    Surface.prototype.svg = function svg () {
        return "<?xml version='1.0' ?>" + this._template();
    };

    Surface.prototype.exportVisual = function exportVisual () {
        var ref = this;
        var visual = ref._visual;
        var offset = ref._offset;

        if (offset) {
            var wrap = new group/* default */.A();
            wrap.children.push(visual);

            wrap.transform(
                (0,transform/* default */.A)().translate(-offset.x, -offset.y)
            );

            visual = wrap;
        }

        return visual;
    };

    Surface.prototype._resize = function _resize () {
        if (this._offset) {
            this.translate(this._offset);
        }
    };

    Surface.prototype._template = function _template (svgStyles) {
        var styles = typeof svgStyles === 'string' ? svgStyles :
            "style='width: 100%; height: 100%; overflow: hidden;' ";
        return ("<svg " + styles + "xmlns='" + SVG_NS + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>" + (this._root.render()) + "</svg>");
    };

    Object.defineProperties( Surface.prototype, prototypeAccessors );

    return Surface;
}(surface/* default */.A));

/* harmony default export */ const svg_surface = (Surface);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/canvas/surface.js + 16 modules
var canvas_surface = __webpack_require__(52185);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/surface-factory.js




var instance;
var surface_factory_support;

var hasDocument = function () { return typeof document !== "undefined"; };

var supportsCanvas = function () { return hasDocument() &&
    document.createElement("canvas").getContext; };

var supportsSVG = function () { return hasDocument() &&
    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"); };

var SurfaceFactory = (function (Class) {
    function SurfaceFactory() {
        Class.call(this);

        this._items = [ {
            name: "svg",
            type: svg_surface
        }, {
            name: "canvas",
            type: canvas_surface/* default */.A
        } ];
    }

    if ( Class ) SurfaceFactory.__proto__ = Class;
    SurfaceFactory.prototype = Object.create( Class && Class.prototype );
    SurfaceFactory.prototype.constructor = SurfaceFactory;

    var staticAccessors = { support: { configurable: true },current: { configurable: true } };

    staticAccessors.support.get = function () {
        if (!surface_factory_support) {
            surface_factory_support = {
                canvas: supportsCanvas(),
                svg: supportsSVG()
            };
        }

        return surface_factory_support;
    };

    staticAccessors.current.get = function () {
        if (!instance) {
            instance = new SurfaceFactory();
        }

        return instance;
    };

    SurfaceFactory.prototype.create = function create (element, options) {
        var items = this._items;
        var match = items[0];

        if (options && options.type) {
            var preferred = options.type.toLowerCase();
            for (var i = 0; i < items.length; i++) {
                if (items[i].name === preferred) {
                    match = items[i];
                    break;
                }
            }
        }

        if (match) {
            return new match.type(element, options);
        }

        (0,log_to_console/* default */.A)(
            "Warning: Unable to create Kendo UI Drawing Surface. Possible causes:\n" +
            "- The browser does not support SVG and Canvas. User agent: " + (navigator.userAgent));
    };

    Object.defineProperties( SurfaceFactory, staticAccessors );

    return SurfaceFactory;
}(common_class/* default */.A));

/* harmony default export */ const surface_factory = (SurfaceFactory);


;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/surface.js



var surface_Surface = (function (BaseSurface) {
    function Surface () {
        BaseSurface.apply(this, arguments);
    }

    if ( BaseSurface ) Surface.__proto__ = BaseSurface;
    Surface.prototype = Object.create( BaseSurface && BaseSurface.prototype );
    Surface.prototype.constructor = Surface;

    var staticAccessors = { support: { configurable: true } };

    staticAccessors.support.get = function () {
        return surface_factory.support;
    };

    Surface.create = function create (element, options) {
        return surface_factory.current.create(element, options);
    };

    Object.defineProperties( Surface, staticAccessors );

    return Surface;
}(surface/* default */.A));

/* harmony default export */ const es_surface = (surface_Surface);



/***/ },

/***/ 85515
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ limitValue)
/* harmony export */ });
function limitValue(value, min, max) {
    return Math.max(Math.min(value, max), min);
}

/***/ },

/***/ 85932
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_has_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33857);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76786);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57011);




var Rect = (function (HasObservers) {
    function Rect(origin, size, cornerRadius) {
        if ( origin === void 0 ) origin = new _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A();
        if ( size === void 0 ) size = new _size__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A();
        if ( cornerRadius === void 0 ) cornerRadius = 0;

        HasObservers.call(this);

        this.setOrigin(origin);
        this.setSize(size);
        this.setCornerRadius(cornerRadius);
    }

    if ( HasObservers ) Rect.__proto__ = HasObservers;
    Rect.prototype = Object.create( HasObservers && HasObservers.prototype );
    Rect.prototype.constructor = Rect;

    Rect.prototype.clone = function clone () {
        return new Rect(
            this.origin.clone(),
            this.size.clone()
        );
    };

    Rect.prototype.equals = function equals (other) {
        return other &&
               other.origin.equals(this.origin) &&
               other.size.equals(this.size);
    };

    Rect.prototype.setOrigin = function setOrigin (value) {
        this._observerField("origin", _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.create(value));
        this.geometryChange();
        return this;
    };

    Rect.prototype.getOrigin = function getOrigin () {
        return this.origin;
    };

    Rect.prototype.setCornerRadius = function setCornerRadius (radius) {
        this.cornerRadius = Array.isArray(radius) ? radius : [ radius, radius ];

        this.geometryChange();
        return this;
    };

    Rect.prototype.getCornerRadius = function getCornerRadius () {
        return this.cornerRadius;
    };

    Rect.prototype.setSize = function setSize (value) {
        this._observerField("size", _size__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.create(value));
        this.geometryChange();
        return this;
    };

    Rect.prototype.getSize = function getSize () {
        return this.size;
    };

    Rect.prototype.width = function width () {
        return this.size.width;
    };

    Rect.prototype.height = function height () {
        return this.size.height;
    };

    Rect.prototype.topLeft = function topLeft () {
        return this.origin.clone();
    };

    Rect.prototype.bottomRight = function bottomRight () {
        return this.origin.clone().translate(this.width(), this.height());
    };

    Rect.prototype.topRight = function topRight () {
        return this.origin.clone().translate(this.width(), 0);
    };

    Rect.prototype.bottomLeft = function bottomLeft () {
        return this.origin.clone().translate(0, this.height());
    };

    Rect.prototype.center = function center () {
        return this.origin.clone().translate(this.width() / 2, this.height() / 2);
    };

    Rect.prototype.bbox = function bbox (matrix) {
        var tl = this.topLeft().transformCopy(matrix);
        var tr = this.topRight().transformCopy(matrix);
        var br = this.bottomRight().transformCopy(matrix);
        var bl = this.bottomLeft().transformCopy(matrix);

        return Rect.fromPoints(tl, tr, br, bl);
    };

    Rect.prototype.transformCopy = function transformCopy (m) {
        return Rect.fromPoints(
            this.topLeft().transform(m),
            this.bottomRight().transform(m)
        );
    };

    Rect.prototype.expand = function expand (x, y) {
        if ( y === void 0 ) y = x;


        this.size.width += 2 * x;
        this.size.height += 2 * y;

        this.origin.translate(-x, -y);

        return this;
    };

    Rect.prototype.expandCopy = function expandCopy (x, y) {
        return this.clone().expand(x, y);
    };

    Rect.prototype.containsPoint = function containsPoint (point) {
        var origin = this.origin;
        var bottomRight = this.bottomRight();
        return !(point.x < origin.x || point.y < origin.y || bottomRight.x < point.x || bottomRight.y < point.y);
    };

    Rect.prototype._isOnPath = function _isOnPath (point, width) {
        var rectOuter = this.expandCopy(width, width);
        var rectInner = this.expandCopy(-width, -width);

        return rectOuter.containsPoint(point) && !rectInner.containsPoint(point);
    };

    Rect.fromPoints = function fromPoints () {
        var topLeft = _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.min.apply(null, arguments);
        var bottomRight = _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.max.apply(null, arguments);
        var size = new _size__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(
            bottomRight.x - topLeft.x,
            bottomRight.y - topLeft.y
        );

        return new Rect(topLeft, size);
    };

    Rect.union = function union (a, b) {
        return Rect.fromPoints(
            _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.min(a.topLeft(), b.topLeft()),
            _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.max(a.bottomRight(), b.bottomRight())
        );
    };

    Rect.intersect = function intersect (a, b) {
        var rect1 = {
            left: a.topLeft().x,
            top: a.topLeft().y,
            right: a.bottomRight().x,
            bottom: a.bottomRight().y
        };

        var rect2 = {
            left: b.topLeft().x,
            top: b.topLeft().y,
            right: b.bottomRight().x,
            bottom: b.bottomRight().y
        };

        if (rect1.left <= rect2.right &&
            rect2.left <= rect1.right &&
            rect1.top <= rect2.bottom &&
            rect2.top <= rect1.bottom) {
            return Rect.fromPoints(
                new _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(Math.max(rect1.left, rect2.left), Math.max(rect1.top, rect2.top)),
                new _point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(Math.min(rect1.right, rect2.right), Math.min(rect1.bottom, rect2.bottom))
            );
        }
    };

    return Rect;
}(_core_has_observers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);


/***/ },

/***/ 87816
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ gradient)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/shapes/elements-array.js
var elements_array = __webpack_require__(16333);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/stops-array.js


var StopsArray = (function (ElementsArray) {
    function StopsArray () {
        ElementsArray.apply(this, arguments);
    }

    if ( ElementsArray ) StopsArray.__proto__ = ElementsArray;
    StopsArray.prototype = Object.create( ElementsArray && ElementsArray.prototype );
    StopsArray.prototype.constructor = StopsArray;

    StopsArray.prototype._change = function _change () {
        this.optionsChange({
            field: "stops"
        });
    };

    return StopsArray;
}(elements_array/* default */.A));

/* harmony default export */ const stops_array = (StopsArray);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/options-store.js
var options_store = __webpack_require__(11437);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var defined = __webpack_require__(5865);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/mixins/with-options.js


function optionsAccessor(name) {
    return function(value) {
        if ((0,defined/* default */.A)(value)) {
            this.options.set(name, value);
            return this;
        }

        return this.options.get(name);
    };
}

function defineOptionsAccessors(fn, names) {
    for (var i = 0; i < names.length; i++) {
        fn[names[i]] = optionsAccessor(names[i]);
    }
}

var withOptions = function (TBase, names) {
    var result = (function (TBase) {
        function result () {
            TBase.apply(this, arguments);
        }if ( TBase ) result.__proto__ = TBase;
        result.prototype = Object.create( TBase && TBase.prototype );
        result.prototype.constructor = result;

        

        return result;
    }(TBase));
    defineOptionsAccessors(result.prototype, names);

    return result;
};

/* harmony default export */ const with_options = (withOptions);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var has_observers = __webpack_require__(33857);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/gradient-stop.js






var options = [ "offset", "color", "opacity" ];

var GradientStop = (function (superclass) {
    function GradientStop(offset, color, opacity) {
        superclass.call(this);

        this.options = new options_store/* default */.A({
            offset: offset,
            color: color,
            opacity: (0,defined/* default */.A)(opacity) ? opacity : 1
        });

        this.options.addObserver(this);
    }

    if ( superclass ) GradientStop.__proto__ = superclass;
    GradientStop.prototype = Object.create( superclass && superclass.prototype );
    GradientStop.prototype.constructor = GradientStop;

    GradientStop.create = function create (arg) {
        if ((0,defined/* default */.A)(arg)) {
            var stop;
            if (arg instanceof GradientStop) {
                stop = arg;
            } else if (arg.length > 1) {
                stop = new GradientStop(arg[0], arg[1], arg[2]);
            } else {
                stop = new GradientStop(arg.offset, arg.color, arg.opacity);
            }

            return stop;
        }
    };

    return GradientStop;
}(with_options(has_observers/* default */.A, options)));

/* harmony default export */ const gradient_stop = (GradientStop);

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/util/definition-id.js
var definition_id = __webpack_require__(91681);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/gradients/gradient.js





var Gradient = (function (HasObservers) {
    function Gradient(options) {
        if ( options === void 0 ) options = {};

        HasObservers.call(this);

        this.stops = new stops_array(this._createStops(options.stops));
        this.stops.addObserver(this);
        this._userSpace = options.userSpace;
        this.id = (0,definition_id/* default */.A)();
    }

    if ( HasObservers ) Gradient.__proto__ = HasObservers;
    Gradient.prototype = Object.create( HasObservers && HasObservers.prototype );
    Gradient.prototype.constructor = Gradient;

    var prototypeAccessors = { nodeType: { configurable: true } };

    prototypeAccessors.nodeType.get = function () {
        return "Gradient";
    };

    Gradient.prototype.userSpace = function userSpace (value) {
        if ((0,defined/* default */.A)(value)) {
            this._userSpace = value;
            this.optionsChange();
            return this;
        }

        return this._userSpace;
    };

    Gradient.prototype._createStops = function _createStops (stops) {
        if ( stops === void 0 ) stops = [];

        var result = [];
        for (var idx = 0; idx < stops.length; idx++) {
            result.push(gradient_stop.create(stops[idx]));
        }

        return result;
    };

    Gradient.prototype.addStop = function addStop (offset, color, opacity) {
        this.stops.push(new gradient_stop(offset, color, opacity));
    };

    Gradient.prototype.removeStop = function removeStop (stop) {
        var index = this.stops.indexOf(stop);
        if (index >= 0) {
            this.stops.splice(index, 1);
        }
    };

    Gradient.prototype.optionsChange = function optionsChange (e) {
        this.trigger("optionsChange", {
            field: "gradient" + (e ? "." + e.field : ""),
            value: this
        });
    };

    Gradient.prototype.geometryChange = function geometryChange () {
        this.optionsChange();
    };

    Object.defineProperties( Gradient.prototype, prototypeAccessors );

    return Gradient;
}(has_observers/* default */.A));

/* harmony default export */ const gradient = (Gradient);


/***/ },

/***/ 91418
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ unbindEvents)
/* harmony export */ });
function unbindEvents(element, events) {
    if ( events === void 0 ) events = {};

    for (var name in events) {
        var eventNames = name.trim().split(" ");
        for (var idx = 0; idx < eventNames.length; idx++) {
            element.removeEventListener(eventNames[idx], events[name], false);
        }
    }
}

/***/ },

/***/ 91681
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ definitionId)
/* harmony export */ });
var defId = 1;

function definitionId() {
    return "kdef" + defId++;
}

/***/ },

/***/ 92273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isTransparent)
/* harmony export */ });
/* harmony import */ var _defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5865);


function isTransparent(color) {
    return color === "" || color === null || color === "none" || color === "transparent" || !(0,_defined__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(color);
}

/***/ },

/***/ 93015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ promiseAll)
/* harmony export */ });
function promiseAll(promises) {
    return Promise.all(promises);
}

/***/ },

/***/ 93405
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ mergeSort)
/* harmony export */ });
/* eslint-disable no-multi-spaces, key-spacing, indent, camelcase, space-before-blocks, eqeqeq, brace-style */
/* eslint-disable space-infix-ops, space-before-function-paren, array-bracket-spacing, object-curly-spacing */
/* eslint-disable no-nested-ternary, max-params, default-case, no-else-return, no-empty */
/* eslint-disable no-param-reassign, no-var, block-scoped-var */

// mergeSort is stable.
function mergeSort(a, cmp) {
    if (a.length < 2) {
        return a.slice();
    }
    function merge(a, b) {
        var r = [], ai = 0, bi = 0, i = 0;
        while (ai < a.length && bi < b.length) {
            if (cmp(a[ai], b[bi]) <= 0) {
                r[i++] = a[ai++];
            } else {
                r[i++] = b[bi++];
            }
        }
        if (ai < a.length) {
            r.push.apply(r, a.slice(ai));
        }
        if (bi < b.length) {
            r.push.apply(r, b.slice(bi));
        }
        return r;
    }
    return (function sort(a) {
        if (a.length <= 1) {
            return a;
        }
        var m = Math.floor(a.length / 2);
        var left = a.slice(0, m);
        var right = a.slice(m);
        left = sort(left);
        right = sort(right);
        return merge(left, right);
    })(a);
}

/***/ },

/***/ 94725
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var traversable = function (TBase, childrenField) { return (
    (function (TBase) {
        function anonymous () {
            TBase.apply(this, arguments);
        }

        if ( TBase ) anonymous.__proto__ = TBase;
        anonymous.prototype = Object.create( TBase && TBase.prototype );
        anonymous.prototype.constructor = anonymous;

        anonymous.prototype.traverse = function traverse (callback) {
            var children = this[childrenField];

            for (var i = 0; i < children.length; i++) {
                var child = children[i];

                if (child.traverse) {
                    child.traverse(callback);
                } else {
                    callback(child);
                }
            }

            return this;
        };

        return anonymous;
    }(TBase))
); };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (traversable);


/***/ },

/***/ 95739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ transform)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var has_observers = __webpack_require__(33857);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/to-matrix.js
var to_matrix = __webpack_require__(61377);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/matrix.js
var geometry_matrix = __webpack_require__(53419);
// EXTERNAL MODULE: ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var point = __webpack_require__(76786);
;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transformation.js





var Transformation = (function (HasObservers) {
    function Transformation(matrix) {
        if ( matrix === void 0 ) matrix = geometry_matrix/* default */.A.unit();

        HasObservers.call(this);

        this._matrix = matrix;
    }

    if ( HasObservers ) Transformation.__proto__ = HasObservers;
    Transformation.prototype = Object.create( HasObservers && HasObservers.prototype );
    Transformation.prototype.constructor = Transformation;

    Transformation.prototype.clone = function clone () {
        return new Transformation(
            this._matrix.clone()
        );
    };

    Transformation.prototype.equals = function equals (other) {
        return other &&
               other._matrix.equals(this._matrix);
    };

    Transformation.prototype.translate = function translate (x, y) {
        this._matrix = this._matrix.multiplyCopy(geometry_matrix/* default */.A.translate(x, y));

        this._optionsChange();
        return this;
    };

    Transformation.prototype.scale = function scale (scaleX, scaleY, origin) {
        if ( scaleY === void 0 ) scaleY = scaleX;
        if ( origin === void 0 ) origin = null;

        var originPoint = origin;

        if (originPoint) {
            originPoint = point/* default */.A.create(originPoint);
            this._matrix = this._matrix.multiplyCopy(geometry_matrix/* default */.A.translate(originPoint.x, originPoint.y));
        }

        this._matrix = this._matrix.multiplyCopy(geometry_matrix/* default */.A.scale(scaleX, scaleY));

        if (originPoint) {
            this._matrix = this._matrix.multiplyCopy(geometry_matrix/* default */.A.translate(-originPoint.x, -originPoint.y));
        }

        this._optionsChange();
        return this;
    };

    Transformation.prototype.rotate = function rotate (angle, origin) {
        var originPoint = point/* default */.A.create(origin) || point/* default */.A.ZERO;

        this._matrix = this._matrix.multiplyCopy(geometry_matrix/* default */.A.rotate(angle, originPoint.x, originPoint.y));

        this._optionsChange();
        return this;
    };

    Transformation.prototype.multiply = function multiply (transformation) {
        var matrix = (0,to_matrix/* default */.A)(transformation);

        this._matrix = this._matrix.multiplyCopy(matrix);

        this._optionsChange();
        return this;
    };

    Transformation.prototype.matrix = function matrix (value) {
        if (value) {
            this._matrix = value;
            this._optionsChange();
            return this;
        }

        return this._matrix;
    };

    Transformation.prototype._optionsChange = function _optionsChange () {
        this.optionsChange({
            field: "transform",
            value: this
        });
    };

    return Transformation;
}(has_observers/* default */.A));

/* harmony default export */ const transformation = (Transformation);

;// ../node_modules/.pnpm/@progress+kendo-drawing@1.21.2/node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js


function transform(matrix) {
    if (matrix === null) {
        return null;
    }

    if (matrix instanceof transformation) {
        return matrix;
    }

    return new transformation(matrix);
}

/***/ },

/***/ 96276
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ round)
/* harmony export */ });
function pow(p) {
    if (p) {
        return Math.pow(10, p);
    }

    return 1;
}

function round(value, precision) {
    var power = pow(precision);
    return Math.round(value * power) / power;
}

/***/ },

/***/ 97704
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ lineIntersectionsCount)
/* harmony export */ });
function lineIntersectionsCount(a, b, point) {
    var intersects;
    if (a.x !== b.x) {
        var minX = Math.min(a.x, b.x);
        var maxX = Math.max(a.x, b.x);
        var minY = Math.min(a.y, b.y);
        var maxY = Math.max(a.y, b.y);
        var inRange = minX <= point.x && point.x < maxX;

        if (minY === maxY) {
            intersects = point.y <= minY && inRange;
        } else {
            intersects = inRange && (((maxY - minY) * ((a.x - b.x) * (a.y - b.y) > 0 ? point.x - minX : maxX - point.x)) / (maxX - minX) + minY - point.y) >= 0;
        }
    }

    return intersects ? 1 : 0;
}

/***/ },

/***/ 98037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ logToConsole)
/* harmony export */ });
/* eslint-disable no-console */

function logToConsole(message) {
    var console = window.console;

    if (typeof(console) != "undefined" && console.log) {
        console.log(message);
    }
}

/***/ },

/***/ 98163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_with_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30478);
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76786);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87816);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5865);






var RadialGradient = (function (superclass) {
    function RadialGradient(options) {
        if ( options === void 0 ) options = {};

        superclass.call(this, options);

        this.center(options.center || new _geometry_point__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A());
        this._radius = (0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(options.radius) ? options.radius : 1;
        this._fallbackFill = options.fallbackFill;
    }

    if ( superclass ) RadialGradient.__proto__ = superclass;
    RadialGradient.prototype = Object.create( superclass && superclass.prototype );
    RadialGradient.prototype.constructor = RadialGradient;

    RadialGradient.prototype.radius = function radius (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)) {
            this._radius = value;
            this.geometryChange();
            return this;
        }

        return this._radius;
    };

    RadialGradient.prototype.fallbackFill = function fallbackFill (value) {
        if ((0,_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)) {
            this._fallbackFill = value;
            this.optionsChange();
            return this;
        }

        return this._fallbackFill;
    };

    return RadialGradient;
}((0,_mixins_with_points__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_gradient__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, [ "center" ])));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadialGradient);


/***/ },

/***/ 99867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ rad)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8441);


function rad(degrees) {
    return degrees * _constants__WEBPACK_IMPORTED_MODULE_0__/* .DEG_TO_RAD */ .Td;
}


/***/ }

}]);