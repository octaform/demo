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
    rules: {
      required: true,
      minlength: 4
    },
    messages: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9WYWxpZGF0aW9uTWFwLmpzIl0sIm5hbWVzIjpbImZpcnN0TmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJtZXNzYWdlcyIsImxhc3ROYW1lIiwiZW1haWwiLCJjb3VudHJ5IiwidmFsdWVOb3RFcXVhbHMiLCJmaWxlIiwiZXh0ZW5zaW9uIiwicmVzdW1lIiwiZ2VuZGVyIiwiY2hlY2tib3giLCJtaW5jaGVja2VkIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLGFBQVc7QUFDVEMsV0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGlCQUFXO0FBRk4sS0FERTtBQUtUQyxjQUFVO0FBQ1JGLGdCQUFVO0FBREY7QUFMRCxHQURFO0FBVWJHLFlBQVU7QUFDUkosV0FBTyxDQUFDLFVBQUQsRUFBYSxhQUFiO0FBREMsR0FWRztBQWFiSyxTQUFPLE9BYk07QUFjYkMsV0FBUztBQUNQTixXQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTE0sc0JBQWdCO0FBRlg7QUFEQSxHQWRJO0FBb0JiQyxRQUFNO0FBQ0pSLFdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMUSxpQkFBVyxDQUFDLEtBQUQsRUFBUSxLQUFSO0FBRk47QUFESCxHQXBCTztBQTBCYkMsVUFBUSxVQTFCSztBQTJCYkMsVUFBUSxVQTNCSztBQTRCYkMsWUFBVTtBQUNSWixXQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTFksa0JBQVk7QUFGUDtBQURDO0FBNUJHLENBQWYiLCJmaWxlIjoiVmFsaWRhdGlvbk1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL29jdGFmb3JtLWRlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0TmFtZToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbmxlbmd0aDogNCxcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICByZXF1aXJlZDogJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQnLFxuICAgIH0sXG4gIH0sXG4gIGxhc3ROYW1lOiB7XG4gICAgcnVsZXM6IFsncmVxdWlyZWQnLCAnbWlubGVuZ3RoOjMnXVxuICB9LFxuICBlbWFpbDogJ2VtYWlsJyxcbiAgY291bnRyeToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbHVlTm90RXF1YWxzOiAnQlInLFxuICAgIH0sXG4gIH0sXG4gIGZpbGU6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBleHRlbnNpb246IFsncG5nJywgJ2pwZyddLFxuICAgIH0sXG4gIH0sXG4gIHJlc3VtZTogJ3JlcXVpcmVkJyxcbiAgZ2VuZGVyOiAncmVxdWlyZWQnLFxuICBjaGVja2JveDoge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbmNoZWNrZWQ6IDJcbiAgICB9XG4gIH0sXG59O1xuIl19

/***/ })
],[27]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNUeXBlSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL01lc3NhZ2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvRXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9SZXBsYWNlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZG9tSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9zdGF0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9tb2RlbHMvUnVsZU1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heGxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWlubGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhzaXplLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy92YWx1ZU5vdEVxdWFscy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWluY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdGVzdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQXJyYXlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzT2JqZWN0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc1N0cmluZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNOdW1iZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQm9vbGVhbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNGdW5jdGlvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZ2V0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvQXJyYXlFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL1ZhbGlkYXRpb25NYXAuanMiXSwibmFtZXMiOlsiaXNUeXBlIiwidmFsdWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsImdldCIsInNob3J0U3RyaW5nVmFsaWRhdGlvbiIsInN0cmluZyIsIm1hcCIsIlBBVFRFUk5TIiwiU0hPUlRfUlVMRSIsImV4ZWMiLCJzcHJlYWRMaXN0IiwiTUVTU0FHRSIsIkxJU1QiLCJkb20iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNCb29sZWFuIiwiaXNGdW5jdGlvbiIsIk1lc3NhZ2VBY3Rpb25zIiwiZ2V0QWxsIiwiU3RhdGUiLCJtZXNzYWdlcyIsInNldCIsIm5hbWUiLCJtc2ciLCJ2YWxpZGF0b3IiLCJzZXRDdXN0b21GaWVsZE1zZyIsImZpZWxkIiwidXNlck1lc3NhZ2VzIiwiZmllbGRzIiwiYXNzaWduIiwia2V5cyIsImxlbmd0aCIsIkVycm9yQWN0aW9ucyIsIlJlcGxhY2VBY3Rpb25zIiwiVmFsaWRhdGVBY3Rpb25zIiwidHlwZSIsImFyZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb3JlIiwiRXJyb3IiLCJwYXJhbXMiLCJFUlJPUiIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJpbmRleCIsInJlcGxhY2UiLCJ2YWxpZGF0aW9uIiwic2VhcmNoSXRlbXMiLCJQQVJBTVMiLCJsaXN0UGFyYW1zIiwicGFyYW1zVXRpbHMiLCJ0ZXh0Iiwiam9pbiIsInB1cmVLZXkiLCJCUkFDRVMiLCJ0cnVlIiwiU0VMRUNUT1IiLCJDT1JFIiwiYWRkIiwidW5kZWZpbmVkIiwiZW50cnkiLCJzZWxlY3RvciIsImVsZW1CeU5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZWxlbUJ5Q2xhc3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZWxlbUJ5SWQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1CeUFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwidmFsaWRhdGlvbnMiLCJNRVNTQUdFUyIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZuIiwidGVzdCIsImZpbGUiLCJmaWxlcyIsInNvbWUiLCJpdGVtIiwiZmlsZVR5cGUiLCJzcGxpdCIsImluY2x1ZGVzIiwicHVzaCIsInBhcmFtIiwic2l6ZSIsImVsZW0iLCJjaGVja2VkIiwicXRkQ2hlY2tlZCIsIm9wdGlvbiIsIk9jdGFmb3JtIiwiVmFsaWRhdGUiLCJ2YWxpZGF0ZUFsbCIsImFwcGx5IiwiZmllbGRNYXAiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZmllbGRSdWxlc01hcHBlciIsImZpZWxkUnVsZXNFbnRyeVR5cGUiLCJlbnRyeVR5cGUiLCJvYmplY3QiLCJmaWVsZFZhbHVlIiwiZmllbGRSdWxlcyIsImFycmF5IiwidmFsaWQiLCJSdWxlcyIsImlzVmFsaWQiLCJlbnRyaWVzIiwia2V5IiwidmFsaWRhdGUiLCJ1c2VyTWVzc2FnZSIsInJlc3VsdCIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJsaXN0T2ZWYWxpZGF0aW9ucyIsImhhc1BhcmFtcyIsIk9iamVjdEVudHJ5IiwiU3RyaW5nRW50cnkiLCJBcnJheUVudHJ5IiwiUnVsZU1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixTQUFRQSxTQUFTQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEtBQS9CLEVBQXNDSyxLQUF0QyxDQUE0QyxvQkFBNUMsRUFBa0UsQ0FBbEUsQ0FBakI7QUFDRCxDQUZEOztrQkFJZU4sTTs7Ozs7OztBQ0pmLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FBRXRDO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQSxTQUFTLG1CQUFPLENBQUMsRUFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEJBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FB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dUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUVuYzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLGFBQWEsNkNBQUs7QUFDbEI7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFLO0FBQ3hCO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekMsY0FBYyw2Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQUs7QUFDbkI7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQSxjQUFjLDZDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQyxDQUFDLGdEQUFTOztBQUVJLCtEQUFNLEVBQUM7QUFDdEIsMkNBQTJDLGNBQWMsdStFOzs7Ozs7O0FDbEUxQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMkMsY0FBYyxtekQiLCJmaWxlIjoiYnVuZGxlLmNjNThhZjlmMmEwMWJjNDdjMDVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNUeXBlID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiAodmFsdWUgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5tYXRjaCgvXlxcW29iamVjdFxccyguKilcXF0kLylbMV0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzVHlwZUhlbHBlci5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQQVRURVJOUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiB7XG4gICAgc2hvcnRTdHJpbmdWYWxpZGF0aW9uKHN0cmluZykgeyAvLyBtaW46MyAtIFNob3J0IHZhbGlkYXRpb25cbiAgICAgIGNvbnN0IG1hcCA9IFBBVFRFUk5TLlNIT1JUX1JVTEUuZXhlYyhzdHJpbmcpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBtYXAgP1xuICAgICAgICAgIHsgW21hcFsxXV06IG1hcFsyXSB9IDpcbiAgICAgICAgICB7IFtzdHJpbmddOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBzcHJlYWRMaXN0KHN0cmluZykgeyAvLyAuLi57fSAtIFRvIGFycmF5IHBhcmFtc1xuICAgICAgcmV0dXJuIFBBVFRFUk5TLk1FU1NBR0UuTElTVC5leGVjKHN0cmluZyk7XG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbUhlbHBlcic7XG5pbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheUhlbHBlcic7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdEhlbHBlcic7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9pc1N0cmluZ0hlbHBlcic7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSAnLi9pc051bWJlckhlbHBlcic7XG5pbXBvcnQgaXNCb29sZWFuIGZyb20gJy4vaXNCb29sZWFuSGVscGVyJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbkhlbHBlcic7XG5pbXBvcnQgZ2V0IGZyb20gJy4vZ2V0SGVscGVyJztcblxuZXhwb3J0IHtcbiAgZG9tLFxuICBpc1R5cGUsXG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNGdW5jdGlvbixcbiAgZ2V0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pbmRleC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTdGF0ZSBmcm9tICcuLi9zdGF0ZXMnO1xuXG5jb25zdCBNZXNzYWdlQWN0aW9ucyA9IHtcbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiBTdGF0ZS5tZXNzYWdlcztcbiAgfSxcbiAgc2V0KG5hbWUsIG1zZykge1xuICAgIFN0YXRlLm1lc3NhZ2VzLnZhbGlkYXRvcltuYW1lXSA9IG1zZztcbiAgfSxcbiAgc2V0Q3VzdG9tRmllbGRNc2coZmllbGQsIHVzZXJNZXNzYWdlcykge1xuICAgIFN0YXRlLm1lc3NhZ2VzLmZpZWxkcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBTdGF0ZS5tZXNzYWdlcy5maWVsZHMsXG4gICAgICAoISFPYmplY3Qua2V5cyh1c2VyTWVzc2FnZXMpLmxlbmd0aCAmJiB7IFtmaWVsZF06IHVzZXJNZXNzYWdlcyB9KSxcbiAgICApO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUFjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvTWVzc2FnZUFjdGlvbnMuanMiLCJpbXBvcnQgRXJyb3JBY3Rpb25zIGZyb20gJy4vRXJyb3JBY3Rpb25zJztcbmltcG9ydCBSZXBsYWNlQWN0aW9ucyBmcm9tICcuL1JlcGxhY2VBY3Rpb25zJztcbmltcG9ydCBNZXNzYWdlQWN0aW9ucyBmcm9tICcuL01lc3NhZ2VBY3Rpb25zJztcbmltcG9ydCBWYWxpZGF0ZUFjdGlvbnMgZnJvbSAnLi9WYWxpZGF0ZUFjdGlvbnMnO1xuXG5leHBvcnQge1xuICBFcnJvckFjdGlvbnMsXG4gIFJlcGxhY2VBY3Rpb25zLFxuICBNZXNzYWdlQWN0aW9ucyxcbiAgVmFsaWRhdGVBY3Rpb25zLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZXBsYWNlQWN0aW9ucyBmcm9tICcuL1JlcGxhY2VBY3Rpb25zJztcbmltcG9ydCBNZXNzYWdlQWN0aW9ucyBmcm9tICcuL01lc3NhZ2VBY3Rpb25zJztcblxuY29uc3QgRXJyb3JBY3Rpb25zID0ge1xuICBzZXQodHlwZSwgLi4uYXJncyl7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBNZXNzYWdlQWN0aW9ucy5nZXRBbGwoKTtcbiAgICBjb25zdCBlcnJvciA9IFJlcGxhY2VBY3Rpb25zLm1lc3NhZ2UuZXJyb3IoXG4gICAgICBtZXNzYWdlcy5jb3JlW3R5cGVdLFxuICAgICAgLi4uYXJncyxcbiAgICApO1xuICAgIFxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvckFjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvRXJyb3JBY3Rpb25zLmpzIiwiaW1wb3J0IFBBVFRFUk5TIGZyb20gJy4uL2NvbnN0YW50cy9wYXR0ZXJucyc7XG5pbXBvcnQgcGFyYW1zVXRpbHMgZnJvbSAnLi4vdXRpbHMvcGFyYW1zVXRpbHMnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc051bWJlciwgaXNCb29sZWFuLCBnZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgUmVwbGFjZUFjdGlvbnMgPSB7XG4gIG1lc3NhZ2U6IHtcbiAgICBlcnJvcihtc2cgPSAnJywgLi4uYXJncykge1xuICAgICAgY29uc3QgcGFyYW1zID0gKG1zZy5tYXRjaChQQVRURVJOUy5NRVNTQUdFLkVSUk9SKSB8fCBbXSk7XG4gICAgICByZXR1cm4gcGFyYW1zLnJlZHVjZSgoYWNjLCBjdXJyZW50LCBpbmRleCkgPT4gYWNjLnJlcGxhY2UoY3VycmVudCwgYXJnc1tpbmRleF0pLCBtc2cpO1xuICAgIH0sXG4gICAgdmFsaWRhdGlvbihtc2csIHBhcmFtcyl7XG4gICAgICBjb25zdCBzZWFyY2hJdGVtcyA9IG1zZy5tYXRjaChQQVRURVJOUy5NRVNTQUdFLlBBUkFNUyk7XG4gICAgICBjb25zdCBsaXN0UGFyYW1zID0gcGFyYW1zVXRpbHMuZ2V0LnNwcmVhZExpc3QobXNnKTtcblxuICAgICAgaWYgKGxpc3RQYXJhbXMpe1xuICAgICAgICBjb25zdCB0ZXh0ID0gcGFyYW1zLmpvaW4obGlzdFBhcmFtc1sxXSB8fCAnLCAnKTtcbiAgICAgICAgbXNnID0gbXNnLnJlcGxhY2UobGlzdFBhcmFtc1swXSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWFyY2hJdGVtcykge1xuICAgICAgICByZXR1cm4gc2VhcmNoSXRlbXMucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwdXJlS2V5ID0gY3VycmVudC5yZXBsYWNlKFBBVFRFUk5TLk1FU1NBR0UuQlJBQ0VTLCAnJyk7XG5cbiAgICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgICBbaXNTdHJpbmcocGFyYW1zKSB8fCBpc051bWJlcihwYXJhbXMpIHx8IGlzQm9vbGVhbihwYXJhbXMpXTogcGFyYW1zLFxuICAgICAgICAgICAgW2lzQXJyYXkocGFyYW1zKV06IHBhcmFtc1twdXJlS2V5XSxcbiAgICAgICAgICAgIFtpc09iamVjdChwYXJhbXMpXTogZ2V0KHBhcmFtcywgcHVyZUtleSwgY3VycmVudCksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBhY2MucmVwbGFjZShjdXJyZW50LCAobWFwLnRydWUgfHwgJycpKTtcbiAgICAgICAgfSwgbXNnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1zZztcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbGFjZUFjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvUmVwbGFjZUFjdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFTEVDVE9SOiAvKFxcdys6XFxbLio/XFxdKXwoXFx3KzpcXCguKj9cXCkpfChcXHcrKS9nLFxuICBTSE9SVF9SVUxFOiAvXihcXHcrKTooXFx3KykkL2csXG4gIE1FU1NBR0U6IHtcbiAgICBQQVJBTVM6IC9cXHsoLio/KVxcfS9nLFxuICAgIEJSQUNFUzogL1xce3xcXH0vZyxcbiAgICBFUlJPUjogLyNcXHsoLio/KVxcfS9nLFxuICAgIExJU1Q6IC9cXC5cXC5cXC5cXHsoLio/KVxcfS9nLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL3BhdHRlcm5zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBDT1JFOiB7XG4gICAgbXNnOiAnI3ttZXRob2R9IGhhcyBub3QgYmVlbiBkZWZpbmVkIGEgdmFsaWRhdGlvbiBtZXNzYWdlJyxcbiAgICBmaWVsZDogJ2ZpZWxkICN7c2VsZWN0b3J9IHdhcyBub3QgZm91bmQnLFxuICAgIGFkZDogJ2FkZCBtZXRob2QgYWNjZXB0IG9ubHkgYSBsaXN0IG9mIG9iamVjdDogW3sgbmFtZTogU3RyaW5nLCBtZXNzYWdlOiBTdHJpbmcsIGZuOiBGdW5jdGlvbiB9XScsXG4gICAgdW5kZWZpbmVkOiAnI3ttZXRob2R9IGlzIG5vdCBkZWZpbmVkJyxcbiAgICBlbnRyeTogJ3RoZSBlbnRyeSBmb3JtYXQ6ICN7cnVsZXN9IGlzIG5vdCBzdXBwb3J0ZWQnLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL21lc3NhZ2VzLmpzIiwiY29uc3QgZG9tID0gKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGVsZW1CeU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShzZWxlY3Rvcik7XG4gIGNvbnN0IGVsZW1CeUNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvcik7XG4gIGNvbnN0IGVsZW1CeUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICBjb25zdCBlbGVtQnlBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgXG4gIGNvbnN0IGVsZW1lbnQgPSAoXG4gICAgKChlbGVtQnlOYW1lICYmIGVsZW1CeU5hbWUubGVuZ3RoKSAmJiBlbGVtQnlOYW1lKSB8fFxuICAgICgoZWxlbUJ5Q2xhc3MgJiYgZWxlbUJ5Q2xhc3MubGVuZ3RoKSAmJiBlbGVtQnlDbGFzcykgfHxcbiAgICAoZWxlbUJ5SWQgJiYgW2VsZW1CeUlkXSkgfHxcbiAgICAoKGVsZW1CeUFsbCAmJiBlbGVtQnlBbGwubGVuZ3RoKSAmJiBlbGVtQnlBbGwpXG4gICkgfHwgW107XG4gIFxuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9kb21IZWxwZXIuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1FU1NBR0VTIGZyb20gJy4uL2NvbnN0YW50cy9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmFsaWRhdGlvbnM6IHt9LFxuICBtZXNzYWdlczoge1xuICAgIGZpZWxkczoge30sXG4gICAgY29yZTogTUVTU0FHRVMuQ09SRSxcbiAgICB2YWxpZGF0b3I6IHt9LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvc3RhdGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBnZXQoeyBydWxlcyA9IHt9LCBtZXNzYWdlcyA9IHt9LCB2YWx1ZSB9KXtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uKHJ1bGVzICYmIHsgcnVsZXMgfSksXG4gICAgICAuLi4obWVzc2FnZXMgJiYgeyBtZXNzYWdlcyB9KSxcbiAgICAgIC4uLih2YWx1ZSAmJiB7IHZhbHVlIH0pLFxuICAgIH07XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9tb2RlbHMvUnVsZU1vZGVsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuUmVhY3REb20ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SlNaV0ZqZENJc0lsSmxZV04wUkc5dElpd2lRWEJ3SWl3aWNtVnVaR1Z5SWl3aVpHOWpkVzFsYm5RaUxDSm5aWFJGYkdWdFpXNTBRbmxKWkNKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUMEVzUzBGQlVDeE5RVUZyUWl4UFFVRnNRanRCUVVOQkxFOUJRVTlETEZGQlFWQXNUVUZCY1VJc1YwRkJja0k3UVVGRFFTeFBRVUZQTEc5Q1FVRlFPMEZCUTBFc1QwRkJUME1zUjBGQlVDeE5RVUZuUWl4clFrRkJhRUk3TzBGQlJVRkVMRk5CUVZORkxFMUJRVlFzUTBGRFJTeHZRa0ZCUXl4SFFVRkVMRTlCUkVZc1JVRkZSVU1zVTBGQlUwTXNZMEZCVkN4RFFVRjNRaXhOUVVGNFFpeERRVVpHSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OWhaRzFwYmk5RWIyTjFiV1Z1ZEhNdlVISnZhbVZqZEhNdmIyTjBZV1p2Y20wdFpHVnRieUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnVW1WaFkzUkViMjBnWm5KdmJTQW5jbVZoWTNRdFpHOXRKenRjYm1sdGNHOXlkQ0FuTGk5elkzTnpMM04wZVd4bGN5NXpZM056Snp0Y2JtbHRjRzl5ZENCQmNIQWdabkp2YlNBbkxpOWpiMjF3YjI1bGJuUnpMMEZ3Y0NjN1hHNWNibEpsWVdOMFJHOXRMbkpsYm1SbGNpaGNiaUFnUEVGd2NDQXZQaXdnWEc0Z0lHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NkeWIyOTBKeWxjYmlrN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZGl0aW9uYWxzIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjJztcbmltcG9ydCBPY3RhZm9ybSBmcm9tICcuLi8uLi8uLi8uLi9vY3RhZm9ybS9zcmMnO1xuaW1wb3J0IEVycm9ycyBmcm9tICcuLi9FcnJvcnMnO1xuaW1wb3J0IFZhbGlkYXRpb25NYXAgZnJvbSAnLi9WYWxpZGF0aW9uTWFwJztcblxudmFyIEFwcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBcHAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFwcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3JzOiBbXVxuICAgIH07XG4gICAgX3RoaXMub2N0YWZvcm0gPSBuZXcgT2N0YWZvcm0oKTtcbiAgICBfdGhpcy5vY3RhZm9ybS52YWxpZGF0b3IuYWRkKEFkZGl0aW9uYWxzKTtcbiAgICBfdGhpcy5vblN1Ym1pdCA9IF90aGlzLm9uU3VibWl0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFzRmllbGRFcnJvciA9IF90aGlzLmhhc0ZpZWxkRXJyb3IuYmluZChfdGhpcyk7XG4gICAgX3RoaXMudmFsaWRhdGUgPSBfdGhpcy52YWxpZGF0ZS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogJ29uU3VibWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmFsaWRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdmFsaWRhdGUgPSB0aGlzLm9jdGFmb3JtLnZhbGlkYXRlQWxsKFZhbGlkYXRpb25NYXApO1xuICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb246OicsIHZhbGlkYXRlKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc0Vycm9yczogdmFsaWRhdGVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYXNGaWVsZEVycm9yKHZhbGlkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc0ZpZWxkRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNGaWVsZEVycm9yKHZhbGlkYXRlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNsYXNzRXJyb3IgPSAnaW52YWxpZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzRXJyb3IpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzRXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShfdGhpczNbaXRlbS5maWVsZF0ubmFtZSk7XG4gICAgICAgIGlmIChlbGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBlbGVtLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzM1tpdGVtLmZpZWxkXS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGhhc0Vycm9ycyA9IHRoaXMuc3RhdGUuaGFzRXJyb3JzO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb250YWluZXInLCBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdCB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdoNCcsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNiBmaXJzdCcgfSxcbiAgICAgICAgICAgICAgICAnT2N0YWZvcm0gVmFsaWRhdGUgLSBEZW1vJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYgdGV4dC1yaWdodCBsYXN0JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vb2N0YWZvcm0vb2N0YWZvcm0nLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywgdGFyZ2V0OiAnX2JsYW5rJywgY2xhc3NOYW1lOiAnZ2l0aHViLWxpbmsnIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogJ2h0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2ltYWdlcy9tb2R1bGVzL2xvZ29zX3BhZ2UvR2l0SHViLU1hcmsucG5nJywgYWx0OiAnT2N0YWZvcm0gLSBHaXRodWInIH0pLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAnR2l0aHViJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICEhaGFzRXJyb3JzLmxlbmd0aCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JzLCB7IGVycm9yczogaGFzRXJyb3JzIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdGaXJzdCBuYW1lOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2dpdmVuLW5hbWUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZmlyc3ROYW1lID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdMYXN0IG5hbWU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU6ICdmYW1pbHktbmFtZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5sYXN0TmFtZSA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC03JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0VtYWlsOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZW1haWwgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC01JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0NvdW50cnk6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2NvdW50cnktbmFtZScsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuY291bnRyeSA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAnU2VsZWN0IGEgY291bnRyeSdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdCUicgfSxcbiAgICAgICAgICAgICAgICAgICdCcmF6aWwnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnVUEnIH0sXG4gICAgICAgICAgICAgICAgICAnVWtyYWluZSdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdVUycgfSxcbiAgICAgICAgICAgICAgICAgICdVbml0ZWQgU3RhdGVzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ1VwbG9hZCBhIGZpbGU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZmlsZSA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0dlbmRlcjonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdtYWxlJyxcbiAgICAgICAgICAgICAgICBpZDogJ2dlbmRlck1hbGUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZ2VuZGVyID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGh0bWxGb3I6ICdnZW5kZXJNYWxlJyB9LFxuICAgICAgICAgICAgICAgICdNYWxlJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZW5kZXInLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmVtYWxlJyxcbiAgICAgICAgICAgICAgICBpZDogJ2dlbmRlckZlbWFsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5nZW5kZXIgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogJ2dlbmRlckZlbWFsZScgfSxcbiAgICAgICAgICAgICAgICAnRmVtYWxlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRG8geW91IGhhdmUgYSBwb3J0Zm9saW86J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ1llcydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ25vJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja2JveCA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICdObydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ21heWJlJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja2JveCA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICdNYXliZSdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ1Jlc3VtZTonXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXN1bWUnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlc3VtZSA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC0xMiByaWdodCcgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnInLCBudWxsKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b24tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnc3VibWl0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1ZhbGlkYXRlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHA7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqYjIxd2IyNWxiblJ6TDBGd2NDOXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXeUpTWldGamRDSXNJa052YlhCdmJtVnVkQ0lzSWtGa1pHbDBhVzl1WVd4eklpd2lUMk4wWVdadmNtMGlMQ0pGY25KdmNuTWlMQ0pXWVd4cFpHRjBhVzl1VFdGd0lpd2lRWEJ3SWl3aWNISnZjSE1pTENKemRHRjBaU0lzSW1oaGMwVnljbTl5Y3lJc0ltOWpkR0ZtYjNKdElpd2lkbUZzYVdSaGRHOXlJaXdpWVdSa0lpd2liMjVUZFdKdGFYUWlMQ0ppYVc1a0lpd2liMjVEYUdGdVoyVWlMQ0pvWVhOR2FXVnNaRVZ5Y205eUlpd2lkbUZzYVdSaGRHVWlMQ0psSWl3aWNISmxkbVZ1ZEVSbFptRjFiSFFpTENKMllXeHBaR0YwWlVGc2JDSXNJbU52Ym5OdmJHVWlMQ0pzYjJjaUxDSnpaWFJUZEdGMFpTSXNJbU5zWVhOelJYSnliM0lpTENKa2IyTjFiV1Z1ZENJc0luRjFaWEo1VTJWc1pXTjBiM0pCYkd3aUxDSm1iM0pGWVdOb0lpd2laV3hsYldWdWRDSXNJbU5zWVhOelRHbHpkQ0lzSW5KbGJXOTJaU0lzSW1Wc1pXMGlMQ0puWlhSRmJHVnRaVzUwYzBKNVRtRnRaU0lzSW1sMFpXMGlMQ0ptYVdWc1pDSXNJbTVoYldVaUxDSnNaVzVuZEdnaUxDSmxiRzBpTENKbWFYSnpkRTVoYldVaUxDSnlJaXdpYkdGemRFNWhiV1VpTENKbGJXRnBiQ0lzSW1OdmRXNTBjbmtpTENKbWFXeGxJaXdpWjJWdVpHVnlJaXdpWTJobFkydGliM2dpTENKeVpYTjFiV1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08wRkJRVUVzVDBGQlQwRXNTMEZCVUN4SlFVRm5Ra01zVTBGQmFFSXNVVUZCYVVNc1QwRkJha003UVVGRFFTeFBRVUZQUXl4WFFVRlFMRTFCUVhkQ0xIRkRRVUY0UWp0QlFVTkJMRTlCUVU5RExGRkJRVkFzVFVGQmNVSXNNRUpCUVhKQ08wRkJRMEVzVDBGQlQwTXNUVUZCVUN4TlFVRnRRaXhYUVVGdVFqdEJRVU5CTEU5QlFVOURMR0ZCUVZBc1RVRkJNRUlzYVVKQlFURkNPenRKUVVWeFFrTXNSenM3TzBGQlEyNUNMR1ZCUVZsRExFdEJRVm9zUlVGQmJVSTdRVUZCUVRzN1FVRkJRU3d3UjBGRFdFRXNTMEZFVnpzN1FVRkZha0lzVlVGQlMwTXNTMEZCVEN4SFFVRmhPMEZCUTFoRExHbENRVUZYTzBGQlJFRXNTMEZCWWp0QlFVZEJMRlZCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCU1ZBc1VVRkJTaXhGUVVGb1FqdEJRVU5CTEZWQlFVdFBMRkZCUVV3c1EwRkJZME1zVTBGQlpDeERRVUYzUWtNc1IwRkJlRUlzUTBGQk5FSldMRmRCUVRWQ08wRkJRMEVzVlVGQlMxY3NVVUZCVEN4SFFVRm5RaXhOUVVGTFFTeFJRVUZNTEVOQlFXTkRMRWxCUVdRc1QwRkJhRUk3UVVGRFFTeFZRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFMUJRVXRCTEZGQlFVd3NRMEZCWTBRc1NVRkJaQ3hQUVVGb1FqdEJRVU5CTEZWQlFVdEZMR0ZCUVV3c1IwRkJjVUlzVFVGQlMwRXNZVUZCVEN4RFFVRnRRa1lzU1VGQmJrSXNUMEZCY2tJN1FVRkRRU3hWUVVGTFJ5eFJRVUZNTEVkQlFXZENMRTFCUVV0QkxGRkJRVXdzUTBGQlkwZ3NTVUZCWkN4UFFVRm9RanRCUVZacFFqdEJRVmRzUWpzN096czJRa0ZGVVVrc1F5eEZRVUZGTzBGQlExUkJMRkZCUVVWRExHTkJRVVk3UVVGRFFTeFhRVUZMUml4UlFVRk1PMEZCUTBRN096c3JRa0ZGVXp0QlFVTlNMRmRCUVV0QkxGRkJRVXc3UVVGRFJEczdPeXRDUVVWVk8wRkJRVUU3TzBGQlExUXNWVUZCVFVFc1YwRkJWeXhMUVVGTFVDeFJRVUZNTEVOQlFXTlZMRmRCUVdRc1EwRkJNRUptTEdGQlFURkNMRU5CUVdwQ08wRkJRMEZuUWl4alFVRlJReXhIUVVGU0xFTkJRVmtzWTBGQldpeEZRVUUwUWt3c1VVRkJOVUk3TzBGQlJVRXNWMEZCUzAwc1VVRkJUQ3hEUVVGak8wRkJRMXBrTEcxQ1FVRlhVVHRCUVVSRExFOUJRV1FzUlVGRlJ6dEJRVUZCTEdWQlFVMHNUMEZCUzBRc1lVRkJUQ3hEUVVGdFFrTXNVVUZCYmtJc1EwRkJUanRCUVVGQkxFOUJSa2c3UVVGSFJEczdPMnREUVVWaFFTeFJMRVZCUVZNN1FVRkJRVHM3UVVGRGNrSXNWVUZCVFU4c1lVRkJZU3hUUVVGdVFqdEJRVU5CUXl4bFFVRlRReXhuUWtGQlZDeFBRVUU0UWtZc1ZVRkJPVUlzUlVGRFIwY3NUMEZFU0N4RFFVTlhMRzFDUVVGWE8wRkJRMnhDUXl4blFrRkJVVU1zVTBGQlVpeERRVUZyUWtNc1RVRkJiRUlzUTBGQmVVSk9MRlZCUVhwQ08wRkJRMFFzVDBGSVNEczdRVUZMUVZBc1pVRkJVMVVzVDBGQlZDeERRVUZwUWl4blFrRkJVVHRCUVVOMlFpeFpRVUZOU1N4UFFVRlBUaXhUUVVGVFR5eHBRa0ZCVkN4RFFVRXlRaXhQUVVGTFF5eExRVUZMUXl4TFFVRldMRVZCUVdsQ1F5eEpRVUUxUXl4RFFVRmlPMEZCUTBFc1dVRkJSMG9zUzBGQlMwc3NUVUZCVEN4SFFVRmpMRU5CUVdwQ0xFVkJRVzlDTzBGQlEyeENUQ3hsUVVGTFNpeFBRVUZNTEVOQlFXRTdRVUZCUVN4dFFrRkJUMVVzU1VGQlNWSXNVMEZCU2l4RFFVRmpha0lzUjBGQlpDeERRVUZyUWxrc1ZVRkJiRUlzUTBGQlVEdEJRVUZCTEZkQlFXSTdRVUZEUkN4VFFVWkVMRTFCUlVzN1FVRkRTQ3hwUWtGQlMxTXNTMEZCUzBNc1MwRkJWaXhGUVVGcFFrd3NVMEZCYWtJc1EwRkJNa0pxUWl4SFFVRXpRaXhEUVVFclFsa3NWVUZCTDBJN1FVRkRSRHRCUVVOR0xFOUJVRVE3UVVGUlJEczdPelpDUVVWUk8wRkJRVUU3TzBGQlFVRXNWVUZEUTJZc1UwRkVSQ3hIUVVObExFdEJRVXRFTEV0QlJIQkNMRU5CUTBORExGTkJSRVE3T3p0QlFVZFFMR0ZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRMFU3UVVGQlFUdEJRVUZCTEZsQlFVMHNWMEZCVlN4WFFVRm9RaXhGUVVFMFFpeFZRVUZWTEV0QlFVdEpMRkZCUVRORE8wRkJRMFU3UVVGQlFUdEJRVUZCTEdOQlFVc3NWMEZCVlN4TFFVRm1PMEZCUTBVN1FVRkJRVHRCUVVGQkxHZENRVUZMTEZkQlFWVXNVVUZCWmp0QlFVTkZPMEZCUVVFN1FVRkJRU3hyUWtGQlNTeFhRVUZWTEdGQlFXUTdRVUZCUVR0QlFVRkJMR1ZCUkVZN1FVRkhSVHRCUVVGQk8wRkJRVUVzYTBKQlFVc3NWMEZCVlN4MVFrRkJaanRCUVVORk8wRkJRVUU3UVVGQlFTeHZRa0ZCUnl4TlFVRkxMSE5EUVVGU0xFVkJRU3RETEV0QlFVa3NjVUpCUVc1RUxFVkJRWGxGTEZGQlFVOHNVVUZCYUVZc1JVRkJlVVlzVjBGQlZTeGhRVUZ1Unp0QlFVTkZMQ3REUVVGTExFdEJRVWtzZVVWQlFWUXNSVUZCYlVZc1MwRkJTU3h0UWtGQmRrWXNSMEZFUmp0QlFVVkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGR1JqdEJRVVJHTzBGQlNFWXNZVUZFUmp0QlFWbEhMR0ZCUVVNc1EwRkJRMG9zVlVGQlZUSkNMRTFCUVZvc1NVRkRRenRCUVVGQk8wRkJRVUVzWjBKQlFVc3NWMEZCVlN4UlFVRm1PMEZCUTBVc2EwTkJRVU1zVFVGQlJDeEpRVUZSTEZGQlFWRXpRaXhUUVVGb1FqdEJRVVJHTEdGQllrbzdRVUZyUWtVN1FVRkJRVHRCUVVGQkxHZENRVUZQTEZkQlFWVXNUMEZCYWtJN1FVRkRSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEdWQlJFWTdRVUZGUlR0QlFVTkZMSE5DUVVGTExFMUJSRkE3UVVGRlJTeHpRa0ZCU3l4WFFVWlFPMEZCUjBVc09FSkJRV0VzV1VGSVpqdEJRVWxGTEhGQ1FVRkxPMEZCUVVFc2VVSkJRVXNzVDBGQlN6WkNMRk5CUVV3c1IwRkJhVUpETEVOQlFYUkNPMEZCUVVFc2FVSkJTbEE3UVVGTFJTd3dRa0ZCVlN4TFFVRkxlRUk3UVVGTWFrSTdRVUZHUml4aFFXeENSanRCUVRaQ1JUdEJRVUZCTzBGQlFVRXNaMEpCUVU4c1YwRkJWU3hQUVVGcVFqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRMFVzYzBKQlFVc3NUVUZFVUR0QlFVVkZMSE5DUVVGTExGVkJSbEE3UVVGSFJTdzRRa0ZCWVN4aFFVaG1PMEZCU1VVc2NVSkJRVXM3UVVGQlFTeDVRa0ZCU3l4UFFVRkxlVUlzVVVGQlRDeEhRVUZuUWtRc1EwRkJja0k3UVVGQlFTeHBRa0ZLVUR0QlFVdEZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRanRCUVVaR08wRkJOMEpHTEZkQlJFWTdRVUV3UTBVN1FVRkJRVHRCUVVGQkxHTkJRVXNzVjBGQlZTeExRVUZtTzBGQlEwVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVDBGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVU5GTEhOQ1FVRkxMRTFCUkZBN1FVRkZSU3h6UWtGQlN5eFBRVVpRTzBGQlIwVXNPRUpCUVdFc1QwRklaanRCUVVsRkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTekJDTEV0QlFVd3NSMEZCWVVZc1EwRkJiRUk3UVVGQlFTeHBRa0ZLVUR0QlFVdEZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRanRCUVVaR0xHRkJSRVk3UVVGWlJUdEJRVUZCTzBGQlFVRXNaMEpCUVU4c1YwRkJWU3hQUVVGcVFqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRVUU3UVVGQlFUdEJRVU5GTEhkQ1FVRkxMRk5CUkZBN1FVRkZSU3huUTBGQllTeGpRVVptTzBGQlIwVXNkVUpCUVVzN1FVRkJRU3d5UWtGQlN5eFBRVUZMTWtJc1QwRkJUQ3hIUVVGbFNDeERRVUZ3UWp0QlFVRkJMRzFDUVVoUU8wRkJTVVVzTkVKQlFWVXNTMEZCUzNoQ08wRkJTbXBDTzBGQlRVVTdRVUZCUVR0QlFVRkJMRzlDUVVGUkxFOUJRVTBzUlVGQlpEdEJRVUZCTzBGQlFVRXNhVUpCVGtZN1FVRlBSVHRCUVVGQk8wRkJRVUVzYjBKQlFWRXNUMEZCVFN4SlFVRmtPMEZCUVVFN1FVRkJRU3hwUWtGUVJqdEJRVkZGTzBGQlFVRTdRVUZCUVN4dlFrRkJVU3hQUVVGTkxFbEJRV1E3UVVGQlFUdEJRVUZCTEdsQ1FWSkdPMEZCVTBVN1FVRkJRVHRCUVVGQkxHOUNRVUZSTEU5QlFVMHNTVUZCWkR0QlFVRkJPMEZCUVVFN1FVRlVSanRCUVVaR0xHRkJXa1k3UVVFeVFrVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVVVGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVU5GTEhOQ1FVRkxMRTFCUkZBN1FVRkZSU3h6UWtGQlN5eE5RVVpRTzBGQlIwVXNjVUpCUVVzN1FVRkJRU3g1UWtGQlN5eFBRVUZMTkVJc1NVRkJUQ3hIUVVGWlNpeERRVUZxUWp0QlFVRkJMR2xDUVVoUU8wRkJTVVVzTUVKQlFWVXNTMEZCUzNoQ08wRkJTbXBDTzBGQlJrWXNZVUV6UWtZN1FVRnhRMFU3UVVGQlFUdEJRVUZCTEdkQ1FVRkxMRmRCUVZVc1QwRkJaanRCUVVORk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRXNaVUZFUmp0QlFVVkZPMEZCUTBVc2MwSkJRVXNzVDBGRVVEdEJRVVZGTEhOQ1FVRkxMRkZCUmxBN1FVRkhSU3gxUWtGQlRTeE5RVWhTTzBGQlNVVXNiMEpCUVVjc1dVRktURHRCUVV0RkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTelpDTEUxQlFVd3NSMEZCWTB3c1EwRkJia0k3UVVGQlFTeHBRa0ZNVUR0QlFVMUZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVNXFRaXhuUWtGR1JqdEJRVUZCTzBGQlUwczdRVUZCUVR0QlFVRkJMR3RDUVVGUExGTkJRVkVzV1VGQlpqdEJRVUZCTzBGQlFVRXNaVUZVVER0QlFWZEZPMEZCUTBVc2MwSkJRVXNzVDBGRVVEdEJRVVZGTEhOQ1FVRkxMRkZCUmxBN1FVRkhSU3gxUWtGQlRTeFJRVWhTTzBGQlNVVXNiMEpCUVVjc1kwRktURHRCUVV0RkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTelpDTEUxQlFVd3NSMEZCWTB3c1EwRkJia0k3UVVGQlFTeHBRa0ZNVUR0QlFVMUZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVNXFRaXhuUWtGWVJqdEJRVUZCTzBGQmEwSkxPMEZCUVVFN1FVRkJRU3hyUWtGQlR5eFRRVUZSTEdOQlFXWTdRVUZCUVR0QlFVRkJPMEZCYkVKTUxHRkJja05HTzBGQk1FUkZPMEZCUVVFN1FVRkJRU3huUWtGQlN5eFhRVUZWTEU5QlFXWTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVUZCTzBGQlFVRXNhMEpCUVU4c1YwRkJWU3hWUVVGcVFqdEJRVU5GTzBGQlEwVXNkMEpCUVVzc1ZVRkVVRHRCUVVWRkxIZENRVUZMTEZWQlJsQTdRVUZIUlN4NVFrRkJUU3hMUVVoU08wRkJTVVVzZFVKQlFVczdRVUZCUVN3eVFrRkJTeXhQUVVGTE9FSXNVVUZCVEN4SFFVRm5RazRzUTBGQmNrSTdRVUZCUVN4dFFrRktVRHRCUVV0RkxEUkNRVUZWTEV0QlFVdDRRanRCUVV4cVFpeHJRa0ZFUmp0QlFWRkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGU1JpeGxRVVpHTzBGQllVVTdRVUZCUVR0QlFVRkJMR3RDUVVGUExGZEJRVlVzVlVGQmFrSTdRVUZEUlR0QlFVTkZMSGRDUVVGTExGVkJSRkE3UVVGRlJTeDNRa0ZCU3l4VlFVWlFPMEZCUjBVc2VVSkJRVTBzU1VGSVVqdEJRVWxGTEhWQ1FVRkxPMEZCUVVFc01rSkJRVXNzVDBGQlN6aENMRkZCUVV3c1IwRkJaMEpPTEVOQlFYSkNPMEZCUVVFc2JVSkJTbEE3UVVGTFJTdzBRa0ZCVlN4TFFVRkxlRUk3UVVGTWFrSXNhMEpCUkVZN1FVRlJSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlVrWXNaVUZpUmp0QlFYZENSVHRCUVVGQk8wRkJRVUVzYTBKQlFVOHNWMEZCVlN4VlFVRnFRanRCUVVORk8wRkJRMFVzZDBKQlFVc3NWVUZFVUR0QlFVVkZMSGRDUVVGTExGVkJSbEE3UVVGSFJTeDVRa0ZCVFN4UFFVaFNPMEZCU1VVc2RVSkJRVXM3UVVGQlFTd3lRa0ZCU3l4UFFVRkxPRUlzVVVGQlRDeEhRVUZuUWs0c1EwRkJja0k3UVVGQlFTeHRRa0ZLVUR0QlFVdEZMRFJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRaXhyUWtGRVJqdEJRVkZGTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRlNSanRCUVhoQ1JqdEJRVEZFUml4WFFURkRSanRCUVhsSlJUdEJRVUZCTzBGQlFVRXNZMEZCU3l4WFFVRlZMRXRCUVdZN1FVRkRSVHRCUVVGQk8wRkJRVUVzWjBKQlFVc3NWMEZCVlN4UlFVRm1PMEZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVN4cFFrRkVSanRCUVVWRk8wRkJRMFVzZDBKQlFVc3NVVUZFVUR0QlFVVkZMSFZDUVVGTE8wRkJRVUVzTWtKQlFVc3NUMEZCU3l0Q0xFMUJRVXdzUjBGQlkxQXNRMEZCYmtJN1FVRkJRU3h0UWtGR1VEdEJRVWRGTERSQ1FVRlZMRXRCUVV0NFFqdEJRVWhxUWp0QlFVWkdPMEZCUkVZN1FVRkVSaXhYUVhwSlJqdEJRWE5LUlR0QlFVRkJPMEZCUVVFc1kwRkJTeXhYUVVGVkxFdEJRV1k3UVVGRFJUdEJRVUZCTzBGQlFVRXNaMEpCUVVzc1YwRkJWU3hqUVVGbU8wRkJRMFVzTmtOQlJFWTdRVUZGUlR0QlFVRkJPMEZCUVVFN1FVRkRSU3cyUWtGQlZTeG5Ra0ZFV2p0QlFVVkZMSGRDUVVGTE8wRkJSbEE3UVVGQlFUdEJRVUZCTzBGQlJrWTdRVUZFUmp0QlFYUktSanRCUVVSR0xFOUJSRVk3UVVGeFMwUTdPenM3UlVGNlRqaENaQ3hUT3p0bFFVRmFTeXhISWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OWhaRzFwYmk5RWIyTjFiV1Z1ZEhNdlVISnZhbVZqZEhNdmIyTjBZV1p2Y20wdFpHVnRieUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDd2dleUJEYjIxd2IyNWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdRV1JrYVhScGIyNWhiSE1nWm5KdmJTQW5MaTR2TGk0dkxpNHZMaTR2YjJOMFlXWnZjbTB0WVdSa2FYUnBiMjVoYkM5emNtTW5PMXh1YVcxd2IzSjBJRTlqZEdGbWIzSnRJR1p5YjIwZ0p5NHVMeTR1THk0dUx5NHVMMjlqZEdGbWIzSnRMM055WXljN1hHNXBiWEJ2Y25RZ1JYSnliM0p6SUdaeWIyMGdKeTR1TDBWeWNtOXljeWM3WEc1cGJYQnZjblFnVm1Gc2FXUmhkR2x2YmsxaGNDQm1jbTl0SUNjdUwxWmhiR2xrWVhScGIyNU5ZWEFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJCY0hBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5RZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2UxeHVJQ0FnSUNBZ2FHRnpSWEp5YjNKek9pQmJYU3hjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV2WTNSaFptOXliU0E5SUc1bGR5QlBZM1JoWm05eWJTZ3BPMXh1SUNBZ0lIUm9hWE11YjJOMFlXWnZjbTB1ZG1Gc2FXUmhkRzl5TG1Ga1pDaEJaR1JwZEdsdmJtRnNjeWs3WEc0Z0lDQWdkR2hwY3k1dmJsTjFZbTFwZENBOUlIUm9hWE11YjI1VGRXSnRhWFF1WW1sdVpDaDBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtOXVRMmhoYm1kbElEMGdkR2hwY3k1dmJrTm9ZVzVuWlM1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUhSb2FYTXVhR0Z6Um1sbGJHUkZjbkp2Y2lBOUlIUm9hWE11YUdGelJtbGxiR1JGY25KdmNpNWlhVzVrS0hSb2FYTXBPMXh1SUNBZ0lIUm9hWE11ZG1Gc2FXUmhkR1VnUFNCMGFHbHpMblpoYkdsa1lYUmxMbUpwYm1Rb2RHaHBjeWs3WEc0Z0lIMWNibHh1SUNCdmJsTjFZbTFwZENobEtYdGNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZEdocGN5NTJZV3hwWkdGMFpTZ3BPMXh1SUNCOVhHNWNiaUFnYjI1RGFHRnVaMlVvS1h0Y2JpQWdJQ0IwYUdsekxuWmhiR2xrWVhSbEtDazdYRzRnSUgxY2JseHVJQ0IyWVd4cFpHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3hwWkdGMFpTQTlJSFJvYVhNdWIyTjBZV1p2Y20wdWRtRnNhV1JoZEdWQmJHd29WbUZzYVdSaGRHbHZiazFoY0NrN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb0oxWmhiR2xrWVhScGIyNDZPaWNzSUhaaGJHbGtZWFJsS1R0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9lMXh1SUNBZ0lDQWdhR0Z6UlhKeWIzSnpPaUIyWVd4cFpHRjBaVnh1SUNBZ0lIMHNJQ2dwSUQwK0lIUm9hWE11YUdGelJtbGxiR1JGY25KdmNpaDJZV3hwWkdGMFpTa3BPMXh1SUNCOVhHNWNiaUFnYUdGelJtbGxiR1JGY25KdmNpaDJZV3hwWkdGMFpTbDdYRzRnSUNBZ1kyOXVjM1FnWTJ4aGMzTkZjbkp2Y2lBOUlDZHBiblpoYkdsa0p6dGNiaUFnSUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0dBdUpIdGpiR0Z6YzBWeWNtOXlmV0FwWEc0Z0lDQWdJQ0F1Wm05eVJXRmphQ2hsYkdWdFpXNTBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0dOc1lYTnpSWEp5YjNJcE8xeHVJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQjJZV3hwWkdGMFpTNW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWld4bGJTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJ6UW5sT1lXMWxLSFJvYVhOYmFYUmxiUzVtYVdWc1pGMHVibUZ0WlNrN1hHNGdJQ0FnSUNCcFppaGxiR1Z0TG14bGJtZDBhQ0ErSURFcElIdGNiaUFnSUNBZ0lDQWdaV3hsYlM1bWIzSkZZV05vS0dWc2JTQTlQaUJsYkcwdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMwVnljbTl5S1NsY2JpQWdJQ0FnSUgxbGJITmxlMXh1SUNBZ0lDQWdJQ0IwYUdselcybDBaVzB1Wm1sbGJHUmRMbU5zWVhOelRHbHpkQzVoWkdRb1kyeGhjM05GY25KdmNpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qm9ZWE5GY25KdmNuTWdmU0E5SUhSb2FYTXVjM1JoZEdVN1hHNWNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnUEdScGRqNWNiaUFnSUNBZ0lDQWdQR1p2Y20wZ1kyeGhjM05PWVcxbFBWd2lZMjl1ZEdGcGJtVnlYQ0lnYjI1VGRXSnRhWFE5ZTNSb2FYTXViMjVUZFdKdGFYUjlQbHh1SUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpY205M1hDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMHhNbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YURRZ1kyeGhjM05PWVcxbFBWd2lZMjlzTFRZZ1ptbHljM1JjSWo1UFkzUmhabTl5YlNCV1lXeHBaR0YwWlNBdElFUmxiVzg4TDJnMFBseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNMVFlnZEdWNGRDMXlhV2RvZENCc1lYTjBYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5dlkzUmhabTl5YlM5dlkzUmhabTl5YlZ3aUlISmxiRDFjSW01dmIzQmxibVZ5SUc1dmNtVm1aWEp5WlhKY0lpQjBZWEpuWlhROVhDSmZZbXhoYm10Y0lpQmpiR0Z6YzA1aGJXVTlYQ0puYVhSb2RXSXRiR2x1YTF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTlYQ0pvZEhSd2N6b3ZMMkZ6YzJWMGN5MWpaRzR1WjJsMGFIVmlMbU52YlM5cGJXRm5aWE12Ylc5a2RXeGxjeTlzYjJkdmMxOXdZV2RsTDBkcGRFaDFZaTFOWVhKckxuQnVaMXdpSUdGc2REMWNJazlqZEdGbWIzSnRJQzBnUjJsMGFIVmlYQ0lnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpjR0Z1UGtkcGRHaDFZand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIc2hJV2hoYzBWeWNtOXljeTVzWlc1bmRHZ2dKaVlnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YkMweE1sd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhGY25KdmNuTWdaWEp5YjNKelBYdG9ZWE5GY25KdmNuTjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnS1gxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4aFltVnNJR05zWVhOelRtRnRaVDFjSW1OdmJDMDJYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSbWx5YzNRZ2JtRnRaVG84TDNOMGNtOXVaejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x1Y0hWMElGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U5WENKMFpYaDBYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbVpwY25OMFRtRnRaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGIwTnZiWEJzWlhSbFBTZG5hWFpsYmkxdVlXMWxKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxtWnBjbk4wVG1GdFpTQTlJSEo5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGFHRnVaMlU5ZTNSb2FYTXViMjVEYUdGdVoyVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeGhZbVZzUGx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdGaVpXd2dZMnhoYzNOT1lXMWxQVndpWTI5c0xUWmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wY205dVp6NU1ZWE4wSUc1aGJXVTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpZEdWNGRGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0lteGhjM1JPWVcxbFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2UTI5dGNHeGxkR1U5SjJaaGJXbHNlUzF1WVcxbEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG14aGMzUk9ZVzFsSUQwZ2NuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZia05vWVc1blpUMTdkR2hwY3k1dmJrTm9ZVzVuWlgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5KdmQxd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUlcxaGFXdzZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpZEdWNGRGd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVOVhDSmxiV0ZwYkZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjFkRzlEYjIxd2JHVjBaVDBuWlcxaGFXd25YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVpXMWhhV3dnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlzWVdKbGJENWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAxWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUTI5MWJuUnllVG84TDNOMGNtOXVaejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE5sYkdWamRDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsUFZ3aVkyOTFiblJ5ZVZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjFkRzlEYjIxd2JHVjBaVDBuWTI5MWJuUnllUzF1WVcxbEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG1OdmRXNTBjbmtnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEc5d2RHbHZiaUIyWVd4MVpUMWNJbHdpUGxObGJHVmpkQ0JoSUdOdmRXNTBjbms4TDI5d2RHbHZiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YjNCMGFXOXVJSFpoYkhWbFBWd2lRbEpjSWo1Q2NtRjZhV3c4TDI5d2RHbHZiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YjNCMGFXOXVJSFpoYkhWbFBWd2lWVUZjSWo1VmEzSmhhVzVsUEM5dmNIUnBiMjQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEc5d2RHbHZiaUIyWVd4MVpUMWNJbFZUWENJK1ZXNXBkR1ZrSUZOMFlYUmxjend2YjNCMGFXOXVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM05sYkdWamRENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhzWVdKbGJDQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ3dE1USmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wY205dVp6NVZjR3h2WVdRZ1lTQm1hV3hsT2p3dmMzUnliMjVuUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltWnBiR1ZjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpWm1sc1pWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVptbHNaU0E5SUhKOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhoWW1Wc1BseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMDJYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSMlZ1WkdWeU9qd3ZjM1J5YjI1blBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFXNXdkWFFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUMWNJbkpoWkdsdlhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltZGxibVJsY2x3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUFZ3aWJXRnNaVndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsa1BWd2laMlZ1WkdWeVRXRnNaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVaMlZ1WkdWeUlEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YmtOb1lXNW5aVDE3ZEdocGN5NXZia05vWVc1blpYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0x6NGdQR3hoWW1Wc0lHaDBiV3hHYjNJOVhDSm5aVzVrWlhKTllXeGxYQ0krVFdGc1pUd3ZiR0ZpWld3K1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHVjSFYwSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTlYQ0p5WVdScGIxd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVOVhDSm5aVzVrWlhKY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlQxY0ltWmxiV0ZzWlZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbGtQVndpWjJWdVpHVnlSbVZ0WVd4bFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV1k5ZTNJZ1BUNGdkR2hwY3k1blpXNWtaWElnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGlBOGJHRmlaV3dnYUhSdGJFWnZjajFjSW1kbGJtUmxja1psYldGc1pWd2lQa1psYldGc1pUd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMnd0Tmx3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUnliMjVuUGtSdklIbHZkU0JvWVhabElHRWdjRzl5ZEdadmJHbHZPand2YzNSeWIyNW5QbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR0ZpWld3Z1kyeGhjM05PWVcxbFBWd2lZMmhsWTJ0aWIzaGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbFBWd2lZMmhsWTJ0aWIzaGNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTlYQ0pqYUdWamEySnZlRndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1U5WENKNVpYTmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVZMmhsWTJ0aWIzZ2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiajVaWlhNOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hoWW1Wc0lHTnNZWE56VG1GdFpUMWNJbU5vWldOclltOTRYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdWNIVjBJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbU5vWldOclltOTRYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpWTJobFkydGliM2hjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUFZ3aWJtOWNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVZMmhsWTJ0aWIzZ2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiajVPYnp3dmMzQmhiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzWVdKbGJENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c1lXSmxiQ0JqYkdGemMwNWhiV1U5WENKamFHVmphMkp2ZUZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U5WENKamFHVmphMkp2ZUZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlQxY0ltTm9aV05yWW05NFhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUMWNJbTFoZVdKbFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxtTm9aV05yWW05NElEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNCtUV0Y1WW1VOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmx4dUlDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWNtOTNYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzB4TWx3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGNtOXVaejVTWlhOMWJXVTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFJsZUhSaGNtVmhJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbkpsYzNWdFpWd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVjbVZ6ZFcxbElEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0luSnZkMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMnd0TVRJZ2NtbG5hSFJjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdKeUlDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbFBWd2lZblYwZEc5dUxYQnlhVzFoY25sY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsUFZ3aWMzVmliV2wwWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUGxaaGJHbGtZWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUR3dlptOXliVDVjYmlBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNrN1hHNGdJSDFjYm4xY2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBlbWFpbCBmcm9tICcuL2VtYWlsJztcbmltcG9ydCBleHRlbnNpb24gZnJvbSAnLi9leHRlbnNpb24nO1xuaW1wb3J0IGxldHRlciBmcm9tICcuL2xldHRlcic7XG5pbXBvcnQgbWF4bGVuZ3RoIGZyb20gJy4vbWF4bGVuZ3RoJztcbmltcG9ydCBtaW5sZW5ndGggZnJvbSAnLi9taW5sZW5ndGgnO1xuaW1wb3J0IG1heHNpemUgZnJvbSAnLi9tYXhzaXplJztcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vcmVxdWlyZWQnO1xuaW1wb3J0IHZhbHVlTm90RXF1YWxzIGZyb20gJy4vdmFsdWVOb3RFcXVhbHMnO1xuaW1wb3J0IG1pbmNoZWNrZWQgZnJvbSAnLi9taW5jaGVja2VkJztcbmltcG9ydCB0ZXN0ZSBmcm9tICcuL3Rlc3RlJztcblxubW9kdWxlLmV4cG9ydHMgPSBbXG4gIGVtYWlsLFxuICBleHRlbnNpb24sXG4gIGxldHRlcixcbiAgbWF4bGVuZ3RoLFxuICBtaW5sZW5ndGgsXG4gIG1heHNpemUsXG4gIG51bWJlcixcbiAgcmVxdWlyZWQsXG4gIHZhbHVlTm90RXF1YWxzLFxuICBtaW5jaGVja2VkLFxuICB0ZXN0ZSxcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ2VtYWlsJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJyxcbiAgZm46ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAoL15bK2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvaSkudGVzdCh2YWx1ZSkgfHwgZmFsc2U7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2VtYWlsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdleHRlbnNpb24nLFxuICBtZXNzYWdlOiAnUGxlYXNlIGNob29zZSBhIGZpbGUgd2l0aCBhIHZhbGlkIGV4dGVuc2lvbjogKC4uLnt9KScsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtcykgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBBcnJheS5mcm9tKGVsZW1lbnRbMF0uZmlsZXMpO1xuICAgIHJldHVybiBmaWxlLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZpbGVUeXBlID0gKGl0ZW0udHlwZSkuc3BsaXQoJy8nKVsxXTtcbiAgICAgIGlmIChmaWxlVHlwZSA9PT0gJ2pwZWcnICYmIHBhcmFtcy5pbmNsdWRlcygnanBnJykgJiYgIXBhcmFtcy5pbmNsdWRlcygnanBlZycpKSBwYXJhbXMucHVzaCgnanBlZycpO1xuICAgICAgcmV0dXJuIHBhcmFtcy5pbmNsdWRlcyhmaWxlVHlwZSk7XG4gICAgfSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2V4dGVuc2lvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbGV0dGVyJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBvbmx5IGxldHRlcnMnLFxuICBmbjogKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICgvXlthLXpBLVpdKyQvKS50ZXN0KHZhbHVlKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbGV0dGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtYXhsZW5ndGgnLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycycsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZS5sZW5ndGggPD0gcGFyYW0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhsZW5ndGguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ21pbmxlbmd0aCcsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYXQgbGVhc3QgezB9IGNoYXJhY3RlcnMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIHJldHVybiAodmFsdWUubGVuZ3RoID49IHBhcmFtKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWlubGVuZ3RoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtYXhzaXplJyxcbiAgbWVzc2FnZTogJ0ZpbGUgc2l6ZSBtdXN0IG5vdCBleGNlZWQgezB9IGJ5dGVzJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICBjb25zdCBmaWxlID0gQXJyYXkuZnJvbShlbGVtZW50WzBdLmZpbGVzKTtcbiAgICByZXR1cm4gZmlsZS5zb21lKGl0ZW0gPT4gKGl0ZW0uc2l6ZSA8PSBwYXJhbSkpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhzaXplLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdudW1iZXInLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyJyxcbiAgZm46ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAvXlxcZCskL2cudGVzdCh2YWx1ZSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL251bWJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAncmVxdWlyZWQnLFxuICBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5zb21lKGVsZW0gPT4gZWxlbS5jaGVja2VkKTtcbiAgICB9XG4gICAgcmV0dXJuICghIXZhbHVlLmxlbmd0aCB8fCBmYWxzZSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3JlcXVpcmVkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICd2YWx1ZU5vdEVxdWFscycsXG4gIG1lc3NhZ2U6ICdWYWx1ZSBtdXN0IGJlIG5vdCBlcXVhbCB0byB7MH0nLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIHJldHVybiBwYXJhbSAhPT0gdmFsdWU7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3ZhbHVlTm90RXF1YWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtaW5jaGVja2VkJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3QgezB9IG9wdGlvbnMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnN0IHF0ZENoZWNrZWQgPSBlbGVtZW50LnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24uY2hlY2tlZCkgYWNjKys7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApO1xuICAgIHJldHVybiAocXRkQ2hlY2tlZCA+PSBwYXJhbSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21pbmNoZWNrZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ2FycmF5JyxcbiAgbWVzc2FnZTogJ0FycmF5IGluZGV4OiB7MH0gZmllbGQgezF9IGlzIHsyfSByZXF1aXJlZCcsXG4gIGZuOiAoKSA9PiB7XG4gICAgcmV0dXJuIHRydWUgfHwgZmFsc2U7XG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ29iamVjdCcsXG4gIG1lc3NhZ2U6ICdPYmplY3Qga2V5czoge2tleTF9IHx8IHtrZXkyLmtleTNbMF0ua2V5NH0gaXMgcmVxdWlyZWQnLFxuICBmbjogKCkgPT4ge1xuICAgIHJldHVybiB0cnVlIHx8IGZhbHNlO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy90ZXN0ZS5qcyIsImltcG9ydCBWYWxpZGF0ZSBmcm9tICcuL3J1bGVzL1ZhbGlkYXRlJztcblxuY2xhc3MgT2N0YWZvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRlLmdldEFsbCgpO1xuICAgIHRoaXMudmFsaWRhdGVBbGwgPSBWYWxpZGF0ZS5hcHBseTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9jdGFmb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsImltcG9ydCBSdWxlcyBmcm9tICcuL1J1bGVzJztcbmltcG9ydCB7IGRvbSwgaXNTdHJpbmcsIGlzT2JqZWN0LCBpc0FycmF5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBFcnJvckFjdGlvbnMsIE1lc3NhZ2VBY3Rpb25zLCBWYWxpZGF0ZUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IGVudHJ5VHlwZSB9IGZyb20gJy4uL2VudHJpZXMnO1xuXG5jb25zdCBWYWxpZGF0ZSA9IHtcbiAgZ2V0QWxsOiBWYWxpZGF0ZUFjdGlvbnMuZ2V0QWxsLFxuICBhcHBseTogKGZpZWxkTWFwID0ge30pID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGZpZWxkTWFwKVxuICAgICAgLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkUnVsZXNNYXBwZXIgPSBmaWVsZE1hcFtzZWxlY3Rvcl07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmaWVsZFJ1bGVzRW50cnlUeXBlID0ge1xuICAgICAgICAgIC4uLihpc1N0cmluZyhmaWVsZFJ1bGVzTWFwcGVyKSAmJiBlbnRyeVR5cGUuZmllbGQuc3RyaW5nKGZpZWxkUnVsZXNNYXBwZXIpKSxcbiAgICAgICAgICAuLi4oaXNPYmplY3QoZmllbGRSdWxlc01hcHBlcikgJiYgZW50cnlUeXBlLmZpZWxkLm9iamVjdChmaWVsZFJ1bGVzTWFwcGVyKSksXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZiAoISFPYmplY3Qua2V5cyhmaWVsZFJ1bGVzRW50cnlUeXBlKS5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHNlbGVjdG9yKTtcbiAgICAgICAgICBNZXNzYWdlQWN0aW9ucy5zZXRDdXN0b21GaWVsZE1zZyhzZWxlY3RvciwgZmllbGRSdWxlc0VudHJ5VHlwZS5tZXNzYWdlcyk7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBFcnJvckFjdGlvbnMuc2V0KCdmaWVsZCcsIHNlbGVjdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gKFxuICAgICAgICAgICAgZmllbGRSdWxlc0VudHJ5VHlwZS52YWx1ZSB8fCBcbiAgICAgICAgICAgIChlbGVtZW50Lmxlbmd0aCAmJiBlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMV0udmFsdWUpIHx8XG4gICAgICAgICAgICAoJycpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkUnVsZXMgPSAoXG4gICAgICAgICAgICAoaXNBcnJheShmaWVsZFJ1bGVzRW50cnlUeXBlLnJ1bGVzKSAmJiBlbnRyeVR5cGUucnVsZXMuYXJyYXkoZmllbGRSdWxlc0VudHJ5VHlwZS5ydWxlcykpIHx8XG4gICAgICAgICAgICAoaXNPYmplY3QoZmllbGRSdWxlc0VudHJ5VHlwZS5ydWxlcykgJiYgZmllbGRSdWxlc0VudHJ5VHlwZS5ydWxlcykgfHxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkID0ge1xuICAgICAgICAgICAgcnVsZXM6IGZpZWxkUnVsZXMsXG4gICAgICAgICAgICBtZXNzYWdlczogTWVzc2FnZUFjdGlvbnMuZ2V0QWxsKCksXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICB2YWx1ZTogZmllbGRWYWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHZhbGlkID0gUnVsZXMuYXBwbHkoZmllbGQsIFZhbGlkYXRlQWN0aW9ucy5nZXRBbGwoKSk7XG4gICAgICAgICAgaWYgKHZhbGlkLm1lc3NhZ2VzLmxlbmd0aCkgZXJyb3JzLnB1c2godmFsaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEVycm9yQWN0aW9ucy5zZXQoJ2VudHJ5JywgZmllbGRSdWxlc01hcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgVmFsaWRhdGUuaXNWYWxpZCA9ICFlcnJvcnMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9ydWxlcy9WYWxpZGF0ZS5qcyIsImltcG9ydCB7IFJlcGxhY2VBY3Rpb25zLCBFcnJvckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBkb20gZnJvbSAnLi4vaGVscGVycy9kb21IZWxwZXInO1xuXG5jb25zdCBSdWxlcyA9IHtcbiAgYXBwbHk6IChmaWVsZCA9IHt9LCB2YWxpZGF0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge1xuICAgICAgZmllbGQ6IChmaWVsZC5zZWxlY3RvciB8fCAnJyksXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfTtcblxuICAgIGlmIChlcnJvcnMuZmllbGQpe1xuICAgICAgT2JqZWN0XG4gICAgICAgIC5lbnRyaWVzKGZpZWxkLnJ1bGVzIHx8IHt9KVxuICAgICAgICAuZm9yRWFjaCgoW2tleSwgcGFyYW1zXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gdmFsaWRhdGlvbnNba2V5XTtcbiAgICAgICAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0ZShcbiAgICAgICAgICAgICAgZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgIGZpZWxkLmVsZW1lbnQsXG4gICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgZG9tLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gZmllbGQubWVzc2FnZXMuZmllbGRzW2ZpZWxkLnNlbGVjdG9yXSB8fCB7fTtcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICh1c2VyTWVzc2FnZVtrZXldIHx8IGZpZWxkLm1lc3NhZ2VzLnZhbGlkYXRvcltrZXldKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVwbGFjZUFjdGlvbnMubWVzc2FnZS52YWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGVycm9ycy5tZXNzYWdlcy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEVycm9yQWN0aW9ucy5zZXQoJ3VuZGVmaW5lZCcsIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1J1bGVzLmpzIiwiaW1wb3J0IFBBVFRFUk5TIGZyb20gJy4vcGF0dGVybnMnO1xuaW1wb3J0IE1FU1NBR0VTIGZyb20gJy4vbWVzc2FnZXMnO1xuXG5leHBvcnQge1xuICBQQVRURVJOUyxcbiAgTUVTU0FHRVMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJjb25zdCBpc0FycmF5ID0gdmFsdWUgPT4gKHZhbHVlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc0FycmF5SGVscGVyLmpzIiwiaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5cbmNvbnN0IGlzT2JqZWN0ID0gdmFsdWUgPT4gKGlzVHlwZSh2YWx1ZSkgPT09ICdPYmplY3QnKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNPYmplY3RIZWxwZXIuanMiLCJpbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcblxuY29uc3QgaXNTdHJpbmcgPSB2YWx1ZSA9PiAodmFsdWUgJiYgaXNUeXBlKHZhbHVlKSA9PT0gJ1N0cmluZycpO1xuXG5leHBvcnQgZGVmYXVsdCBpc1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc1N0cmluZ0hlbHBlci5qcyIsImltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuXG5jb25zdCBpc051bWJlciA9IHZhbHVlID0+IChpc1R5cGUodmFsdWUpID09PSAnTnVtYmVyJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzTnVtYmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzTnVtYmVySGVscGVyLmpzIiwiaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5cbmNvbnN0IGlzQm9vbGVhbiA9IHZhbHVlID0+IChpc1R5cGUodmFsdWUpID09PSAnQm9vbGVhbicpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0Jvb2xlYW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNCb29sZWFuSGVscGVyLmpzIiwiaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5cbmNvbnN0IGlzRnVuY3Rpb24gPSB2YWx1ZSA9PiAoaXNUeXBlKHZhbHVlKSA9PT0gJ0Z1bmN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNGdW5jdGlvbkhlbHBlci5qcyIsImltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuXG5jb25zdCBnZXQgPSAob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IF9nZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZ2V0SGVscGVyLmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRXJyb3JBY3Rpb25zIGZyb20gJy4vRXJyb3JBY3Rpb25zJztcbmltcG9ydCBNZXNzYWdlQWN0aW9ucyBmcm9tICcuL01lc3NhZ2VBY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0Z1bmN0aW9uLCBpc0FycmF5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi4vc3RhdGVzJztcblxuY29uc3QgVmFsaWRhdGVBY3Rpb25zID0ge1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIFN0YXRlLnZhbGlkYXRpb25zO1xuICB9LFxuICBzZXQobmFtZSwgZm4pIHtcbiAgICBTdGF0ZS52YWxpZGF0aW9uc1tuYW1lXSA9IGZuO1xuICB9LFxuICBhZGQobGlzdE9mVmFsaWRhdGlvbnMpIHtcbiAgICBpZiAoaXNBcnJheShsaXN0T2ZWYWxpZGF0aW9ucykpIHtcbiAgICAgIGxpc3RPZlZhbGlkYXRpb25zLmZvckVhY2goKHsgbmFtZSwgZm4sIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBjb25zdCBoYXNQYXJhbXMgPSAoaXNTdHJpbmcobmFtZSkgJiYgaXNGdW5jdGlvbihmbikgJiYgaXNTdHJpbmcobWVzc2FnZSkpO1xuXG4gICAgICAgIGlmIChoYXNQYXJhbXMgJiYgbWVzc2FnZSkge1xuICAgICAgICAgIE1lc3NhZ2VBY3Rpb25zLnNldChuYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgICBWYWxpZGF0ZUFjdGlvbnMuc2V0KG5hbWUsIGZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWVzc2FnZSkgRXJyb3JBY3Rpb25zLnNldCgnbXNnJywgbmFtZSk7XG4gICAgICAgIGlmICghaGFzUGFyYW1zKSBFcnJvckFjdGlvbnMuc2V0KCdhZGQnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvckFjdGlvbnMuc2V0KCdhZGQnLCBsaXN0T2ZWYWxpZGF0aW9ucyk7XG4gICAgfVxuICB9LFxufTtcblxuU3RhdGUudmFsaWRhdGlvbnMgPSB7XG4gIGFkZDogVmFsaWRhdGVBY3Rpb25zLmFkZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRlQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9WYWxpZGF0ZUFjdGlvbnMuanMiLCJpbXBvcnQgU3RyaW5nRW50cnkgZnJvbSAnLi9TdHJpbmdFbnRyeSc7XG5pbXBvcnQgT2JqZWN0RW50cnkgZnJvbSAnLi9PYmplY3RFbnRyeSc7XG5pbXBvcnQgQXJyYXlFbnRyeSBmcm9tICcuL0FycmF5RW50cnknO1xuXG5leHBvcnQgY29uc3QgZW50cnlUeXBlID0ge1xuICBmaWVsZDoge1xuICAgIG9iamVjdDogT2JqZWN0RW50cnksXG4gICAgc3RyaW5nOiBTdHJpbmdFbnRyeSxcbiAgfSxcbiAgcnVsZXM6IHtcbiAgICBhcnJheTogQXJyYXlFbnRyeSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvaW5kZXguanMiLCJpbXBvcnQgcGFyYW1zVXRpbHMgZnJvbSAnLi4vdXRpbHMvcGFyYW1zVXRpbHMnO1xuaW1wb3J0IFJ1bGVNb2RlbCBmcm9tICcuLi9tb2RlbHMvUnVsZU1vZGVsJztcblxuLy8gZXh0cmFjdFJ1bGVzRnJvbVN0cmluZ1xuY29uc3QgU3RyaW5nRW50cnkgPSAoc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJ1bGVzID0gcGFyYW1zVXRpbHMuZ2V0LnNob3J0U3RyaW5nVmFsaWRhdGlvbihzdHJpbmcpO1xuICByZXR1cm4gUnVsZU1vZGVsLmdldCh7IFxuICAgIG1lc3NhZ2VzOiB7fSxcbiAgICBydWxlcyxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9TdHJpbmdFbnRyeS5qcyIsImltcG9ydCBSdWxlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1J1bGVNb2RlbCc7XG5cbi8vIGV4dHJhY3RSdWxlc0Zyb21TdHJpbmdcbmNvbnN0IE9iamVjdEVudHJ5ID0gKG9iamVjdCkgPT4ge1xuICByZXR1cm4gUnVsZU1vZGVsLmdldChvYmplY3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0RW50cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvT2JqZWN0RW50cnkuanMiLCJpbXBvcnQgcGFyYW1zVXRpbHMgZnJvbSAnLi4vdXRpbHMvcGFyYW1zVXRpbHMnO1xuXG4vLyBleHRyYWN0UnVsZXNGcm9tQXJyYXlcbmNvbnN0IEFycmF5RW50cnkgPSAoZmllbGQgPSBbXSkgPT4ge1xuICBjb25zdCBydWxlcyA9IGZpZWxkLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgY29uc3QgcnVsZXMgPSBwYXJhbXNVdGlscy5nZXQuc2hvcnRTdHJpbmdWYWxpZGF0aW9uKGN1cnJlbnQpO1xuICAgIHJldHVybiB7IC4uLmFjYywgLi4ucnVsZXMgfTtcbiAgfSwge30pO1xuXG4gIHJldHVybiBydWxlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5RW50cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvQXJyYXlFbnRyeS5qcyIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIEVycm9ycyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhFcnJvcnMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVycm9ycygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXJyb3JzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRXJyb3JzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXJyb3JzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXJyb3JzLCBbe1xuICAgIGtleTogJ3VuaXF1ZUtleScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuaXF1ZUtleSgpIHtcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZXJyb3JzID0gdGhpcy5wcm9wcy5lcnJvcnM7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICd1bCcsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnZXJyb3JzJyB9LFxuICAgICAgICBlcnJvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0ubWVzc2FnZXMubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgeyBrZXk6IF90aGlzMi51bmlxdWVLZXkoKSB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0Vycm9yOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnaScsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdmaWVsZCcgfSxcbiAgICAgICAgICAgICAgICBpdGVtLmZpZWxkLnNwbGl0KC8oPyFbYS16XSkoPz1bQS1aXSkvZykuam9pbignLScpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFcnJvcnM7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqYjIxd2IyNWxiblJ6TDBWeWNtOXljeTVxY3lKZExDSnVZVzFsY3lJNld5SlNaV0ZqZENJc0lrTnZiWEJ2Ym1WdWRDSXNJa1Z5Y205eWN5SXNJazFoZEdnaUxDSnlZVzVrYjIwaUxDSjBiMU4wY21sdVp5SXNJbk4xWW5OMGNtbHVaeUlzSW1WeWNtOXljeUlzSW5CeWIzQnpJaXdpYldGd0lpd2lhWFJsYlNJc0ltMWxjM05oWjJWeklpd2liV1Z6YzJGblpTSXNJblZ1YVhGMVpVdGxlU0lzSW1acFpXeGtJaXdpYzNCc2FYUWlMQ0pxYjJsdUlpd2lkRzlNYjNkbGNrTmhjMlVpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08wRkJRVUVzVDBGQlQwRXNTMEZCVUN4SlFVRm5Ra01zVTBGQmFFSXNVVUZCYVVNc1QwRkJha003TzBsQlJYRkNReXhOT3pzN096czdPenM3T3p0blEwRkRVanRCUVVOVUxHRkJRVTlETEV0QlFVdERMRTFCUVV3c1IwRkJZME1zVVVGQlpDeERRVUYxUWl4RlFVRjJRaXhGUVVFeVFrTXNVMEZCTTBJc1EwRkJjVU1zUTBGQmNrTXNSVUZCZDBNc1JVRkJlRU1zUTBGQlVEdEJRVU5FT3pzN05rSkJSVkU3UVVGQlFUczdRVUZCUVN4VlFVTkRReXhOUVVSRUxFZEJRMWtzUzBGQlMwTXNTMEZFYWtJc1EwRkRRMFFzVFVGRVJEczdPMEZCUjFBc1lVRkRSVHRCUVVGQk8wRkJRVUVzVlVGQlNTeFhRVUZWTEZGQlFXUTdRVUZEUjBFc1pVRkJUMFVzUjBGQlVDeERRVUZYTEdkQ1FVRlJPMEZCUTJ4Q0xHbENRVU5GUXl4TFFVRkxReXhSUVVGTUxFTkJRV05HTEVkQlFXUXNRMEZCYTBJc1ZVRkJRMGNzVDBGQlJDeEZRVUZoTzBGQlF6ZENMRzFDUVVORk8wRkJRVUU3UVVGQlFTeG5Ra0ZCU1N4TFFVRkxMRTlCUVV0RExGTkJRVXdzUlVGQlZEdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRVUU3UVVGQlFTeHJRa0ZCUnl4WFFVRlZMRTlCUVdJN1FVRkZTVWdzY1VKQlFVdEpMRXRCUVV3c1EwRkRSME1zUzBGRVNDeERRVU5UTEhGQ1FVUlVMRVZCUlVkRExFbEJSa2dzUTBGRlVTeEhRVVpTTEVWQlIwZERMRmRCU0VnN1FVRkdTaXhsUVVaR08wRkJWVVU3UVVGQlFUdEJRVUZCTzBGQlFVOU1PMEZCUVZBN1FVRldSaXhoUVVSR08wRkJZMFFzVjBGbVJDeERRVVJHTzBGQmEwSkVMRk5CYmtKQk8wRkJSRWdzVDBGRVJqdEJRWGRDUkRzN096dEZRV2hEYVVOWUxGTTdPMlZCUVdaRExFMGlMQ0ptYVd4bElqb2lSWEp5YjNKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5aFpHMXBiaTlFYjJOMWJXVnVkSE12VUhKdmFtVmpkSE12YjJOMFlXWnZjbTB0WkdWdGJ5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZEN3Z2V5QkRiMjF3YjI1bGJuUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVWeWNtOXljeUJsZUhSbGJtUnpJRU52YlhCdmJtVnVkQ0I3WEc0Z0lIVnVhWEYxWlV0bGVTZ3BlMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbkpoYm1SdmJTZ3BMblJ2VTNSeWFXNW5LRE0yS1M1emRXSnpkSEpwYm1jb01pd2dNVFVwWEc0Z0lIMWNibHh1SUNCeVpXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsY25KdmNuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnUEhWc0lHTnNZWE56VG1GdFpUMWNJbVZ5Y205eWMxd2lQbHh1SUNBZ0lDQWdJQ0I3WlhKeWIzSnpMbTFoY0NocGRHVnRJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNXRaWE56WVdkbGN5NXRZWEFvS0cxbGMzTmhaMlVwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHa2dhMlY1UFh0MGFHbHpMblZ1YVhGMVpVdGxlU2dwZlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkSEp2Ym1jK1JYSnliM0k2UEM5emRISnZibWMrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6YzA1aGJXVTlKMlpwWld4a0p6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2wwWlcwdVptbGxiR1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzV6Y0d4cGRDZ3ZLRDhoVzJFdGVsMHBLRDg5VzBFdFdsMHBMMmNwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1YW05cGJpZ25MU2NwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1ZEc5TWIzZGxja05oYzJVb0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJqNTdiV1Z6YzJGblpYMDhMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUgwcGZWeHVJQ0FnSUNBZ1BDOTFiRDVjYmlBZ0lDQXBPMXh1SUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdE5hbWU6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5sZW5ndGg6IDRcbiAgICB9LFxuICAgIG1lc3NhZ2VzOiB7XG4gICAgICByZXF1aXJlZDogJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQnXG4gICAgfVxuICB9LFxuICBsYXN0TmFtZToge1xuICAgIHJ1bGVzOiBbJ3JlcXVpcmVkJywgJ21pbmxlbmd0aDozJ11cbiAgfSxcbiAgZW1haWw6ICdlbWFpbCcsXG4gIGNvdW50cnk6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWx1ZU5vdEVxdWFsczogJ0JSJ1xuICAgIH1cbiAgfSxcbiAgZmlsZToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGV4dGVuc2lvbjogWydwbmcnLCAnanBnJ11cbiAgICB9XG4gIH0sXG4gIHJlc3VtZTogJ3JlcXVpcmVkJyxcbiAgZ2VuZGVyOiAncmVxdWlyZWQnLFxuICBjaGVja2JveDoge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbmNoZWNrZWQ6IDJcbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwwRndjQzlXWVd4cFpHRjBhVzl1VFdGd0xtcHpJbDBzSW01aGJXVnpJanBiSW1acGNuTjBUbUZ0WlNJc0luSjFiR1Z6SWl3aWNtVnhkV2x5WldRaUxDSnRhVzVzWlc1bmRHZ2lMQ0p0WlhOellXZGxjeUlzSW14aGMzUk9ZVzFsSWl3aVpXMWhhV3dpTENKamIzVnVkSEo1SWl3aWRtRnNkV1ZPYjNSRmNYVmhiSE1pTENKbWFXeGxJaXdpWlhoMFpXNXphVzl1SWl3aWNtVnpkVzFsSWl3aVoyVnVaR1Z5SWl3aVkyaGxZMnRpYjNnaUxDSnRhVzVqYUdWamEyVmtJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hsUVVGbE8wRkJRMkpCTEdGQlFWYzdRVUZEVkVNc1YwRkJUenRCUVVOTVF5eG5Ra0ZCVlN4SlFVUk1PMEZCUlV4RExHbENRVUZYTzBGQlJrNHNTMEZFUlR0QlFVdFVReXhqUVVGVk8wRkJRMUpHTEdkQ1FVRlZPMEZCUkVZN1FVRk1SQ3hIUVVSRk8wRkJWV0pITEZsQlFWVTdRVUZEVWtvc1YwRkJUeXhEUVVGRExGVkJRVVFzUlVGQllTeGhRVUZpTzBGQlJFTXNSMEZXUnp0QlFXRmlTeXhUUVVGUExFOUJZazA3UVVGallrTXNWMEZCVXp0QlFVTlFUaXhYUVVGUE8wRkJRMHhETEdkQ1FVRlZMRWxCUkV3N1FVRkZURTBzYzBKQlFXZENPMEZCUmxnN1FVRkVRU3hIUVdSSk8wRkJiMEppUXl4UlFVRk5PMEZCUTBwU0xGZEJRVTg3UVVGRFRFTXNaMEpCUVZVc1NVRkVURHRCUVVWTVVTeHBRa0ZCVnl4RFFVRkRMRXRCUVVRc1JVRkJVU3hMUVVGU08wRkJSazQ3UVVGRVNDeEhRWEJDVHp0QlFUQkNZa01zVlVGQlVTeFZRVEZDU3p0QlFUSkNZa01zVlVGQlVTeFZRVE5DU3p0QlFUUkNZa01zV1VGQlZUdEJRVU5TV2l4WFFVRlBPMEZCUTB4RExHZENRVUZWTEVsQlJFdzdRVUZGVEZrc2EwSkJRVms3UVVGR1VEdEJRVVJETzBGQk5VSkhMRU5CUVdZaUxDSm1hV3hsSWpvaVZtRnNhV1JoZEdsdmJrMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZZV1J0YVc0dlJHOWpkVzFsYm5SekwxQnliMnBsWTNSekwyOWpkR0ZtYjNKdExXUmxiVzhpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBjbk4wVG1GdFpUb2dlMXh1SUNBZ0lISjFiR1Z6T2lCN1hHNGdJQ0FnSUNCeVpYRjFhWEpsWkRvZ2RISjFaU3hjYmlBZ0lDQWdJRzFwYm14bGJtZDBhRG9nTkN4Y2JpQWdJQ0I5TEZ4dUlDQWdJRzFsYzNOaFoyVnpPaUI3WEc0Z0lDQWdJQ0J5WlhGMWFYSmxaRG9nSjBacGNuTjBJRTVoYldVZ2FYTWdjbVZ4ZFdseVpXUW5MRnh1SUNBZ0lIMHNYRzRnSUgwc1hHNGdJR3hoYzNST1lXMWxPaUI3WEc0Z0lDQWdjblZzWlhNNklGc25jbVZ4ZFdseVpXUW5MQ0FuYldsdWJHVnVaM1JvT2pNblhWeHVJQ0I5TEZ4dUlDQmxiV0ZwYkRvZ0oyVnRZV2xzSnl4Y2JpQWdZMjkxYm5SeWVUb2dlMXh1SUNBZ0lISjFiR1Z6T2lCN1hHNGdJQ0FnSUNCeVpYRjFhWEpsWkRvZ2RISjFaU3hjYmlBZ0lDQWdJSFpoYkhWbFRtOTBSWEYxWVd4ek9pQW5RbEluTEZ4dUlDQWdJSDBzWEc0Z0lIMHNYRzRnSUdacGJHVTZJSHRjYmlBZ0lDQnlkV3hsY3pvZ2UxeHVJQ0FnSUNBZ2NtVnhkV2x5WldRNklIUnlkV1VzWEc0Z0lDQWdJQ0JsZUhSbGJuTnBiMjQ2SUZzbmNHNW5KeXdnSjJwd1p5ZGRMRnh1SUNBZ0lIMHNYRzRnSUgwc1hHNGdJSEpsYzNWdFpUb2dKM0psY1hWcGNtVmtKeXhjYmlBZ1oyVnVaR1Z5T2lBbmNtVnhkV2x5WldRbkxGeHVJQ0JqYUdWamEySnZlRG9nZTF4dUlDQWdJSEoxYkdWek9pQjdYRzRnSUNBZ0lDQnlaWEYxYVhKbFpEb2dkSEoxWlN4Y2JpQWdJQ0FnSUcxcGJtTm9aV05yWldRNklESmNiaUFnSUNCOVhHNGdJSDBzWEc1OU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAvVmFsaWRhdGlvbk1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=