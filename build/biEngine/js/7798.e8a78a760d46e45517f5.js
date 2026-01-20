"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7798],{

/***/ 47798
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Button: () => (/* reexport */ Button),
  ButtonGroup: () => (/* reexport */ ButtonGroup),
  Chip: () => (/* reexport */ Chip),
  ChipList: () => (/* reexport */ ChipList),
  DropDownButton: () => (/* reexport */ DropDownButton),
  DropDownButtonItem: () => (/* reexport */ DropDownButtonItem),
  FloatingActionButton: () => (/* reexport */ FloatingActionButton),
  FloatingActionButtonItem: () => (/* reexport */ FloatingActionButtonItem),
  SplitButton: () => (/* reexport */ SplitButton),
  SplitButtonItem: () => (/* reexport */ SplitButtonItem),
  Toolbar: () => (/* reexport */ Toolbar),
  ToolbarItem: () => (/* reexport */ ToolbarItem),
  ToolbarSeparator: () => (/* reexport */ ToolbarSeparator),
  ToolbarSpacer: () => (/* reexport */ ToolbarSpacer),
  toolbarButtons: () => (/* reexport */ toolbarButtons)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(76034);
;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-buttons',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695801029,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Button.js
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





/**
 * @hidden
 */
function iconElement(_a) {
    var imageUrl = _a.imageUrl, name = _a.name, iconClass = _a.iconClass, svgIcon = _a.svgIcon, imageAlt = _a.imageAlt;
    if (imageUrl) {
        return (index_js_.createElement("img", { role: "presentation", className: 'k-button-icon', alt: imageAlt, src: imageUrl }));
    }
    else if (name || svgIcon) {
        return index_js_.createElement(main_js_.IconWrap, { className: 'k-button-icon', name: name, icon: svgIcon });
    }
    else if (iconClass) {
        return (index_js_.createElement("span", { role: "presentation", className: (0,main_js_.classNames)('k-button-icon', iconClass) }));
    }
    return null;
}
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this.handleClick = function (event) {
            _this.toggleIfApplicable();
            if (_this.props.onClick) {
                _this.props.onClick.call(undefined, event);
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        _this.state = { selected: _this.props.togglable === true && _this.props.selected === true };
        return _this;
    }
    Object.defineProperty(Button.prototype, "element", {
        /**
         * Gets the DOM element of the Button component.
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "selected", {
        /**
         * Returns `true` when the component is togglable and selected ([see example]({% slug toggleable_button %})).
         * Otherwise, returns `false`.
         */
        get: function () {
            return this._selectedTemp !== undefined ? this._selectedTemp : this.state.selected;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    Button.getDerivedStateFromProps = function (props, state) {
        if (props.togglable && props.selected !== undefined && props.selected !== state.selected) {
            return { selected: props.selected };
        }
        return null;
    };
    /**
     * @hidden
     */
    Button.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, children = _b.children, togglable = _b.togglable, icon = _b.icon, iconClass = _b.iconClass, svgIcon = _b.svgIcon, imageUrl = _b.imageUrl, imageAlt = _b.imageAlt, className = _b.className, onClick = _b.onClick, _c = _b.size, size = _c === void 0 ? Button.defaultProps.size : _c, _d = _b.rounded, rounded = _d === void 0 ? Button.defaultProps.rounded : _d, _e = _b.fillMode, fillMode = _e === void 0 ? Button.defaultProps.fillMode : _e, _f = _b.themeColor, themeColor = _f === void 0 ? Button.defaultProps.themeColor : _f, htmlAttributes = __rest(_b, ["children", "togglable", "icon", "iconClass", "svgIcon", "imageUrl", "imageAlt", "className", "onClick", "size", "rounded", "fillMode", "themeColor"]);
        var hasIcon = (icon !== undefined || iconClass !== undefined || imageUrl !== undefined);
        var hasChildren = children !== undefined;
        var iconEl = iconElement({
            name: icon,
            svgIcon: svgIcon,
            iconClass: iconClass,
            imageUrl: imageUrl,
            imageAlt: imageAlt
        });
        return (index_js_.createElement("button", __assign({ ref: function (button) { return _this._element = button; }, "aria-pressed": togglable ? this.state.selected : undefined }, htmlAttributes, { onClick: this.handleClick, className: (0,main_js_.classNames)('k-button', (_a = {},
                _a["k-button-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                _a["k-button-".concat(fillMode)] = fillMode,
                _a["k-button-".concat(fillMode, "-").concat(themeColor)] = Boolean(fillMode && themeColor),
                _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
                _a['k-icon-button'] = !hasChildren && hasIcon,
                _a['k-disabled'] = this.props.disabled,
                _a['k-selected'] = this.state.selected,
                _a['k-rtl'] = this.props.dir === 'rtl',
                _a), this.props.className) }),
            iconEl,
            children && (index_js_.createElement("span", { className: "k-button-text" }, children))));
    };
    Button.prototype.toggleIfApplicable = function () {
        var _this = this;
        if (this.props.togglable && this.props.selected === undefined) {
            var selected = !this.state.selected;
            this._selectedTemp = selected;
            this.setState({ selected: selected }, function () { return _this._selectedTemp = undefined; });
        }
    };
    /**
     * @hidden
     */
    Button.propTypes = {
        children: prop_types_index_js_.node,
        selected: prop_types_index_js_.bool,
        togglable: prop_types_index_js_.bool,
        icon: prop_types_index_js_.string,
        svgIcon: main_js_.svgIconPropType,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        imageAlt: prop_types_index_js_.string,
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
        rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
        fillMode: prop_types_index_js_.oneOf([null, 'flat', 'link', 'outline', 'solid']),
        // eslint-disable-next-line max-len
        themeColor: prop_types_index_js_.oneOf([null, 'base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'])
    };
    /**
     * @hidden
     */
    Button.defaultProps = {
        togglable: false,
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base'
    };
    return Button;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/util.js
/**
 * @hidden
 */
var styles = {
    button: 'k-button',
    'flat': 'k-flat',
    'outline': 'k-outline',
    'clear': 'k-button-clear',
    'primary': 'k-primary',
    'state-selected': 'k-selected',
    'button-icon': 'k-button-icon',
    'button-icontext': 'k-button-icontext',
    'state-disabled': 'k-disabled',
    'group-start': 'k-group-start',
    'group-end': 'k-group-end',
    'button-group': 'k-button-group',
    'button-group-stretched': 'k-button-group-stretched',
    'ltr': 'k-ltr',
    'rtl': 'k-rtl'
};
// const notDisabled = ':not(.k-disabled):not([disabled]):not([disabled="true"])';
var noInnerButton = ':not(.k-dropdownlist button):not(.k-colorpicker button):not(.k-split-button .k-split-button-arrow)';
/**
 * @hidden
 */
var toolbarButtons = [
    'button' + noInnerButton,
    '.k-button-group > button' + noInnerButton,
    '.k-dropdownlist',
    '.k-colorpicker'
];
/**
 * @hidden
 */
/* harmony default export */ const util = ({
    styles: styles
});

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ButtonGroup.js
var ButtonGroup_extends = (undefined && undefined.__extends) || (function () {
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
var ButtonGroup_assign = (undefined && undefined.__assign) || function () {
    ButtonGroup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ButtonGroup_assign.apply(this, arguments);
};






var ButtonGroup_styles = util.styles;
var ButtonGroup = /** @class */ (function (_super) {
    ButtonGroup_extends(ButtonGroup, _super);
    function ButtonGroup(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    /**
     * @hidden
     */
    ButtonGroup.prototype.render = function () {
        var _a;
        var _this = this;
        var buttons = this.mapButtons(this.props.children);
        var groupClasses = (0,main_js_.classNames)([ButtonGroup_styles['button-group']], (_a = {},
            _a['k-disabled'] = this.props.disabled,
            _a[ButtonGroup_styles['button-group-stretched']] = !!this.props.width,
            _a), this.props.className);
        var groupProps = {
            className: groupClasses,
            style: { 'width': "".concat(this.props.width) },
            dir: this.props.dir,
            // Accessibility properties
            role: 'group',
            'aria-disabled': this.props.disabled
        };
        return (index_js_.createElement("div", ButtonGroup_assign({ ref: function (div) { _this._element = div; } }, groupProps, { className: groupClasses }), buttons));
    };
    ButtonGroup.prototype.mapButtons = function (children) {
        var _this = this;
        var count = index_js_.Children.count(children);
        var rtl = this.props.dir !== undefined
            ? this.props.dir === 'rtl'
            : (this._element && (getComputedStyle(this._element).direction === 'rtl') || false);
        return index_js_.Children.map(children, function (child, index) {
            if (index_js_.isValidElement(child)) {
                return _this.renderButton(child, index, (index === count - 1), rtl);
            }
            return child;
        });
    };
    ButtonGroup.prototype.renderButton = function (child, index, isLast, isRtl) {
        var _a;
        var className = (0,main_js_.classNames)(child.props.className, (_a = {},
            _a[ButtonGroup_styles['group-start']] = isRtl ? isLast : index === 0,
            _a[ButtonGroup_styles['group-end']] = isRtl ? index === 0 : isLast,
            _a));
        var style = ButtonGroup_assign(ButtonGroup_assign({}, (this.props.width ? { width: this.props.width } : {})), (child.props.style || {}));
        var disabled = this.props.disabled || child.props.disabled;
        var buttonProps = ButtonGroup_assign(ButtonGroup_assign(ButtonGroup_assign(ButtonGroup_assign({}, child.props), (className ? { className: className } : {})), (Object.keys(style).length ? { style: style } : {})), (disabled !== undefined ? { disabled: disabled } : {}));
        return index_js_.Children.count(child.props.children) > 0 ?
            index_js_.cloneElement(child, buttonProps, child.props.children) :
            index_js_.cloneElement(child, buttonProps);
    };
    /**
     * @hidden
     */
    ButtonGroup.propTypes = {
        children: prop_types_index_js_.oneOfType([prop_types_index_js_.arrayOf(prop_types_index_js_.element), prop_types_index_js_.element]),
        className: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        width: prop_types_index_js_.string,
        dir: prop_types_index_js_.string
    };
    return ButtonGroup;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/ButtonItem.js


/**
 * @hidden
 */
var ButtonItem = function (props) {
    var handleClick = index_js_.useCallback(function (event) {
        props.onClick(event, props.index);
    }, [props]);
    var As = props.dataItem.render || props.item || (props.item === undefined ? props.render : null);
    var text = props.dataItem.text !== undefined ? props.dataItem.text : (props.textField ? props.dataItem[props.textField] : props.dataItem);
    var item = (index_js_.createElement("li", { id: props.id, className: (0,main_js_.classNames)('k-item', props.className, { 'k-focus': props.focused }), tabIndex: -1, onClick: handleClick, onMouseDown: props.onDown, onPointerDown: props.onDown, role: "menuitem", "aria-disabled": props.dataItem.disabled || undefined }, (index_js_.createElement("span", { tabIndex: -1, className: (0,main_js_.classNames)('k-link k-menu-link', {
            'k-selected': props.dataItem.selected,
            'k-disabled': props.dataItem.disabled
        }), key: "icon" }, As
        ? (index_js_.createElement(As, { item: props.dataItem, itemIndex: props.index }))
        : (index_js_.createElement(index_js_.Fragment, null,
            (props.dataItem.icon || props.dataItem.iconClass) && (index_js_.createElement(main_js_.IconWrap, { className: props.dataItem.iconClass, name: props.dataItem.icon, icon: props.dataItem.svgIcon })),
            (props.dataItem.imageUrl) && (index_js_.createElement("img", { role: "presentation", alt: "", src: props.dataItem.imageUrl, className: 'k-icon' })),
            (text) && (index_js_.createElement("span", { className: "k-menu-link-text" }, text))))))));
    return ((props.item !== undefined && /* to be removed in 5.0.0 */
        props.render !== undefined) ? props.render.call(undefined, item, props) : item);
};
ButtonItem.displayName = 'KendoReactButtonItem';

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/SplitButtonItem.js
var SplitButtonItem_extends = (undefined && undefined.__extends) || (function () {
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


var SplitButtonItem = /** @class */ (function (_super) {
    SplitButtonItem_extends(SplitButtonItem, _super);
    function SplitButtonItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    SplitButtonItem.prototype.render = function () {
        return null;
    };
    /**
     * @hidden
     */
    SplitButtonItem.propTypes = {
        text: prop_types_index_js_.string,
        icon: prop_types_index_js_.string,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        disabled: prop_types_index_js_.bool,
        render: prop_types_index_js_.any
    };
    return SplitButtonItem;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/utils/navigation.js

/**
 * @hidden
 */
var navigation_navigate = function (focusedIndex, keyCode, altKey, total) {
    if (altKey) {
        return focusedIndex;
    }
    var index = Math.min(total - 1, Math.max(0, focusedIndex));
    switch (keyCode) {
        case main_js_.Keys.enter:
        case main_js_.Keys.space:
        case main_js_.Keys.esc:
            return -1;
        case main_js_.Keys.up:
        case main_js_.Keys.left:
            return index - 1 < 0 ? total - 1 : index - 1;
        case main_js_.Keys.down:
        case main_js_.Keys.right:
            return index + 1 >= total ? 0 : index + 1;
        case main_js_.Keys.home:
            return 0;
        case main_js_.Keys.end:
            return total - 1;
        default:
            return focusedIndex;
    }
};


// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-popup@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-popup@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_0d037bac31500c92a723806b2973560c/node_modules/@progress/kendo-react-popup/dist/es/main.js)
var es_main_js_ = __webpack_require__(989);
;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/utils/popup.js
/**
 * @hidden
 */
function getAnchorAlign(isDirectionRightToLeft) {
    var align = { horizontal: 'left', vertical: 'bottom' };
    if (isDirectionRightToLeft) {
        align.horizontal = 'right';
    }
    return align;
}
/**
 * @hidden
 */
function getPopupAlign(isDirectionRightToLeft) {
    var align = { horizontal: 'left', vertical: 'top' };
    if (isDirectionRightToLeft) {
        align.horizontal = 'right';
    }
    return align;
}

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/SplitButton.js
var SplitButton_extends = (undefined && undefined.__extends) || (function () {
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
 * Represents the [KendoReact SplitButton component]({% slug overview_splitbutton %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    render() {
 *        return (
 *            <SplitButton text="Act">
 *                <SplitButtonItem text="Item1" />
 *                <SplitButtonItem text="Item2" />
 *                <SplitButtonItem text="Item3" />
 *            </SplitButton>
 *        );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var SplitButton = /** @class */ (function (_super) {
    SplitButton_extends(SplitButton, _super);
    function SplitButton(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.state = {
            focused: false,
            focusedIndex: -1,
            opened: false
        };
        _this.wrapper = null;
        _this.mainButton = null;
        _this.list = null;
        _this.guid = (0,main_js_.guid)();
        _this.skipFocus = false;
        _this.buttonsData = [];
        _this.onKeyDown = function (event) {
            var focusedIndex = _this.state.focusedIndex;
            if (event.altKey) {
                if (!_this.opened && event.keyCode === main_js_.Keys.down) {
                    _this.dispatchPopupEvent(event, true);
                    _this.setState({ focusedIndex: 0 });
                    _this.setOpen(true);
                }
                else if (_this.opened && event.keyCode === main_js_.Keys.up) {
                    _this.setState({ focusedIndex: -1 });
                    _this.setOpen(false);
                }
                return;
            }
            var newState = undefined;
            if (event.keyCode === main_js_.Keys.enter || event.keyCode === main_js_.Keys.space) {
                // Prevent default because otherwise when an item is selected
                // click on the default button gets emitted which opens the popup again.
                event.preventDefault();
                _this.dispatchClickEvent(event, focusedIndex);
                if (focusedIndex >= 0) {
                    newState = {
                        focusedIndex: _this.opened ? -1 : 0
                    };
                    var notOpened = !_this.opened;
                    _this.setOpen(notOpened);
                    if (notOpened) {
                        _this.dispatchPopupEvent(event, notOpened);
                    }
                }
            }
            else if (_this.opened && event.keyCode === main_js_.Keys.esc) {
                _this.setState({ focusedIndex: -1 });
                _this.setOpen(false);
                return;
            }
            if (_this.opened) {
                var newFocused = navigation_navigate(focusedIndex, event.keyCode, event.altKey, _this.buttonsData.length);
                if (newFocused !== focusedIndex) {
                    newState = newState || {};
                    newState.focusedIndex = newFocused;
                }
                var arrowKey = event.keyCode === main_js_.Keys.up || event.keyCode === main_js_.Keys.down ||
                    event.keyCode === main_js_.Keys.left || event.keyCode === main_js_.Keys.right;
                if (!event.altKey && (arrowKey || event.keyCode === main_js_.Keys.home || event.keyCode === main_js_.Keys.end)) {
                    // Needed to notify the parent listeners that event is handled.
                    event.preventDefault();
                }
            }
            if (newState) {
                _this.setState(newState);
            }
        };
        _this.switchFocus = function (focusFn) {
            _this.skipFocus = true;
            focusFn();
            window.setTimeout(function () { return _this.skipFocus = false; }, 0);
        };
        _this.onFocus = function (event) {
            if (_this.skipFocus) {
                return;
            }
            (0,main_js_.dispatchEvent)(_this.props.onFocus, event, _this, undefined);
            _this.setState({ focused: true });
        };
        _this.setOpen = function (value) {
            _this.openedDuringOnChange = value;
            _this.setState({ opened: value });
        };
        _this.onItemClick = function (event, clickedItemIndex) {
            var opened = _this.opened;
            if (opened) {
                _this.setState({ focusedIndex: 0 });
                _this.setOpen(false);
            }
            _this.dispatchClickEvent(event, clickedItemIndex);
        };
        _this.onBlur = function (event) {
            if (_this.skipFocus) {
                return;
            }
            _this.setState({
                focused: false,
                focusedIndex: -1
            });
            _this.setOpen(false);
            (0,main_js_.dispatchEvent)(_this.props.onBlur, event, _this, undefined);
        };
        _this.onPopupClose = function () {
            if (_this.state.focused) {
                _this.switchFocus(function () {
                    if (_this.element) {
                        _this.element.removeAttribute('tabindex');
                        _this.element.focus({ preventScroll: true });
                    }
                });
            }
            _this.dispatchPopupEvent({}, false);
        };
        _this.listRef = function (list) {
            _this.list = list;
            if (list && _this.state.focused) {
                _this.switchFocus(function () {
                    list.focus({ preventScroll: true });
                    if (_this.element) {
                        _this.element.tabIndex = -1;
                    }
                });
            }
        };
        _this.onSplitPartClick = function (event) {
            if (_this.buttonsData.length) {
                var toOpen = !_this.opened;
                if (toOpen) {
                    _this.dispatchPopupEvent(event, toOpen);
                }
                _this.setState({
                    focusedIndex: toOpen ? 0 : -1,
                    focused: true
                });
                _this.setOpen(toOpen);
            }
        };
        _this.onDownSplitPart = function (event) {
            event.preventDefault();
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (_this.element && activeElement !== _this.element && activeElement !== _this.list) {
                _this.element.focus();
            }
        };
        _this.onItemDown = function (event) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (activeElement === _this.list) {
                event.preventDefault();
            }
        };
        _this.dispatchPopupEvent = function (dispatchedEvent, open) {
            (0,main_js_.dispatchEvent)(open ? _this.props.onOpen : _this.props.onClose, dispatchedEvent, _this, undefined);
            _this.openedDuringOnChange = undefined;
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    Object.defineProperty(SplitButton.prototype, "opened", {
        get: function () {
            return this.openedDuringOnChange !== undefined
                ? this.openedDuringOnChange
                : this.props.opened === undefined
                    ? this.state.opened
                    : this.props.opened;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    SplitButton.prototype.render = function () {
        var _this = this;
        this.buttonsData = this.props.items ||
            index_js_.Children.toArray(this.props.children)
                .filter(function (child) { return child && child.type === SplitButtonItem; })
                .map(function (child) { return child.props; });
        var rtl = this.isRtl();
        var dir = rtl ? 'rtl' : undefined;
        var _a = this.props, id = _a.id, style = _a.style, tabIndex = _a.tabIndex, disabled = _a.disabled;
        return (index_js_.createElement("div", { id: id, style: style, className: (0,main_js_.classNames)('k-split-button', 'k-button-group', {
                'k-focus': this.state.focused
            }, "k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[this.props.rounded || 'medium']), this.props.className), onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur, dir: dir, ref: function (el) { return _this.wrapper = el; } },
            index_js_.createElement(Button, { ref: function (el) { return _this.mainButton = el && el.element; }, type: "button", size: this.props.size, rounded: this.props.rounded, fillMode: this.props.fillMode, themeColor: this.props.themeColor, onClick: function (event) { return _this.onItemClick(event, -1); }, disabled: disabled || undefined, tabIndex: tabIndex, accessKey: this.props.accessKey, className: this.props.buttonClass, icon: this.props.icon, svgIcon: this.props.svgIcon, iconClass: this.props.iconClass, imageUrl: this.props.imageUrl, dir: dir, "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": this.opened || undefined, "aria-label": this.props.ariaLabel, "aria-controls": this.opened ? this.guid : undefined, id: 'button-' + this.guid, title: this.props.title }, this.props.text),
            index_js_.createElement(Button, { type: "button", size: this.props.size, rounded: this.props.rounded, fillMode: this.props.fillMode, themeColor: this.props.themeColor, icon: "caret-alt-down", svgIcon: index_es_js_.caretAltDownIcon, className: "k-split-button-arrow", disabled: disabled || undefined, tabIndex: -1, onClick: this.onSplitPartClick, onMouseDown: this.onDownSplitPart, onPointerDown: this.onDownSplitPart, dir: dir, "aria-label": "menu toggling button" }),
            this.renderPopup(rtl)));
    };
    /**
     * @hidden
     */
    SplitButton.prototype.componentDidMount = function () {
        // If this.props.opened is true during the initial render, the popup is not aligned.
        if ((this.props.dir === undefined && this.isRtl()) || this.opened) {
            this.forceUpdate();
        }
    };
    Object.defineProperty(SplitButton.prototype, "element", {
        /**
         * The DOM element of main button.
         */
        get: function () {
            return this.mainButton;
        },
        enumerable: false,
        configurable: true
    });
    SplitButton.prototype.dispatchClickEvent = function (dispatchedEvent, clickedItemIndex) {
        if (!this.isItemDisabled(clickedItemIndex)) {
            if (clickedItemIndex === -1) {
                (0,main_js_.dispatchEvent)(this.props.onButtonClick, dispatchedEvent, this, undefined);
            }
            else {
                (0,main_js_.dispatchEvent)(this.props.onItemClick, dispatchedEvent, this, {
                    item: this.buttonsData[clickedItemIndex],
                    itemIndex: clickedItemIndex
                });
            }
        }
    };
    SplitButton.prototype.renderPopup = function (rtl) {
        var _a;
        var _b = this.props.popupSettings, popupSettings = _b === void 0 ? {} : _b;
        var focusedIndex = this.state.focusedIndex;
        return (index_js_.createElement(es_main_js_.Popup, { anchor: this.wrapper, show: this.opened, animate: popupSettings.animate, popupClass: (0,main_js_.classNames)('k-menu-popup', popupSettings.popupClass), anchorAlign: popupSettings.anchorAlign || getAnchorAlign(rtl), popupAlign: popupSettings.popupAlign || getPopupAlign(rtl), style: rtl ? { direction: 'rtl' } : undefined, onClose: this.onPopupClose },
            index_js_.createElement("ul", { role: "menu", id: this.guid, "aria-labelledby": 'button-' + this.guid, tabIndex: -1, ref: this.listRef, "aria-activedescendant": focusedIndex >= 0 ? "".concat(this.guid, "-").concat(focusedIndex) : undefined, className: (0,main_js_.classNames)('k-group k-menu-group k-reset', (_a = {},
                    _a["k-menu-group-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                    _a)) }, this.renderChildItems())));
    };
    SplitButton.prototype.renderChildItems = function () {
        var _this = this;
        var _a = this.props, item = _a.item, itemRender = _a.itemRender, textField = _a.textField;
        return this.buttonsData.length > 0 ? (this.buttonsData.map(function (dataItem, index) {
            return (index_js_.createElement(ButtonItem, { className: "k-menu-item", dataItem: dataItem, textField: textField, focused: _this.state.focusedIndex === index, onClick: _this.onItemClick, onDown: _this.onItemDown, render: itemRender, item: item, key: index, index: index, id: "".concat(_this.guid, "-").concat(index) }));
        })) : null;
    };
    SplitButton.prototype.isItemDisabled = function (index) {
        return this.buttonsData[index] ? this.buttonsData[index].disabled : this.props.disabled;
    };
    SplitButton.prototype.isRtl = function () {
        return this.props.dir !== undefined ? this.props.dir === 'rtl' :
            !!this.wrapper && getComputedStyle(this.wrapper).direction === 'rtl';
    };
    /**
     * @hidden
     */
    SplitButton.propTypes = {
        accessKey: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string,
        title: prop_types_index_js_.string,
        onButtonClick: prop_types_index_js_.func,
        onFocus: prop_types_index_js_.func,
        onBlur: prop_types_index_js_.func,
        onItemClick: prop_types_index_js_.func,
        onOpen: prop_types_index_js_.func,
        onClose: prop_types_index_js_.func,
        text: prop_types_index_js_.string,
        items: prop_types_index_js_.arrayOf(prop_types_index_js_.any),
        textField: prop_types_index_js_.string,
        tabIndex: prop_types_index_js_.number,
        disabled: prop_types_index_js_.bool,
        icon: prop_types_index_js_.string,
        svgIcon: main_js_.svgIconPropType,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        popupSettings: prop_types_index_js_.object,
        itemRender: prop_types_index_js_.any,
        item: prop_types_index_js_.func,
        className: prop_types_index_js_.string,
        buttonClass: prop_types_index_js_.string,
        dir: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    SplitButton.defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base'
    };
    return SplitButton;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/DropDownButtonItem.js
var DropDownButtonItem_extends = (undefined && undefined.__extends) || (function () {
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


var DropDownButtonItem = /** @class */ (function (_super) {
    DropDownButtonItem_extends(DropDownButtonItem, _super);
    function DropDownButtonItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    DropDownButtonItem.prototype.render = function () {
        return null;
    };
    /**
     * @hidden
     */
    DropDownButtonItem.propTypes = {
        text: prop_types_index_js_.string,
        icon: prop_types_index_js_.string,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        selected: prop_types_index_js_.bool,
        disabled: prop_types_index_js_.bool,
        render: prop_types_index_js_.any
    };
    return DropDownButtonItem;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/ListButton/DropDownButton.js
var DropDownButton_extends = (undefined && undefined.__extends) || (function () {
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
var DropDownButton_assign = (undefined && undefined.__assign) || function () {
    DropDownButton_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DropDownButton_assign.apply(this, arguments);
};












/**
 * Represents the [KendoReact DropDownButton component]({% slug overview_dropdownbutton %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    render() {
 *        return (
 *            <DropDownButton text="Act">
 *                <DropDownButtonItem text="Item1" />
 *                <DropDownButtonItem text="Item2" />
 *                <DropDownButtonItem text="Item3" />
 *            </DropDownButton>
 *        );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var DropDownButton = /** @class */ (function (_super) {
    DropDownButton_extends(DropDownButton, _super);
    function DropDownButton(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.state = {
            opened: false,
            focused: false,
            focusedIndex: -1
        };
        _this.wrapper = null;
        _this.mainButton = null;
        _this.list = null;
        _this.skipFocus = false;
        _this.guid = (0,main_js_.guid)();
        _this.buttonsData = [];
        _this.onKeyDown = function (event) {
            var focusedIndex = _this.state.focusedIndex;
            if (event.altKey) {
                if (!_this.opened && event.keyCode === main_js_.Keys.down) {
                    _this.setOpen(true);
                    _this.dispatchPopupEvent(event, true);
                    _this.setState({ focusedIndex: 0 });
                }
                else if (_this.opened && event.keyCode === main_js_.Keys.up) {
                    _this.setState({ focusedIndex: -1 });
                    _this.setOpen(false);
                }
                return;
            }
            var newState = DropDownButton_assign({}, _this.state);
            if (event.keyCode === main_js_.Keys.enter || event.keyCode === main_js_.Keys.space) {
                if (focusedIndex >= 0) {
                    _this.dispatchClickEvent(event, focusedIndex);
                }
                // Prevent default because otherwise when an item is selected
                // click on the default button gets emitted which opens the popup again.
                event.preventDefault();
                var notOpened = !_this.opened;
                _this.setOpen(notOpened);
                if (notOpened) {
                    _this.dispatchPopupEvent(event, true);
                    _this.setState({ focusedIndex: _this.opened ? -1 : 0 });
                }
                return;
            }
            else if (_this.opened && event.keyCode === main_js_.Keys.esc) {
                _this.setState({ focusedIndex: -1 });
                _this.setOpen(false);
                return;
            }
            if (_this.opened) {
                var newFocused = navigation_navigate(focusedIndex, event.keyCode, event.altKey, _this.buttonsData.length);
                newState.focusedIndex = newFocused;
                var arrowKey = event.keyCode === main_js_.Keys.up || event.keyCode === main_js_.Keys.down ||
                    event.keyCode === main_js_.Keys.left || event.keyCode === main_js_.Keys.right;
                if (!event.altKey && (arrowKey || event.keyCode === main_js_.Keys.home || event.keyCode === main_js_.Keys.end)) {
                    // Needed to notify the parent listeners that event is handled.
                    event.preventDefault();
                }
            }
            _this.setState(newState);
        };
        _this.switchFocus = function (focusFn) {
            _this.skipFocus = true;
            focusFn();
            window.setTimeout(function () { return _this.skipFocus = false; }, 0);
        };
        _this.handleFocus = function (event) {
            if (_this.skipFocus) {
                return;
            }
            _this.setState({ focused: true, focusedIndex: _this.opened ? 0 : -1 });
            (0,main_js_.dispatchEvent)(_this.props.onFocus, event, _this, undefined);
        };
        _this.handleBlur = function (event) {
            if (_this.skipFocus) {
                return;
            }
            _this.setState({ focused: false, focusedIndex: -1 });
            _this.setOpen(false);
            (0,main_js_.dispatchEvent)(_this.props.onBlur, event, _this, undefined);
        };
        _this.setOpen = function (value) {
            _this.openedDuringOnChange = value;
            _this.setState({ opened: value });
        };
        _this.onItemClick = function (event, clickedItemIndex) {
            _this.setState({ focusedIndex: -1 });
            _this.setOpen(false);
            _this.dispatchClickEvent(event, clickedItemIndex);
        };
        _this.onItemDown = function (event) {
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (activeElement === _this.list) {
                event.preventDefault();
            }
        };
        _this.mouseDown = function (event) {
            event.preventDefault();
            var activeElement = (0,main_js_.getActiveElement)(document);
            if (_this.element && activeElement !== _this.element && activeElement !== _this.list) {
                _this.element.focus();
            }
        };
        _this.onPopupClose = function () {
            if (_this.state.focused) {
                _this.switchFocus(function () {
                    if (_this.element) {
                        _this.element.removeAttribute('tabindex');
                        _this.element.focus({ preventScroll: true });
                    }
                });
            }
            _this.dispatchPopupEvent({}, false);
        };
        _this.listRef = function (list) {
            _this.list = list;
            if (list && _this.state.focused) {
                _this.switchFocus(function () {
                    list.focus({ preventScroll: true });
                    if (_this.element) {
                        _this.element.tabIndex = -1;
                    }
                });
            }
        };
        _this.onClickMainButton = function (event) {
            if (!_this.buttonsData.length) {
                return;
            }
            var toOpen = !_this.opened;
            _this.setState({
                focused: true,
                focusedIndex: toOpen ? 0 : -1
            });
            _this.setOpen(toOpen);
            if (toOpen) {
                _this.dispatchPopupEvent(event, toOpen);
            }
        };
        _this.dispatchPopupEvent = function (dispatchedEvent, open) {
            (0,main_js_.dispatchEvent)(open ? _this.props.onOpen : _this.props.onClose, dispatchedEvent, _this, undefined);
            _this.openedDuringOnChange = undefined;
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    Object.defineProperty(DropDownButton.prototype, "opened", {
        get: function () {
            return this.openedDuringOnChange !== undefined
                ? this.openedDuringOnChange
                : this.props.opened === undefined
                    ? this.state.opened
                    : this.props.opened;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     */
    DropDownButton.prototype.render = function () {
        var _this = this;
        var rtl = this.isRtl();
        var dir = rtl ? 'rtl' : undefined;
        var _a = this.props, id = _a.id, style = _a.style, tabIndex = _a.tabIndex, disabled = _a.disabled;
        this.buttonsData = this.props.items ||
            index_js_.Children.toArray(this.props.children)
                .filter(function (child) { return child && child.type === DropDownButtonItem; })
                .map(function (child) { return child.props; });
        return (index_js_.createElement("div", { id: id, style: style, className: (0,main_js_.classNames)('k-dropdown-button', {
                'k-focus': this.state.focused
            }, this.props.className), onKeyDown: this.onKeyDown, onFocus: this.handleFocus, onBlur: this.handleBlur, dir: dir, ref: function (el) { return _this.wrapper = el; } },
            index_js_.createElement(Button, { size: this.props.size, rounded: this.props.rounded, fillMode: this.props.fillMode, themeColor: this.props.themeColor, onClick: this.onClickMainButton, onMouseDown: this.mouseDown, disabled: disabled || undefined, tabIndex: tabIndex, accessKey: this.props.accessKey, icon: this.props.icon, svgIcon: this.props.svgIcon, iconClass: this.props.iconClass, className: this.props.buttonClass, imageUrl: this.props.imageUrl, dir: dir, ref: function (btn) { return _this.mainButton = btn && btn.element; }, type: "button", "aria-haspopup": true, "aria-expanded": this.opened || undefined, "aria-label": this.props.ariaLabel, "aria-controls": this.opened ? this.guid : undefined, id: 'button-' + this.guid, title: this.props.title }, this.props.text),
            this.renderPopup(rtl)));
    };
    /**
     * @hidden
     */
    DropDownButton.prototype.componentDidMount = function () {
        // If this.props.opened is true during the initial render, the popup is not aligned.
        if ((this.props.dir === undefined && this.isRtl()) || this.opened) {
            this.forceUpdate();
        }
    };
    Object.defineProperty(DropDownButton.prototype, "element", {
        /**
         * The DOM element of main button.
         */
        get: function () {
            return this.mainButton;
        },
        enumerable: false,
        configurable: true
    });
    DropDownButton.prototype.dispatchClickEvent = function (dispatchedEvent, index) {
        if (!this.isItemDisabled(index)) {
            (0,main_js_.dispatchEvent)(this.props.onItemClick, dispatchedEvent, this, {
                item: this.buttonsData[index],
                itemIndex: index
            });
        }
    };
    DropDownButton.prototype.renderPopup = function (rtl) {
        var _a;
        var _b = this.props.popupSettings, popupSettings = _b === void 0 ? {} : _b;
        var focusedIndex = this.state.focusedIndex;
        return (index_js_.createElement(es_main_js_.Popup, { anchor: this.wrapper, show: this.opened, animate: popupSettings.animate, popupClass: (0,main_js_.classNames)('k-menu-popup', popupSettings.popupClass), anchorAlign: popupSettings.anchorAlign || getAnchorAlign(rtl), popupAlign: popupSettings.popupAlign || getPopupAlign(rtl), style: rtl ? { direction: 'rtl' } : undefined, onClose: this.onPopupClose },
            index_js_.createElement("ul", { role: "menu", id: this.guid, "aria-labelledby": 'button-' + this.guid, tabIndex: -1, "aria-activedescendant": focusedIndex >= 0 ? "".concat(this.guid, "-").concat(focusedIndex) : undefined, ref: this.listRef, className: (0,main_js_.classNames)('k-group k-menu-group k-reset', (_a = {},
                    _a["k-menu-group-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                    _a)) }, this.renderChildItems())));
    };
    DropDownButton.prototype.renderChildItems = function () {
        var _this = this;
        var _a = this.props, item = _a.item, itemRender = _a.itemRender, textField = _a.textField;
        return this.buttonsData.length > 0 ? (this.buttonsData.map(function (dataItem, index) {
            return (index_js_.createElement(ButtonItem, { className: "k-menu-item", dataItem: dataItem, textField: textField, focused: _this.state.focusedIndex === index, onClick: _this.onItemClick, onDown: _this.onItemDown, render: itemRender, item: item, index: index, key: index, id: "".concat(_this.guid, "-").concat(index) }));
        })) : null;
    };
    DropDownButton.prototype.isItemDisabled = function (index) {
        return this.buttonsData[index] ? this.buttonsData[index].disabled : this.props.disabled;
    };
    DropDownButton.prototype.isRtl = function () {
        return this.props.dir !== undefined ? this.props.dir === 'rtl' :
            !!this.wrapper && getComputedStyle(this.wrapper).direction === 'rtl';
    };
    /**
     * @hidden
     */
    DropDownButton.propTypes = {
        accessKey: prop_types_index_js_.string,
        ariaLabel: prop_types_index_js_.string,
        title: prop_types_index_js_.string,
        onFocus: prop_types_index_js_.func,
        onBlur: prop_types_index_js_.func,
        onItemClick: prop_types_index_js_.func,
        onOpen: prop_types_index_js_.func,
        onClose: prop_types_index_js_.func,
        items: prop_types_index_js_.arrayOf(prop_types_index_js_.any),
        textField: prop_types_index_js_.string,
        tabIndex: prop_types_index_js_.number,
        disabled: prop_types_index_js_.bool,
        icon: prop_types_index_js_.string,
        svgIcon: main_js_.svgIconPropType,
        iconClass: prop_types_index_js_.string,
        imageUrl: prop_types_index_js_.string,
        popupSettings: prop_types_index_js_.object,
        itemRender: prop_types_index_js_.func,
        item: prop_types_index_js_.func,
        className: prop_types_index_js_.string,
        buttonClass: prop_types_index_js_.string,
        dir: prop_types_index_js_.string
    };
    /**
     * @hidden
     */
    DropDownButton.defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base'
    };
    return DropDownButton;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/toolbar/Toolbar.js
var Toolbar_extends = (undefined && undefined.__extends) || (function () {
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
var Toolbar_assign = (undefined && undefined.__assign) || function () {
    Toolbar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Toolbar_assign.apply(this, arguments);
};






/**
 * Represents the [KendoReact Toolbar component]({% slug overview_toolbar %}).
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    render() {
 *       return (
 *          <Toolbar>
 *              <ToolbarItem>
 *                  <ButtonGroup>
 *                      <Button togglable={true} icon="bold" />
 *                      <Button togglable={true} icon="italic" />
 *                      <Button togglable={true} icon="underline" />
 *                  </ButtonGroup>
 *              </ToolbarItem>
 *              <ToolbarItem>
 *                  <ButtonGroup>
 *                      <Button icon="hyperlink">Insert Link</Button>
 *                      <Button icon="image">Insert Image</Button>
 *                      <Button icon="table">Insert Table</Button>
 *                  </ButtonGroup>
 *              </ToolbarItem>
 *          </Toolbar>
 *       );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Toolbar = /** @class */ (function (_super) {
    Toolbar_extends(Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this._element = null;
        _this.offsetHeight = 0;
        _this.offsetWidth = 0;
        _this.buttons = [];
        _this.focusedSelector = _this.selectors.map(function (s) { return s + ':focus'; }).join(',');
        _this.setTabIndex = function (focusedIndex) {
            var _a = _this.props.tabIndex, tabIndex = _a === void 0 ? Toolbar.defaultProps.tabIndex : _a;
            _this.buttons.forEach(function (button, index) {
                button.tabIndex = (index === focusedIndex) ? tabIndex : -1;
            });
        };
        _this.onKeyDown = function (event) {
            var target = event.target;
            var arrowKey = event.keyCode === main_js_.Keys.left || event.keyCode === main_js_.Keys.right;
            if (!arrowKey || event.defaultPrevented || _this.buttons.findIndex(function (b) { return b === target; }) === -1) {
                return;
            }
            var focusedIndex = _this.focusedIndex;
            if (event.keyCode === main_js_.Keys.left) {
                _this.focusButton(focusedIndex, focusedIndex - 1);
            }
            else {
                _this.focusButton(focusedIndex, focusedIndex + 1);
            }
        };
        _this.onWindowResize = function (event) {
            var element = _this.element;
            if (!element) {
                return;
            }
            var offsetWidth = element.offsetWidth;
            var offsetHeight = element.offsetHeight;
            if (_this.offsetWidth !== offsetWidth || _this.offsetHeight !== offsetHeight) {
                _this.offsetWidth = offsetWidth;
                _this.offsetHeight = offsetHeight;
                var newSizes = { offsetWidth: _this.offsetWidth, offsetHeight: _this.offsetHeight };
                if (_this.props.onResize) {
                    _this.props.onResize.call(undefined, Toolbar_assign(Toolbar_assign({ target: _this }, newSizes), { nativeEvent: event }));
                }
            }
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    Object.defineProperty(Toolbar.prototype, "selectors", {
        get: function () {
            return this.props.buttons || toolbarButtons;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "focusedIndex", {
        get: function () {
            var focused = this.element && this.element.querySelector(this.focusedSelector);
            return Math.max(0, this.buttons.findIndex(function (e) { return e === focused; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toolbar.prototype, "element", {
        /**
         * Returns the HTML element of the Toolbar component.
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
    Toolbar.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.onWindowResize);
        var element = this.element;
        if (element) {
            this.offsetWidth = element.offsetWidth;
            this.offsetHeight = element.offsetHeight;
            if (this.props.keyboardNavigation !== false) {
                this.buttons = Array.from(element.querySelectorAll(this.selectors.join(',')));
                this.setTabIndex(0);
            }
        }
    };
    /**
     * @hidden
     */
    Toolbar.prototype.componentDidUpdate = function () {
        var element = this.element;
        if (!element || this.props.keyboardNavigation === false) {
            return;
        }
        this.buttons = Array.from(element.querySelectorAll(this.selectors.join(',')));
        this.setTabIndex(this.focusedIndex);
    };
    /**
     * @hidden
     */
    Toolbar.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onWindowResize);
        this.buttons.length = 0;
    };
    /**
     * @hidden
     */
    Toolbar.prototype.render = function () {
        var _a;
        var _this = this;
        return (index_js_.createElement("div", { id: this.props.id, "aria-label": this.props.ariaLabel, className: (0,main_js_.classNames)('k-toolbar', (_a = {},
                _a["k-toolbar-".concat(main_js_.kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size,
                _a), this.props.className), style: this.props.style, role: this.props.role !== undefined ? (this.props.role || undefined) : 'toolbar', dir: this.props.dir, ref: function (element) { return _this._element = element; }, onKeyDown: this.props.keyboardNavigation !== false ? this.onKeyDown : undefined }, this.props.children));
    };
    Toolbar.prototype.focusButton = function (prevIndex, index) {
        var _a = this.props.tabIndex, tabIndex = _a === void 0 ? Toolbar.defaultProps.tabIndex : _a;
        var button = this.buttons[index];
        if (button) {
            button.tabIndex = tabIndex;
            button.focus();
            var prevButton = this.buttons[prevIndex];
            if (prevButton) {
                prevButton.tabIndex = -1;
            }
        }
    };
    /**
     * @hidden
     */
    Toolbar.propTypes = {
        tabIndex: prop_types_index_js_.number,
        dir: prop_types_index_js_.string,
        keyboardNavigation: prop_types_index_js_.bool,
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        role: prop_types_index_js_.string,
        onResize: prop_types_index_js_.func,
        buttons: prop_types_index_js_.arrayOf(prop_types_index_js_.string),
        size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large'])
    };
    /**
     * @hidden
     */
    Toolbar.defaultProps = {
        tabIndex: 0,
        size: 'medium'
    };
    return Toolbar;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/toolbar/tools/ToolbarItem.js
var ToolbarItem_extends = (undefined && undefined.__extends) || (function () {
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
 * Represents the KendoReact ToolbarItem component.
 * To add a tool to the Toolbar, wrap it inside a ToolbarItem component
 * ([see example]({% slug content_toolbar %})).
 */
var ToolbarItem = /** @class */ (function (_super) {
    ToolbarItem_extends(ToolbarItem, _super);
    function ToolbarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._element = null;
        return _this;
    }
    Object.defineProperty(ToolbarItem.prototype, "element", {
        /**
         * Returns the HTML element of the ToolbarItem component.
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
    ToolbarItem.prototype.render = function () {
        var _this = this;
        return (index_js_.createElement("div", { id: this.props.id, className: (0,main_js_.classNames)('k-toolbar-item', this.props.className), style: this.props.style, ref: function (e) { return _this._element = e; } }, this.props.children));
    };
    /**
     * @hidden
     */
    ToolbarItem.propTypes = {
        className: prop_types_index_js_.string
    };
    return ToolbarItem;
}(index_js_.PureComponent));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/toolbar/tools/ToolbarSeparator.js
var ToolbarSeparator_extends = (undefined && undefined.__extends) || (function () {
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


var ToolbarSeparator = /** @class */ (function (_super) {
    ToolbarSeparator_extends(ToolbarSeparator, _super);
    function ToolbarSeparator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    ToolbarSeparator.prototype.render = function () {
        return (index_js_.createElement("div", { className: (0,main_js_.classNames)('k-separator', this.props.className) }));
    };
    return ToolbarSeparator;
}(index_js_.PureComponent));


;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/toolbar/tools/ToolbarSpacer.js



/**
 * Represents the KendoReact ToolbarSpacer component.
 * To specify an empty space, provide a ToolbarSpacer component
 * ([see example]({% slug content_toolbar %})).
 */
var ToolbarSpacer = index_js_.forwardRef(function (props, ref) {
    var element = index_js_.useRef(null);
    var spacer = index_js_.useRef(null);
    index_js_.useImperativeHandle(spacer, function () { return ({ element: element.current }); });
    index_js_.useImperativeHandle(ref, function () { return ({ element: element.current }); });
    var className = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-spacer', props.className); }, [props.className]);
    return (index_js_.createElement("span", { ref: element, className: className }));
});
ToolbarSpacer.displayName = 'KendoReactToolbarSpacer';
ToolbarSpacer.propTypes = {
    className: prop_types_index_js_.string
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Chip/selection-reducer.js
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
var SELECTION_TYPE;
(function (SELECTION_TYPE) {
    SELECTION_TYPE["single"] = "single";
    SELECTION_TYPE["multiple"] = "multiple";
    SELECTION_TYPE["none"] = "none";
})(SELECTION_TYPE || (SELECTION_TYPE = {}));
/**
 * @hidden
 */
var SELECTION_ACTION;
(function (SELECTION_ACTION) {
    SELECTION_ACTION["toggle"] = "toggle";
    SELECTION_ACTION["remove"] = "remove";
})(SELECTION_ACTION || (SELECTION_ACTION = {}));
/**
 * @hidden
 */
var selectionReducer = function (state, action) {
    switch (action.selection) {
        case SELECTION_TYPE.single:
            switch (action.type) {
                case SELECTION_ACTION.toggle: {
                    if (!Array.isArray(state) || state === null) {
                        return action.payload === state ? null : action.payload;
                    }
                    throw new Error('State cannot be an array in single selection');
                }
                case SELECTION_ACTION.remove: {
                    return action.payload === state ? null : state;
                }
                default:
                    return state;
            }
        case SELECTION_TYPE.multiple:
            switch (action.type) {
                case SELECTION_ACTION.toggle: {
                    if (Array.isArray(state)) {
                        return state.some(function (i) { return i === action.payload; })
                            ? state.filter(function (i) { return i !== action.payload; })
                            : __spreadArray(__spreadArray([], state, true), [action.payload], false);
                    }
                    if (state === null) {
                        return [action.payload];
                    }
                    throw new Error('State cannot be non-array in multiple selection');
                }
                case SELECTION_ACTION.remove: {
                    if (Array.isArray(state)) {
                        return state.some(function (i) { return i === action.payload; })
                            ? state.filter(function (i) { return i !== action.payload; })
                            : __spreadArray(__spreadArray([], state, true), [action.payload], false);
                    }
                    return state;
                }
                default:
                    return state;
            }
        case SELECTION_TYPE.none:
            return null;
        default:
            return state;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Chip/focus-reducer.js
/**
 * @hidden
 */
var FOCUS_ACTION;
(function (FOCUS_ACTION) {
    FOCUS_ACTION["next"] = "next";
    FOCUS_ACTION["prev"] = "prev";
    FOCUS_ACTION["current"] = "current";
    FOCUS_ACTION["reset"] = "reset";
})(FOCUS_ACTION || (FOCUS_ACTION = {}));
/**
 * @hidden
 */
var focusReducer = function (state, action) {
    var currentIndex = action.items.findIndex(function (i) { return i === state; });
    switch (action.type) {
        case FOCUS_ACTION.next:
            return currentIndex === action.items.length - 1
                ? state
                : action.items[currentIndex + 1];
        case FOCUS_ACTION.prev:
            return currentIndex === 0
                ? state
                : action.items[currentIndex - 1];
        case FOCUS_ACTION.current:
            return action.payload;
        case FOCUS_ACTION.reset:
            return null;
        default:
            return state;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Chip/data-reducer.js
/**
 * @hidden
 */
var CHIP_DATA_ACTION;
(function (CHIP_DATA_ACTION) {
    CHIP_DATA_ACTION["remove"] = "remove";
    CHIP_DATA_ACTION["add"] = "add";
    CHIP_DATA_ACTION["reorder"] = "reorder";
})(CHIP_DATA_ACTION || (CHIP_DATA_ACTION = {}));
/**
 * @hidden
 */
var dataReducer = function (state, action) {
    switch (action.type) {
        case CHIP_DATA_ACTION.add:
            // TODO v2
            break;
        case CHIP_DATA_ACTION.remove:
            return state.filter(function (i) { return i[action.valueField] !== action.payload; });
        case CHIP_DATA_ACTION.reorder:
            // TODO v2
            break;
        default:
            return state;
    }
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Chip/ChipList.js
var ChipList_assign = (undefined && undefined.__assign) || function () {
    ChipList_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ChipList_assign.apply(this, arguments);
};









/**
 * @hidden
 */
var ChipListSelectionContext = index_js_.createContext([null, function (_args) {
        /**/
    }]);
/**
 * @hidden
 */
var ChipListFocusContext = index_js_.createContext([null, function (_args) {
        /**/
    }]);
/**
 * @hidden
 */
var ChipListDataContext = index_js_.createContext([null, function (_args) {
        /**/
    }]);
/**
 * @hidden
 */
var useSelection = function (defaultValue, args, callback) {
    var _a = index_js_.useState(defaultValue), state = _a[0], setState = _a[1];
    var handleDispatchSelection = function (action) {
        var newState = selectionReducer(args.state || state, ChipList_assign(ChipList_assign({}, action), args));
        if (callback) {
            callback(newState, action.event);
        }
        setState(newState);
    };
    return [state, handleDispatchSelection];
};
/**
 * @hidden
 */
var useFocus = function (args) {
    var _a = index_js_.useState(null), state = _a[0], setState = _a[1];
    var handleDispatchFocus = function (action) {
        var newState = focusReducer(action.payload, ChipList_assign(ChipList_assign({}, action), args));
        setState(newState);
    };
    return [state, handleDispatchFocus];
};
/**
 * @hidden
 */
var useData = function (defaultData, args, callback) {
    var _a = index_js_.useState(defaultData), state = _a[0], setState = _a[1];
    var handleDispatchData = function (action) {
        var newState = dataReducer(args.state || state, ChipList_assign(ChipList_assign({}, action), args));
        if (callback) {
            callback(newState, action.event);
        }
        setState(newState);
    };
    return [state, handleDispatchData];
};
/**
 * Represents the ChipList component.
 */
var ChipList = index_js_.forwardRef(function (props, ref) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var chipListRef = index_js_.useRef(null);
    var dir = (0,main_js_.useDir)(chipListRef, props.dir);
    var chip = props.chip, id = props.id, style = props.style, tabIndex = props.tabIndex, disabled = props.disabled, size = props.size, className = props.className, ariaDescribedBy = props.ariaDescribedBy, ariaLabelledBy = props.ariaLabelledBy, _b = props.selection, selection = _b === void 0 ? defaultProps.selection : _b, _c = props.value, value = _c === void 0 ? defaultProps.defaultValue : _c, _d = props.defaultData, defaultData = _d === void 0 ? defaultProps.defaultData : _d, _e = props.valueField, valueField = _e === void 0 ? defaultProps.valueField : _e, _f = props.textField, textField = _f === void 0 ? defaultProps.textField : _f, onChange = props.onChange, onDataChange = props.onDataChange;
    var ChipComponent = index_js_.useMemo(function () { return chip || Chip; }, [chip, Chip]);
    index_js_.useImperativeHandle(target, function () { return ({
        element: chipListRef.current,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var handleChange = index_js_.useCallback(function (newValue, event) {
        if (onChange && target.current) {
            onChange.call(undefined, {
                value: newValue,
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [onChange]);
    var _g = useSelection(value, {
        selection: selection,
        state: value
    }, handleChange), stateValue = _g[0], dispatchStateValue = _g[1];
    var handleDataChange = index_js_.useCallback(function (newData, event) {
        if (onDataChange && target.current) {
            onDataChange.call(undefined, {
                value: newData,
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [onDataChange]);
    var _h = useData(props.data || defaultData, {
        state: props.data,
        valueField: valueField
    }, handleDataChange), stateData = _h[0], dispatchData = _h[1];
    var itemsReducer = index_js_.useCallback(function (acc, current) {
        acc.push(current[valueField]);
        return acc;
    }, [valueField]);
    var data = index_js_.useMemo(function () { return props.data || stateData; }, [props.data, stateData]);
    var chipValue = index_js_.useMemo(function () { return value || stateValue; }, [value, stateValue]);
    var items = index_js_.useMemo(function () { return data.reduce(itemsReducer, []); }, [data, itemsReducer]);
    var valueGetter = index_js_.useCallback(function (item) { return (0,main_js_.getter)(valueField)(item); }, [valueField]);
    var textGetter = index_js_.useCallback(function (item) { return (0,main_js_.getter)(textField)(item); }, [textField]);
    var _j = useFocus({ items: items }), focus = _j[0], dispatchFocus = _j[1];
    var mouseProps = (0,main_js_.useMouse)(props, target);
    return (index_js_.createElement(ChipListSelectionContext.Provider, { value: [chipValue, dispatchStateValue] },
        index_js_.createElement(ChipListFocusContext.Provider, { value: [focus, dispatchFocus] },
            index_js_.createElement(ChipListDataContext.Provider, { value: [data, dispatchData] },
                index_js_.createElement("div", ChipList_assign({ ref: chipListRef }, mouseProps, { role: 'listbox', id: id, dir: dir, style: style, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled, undefined), className: (0,main_js_.classNames)('k-chip-list', (_a = {
                            'k-rtl': dir === 'rtl',
                            'k-disabled': disabled
                        },
                        _a["k-chip-list-".concat(main_js_.kendoThemeMaps.sizeMap[size] || size)] = size,
                        _a), className), "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }), data.map(function (item, index) {
                    return (index_js_.createElement(ChipComponent, { role: 'option', dataItem: item, size: size, key: [valueGetter(item), index].join('-'), text: textGetter(item), value: valueGetter(item), ariaLabel: item.ariaLabel }));
                }))))));
});
var propTypes = {
    id: prop_types_index_js_.string,
    className: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    data: prop_types_index_js_.any,
    defaultData: prop_types_index_js_.arrayOf(prop_types_index_js_.any),
    onDataChange: prop_types_index_js_.func,
    value: prop_types_index_js_.oneOfType([prop_types_index_js_.any, prop_types_index_js_.arrayOf(prop_types_index_js_.any)]),
    defaultValue: prop_types_index_js_.oneOfType([prop_types_index_js_.any, prop_types_index_js_.arrayOf(prop_types_index_js_.any)]),
    onChange: prop_types_index_js_.func,
    selection: prop_types_index_js_.oneOf(['single', 'none', 'multiple']),
    textField: prop_types_index_js_.string,
    valueField: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl']),
    ariaLabelledBy: prop_types_index_js_.string,
    ariaDescribedBy: prop_types_index_js_.string,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large'])
};
var defaultProps = {
    chip: Chip,
    size: 'medium',
    disabled: false,
    defaultValue: null,
    defaultData: [],
    dir: 'ltr',
    selection: 'none',
    textField: 'text',
    valueField: 'value',
    removable: 'removable'
};
ChipList.displayName = 'KendoReactChipList';
// TODO: delete casting when @types/react is updated!
ChipList.propTypes = propTypes;
ChipList.defaultProps = defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/Chip/Chip.js
var Chip_assign = (undefined && undefined.__assign) || function () {
    Chip_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Chip_assign.apply(this, arguments);
};










/**
 * Represents the Chip component.
 */
var Chip = index_js_.forwardRef(function (props, ref) {
    var _a;
    (0,main_js_.validatePackage)(packageMetadata);
    var target = index_js_.useRef(null);
    var chipRef = index_js_.useRef(null);
    var dir = (0,main_js_.useDir)(chipRef, props.dir);
    index_js_.useImperativeHandle(target, function () { return ({
        element: chipRef.current,
        props: props
    }); });
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var _b = index_js_.useContext(ChipListSelectionContext), selection = _b[0], dispatchSelection = _b[1];
    var _c = index_js_.useContext(ChipListFocusContext), focus = _c[0], dispatchFocus = _c[1];
    var _d = index_js_.useContext(ChipListDataContext), dispatchData = _d[1];
    var selected = index_js_.useMemo(function () {
        return (props.selected || (Array.isArray(selection)
            ? selection.some(function (i) { return i === props.value; })
            : selection === props.value));
    }, [props.selected, props.value, selection]);
    var focused = index_js_.useMemo(function () { return focus === props.value; }, [props.value, focus]);
    index_js_.useEffect(function () {
        if (focused && chipRef.current) {
            chipRef.current.focus();
        }
    }, [focused]);
    var handleClick = index_js_.useCallback(function (event) {
        dispatchSelection({ type: SELECTION_ACTION.toggle, payload: props.value, event: event });
    }, [dispatchSelection, props.value]);
    var handleRemove = index_js_.useCallback(function (event) {
        if (!props.removable) {
            return;
        }
        dispatchData({ type: CHIP_DATA_ACTION.remove, payload: props.value, event: event });
        dispatchFocus({ type: FOCUS_ACTION.reset, payload: props.value, event: event });
        dispatchSelection({ type: SELECTION_ACTION.remove, payload: props.value, event: event });
        if (props.onRemove) {
            props.onRemove.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onRemove, props.value, props.removable, dispatchData, dispatchFocus, dispatchSelection]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        switch (event.keyCode) {
            case main_js_.Keys.left:
                dispatchFocus({ type: FOCUS_ACTION.prev, payload: props.value, event: event });
                break;
            case main_js_.Keys.right:
                dispatchFocus({ type: FOCUS_ACTION.next, payload: props.value, event: event });
                break;
            case main_js_.Keys.enter:
                dispatchSelection({ type: SELECTION_ACTION.toggle, payload: props.value, event: event });
                break;
            case main_js_.Keys.delete:
                handleRemove(event);
                break;
            default:
                break;
        }
        if (props.onKeyDown) {
            props.onKeyDown.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onKeyDown, props.value, dispatchFocus, dispatchSelection, handleRemove]);
    var handleFocus = index_js_.useCallback(function (event) {
        dispatchFocus({ payload: props.value, type: FOCUS_ACTION.current, event: event });
        if (props.onFocus) {
            props.onFocus.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onFocus, props.value, dispatchFocus]);
    var handleBlur = index_js_.useCallback(function (event) {
        if (props.onBlur) {
            props.onBlur.call(undefined, {
                target: target.current,
                syntheticEvent: event
            });
        }
    }, [props.onBlur]);
    var mouseProps = (0,main_js_.useMouse)(props, target, { onClick: handleClick });
    return (index_js_.createElement("div", Chip_assign({}, mouseProps, { role: props.role, id: props.value, style: props.style, ref: chipRef, dir: dir, tabIndex: (0,main_js_.getTabIndex)(props.tabIndex, props.disabled, undefined), className: (0,main_js_.classNames)('k-chip', (_a = {
                'k-rtl': dir === 'rtl',
                'k-disabled': props.disabled,
                'k-selected': selected,
                'k-focus': focused
            },
            _a["k-chip-".concat(main_js_.kendoThemeMaps.sizeMap[props.size] || props.size)] = props.size,
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[props.rounded] || props.rounded)] = props.rounded,
            _a["k-chip-".concat(props.fillMode)] = props.fillMode,
            _a["k-chip-".concat(props.fillMode, "-").concat(props.themeColor)] = Boolean(props.fillMode && props.themeColor),
            _a), props.className), "aria-checked": selected, "aria-disabled": props.disabled, "aria-describedby": props.ariaDescribedBy, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown }),
        (selected && (props.selectedIcon || props.selectedSvgIcon)) &&
            index_js_.createElement(main_js_.IconWrap, { className: 'k-chip-icon', name: props.selectedIcon ? (0,main_js_.toIconName)(props.selectedIcon) : undefined, icon: props.selectedSvgIcon, size: 'small' }),
        (props.icon || props.svgIcon) &&
            index_js_.createElement(main_js_.IconWrap, { className: 'k-chip-icon', name: props.icon ? (0,main_js_.toIconName)(props.icon) : undefined, icon: props.svgIcon, size: 'small' }),
        (props.avatar) &&
            index_js_.createElement("div", { className: "k-chip-avatar k-avatar k-rounded-".concat(props.avatar.rounded, " k-avatar-md k-avatar-solid k-avatar-solid-primary"), style: props.avatar.style },
                index_js_.createElement("span", { className: "k-avatar-image" },
                    index_js_.createElement("img", { src: props.avatar.image, alt: props.avatar.imageAlt }))),
        index_js_.createElement("span", { className: 'k-chip-content' }, props.children !== undefined
            ? props.children
            : props.text &&
                index_js_.createElement("span", { "aria-label": props.ariaLabel || props.text, className: 'k-chip-label' }, props.text)),
        props.removable && (index_js_.createElement("span", { className: "k-chip-actions" },
            index_js_.createElement("span", { className: (0,main_js_.classNames)('k-chip-action', 'k-chip-remove-action'), onClick: handleRemove },
                index_js_.createElement(main_js_.IconWrap, { name: props.removeIcon ? (0,main_js_.toIconName)(props.removeIcon) : undefined, icon: props.removeSvgIcon, size: 'small' }))))));
});
var Chip_propTypes = {
    id: prop_types_index_js_.string,
    text: prop_types_index_js_.string,
    value: prop_types_index_js_.any,
    dir: prop_types_index_js_.oneOf(['ltr', 'rtl']),
    removable: prop_types_index_js_.bool,
    removeIcon: prop_types_index_js_.string,
    removeIconSvg: main_js_.svgIconPropType,
    disabled: prop_types_index_js_.bool,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    selectedIcon: prop_types_index_js_.string,
    selectedIconSvg: main_js_.svgIconPropType,
    onRemove: prop_types_index_js_.func,
    dataItem: prop_types_index_js_.any,
    selected: prop_types_index_js_.bool,
    ariaDescribedBy: prop_types_index_js_.string,
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    fillMode: prop_types_index_js_.oneOf([null, 'outline', 'solid']),
    // eslint-disable-next-line max-len
    themeColor: prop_types_index_js_.oneOf([null, 'base', 'info', 'success', 'warning', 'error'])
};
var Chip_defaultProps = {
    disabled: false,
    removable: false,
    removeIcon: 'k-i-x-circle',
    dir: 'ltr',
    size: 'medium',
    rounded: 'medium',
    fillMode: 'solid',
    themeColor: 'base'
};
Chip.displayName = 'KendoReactChip';
// TODO: delete casting when @types/react is updated!
Chip.propTypes = Chip_propTypes;
Chip.defaultProps = Chip_defaultProps;

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/FloatingActionButton/FloatingActionButtonItem.js
var FloatingActionButtonItem_assign = (undefined && undefined.__assign) || function () {
    FloatingActionButtonItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return FloatingActionButtonItem_assign.apply(this, arguments);
};
var FloatingActionButtonItem_rest = (undefined && undefined.__rest) || function (s, e) {
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
 * Represents the [KendoReact FloatingActionButtonItem component]({% slug overview_floatingactionbutton %}).
 *
 * @example
 * ```jsx
 *
 * const App = () => {
 *   return (
 *       <FloatingActionButton items={[{icon: 'pencil', text: 'Edit'}, {icon: 'close', text: 'Remove'}] icon: 'plus'} />
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var FloatingActionButtonItem = index_js_.forwardRef(function (props, ref) {
    var className = props.className, disabled = props.disabled, text = props.text, icon = props.icon, style = props.style, id = props.id, focused = props.focused, tabIndex = props.tabIndex, index = props.index, dataItem = props.dataItem, item = props.item, svgIcon = props.svgIcon, onDown = props.onDown, onClick = props.onClick, others = FloatingActionButtonItem_rest(props, ["className", "disabled", "text", "icon", "style", "id", "focused", "tabIndex", "index", "dataItem", "item", "svgIcon", "onDown", "onClick"]);
    var elementRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); }, [focusElement]);
    index_js_.useImperativeHandle(ref, getImperativeHandle);
    var handleClick = index_js_.useCallback(function (event) {
        if (onClick && index !== undefined && !disabled) {
            onClick(event, index);
        }
    }, [onClick, index]);
    var itemClassNames = index_js_.useMemo(function () { return (0,main_js_.classNames)('k-fab-item', {
        'k-focus': focused,
        'k-disabled': disabled
    }, className); }, [className, disabled, focused]);
    var ItemComp = item;
    return (index_js_.createElement("li", FloatingActionButtonItem_assign({ ref: elementRef, id: id, className: itemClassNames, style: style, role: 'menuitem', tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), "aria-disabled": disabled, "aria-label": "".concat(text || '', " floatingactionbutton item"), onClick: handleClick, onMouseDown: onDown, onPointerDown: onDown }, others), ItemComp ?
        index_js_.createElement(ItemComp, { itemIndex: index, item: dataItem }) :
        (index_js_.createElement(index_js_.Fragment, null,
            text && index_js_.createElement("span", { className: "k-fab-item-text" }, text),
            (icon || svgIcon) ? index_js_.createElement(main_js_.IconWrap, { className: "k-fab-item-icon", name: icon, icon: svgIcon }) : null))));
});
FloatingActionButtonItem.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    children: prop_types_index_js_.any,
    disabled: prop_types_index_js_.bool,
    focused: prop_types_index_js_.bool,
    index: prop_types_index_js_.number,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    text: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    customProp: prop_types_index_js_.any
};
FloatingActionButtonItem.displayName = 'KendoFloatingActionButtonItem';

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/FloatingActionButton/utils.js
/**
 * @hidden
 */
var DEFAULT_OFFSET = '16px';
/**
 * @hidden
 */
var toStringValues = function (val) {
    if (typeof val === 'number') {
        return val + 'px';
    }
    return val;
};
/**
 * @hidden
 */
var utils_getAnchorAlign = function (fabAlign, rtl) {
    var align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'bottom' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    return align;
};
/**
 * @hidden
 */
var utils_getPopupAlign = function (fabAlign, rtl) {
    var align = { horizontal: (rtl ? 'right' : 'left'), vertical: 'top' };
    if (fabAlign.horizontal === 'end') {
        align.horizontal = rtl ? 'left' : 'right';
    }
    return align;
};
/**
 * @hidden
 */
var getTextDirectionClass = function (rtl, hAlign) {
    var al = hAlign === 'end' ? 'end' : 'start';
    var directions = {
        rtl: { end: 'k-text-left', start: 'k-text-right' },
        ltr: { start: 'k-text-left', end: 'k-text-right' }
    };
    return directions[rtl][al];
};
/**
 * @hidden
 */
var position = function (ref, align, alignOffset, isRtl) {
    var horizontal = align.horizontal;
    var vertical = align.vertical;
    if (ref.current) {
        var xFab = alignOffset && alignOffset.x !== undefined ?
            toStringValues(alignOffset.x) :
            DEFAULT_OFFSET;
        var xCenterFab = alignOffset && alignOffset.x !== undefined ?
            "calc(50% + ".concat(toStringValues(alignOffset.x), ")") :
            '50%';
        var yFab = alignOffset && alignOffset.y !== undefined ?
            toStringValues(alignOffset.y) :
            DEFAULT_OFFSET;
        var yCenterFab = alignOffset && alignOffset.y !== undefined ?
            "calc(50% + ".concat(toStringValues(alignOffset.y), ")") :
            '50%';
        ref.current.style.setProperty(horizontalPosition(align, isRtl), horizontal === 'center' ? xCenterFab : xFab);
        ref.current.style.setProperty(verticalPosition(align), vertical === 'middle' ? yCenterFab : yFab);
        if (isRtl) {
            if ((vertical === 'top' || vertical === 'bottom') && horizontal === 'start') {
                ref.current.style.setProperty('left', 'unset');
            }
            if (vertical === 'middle' && horizontal === 'end') {
                ref.current.style.setProperty('right', 'unset');
            }
            if (vertical === 'middle' && horizontal === 'start') {
                ref.current.style.setProperty('left', 'unset');
            }
        }
    }
};
var horizontalPosition = function (align, isRtl) {
    var horizontal = align.horizontal;
    return {
        end: isRtl ? 'left' : 'right',
        center: 'left',
        start: isRtl ? 'right' : 'left'
    }[horizontal || 'end'];
};
var verticalPosition = function (align) {
    return {
        top: 'top',
        middle: 'top',
        bottom: 'bottom'
    }[align.vertical || 'bottom'];
};

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/FloatingActionButton/FloatingActionButton.js
var FloatingActionButton_assign = (undefined && undefined.__assign) || function () {
    FloatingActionButton_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return FloatingActionButton_assign.apply(this, arguments);
};
var FloatingActionButton_rest = (undefined && undefined.__rest) || function (s, e) {
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








/** @hidden */
var ZINDEX_FAB_STEP = 2;
/** @hidden */
var DEFAULT_FAB_ZINDEX = 100;
/**
 * Represents the [KendoReact FloatingActionButton component]({% slug overview_floatingactionbutton %}).
 *
 * @example
 * ```jsx
 * const App = () => {
 *   return (
 *     <FloatingActionButton icon="plus" text="Create"/>
 *   );
 * };
 *    ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var FloatingActionButton = index_js_.forwardRef(function (props, ref) {
    (0,main_js_.validatePackage)(packageMetadata);
    var _a = props.align, align = _a === void 0 ? FloatingActionButton_defaultProps.align : _a, alignOffset = props.alignOffset, className = props.className, disabled = props.disabled, icon = props.icon, svgIcon = props.svgIcon, iconClass = props.iconClass, id = props.id, items = props.items, item = props.item, text = props.text, _b = props.positionMode, positionMode = _b === void 0 ? FloatingActionButton_defaultProps.positionMode : _b, _c = props.size, size = _c === void 0 ? FloatingActionButton_defaultProps.size : _c, style = props.style, _d = props.rounded, rounded = _d === void 0 ? FloatingActionButton_defaultProps.rounded : _d, _e = props.themeColor, themeColor = _e === void 0 ? FloatingActionButton_defaultProps.themeColor : _e, overlayStyle = props.overlayStyle, tabIndex = props.tabIndex, accessKey = props.accessKey, _f = props.popupSettings, popupSettings = _f === void 0 ? {} : _f, modal = props.modal, onClick = props.onClick, onItemClick = props.onItemClick, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onOpen = props.onOpen, onClose = props.onClose, others = FloatingActionButton_rest(props, ["align", "alignOffset", "className", "disabled", "icon", "svgIcon", "iconClass", "id", "items", "item", "text", "positionMode", "size", "style", "rounded", "themeColor", "overlayStyle", "tabIndex", "accessKey", "popupSettings", "modal", "onClick", "onItemClick", "onFocus", "onBlur", "onKeyDown", "onOpen", "onClose"]);
    var zIndexContext = (0,main_js_.useZIndexContext)();
    var currentZIndex = zIndexContext ? zIndexContext + ZINDEX_FAB_STEP : DEFAULT_FAB_ZINDEX;
    var target = index_js_.useRef(null);
    var elementRef = index_js_.useRef(null);
    var listRef = index_js_.useRef(null);
    var popupRef = index_js_.useRef(null);
    var focusElement = index_js_.useCallback(function () {
        if (elementRef.current) {
            elementRef.current.focus();
        }
    }, []);
    var getImperativeHandle = index_js_.useCallback(function () { return ({
        element: elementRef.current,
        focus: focusElement
    }); }, [focusElement]);
    index_js_.useImperativeHandle(target, getImperativeHandle);
    index_js_.useImperativeHandle(ref, function () { return target.current; });
    var _g = index_js_.useState(false), open = _g[0], setOpen = _g[1];
    var _h = index_js_.useState(false), focused = _h[0], setFocused = _h[1];
    var _j = index_js_.useState(-1), focusedIndex = _j[0], setFocusedIndex = _j[1];
    var buttonId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    var dir = (0,main_js_.useDir)(elementRef, props.dir);
    var isRtl = dir === 'rtl';
    var listId = index_js_.useMemo(function () { return (0,main_js_.guid)(); }, []);
    index_js_.useEffect(function () {
        position(elementRef, align, alignOffset, isRtl);
    }, [elementRef, align, alignOffset, isRtl]);
    index_js_.useEffect(function () {
        if (focused && elementRef && elementRef.current) {
            // firefox in mac does not focus on mouse-down, next line fixes this
            elementRef.current.focus();
        }
    }, [focused, elementRef]);
    var dispatchPopupEvent = index_js_.useCallback(function (dispatchedEvent, isOpen) {
        if (!items) {
            return;
        }
        (0,main_js_.dispatchEvent)(isOpen ? onOpen : onClose, dispatchedEvent, getImperativeHandle(), undefined);
    }, [onOpen, onClose, items]);
    var handleClick = index_js_.useCallback(function (event) {
        if (!event.target || disabled) {
            return;
        }
        if (!items && onClick) {
            (0,main_js_.dispatchEvent)(onClick, event, getImperativeHandle(), undefined);
        }
        else {
            setOpen(!open);
            setFocused(true);
            setFocusedIndex(!open ? 0 : -1);
            dispatchPopupEvent(event, !open);
        }
    }, [setOpen, setFocused, setFocusedIndex, onClick, dispatchPopupEvent,
        open, items, disabled]);
    var handleFocus = index_js_.useCallback(function (event) {
        setFocused(true);
        setFocusedIndex(open ? 0 : -1);
        if (onFocus) {
            (0,main_js_.dispatchEvent)(onFocus, event, getImperativeHandle(), undefined);
        }
    }, [onFocus, setFocused, setFocusedIndex]);
    var handleBlur = index_js_.useCallback(function (event) {
        setFocused(false);
        setOpen(false);
        setFocusedIndex(-1);
        (0,main_js_.dispatchEvent)(onBlur, event, getImperativeHandle(), undefined);
        var fireCloseEvent = open;
        if (fireCloseEvent) {
            dispatchPopupEvent(event, false);
        }
    }, [onBlur, setFocused, setOpen, setFocusedIndex, dispatchPopupEvent]);
    var handleMouseDown = index_js_.useCallback(function (event) {
        event.preventDefault();
    }, []);
    var dispatchItemClickEvent = index_js_.useCallback(function (dispatchedEvent, index) {
        if (!items) {
            return;
        }
        if (!items[index].disabled) {
            (0,main_js_.dispatchEvent)(onItemClick, dispatchedEvent, getImperativeHandle(), {
                itemProps: items[index],
                itemIndex: index
            });
        }
    }, [onItemClick]);
    var handleItemClick = index_js_.useCallback(function (event, clickedItemIndex) {
        if (!event.target || !items) {
            return;
        }
        setFocusedIndex(clickedItemIndex);
        setOpen(false);
        dispatchItemClickEvent(event, clickedItemIndex);
        dispatchPopupEvent(event, false);
    }, [setFocusedIndex, setOpen, dispatchItemClickEvent, dispatchPopupEvent]);
    var handleItemDown = index_js_.useCallback(function (event) {
        var activeElement = (0,main_js_.getActiveElement)(document);
        if (activeElement === elementRef.current) {
            event.preventDefault();
        }
    }, [elementRef]);
    var handleKeyDown = index_js_.useCallback(function (event) {
        var currIndex = focusedIndex;
        var maxNavIndex = items ? items.length - 1 : -1;
        var isAtBottom = align.vertical === 'bottom';
        switch (event.keyCode) {
            case main_js_.Keys.enter:
            case main_js_.Keys.space:
                if (currIndex >= 0) {
                    dispatchItemClickEvent(event, currIndex);
                }
                event.preventDefault();
                setOpen(!open);
                setFocusedIndex(!open ? 0 : -1);
                break;
            case main_js_.Keys.esc:
                event.preventDefault();
                setOpen(false);
                setFocusedIndex(-1);
                break;
            case main_js_.Keys.home:
                event.preventDefault();
                setFocusedIndex(0);
                break;
            case main_js_.Keys.end:
                event.preventDefault();
                setFocusedIndex(maxNavIndex);
                break;
            case main_js_.Keys.down:
            case main_js_.Keys.right:
                event.preventDefault();
                if (currIndex < maxNavIndex && !isAtBottom) {
                    setFocusedIndex(currIndex + 1);
                }
                if (currIndex > 0 && isAtBottom) {
                    setFocusedIndex(currIndex - 1);
                }
                break;
            case main_js_.Keys.up:
            case main_js_.Keys.left:
                event.preventDefault();
                if (currIndex > 0 && !isAtBottom) {
                    setFocusedIndex(currIndex - 1);
                }
                if (currIndex < maxNavIndex && isAtBottom) {
                    setFocusedIndex(currIndex + 1);
                }
                break;
            default:
                break;
        }
        (0,main_js_.dispatchEvent)(onKeyDown, event, getImperativeHandle(), undefined);
    }, [onKeyDown, focusedIndex, setFocusedIndex, isRtl, setOpen]);
    var buttonClassNames = index_js_.useMemo(function () {
        var _a;
        return (0,main_js_.classNames)('k-fab k-fab-solid', (_a = {
                'k-fab-sm': size === 'small',
                'k-fab-md': size === 'medium',
                'k-fab-lg': size === 'large',
                'k-disabled': disabled,
                'k-pos-absolute': positionMode === 'absolute',
                'k-pos-fixed': positionMode === 'fixed',
                'k-focus': focused
            },
            _a["k-rounded-".concat(main_js_.kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded,
            _a["k-fab-solid-".concat(themeColor)] = themeColor,
            _a), "k-".concat(align.vertical, "-").concat(align.horizontal), className);
    }, [themeColor, size, rounded, disabled, positionMode, align, focused, className]);
    var fabItems = (items && (items.map(function (element, index) {
        return (index_js_.createElement(FloatingActionButtonItem, FloatingActionButton_assign({}, element, { key: index, index: index, id: "".concat(listId, "-").concat(index), disabled: disabled || element.disabled, focused: focusedIndex === index, dataItem: element, item: item, className: (0,main_js_.classNames)(element.className, getTextDirectionClass(dir || 'ltr', align.horizontal)), onClick: handleItemClick, onDown: handleItemDown })));
    })));
    var isIconFab = Boolean((icon || svgIcon) && !text);
    var fabWidth = elementRef.current ? elementRef.current.offsetWidth : 0;
    var iconWidth = 32;
    var spacing = (fabWidth / 2) - (iconWidth / 2);
    return (index_js_.createElement(main_js_.ZIndexContext.Provider, { value: currentZIndex },
        index_js_.createElement(index_js_.Fragment, null,
            index_js_.createElement("button", FloatingActionButton_assign({ ref: elementRef, id: id || buttonId, role: items ? 'menubutton' : 'button', type: 'button', "aria-disabled": disabled, "aria-expanded": items ? open : undefined, "aria-haspopup": items ? true : false, "aria-label": "".concat(text || '', " floatingactionbutton"), "aria-owns": items ? listId : undefined, "aria-activedescendant": focusedIndex >= 0 && items ? "".concat(listId, "-").concat(focusedIndex) : undefined, tabIndex: (0,main_js_.getTabIndex)(tabIndex, disabled), accessKey: accessKey, dir: dir, disabled: disabled, className: buttonClassNames, style: style, onClick: handleClick, onMouseDown: handleMouseDown, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleKeyDown }, others),
                (icon || svgIcon) ?
                    index_js_.createElement(main_js_.IconWrap, { className: "k-fab-icon", name: icon, icon: svgIcon }) :
                    iconClass ?
                        index_js_.createElement("span", { role: "presentation", className: iconClass }) : null,
                text && index_js_.createElement("span", { className: "k-fab-text" }, text)),
            modal && open && (index_js_.createElement("div", { className: "k-overlay", style: FloatingActionButton_assign({ zIndex: currentZIndex }, overlayStyle) })),
            index_js_.createElement(es_main_js_.Popup, { ref: popupRef, anchor: elementRef.current, show: open, animate: popupSettings.animate, popupClass: (0,main_js_.classNames)('k-popup-transparent k-fab-popup', popupSettings.popupClass), anchorAlign: popupSettings.anchorAlign || utils_getAnchorAlign(align, isRtl), popupAlign: popupSettings.popupAlign || utils_getPopupAlign(align, isRtl), style: { boxShadow: 'none' } },
                index_js_.createElement("ul", { ref: listRef, role: 'menu', "aria-labelledby": id, id: listId, className: (0,main_js_.classNames)('k-fab-items', {
                        'k-fab-items-bottom': align.vertical !== 'bottom',
                        'k-fab-items-top': align.vertical === 'bottom'
                    }), style: {
                        paddingLeft: isIconFab ? spacing : undefined,
                        paddingRight: isIconFab ? spacing : undefined
                    } }, fabItems)))));
});
FloatingActionButton.propTypes = {
    className: prop_types_index_js_.string,
    style: prop_types_index_js_.object,
    id: prop_types_index_js_.string,
    dir: prop_types_index_js_.string,
    tabIndex: prop_types_index_js_.number,
    accessKey: prop_types_index_js_.string,
    disabled: prop_types_index_js_.bool,
    icon: prop_types_index_js_.string,
    svgIcon: main_js_.svgIconPropType,
    iconClass: prop_types_index_js_.string,
    text: prop_types_index_js_.string,
    alignOffset: prop_types_index_js_.shape({
        x: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        y: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string])
    }),
    align: prop_types_index_js_.shape({
        vertical: prop_types_index_js_.oneOf(['top', 'middle', 'bottom']),
        horizontal: prop_types_index_js_.oneOf(['start', 'center', 'end'])
    }),
    positionMode: prop_types_index_js_.oneOf(['absolute', 'fixed']),
    size: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large']),
    rounded: prop_types_index_js_.oneOf([null, 'small', 'medium', 'large', 'full']),
    themeColor: prop_types_index_js_.oneOf([null,
        'primary', 'secondary', 'tertiary',
        'info', 'success', 'warning',
        'error', 'dark', 'light', 'inverse'
    ]),
    modal: prop_types_index_js_.bool,
    overlayStyle: prop_types_index_js_.object
};
var FloatingActionButton_defaultProps = {
    align: { vertical: 'bottom', horizontal: 'end' },
    size: 'medium',
    rounded: 'full',
    themeColor: 'primary',
    positionMode: 'fixed'
};
FloatingActionButton.displayName = 'KendoFloatingActionButton';

;// ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js



















/***/ }

}]);