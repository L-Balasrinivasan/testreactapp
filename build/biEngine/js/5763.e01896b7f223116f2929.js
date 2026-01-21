"use strict";
(self["webpackChunk_fmpro_bi_engine"] = self["webpackChunk_fmpro_bi_engine"] || []).push([[5763,8144],{

/***/ 45763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Error: () => (/* reexport */ Error),
  FloatingLabel: () => (/* reexport */ FloatingLabel),
  Hint: () => (/* reexport */ Hint),
  Label: () => (/* reexport */ Label)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.8.2 || ^17.0.0 || ^18.0.0 (singleton) (fallback: ../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js)
var index_js_ = __webpack_require__(95439);
// EXTERNAL MODULE: consume shared module (default) prop-types@^15.6.0 (singleton) (fallback: ../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js)
var prop_types_index_js_ = __webpack_require__(72721);
// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-common@=5.19.0 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-common@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-svg_a2ae81c6056990fc20171bb77e8e9847/node_modules/@progress/kendo-react-common/dist/es/main.js)
var main_js_ = __webpack_require__(76034);
;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/messages/index.js
var _a;
/**
 * @hidden
 */
var labelsOptional = 'labels.optional';
/**
 * @hidden
 */
var messages = (_a = {},
    _a[labelsOptional] = '(Optional)',
    _a);

// EXTERNAL MODULE: consume shared module (default) @progress/kendo-react-intl@^7.2.2 (singleton) (fallback: ../node_modules/.pnpm/@progress+kendo-react-intl@7.4.0_@progress+kendo-intl@3.1.2_@progress+kendo-licensing@1_1b012f1cb4379e2d747b0d582d7a8ac9/node_modules/@progress/kendo-react-intl/index.mjs)
var index_mjs_ = __webpack_require__(39932);
;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/package-metadata.js
/**
 * @hidden
 */
var packageMetadata = {
    name: '@progress/kendo-react-labels',
    productName: 'KendoReact',
    productCodes: ['KENDOUIREACT', 'KENDOUICOMPLETE'],
    publishDate: 1695801348,
    version: '',
    licensingDocsUrl: 'https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning'
};

;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/Label.js







/**
 * Represents the KendoReact Label component.
 *
 * @example
 * ```jsx
 * const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
 * const App = () => {
 *     const ddlRef = React.useRef(null);
 *     const labelId = 'ddl-sizes-label';
 *     const editorId = 'ddl-sizes';
 *
 *     return (
 *         <div>
 *             <Label id={labelId} editorId={editorId} editorRef={ddlRef}>
 *                 Shirt Size:
 *             </Label>
 *             <DropDownList
 *                 ref={ddlRef}
 *                 id={editorId}
 *                 ariaLabelledBy={labelId}
 *                 data={sizes}
 *             />
 *             <br />
 *         </div>
 *     );
 * };
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var Label = function (props) {
    (0,main_js_.validatePackage)(packageMetadata);
    var id = props.id, editorId = props.editorId, editorRef = props.editorRef, editorDisabled = props.editorDisabled, children = props.children, editorValid = props.editorValid, style = props.style, className = props.className, optional = props.optional;
    var localizationService = (0,index_mjs_.useLocalization)();
    var localizedOptional = optional ? localizationService
        .toLanguageString(labelsOptional, messages[labelsOptional]) : '';
    var optionalElement = localizedOptional && (index_js_.createElement("span", { className: 'k-label-optional' }, localizedOptional));
    var onLabelClick = index_js_.useCallback(function (e) {
        if (editorRef && editorRef.current && !editorDisabled) {
            if (editorRef.current.focus) {
                e.preventDefault();
                editorRef.current.focus();
            }
            var editorActionElement = editorRef.current.actionElement;
            if (editorActionElement) {
                e.preventDefault();
                editorActionElement.click();
            }
        }
    }, [editorRef]);
    var labelClassName = (0,main_js_.classNames)({
        'k-label': true,
        'k-label-empty': !children,
        'k-text-error': editorValid === false,
        'k-text-disabled': editorDisabled === true
    }, className);
    return (index_js_.createElement("label", { id: id, htmlFor: editorId, onClick: onLabelClick, style: style, className: labelClassName },
        children,
        optionalElement));
};
Label.propTypes = {
    id: prop_types_index_js_.string,
    editorId: prop_types_index_js_.string,
    editorRef: prop_types_index_js_.oneOfType([
        prop_types_index_js_.func,
        prop_types_index_js_.shape({ current: prop_types_index_js_.any })
    ]),
    editorValid: prop_types_index_js_.bool,
    editorDisabled: prop_types_index_js_.bool,
    style: prop_types_index_js_.object,
    className: prop_types_index_js_.string,
    optional: prop_types_index_js_.bool
};
Label.displayName = 'KendoReactLabel';

;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/Error.js





/**
 * Represents the KendoReact Error component.
 * Render the error text that will be shown underneath the form editor after a validation.
 */
var Error = function (props) {
    (0,main_js_.validatePackage)(packageMetadata);
    var errorClassName = (0,main_js_.classNames)({
        'k-form-error': true,
        'k-text-start': props.direction === 'start',
        'k-text-end': props.direction === 'end'
    }, props.className);
    return (index_js_.createElement("div", { id: props.id, role: 'alert', style: props.style, className: errorClassName }, props.children));
};
Error.propTypes = {
    id: prop_types_index_js_.string,
    direction: prop_types_index_js_.oneOf(['start', 'end']),
    children: prop_types_index_js_.oneOfType([
        prop_types_index_js_.element,
        prop_types_index_js_.node
    ]),
    style: prop_types_index_js_.object,
    className: prop_types_index_js_.string
};
Error.defaultProps = {
    direction: 'start'
};
Error.displayName = 'KendoReactError';

;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/Hint.js





/**
 * Represents the KendoReact Hint component.
 * Render the hint text that will be shown underneath the form editor.
 */
var Hint = function (props) {
    (0,main_js_.validatePackage)(packageMetadata);
    var hintClassName = (0,main_js_.classNames)({
        'k-form-hint': true,
        'k-text-start': props.direction === 'start',
        'k-text-end': props.direction === 'end',
        'k-text-disabled': props.editorDisabled === true
    }, props.className);
    return (index_js_.createElement("div", { id: props.id, style: props.style, className: hintClassName }, props.children));
};
Hint.propTypes = {
    id: prop_types_index_js_.string,
    direction: prop_types_index_js_.oneOf(['start', 'end']),
    children: prop_types_index_js_.oneOfType([
        prop_types_index_js_.element,
        prop_types_index_js_.node
    ]),
    style: prop_types_index_js_.object,
    className: prop_types_index_js_.string,
    editorDisabled: prop_types_index_js_.bool
};
Hint.defaultProps = {
    direction: 'start'
};
Hint.displayName = 'KendoReactHint';

;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/FloatingLabel.js
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







/**
 * Represents the KendoReact FloatingLabel component.
 *
 * @example
 * ```jsx
 * const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
 * const App = () => {
 *     const [ddlState, setDdlState] = React.useState();
 *     const editorId = 'ddl-sizes';
 *     return (
 *         <FloatingLabel label={'Shirt Size:'} editorId={editorId} editorValue={ddlState}>
 *             <DropDownList
 *                 id={editorId}
 *                 value={ddlState}
 *                 data={sizes}
 *                 onChange={(e) => setDdlState(e.target.value)}
 *             />
 *         </FloatingLabel>
 *     );
 * };
 *
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
var FloatingLabel = /** @class */ (function (_super) {
    __extends(FloatingLabel, _super);
    function FloatingLabel(props) {
        var _this = _super.call(this, props) || this;
        /**
         * @hidden
         */
        _this.state = {
            focused: false
        };
        /**
         * @hidden
         */
        _this.handleFocus = function (_) {
            _this.setState({ focused: true });
        };
        /**
         * @hidden
         */
        _this.handleBlur = function (_) {
            _this.setState({ focused: false });
        };
        (0,main_js_.validatePackage)(packageMetadata);
        return _this;
    }
    /**
     * @hidden
     */
    FloatingLabel.prototype.render = function () {
        var _a = this.props, label = _a.label, editorId = _a.editorId, className = _a.className, labelClassName = _a.labelClassName, editorValue = _a.editorValue, editorPlaceholder = _a.editorPlaceholder, editorValid = _a.editorValid, editorDisabled = _a.editorDisabled, style = _a.style, id = _a.id, optional = _a.optional;
        var localizationService = (0,index_mjs_.provideLocalizationService)(this);
        var localizedOptional = optional ? localizationService
            .toLanguageString(labelsOptional, messages[labelsOptional]) : '';
        var optionalElement = localizedOptional && (index_js_.createElement("span", { className: 'k-label-optional' }, localizedOptional));
        var spanClassNames = (0,main_js_.classNames)({
            'k-floating-label-container': true,
            'k-focus': this.state.focused,
            'k-empty': !editorPlaceholder && !editorValue && (editorValue !== 0),
            'k-text-disabled': editorDisabled,
            'k-rtl': this.props.dir === 'rtl'
        }, className);
        var labelClassNames = (0,main_js_.classNames)({
            'k-label': true,
            'k-text-error': editorValid === false,
            'k-text-disabled': editorDisabled
        }, labelClassName);
        return (index_js_.createElement("span", { id: this.props.id, className: spanClassNames, onFocus: this.handleFocus, onBlur: this.handleBlur, style: style, dir: this.props.dir },
            this.props.children,
            label
                ? editorId
                    ? index_js_.createElement("label", { id: id, htmlFor: editorId, className: labelClassNames },
                        label,
                        optionalElement)
                    : index_js_.createElement("span", { id: id, className: labelClassNames },
                        label,
                        optionalElement)
                : null));
    };
    /**
     * @hidden
     */
    FloatingLabel.propTypes = {
        label: prop_types_index_js_.string,
        editorId: prop_types_index_js_.string,
        editorValue: prop_types_index_js_.oneOfType([prop_types_index_js_.string, prop_types_index_js_.bool, prop_types_index_js_.number]),
        editorPlaceholder: prop_types_index_js_.string,
        editorValid: prop_types_index_js_.bool,
        editorDisabled: prop_types_index_js_.bool,
        id: prop_types_index_js_.string,
        style: prop_types_index_js_.object,
        className: prop_types_index_js_.string,
        labelClassName: prop_types_index_js_.string,
        optional: prop_types_index_js_.bool
    };
    return FloatingLabel;
}(index_js_.Component));

(0,index_mjs_.registerForLocalization)(FloatingLabel);

;// ../node_modules/.pnpm/@progress+kendo-react-labels@5.19.0_@progress+kendo-licensing@1.6.0_@progress+kendo-rea_aaf2aefe7bf88ed9e3b01dd6245e8ab8/node_modules/@progress/kendo-react-labels/dist/es/main.js







/***/ })

}]);