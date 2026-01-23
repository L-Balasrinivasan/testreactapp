"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[1911,8420],{

/***/ 12007
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ },

/***/ 78420
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ },

/***/ 91911
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X5: () => (/* binding */ x),
  zW: () => (/* binding */ D),
  gN: () => (/* binding */ $),
  sM: () => (/* binding */ ne)
});

// UNUSED EXPORTS: AnimationChild, Expand, Push, Slide, Zoom

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var index_js_ = __webpack_require__(51347);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-commo_42e293437ee7197a19d3bc5d61ca2277/node_modules/@progress/kendo-react-common/index.mjs)
var index_mjs_ = __webpack_require__(15748);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(78420);
// EXTERNAL MODULE: ../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(12007);
;// ../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// ../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.2 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var node_modules_prop_types_index_js_ = __webpack_require__(62239);
;// ../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// ../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// ../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: consume shared module (default) react@>=16.6.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js)
var react_index_js_ = __webpack_require__(97173);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
// EXTERNAL MODULE: consume shared module (default) react-dom@>=16.6.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(69741);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (react_index_js_default().createContext(null));
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_index_js_default().findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom_index_js_default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom_index_js_default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_index_js_default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react_index_js_default().createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react_index_js_default().cloneElement(react_index_js_default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react_index_js_default()).Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["classNames"]);

    return /*#__PURE__*/react_index_js_default().createElement(esm_Transition, (0,esm_extends/* default */.A)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react_index_js_default()).Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ const esm_CSSTransition = (CSSTransition);
;// ../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react_index_js_.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react_index_js_.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react_index_js_.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react_index_js_.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react_index_js_.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react_index_js_.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react_index_js_.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react_index_js_.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react_index_js_.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// ../node_modules/.pnpm/react-transition-group@4.4._da831d36a8deb909a697f1ae42e5b13f/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.A)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react_index_js_default().createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react_index_js_default().createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react_index_js_default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react_index_js_default()).Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);
;// ../node_modules/.pnpm/@progress+kendo-react-anima_d340740727e8c77cf4b90f2671b417b1/node_modules/@progress/kendo-react-animation/index.mjs
/**-----------------------------------------------------------------------------------------
* Copyright © 2024 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the package root for more information
*-------------------------------------------------------------------------------------------*/
"use client";




const G = (o) => {
  if (!o || !o.ownerDocument.defaultView)
    return 0;
  const t = o.ownerDocument.defaultView.getComputedStyle(o), n = parseFloat(t.marginTop), s = parseFloat(t.marginBottom);
  return o.offsetHeight + n + s;
}, K = (o) => {
  if (!o || !o.ownerDocument.defaultView)
    return 0;
  const t = o.ownerDocument.defaultView.getComputedStyle(o), n = parseFloat(t.marginLeft), s = parseFloat(t.marginRight);
  return o.offsetWidth + n + s;
}, X = {
  "animation-container": "k-animation-container",
  "animation-container-shown": "k-animation-container-shown",
  "animation-container-relative": "k-animation-container-relative",
  "animation-container-fixed": "k-animation-container-fixed",
  "push-right-enter": "k-push-right-enter",
  "push-right-appear": "k-push-right-appear",
  "push-right-enter-active": "k-push-right-enter-active",
  "push-right-appear-active": "k-push-right-appear-active",
  "push-right-exit": "k-push-right-exit",
  "push-right-exit-active": "k-push-right-exit-active",
  "push-left-enter": "k-push-left-enter",
  "push-left-appear": "k-push-left-appear",
  "push-left-enter-active": "k-push-left-enter-active",
  "push-left-appear-active": "k-push-left-appear-active",
  "push-left-exit": "k-push-left-exit",
  "push-left-exit-active": "k-push-left-exit-active",
  "push-down-enter": "k-push-down-enter",
  "push-down-appear": "k-push-down-appear",
  "push-down-enter-active": "k-push-down-enter-active",
  "push-down-appear-active": "k-push-down-appear-active",
  "push-down-exit": "k-push-down-exit",
  "push-down-exit-active": "k-push-down-exit-active",
  "push-up-enter": "k-push-up-enter",
  "push-up-appear": "k-push-up-appear",
  "push-up-enter-active": "k-push-up-enter-active",
  "push-up-appear-active": "k-push-up-appear-active",
  "push-up-exit": "k-push-up-exit",
  "push-up-exit-active": "k-push-up-exit-active",
  expand: "k-expand",
  "expand-vertical-enter": "k-expand-vertical-enter",
  "expand-vertical-appear": "k-expand-vertical-appear",
  "expand-vertical-enter-active": "k-expand-vertical-enter-active",
  "expand-vertical-appear-active": "k-expand-vertical-appear-active",
  "expand-vertical-exit": "k-expand-vertical-exit",
  "expand-vertical-exit-active": "k-expand-vertical-exit-active",
  "expand-horizontal-enter": "k-expand-horizontal-enter",
  "expand-horizontal-appear": "k-expand-horizontal-appear",
  "expand-horizontal-enter-active": "k-expand-horizontal-enter-active",
  "expand-horizontal-appear-active": "k-expand-horizontal-appear-active",
  "expand-horizontal-exit": "k-expand-horizontal-exit",
  "expand-horizontal-exit-active": "k-expand-horizontal-exit-active",
  "child-animation-container": "k-child-animation-container",
  "fade-enter": "k-fade-enter",
  "fade-appear": "k-fade-appear",
  "fade-enter-active": "k-fade-enter-active",
  "fade-appear-active": "k-fade-appear-active",
  "fade-exit": "k-fade-exit",
  "fade-exit-active": "k-fade-exit-active",
  "zoom-in-enter": "k-zoom-in-enter",
  "zoom-in-appear": "k-zoom-in-appear",
  "zoom-in-enter-active": "k-zoom-in-enter-active",
  "zoom-in-appear-active": "k-zoom-in-appear-active",
  "zoom-in-exit": "k-zoom-in-exit",
  "zoom-in-exit-active": "k-zoom-in-exit-active",
  "zoom-out-enter": "k-zoom-out-enter",
  "zoom-out-appear": "k-zoom-out-appear",
  "zoom-out-enter-active": "k-zoom-out-enter-active",
  "zoom-out-appear-active": "k-zoom-out-appear-active",
  "zoom-out-exit": "k-zoom-out-exit",
  "zoom-out-exit-active": "k-zoom-out-exit-active",
  "slide-in-appear": "k-slide-in-appear",
  centered: "k-centered",
  "slide-in-appear-active": "k-slide-in-appear-active",
  "slide-down-enter": "k-slide-down-enter",
  "slide-down-appear": "k-slide-down-appear",
  "slide-down-enter-active": "k-slide-down-enter-active",
  "slide-down-appear-active": "k-slide-down-appear-active",
  "slide-down-exit": "k-slide-down-exit",
  "slide-down-exit-active": "k-slide-down-exit-active",
  "slide-up-enter": "k-slide-up-enter",
  "slide-up-appear": "k-slide-up-appear",
  "slide-up-enter-active": "k-slide-up-enter-active",
  "slide-up-appear-active": "k-slide-up-appear-active",
  "slide-up-exit": "k-slide-up-exit",
  "slide-up-exit-active": "k-slide-up-exit-active",
  "slide-right-enter": "k-slide-right-enter",
  "slide-right-appear": "k-slide-right-appear",
  "slide-right-enter-active": "k-slide-right-enter-active",
  "slide-right-appear-active": "k-slide-right-appear-active",
  "slide-right-exit": "k-slide-right-exit",
  "slide-right-exit-active": "k-slide-right-exit-active",
  "slide-left-enter": "k-slide-left-enter",
  "slide-left-appear": "k-slide-left-appear",
  "slide-left-enter-active": "k-slide-left-enter-active",
  "slide-left-appear-active": "k-slide-left-appear-active",
  "slide-left-exit": "k-slide-left-exit",
  "slide-left-exit-active": "k-slide-left-exit-active",
  "reveal-vertical-enter": "k-reveal-vertical-enter",
  "reveal-vertical-appear": "k-reveal-vertical-appear",
  "reveal-vertical-enter-active": "k-reveal-vertical-enter-active",
  "reveal-vertical-appear-active": "k-reveal-vertical-appear-active",
  "reveal-vertical-exit": "k-reveal-vertical-exit",
  "reveal-vertical-exit-active": "k-reveal-vertical-exit-active",
  "reveal-horizontal-enter": "k-reveal-horizontal-enter",
  "reveal-horizontal-appear": "k-reveal-horizontal-appear",
  "reveal-horizontal-enter-active": "k-reveal-horizontal-enter-active",
  "reveal-horizontal-appear-active": "k-reveal-horizontal-appear-active",
  "reveal-horizontal-exit": "k-reveal-horizontal-exit",
  "reveal-horizontal-exit-active": "k-reveal-horizontal-exit-active"
}, Y = {
  outerHeight: G,
  outerWidth: K,
  styles: X
}, g = Y, k = g.styles;
class E extends index_js_.Component {
  constructor() {
    super(...arguments), this.elementRef = index_js_.createRef();
  }
  /**
   * The element that is being animated.
   */
  get element() {
    return this.elementRef.current;
  }
  /**
   * @hidden
   */
  render() {
    const {
      children: i,
      style: t,
      appear: n,
      enter: s,
      exit: c,
      transitionName: r,
      transitionEnterDuration: l,
      transitionExitDuration: d,
      className: h,
      onEnter: u,
      onEntering: p,
      onEntered: f,
      onExit: m,
      onExiting: y,
      onExited: w,
      onAfterExited: z,
      mountOnEnter: b,
      unmountOnExit: F,
      animationEnteringStyle: A,
      animationEnteredStyle: P,
      animationExitingStyle: W,
      animationExitedStyle: H,
      ...I
    } = this.props, q = (0,index_mjs_.classNames)(
      h,
      k["child-animation-container"]
    ), L = {
      transitionDelay: "0ms",
      ...t
    }, M = {
      entering: { transitionDuration: `${l}ms`, ...A },
      entered: { ...P },
      exiting: { transitionDuration: `${d}ms`, ...W },
      exited: { ...H }
    }, U = {
      in: this.props.in,
      appear: n,
      enter: s,
      exit: c,
      mountOnEnter: b,
      unmountOnExit: F,
      timeout: {
        enter: l,
        exit: d
      },
      onEnter: () => {
        u && u.call(void 0, { animatedElement: this.element, target: this });
      },
      onEntering: () => {
        p && p.call(void 0, { animatedElement: this.element, target: this });
      },
      onEntered: () => {
        f && f.call(void 0, { animatedElement: this.element, target: this });
      },
      onExit: () => {
        m && m.call(void 0, { animatedElement: this.element, target: this });
      },
      onExiting: () => {
        y && y.call(void 0, { animatedElement: this.element, target: this });
      },
      onExited: () => {
        z && z.call(void 0, { animatedElement: this.element, target: this }), w && w.call(void 0, { animatedElement: this.element, target: this });
      },
      classNames: {
        appear: k[`${r}-appear`] || `${r}-appear`,
        appearActive: k[`${r}-appear-active`] || `${r}-appear-active`,
        enter: k[`${r}-enter`] || `${r}-enter`,
        enterActive: k[`${r}-enter-active`] || `${r}-enter-active`,
        exit: k[`${r}-exit`] || `${r}-exit`,
        exitActive: k[`${r}-exit-active`] || `${r}-exit-active`
      }
    };
    return /* @__PURE__ */ index_js_.createElement(esm_CSSTransition, { ...U, ...I, nodeRef: this.elementRef }, (j) => /* @__PURE__ */ index_js_.createElement(
      "div",
      {
        style: {
          ...L,
          ...M[j]
        },
        className: q,
        ref: this.elementRef
      },
      i
    ));
  }
}
E.propTypes = {
  in: prop_types_index_js_.bool,
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  transitionName: prop_types_index_js_.string.isRequired,
  className: prop_types_index_js_.string,
  appear: prop_types_index_js_.bool,
  enter: prop_types_index_js_.bool,
  exit: prop_types_index_js_.bool,
  transitionEnterDuration: prop_types_index_js_.number.isRequired,
  transitionExitDuration: prop_types_index_js_.number.isRequired,
  mountOnEnter: prop_types_index_js_.bool,
  unmountOnExit: prop_types_index_js_.bool,
  animationEnteringStyle: prop_types_index_js_.object,
  animationEnteredStyle: prop_types_index_js_.object,
  animationExitingStyle: prop_types_index_js_.object,
  animationExitedStyle: prop_types_index_js_.object
};
E.defaultProps = {
  mountOnEnter: !0,
  unmountOnExit: !1,
  onEnter: index_mjs_.noop,
  onEntering: index_mjs_.noop,
  onEntered: index_mjs_.noop,
  onExit: index_mjs_.noop,
  onExiting: index_mjs_.noop,
  onExited: index_mjs_.noop,
  onAfterExited: index_mjs_.noop,
  animationEnteringStyle: {},
  animationEnteredStyle: {},
  animationExitingStyle: {},
  animationExitedStyle: {}
};
const Z = {
  name: "@progress/kendo-react-animation",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1708613301,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/components/my-license/"
}, N = g.styles;
class x extends index_js_.Component {
  constructor(i) {
    super(i), (0,index_mjs_.validatePackage)(Z);
  }
  /**
   * @hidden
   */
  render() {
    const {
      id: i,
      style: t,
      children: n,
      component: s,
      className: c,
      childFactory: r,
      stackChildren: l,
      componentChildStyle: d,
      componentChildClassName: h,
      ...u
    } = this.props, p = {
      id: i,
      style: t,
      component: s,
      childFactory: r,
      className: (0,index_mjs_.classNames)(
        N["animation-container"],
        N["animation-container-relative"],
        c
      )
    }, f = index_js_.Children.map(n || null, (m) => /* @__PURE__ */ index_js_.createElement(
      E,
      {
        ...u,
        style: d,
        className: h
      },
      m
    ));
    return /* @__PURE__ */ index_js_.createElement(esm_TransitionGroup, { ...p }, f);
  }
}
x.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any,
  transitionName: prop_types_index_js_.string.isRequired,
  appear: prop_types_index_js_.bool.isRequired,
  enter: prop_types_index_js_.bool.isRequired,
  exit: prop_types_index_js_.bool.isRequired,
  transitionEnterDuration: prop_types_index_js_.number.isRequired,
  transitionExitDuration: prop_types_index_js_.number.isRequired
};
x.defaultProps = {
  component: "div"
};
class D extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    const {
      children: i,
      ...t
    } = this.props, n = {
      transitionName: "fade"
    };
    return /* @__PURE__ */ index_js_.createElement(x, { ...n, ...t }, i);
  }
}
D.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any
};
D.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !1,
  transitionEnterDuration: 500,
  transitionExitDuration: 500
};
class O extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    const {
      direction: i,
      children: t,
      ...n
    } = this.props, s = {
      transitionName: `expand-${i}`
    };
    return /* @__PURE__ */ index_js_.createElement(x, { ...s, ...n }, t);
  }
}
O.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf([
    "horizontal",
    "vertical"
  ]),
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any
};
O.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !0,
  transitionEnterDuration: 300,
  transitionExitDuration: 300,
  direction: "vertical"
};
const J = { position: "absolute", top: "0", left: "0" };
class S extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    const {
      children: i,
      direction: t,
      ...n
    } = this.props;
    return /* @__PURE__ */ index_js_.createElement(
      x,
      {
        ...n,
        transitionName: `push-${t}`,
        animationExitingStyle: this.props.stackChildren ? J : void 0
      },
      i
    );
  }
}
S.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf([
    "up",
    "down",
    "left",
    "right"
  ]),
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any,
  stackChildren: prop_types_index_js_.bool
};
S.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !0,
  transitionEnterDuration: 300,
  transitionExitDuration: 300,
  direction: "right",
  stackChildren: !1
};
class T extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    const {
      direction: i,
      children: t,
      ...n
    } = this.props, s = {
      transitionName: `slide-${i}`
    };
    return /* @__PURE__ */ index_js_.createElement(x, { ...s, ...n }, t);
  }
}
T.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf([
    "up",
    "down",
    "left",
    "right"
  ]),
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any
};
T.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !0,
  transitionEnterDuration: 300,
  transitionExitDuration: 300,
  direction: "down"
};
const Q = { position: "absolute", top: "0", left: "0" };
class R extends index_js_.Component {
  /**
   * @hidden
   */
  render() {
    const {
      children: i,
      direction: t,
      ...n
    } = this.props;
    return /* @__PURE__ */ index_js_.createElement(
      x,
      {
        ...n,
        transitionName: `zoom-${t}`,
        animationExitingStyle: this.props.stackChildren ? Q : void 0
      },
      i
    );
  }
}
R.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf([
    "in",
    "out"
  ]),
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any,
  stackChildren: prop_types_index_js_.bool
};
R.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !0,
  transitionEnterDuration: 300,
  transitionExitDuration: 300,
  direction: "out",
  stackChildren: !1
};
class $ extends index_js_.Component {
  constructor() {
    super(...arguments), this.state = {
      maxHeight: void 0,
      maxWidth: void 0
    }, this.componentWillEnter = (i) => {
      const { onEnter: t, onBeforeEnter: n } = this.props;
      n && n.call(void 0, i), this.updateContainerDimensions(i.animatedElement, () => {
        t && t.call(void 0, i);
      });
    }, this.componentIsEntering = (i) => {
      const { onEntering: t } = this.props;
      this.updateContainerDimensions(i.animatedElement, () => {
        t && t.call(void 0, i);
      });
    }, this.componentWillExit = (i) => {
      const { onExit: t } = this.props;
      this.updateContainerDimensions(i.animatedElement, () => {
        t && t.call(void 0, i);
      });
    }, this.updateContainerDimensions = (i, t = index_mjs_.noop) => {
      const n = i.firstChild;
      if (n) {
        const s = g.outerHeight(n), c = g.outerWidth(n);
        this.setState(
          {
            maxHeight: s,
            maxWidth: c
          },
          t
        );
      }
    };
  }
  /**
   * @hidden
   */
  render() {
    const {
      direction: i,
      children: t,
      childFactory: n,
      ...s
    } = this.props, {
      maxHeight: c,
      maxWidth: r
    } = this.state;
    let l;
    i === "vertical" ? l = { maxHeight: c ? `${c}px` : "" } : l = { maxWidth: r ? `${r}px` : "" };
    const d = {
      maxHeight: l.maxHeight,
      maxWidth: l.maxWidth
    }, h = (u) => {
      let p = n ? n(u) : u;
      return p.props.in ? p : index_js_.cloneElement(p, {
        ...p.props,
        style: {
          ...p.props.style,
          maxHeight: l.maxHeight,
          maxWidth: l.maxWidth
        }
      });
    };
    return /* @__PURE__ */ index_js_.createElement(
      x,
      {
        ...s,
        childFactory: h,
        onEnter: this.componentWillEnter,
        onEntering: this.componentIsEntering,
        onExit: this.componentWillExit,
        animationEnteringStyle: d,
        transitionName: `reveal-${i}`
      },
      t
    );
  }
}
$.propTypes = {
  children: prop_types_index_js_.oneOfType([
    prop_types_index_js_.arrayOf(prop_types_index_js_.node),
    prop_types_index_js_.node
  ]),
  childFactory: prop_types_index_js_.any,
  className: prop_types_index_js_.string,
  direction: prop_types_index_js_.oneOf([
    "horizontal",
    "vertical"
  ]),
  component: prop_types_index_js_.string,
  id: prop_types_index_js_.string,
  style: prop_types_index_js_.any
};
$.defaultProps = {
  appear: !1,
  enter: !0,
  exit: !0,
  transitionEnterDuration: 300,
  transitionExitDuration: 300,
  direction: "vertical"
};
const ne = (o, i) => {
  const t = index_js_.useRef(0), n = index_js_.useRef(!1), s = index_js_.useRef(), c = (r) => {
    const l = r.duration;
    let d, h, u = t.current && 1 - t.current;
    r.onStart && r.onStart();
    const p = (f) => {
      d || (d = f), h = f - d + 1;
      const m = h / l + u;
      m <= 1 ? (r.onUpdate && r.onUpdate(m), s.current = window.requestAnimationFrame(p), t.current = m) : (r.onEnd && r.onEnd(1), t.current = 0);
    };
    s.current = window.requestAnimationFrame(p);
  };
  index_js_.useEffect(
    () => (c(o), () => {
      s.current && window.cancelAnimationFrame(s.current);
    }),
    i
  ), index_js_.useEffect(
    () => {
      n.current = !0;
    },
    []
  );
};



/***/ }

}]);