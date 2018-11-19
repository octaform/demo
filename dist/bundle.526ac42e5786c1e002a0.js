webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isType = function isType(value) {
  return value && Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1];
};

exports.default = isType;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(88);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(94);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(52);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  get: {
    shortStringValidation: function shortStringValidation(string) {
      // min:3 - Short validation
      var map = _constants.PATTERNS.SHORT_RULE.exec(string);

      return map ? _defineProperty({}, map[1], map[2]) : _defineProperty({}, string, true);
    },
    spreadList: function spreadList(string) {
      // ...{} - To array params
      return _constants.PATTERNS.MESSAGE.LIST.exec(string);
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.isFunction = exports.isBoolean = exports.isNumber = exports.isString = exports.isObject = exports.isArray = exports.isType = exports.dom = undefined;

var _domHelper = __webpack_require__(20);

var _domHelper2 = _interopRequireDefault(_domHelper);

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

var _isArrayHelper = __webpack_require__(53);

var _isArrayHelper2 = _interopRequireDefault(_isArrayHelper);

var _isObjectHelper = __webpack_require__(54);

var _isObjectHelper2 = _interopRequireDefault(_isObjectHelper);

var _isStringHelper = __webpack_require__(55);

var _isStringHelper2 = _interopRequireDefault(_isStringHelper);

var _isNumberHelper = __webpack_require__(56);

var _isNumberHelper2 = _interopRequireDefault(_isNumberHelper);

var _isBooleanHelper = __webpack_require__(57);

var _isBooleanHelper2 = _interopRequireDefault(_isBooleanHelper);

var _isFunctionHelper = __webpack_require__(58);

var _isFunctionHelper2 = _interopRequireDefault(_isFunctionHelper);

var _getHelper = __webpack_require__(59);

var _getHelper2 = _interopRequireDefault(_getHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.dom = _domHelper2.default;
exports.isType = _isTypeHelper2.default;
exports.isArray = _isArrayHelper2.default;
exports.isObject = _isObjectHelper2.default;
exports.isString = _isStringHelper2.default;
exports.isNumber = _isNumberHelper2.default;
exports.isBoolean = _isBooleanHelper2.default;
exports.isFunction = _isFunctionHelper2.default;
exports.get = _getHelper2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isObjectLike = __webpack_require__(67);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(64);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _states = __webpack_require__(25);

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MessageActions = {
  getAll: function getAll() {
    return _states2.default.messages;
  },
  set: function set(name, msg) {
    _states2.default.messages.validator[name] = msg;
  },
  setCustomFieldMsg: function setCustomFieldMsg(field, userMessages) {
    _states2.default.messages.fields = Object.assign(_states2.default.messages.fields, !!Object.keys(userMessages).length && _defineProperty({}, field, userMessages));
  }
};

exports.default = MessageActions;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateActions = exports.MessageActions = exports.ReplaceActions = exports.ErrorActions = undefined;

var _ErrorActions = __webpack_require__(16);

var _ErrorActions2 = _interopRequireDefault(_ErrorActions);

var _ReplaceActions = __webpack_require__(17);

var _ReplaceActions2 = _interopRequireDefault(_ReplaceActions);

var _MessageActions = __webpack_require__(11);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

var _ValidateActions = __webpack_require__(102);

var _ValidateActions2 = _interopRequireDefault(_ValidateActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ErrorActions = _ErrorActions2.default;
exports.ReplaceActions = _ReplaceActions2.default;
exports.MessageActions = _MessageActions2.default;
exports.ValidateActions = _ValidateActions2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReplaceActions = __webpack_require__(17);

var _ReplaceActions2 = _interopRequireDefault(_ReplaceActions);

var _MessageActions = __webpack_require__(11);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorActions = {
  set: function set(type) {
    var _ReplaceActions$messa;

    var messages = _MessageActions2.default.getAll();

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var error = (_ReplaceActions$messa = _ReplaceActions2.default.message).error.apply(_ReplaceActions$messa, [messages.core[type]].concat(args));

    throw new Error(error);
  }
};

exports.default = ErrorActions;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _patterns = __webpack_require__(18);

var _patterns2 = _interopRequireDefault(_patterns);

var _paramsUtils = __webpack_require__(5);

var _paramsUtils2 = _interopRequireDefault(_paramsUtils);

var _helpers = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReplaceActions = {
  message: {
    error: function error() {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var params = msg.match(_patterns2.default.MESSAGE.ERROR) || [];
      return params.reduce(function (acc, current, index) {
        return acc.replace(current, args[index]);
      }, msg);
    },
    validation: function validation(msg, params) {
      var searchItems = msg.match(_patterns2.default.MESSAGE.PARAMS);
      var listParams = _paramsUtils2.default.get.spreadList(msg);

      if (listParams) {
        var text = params.join(listParams[1] || ', ');
        msg = msg.replace(listParams[0], text);
      }

      if (searchItems) {
        return searchItems.reduce(function (acc, current) {
          var _map;

          var pureKey = current.replace(_patterns2.default.MESSAGE.BRACES, '');

          var map = (_map = {}, _defineProperty(_map, (0, _helpers.isString)(params) || (0, _helpers.isNumber)(params) || (0, _helpers.isBoolean)(params), params), _defineProperty(_map, (0, _helpers.isArray)(params), params[pureKey]), _defineProperty(_map, (0, _helpers.isObject)(params), (0, _helpers.get)(params, pureKey, current)), _map);

          return acc.replace(current, map.true || '');
        }, msg);
      }

      return msg;
    }
  }
};

exports.default = ReplaceActions;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SELECTOR: /(\w+:\[.*?\])|(\w+:\(.*?\))|(\w+)/g,
  SHORT_RULE: /^(\w+):(\w+)$/g,
  MESSAGE: {
    PARAMS: /\{(.*?)\}/g,
    BRACES: /\{|\}/g,
    ERROR: /#\{(.*?)\}/g,
    LIST: /\.\.\.\{(.*?)\}/g
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CORE: {
    msg: '#{method} has not been defined a validation message',
    field: 'field #{selector} was not found',
    add: 'add method accept only a list of object: [{ name: String, message: String, fn: Function }]',
    undefined: '#{method} is not defined',
    entry: 'the entry format: #{rules} is not supported'
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = function dom(selector) {
  var elemByName = document.getElementsByName(selector);
  var elemByClass = document.getElementsByClassName(selector);
  var elemById = document.getElementById(selector);
  var elemByAll = document.querySelectorAll(selector);

  var element = elemByName && elemByName.length && elemByName || elemByClass && elemByClass.length && elemByClass || elemById && [elemById] || elemByAll && elemByAll.length && elemByAll || [];

  return Array.from(element);
};

exports.default = dom;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(65),
    objectToString = __webpack_require__(66);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(75),
    getValue = __webpack_require__(80);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messages = __webpack_require__(19);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validations: {},
  messages: {
    fields: {},
    core: _messages2.default.CORE,
    validator: {}
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  get: function get(_ref) {
    var _ref$rules = _ref.rules,
        rules = _ref$rules === undefined ? {} : _ref$rules,
        _ref$messages = _ref.messages,
        messages = _ref$messages === undefined ? {} : _ref$messages,
        value = _ref.value;

    return Object.assign({}, rules && { rules: rules }, messages && { messages: messages }, value && { value: value });
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styles_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App__ = __webpack_require__(36);





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_App__["a" /* default */], null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RG9tIiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxPQUFPLG9CQUFQO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixrQkFBaEI7O0FBRUFELFNBQVNFLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnLi9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RG9tLnJlbmRlcihcbiAgPEFwcCAvPiwgXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__octaform_additional_src__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__octaform_additional_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__octaform_additional_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octaform_src__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octaform_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__octaform_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Errors__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ValidationMap__ = __webpack_require__(108);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      hasErrors: []
    };
    _this.octaform = new __WEBPACK_IMPORTED_MODULE_2__octaform_src___default.a();
    _this.octaform.validator.add(__WEBPACK_IMPORTED_MODULE_1__octaform_additional_src___default.a);
    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.hasFieldError = _this.hasFieldError.bind(_this);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      this.validate();
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.validate();
    }
  }, {
    key: 'validate',
    value: function validate() {
      var _this2 = this;

      var validate = this.octaform.validateAll(__WEBPACK_IMPORTED_MODULE_4__ValidationMap__["a" /* default */]);
      console.log('Validation::', validate);

      this.setState({
        hasErrors: validate
      }, function () {
        return _this2.hasFieldError(validate);
      });
    }
  }, {
    key: 'hasFieldError',
    value: function hasFieldError(validate) {
      var _this3 = this;

      var classError = 'invalid';
      document.querySelectorAll('.' + classError).forEach(function (element) {
        element.classList.remove(classError);
      });

      validate.forEach(function (item) {
        var elem = document.getElementsByName(_this3[item.field].name);
        if (elem.length > 1) {
          elem.forEach(function (elm) {
            return elm.classList.add(classError);
          });
        } else {
          _this3[item.field].classList.add(classError);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var hasErrors = this.state.hasErrors;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { className: 'container', onSubmit: this.onSubmit },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-12' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'col-6 first' },
                'Octaform Validate - Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-6 text-right last' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: 'https://github.com/octaform/octaform', rel: 'noopener noreferrer', target: '_blank', className: 'github-link' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png', alt: 'Octaform - Github' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    'Github'
                  )
                )
              )
            ),
            !!hasErrors.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-12' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Errors__["a" /* default */], { errors: hasErrors })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'col-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'First name:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                type: 'text',
                name: 'firstName',
                autoComplete: 'given-name',
                ref: function ref(r) {
                  return _this4.firstName = r;
                },
                onChange: this.onChange
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'col-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Last name:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                type: 'text',
                name: 'lastName',
                autoComplete: 'family-name',
                ref: function ref(r) {
                  return _this4.lastName = r;
                },
                onChange: this.onChange
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'col-7' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Email:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                type: 'text',
                name: 'email',
                autoComplete: 'email',
                ref: function ref(r) {
                  return _this4.email = r;
                },
                onChange: this.onChange
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'col-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Country:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'select',
                {
                  name: 'country',
                  autoComplete: 'country-name',
                  ref: function ref(r) {
                    return _this4.country = r;
                  },
                  onChange: this.onChange
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { value: '' },
                  'Select a country'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { value: 'BR' },
                  'Brazil'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { value: 'UA' },
                  'Ukraine'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { value: 'US' },
                  'United States'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { className: 'col-12' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Upload a file:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                name: 'file',
                type: 'file',
                ref: function ref(r) {
                  return _this4.file = r;
                },
                onChange: this.onChange
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Gender:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                type: 'radio',
                name: 'gender',
                value: 'male',
                id: 'genderMale',
                ref: function ref(r) {
                  return _this4.gender = r;
                },
                onChange: this.onChange
              }),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { htmlFor: 'genderMale' },
                'Male'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                type: 'radio',
                name: 'gender',
                value: 'female',
                id: 'genderFemale',
                ref: function ref(r) {
                  return _this4.gender = r;
                },
                onChange: this.onChange
              }),
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { htmlFor: 'genderFemale' },
                'Female'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Do you have a portfolio:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { className: 'checkbox' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  name: 'checkbox',
                  type: 'checkbox',
                  value: 'yes',
                  ref: function ref(r) {
                    return _this4.checkbox = r;
                  },
                  onChange: this.onChange
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  'Yes'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { className: 'checkbox' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  name: 'checkbox',
                  type: 'checkbox',
                  value: 'no',
                  ref: function ref(r) {
                    return _this4.checkbox = r;
                  },
                  onChange: this.onChange
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  'No'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { className: 'checkbox' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                  name: 'checkbox',
                  type: 'checkbox',
                  value: 'maybe',
                  ref: function ref(r) {
                    return _this4.checkbox = r;
                  },
                  onChange: this.onChange
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  'Maybe'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-12' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'strong',
                  null,
                  'Resume:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
                  name: 'resume',
                  ref: function ref(r) {
                    return _this4.resume = r;
                  },
                  onChange: this.onChange
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-12 right' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                {
                  className: 'button-primary',
                  type: 'submit'
                },
                'Validate'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFkZGl0aW9uYWxzIiwiT2N0YWZvcm0iLCJFcnJvcnMiLCJWYWxpZGF0aW9uTWFwIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImhhc0Vycm9ycyIsIm9jdGFmb3JtIiwidmFsaWRhdG9yIiwiYWRkIiwib25TdWJtaXQiLCJiaW5kIiwib25DaGFuZ2UiLCJoYXNGaWVsZEVycm9yIiwidmFsaWRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUFsbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNsYXNzRXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImVsZW0iLCJnZXRFbGVtZW50c0J5TmFtZSIsIml0ZW0iLCJmaWVsZCIsIm5hbWUiLCJsZW5ndGgiLCJlbG0iLCJmaXJzdE5hbWUiLCJyIiwibGFzdE5hbWUiLCJlbWFpbCIsImNvdW50cnkiLCJmaWxlIiwiZ2VuZGVyIiwiY2hlY2tib3giLCJyZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHFDQUF4QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsMEJBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsaUJBQTFCOztJQUVxQkMsRzs7O0FBQ25CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXO0FBREEsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBSVAsUUFBSixFQUFoQjtBQUNBLFVBQUtPLFFBQUwsQ0FBY0MsU0FBZCxDQUF3QkMsR0FB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RFA7QUFFRSx3QkFBSyxVQUZQO0FBR0UseUJBQU0sSUFIUjtBQUlFLHVCQUFLO0FBQUEsMkJBQUssT0FBSzhCLFFBQUwsR0FBZ0JOLENBQXJCO0FBQUEsbUJBSlA7QUFLRSw0QkFBVSxLQUFLeEI7QUFMakIsa0JBREY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsZUFiRjtBQXdCRTtBQUFBO0FBQUEsa0JBQU8sV0FBVSxVQUFqQjtBQUNFO0FBQ0Usd0JBQUssVUFEUDtBQUVFLHdCQUFLLFVBRlA7QUFHRSx5QkFBTSxPQUhSO0FBSUUsdUJBQUs7QUFBQSwyQkFBSyxPQUFLOEIsUUFBTCxHQUFnQk4sQ0FBckI7QUFBQSxtQkFKUDtBQUtFLDRCQUFVLEtBQUt4QjtBQUxqQixrQkFERjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQXhCRjtBQTFERixXQTFDRjtBQXlJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQ0Usd0JBQUssUUFEUDtBQUVFLHVCQUFLO0FBQUEsMkJBQUssT0FBSytCLE1BQUwsR0FBY1AsQ0FBbkI7QUFBQSxtQkFGUDtBQUdFLDRCQUFVLEtBQUt4QjtBQUhqQjtBQUZGO0FBREY7QUFERixXQXpJRjtBQXNKRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQ0UsNkNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSw2QkFBVSxnQkFEWjtBQUVFLHdCQUFLO0FBRlA7QUFBQTtBQUFBO0FBRkY7QUFERjtBQXRKRjtBQURGLE9BREY7QUFxS0Q7Ozs7RUF6TjhCZCxTOztlQUFaSyxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkaXRpb25hbHMgZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMnO1xuaW1wb3J0IE9jdGFmb3JtIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtL3NyYyc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL0Vycm9ycyc7XG5pbXBvcnQgVmFsaWRhdGlvbk1hcCBmcm9tICcuL1ZhbGlkYXRpb25NYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3JzOiBbXSxcbiAgICB9XG4gICAgdGhpcy5vY3RhZm9ybSA9IG5ldyBPY3RhZm9ybSgpO1xuICAgIHRoaXMub2N0YWZvcm0udmFsaWRhdG9yLmFkZChBZGRpdGlvbmFscyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzRmllbGRFcnJvciA9IHRoaXMuaGFzRmllbGRFcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoKXtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHRoaXMub2N0YWZvcm0udmFsaWRhdGVBbGwoVmFsaWRhdGlvbk1hcCk7XG4gICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb246OicsIHZhbGlkYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzRXJyb3JzOiB2YWxpZGF0ZVxuICAgIH0sICgpID0+IHRoaXMuaGFzRmllbGRFcnJvcih2YWxpZGF0ZSkpO1xuICB9XG5cbiAgaGFzRmllbGRFcnJvcih2YWxpZGF0ZSl7XG4gICAgY29uc3QgY2xhc3NFcnJvciA9ICdpbnZhbGlkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc0Vycm9yfWApXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzRXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICB2YWxpZGF0ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHRoaXNbaXRlbS5maWVsZF0ubmFtZSk7XG4gICAgICBpZihlbGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWxlbS5mb3JFYWNoKGVsbSA9PiBlbG0uY2xhc3NMaXN0LmFkZChjbGFzc0Vycm9yKSlcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzW2l0ZW0uZmllbGRdLmNsYXNzTGlzdC5hZGQoY2xhc3NFcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNFcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29sLTYgZmlyc3RcIj5PY3RhZm9ybSBWYWxpZGF0ZSAtIERlbW88L2g0PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1yaWdodCBsYXN0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vY3RhZm9ybS9vY3RhZm9ybVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJnaXRodWItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiIGFsdD1cIk9jdGFmb3JtIC0gR2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHshIWhhc0Vycm9ycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxFcnJvcnMgZXJyb3JzPXtoYXNFcnJvcnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Rmlyc3QgbmFtZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdnaXZlbi1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmZpcnN0TmFtZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXN0IG5hbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2ZhbWlseS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmxhc3ROYW1lID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZW1haWwgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nY291bnRyeS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNvdW50cnkgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIGNvdW50cnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlJcIj5CcmF6aWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVUFcIj5Va3JhaW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTXCI+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5VcGxvYWQgYSBmaWxlOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZmlsZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+R2VuZGVyOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyTWFsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZ2VuZGVyID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz4gPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJNYWxlXCI+TWFsZTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyRmVtYWxlXCJcbiAgICAgICAgICAgICAgICByZWY9e3IgPT4gdGhpcy5nZW5kZXIgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPiA8bGFiZWwgaHRtbEZvcj1cImdlbmRlckZlbWFsZVwiPkZlbWFsZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkRvIHlvdSBoYXZlIGEgcG9ydGZvbGlvOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ5ZXNcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ZZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9cIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Obzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1heWJlXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNoZWNrYm94ID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWF5YmU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5SZXN1bWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlc3VtZVwiIFxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMucmVzdW1lID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlZhbGlkYXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _email = __webpack_require__(38);

var _email2 = _interopRequireDefault(_email);

var _extension = __webpack_require__(39);

var _extension2 = _interopRequireDefault(_extension);

var _letter = __webpack_require__(40);

var _letter2 = _interopRequireDefault(_letter);

var _maxlength = __webpack_require__(41);

var _maxlength2 = _interopRequireDefault(_maxlength);

var _minlength = __webpack_require__(42);

var _minlength2 = _interopRequireDefault(_minlength);

var _maxsize = __webpack_require__(43);

var _maxsize2 = _interopRequireDefault(_maxsize);

var _number = __webpack_require__(44);

var _number2 = _interopRequireDefault(_number);

var _required = __webpack_require__(45);

var _required2 = _interopRequireDefault(_required);

var _valueNotEquals = __webpack_require__(46);

var _valueNotEquals2 = _interopRequireDefault(_valueNotEquals);

var _minchecked = __webpack_require__(47);

var _minchecked2 = _interopRequireDefault(_minchecked);

var _teste = __webpack_require__(48);

var _teste2 = _interopRequireDefault(_teste);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = [_email2.default, _extension2.default, _letter2.default, _maxlength2.default, _minlength2.default, _maxsize2.default, _number2.default, _required2.default, _valueNotEquals2.default, _minchecked2.default, _teste2.default];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'email',
  message: 'Please enter a valid email',
  fn: function fn(value) {
    return (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value) || false
    );
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'extension',
  message: 'Please choose a file with a valid extension: (...{})',
  fn: function fn(value, element, params) {
    var file = Array.from(element[0].files);
    return file.some(function (item) {
      var fileType = item.type.split('/')[1];
      if (fileType === 'jpeg' && params.includes('jpg') && !params.includes('jpeg')) params.push('jpeg');
      return params.includes(fileType);
    });
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'letter',
  message: 'Please enter only letters',
  fn: function fn(value) {
    return (/^[a-zA-Z]+$/.test(value)
    );
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'maxlength',
  message: 'Please enter no more than {0} characters',
  fn: function fn(value, element, param) {
    return value.length <= param;
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'minlength',
  message: 'Please enter at least {0} characters',
  fn: function fn(value, element, param) {
    return value.length >= param;
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'maxsize',
  message: 'File size must not exceed {0} bytes',
  fn: function fn(value, element, param) {
    var file = Array.from(element[0].files);
    return file.some(function (item) {
      return item.size <= param;
    });
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'number',
  message: 'Please enter a valid number',
  fn: function fn(value) {
    return (/^\d+$/g.test(value)
    );
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'required',
  message: 'This field is required',
  fn: function fn(value, element) {
    if (element.length > 1) {
      return element.some(function (elem) {
        return elem.checked;
      });
    }
    return !!value.length || false;
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'valueNotEquals',
  message: 'Value must be not equal to {0}',
  fn: function fn(value, element, param) {
    return param !== value;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'minchecked',
  message: 'Please select at least {0} options',
  fn: function fn(value, element, param) {
    var qtdChecked = element.reduce(function (acc, option) {
      if (option.checked) acc++;
      return acc;
    }, 0);
    return qtdChecked >= param;
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'array',
  message: 'Array index: {0} field {1} is {2} required',
  fn: function fn() {
    return true || false;
  }
};

module.exports = {
  name: 'object',
  message: 'Object keys: {key1} || {key2.key3[0].key4} is required',
  fn: function fn() {
    return true || false;
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Validate = __webpack_require__(50);

var _Validate2 = _interopRequireDefault(_Validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Octaform = function Octaform() {
  _classCallCheck(this, Octaform);

  this.validator = _Validate2.default.getAll();
  this.validateAll = _Validate2.default.apply;
};

module.exports = Octaform;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rules = __webpack_require__(51);

var _Rules2 = _interopRequireDefault(_Rules);

var _helpers = __webpack_require__(6);

var _actions = __webpack_require__(15);

var _entries = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validate = {
  getAll: _actions.ValidateActions.getAll,
  apply: function apply() {
    var fieldMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = [];

    Object.keys(fieldMap).forEach(function (selector) {
      var fieldRulesMapper = fieldMap[selector];

      var fieldRulesEntryType = Object.assign({}, (0, _helpers.isString)(fieldRulesMapper) && _entries.entryType.field.string(fieldRulesMapper), (0, _helpers.isObject)(fieldRulesMapper) && _entries.entryType.field.object(fieldRulesMapper));

      if (!!Object.keys(fieldRulesEntryType).length) {
        var element = (0, _helpers.dom)(selector);
        _actions.MessageActions.setCustomFieldMsg(selector, fieldRulesEntryType.messages);

        if (!element.length) {
          _actions.ErrorActions.set('field', selector);
        }

        var fieldValue = fieldRulesEntryType.value || element.length && element[element.length - 1].value || '';

        var fieldRules = (0, _helpers.isArray)(fieldRulesEntryType.rules) && _entries.entryType.rules.array(fieldRulesEntryType.rules) || (0, _helpers.isObject)(fieldRulesEntryType.rules) && fieldRulesEntryType.rules || {};

        var field = {
          rules: fieldRules,
          messages: _actions.MessageActions.getAll(),
          selector: selector,
          element: element,
          value: fieldValue
        };

        // console.log('valid::', field);
        var valid = _Rules2.default.apply(field, _actions.ValidateActions.getAll());
        if (valid.messages.length) errors.push(valid);
      } else {
        _actions.ErrorActions.set('entry', fieldRulesMapper);
      }
    });

    Validate.isValid = !errors.length;

    return errors;
  }
};

exports.default = Validate;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _actions = __webpack_require__(15);

var _domHelper = __webpack_require__(20);

var _domHelper2 = _interopRequireDefault(_domHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rules = {
  apply: function apply() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var validations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var errors = {
      field: field.selector || '',
      messages: []
    };

    if (errors.field) {
      Object.entries(field.rules || {}).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            params = _ref2[1];

        var validate = validations[key];
        if (validate) {
          var isValid = validate(field.value, field.element, params, _domHelper2.default);

          if (!isValid) {
            var userMessage = field.messages.fields[field.selector] || {};
            var message = userMessage[key] || field.messages.validator[key];
            var result = _actions.ReplaceActions.message.validation(message, params);

            errors.messages.push(result);
          }
        } else {
          _actions.ErrorActions.set('undefined', key);
        }
      });
    }

    return errors;
  }
};

exports.default = Rules;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGES = exports.PATTERNS = undefined;

var _patterns = __webpack_require__(18);

var _patterns2 = _interopRequireDefault(_patterns);

var _messages = __webpack_require__(19);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PATTERNS = _patterns2.default;
exports.MESSAGES = _messages2.default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = function isArray(value) {
  return value && Array.isArray(value);
};

exports.default = isArray;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(value) {
  return (0, _isTypeHelper2.default)(value) === 'Object';
};

exports.default = isObject;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isString = function isString(value) {
  return value && (0, _isTypeHelper2.default)(value) === 'String';
};

exports.default = isString;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNumber = function isNumber(value) {
  return (0, _isTypeHelper2.default)(value) === 'Number';
};

exports.default = isNumber;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBoolean = function isBoolean(value) {
  return (0, _isTypeHelper2.default)(value) === 'Boolean';
};

exports.default = isBoolean;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTypeHelper = __webpack_require__(0);

var _isTypeHelper2 = _interopRequireDefault(_isTypeHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = function isFunction(value) {
  return (0, _isTypeHelper2.default)(value) === 'Function';
};

exports.default = isFunction;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__(60);

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(object, path, defaultValue) {
  return (0, _get3.default)(object, path, defaultValue);
};

exports.default = get;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(61);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(62),
    toKey = __webpack_require__(101);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(7),
    isKey = __webpack_require__(63),
    stringToPath = __webpack_require__(68),
    toString = __webpack_require__(98);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(7),
    isSymbol = __webpack_require__(8);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(69);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(70);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(71);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(72),
    mapCacheDelete = __webpack_require__(93),
    mapCacheGet = __webpack_require__(95),
    mapCacheHas = __webpack_require__(96),
    mapCacheSet = __webpack_require__(97);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(73),
    ListCache = __webpack_require__(85),
    Map = __webpack_require__(92);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(74),
    hashDelete = __webpack_require__(81),
    hashGet = __webpack_require__(82),
    hashHas = __webpack_require__(83),
    hashSet = __webpack_require__(84);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(76),
    isMasked = __webpack_require__(77),
    isObject = __webpack_require__(24),
    toSource = __webpack_require__(79);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(21),
    isObject = __webpack_require__(24);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(78);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(2);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(86),
    listCacheDelete = __webpack_require__(87),
    listCacheGet = __webpack_require__(89),
    listCacheHas = __webpack_require__(90),
    listCacheSet = __webpack_require__(91);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(3);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(4);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(99);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(100),
    isArray = __webpack_require__(7),
    isSymbol = __webpack_require__(8);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(8);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorActions = __webpack_require__(16);

var _ErrorActions2 = _interopRequireDefault(_ErrorActions);

var _MessageActions = __webpack_require__(11);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

var _helpers = __webpack_require__(6);

var _states = __webpack_require__(25);

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidateActions = {
  getAll: function getAll() {
    return _states2.default.validations;
  },
  set: function set(name, fn) {
    _states2.default.validations[name] = fn;
  },
  add: function add(listOfValidations) {
    if ((0, _helpers.isArray)(listOfValidations)) {
      listOfValidations.forEach(function (_ref) {
        var name = _ref.name,
            fn = _ref.fn,
            message = _ref.message;

        var hasParams = (0, _helpers.isString)(name) && (0, _helpers.isFunction)(fn) && (0, _helpers.isString)(message);

        if (hasParams && message) {
          _MessageActions2.default.set(name, message);
          ValidateActions.set(name, fn);
        }

        if (!message) _ErrorActions2.default.set('msg', name);
        if (!hasParams) _ErrorActions2.default.set('add');
      });
    } else {
      _ErrorActions2.default.set('add', listOfValidations);
    }
  }
};

_states2.default.validations = {
  add: ValidateActions.add
};

exports.default = ValidateActions;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entryType = undefined;

var _StringEntry = __webpack_require__(104);

var _StringEntry2 = _interopRequireDefault(_StringEntry);

var _ObjectEntry = __webpack_require__(105);

var _ObjectEntry2 = _interopRequireDefault(_ObjectEntry);

var _ArrayEntry = __webpack_require__(106);

var _ArrayEntry2 = _interopRequireDefault(_ArrayEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entryType = exports.entryType = {
  field: {
    object: _ObjectEntry2.default,
    string: _StringEntry2.default
  },
  rules: {
    array: _ArrayEntry2.default
  }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paramsUtils = __webpack_require__(5);

var _paramsUtils2 = _interopRequireDefault(_paramsUtils);

var _RuleModel = __webpack_require__(26);

var _RuleModel2 = _interopRequireDefault(_RuleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extractRulesFromString
var StringEntry = function StringEntry(string) {
  var rules = _paramsUtils2.default.get.shortStringValidation(string);
  return _RuleModel2.default.get({
    messages: {},
    rules: rules
  });
};

exports.default = StringEntry;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleModel = __webpack_require__(26);

var _RuleModel2 = _interopRequireDefault(_RuleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extractRulesFromString
var ObjectEntry = function ObjectEntry(object) {
  return _RuleModel2.default.get(object);
};

exports.default = ObjectEntry;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paramsUtils = __webpack_require__(5);

var _paramsUtils2 = _interopRequireDefault(_paramsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extractRulesFromArray
var ArrayEntry = function ArrayEntry() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var rules = field.reduce(function (acc, current) {
    var rules = _paramsUtils2.default.get.shortStringValidation(current);
    return Object.assign({}, acc, rules);
  }, {});

  return rules;
};

exports.default = ArrayEntry;

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Errors = function (_Component) {
  _inherits(Errors, _Component);

  function Errors() {
    _classCallCheck(this, Errors);

    return _possibleConstructorReturn(this, (Errors.__proto__ || Object.getPrototypeOf(Errors)).apply(this, arguments));
  }

  _createClass(Errors, [{
    key: 'uniqueKey',
    value: function uniqueKey() {
      return Math.random().toString(36).substring(2, 15);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var errors = this.props.errors;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'errors' },
        errors.map(function (item) {
          return item.messages.map(function (message) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              { key: _this2.uniqueKey() },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                'Error:'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'i',
                { className: 'field' },
                item.field.split(/(?![a-z])(?=[A-Z])/g).join('-').toLowerCase()
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                message
              )
            );
          });
        })
      );
    }
  }]);

  return Errors;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Errors);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0Vycm9ycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkVycm9ycyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImVycm9ycyIsInByb3BzIiwibWFwIiwiaXRlbSIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsInVuaXF1ZUtleSIsImZpZWxkIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7O0lBRXFCQyxNOzs7Ozs7Ozs7OztnQ0FDUjtBQUNULGFBQU9DLEtBQUtDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0MsRUFBeEMsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS0MsS0FEakIsQ0FDQ0QsTUFERDs7O0FBR1AsYUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFFBQWQ7QUFDR0EsZUFBT0UsR0FBUCxDQUFXLGdCQUFRO0FBQ2xCLGlCQUNFQyxLQUFLQyxRQUFMLENBQWNGLEdBQWQsQ0FBa0IsVUFBQ0csT0FBRCxFQUFhO0FBQzdCLG1CQUNFO0FBQUE7QUFBQSxnQkFBSSxLQUFLLE9BQUtDLFNBQUwsRUFBVDtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBRyxXQUFVLE9BQWI7QUFFSUgscUJBQUtJLEtBQUwsQ0FDR0MsS0FESCxDQUNTLHFCQURULEVBRUdDLElBRkgsQ0FFUSxHQUZSLEVBR0dDLFdBSEg7QUFGSixlQUZGO0FBVUU7QUFBQTtBQUFBO0FBQU9MO0FBQVA7QUFWRixhQURGO0FBY0QsV0FmRCxDQURGO0FBa0JELFNBbkJBO0FBREgsT0FERjtBQXdCRDs7OztFQWhDaUNYLFM7O2VBQWZDLE0iLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVuaXF1ZUtleSgpe1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlcnJvcnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImVycm9yc1wiPlxuICAgICAgICB7ZXJyb3JzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXRlbS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt0aGlzLnVuaXF1ZUtleSgpfT5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RXJyb3I6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZpZWxkJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgvKD8hW2Etel0pKD89W0EtWl0pL2cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLScpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG59XG4iXX0=

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  firstName: {
    // value: 'field value', // (Optional)
    rules: {
      required: true,
      minlength: 4
      // array: [
      //   '(Array:0)',
      //   '(Array:1)',
      //   '(Array:2)',
      // ],
      // object: {
      //   key1: '(Key:0)',
      //   key2: {
      //     key3: [{
      //       key4: '(key:4)',
      //     }],
      //   },
      // },
    },
    messages: {
      // (Optional, if not set will be use default message from validation)
      required: 'First Name is required'
    }
  },
  lastName: {
    rules: ['required', 'minlength:3']
  },
  email: 'email',
  country: {
    rules: {
      required: true,
      valueNotEquals: 'BR'
    }
  },
  file: {
    rules: {
      required: true,
      extension: ['png', 'jpg']
    }
  },
  resume: 'required',
  gender: 'required',
  checkbox: {
    rules: {
      required: true,
      minchecked: 2
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9WYWxpZGF0aW9uTWFwLmpzIl0sIm5hbWVzIjpbImZpcnN0TmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJtZXNzYWdlcyIsImxhc3ROYW1lIiwiZW1haWwiLCJjb3VudHJ5IiwidmFsdWVOb3RFcXVhbHMiLCJmaWxlIiwiZXh0ZW5zaW9uIiwicmVzdW1lIiwiZ2VuZGVyIiwiY2hlY2tib3giLCJtaW5jaGVja2VkIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLGFBQVc7QUFDVDtBQUNBQyxXQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTEMsaUJBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZLLEtBRkU7QUFtQlRDLGNBQVU7QUFDUjtBQUNBRixnQkFBVTtBQUZGO0FBbkJELEdBREU7QUF5QmJHLFlBQVU7QUFDUkosV0FBTyxDQUFDLFVBQUQsRUFBYSxhQUFiO0FBREMsR0F6Qkc7QUE0QmJLLFNBQU8sT0E1Qk07QUE2QmJDLFdBQVM7QUFDUE4sV0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxNLHNCQUFnQjtBQUZYO0FBREEsR0E3Qkk7QUFtQ2JDLFFBQU07QUFDSlIsV0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxRLGlCQUFXLENBQUMsS0FBRCxFQUFRLEtBQVI7QUFGTjtBQURILEdBbkNPO0FBeUNiQyxVQUFRLFVBekNLO0FBMENiQyxVQUFRLFVBMUNLO0FBMkNiQyxZQUFVO0FBQ1JaLFdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMWSxrQkFBWTtBQUZQO0FBREM7QUEzQ0csQ0FBZiIsImZpbGUiOiJWYWxpZGF0aW9uTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3ROYW1lOiB7XG4gICAgLy8gdmFsdWU6ICdmaWVsZCB2YWx1ZScsIC8vIChPcHRpb25hbClcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5sZW5ndGg6IDQsXG4gICAgICAvLyBhcnJheTogW1xuICAgICAgLy8gICAnKEFycmF5OjApJyxcbiAgICAgIC8vICAgJyhBcnJheToxKScsXG4gICAgICAvLyAgICcoQXJyYXk6MiknLFxuICAgICAgLy8gXSxcbiAgICAgIC8vIG9iamVjdDoge1xuICAgICAgLy8gICBrZXkxOiAnKEtleTowKScsXG4gICAgICAvLyAgIGtleTI6IHtcbiAgICAgIC8vICAgICBrZXkzOiBbe1xuICAgICAgLy8gICAgICAga2V5NDogJyhrZXk6NCknLFxuICAgICAgLy8gICAgIH1dLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAvLyAoT3B0aW9uYWwsIGlmIG5vdCBzZXQgd2lsbCBiZSB1c2UgZGVmYXVsdCBtZXNzYWdlIGZyb20gdmFsaWRhdGlvbilcbiAgICAgIHJlcXVpcmVkOiAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZCcsXG4gICAgfSxcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICBydWxlczogWydyZXF1aXJlZCcsICdtaW5sZW5ndGg6MyddXG4gIH0sXG4gIGVtYWlsOiAnZW1haWwnLFxuICBjb3VudHJ5OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsdWVOb3RFcXVhbHM6ICdCUicsXG4gICAgfSxcbiAgfSxcbiAgZmlsZToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGV4dGVuc2lvbjogWydwbmcnLCAnanBnJ10sXG4gICAgfSxcbiAgfSxcbiAgcmVzdW1lOiAncmVxdWlyZWQnLFxuICBnZW5kZXI6ICdyZXF1aXJlZCcsXG4gIGNoZWNrYm94OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluY2hlY2tlZDogMlxuICAgIH1cbiAgfSxcbn07XG4iXX0=

/***/ })
],[27]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNUeXBlSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL01lc3NhZ2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvRXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9SZXBsYWNlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZG9tSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9zdGF0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9tb2RlbHMvUnVsZU1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heGxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWlubGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhzaXplLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy92YWx1ZU5vdEVxdWFscy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWluY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdGVzdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQXJyYXlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzT2JqZWN0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc1N0cmluZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNOdW1iZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQm9vbGVhbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNGdW5jdGlvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZ2V0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvQXJyYXlFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL1ZhbGlkYXRpb25NYXAuanMiXSwibmFtZXMiOlsiaXNUeXBlIiwidmFsdWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsImdldCIsInNob3J0U3RyaW5nVmFsaWRhdGlvbiIsInN0cmluZyIsIm1hcCIsIlBBVFRFUk5TIiwiU0hPUlRfUlVMRSIsImV4ZWMiLCJzcHJlYWRMaXN0IiwiTUVTU0FHRSIsIkxJU1QiLCJkb20iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNCb29sZWFuIiwiaXNGdW5jdGlvbiIsIk1lc3NhZ2VBY3Rpb25zIiwiZ2V0QWxsIiwiU3RhdGUiLCJtZXNzYWdlcyIsInNldCIsIm5hbWUiLCJtc2ciLCJ2YWxpZGF0b3IiLCJzZXRDdXN0b21GaWVsZE1zZyIsImZpZWxkIiwidXNlck1lc3NhZ2VzIiwiZmllbGRzIiwiYXNzaWduIiwia2V5cyIsImxlbmd0aCIsIkVycm9yQWN0aW9ucyIsIlJlcGxhY2VBY3Rpb25zIiwiVmFsaWRhdGVBY3Rpb25zIiwidHlwZSIsImFyZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb3JlIiwiRXJyb3IiLCJwYXJhbXMiLCJFUlJPUiIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJpbmRleCIsInJlcGxhY2UiLCJ2YWxpZGF0aW9uIiwic2VhcmNoSXRlbXMiLCJQQVJBTVMiLCJsaXN0UGFyYW1zIiwicGFyYW1zVXRpbHMiLCJ0ZXh0Iiwiam9pbiIsInB1cmVLZXkiLCJCUkFDRVMiLCJ0cnVlIiwiU0VMRUNUT1IiLCJDT1JFIiwiYWRkIiwidW5kZWZpbmVkIiwiZW50cnkiLCJzZWxlY3RvciIsImVsZW1CeU5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZWxlbUJ5Q2xhc3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZWxlbUJ5SWQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1CeUFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwidmFsaWRhdGlvbnMiLCJNRVNTQUdFUyIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZuIiwidGVzdCIsImZpbGUiLCJmaWxlcyIsInNvbWUiLCJpdGVtIiwiZmlsZVR5cGUiLCJzcGxpdCIsImluY2x1ZGVzIiwicHVzaCIsInBhcmFtIiwic2l6ZSIsImVsZW0iLCJjaGVja2VkIiwicXRkQ2hlY2tlZCIsIm9wdGlvbiIsIk9jdGFmb3JtIiwiVmFsaWRhdGUiLCJ2YWxpZGF0ZUFsbCIsImFwcGx5IiwiZmllbGRNYXAiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZmllbGRSdWxlc01hcHBlciIsImZpZWxkUnVsZXNFbnRyeVR5cGUiLCJlbnRyeVR5cGUiLCJvYmplY3QiLCJmaWVsZFZhbHVlIiwiZmllbGRSdWxlcyIsImFycmF5IiwidmFsaWQiLCJSdWxlcyIsImlzVmFsaWQiLCJlbnRyaWVzIiwia2V5IiwidmFsaWRhdGUiLCJ1c2VyTWVzc2FnZSIsInJlc3VsdCIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJsaXN0T2ZWYWxpZGF0aW9ucyIsImhhc1BhcmFtcyIsIk9iamVjdEVudHJ5IiwiU3RyaW5nRW50cnkiLCJBcnJheUVudHJ5IiwiUnVsZU1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixTQUFRQSxTQUFTQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEtBQS9CLEVBQXNDSyxLQUF0QyxDQUE0QyxvQkFBNUMsRUFBa0UsQ0FBbEUsQ0FBakI7QUFDRCxDQUZEOztrQkFJZU4sTTs7Ozs7OztBQ0pmLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FBRXRDO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQSxTQUFTLG1CQUFPLENBQUMsRUFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEJBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FB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Q29udGVudCI6WyJjb25zdCBpc1R5cGUgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuICh2YWx1ZSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLm1hdGNoKC9eXFxbb2JqZWN0XFxzKC4qKVxcXSQvKVsxXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNUeXBlSGVscGVyLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBBVFRFUk5TIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IHtcbiAgICBzaG9ydFN0cmluZ1ZhbGlkYXRpb24oc3RyaW5nKSB7IC8vIG1pbjozIC0gU2hvcnQgdmFsaWRhdGlvblxuICAgICAgY29uc3QgbWFwID0gUEFUVEVSTlMuU0hPUlRfUlVMRS5leGVjKHN0cmluZyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1hcCA/XG4gICAgICAgICAgeyBbbWFwWzFdXTogbWFwWzJdIH0gOlxuICAgICAgICAgIHsgW3N0cmluZ106IHRydWUgfVxuICAgICAgKTtcbiAgICB9LFxuICAgIHNwcmVhZExpc3Qoc3RyaW5nKSB7IC8vIC4uLnt9IC0gVG8gYXJyYXkgcGFyYW1zXG4gICAgICByZXR1cm4gUEFUVEVSTlMuTUVTU0FHRS5MSVNULmV4ZWMoc3RyaW5nKTtcbiAgICB9LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvdXRpbHMvcGFyYW1zVXRpbHMuanMiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tSGVscGVyJztcbmltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5SGVscGVyJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0SGVscGVyJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICcuL2lzU3RyaW5nSGVscGVyJztcbmltcG9ydCBpc051bWJlciBmcm9tICcuL2lzTnVtYmVySGVscGVyJztcbmltcG9ydCBpc0Jvb2xlYW4gZnJvbSAnLi9pc0Jvb2xlYW5IZWxwZXInO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uSGVscGVyJztcbmltcG9ydCBnZXQgZnJvbSAnLi9nZXRIZWxwZXInO1xuXG5leHBvcnQge1xuICBkb20sXG4gIGlzVHlwZSxcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc0Z1bmN0aW9uLFxuICBnZXQsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN0YXRlIGZyb20gJy4uL3N0YXRlcyc7XG5cbmNvbnN0IE1lc3NhZ2VBY3Rpb25zID0ge1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIFN0YXRlLm1lc3NhZ2VzO1xuICB9LFxuICBzZXQobmFtZSwgbXNnKSB7XG4gICAgU3RhdGUubWVzc2FnZXMudmFsaWRhdG9yW25hbWVdID0gbXNnO1xuICB9LFxuICBzZXRDdXN0b21GaWVsZE1zZyhmaWVsZCwgdXNlck1lc3NhZ2VzKSB7XG4gICAgU3RhdGUubWVzc2FnZXMuZmllbGRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIFN0YXRlLm1lc3NhZ2VzLmZpZWxkcyxcbiAgICAgICghIU9iamVjdC5rZXlzKHVzZXJNZXNzYWdlcykubGVuZ3RoICYmIHsgW2ZpZWxkXTogdXNlck1lc3NhZ2VzIH0pLFxuICAgICk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9NZXNzYWdlQWN0aW9ucy5qcyIsImltcG9ydCBFcnJvckFjdGlvbnMgZnJvbSAnLi9FcnJvckFjdGlvbnMnO1xuaW1wb3J0IFJlcGxhY2VBY3Rpb25zIGZyb20gJy4vUmVwbGFjZUFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuaW1wb3J0IFZhbGlkYXRlQWN0aW9ucyBmcm9tICcuL1ZhbGlkYXRlQWN0aW9ucyc7XG5cbmV4cG9ydCB7XG4gIEVycm9yQWN0aW9ucyxcbiAgUmVwbGFjZUFjdGlvbnMsXG4gIE1lc3NhZ2VBY3Rpb25zLFxuICBWYWxpZGF0ZUFjdGlvbnMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlcGxhY2VBY3Rpb25zIGZyb20gJy4vUmVwbGFjZUFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuXG5jb25zdCBFcnJvckFjdGlvbnMgPSB7XG4gIHNldCh0eXBlLCAuLi5hcmdzKXtcbiAgICBjb25zdCBtZXNzYWdlcyA9IE1lc3NhZ2VBY3Rpb25zLmdldEFsbCgpO1xuICAgIGNvbnN0IGVycm9yID0gUmVwbGFjZUFjdGlvbnMubWVzc2FnZS5lcnJvcihcbiAgICAgIG1lc3NhZ2VzLmNvcmVbdHlwZV0sXG4gICAgICAuLi5hcmdzLFxuICAgICk7XG4gICAgXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9FcnJvckFjdGlvbnMuanMiLCJpbXBvcnQgUEFUVEVSTlMgZnJvbSAnLi4vY29uc3RhbnRzL3BhdHRlcm5zJztcbmltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0Jvb2xlYW4sIGdldCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCBSZXBsYWNlQWN0aW9ucyA9IHtcbiAgbWVzc2FnZToge1xuICAgIGVycm9yKG1zZyA9ICcnLCAuLi5hcmdzKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSAobXNnLm1hdGNoKFBBVFRFUk5TLk1FU1NBR0UuRVJST1IpIHx8IFtdKTtcbiAgICAgIHJldHVybiBwYXJhbXMucmVkdWNlKChhY2MsIGN1cnJlbnQsIGluZGV4KSA9PiBhY2MucmVwbGFjZShjdXJyZW50LCBhcmdzW2luZGV4XSksIG1zZyk7XG4gICAgfSxcbiAgICB2YWxpZGF0aW9uKG1zZywgcGFyYW1zKXtcbiAgICAgIGNvbnN0IHNlYXJjaEl0ZW1zID0gbXNnLm1hdGNoKFBBVFRFUk5TLk1FU1NBR0UuUEFSQU1TKTtcbiAgICAgIGNvbnN0IGxpc3RQYXJhbXMgPSBwYXJhbXNVdGlscy5nZXQuc3ByZWFkTGlzdChtc2cpO1xuXG4gICAgICBpZiAobGlzdFBhcmFtcyl7XG4gICAgICAgIGNvbnN0IHRleHQgPSBwYXJhbXMuam9pbihsaXN0UGFyYW1zWzFdIHx8ICcsICcpO1xuICAgICAgICBtc2cgPSBtc2cucmVwbGFjZShsaXN0UGFyYW1zWzBdLCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlYXJjaEl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBzZWFyY2hJdGVtcy5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHB1cmVLZXkgPSBjdXJyZW50LnJlcGxhY2UoUEFUVEVSTlMuTUVTU0FHRS5CUkFDRVMsICcnKTtcblxuICAgICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIFtpc1N0cmluZyhwYXJhbXMpIHx8IGlzTnVtYmVyKHBhcmFtcykgfHwgaXNCb29sZWFuKHBhcmFtcyldOiBwYXJhbXMsXG4gICAgICAgICAgICBbaXNBcnJheShwYXJhbXMpXTogcGFyYW1zW3B1cmVLZXldLFxuICAgICAgICAgICAgW2lzT2JqZWN0KHBhcmFtcyldOiBnZXQocGFyYW1zLCBwdXJlS2V5LCBjdXJyZW50KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGFjYy5yZXBsYWNlKGN1cnJlbnQsIChtYXAudHJ1ZSB8fCAnJykpO1xuICAgICAgICB9LCBtc2cpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbXNnO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBsYWNlQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9SZXBsYWNlQWN0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VMRUNUT1I6IC8oXFx3KzpcXFsuKj9cXF0pfChcXHcrOlxcKC4qP1xcKSl8KFxcdyspL2csXG4gIFNIT1JUX1JVTEU6IC9eKFxcdyspOihcXHcrKSQvZyxcbiAgTUVTU0FHRToge1xuICAgIFBBUkFNUzogL1xceyguKj8pXFx9L2csXG4gICAgQlJBQ0VTOiAvXFx7fFxcfS9nLFxuICAgIEVSUk9SOiAvI1xceyguKj8pXFx9L2csXG4gICAgTElTVDogL1xcLlxcLlxcLlxceyguKj8pXFx9L2csXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvcGF0dGVybnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIENPUkU6IHtcbiAgICBtc2c6ICcje21ldGhvZH0gaGFzIG5vdCBiZWVuIGRlZmluZWQgYSB2YWxpZGF0aW9uIG1lc3NhZ2UnLFxuICAgIGZpZWxkOiAnZmllbGQgI3tzZWxlY3Rvcn0gd2FzIG5vdCBmb3VuZCcsXG4gICAgYWRkOiAnYWRkIG1ldGhvZCBhY2NlcHQgb25seSBhIGxpc3Qgb2Ygb2JqZWN0OiBbeyBuYW1lOiBTdHJpbmcsIG1lc3NhZ2U6IFN0cmluZywgZm46IEZ1bmN0aW9uIH1dJyxcbiAgICB1bmRlZmluZWQ6ICcje21ldGhvZH0gaXMgbm90IGRlZmluZWQnLFxuICAgIGVudHJ5OiAndGhlIGVudHJ5IGZvcm1hdDogI3tydWxlc30gaXMgbm90IHN1cHBvcnRlZCcsXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvbWVzc2FnZXMuanMiLCJjb25zdCBkb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWxlbUJ5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHNlbGVjdG9yKTtcbiAgY29uc3QgZWxlbUJ5Q2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yKTtcbiAgY29uc3QgZWxlbUJ5SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gIGNvbnN0IGVsZW1CeUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBcbiAgY29uc3QgZWxlbWVudCA9IChcbiAgICAoKGVsZW1CeU5hbWUgJiYgZWxlbUJ5TmFtZS5sZW5ndGgpICYmIGVsZW1CeU5hbWUpIHx8XG4gICAgKChlbGVtQnlDbGFzcyAmJiBlbGVtQnlDbGFzcy5sZW5ndGgpICYmIGVsZW1CeUNsYXNzKSB8fFxuICAgIChlbGVtQnlJZCAmJiBbZWxlbUJ5SWRdKSB8fFxuICAgICgoZWxlbUJ5QWxsICYmIGVsZW1CeUFsbC5sZW5ndGgpICYmIGVsZW1CeUFsbClcbiAgKSB8fCBbXTtcbiAgXG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2RvbUhlbHBlci5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTUVTU0FHRVMgZnJvbSAnLi4vY29uc3RhbnRzL21lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2YWxpZGF0aW9uczoge30sXG4gIG1lc3NhZ2VzOiB7XG4gICAgZmllbGRzOiB7fSxcbiAgICBjb3JlOiBNRVNTQUdFUy5DT1JFLFxuICAgIHZhbGlkYXRvcjoge30sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9zdGF0ZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGdldCh7IHJ1bGVzID0ge30sIG1lc3NhZ2VzID0ge30sIHZhbHVlIH0pe1xuICAgIHJldHVybiB7XG4gICAgICAuLi4ocnVsZXMgJiYgeyBydWxlcyB9KSxcbiAgICAgIC4uLihtZXNzYWdlcyAmJiB7IG1lc3NhZ2VzIH0pLFxuICAgICAgLi4uKHZhbHVlICYmIHsgdmFsdWUgfSksXG4gICAgfTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL21vZGVscy9SdWxlTW9kZWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5SZWFjdERvbS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKU1pXRmpkQ0lzSWxKbFlXTjBSRzl0SWl3aVFYQndJaXdpY21WdVpHVnlJaXdpWkc5amRXMWxiblFpTENKblpYUkZiR1Z0Wlc1MFFubEpaQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlQwRXNTMEZCVUN4TlFVRnJRaXhQUVVGc1FqdEJRVU5CTEU5QlFVOURMRkZCUVZBc1RVRkJjVUlzVjBGQmNrSTdRVUZEUVN4UFFVRlBMRzlDUVVGUU8wRkJRMEVzVDBGQlQwTXNSMEZCVUN4TlFVRm5RaXhyUWtGQmFFSTdPMEZCUlVGRUxGTkJRVk5GTEUxQlFWUXNRMEZEUlN4dlFrRkJReXhIUVVGRUxFOUJSRVlzUlVGRlJVTXNVMEZCVTBNc1kwRkJWQ3hEUVVGM1FpeE5RVUY0UWl4RFFVWkdJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5aFpHMXBiaTlFYjJOMWJXVnVkSE12VUhKdmFtVmpkSE12YjJOMFlXWnZjbTB0WkdWdGJ5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZENCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdVbVZoWTNSRWIyMGdabkp2YlNBbmNtVmhZM1F0Wkc5dEp6dGNibWx0Y0c5eWRDQW5MaTl6WTNOekwzTjBlV3hsY3k1elkzTnpKenRjYm1sdGNHOXlkQ0JCY0hBZ1puSnZiU0FuTGk5amIyMXdiMjVsYm5SekwwRndjQ2M3WEc1Y2JsSmxZV04wUkc5dExuSmxibVJsY2loY2JpQWdQRUZ3Y0NBdlBpd2dYRzRnSUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R5YjI5MEp5bGNiaWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkaXRpb25hbHMgZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMnO1xuaW1wb3J0IE9jdGFmb3JtIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtL3NyYyc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL0Vycm9ycyc7XG5pbXBvcnQgVmFsaWRhdGlvbk1hcCBmcm9tICcuL1ZhbGlkYXRpb25NYXAnO1xuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFwcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQXBwKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNFcnJvcnM6IFtdXG4gICAgfTtcbiAgICBfdGhpcy5vY3RhZm9ybSA9IG5ldyBPY3RhZm9ybSgpO1xuICAgIF90aGlzLm9jdGFmb3JtLnZhbGlkYXRvci5hZGQoQWRkaXRpb25hbHMpO1xuICAgIF90aGlzLm9uU3VibWl0ID0gX3RoaXMub25TdWJtaXQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25DaGFuZ2UgPSBfdGhpcy5vbkNoYW5nZS5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYXNGaWVsZEVycm9yID0gX3RoaXMuaGFzRmllbGRFcnJvci5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy52YWxpZGF0ZSA9IF90aGlzLnZhbGlkYXRlLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBcHAsIFt7XG4gICAga2V5OiAnb25TdWJtaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2YWxpZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB2YWxpZGF0ZSA9IHRoaXMub2N0YWZvcm0udmFsaWRhdGVBbGwoVmFsaWRhdGlvbk1hcCk7XG4gICAgICBjb25zb2xlLmxvZygnVmFsaWRhdGlvbjo6JywgdmFsaWRhdGUpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFzRXJyb3JzOiB2YWxpZGF0ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmhhc0ZpZWxkRXJyb3IodmFsaWRhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzRmllbGRFcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0ZpZWxkRXJyb3IodmFsaWRhdGUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgY2xhc3NFcnJvciA9ICdpbnZhbGlkJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3NFcnJvcikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NFcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgdmFsaWRhdGUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKF90aGlzM1tpdGVtLmZpZWxkXS5uYW1lKTtcbiAgICAgICAgaWYgKGVsZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGVsZW0uZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5hZGQoY2xhc3NFcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMzW2l0ZW0uZmllbGRdLmNsYXNzTGlzdC5hZGQoY2xhc3NFcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgaGFzRXJyb3JzID0gdGhpcy5zdGF0ZS5oYXNFcnJvcnM7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdmb3JtJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicsIG9uU3VibWl0OiB0aGlzLm9uU3VibWl0IH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02IGZpcnN0JyB9LFxuICAgICAgICAgICAgICAgICdPY3RhZm9ybSBWYWxpZGF0ZSAtIERlbW8nXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNiB0ZXh0LXJpZ2h0IGxhc3QnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vY3RhZm9ybS9vY3RhZm9ybScsIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLCB0YXJnZXQ6ICdfYmxhbmsnLCBjbGFzc05hbWU6ICdnaXRodWItbGluaycgfSxcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiAnaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vaW1hZ2VzL21vZHVsZXMvbG9nb3NfcGFnZS9HaXRIdWItTWFyay5wbmcnLCBhbHQ6ICdPY3RhZm9ybSAtIEdpdGh1YicgfSksXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdHaXRodWInXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgISFoYXNFcnJvcnMubGVuZ3RoICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC0xMicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvcnMsIHsgZXJyb3JzOiBoYXNFcnJvcnMgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0ZpcnN0IG5hbWU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnZ2l2ZW4tbmFtZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5maXJzdE5hbWUgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0xhc3QgbmFtZTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGFzdE5hbWUnLFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2ZhbWlseS1uYW1lJyxcbiAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0Lmxhc3ROYW1lID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTcnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRW1haWw6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5lbWFpbCA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTUnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnQ291bnRyeTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnY291bnRyeS1uYW1lJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jb3VudHJ5ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICAgICdTZWxlY3QgYSBjb3VudHJ5J1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ0JSJyB9LFxuICAgICAgICAgICAgICAgICAgJ0JyYXppbCdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdVQScgfSxcbiAgICAgICAgICAgICAgICAgICdVa3JhaW5lJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1VTJyB9LFxuICAgICAgICAgICAgICAgICAgJ1VuaXRlZCBTdGF0ZXMnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnVXBsb2FkIGEgZmlsZTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5maWxlID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnR2VuZGVyOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2VuZGVyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ21hbGUnLFxuICAgICAgICAgICAgICAgIGlkOiAnZ2VuZGVyTWFsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5nZW5kZXIgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogJ2dlbmRlck1hbGUnIH0sXG4gICAgICAgICAgICAgICAgJ01hbGUnXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmZW1hbGUnLFxuICAgICAgICAgICAgICAgIGlkOiAnZ2VuZGVyRmVtYWxlJyxcbiAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmdlbmRlciA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgeyBodG1sRm9yOiAnZ2VuZGVyRmVtYWxlJyB9LFxuICAgICAgICAgICAgICAgICdGZW1hbGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdEbyB5b3UgaGF2ZSBhIHBvcnRmb2xpbzonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ3llcycsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuY2hlY2tib3ggPSByO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAnWWVzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hlY2tib3gnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbm8nLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ05vJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hlY2tib3gnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbWF5YmUnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ01heWJlJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAnUmVzdW1lOidcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jlc3VtZScsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVzdW1lID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyIHJpZ2h0JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnVmFsaWRhdGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMEZ3Y0M5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SlNaV0ZqZENJc0lrTnZiWEJ2Ym1WdWRDSXNJa0ZrWkdsMGFXOXVZV3h6SWl3aVQyTjBZV1p2Y20waUxDSkZjbkp2Y25NaUxDSldZV3hwWkdGMGFXOXVUV0Z3SWl3aVFYQndJaXdpY0hKdmNITWlMQ0p6ZEdGMFpTSXNJbWhoYzBWeWNtOXljeUlzSW05amRHRm1iM0p0SWl3aWRtRnNhV1JoZEc5eUlpd2lZV1JrSWl3aWIyNVRkV0p0YVhRaUxDSmlhVzVrSWl3aWIyNURhR0Z1WjJVaUxDSm9ZWE5HYVdWc1pFVnljbTl5SWl3aWRtRnNhV1JoZEdVaUxDSmxJaXdpY0hKbGRtVnVkRVJsWm1GMWJIUWlMQ0oyWVd4cFpHRjBaVUZzYkNJc0ltTnZibk52YkdVaUxDSnNiMmNpTENKelpYUlRkR0YwWlNJc0ltTnNZWE56UlhKeWIzSWlMQ0prYjJOMWJXVnVkQ0lzSW5GMVpYSjVVMlZzWldOMGIzSkJiR3dpTENKbWIzSkZZV05vSWl3aVpXeGxiV1Z1ZENJc0ltTnNZWE56VEdsemRDSXNJbkpsYlc5MlpTSXNJbVZzWlcwaUxDSm5aWFJGYkdWdFpXNTBjMEo1VG1GdFpTSXNJbWwwWlcwaUxDSm1hV1ZzWkNJc0ltNWhiV1VpTENKc1pXNW5kR2dpTENKbGJHMGlMQ0ptYVhKemRFNWhiV1VpTENKeUlpd2liR0Z6ZEU1aGJXVWlMQ0psYldGcGJDSXNJbU52ZFc1MGNua2lMQ0ptYVd4bElpd2laMlZ1WkdWeUlpd2lZMmhsWTJ0aWIzZ2lMQ0p5WlhOMWJXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNVMEZCYUVJc1VVRkJhVU1zVDBGQmFrTTdRVUZEUVN4UFFVRlBReXhYUVVGUUxFMUJRWGRDTEhGRFFVRjRRanRCUVVOQkxFOUJRVTlETEZGQlFWQXNUVUZCY1VJc01FSkJRWEpDTzBGQlEwRXNUMEZCVDBNc1RVRkJVQ3hOUVVGdFFpeFhRVUZ1UWp0QlFVTkJMRTlCUVU5RExHRkJRVkFzVFVGQk1FSXNhVUpCUVRGQ096dEpRVVZ4UWtNc1J6czdPMEZCUTI1Q0xHVkJRVmxETEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGQlFTd3dSMEZEV0VFc1MwRkVWenM3UVVGRmFrSXNWVUZCUzBNc1MwRkJUQ3hIUVVGaE8wRkJRMWhETEdsQ1FVRlhPMEZCUkVFc1MwRkJZanRCUVVkQkxGVkJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJTVkFzVVVGQlNpeEZRVUZvUWp0QlFVTkJMRlZCUVV0UExGRkJRVXdzUTBGQlkwTXNVMEZCWkN4RFFVRjNRa01zUjBGQmVFSXNRMEZCTkVKV0xGZEJRVFZDTzBGQlEwRXNWVUZCUzFjc1VVRkJUQ3hIUVVGblFpeE5RVUZMUVN4UlFVRk1MRU5CUVdORExFbEJRV1FzVDBGQmFFSTdRVUZEUVN4VlFVRkxReXhSUVVGTUxFZEJRV2RDTEUxQlFVdEJMRkZCUVV3c1EwRkJZMFFzU1VGQlpDeFBRVUZvUWp0QlFVTkJMRlZCUVV0RkxHRkJRVXdzUjBGQmNVSXNUVUZCUzBFc1lVRkJUQ3hEUVVGdFFrWXNTVUZCYmtJc1QwRkJja0k3UVVGRFFTeFZRVUZMUnl4UlFVRk1MRWRCUVdkQ0xFMUJRVXRCTEZGQlFVd3NRMEZCWTBnc1NVRkJaQ3hQUVVGb1FqdEJRVlpwUWp0QlFWZHNRanM3T3pzMlFrRkZVVWtzUXl4RlFVRkZPMEZCUTFSQkxGRkJRVVZETEdOQlFVWTdRVUZEUVN4WFFVRkxSaXhSUVVGTU8wRkJRMFE3T3pzclFrRkZVenRCUVVOU0xGZEJRVXRCTEZGQlFVdzdRVUZEUkRzN095dENRVVZWTzBGQlFVRTdPMEZCUTFRc1ZVRkJUVUVzVjBGQlZ5eExRVUZMVUN4UlFVRk1MRU5CUVdOVkxGZEJRV1FzUTBGQk1FSm1MR0ZCUVRGQ0xFTkJRV3BDTzBGQlEwRm5RaXhqUVVGUlF5eEhRVUZTTEVOQlFWa3NZMEZCV2l4RlFVRTBRa3dzVVVGQk5VSTdPMEZCUlVFc1YwRkJTMDBzVVVGQlRDeERRVUZqTzBGQlExcGtMRzFDUVVGWFVUdEJRVVJETEU5QlFXUXNSVUZGUnp0QlFVRkJMR1ZCUVUwc1QwRkJTMFFzWVVGQlRDeERRVUZ0UWtNc1VVRkJia0lzUTBGQlRqdEJRVUZCTEU5QlJrZzdRVUZIUkRzN08ydERRVVZoUVN4UkxFVkJRVk03UVVGQlFUczdRVUZEY2tJc1ZVRkJUVThzWVVGQllTeFRRVUZ1UWp0QlFVTkJReXhsUVVGVFF5eG5Ra0ZCVkN4UFFVRTRRa1lzVlVGQk9VSXNSVUZEUjBjc1QwRkVTQ3hEUVVOWExHMUNRVUZYTzBGQlEyeENReXhuUWtGQlVVTXNVMEZCVWl4RFFVRnJRa01zVFVGQmJFSXNRMEZCZVVKT0xGVkJRWHBDTzBGQlEwUXNUMEZJU0RzN1FVRkxRVkFzWlVGQlUxVXNUMEZCVkN4RFFVRnBRaXhuUWtGQlVUdEJRVU4yUWl4WlFVRk5TU3hQUVVGUFRpeFRRVUZUVHl4cFFrRkJWQ3hEUVVFeVFpeFBRVUZMUXl4TFFVRkxReXhMUVVGV0xFVkJRV2xDUXl4SlFVRTFReXhEUVVGaU8wRkJRMEVzV1VGQlIwb3NTMEZCUzBzc1RVRkJUQ3hIUVVGakxFTkJRV3BDTEVWQlFXOUNPMEZCUTJ4Q1RDeGxRVUZMU2l4UFFVRk1MRU5CUVdFN1FVRkJRU3h0UWtGQlQxVXNTVUZCU1ZJc1UwRkJTaXhEUVVGamFrSXNSMEZCWkN4RFFVRnJRbGtzVlVGQmJFSXNRMEZCVUR0QlFVRkJMRmRCUVdJN1FVRkRSQ3hUUVVaRUxFMUJSVXM3UVVGRFNDeHBRa0ZCUzFNc1MwRkJTME1zUzBGQlZpeEZRVUZwUWt3c1UwRkJha0lzUTBGQk1rSnFRaXhIUVVFelFpeERRVUVyUWxrc1ZVRkJMMEk3UVVGRFJEdEJRVU5HTEU5QlVFUTdRVUZSUkRzN096WkNRVVZSTzBGQlFVRTdPMEZCUVVFc1ZVRkRRMllzVTBGRVJDeEhRVU5sTEV0QlFVdEVMRXRCUkhCQ0xFTkJRME5ETEZOQlJFUTdPenRCUVVkUUxHRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlEwVTdRVUZCUVR0QlFVRkJMRmxCUVUwc1YwRkJWU3hYUVVGb1FpeEZRVUUwUWl4VlFVRlZMRXRCUVV0SkxGRkJRVE5ETzBGQlEwVTdRVUZCUVR0QlFVRkJMR05CUVVzc1YwRkJWU3hMUVVGbU8wRkJRMFU3UVVGQlFUdEJRVUZCTEdkQ1FVRkxMRmRCUVZVc1VVRkJaanRCUVVORk8wRkJRVUU3UVVGQlFTeHJRa0ZCU1N4WFFVRlZMR0ZCUVdRN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGSFJUdEJRVUZCTzBGQlFVRXNhMEpCUVVzc1YwRkJWU3gxUWtGQlpqdEJRVU5GTzBGQlFVRTdRVUZCUVN4dlFrRkJSeXhOUVVGTExITkRRVUZTTEVWQlFTdERMRXRCUVVrc2NVSkJRVzVFTEVWQlFYbEZMRkZCUVU4c1VVRkJhRVlzUlVGQmVVWXNWMEZCVlN4aFFVRnVSenRCUVVORkxDdERRVUZMTEV0QlFVa3NlVVZCUVZRc1JVRkJiVVlzUzBGQlNTeHRRa0ZCZGtZc1IwRkVSanRCUVVWRk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZHUmp0QlFVUkdPMEZCU0VZc1lVRkVSanRCUVZsSExHRkJRVU1zUTBGQlEwb3NWVUZCVlRKQ0xFMUJRVm9zU1VGRFF6dEJRVUZCTzBGQlFVRXNaMEpCUVVzc1YwRkJWU3hSUVVGbU8wRkJRMFVzYTBOQlFVTXNUVUZCUkN4SlFVRlJMRkZCUVZFelFpeFRRVUZvUWp0QlFVUkdMR0ZCWWtvN1FVRnJRa1U3UVVGQlFUdEJRVUZCTEdkQ1FVRlBMRmRCUVZVc1QwRkJha0k3UVVGRFJUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJMR1ZCUkVZN1FVRkZSVHRCUVVORkxITkNRVUZMTEUxQlJGQTdRVUZGUlN4elFrRkJTeXhYUVVaUU8wRkJSMFVzT0VKQlFXRXNXVUZJWmp0QlFVbEZMSEZDUVVGTE8wRkJRVUVzZVVKQlFVc3NUMEZCU3paQ0xGTkJRVXdzUjBGQmFVSkRMRU5CUVhSQ08wRkJRVUVzYVVKQlNsQTdRVUZMUlN3d1FrRkJWU3hMUVVGTGVFSTdRVUZNYWtJN1FVRkdSaXhoUVd4Q1JqdEJRVFpDUlR0QlFVRkJPMEZCUVVFc1owSkJRVThzVjBGQlZTeFBRVUZxUWp0QlFVTkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzWlVGRVJqdEJRVVZGTzBGQlEwVXNjMEpCUVVzc1RVRkVVRHRCUVVWRkxITkNRVUZMTEZWQlJsQTdRVUZIUlN3NFFrRkJZU3hoUVVobU8wRkJTVVVzY1VKQlFVczdRVUZCUVN4NVFrRkJTeXhQUVVGTGVVSXNVVUZCVEN4SFFVRm5Ra1FzUTBGQmNrSTdRVUZCUVN4cFFrRktVRHRCUVV0RkxEQkNRVUZWTEV0QlFVdDRRanRCUVV4cVFqdEJRVVpHTzBGQk4wSkdMRmRCUkVZN1FVRXdRMFU3UVVGQlFUdEJRVUZCTEdOQlFVc3NWMEZCVlN4TFFVRm1PMEZCUTBVN1FVRkJRVHRCUVVGQkxHZENRVUZQTEZkQlFWVXNUMEZCYWtJN1FVRkRSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEdWQlJFWTdRVUZGUlR0QlFVTkZMSE5DUVVGTExFMUJSRkE3UVVGRlJTeHpRa0ZCU3l4UFFVWlFPMEZCUjBVc09FSkJRV0VzVDBGSVpqdEJRVWxGTEhGQ1FVRkxPMEZCUVVFc2VVSkJRVXNzVDBGQlN6QkNMRXRCUVV3c1IwRkJZVVlzUTBGQmJFSTdRVUZCUVN4cFFrRktVRHRCUVV0RkxEQkNRVUZWTEV0QlFVdDRRanRCUVV4cVFqdEJRVVpHTEdGQlJFWTdRVUZaUlR0QlFVRkJPMEZCUVVFc1owSkJRVThzVjBGQlZTeFBRVUZxUWp0QlFVTkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzWlVGRVJqdEJRVVZGTzBGQlFVRTdRVUZCUVR0QlFVTkZMSGRDUVVGTExGTkJSRkE3UVVGRlJTeG5RMEZCWVN4alFVWm1PMEZCUjBVc2RVSkJRVXM3UVVGQlFTd3lRa0ZCU3l4UFFVRkxNa0lzVDBGQlRDeEhRVUZsU0N4RFFVRndRanRCUVVGQkxHMUNRVWhRTzBGQlNVVXNORUpCUVZVc1MwRkJTM2hDTzBGQlNtcENPMEZCVFVVN1FVRkJRVHRCUVVGQkxHOUNRVUZSTEU5QlFVMHNSVUZCWkR0QlFVRkJPMEZCUVVFc2FVSkJUa1k3UVVGUFJUdEJRVUZCTzBGQlFVRXNiMEpCUVZFc1QwRkJUU3hKUVVGa08wRkJRVUU3UVVGQlFTeHBRa0ZRUmp0QlFWRkZPMEZCUVVFN1FVRkJRU3h2UWtGQlVTeFBRVUZOTEVsQlFXUTdRVUZCUVR0QlFVRkJMR2xDUVZKR08wRkJVMFU3UVVGQlFUdEJRVUZCTEc5Q1FVRlJMRTlCUVUwc1NVRkJaRHRCUVVGQk8wRkJRVUU3UVVGVVJqdEJRVVpHTEdGQldrWTdRVUV5UWtVN1FVRkJRVHRCUVVGQkxHZENRVUZQTEZkQlFWVXNVVUZCYWtJN1FVRkRSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEdWQlJFWTdRVUZGUlR0QlFVTkZMSE5DUVVGTExFMUJSRkE3UVVGRlJTeHpRa0ZCU3l4TlFVWlFPMEZCUjBVc2NVSkJRVXM3UVVGQlFTeDVRa0ZCU3l4UFFVRkxORUlzU1VGQlRDeEhRVUZaU2l4RFFVRnFRanRCUVVGQkxHbENRVWhRTzBGQlNVVXNNRUpCUVZVc1MwRkJTM2hDTzBGQlNtcENPMEZCUmtZc1lVRXpRa1k3UVVGeFEwVTdRVUZCUVR0QlFVRkJMR2RDUVVGTExGZEJRVlVzVDBGQlpqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRMFVzYzBKQlFVc3NUMEZFVUR0QlFVVkZMSE5DUVVGTExGRkJSbEE3UVVGSFJTeDFRa0ZCVFN4TlFVaFNPMEZCU1VVc2IwSkJRVWNzV1VGS1REdEJRVXRGTEhGQ1FVRkxPMEZCUVVFc2VVSkJRVXNzVDBGQlN6WkNMRTFCUVV3c1IwRkJZMHdzUTBGQmJrSTdRVUZCUVN4cFFrRk1VRHRCUVUxRkxEQkNRVUZWTEV0QlFVdDRRanRCUVU1cVFpeG5Ra0ZHUmp0QlFVRkJPMEZCVTBzN1FVRkJRVHRCUVVGQkxHdENRVUZQTEZOQlFWRXNXVUZCWmp0QlFVRkJPMEZCUVVFc1pVRlVURHRCUVZkRk8wRkJRMFVzYzBKQlFVc3NUMEZFVUR0QlFVVkZMSE5DUVVGTExGRkJSbEE3UVVGSFJTeDFRa0ZCVFN4UlFVaFNPMEZCU1VVc2IwSkJRVWNzWTBGS1REdEJRVXRGTEhGQ1FVRkxPMEZCUVVFc2VVSkJRVXNzVDBGQlN6WkNMRTFCUVV3c1IwRkJZMHdzUTBGQmJrSTdRVUZCUVN4cFFrRk1VRHRCUVUxRkxEQkNRVUZWTEV0QlFVdDRRanRCUVU1cVFpeG5Ra0ZZUmp0QlFVRkJPMEZCYTBKTE8wRkJRVUU3UVVGQlFTeHJRa0ZCVHl4VFFVRlJMR05CUVdZN1FVRkJRVHRCUVVGQk8wRkJiRUpNTEdGQmNrTkdPMEZCTUVSRk8wRkJRVUU3UVVGQlFTeG5Ra0ZCU3l4WFFVRlZMRTlCUVdZN1FVRkRSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEdWQlJFWTdRVUZGUlR0QlFVRkJPMEZCUVVFc2EwSkJRVThzVjBGQlZTeFZRVUZxUWp0QlFVTkZPMEZCUTBVc2QwSkJRVXNzVlVGRVVEdEJRVVZGTEhkQ1FVRkxMRlZCUmxBN1FVRkhSU3g1UWtGQlRTeExRVWhTTzBGQlNVVXNkVUpCUVVzN1FVRkJRU3d5UWtGQlN5eFBRVUZMT0VJc1VVRkJUQ3hIUVVGblFrNHNRMEZCY2tJN1FVRkJRU3h0UWtGS1VEdEJRVXRGTERSQ1FVRlZMRXRCUVV0NFFqdEJRVXhxUWl4clFrRkVSanRCUVZGRk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZTUml4bFFVWkdPMEZCWVVVN1FVRkJRVHRCUVVGQkxHdENRVUZQTEZkQlFWVXNWVUZCYWtJN1FVRkRSVHRCUVVORkxIZENRVUZMTEZWQlJGQTdRVUZGUlN4M1FrRkJTeXhWUVVaUU8wRkJSMFVzZVVKQlFVMHNTVUZJVWp0QlFVbEZMSFZDUVVGTE8wRkJRVUVzTWtKQlFVc3NUMEZCU3poQ0xGRkJRVXdzUjBGQlowSk9MRU5CUVhKQ08wRkJRVUVzYlVKQlNsQTdRVUZMUlN3MFFrRkJWU3hMUVVGTGVFSTdRVUZNYWtJc2EwSkJSRVk3UVVGUlJUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCVWtZc1pVRmlSanRCUVhkQ1JUdEJRVUZCTzBGQlFVRXNhMEpCUVU4c1YwRkJWU3hWUVVGcVFqdEJRVU5GTzBGQlEwVXNkMEpCUVVzc1ZVRkVVRHRCUVVWRkxIZENRVUZMTEZWQlJsQTdRVUZIUlN4NVFrRkJUU3hQUVVoU08wRkJTVVVzZFVKQlFVczdRVUZCUVN3eVFrRkJTeXhQUVVGTE9FSXNVVUZCVEN4SFFVRm5RazRzUTBGQmNrSTdRVUZCUVN4dFFrRktVRHRCUVV0RkxEUkNRVUZWTEV0QlFVdDRRanRCUVV4cVFpeHJRa0ZFUmp0QlFWRkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGU1JqdEJRWGhDUmp0QlFURkVSaXhYUVRGRFJqdEJRWGxKUlR0QlFVRkJPMEZCUVVFc1kwRkJTeXhYUVVGVkxFdEJRV1k3UVVGRFJUdEJRVUZCTzBGQlFVRXNaMEpCUVVzc1YwRkJWU3hSUVVGbU8wRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlEwVTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRU3hwUWtGRVJqdEJRVVZGTzBGQlEwVXNkMEpCUVVzc1VVRkVVRHRCUVVWRkxIVkNRVUZMTzBGQlFVRXNNa0pCUVVzc1QwRkJTeXRDTEUxQlFVd3NSMEZCWTFBc1EwRkJia0k3UVVGQlFTeHRRa0ZHVUR0QlFVZEZMRFJDUVVGVkxFdEJRVXQ0UWp0QlFVaHFRanRCUVVaR08wRkJSRVk3UVVGRVJpeFhRWHBKUmp0QlFYTktSVHRCUVVGQk8wRkJRVUVzWTBGQlN5eFhRVUZWTEV0QlFXWTdRVUZEUlR0QlFVRkJPMEZCUVVFc1owSkJRVXNzVjBGQlZTeGpRVUZtTzBGQlEwVXNOa05CUkVZN1FVRkZSVHRCUVVGQk8wRkJRVUU3UVVGRFJTdzJRa0ZCVlN4blFrRkVXanRCUVVWRkxIZENRVUZMTzBGQlJsQTdRVUZCUVR0QlFVRkJPMEZCUmtZN1FVRkVSanRCUVhSS1JqdEJRVVJHTEU5QlJFWTdRVUZ4UzBRN096czdSVUY2VGpoQ1pDeFRPenRsUVVGYVN5eEhJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5aFpHMXBiaTlFYjJOMWJXVnVkSE12VUhKdmFtVmpkSE12YjJOMFlXWnZjbTB0WkdWdGJ5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZEN3Z2V5QkRiMjF3YjI1bGJuUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ1FXUmthWFJwYjI1aGJITWdabkp2YlNBbkxpNHZMaTR2TGk0dkxpNHZiMk4wWVdadmNtMHRZV1JrYVhScGIyNWhiQzl6Y21Nbk8xeHVhVzF3YjNKMElFOWpkR0ZtYjNKdElHWnliMjBnSnk0dUx5NHVMeTR1THk0dUwyOWpkR0ZtYjNKdEwzTnlZeWM3WEc1cGJYQnZjblFnUlhKeWIzSnpJR1p5YjIwZ0p5NHVMMFZ5Y205eWN5YzdYRzVwYlhCdmNuUWdWbUZzYVdSaGRHbHZiazFoY0NCbWNtOXRJQ2N1TDFaaGJHbGtZWFJwYjI1TllYQW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkJjSEFnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblFnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZTF4dUlDQWdJQ0FnYUdGelJYSnliM0p6T2lCYlhTeGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXZZM1JoWm05eWJTQTlJRzVsZHlCUFkzUmhabTl5YlNncE8xeHVJQ0FnSUhSb2FYTXViMk4wWVdadmNtMHVkbUZzYVdSaGRHOXlMbUZrWkNoQlpHUnBkR2x2Ym1Gc2N5azdYRzRnSUNBZ2RHaHBjeTV2YmxOMVltMXBkQ0E5SUhSb2FYTXViMjVUZFdKdGFYUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG05dVEyaGhibWRsSUQwZ2RHaHBjeTV2YmtOb1lXNW5aUzVpYVc1a0tIUm9hWE1wTzF4dUlDQWdJSFJvYVhNdWFHRnpSbWxsYkdSRmNuSnZjaUE5SUhSb2FYTXVhR0Z6Um1sbGJHUkZjbkp2Y2k1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUhSb2FYTXVkbUZzYVdSaGRHVWdQU0IwYUdsekxuWmhiR2xrWVhSbExtSnBibVFvZEdocGN5azdYRzRnSUgxY2JseHVJQ0J2YmxOMVltMXBkQ2hsS1h0Y2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdkR2hwY3k1MllXeHBaR0YwWlNncE8xeHVJQ0I5WEc1Y2JpQWdiMjVEYUdGdVoyVW9LWHRjYmlBZ0lDQjBhR2x6TG5aaGJHbGtZWFJsS0NrN1hHNGdJSDFjYmx4dUlDQjJZV3hwWkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeHBaR0YwWlNBOUlIUm9hWE11YjJOMFlXWnZjbTB1ZG1Gc2FXUmhkR1ZCYkd3b1ZtRnNhV1JoZEdsdmJrMWhjQ2s3WEc0Z0lDQWdZMjl1YzI5c1pTNXNiMmNvSjFaaGJHbGtZWFJwYjI0Nk9pY3NJSFpoYkdsa1lYUmxLVHRjYmx4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ2FHRnpSWEp5YjNKek9pQjJZV3hwWkdGMFpWeHVJQ0FnSUgwc0lDZ3BJRDArSUhSb2FYTXVhR0Z6Um1sbGJHUkZjbkp2Y2loMllXeHBaR0YwWlNrcE8xeHVJQ0I5WEc1Y2JpQWdhR0Z6Um1sbGJHUkZjbkp2Y2loMllXeHBaR0YwWlNsN1hHNGdJQ0FnWTI5dWMzUWdZMnhoYzNORmNuSnZjaUE5SUNkcGJuWmhiR2xrSnp0Y2JpQWdJQ0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLR0F1Skh0amJHRnpjMFZ5Y205eWZXQXBYRzRnSUNBZ0lDQXVabTl5UldGamFDaGxiR1Z0Wlc1MElEMCtJSHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLR05zWVhOelJYSnliM0lwTzF4dUlDQWdJQ0FnZlNrN1hHNWNiaUFnSUNCMllXeHBaR0YwWlM1bWIzSkZZV05vS0dsMFpXMGdQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdaV3hsYlNBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUnpRbmxPWVcxbEtIUm9hWE5iYVhSbGJTNW1hV1ZzWkYwdWJtRnRaU2s3WEc0Z0lDQWdJQ0JwWmlobGJHVnRMbXhsYm1kMGFDQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ1pXeGxiUzVtYjNKRllXTm9LR1ZzYlNBOVBpQmxiRzB1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzBWeWNtOXlLU2xjYmlBZ0lDQWdJSDFsYkhObGUxeHVJQ0FnSUNBZ0lDQjBhR2x6VzJsMFpXMHVabWxsYkdSZExtTnNZWE56VEdsemRDNWhaR1FvWTJ4aGMzTkZjbkp2Y2lrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQnlaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCb1lYTkZjbkp2Y25NZ2ZTQTlJSFJvYVhNdWMzUmhkR1U3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdQR1JwZGo1Y2JpQWdJQ0FnSUNBZ1BHWnZjbTBnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXVkR0ZwYm1WeVhDSWdiMjVUZFdKdGFYUTllM1JvYVhNdWIyNVRkV0p0YVhSOVBseHVJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2ljbTkzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YkMweE1sd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThhRFFnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNMVFlnWm1seWMzUmNJajVQWTNSaFptOXliU0JXWVd4cFpHRjBaU0F0SUVSbGJXODhMMmcwUGx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpWTI5c0xUWWdkR1Y0ZEMxeWFXZG9kQ0JzWVhOMFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl2WTNSaFptOXliUzl2WTNSaFptOXliVndpSUhKbGJEMWNJbTV2YjNCbGJtVnlJRzV2Y21WbVpYSnlaWEpjSWlCMFlYSm5aWFE5WENKZllteGhibXRjSWlCamJHRnpjMDVoYldVOVhDSm5hWFJvZFdJdGJHbHVhMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHRaeUJ6Y21NOVhDSm9kSFJ3Y3pvdkwyRnpjMlYwY3kxalpHNHVaMmwwYUhWaUxtTnZiUzlwYldGblpYTXZiVzlrZFd4bGN5OXNiMmR2YzE5d1lXZGxMMGRwZEVoMVlpMU5ZWEpyTG5CdVoxd2lJR0ZzZEQxY0lrOWpkR0ZtYjNKdElDMGdSMmwwYUhWaVhDSWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emNHRnVQa2RwZEdoMVlqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhzaElXaGhjMFZ5Y205eWN5NXNaVzVuZEdnZ0ppWWdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzB4TWx3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeEZjbkp2Y25NZ1pYSnliM0p6UFh0b1lYTkZjbkp2Y25OOUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdLWDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hoWW1Wc0lHTnNZWE56VG1GdFpUMWNJbU52YkMwMlhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkSEp2Ym1jK1JtbHljM1FnYm1GdFpUbzhMM04wY205dVp6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHVjSFYwSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTlYQ0owWlhoMFhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltWnBjbk4wVG1GdFpWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWFYwYjBOdmJYQnNaWFJsUFNkbmFYWmxiaTF1WVcxbEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG1acGNuTjBUbUZ0WlNBOUlISjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMjVEYUdGdVoyVTllM1JvYVhNdWIyNURhR0Z1WjJWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4aFltVnNQbHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQThiR0ZpWld3Z1kyeGhjM05PWVcxbFBWd2lZMjlzTFRaY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBjbTl1Wno1TVlYTjBJRzVoYldVNlBDOXpkSEp2Ym1jK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJuQjFkQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2lkR1Y0ZEZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW14aGMzUk9ZVzFsWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGRYUnZRMjl0Y0d4bGRHVTlKMlpoYldsc2VTMXVZVzFsSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFpqMTdjaUE5UGlCMGFHbHpMbXhoYzNST1lXMWxJRDBnY24xY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdmJrTm9ZVzVuWlQxN2RHaHBjeTV2YmtOb1lXNW5aWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNWNiaUFnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbkp2ZDF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4aFltVnNJR05zWVhOelRtRnRaVDFjSW1OdmJDMDNYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSVzFoYVd3NlBDOXpkSEp2Ym1jK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJuQjFkQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2lkR1Y0ZEZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U5WENKbGJXRnBiRndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMWRHOURiMjF3YkdWMFpUMG5aVzFoYVd3blhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11WlcxaGFXd2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXNZV0psYkQ1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4aFltVnNJR05zWVhOelRtRnRaVDFjSW1OdmJDMDFYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytRMjkxYm5SeWVUbzhMM04wY205dVp6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BITmxiR1ZqZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVlXMWxQVndpWTI5MWJuUnllVndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMWRHOURiMjF3YkdWMFpUMG5ZMjkxYm5SeWVTMXVZVzFsSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFpqMTdjaUE5UGlCMGFHbHpMbU52ZFc1MGNua2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRzl3ZEdsdmJpQjJZV3gxWlQxY0lsd2lQbE5sYkdWamRDQmhJR052ZFc1MGNuazhMMjl3ZEdsdmJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiM0IwYVc5dUlIWmhiSFZsUFZ3aVFsSmNJajVDY21GNmFXdzhMMjl3ZEdsdmJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiM0IwYVc5dUlIWmhiSFZsUFZ3aVZVRmNJajVWYTNKaGFXNWxQQzl2Y0hScGIyNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRzl3ZEdsdmJpQjJZV3gxWlQxY0lsVlRYQ0krVlc1cGRHVmtJRk4wWVhSbGN6d3ZiM0IwYVc5dVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzTmxiR1ZqZEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNZV0psYkNCamJHRnpjMDVoYldVOVhDSmpiMnd0TVRKY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBjbTl1Wno1VmNHeHZZV1FnWVNCbWFXeGxPand2YzNSeWIyNW5QbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzV3ZFhRZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW1acGJHVmNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2labWxzWlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11Wm1sc1pTQTlJSEo5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGFHRnVaMlU5ZTNSb2FYTXViMjVEYUdGdVoyVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeGhZbVZzUGx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YkMwMlhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkSEp2Ym1jK1IyVnVaR1Z5T2p3dmMzUnliMjVuUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlQxY0luSmhaR2x2WENJZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW1kbGJtUmxjbHdpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxQVndpYldGc1pWd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xrUFZ3aVoyVnVaR1Z5VFdGc1pWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVoyVnVaR1Z5SUQwZ2NuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZia05vWVc1blpUMTdkR2hwY3k1dmJrTm9ZVzVuWlgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo0Z1BHeGhZbVZzSUdoMGJXeEdiM0k5WENKblpXNWtaWEpOWVd4bFhDSStUV0ZzWlR3dmJHRmlaV3crWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdWNIVjBJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVOVhDSnlZV1JwYjF3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U5WENKblpXNWtaWEpjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVDFjSW1abGJXRnNaVndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsa1BWd2laMlZ1WkdWeVJtVnRZV3hsWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXWTllM0lnUFQ0Z2RHaHBjeTVuWlc1a1pYSWdQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQaUE4YkdGaVpXd2dhSFJ0YkVadmNqMWNJbWRsYm1SbGNrWmxiV0ZzWlZ3aVBrWmxiV0ZzWlR3dmJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemMwNWhiV1U5WENKamIyd3RObHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNSeWIyNW5Qa1J2SUhsdmRTQm9ZWFpsSUdFZ2NHOXlkR1p2Ykdsdk9qd3ZjM1J5YjI1blBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHRmlaV3dnWTJ4aGMzTk9ZVzFsUFZ3aVkyaGxZMnRpYjNoY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzV3ZFhRZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsUFZ3aVkyaGxZMnRpYjNoY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVOVhDSmphR1ZqYTJKdmVGd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTlYQ0o1WlhOY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVkyaGxZMnRpYjNnZ1BTQnlmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGFHRnVaMlU5ZTNSb2FYTXViMjVEYUdGdVoyVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJqNVpaWE04TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR0ZpWld3K1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTm9aV05yWW05NFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x1Y0hWMElGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltTm9aV05yWW05NFhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2lZMmhsWTJ0aWIzaGNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxQVndpYm05Y0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVkyaGxZMnRpYjNnZ1BTQnlmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGFHRnVaMlU5ZTNSb2FYTXViMjVEYUdGdVoyVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJqNU9iend2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNZV0psYkQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhzWVdKbGJDQmpiR0Z6YzA1aGJXVTlYQ0pqYUdWamEySnZlRndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cGJuQjFkQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1aGJXVTlYQ0pqYUdWamEySnZlRndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVDFjSW1Ob1pXTnJZbTk0WENJZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlQxY0ltMWhlV0psWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG1Ob1pXTnJZbTk0SUQwZ2NuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl1UTJoaGJtZGxQWHQwYUdsekxtOXVRMmhoYm1kbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0K1RXRjVZbVU4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNibHh1SUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpY205M1hDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMHhNbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wY205dVp6NVNaWE4xYldVNlBDOXpkSEp2Ym1jK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIUmxlSFJoY21WaElGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0luSmxjM1Z0WlZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdWNtVnpkVzFsSUQwZ2NuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl1UTJoaGJtZGxQWHQwYUdsekxtOXVRMmhoYm1kbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5KdmQxd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemMwNWhiV1U5WENKamIyd3RNVElnY21sbmFIUmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0p5SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTk9ZVzFsUFZ3aVluVjBkRzl1TFhCeWFXMWhjbmxjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpYzNWaWJXbDBYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQbFpoYkdsa1lYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZZblYwZEc5dVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHd2Wm05eWJUNWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc0Z0lIMWNibjFjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGVtYWlsIGZyb20gJy4vZW1haWwnO1xuaW1wb3J0IGV4dGVuc2lvbiBmcm9tICcuL2V4dGVuc2lvbic7XG5pbXBvcnQgbGV0dGVyIGZyb20gJy4vbGV0dGVyJztcbmltcG9ydCBtYXhsZW5ndGggZnJvbSAnLi9tYXhsZW5ndGgnO1xuaW1wb3J0IG1pbmxlbmd0aCBmcm9tICcuL21pbmxlbmd0aCc7XG5pbXBvcnQgbWF4c2l6ZSBmcm9tICcuL21heHNpemUnO1xuaW1wb3J0IG51bWJlciBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi9yZXF1aXJlZCc7XG5pbXBvcnQgdmFsdWVOb3RFcXVhbHMgZnJvbSAnLi92YWx1ZU5vdEVxdWFscyc7XG5pbXBvcnQgbWluY2hlY2tlZCBmcm9tICcuL21pbmNoZWNrZWQnO1xuaW1wb3J0IHRlc3RlIGZyb20gJy4vdGVzdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgZW1haWwsXG4gIGV4dGVuc2lvbixcbiAgbGV0dGVyLFxuICBtYXhsZW5ndGgsXG4gIG1pbmxlbmd0aCxcbiAgbWF4c2l6ZSxcbiAgbnVtYmVyLFxuICByZXF1aXJlZCxcbiAgdmFsdWVOb3RFcXVhbHMsXG4gIG1pbmNoZWNrZWQsXG4gIHRlc3RlLFxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnZW1haWwnLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnLFxuICBmbjogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICgvXlsrYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDR9JC9pKS50ZXN0KHZhbHVlKSB8fCBmYWxzZTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZW1haWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ2V4dGVuc2lvbicsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgY2hvb3NlIGEgZmlsZSB3aXRoIGEgdmFsaWQgZXh0ZW5zaW9uOiAoLi4ue30pJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW1zKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IEFycmF5LmZyb20oZWxlbWVudFswXS5maWxlcyk7XG4gICAgcmV0dXJuIGZpbGUuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZmlsZVR5cGUgPSAoaXRlbS50eXBlKS5zcGxpdCgnLycpWzFdO1xuICAgICAgaWYgKGZpbGVUeXBlID09PSAnanBlZycgJiYgcGFyYW1zLmluY2x1ZGVzKCdqcGcnKSAmJiAhcGFyYW1zLmluY2x1ZGVzKCdqcGVnJykpIHBhcmFtcy5wdXNoKCdqcGVnJyk7XG4gICAgICByZXR1cm4gcGFyYW1zLmluY2x1ZGVzKGZpbGVUeXBlKTtcbiAgICB9KTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZXh0ZW5zaW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdsZXR0ZXInLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIG9ubHkgbGV0dGVycycsXG4gIGZuOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKC9eW2EtekEtWl0rJC8pLnRlc3QodmFsdWUpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ21heGxlbmd0aCcsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICByZXR1cm4gKHZhbHVlLmxlbmd0aCA8PSBwYXJhbSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heGxlbmd0aC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWlubGVuZ3RoJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycycsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZS5sZW5ndGggPj0gcGFyYW0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9taW5sZW5ndGguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ21heHNpemUnLFxuICBtZXNzYWdlOiAnRmlsZSBzaXplIG11c3Qgbm90IGV4Y2VlZCB7MH0gYnl0ZXMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBBcnJheS5mcm9tKGVsZW1lbnRbMF0uZmlsZXMpO1xuICAgIHJldHVybiBmaWxlLnNvbWUoaXRlbSA9PiAoaXRlbS5zaXplIDw9IHBhcmFtKSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heHNpemUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ251bWJlcicsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXInLFxuICBmbjogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIC9eXFxkKyQvZy50ZXN0KHZhbHVlKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbnVtYmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdyZXF1aXJlZCcsXG4gIG1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnNvbWUoZWxlbSA9PiBlbGVtLmNoZWNrZWQpO1xuICAgIH1cbiAgICByZXR1cm4gKCEhdmFsdWUubGVuZ3RoIHx8IGZhbHNlKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvcmVxdWlyZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ3ZhbHVlTm90RXF1YWxzJyxcbiAgbWVzc2FnZTogJ1ZhbHVlIG11c3QgYmUgbm90IGVxdWFsIHRvIHswfScsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtICE9PSB2YWx1ZTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdmFsdWVOb3RFcXVhbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ21pbmNoZWNrZWQnLFxuICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCB7MH0gb3B0aW9ucycsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgY29uc3QgcXRkQ2hlY2tlZCA9IGVsZW1lbnQucmVkdWNlKChhY2MsIG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5jaGVja2VkKSBhY2MrKztcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIChxdGRDaGVja2VkID49IHBhcmFtKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWluY2hlY2tlZC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnYXJyYXknLFxuICBtZXNzYWdlOiAnQXJyYXkgaW5kZXg6IHswfSBmaWVsZCB7MX0gaXMgezJ9IHJlcXVpcmVkJyxcbiAgZm46ICgpID0+IHtcbiAgICByZXR1cm4gdHJ1ZSB8fCBmYWxzZTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnb2JqZWN0JyxcbiAgbWVzc2FnZTogJ09iamVjdCBrZXlzOiB7a2V5MX0gfHwge2tleTIua2V5M1swXS5rZXk0fSBpcyByZXF1aXJlZCcsXG4gIGZuOiAoKSA9PiB7XG4gICAgcmV0dXJuIHRydWUgfHwgZmFsc2U7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3Rlc3RlLmpzIiwiaW1wb3J0IFZhbGlkYXRlIGZyb20gJy4vcnVsZXMvVmFsaWRhdGUnO1xuXG5jbGFzcyBPY3RhZm9ybSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gVmFsaWRhdGUuZ2V0QWxsKCk7XG4gICAgdGhpcy52YWxpZGF0ZUFsbCA9IFZhbGlkYXRlLmFwcGx5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2N0YWZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJ1bGVzIGZyb20gJy4vUnVsZXMnO1xuaW1wb3J0IHsgZG9tLCBpc1N0cmluZywgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IEVycm9yQWN0aW9ucywgTWVzc2FnZUFjdGlvbnMsIFZhbGlkYXRlQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZW50cnlUeXBlIH0gZnJvbSAnLi4vZW50cmllcyc7XG5cbmNvbnN0IFZhbGlkYXRlID0ge1xuICBnZXRBbGw6IFZhbGlkYXRlQWN0aW9ucy5nZXRBbGwsXG4gIGFwcGx5OiAoZmllbGRNYXAgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoZmllbGRNYXApXG4gICAgICAuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRSdWxlc01hcHBlciA9IGZpZWxkTWFwW3NlbGVjdG9yXTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZpZWxkUnVsZXNFbnRyeVR5cGUgPSB7XG4gICAgICAgICAgLi4uKGlzU3RyaW5nKGZpZWxkUnVsZXNNYXBwZXIpICYmIGVudHJ5VHlwZS5maWVsZC5zdHJpbmcoZmllbGRSdWxlc01hcHBlcikpLFxuICAgICAgICAgIC4uLihpc09iamVjdChmaWVsZFJ1bGVzTWFwcGVyKSAmJiBlbnRyeVR5cGUuZmllbGQub2JqZWN0KGZpZWxkUnVsZXNNYXBwZXIpKSxcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmICghIU9iamVjdC5rZXlzKGZpZWxkUnVsZXNFbnRyeVR5cGUpLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb20oc2VsZWN0b3IpO1xuICAgICAgICAgIE1lc3NhZ2VBY3Rpb25zLnNldEN1c3RvbUZpZWxkTXNnKHNlbGVjdG9yLCBmaWVsZFJ1bGVzRW50cnlUeXBlLm1lc3NhZ2VzKTtcblxuICAgICAgICAgIGlmICghZWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgIEVycm9yQWN0aW9ucy5zZXQoJ2ZpZWxkJywgc2VsZWN0b3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSAoXG4gICAgICAgICAgICBmaWVsZFJ1bGVzRW50cnlUeXBlLnZhbHVlIHx8IFxuICAgICAgICAgICAgKGVsZW1lbnQubGVuZ3RoICYmIGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAxXS52YWx1ZSkgfHxcbiAgICAgICAgICAgICgnJylcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgZmllbGRSdWxlcyA9IChcbiAgICAgICAgICAgIChpc0FycmF5KGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpICYmIGVudHJ5VHlwZS5ydWxlcy5hcnJheShmaWVsZFJ1bGVzRW50cnlUeXBlLnJ1bGVzKSkgfHxcbiAgICAgICAgICAgIChpc09iamVjdChmaWVsZFJ1bGVzRW50cnlUeXBlLnJ1bGVzKSAmJiBmaWVsZFJ1bGVzRW50cnlUeXBlLnJ1bGVzKSB8fFxuICAgICAgICAgICAge31cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgZmllbGQgPSB7XG4gICAgICAgICAgICBydWxlczogZmllbGRSdWxlcyxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBNZXNzYWdlQWN0aW9ucy5nZXRBbGwoKSxcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbGlkOjonLCBmaWVsZCk7XG4gICAgICAgICAgY29uc3QgdmFsaWQgPSBSdWxlcy5hcHBseShmaWVsZCwgVmFsaWRhdGVBY3Rpb25zLmdldEFsbCgpKTtcbiAgICAgICAgICBpZiAodmFsaWQubWVzc2FnZXMubGVuZ3RoKSBlcnJvcnMucHVzaCh2YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRXJyb3JBY3Rpb25zLnNldCgnZW50cnknLCBmaWVsZFJ1bGVzTWFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBWYWxpZGF0ZS5pc1ZhbGlkID0gIWVycm9ycy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwiaW1wb3J0IHsgUmVwbGFjZUFjdGlvbnMsIEVycm9yQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IGRvbSBmcm9tICcuLi9oZWxwZXJzL2RvbUhlbHBlcic7XG5cbmNvbnN0IFJ1bGVzID0ge1xuICBhcHBseTogKGZpZWxkID0ge30sIHZhbGlkYXRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7XG4gICAgICBmaWVsZDogKGZpZWxkLnNlbGVjdG9yIHx8ICcnKSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKGVycm9ycy5maWVsZCl7XG4gICAgICBPYmplY3RcbiAgICAgICAgLmVudHJpZXMoZmllbGQucnVsZXMgfHwge30pXG4gICAgICAgIC5mb3JFYWNoKChba2V5LCBwYXJhbXNdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0aW9uc1trZXldO1xuICAgICAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlKFxuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgZmllbGQuZWxlbWVudCxcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICBkb20sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSBmaWVsZC5tZXNzYWdlcy5maWVsZHNbZmllbGQuc2VsZWN0b3JdIHx8IHt9O1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gKHVzZXJNZXNzYWdlW2tleV0gfHwgZmllbGQubWVzc2FnZXMudmFsaWRhdG9yW2tleV0pO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZXBsYWNlQWN0aW9ucy5tZXNzYWdlLnZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgZXJyb3JzLm1lc3NhZ2VzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRXJyb3JBY3Rpb25zLnNldCgndW5kZWZpbmVkJywga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdWxlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJpbXBvcnQgUEFUVEVSTlMgZnJvbSAnLi9wYXR0ZXJucyc7XG5pbXBvcnQgTUVTU0FHRVMgZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmV4cG9ydCB7XG4gIFBBVFRFUk5TLFxuICBNRVNTQUdFUyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsImNvbnN0IGlzQXJyYXkgPSB2YWx1ZSA9PiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQXJyYXlIZWxwZXIuanMiLCJpbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcblxuY29uc3QgaXNPYmplY3QgPSB2YWx1ZSA9PiAoaXNUeXBlKHZhbHVlKSA9PT0gJ09iamVjdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc09iamVjdEhlbHBlci5qcyIsImltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuXG5jb25zdCBpc1N0cmluZyA9IHZhbHVlID0+ICh2YWx1ZSAmJiBpc1R5cGUodmFsdWUpID09PSAnU3RyaW5nJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzU3RyaW5nSGVscGVyLmpzIiwiaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5cbmNvbnN0IGlzTnVtYmVyID0gdmFsdWUgPT4gKGlzVHlwZSh2YWx1ZSkgPT09ICdOdW1iZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOdW1iZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNOdW1iZXJIZWxwZXIuanMiLCJpbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcblxuY29uc3QgaXNCb29sZWFuID0gdmFsdWUgPT4gKGlzVHlwZSh2YWx1ZSkgPT09ICdCb29sZWFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQm9vbGVhbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc0Jvb2xlYW5IZWxwZXIuanMiLCJpbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcblxuY29uc3QgaXNGdW5jdGlvbiA9IHZhbHVlID0+IChpc1R5cGUodmFsdWUpID09PSAnRnVuY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc0Z1bmN0aW9uSGVscGVyLmpzIiwiaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmNvbnN0IGdldCA9IChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkgPT4gX2dldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9nZXRIZWxwZXIuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0UGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXkuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBFcnJvckFjdGlvbnMgZnJvbSAnLi9FcnJvckFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzRnVuY3Rpb24sIGlzQXJyYXkgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuLi9zdGF0ZXMnO1xuXG5jb25zdCBWYWxpZGF0ZUFjdGlvbnMgPSB7XG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gU3RhdGUudmFsaWRhdGlvbnM7XG4gIH0sXG4gIHNldChuYW1lLCBmbikge1xuICAgIFN0YXRlLnZhbGlkYXRpb25zW25hbWVdID0gZm47XG4gIH0sXG4gIGFkZChsaXN0T2ZWYWxpZGF0aW9ucykge1xuICAgIGlmIChpc0FycmF5KGxpc3RPZlZhbGlkYXRpb25zKSkge1xuICAgICAgbGlzdE9mVmFsaWRhdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCBmbiwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc1BhcmFtcyA9IChpc1N0cmluZyhuYW1lKSAmJiBpc0Z1bmN0aW9uKGZuKSAmJiBpc1N0cmluZyhtZXNzYWdlKSk7XG5cbiAgICAgICAgaWYgKGhhc1BhcmFtcyAmJiBtZXNzYWdlKSB7XG4gICAgICAgICAgTWVzc2FnZUFjdGlvbnMuc2V0KG5hbWUsIG1lc3NhZ2UpO1xuICAgICAgICAgIFZhbGlkYXRlQWN0aW9ucy5zZXQobmFtZSwgZm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlKSBFcnJvckFjdGlvbnMuc2V0KCdtc2cnLCBuYW1lKTtcbiAgICAgICAgaWYgKCFoYXNQYXJhbXMpIEVycm9yQWN0aW9ucy5zZXQoJ2FkZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9yQWN0aW9ucy5zZXQoJ2FkZCcsIGxpc3RPZlZhbGlkYXRpb25zKTtcbiAgICB9XG4gIH0sXG59O1xuXG5TdGF0ZS52YWxpZGF0aW9ucyA9IHtcbiAgYWRkOiBWYWxpZGF0ZUFjdGlvbnMuYWRkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVBY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsImltcG9ydCBTdHJpbmdFbnRyeSBmcm9tICcuL1N0cmluZ0VudHJ5JztcbmltcG9ydCBPYmplY3RFbnRyeSBmcm9tICcuL09iamVjdEVudHJ5JztcbmltcG9ydCBBcnJheUVudHJ5IGZyb20gJy4vQXJyYXlFbnRyeSc7XG5cbmV4cG9ydCBjb25zdCBlbnRyeVR5cGUgPSB7XG4gIGZpZWxkOiB7XG4gICAgb2JqZWN0OiBPYmplY3RFbnRyeSxcbiAgICBzdHJpbmc6IFN0cmluZ0VudHJ5LFxuICB9LFxuICBydWxlczoge1xuICAgIGFycmF5OiBBcnJheUVudHJ5LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9pbmRleC5qcyIsImltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5pbXBvcnQgUnVsZU1vZGVsIGZyb20gJy4uL21vZGVscy9SdWxlTW9kZWwnO1xuXG4vLyBleHRyYWN0UnVsZXNGcm9tU3RyaW5nXG5jb25zdCBTdHJpbmdFbnRyeSA9IChzdHJpbmcpID0+IHtcbiAgY29uc3QgcnVsZXMgPSBwYXJhbXNVdGlscy5nZXQuc2hvcnRTdHJpbmdWYWxpZGF0aW9uKHN0cmluZyk7XG4gIHJldHVybiBSdWxlTW9kZWwuZ2V0KHsgXG4gICAgbWVzc2FnZXM6IHt9LFxuICAgIHJ1bGVzLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwiaW1wb3J0IFJ1bGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvUnVsZU1vZGVsJztcblxuLy8gZXh0cmFjdFJ1bGVzRnJvbVN0cmluZ1xuY29uc3QgT2JqZWN0RW50cnkgPSAob2JqZWN0KSA9PiB7XG4gIHJldHVybiBSdWxlTW9kZWwuZ2V0KG9iamVjdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsImltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5cbi8vIGV4dHJhY3RSdWxlc0Zyb21BcnJheVxuY29uc3QgQXJyYXlFbnRyeSA9IChmaWVsZCA9IFtdKSA9PiB7XG4gIGNvbnN0IHJ1bGVzID0gZmllbGQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCBydWxlcyA9IHBhcmFtc1V0aWxzLmdldC5zaG9ydFN0cmluZ1ZhbGlkYXRpb24oY3VycmVudCk7XG4gICAgcmV0dXJuIHsgLi4uYWNjLCAuLi5ydWxlcyB9O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9BcnJheUVudHJ5LmpzIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgRXJyb3JzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEVycm9ycywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXJyb3JzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvcnMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFcnJvcnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFcnJvcnMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFcnJvcnMsIFt7XG4gICAga2V5OiAndW5pcXVlS2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pcXVlS2V5KCkge1xuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9ycztcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdlcnJvcnMnIH0sXG4gICAgICAgIGVycm9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5tZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICB7IGtleTogX3RoaXMyLnVuaXF1ZUtleSgpIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRXJyb3I6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdpJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2ZpZWxkJyB9LFxuICAgICAgICAgICAgICAgIGl0ZW0uZmllbGQuc3BsaXQoLyg/IVthLXpdKSg/PVtBLVpdKS9nKS5qb2luKCctJykudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVycm9ycztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMFZ5Y205eWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKU1pXRmpkQ0lzSWtOdmJYQnZibVZ1ZENJc0lrVnljbTl5Y3lJc0lrMWhkR2dpTENKeVlXNWtiMjBpTENKMGIxTjBjbWx1WnlJc0luTjFZbk4wY21sdVp5SXNJbVZ5Y205eWN5SXNJbkJ5YjNCeklpd2liV0Z3SWl3aWFYUmxiU0lzSW0xbGMzTmhaMlZ6SWl3aWJXVnpjMkZuWlNJc0luVnVhWEYxWlV0bGVTSXNJbVpwWld4a0lpd2ljM0JzYVhRaUxDSnFiMmx1SWl3aWRHOU1iM2RsY2tOaGMyVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNVMEZCYUVJc1VVRkJhVU1zVDBGQmFrTTdPMGxCUlhGQ1F5eE5PenM3T3pzN096czdPenRuUTBGRFVqdEJRVU5VTEdGQlFVOURMRXRCUVV0RExFMUJRVXdzUjBGQlkwTXNVVUZCWkN4RFFVRjFRaXhGUVVGMlFpeEZRVUV5UWtNc1UwRkJNMElzUTBGQmNVTXNRMEZCY2tNc1JVRkJkME1zUlVGQmVFTXNRMEZCVUR0QlFVTkVPenM3TmtKQlJWRTdRVUZCUVRzN1FVRkJRU3hWUVVORFF5eE5RVVJFTEVkQlExa3NTMEZCUzBNc1MwRkVha0lzUTBGRFEwUXNUVUZFUkRzN08wRkJSMUFzWVVGRFJUdEJRVUZCTzBGQlFVRXNWVUZCU1N4WFFVRlZMRkZCUVdRN1FVRkRSMEVzWlVGQlQwVXNSMEZCVUN4RFFVRlhMR2RDUVVGUk8wRkJRMnhDTEdsQ1FVTkZReXhMUVVGTFF5eFJRVUZNTEVOQlFXTkdMRWRCUVdRc1EwRkJhMElzVlVGQlEwY3NUMEZCUkN4RlFVRmhPMEZCUXpkQ0xHMUNRVU5GTzBGQlFVRTdRVUZCUVN4blFrRkJTU3hMUVVGTExFOUJRVXRETEZOQlFVd3NSVUZCVkR0QlFVTkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzWlVGRVJqdEJRVVZGTzBGQlFVRTdRVUZCUVN4clFrRkJSeXhYUVVGVkxFOUJRV0k3UVVGRlNVZ3NjVUpCUVV0SkxFdEJRVXdzUTBGRFIwTXNTMEZFU0N4RFFVTlRMSEZDUVVSVUxFVkJSVWRETEVsQlJrZ3NRMEZGVVN4SFFVWlNMRVZCUjBkRExGZEJTRWc3UVVGR1NpeGxRVVpHTzBGQlZVVTdRVUZCUVR0QlFVRkJPMEZCUVU5TU8wRkJRVkE3UVVGV1JpeGhRVVJHTzBGQlkwUXNWMEZtUkN4RFFVUkdPMEZCYTBKRUxGTkJia0pCTzBGQlJFZ3NUMEZFUmp0QlFYZENSRHM3T3p0RlFXaERhVU5ZTEZNN08yVkJRV1pETEUwaUxDSm1hV3hsSWpvaVJYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTloWkcxcGJpOUViMk4xYldWdWRITXZVSEp2YW1WamRITXZiMk4wWVdadmNtMHRaR1Z0YnlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ3dnZXlCRGIyMXdiMjVsYm5RZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRVZ5Y205eWN5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRDQjdYRzRnSUhWdWFYRjFaVXRsZVNncGUxeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSmhibVJ2YlNncExuUnZVM1J5YVc1bktETTJLUzV6ZFdKemRISnBibWNvTWl3Z01UVXBYRzRnSUgxY2JseHVJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qmxjbkp2Y25NZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdQSFZzSUdOc1lYTnpUbUZ0WlQxY0ltVnljbTl5YzF3aVBseHVJQ0FnSUNBZ0lDQjdaWEp5YjNKekxtMWhjQ2hwZEdWdElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdhWFJsYlM1dFpYTnpZV2RsY3k1dFlYQW9LRzFsYzNOaFoyVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ2EyVjVQWHQwYUdsekxuVnVhWEYxWlV0bGVTZ3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUlhKeWIzSTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjMDVoYldVOUoyWnBaV3hrSno1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbDBaVzB1Wm1sbGJHUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNXpjR3hwZENndktEOGhXMkV0ZWwwcEtEODlXMEV0V2wwcEwyY3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVhbTlwYmlnbkxTY3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVkRzlNYjNkbGNrTmhjMlVvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmo1N2JXVnpjMkZuWlgwOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJSDBwZlZ4dUlDQWdJQ0FnUEM5MWJENWNiaUFnSUNBcE8xeHVJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0TmFtZToge1xuICAgIC8vIHZhbHVlOiAnZmllbGQgdmFsdWUnLCAvLyAoT3B0aW9uYWwpXG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWlubGVuZ3RoOiA0XG4gICAgICAvLyBhcnJheTogW1xuICAgICAgLy8gICAnKEFycmF5OjApJyxcbiAgICAgIC8vICAgJyhBcnJheToxKScsXG4gICAgICAvLyAgICcoQXJyYXk6MiknLFxuICAgICAgLy8gXSxcbiAgICAgIC8vIG9iamVjdDoge1xuICAgICAgLy8gICBrZXkxOiAnKEtleTowKScsXG4gICAgICAvLyAgIGtleTI6IHtcbiAgICAgIC8vICAgICBrZXkzOiBbe1xuICAgICAgLy8gICAgICAga2V5NDogJyhrZXk6NCknLFxuICAgICAgLy8gICAgIH1dLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICAvLyAoT3B0aW9uYWwsIGlmIG5vdCBzZXQgd2lsbCBiZSB1c2UgZGVmYXVsdCBtZXNzYWdlIGZyb20gdmFsaWRhdGlvbilcbiAgICAgIHJlcXVpcmVkOiAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZCdcbiAgICB9XG4gIH0sXG4gIGxhc3ROYW1lOiB7XG4gICAgcnVsZXM6IFsncmVxdWlyZWQnLCAnbWlubGVuZ3RoOjMnXVxuICB9LFxuICBlbWFpbDogJ2VtYWlsJyxcbiAgY291bnRyeToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbHVlTm90RXF1YWxzOiAnQlInXG4gICAgfVxuICB9LFxuICBmaWxlOiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZXh0ZW5zaW9uOiBbJ3BuZycsICdqcGcnXVxuICAgIH1cbiAgfSxcbiAgcmVzdW1lOiAncmVxdWlyZWQnLFxuICBnZW5kZXI6ICdyZXF1aXJlZCcsXG4gIGNoZWNrYm94OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluY2hlY2tlZDogMlxuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqYjIxd2IyNWxiblJ6TDBGd2NDOVdZV3hwWkdGMGFXOXVUV0Z3TG1weklsMHNJbTVoYldWeklqcGJJbVpwY25OMFRtRnRaU0lzSW5KMWJHVnpJaXdpY21WeGRXbHlaV1FpTENKdGFXNXNaVzVuZEdnaUxDSnRaWE56WVdkbGN5SXNJbXhoYzNST1lXMWxJaXdpWlcxaGFXd2lMQ0pqYjNWdWRISjVJaXdpZG1Gc2RXVk9iM1JGY1hWaGJITWlMQ0ptYVd4bElpd2laWGgwWlc1emFXOXVJaXdpY21WemRXMWxJaXdpWjJWdVpHVnlJaXdpWTJobFkydGliM2dpTENKdGFXNWphR1ZqYTJWa0lsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeGxRVUZsTzBGQlEySkJMR0ZCUVZjN1FVRkRWRHRCUVVOQlF5eFhRVUZQTzBGQlEweERMR2RDUVVGVkxFbEJSRXc3UVVGRlRFTXNhVUpCUVZjN1FVRkRXRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRV1pMTEV0QlJrVTdRVUZ0UWxSRExHTkJRVlU3UVVGRFVqdEJRVU5CUml4blFrRkJWVHRCUVVaR08wRkJia0pFTEVkQlJFVTdRVUY1UW1KSExGbEJRVlU3UVVGRFVrb3NWMEZCVHl4RFFVRkRMRlZCUVVRc1JVRkJZU3hoUVVGaU8wRkJSRU1zUjBGNlFrYzdRVUUwUW1KTExGTkJRVThzVDBFMVFrMDdRVUUyUW1KRExGZEJRVk03UVVGRFVFNHNWMEZCVHp0QlFVTk1ReXhuUWtGQlZTeEpRVVJNTzBGQlJVeE5MSE5DUVVGblFqdEJRVVpZTzBGQlJFRXNSMEUzUWtrN1FVRnRRMkpETEZGQlFVMDdRVUZEU2xJc1YwRkJUenRCUVVOTVF5eG5Ra0ZCVlN4SlFVUk1PMEZCUlV4UkxHbENRVUZYTEVOQlFVTXNTMEZCUkN4RlFVRlJMRXRCUVZJN1FVRkdUanRCUVVSSUxFZEJia05QTzBGQmVVTmlReXhWUVVGUkxGVkJla05MTzBGQk1FTmlReXhWUVVGUkxGVkJNVU5MTzBGQk1rTmlReXhaUVVGVk8wRkJRMUphTEZkQlFVODdRVUZEVEVNc1owSkJRVlVzU1VGRVREdEJRVVZNV1N4clFrRkJXVHRCUVVaUU8wRkJSRU03UVVFelEwY3NRMEZCWmlJc0ltWnBiR1VpT2lKV1lXeHBaR0YwYVc5dVRXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OWhaRzFwYmk5RWIyTjFiV1Z1ZEhNdlVISnZhbVZqZEhNdmIyTjBZV1p2Y20wdFpHVnRieUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1ptbHljM1JPWVcxbE9pQjdYRzRnSUNBZ0x5OGdkbUZzZFdVNklDZG1hV1ZzWkNCMllXeDFaU2NzSUM4dklDaFBjSFJwYjI1aGJDbGNiaUFnSUNCeWRXeGxjem9nZTF4dUlDQWdJQ0FnY21WeGRXbHlaV1E2SUhSeWRXVXNYRzRnSUNBZ0lDQnRhVzVzWlc1bmRHZzZJRFFzWEc0Z0lDQWdJQ0F2THlCaGNuSmhlVG9nVzF4dUlDQWdJQ0FnTHk4Z0lDQW5LRUZ5Y21GNU9qQXBKeXhjYmlBZ0lDQWdJQzh2SUNBZ0p5aEJjbkpoZVRveEtTY3NYRzRnSUNBZ0lDQXZMeUFnSUNjb1FYSnlZWGs2TWlrbkxGeHVJQ0FnSUNBZ0x5OGdYU3hjYmlBZ0lDQWdJQzh2SUc5aWFtVmpkRG9nZTF4dUlDQWdJQ0FnTHk4Z0lDQnJaWGt4T2lBbktFdGxlVG93S1Njc1hHNGdJQ0FnSUNBdkx5QWdJR3RsZVRJNklIdGNiaUFnSUNBZ0lDOHZJQ0FnSUNCclpYa3pPaUJiZTF4dUlDQWdJQ0FnTHk4Z0lDQWdJQ0FnYTJWNU5Eb2dKeWhyWlhrNk5Da25MRnh1SUNBZ0lDQWdMeThnSUNBZ0lIMWRMRnh1SUNBZ0lDQWdMeThnSUNCOUxGeHVJQ0FnSUNBZ0x5OGdmU3hjYmlBZ0lDQjlMRnh1SUNBZ0lHMWxjM05oWjJWek9pQjdYRzRnSUNBZ0lDQXZMeUFvVDNCMGFXOXVZV3dzSUdsbUlHNXZkQ0J6WlhRZ2QybHNiQ0JpWlNCMWMyVWdaR1ZtWVhWc2RDQnRaWE56WVdkbElHWnliMjBnZG1Gc2FXUmhkR2x2YmlsY2JpQWdJQ0FnSUhKbGNYVnBjbVZrT2lBblJtbHljM1FnVG1GdFpTQnBjeUJ5WlhGMWFYSmxaQ2NzWEc0Z0lDQWdmU3hjYmlBZ2ZTeGNiaUFnYkdGemRFNWhiV1U2SUh0Y2JpQWdJQ0J5ZFd4bGN6b2dXeWR5WlhGMWFYSmxaQ2NzSUNkdGFXNXNaVzVuZEdnNk15ZGRYRzRnSUgwc1hHNGdJR1Z0WVdsc09pQW5aVzFoYVd3bkxGeHVJQ0JqYjNWdWRISjVPaUI3WEc0Z0lDQWdjblZzWlhNNklIdGNiaUFnSUNBZ0lISmxjWFZwY21Wa09pQjBjblZsTEZ4dUlDQWdJQ0FnZG1Gc2RXVk9iM1JGY1hWaGJITTZJQ2RDVWljc1hHNGdJQ0FnZlN4Y2JpQWdmU3hjYmlBZ1ptbHNaVG9nZTF4dUlDQWdJSEoxYkdWek9pQjdYRzRnSUNBZ0lDQnlaWEYxYVhKbFpEb2dkSEoxWlN4Y2JpQWdJQ0FnSUdWNGRHVnVjMmx2YmpvZ1d5ZHdibWNuTENBbmFuQm5KMTBzWEc0Z0lDQWdmU3hjYmlBZ2ZTeGNiaUFnY21WemRXMWxPaUFuY21WeGRXbHlaV1FuTEZ4dUlDQm5aVzVrWlhJNklDZHlaWEYxYVhKbFpDY3NYRzRnSUdOb1pXTnJZbTk0T2lCN1hHNGdJQ0FnY25Wc1pYTTZJSHRjYmlBZ0lDQWdJSEpsY1hWcGNtVmtPaUIwY25WbExGeHVJQ0FnSUNBZ2JXbHVZMmhsWTJ0bFpEb2dNbHh1SUNBZ0lIMWNiaUFnZlN4Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXBwL1ZhbGlkYXRpb25NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9