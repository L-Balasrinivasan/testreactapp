"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[7707],{

/***/ 27707
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dialog: () => (/* reexport */ Dialog),
  DialogActionsBar: () => (/* reexport */ DialogActionsBar),
  DialogPropsContext: () => (/* reexport */ DialogPropsContext),
  Window: () => (/* reexport */ Window),
  WindowActionsBar: () => (/* reexport */ WindowActionsBar),
  WindowPropsContext: () => (/* reexport */ WindowPropsContext)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) react-dom@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(6913);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-buttons@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-buttons@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-sv_77ae5865629ed808b5eb96078941624a/node_modules/@progress/kendo-react-buttons/dist/es/main.js)
var main_js_ = __webpack_require__(85601);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/DialogTitleBar.js



/**
 * @hidden
 */
var DialogTitleBar = function (_a) {
    var children = _a.children, onCloseButtonClick = _a.onCloseButtonClick, id = _a.id, closeIcon = _a.closeIcon;
    return (index_js_.createElement("div", { className: "k-window-titlebar k-dialog-titlebar", id: id },
        index_js_.createElement("span", { className: "k-window-title k-dialog-title" }, children),
        index_js_.createElement("div", { className: "k-window-titlebar-actions k-dialog-titlebar-actions" }, closeIcon &&
            index_js_.createElement(main_js_.Button, { role: "button", "aria-label": "Close", onClick: onCloseButtonClick, icon: "x", svgIcon: index_es_js_.xIcon, fillMode: "flat", className: "k-window-titlebar-action k-dialog-titlebar-action" }))));
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var es_main_js_ = __webpack_require__(76034);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/DialogActionsBar.js



/**
 * Returns the action bar of the Dialog.
 *
 * @returns React.ReactElement
 */
var DialogActionsBar = function (props) {
    var _a;
    var _b = props.layout, layout = _b === void 0 ? defaultProps.layout : _b, children = props.children;
    var wrapperClasses = (0,es_main_js_.classNames)('k-actions', 'k-actions-horizontal', 'k-window-actions k-dialog-actions', (_a = {},
        _a["k-actions-".concat(layout)] = layout,
        _a));
    return (index_js_.createElement("div", { className: wrapperClasses }, children));
};
DialogActionsBar.propTypes = {
    children: prop_types_index_js_.any,
    layout: prop_types_index_js_.oneOf(['start', 'center', 'end', 'stretched'])
};
var defaultProps = {
    layout: 'stretched'
};

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-dialogs',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695801467,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/constants.js
/** @hidden */
var DATA_DIALOGS_ID = 'data-windowid';
/** @hidden */
var DEFAULT_DIALOGS_ZINDEX = 10002;
/** @hidden */
var ZINDEX_DIALOGS_STEP = 2;
/** @hidden */
var DIALOGS_SELECTOR = '.k-window:not(.k-dialog), .k-dialog-wrapper';

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/utils.js

/** @hidden */
var getMaxZIndex = function (currentZIndex, currentDocument, currentWindowId) {
    var maxZindex = currentZIndex;
    if (currentDocument && currentDocument.defaultView) {
        var allWindows = currentDocument.querySelectorAll(DIALOGS_SELECTOR);
        var zIndexChanged_1 = false;
        allWindows.forEach(function (KRwindow) {
            var computedStyle = currentDocument.defaultView.getComputedStyle(KRwindow, null);
            var dataId = KRwindow.getAttribute(DATA_DIALOGS_ID);
            if (dataId !== currentWindowId && computedStyle.zIndex !== null) {
                var zIndexValue = parseInt(computedStyle.zIndex, 10);
                if (zIndexValue >= maxZindex) {
                    maxZindex = zIndexValue;
                    zIndexChanged_1 = true;
                }
            }
        });
        return zIndexChanged_1 ? (maxZindex + ZINDEX_DIALOGS_STEP) : maxZindex;
    }
    return maxZindex;
};

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/Dialog.js
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










// tslint:enable:max-line-length
/** @hidden */
var DialogWithoutContext = /** @class */ (function (_super) {
    __extends(DialogWithoutContext, _super);
    function DialogWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.context = 0;
        _this._id = (0,es_main_js_.guid)();
        _this.titleId = _this.generateTitleId();
        _this.contentId = _this.generateContentId();
        _this.showLicenseWatermark = false;
        /**
         * @hidden
         */
        _this.onCloseDialog = function (event) {
            event.preventDefault();
            (0,es_main_js_.dispatchEvent)(_this.props.onClose, event, _this, undefined);
        };
        /**
         * @hidden
         */
        _this.onKeyDown = function (event) {
            if (event.keyCode === es_main_js_.Keys.esc && _this.props.onClose) {
                event.preventDefault();
                _this.onCloseDialog(event);
            }
            var kDialog = _this.element;
            if (kDialog && (event.keyCode === es_main_js_.Keys.tab)) {
                var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
                var focusableContent = kDialog.querySelectorAll(focusableElements);
                var firstFocusableElement = focusableContent[0];
                var lastFocusableElement = focusableContent[focusableContent.length - 1];
                var currentDocument = _this.getDocument();
                var activeElement = (0,es_main_js_.getActiveElement)(currentDocument);
                if (event.shiftKey) {
                    if ((currentDocument && activeElement === firstFocusableElement) ||
                        currentDocument && activeElement === _this.element) {
                        lastFocusableElement.focus();
                        event.preventDefault();
                    }
                }
                else {
                    if (currentDocument && activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        event.preventDefault();
                    }
                }
            }
        };
        _this.getCurrentZIndex = function () {
            if (!_this.state || _this.context === undefined) {
                return _this.context ? _this.context : DEFAULT_DIALOGS_ZINDEX;
            }
            return _this.state.zIndex > (_this.context ? _this.context + ZINDEX_DIALOGS_STEP : 0) ? _this.state.zIndex : _this.context + ZINDEX_DIALOGS_STEP;
        };
        _this.getDocument = function () {
            return _this.props.appendTo ? _this.props.appendTo.ownerDocument : document;
        };
        (0,es_main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,es_main_js_.shouldShowValidationUI)(packageMetadata);
        _this.state = {
            zIndex: getMaxZIndex(_this.getCurrentZIndex(), _this.getDocument(), _this._id)
        };
        return _this;
    }
    /**
     * @hidden
     */
    DialogWithoutContext.prototype.componentDidMount = function () {
        if (this.element) {
            if (this.props.autoFocus) {
                this.element.focus();
            }
        }
    };
    /**
     * @hidden
     */
    DialogWithoutContext.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var id = this.props.id !== undefined ? this.props.id : this.titleId;
        var _c = this.props, title = _c.title, width = _c.width, height = _c.height, children = _c.children, minWidth = _c.minWidth, dir = _c.dir, style = _c.style, contentStyle = _c.contentStyle;
        var elementsArray = index_js_.Children.toArray(children);
        var content = this.getContent(elementsArray);
        var actions = this.getActionBar(elementsArray);
        var aria = title ? {
            'aria-labelledby': id
        } : null;
        var closeIcon = this.props.closeIcon !== undefined ? this.props.closeIcon : true;
        var currentZIndex = this.getCurrentZIndex();
        var dialogElement = (index_js_.createElement(es_main_js_.ZIndexContext.Provider, { value: currentZIndex },
            index_js_.createElement("div", __assign({}, (_a = {}, _a[DATA_DIALOGS_ID] = this._id, _a), { className: 'k-dialog-wrapper' + (this.props.className ? ' ' + this.props.className : ''), onKeyDown: this.onKeyDown, tabIndex: 0, dir: dir, style: __assign({ zIndex: currentZIndex }, style), ref: (function (el) { return _this.element = el; }) }),
                index_js_.createElement("div", { className: "k-overlay" }),
                index_js_.createElement("div", __assign({}, aria, { className: (0,es_main_js_.classNames)('k-window k-dialog', (_b = {},
                        _b["k-window-".concat(this.props.themeColor)] = this.props.themeColor,
                        _b)), role: "dialog", "aria-labelledby": id, "aria-modal": true, "aria-describedby": this.contentId, style: { width: width, height: height, minWidth: minWidth } }),
                    this.props.title &&
                        index_js_.createElement(DialogTitleBar, { closeIcon: closeIcon, onCloseButtonClick: this.onCloseDialog, id: id }, title),
                    index_js_.createElement("div", { className: "k-window-content k-dialog-content", style: contentStyle, id: this.contentId }, content),
                    actions,
                    this.showLicenseWatermark && index_js_.createElement(es_main_js_.WatermarkOverlay, null)))));
        if (es_main_js_.canUseDOM) {
            return this.props.appendTo !== null ?
                react_dom_index_js_.createPortal(dialogElement, this.props.appendTo || document.body) :
                dialogElement;
        }
        return null;
    };
    DialogWithoutContext.prototype.getActionBar = function (children) {
        return children.filter(function (child) { return child && child.type === DialogActionsBar; });
    };
    DialogWithoutContext.prototype.getContent = function (children) {
        return children.filter(function (child) {
            return child && child.type !== DialogActionsBar;
        });
    };
    DialogWithoutContext.prototype.generateTitleId = function () {
        return 'dialog-title' + this._id;
    };
    DialogWithoutContext.prototype.generateContentId = function () {
        return 'dialog-content' + this._id;
    };
    DialogWithoutContext.displayName = 'Dialog';
    /**
     * @hidden
     */
    DialogWithoutContext.propTypes = {
        title: prop_types_index_js_.any,
        id: prop_types_index_js_.string,
        dir: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        closeIcon: prop_types_index_js_.bool,
        width: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        height: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        minWidth: prop_types_index_js_.oneOfType([prop_types_index_js_.number, prop_types_index_js_.string]),
        autoFocus: prop_types_index_js_.bool
    };
    /**
     * @hidden
     */
    DialogWithoutContext.defaultProps = {
        autoFocus: false
    };
    /**
     * @hidden
     */
    DialogWithoutContext.contextType = es_main_js_.ZIndexContext;
    return DialogWithoutContext;
}(index_js_.Component));
/**
 * Represents the PropsContext of the `Dialog` component.
 * Used for global configuration of all `Dialog` instances.
 */
var DialogPropsContext = (0,es_main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact Dialog component]({% slug overview_dialog %}).
 *
 * Accepts properties of type [DialogProps]({% slug api_dialogs_dialogprops %}).
 * Obtaining the `ref` returns an object of type [DialogHandle]({% slug api_dialogs_dialoghandle %}).
 */
var Dialog = (0,es_main_js_.withPropsContext)(DialogPropsContext, DialogWithoutContext);
Dialog.displayName = 'KendoReactDialog';

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/StageEnum.js
var windowStage;
(function (windowStage) {
    windowStage["DEFAULT"] = "DEFAULT";
    windowStage["FULLSCREEN"] = "FULLSCREEN";
    windowStage["MINIMIZED"] = "MINIMIZED";
})(windowStage || (windowStage = {}));

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.2.1_@progress+kendo-licensing@1_f4601061072e7c3278720aa16dc3d5d5/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(31650);
;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/messages/index.js
var _a;
/**
 * @hidden
 */
var dialogsWindowMaximizeButton = 'dialogs.windowMaximizeButton';
/**
 * @hidden
 */
var dialogsWindowMinimizeButton = 'dialogs.windowMinimizeButton';
/**
 * @hidden
 */
var dialogsWindowRestoreButton = 'dialogs.windowRestoreButton';
/**
 * @hidden
 */
var dialogsWindowCloseButton = 'dialogs.windowCloseButton';
/**
 * @hidden
 */
var messages = (_a = {},
    _a[dialogsWindowMaximizeButton] = 'maximize',
    _a[dialogsWindowMinimizeButton] = 'minimize',
    _a[dialogsWindowRestoreButton] = 'restore',
    _a[dialogsWindowCloseButton] = 'close',
    _a);

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/WindowTitlebar.js
var WindowTitlebar_assign = (undefined && undefined.__assign) || function () {
    WindowTitlebar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return WindowTitlebar_assign.apply(this, arguments);
};






/**
 * @hidden
 */
var WindowTitleBarComponent = function (props) {
    var children = props.children, onCloseButtonClick = props.onCloseButtonClick, onMinimizeButtonClick = props.onMinimizeButtonClick, onFullScreenButtonClick = props.onFullScreenButtonClick, onRestoreButtonClick = props.onRestoreButtonClick, onDoubleClick = props.onDoubleClick, stage = props.stage, forwardedRef = props.forwardedRef, id = props.id;
    var localization = (0,index_mjs_.useLocalization)();
    var minimizeButtonRender = props.minimizeButton ?
        index_js_.createElement(props.minimizeButton, { onClick: onMinimizeButtonClick, stage: stage }) :
        (index_js_.createElement(main_js_.Button, { fillMode: "flat", icon: "window-minimize", svgIcon: index_es_js_.windowMinimizeIcon, className: "k-window-titlebar-action", onClick: onMinimizeButtonClick, "aria-label": localization.toLanguageString(dialogsWindowMinimizeButton, messages[dialogsWindowMinimizeButton]) }));
    var maximizeButtonRender = props.maximizeButton ?
        index_js_.createElement(props.maximizeButton, { onClick: onFullScreenButtonClick, stage: stage }) :
        (index_js_.createElement(main_js_.Button, { fillMode: "flat", icon: "window-maximize", svgIcon: index_es_js_.windowIcon, className: "k-window-titlebar-action", onClick: onFullScreenButtonClick, "aria-label": localization.toLanguageString(dialogsWindowMaximizeButton, messages[dialogsWindowMaximizeButton]) }));
    var restoreButtonRender = props.restoreButton ?
        index_js_.createElement(props.restoreButton, { onClick: onRestoreButtonClick, stage: stage }) :
        (index_js_.createElement(main_js_.Button, { fillMode: "flat", icon: "window-restore", svgIcon: index_es_js_.windowRestoreIcon, className: "k-window-titlebar-action", onClick: onRestoreButtonClick, "aria-label": localization.toLanguageString(dialogsWindowRestoreButton, messages[dialogsWindowRestoreButton]) }));
    var closeButtonRender = props.closeButton ?
        index_js_.createElement(props.closeButton, { onClick: onCloseButtonClick, stage: stage }) :
        (index_js_.createElement(main_js_.Button, { fillMode: "flat", icon: "x", svgIcon: index_es_js_.xIcon, className: "k-window-titlebar-action", onClick: onCloseButtonClick, "aria-label": localization.toLanguageString(dialogsWindowCloseButton, messages[dialogsWindowCloseButton]) }));
    return (index_js_.createElement("div", { className: "k-window-titlebar", style: { touchAction: 'none' }, ref: forwardedRef, onDoubleClick: onDoubleClick },
        index_js_.createElement("span", { className: "k-window-title", id: id }, children ? children : ''),
        index_js_.createElement("div", { className: "k-window-titlebar-actions" },
            (stage === windowStage.DEFAULT) && minimizeButtonRender,
            (stage === windowStage.DEFAULT) && maximizeButtonRender,
            (stage !== windowStage.DEFAULT) && restoreButtonRender,
            closeButtonRender)));
};
/**
 * @hidden
 */
var WindowTitleBar = index_js_.forwardRef(function (props, ref) { return (index_js_.createElement(WindowTitleBarComponent, WindowTitlebar_assign({}, props, { forwardedRef: ref }))); });

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/WindowResizeHandlers.js
var WindowResizeHandlers_extends = (undefined && undefined.__extends) || (function () {
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
var keys = ['n', 'e', 's', 'w', 'se', 'sw', 'ne', 'nw'];
/**
 * @hidden
 */
var ResizeHandlers = /** @class */ (function (_super) {
    WindowResizeHandlers_extends(ResizeHandlers, _super);
    function ResizeHandlers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResizeHandlers.prototype.render = function () {
        var _this = this;
        return (index_js_.createElement("div", { className: 'k-resize-handles-wrapper' },
            " ",
            keys.map(function (key, index) {
                return (index_js_.createElement(es_main_js_.Draggable, { key: index, onDrag: function (data) {
                        var event = data.event;
                        event.originalEvent.preventDefault();
                        _this.props.onResize(event, { end: false, direction: key });
                    }, onRelease: function (data) {
                        var event = data.event;
                        event.originalEvent.preventDefault();
                        _this.props.onResize(event, { end: true, direction: key });
                    } },
                    index_js_.createElement("div", { className: 'k-resize-handle k-resize-' + key, style: { display: 'block', touchAction: 'none' } })));
            })));
    };
    return ResizeHandlers;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/MiddleLayerOptimization.js
var MiddleLayerOptimization_extends = (undefined && undefined.__extends) || (function () {
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
var MiddleLayerOptimization = /** @class */ (function (_super) {
    MiddleLayerOptimization_extends(MiddleLayerOptimization, _super);
    function MiddleLayerOptimization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiddleLayerOptimization.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.shouldUpdateOnDrag || !nextProps.isDragging;
    };
    MiddleLayerOptimization.prototype.render = function () {
        return this.props.children;
    };
    return MiddleLayerOptimization;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/WindowActionsBar.js



/**
 * Returns the action bar of the Window.
 *
 * @returns React.ReactElement
 */
var WindowActionsBar = function (props) {
    var _a = props.layout, layout = _a === void 0 ? WindowActionsBar_defaultProps.layout : _a, children = props.children;
    var wrapperClasses = (0,es_main_js_.classNames)('k-actions', 'k-window-actions', 'k-actions-horizontal', 'k-hstack', {
        'k-justify-content-start': layout === 'start',
        'k-justify-content-center': layout === 'center',
        'k-justify-content-end': layout === 'end',
        'k-justify-content-stretch': layout === 'stretched'
    });
    return (index_js_.createElement("div", { className: wrapperClasses }, children));
};
WindowActionsBar.propTypes = {
    children: prop_types_index_js_.any,
    layout: prop_types_index_js_.oneOf(['start', 'center', 'end', 'stretched'])
};
var WindowActionsBar_defaultProps = {
    layout: 'end'
};

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/Window.js
var Window_extends = (undefined && undefined.__extends) || (function () {
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
var Window_assign = (undefined && undefined.__assign) || function () {
    Window_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Window_assign.apply(this, arguments);
};














var DEFAULT_WIDTH = 300;
var DEFAULT_HEIGHT = 300;
var DEFAULT_MIN_WIDTH = 120;
var DEFAULT_MIN_HEIGHT = 100;
var DEFAULT_STEP = 5;
/** @hidden */
var WindowWithoutContext = /** @class */ (function (_super) {
    Window_extends(WindowWithoutContext, _super);
    function WindowWithoutContext(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.context = 0;
        _this.draggable = null;
        _this.offSetCoordinates = { x: 0, y: 0 };
        _this._id = (0,es_main_js_.guid)();
        _this.titleId = _this.generateTitleId();
        _this.mounted = false;
        _this.showLicenseWatermark = false;
        /**
         * @hidden
         */
        _this.onKeyDown = function (event) {
            if (event.target !== event.currentTarget) {
                return;
            }
            var minWidth = _this.props.minWidth || DEFAULT_MIN_WIDTH;
            var minHeight = _this.props.minHeight || DEFAULT_MIN_HEIGHT;
            if (event.ctrlKey && _this.props.resizable) {
                switch (event.keyCode) {
                    case es_main_js_.Keys.up:
                        event.preventDefault();
                        if (minHeight <= (_this.height - DEFAULT_STEP)) {
                            _this.setState({ height: _this.height - DEFAULT_STEP });
                        }
                        break;
                    case es_main_js_.Keys.down:
                        event.preventDefault();
                        _this.setState({ height: _this.height + DEFAULT_STEP });
                        break;
                    case es_main_js_.Keys.left:
                        if (minWidth <= (_this.width - DEFAULT_STEP)) {
                            _this.setState({ width: _this.width - DEFAULT_STEP });
                        }
                        break;
                    case es_main_js_.Keys.right:
                        _this.setState({ width: _this.width + DEFAULT_STEP });
                        break;
                    default: return;
                }
                _this.dispatchMoveEvent(_this.props.onResize, event, false, undefined);
                return;
            }
            if (event.altKey) {
                switch (event.keyCode) {
                    case es_main_js_.Keys.up:
                        if (_this.windowStage === windowStage.MINIMIZED) {
                            _this.handleRestore(event);
                            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.DEFAULT });
                        }
                        else if (_this.windowStage === windowStage.DEFAULT) {
                            _this.handleFullscreen(event);
                            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.FULLSCREEN });
                        }
                        break;
                    case es_main_js_.Keys.down:
                        if (_this.windowStage === windowStage.FULLSCREEN) {
                            _this.handleRestore(event);
                            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.DEFAULT });
                        }
                        else if (_this.windowStage === windowStage.DEFAULT) {
                            _this.handleMinimize(event);
                            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.MINIMIZED });
                        }
                        break;
                    default:
                }
                return;
            }
            if (!event.ctrlKey) {
                switch (event.keyCode) {
                    case es_main_js_.Keys.esc:
                        if (_this.props.onClose) {
                            _this.handleCloseWindow(event);
                        }
                        return;
                    case es_main_js_.Keys.up:
                        _this.setState({ top: _this.state.top - DEFAULT_STEP });
                        break;
                    case es_main_js_.Keys.down:
                        _this.setState({ top: _this.state.top + DEFAULT_STEP });
                        break;
                    case es_main_js_.Keys.left:
                        _this.setState({ left: _this.state.left - DEFAULT_STEP });
                        break;
                    case es_main_js_.Keys.right:
                        _this.setState({ left: _this.state.left + DEFAULT_STEP });
                        break;
                    default: return;
                }
            }
            _this.dispatchMoveEvent(_this.props.onMove, event, false, undefined);
        };
        /**
         * @hidden
         */
        _this.onPress = function (data) {
            var e = data.event;
            _this.windowCoordinatesState.differenceLeft = e.pageX - _this.left;
            _this.windowCoordinatesState.differenceTop = e.pageY - _this.top;
        };
        /**
         * @hidden
         */
        _this.onDrag = function (data) {
            var e = data.event;
            e.originalEvent.preventDefault();
            if (_this.windowStage !== windowStage.FULLSCREEN && _this.props.draggable) {
                _this.setState({
                    top: Math.max(e.pageY - _this.windowCoordinatesState.differenceTop, 0),
                    left: e.pageX - _this.windowCoordinatesState.differenceLeft,
                    isDragging: true
                });
                if (_this.props.onMove) {
                    // eslint-disable-next-line max-len
                    _this.dispatchMoveEvent(_this.props.onMove, e, true, false);
                }
            }
        };
        /**
         * @hidden
         */
        _this.onRelease = function (data) {
            var e = data.event;
            if (_this.windowStage !== windowStage.FULLSCREEN && _this.props.draggable) {
                if (_this.props.onMove) {
                    _this.dispatchMoveEvent(_this.props.onMove, e, true, true);
                }
            }
            _this.setState({
                isDragging: false
            });
        };
        /**
         * @hidden
         */
        _this.onFocus = function () {
            if (_this._blurTimeout) {
                clearTimeout(_this._blurTimeout);
                _this._blurTimeout = undefined;
            }
            else {
                _this.setState({
                    focused: true,
                    zIndex: getMaxZIndex(_this.getCurrentZIndex(), _this.getDocument(), _this._id)
                });
            }
        };
        /**
         * @hidden
         */
        _this.onBlur = function () {
            clearTimeout(_this._blurTimeout);
            var currentWindow = _this.getWindow();
            if (currentWindow) {
                _this._blurTimeout = currentWindow.setTimeout(function () {
                    if (_this.mounted) {
                        _this.setState({ focused: false });
                    }
                    _this._blurTimeout = undefined;
                });
            }
        };
        // Get initial coordinates of the Window
        _this.getInitialTop = function () {
            if (_this.props.top !== undefined) {
                return _this.props.top;
            }
            if (_this.props.initialTop !== undefined) {
                return _this.props.initialTop;
            }
            var height = DEFAULT_HEIGHT;
            if (_this.props.height !== undefined) {
                height = _this.props.height;
            }
            else if (_this.props.initialHeight !== undefined) {
                height = _this.props.initialHeight;
            }
            if (_this.props.appendTo) {
                return (_this.props.appendTo.offsetHeight / 2) - (height / 2);
            }
            var currentWindow = _this.getWindow();
            return currentWindow ? (currentWindow.innerHeight / 2) - (height / 2) : 0;
        };
        _this.getInitialLeft = function () {
            if (_this.props.left !== undefined) {
                return _this.props.left;
            }
            if (_this.props.initialLeft !== undefined) {
                return _this.props.initialLeft;
            }
            var width = DEFAULT_WIDTH;
            if (_this.props.width !== undefined) {
                width = _this.props.width;
            }
            else if (_this.props.initialWidth !== undefined) {
                width = _this.props.initialWidth;
            }
            if (_this.props.appendTo) {
                return (_this.props.appendTo.offsetWidth / 2) - (width / 2);
            }
            var currentWindow = _this.getWindow();
            return currentWindow ? (currentWindow.innerWidth / 2) - (width / 2) : 0;
        };
        _this.getInitialWidth = function () {
            var width = DEFAULT_WIDTH;
            if (_this.props.width !== undefined) {
                width = _this.props.width;
            }
            else if (_this.props.initialWidth !== undefined) {
                width = _this.props.initialWidth;
            }
            return width;
        };
        _this.getInitialHeight = function () {
            var height = DEFAULT_HEIGHT;
            if (_this.props.height !== undefined) {
                height = _this.props.height;
            }
            else if (_this.props.initialHeight !== undefined) {
                height = _this.props.initialHeight;
            }
            return height;
        };
        // Handle actions
        _this.handleMinimize = function (event) {
            event.preventDefault();
            _this.windowCoordinatesState.leftBeforeAction = _this.left;
            _this.windowCoordinatesState.topBeforeAction = _this.top;
            _this.windowCoordinatesState.widthBeforeAction = _this.width;
            _this.windowCoordinatesState.heightBeforeAction = _this.height;
            _this.setState({
                stage: windowStage.MINIMIZED,
                height: 0
            });
            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.MINIMIZED });
        };
        _this.handleFullscreen = function (event) {
            event.preventDefault();
            _this.windowCoordinatesState.leftBeforeAction = _this.left;
            _this.windowCoordinatesState.topBeforeAction = _this.top;
            _this.windowCoordinatesState.widthBeforeAction = _this.width;
            _this.windowCoordinatesState.heightBeforeAction = _this.height;
            var currentWindow = _this.getWindow();
            var innerWidth = currentWindow ? currentWindow.innerWidth : 0;
            var innerHeight = currentWindow ? currentWindow.innerHeight : 0;
            _this.setState({
                left: 0,
                top: 0,
                width: _this.props.appendTo ? _this.props.appendTo.offsetWidth : innerWidth,
                height: _this.props.appendTo ? _this.props.appendTo.offsetHeight : innerHeight,
                stage: windowStage.FULLSCREEN
            });
            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.FULLSCREEN });
        };
        _this.handleRestore = function (event) {
            event.preventDefault();
            if (_this.windowStage === windowStage.FULLSCREEN) {
                _this.setState({
                    stage: windowStage.DEFAULT,
                    left: _this.windowCoordinatesState.leftBeforeAction,
                    top: _this.windowCoordinatesState.topBeforeAction,
                    width: _this.windowCoordinatesState.widthBeforeAction,
                    height: _this.windowCoordinatesState.heightBeforeAction
                });
            }
            else if (_this.windowStage === windowStage.MINIMIZED) {
                _this.setState({
                    stage: windowStage.DEFAULT,
                    height: _this.windowCoordinatesState.heightBeforeAction
                });
            }
            (0,es_main_js_.dispatchEvent)(_this.props.onStageChange, event, _this, { state: windowStage.DEFAULT });
        };
        _this.handleCloseWindow = function (event) {
            event.preventDefault();
            (0,es_main_js_.dispatchEvent)(_this.props.onClose, event, _this, { state: undefined });
        };
        _this.handleDoubleClick = function (e) {
            if (_this.windowStage === windowStage.FULLSCREEN || _this.windowStage === windowStage.MINIMIZED) {
                _this.handleRestore(e);
            }
            else {
                _this.handleFullscreen(e);
            }
        };
        // Handle resizing
        _this.handleResize = function (event, props) {
            var x = _this.props.appendTo ? event.pageX - _this.offSetCoordinates.x : event.pageX;
            var y = _this.props.appendTo ? event.pageY - _this.offSetCoordinates.y : event.pageY;
            var currentWidth = _this.width;
            var currentHeight = _this.height;
            var minWidth = _this.props.minWidth || DEFAULT_MIN_WIDTH;
            var minHeight = _this.props.minHeight || DEFAULT_MIN_HEIGHT;
            var heightDifference = _this.top - y;
            var widthDifference = _this.left - x;
            var newWidth = x - _this.left;
            var newHeight = y - _this.top;
            var newState = Object.assign({}, _this.state, { isDragging: !props.end });
            if (props.direction.indexOf('n') >= 0 && minHeight - (currentHeight + heightDifference) < 0) {
                if (_this.top > 0) {
                    newState.height = currentHeight + heightDifference;
                }
                newState.top = y;
            }
            if (props.direction.indexOf('s') >= 0 && (minHeight - newHeight < 0)) {
                newState.height = newHeight;
            }
            if (props.direction.indexOf('w') >= 0 && minWidth - (currentWidth + widthDifference) < 0) {
                if (_this.left > 0) {
                    newState.width = currentWidth + widthDifference;
                }
                newState.left = x;
            }
            if (props.direction.indexOf('e') >= 0 && (minWidth - newWidth < 0)) {
                newState.width = newWidth;
            }
            _this.setState(newState);
            _this.dispatchMoveEvent(_this.props.onResize, event, true, props.end);
        };
        // Dispatcher for the resize and move events
        _this.dispatchMoveEvent = function (callback, event, drag, end) {
            if (!callback) {
                return;
            }
            callback.call(undefined, {
                nativeEvent: event.nativeEvent ? event.nativeEvent : event.originalEvent,
                drag: drag,
                end: end,
                target: _this,
                left: _this.state.left,
                top: _this.state.top,
                width: _this.state.width,
                hight: _this.state.height,
                height: _this.state.height
            });
        };
        _this.handleBrowserWindowResize = function () {
            if (_this.windowStage === windowStage.FULLSCREEN) {
                var currentWindow = _this.getWindow();
                var innerWidth_1 = currentWindow ? currentWindow.innerWidth : 0;
                var innerHeight_1 = currentWindow ? currentWindow.innerHeight : 0;
                _this.setState({
                    width: _this.props.appendTo ? _this.props.appendTo.offsetWidth : innerWidth_1,
                    height: _this.props.appendTo ? _this.props.appendTo.offsetHeight : innerHeight_1
                });
            }
        };
        _this.getCurrentZIndex = function () {
            if (!_this.state || _this.context === undefined) {
                return _this.context ? _this.context : DEFAULT_DIALOGS_ZINDEX;
            }
            return _this.state.zIndex > (_this.context ? _this.context + ZINDEX_DIALOGS_STEP : 0) ? _this.state.zIndex : _this.context + ZINDEX_DIALOGS_STEP;
        };
        _this.getDocument = function () {
            return _this.props.appendTo ? _this.props.appendTo.ownerDocument : document;
        };
        _this.getWindow = function () {
            var currentDocument = _this.getDocument();
            return currentDocument && currentDocument.defaultView;
        };
        (0,es_main_js_.validatePackage)(packageMetadata);
        _this.showLicenseWatermark = (0,es_main_js_.shouldShowValidationUI)(packageMetadata);
        _this.state = {
            stage: _this.props.stage || windowStage.DEFAULT,
            isDragging: false,
            top: _this.getInitialTop(),
            left: _this.getInitialLeft(),
            width: _this.getInitialWidth(),
            height: _this.getInitialHeight(),
            focused: true,
            zIndex: getMaxZIndex(_this.getCurrentZIndex(), _this.getDocument(), _this._id)
        };
        _this.windowCoordinatesState = {
            leftBeforeAction: _this.getInitialLeft(),
            topBeforeAction: _this.getInitialTop(),
            widthBeforeAction: _this.getInitialWidth(),
            heightBeforeAction: _this.getInitialHeight()
        };
        return _this;
    }
    /**
     * @hidden
     */
    WindowWithoutContext.prototype.componentDidMount = function () {
        var currentWindow = this.getWindow();
        if (currentWindow) {
            currentWindow.addEventListener('resize', this.handleBrowserWindowResize);
        }
        var currentDocument = this.getDocument();
        if (this.props.appendTo && currentDocument) {
            var containerCoordinates = this.props.appendTo.getBoundingClientRect();
            var bodyRect = currentDocument.body.getBoundingClientRect();
            this.offSetCoordinates.x = containerCoordinates.left - bodyRect.left;
            this.offSetCoordinates.y = containerCoordinates.top - bodyRect.top;
        }
        this.mounted = true;
    };
    /**
     * @hidden
     */
    WindowWithoutContext.prototype.componentWillUnmount = function () {
        var currentWindow = this.getWindow();
        if (currentWindow) {
            currentWindow.removeEventListener('resize', this.handleBrowserWindowResize);
        }
        this.mounted = false;
    };
    /**
     * @hidden
     */
    WindowWithoutContext.prototype.componentDidUpdate = function () {
        var currentDocument = this.getDocument();
        if (this.props.appendTo && currentDocument) {
            var containerCoordinates = this.props.appendTo.getBoundingClientRect();
            var bodyRect = currentDocument.body.getBoundingClientRect();
            this.offSetCoordinates.x = containerCoordinates.left - bodyRect.left;
            this.offSetCoordinates.y = containerCoordinates.top - bodyRect.top;
        }
        this.mounted = true;
    };
    /**
     * @hidden
     */
    WindowWithoutContext.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var elementsArray = index_js_.Children.toArray(this.props.children);
        var content = this.getContent(elementsArray);
        var actions = this.getActionBar(elementsArray);
        var currentZIndex = this.getCurrentZIndex();
        var classNamesWindow = (0,es_main_js_.classNames)('k-window', this.props.className, (_a = {},
            _a["k-window-".concat(this.props.themeColor)] = this.props.themeColor,
            _a['k-window-minimized'] = this.state.stage === 'MINIMIZED',
            _a['k-window-focused'] = this.state.focused,
            _a));
        var windowElement = (index_js_.createElement(es_main_js_.ZIndexContext.Provider, { value: currentZIndex },
            index_js_.createElement(index_js_.Fragment, null,
                this.props.modal && (index_js_.createElement("div", { className: "k-overlay", style: Window_assign({ zIndex: currentZIndex }, this.props.overlayStyle) })),
                index_js_.createElement("div", Window_assign({}, (_b = {}, _b[DATA_DIALOGS_ID] = this._id, _b), { tabIndex: 0, role: 'dialog', "aria-labelledby": this.titleId, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown, ref: function (el) {
                        _this.windowElement = el;
                        _this.element = el;
                    }, className: classNamesWindow, style: Window_assign({ top: this.top, left: this.left, width: this.width, height: this.height || '', zIndex: currentZIndex }, this.props.style) }),
                    index_js_.createElement(MiddleLayerOptimization, { shouldUpdateOnDrag: this.props.shouldUpdateOnDrag || false, isDragging: this.state.isDragging },
                        index_js_.createElement(es_main_js_.Draggable, { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, ref: function (component) { return _this.draggable = component; } },
                            index_js_.createElement(WindowTitleBar, { stage: this.windowStage, onDoubleClick: this.props.doubleClickStageChange ? this.handleDoubleClick : undefined, onMinimizeButtonClick: this.handleMinimize, onFullScreenButtonClick: this.handleFullscreen, onRestoreButtonClick: this.handleRestore, onCloseButtonClick: this.handleCloseWindow, closeButton: this.props.closeButton, minimizeButton: this.props.minimizeButton, maximizeButton: this.props.maximizeButton, restoreButton: this.props.restoreButton, id: this.titleId }, this.props.title)),
                        this.windowStage !== windowStage.MINIMIZED
                            ? (index_js_.createElement(index_js_.Fragment, null,
                                index_js_.createElement("div", { className: "k-window-content" }, content),
                                actions))
                            : null,
                        this.windowStage === windowStage.DEFAULT &&
                            this.props.resizable
                            ? index_js_.createElement(ResizeHandlers, { onResize: this.handleResize })
                            : null),
                    this.showLicenseWatermark && index_js_.createElement(es_main_js_.WatermarkOverlay, null)))));
        if (es_main_js_.canUseDOM) {
            return this.props.appendTo !== null ?
                react_dom_index_js_.createPortal(windowElement, this.props.appendTo || document.body) :
                windowElement;
        }
        return null;
    };
    Object.defineProperty(WindowWithoutContext.prototype, "top", {
        // Getters
        get: function () {
            if (this.windowStage !== windowStage.FULLSCREEN) {
                return Math.max(this.props.top || this.state.top, 0);
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowWithoutContext.prototype, "left", {
        get: function () {
            if (this.windowStage !== windowStage.FULLSCREEN) {
                return Math.max(this.props.left || this.state.left, 0);
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowWithoutContext.prototype, "width", {
        get: function () {
            var width = this.props.width || this.state.width;
            if (this.windowStage === windowStage.FULLSCREEN) {
                if (this.props.appendTo) {
                    width = this.props.appendTo.offsetWidth;
                    return width;
                }
                var currentWindow = this.getWindow();
                width = currentWindow ? currentWindow.innerWidth : 0;
            }
            return width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowWithoutContext.prototype, "height", {
        get: function () {
            var height = this.props.height || this.state.height;
            if (this.windowStage === windowStage.FULLSCREEN) {
                if (this.props.appendTo) {
                    height = this.props.appendTo.offsetHeight;
                    return height;
                }
                var currentWindow = this.getWindow();
                height = currentWindow ? currentWindow.innerHeight : 0;
            }
            else if (this.windowStage === windowStage.MINIMIZED) {
                height = 0;
            }
            return height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowWithoutContext.prototype, "windowStage", {
        get: function () {
            return this.props.stage || this.state.stage;
        },
        enumerable: false,
        configurable: true
    });
    WindowWithoutContext.prototype.getActionBar = function (children) {
        return children.filter(function (child) { return child && child.type === WindowActionsBar; });
    };
    WindowWithoutContext.prototype.getContent = function (children) {
        return children.filter(function (child) {
            return child && child.type !== WindowActionsBar;
        });
    };
    WindowWithoutContext.prototype.generateTitleId = function () {
        return 'window-title-' + this._id;
    };
    WindowWithoutContext.displayName = 'Window';
    /**
     * @hidden
     */
    WindowWithoutContext.propTypes = {
        width: prop_types_index_js_.number,
        height: prop_types_index_js_.number,
        left: prop_types_index_js_.number,
        top: prop_types_index_js_.number,
        initialWidth: prop_types_index_js_.number,
        initialHeight: prop_types_index_js_.number,
        initialLeft: prop_types_index_js_.number,
        initialTop: prop_types_index_js_.number,
        minWidth: prop_types_index_js_.number,
        minHeight: prop_types_index_js_.number,
        resizable: prop_types_index_js_.bool,
        draggable: prop_types_index_js_.bool,
        title: prop_types_index_js_.any,
        shouldUpdateOnDrag: prop_types_index_js_.bool,
        stage: prop_types_index_js_.oneOf(['DEFAULT', 'MINIMIZED', 'FULLSCREEN']),
        className: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        overlayStyle: prop_types_index_js_.object
    };
    /**
     * @hidden
     */
    WindowWithoutContext.defaultProps = {
        minWidth: DEFAULT_MIN_WIDTH,
        minHeight: DEFAULT_MIN_HEIGHT,
        resizable: true,
        draggable: true,
        modal: false,
        doubleClickStageChange: true
    };
    /**
     * @hidden
     */
    WindowWithoutContext.contextType = es_main_js_.ZIndexContext;
    return WindowWithoutContext;
}(index_js_.Component));
/**
 * Represents the PropsContext of the `Window` component.
 * Used for global configuration of all `Window` instances.
 */
var WindowPropsContext = (0,es_main_js_.createPropsContext)();
/* eslint-disable @typescript-eslint/no-redeclare -- intentionally naming the component the same as the type */
/**
 * Represents the [KendoReact Window component]({% slug overview_window %}).
 *
 * Accepts properties of type [WindowProps]({% slug api_dialogs_windowprops %}).
 * Obtaining the `ref` returns an object of type [WindowHandle]({% slug api_dialogs_windowhandle %}).
 */
var Window = (0,es_main_js_.withPropsContext)(WindowPropsContext, WindowWithoutContext);
Window.displayName = 'KendoReactWindow';

;// ../node_modules/.pnpm/@progress+kendo-react-dialogs@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-re_27747c311dc5505d04ff7fc7d62a098a/node_modules/@progress/kendo-react-dialogs/dist/es/main.js







/***/ }

}]);