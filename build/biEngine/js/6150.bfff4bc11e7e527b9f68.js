"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[3769,6150],{

/***/ 83769
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Notification: () => (/* reexport */ Notification),
  NotificationGroup: () => (/* reexport */ NotificationGroup)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-licensing@^1.3.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-licensing@1.6.0/node_modules/@progress/kendo-licensing/dist/index.mjs)
var index_mjs_ = __webpack_require__(74750);
;// ../node_modules/.pnpm/@progress+kendo-react-notification@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kend_f17feb7ead5c133c02e1d1296b17067b/node_modules/@progress/kendo-react-notification/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-notification',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1697040404,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=6.0.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kendo-svg-_1b4e279521b569a60a42885c948bbb33/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(61654);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-svg-icons@^2.0.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-svg-icons@2.3.0/node_modules/@progress/kendo-svg-icons/dist/index.es.js)
var index_es_js_ = __webpack_require__(30004);
;// ../node_modules/.pnpm/@progress+kendo-react-notification@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kend_f17feb7ead5c133c02e1d1296b17067b/node_modules/@progress/kendo-react-notification/dist/es/Notification.js
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






var buttonTitle = 'Close';
var fontIconsNames = {
    'success': 'check-outline',
    'error': 'x-outline',
    'info': 'info-circle',
    'warning': 'exclamation-circle'
};
var svgIcons = {
    'success': index_es_js_.checkOutlineIcon,
    'error': index_es_js_.xOutlineIcon,
    'info': index_es_js_.infoCircleIcon,
    'warning': index_es_js_.exclamationCircleIcon
};
/**
 * Represents the [KendoReact Notification component]({% slug overview_notification %}).
 */
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this, props) || this;
        if (typeof index_mjs_ !== 'undefined') {
            index_mjs_.validatePackage(packageMetadata);
        }
        else {
            var message = "License activation failed for ".concat(packageMetadata.name, "\n");
            message += 'The @progress/kendo-licensing script is not loaded.\n';
            message += "See ".concat(packageMetadata.licensingDocsUrl, " for more information.\n");
            console.warn(message);
        }
        return _this;
    }
    /**
     * @hidden
     */
    Notification.prototype.render = function () {
        var _this = this;
        var _a = this.props, onClose = _a.onClose, className = _a.className, _b = _a.closable, closable = _b === void 0 ? Notification.defaultProps.closable : _b, _c = _a.type, type = _c === void 0 ? Notification.defaultProps.type : _c;
        return (index_js_.createElement("div", { dir: this.props.dir, className: "k-notification-container" },
            index_js_.createElement("div", { className: 'k-notification' +
                    (className ? " ".concat(className) : '') +
                    (type.style === 'none' ? '' : " k-notification-".concat(type.style)) +
                    (closable ? ' k-notification-closable' : ''), style: this.props.style },
                type.icon &&
                    index_js_.createElement(main_js_.IconWrap, { className: 'k-notification-status', name: fontIconsNames[type.style], icon: svgIcons[type.style] }),
                index_js_.createElement("div", { className: "k-notification-content" }, this.props.children),
                index_js_.createElement("span", { className: "k-notification-actions" }, closable && (index_js_.createElement("span", __assign({ className: "k-notification-action k-notification-close-action", title: buttonTitle, onClick: function (event) {
                        if (onClose) {
                            onClose.call(undefined, {
                                target: _this,
                                syntheticEvent: event,
                                nativeEvent: event.nativeEvent
                            });
                        }
                    } }, (typeof closable !== 'boolean' ? closable : {})),
                    index_js_.createElement(main_js_.IconWrap, { name: "x", icon: index_es_js_.xIcon })))))));
    };
    /**
     * @hidden
     */
    Notification.propTypes = {
        className: prop_types_index_js_.string,
        closable: prop_types_index_js_.oneOfType([prop_types_index_js_.bool, prop_types_index_js_.object]),
        dir: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        type: prop_types_index_js_.shape({
            style: prop_types_index_js_.oneOf(['none', 'success', 'error', 'warning', 'info']),
            icon: prop_types_index_js_.bool
        }),
        onClose: prop_types_index_js_.func
    };
    /**
     * @hidden
     */
    Notification.defaultProps = {
        closable: false,
        type: {
            style: 'none',
            icon: true
        }
    };
    return Notification;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-notification@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kend_f17feb7ead5c133c02e1d1296b17067b/node_modules/@progress/kendo-react-notification/dist/es/NotificationGroup.js
var NotificationGroup_extends = (undefined && undefined.__extends) || (function () {
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
var NotificationGroup_assign = (undefined && undefined.__assign) || function () {
    NotificationGroup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return NotificationGroup_assign.apply(this, arguments);
};


/**
 * Represents the [KendoReact NotificationGroup component]({% slug api_notification_notificationgroup %}).
 */
var NotificationGroup = /** @class */ (function (_super) {
    NotificationGroup_extends(NotificationGroup, _super);
    function NotificationGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @hidden
     */
    NotificationGroup.prototype.render = function () {
        var _a = this.props, _b = _a.style, style = _b === void 0 ? {} : _b, className = _a.className;
        return (index_js_.createElement("div", { className: 'k-notification-group' + (className ? " ".concat(className) : ''), style: NotificationGroup_assign({ alignItems: 'center', flexWrap: 'wrap' }, style) }, this.props.children));
    };
    /**
     * @hidden
     */
    NotificationGroup.propTypes = {
        className: prop_types_index_js_.string,
        style: prop_types_index_js_.object
    };
    return NotificationGroup;
}(index_js_.Component));


;// ../node_modules/.pnpm/@progress+kendo-react-notification@6.0.2_@progress+kendo-licensing@1.6.0_@progress+kend_f17feb7ead5c133c02e1d1296b17067b/node_modules/@progress/kendo-react-notification/dist/es/main.js





/***/ }

}]);