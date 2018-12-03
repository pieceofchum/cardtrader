webpackHotUpdate(5,{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = createShorthand;
/* harmony export (immutable) */ __webpack_exports__["h"] = createShorthandFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHTMLDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createHTMLIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createHTMLImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createHTMLInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createHTMLLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createHTMLParagraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isArray__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isPlainObject__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);











 // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(val) || __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default()(val)) return null;

  var valIsString = __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default()(val);

  var valIsNumber = __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default()(val);

  var valIsFunction = __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(val);

  var valIsReactElement = Object(__WEBPACK_IMPORTED_MODULE_11_react__["isValidElement"])(val);

  var valIsPropsObject = __WEBPACK_IMPORTED_MODULE_4_lodash_isPlainObject___default()(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || __WEBPACK_IMPORTED_MODULE_3_lodash_isArray___default()(val); // unhandled type return null

  /* eslint-disable no-console */


  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (true) {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received ".concat(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default()(val), ".")].join(''));
    }

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === void 0 ? {} : _options$overrideProp;
  overrideProps = __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(overrideProps) ? overrideProps(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default()(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(props.key)) {
    var childKey = props.childKey;
    var _options$autoGenerate = options.autoGenerateKey,
        autoGenerateKey = _options$autoGenerate === void 0 ? true : _options$autoGenerate;

    if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default()(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) return Object(__WEBPACK_IMPORTED_MODULE_11_react__["cloneElement"])(val, props); // Create ReactElements from built up props

  if (valIsPrimitiveValue || valIsPropsObject) return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(Component, props); // Call functions with args similar to createElement()

  if (valIsFunction) return val(Component, props, props.children);
  /* eslint-enable react/prop-types */
} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */

createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

var createHTMLDivision = createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
var createHTMLIframe = createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
var createHTMLImage = createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
var createHTMLInput = createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
var createHTMLLabel = createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
var createHTMLParagraph = createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_reduce__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__addons_MountNode__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__addons_Portal__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ModalHeader__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ModalContent__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ModalActions__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ModalDescription__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__addons_Ref__ = __webpack_require__(441);



























/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getMountNode", function () {
      return Object(__WEBPACK_IMPORTED_MODULE_17__lib__["t" /* isBrowser */])() ? _this.props.mountNode || document.body : null;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleActionsOverrides", function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(predefinedProps, 'onActionClick', e, actionProps);

          __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClose", function (e) {
      __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDocumentClick", function (e) {
      var closeOnDimmerClick = _this.props.closeOnDimmerClick;
      if (!closeOnDimmerClick || Object(__WEBPACK_IMPORTED_MODULE_17__lib__["n" /* doesNodeContainClick */])(_this.ref, e)) return;

      __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onClose', e, _this.props);

      _this.trySetState({
        open: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(predefinedProps, 'onClick', e);

          _this.handleClose(e);
        }
      };
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleOpen", function (e) {
      __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handlePortalMount", function (e) {
      var eventPool = _this.props.eventPool;

      _this.setState({
        scrolling: false
      });

      _this.setPositionAndClassNames();

      __WEBPACK_IMPORTED_MODULE_17__lib__["o" /* eventStack */].sub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef
      });

      __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onMount', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handlePortalUnmount", function (e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);
      __WEBPACK_IMPORTED_MODULE_17__lib__["o" /* eventStack */].unsub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef
      });

      __WEBPACK_IMPORTED_MODULE_13_lodash_invoke___default()(_this.props, 'onUnmount', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return _this.ref = c;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDimmerRef", function (c) {
      return _this.dimmerRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setDimmerNodeStyle", function () {
      if (_this.dimmerRef) {
        _this.dimmerRef.style.setProperty('display', 'flex', 'important');
      }
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setPositionAndClassNames", function () {
      var dimmer = _this.props.dimmer;
      var classes;

      if (dimmer) {
        classes = 'dimmable dimmed';

        if (dimmer === 'blurring') {
          classes += ' blurring';
        }
      }

      var newState = {};

      if (_this.ref) {
        var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
            height = _this$ref$getBounding.height; // Leaving the old calculation here since we may need it as an older browser fallback
        // SEE: https://github.com/Semantic-Org/Semantic-UI/issues/6185#issuecomment-376725956
        // const marginTop = -Math.round(height / 2)


        var marginTop = null;
        var scrolling = height > window.innerHeight;

        if (_this.state.marginTop !== marginTop) {
          newState.marginTop = marginTop;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }

        if (scrolling) classes += ' scrolling';
      }

      if (_this.state.mountClasses !== classes) newState.mountClasses = classes;
      if (!__WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default()(newState)) _this.setState(newState);
      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);

      _this.setDimmerNodeStyle();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderContent", function (rest) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          closeIcon = _this$props.closeIcon,
          content = _this$props.content,
          header = _this$props.header,
          mountNode = _this$props.mountNode,
          size = _this$props.size,
          style = _this$props.style;
      var _this$state = _this.state,
          marginTop = _this$state.marginTop,
          mountClasses = _this$state.mountClasses,
          scrolling = _this$state.scrolling;
      var classes = __WEBPACK_IMPORTED_MODULE_14_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_17__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_17__lib__["A" /* useKeyOnly */])(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_17__lib__["q" /* getElementType */])(Modal, _this.props);
      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = __WEBPACK_IMPORTED_MODULE_18__elements_Icon__["a" /* default */].create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });

      if (!__WEBPACK_IMPORTED_MODULE_17__lib__["c" /* childrenUtils */].isNil(children)) {
        // TODO: remove when ref with "as" is resolved: PR #2306
        return __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__addons_Ref__["a" /* default */], {
          innerRef: _this.handleRef
        }, __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          style: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
            marginTop: marginTop
          }, style)
        }), __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__addons_MountNode__["a" /* default */], {
          className: mountClasses,
          node: mountNode
        }), closeIconJSX, children));
      } // TODO: remove when ref with "as" is resolved: PR #2306


      return __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__addons_Ref__["a" /* default */], {
        innerRef: _this.handleRef
      }, __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        style: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
          marginTop: marginTop
        }, style)
      }), __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__addons_MountNode__["a" /* default */], {
        className: mountClasses,
        node: mountNode
      }), closeIconJSX, __WEBPACK_IMPORTED_MODULE_21__ModalHeader__["a" /* default */].create(header, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_22__ModalContent__["a" /* default */].create(content, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_23__ModalActions__["a" /* default */].create(actions, {
        overrideProps: _this.handleActionsOverrides
      })));
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Modal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handlePortalUnmount();
    } // Do not access document when server side rendering

  }, {
    key: "render",
    value: function render() {
      var open = this.state.open;
      var _this$props2 = this.props,
          centered = _this$props2.centered,
          closeOnDocumentClick = _this$props2.closeOnDocumentClick,
          dimmer = _this$props2.dimmer,
          eventPool = _this$props2.eventPool,
          trigger = _this$props2.trigger;
      var mountNode = this.getMountNode(); // Short circuit when server side rendering

      if (!Object(__WEBPACK_IMPORTED_MODULE_17__lib__["t" /* isBrowser */])()) {
        return Object(__WEBPACK_IMPORTED_MODULE_16_react__["isValidElement"])(trigger) ? trigger : null;
      }

      var unhandled = Object(__WEBPACK_IMPORTED_MODULE_17__lib__["r" /* getUnhandledProps */])(Modal, this.props);
      var portalPropNames = __WEBPACK_IMPORTED_MODULE_20__addons_Portal__["a" /* default */].handledProps;

      var rest = __WEBPACK_IMPORTED_MODULE_11_lodash_reduce___default()(unhandled, function (acc, val, key) {
        if (!__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default()(portalPropNames, key)) acc[key] = val;
        return acc;
      }, {});

      var portalProps = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(unhandled, portalPropNames); // wrap dimmer modals


      var dimmerClasses = __WEBPACK_IMPORTED_MODULE_14_classnames___default()('ui', dimmer === 'inverted' && 'inverted', !centered && 'top aligned', 'page modals dimmer transition visible active'); // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__addons_Portal__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
        closeOnDocumentClick: closeOnDocumentClick
      }, portalProps, {
        trigger: trigger,
        eventPool: eventPool,
        mountNode: mountNode,
        open: open,
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount
      }), __WEBPACK_IMPORTED_MODULE_16_react___default.a.createElement("div", {
        className: dimmerClasses,
        ref: this.handleDimmerRef
      }, this.renderContent(rest)));
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_17__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "defaultProps", {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "autoControlledProps", ['open']);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "Header", __WEBPACK_IMPORTED_MODULE_21__ModalHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "Content", __WEBPACK_IMPORTED_MODULE_22__ModalContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "Description", __WEBPACK_IMPORTED_MODULE_24__ModalDescription__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "Actions", __WEBPACK_IMPORTED_MODULE_23__ModalActions__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Modal, "handledProps", ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"]);

Modal.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_17__lib__["m" /* customPropTypes */].as,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: __WEBPACK_IMPORTED_MODULE_17__lib__["m" /* customPropTypes */].itemShorthand,

  /** A modal can reduce its complexity */
  basic: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** A modal can be vertically centered in the viewport */
  centered: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** Simple text content for the Modal. */
  content: __WEBPACK_IMPORTED_MODULE_17__lib__["m" /* customPropTypes */].itemShorthand,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.oneOf([true, 'inverted', 'blurring']),

  /** Event pool namespace that is used to handle component events */
  eventPool: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.string,

  /** Modal displayed above the content in bold. */
  header: __WEBPACK_IMPORTED_MODULE_17__lib__["m" /* customPropTypes */].itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.func,

  /** Controls whether or not the Modal is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.bool,

  /** A modal can vary in size */
  size: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),

  /** Custom styles. */
  style: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: __WEBPACK_IMPORTED_MODULE_15_prop_types___default.a.node
  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */

} : {};
/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib__ = __webpack_require__(383);

















/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */
var Checkbox =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(Checkbox, _Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default()(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "canToggle", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          radio = _this$props.radio,
          readOnly = _this$props.readOnly;
      var checked = _this.state.checked;
      return !disabled && !readOnly && !(radio && checked);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!__WEBPACK_IMPORTED_MODULE_11_lodash_isNil___default()(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleContainerClick", function (e) {
      var id = _this.props.id;
      if (__WEBPACK_IMPORTED_MODULE_11_lodash_isNil___default()(id)) _this.handleClick(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleInputClick", function (e) {
      var id = _this.props.id;
      if (id) _this.handleClick(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleInputRef", function (c) {
      return _this.inputRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var _this$state = _this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;
      if (!_this.canToggle()) return;

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onClick', e, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        checked: !checked,
        indeterminate: !!indeterminate
      }));

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        checked: !checked,
        indeterminate: false
      }));

      _this.trySetState({
        checked: !checked,
        indeterminate: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleMouseDown", function (e) {
      var _this$state2 = _this.state,
          checked = _this$state2.checked,
          indeterminate = _this$state2.indeterminate;

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onMouseDown', e, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        checked: !!checked,
        indeterminate: !!indeterminate
      }));

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.inputRef, 'focus');

      e.preventDefault();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setIndeterminate", function () {
      var indeterminate = _this.state.indeterminate;
      if (_this.inputRef) _this.inputRef.indeterminate = !!indeterminate;
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default()(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          label = _this$props3.label,
          id = _this$props3.id,
          name = _this$props3.name,
          radio = _this$props3.radio,
          readOnly = _this$props3.readOnly,
          slider = _this$props3.slider,
          toggle = _this$props3.toggle,
          type = _this$props3.type,
          value = _this$props3.value;
      var _this$state3 = this.state,
          checked = _this$state3.checked,
          indeterminate = _this$state3.indeterminate;
      var classes = __WEBPACK_IMPORTED_MODULE_12_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(checked, 'checked'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(indeterminate, 'indeterminate'), // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(__WEBPACK_IMPORTED_MODULE_11_lodash_isNil___default()(label), 'fitted'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(radio, 'radio'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(readOnly, 'read-only'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(slider, 'slider'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(toggle, 'toggle'), 'checkbox', className);
      var unhandled = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["r" /* getUnhandledProps */])(Checkbox, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["q" /* getElementType */])(Checkbox, this.props);

      var _partitionHTMLProps = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["y" /* partitionHTMLProps */])(unhandled, {
        htmlProps: __WEBPACK_IMPORTED_MODULE_15__lib__["s" /* htmlInputAttrs */]
      }),
          _partitionHTMLProps2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleContainerClick,
        onChange: this.handleContainerClick,
        onMouseDown: this.handleMouseDown
      }), __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("input", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, htmlInputProps, {
        checked: checked,
        className: "hidden",
        disabled: disabled,
        id: id,
        name: name,
        onClick: this.handleInputClick,
        readOnly: true,
        ref: this.handleInputRef,
        tabIndex: this.computeTabIndex(),
        type: type,
        value: value
      })), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["h" /* createHTMLLabel */])(label, {
        defaultProps: {
          htmlFor: id
        },
        autoGenerateKey: false
      }) || __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("label", {
        htmlFor: id
      }));
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_15__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Checkbox, "defaultProps", {
  type: 'checkbox'
});

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Checkbox, "autoControlledProps", ['checked', 'indeterminate']);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Checkbox, "handledProps", ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"]);


Checkbox.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].as,

  /** Whether or not checkbox is checked. */
  checked: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string,

  /** The initial value of checked. */
  defaultChecked: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A unique identifier. */
  id: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string]),

  /** Whether or not checkbox is indeterminate. */
  indeterminate: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** The text of the associated label element. */
  label: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].itemShorthand,

  /** The HTML input name. */
  name: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states. */
  readOnly: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Format to emphasize the current selection state. */
  slider: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['radio', 'toggle'])]),

  /** A checkbox can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string]),

  /** Format to show an on or off choice. */
  toggle: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['checkbox', 'radio']),

  /** The HTML input value. */
  value: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number])
} : {};

/***/ }),

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_compact__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_every__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_findIndex__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_find__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_reduce__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_some__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_escapeRegExp__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_escapeRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_escapeRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_deburr__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_deburr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_deburr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isFunction__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_filter__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_pick__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_dropRight__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_dropRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_dropRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_size__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_size___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_lodash_size__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_union__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_union___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_lodash_union__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isUndefined__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_lodash_isEqual__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_lodash_has__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_keyboard_key__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_keyboard_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__elements_Label__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__DropdownDivider__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__DropdownItem__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__DropdownHeader__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__DropdownMenu__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__DropdownSearchInput__ = __webpack_require__(656);















































var getKeyOrValue = function getKeyOrValue(key, value) {
  return __WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default()(key) ? value : key;
};
/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */


var Dropdown =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleChange", function (e, value) {
      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: value
      }));
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "closeOnChange", function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;
      var shouldClose = __WEBPACK_IMPORTED_MODULE_29_lodash_isUndefined___default()(closeOnChange) ? !multiple : closeOnChange;
      if (shouldClose) _this.close(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "closeOnEscape", function (e) {
      if (__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.Escape) return;
      e.preventDefault();

      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "moveSelectionOnKeyDown", function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;
      var moves = (_moves = {}, __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.ArrowDown, 1), __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.ArrowUp, -1), _moves);
      var move = moves[__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e)];
      if (move === undefined) return;
      e.preventDefault();

      _this.moveSelectionBy(move);

      if (!multiple && selectOnNavigation) _this.makeSelectedItemActive(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "openOnSpace", function (e) {
      if (__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.Spacebar) return;
      if (_this.state.open) return;
      e.preventDefault();

      _this.open(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "openOnArrow", function (e) {
      var code = __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e);
      if (!__WEBPACK_IMPORTED_MODULE_28_lodash_includes___default()([__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.ArrowDown, __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.ArrowUp], code)) return;
      if (_this.state.open) return;
      e.preventDefault();

      _this.open(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "makeSelectedItemActive", function (e) {
      var open = _this.state.open;
      var multiple = _this.props.multiple;

      var item = _this.getSelectedItem();

      var value = __WEBPACK_IMPORTED_MODULE_27_lodash_get___default()(item, 'value'); // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed


      if (__WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default()(value) || !open) return; // state value may be undefined

      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_26_lodash_union___default()(_this.state.value, [value]) : value; // notify the onChange prop that the user is trying to change value

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue); // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value


      if (item['data-additional']) __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: value
      }));
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "selectItemOnEnter", function (e) {
      var search = _this.props.search;
      if (__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.Enter) return;
      e.preventDefault();

      var optionSize = __WEBPACK_IMPORTED_MODULE_25_lodash_size___default()(_this.getMenuOptions());

      if (search && optionSize === 0) return;

      _this.makeSelectedItemActive(e);

      _this.closeOnChange(e);

      _this.clearSearchQuery();

      if (search && _this.searchRef) _this.searchRef.focus();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "removeItemOnBackspace", function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state = _this.state,
          searchQuery = _this$state.searchQuery,
          value = _this$state.value;
      if (__WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_35_keyboard_key___default.a.Backspace) return;
      if (searchQuery || !search || !multiple || __WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty___default()(value)) return;
      e.preventDefault(); // remove most recent value

      var newValue = __WEBPACK_IMPORTED_MODULE_23_lodash_dropRight___default()(value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "closeOnDocumentClick", function (e) {
      if (!_this.props.closeOnBlur) return; // If event happened in the dropdown, ignore it

      if (_this.ref && Object(__WEBPACK_IMPORTED_MODULE_38__lib__["n" /* doesNodeContainClick */])(_this.ref, e)) return;

      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "attachHandlersOnOpen", function () {
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('keydown', [_this.closeOnEscape, _this.moveSelectionOnKeyDown, _this.selectItemOnEnter, _this.removeItemOnBackspace]);
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('click', _this.closeOnDocumentClick);
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('keydown', [_this.openOnArrow, _this.openOnSpace]);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleMouseDown", function (e) {
      _this.isMouseDown = true;
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('mouseup', _this.handleDocumentMouseUp);

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onMouseDown', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDocumentMouseUp", function () {
      _this.isMouseDown = false;
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('mouseup', _this.handleDocumentMouseUp);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state2 = _this.state,
          open = _this$state2.open,
          searchQuery = _this$state2.searchQuery;

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onClick', e, _this.props); // prevent closeOnDocumentClick()


      e.stopPropagation();
      if (!search) return _this.toggle(e);
      if (open) return;

      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);

        return;
      }

      if (_this.searchRef) _this.searchRef.focus();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconClick", function (e) {
      var clearable = _this.props.clearable;

      var hasValue = _this.hasValue();

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onClick', e, _this.props); // prevent handleClick()


      e.stopPropagation();

      if (clearable && hasValue) {
        _this.clearValue(e);
      } else {
        _this.toggle(e);
      }
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleItemClick", function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var value = item.value; // prevent toggle() in handleClick()

      e.stopPropagation(); // prevent closeOnDocumentClick() if multiple or item is disabled

      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;
      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_26_lodash_union___default()(_this.state.value, [value]) : value; // notify the onChange prop that the user is trying to change value

      _this.setValue(newValue);

      _this.setSelectedIndex(value);

      var optionSize = __WEBPACK_IMPORTED_MODULE_25_lodash_size___default()(_this.getMenuOptions());

      if (!multiple || isAdditionItem || optionSize === 1) _this.clearSearchQuery();

      _this.handleChange(e, newValue);

      _this.closeOnChange(e); // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value


      if (isAdditionItem) __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: value
      }));
      if (multiple && search && _this.searchRef) _this.searchRef.focus();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleFocus", function (e) {
      var focus = _this.state.focus;
      if (focus) return;

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleBlur", function (e) {
      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = __WEBPACK_IMPORTED_MODULE_27_lodash_get___default()(e, 'currentTarget');

      if (currentTarget && currentTarget.contains(document.activeElement)) return;
      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          selectOnBlur = _this$props6.selectOnBlur; // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onBlur', e, _this.props);

      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);

        if (closeOnBlur) _this.close();
      }

      _this.setState({
        focus: false
      });

      _this.clearSearchQuery();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSearchChange", function (e, _ref) {
      var value = _ref.value;
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = value;

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onSearchChange', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        searchQuery: newQuery
      }));

      _this.trySetState({
        searchQuery: newQuery
      }, {
        selectedIndex: 0
      }); // open search dropdown on search query


      if (!open && newQuery.length >= minCharacters) {
        _this.open();

        return;
      } // close search dropdown if search query is too small


      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getKeyAndValues", function (options) {
      return options ? options.map(function (option) {
        return __WEBPACK_IMPORTED_MODULE_22_lodash_pick___default()(option, ['key', 'value']);
      }) : options;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getMenuOptions", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var _this$props7 = _this.props,
          additionLabel = _this$props7.additionLabel,
          additionPosition = _this$props7.additionPosition,
          allowAdditions = _this$props7.allowAdditions,
          deburr = _this$props7.deburr,
          multiple = _this$props7.multiple,
          search = _this$props7.search;
      var searchQuery = _this.state.searchQuery;
      var filteredOptions = options; // filter out active options

      if (multiple) {
        filteredOptions = __WEBPACK_IMPORTED_MODULE_21_lodash_filter___default()(filteredOptions, function (opt) {
          return !__WEBPACK_IMPORTED_MODULE_28_lodash_includes___default()(value, opt.value);
        });
      } // filter by search query


      if (search && searchQuery) {
        if (__WEBPACK_IMPORTED_MODULE_20_lodash_isFunction___default()(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          // remove diacritics on search input and options, if deburr prop is set
          var strippedQuery = deburr ? __WEBPACK_IMPORTED_MODULE_19_lodash_deburr___default()(searchQuery) : searchQuery;
          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_18_lodash_escapeRegExp___default()(strippedQuery), 'i');
          filteredOptions = __WEBPACK_IMPORTED_MODULE_21_lodash_filter___default()(filteredOptions, function (opt) {
            return re.test(deburr ? __WEBPACK_IMPORTED_MODULE_19_lodash_deburr___default()(opt.text) : opt.text);
          });
        }
      } // insert the "add" item


      if (allowAdditions && search && searchQuery && !__WEBPACK_IMPORTED_MODULE_17_lodash_some___default()(filteredOptions, {
        text: searchQuery
      })) {
        var additionLabelElement = __WEBPACK_IMPORTED_MODULE_37_react___default.a.isValidElement(additionLabel) ? __WEBPACK_IMPORTED_MODULE_37_react___default.a.cloneElement(additionLabel, {
          key: 'addition-label'
        }) : additionLabel || '';
        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement("b", {
            key: "addition-query"
          }, searchQuery)],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getSelectedItem", function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_27_lodash_get___default()(options, "[".concat(selectedIndex, "]"));
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getEnabledIndices", function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_16_lodash_reduce___default()(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getItemByValue", function (value) {
      var options = _this.props.options;
      return __WEBPACK_IMPORTED_MODULE_15_lodash_find___default()(options, {
        value: value
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getMenuItemIndexByValue", function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_14_lodash_findIndex___default()(options, ['value', value]);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getDropdownAriaOptions", function () {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;
      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };

      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }

      return ariaOptions;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "clearSearchQuery", function () {
      _this.trySetState({
        searchQuery: ''
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setValue", function (value) {
      _this.trySetState({
        value: value
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setSelectedIndex", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps);

      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex; // update the selected index

      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0]; // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.

        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options); // regular selects can only have one active item
        // set the selected index to the currently active item


        newSelectedIndex = __WEBPACK_IMPORTED_MODULE_28_lodash_includes___default()(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({
        selectedIndex: newSelectedIndex
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleLabelClick", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({
        selectedLabel: labelProps.value
      });

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onLabelClick', e, labelProps);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleLabelRemove", function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_13_lodash_without___default()(value, labelProps.value);

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "moveSelectionBy", function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;

      var options = _this.getMenuOptions(); // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed


      if (options === undefined || __WEBPACK_IMPORTED_MODULE_12_lodash_every___default()(options, 'disabled')) return;
      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = startIndex + offset; // if 'wrapSelection' is set to false and selection is after last or before first, it just does not change

      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        _this.moveSelectionBy(offset, nextIndex);

        return;
      }

      _this.setState({
        selectedIndex: nextIndex
      });

      _this.scrollSelectedItemIntoView();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconOverrides", function (predefinedProps) {
      var clearable = _this.props.clearable;
      var classes = __WEBPACK_IMPORTED_MODULE_34_classnames___default()(clearable && _this.hasValue() && 'clear', predefinedProps.className);
      return {
        className: classes,
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(predefinedProps, 'onClick', e, predefinedProps);

          _this.handleIconClick(e);
        }
      };
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSearchRef", function (c) {
      return _this.searchRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSizerRef", function (c) {
      return _this.sizerRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return _this.ref = c;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "clearValue", function (e) {
      var multiple = _this.props.multiple;
      var newValue = multiple ? [] : '';

      _this.setValue(newValue);

      _this.setSelectedIndex(newValue);

      _this.handleChange(e, newValue);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeSearchInputTabIndex", function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          tabIndex = _this$props9.tabIndex;
      if (!__WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default()(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeSearchInputWidth", function () {
      var searchQuery = _this.state.searchQuery;

      if (_this.sizerRef && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it
        _this.sizerRef.style.display = 'inline';
        _this.sizerRef.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.getBoundingClientRect().width);

        _this.sizerRef.style.removeProperty('display');

        return searchWidth;
      }
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeTabIndex", function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search,
          tabIndex = _this$props10.tabIndex; // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return __WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default()(tabIndex) ? 0 : tabIndex;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSearchInputOverrides", function (predefinedProps) {
      return {
        onChange: function onChange(e, inputProps) {
          __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(predefinedProps, 'onChange', e, inputProps);

          _this.handleSearchChange(e, inputProps);
        }
      };
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "hasValue", function () {
      var multiple = _this.props.multiple;
      var value = _this.state.value;
      return multiple ? !__WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty___default()(value) : !__WEBPACK_IMPORTED_MODULE_33_lodash_isNil___default()(value) && value !== '';
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "scrollSelectedItemIntoView", function () {
      if (!_this.ref) return;

      var menu = _this.ref.querySelector('.menu.visible');

      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        // eslint-disable-next-line no-mixed-operators
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setOpenDirection", function () {
      if (!_this.ref) return;

      var menu = _this.ref.querySelector('.menu.visible');

      if (!menu) return;

      var dropdownRect = _this.ref.getBoundingClientRect();

      var menuHeight = menu.clientHeight;
      var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
      var spaceAtTheTop = dropdownRect.top - menuHeight;
      var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom; // set state only if there's a relevant difference

      if (!upward !== !_this.state.upward) {
        _this.trySetState({
          upward: upward
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "open", function (e) {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          open = _this$props11.open,
          search = _this$props11.search;
      if (disabled) return;
      if (search && _this.searchRef) _this.searchRef.focus();

      __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onOpen', e, _this.props);

      _this.trySetState({
        open: true
      });

      _this.scrollSelectedItemIntoView();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "close", function (e) {
      var open = _this.state.open;

      if (open) {
        __WEBPACK_IMPORTED_MODULE_30_lodash_invoke___default()(_this.props, 'onClose', e, _this.props);

        _this.trySetState({
          open: false
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClose", function () {
      var hasSearchFocus = document.activeElement === _this.searchRef;
      var hasDropdownFocus = document.activeElement === _this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus; // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.

      if (!hasSearchFocus) {
        _this.ref.blur();
      } // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692


      _this.setState({
        focus: hasFocus
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "toggle", function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderText", function () {
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          placeholder = _this$props12.placeholder,
          search = _this$props12.search,
          text = _this$props12.text;
      var _this$state3 = _this.state,
          searchQuery = _this$state3.searchQuery,
          value = _this$state3.value,
          open = _this$state3.open;

      var hasValue = _this.hasValue();

      var classes = __WEBPACK_IMPORTED_MODULE_34_classnames___default()(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;

      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = __WEBPACK_IMPORTED_MODULE_27_lodash_get___default()(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = __WEBPACK_IMPORTED_MODULE_27_lodash_get___default()(_this.getItemByValue(value), 'text');
      }

      return __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement("div", {
        className: classes,
        role: "alert",
        "aria-live": "polite"
      }, _text);
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderSearchInput", function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          searchInput = _this$props13.searchInput;
      var searchQuery = _this.state.searchQuery;
      if (!search) return null;
      return __WEBPACK_IMPORTED_MODULE_45__DropdownSearchInput__["a" /* default */].create(searchInput, {
        defaultProps: {
          inputRef: _this.handleSearchRef,
          style: {
            width: _this.computeSearchInputWidth()
          },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        },
        overrideProps: _this.handleSearchInputOverrides
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderSearchSizer", function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;
      if (!(search && multiple)) return null;
      return __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement("span", {
        className: "sizer",
        ref: _this.handleSizerRef
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderLabels", function () {
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state4 = _this.state,
          selectedLabel = _this$state4.selectedLabel,
          value = _this$state4.value;

      if (!multiple || __WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty___default()(value)) {
        return;
      }

      var selectedItems = __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(value, _this.getItemByValue);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_10_lodash_compact___default()(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };
        return __WEBPACK_IMPORTED_MODULE_40__elements_Label__["a" /* default */].create(renderLabel(item, index, defaultProps), {
          defaultProps: defaultProps
        });
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderOptions", function () {
      var _this$props16 = _this.props,
          lazyLoad = _this$props16.lazyLoad,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state5 = _this.state,
          open = _this$state5.open,
          selectedIndex = _this$state5.selectedIndex,
          value = _this$state5.value; // lazy load, only render options when open

      if (lazyLoad && !open) return null;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && __WEBPACK_IMPORTED_MODULE_24_lodash_isEmpty___default()(options)) {
        return __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement("div", {
          className: "message"
        }, noResultsMessage);
      }

      var isActive = multiple ? function (optValue) {
        return __WEBPACK_IMPORTED_MODULE_28_lodash_includes___default()(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };
      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(options, function (opt, i) {
        return __WEBPACK_IMPORTED_MODULE_42__DropdownItem__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, opt.style, {
            pointerEvents: 'all'
          })
        }));
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderMenu", function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          direction = _this$props17.direction,
          header = _this$props17.header;
      var open = _this.state.open;

      var ariaOptions = _this.getDropdownMenuAriaOptions(); // single menu child


      if (!__WEBPACK_IMPORTED_MODULE_38__lib__["c" /* childrenUtils */].isNil(children)) {
        var menuChild = __WEBPACK_IMPORTED_MODULE_37_react__["Children"].only(children);
        var className = __WEBPACK_IMPORTED_MODULE_34_classnames___default()(direction, Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(open, 'visible'), menuChild.props.className);
        return Object(__WEBPACK_IMPORTED_MODULE_37_react__["cloneElement"])(menuChild, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
          className: className
        }, ariaOptions));
      }

      return __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_44__DropdownMenu__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, ariaOptions, {
        direction: direction,
        open: open
      }), __WEBPACK_IMPORTED_MODULE_43__DropdownHeader__["a" /* default */].create(header, {
        autoGenerateKey: false
      }), _this.renderOptions());
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Dropdown, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState() {
      return {
        searchQuery: ''
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$state6 = this.state,
          open = _this$state6.open,
          value = _this$state6.value;
      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) {
        this.open();
        this.attachHandlersOnOpen();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Dropdown.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      /* eslint-disable no-console */
      if (true) {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);

        var hasValue = __WEBPACK_IMPORTED_MODULE_32_lodash_has___default()(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + " Received type: `".concat(Object.prototype.toString.call(nextProps.value), "`."));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */


      if (!Object(__WEBPACK_IMPORTED_MODULE_38__lib__["z" /* shallowEqual */])(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      } // The selected index is only dependent on option keys/values.
      // We only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000


      if (!__WEBPACK_IMPORTED_MODULE_31_lodash_isEqual___default()(this.getKeyAndValues(nextProps.options), this.getKeyAndValues(this.props.options))) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !Object(__WEBPACK_IMPORTED_MODULE_38__lib__["z" /* shallowEqual */])(nextProps, this.props) || !Object(__WEBPACK_IMPORTED_MODULE_38__lib__["z" /* shallowEqual */])(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var _this$props18 = this.props,
              minCharacters = _this$props18.minCharacters,
              openOnFocus = _this$props18.openOnFocus,
              search = _this$props18.search;
          var openable = !search || search && minCharacters === 1 && !this.state.open;
          if (openOnFocus && openable) this.open();
        }

        if (!this.state.open) {
          __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('keydown', [this.openOnArrow, this.openOnSpace]);
        } else {
          __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }

        __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].sub('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }

        __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace]);
      } // opened / closed


      if (!prevState.open && this.state.open) {
        this.attachHandlersOnOpen();
        this.setOpenDirection();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        this.handleClose();
        __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('click', this.closeOnDocumentClick);

        if (!this.state.focus) {
          __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace, this.closeOnEscape]);
      __WEBPACK_IMPORTED_MODULE_38__lib__["o" /* eventStack */].unsub('click', this.closeOnDocumentClick);
    } // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------
    // onChange needs to receive a value
    // can't rely on props.value if we are controlled

  }, {
    key: "getDropdownMenuAriaOptions",
    value: function getDropdownMenuAriaOptions() {
      var _this$props19 = this.props,
          search = _this$props19.search,
          multiple = _this$props19.multiple;
      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }

      return ariaOptions;
    } // ----------------------------------------
    // Setters
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var _this$props20 = this.props,
          basic = _this$props20.basic,
          button = _this$props20.button,
          className = _this$props20.className,
          compact = _this$props20.compact,
          disabled = _this$props20.disabled,
          error = _this$props20.error,
          fluid = _this$props20.fluid,
          floating = _this$props20.floating,
          icon = _this$props20.icon,
          inline = _this$props20.inline,
          item = _this$props20.item,
          labeled = _this$props20.labeled,
          loading = _this$props20.loading,
          multiple = _this$props20.multiple,
          pointing = _this$props20.pointing,
          search = _this$props20.search,
          selection = _this$props20.selection,
          scrolling = _this$props20.scrolling,
          simple = _this$props20.simple,
          trigger = _this$props20.trigger;
      var _this$state7 = this.state,
          open = _this$state7.open,
          upward = _this$state7.upward; // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_34_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(open, 'active visible'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(button, 'button'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(inline, 'inline'), // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(labeled, 'labeled'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(item, 'item'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(multiple, 'multiple'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(search, 'search'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(selection, 'selection'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(simple, 'simple'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(scrolling, 'scrolling'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["A" /* useKeyOnly */])(upward, 'upward'), Object(__WEBPACK_IMPORTED_MODULE_38__lib__["B" /* useKeyOrValueAndKey */])(pointing, 'pointing'), 'dropdown', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_38__lib__["r" /* getUnhandledProps */])(Dropdown, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_38__lib__["q" /* getElementType */])(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
      return __WEBPACK_IMPORTED_MODULE_37_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        tabIndex: this.computeTabIndex(),
        ref: this.handleRef
      }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), __WEBPACK_IMPORTED_MODULE_39__elements_Icon__["a" /* default */].create(icon, {
        overrideProps: this.handleIconOverrides,
        autoGenerateKey: false
      }), this.renderMenu());
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_38__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "defaultProps", {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref2) {
    var text = _ref2.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
});

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "autoControlledProps", ['open', 'searchQuery', 'selectedLabel', 'value', 'upward']);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "Divider", __WEBPACK_IMPORTED_MODULE_41__DropdownDivider__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "Header", __WEBPACK_IMPORTED_MODULE_43__DropdownHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "Item", __WEBPACK_IMPORTED_MODULE_42__DropdownItem__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "Menu", __WEBPACK_IMPORTED_MODULE_44__DropdownMenu__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "SearchInput", __WEBPACK_IMPORTED_MODULE_45__DropdownSearchInput__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Dropdown, "handledProps", ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"]);


Dropdown.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].as,

  /** Label prefixed to an option added by a user. */
  additionLabel: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].demand(['options', 'selection', 'search']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Format the Dropdown to appear as a button. */
  button: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].disallow(['options', 'selection']), __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].givenProps({
    children: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.any.isRequired
  }, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.element.isRequired)]),

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,

  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A compact dropdown has no minimum width. */
  compact: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string])]),

  /** Initial value of upward. */
  defaultUpward: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Initial value or value array if multiple. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool]))]),

  /** A dropdown menu can open to the left or to the right. */
  direction: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOf(['left', 'right']),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown menu can contain floated content. */
  floating: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can take the full width of its parent */
  fluid: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown menu can contain a header. */
  header: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.node,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can be labeled. */
  labeled: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_42__DropdownItem__["a" /* default */].propTypes))]),

  /** Placeholder text. */
  placeholder: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func,

  /** A dropdown can have its menu scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.func]),

  /** A shorthand for a search input. */
  searchInput: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.object]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].demand(['options']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /** A dropdown can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: __WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_38__lib__["m" /* customPropTypes */].disallow(['selection', 'text']), __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.number]))]),

  /** Controls whether the dropdown will open upward. */
  upward: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool,

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: __WEBPACK_IMPORTED_MODULE_36_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export names */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib__ = __webpack_require__(383);











var names = ['ad', 'andorra', 'ae', 'united arab emirates', 'uae', 'af', 'afghanistan', 'ag', 'antigua', 'ai', 'anguilla', 'al', 'albania', 'am', 'armenia', 'an', 'netherlands antilles', 'ao', 'angola', 'ar', 'argentina', 'as', 'american samoa', 'at', 'austria', 'au', 'australia', 'aw', 'aruba', 'ax', 'aland islands', 'az', 'azerbaijan', 'ba', 'bosnia', 'bb', 'barbados', 'bd', 'bangladesh', 'be', 'belgium', 'bf', 'burkina faso', 'bg', 'bulgaria', 'bh', 'bahrain', 'bi', 'burundi', 'bj', 'benin', 'bm', 'bermuda', 'bn', 'brunei', 'bo', 'bolivia', 'br', 'brazil', 'bs', 'bahamas', 'bt', 'bhutan', 'bv', 'bouvet island', 'bw', 'botswana', 'by', 'belarus', 'bz', 'belize', 'ca', 'canada', 'cc', 'cocos islands', 'cd', 'congo', 'cf', 'central african republic', 'cg', 'congo brazzaville', 'ch', 'switzerland', 'ci', 'cote divoire', 'ck', 'cook islands', 'cl', 'chile', 'cm', 'cameroon', 'cn', 'china', 'co', 'colombia', 'cr', 'costa rica', 'cs', 'cu', 'cuba', 'cv', 'cape verde', 'cx', 'christmas island', 'cy', 'cyprus', 'cz', 'czech republic', 'de', 'germany', 'dj', 'djibouti', 'dk', 'denmark', 'dm', 'dominica', 'do', 'dominican republic', 'dz', 'algeria', 'ec', 'ecuador', 'ee', 'estonia', 'eg', 'egypt', 'eh', 'western sahara', 'er', 'eritrea', 'es', 'spain', 'et', 'ethiopia', 'eu', 'european union', 'fi', 'finland', 'fj', 'fiji', 'fk', 'falkland islands', 'fm', 'micronesia', 'fo', 'faroe islands', 'fr', 'france', 'ga', 'gabon', 'gb', 'uk', 'united kingdom', 'gd', 'grenada', 'ge', 'georgia', 'gf', 'french guiana', 'gh', 'ghana', 'gi', 'gibraltar', 'gl', 'greenland', 'gm', 'gambia', 'gn', 'guinea', 'gp', 'guadeloupe', 'gq', 'equatorial guinea', 'gr', 'greece', 'gs', 'sandwich islands', 'gt', 'guatemala', 'gu', 'guam', 'gw', 'guinea-bissau', 'gy', 'guyana', 'hk', 'hong kong', 'hm', 'heard island', 'hn', 'honduras', 'hr', 'croatia', 'ht', 'haiti', 'hu', 'hungary', 'id', 'indonesia', 'ie', 'ireland', 'il', 'israel', 'in', 'india', 'io', 'indian ocean territory', 'iq', 'iraq', 'ir', 'iran', 'is', 'iceland', 'it', 'italy', 'jm', 'jamaica', 'jo', 'jordan', 'jp', 'japan', 'ke', 'kenya', 'kg', 'kyrgyzstan', 'kh', 'cambodia', 'ki', 'kiribati', 'km', 'comoros', 'kn', 'saint kitts and nevis', 'kp', 'north korea', 'kr', 'south korea', 'kw', 'kuwait', 'ky', 'cayman islands', 'kz', 'kazakhstan', 'la', 'laos', 'lb', 'lebanon', 'lc', 'saint lucia', 'li', 'liechtenstein', 'lk', 'sri lanka', 'lr', 'liberia', 'ls', 'lesotho', 'lt', 'lithuania', 'lu', 'luxembourg', 'lv', 'latvia', 'ly', 'libya', 'ma', 'morocco', 'mc', 'monaco', 'md', 'moldova', 'me', 'montenegro', 'mg', 'madagascar', 'mh', 'marshall islands', 'mk', 'macedonia', 'ml', 'mali', 'mm', 'myanmar', 'burma', 'mn', 'mongolia', 'mo', 'macau', 'mp', 'northern mariana islands', 'mq', 'martinique', 'mr', 'mauritania', 'ms', 'montserrat', 'mt', 'malta', 'mu', 'mauritius', 'mv', 'maldives', 'mw', 'malawi', 'mx', 'mexico', 'my', 'malaysia', 'mz', 'mozambique', 'na', 'namibia', 'nc', 'new caledonia', 'ne', 'niger', 'nf', 'norfolk island', 'ng', 'nigeria', 'ni', 'nicaragua', 'nl', 'netherlands', 'no', 'norway', 'np', 'nepal', 'nr', 'nauru', 'nu', 'niue', 'nz', 'new zealand', 'om', 'oman', 'pa', 'panama', 'pe', 'peru', 'pf', 'french polynesia', 'pg', 'new guinea', 'ph', 'philippines', 'pk', 'pakistan', 'pl', 'poland', 'pm', 'saint pierre', 'pn', 'pitcairn islands', 'pr', 'puerto rico', 'ps', 'palestine', 'pt', 'portugal', 'pw', 'palau', 'py', 'paraguay', 'qa', 'qatar', 're', 'reunion', 'ro', 'romania', 'rs', 'serbia', 'ru', 'russia', 'rw', 'rwanda', 'sa', 'saudi arabia', 'sb', 'solomon islands', 'sc', 'seychelles', 'gb sct', 'scotland', 'sd', 'sudan', 'se', 'sweden', 'sg', 'singapore', 'sh', 'saint helena', 'si', 'slovenia', 'sj', 'svalbard', 'jan mayen', 'sk', 'slovakia', 'sl', 'sierra leone', 'sm', 'san marino', 'sn', 'senegal', 'so', 'somalia', 'sr', 'suriname', 'st', 'sao tome', 'sv', 'el salvador', 'sy', 'syria', 'sz', 'swaziland', 'tc', 'caicos islands', 'td', 'chad', 'tf', 'french territories', 'tg', 'togo', 'th', 'thailand', 'tj', 'tajikistan', 'tk', 'tokelau', 'tl', 'timorleste', 'tm', 'turkmenistan', 'tn', 'tunisia', 'to', 'tonga', 'tr', 'turkey', 'tt', 'trinidad', 'tv', 'tuvalu', 'tw', 'taiwan', 'tz', 'tanzania', 'ua', 'ukraine', 'ug', 'uganda', 'um', 'us minor islands', 'us', 'america', 'united states', 'uy', 'uruguay', 'uz', 'uzbekistan', 'va', 'vatican city', 'vc', 'saint vincent', 've', 'venezuela', 'vg', 'british virgin islands', 'vi', 'us virgin islands', 'vn', 'vietnam', 'vu', 'vanuatu', 'gb wls', 'wales', 'wf', 'wallis and futuna', 'ws', 'samoa', 'ye', 'yemen', 'yt', 'mayotte', 'za', 'south africa', 'zm', 'zambia', 'zw', 'zimbabwe'];
/**
 * A flag is is used to represent a political state.
 */

var Flag =
/*#__PURE__*/
function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Flag, _PureComponent);

  function Flag() {
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Flag);

    return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Flag).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Flag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name;
      var classes = __WEBPACK_IMPORTED_MODULE_7_classnames___default()(name, 'flag', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["r" /* getUnhandledProps */])(Flag, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["q" /* getElementType */])(Flag, this.props);
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }));
    }
  }]);

  return Flag;
}(__WEBPACK_IMPORTED_MODULE_9_react__["PureComponent"]);

__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(Flag, "defaultProps", {
  as: 'i'
});

__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(Flag, "handledProps", ["as", "className", "name"]);

Flag.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_10__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: __WEBPACK_IMPORTED_MODULE_10__lib__["m" /* customPropTypes */].suggest(names)
} : {};
Flag.create = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["l" /* createShorthandFactory */])(Flag, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Flag);

/***/ }),

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BreadcrumbDivider__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BreadcrumbSection__ = __webpack_require__(663);









/**
 * A breadcrumb is used to show hierarchy between content.
 */

function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      divider = props.divider,
      icon = props.icon,
      sections = props.sections,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', size, 'breadcrumb', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(Breadcrumb, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(Breadcrumb, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  var childElements = [];

  __WEBPACK_IMPORTED_MODULE_2_lodash_each___default()(sections, function (section, index) {
    // section
    var breadcrumbElement = __WEBPACK_IMPORTED_MODULE_8__BreadcrumbSection__["a" /* default */].create(section);
    childElements.push(breadcrumbElement); // divider

    if (index !== sections.length - 1) {
      var key = "".concat(breadcrumbElement.key, "_divider") || JSON.stringify(section);
      childElements.push(__WEBPACK_IMPORTED_MODULE_7__BreadcrumbDivider__["a" /* default */].create({
        content: divider,
        icon: icon,
        key: key
      }));
    }
  });

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), childElements);
}

Breadcrumb.handledProps = ["as", "children", "className", "divider", "icon", "sections", "size"];
Breadcrumb.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].disallow(['icon']), __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].disallow(['divider']), __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** Size of Breadcrumb. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].SIZES, 'medium'))
} : {};
Breadcrumb.Divider = __WEBPACK_IMPORTED_MODULE_7__BreadcrumbDivider__["a" /* default */];
Breadcrumb.Section = __WEBPACK_IMPORTED_MODULE_8__BreadcrumbSection__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FormButton__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FormCheckbox__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FormDropdown__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__FormField__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__FormGroup__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__FormInput__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FormRadio__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FormSelect__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__FormTextArea__ = __webpack_require__(671);























/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see Visibility
 */

var Form =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Form);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Form)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSubmit", function (e) {
      var action = _this.props.action; // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
      // method.

      if (typeof action !== 'string') __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(e, 'preventDefault');

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default.a.apply(void 0, [_this.props, 'onSubmit', e, _this.props].concat(args));
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          children = _this$props.children,
          className = _this$props.className,
          error = _this$props.error,
          inverted = _this$props.inverted,
          loading = _this$props.loading,
          reply = _this$props.reply,
          size = _this$props.size,
          success = _this$props.success,
          unstackable = _this$props.unstackable,
          warning = _this$props.warning,
          widths = _this$props.widths;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(reply, 'reply'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(success, 'success'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["G" /* useWidthProp */])(widths, null, true), 'form', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(Form, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(Form, this.props);
      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        action: action,
        className: classes,
        onSubmit: this.handleSubmit
      }), children);
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "defaultProps", {
  as: 'form'
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Field", __WEBPACK_IMPORTED_MODULE_17__FormField__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Button", __WEBPACK_IMPORTED_MODULE_14__FormButton__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Checkbox", __WEBPACK_IMPORTED_MODULE_15__FormCheckbox__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Dropdown", __WEBPACK_IMPORTED_MODULE_16__FormDropdown__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Group", __WEBPACK_IMPORTED_MODULE_18__FormGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Input", __WEBPACK_IMPORTED_MODULE_19__FormInput__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Radio", __WEBPACK_IMPORTED_MODULE_20__FormRadio__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "Select", __WEBPACK_IMPORTED_MODULE_21__FormSelect__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "TextArea", __WEBPACK_IMPORTED_MODULE_22__FormTextArea__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Form, "handledProps", ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"]);

Form.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** The HTML form action */
  action: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Automatically show any error Message children. */
  error: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can have its color inverted for contrast. */
  inverted: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Automatically show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** The HTML form submit handler. */
  onSubmit: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_9_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Automatically show any warning Message children. */
  warning: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['equal'])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__elements_Button__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__elements_Label__ = __webpack_require__(470);






















/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default()(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeIcon", function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!__WEBPACK_IMPORTED_MODULE_14_lodash_isNil___default()(icon)) return icon;
      if (loading) return 'spinner';
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!__WEBPACK_IMPORTED_MODULE_14_lodash_isNil___default()(tabIndex)) return tabIndex;
      if (disabled) return -1;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "focus", function () {
      return _this.inputRef.focus();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "select", function () {
      return _this.inputRef.select();
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleChange", function (e) {
      var value = __WEBPACK_IMPORTED_MODULE_13_lodash_get___default()(e, 'target.value');

      __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: value
      }));
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleChildOverrides", function (child, defaultProps) {
      return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, defaultProps, child.props, {
        ref: function ref(c) {
          __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(child, 'ref', c);

          _this.handleInputRef(c);
        }
      });
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleInputRef", function (c) {
      return _this.inputRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), "partitionProps", function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = Object(__WEBPACK_IMPORTED_MODULE_18__lib__["r" /* getUnhandledProps */])(Input, _this.props);

      var _partitionHTMLProps = Object(__WEBPACK_IMPORTED_MODULE_18__lib__["y" /* partitionHTMLProps */])(unhandled),
          _partitionHTMLProps2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return [__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectSpread___default()({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.handleInputRef
      }), rest];
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default()(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          actionPosition = _this$props4.actionPosition,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          error = _this$props4.error,
          fluid = _this$props4.fluid,
          focus = _this$props4.focus,
          icon = _this$props4.icon,
          iconPosition = _this$props4.iconPosition,
          input = _this$props4.input,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          size = _this$props4.size,
          transparent = _this$props4.transparent,
          type = _this$props4.type;
      var classes = __WEBPACK_IMPORTED_MODULE_15_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(focus, 'focus'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(transparent, 'transparent'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["E" /* useValueAndKey */])(actionPosition, 'action') || Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(action, 'action'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["E" /* useValueAndKey */])(iconPosition, 'icon') || Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(icon || loading, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_18__lib__["E" /* useValueAndKey */])(labelPosition, 'labeled') || Object(__WEBPACK_IMPORTED_MODULE_18__lib__["A" /* useKeyOnly */])(label, 'labeled'), 'input', className);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_18__lib__["q" /* getElementType */])(Input, this.props);

      var _this$partitionProps = this.partitionProps(),
          _this$partitionProps2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(_this$partitionProps, 2),
          htmlInputProps = _this$partitionProps2[0],
          rest = _this$partitionProps2[1]; // Render with children
      // ----------------------------------------


      if (!__WEBPACK_IMPORTED_MODULE_18__lib__["c" /* childrenUtils */].isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_17_react__["Children"].toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return Object(__WEBPACK_IMPORTED_MODULE_17_react__["cloneElement"])(child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return __WEBPACK_IMPORTED_MODULE_17_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes
        }), childElements);
      } // Render Shorthand
      // ----------------------------------------


      var actionElement = __WEBPACK_IMPORTED_MODULE_19__elements_Button__["a" /* default */].create(action, {
        autoGenerateKey: false
      });
      var labelElement = __WEBPACK_IMPORTED_MODULE_21__elements_Label__["a" /* default */].create(label, {
        defaultProps: {
          className: __WEBPACK_IMPORTED_MODULE_15_classnames___default()('label', // add 'left|right corner'
          __WEBPACK_IMPORTED_MODULE_10_lodash_includes___default()(labelPosition, 'corner') && labelPosition)
        },
        autoGenerateKey: false
      });
      return __WEBPACK_IMPORTED_MODULE_17_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, Object(__WEBPACK_IMPORTED_MODULE_18__lib__["g" /* createHTMLInput */])(input || type, {
        defaultProps: htmlInputProps,
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_20__elements_Icon__["a" /* default */].create(this.computeIcon(), {
        autoGenerateKey: false
      }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_17_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Input, "defaultProps", {
  type: 'text'
});

__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_defineProperty___default()(Input, "handledProps", ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"]);

Input.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_18__lib__["m" /* customPropTypes */].as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_18__lib__["m" /* customPropTypes */].itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOf(['left']),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.string,

  /** An Input field can show that it is disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** An Input field can show the data contains errors. */
  error: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** Take on the size of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** Optional Icon to display inside the Input. */
  icon: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_18__lib__["m" /* customPropTypes */].itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: __WEBPACK_IMPORTED_MODULE_18__lib__["m" /* customPropTypes */].itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** Optional Label to display along side the Input. */
  label: __WEBPACK_IMPORTED_MODULE_18__lib__["m" /* customPropTypes */].itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.func,

  /** An Input can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_18__lib__["b" /* SUI */].SIZES),

  /** An Input can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.string]),

  /** Transparent Input has no background. */
  transparent: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.bool,

  /** The HTML input type. */
  type: __WEBPACK_IMPORTED_MODULE_16_prop_types___default.a.string
} : {};
Input.create = Object(__WEBPACK_IMPORTED_MODULE_18__lib__["l" /* createShorthandFactory */])(Input, function (type) {
  return {
    type: type
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MessageContent__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MessageHeader__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MessageList__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__MessageItem__ = __webpack_require__(511);



















/**
 * A message displays information that explains nearby content.
 * @see Form
 */

var Message =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Message, _Component);

  function Message() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Message);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Message)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDismiss", function (e) {
      var onDismiss = _this.props.onDismiss;
      if (onDismiss) onDismiss(e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Message, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attached = _this$props.attached,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          compact = _this$props.compact,
          content = _this$props.content,
          error = _this$props.error,
          floating = _this$props.floating,
          header = _this$props.header,
          hidden = _this$props.hidden,
          icon = _this$props.icon,
          info = _this$props.info,
          list = _this$props.list,
          negative = _this$props.negative,
          onDismiss = _this$props.onDismiss,
          positive = _this$props.positive,
          size = _this$props.size,
          success = _this$props.success,
          visible = _this$props.visible,
          warning = _this$props.warning;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(hidden, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(icon, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(info, 'info'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(success, 'success'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(visible, 'visible'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), 'message', className);
      var dismissIcon = onDismiss && __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__elements_Icon__["a" /* default */], {
        name: "close",
        onClick: this.handleDismiss
      });
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(Message, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(Message, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes
        }), dismissIcon, children);
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), dismissIcon, __WEBPACK_IMPORTED_MODULE_14__elements_Icon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), (!__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(header) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(content) || !__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(list)) && __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__MessageContent__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_16__MessageHeader__["a" /* default */].create(header, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_17__MessageList__["a" /* default */].create(list, {
        autoGenerateKey: false
      }), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["i" /* createHTMLParagraph */])(content, {
        autoGenerateKey: false
      })));
    }
  }]);

  return Message;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Message, "Content", __WEBPACK_IMPORTED_MODULE_15__MessageContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Message, "Header", __WEBPACK_IMPORTED_MODULE_16__MessageHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Message, "List", __WEBPACK_IMPORTED_MODULE_17__MessageList__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Message, "Item", __WEBPACK_IMPORTED_MODULE_18__MessageItem__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Message, "handledProps", ["as", "attached", "children", "className", "color", "compact", "content", "error", "floating", "header", "hidden", "icon", "info", "list", "negative", "onDismiss", "positive", "size", "success", "visible", "warning"]);


Message.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** A message can be formatted to attach itself to other content. */
  attached: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['bottom', 'top'])]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** A message can be formatted to be different colors. */
  color: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].COLORS),

  /** A message can only take up the width of its content. */
  compact: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A message can float above content that it is related to. */
  floating: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Shorthand for MessageHeader. */
  header: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** A message can be hidden. */
  hidden: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A message can contain an icon. */
  icon: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool]),

  /** A message may be formatted to display information. */
  info: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onDismiss: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A message can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_9_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].SIZES, 'medium')),

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A message may be formatted to display warning messages. */
  warning: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TableBody__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TableCell__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TableFooter__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TableHeader__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__TableHeaderCell__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__TableRow__ = __webpack_require__(680);













/**
 * A table displays a collections of data grouped into rows.
 */

function Table(props) {
  var attached = props.attached,
      basic = props.basic,
      celled = props.celled,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      color = props.color,
      columns = props.columns,
      compact = props.compact,
      definition = props.definition,
      fixed = props.fixed,
      footerRow = props.footerRow,
      headerRow = props.headerRow,
      inverted = props.inverted,
      padded = props.padded,
      renderBodyRow = props.renderBodyRow,
      selectable = props.selectable,
      singleLine = props.singleLine,
      size = props.size,
      sortable = props.sortable,
      stackable = props.stackable,
      striped = props.striped,
      structured = props.structured,
      tableData = props.tableData,
      textAlign = props.textAlign,
      unstackable = props.unstackable,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(celled, 'celled'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(collapsing, 'collapsing'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(definition, 'definition'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(fixed, 'fixed'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(selectable, 'selectable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(singleLine, 'single line'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(sortable, 'sortable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(stackable, 'stackable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(striped, 'striped'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(structured, 'structured'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(padded, 'padded'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["F" /* useVerticalAlignProp */])(verticalAlign), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["G" /* useWidthProp */])(columns, 'column'), 'table', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(Table, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(Table, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), headerRow && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__TableHeader__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_12__TableRow__["a" /* default */].create(headerRow, {
    defaultProps: {
      cellAs: 'th'
    }
  })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TableBody__["a" /* default */], null, renderBodyRow && __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(tableData, function (data, index) {
    return __WEBPACK_IMPORTED_MODULE_12__TableRow__["a" /* default */].create(renderBodyRow(data, index));
  })), footerRow && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TableFooter__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_12__TableRow__["a" /* default */].create(footerRow)));
}

Table.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Table.defaultProps = {
  as: 'table'
};
Table.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Attach table to other content */
  attached: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A table can reduce its complexity to increase readability. */
  basic: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very']), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool]),

  /** A table may be divided each row into separate cells. */
  celled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can be given a color to distinguish it from other tables. */
  color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].COLORS),

  /** A table can specify its column count to divide its content evenly. */
  columns: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].WIDTHS),

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand,

  /** A table's colors can be inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].demand(['tableData']), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),

  /** A table can have its rows appear selectable. */
  selectable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can also be small or large. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')),

  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can specify how it stacks table content responsively. */
  stackable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can be formatted to display complex structured data. */
  structured: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Data to be passed to the renderBodyRow function. */
  tableData: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].demand(['renderBodyRow']), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array]),

  /** A table can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified')),

  /** A table can specify how it stacks table content responsively. */
  unstackable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can adjust its text alignment. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
Table.Body = __WEBPACK_IMPORTED_MODULE_7__TableBody__["a" /* default */];
Table.Cell = __WEBPACK_IMPORTED_MODULE_8__TableCell__["a" /* default */];
Table.Footer = __WEBPACK_IMPORTED_MODULE_9__TableFooter__["a" /* default */];
Table.Header = __WEBPACK_IMPORTED_MODULE_10__TableHeader__["a" /* default */];
Table.HeaderCell = __WEBPACK_IMPORTED_MODULE_11__TableHeaderCell__["a" /* default */];
Table.Row = __WEBPACK_IMPORTED_MODULE_12__TableRow__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A container limits content to a maximum width.
 */

function Container(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(text, 'text'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["D" /* useTextAlignProp */])(textAlign), 'container', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Container, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Container, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Container.handledProps = ["as", "children", "className", "content", "fluid", "text", "textAlign"];
Container.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Container has no maximum width. */
  fluid: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Align container text. */
  textAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].TEXT_ALIGNMENTS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A divider visually segments content into groups.
 */

function Divider(props) {
  var children = props.children,
      className = props.className,
      clearing = props.clearing,
      content = props.content,
      fitted = props.fitted,
      hidden = props.hidden,
      horizontal = props.horizontal,
      inverted = props.inverted,
      section = props.section,
      vertical = props.vertical;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(clearing, 'clearing'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(fitted, 'fitted'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(hidden, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(section, 'section'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(vertical, 'vertical'), 'divider', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Divider, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Divider, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Divider.handledProps = ["as", "children", "className", "clearing", "content", "fitted", "hidden", "horizontal", "inverted", "section", "vertical"];
Divider.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Divider can clear the content above it. */
  clearing: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Divider can be fitted without any space above or below it. */
  fitted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can divide content without creating a dividing line. */
  hidden: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can segment content horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can have its colours inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can provide greater margins to divide sections of content. */
  section: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can segment content vertically. */
  vertical: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_Image__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HeaderSubheader__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__HeaderContent__ = __webpack_require__(682);










/**
 * A header provides a short summary of content
 */

function Header(props) {
  var attached = props.attached,
      block = props.block,
      children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      disabled = props.disabled,
      dividing = props.dividing,
      floated = props.floated,
      icon = props.icon,
      image = props.image,
      inverted = props.inverted,
      size = props.size,
      sub = props.sub,
      subheader = props.subheader,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(block, 'block'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(dividing, 'dividing'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(icon === true, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(image === true, 'image'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(sub, 'sub'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), 'header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(Header, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(Header, props);

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  var iconElement = __WEBPACK_IMPORTED_MODULE_6__elements_Icon__["a" /* default */].create(icon, {
    autoGenerateKey: false
  });
  var imageElement = __WEBPACK_IMPORTED_MODULE_7__elements_Image__["a" /* default */].create(image, {
    autoGenerateKey: false
  });
  var subheaderElement = __WEBPACK_IMPORTED_MODULE_8__HeaderSubheader__["a" /* default */].create(subheader, {
    autoGenerateKey: false
  });

  if (iconElement || imageElement) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), iconElement || imageElement, (content || subheaderElement) && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__HeaderContent__["a" /* default */], null, content, subheaderElement));
  }

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), content, subheaderElement);
}

Header.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Header.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Attach header  to other content, like a segment. */
  attached: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** Format header to appear inside a content block. */
  block: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Color of the header. */
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** Show that the header is inactive. */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Divide header from the content below it. */
  dividing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Header can sit to the left or right of other content. */
  floated: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].FLOATS),

  /** Add an icon by icon name or pass an Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].disallow(['image']), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand])]),

  /** Add an image by img src or pass an Image. */
  image: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].disallow(['icon']), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand])]),

  /** Inverts the color of the header for dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Content headings are sized with em and are based on the font-size of their container. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'big', 'massive', 'mini')),

  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for Header.Subheader. */
  subheader: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand,

  /** Align header content. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS)
} : {};
Header.Content = __WEBPACK_IMPORTED_MODULE_9__HeaderContent__["a" /* default */];
Header.Subheader = __WEBPACK_IMPORTED_MODULE_8__HeaderSubheader__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ListContent__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ListDescription__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ListHeader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ListIcon__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ListItem__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ListList__ = __webpack_require__(684);




















/**
 * A list groups related content.
 */

var List =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(List, _Component);

  function List() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleItemOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(predefinedProps, 'onClick', e, itemProps);

          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onItemClick', e, itemProps);
        }
      };
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(List, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          animated = _this$props.animated,
          bulleted = _this$props.bulleted,
          celled = _this$props.celled,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          divided = _this$props.divided,
          floated = _this$props.floated,
          horizontal = _this$props.horizontal,
          inverted = _this$props.inverted,
          items = _this$props.items,
          link = _this$props.link,
          ordered = _this$props.ordered,
          relaxed = _this$props.relaxed,
          selection = _this$props.selection,
          size = _this$props.size,
          verticalAlign = _this$props.verticalAlign;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(animated, 'animated'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(bulleted, 'bulleted'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(celled, 'celled'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(divided, 'divided'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(link, 'link'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(ordered, 'ordered'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(selection, 'selection'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["B" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["F" /* useVerticalAlignProp */])(verticalAlign), 'list', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(List, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(List, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
          role: "list",
          className: classes
        }, rest), children);
      }

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(content)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
          role: "list",
          className: classes
        }, rest), content);
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
        role: "list",
        className: classes
      }, rest), __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(items, function (item) {
        return __WEBPACK_IMPORTED_MODULE_18__ListItem__["a" /* default */].create(item, {
          overrideProps: _this2.handleItemOverrides
        });
      }));
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "Content", __WEBPACK_IMPORTED_MODULE_14__ListContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "Description", __WEBPACK_IMPORTED_MODULE_15__ListDescription__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "Header", __WEBPACK_IMPORTED_MODULE_16__ListHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "Icon", __WEBPACK_IMPORTED_MODULE_17__ListIcon__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "Item", __WEBPACK_IMPORTED_MODULE_18__ListItem__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "List", __WEBPACK_IMPORTED_MODULE_19__ListList__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(List, "handledProps", ["animated", "as", "bulleted", "celled", "children", "className", "content", "divided", "floated", "horizontal", "inverted", "items", "link", "onItemClick", "ordered", "relaxed", "selection", "size", "verticalAlign"]);

List.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** A list can animate to set the current item apart from the list. */
  animated: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A list can mark items with a bullet. */
  bulleted: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A list can divide its items into cells. */
  celled: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /** A list can show divisions between content. */
  divided: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** An list can be floated left or right. */
  floated: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].FLOATS),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Shorthand array of props for ListItem. */
  items: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func]),

  /** A list can be ordered numerically. */
  ordered: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['very'])]),

  /** A selection list formats list items as possible choices. */
  selection: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A list can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].SIZES),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */

function Loader(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      inline = props.inline,
      inverted = props.inverted,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(indeterminate, 'indeterminate'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(children || content, 'text'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["B" /* useKeyOrValueAndKey */])(inline, 'inline'), 'loader', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Loader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Loader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Loader.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Loader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** A loader can be active or visible. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A loader can be disabled or hidden. */
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can appear inline with content. */
  inline: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['centered'])]),

  /** Loaders can have their colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].SIZES)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlaceholderHeader__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PlaceholderImage__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PlaceholderLine__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PlaceholderParagraph__ = __webpack_require__(688);









/**
 * A placeholder is used to reserve splace for content that soon will appear in a layout.
 */

function Placeholder(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      inverted = props.inverted;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), 'placeholder', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Placeholder, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Placeholder, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Placeholder.handledProps = ["as", "children", "className", "content", "fluid", "inverted"];
Placeholder.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A fluid placeholder takes up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A placeholder can have their colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
Placeholder.Header = __WEBPACK_IMPORTED_MODULE_5__PlaceholderHeader__["a" /* default */];
Placeholder.Image = __WEBPACK_IMPORTED_MODULE_6__PlaceholderImage__["a" /* default */];
Placeholder.Line = __WEBPACK_IMPORTED_MODULE_7__PlaceholderLine__["a" /* default */];
Placeholder.Paragraph = __WEBPACK_IMPORTED_MODULE_8__PlaceholderParagraph__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Placeholder);

/***/ }),

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A rail is used to show accompanying content outside the boundaries of the main view of a site.
 */

function Rail(props) {
  var attached = props.attached,
      children = props.children,
      className = props.className,
      close = props.close,
      content = props.content,
      dividing = props.dividing,
      internal = props.internal,
      position = props.position,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', position, size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(dividing, 'dividing'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(internal, 'internal'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(close, 'close'), 'rail', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(Rail, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(Rail, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Rail.handledProps = ["as", "attached", "children", "className", "close", "content", "dividing", "internal", "position", "size"];
Rail.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** A rail can appear attached to the main viewport. */
  attached: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A rail can appear closer to the main viewport. */
  close: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A rail can create a division between itself and a container. */
  dividing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A rail can attach itself to the inside of a container. */
  internal: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A rail can be presented on the left or right side of a container. */
  position: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].FLOATS).isRequired,

  /** A rail can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'medium'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Rail);

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RevealContent__ = __webpack_require__(689);






/**
 * A reveal displays additional content in place of previous content when activated.
 */

function Reveal(props) {
  var active = props.active,
      animated = props.animated,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      instant = props.instant;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', animated, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(instant, 'instant'), 'reveal', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Reveal, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Reveal, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Reveal.handledProps = ["active", "animated", "as", "children", "className", "content", "disabled", "instant"];
Reveal.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** An active reveal displays its hidden content. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** An animation name that will be applied to Reveal. */
  animated: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['fade', 'small fade', 'move', 'move right', 'move up', 'move down', 'rotate', 'rotate left']),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A disabled reveal will not animate when hovered. */
  disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** An element can show its content without delay. */
  instant: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
Reveal.Content = __WEBPACK_IMPORTED_MODULE_5__RevealContent__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Reveal);

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AccordionAccordion__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AccordionContent__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AccordionPanel__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AccordionTitle__ = __webpack_require__(518);









/**
 * An accordion allows users to toggle the display of sections of content.
 */

function Accordion(props) {
  var className = props.className,
      fluid = props.fluid,
      inverted = props.inverted,
      styled = props.styled;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(styled, 'styled'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Accordion, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AccordionAccordion__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }));
}

Accordion.handledProps = ["className", "fluid", "inverted", "styled"];
Accordion.propTypes =  true ? {
  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Format to take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Format for dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Adds some basic styling to accordion panels. */
  styled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
Accordion.Accordion = __WEBPACK_IMPORTED_MODULE_5__AccordionAccordion__["a" /* default */];
Accordion.Content = __WEBPACK_IMPORTED_MODULE_6__AccordionContent__["a" /* default */];
Accordion.Panel = __WEBPACK_IMPORTED_MODULE_7__AccordionPanel__["a" /* default */];
Accordion.Title = __WEBPACK_IMPORTED_MODULE_8__AccordionTitle__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Embed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_Icon__ = __webpack_require__(405);














/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */

var Embed =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Embed, _Component);

  function Embed() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Embed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Embed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;
      if (onClick) onClick(e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        active: true
      }));
      if (!active) _this.trySetState({
        active: true
      });
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Embed, [{
    key: "getSrc",
    value: function getSrc() {
      var _this$props = this.props,
          _this$props$autoplay = _this$props.autoplay,
          autoplay = _this$props$autoplay === void 0 ? true : _this$props$autoplay,
          _this$props$brandedUI = _this$props.brandedUI,
          brandedUI = _this$props$brandedUI === void 0 ? false : _this$props$brandedUI,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? '#444444' : _this$props$color,
          _this$props$hd = _this$props.hd,
          hd = _this$props$hd === void 0 ? true : _this$props$hd,
          id = _this$props.id,
          source = _this$props.source,
          url = _this$props.url;

      if (source === 'youtube') {
        return ["//www.youtube.com/embed/".concat(id), '?autohide=true', "&amp;autoplay=".concat(autoplay), "&amp;color=".concat(encodeURIComponent(color)), "&amp;hq=".concat(hd), '&amp;jsapi=false', "&amp;modestbranding=".concat(brandedUI), "&amp;rel=".concat(brandedUI ? 0 : 1)].join('');
      }

      if (source === 'vimeo') {
        return ["//player.vimeo.com/video/".concat(id), '?api=false', "&amp;autoplay=".concat(autoplay), '&amp;byline=false', "&amp;color=".concat(encodeURIComponent(color)), '&amp;portrait=false', '&amp;title=false'].join('');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          aspectRatio = _this$props2.aspectRatio,
          className = _this$props2.className,
          icon = _this$props2.icon,
          placeholder = _this$props2.placeholder;
      var active = this.state.active;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()('ui', aspectRatio, Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(active, 'active'), 'embed', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(Embed, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(Embed, this.props);
      var iconShorthand = icon !== undefined ? icon : 'video play';
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_13__elements_Icon__["a" /* default */].create(iconShorthand, {
        autoGenerateKey: false
      }), placeholder && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("img", {
        className: "placeholder",
        src: placeholder
      }), this.renderEmbed());
    }
  }, {
    key: "renderEmbed",
    value: function renderEmbed() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          content = _this$props3.content,
          iframe = _this$props3.iframe,
          source = _this$props3.source;
      var active = this.state.active;
      if (!active) return null;
      if (!__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(children)) return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "embed"
      }, children);
      if (!__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(content)) return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "embed"
      }, content);
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "embed"
      }, Object(__WEBPACK_IMPORTED_MODULE_12__lib__["e" /* createHTMLIframe */])(__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(iframe) ? this.getSrc() : iframe, {
        defaultProps: {
          allowFullScreen: false,
          frameBorder: 0,
          height: '100%',
          scrolling: 'no',
          src: this.getSrc(),
          title: "Embedded content from ".concat(source, "."),
          width: '100%'
        },
        autoGenerateKey: false
      }));
    }
  }]);

  return Embed;
}(__WEBPACK_IMPORTED_MODULE_12__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Embed, "autoControlledProps", ['active']);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Embed, "handledProps", ["active", "as", "aspectRatio", "autoplay", "brandedUI", "children", "className", "color", "content", "defaultActive", "hd", "icon", "id", "iframe", "onClick", "placeholder", "source", "url"]);


Embed.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** An embed can be active. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['4:3', '16:9', '21:9']),

  /** Setting to true or false will force autoplay. */
  autoplay: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool]),

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string]),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** Initial value of active. */
  defaultActive: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Whether to prefer HD content. */
  hd: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool]),

  /** Specifies an icon to use with placeholder content. */
  icon: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** Specifies an id for source. */
  id: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string]),

  /** Shorthand for HTML iframe. */
  iframe: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].demand(['source']), __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand]),

  /**
   * Сalled on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /** A placeholder image for embed. */
  placeholder: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Specifies a source to use. */
  source: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].disallow(['sourceUrl']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['youtube', 'vimeo'])]),

  /** Specifies a url to use for embed. */
  url: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].disallow(['source']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string])
} : {};

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export POSITIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_reduce__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_assign__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_isArray__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_mapValues__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isNumber__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__addons_Portal__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__PopupContent__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__PopupHeader__ = __webpack_require__(698);

























var POSITIONS = ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'];
/**
 * A Popup displays additional information on top of a page.
 */

var Popup =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Popup, _Component);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "state", {});

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "hideOnScroll", function (e) {
      _this.setState({
        closed: true
      });

      __WEBPACK_IMPORTED_MODULE_21__lib__["o" /* eventStack */].unsub('scroll', _this.hideOnScroll, {
        target: window
      });
      setTimeout(function () {
        if (_this.mounted) _this.setState({
          closed: false
        });
      }, 50);

      _this.handleClose(e);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClose", function (e) {
      __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(_this.props, 'onClose', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleOpen", function (e) {
      _this.coords = _this.getContext().getBoundingClientRect();

      __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(_this.props, 'onOpen', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handlePortalMount", function (e) {
      var hideOnScroll = _this.props.hideOnScroll;
      if (hideOnScroll) __WEBPACK_IMPORTED_MODULE_21__lib__["o" /* eventStack */].sub('scroll', _this.hideOnScroll, {
        target: window
      });

      if (_this.getContext()) {
        _this.setPopupStyle(_this.props.position);
      }

      __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(_this.props, 'onMount', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handlePortalUnmount", function (e) {
      var hideOnScroll = _this.props.hideOnScroll;
      if (hideOnScroll) __WEBPACK_IMPORTED_MODULE_21__lib__["o" /* eventStack */].unsub('scroll', _this.hideOnScroll, {
        target: window
      });

      __WEBPACK_IMPORTED_MODULE_12_lodash_invoke___default()(_this.props, 'onUnmount', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handlePopupRef", function (popupRef) {
      _this.popupCoords = popupRef ? popupRef.getBoundingClientRect() : null;

      _this.setPopupStyle();
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleTriggerRef", function (triggerRef) {
      _this.triggerRef = triggerRef;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getContext", function () {
      return _this.props.context || _this.triggerRef;
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // if horizontal/vertical offsets change, re-calculate the CSS style
      var _this$props = this.props,
          horizontalOffset = _this$props.horizontalOffset,
          verticalOffset = _this$props.verticalOffset;

      if (horizontalOffset !== prevProps.horizontalOffset || verticalOffset !== prevProps.verticalOffset) {
        this.setPopupStyle();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "computePopupStyle",
    value: function computePopupStyle(positions) {
      var style = {
        position: 'absolute'
      };
      var context = this.getContext(); // Do not access window/document when server side rendering

      if (!Object(__WEBPACK_IMPORTED_MODULE_21__lib__["t" /* isBrowser */])()) return style;
      var _this$props2 = this.props,
          horizontalOffset = _this$props2.horizontalOffset,
          verticalOffset = _this$props2.verticalOffset;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;
      var coords = this.coords || context.getBoundingClientRect();

      if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(positions, 'right')) {
        style.right = Math.round(clientWidth - (coords.right + pageXOffset));
        style.left = 'auto';
      } else if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(positions, 'left')) {
        style.left = Math.round(coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (coords.top + pageYOffset));
        style.top = 'auto';
      } else if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(positions, 'bottom')) {
        style.top = Math.round(coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;

        if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (horizontalOffset) {
        if (__WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default()(style.right)) {
          style.right -= horizontalOffset;
        } else {
          style.left -= horizontalOffset;
        }
      }

      if (verticalOffset) {
        if (__WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default()(style.top)) {
          style.top += verticalOffset;
        } else {
          style.bottom += verticalOffset;
        }
      }

      return style;
    } // check if the style would display
    // the popup outside of the view port

  }, {
    key: "isStyleInViewport",
    value: function isStyleInViewport(style) {
      var _window2 = window,
          pageYOffset = _window2.pageYOffset,
          pageXOffset = _window2.pageXOffset;
      var _document$documentEle2 = document.documentElement,
          clientWidth = _document$documentEle2.clientWidth,
          clientHeight = _document$documentEle2.clientHeight;
      var element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height
      };

      if (__WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default()(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }

      if (__WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default()(style.bottom)) {
        element.top = clientHeight - style.bottom - element.height;
      } // hidden on top


      if (element.top < pageYOffset) return false; // hidden on the bottom

      if (element.top + element.height > pageYOffset + clientHeight) return false; // hidden the left

      if (element.left < pageXOffset) return false; // hidden on the right

      if (element.left + element.width > pageXOffset + clientWidth) return false;
      return true;
    }
  }, {
    key: "setPopupStyle",
    value: function setPopupStyle() {
      var context = this.getContext();
      if (!this.coords && !context || !this.popupCoords) return;
      var position = this.props.position;
      var style = this.computePopupStyle(position);
      var keepInViewPort = this.props.keepInViewPort;

      if (keepInViewPort) {
        // Lets detect if the popup is out of the viewport and adjust
        // the position accordingly
        var positions = __WEBPACK_IMPORTED_MODULE_17_lodash_without___default()(POSITIONS, position).concat([position]);

        for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i += 1) {
          style = this.computePopupStyle(positions[i]);
          position = positions[i];
        }
      } // Append 'px' to every numerical values in the style


      style = __WEBPACK_IMPORTED_MODULE_14_lodash_mapValues___default()(style, function (value) {
        return __WEBPACK_IMPORTED_MODULE_15_lodash_isNumber___default()(value) ? "".concat(value, "px") : value;
      });
      this.setState({
        style: style,
        position: position
      });
    }
  }, {
    key: "getPortalProps",
    value: function getPortalProps() {
      var portalProps = {};
      var _this$props3 = this.props,
          on = _this$props3.on,
          hoverable = _this$props3.hoverable;
      var normalizedOn = __WEBPACK_IMPORTED_MODULE_13_lodash_isArray___default()(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }

      if (__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(normalizedOn, 'hover')) {
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true; // Taken from SUI: https://git.io/vPmCm

        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      return portalProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          basic = _this$props4.basic,
          children = _this$props4.children,
          className = _this$props4.className,
          content = _this$props4.content,
          flowing = _this$props4.flowing,
          header = _this$props4.header,
          inverted = _this$props4.inverted,
          size = _this$props4.size,
          trigger = _this$props4.trigger,
          wide = _this$props4.wide;
      var _this$state = this.state,
          position = _this$state.position,
          closed = _this$state.closed;

      var style = __WEBPACK_IMPORTED_MODULE_11_lodash_assign___default()({}, this.state.style, this.props.style);

      var classes = __WEBPACK_IMPORTED_MODULE_18_classnames___default()('ui', position, size, Object(__WEBPACK_IMPORTED_MODULE_21__lib__["B" /* useKeyOrValueAndKey */])(wide, 'wide'), Object(__WEBPACK_IMPORTED_MODULE_21__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_21__lib__["A" /* useKeyOnly */])(flowing, 'flowing'), Object(__WEBPACK_IMPORTED_MODULE_21__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), 'popup transition visible', className);
      if (closed) return trigger;
      var unhandled = Object(__WEBPACK_IMPORTED_MODULE_21__lib__["r" /* getUnhandledProps */])(Popup, this.props);
      var portalPropNames = __WEBPACK_IMPORTED_MODULE_22__addons_Portal__["a" /* default */].handledProps;

      var rest = __WEBPACK_IMPORTED_MODULE_10_lodash_reduce___default()(unhandled, function (acc, val, key) {
        if (!__WEBPACK_IMPORTED_MODULE_16_lodash_includes___default()(portalPropNames, key)) acc[key] = val;
        return acc;
      }, {});

      var portalProps = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(unhandled, portalPropNames);

      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_21__lib__["q" /* getElementType */])(Popup, this.props);
      var popupJSX = __WEBPACK_IMPORTED_MODULE_20_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        style: style,
        ref: this.handlePopupRef
      }), children, __WEBPACK_IMPORTED_MODULE_21__lib__["c" /* childrenUtils */].isNil(children) && __WEBPACK_IMPORTED_MODULE_24__PopupHeader__["a" /* default */].create(header, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_21__lib__["c" /* childrenUtils */].isNil(children) && __WEBPACK_IMPORTED_MODULE_23__PopupContent__["a" /* default */].create(content, {
        autoGenerateKey: false
      }));

      var mergedPortalProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, this.getPortalProps(), portalProps);

      return __WEBPACK_IMPORTED_MODULE_20_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__addons_Portal__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, mergedPortalProps, {
        onClose: this.handleClose,
        onMount: this.handlePortalMount,
        onOpen: this.handleOpen,
        onUnmount: this.handlePortalUnmount,
        trigger: trigger,
        triggerRef: this.handleTriggerRef
      }), popupJSX);
    }
  }]);

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_20_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Popup, "defaultProps", {
  position: 'top left',
  on: 'hover',
  keepInViewPort: true
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Popup, "Content", __WEBPACK_IMPORTED_MODULE_23__PopupContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Popup, "Header", __WEBPACK_IMPORTED_MODULE_24__PopupHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Popup, "handledProps", ["as", "basic", "children", "className", "content", "context", "flowing", "header", "hideOnScroll", "horizontalOffset", "hoverable", "inverted", "keepInViewPort", "on", "onClose", "onMount", "onOpen", "onUnmount", "position", "size", "style", "trigger", "verticalOffset", "wide"]);


Popup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_21__lib__["m" /* customPropTypes */].as,

  /** Display the popup without the pointing arrow. */
  basic: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.string,

  /** Simple text content for the popover. */
  content: __WEBPACK_IMPORTED_MODULE_21__lib__["m" /* customPropTypes */].itemShorthand,

  /** Existing element the pop-up should be bound to. */
  context: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.object,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: __WEBPACK_IMPORTED_MODULE_21__lib__["m" /* customPropTypes */].itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool,

  /** Whether the popup should not close on hover. */
  hoverable: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool,

  /** Invert the colors of the Popup. */
  inverted: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool,

  /** Horizontal offset in pixels to be applied to the Popup. */
  horizontalOffset: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.number,

  /** Vertical offset in pixels to be applied to the Popup. */
  verticalOffset: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.number,

  /** Events triggering the popup. */
  on: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOf(['hover', 'click', 'focus']), __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOf(['hover', 'click', 'focus']))]),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.func,

  /** Position for the popover. */
  position: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOf(POSITIONS),

  /** Popup size. */
  size: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_17_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_21__lib__["b" /* SUI */].SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.node,

  /** Popup width. */
  wide: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.oneOf(['very'])]),

  /** Element to be rendered within the confines of the viewport whenever possible. */
  keepInViewPort: __WEBPACK_IMPORTED_MODULE_19_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_round__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_round___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_round__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_clamp__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_clamp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_clamp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib__ = __webpack_require__(383);
















/**
 * A progress bar shows the progression of a task.
 */

var Progress =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Progress, _Component);

  function Progress() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Progress);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Progress)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "calculatePercent", function () {
      var _this$props = _this.props,
          percent = _this$props.percent,
          total = _this$props.total,
          value = _this$props.value;
      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(percent)) return percent;
      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(total) && !__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(value)) return value / total * 100;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeValueText", function (percent) {
      var _this$props2 = _this.props,
          progress = _this$props2.progress,
          total = _this$props2.total,
          value = _this$props2.value;
      if (progress === 'value') return value;
      if (progress === 'ratio') return "".concat(value, "/").concat(total);
      return "".concat(percent, "%");
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getPercent", function () {
      var _this$props3 = _this.props,
          precision = _this$props3.precision,
          progress = _this$props3.progress,
          total = _this$props3.total,
          value = _this$props3.value;

      var percent = __WEBPACK_IMPORTED_MODULE_9_lodash_clamp___default()(_this.calculatePercent(), 0, 100);

      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(total) && !__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(value) && progress === 'value') {
        return value / total * 100;
      }

      if (progress === 'value') return value;
      if (__WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(precision)) return percent;
      return __WEBPACK_IMPORTED_MODULE_8_lodash_round___default()(percent, precision);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "isAutoSuccess", function () {
      var _this$props4 = _this.props,
          autoSuccess = _this$props4.autoSuccess,
          percent = _this$props4.percent,
          total = _this$props4.total,
          value = _this$props4.value;
      return autoSuccess && (percent >= 100 || value >= total);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderLabel", function () {
      var _this$props5 = _this.props,
          children = _this$props5.children,
          content = _this$props5.content,
          label = _this$props5.label;
      if (!__WEBPACK_IMPORTED_MODULE_15__lib__["c" /* childrenUtils */].isNil(children)) return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("div", {
        className: "label"
      }, children);
      if (!__WEBPACK_IMPORTED_MODULE_15__lib__["c" /* childrenUtils */].isNil(content)) return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("div", {
        className: "label"
      }, content);
      return Object(__WEBPACK_IMPORTED_MODULE_15__lib__["d" /* createHTMLDivision */])(label, {
        autoGenerateKey: false,
        defaultProps: {
          className: 'label'
        }
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderProgress", function (percent) {
      var _this$props6 = _this.props,
          precision = _this$props6.precision,
          progress = _this$props6.progress;
      if (!progress && __WEBPACK_IMPORTED_MODULE_10_lodash_isUndefined___default()(precision)) return;
      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("div", {
        className: "progress"
      }, _this.computeValueText(percent));
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Progress, [{
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          active = _this$props7.active,
          attached = _this$props7.attached,
          className = _this$props7.className,
          color = _this$props7.color,
          disabled = _this$props7.disabled,
          error = _this$props7.error,
          indicating = _this$props7.indicating,
          inverted = _this$props7.inverted,
          size = _this$props7.size,
          success = _this$props7.success,
          warning = _this$props7.warning;
      var classes = __WEBPACK_IMPORTED_MODULE_12_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(active || indicating, 'active'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(indicating, 'indicating'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(success || this.isAutoSuccess(), 'success'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["E" /* useValueAndKey */])(attached, 'attached'), 'progress', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["r" /* getUnhandledProps */])(Progress, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["q" /* getElementType */])(Progress, this.props);
      var percent = this.getPercent() || 0;
      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        "data-percent": Math.floor(percent)
      }), __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement("div", {
        className: "bar",
        style: {
          width: "".concat(percent, "%")
        }
      }, this.renderProgress(percent)), this.renderLabel());
    }
  }]);

  return Progress;
}(__WEBPACK_IMPORTED_MODULE_14_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Progress, "handledProps", ["active", "as", "attached", "autoSuccess", "children", "className", "color", "content", "disabled", "error", "indicating", "inverted", "label", "percent", "precision", "progress", "size", "success", "total", "value", "warning"]);

Progress.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].as,

  /** A progress bar can show activity. */
  active: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['top', 'bottom']),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string,

  /** A progress bar can have different colors. */
  color: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_15__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].contentShorthand,

  /** A progress bar be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A progress bar can show a error state. */
  error: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A progress bar can have its colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Can be set to either to display progress as percent or ratio. */
  label: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].itemShorthand,

  /** Current percent complete. */
  percent: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['total', 'value']), __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string])]),

  /** Decimal point precision for calculated progress. */
  precision: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number,

  /** A progress bar can contain a text value indicating current progress. */
  progress: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['percent', 'ratio', 'value'])]),

  /** A progress bar can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_11_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_15__lib__["b" /* SUI */].SIZES, 'mini', 'huge', 'massive')),

  /** A progress bar can show a success state. */
  success: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** For use with value. Together, these will calculate the percent. Mutually excludes percent. */
  total: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].demand(['value']), __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['percent']), __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string])]),

  /** For use with total. Together, these will calculate the percent. Mutually excludes percent. */
  value: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].disallow(['percent']), __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string])]),

  /** A progress bar can show a warning state. */
  warning: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Progress);

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_times__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_times___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_times__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__RatingIcon__ = __webpack_require__(699);

















/**
 * A rating indicates user interest in content.
 */

var Rating =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Rating, _Component);

  function Rating() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Rating);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Rating)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconClick", function (e, _ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          disabled = _this$props.disabled,
          maxRating = _this$props.maxRating,
          onRate = _this$props.onRate;
      var rating = _this.state.rating;
      if (disabled) return; // default newRating is the clicked icon
      // allow toggling a binary rating
      // allow clearing ratings

      var newRating = index + 1;

      if (clearable === 'auto' && maxRating === 1) {
        newRating = +!rating;
      } else if (clearable === true && newRating === rating) {
        newRating = 0;
      } // set rating


      _this.trySetState({
        rating: newRating
      }, {
        isSelecting: false
      });

      if (onRate) onRate(e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        rating: newRating
      }));
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconMouseEnter", function (e, _ref2) {
      var index = _ref2.index;
      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: index,
        isSelecting: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleMouseLeave", function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default.a.apply(void 0, [_this.props, 'onMouseLeave'].concat(args));

      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: -1,
        isSelecting: false
      });
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Rating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          icon = _this$props2.icon,
          maxRating = _this$props2.maxRating,
          size = _this$props2.size;
      var _this$state = this.state,
          rating = _this$state.rating,
          selectedIndex = _this$state.selectedIndex,
          isSelecting = _this$state.isSelecting;
      var classes = __WEBPACK_IMPORTED_MODULE_12_classnames___default()('ui', icon, size, Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["r" /* getUnhandledProps */])(Rating, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["q" /* getElementType */])(Rating, this.props);
      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        role: "radiogroup",
        onMouseLeave: this.handleMouseLeave
      }), __WEBPACK_IMPORTED_MODULE_9_lodash_times___default()(maxRating, function (i) {
        return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__RatingIcon__["a" /* default */], {
          active: rating >= i + 1,
          "aria-checked": rating === i + 1,
          "aria-posinset": i + 1,
          "aria-setsize": maxRating,
          index: i,
          key: i,
          onClick: _this2.handleIconClick,
          onMouseEnter: _this2.handleIconMouseEnter,
          selected: selectedIndex >= i && isSelecting
        });
      }));
    }
  }]);

  return Rating;
}(__WEBPACK_IMPORTED_MODULE_15__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Rating, "autoControlledProps", ['rating']);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Rating, "defaultProps", {
  clearable: 'auto',
  maxRating: 1
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Rating, "Icon", __WEBPACK_IMPORTED_MODULE_16__RatingIcon__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Rating, "handledProps", ["as", "className", "clearable", "defaultRating", "disabled", "icon", "maxRating", "onRate", "rating", "size"]);


Rating.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** A rating can use a set of star or heart icons. */
  icon: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /** The current number of active icons. */
  rating: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string]),

  /** A progress bar can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_11_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_15__lib__["b" /* SUI */].SIZES, 'medium', 'big'))
} : {};

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_get__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_partialRight__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_partialRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_partialRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_inRange__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_inRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_inRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_reduce__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_keyboard_key__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_keyboard_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_keyboard_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__elements_Input__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__SearchCategory__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__SearchResult__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__SearchResults__ = __webpack_require__(702);






























/**
 * A search module allows a user to query for results from a selection of data
 */
var Search =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_9__babel_runtime_helpers_inherits___default()(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_classCallCheck___default()(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_getPrototypeOf___default()(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleResultSelect", function (e, result) {
      __WEBPACK_IMPORTED_MODULE_18_lodash_invoke___default()(_this.props, 'onResultSelect', e, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        result: result
      }));
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSelectionChange", function (e) {
      var result = _this.getSelectedResult();

      __WEBPACK_IMPORTED_MODULE_18_lodash_invoke___default()(_this.props, 'onSelectionChange', e, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        result: result
      }));
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "closeOnEscape", function (e) {
      if (__WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.Escape) return;
      e.preventDefault();

      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "moveSelectionOnKeyDown", function (e) {
      switch (__WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.getCode(e)) {
        case __WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.ArrowDown:
          e.preventDefault();

          _this.moveSelectionBy(e, 1);

          break;

        case __WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.ArrowUp:
          e.preventDefault();

          _this.moveSelectionBy(e, -1);

          break;

        default:
          break;
      }
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "selectItemOnEnter", function (e) {
      if (__WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.getCode(e) !== __WEBPACK_IMPORTED_MODULE_21_keyboard_key___default.a.Enter) return;

      var result = _this.getSelectedResult(); // prevent selecting null if there was no selected item value


      if (!result) return;
      e.preventDefault(); // notify the onResultSelect prop that the user is trying to change value

      _this.setValue(result.title);

      _this.handleResultSelect(e, result);

      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "closeOnDocumentClick", function (e) {
      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleMouseDown", function (e) {
      _this.isMouseDown = true;

      __WEBPACK_IMPORTED_MODULE_18_lodash_invoke___default()(_this.props, 'onMouseDown', e, _this.props);

      __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].sub('mouseup', _this.handleDocumentMouseUp);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDocumentMouseUp", function () {
      _this.isMouseDown = false;
      __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('mouseup', _this.handleDocumentMouseUp);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleInputClick", function (e) {
      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleItemClick", function (e, _ref) {
      var id = _ref.id;

      var result = _this.getSelectedResult(id); // prevent closeOnDocumentClick()


      e.nativeEvent.stopImmediatePropagation(); // notify the onResultSelect prop that the user is trying to change value

      _this.setValue(result.title);

      _this.handleResultSelect(e, result);

      _this.close();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleFocus", function (e) {
      var onFocus = _this.props.onFocus;
      if (onFocus) onFocus(e, _this.props);

      _this.setState({
        focus: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleBlur", function (e) {
      var onBlur = _this.props.onBlur;
      if (onBlur) onBlur(e, _this.props);

      _this.setState({
        focus: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleSearchChange", function (e) {
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = e.target.value;

      __WEBPACK_IMPORTED_MODULE_18_lodash_invoke___default()(_this.props, 'onSearchChange', e, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: newQuery
      })); // open search dropdown on search query


      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getFlattenedResults", function () {
      var _this$props = _this.props,
          category = _this$props.category,
          results = _this$props.results;
      return !category ? results : __WEBPACK_IMPORTED_MODULE_17_lodash_reduce___default()(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "getSelectedResult", function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();

      return __WEBPACK_IMPORTED_MODULE_16_lodash_get___default()(results, index);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setValue", function (value) {
      var selectFirstResult = _this.props.selectFirstResult;

      _this.trySetState({
        value: value
      }, {
        selectedIndex: selectFirstResult ? 0 : -1
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "moveSelectionBy", function (e, offset) {
      var selectedIndex = _this.state.selectedIndex;

      var results = _this.getFlattenedResults();

      var lastIndex = results.length - 1; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({
        selectedIndex: nextIndex
      });

      _this.scrollSelectedItemIntoView();

      _this.handleSelectionChange(e);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "scrollSelectedItemIntoView", function () {
      // Do not access document when server side rendering
      if (!Object(__WEBPACK_IMPORTED_MODULE_24__lib__["t" /* isBrowser */])()) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "tryOpen", function () {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var minCharacters = _this.props.minCharacters;
      if (currentValue.length < minCharacters) return;

      _this.open();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "open", function () {
      _this.trySetState({
        open: true
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "close", function () {
      _this.trySetState({
        open: false
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderSearchInput", function (rest) {
      var _this$props2 = _this.props,
          icon = _this$props2.icon,
          input = _this$props2.input;
      var value = _this.state.value;
      return __WEBPACK_IMPORTED_MODULE_25__elements_Input__["a" /* default */].create(input, {
        autoGenerateKey: false,
        defaultProps: __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, rest, {
          icon: icon,
          input: {
            className: 'prompt',
            tabIndex: '0',
            autoComplete: 'off'
          },
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          value: value
        })
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderNoResults", function () {
      var _this$props3 = _this.props,
          noResultsDescription = _this$props3.noResultsDescription,
          noResultsMessage = _this$props3.noResultsMessage;
      return __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement("div", {
        className: "message empty"
      }, __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement("div", {
        className: "header"
      }, noResultsMessage), noResultsDescription && __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement("div", {
        className: "description"
      }, noResultsDescription));
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderResult", function (_ref2, index, _array) {
      var childKey = _ref2.childKey,
          result = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ["childKey"]);

      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;
      var offsetIndex = index + offset;
      return __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__SearchResult__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click

      }));
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderResults", function () {
      var results = _this.props.results;
      return __WEBPACK_IMPORTED_MODULE_15_lodash_map___default()(results, _this.renderResult);
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderCategories", function () {
      var _this$props4 = _this.props,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;
      var count = 0;
      return __WEBPACK_IMPORTED_MODULE_15_lodash_map___default()(categories, function (_ref3) {
        var childKey = _ref3.childKey,
            category = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ["childKey"]);

        var categoryProps = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({
          key: childKey || category.name,
          active: __WEBPACK_IMPORTED_MODULE_14_lodash_inRange___default()(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);

        var renderFn = __WEBPACK_IMPORTED_MODULE_13_lodash_partialRight___default()(_this.renderResult, count);

        count += category.results.length;
        return __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__SearchCategory__["a" /* default */], categoryProps, category.results.map(renderFn));
      });
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderMenuContent", function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;

      if (__WEBPACK_IMPORTED_MODULE_12_lodash_isEmpty___default()(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    });

    __WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_10__babel_runtime_helpers_assertThisInitialized___default()(_this)), "renderResultsMenu", function () {
      var open = _this.state.open;
      var resultsClasses = open ? 'visible' : '';

      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;
      return __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__SearchResults__["a" /* default */], {
        className: resultsClasses
      }, menuContent);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_createClass___default()(Search, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_getPrototypeOf___default()(Search.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      if (!Object(__WEBPACK_IMPORTED_MODULE_24__lib__["z" /* shallowEqual */])(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !Object(__WEBPACK_IMPORTED_MODULE_24__lib__["z" /* shallowEqual */])(nextProps, this.props) || !Object(__WEBPACK_IMPORTED_MODULE_24__lib__["z" /* shallowEqual */])(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          this.tryOpen();
        }

        if (this.state.open) {
          __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }
      } else if (prevState.focus && !this.state.focus) {
        if (!this.isMouseDown) {
          this.close();
        }

        __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      } // opened / closed


      if (!prevState.open && this.state.open) {
        this.open();
        __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].sub('click', this.closeOnDocumentClick);
        __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].sub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      } else if (prevState.open && !this.state.open) {
        this.close();
        __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('click', this.closeOnDocumentClick);
        __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('click', this.closeOnDocumentClick);
      __WEBPACK_IMPORTED_MODULE_24__lib__["o" /* eventStack */].unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          searchClasses = _this$state2.searchClasses,
          focus = _this$state2.focus,
          open = _this$state2.open;
      var _this$props6 = this.props,
          aligned = _this$props6.aligned,
          category = _this$props6.category,
          className = _this$props6.className,
          fluid = _this$props6.fluid,
          loading = _this$props6.loading,
          size = _this$props6.size; // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_20_classnames___default()('ui', open && 'active visible', size, searchClasses, Object(__WEBPACK_IMPORTED_MODULE_24__lib__["A" /* useKeyOnly */])(category, 'category'), Object(__WEBPACK_IMPORTED_MODULE_24__lib__["A" /* useKeyOnly */])(focus, 'focus'), Object(__WEBPACK_IMPORTED_MODULE_24__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_24__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_24__lib__["E" /* useValueAndKey */])(aligned, 'aligned'), 'search', className);
      var unhandled = Object(__WEBPACK_IMPORTED_MODULE_24__lib__["r" /* getUnhandledProps */])(Search, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_24__lib__["q" /* getElementType */])(Search, this.props);

      var _partitionHTMLProps = Object(__WEBPACK_IMPORTED_MODULE_24__lib__["y" /* partitionHTMLProps */])(unhandled, {
        htmlProps: __WEBPACK_IMPORTED_MODULE_24__lib__["s" /* htmlInputAttrs */]
      }),
          _partitionHTMLProps2 = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_slicedToArray___default()(_partitionHTMLProps, 2),
          htmlInputProps = _partitionHTMLProps2[0],
          rest = _partitionHTMLProps2[1];

      return __WEBPACK_IMPORTED_MODULE_23_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onMouseDown: this.handleMouseDown
      }), this.renderSearchInput(htmlInputProps), this.renderResultsMenu());
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_24__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "defaultProps", {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
});

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "autoControlledProps", ['open', 'value']);

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "Category", __WEBPACK_IMPORTED_MODULE_26__SearchCategory__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "Result", __WEBPACK_IMPORTED_MODULE_27__SearchResult__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "Results", __WEBPACK_IMPORTED_MODULE_28__SearchResults__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_11__babel_runtime_helpers_defineProperty___default()(Search, "handledProps", ["aligned", "as", "category", "categoryRenderer", "className", "defaultOpen", "defaultValue", "fluid", "icon", "input", "loading", "minCharacters", "noResultsDescription", "noResultsMessage", "onBlur", "onFocus", "onMouseDown", "onResultSelect", "onSearchChange", "onSelectionChange", "open", "resultRenderer", "results", "selectFirstResult", "showNoResults", "size", "value"]);


Search.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_24__lib__["m" /* customPropTypes */].as,
  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** Initial value. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.object]),

  /** Minimum characters to query for results */
  minCharacters: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.node,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.node,

  /** Controls whether or not the results menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_27__SearchResult__["a" /* default */].propTypes)), __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_26__SearchCategory__["a" /* default */].propTypes)]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.string,
  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,
  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.func,
  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.string,

  /** A search can display results from remote content ordered by categories. */
  category: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.string,

  /** A search can have its results take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** A search input can take up the width of its container. */
  input: __WEBPACK_IMPORTED_MODULE_24__lib__["m" /* customPropTypes */].itemShorthand,

  /** A search can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.bool,

  /** A search can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_22_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_19_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_24__lib__["b" /* SUI */].SIZES, 'medium'))
} : {};

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__semantic_ui_react_event_stack__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__semantic_ui_react_event_stack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__semantic_ui_react_event_stack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__addons_Ref__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__SidebarPushable__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__SidebarPusher__ = __webpack_require__(704);


















/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Sidebar, _Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "state", {});

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleAnimationStart", function () {
      var _this$props = _this.props,
          duration = _this$props.duration,
          visible = _this$props.visible;
      var callback = visible ? 'onVisible' : 'onHide';

      _this.setState({
        animating: true
      }, function () {
        clearTimeout(_this.animationTimer);
        _this.animationTimer = setTimeout(_this.handleAnimationEnd, duration);

        if (_this.skipNextCallback) {
          _this.skipNextCallback = false;
          return;
        }

        __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, callback, null, _this.props);
      });
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleAnimationEnd", function () {
      var visible = _this.props.visible;
      var callback = visible ? 'onShow' : 'onHidden';

      _this.setState({
        animating: false
      });

      __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, callback, null, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleDocumentClick", function (e) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_15__lib__["n" /* doesNodeContainClick */])(_this.ref, e)) {
        _this.skipNextCallback = true;

        __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onHide', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
          visible: false
        }));
      }
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return _this.ref = c;
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Sidebar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevVisible = prevProps.visible;
      var currentVisible = this.props.visible;
      if (prevVisible !== currentVisible) this.handleAnimationStart();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.animationTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          animation = _this$props2.animation,
          className = _this$props2.className,
          children = _this$props2.children,
          content = _this$props2.content,
          direction = _this$props2.direction,
          target = _this$props2.target,
          visible = _this$props2.visible,
          width = _this$props2.width;
      var animating = this.state.animating;
      var classes = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ui', animation, direction, width, Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(animating, 'animating'), Object(__WEBPACK_IMPORTED_MODULE_15__lib__["A" /* useKeyOnly */])(visible, 'visible'), 'sidebar', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["r" /* getUnhandledProps */])(Sidebar, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_15__lib__["q" /* getElementType */])(Sidebar, this.props);
      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__addons_Ref__["a" /* default */], {
        innerRef: this.handleRef
      }, __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), __WEBPACK_IMPORTED_MODULE_15__lib__["c" /* childrenUtils */].isNil(children) ? content : children, visible && __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__semantic_ui_react_event_stack___default.a, {
        name: "click",
        on: this.handleDocumentClick,
        target: target
      })));
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Sidebar, "defaultProps", {
  direction: 'left',
  duration: 500
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Sidebar, "autoControlledProps", ['visible']);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Sidebar, "Pushable", __WEBPACK_IMPORTED_MODULE_16__SidebarPushable__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Sidebar, "Pusher", __WEBPACK_IMPORTED_MODULE_17__SidebarPusher__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Sidebar, "handledProps", ["animation", "as", "children", "className", "content", "direction", "duration", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"]);

Sidebar.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].as,

  /** Animation style. */
  animation: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_15__lib__["m" /* customPropTypes */].contentShorthand,

  /** Direction the sidebar should appear on. */
  direction: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /** Duration of sidebar animation. */
  duration: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /** A sidebar can handle clicks on the passed element. */
  target: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.object,

  /** Controls whether or not the sidebar is visible on the page. */
  visible: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Sidebar width. */
  width: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticky; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);













/**
 * Sticky content stays fixed to the browser viewport while another column of content is visible on the page.
 */

var Sticky =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Sticky, _Component);

  function Sticky() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Sticky);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Sticky)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "state", {
      sticky: false
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "addListeners", function (props) {
      var scrollContext = props.scrollContext;

      if (scrollContext) {
        __WEBPACK_IMPORTED_MODULE_12__lib__["o" /* eventStack */].sub('resize', _this.handleUpdate, {
          target: scrollContext
        });
        __WEBPACK_IMPORTED_MODULE_12__lib__["o" /* eventStack */].sub('scroll', _this.handleUpdate, {
          target: scrollContext
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "removeListeners", function () {
      var scrollContext = _this.props.scrollContext;

      if (scrollContext) {
        __WEBPACK_IMPORTED_MODULE_12__lib__["o" /* eventStack */].unsub('resize', _this.handleUpdate, {
          target: scrollContext
        });
        __WEBPACK_IMPORTED_MODULE_12__lib__["o" /* eventStack */].unsub('scroll', _this.handleUpdate, {
          target: scrollContext
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "update", function (e) {
      var pushing = _this.state.pushing;
      _this.ticking = false;

      _this.assignRects();

      if (pushing) {
        if (_this.didReachStartingPoint()) return _this.stickToContextTop(e);
        if (_this.didTouchScreenBottom()) return _this.stickToScreenBottom(e);
        return _this.stickToContextBottom(e);
      }

      if (_this.isOversized()) {
        if (_this.contextRect.top > 0) return _this.stickToContextTop(e);
        if (_this.contextRect.bottom < window.innerHeight) return _this.stickToContextBottom(e);
      }

      if (_this.didTouchScreenTop()) {
        if (_this.didReachContextBottom()) return _this.stickToContextBottom(e);
        return _this.stickToScreenTop(e);
      }

      return _this.stickToContextTop(e);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleUpdate", function (e) {
      if (!_this.ticking) {
        _this.ticking = true;
        _this.frameId = requestAnimationFrame(function () {
          return _this.update(e);
        });
      }
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "assignRects", function () {
      var context = _this.props.context;
      _this.triggerRect = _this.triggerRef.getBoundingClientRect();
      _this.contextRect = (context || document.body).getBoundingClientRect();
      _this.stickyRect = _this.stickyRef.getBoundingClientRect();
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "didReachContextBottom", function () {
      var offset = _this.props.offset;
      return _this.stickyRect.height + offset >= _this.contextRect.bottom;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "didReachStartingPoint", function () {
      return _this.stickyRect.top <= _this.triggerRect.top;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "didTouchScreenTop", function () {
      return _this.triggerRect.top < _this.props.offset;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "didTouchScreenBottom", function () {
      var bottomOffset = _this.props.bottomOffset;
      return _this.contextRect.bottom + bottomOffset > window.innerHeight;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "isOversized", function () {
      return _this.stickyRect.height > window.innerHeight;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "pushing", function (pushing) {
      var possible = _this.props.pushing;
      if (possible) _this.setState({
        pushing: pushing
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "stick", function (e, bound) {
      _this.setState({
        bound: bound,
        sticky: true
      });

      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onStick', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "unstick", function (e, bound) {
      _this.setState({
        bound: bound,
        sticky: false
      });

      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onUnstick', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "stickToContextBottom", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onBottom', e, _this.props);

      _this.stick(e, true);

      _this.pushing(true);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "stickToContextTop", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onTop', e, _this.props);

      _this.unstick(e, false);

      _this.pushing(false);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "stickToScreenBottom", function (e) {
      var bottom = _this.props.bottomOffset;

      _this.stick(e, false);

      _this.setState({
        bottom: bottom,
        top: null
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "stickToScreenTop", function (e) {
      var top = _this.props.offset;

      _this.stick(e, false);

      _this.setState({
        top: top,
        bottom: null
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleStickyRef", function (c) {
      return _this.stickyRef = c;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleTriggerRef", function (c) {
      return _this.triggerRef = c;
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Sticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!Object(__WEBPACK_IMPORTED_MODULE_12__lib__["t" /* isBrowser */])()) return;
      var active = this.props.active;

      if (active) {
        this.handleUpdate();
        this.addListeners(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          current = _this$props.active,
          currentScrollContext = _this$props.scrollContext;
      var next = nextProps.active,
          nextScrollContext = nextProps.scrollContext;

      if (current === next) {
        if (currentScrollContext !== nextScrollContext) {
          this.removeListeners();
          this.addListeners(nextProps);
        }

        return;
      }

      if (next) {
        this.handleUpdate();
        this.addListeners(nextProps);
        return;
      }

      this.removeListeners();
      this.setState({
        sticky: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!Object(__WEBPACK_IMPORTED_MODULE_12__lib__["t" /* isBrowser */])()) return;
      var active = this.props.active;

      if (active) {
        this.removeListeners();
        cancelAnimationFrame(this.frameId);
      }
    } // ----------------------------------------
    // Events
    // ----------------------------------------

  }, {
    key: "computeStyle",
    value: function computeStyle() {
      var _this$state = this.state,
          bottom = _this$state.bottom,
          bound = _this$state.bound,
          sticky = _this$state.sticky,
          top = _this$state.top;
      if (!sticky) return {};
      return {
        bottom: bound ? 0 : bottom,
        top: bound ? undefined : top,
        width: this.triggerRect.width
      };
    } // Return true when the component reached the bottom of the context

  }, {
    key: "render",
    // ----------------------------------------
    // Render
    // ----------------------------------------
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className;
      var _this$state2 = this.state,
          bottom = _this$state2.bottom,
          bound = _this$state2.bound,
          sticky = _this$state2.sticky;
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(Sticky, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(Sticky, this.props);
      var containerClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(sticky && 'ui', sticky && 'stuck-container', sticky && (bound ? 'bound-container' : 'fixed-container'), className);
      var elementClasses = __WEBPACK_IMPORTED_MODULE_9_classnames___default()('ui', sticky && (bound ? 'bound bottom' : 'fixed'), sticky && !bound && (bottom === null ? 'top' : 'bottom'), 'sticky');
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: containerClasses
      }), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        ref: this.handleTriggerRef
      }), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(elementClasses),
        ref: this.handleStickyRef,
        style: this.computeStyle()
      }, children));
    }
  }]);

  return Sticky;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Sticky, "defaultProps", {
  active: true,
  bottomOffset: 0,
  offset: 0,
  scrollContext: Object(__WEBPACK_IMPORTED_MODULE_12__lib__["t" /* isBrowser */])() ? window : null
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Sticky, "handledProps", ["active", "as", "bottomOffset", "children", "className", "context", "offset", "onBottom", "onStick", "onTop", "onUnstick", "pushing", "scrollContext"]);


Sticky.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** A Sticky can be active. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Context which sticky element should stick to. */
  context: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.object,

  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number,

  /**
   * Callback when element is bound to bottom of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBottom: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback when element is fixed to page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onStick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback when element is bound to top of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onTop: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback when element is unfixed from page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onUnstick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
  pushing: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Context which sticky should attach onscroll events. */
  scrollContext: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.object
} : {};

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An ad displays third-party promotional content.
 */

function Advertisement(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      content = props.content,
      test = props.test,
      unit = props.unit;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', unit, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(test, 'test'), 'ad', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Advertisement, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Advertisement, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes,
    "data-text": test
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Advertisement.handledProps = ["as", "centered", "children", "className", "content", "test", "unit"];
Advertisement.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Center the advertisement. */
  centered: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Text to be displayed on the advertisement. */
  test: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),

  /** Varies the size of the advertisement. */
  unit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['medium rectangle', 'large rectangle', 'vertical rectangle', 'small rectangle', 'mobile banner', 'banner', 'vertical banner', 'top banner', 'half banner', 'button', 'square button', 'small button', 'skyscraper', 'wide skyscraper', 'leaderboard', 'large leaderboard', 'mobile leaderboard', 'billboard', 'panorama', 'netboard', 'half page', 'square', 'small square']).isRequired
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Advertisement);

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CommentAction__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CommentActions__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CommentAuthor__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CommentAvatar__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CommentContent__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CommentGroup__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CommentMetadata__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CommentText__ = __webpack_require__(716);













/**
 * A comment displays user feedback to site content.
 */

function Comment(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(collapsed, 'collapsed'), 'comment', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Comment, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Comment, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Comment.handledProps = ["as", "children", "className", "collapsed", "content"];
Comment.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
Comment.Author = __WEBPACK_IMPORTED_MODULE_7__CommentAuthor__["a" /* default */];
Comment.Action = __WEBPACK_IMPORTED_MODULE_5__CommentAction__["a" /* default */];
Comment.Actions = __WEBPACK_IMPORTED_MODULE_6__CommentActions__["a" /* default */];
Comment.Avatar = __WEBPACK_IMPORTED_MODULE_8__CommentAvatar__["a" /* default */];
Comment.Content = __WEBPACK_IMPORTED_MODULE_9__CommentContent__["a" /* default */];
Comment.Group = __WEBPACK_IMPORTED_MODULE_10__CommentGroup__["a" /* default */];
Comment.Metadata = __WEBPACK_IMPORTED_MODULE_11__CommentMetadata__["a" /* default */];
Comment.Text = __WEBPACK_IMPORTED_MODULE_12__CommentText__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Comment);

/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FeedContent__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FeedDate__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FeedEvent__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FeedExtra__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FeedLabel__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FeedLike__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FeedMeta__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FeedSummary__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FeedUser__ = __webpack_require__(528);

















/**
 * A feed presents user activity chronologically.
 */

function Feed(props) {
  var children = props.children,
      className = props.className,
      events = props.events,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()('ui', size, 'feed', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_7__lib__["r" /* getUnhandledProps */])(Feed, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_7__lib__["q" /* getElementType */])(Feed, props);

  if (!__WEBPACK_IMPORTED_MODULE_7__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  var eventElements = __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(events, function (eventProps) {
    var childKey = eventProps.childKey,
        date = eventProps.date,
        meta = eventProps.meta,
        summary = eventProps.summary,
        eventData = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(eventProps, ["childKey", "date", "meta", "summary"]);

    var finalKey = childKey || [date, meta, summary].join('-');
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__FeedEvent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({
      date: date,
      key: finalKey,
      meta: meta,
      summary: summary
    }, eventData));
  });

  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), eventElements);
}

Feed.handledProps = ["as", "children", "className", "events", "size"];
Feed.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /** Shorthand array of props for FeedEvent. */
  events: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A feed can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_2_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_7__lib__["b" /* SUI */].SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'))
} : {};
Feed.Content = __WEBPACK_IMPORTED_MODULE_8__FeedContent__["a" /* default */];
Feed.Date = __WEBPACK_IMPORTED_MODULE_9__FeedDate__["a" /* default */];
Feed.Event = __WEBPACK_IMPORTED_MODULE_10__FeedEvent__["a" /* default */];
Feed.Extra = __WEBPACK_IMPORTED_MODULE_11__FeedExtra__["a" /* default */];
Feed.Label = __WEBPACK_IMPORTED_MODULE_12__FeedLabel__["a" /* default */];
Feed.Like = __WEBPACK_IMPORTED_MODULE_13__FeedLike__["a" /* default */];
Feed.Meta = __WEBPACK_IMPORTED_MODULE_14__FeedMeta__["a" /* default */];
Feed.Summary = __WEBPACK_IMPORTED_MODULE_15__FeedSummary__["a" /* default */];
Feed.User = __WEBPACK_IMPORTED_MODULE_16__FeedUser__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Feed);

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Checkbox__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addons_Radio__ = __webpack_require__(508);










/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */

function FormField(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width;
  var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_7__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_7__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_7__lib__["A" /* useKeyOnly */])(inline, 'inline'), Object(__WEBPACK_IMPORTED_MODULE_7__lib__["A" /* useKeyOnly */])(required, 'required'), Object(__WEBPACK_IMPORTED_MODULE_7__lib__["G" /* useWidthProp */])(width, 'wide'), 'field', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_7__lib__["r" /* getUnhandledProps */])(FormField, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_7__lib__["q" /* getElementType */])(FormField, props); // ----------------------------------------
  // No Control
  // ----------------------------------------

  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(control)) {
    if (__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(label)) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), __WEBPACK_IMPORTED_MODULE_7__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
    }

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), Object(__WEBPACK_IMPORTED_MODULE_7__lib__["h" /* createHTMLLabel */])(label, {
      autoGenerateKey: false
    }));
  } // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------


  var controlProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, rest, {
    content: content,
    children: children,
    disabled: disabled,
    required: required,
    type: type // wrap HTML checkboxes/radios in the label

  });

  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, {
      className: classes
    }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("label", null, Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])(control, controlProps), " ", label));
  } // pass label prop to controls that support it


  if (control === __WEBPACK_IMPORTED_MODULE_8__modules_Checkbox__["a" /* default */] || control === __WEBPACK_IMPORTED_MODULE_9__addons_Radio__["a" /* default */]) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, {
      className: classes
    }, Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])(control, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, controlProps, {
      label: label
    })));
  } // ----------------------------------------
  // Other Control
  // ----------------------------------------


  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(ElementType, {
    className: classes
  }, Object(__WEBPACK_IMPORTED_MODULE_7__lib__["h" /* createHTMLLabel */])(label, {
    defaultProps: {
      htmlFor: __WEBPACK_IMPORTED_MODULE_2_lodash_get___default()(controlProps, 'id')
    },
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])(control, controlProps));
}

FormField.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "inline", "label", "required", "type", "width"];
FormField.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].contentShorthand,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].some([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /** Individual fields may display an error state. */
  error: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /** A field can have its label next to instead of above it. */
  inline: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`

  /** Mutually exclusive with children. */
  label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),

  /** A field can show that input is mandatory. */
  required: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: __WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_7__lib__["m" /* customPropTypes */].demand(['control'])]),

  /** A field can specify its width in grid columns */
  width: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_7__lib__["b" /* SUI */].WIDTHS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FormField);

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__IconGroup__ = __webpack_require__(624);














/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */

var Icon =
/*#__PURE__*/
function (_PureComponent) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Icon, _PureComponent);

  function Icon() {
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Icon);

    return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Icon).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Icon, [{
    key: "getIconAriaOptions",
    value: function getIconAriaOptions() {
      var ariaOptions = {};
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaHidden = _this$props['aria-hidden'];

      if (__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default()(ariaLabel)) {
        ariaOptions['aria-hidden'] = 'true';
      } else {
        ariaOptions['aria-label'] = ariaLabel;
      }

      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default()(ariaHidden)) {
        ariaOptions['aria-hidden'] = ariaHidden;
      }

      return ariaOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          bordered = _this$props2.bordered,
          circular = _this$props2.circular,
          className = _this$props2.className,
          color = _this$props2.color,
          corner = _this$props2.corner,
          disabled = _this$props2.disabled,
          fitted = _this$props2.fitted,
          flipped = _this$props2.flipped,
          inverted = _this$props2.inverted,
          link = _this$props2.link,
          loading = _this$props2.loading,
          name = _this$props2.name,
          rotated = _this$props2.rotated,
          size = _this$props2.size;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(color, name, size, Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(bordered, 'bordered'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(corner, 'corner'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(fitted, 'fitted'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(link, 'link'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["E" /* useValueAndKey */])(flipped, 'flipped'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["E" /* useValueAndKey */])(rotated, 'rotated'), 'icon', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(Icon, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(Icon, this.props);
      var ariaOptions = this.getIconAriaOptions();
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
        className: classes
      }));
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_11_react__["PureComponent"]);

__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(Icon, "defaultProps", {
  as: 'i'
});

__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(Icon, "Group", __WEBPACK_IMPORTED_MODULE_13__IconGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_defineProperty___default()(Icon, "handledProps", ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"]);

Icon.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** Formatted to appear bordered. */
  bordered: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Icon can formatted to appear circular. */
  circular: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Color of the icon. */
  color: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_12__lib__["b" /* SUI */].COLORS),

  /** Icons can display a smaller corner icon. */
  corner: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Show that the icon is inactive. */
  disabled: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Icon can flipped. */
  flipped: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Icon can be formatted as a link. */
  link: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Icon can be used as a simple loader. */
  loading: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Name of the icon. */
  name: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].suggest(__WEBPACK_IMPORTED_MODULE_12__lib__["b" /* SUI */].ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_8_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_12__lib__["b" /* SUI */].SIZES, 'medium')),

  /** Icon can have an aria label. */
  'aria-hidden': __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Icon can have an aria label. */
  'aria-label': __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string
} : {};
Icon.create = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["l" /* createShorthandFactory */])(Icon, function (value) {
  return {
    name: value
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_Icon__ = __webpack_require__(405);







/**
 * A table row can have cells.
 */

function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(collapsing, 'collapsing'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(selectable, 'selectable'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(singleLine, 'single line'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["F" /* useVerticalAlignProp */])(verticalAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["G" /* useWidthProp */])(width, 'wide'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(TableCell, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(TableCell, props);

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_6__elements_Icon__["a" /* default */].create(icon), content);
}

TableCell.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
TableCell.defaultProps = {
  as: 'td'
};
TableCell.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** A cell can be active or selected by a user. */
  active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A cell can be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell may call attention to an error or a negative value. */
  error: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand,

  /** A cell may let a user know whether a value is bad. */
  negative: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell may let a user know whether a value is good. */
  positive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell can be selectable. */
  selectable: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A table cell can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified')),

  /** A table cell can adjust its text alignment. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS),

  /** A cell may warn a user. */
  warning: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A table can specify the width of individual columns independently. */
  width: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].WIDTHS)
} : {};
TableCell.create = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["l" /* createShorthandFactory */])(TableCell, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (TableCell);

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A list item can contain a description.
 */

function ListDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'description');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ListDescription, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ListDescription, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ListDescription.handledProps = ["as", "children", "className", "content"];
ListDescription.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ListDescription.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ListDescription, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ListDescription);

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A list item can contain a header.
 */

function ListHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ListHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ListHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ListHeader.handledProps = ["as", "children", "className", "content"];
ListHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ListHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ListHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ListHeader);

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An event or an event summary can contain a date.
 */

function FeedDate(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('date', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedDate, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedDate, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

FeedDate.handledProps = ["as", "children", "className", "content"];
FeedDate.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedDate);

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Icon_Icon__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Label_Label__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ButtonContent__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ButtonGroup__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ButtonOr__ = __webpack_require__(635);




















/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeElementType", function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;
      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default()(attached) || !__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default()(label)) return 'div';
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeTabIndex", function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default()(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "focus", function () {
      return __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.ref, 'focus');
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
        return;
      }

      __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return _this.ref = c;
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "hasIconClass", function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;
      if (icon === true) return true;
      return icon && (labelPosition || __WEBPACK_IMPORTED_MODULE_14__lib__["c" /* childrenUtils */].isNil(children) && __WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default()(content));
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Button, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          active = _this$props4.active,
          animated = _this$props4.animated,
          attached = _this$props4.attached,
          basic = _this$props4.basic,
          children = _this$props4.children,
          circular = _this$props4.circular,
          className = _this$props4.className,
          color = _this$props4.color,
          compact = _this$props4.compact,
          content = _this$props4.content,
          disabled = _this$props4.disabled,
          floated = _this$props4.floated,
          fluid = _this$props4.fluid,
          icon = _this$props4.icon,
          inverted = _this$props4.inverted,
          label = _this$props4.label,
          labelPosition = _this$props4.labelPosition,
          loading = _this$props4.loading,
          negative = _this$props4.negative,
          positive = _this$props4.positive,
          primary = _this$props4.primary,
          secondary = _this$props4.secondary,
          role = _this$props4.role,
          size = _this$props4.size,
          toggle = _this$props4.toggle;
      var baseClasses = __WEBPACK_IMPORTED_MODULE_11_classnames___default()(color, size, Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(this.hasIconClass(), 'icon'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(primary, 'primary'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(secondary, 'secondary'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(toggle, 'toggle'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(animated, 'animated'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'));
      var labeledClasses = __WEBPACK_IMPORTED_MODULE_11_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(labelPosition || !!label, 'labeled'));
      var wrapperClasses = __WEBPACK_IMPORTED_MODULE_11_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["E" /* useValueAndKey */])(floated, 'floated'));
      var rest = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["r" /* getUnhandledProps */])(Button, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["q" /* getElementType */])(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default()(label)) {
        var buttonClasses = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ui', baseClasses, 'button', className);
        var containerClasses = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = __WEBPACK_IMPORTED_MODULE_16__Label_Label__["a" /* default */].create(label, {
          defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          },
          autoGenerateKey: false
        });
        return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
          className: containerClasses,
          onClick: this.handleClick
        }), labelPosition === 'left' && labelElement, __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("button", {
          className: buttonClasses,
          disabled: disabled,
          ref: this.handleRef,
          tabIndex: tabIndex
        }, __WEBPACK_IMPORTED_MODULE_15__Icon_Icon__["a" /* default */].create(icon, {
          autoGenerateKey: false
        }), " ", content), (labelPosition === 'right' || !labelPosition) && labelElement);
      }

      var classes = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !__WEBPACK_IMPORTED_MODULE_14__lib__["c" /* childrenUtils */].isNil(children);
      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        disabled: disabled && ElementType === 'button' || undefined,
        onClick: this.handleClick,
        ref: this.handleRef,
        role: role,
        tabIndex: tabIndex
      }), hasChildren && children, !hasChildren && __WEBPACK_IMPORTED_MODULE_15__Icon_Icon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), !hasChildren && content);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Button, "defaultProps", {
  as: 'button',
  role: 'button'
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Button, "Content", __WEBPACK_IMPORTED_MODULE_17__ButtonContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Button, "Group", __WEBPACK_IMPORTED_MODULE_18__ButtonGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Button, "Or", __WEBPACK_IMPORTED_MODULE_19__ButtonOr__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(Button, "handledProps", ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"]);

Button.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].as,

  /** A button can show it is currently the active user selection. */
  active: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A button can animate to show hidden content. */
  animated: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to other content. */
  attached: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** A basic button is less pronounced. */
  basic: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].disallow(['label']), __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].givenProps({
    icon: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string.isRequired, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.object.isRequired, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.element.isRequired])
  }, __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].disallow(['icon']))]),

  /** A button can be circular. */
  circular: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** A button can have different colors */
  color: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].COLORS).concat(['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].FLOATS),

  /** A button can take the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].some([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].some([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A button can hint towards a negative consequence. */
  negative: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /** A button can hint towards a positive consequence. */
  positive: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** The role of the HTML element. */
  role: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A button can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].SIZES),

  /** A button can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool
} : {};
Button.create = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["l" /* createShorthandFactory */])(Button, function (value) {
  return {
    content: value
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isUndefined__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Image_Image__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__LabelDetail__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__LabelGroup__ = __webpack_require__(632);


















/**
 * A label displays content classification.
 */

var Label =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Label, _Component);

  function Label() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Label);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Label)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleIconOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(predefinedProps, 'onClick', e);

          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onRemove', e, _this.props);
        }
      };
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          attached = _this$props.attached,
          basic = _this$props.basic,
          children = _this$props.children,
          circular = _this$props.circular,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          corner = _this$props.corner,
          detail = _this$props.detail,
          empty = _this$props.empty,
          floating = _this$props.floating,
          horizontal = _this$props.horizontal,
          icon = _this$props.icon,
          image = _this$props.image,
          onRemove = _this$props.onRemove,
          pointing = _this$props.pointing,
          removeIcon = _this$props.removeIcon,
          ribbon = _this$props.ribbon,
          size = _this$props.size,
          tag = _this$props.tag;
      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && "".concat(pointing, " pointing") || (pointing === 'above' || pointing === 'below') && "pointing ".concat(pointing);
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('ui', color, pointingClass, size, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(empty, 'empty'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(image === true, 'image'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(tag, 'tag'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["B" /* useKeyOrValueAndKey */])(corner, 'corner'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["B" /* useKeyOrValueAndKey */])(ribbon, 'ribbon'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["E" /* useValueAndKey */])(attached, 'attached'), 'label', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(Label, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(Label, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var removeIconShorthand = __WEBPACK_IMPORTED_MODULE_8_lodash_isUndefined___default()(removeIcon) ? 'delete' : removeIcon;
      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
        className: classes,
        onClick: this.handleClick
      }, rest), __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), typeof image !== 'boolean' && __WEBPACK_IMPORTED_MODULE_15__Image_Image__["a" /* default */].create(image, {
        autoGenerateKey: false
      }), content, __WEBPACK_IMPORTED_MODULE_16__LabelDetail__["a" /* default */].create(detail, {
        autoGenerateKey: false
      }), onRemove && __WEBPACK_IMPORTED_MODULE_14__Icon_Icon__["a" /* default */].create(removeIconShorthand, {
        autoGenerateKey: false,
        overrideProps: this.handleIconOverrides
      }));
    }
  }]);

  return Label;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Label, "Detail", __WEBPACK_IMPORTED_MODULE_16__LabelDetail__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Label, "Group", __WEBPACK_IMPORTED_MODULE_17__LabelGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Label, "handledProps", ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "removeIcon", "ribbon", "size", "tag"]);


Label.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** A label can be active. */
  active: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A label can attach to a content segment. */
  attached: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

  /** A label can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** A label can be circular. */
  circular: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Color of the label. */
  color: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['left', 'right'])]),

  /** Shorthand for LabelDetail. */
  detail: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** Formats the label as a dot. */
  empty: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].demand(['circular'])]),

  /** Float above another element in the upper right corner. */
  floating: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A label can point to content next to it. */
  pointing: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['above', 'below', 'left', 'right'])]),

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['right'])]),

  /** A label can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].SIZES),

  /** A label can appear as a tag. */
  tag: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool
} : {};
Label.create = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["l" /* createShorthandFactory */])(Label, function (value) {
  return {
    content: value
  };
});

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_startCase__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Icon__ = __webpack_require__(405);















/**
 * A menu can contain an item.
 */

var MenuItem =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(MenuItem, _Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          disabled = _this$props.disabled,
          fitted = _this$props.fitted,
          header = _this$props.header,
          icon = _this$props.icon,
          link = _this$props.link,
          name = _this$props.name,
          onClick = _this$props.onClick,
          position = _this$props.position;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(color, position, Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(icon === true || icon && !(name || content), 'icon'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(header, 'header'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(link, 'link'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["B" /* useKeyOrValueAndKey */])(fitted, 'fitted'), 'item', className);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(MenuItem, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_14__elements_Icon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(content) ? __WEBPACK_IMPORTED_MODULE_8_lodash_startCase___default()(name) : content);
    }
  }]);

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(MenuItem, "handledProps", ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"]);


MenuItem.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** A menu item can be active. */
  active: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Additional colors can be specified. */
  color: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_13__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /** A menu item can be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['horizontally', 'vertically'])]),

  /** A menu item may include a header or may itself be a header. */
  header: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** MenuItem can be only icon. */
  icon: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand]),

  /** MenuItem index inside Menu. */
  index: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.number,

  /** A menu item can be link. */
  link: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Internal name of the MenuItem. */
  name: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A menu item can take left or right position. */
  position: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOf(['left', 'right'])
} : {};
MenuItem.create = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["l" /* createShorthandFactory */])(MenuItem, function (val) {
  return {
    content: val,
    name: val
  };
});

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A column sub-component for Grid.
 */

function GridColumn(props) {
  var children = props.children,
      className = props.className,
      computer = props.computer,
      color = props.color,
      floated = props.floated,
      largeScreen = props.largeScreen,
      mobile = props.mobile,
      only = props.only,
      stretched = props.stretched,
      tablet = props.tablet,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      widescreen = props.widescreen,
      width = props.width;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(color, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(stretched, 'stretched'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["C" /* useMultipleProp */])(only, 'only'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["F" /* useVerticalAlignProp */])(verticalAlign), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(computer, 'wide computer'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(largeScreen, 'wide large screen'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(mobile, 'wide mobile'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(tablet, 'wide tablet'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(widescreen, 'wide widescreen'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["G" /* useWidthProp */])(width, 'wide'), 'column', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(GridColumn, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(GridColumn, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), children);
}

GridColumn.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
GridColumn.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A grid column can be colored. */
  color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].COLORS),

  /** A column can specify a width for a computer. */
  computer: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['width']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)]),

  /** A column can sit flush against the left or right edge of a row. */
  floated: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].FLOATS),

  /** A column can specify a width for a large screen device. */
  largeScreen: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['width']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)]),

  /** A column can specify a width for a mobile device. */
  mobile: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['width']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)]),

  /** A column can appear only for a specific device, or screen sizes. */
  only: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].multipleProp(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].VISIBILITY),

  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A column can specify a width for a tablet device. */
  tablet: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['width']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)]),

  /** A column can specify its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].TEXT_ALIGNMENTS),

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS),

  /** A column can specify a width for a wide screen device. */
  widescreen: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['width']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)]),

  /** Represents width of column. */
  width: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['computer', 'largeScreen', 'mobile', 'tablet', 'widescreen']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].WIDTHS)])
} : {};
GridColumn.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(GridColumn, function (children) {
  return {
    children: children
  };
});
/* harmony default export */ __webpack_exports__["a"] = (GridColumn);

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A message list can contain an item.
 */

function MessageItem(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(MessageItem, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(MessageItem, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

MessageItem.handledProps = ["as", "children", "className", "content"];
MessageItem.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
MessageItem.defaultProps = {
  as: 'li'
};
MessageItem.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(MessageItem, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (MessageItem);

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A table can have a header.
 */

function TableHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      fullWidth = props.fullWidth;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(fullWidth, 'full-width'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(TableHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(TableHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

TableHeader.handledProps = ["as", "children", "className", "content", "fullWidth"];
TableHeader.defaultProps = {
  as: 'thead'
};
TableHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (TableHeader);

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ListDescription__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListHeader__ = __webpack_require__(473);







/**
 * A list item can contain a content.
 */

function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["F" /* useVerticalAlignProp */])(verticalAlign), 'content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ListContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ListContent, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_6__ListHeader__["a" /* default */].create(header), __WEBPACK_IMPORTED_MODULE_5__ListDescription__["a" /* default */].create(description), content);
}

ListContent.handledProps = ["as", "children", "className", "content", "description", "floated", "header", "verticalAlign"];
ListContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for ListDescription. */
  description: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** An list content can be floated left or right. */
  floated: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].FLOATS),

  /** Shorthand for ListHeader. */
  header: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
ListContent.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ListContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ListContent);

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Icon__ = __webpack_require__(466);






/**
 * A list item can contain an icon.
 */

function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["F" /* useVerticalAlignProp */])(verticalAlign), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ListIcon, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icon_Icon__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }));
}

ListIcon.handledProps = ["className", "verticalAlign"];
ListIcon.propTypes =  true ? {
  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
ListIcon.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ListIcon, function (name) {
  return {
    name: name
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ListIcon);

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);






function StepDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('description', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(StepDescription, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(StepDescription, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

StepDescription.handledProps = ["as", "children", "className", "content"];
StepDescription.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
StepDescription.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(StepDescription, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (StepDescription);

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A step can contain a title.
 */

function StepTitle(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('title', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(StepTitle, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(StepTitle, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

StepTitle.handledProps = ["as", "children", "className", "content"];
StepTitle.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
StepTitle.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(StepTitle, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (StepTitle);

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Icon__ = __webpack_require__(405);















/**
 * A title sub-component for Accordion component.
 */

var AccordionTitle =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(AccordionTitle, _Component);

  function AccordionTitle() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, AccordionTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(AccordionTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      return __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(AccordionTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(active, 'active'), 'title', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(AccordionTitle, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(AccordionTitle, this.props);

      if (__WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(content)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__elements_Icon__["a" /* default */], {
        name: "dropdown"
      }), content);
    }
  }]);

  return AccordionTitle;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(AccordionTitle, "handledProps", ["active", "as", "children", "className", "content", "index", "onClick"]);


AccordionTitle.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** Whether or not the title is in the open state. */
  active: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /** AccordionTitle index inside Accordion. */
  index: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.number]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func
} : {};
AccordionTitle.create = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["l" /* createShorthandFactory */])(AccordionTitle, function (content) {
  return {
    content: content
  };
});

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A content sub-component for Accordion component.
 */

function AccordionContent(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(AccordionContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(AccordionContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

AccordionContent.handledProps = ["active", "as", "children", "className", "content"];
AccordionContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Whether or not the content is visible. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
AccordionContent.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(AccordionContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (AccordionContent);

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A card can contain a description with one or more paragraphs.
 */

function CardDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), 'description', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(CardDescription, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(CardDescription, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CardDescription.handledProps = ["as", "children", "className", "content", "textAlign"];
CardDescription.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A card content can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CardDescription);

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A card can contain a header.
 */

function CardHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), 'header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(CardHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(CardHeader, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CardHeader.handledProps = ["as", "children", "className", "content", "textAlign"];
CardHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A card header can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CardHeader);

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A card can contain content metadata.
 */

function CardMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), 'meta', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(CardMeta, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(CardMeta, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CardMeta.handledProps = ["as", "children", "className", "content", "textAlign"];
CardMeta.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A card meta can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CardMeta);

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FeedDate__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FeedExtra__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FeedMeta__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FeedSummary__ = __webpack_require__(527);










function FeedContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      extraImages = props.extraImages,
      extraText = props.extraText,
      date = props.date,
      meta = props.meta,
      summary = props.summary;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedContent, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_5__FeedDate__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_8__FeedSummary__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, summary, {
    autoGenerateKey: false
  }), content, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__FeedExtra__["a" /* default */], function (val) {
    return {
      text: true,
      content: val
    };
  }, extraText, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__FeedExtra__["a" /* default */], function (val) {
    return {
      images: val
    };
  }, extraImages, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_7__FeedMeta__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }));
}

FeedContent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "meta", "summary"];
FeedContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** An event can contain a date. */
  date: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: __WEBPACK_IMPORTED_MODULE_6__FeedExtra__["a" /* default */].propTypes.images,

  /** Shorthand for FeedExtra with text. */
  extraText: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedContent);

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A feed can contain an extra content.
 */

function FeedExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      images = props.images,
      text = props.text;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(images, 'images'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(content || text, 'text'), 'extra', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(FeedExtra, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(FeedExtra, props);

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  } // TODO need a "collection factory" to handle creating multiple image elements and their keys


  var imageElements = __WEBPACK_IMPORTED_MODULE_1_lodash_map___default()(images, function (image, index) {
    var key = [index, image].join('-');
    return Object(__WEBPACK_IMPORTED_MODULE_5__lib__["f" /* createHTMLImage */])(image, {
      key: key
    });
  });

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), content, imageElements);
}

FeedExtra.handledProps = ["as", "children", "className", "content", "images", "text"];
FeedExtra.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** An event can contain additional information like a set of images. */
  images: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].disallow(['text']), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].collectionShorthand])]),

  /** An event can contain additional text information. */
  text: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedExtra);

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FeedLike__ = __webpack_require__(526);






/**
 * A feed can contain a meta.
 */

function FeedMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      like = props.like;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('meta', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedMeta, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedMeta, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_5__FeedLike__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, like, {
    autoGenerateKey: false
  }), content);
}

FeedMeta.handledProps = ["as", "children", "className", "content", "like"];
FeedMeta.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for FeedLike. */
  like: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedMeta);

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(405);






/**
 * A feed can contain a like element.
 */

function FeedLike(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('like', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedLike, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedLike, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */].create(icon, {
    autoGenerateKey: false
  }), content);
}

FeedLike.handledProps = ["as", "children", "className", "content", "icon"];
FeedLike.defaultProps = {
  as: 'a'
};
FeedLike.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedLike);

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FeedDate__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FeedUser__ = __webpack_require__(528);







/**
 * A feed can contain a summary.
 */

function FeedSummary(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      date = props.date,
      user = props.user;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('summary', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedSummary, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedSummary, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__FeedUser__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, user, {
    autoGenerateKey: false
  }), content, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_5__FeedDate__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, date, {
    autoGenerateKey: false
  }));
}

FeedSummary.handledProps = ["as", "children", "className", "content", "date", "user"];
FeedSummary.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for FeedDate. */
  date: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedUser. */
  user: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedSummary);

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A feed can contain a user element.
 */

function FeedUser(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('user', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedUser, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedUser, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

FeedUser.handledProps = ["as", "children", "className", "content"];
FeedUser.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
FeedUser.defaultProps = {
  as: 'a'
};
/* harmony default export */ __webpack_exports__["a"] = (FeedUser);

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(405);






/**
 * An event can contain an image or icon label.
 */

function FeedLabel(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon,
      image = props.image;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('label', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedLabel, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedLabel, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), content, __WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */].create(icon, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["f" /* createHTMLImage */])(image));
}

FeedLabel.handledProps = ["as", "children", "className", "content", "icon", "image"];
FeedLabel.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** An event can contain icon label. */
  icon: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** An event can contain image label. */
  image: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedLabel);

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An item can contain a header.
 */

function ItemHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ItemHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ItemHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ItemHeader.handledProps = ["as", "children", "className", "content"];
ItemHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ItemHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ItemHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ItemHeader);

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An item can contain a description with a single or multiple paragraphs.
 */

function ItemDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('description', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ItemDescription, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ItemDescription, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ItemDescription.handledProps = ["as", "children", "className", "content"];
ItemDescription.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ItemDescription.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ItemDescription, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ItemDescription);

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An item can contain extra content meant to be formatted separately from the main content.
 */

function ItemExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('extra', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ItemExtra, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ItemExtra, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ItemExtra.handledProps = ["as", "children", "className", "content"];
ItemExtra.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ItemExtra.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ItemExtra, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ItemExtra);

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * An item can contain content metadata.
 */

function ItemMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('meta', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ItemMeta, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ItemMeta, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ItemMeta.handledProps = ["as", "children", "className", "content"];
ItemMeta.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ItemMeta.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ItemMeta, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ItemMeta);

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * Several icons can be used together as a group.
 */

function IconGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(size, 'icons', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(IconGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(IconGroup, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

IconGroup.handledProps = ["as", "children", "className", "content", "size"];
IconGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** Size of the icon group. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'medium'))
} : {};
IconGroup.defaultProps = {
  as: 'i'
};
/* harmony default export */ __webpack_exports__["a"] = (IconGroup);

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Dimmer__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Label_Label__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ImageGroup__ = __webpack_require__(630);










var imageProps = ['alt', 'height', 'src', 'srcSet', 'width'];
/**
 * An image is a graphic representation of something.
 * @see Icon
 */

function Image(props) {
  var avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      circular = props.circular,
      className = props.className,
      content = props.content,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      rounded = props.rounded,
      size = props.size,
      spaced = props.spaced,
      verticalAlign = props.verticalAlign,
      wrapped = props.wrapped,
      ui = props.ui;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(ui, 'ui'), size, Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(avatar, 'avatar'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(bordered, 'bordered'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(hidden, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(inline, 'inline'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(rounded, 'rounded'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(spaced, 'spaced'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["F" /* useVerticalAlignProp */])(verticalAlign, 'aligned'), 'image', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(Image, props);

  var _partitionHTMLProps = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["y" /* partitionHTMLProps */])(rest, {
    htmlProps: imageProps
  }),
      _partitionHTMLProps2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_slicedToArray___default()(_partitionHTMLProps, 2),
      imgTagProps = _partitionHTMLProps2[0],
      rootProps = _partitionHTMLProps2[1];

  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(Image, props, function () {
    if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(dimmer) || !__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(label) || !__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(wrapped) || !__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
      return 'div';
    }
  });

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  if (ElementType === 'img') {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rootProps, imgTagProps, {
      className: classes
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rootProps, {
    className: classes,
    href: href
  }), __WEBPACK_IMPORTED_MODULE_7__modules_Dimmer__["a" /* default */].create(dimmer, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_8__Label_Label__["a" /* default */].create(label, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", imgTagProps));
}

Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Image.Group = __WEBPACK_IMPORTED_MODULE_9__ImageGroup__["a" /* default */];
Image.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An image can appear centered in a content block. */
  centered: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** An image may appear circular. */
  circular: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand for Dimmer. */
  dimmer: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].FLOATS),

  /** An image can take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].disallow(['size'])]),

  /** An image can be hidden. */
  hidden: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** An image may appear inline. */
  inline: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand for Label. */
  label: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand,

  /** An image may appear rounded. */
  rounded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An image may appear at different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['left', 'right'])]),

  /** Whether or not to add the ui className. */
  ui: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An image can specify its vertical alignment. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : {};
Image.defaultProps = {
  as: 'img',
  ui: true
};
Image.create = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["l" /* createShorthandFactory */])(Image, function (value) {
  return {
    src: value
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A dimmable sub-component for Dimmer.
 */

function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      content = props.content,
      dimmed = props.dimmed;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(blurring, 'blurring'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(dimmed, 'dimmed'), 'dimmable', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(DimmerDimmable, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(DimmerDimmable, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
DimmerDimmable.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** A dimmable element can blur its contents. */
  blurring: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (DimmerDimmable);

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimmerInner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);













/**
 *
 */

var DimmerInner =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(DimmerInner, _Component);

  function DimmerInner() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, DimmerInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(DimmerInner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);

      if (_this.contentRef && _this.contentRef !== e.target && Object(__WEBPACK_IMPORTED_MODULE_12__lib__["n" /* doesNodeContainClick */])(_this.contentRef, e)) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClickOutside', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return _this.ref = c;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleContentRef", function (c) {
      return _this.contentRef = c;
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(DimmerInner, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var nextActive = _ref.active;
      var prevActive = this.props.active;
      if (prevActive !== nextActive) this.toggleStyles(nextActive);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var active = this.props.active;
      this.toggleStyles(active);
    }
  }, {
    key: "toggleStyles",
    value: function toggleStyles(active) {
      if (!this.ref) return;

      if (active) {
        this.ref.style.setProperty('display', 'flex', 'important');
        return;
      }

      this.ref.style.removeProperty('display');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          inverted = _this$props.inverted,
          page = _this$props.page,
          simple = _this$props.simple,
          verticalAlign = _this$props.verticalAlign;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(active, 'active transition visible'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(page, 'page'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(simple, 'simple'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["F" /* useVerticalAlignProp */])(verticalAlign), 'dimmer', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(DimmerInner, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(DimmerInner, this.props);
      var childrenContent = __WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(children) ? content : children;
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick,
        ref: this.handleRef
      }), childrenContent && __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "content",
        ref: this.handleContentRef
      }, childrenContent));
    }
  }]);

  return DimmerInner;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(DimmerInner, "handledProps", ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"]);


DimmerInner.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** An active dimmer will dim its parent container. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['bottom', 'top'])
} : {};

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A group of images.
 */

function ImageGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      size = props.size;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', size, className, 'images');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ImageGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ImageGroup, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
ImageGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A group of images can be formatted to have the same size. */
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].SIZES)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ImageGroup);

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);






function LabelDetail(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('detail', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(LabelDetail, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(LabelDetail, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

LabelDetail.handledProps = ["as", "children", "className", "content"];
LabelDetail.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
LabelDetail.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(LabelDetail, function (val) {
  return {
    content: val
  };
});
/* harmony default export */ __webpack_exports__["a"] = (LabelDetail);

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A label can be grouped.
 */

function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      content = props.content,
      size = props.size,
      tag = props.tag;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(tag, 'tag'), 'labels', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(LabelGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(LabelGroup, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
LabelGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Labels can share shapes. */
  circular: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Label group can share colors together. */
  color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Label group can share sizes together. */
  size: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].SIZES),

  /** Label group can share tag formatting. */
  tag: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (LabelGroup);

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * Used in some Button types, such as `animated`.
 */

function ButtonContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(visible, 'visible'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(hidden, 'hidden'), 'content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ButtonContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ButtonContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ButtonContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Initially hidden, visible on hover. */
  hidden: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Initially visible, hidden on hover. */
  visible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ButtonContent);

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__(505);








/**
 * Buttons can be grouped.
 */

function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      buttons = props.buttons,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      content = props.content,
      floated = props.floated,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(icon, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(labeled, 'labeled'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(primary, 'primary'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(secondary, 'secondary'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(toggle, 'toggle'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(vertical, 'vertical'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["G" /* useWidthProp */])(widths), 'buttons', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(ButtonGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(ButtonGroup, props);

  if (__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(buttons)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), __WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_1_lodash_map___default()(buttons, function (button) {
    return __WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */].create(button);
  }));
}

ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ButtonGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Groups can be attached to other content. */
  attached: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['left', 'right', 'top', 'bottom'])]),

  /** Groups can be less pronounced. */
  basic: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Array of shorthand Button values. */
  buttons: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Groups can have a shared color. */
  color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].COLORS),

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** Groups can be aligned to the left or right of its container. */
  floated: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].FLOATS),

  /** Groups can take the width of their container. */
  fluid: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted as icons. */
  icon: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted as labeled icon buttons. */
  labeled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can hint towards a negative consequence. */
  negative: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can hint towards a positive consequence. */
  positive: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  primary: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  secondary: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].SIZES),

  /** Groups can be formatted to toggle on and off. */
  toggle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can be formatted to appear vertically. */
  vertical: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Groups can have their widths divided evenly. */
  widths: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].WIDTHS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ButtonGroup);

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * Button groups can contain conditionals.
 */

function ButtonOr(props) {
  var className = props.className,
      text = props.text;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('or', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ButtonOr, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ButtonOr, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes,
    "data-text": text
  }));
}

ButtonOr.handledProps = ["as", "className", "text"];
ButtonOr.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ButtonOr);

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A modal can have a header.
 */

function ModalHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'header');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ModalHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ModalHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ModalHeader.handledProps = ["as", "children", "className", "content"];
ModalHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
ModalHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ModalHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ModalHeader);

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A modal can contain content.
 */

function ModalContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image,
      scrolling = props.scrolling;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(image, 'image'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(scrolling, 'scrolling'), 'content');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ModalContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ModalContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ModalContent.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
ModalContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A modal can contain image content. */
  image: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A modal can use the entire size of the screen. */
  scrolling: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
ModalContent.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(ModalContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ModalContent);

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Button__ = __webpack_require__(465);















/**
 * A modal can contain a row of actions.
 */

var ModalActions =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(ModalActions, _Component);

  function ModalActions() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, ModalActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(ModalActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleButtonOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(predefinedProps, 'onClick', e, buttonProps);

          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(ModalActions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content;
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('actions', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(ModalActions, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(ModalActions, this.props);

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes
        }), children);
      }

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(content)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes
        }), content);
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(actions, function (action) {
        return __WEBPACK_IMPORTED_MODULE_14__elements_Button__["a" /* default */].create(action, {
          overrideProps: _this2.handleButtonOverrides
        });
      }));
    }
  }]);

  return ModalActions;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(ModalActions, "handledProps", ["actions", "as", "children", "className", "content", "onActionClick"]);


ModalActions.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** Array of shorthand buttons. */
  actions: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].collectionShorthand,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].contentShorthand,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func])
} : {};
ModalActions.create = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["l" /* createShorthandFactory */])(ModalActions, function (actions) {
  return {
    actions: actions
  };
});

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A modal can have a header.
 */

function ModalDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('description', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ModalDescription, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ModalDescription, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ModalDescription.handledProps = ["as", "children", "className", "content"];
ModalDescription.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ModalDescription);

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MenuHeader__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__MenuItem__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__MenuMenu__ = __webpack_require__(647);


















/**
 * A menu displays grouped navigation actions.
 * @see Dropdown
 */

var Menu =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleItemOverrides", function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          var index = itemProps.index;

          _this.trySetState({
            activeIndex: index
          });

          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(predefinedProps, 'onClick', e, itemProps);

          __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onItemClick', e, itemProps);
        }
      };
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Menu, [{
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      var items = this.props.items;
      var activeIndex = this.state.activeIndex;
      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(items, function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_16__MenuItem__["a" /* default */].create(item, {
          defaultProps: {
            active: parseInt(activeIndex, 10) === index,
            index: index
          },
          overrideProps: _this2.handleItemOverrides
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attached = _this$props.attached,
          borderless = _this$props.borderless,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          compact = _this$props.compact,
          fixed = _this$props.fixed,
          floated = _this$props.floated,
          fluid = _this$props.fluid,
          icon = _this$props.icon,
          inverted = _this$props.inverted,
          pagination = _this$props.pagination,
          pointing = _this$props.pointing,
          secondary = _this$props.secondary,
          size = _this$props.size,
          stackable = _this$props.stackable,
          tabular = _this$props.tabular,
          text = _this$props.text,
          vertical = _this$props.vertical,
          widths = _this$props.widths;
      var classes = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(borderless, 'borderless'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(pagination, 'pagination'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(pointing, 'pointing'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(secondary, 'secondary'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(stackable, 'stackable'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(text, 'text'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(vertical, 'vertical'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(icon, 'icon'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["B" /* useKeyOrValueAndKey */])(tabular, 'tabular'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["E" /* useValueAndKey */])(fixed, 'fixed'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["G" /* useWidthProp */])(widths, 'item'), className, 'menu');
      var rest = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["r" /* getUnhandledProps */])(Menu, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["q" /* getElementType */])(Menu, this.props);
      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), __WEBPACK_IMPORTED_MODULE_14__lib__["c" /* childrenUtils */].isNil(children) ? this.renderItems() : children);
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_14__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Menu, "autoControlledProps", ['activeIndex']);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Menu, "Header", __WEBPACK_IMPORTED_MODULE_15__MenuHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Menu, "Item", __WEBPACK_IMPORTED_MODULE_16__MenuItem__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Menu, "Menu", __WEBPACK_IMPORTED_MODULE_17__MenuMenu__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Menu, "handledProps", ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"]);

Menu.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].as,

  /** Index of the currently active item. */
  activeIndex: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** A menu may be attached to other content segments. */
  attached: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A menu item or menu can have no borders. */
  borderless: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** Additional colors can be specified. */
  color: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].COLORS),

  /** A menu can take up only the space necessary to fit its content. */
  compact: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Initial activeIndex value. */
  defaultActiveIndex: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** A menu can be fixed to a side of its context. */
  fixed: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['left', 'right', 'bottom', 'top']),

  /** A menu can be floated. */
  floated: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['right'])]),

  /** A vertical menu may take the size of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu may have just icons (bool) or labeled icons. */
  icon: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['labeled'])]),

  /** A menu may have its colors inverted to show greater contrast. */
  inverted: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Shorthand array of props for Menu. */
  items: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].collectionShorthand,

  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func]),

  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu can point to show its relationship to nearby content. */
  pointing: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_10_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].SIZES, 'medium', 'big')),

  /** A menu can stack at mobile resolutions. */
  stackable: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu can be formatted to show tabs of information. */
  tabular: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['right'])]),

  /** A menu can be formatted for text content. */
  text: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A vertical menu displays elements vertically. */
  vertical: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** A menu can have its items divided evenly. */
  widths: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].WIDTHS)
} : {};
Menu.create = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["l" /* createShorthandFactory */])(Menu, function (items) {
  return {
    items: items
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A menu item may include a header or may itself be a header.
 */

function MenuHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(MenuHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(MenuHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

MenuHeader.handledProps = ["as", "children", "className", "content"];
MenuHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (MenuHeader);

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A menu can contain a sub menu.
 */

function MenuMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      position = props.position;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(position, 'menu', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(MenuMenu, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(MenuMenu, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

MenuMenu.handledProps = ["as", "children", "className", "content", "position"];
MenuMenu.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A sub menu can take left or right position. */
  position: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'right'])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (MenuMenu);

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A dropdown menu can contain dividers to separate related content.
 */

function DropdownDivider(props) {
  var className = props.className;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('divider', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(DropdownDivider, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(DropdownDivider, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }));
}

DropdownDivider.handledProps = ["as", "className"];
DropdownDivider.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : {};
/* harmony default export */ __webpack_exports__["a"] = (DropdownDivider);

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_Flag__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elements_Image__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elements_Label__ = __webpack_require__(470);

















/**
 * An item sub-component for Dropdown component.
 */

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          disabled = _this$props.disabled,
          description = _this$props.description,
          flag = _this$props.flag,
          icon = _this$props.icon,
          image = _this$props.image,
          label = _this$props.label,
          selected = _this$props.selected,
          text = _this$props.text;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(selected, 'selected'), 'item', className); // add default dropdown icon if item contains another menu

      var iconName = __WEBPACK_IMPORTED_MODULE_8_lodash_isNil___default()(icon) ? __WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].someByType(children, 'DropdownMenu') && 'dropdown' : icon;
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(DropdownItem, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (!__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }), children);
      }

      var flagElement = __WEBPACK_IMPORTED_MODULE_13__elements_Flag__["a" /* default */].create(flag, {
        autoGenerateKey: false
      });
      var iconElement = __WEBPACK_IMPORTED_MODULE_14__elements_Icon__["a" /* default */].create(iconName, {
        autoGenerateKey: false
      });
      var imageElement = __WEBPACK_IMPORTED_MODULE_15__elements_Image__["a" /* default */].create(image, {
        autoGenerateKey: false
      });
      var labelElement = __WEBPACK_IMPORTED_MODULE_16__elements_Label__["a" /* default */].create(label, {
        autoGenerateKey: false
      });
      var descriptionElement = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["k" /* createShorthand */])('span', function (val) {
        return {
          children: val
        };
      }, description, {
        defaultProps: {
          className: 'description'
        },
        autoGenerateKey: false
      });
      var textElement = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["k" /* createShorthand */])('span', function (val) {
        return {
          children: val
        };
      }, __WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(content) ? text : content, {
        defaultProps: {
          className: 'text'
        },
        autoGenerateKey: false
      });
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
    }
  }]);

  return DropdownItem;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(DropdownItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"]);

DropdownItem.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** Style as the currently chosen item. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** Additional text with less emphasis. */
  description: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Shorthand for Flag. */
  flag: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for Image. */
  image: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for Label. */
  label: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Display text. */
  text: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** Stored value. */
  value: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string])
} : {};
DropdownItem.create = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["l" /* createShorthandFactory */])(DropdownItem, function (opts) {
  return opts;
});
/* harmony default export */ __webpack_exports__["a"] = (DropdownItem);

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(405);






/**
 * A dropdown menu can contain a header.
 */

function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(DropdownHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(DropdownHeader, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */].create(icon, {
    autoGenerateKey: false
  }), content);
}

DropdownHeader.handledProps = ["as", "children", "className", "content", "icon"];
DropdownHeader.propTypes =  true ? {
  /** An element type to render as (string or function) */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
DropdownHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(DropdownHeader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (DropdownHeader);

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A dropdown menu can contain a menu.
 */

function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      direction = props.direction,
      open = props.open,
      scrolling = props.scrolling;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(direction, Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(open, 'visible'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(scrolling, 'scrolling'), 'menu transition', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(DropdownMenu, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(DropdownMenu, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

DropdownMenu.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
DropdownMenu.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A dropdown menu can open to the left or to the right. */
  direction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'right']),

  /** Whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A dropdown menu can scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib__ = __webpack_require__(383);















/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, DropdownSearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(DropdownSearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleChange", function (e) {
      var value = __WEBPACK_IMPORTED_MODULE_10_lodash_get___default()(e, 'target.value');

      __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        value: value
      }));
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleRef", function (c) {
      return __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'inputRef', c);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(DropdownSearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          type = _this$props.type,
          value = _this$props.value;
      var classes = __WEBPACK_IMPORTED_MODULE_11_classnames___default()('search', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["r" /* getUnhandledProps */])(DropdownSearchInput, this.props);
      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement("input", __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        "aria-autocomplete": "list",
        autoComplete: autoComplete,
        className: classes,
        onChange: this.handleChange,
        ref: this.handleRef,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);

  return DropdownSearchInput;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(DropdownSearchInput, "defaultProps", {
  autoComplete: 'off',
  type: 'text'
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(DropdownSearchInput, "handledProps", ["as", "autoComplete", "className", "inputRef", "tabIndex", "type", "value"]);

DropdownSearchInput.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_14__lib__["m" /* customPropTypes */].as,

  /** An input can have the auto complete. */
  autoComplete: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** A ref handler for input. */
  inputRef: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /** An input can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** The HTML input type. */
  type: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** Stored value. */
  value: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string])
} : {};
DropdownSearchInput.create = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["l" /* createShorthandFactory */])(DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
/* harmony default export */ __webpack_exports__["a"] = (DropdownSearchInput);

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__TransitionGroup__ = __webpack_require__(660);
















var TRANSITION_TYPE = {
  ENTERING: 'show',
  EXITING: 'hide'
  /**
   * A transition is an animation usually used to move content in or out of view.
   */

};

var Transition =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Transition, _Component);

  function Transition() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Transition);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Transition)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleStart", function () {
      var duration = _this.props.duration;
      var status = _this.nextStatus;
      _this.nextStatus = null;

      _this.setSafeState({
        status: status,
        animating: true
      }, function () {
        var durationType = TRANSITION_TYPE[status];
        var durationValue = Object(__WEBPACK_IMPORTED_MODULE_14__lib__["w" /* normalizeTransitionDuration */])(duration, durationType);

        __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onStart', null, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
          status: status
        }));

        setTimeout(_this.handleComplete, durationValue);
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleComplete", function () {
      var current = _this.state.status;

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onComplete', null, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
        status: current
      }));

      if (_this.nextStatus) {
        _this.handleStart();

        return;
      }

      var status = _this.computeCompletedStatus();

      var callback = current === Transition.ENTERING ? 'onShow' : 'onHide';

      _this.setSafeState({
        status: status,
        animating: false
      }, function () {
        __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, callback, null, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, _this.props, {
          status: status
        }));
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "updateStatus", function () {
      var animating = _this.state.animating;

      if (_this.nextStatus) {
        _this.nextStatus = _this.computeNextStatus();
        if (!animating) _this.handleStart();
      }
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeClasses", function () {
      var _this$props = _this.props,
          animation = _this$props.animation,
          children = _this$props.children;
      var _this$state = _this.state,
          animating = _this$state.animating,
          status = _this$state.status;

      var childClasses = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default()(children, 'props.className');

      var directional = __WEBPACK_IMPORTED_MODULE_8_lodash_includes___default()(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].DIRECTIONAL_TRANSITIONS, animation);

      if (directional) {
        return __WEBPACK_IMPORTED_MODULE_11_classnames___default()(animation, childClasses, Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(animating, 'animating'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(status === Transition.ENTERING, 'in'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(status === Transition.EXITING, 'out'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(status === Transition.EXITED, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(status !== Transition.EXITED, 'visible'), 'transition');
      }

      return __WEBPACK_IMPORTED_MODULE_11_classnames___default()(animation, childClasses, Object(__WEBPACK_IMPORTED_MODULE_14__lib__["A" /* useKeyOnly */])(animating, 'animating transition'));
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeCompletedStatus", function () {
      var unmountOnHide = _this.props.unmountOnHide;
      var status = _this.state.status;
      if (status === Transition.ENTERING) return Transition.ENTERED;
      return unmountOnHide ? Transition.UNMOUNTED : Transition.EXITED;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeInitialStatuses", function () {
      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          mountOnShow = _this$props2.mountOnShow,
          transitionOnMount = _this$props2.transitionOnMount,
          unmountOnHide = _this$props2.unmountOnHide;

      if (visible) {
        if (transitionOnMount) {
          return {
            initial: Transition.EXITED,
            next: Transition.ENTERING
          };
        }

        return {
          initial: Transition.ENTERED
        };
      }

      if (mountOnShow || unmountOnHide) return {
        initial: Transition.UNMOUNTED
      };
      return {
        initial: Transition.EXITED
      };
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeNextStatus", function () {
      var _this$state2 = _this.state,
          animating = _this$state2.animating,
          status = _this$state2.status;
      if (animating) return status === Transition.ENTERING ? Transition.EXITING : Transition.ENTERING;
      return status === Transition.ENTERED ? Transition.EXITING : Transition.ENTERING;
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeStatuses", function (props) {
      var status = _this.state.status;
      var visible = props.visible;

      if (visible) {
        return {
          current: status === Transition.UNMOUNTED && Transition.EXITED,
          next: status !== Transition.ENTERING && status !== Transition.ENTERED && Transition.ENTERING
        };
      }

      return {
        next: (status === Transition.ENTERING || status === Transition.ENTERED) && Transition.EXITING
      };
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeStyle", function () {
      var _this$props3 = _this.props,
          children = _this$props3.children,
          duration = _this$props3.duration;
      var status = _this.state.status;

      var childStyle = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default()(children, 'props.style');

      var type = TRANSITION_TYPE[status];
      var animationDuration = type && "".concat(Object(__WEBPACK_IMPORTED_MODULE_14__lib__["w" /* normalizeTransitionDuration */])(duration, type), "ms");
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, childStyle, {
        animationDuration: animationDuration
      });
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "setSafeState", function () {
      var _this2;

      return _this.mounted && (_this2 = _this).setState.apply(_this2, arguments);
    });

    var _this$computeInitialS = _this.computeInitialStatuses(),
        _status = _this$computeInitialS.initial,
        next = _this$computeInitialS.next;

    _this.nextStatus = next;
    _this.state = {
      status: _status
    };
    return _this;
  } // ----------------------------------------
  // Lifecycle
  // ----------------------------------------


  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Transition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
      this.updateStatus();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$computeStatuses = this.computeStatuses(nextProps),
          status = _this$computeStatuses.current,
          next = _this$computeStatuses.next;

      this.nextStatus = next;
      if (status) this.setSafeState({
        status: status
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateStatus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    } // ----------------------------------------
    // Callback handling
    // ----------------------------------------

  }, {
    key: "render",
    // ----------------------------------------
    // Render
    // ----------------------------------------
    value: function render() {
      var children = this.props.children;
      var status = this.state.status;
      if (status === Transition.UNMOUNTED) return null;
      return Object(__WEBPACK_IMPORTED_MODULE_13_react__["cloneElement"])(children, {
        className: this.computeClasses(),
        style: this.computeStyle()
      });
    }
  }]);

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "defaultProps", {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "ENTERED", 'ENTERED');

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "ENTERING", 'ENTERING');

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "EXITED", 'EXITED');

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "EXITING", 'EXITING');

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "UNMOUNTED", 'UNMOUNTED');

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "Group", __WEBPACK_IMPORTED_MODULE_15__TransitionGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Transition, "handledProps", ["animation", "children", "duration", "mountOnShow", "onComplete", "onHide", "onShow", "onStart", "reactKey", "transitionOnMount", "unmountOnHide", "visible"]);


Transition.propTypes =  true ? {
  /** Named animation event to used. Must be defined in CSS. */
  animation: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_14__lib__["b" /* SUI */].TRANSITIONS),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.element.isRequired,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.shape({
    hide: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number,
    show: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number
  }), __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** Show the component; triggers the enter or exit animation. */
  visible: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /** React's key of the element. */
  reactKey: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_Icon__ = __webpack_require__(405);








/**
 * A divider sub-component for Breadcrumb component.
 */

function BreadcrumbDivider(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('divider', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(BreadcrumbDivider, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(BreadcrumbDivider, props);

  if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(icon)) {
    return __WEBPACK_IMPORTED_MODULE_7__elements_Icon__["a" /* default */].create(icon, {
      defaultProps: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, rest, {
        className: classes
      }),
      autoGenerateKey: false
    });
  }

  if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default()(content)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children) ? '/' : children);
}

BreadcrumbDivider.handledProps = ["as", "children", "className", "content", "icon"];
BreadcrumbDivider.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].itemShorthand
} : {};
BreadcrumbDivider.create = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["l" /* createShorthandFactory */])(BreadcrumbDivider, function (icon) {
  return {
    icon: icon
  };
});
/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbDivider);

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbSection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);













/**
 * A section sub-component for Breadcrumb component.
 */

var BreadcrumbSection =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, BreadcrumbSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(BreadcrumbSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeElementType", function () {
      var _this$props = _this.props,
          link = _this$props.link,
          onClick = _this$props.onClick;
      if (link || onClick) return 'a';
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      return __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(BreadcrumbSection, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          href = _this$props2.href;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(active, 'active'), 'section', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(BreadcrumbSection, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(BreadcrumbSection, this.props, this.computeElementType);
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
    }
  }]);

  return BreadcrumbSection;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(BreadcrumbSection, "handledProps", ["active", "as", "children", "className", "content", "href", "link", "onClick"]);


BreadcrumbSection.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** Style as the currently active section. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].disallow(['link']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].disallow(['href']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func
} : {};
BreadcrumbSection.create = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["l" /* createShorthandFactory */])(BreadcrumbSection, function (content) {
  return {
    content: content,
    link: true
  };
});

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A set of fields can appear grouped together.
 * @see Form
 */

function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      unstackable = props.unstackable,
      widths = props.widths;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(grouped, 'grouped'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(inline, 'inline'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["G" /* useWidthProp */])(widths, null, true), 'fields', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(FormGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(FormGroup, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), children);
}

FormGroup.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
FormGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Fields can show related choices. */
  grouped: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].disallow(['inline']), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool]),

  /** Multiple fields may be inline in a row. */
  inline: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].disallow(['grouped']), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool]),

  /** A form group can prevent itself from stacking on mobile. */
  unstackable: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].WIDTHS).concat(['equal']))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FormGroup);

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GridColumn__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__GridRow__ = __webpack_require__(673);








/**
 * A grid is used to harmonize negative space in a layout.
 */

function Grid(props) {
  var celled = props.celled,
      centered = props.centered,
      children = props.children,
      className = props.className,
      columns = props.columns,
      container = props.container,
      divided = props.divided,
      doubling = props.doubling,
      inverted = props.inverted,
      padded = props.padded,
      relaxed = props.relaxed,
      reversed = props.reversed,
      stackable = props.stackable,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(container, 'container'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(doubling, 'doubling'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(stackable, 'stackable'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(stretched, 'stretched'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(celled, 'celled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(divided, 'divided'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(padded, 'padded'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["C" /* useMultipleProp */])(reversed, 'reversed'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["F" /* useVerticalAlignProp */])(verticalAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["G" /* useWidthProp */])(columns, 'column', true), 'grid', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(Grid, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(Grid, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), children);
}

Grid.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Grid.Column = __WEBPACK_IMPORTED_MODULE_6__GridColumn__["a" /* default */];
Grid.Row = __WEBPACK_IMPORTED_MODULE_7__GridRow__["a" /* default */];
Grid.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** A grid can have rows divided into cells. */
  celled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['internally'])]),

  /** A grid can have its columns centered. */
  centered: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Represents column count per row in Grid. */
  columns: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].WIDTHS).concat(['equal'])),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can have dividers between its columns. */
  divided: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['vertically'])]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid's colors can be inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['horizontally', 'vertically'])]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].multipleProp(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can specify its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A row sub-component for Grid.
 */

function GridRow(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      columns = props.columns,
      divided = props.divided,
      only = props.only,
      reversed = props.reversed,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(color, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(divided, 'divided'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(stretched, 'stretched'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["C" /* useMultipleProp */])(only, 'only'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["C" /* useMultipleProp */])(reversed, 'reversed'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["F" /* useVerticalAlignProp */])(verticalAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["G" /* useWidthProp */])(columns, 'column', true), 'row', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(GridRow, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(GridRow, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), children);
}

GridRow.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
GridRow.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** A row can have its columns centered. */
  centered: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A grid row can be colored. */
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].COLORS),

  /** Represents column count per line in Row. */
  columns: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].WIDTHS).concat(['equal'])),

  /** A row can have dividers between its columns. */
  divided: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].multipleProp(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].VISIBILITY),

  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].multipleProp(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A row can stretch its contents to take up the entire column height. */
  stretched: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A row can specify its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (GridRow);

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A message can contain a content.
 */

function MessageContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(MessageContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(MessageContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

MessageContent.handledProps = ["as", "children", "className", "content"];
MessageContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (MessageContent);

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A message can contain a header.
 */

function MessageHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(MessageHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(MessageHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

MessageHeader.handledProps = ["as", "children", "className", "content"];
MessageHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
MessageHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(MessageHeader, function (val) {
  return {
    content: val
  };
});
/* harmony default export */ __webpack_exports__["a"] = (MessageHeader);

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MessageItem__ = __webpack_require__(511);







/**
 * A message can contain a list of items.
 */

function MessageList(props) {
  var children = props.children,
      className = props.className,
      items = props.items;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('list', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(MessageList, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(MessageList, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? __WEBPACK_IMPORTED_MODULE_1_lodash_map___default()(items, __WEBPACK_IMPORTED_MODULE_6__MessageItem__["a" /* default */].create) : children);
}

MessageList.handledProps = ["as", "children", "className", "items"];
MessageList.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand Message.Items. */
  items: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].collectionShorthand
} : {};
MessageList.defaultProps = {
  as: 'ul'
};
MessageList.create = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["l" /* createShorthandFactory */])(MessageList, function (val) {
  return {
    items: val
  };
});
/* harmony default export */ __webpack_exports__["a"] = (MessageList);

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);






function TableBody(props) {
  var children = props.children,
      className = props.className;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(TableBody, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(TableBody, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), children);
}

TableBody.handledProps = ["as", "children", "className"];
TableBody.defaultProps = {
  as: 'tbody'
};
TableBody.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : {};
/* harmony default export */ __webpack_exports__["a"] = (TableBody);

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableCell__ = __webpack_require__(471);






/**
 * A table can have a header cell.
 */

function TableHeaderCell(props) {
  var as = props.as,
      className = props.className,
      sorted = props.sorted;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["E" /* useValueAndKey */])(sorted, 'sorted'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(TableHeaderCell, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TableCell__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    as: as,
    className: classes
  }));
}

TableHeaderCell.handledProps = ["as", "className", "sorted"];
TableHeaderCell.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['ascending', 'descending'])
} : {};
TableHeaderCell.defaultProps = {
  as: 'th'
};
/* harmony default export */ __webpack_exports__["a"] = (TableHeaderCell);

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TableCell__ = __webpack_require__(471);








/**
 * A table can have rows.
 */

function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(negative, 'negative'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(positive, 'positive'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(warning, 'warning'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["F" /* useVerticalAlignProp */])(verticalAlign), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(TableRow, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(TableRow, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(cells, function (cell) {
    return __WEBPACK_IMPORTED_MODULE_7__TableCell__["a" /* default */].create(cell, {
      defaultProps: {
        as: cellAs
      }
    });
  }));
}

TableRow.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};
TableRow.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** A row can be active or selected by a user. */
  active: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An element type to render as (string or function). */
  cellAs: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Shorthand array of props for TableCell. */
  cells: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A row can be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may call attention to an error or a negative value. */
  error: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may let a user know whether a value is bad. */
  negative: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may let a user know whether a value is good. */
  positive: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table row can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified')),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS),

  /** A row may warn a user. */
  warning: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : {};
TableRow.create = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["l" /* createShorthandFactory */])(TableRow, function (cells) {
  return {
    cells: cells
  };
});
/* harmony default export */ __webpack_exports__["a"] = (TableRow);

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * Headers may contain subheaders.
 */

function HeaderSubheader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('sub header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(HeaderSubheader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(HeaderSubheader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

HeaderSubheader.handledProps = ["as", "children", "className", "content"];
HeaderSubheader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
HeaderSubheader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(HeaderSubheader, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (HeaderSubheader);

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * Header content wraps the main content when there is an adjacent Icon or Image.
 */

function HeaderContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(HeaderContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(HeaderContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

HeaderContent.handledProps = ["as", "children", "className", "content"];
HeaderContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (HeaderContent);

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isPlainObject__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_Image__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ListContent__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ListDescription__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ListHeader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ListIcon__ = __webpack_require__(514);



















/**
 * A list item can contain a set of items.
 */

var ListItem =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(ListItem, _Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) __WEBPACK_IMPORTED_MODULE_9_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          header = _this$props.header,
          icon = _this$props.icon,
          image = _this$props.image,
          value = _this$props.value;
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(ListItem, this.props);
      var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(ElementType !== 'li', 'item'), className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(ListItem, this.props);
      var valueProp = ElementType === 'li' ? {
        value: value
      } : {
        'data-value': value
      };

      if (!__WEBPACK_IMPORTED_MODULE_13__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), children);
      }

      var iconElement = __WEBPACK_IMPORTED_MODULE_18__ListIcon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      });
      var imageElement = __WEBPACK_IMPORTED_MODULE_14__elements_Image__["a" /* default */].create(image, {
        autoGenerateKey: false
      }); // See description of `content` prop for explanation about why this is necessary.

      if (!Object(__WEBPACK_IMPORTED_MODULE_12_react__["isValidElement"])(content) && __WEBPACK_IMPORTED_MODULE_8_lodash_isPlainObject___default()(content)) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, __WEBPACK_IMPORTED_MODULE_15__ListContent__["a" /* default */].create(content, {
          autoGenerateKey: false,
          defaultProps: {
            header: header,
            description: description
          }
        }));
      }

      var headerElement = __WEBPACK_IMPORTED_MODULE_17__ListHeader__["a" /* default */].create(header, {
        autoGenerateKey: false
      });
      var descriptionElement = __WEBPACK_IMPORTED_MODULE_16__ListDescription__["a" /* default */].create(description, {
        autoGenerateKey: false
      });

      if (iconElement || imageElement) {
        return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, valueProp, {
          role: "listitem",
          className: classes,
          onClick: this.handleClick
        }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__ListContent__["a" /* default */], null, headerElement, descriptionElement, content));
      }

      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), headerElement, descriptionElement, content);
    }
  }]);

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(ListItem, "handledProps", ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"]);

ListItem.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** A list item can active. */
  active: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ListDescription. */
  description: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** A list item can disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Shorthand for ListHeader. */
  header: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ListIcon. */
  icon: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].disallow(['image']), __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand]),

  /** Shorthand for Image. */
  image: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].disallow(['icon']), __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].itemShorthand]),

  /** A ListItem can be clicked */
  onClick: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** A value for an ordered list. */
  value: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string
} : {};
ListItem.create = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["l" /* createShorthandFactory */])(ListItem, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A list can contain a sub list.
 */

function ListList(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ListList, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ListList, props);
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

ListList.handledProps = ["as", "children", "className", "content"];
ListList.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ListList);

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A placeholder can contain a header.
 */

function PlaceholderHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(image, 'image'), 'header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PlaceholderHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PlaceholderHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

PlaceholderHeader.handledProps = ["as", "children", "className", "content", "image"];
PlaceholderHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A placeholder can contain an image. */
  image: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (PlaceholderHeader);

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A placeholder can contain an image.
 */

function PlaceholderImage(props) {
  var className = props.className,
      square = props.square,
      rectangular = props.rectangular;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(square, 'square'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(rectangular, 'rectangular'), 'image', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PlaceholderImage, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PlaceholderImage, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }));
}

PlaceholderImage.handledProps = ["as", "className", "rectangular", "square"];
PlaceholderImage.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** An image can modify size correctly with responsive styles. */
  square: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['rectangular']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool]),

  /** An image can modify size correctly with responsive styles. */
  rectangular: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].disallow(['square']), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (PlaceholderImage);

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A placeholder can contain have lines of text.
 */

function PlaceholderLine(props) {
  var className = props.className,
      length = props.length;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('line', length, className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PlaceholderLine, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PlaceholderLine, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }));
}

PlaceholderLine.handledProps = ["as", "className", "length"];
PlaceholderLine.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A line can specify how long its contents should appear. */
  length: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['full', 'very long', 'long', 'medium', 'short', 'very short'])
} : {};
/* harmony default export */ __webpack_exports__["a"] = (PlaceholderLine);

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A placeholder can contain a paragraph.
 */

function PlaceholderParagraph(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('paragraph', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PlaceholderParagraph, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PlaceholderParagraph, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

PlaceholderParagraph.handledProps = ["as", "children", "className", "content"];
PlaceholderParagraph.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (PlaceholderParagraph);

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A content sub-component for the Reveal.
 */

function RevealContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      hidden = props.hidden,
      visible = props.visible;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(hidden, 'hidden'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(visible, 'visible'), 'content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(RevealContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(RevealContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

RevealContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
RevealContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A reveal may contain content that is visible before interaction. */
  hidden: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (RevealContent);

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SegmentGroup__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SegmentInline__ = __webpack_require__(692);








/**
 * A segment is used to create a grouping of related content.
 */

function Segment(props) {
  var attached = props.attached,
      basic = props.basic,
      children = props.children,
      circular = props.circular,
      className = props.className,
      clearing = props.clearing,
      color = props.color,
      compact = props.compact,
      content = props.content,
      disabled = props.disabled,
      floated = props.floated,
      inverted = props.inverted,
      loading = props.loading,
      placeholder = props.placeholder,
      padded = props.padded,
      piled = props.piled,
      raised = props.raised,
      secondary = props.secondary,
      size = props.size,
      stacked = props.stacked,
      tertiary = props.tertiary,
      textAlign = props.textAlign,
      vertical = props.vertical;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(circular, 'circular'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(clearing, 'clearing'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(placeholder, 'placeholder'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(piled, 'piled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(raised, 'raised'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(secondary, 'secondary'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(stacked, 'stacked'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(tertiary, 'tertiary'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(vertical, 'vertical'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["B" /* useKeyOrValueAndKey */])(padded, 'padded'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["E" /* useValueAndKey */])(floated, 'floated'), 'segment', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(Segment, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(Segment, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

Segment.handledProps = ["as", "attached", "basic", "children", "circular", "className", "clearing", "color", "compact", "content", "disabled", "floated", "inverted", "loading", "padded", "piled", "placeholder", "raised", "secondary", "size", "stacked", "tertiary", "textAlign", "vertical"];
Segment.Group = __WEBPACK_IMPORTED_MODULE_6__SegmentGroup__["a" /* default */];
Segment.Inline = __WEBPACK_IMPORTED_MODULE_7__SegmentInline__["a" /* default */];
Segment.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Attach segment to other content, like a header. */
  attached: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A basic segment has no special formatting. */
  basic: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** A segment can be circular. */
  circular: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A segment can clear floated content. */
  clearing: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Segment can be colored. */
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].COLORS),

  /** A segment may take up only as much space as is necessary. */
  compact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A segment may show its content is disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Segment content can be floated to the left or right. */
  floated: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].FLOATS),

  /** A segment can have its colors inverted for contrast. */
  inverted: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment may show its content is being loaded. */
  loading: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can increase its padding. */
  padded: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** A segment can be used to reserve space for conditionally displayed content. */
  placeholder: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formatted to look like a pile of pages. */
  piled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment may be formatted to raise above the page. */
  raised: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can be formatted to appear less noticeable. */
  secondary: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified')),

  /** Formats content to be aligned vertically. */
  vertical: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Segment);

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * A group of segments can be formatted to appear together.
 */

function SegmentGroup(props) {
  var children = props.children,
      className = props.className,
      compact = props.compact,
      content = props.content,
      horizontal = props.horizontal,
      piled = props.piled,
      raised = props.raised,
      size = props.size,
      stacked = props.stacked;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(piled, 'piled'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(raised, 'raised'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(stacked, 'stacked'), 'segments', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(SegmentGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(SegmentGroup, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

SegmentGroup.handledProps = ["as", "children", "className", "compact", "content", "horizontal", "piled", "raised", "size", "stacked"];
SegmentGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A segment may take up only as much space as is necessary. */
  compact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** Formats content to be aligned horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formatted to look like a pile of pages. */
  piled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment group can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SegmentGroup);

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A placeholder segment can be inline.
 */

function SegmentInline(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('inline', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(SegmentInline, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(SegmentInline, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

SegmentInline.handledProps = ["as", "children", "className", "content"];
SegmentInline.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SegmentInline);

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_Icon__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__StepContent__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__StepDescription__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__StepGroup__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__StepTitle__ = __webpack_require__(516);


















/**
 * A step shows the completion status of an activity in a series of activities.
 */

var Step =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Step, _Component);

  function Step() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Step);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Step)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeElementType", function () {
      var onClick = _this.props.onClick;
      if (onClick) return 'a';
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          completed = _this$props.completed,
          content = _this$props.content,
          description = _this$props.description,
          disabled = _this$props.disabled,
          href = _this$props.href,
          icon = _this$props.icon,
          link = _this$props.link,
          title = _this$props.title;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(completed, 'completed'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_12__lib__["A" /* useKeyOnly */])(link, 'link'), 'step', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["r" /* getUnhandledProps */])(Step, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["q" /* getElementType */])(Step, this.props, this.computeElementType);

      if (!__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), children);
      }

      if (!__WEBPACK_IMPORTED_MODULE_12__lib__["c" /* childrenUtils */].isNil(content)) {
        return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), content);
      }

      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_13__elements_Icon__["a" /* default */].create(icon, {
        autoGenerateKey: false
      }), __WEBPACK_IMPORTED_MODULE_14__StepContent__["a" /* default */].create({
        description: description,
        title: title
      }, {
        autoGenerateKey: false
      }));
    }
  }]);

  return Step;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Step, "Content", __WEBPACK_IMPORTED_MODULE_14__StepContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Step, "Description", __WEBPACK_IMPORTED_MODULE_15__StepDescription__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Step, "Group", __WEBPACK_IMPORTED_MODULE_16__StepGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Step, "Title", __WEBPACK_IMPORTED_MODULE_17__StepTitle__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Step, "handledProps", ["active", "as", "children", "className", "completed", "content", "description", "disabled", "href", "icon", "link", "onClick", "ordered", "title"]);

Step.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].as,

  /** A step can be highlighted as active. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** A step can show that a user has completed it. */
  completed: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for StepDescription. */
  description: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand,

  /** A step can be link. */
  link: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Shorthand for StepTitle. */
  title: __WEBPACK_IMPORTED_MODULE_12__lib__["m" /* customPropTypes */].itemShorthand
} : {};
Step.create = Object(__WEBPACK_IMPORTED_MODULE_12__lib__["l" /* createShorthandFactory */])(Step, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Step);

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StepDescription__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StepTitle__ = __webpack_require__(516);







/**
 * A step can contain a content.
 */

function StepContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      title = props.title;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(StepContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(StepContent, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_6__StepTitle__["a" /* default */].create(title, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_5__StepDescription__["a" /* default */].create(description, {
    autoGenerateKey: false
  }));
}

StepContent.handledProps = ["as", "children", "className", "content", "description", "title"];
StepContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for StepDescription. */
  description: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for StepTitle. */
  title: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
StepContent.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(StepContent, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (StepContent);

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_values__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_pickBy__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_pickBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_pickBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Step__ = __webpack_require__(693);












var numberMap =  true ? __WEBPACK_IMPORTED_MODULE_6_lodash_pickBy___default()(__WEBPACK_IMPORTED_MODULE_10__lib__["x" /* numberToWordMap */], function (val, key) {
  return key <= 8;
}) : {};;
/**
 * A set of steps.
 */

function StepGroup(props) {
  var attached = props.attached,
      children = props.children,
      className = props.className,
      content = props.content,
      fluid = props.fluid,
      items = props.items,
      ordered = props.ordered,
      size = props.size,
      stackable = props.stackable,
      unstackable = props.unstackable,
      vertical = props.vertical,
      widths = props.widths;
  var classes = __WEBPACK_IMPORTED_MODULE_7_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_10__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["A" /* useKeyOnly */])(ordered, 'ordered'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["A" /* useKeyOnly */])(vertical, 'vertical'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["B" /* useKeyOrValueAndKey */])(attached, 'attached'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["E" /* useValueAndKey */])(stackable, 'stackable'), Object(__WEBPACK_IMPORTED_MODULE_10__lib__["G" /* useWidthProp */])(widths), 'steps', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["r" /* getUnhandledProps */])(StepGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_10__lib__["q" /* getElementType */])(StepGroup, props);

  if (!__WEBPACK_IMPORTED_MODULE_10__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_10__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5_lodash_map___default()(items, function (item) {
    return __WEBPACK_IMPORTED_MODULE_11__Step__["a" /* default */].create(item);
  }));
}

StepGroup.handledProps = ["as", "attached", "children", "className", "content", "fluid", "items", "ordered", "size", "stackable", "unstackable", "vertical", "widths"];
StepGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_10__lib__["m" /* customPropTypes */].as,

  /** Steps can be attached to other elements. */
  attached: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_10__lib__["m" /* customPropTypes */].contentShorthand,

  /** A fluid step takes up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand array of props for Step. */
  items: __WEBPACK_IMPORTED_MODULE_10__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A step can show a ordered sequence of steps. */
  ordered: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Steps can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_10__lib__["b" /* SUI */].SIZES, 'medium')),

  /** A step can stack vertically only on smaller screens. */
  stackable: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['tablet']),

  /** A step can prevent itself from stacking on mobile. */
  unstackable: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A step can be displayed stacked vertically. */
  vertical: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Steps can be divided evenly inside their parent. */
  widths: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_3_lodash_keys___default()(numberMap)).concat(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_3_lodash_keys___default()(numberMap).map(Number)), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_values___default()(numberMap))))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (StepGroup);

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAccordion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_includes__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AccordionPanel__ = __webpack_require__(517);


















/**
 * An Accordion can contain sub-accordions.
 */

var AccordionAccordion =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(AccordionAccordion, _Component);

  function AccordionAccordion() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, AccordionAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(AccordionAccordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "computeNewIndex", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index; // check to see if index is in array, and remove it, if not then add it

      return __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default()(activeIndex, index) ? __WEBPACK_IMPORTED_MODULE_11_lodash_without___default()(activeIndex, index) : __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(activeIndex).concat([index]);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleTitleClick", function (e, titleProps) {
      var index = titleProps.index;

      _this.trySetState({
        activeIndex: _this.computeNewIndex(index)
      });

      __WEBPACK_IMPORTED_MODULE_10_lodash_invoke___default()(_this.props, 'onTitleClick', e, titleProps);
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "isIndexActive", function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      return exclusive ? activeIndex === index : __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default()(activeIndex, index);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(AccordionAccordion, [{
    key: "getInitialAutoControlledState",
    value: function getInitialAutoControlledState(_ref) {
      var exclusive = _ref.exclusive;
      return {
        activeIndex: exclusive ? -1 : []
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          panels = _this$props.panels;
      var classes = __WEBPACK_IMPORTED_MODULE_13_classnames___default()('accordion', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_16__lib__["r" /* getUnhandledProps */])(AccordionAccordion, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_16__lib__["q" /* getElementType */])(AccordionAccordion, this.props);
      return __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes
      }), __WEBPACK_IMPORTED_MODULE_16__lib__["c" /* childrenUtils */].isNil(children) ? __WEBPACK_IMPORTED_MODULE_9_lodash_map___default()(panels, function (panel, index) {
        return __WEBPACK_IMPORTED_MODULE_17__AccordionPanel__["a" /* default */].create(panel, {
          defaultProps: {
            active: _this2.isIndexActive(index),
            index: index,
            onTitleClick: _this2.handleTitleClick
          }
        });
      }) : children);
    }
  }]);

  return AccordionAccordion;
}(__WEBPACK_IMPORTED_MODULE_16__lib__["a" /* AutoControlledComponent */]);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(AccordionAccordion, "defaultProps", {
  exclusive: true
});

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(AccordionAccordion, "autoControlledProps", ['activeIndex']);

__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(AccordionAccordion, "handledProps", ["activeIndex", "as", "children", "className", "defaultActiveIndex", "exclusive", "onTitleClick", "panels"]);


AccordionAccordion.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].as,

  /** Index of the currently active panel. */
  activeIndex: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number])]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number])]),

  /** Only allow one panel open at a time. */
  exclusive: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.func]),

  /** Shorthand array of props for Accordion. */
  panels: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.shape({
    content: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].itemShorthand,
    title: __WEBPACK_IMPORTED_MODULE_16__lib__["m" /* customPropTypes */].itemShorthand
  }))])
} : {};
AccordionAccordion.create = Object(__WEBPACK_IMPORTED_MODULE_16__lib__["l" /* createShorthandFactory */])(AccordionAccordion, function (content) {
  return {
    content: content
  };
});

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PopupContent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A PopupContent displays the content body of a Popover.
 */

function PopupContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PopupContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PopupContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}
PopupContent.handledProps = ["as", "children", "className", "content"];
PopupContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** The content of the Popup */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Classes to add to the Popup content className. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
PopupContent.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(PopupContent, function (children) {
  return {
    children: children
  };
});

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PopupHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A PopupHeader displays a header in a Popover.
 */

function PopupHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('header', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(PopupHeader, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(PopupHeader, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}
PopupHeader.handledProps = ["as", "children", "className", "content"];
PopupHeader.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
PopupHeader.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(PopupHeader, function (children) {
  return {
    children: children
  };
});

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_keyboard_key__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_keyboard_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_keyboard_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(383);














/**
 * An internal icon sub-component for Rating component
 */

var RatingIcon =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(RatingIcon, _Component);

  function RatingIcon() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, RatingIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(RatingIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleKeyUp", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onKeyUp', e, _this.props);

      switch (__WEBPACK_IMPORTED_MODULE_10_keyboard_key___default.a.getCode(e)) {
        case __WEBPACK_IMPORTED_MODULE_10_keyboard_key___default.a.Enter:
        case __WEBPACK_IMPORTED_MODULE_10_keyboard_key___default.a.Spacebar:
          e.preventDefault();

          __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);

          break;

        default:
      }
    });

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleMouseEnter", function (e) {
      __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default()(_this.props, 'onMouseEnter', e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(RatingIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          selected = _this$props.selected;
      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_13__lib__["A" /* useKeyOnly */])(selected, 'selected'), 'icon', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["r" /* getUnhandledProps */])(RatingIcon, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_13__lib__["q" /* getElementType */])(RatingIcon, this.props);
      return __WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        onMouseEnter: this.handleMouseEnter,
        tabIndex: 0,
        role: "radio"
      }));
    }
  }]);

  return RatingIcon;
}(__WEBPACK_IMPORTED_MODULE_12_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(RatingIcon, "defaultProps", {
  as: 'i'
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(RatingIcon, "handledProps", ["active", "as", "className", "index", "onClick", "onKeyUp", "onMouseEnter", "selected"]);


RatingIcon.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_13__lib__["m" /* customPropTypes */].as,

  /** Indicates activity of an icon. */
  active: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.string,

  /** An index of icon inside Rating. */
  index: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.func,

  /** Indicates selection of an icon. */
  selected: __WEBPACK_IMPORTED_MODULE_11_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);






function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      renderer = props.renderer;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), 'category', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(SearchCategory, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(SearchCategory, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "name"
  }, renderer(props)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "results"
  }, __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children));
}

SearchCategory.handledProps = ["active", "as", "children", "className", "content", "name", "renderer", "results"];
SearchCategory.defaultProps = {
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};
SearchCategory.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** The item currently selected by keyboard shortcut. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Display name. */
  name: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /** Array of Search.Result props. */
  results: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SearchCategory);

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib__ = __webpack_require__(383);











 // Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.

var defaultRenderer = function defaultRenderer(_ref) {
  var image = _ref.image,
      price = _ref.price,
      title = _ref.title,
      description = _ref.description;
  return [image && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    key: "image",
    className: "image"
  }, Object(__WEBPACK_IMPORTED_MODULE_11__lib__["f" /* createHTMLImage */])(image, {
    autoGenerateKey: false
  })), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    key: "content",
    className: "content"
  }, price && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    className: "price"
  }, price), title && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    className: "title"
  }, title), description && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    className: "description"
  }, description))];
};

defaultRenderer.handledProps = [];

var SearchResult =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(SearchResult, _Component);

  function SearchResult() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, SearchResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(SearchResult)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(SearchResult, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          renderer = _this$props.renderer;
      var classes = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_11__lib__["A" /* useKeyOnly */])(active, 'active'), 'result', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_11__lib__["r" /* getUnhandledProps */])(SearchResult, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_11__lib__["q" /* getElementType */])(SearchResult, this.props); // Note: You technically only need the 'content' wrapper when there's an
      // image. However, optionally wrapping it makes this function a lot more
      // complicated and harder to read. Since always wrapping it doesn't affect
      // the style in any way let's just do that.

      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), renderer(this.props));
    }
  }]);

  return SearchResult;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(SearchResult, "defaultProps", {
  renderer: defaultRenderer
});

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(SearchResult, "handledProps", ["active", "as", "className", "content", "description", "id", "image", "onClick", "price", "renderer", "title"]);


SearchResult.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].as,

  /** The item currently selected by keyboard shortcut. */
  active: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].contentShorthand,

  /** Additional text with less emphasis. */
  description: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** A unique identifier. */
  id: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** Add an image to the item. */
  image: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** Customized text for price. */
  price: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /**
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** Display title. */
  title: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string.isRequired
} : {};

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);






function SearchResults(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('results transition', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(SearchResults, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(SearchResults, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

SearchResults.handledProps = ["as", "children", "className", "content"];
SearchResults.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SearchResults);

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A pushable sub-component for Sidebar.
 */

function SidebarPushable(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('pushable', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(SidebarPushable, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(SidebarPushable, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

SidebarPushable.handledProps = ["as", "children", "className", "content"];
SidebarPushable.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SidebarPushable);

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A pushable sub-component for Sidebar.
 */

function SidebarPusher(props) {
  var className = props.className,
      dimmed = props.dimmed,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('pusher', Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(dimmed, 'dimmed'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(SidebarPusher, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(SidebarPusher, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

SidebarPusher.handledProps = ["as", "children", "className", "content", "dimmed"];
SidebarPusher.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (SidebarPusher);

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Segment_Segment__ = __webpack_require__(690);






/**
 * A tab pane holds the content of a tab.
 */

function TabPane(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      loading = props.loading;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(loading, 'loading'), 'tab', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(TabPane, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(TabPane, props);
  var calculatedDefaultProps = {};

  if (ElementType === __WEBPACK_IMPORTED_MODULE_5__elements_Segment_Segment__["a" /* default */]) {
    calculatedDefaultProps.attached = 'bottom';
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, calculatedDefaultProps, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

TabPane.handledProps = ["active", "as", "children", "className", "content", "loading"];
TabPane.defaultProps = {
  as: __WEBPACK_IMPORTED_MODULE_5__elements_Segment_Segment__["a" /* default */],
  active: true
};
TabPane.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** A tab pane can be active. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** A Tab.Pane can display a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
TabPane.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(TabPane, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (TabPane);

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__elements_Image__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CardContent__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CardDescription__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CardGroup__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__CardHeader__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CardMeta__ = __webpack_require__(522);


















/**
 * A card displays site content in a manner similar to a playing card.
 */

var Card =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Card, _Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_assertThisInitialized___default()(_this)), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          centered = _this$props.centered,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          content = _this$props.content,
          description = _this$props.description,
          extra = _this$props.extra,
          fluid = _this$props.fluid,
          header = _this$props.header,
          href = _this$props.href,
          image = _this$props.image,
          link = _this$props.link,
          meta = _this$props.meta,
          onClick = _this$props.onClick,
          raised = _this$props.raised;
      var classes = __WEBPACK_IMPORTED_MODULE_8_classnames___default()('ui', color, Object(__WEBPACK_IMPORTED_MODULE_11__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_11__lib__["A" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_11__lib__["A" /* useKeyOnly */])(link, 'link'), Object(__WEBPACK_IMPORTED_MODULE_11__lib__["A" /* useKeyOnly */])(raised, 'raised'), 'card', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_11__lib__["r" /* getUnhandledProps */])(Card, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_11__lib__["q" /* getElementType */])(Card, this.props, function () {
        if (onClick) return 'a';
      });

      if (!__WEBPACK_IMPORTED_MODULE_11__lib__["c" /* childrenUtils */].isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), children);
      }

      if (!__WEBPACK_IMPORTED_MODULE_11__lib__["c" /* childrenUtils */].isNil(content)) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          href: href,
          onClick: this.handleClick
        }), content);
      }

      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), __WEBPACK_IMPORTED_MODULE_12__elements_Image__["a" /* default */].create(image, {
        autoGenerateKey: false
      }), (description || header || meta) && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CardContent__["a" /* default */], {
        description: description,
        header: header,
        meta: meta
      }), extra && __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__CardContent__["a" /* default */], {
        extra: true
      }, extra));
    }
  }]);

  return Card;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "Content", __WEBPACK_IMPORTED_MODULE_13__CardContent__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "Description", __WEBPACK_IMPORTED_MODULE_14__CardDescription__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "Group", __WEBPACK_IMPORTED_MODULE_15__CardGroup__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "Header", __WEBPACK_IMPORTED_MODULE_16__CardHeader__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "Meta", __WEBPACK_IMPORTED_MODULE_17__CardMeta__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_defineProperty___default()(Card, "handledProps", ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"]);


Card.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].as,

  /** A Card can center itself inside its container. */
  centered: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** A Card can be formatted to display different colors. */
  color: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_11__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for CardDescription. */
  description: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Shorthand for CardHeader. */
  header: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** A card can contain an Image component. */
  image: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].itemShorthand,

  /** A card can be formatted to link to other content. */
  link: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Shorthand for CardMeta. */
  meta: __WEBPACK_IMPORTED_MODULE_11__lib__["m" /* customPropTypes */].itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** A Card can be formatted to raise above the page. */
  raised: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool
} : {};

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CardDescription__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CardHeader__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CardMeta__ = __webpack_require__(522);









/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */

function CardContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(extra, 'extra'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["D" /* useTextAlignProp */])(textAlign), 'content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(CardContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(CardContent, props);

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_7__CardHeader__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, header, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_8__CardMeta__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, meta, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__CardDescription__["a" /* default */], function (val) {
    return {
      content: val
    };
  }, description, {
    autoGenerateKey: false
  }));
}

CardContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "textAlign"];
CardContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for CardDescription. */
  description: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for CardHeader. */
  header: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for CardMeta. */
  meta: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].itemShorthand,

  /** A card content can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CardContent);

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Card__ = __webpack_require__(706);








/**
 * A group of cards.
 */

function CardGroup(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      content = props.content,
      doubling = props.doubling,
      items = props.items,
      itemsPerRow = props.itemsPerRow,
      stackable = props.stackable,
      textAlign = props.textAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(centered, 'centered'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(doubling, 'doubling'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(stackable, 'stackable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["D" /* useTextAlignProp */])(textAlign), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["G" /* useWidthProp */])(itemsPerRow), 'cards', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(CardGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(CardGroup, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  var itemsJSX = __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(items, function (item) {
    var key = item.key || [item.header, item.description].join('-');
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Card__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({
      key: key
    }, item));
  });

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), itemsJSX);
}

CardGroup.handledProps = ["as", "centered", "children", "className", "content", "doubling", "items", "itemsPerRow", "stackable", "textAlign"];
CardGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** A group of cards can center itself inside its container. */
  centered: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** A group of cards can double its column width for mobile. */
  doubling: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand array of props for Card. */
  items: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].WIDTHS),

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A card group can adjust its text alignment. */
  textAlign: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].TEXT_ALIGNMENTS, 'justified'))
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CardGroup);

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain an action.
 */

function CommentAction(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(active, 'active'), className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentAction, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentAction, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentAction.handledProps = ["active", "as", "children", "className", "content"];
CommentAction.defaultProps = {
  as: 'a'
};
CommentAction.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Style as the currently active action. */
  active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentAction);

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain an list of actions a user may perform related to this comment.
 */

function CommentActions(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('actions', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentActions, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentActions, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentActions.handledProps = ["as", "children", "className", "content"];
CommentActions.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentActions);

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain an author.
 */

function CommentAuthor(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('author', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentAuthor, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentAuthor, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentAuthor.handledProps = ["as", "children", "className", "content"];
CommentAuthor.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentAuthor);

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain an image or avatar.
 */

function CommentAvatar(props) {
  var className = props.className,
      src = props.src;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('avatar', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentAvatar, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentAvatar, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["f" /* createHTMLImage */])(src, {
    autoGenerateKey: false
  }));
}

CommentAvatar.handledProps = ["as", "className", "src"];
CommentAvatar.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Specifies the URL of the image. */
  src: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentAvatar);

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain content.
 */

function CommentContent(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'content');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentContent, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentContent.handledProps = ["as", "children", "className", "content"];
CommentContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentContent);

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);






/**
 * Comments can be grouped.
 */

function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      content = props.content,
      minimal = props.minimal,
      size = props.size,
      threaded = props.threaded;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(collapsed, 'collapsed'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(minimal, 'minimal'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(threaded, 'threaded'), 'comments', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(CommentGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(CommentGroup, props);
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentGroup.handledProps = ["as", "children", "className", "collapsed", "content", "minimal", "size", "threaded"];
CommentGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Comments can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'medium')),

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentGroup);

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
 */

function CommentMetadata(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('metadata', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentMetadata, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentMetadata, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentMetadata.handledProps = ["as", "children", "className", "content"];
CommentMetadata.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentMetadata);

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A comment can contain text.
 */

function CommentText(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'text');
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(CommentText, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(CommentText, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

CommentText.handledProps = ["as", "children", "className", "content"];
CommentText.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (CommentText);

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FeedContent__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FeedLabel__ = __webpack_require__(529);







/**
 * A feed contains an event.
 */

function FeedEvent(props) {
  var content = props.content,
      children = props.children,
      className = props.className,
      date = props.date,
      extraImages = props.extraImages,
      extraText = props.extraText,
      image = props.image,
      icon = props.icon,
      meta = props.meta,
      summary = props.summary;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('event', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(FeedEvent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(FeedEvent, props);
  var hasContentProp = content || date || extraImages || extraText || meta || summary;
  var contentProps = {
    content: content,
    date: date,
    extraImages: extraImages,
    extraText: extraText,
    meta: meta,
    summary: summary
  };
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__FeedLabel__["a" /* default */], function (val) {
    return {
      icon: val
    };
  }, icon, {
    autoGenerateKey: false
  }), Object(__WEBPACK_IMPORTED_MODULE_4__lib__["k" /* createShorthand */])(__WEBPACK_IMPORTED_MODULE_6__FeedLabel__["a" /* default */], function (val) {
    return {
      image: val
    };
  }, image, {
    autoGenerateKey: false
  }), hasContentProp && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FeedContent__["a" /* default */], contentProps), children);
}

FeedEvent.handledProps = ["as", "children", "className", "content", "date", "extraImages", "extraText", "icon", "image", "meta", "summary"];
FeedEvent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for FeedContent. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedDate. */
  date: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedExtra with content. */
  extraText: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** An event can contain icon label. */
  icon: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** An event can contain image label. */
  image: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (FeedEvent);

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ItemContent__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ItemDescription__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ItemExtra__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ItemGroup__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ItemHeader__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ItemImage__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ItemMeta__ = __webpack_require__(533);












/**
 * An item view presents large collections of site content for display.
 */

function Item(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      image = props.image,
      meta = props.meta;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('item', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(Item, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(Item, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_10__ItemImage__["a" /* default */].create(image, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ItemContent__["a" /* default */], {
    content: content,
    description: description,
    extra: extra,
    header: header,
    meta: meta
  }));
}

Item.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "image", "meta"];
Item.Content = __WEBPACK_IMPORTED_MODULE_5__ItemContent__["a" /* default */];
Item.Description = __WEBPACK_IMPORTED_MODULE_6__ItemDescription__["a" /* default */];
Item.Extra = __WEBPACK_IMPORTED_MODULE_7__ItemExtra__["a" /* default */];
Item.Group = __WEBPACK_IMPORTED_MODULE_8__ItemGroup__["a" /* default */];
Item.Header = __WEBPACK_IMPORTED_MODULE_9__ItemHeader__["a" /* default */];
Item.Image = __WEBPACK_IMPORTED_MODULE_10__ItemImage__["a" /* default */];
Item.Meta = __WEBPACK_IMPORTED_MODULE_11__ItemMeta__["a" /* default */];
Item.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for ItemContent component. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemImage component. */
  image: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand
} : {};
/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ItemHeader__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ItemDescription__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ItemExtra__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ItemMeta__ = __webpack_require__(533);









/**
 * An item can contain content.
 */

function ItemContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      verticalAlign = props.verticalAlign;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["F" /* useVerticalAlignProp */])(verticalAlign), 'content', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(ItemContent, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(ItemContent, props);

  if (!__WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_5__ItemHeader__["a" /* default */].create(header, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_8__ItemMeta__["a" /* default */].create(meta, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_6__ItemDescription__["a" /* default */].create(description, {
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_7__ItemExtra__["a" /* default */].create(extra, {
    autoGenerateKey: false
  }), content);
}

ItemContent.handledProps = ["as", "children", "className", "content", "description", "extra", "header", "meta", "verticalAlign"];
ItemContent.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].itemShorthand,

  /** Content can specify its vertical alignment. */
  verticalAlign: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_4__lib__["b" /* SUI */].VERTICAL_ALIGNMENTS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ItemContent);

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Item__ = __webpack_require__(718);








/**
 * A group of items.
 */

function ItemGroup(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      divided = props.divided,
      items = props.items,
      link = props.link,
      relaxed = props.relaxed,
      unstackable = props.unstackable;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(divided, 'divided'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(link, 'link'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(unstackable, 'unstackable'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["B" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), 'items', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(ItemGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(ItemGroup, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  var itemsJSX = __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(items, function (item) {
    var childKey = item.childKey,
        itemProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(item, ["childKey"]);

    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, itemProps, {
      key: finalKey
    }));
  });

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), itemsJSX);
}

ItemGroup.handledProps = ["as", "children", "className", "content", "divided", "items", "link", "relaxed", "unstackable"];
ItemGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** Items can be divided to better distinguish between grouped content. */
  divided: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand array of props for Item. */
  items: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** An item can be formatted so that the entire contents link to another page. */
  link: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /** Prevent items from stacking on mobile. */
  unstackable: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : {};
/* harmony default export */ __webpack_exports__["a"] = (ItemGroup);

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StatisticGroup__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StatisticLabel__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StatisticValue__ = __webpack_require__(725);









/**
 * A statistic emphasizes the current value of an attribute.
 */

function Statistic(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      label = props.label,
      size = props.size,
      text = props.text,
      value = props.value;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_5__lib__["E" /* useValueAndKey */])(floated, 'floated'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_5__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), 'statistic', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["r" /* getUnhandledProps */])(Statistic, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["q" /* getElementType */])(Statistic, props);

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_5__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_8__StatisticValue__["a" /* default */].create(value, {
    defaultProps: {
      text: text
    },
    autoGenerateKey: false
  }), __WEBPACK_IMPORTED_MODULE_7__StatisticLabel__["a" /* default */].create(label, {
    autoGenerateKey: false
  }));
}

Statistic.handledProps = ["as", "children", "className", "color", "content", "floated", "horizontal", "inverted", "label", "size", "text", "value"];
Statistic.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A statistic can be formatted to be different colors. */
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A statistic can sit to the left or right of other content. */
  floated: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].FLOATS),

  /** A statistic can present its measurement horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Label content of the Statistic. */
  label: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand,

  /** A statistic can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_5__lib__["b" /* SUI */].SIZES, 'big', 'massive', 'medium')),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Value content of the Statistic. */
  value: __WEBPACK_IMPORTED_MODULE_5__lib__["m" /* customPropTypes */].contentShorthand
} : {};
Statistic.Group = __WEBPACK_IMPORTED_MODULE_6__StatisticGroup__["a" /* default */];
Statistic.Label = __WEBPACK_IMPORTED_MODULE_7__StatisticLabel__["a" /* default */];
Statistic.Value = __WEBPACK_IMPORTED_MODULE_8__StatisticValue__["a" /* default */];
Statistic.create = Object(__WEBPACK_IMPORTED_MODULE_5__lib__["l" /* createShorthandFactory */])(Statistic, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (Statistic);

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Statistic__ = __webpack_require__(722);








/**
 * A group of statistics.
 */

function StatisticGroup(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      size = props.size,
      widths = props.widths;
  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('ui', color, size, Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(horizontal, 'horizontal'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["A" /* useKeyOnly */])(inverted, 'inverted'), Object(__WEBPACK_IMPORTED_MODULE_6__lib__["G" /* useWidthProp */])(widths), 'statistics', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["r" /* getUnhandledProps */])(StatisticGroup, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_6__lib__["q" /* getElementType */])(StatisticGroup, props);

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), children);
  }

  if (!__WEBPACK_IMPORTED_MODULE_6__lib__["c" /* childrenUtils */].isNil(content)) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
      className: classes
    }), content);
  }

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(items, function (item) {
    return __WEBPACK_IMPORTED_MODULE_7__Statistic__["a" /* default */].create(item);
  }));
}

StatisticGroup.handledProps = ["as", "children", "className", "color", "content", "horizontal", "inverted", "items", "size", "widths"];
StatisticGroup.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A statistic group can be formatted to be different colors. */
  color: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].COLORS),

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].contentShorthand,

  /** A statistic group can present its measurement horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Array of props for Statistic. */
  items: __WEBPACK_IMPORTED_MODULE_6__lib__["m" /* customPropTypes */].collectionShorthand,

  /** A statistic group can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].SIZES, 'big', 'massive', 'medium')),

  /** A statistic group can have its items divided evenly. */
  widths: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6__lib__["b" /* SUI */].WIDTHS)
} : {};
/* harmony default export */ __webpack_exports__["a"] = (StatisticGroup);

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A statistic can contain a label to help provide context for the presented value.
 */

function StatisticLabel(props) {
  var children = props.children,
      className = props.className,
      content = props.content;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('label', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(StatisticLabel, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(StatisticLabel, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

StatisticLabel.handledProps = ["as", "children", "className", "content"];
StatisticLabel.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand
} : {};
StatisticLabel.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(StatisticLabel, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (StatisticLabel);

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(383);





/**
 * A statistic can contain a numeric, icon, image, or text value.
 */

function StatisticValue(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      text = props.text;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_4__lib__["A" /* useKeyOnly */])(text, 'text'), 'value', className);
  var rest = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["r" /* getUnhandledProps */])(StatisticValue, props);
  var ElementType = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["q" /* getElementType */])(StatisticValue, props);
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_extends___default()({}, rest, {
    className: classes
  }), __WEBPACK_IMPORTED_MODULE_4__lib__["c" /* childrenUtils */].isNil(children) ? content : children);
}

StatisticValue.handledProps = ["as", "children", "className", "content", "text"];
StatisticValue.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: __WEBPACK_IMPORTED_MODULE_4__lib__["m" /* customPropTypes */].contentShorthand,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : {};
StatisticValue.create = Object(__WEBPACK_IMPORTED_MODULE_4__lib__["l" /* createShorthandFactory */])(StatisticValue, function (content) {
  return {
    content: content
  };
});
/* harmony default export */ __webpack_exports__["a"] = (StatisticValue);

/***/ })

})