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
      console.log(validate);

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
                null,
                'Octaform Validate - Demo'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFkZGl0aW9uYWxzIiwiT2N0YWZvcm0iLCJFcnJvcnMiLCJWYWxpZGF0aW9uTWFwIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImhhc0Vycm9ycyIsIm9jdGFmb3JtIiwidmFsaWRhdG9yIiwiYWRkIiwib25TdWJtaXQiLCJiaW5kIiwib25DaGFuZ2UiLCJoYXNGaWVsZEVycm9yIiwidmFsaWRhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUFsbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNsYXNzRXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImVsZW0iLCJnZXRFbGVtZW50c0J5TmFtZSIsIml0ZW0iLCJmaWVsZCIsIm5hbWUiLCJsZW5ndGgiLCJlbG0iLCJmaXJzdE5hbWUiLCJyIiwibGFzdE5hbWUiLCJlbWFpbCIsImNvdW50cnkiLCJmaWxlIiwiZ2VuZGVyIiwiY2hlY2tib3giLCJyZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHFDQUF4QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsMEJBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsaUJBQTFCOztJQUVxQkMsRzs7O0FBQ25CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXO0FBREEsS0FBYjtBQUdBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBSVAsUUFBSixFQUFoQjtBQUNBLFVBQUtPLFFBQUwsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEJWLFdBQTVCO0FBQ0EsVUFBS1csUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCxPQUFoQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0gsSUFBZCxPQUFoQjtBQVZpQjtBQVdsQjs7Ozs2QkFFUUksQyxFQUFFO0FBQ1RBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixRQUFMO0FBQ0Q7OzsrQkFFUztBQUNSLFdBQUtBLFFBQUw7QUFDRDs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBTUEsV0FBVyxLQUFLUCxRQUFMLENBQWNVLFdBQWQsQ0FBMEJmLGFBQTFCLENBQWpCO0FBQ0FnQixjQUFRQyxHQUFSLENBQVlMLFFBQVo7O0FBRUEsV0FBS00sUUFBTCxDQUFjO0FBQ1pkLG1CQUFXUTtBQURDLE9BQWQsRUFFRztBQUFBLGVBQU0sT0FBS0QsYUFBTCxDQUFtQkMsUUFBbkIsQ0FBTjtBQUFBLE9BRkg7QUFHRDs7O2tDQUVhQSxRLEVBQVM7QUFBQTs7QUFDckIsVUFBTU8sYUFBYSxTQUFuQjtBQUNBQyxlQUFTQyxnQkFBVCxPQUE4QkYsVUFBOUIsRUFDR0csT0FESCxDQUNXLG1CQUFXO0FBQ2xCQyxnQkFBUUMsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUJOLFVBQXpCO0FBQ0QsT0FISDs7QUFLQVAsZUFBU1UsT0FBVCxDQUFpQixnQkFBUTtBQUN2QixZQUFNSSxPQUFPTixTQUFTTyxpQkFBVCxDQUEyQixPQUFLQyxLQUFLQyxLQUFWLEVBQWlCQyxJQUE1QyxDQUFiO0FBQ0EsWUFBR0osS0FBS0ssTUFBTCxHQUFjLENBQWpCLEVBQW9CO0FBQ2xCTCxlQUFLSixPQUFMLENBQWE7QUFBQSxtQkFBT1UsSUFBSVIsU0FBSixDQUFjakIsR0FBZCxDQUFrQlksVUFBbEIsQ0FBUDtBQUFBLFdBQWI7QUFDRCxTQUZELE1BRUs7QUFDSCxpQkFBS1MsS0FBS0MsS0FBVixFQUFpQkwsU0FBakIsQ0FBMkJqQixHQUEzQixDQUErQlksVUFBL0I7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ2YsU0FERCxHQUNlLEtBQUtELEtBRHBCLENBQ0NDLFNBREQ7OztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxXQUFoQixFQUE0QixVQUFVLEtBQUtJLFFBQTNDO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQURGO0FBS0csYUFBQyxDQUFDSixVQUFVMkIsTUFBWixJQUNDO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFFBQWY7QUFDRSxrQ0FBQyxNQUFELElBQVEsUUFBUTNCLFNBQWhCO0FBREYsYUFOSjtBQVdFO0FBQUE7QUFBQSxnQkFBTyxXQUFVLE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSxzQkFBSyxNQURQO0FBRUUsc0JBQUssV0FGUDtBQUdFLDhCQUFhLFlBSGY7QUFJRSxxQkFBSztBQUFBLHlCQUFLLE9BQUs2QixTQUFMLEdBQWlCQyxDQUF0QjtBQUFBLGlCQUpQO0FBS0UsMEJBQVUsS0FBS3hCO0FBTGpCO0FBRkYsYUFYRjtBQXNCRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssTUFEUDtBQUVFLHNCQUFLLFVBRlA7QUFHRSw4QkFBYSxhQUhmO0FBSUUscUJBQUs7QUFBQSx5QkFBSyxPQUFLeUIsUUFBTCxHQUFnQkQsQ0FBckI7QUFBQSxpQkFKUDtBQUtFLDBCQUFVLEtBQUt4QjtBQUxqQjtBQUZGO0FBdEJGLFdBREY7QUFtQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLHNCQUFLLE1BRFA7QUFFRSxzQkFBSyxPQUZQO0FBR0UsOEJBQWEsT0FIZjtBQUlFLHFCQUFLO0FBQUEseUJBQUssT0FBSzBCLEtBQUwsR0FBYUYsQ0FBbEI7QUFBQSxpQkFKUDtBQUtFLDBCQUFVLEtBQUt4QjtBQUxqQjtBQUZGLGFBREY7QUFZRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUNFLHdCQUFLLFNBRFA7QUFFRSxnQ0FBYSxjQUZmO0FBR0UsdUJBQUs7QUFBQSwyQkFBSyxPQUFLMkIsT0FBTCxHQUFlSCxDQUFwQjtBQUFBLG1CQUhQO0FBSUUsNEJBQVUsS0FBS3hCO0FBSmpCO0FBTUU7QUFBQTtBQUFBLG9CQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsaUJBTkY7QUFPRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQSxpQkFQRjtBQVFFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLElBQWQ7QUFBQTtBQUFBLGlCQVJGO0FBU0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sSUFBZDtBQUFBO0FBQUE7QUFURjtBQUZGLGFBWkY7QUEyQkU7QUFBQTtBQUFBLGdCQUFPLFdBQVUsUUFBakI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLHNCQUFLLE1BRFA7QUFFRSxzQkFBSyxNQUZQO0FBR0UscUJBQUs7QUFBQSx5QkFBSyxPQUFLNEIsSUFBTCxHQUFZSixDQUFqQjtBQUFBLGlCQUhQO0FBSUUsMEJBQVUsS0FBS3hCO0FBSmpCO0FBRkYsYUEzQkY7QUFxQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssT0FEUDtBQUVFLHNCQUFLLFFBRlA7QUFHRSx1QkFBTSxNQUhSO0FBSUUsb0JBQUcsWUFKTDtBQUtFLHFCQUFLO0FBQUEseUJBQUssT0FBSzZCLE1BQUwsR0FBY0wsQ0FBbkI7QUFBQSxpQkFMUDtBQU1FLDBCQUFVLEtBQUt4QjtBQU5qQixnQkFGRjtBQUFBO0FBU0s7QUFBQTtBQUFBLGtCQUFPLFNBQVEsWUFBZjtBQUFBO0FBQUEsZUFUTDtBQVdFO0FBQ0Usc0JBQUssT0FEUDtBQUVFLHNCQUFLLFFBRlA7QUFHRSx1QkFBTSxRQUhSO0FBSUUsb0JBQUcsY0FKTDtBQUtFLHFCQUFLO0FBQUEseUJBQUssT0FBSzZCLE1BQUwsR0FBY0wsQ0FBbkI7QUFBQSxpQkFMUDtBQU1FLDBCQUFVLEtBQUt4QjtBQU5qQixnQkFYRjtBQUFBO0FBa0JLO0FBQUE7QUFBQSxrQkFBTyxTQUFRLGNBQWY7QUFBQTtBQUFBO0FBbEJMLGFBckNGO0FBMERFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQU8sV0FBVSxVQUFqQjtBQUNFO0FBQ0Usd0JBQUssVUFEUDtBQUVFLHdCQUFLLFVBRlA7QUFHRSx5QkFBTSxLQUhSO0FBSUUsdUJBQUs7QUFBQSwyQkFBSyxPQUFLOEIsUUFBTCxHQUFnQk4sQ0FBckI7QUFBQSxtQkFKUDtBQUtFLDRCQUFVLEtBQUt4QjtBQUxqQixrQkFERjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixlQUZGO0FBYUU7QUFBQTtBQUFBLGtCQUFPLFdBQVUsVUFBakI7QUFDRTtBQUNFLHdCQUFLLFVBRFA7QUFFRSx3QkFBSyxVQUZQO0FBR0UseUJBQU0sSUFIUjtBQUlFLHVCQUFLO0FBQUEsMkJBQUssT0FBSzhCLFFBQUwsR0FBZ0JOLENBQXJCO0FBQUEsbUJBSlA7QUFLRSw0QkFBVSxLQUFLeEI7QUFMakIsa0JBREY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsZUFiRjtBQXdCRTtBQUFBO0FBQUEsa0JBQU8sV0FBVSxVQUFqQjtBQUNFO0FBQ0Usd0JBQUssVUFEUDtBQUVFLHdCQUFLLFVBRlA7QUFHRSx5QkFBTSxPQUhSO0FBSUUsdUJBQUs7QUFBQSwyQkFBSyxPQUFLOEIsUUFBTCxHQUFnQk4sQ0FBckI7QUFBQSxtQkFKUDtBQUtFLDRCQUFVLEtBQUt4QjtBQUxqQixrQkFERjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQXhCRjtBQTFERixXQW5DRjtBQWtJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQ0Usd0JBQUssUUFEUDtBQUVFLHVCQUFLO0FBQUEsMkJBQUssT0FBSytCLE1BQUwsR0FBY1AsQ0FBbkI7QUFBQSxtQkFGUDtBQUdFLDRCQUFVLEtBQUt4QjtBQUhqQjtBQUZGO0FBREY7QUFERixXQWxJRjtBQStJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQ0UsNkNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSw2QkFBVSxnQkFEWjtBQUVFLHdCQUFLO0FBRlA7QUFBQTtBQUFBO0FBRkY7QUFERjtBQS9JRjtBQURGLE9BREY7QUE4SkQ7Ozs7RUFsTjhCZCxTOztlQUFaSyxHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkaXRpb25hbHMgZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMnO1xuaW1wb3J0IE9jdGFmb3JtIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtL3NyYyc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL0Vycm9ycyc7XG5pbXBvcnQgVmFsaWRhdGlvbk1hcCBmcm9tICcuL1ZhbGlkYXRpb25NYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3JzOiBbXSxcbiAgICB9XG4gICAgdGhpcy5vY3RhZm9ybSA9IG5ldyBPY3RhZm9ybSgpO1xuICAgIHRoaXMub2N0YWZvcm0udmFsaWRhdG9yLmFkZChBZGRpdGlvbmFscyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzRmllbGRFcnJvciA9IHRoaXMuaGFzRmllbGRFcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoKXtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHRoaXMub2N0YWZvcm0udmFsaWRhdGVBbGwoVmFsaWRhdGlvbk1hcCk7XG4gICAgY29uc29sZS5sb2codmFsaWRhdGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBoYXNFcnJvcnM6IHZhbGlkYXRlXG4gICAgfSwgKCkgPT4gdGhpcy5oYXNGaWVsZEVycm9yKHZhbGlkYXRlKSk7XG4gIH1cblxuICBoYXNGaWVsZEVycm9yKHZhbGlkYXRlKXtcbiAgICBjb25zdCBjbGFzc0Vycm9yID0gJ2ludmFsaWQnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzRXJyb3J9YClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NFcnJvcik7XG4gICAgICB9KTtcblxuICAgIHZhbGlkYXRlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUodGhpc1tpdGVtLmZpZWxkXS5uYW1lKTtcbiAgICAgIGlmKGVsZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICBlbGVtLmZvckVhY2goZWxtID0+IGVsbS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpKVxuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXNbaXRlbS5maWVsZF0uY2xhc3NMaXN0LmFkZChjbGFzc0Vycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0Vycm9ycyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXJcIiBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxoND5PY3RhZm9ybSBWYWxpZGF0ZSAtIERlbW88L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHshIWhhc0Vycm9ycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxFcnJvcnMgZXJyb3JzPXtoYXNFcnJvcnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Rmlyc3QgbmFtZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdnaXZlbi1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmZpcnN0TmFtZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXN0IG5hbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2ZhbWlseS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmxhc3ROYW1lID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZW1haWwgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nY291bnRyeS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNvdW50cnkgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIGNvdW50cnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlJcIj5CcmF6aWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVUFcIj5Va3JhaW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTXCI+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5VcGxvYWQgYSBmaWxlOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZmlsZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+R2VuZGVyOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyTWFsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZ2VuZGVyID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz4gPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJNYWxlXCI+TWFsZTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyRmVtYWxlXCJcbiAgICAgICAgICAgICAgICByZWY9e3IgPT4gdGhpcy5nZW5kZXIgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPiA8bGFiZWwgaHRtbEZvcj1cImdlbmRlckZlbWFsZVwiPkZlbWFsZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkRvIHlvdSBoYXZlIGEgcG9ydGZvbGlvOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ5ZXNcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ZZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9cIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Obzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1heWJlXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNoZWNrYm94ID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWF5YmU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5SZXN1bWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlc3VtZVwiIFxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMucmVzdW1lID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlZhbGlkYXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNUeXBlSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL01lc3NhZ2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvRXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9SZXBsYWNlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZG9tSGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9zdGF0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9tb2RlbHMvUnVsZU1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heGxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWlubGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhzaXplLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy92YWx1ZU5vdEVxdWFscy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWluY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdGVzdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQXJyYXlIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzT2JqZWN0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc1N0cmluZ0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNOdW1iZXJIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQm9vbGVhbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNGdW5jdGlvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZ2V0SGVscGVyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvQXJyYXlFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL1ZhbGlkYXRpb25NYXAuanMiXSwibmFtZXMiOlsiaXNUeXBlIiwidmFsdWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJtYXRjaCIsImdldCIsInNob3J0U3RyaW5nVmFsaWRhdGlvbiIsInN0cmluZyIsIm1hcCIsIlBBVFRFUk5TIiwiU0hPUlRfUlVMRSIsImV4ZWMiLCJzcHJlYWRMaXN0IiwiTUVTU0FHRSIsIkxJU1QiLCJkb20iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaXNCb29sZWFuIiwiaXNGdW5jdGlvbiIsIk1lc3NhZ2VBY3Rpb25zIiwiZ2V0QWxsIiwiU3RhdGUiLCJtZXNzYWdlcyIsInNldCIsIm5hbWUiLCJtc2ciLCJ2YWxpZGF0b3IiLCJzZXRDdXN0b21GaWVsZE1zZyIsImZpZWxkIiwidXNlck1lc3NhZ2VzIiwiZmllbGRzIiwiYXNzaWduIiwia2V5cyIsImxlbmd0aCIsIkVycm9yQWN0aW9ucyIsIlJlcGxhY2VBY3Rpb25zIiwiVmFsaWRhdGVBY3Rpb25zIiwidHlwZSIsImFyZ3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb3JlIiwiRXJyb3IiLCJwYXJhbXMiLCJFUlJPUiIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJpbmRleCIsInJlcGxhY2UiLCJ2YWxpZGF0aW9uIiwic2VhcmNoSXRlbXMiLCJQQVJBTVMiLCJsaXN0UGFyYW1zIiwicGFyYW1zVXRpbHMiLCJ0ZXh0Iiwiam9pbiIsInB1cmVLZXkiLCJCUkFDRVMiLCJ0cnVlIiwiU0VMRUNUT1IiLCJDT1JFIiwiYWRkIiwidW5kZWZpbmVkIiwiZW50cnkiLCJzZWxlY3RvciIsImVsZW1CeU5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZWxlbUJ5Q2xhc3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZWxlbUJ5SWQiLCJnZXRFbGVtZW50QnlJZCIsImVsZW1CeUFsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwidmFsaWRhdGlvbnMiLCJNRVNTQUdFUyIsInJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZuIiwidGVzdCIsImZpbGUiLCJmaWxlcyIsInNvbWUiLCJpdGVtIiwiZmlsZVR5cGUiLCJzcGxpdCIsImluY2x1ZGVzIiwicHVzaCIsInBhcmFtIiwic2l6ZSIsImVsZW0iLCJjaGVja2VkIiwicXRkQ2hlY2tlZCIsIm9wdGlvbiIsIk9jdGFmb3JtIiwiVmFsaWRhdGUiLCJ2YWxpZGF0ZUFsbCIsImFwcGx5IiwiZmllbGRNYXAiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZmllbGRSdWxlc01hcHBlciIsImZpZWxkUnVsZXNFbnRyeVR5cGUiLCJlbnRyeVR5cGUiLCJvYmplY3QiLCJmaWVsZFZhbHVlIiwiZmllbGRSdWxlcyIsImFycmF5IiwidmFsaWQiLCJSdWxlcyIsImlzVmFsaWQiLCJlbnRyaWVzIiwia2V5IiwidmFsaWRhdGUiLCJ1c2VyTWVzc2FnZSIsInJlc3VsdCIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJsaXN0T2ZWYWxpZGF0aW9ucyIsImhhc1BhcmFtcyIsIk9iamVjdEVudHJ5IiwiU3RyaW5nRW50cnkiLCJBcnJheUVudHJ5IiwiUnVsZU1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN4QixTQUFRQSxTQUFTQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLEtBQS9CLEVBQXNDSyxLQUF0QyxDQUE0QyxvQkFBNUMsRUFBa0UsQ0FBbEUsQ0FBakI7QUFDRCxDQUZEOztrQkFJZU4sTTs7Ozs7OztBQ0pmLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FBRXRDO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQSxTQUFTLG1CQUFPLENBQUMsRUFBTTs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEJBLGdCQUFnQixtQkFBTyxDQUFDLEVBQWM7O0FB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OztBQUVBOzs7QUFHQSxhQUFhLDZDQUFLO0FBQ2xCO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSztBQUN4QjtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDLGNBQWMsNkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFLO0FBQ25CO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0EsY0FBYyw2Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQyxnREFBUzs7QUFFSSwrREFBTSxFQUFDO0FBQ3RCLDJDQUEyQyxjQUFjLHUrRTs7Ozs7OztBQ2xFMUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTJDLGNBQWMsdTdFIiwiZmlsZSI6ImJ1bmRsZS4xMTZiNDI4NThmM2UxODAzZDQ3ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzVHlwZSA9ICh2YWx1ZSkgPT4ge1xuICByZXR1cm4gKHZhbHVlICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pWzFdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzVHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc1R5cGVIZWxwZXIuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUEFUVEVSTlMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldDoge1xuICAgIHNob3J0U3RyaW5nVmFsaWRhdGlvbihzdHJpbmcpIHsgLy8gbWluOjMgLSBTaG9ydCB2YWxpZGF0aW9uXG4gICAgICBjb25zdCBtYXAgPSBQQVRURVJOUy5TSE9SVF9SVUxFLmV4ZWMoc3RyaW5nKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgbWFwID9cbiAgICAgICAgICB7IFttYXBbMV1dOiBtYXBbMl0gfSA6XG4gICAgICAgICAgeyBbc3RyaW5nXTogdHJ1ZSB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc3ByZWFkTGlzdChzdHJpbmcpIHsgLy8gLi4ue30gLSBUbyBhcnJheSBwYXJhbXNcbiAgICAgIHJldHVybiBQQVRURVJOUy5NRVNTQUdFLkxJU1QuZXhlYyhzdHJpbmcpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy91dGlscy9wYXJhbXNVdGlscy5qcyIsImltcG9ydCBkb20gZnJvbSAnLi9kb21IZWxwZXInO1xuaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXlIZWxwZXInO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3RIZWxwZXInO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gJy4vaXNTdHJpbmdIZWxwZXInO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXNOdW1iZXJIZWxwZXInO1xuaW1wb3J0IGlzQm9vbGVhbiBmcm9tICcuL2lzQm9vbGVhbkhlbHBlcic7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb25IZWxwZXInO1xuaW1wb3J0IGdldCBmcm9tICcuL2dldEhlbHBlcic7XG5cbmV4cG9ydCB7XG4gIGRvbSxcbiAgaXNUeXBlLFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzRnVuY3Rpb24sXG4gIGdldCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaW5kZXguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3RhdGUgZnJvbSAnLi4vc3RhdGVzJztcblxuY29uc3QgTWVzc2FnZUFjdGlvbnMgPSB7XG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gU3RhdGUubWVzc2FnZXM7XG4gIH0sXG4gIHNldChuYW1lLCBtc2cpIHtcbiAgICBTdGF0ZS5tZXNzYWdlcy52YWxpZGF0b3JbbmFtZV0gPSBtc2c7XG4gIH0sXG4gIHNldEN1c3RvbUZpZWxkTXNnKGZpZWxkLCB1c2VyTWVzc2FnZXMpIHtcbiAgICBTdGF0ZS5tZXNzYWdlcy5maWVsZHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgU3RhdGUubWVzc2FnZXMuZmllbGRzLFxuICAgICAgKCEhT2JqZWN0LmtleXModXNlck1lc3NhZ2VzKS5sZW5ndGggJiYgeyBbZmllbGRdOiB1c2VyTWVzc2FnZXMgfSksXG4gICAgKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VBY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL01lc3NhZ2VBY3Rpb25zLmpzIiwiaW1wb3J0IEVycm9yQWN0aW9ucyBmcm9tICcuL0Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgUmVwbGFjZUFjdGlvbnMgZnJvbSAnLi9SZXBsYWNlQWN0aW9ucyc7XG5pbXBvcnQgTWVzc2FnZUFjdGlvbnMgZnJvbSAnLi9NZXNzYWdlQWN0aW9ucyc7XG5pbXBvcnQgVmFsaWRhdGVBY3Rpb25zIGZyb20gJy4vVmFsaWRhdGVBY3Rpb25zJztcblxuZXhwb3J0IHtcbiAgRXJyb3JBY3Rpb25zLFxuICBSZXBsYWNlQWN0aW9ucyxcbiAgTWVzc2FnZUFjdGlvbnMsXG4gIFZhbGlkYXRlQWN0aW9ucyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVwbGFjZUFjdGlvbnMgZnJvbSAnLi9SZXBsYWNlQWN0aW9ucyc7XG5pbXBvcnQgTWVzc2FnZUFjdGlvbnMgZnJvbSAnLi9NZXNzYWdlQWN0aW9ucyc7XG5cbmNvbnN0IEVycm9yQWN0aW9ucyA9IHtcbiAgc2V0KHR5cGUsIC4uLmFyZ3Mpe1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gTWVzc2FnZUFjdGlvbnMuZ2V0QWxsKCk7XG4gICAgY29uc3QgZXJyb3IgPSBSZXBsYWNlQWN0aW9ucy5tZXNzYWdlLmVycm9yKFxuICAgICAgbWVzc2FnZXMuY29yZVt0eXBlXSxcbiAgICAgIC4uLmFyZ3MsXG4gICAgKTtcbiAgICBcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JBY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL0Vycm9yQWN0aW9ucy5qcyIsImltcG9ydCBQQVRURVJOUyBmcm9tICcuLi9jb25zdGFudHMvcGF0dGVybnMnO1xuaW1wb3J0IHBhcmFtc1V0aWxzIGZyb20gJy4uL3V0aWxzL3BhcmFtc1V0aWxzJztcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNOdW1iZXIsIGlzQm9vbGVhbiwgZ2V0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IFJlcGxhY2VBY3Rpb25zID0ge1xuICBtZXNzYWdlOiB7XG4gICAgZXJyb3IobXNnID0gJycsIC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IChtc2cubWF0Y2goUEFUVEVSTlMuTUVTU0FHRS5FUlJPUikgfHwgW10pO1xuICAgICAgcmV0dXJuIHBhcmFtcy5yZWR1Y2UoKGFjYywgY3VycmVudCwgaW5kZXgpID0+IGFjYy5yZXBsYWNlKGN1cnJlbnQsIGFyZ3NbaW5kZXhdKSwgbXNnKTtcbiAgICB9LFxuICAgIHZhbGlkYXRpb24obXNnLCBwYXJhbXMpe1xuICAgICAgY29uc3Qgc2VhcmNoSXRlbXMgPSBtc2cubWF0Y2goUEFUVEVSTlMuTUVTU0FHRS5QQVJBTVMpO1xuICAgICAgY29uc3QgbGlzdFBhcmFtcyA9IHBhcmFtc1V0aWxzLmdldC5zcHJlYWRMaXN0KG1zZyk7XG5cbiAgICAgIGlmIChsaXN0UGFyYW1zKXtcbiAgICAgICAgY29uc3QgdGV4dCA9IHBhcmFtcy5qb2luKGxpc3RQYXJhbXNbMV0gfHwgJywgJyk7XG4gICAgICAgIG1zZyA9IG1zZy5yZXBsYWNlKGxpc3RQYXJhbXNbMF0sIHRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VhcmNoSXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaEl0ZW1zLnJlZHVjZSgoYWNjLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgcHVyZUtleSA9IGN1cnJlbnQucmVwbGFjZShQQVRURVJOUy5NRVNTQUdFLkJSQUNFUywgJycpO1xuXG4gICAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgW2lzU3RyaW5nKHBhcmFtcykgfHwgaXNOdW1iZXIocGFyYW1zKSB8fCBpc0Jvb2xlYW4ocGFyYW1zKV06IHBhcmFtcyxcbiAgICAgICAgICAgIFtpc0FycmF5KHBhcmFtcyldOiBwYXJhbXNbcHVyZUtleV0sXG4gICAgICAgICAgICBbaXNPYmplY3QocGFyYW1zKV06IGdldChwYXJhbXMsIHB1cmVLZXksIGN1cnJlbnQpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gYWNjLnJlcGxhY2UoY3VycmVudCwgKG1hcC50cnVlIHx8ICcnKSk7XG4gICAgICAgIH0sIG1zZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtc2c7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGxhY2VBY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1JlcGxhY2VBY3Rpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRUxFQ1RPUjogLyhcXHcrOlxcWy4qP1xcXSl8KFxcdys6XFwoLio/XFwpKXwoXFx3KykvZyxcbiAgU0hPUlRfUlVMRTogL14oXFx3Kyk6KFxcdyspJC9nLFxuICBNRVNTQUdFOiB7XG4gICAgUEFSQU1TOiAvXFx7KC4qPylcXH0vZyxcbiAgICBCUkFDRVM6IC9cXHt8XFx9L2csXG4gICAgRVJST1I6IC8jXFx7KC4qPylcXH0vZyxcbiAgICBMSVNUOiAvXFwuXFwuXFwuXFx7KC4qPylcXH0vZyxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9wYXR0ZXJucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQ09SRToge1xuICAgIG1zZzogJyN7bWV0aG9kfSBoYXMgbm90IGJlZW4gZGVmaW5lZCBhIHZhbGlkYXRpb24gbWVzc2FnZScsXG4gICAgZmllbGQ6ICdmaWVsZCAje3NlbGVjdG9yfSB3YXMgbm90IGZvdW5kJyxcbiAgICBhZGQ6ICdhZGQgbWV0aG9kIGFjY2VwdCBvbmx5IGEgbGlzdCBvZiBvYmplY3Q6IFt7IG5hbWU6IFN0cmluZywgbWVzc2FnZTogU3RyaW5nLCBmbjogRnVuY3Rpb24gfV0nLFxuICAgIHVuZGVmaW5lZDogJyN7bWV0aG9kfSBpcyBub3QgZGVmaW5lZCcsXG4gICAgZW50cnk6ICd0aGUgZW50cnkgZm9ybWF0OiAje3J1bGVzfSBpcyBub3Qgc3VwcG9ydGVkJyxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9tZXNzYWdlcy5qcyIsImNvbnN0IGRvbSA9IChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBlbGVtQnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoc2VsZWN0b3IpO1xuICBjb25zdCBlbGVtQnlDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3IpO1xuICBjb25zdCBlbGVtQnlJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcbiAgY29uc3QgZWxlbUJ5QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIFxuICBjb25zdCBlbGVtZW50ID0gKFxuICAgICgoZWxlbUJ5TmFtZSAmJiBlbGVtQnlOYW1lLmxlbmd0aCkgJiYgZWxlbUJ5TmFtZSkgfHxcbiAgICAoKGVsZW1CeUNsYXNzICYmIGVsZW1CeUNsYXNzLmxlbmd0aCkgJiYgZWxlbUJ5Q2xhc3MpIHx8XG4gICAgKGVsZW1CeUlkICYmIFtlbGVtQnlJZF0pIHx8XG4gICAgKChlbGVtQnlBbGwgJiYgZWxlbUJ5QWxsLmxlbmd0aCkgJiYgZWxlbUJ5QWxsKVxuICApIHx8IFtdO1xuICBcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb207XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvZG9tSGVscGVyLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNRVNTQUdFUyBmcm9tICcuLi9jb25zdGFudHMvbWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRpb25zOiB7fSxcbiAgbWVzc2FnZXM6IHtcbiAgICBmaWVsZHM6IHt9LFxuICAgIGNvcmU6IE1FU1NBR0VTLkNPUkUsXG4gICAgdmFsaWRhdG9yOiB7fSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3N0YXRlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0KHsgcnVsZXMgPSB7fSwgbWVzc2FnZXMgPSB7fSwgdmFsdWUgfSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLihydWxlcyAmJiB7IHJ1bGVzIH0pLFxuICAgICAgLi4uKG1lc3NhZ2VzICYmIHsgbWVzc2FnZXMgfSksXG4gICAgICAuLi4odmFsdWUgJiYgeyB2YWx1ZSB9KSxcbiAgICB9O1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvbW9kZWxzL1J1bGVNb2RlbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnLi9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RG9tLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXeUpTWldGamRDSXNJbEpsWVdOMFJHOXRJaXdpUVhCd0lpd2ljbVZ1WkdWeUlpd2laRzlqZFcxbGJuUWlMQ0puWlhSRmJHVnRaVzUwUW5sSlpDSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVDBFc1MwRkJVQ3hOUVVGclFpeFBRVUZzUWp0QlFVTkJMRTlCUVU5RExGRkJRVkFzVFVGQmNVSXNWMEZCY2tJN1FVRkRRU3hQUVVGUExHOUNRVUZRTzBGQlEwRXNUMEZCVDBNc1IwRkJVQ3hOUVVGblFpeHJRa0ZCYUVJN08wRkJSVUZFTEZOQlFWTkZMRTFCUVZRc1EwRkRSU3h2UWtGQlF5eEhRVUZFTEU5QlJFWXNSVUZGUlVNc1UwRkJVME1zWTBGQlZDeERRVUYzUWl4TlFVRjRRaXhEUVVaR0lpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTloWkcxcGJpOUViMk4xYldWdWRITXZVSEp2YW1WamRITXZiMk4wWVdadmNtMHRaR1Z0YnlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ1VtVmhZM1JFYjIwZ1puSnZiU0FuY21WaFkzUXRaRzl0Snp0Y2JtbHRjRzl5ZENBbkxpOXpZM056TDNOMGVXeGxjeTV6WTNOekp6dGNibWx0Y0c5eWRDQkJjSEFnWm5KdmJTQW5MaTlqYjIxd2IyNWxiblJ6TDBGd2NDYzdYRzVjYmxKbFlXTjBSRzl0TG5KbGJtUmxjaWhjYmlBZ1BFRndjQ0F2UGl3Z1hHNGdJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZHliMjkwSnlsY2JpazdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3Mvc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRpdGlvbmFscyBmcm9tICcuLi8uLi8uLi8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYyc7XG5pbXBvcnQgT2N0YWZvcm0gZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0vc3JjJztcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi4vRXJyb3JzJztcbmltcG9ydCBWYWxpZGF0aW9uTWFwIGZyb20gJy4vVmFsaWRhdGlvbk1hcCc7XG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQXBwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcHAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBcHApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc0Vycm9yczogW11cbiAgICB9O1xuICAgIF90aGlzLm9jdGFmb3JtID0gbmV3IE9jdGFmb3JtKCk7XG4gICAgX3RoaXMub2N0YWZvcm0udmFsaWRhdG9yLmFkZChBZGRpdGlvbmFscyk7XG4gICAgX3RoaXMub25TdWJtaXQgPSBfdGhpcy5vblN1Ym1pdC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbkNoYW5nZSA9IF90aGlzLm9uQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmhhc0ZpZWxkRXJyb3IgPSBfdGhpcy5oYXNGaWVsZEVycm9yLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLnZhbGlkYXRlID0gX3RoaXMudmFsaWRhdGUuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcCwgW3tcbiAgICBrZXk6ICdvblN1Ym1pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbGlkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHZhbGlkYXRlID0gdGhpcy5vY3RhZm9ybS52YWxpZGF0ZUFsbChWYWxpZGF0aW9uTWFwKTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRlKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc0Vycm9yczogdmFsaWRhdGVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYXNGaWVsZEVycm9yKHZhbGlkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc0ZpZWxkRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNGaWVsZEVycm9yKHZhbGlkYXRlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNsYXNzRXJyb3IgPSAnaW52YWxpZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzRXJyb3IpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzRXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShfdGhpczNbaXRlbS5maWVsZF0ubmFtZSk7XG4gICAgICAgIGlmIChlbGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBlbGVtLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzM1tpdGVtLmZpZWxkXS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGhhc0Vycm9ycyA9IHRoaXMuc3RhdGUuaGFzRXJyb3JzO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb250YWluZXInLCBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdCB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdoNCcsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnT2N0YWZvcm0gVmFsaWRhdGUgLSBEZW1vJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgISFoYXNFcnJvcnMubGVuZ3RoICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC0xMicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvcnMsIHsgZXJyb3JzOiBoYXNFcnJvcnMgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0ZpcnN0IG5hbWU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnZ2l2ZW4tbmFtZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5maXJzdE5hbWUgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0xhc3QgbmFtZTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGFzdE5hbWUnLFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2ZhbWlseS1uYW1lJyxcbiAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0Lmxhc3ROYW1lID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTcnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRW1haWw6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5lbWFpbCA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTUnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnQ291bnRyeTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnY291bnRyeS1uYW1lJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jb3VudHJ5ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICAgICdTZWxlY3QgYSBjb3VudHJ5J1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ0JSJyB9LFxuICAgICAgICAgICAgICAgICAgJ0JyYXppbCdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdVQScgfSxcbiAgICAgICAgICAgICAgICAgICdVa3JhaW5lJ1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1VTJyB9LFxuICAgICAgICAgICAgICAgICAgJ1VuaXRlZCBTdGF0ZXMnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnVXBsb2FkIGEgZmlsZTonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5maWxlID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnR2VuZGVyOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2VuZGVyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ21hbGUnLFxuICAgICAgICAgICAgICAgIGlkOiAnZ2VuZGVyTWFsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5nZW5kZXIgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogJ2dlbmRlck1hbGUnIH0sXG4gICAgICAgICAgICAgICAgJ01hbGUnXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmZW1hbGUnLFxuICAgICAgICAgICAgICAgIGlkOiAnZ2VuZGVyRmVtYWxlJyxcbiAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmdlbmRlciA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgJyAnLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgeyBodG1sRm9yOiAnZ2VuZGVyRmVtYWxlJyB9LFxuICAgICAgICAgICAgICAgICdGZW1hbGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdEbyB5b3UgaGF2ZSBhIHBvcnRmb2xpbzonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ3llcycsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuY2hlY2tib3ggPSByO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAnWWVzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hlY2tib3gnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbm8nLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ05vJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hlY2tib3gnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbWF5YmUnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ01heWJlJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAnUmVzdW1lOidcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jlc3VtZScsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQucmVzdW1lID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyIHJpZ2h0JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnVmFsaWRhdGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMEZ3Y0M5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SlNaV0ZqZENJc0lrTnZiWEJ2Ym1WdWRDSXNJa0ZrWkdsMGFXOXVZV3h6SWl3aVQyTjBZV1p2Y20waUxDSkZjbkp2Y25NaUxDSldZV3hwWkdGMGFXOXVUV0Z3SWl3aVFYQndJaXdpY0hKdmNITWlMQ0p6ZEdGMFpTSXNJbWhoYzBWeWNtOXljeUlzSW05amRHRm1iM0p0SWl3aWRtRnNhV1JoZEc5eUlpd2lZV1JrSWl3aWIyNVRkV0p0YVhRaUxDSmlhVzVrSWl3aWIyNURhR0Z1WjJVaUxDSm9ZWE5HYVdWc1pFVnljbTl5SWl3aWRtRnNhV1JoZEdVaUxDSmxJaXdpY0hKbGRtVnVkRVJsWm1GMWJIUWlMQ0oyWVd4cFpHRjBaVUZzYkNJc0ltTnZibk52YkdVaUxDSnNiMmNpTENKelpYUlRkR0YwWlNJc0ltTnNZWE56UlhKeWIzSWlMQ0prYjJOMWJXVnVkQ0lzSW5GMVpYSjVVMlZzWldOMGIzSkJiR3dpTENKbWIzSkZZV05vSWl3aVpXeGxiV1Z1ZENJc0ltTnNZWE56VEdsemRDSXNJbkpsYlc5MlpTSXNJbVZzWlcwaUxDSm5aWFJGYkdWdFpXNTBjMEo1VG1GdFpTSXNJbWwwWlcwaUxDSm1hV1ZzWkNJc0ltNWhiV1VpTENKc1pXNW5kR2dpTENKbGJHMGlMQ0ptYVhKemRFNWhiV1VpTENKeUlpd2liR0Z6ZEU1aGJXVWlMQ0psYldGcGJDSXNJbU52ZFc1MGNua2lMQ0ptYVd4bElpd2laMlZ1WkdWeUlpd2lZMmhsWTJ0aWIzZ2lMQ0p5WlhOMWJXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNVMEZCYUVJc1VVRkJhVU1zVDBGQmFrTTdRVUZEUVN4UFFVRlBReXhYUVVGUUxFMUJRWGRDTEhGRFFVRjRRanRCUVVOQkxFOUJRVTlETEZGQlFWQXNUVUZCY1VJc01FSkJRWEpDTzBGQlEwRXNUMEZCVDBNc1RVRkJVQ3hOUVVGdFFpeFhRVUZ1UWp0QlFVTkJMRTlCUVU5RExHRkJRVkFzVFVGQk1FSXNhVUpCUVRGQ096dEpRVVZ4UWtNc1J6czdPMEZCUTI1Q0xHVkJRVmxETEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGQlFTd3dSMEZEV0VFc1MwRkVWenM3UVVGRmFrSXNWVUZCUzBNc1MwRkJUQ3hIUVVGaE8wRkJRMWhETEdsQ1FVRlhPMEZCUkVFc1MwRkJZanRCUVVkQkxGVkJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJTVkFzVVVGQlNpeEZRVUZvUWp0QlFVTkJMRlZCUVV0UExGRkJRVXdzUTBGQlkwTXNVMEZCWkN4RFFVRjNRa01zUjBGQmVFSXNRMEZCTkVKV0xGZEJRVFZDTzBGQlEwRXNWVUZCUzFjc1VVRkJUQ3hIUVVGblFpeE5RVUZMUVN4UlFVRk1MRU5CUVdORExFbEJRV1FzVDBGQmFFSTdRVUZEUVN4VlFVRkxReXhSUVVGTUxFZEJRV2RDTEUxQlFVdEJMRkZCUVV3c1EwRkJZMFFzU1VGQlpDeFBRVUZvUWp0QlFVTkJMRlZCUVV0RkxHRkJRVXdzUjBGQmNVSXNUVUZCUzBFc1lVRkJUQ3hEUVVGdFFrWXNTVUZCYmtJc1QwRkJja0k3UVVGRFFTeFZRVUZMUnl4UlFVRk1MRWRCUVdkQ0xFMUJRVXRCTEZGQlFVd3NRMEZCWTBnc1NVRkJaQ3hQUVVGb1FqdEJRVlpwUWp0QlFWZHNRanM3T3pzMlFrRkZVVWtzUXl4RlFVRkZPMEZCUTFSQkxGRkJRVVZETEdOQlFVWTdRVUZEUVN4WFFVRkxSaXhSUVVGTU8wRkJRMFE3T3pzclFrRkZVenRCUVVOU0xGZEJRVXRCTEZGQlFVdzdRVUZEUkRzN095dENRVVZWTzBGQlFVRTdPMEZCUTFRc1ZVRkJUVUVzVjBGQlZ5eExRVUZMVUN4UlFVRk1MRU5CUVdOVkxGZEJRV1FzUTBGQk1FSm1MR0ZCUVRGQ0xFTkJRV3BDTzBGQlEwRm5RaXhqUVVGUlF5eEhRVUZTTEVOQlFWbE1MRkZCUVZvN08wRkJSVUVzVjBGQlMwMHNVVUZCVEN4RFFVRmpPMEZCUTFwa0xHMUNRVUZYVVR0QlFVUkRMRTlCUVdRc1JVRkZSenRCUVVGQkxHVkJRVTBzVDBGQlMwUXNZVUZCVEN4RFFVRnRRa01zVVVGQmJrSXNRMEZCVGp0QlFVRkJMRTlCUmtnN1FVRkhSRHM3TzJ0RFFVVmhRU3hSTEVWQlFWTTdRVUZCUVRzN1FVRkRja0lzVlVGQlRVOHNZVUZCWVN4VFFVRnVRanRCUVVOQlF5eGxRVUZUUXl4blFrRkJWQ3hQUVVFNFFrWXNWVUZCT1VJc1JVRkRSMGNzVDBGRVNDeERRVU5YTEcxQ1FVRlhPMEZCUTJ4Q1F5eG5Ra0ZCVVVNc1UwRkJVaXhEUVVGclFrTXNUVUZCYkVJc1EwRkJlVUpPTEZWQlFYcENPMEZCUTBRc1QwRklTRHM3UVVGTFFWQXNaVUZCVTFVc1QwRkJWQ3hEUVVGcFFpeG5Ra0ZCVVR0QlFVTjJRaXhaUVVGTlNTeFBRVUZQVGl4VFFVRlRUeXhwUWtGQlZDeERRVUV5UWl4UFFVRkxReXhMUVVGTFF5eExRVUZXTEVWQlFXbENReXhKUVVFMVF5eERRVUZpTzBGQlEwRXNXVUZCUjBvc1MwRkJTMHNzVFVGQlRDeEhRVUZqTEVOQlFXcENMRVZCUVc5Q08wRkJRMnhDVEN4bFFVRkxTaXhQUVVGTUxFTkJRV0U3UVVGQlFTeHRRa0ZCVDFVc1NVRkJTVklzVTBGQlNpeERRVUZqYWtJc1IwRkJaQ3hEUVVGclFsa3NWVUZCYkVJc1EwRkJVRHRCUVVGQkxGZEJRV0k3UVVGRFJDeFRRVVpFTEUxQlJVczdRVUZEU0N4cFFrRkJTMU1zUzBGQlMwTXNTMEZCVml4RlFVRnBRa3dzVTBGQmFrSXNRMEZCTWtKcVFpeEhRVUV6UWl4RFFVRXJRbGtzVlVGQkwwSTdRVUZEUkR0QlFVTkdMRTlCVUVRN1FVRlJSRHM3T3paQ1FVVlJPMEZCUVVFN08wRkJRVUVzVlVGRFEyWXNVMEZFUkN4SFFVTmxMRXRCUVV0RUxFdEJSSEJDTEVOQlEwTkRMRk5CUkVRN096dEJRVWRRTEdGQlEwVTdRVUZCUVR0QlFVRkJPMEZCUTBVN1FVRkJRVHRCUVVGQkxGbEJRVTBzVjBGQlZTeFhRVUZvUWl4RlFVRTBRaXhWUVVGVkxFdEJRVXRKTEZGQlFUTkRPMEZCUTBVN1FVRkJRVHRCUVVGQkxHTkJRVXNzVjBGQlZTeExRVUZtTzBGQlEwVTdRVUZCUVR0QlFVRkJMR2RDUVVGTExGZEJRVlVzVVVGQlpqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkVSaXhoUVVSR08wRkJTMGNzWVVGQlF5eERRVUZEU2l4VlFVRlZNa0lzVFVGQldpeEpRVU5ETzBGQlFVRTdRVUZCUVN4blFrRkJTeXhYUVVGVkxGRkJRV1k3UVVGRFJTeHJRMEZCUXl4TlFVRkVMRWxCUVZFc1VVRkJVVE5DTEZOQlFXaENPMEZCUkVZc1lVRk9TanRCUVZkRk8wRkJRVUU3UVVGQlFTeG5Ra0ZCVHl4WFFVRlZMRTlCUVdwQ08wRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVN4bFFVUkdPMEZCUlVVN1FVRkRSU3h6UWtGQlN5eE5RVVJRTzBGQlJVVXNjMEpCUVVzc1YwRkdVRHRCUVVkRkxEaENRVUZoTEZsQlNHWTdRVUZKUlN4eFFrRkJTenRCUVVGQkxIbENRVUZMTEU5QlFVczJRaXhUUVVGTUxFZEJRV2xDUXl4RFFVRjBRanRCUVVGQkxHbENRVXBRTzBGQlMwVXNNRUpCUVZVc1MwRkJTM2hDTzBGQlRHcENPMEZCUmtZc1lVRllSanRCUVhOQ1JUdEJRVUZCTzBGQlFVRXNaMEpCUVU4c1YwRkJWU3hQUVVGcVFqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRMFVzYzBKQlFVc3NUVUZFVUR0QlFVVkZMSE5DUVVGTExGVkJSbEE3UVVGSFJTdzRRa0ZCWVN4aFFVaG1PMEZCU1VVc2NVSkJRVXM3UVVGQlFTeDVRa0ZCU3l4UFFVRkxlVUlzVVVGQlRDeEhRVUZuUWtRc1EwRkJja0k3UVVGQlFTeHBRa0ZLVUR0QlFVdEZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRanRCUVVaR08wRkJkRUpHTEZkQlJFWTdRVUZ0UTBVN1FVRkJRVHRCUVVGQkxHTkJRVXNzVjBGQlZTeExRVUZtTzBGQlEwVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVDBGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVU5GTEhOQ1FVRkxMRTFCUkZBN1FVRkZSU3h6UWtGQlN5eFBRVVpRTzBGQlIwVXNPRUpCUVdFc1QwRklaanRCUVVsRkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTekJDTEV0QlFVd3NSMEZCWVVZc1EwRkJiRUk3UVVGQlFTeHBRa0ZLVUR0QlFVdEZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRanRCUVVaR0xHRkJSRVk3UVVGWlJUdEJRVUZCTzBGQlFVRXNaMEpCUVU4c1YwRkJWU3hQUVVGcVFqdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc1pVRkVSanRCUVVWRk8wRkJRVUU3UVVGQlFUdEJRVU5GTEhkQ1FVRkxMRk5CUkZBN1FVRkZSU3huUTBGQllTeGpRVVptTzBGQlIwVXNkVUpCUVVzN1FVRkJRU3d5UWtGQlN5eFBRVUZMTWtJc1QwRkJUQ3hIUVVGbFNDeERRVUZ3UWp0QlFVRkJMRzFDUVVoUU8wRkJTVVVzTkVKQlFWVXNTMEZCUzNoQ08wRkJTbXBDTzBGQlRVVTdRVUZCUVR0QlFVRkJMRzlDUVVGUkxFOUJRVTBzUlVGQlpEdEJRVUZCTzBGQlFVRXNhVUpCVGtZN1FVRlBSVHRCUVVGQk8wRkJRVUVzYjBKQlFWRXNUMEZCVFN4SlFVRmtPMEZCUVVFN1FVRkJRU3hwUWtGUVJqdEJRVkZGTzBGQlFVRTdRVUZCUVN4dlFrRkJVU3hQUVVGTkxFbEJRV1E3UVVGQlFUdEJRVUZCTEdsQ1FWSkdPMEZCVTBVN1FVRkJRVHRCUVVGQkxHOUNRVUZSTEU5QlFVMHNTVUZCWkR0QlFVRkJPMEZCUVVFN1FVRlVSanRCUVVaR0xHRkJXa1k3UVVFeVFrVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVVVGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVU5GTEhOQ1FVRkxMRTFCUkZBN1FVRkZSU3h6UWtGQlN5eE5RVVpRTzBGQlIwVXNjVUpCUVVzN1FVRkJRU3g1UWtGQlN5eFBRVUZMTkVJc1NVRkJUQ3hIUVVGWlNpeERRVUZxUWp0QlFVRkJMR2xDUVVoUU8wRkJTVVVzTUVKQlFWVXNTMEZCUzNoQ08wRkJTbXBDTzBGQlJrWXNZVUV6UWtZN1FVRnhRMFU3UVVGQlFUdEJRVUZCTEdkQ1FVRkxMRmRCUVZVc1QwRkJaanRCUVVORk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRXNaVUZFUmp0QlFVVkZPMEZCUTBVc2MwSkJRVXNzVDBGRVVEdEJRVVZGTEhOQ1FVRkxMRkZCUmxBN1FVRkhSU3gxUWtGQlRTeE5RVWhTTzBGQlNVVXNiMEpCUVVjc1dVRktURHRCUVV0RkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTelpDTEUxQlFVd3NSMEZCWTB3c1EwRkJia0k3UVVGQlFTeHBRa0ZNVUR0QlFVMUZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVNXFRaXhuUWtGR1JqdEJRVUZCTzBGQlUwczdRVUZCUVR0QlFVRkJMR3RDUVVGUExGTkJRVkVzV1VGQlpqdEJRVUZCTzBGQlFVRXNaVUZVVER0QlFWZEZPMEZCUTBVc2MwSkJRVXNzVDBGRVVEdEJRVVZGTEhOQ1FVRkxMRkZCUmxBN1FVRkhSU3gxUWtGQlRTeFJRVWhTTzBGQlNVVXNiMEpCUVVjc1kwRktURHRCUVV0RkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTelpDTEUxQlFVd3NSMEZCWTB3c1EwRkJia0k3UVVGQlFTeHBRa0ZNVUR0QlFVMUZMREJDUVVGVkxFdEJRVXQ0UWp0QlFVNXFRaXhuUWtGWVJqdEJRVUZCTzBGQmEwSkxPMEZCUVVFN1FVRkJRU3hyUWtGQlR5eFRRVUZSTEdOQlFXWTdRVUZCUVR0QlFVRkJPMEZCYkVKTUxHRkJja05HTzBGQk1FUkZPMEZCUVVFN1FVRkJRU3huUWtGQlN5eFhRVUZWTEU5QlFXWTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVUZCTzBGQlFVRXNhMEpCUVU4c1YwRkJWU3hWUVVGcVFqdEJRVU5GTzBGQlEwVXNkMEpCUVVzc1ZVRkVVRHRCUVVWRkxIZENRVUZMTEZWQlJsQTdRVUZIUlN4NVFrRkJUU3hMUVVoU08wRkJTVVVzZFVKQlFVczdRVUZCUVN3eVFrRkJTeXhQUVVGTE9FSXNVVUZCVEN4SFFVRm5RazRzUTBGQmNrSTdRVUZCUVN4dFFrRktVRHRCUVV0RkxEUkNRVUZWTEV0QlFVdDRRanRCUVV4cVFpeHJRa0ZFUmp0QlFWRkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGU1JpeGxRVVpHTzBGQllVVTdRVUZCUVR0QlFVRkJMR3RDUVVGUExGZEJRVlVzVlVGQmFrSTdRVUZEUlR0QlFVTkZMSGRDUVVGTExGVkJSRkE3UVVGRlJTeDNRa0ZCU3l4VlFVWlFPMEZCUjBVc2VVSkJRVTBzU1VGSVVqdEJRVWxGTEhWQ1FVRkxPMEZCUVVFc01rSkJRVXNzVDBGQlN6aENMRkZCUVV3c1IwRkJaMEpPTEVOQlFYSkNPMEZCUVVFc2JVSkJTbEE3UVVGTFJTdzBRa0ZCVlN4TFFVRkxlRUk3UVVGTWFrSXNhMEpCUkVZN1FVRlJSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlVrWXNaVUZpUmp0QlFYZENSVHRCUVVGQk8wRkJRVUVzYTBKQlFVOHNWMEZCVlN4VlFVRnFRanRCUVVORk8wRkJRMFVzZDBKQlFVc3NWVUZFVUR0QlFVVkZMSGRDUVVGTExGVkJSbEE3UVVGSFJTeDVRa0ZCVFN4UFFVaFNPMEZCU1VVc2RVSkJRVXM3UVVGQlFTd3lRa0ZCU3l4UFFVRkxPRUlzVVVGQlRDeEhRVUZuUWs0c1EwRkJja0k3UVVGQlFTeHRRa0ZLVUR0QlFVdEZMRFJDUVVGVkxFdEJRVXQ0UWp0QlFVeHFRaXhyUWtGRVJqdEJRVkZGTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRlNSanRCUVhoQ1JqdEJRVEZFUml4WFFXNURSanRCUVd0SlJUdEJRVUZCTzBGQlFVRXNZMEZCU3l4WFFVRlZMRXRCUVdZN1FVRkRSVHRCUVVGQk8wRkJRVUVzWjBKQlFVc3NWMEZCVlN4UlFVRm1PMEZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVN4cFFrRkVSanRCUVVWRk8wRkJRMFVzZDBKQlFVc3NVVUZFVUR0QlFVVkZMSFZDUVVGTE8wRkJRVUVzTWtKQlFVc3NUMEZCU3l0Q0xFMUJRVXdzUjBGQlkxQXNRMEZCYmtJN1FVRkJRU3h0UWtGR1VEdEJRVWRGTERSQ1FVRlZMRXRCUVV0NFFqdEJRVWhxUWp0QlFVWkdPMEZCUkVZN1FVRkVSaXhYUVd4SlJqdEJRU3RKUlR0QlFVRkJPMEZCUVVFc1kwRkJTeXhYUVVGVkxFdEJRV1k3UVVGRFJUdEJRVUZCTzBGQlFVRXNaMEpCUVVzc1YwRkJWU3hqUVVGbU8wRkJRMFVzTmtOQlJFWTdRVUZGUlR0QlFVRkJPMEZCUVVFN1FVRkRSU3cyUWtGQlZTeG5Ra0ZFV2p0QlFVVkZMSGRDUVVGTE8wRkJSbEE3UVVGQlFUdEJRVUZCTzBGQlJrWTdRVUZFUmp0QlFTOUpSanRCUVVSR0xFOUJSRVk3UVVFNFNrUTdPenM3UlVGc1RqaENaQ3hUT3p0bFFVRmFTeXhISWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OWhaRzFwYmk5RWIyTjFiV1Z1ZEhNdlVISnZhbVZqZEhNdmIyTjBZV1p2Y20wdFpHVnRieUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDd2dleUJEYjIxd2IyNWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdRV1JrYVhScGIyNWhiSE1nWm5KdmJTQW5MaTR2TGk0dkxpNHZMaTR2YjJOMFlXWnZjbTB0WVdSa2FYUnBiMjVoYkM5emNtTW5PMXh1YVcxd2IzSjBJRTlqZEdGbWIzSnRJR1p5YjIwZ0p5NHVMeTR1THk0dUx5NHVMMjlqZEdGbWIzSnRMM055WXljN1hHNXBiWEJ2Y25RZ1JYSnliM0p6SUdaeWIyMGdKeTR1TDBWeWNtOXljeWM3WEc1cGJYQnZjblFnVm1Gc2FXUmhkR2x2YmsxaGNDQm1jbTl0SUNjdUwxWmhiR2xrWVhScGIyNU5ZWEFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJCY0hBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5RZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2UxeHVJQ0FnSUNBZ2FHRnpSWEp5YjNKek9pQmJYU3hjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV2WTNSaFptOXliU0E5SUc1bGR5QlBZM1JoWm05eWJTZ3BPMXh1SUNBZ0lIUm9hWE11YjJOMFlXWnZjbTB1ZG1Gc2FXUmhkRzl5TG1Ga1pDaEJaR1JwZEdsdmJtRnNjeWs3WEc0Z0lDQWdkR2hwY3k1dmJsTjFZbTFwZENBOUlIUm9hWE11YjI1VGRXSnRhWFF1WW1sdVpDaDBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtOXVRMmhoYm1kbElEMGdkR2hwY3k1dmJrTm9ZVzVuWlM1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUhSb2FYTXVhR0Z6Um1sbGJHUkZjbkp2Y2lBOUlIUm9hWE11YUdGelJtbGxiR1JGY25KdmNpNWlhVzVrS0hSb2FYTXBPMXh1SUNBZ0lIUm9hWE11ZG1Gc2FXUmhkR1VnUFNCMGFHbHpMblpoYkdsa1lYUmxMbUpwYm1Rb2RHaHBjeWs3WEc0Z0lIMWNibHh1SUNCdmJsTjFZbTFwZENobEtYdGNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZEdocGN5NTJZV3hwWkdGMFpTZ3BPMXh1SUNCOVhHNWNiaUFnYjI1RGFHRnVaMlVvS1h0Y2JpQWdJQ0IwYUdsekxuWmhiR2xrWVhSbEtDazdYRzRnSUgxY2JseHVJQ0IyWVd4cFpHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3hwWkdGMFpTQTlJSFJvYVhNdWIyTjBZV1p2Y20wdWRtRnNhV1JoZEdWQmJHd29WbUZzYVdSaGRHbHZiazFoY0NrN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb2RtRnNhV1JoZEdVcE8xeHVYRzRnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0JvWVhORmNuSnZjbk02SUhaaGJHbGtZWFJsWEc0Z0lDQWdmU3dnS0NrZ1BUNGdkR2hwY3k1b1lYTkdhV1ZzWkVWeWNtOXlLSFpoYkdsa1lYUmxLU2s3WEc0Z0lIMWNibHh1SUNCb1lYTkdhV1ZzWkVWeWNtOXlLSFpoYkdsa1lYUmxLWHRjYmlBZ0lDQmpiMjV6ZENCamJHRnpjMFZ5Y205eUlEMGdKMmx1ZG1Gc2FXUW5PMXh1SUNBZ0lHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b1lDNGtlMk5zWVhOelJYSnliM0o5WUNsY2JpQWdJQ0FnSUM1bWIzSkZZV05vS0dWc1pXMWxiblFnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1kyeGhjM05GY25KdmNpazdYRzRnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJSFpoYkdsa1lYUmxMbVp2Y2tWaFkyZ29hWFJsYlNBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCbGJHVnRJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEhOQ2VVNWhiV1VvZEdocGMxdHBkR1Z0TG1acFpXeGtYUzV1WVcxbEtUdGNiaUFnSUNBZ0lHbG1LR1ZzWlcwdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1SUNBZ0lDQWdJQ0JsYkdWdExtWnZja1ZoWTJnb1pXeHRJRDArSUdWc2JTNWpiR0Z6YzB4cGMzUXVZV1JrS0dOc1lYTnpSWEp5YjNJcEtWeHVJQ0FnSUNBZ2ZXVnNjMlY3WEc0Z0lDQWdJQ0FnSUhSb2FYTmJhWFJsYlM1bWFXVnNaRjB1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzBWeWNtOXlLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2hoYzBWeWNtOXljeUI5SUQwZ2RHaHBjeTV6ZEdGMFpUdGNibHh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBOFpHbDJQbHh1SUNBZ0lDQWdJQ0E4Wm05eWJTQmpiR0Z6YzA1aGJXVTlYQ0pqYjI1MFlXbHVaWEpjSWlCdmJsTjFZbTFwZEQxN2RHaHBjeTV2YmxOMVltMXBkSDArWEc0Z0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemMwNWhiV1U5WENKeWIzZGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNMVEV5WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b05ENVBZM1JoWm05eWJTQldZV3hwWkdGMFpTQXRJRVJsYlc4OEwyZzBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSHNoSVdoaGMwVnljbTl5Y3k1c1pXNW5kR2dnSmlZZ0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMHhNbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4RmNuSnZjbk1nWlhKeWIzSnpQWHRvWVhORmNuSnZjbk45SUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tYMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAyWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUm1seWMzUWdibUZ0WlRvOEwzTjBjbTl1Wno1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdWNIVjBJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVOVhDSjBaWGgwWENJZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW1acGNuTjBUbUZ0WlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYVjBiME52YlhCc1pYUmxQU2RuYVhabGJpMXVZVzFsSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFpqMTdjaUE5UGlCMGFHbHpMbVpwY25OMFRtRnRaU0E5SUhKOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhoWW1Wc1BseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBOGJHRmlaV3dnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNMVFpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGNtOXVaejVNWVhOMElHNWhiV1U2UEM5emRISnZibWMrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYm5CMWRDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsUFZ3aWRHVjRkRndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbXhoYzNST1lXMWxYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoZFhSdlEyOXRjR3hsZEdVOUoyWmhiV2xzZVMxdVlXMWxKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxteGhjM1JPWVcxbElEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YmtOb1lXNW5aVDE3ZEdocGN5NXZia05vWVc1blpYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0x6NWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0luSnZkMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hoWW1Wc0lHTnNZWE56VG1GdFpUMWNJbU52YkMwM1hDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkSEp2Ym1jK1JXMWhhV3c2UEM5emRISnZibWMrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYm5CMWRDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsUFZ3aWRHVjRkRndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1aGJXVTlYQ0psYldGcGJGd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5RGIyMXdiR1YwWlQwblpXMWhhV3duWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVaVzFoYVd3Z1BTQnlmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl1UTJoaGJtZGxQWHQwYUdsekxtOXVRMmhoYm1kbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5c1lXSmxiRDVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hoWW1Wc0lHTnNZWE56VG1GdFpUMWNJbU52YkMwMVhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkSEp2Ym1jK1EyOTFiblJ5ZVRvOEwzTjBjbTl1Wno1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhObGJHVmpkQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbFBWd2lZMjkxYm5SeWVWd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5RGIyMXdiR1YwWlQwblkyOTFiblJ5ZVMxdVlXMWxKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxtTnZkVzUwY25rZ1BTQnlmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl1UTJoaGJtZGxQWHQwYUdsekxtOXVRMmhoYm1kbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHOXdkR2x2YmlCMllXeDFaVDFjSWx3aVBsTmxiR1ZqZENCaElHTnZkVzUwY25rOEwyOXdkR2x2Ymo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGIzQjBhVzl1SUhaaGJIVmxQVndpUWxKY0lqNUNjbUY2YVd3OEwyOXdkR2x2Ymo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGIzQjBhVzl1SUhaaGJIVmxQVndpVlVGY0lqNVZhM0poYVc1bFBDOXZjSFJwYjI0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHOXdkR2x2YmlCMllXeDFaVDFjSWxWVFhDSStWVzVwZEdWa0lGTjBZWFJsY3p3dmIzQjBhVzl1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNObGJHVmpkRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR0ZpWld3K1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4c1lXSmxiQ0JqYkdGemMwNWhiV1U5WENKamIyd3RNVEpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGNtOXVaejVWY0d4dllXUWdZU0JtYVd4bE9qd3ZjM1J5YjI1blBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFXNXdkWFFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbVpwYkdWY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsUFZ3aVptbHNaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVabWxzWlNBOUlISjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMjVEYUdGdVoyVTllM1JvYVhNdWIyNURhR0Z1WjJWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4aFltVnNQbHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAyWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUjJWdVpHVnlPand2YzNSeWIyNW5QbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVzV3ZFhRZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVDFjSW5KaFpHbHZYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbWRsYm1SbGNsd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFBWd2liV0ZzWlZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbGtQVndpWjJWdVpHVnlUV0ZzWlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11WjJWdVpHVnlJRDBnY24xY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdmJrTm9ZVzVuWlQxN2RHaHBjeTV2YmtOb1lXNW5aWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMejRnUEd4aFltVnNJR2gwYld4R2IzSTlYQ0puWlc1a1pYSk5ZV3hsWENJK1RXRnNaVHd2YkdGaVpXdytYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x1Y0hWMElGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U5WENKeVlXUnBiMXdpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1aGJXVTlYQ0puWlc1a1pYSmNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUMWNJbVpsYldGc1pWd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xrUFZ3aVoyVnVaR1Z5Um1WdFlXeGxYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldZOWUzSWdQVDRnZEdocGN5NW5aVzVrWlhJZ1BTQnlmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzl1UTJoaGJtZGxQWHQwYUdsekxtOXVRMmhoYm1kbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdlBpQThiR0ZpWld3Z2FIUnRiRVp2Y2oxY0ltZGxibVJsY2tabGJXRnNaVndpUGtabGJXRnNaVHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ3dE5sd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1J5YjI1blBrUnZJSGx2ZFNCb1lYWmxJR0VnY0c5eWRHWnZiR2x2T2p3dmMzUnliMjVuUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdGaVpXd2dZMnhoYzNOT1lXMWxQVndpWTJobFkydGliM2hjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFXNXdkWFFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVlXMWxQVndpWTJobFkydGliM2hjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U5WENKamFHVmphMkp2ZUZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVOVhDSjVaWE5jSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11WTJobFkydGliM2dnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMjVEYUdGdVoyVTllM1JvYVhNdWIyNURhR0Z1WjJWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmo1WlpYTThMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4aFltVnNJR05zWVhOelRtRnRaVDFjSW1Ob1pXTnJZbTk0WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHVjSFYwSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW1Ob1pXTnJZbTk0WENJZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsUFZ3aVkyaGxZMnRpYjNoY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFBWd2libTljSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11WTJobFkydGliM2dnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMjVEYUdGdVoyVTllM1JvYVhNdWIyNURhR0Z1WjJWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmo1T2J6d3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c1lXSmxiRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNZV0psYkNCamJHRnpjMDVoYldVOVhDSmphR1ZqYTJKdmVGd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYm5CMWRDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVOVhDSmphR1ZqYTJKdmVGd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUMWNJbU5vWldOclltOTRYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVDFjSW0xaGVXSmxYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFpqMTdjaUE5UGlCMGFHbHpMbU5vWldOclltOTRJRDBnY24xY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITndZVzQrVFdGNVltVThMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JseHVJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2ljbTkzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YkMweE1sd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBjbTl1Wno1U1pYTjFiV1U2UEM5emRISnZibWMrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhSbGVIUmhjbVZoSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVDFjSW5KbGMzVnRaVndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVm1QWHR5SUQwK0lIUm9hWE11Y21WemRXMWxJRDBnY24xY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbkp2ZDF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ3dE1USWdjbWxuYUhSY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHSnlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhpZFhSMGIyNGdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNOT1lXMWxQVndpWW5WMGRHOXVMWEJ5YVcxaGNubGNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbFBWd2ljM1ZpYldsMFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BsWmhiR2xrWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lEd3ZabTl5YlQ1Y2JpQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDazdYRzRnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZW1haWwgZnJvbSAnLi9lbWFpbCc7XG5pbXBvcnQgZXh0ZW5zaW9uIGZyb20gJy4vZXh0ZW5zaW9uJztcbmltcG9ydCBsZXR0ZXIgZnJvbSAnLi9sZXR0ZXInO1xuaW1wb3J0IG1heGxlbmd0aCBmcm9tICcuL21heGxlbmd0aCc7XG5pbXBvcnQgbWlubGVuZ3RoIGZyb20gJy4vbWlubGVuZ3RoJztcbmltcG9ydCBtYXhzaXplIGZyb20gJy4vbWF4c2l6ZSc7XG5pbXBvcnQgbnVtYmVyIGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuL3JlcXVpcmVkJztcbmltcG9ydCB2YWx1ZU5vdEVxdWFscyBmcm9tICcuL3ZhbHVlTm90RXF1YWxzJztcbmltcG9ydCBtaW5jaGVja2VkIGZyb20gJy4vbWluY2hlY2tlZCc7XG5pbXBvcnQgdGVzdGUgZnJvbSAnLi90ZXN0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICBlbWFpbCxcbiAgZXh0ZW5zaW9uLFxuICBsZXR0ZXIsXG4gIG1heGxlbmd0aCxcbiAgbWlubGVuZ3RoLFxuICBtYXhzaXplLFxuICBudW1iZXIsXG4gIHJlcXVpcmVkLFxuICB2YWx1ZU5vdEVxdWFscyxcbiAgbWluY2hlY2tlZCxcbiAgdGVzdGUsXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdlbWFpbCcsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCcsXG4gIGZuOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKC9eWythLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kL2kpLnRlc3QodmFsdWUpIHx8IGZhbHNlO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9lbWFpbC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnZXh0ZW5zaW9uJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBjaG9vc2UgYSBmaWxlIHdpdGggYSB2YWxpZCBleHRlbnNpb246ICguLi57fSknLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBmaWxlID0gQXJyYXkuZnJvbShlbGVtZW50WzBdLmZpbGVzKTtcbiAgICByZXR1cm4gZmlsZS5zb21lKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWxlVHlwZSA9IChpdGVtLnR5cGUpLnNwbGl0KCcvJylbMV07XG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdqcGVnJyAmJiBwYXJhbXMuaW5jbHVkZXMoJ2pwZycpICYmICFwYXJhbXMuaW5jbHVkZXMoJ2pwZWcnKSkgcGFyYW1zLnB1c2goJ2pwZWcnKTtcbiAgICAgIHJldHVybiBwYXJhbXMuaW5jbHVkZXMoZmlsZVR5cGUpO1xuICAgIH0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9leHRlbnNpb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ2xldHRlcicsXG4gIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgb25seSBsZXR0ZXJzJyxcbiAgZm46ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAoL15bYS16QS1aXSskLykudGVzdCh2YWx1ZSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2xldHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWF4bGVuZ3RoJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBubyBtb3JlIHRoYW4gezB9IGNoYXJhY3RlcnMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIHJldHVybiAodmFsdWUubGVuZ3RoIDw9IHBhcmFtKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWF4bGVuZ3RoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtaW5sZW5ndGgnLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICByZXR1cm4gKHZhbHVlLmxlbmd0aCA+PSBwYXJhbSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21pbmxlbmd0aC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWF4c2l6ZScsXG4gIG1lc3NhZ2U6ICdGaWxlIHNpemUgbXVzdCBub3QgZXhjZWVkIHswfSBieXRlcycsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IEFycmF5LmZyb20oZWxlbWVudFswXS5maWxlcyk7XG4gICAgcmV0dXJuIGZpbGUuc29tZShpdGVtID0+IChpdGVtLnNpemUgPD0gcGFyYW0pKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWF4c2l6ZS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbnVtYmVyJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlcicsXG4gIGZuOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gL15cXGQrJC9nLnRlc3QodmFsdWUpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9udW1iZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbmFtZTogJ3JlcXVpcmVkJyxcbiAgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuc29tZShlbGVtID0+IGVsZW0uY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiAoISF2YWx1ZS5sZW5ndGggfHwgZmFsc2UpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9yZXF1aXJlZC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAndmFsdWVOb3RFcXVhbHMnLFxuICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSBub3QgZXF1YWwgdG8gezB9JyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICByZXR1cm4gcGFyYW0gIT09IHZhbHVlO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy92YWx1ZU5vdEVxdWFscy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBuYW1lOiAnbWluY2hlY2tlZCcsXG4gIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IHswfSBvcHRpb25zJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICBjb25zdCBxdGRDaGVja2VkID0gZWxlbWVudC5yZWR1Y2UoKGFjYywgb3B0aW9uKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLmNoZWNrZWQpIGFjYysrO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gKHF0ZENoZWNrZWQgPj0gcGFyYW0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9taW5jaGVja2VkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdhcnJheScsXG4gIG1lc3NhZ2U6ICdBcnJheSBpbmRleDogezB9IGZpZWxkIHsxfSBpcyB7Mn0gcmVxdWlyZWQnLFxuICBmbjogKCkgPT4ge1xuICAgIHJldHVybiB0cnVlIHx8IGZhbHNlO1xuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdvYmplY3QnLFxuICBtZXNzYWdlOiAnT2JqZWN0IGtleXM6IHtrZXkxfSB8fCB7a2V5Mi5rZXkzWzBdLmtleTR9IGlzIHJlcXVpcmVkJyxcbiAgZm46ICgpID0+IHtcbiAgICByZXR1cm4gdHJ1ZSB8fCBmYWxzZTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdGVzdGUuanMiLCJpbXBvcnQgVmFsaWRhdGUgZnJvbSAnLi9ydWxlcy9WYWxpZGF0ZSc7XG5cbmNsYXNzIE9jdGFmb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBWYWxpZGF0ZS5nZXRBbGwoKTtcbiAgICB0aGlzLnZhbGlkYXRlQWxsID0gVmFsaWRhdGUuYXBwbHk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPY3RhZm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaW5kZXguanMiLCJpbXBvcnQgUnVsZXMgZnJvbSAnLi9SdWxlcyc7XG5pbXBvcnQgeyBkb20sIGlzU3RyaW5nLCBpc09iamVjdCwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgRXJyb3JBY3Rpb25zLCBNZXNzYWdlQWN0aW9ucywgVmFsaWRhdGVBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBlbnRyeVR5cGUgfSBmcm9tICcuLi9lbnRyaWVzJztcblxuY29uc3QgVmFsaWRhdGUgPSB7XG4gIGdldEFsbDogVmFsaWRhdGVBY3Rpb25zLmdldEFsbCxcbiAgYXBwbHk6IChmaWVsZE1hcCA9IHt9KSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhmaWVsZE1hcClcbiAgICAgIC5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZFJ1bGVzTWFwcGVyID0gZmllbGRNYXBbc2VsZWN0b3JdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZmllbGRSdWxlc0VudHJ5VHlwZSA9IHtcbiAgICAgICAgICAuLi4oaXNTdHJpbmcoZmllbGRSdWxlc01hcHBlcikgJiYgZW50cnlUeXBlLmZpZWxkLnN0cmluZyhmaWVsZFJ1bGVzTWFwcGVyKSksXG4gICAgICAgICAgLi4uKGlzT2JqZWN0KGZpZWxkUnVsZXNNYXBwZXIpICYmIGVudHJ5VHlwZS5maWVsZC5vYmplY3QoZmllbGRSdWxlc01hcHBlcikpLFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKCEhT2JqZWN0LmtleXMoZmllbGRSdWxlc0VudHJ5VHlwZSkubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbShzZWxlY3Rvcik7XG4gICAgICAgICAgTWVzc2FnZUFjdGlvbnMuc2V0Q3VzdG9tRmllbGRNc2coc2VsZWN0b3IsIGZpZWxkUnVsZXNFbnRyeVR5cGUubWVzc2FnZXMpO1xuXG4gICAgICAgICAgaWYgKCFlbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgRXJyb3JBY3Rpb25zLnNldCgnZmllbGQnLCBzZWxlY3Rvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IChcbiAgICAgICAgICAgIGZpZWxkUnVsZXNFbnRyeVR5cGUudmFsdWUgfHwgXG4gICAgICAgICAgICAoZWxlbWVudC5sZW5ndGggJiYgZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDFdLnZhbHVlKSB8fFxuICAgICAgICAgICAgKCcnKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZFJ1bGVzID0gKFxuICAgICAgICAgICAgKGlzQXJyYXkoZmllbGRSdWxlc0VudHJ5VHlwZS5ydWxlcykgJiYgZW50cnlUeXBlLnJ1bGVzLmFycmF5KGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpKSB8fFxuICAgICAgICAgICAgKGlzT2JqZWN0KGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpICYmIGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpIHx8XG4gICAgICAgICAgICB7fVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZCA9IHtcbiAgICAgICAgICAgIHJ1bGVzOiBmaWVsZFJ1bGVzLFxuICAgICAgICAgICAgbWVzc2FnZXM6IE1lc3NhZ2VBY3Rpb25zLmdldEFsbCgpLFxuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsaWQ6OicsIGZpZWxkKTtcbiAgICAgICAgICBjb25zdCB2YWxpZCA9IFJ1bGVzLmFwcGx5KGZpZWxkLCBWYWxpZGF0ZUFjdGlvbnMuZ2V0QWxsKCkpO1xuICAgICAgICAgIGlmICh2YWxpZC5tZXNzYWdlcy5sZW5ndGgpIGVycm9ycy5wdXNoKHZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBFcnJvckFjdGlvbnMuc2V0KCdlbnRyeScsIGZpZWxkUnVsZXNNYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIFZhbGlkYXRlLmlzVmFsaWQgPSAhZXJyb3JzLmxlbmd0aDtcblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvcnVsZXMvVmFsaWRhdGUuanMiLCJpbXBvcnQgeyBSZXBsYWNlQWN0aW9ucywgRXJyb3JBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgZG9tIGZyb20gJy4uL2hlbHBlcnMvZG9tSGVscGVyJztcblxuY29uc3QgUnVsZXMgPSB7XG4gIGFwcGx5OiAoZmllbGQgPSB7fSwgdmFsaWRhdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHtcbiAgICAgIGZpZWxkOiAoZmllbGQuc2VsZWN0b3IgfHwgJycpLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAoZXJyb3JzLmZpZWxkKXtcbiAgICAgIE9iamVjdFxuICAgICAgICAuZW50cmllcyhmaWVsZC5ydWxlcyB8fCB7fSlcbiAgICAgICAgLmZvckVhY2goKFtrZXksIHBhcmFtc10pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IHZhbGlkYXRpb25zW2tleV07XG4gICAgICAgICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGUoXG4gICAgICAgICAgICAgIGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICBmaWVsZC5lbGVtZW50LFxuICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgIGRvbSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IGZpZWxkLm1lc3NhZ2VzLmZpZWxkc1tmaWVsZC5zZWxlY3Rvcl0gfHwge307XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAodXNlck1lc3NhZ2Vba2V5XSB8fCBmaWVsZC5tZXNzYWdlcy52YWxpZGF0b3Jba2V5XSk7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFJlcGxhY2VBY3Rpb25zLm1lc3NhZ2UudmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBlcnJvcnMubWVzc2FnZXMucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBFcnJvckFjdGlvbnMuc2V0KCd1bmRlZmluZWQnLCBrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9ydWxlcy9SdWxlcy5qcyIsImltcG9ydCBQQVRURVJOUyBmcm9tICcuL3BhdHRlcm5zJztcbmltcG9ydCBNRVNTQUdFUyBmcm9tICcuL21lc3NhZ2VzJztcblxuZXhwb3J0IHtcbiAgUEFUVEVSTlMsXG4gIE1FU1NBR0VTLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwiY29uc3QgaXNBcnJheSA9IHZhbHVlID0+ICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNBcnJheUhlbHBlci5qcyIsImltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbHVlID0+IChpc1R5cGUodmFsdWUpID09PSAnT2JqZWN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzT2JqZWN0SGVscGVyLmpzIiwiaW1wb3J0IGlzVHlwZSBmcm9tICcuL2lzVHlwZUhlbHBlcic7XG5cbmNvbnN0IGlzU3RyaW5nID0gdmFsdWUgPT4gKHZhbHVlICYmIGlzVHlwZSh2YWx1ZSkgPT09ICdTdHJpbmcnKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvaXNTdHJpbmdIZWxwZXIuanMiLCJpbXBvcnQgaXNUeXBlIGZyb20gJy4vaXNUeXBlSGVscGVyJztcblxuY29uc3QgaXNOdW1iZXIgPSB2YWx1ZSA9PiAoaXNUeXBlKHZhbHVlKSA9PT0gJ051bWJlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBpc051bWJlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pc051bWJlckhlbHBlci5qcyIsImltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuXG5jb25zdCBpc0Jvb2xlYW4gPSB2YWx1ZSA9PiAoaXNUeXBlKHZhbHVlKSA9PT0gJ0Jvb2xlYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCb29sZWFuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzQm9vbGVhbkhlbHBlci5qcyIsImltcG9ydCBpc1R5cGUgZnJvbSAnLi9pc1R5cGVIZWxwZXInO1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gdmFsdWUgPT4gKGlzVHlwZSh2YWx1ZSkgPT09ICdGdW5jdGlvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBpc0Z1bmN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2lzRnVuY3Rpb25IZWxwZXIuanMiLCJpbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0JztcblxuY29uc3QgZ2V0ID0gKG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSA9PiBfZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2dldEhlbHBlci5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9vY3RhZm9ybS9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL29jdGFmb3JtL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvS2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEVycm9yQWN0aW9ucyBmcm9tICcuL0Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgTWVzc2FnZUFjdGlvbnMgZnJvbSAnLi9NZXNzYWdlQWN0aW9ucyc7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNGdW5jdGlvbiwgaXNBcnJheSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4uL3N0YXRlcyc7XG5cbmNvbnN0IFZhbGlkYXRlQWN0aW9ucyA9IHtcbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiBTdGF0ZS52YWxpZGF0aW9ucztcbiAgfSxcbiAgc2V0KG5hbWUsIGZuKSB7XG4gICAgU3RhdGUudmFsaWRhdGlvbnNbbmFtZV0gPSBmbjtcbiAgfSxcbiAgYWRkKGxpc3RPZlZhbGlkYXRpb25zKSB7XG4gICAgaWYgKGlzQXJyYXkobGlzdE9mVmFsaWRhdGlvbnMpKSB7XG4gICAgICBsaXN0T2ZWYWxpZGF0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIGZuLCBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgY29uc3QgaGFzUGFyYW1zID0gKGlzU3RyaW5nKG5hbWUpICYmIGlzRnVuY3Rpb24oZm4pICYmIGlzU3RyaW5nKG1lc3NhZ2UpKTtcblxuICAgICAgICBpZiAoaGFzUGFyYW1zICYmIG1lc3NhZ2UpIHtcbiAgICAgICAgICBNZXNzYWdlQWN0aW9ucy5zZXQobmFtZSwgbWVzc2FnZSk7XG4gICAgICAgICAgVmFsaWRhdGVBY3Rpb25zLnNldChuYW1lLCBmbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lc3NhZ2UpIEVycm9yQWN0aW9ucy5zZXQoJ21zZycsIG5hbWUpO1xuICAgICAgICBpZiAoIWhhc1BhcmFtcykgRXJyb3JBY3Rpb25zLnNldCgnYWRkJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXJyb3JBY3Rpb25zLnNldCgnYWRkJywgbGlzdE9mVmFsaWRhdGlvbnMpO1xuICAgIH1cbiAgfSxcbn07XG5cblN0YXRlLnZhbGlkYXRpb25zID0ge1xuICBhZGQ6IFZhbGlkYXRlQWN0aW9ucy5hZGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0ZUFjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvVmFsaWRhdGVBY3Rpb25zLmpzIiwiaW1wb3J0IFN0cmluZ0VudHJ5IGZyb20gJy4vU3RyaW5nRW50cnknO1xuaW1wb3J0IE9iamVjdEVudHJ5IGZyb20gJy4vT2JqZWN0RW50cnknO1xuaW1wb3J0IEFycmF5RW50cnkgZnJvbSAnLi9BcnJheUVudHJ5JztcblxuZXhwb3J0IGNvbnN0IGVudHJ5VHlwZSA9IHtcbiAgZmllbGQ6IHtcbiAgICBvYmplY3Q6IE9iamVjdEVudHJ5LFxuICAgIHN0cmluZzogU3RyaW5nRW50cnksXG4gIH0sXG4gIHJ1bGVzOiB7XG4gICAgYXJyYXk6IEFycmF5RW50cnksXG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL2luZGV4LmpzIiwiaW1wb3J0IHBhcmFtc1V0aWxzIGZyb20gJy4uL3V0aWxzL3BhcmFtc1V0aWxzJztcbmltcG9ydCBSdWxlTW9kZWwgZnJvbSAnLi4vbW9kZWxzL1J1bGVNb2RlbCc7XG5cbi8vIGV4dHJhY3RSdWxlc0Zyb21TdHJpbmdcbmNvbnN0IFN0cmluZ0VudHJ5ID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBydWxlcyA9IHBhcmFtc1V0aWxzLmdldC5zaG9ydFN0cmluZ1ZhbGlkYXRpb24oc3RyaW5nKTtcbiAgcmV0dXJuIFJ1bGVNb2RlbC5nZXQoeyBcbiAgICBtZXNzYWdlczoge30sXG4gICAgcnVsZXMsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nRW50cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvU3RyaW5nRW50cnkuanMiLCJpbXBvcnQgUnVsZU1vZGVsIGZyb20gJy4uL21vZGVscy9SdWxlTW9kZWwnO1xuXG4vLyBleHRyYWN0UnVsZXNGcm9tU3RyaW5nXG5jb25zdCBPYmplY3RFbnRyeSA9IChvYmplY3QpID0+IHtcbiAgcmV0dXJuIFJ1bGVNb2RlbC5nZXQob2JqZWN0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdEVudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL09iamVjdEVudHJ5LmpzIiwiaW1wb3J0IHBhcmFtc1V0aWxzIGZyb20gJy4uL3V0aWxzL3BhcmFtc1V0aWxzJztcblxuLy8gZXh0cmFjdFJ1bGVzRnJvbUFycmF5XG5jb25zdCBBcnJheUVudHJ5ID0gKGZpZWxkID0gW10pID0+IHtcbiAgY29uc3QgcnVsZXMgPSBmaWVsZC5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVzID0gcGFyYW1zVXRpbHMuZ2V0LnNob3J0U3RyaW5nVmFsaWRhdGlvbihjdXJyZW50KTtcbiAgICByZXR1cm4geyAuLi5hY2MsIC4uLnJ1bGVzIH07XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnJheUVudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL0FycmF5RW50cnkuanMiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBFcnJvcnMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRXJyb3JzLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFcnJvcnMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVycm9ycyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVycm9ycy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVycm9ycykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEVycm9ycywgW3tcbiAgICBrZXk6ICd1bmlxdWVLZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmlxdWVLZXkoKSB7XG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVycm9ycyA9IHRoaXMucHJvcHMuZXJyb3JzO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2Vycm9ycycgfSxcbiAgICAgICAgZXJyb3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLm1lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgIHsga2V5OiBfdGhpczIudW5pcXVlS2V5KCkgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdFcnJvcjonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2knLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZmllbGQnIH0sXG4gICAgICAgICAgICAgICAgaXRlbS5maWVsZC5zcGxpdCgvKD8hW2Etel0pKD89W0EtWl0pL2cpLmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXJyb3JzO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amIyMXdiMjVsYm5SekwwVnljbTl5Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpTWldGamRDSXNJa052YlhCdmJtVnVkQ0lzSWtWeWNtOXljeUlzSWsxaGRHZ2lMQ0p5WVc1a2IyMGlMQ0owYjFOMGNtbHVaeUlzSW5OMVluTjBjbWx1WnlJc0ltVnljbTl5Y3lJc0luQnliM0J6SWl3aWJXRndJaXdpYVhSbGJTSXNJbTFsYzNOaFoyVnpJaXdpYldWemMyRm5aU0lzSW5WdWFYRjFaVXRsZVNJc0ltWnBaV3hrSWl3aWMzQnNhWFFpTENKcWIybHVJaXdpZEc5TWIzZGxja05oYzJVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPMEZCUVVFc1QwRkJUMEVzUzBGQlVDeEpRVUZuUWtNc1UwRkJhRUlzVVVGQmFVTXNUMEZCYWtNN08wbEJSWEZDUXl4Tk96czdPenM3T3pzN096dG5RMEZEVWp0QlFVTlVMR0ZCUVU5RExFdEJRVXRETEUxQlFVd3NSMEZCWTBNc1VVRkJaQ3hEUVVGMVFpeEZRVUYyUWl4RlFVRXlRa01zVTBGQk0wSXNRMEZCY1VNc1EwRkJja01zUlVGQmQwTXNSVUZCZUVNc1EwRkJVRHRCUVVORU96czdOa0pCUlZFN1FVRkJRVHM3UVVGQlFTeFZRVU5EUXl4TlFVUkVMRWRCUTFrc1MwRkJTME1zUzBGRWFrSXNRMEZEUTBRc1RVRkVSRHM3TzBGQlIxQXNZVUZEUlR0QlFVRkJPMEZCUVVFc1ZVRkJTU3hYUVVGVkxGRkJRV1E3UVVGRFIwRXNaVUZCVDBVc1IwRkJVQ3hEUVVGWExHZENRVUZSTzBGQlEyeENMR2xDUVVORlF5eExRVUZMUXl4UlFVRk1MRU5CUVdOR0xFZEJRV1FzUTBGQmEwSXNWVUZCUTBjc1QwRkJSQ3hGUVVGaE8wRkJRemRDTEcxQ1FVTkZPMEZCUVVFN1FVRkJRU3huUWtGQlNTeExRVUZMTEU5QlFVdERMRk5CUVV3c1JVRkJWRHRCUVVORk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRXNaVUZFUmp0QlFVVkZPMEZCUVVFN1FVRkJRU3hyUWtGQlJ5eFhRVUZWTEU5QlFXSTdRVUZGU1Vnc2NVSkJRVXRKTEV0QlFVd3NRMEZEUjBNc1MwRkVTQ3hEUVVOVExIRkNRVVJVTEVWQlJVZERMRWxCUmtnc1EwRkZVU3hIUVVaU0xFVkJSMGRETEZkQlNFZzdRVUZHU2l4bFFVWkdPMEZCVlVVN1FVRkJRVHRCUVVGQk8wRkJRVTlNTzBGQlFWQTdRVUZXUml4aFFVUkdPMEZCWTBRc1YwRm1SQ3hEUVVSR08wRkJhMEpFTEZOQmJrSkJPMEZCUkVnc1QwRkVSanRCUVhkQ1JEczdPenRGUVdoRGFVTllMRk03TzJWQlFXWkRMRTBpTENKbWFXeGxJam9pUlhKeWIzSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OWhaRzFwYmk5RWIyTjFiV1Z1ZEhNdlVISnZhbVZqZEhNdmIyTjBZV1p2Y20wdFpHVnRieUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDd2dleUJEYjIxd2IyNWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFVnljbTl5Y3lCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZENCN1hHNGdJSFZ1YVhGMVpVdGxlU2dwZTF4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG5KaGJtUnZiU2dwTG5SdlUzUnlhVzVuS0RNMktTNXpkV0p6ZEhKcGJtY29NaXdnTVRVcFhHNGdJSDFjYmx4dUlDQnlaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGNuSnZjbk1nZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ1BIVnNJR05zWVhOelRtRnRaVDFjSW1WeWNtOXljMXdpUGx4dUlDQWdJQ0FnSUNCN1pYSnliM0p6TG0xaGNDaHBkR1Z0SUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FYUmxiUzV0WlhOellXZGxjeTV0WVhBb0tHMWxjM05oWjJVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2tnYTJWNVBYdDBhR2x6TG5WdWFYRjFaVXRsZVNncGZUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSWEp5YjNJNlBDOXpkSEp2Ym1jK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhU0JqYkdGemMwNWhiV1U5SjJacFpXeGtKejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsMFpXMHVabWxsYkdSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1emNHeHBkQ2d2S0Q4aFcyRXRlbDBwS0Q4OVcwRXRXbDBwTDJjcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdWFtOXBiaWduTFNjcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdWRHOU1iM2RsY2tOaGMyVW9LVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmsrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiajU3YldWemMyRm5aWDA4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lIMHBmVnh1SUNBZ0lDQWdQQzkxYkQ1Y2JpQWdJQ0FwTzF4dUlDQjlYRzU5WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0Vycm9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3ROYW1lOiB7XG4gICAgLy8gdmFsdWU6ICdmaWVsZCB2YWx1ZScsIC8vIChPcHRpb25hbClcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5sZW5ndGg6IDRcbiAgICAgIC8vIGFycmF5OiBbXG4gICAgICAvLyAgICcoQXJyYXk6MCknLFxuICAgICAgLy8gICAnKEFycmF5OjEpJyxcbiAgICAgIC8vICAgJyhBcnJheToyKScsXG4gICAgICAvLyBdLFxuICAgICAgLy8gb2JqZWN0OiB7XG4gICAgICAvLyAgIGtleTE6ICcoS2V5OjApJyxcbiAgICAgIC8vICAga2V5Mjoge1xuICAgICAgLy8gICAgIGtleTM6IFt7XG4gICAgICAvLyAgICAgICBrZXk0OiAnKGtleTo0KScsXG4gICAgICAvLyAgICAgfV0sXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9LFxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIC8vIChPcHRpb25hbCwgaWYgbm90IHNldCB3aWxsIGJlIHVzZSBkZWZhdWx0IG1lc3NhZ2UgZnJvbSB2YWxpZGF0aW9uKVxuICAgICAgcmVxdWlyZWQ6ICdGaXJzdCBOYW1lIGlzIHJlcXVpcmVkJ1xuICAgIH1cbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICBydWxlczogWydyZXF1aXJlZCcsICdtaW5sZW5ndGg6MyddXG4gIH0sXG4gIGVtYWlsOiAnZW1haWwnLFxuICBjb3VudHJ5OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsdWVOb3RFcXVhbHM6ICdCUidcbiAgICB9XG4gIH0sXG4gIGZpbGU6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBleHRlbnNpb246IFsncG5nJywgJ2pwZyddXG4gICAgfVxuICB9LFxuICByZXN1bWU6ICdyZXF1aXJlZCcsXG4gIGdlbmRlcjogJ3JlcXVpcmVkJyxcbiAgY2hlY2tib3g6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5jaGVja2VkOiAyXG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMEZ3Y0M5V1lXeHBaR0YwYVc5dVRXRndMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBjbk4wVG1GdFpTSXNJbkoxYkdWeklpd2ljbVZ4ZFdseVpXUWlMQ0p0YVc1c1pXNW5kR2dpTENKdFpYTnpZV2RsY3lJc0lteGhjM1JPWVcxbElpd2laVzFoYVd3aUxDSmpiM1Z1ZEhKNUlpd2lkbUZzZFdWT2IzUkZjWFZoYkhNaUxDSm1hV3hsSWl3aVpYaDBaVzV6YVc5dUlpd2ljbVZ6ZFcxbElpd2laMlZ1WkdWeUlpd2lZMmhsWTJ0aWIzZ2lMQ0p0YVc1amFHVmphMlZrSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4bFFVRmxPMEZCUTJKQkxHRkJRVmM3UVVGRFZEdEJRVU5CUXl4WFFVRlBPMEZCUTB4RExHZENRVUZWTEVsQlJFdzdRVUZGVEVNc2FVSkJRVmM3UVVGRFdEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFXWkxMRXRCUmtVN1FVRnRRbFJETEdOQlFWVTdRVUZEVWp0QlFVTkJSaXhuUWtGQlZUdEJRVVpHTzBGQmJrSkVMRWRCUkVVN1FVRjVRbUpITEZsQlFWVTdRVUZEVWtvc1YwRkJUeXhEUVVGRExGVkJRVVFzUlVGQllTeGhRVUZpTzBGQlJFTXNSMEY2UWtjN1FVRTBRbUpMTEZOQlFVOHNUMEUxUWswN1FVRTJRbUpETEZkQlFWTTdRVUZEVUU0c1YwRkJUenRCUVVOTVF5eG5Ra0ZCVlN4SlFVUk1PMEZCUlV4TkxITkNRVUZuUWp0QlFVWllPMEZCUkVFc1IwRTNRa2s3UVVGdFEySkRMRkZCUVUwN1FVRkRTbElzVjBGQlR6dEJRVU5NUXl4blFrRkJWU3hKUVVSTU8wRkJSVXhSTEdsQ1FVRlhMRU5CUVVNc1MwRkJSQ3hGUVVGUkxFdEJRVkk3UVVGR1RqdEJRVVJJTEVkQmJrTlBPMEZCZVVOaVF5eFZRVUZSTEZWQmVrTkxPMEZCTUVOaVF5eFZRVUZSTEZWQk1VTkxPMEZCTWtOaVF5eFpRVUZWTzBGQlExSmFMRmRCUVU4N1FVRkRURU1zWjBKQlFWVXNTVUZFVER0QlFVVk1XU3hyUWtGQldUdEJRVVpRTzBGQlJFTTdRVUV6UTBjc1EwRkJaaUlzSW1acGJHVWlPaUpXWVd4cFpHRjBhVzl1VFdGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5aFpHMXBiaTlFYjJOMWJXVnVkSE12VUhKdmFtVmpkSE12YjJOMFlXWnZjbTB0WkdWdGJ5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnWm1seWMzUk9ZVzFsT2lCN1hHNGdJQ0FnTHk4Z2RtRnNkV1U2SUNkbWFXVnNaQ0IyWVd4MVpTY3NJQzh2SUNoUGNIUnBiMjVoYkNsY2JpQWdJQ0J5ZFd4bGN6b2dlMXh1SUNBZ0lDQWdjbVZ4ZFdseVpXUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNCdGFXNXNaVzVuZEdnNklEUXNYRzRnSUNBZ0lDQXZMeUJoY25KaGVUb2dXMXh1SUNBZ0lDQWdMeThnSUNBbktFRnljbUY1T2pBcEp5eGNiaUFnSUNBZ0lDOHZJQ0FnSnloQmNuSmhlVG94S1Njc1hHNGdJQ0FnSUNBdkx5QWdJQ2NvUVhKeVlYazZNaWtuTEZ4dUlDQWdJQ0FnTHk4Z1hTeGNiaUFnSUNBZ0lDOHZJRzlpYW1WamREb2dlMXh1SUNBZ0lDQWdMeThnSUNCclpYa3hPaUFuS0V0bGVUb3dLU2NzWEc0Z0lDQWdJQ0F2THlBZ0lHdGxlVEk2SUh0Y2JpQWdJQ0FnSUM4dklDQWdJQ0JyWlhrek9pQmJlMXh1SUNBZ0lDQWdMeThnSUNBZ0lDQWdhMlY1TkRvZ0p5aHJaWGs2TkNrbkxGeHVJQ0FnSUNBZ0x5OGdJQ0FnSUgxZExGeHVJQ0FnSUNBZ0x5OGdJQ0I5TEZ4dUlDQWdJQ0FnTHk4Z2ZTeGNiaUFnSUNCOUxGeHVJQ0FnSUcxbGMzTmhaMlZ6T2lCN1hHNGdJQ0FnSUNBdkx5QW9UM0IwYVc5dVlXd3NJR2xtSUc1dmRDQnpaWFFnZDJsc2JDQmlaU0IxYzJVZ1pHVm1ZWFZzZENCdFpYTnpZV2RsSUdaeWIyMGdkbUZzYVdSaGRHbHZiaWxjYmlBZ0lDQWdJSEpsY1hWcGNtVmtPaUFuUm1seWMzUWdUbUZ0WlNCcGN5QnlaWEYxYVhKbFpDY3NYRzRnSUNBZ2ZTeGNiaUFnZlN4Y2JpQWdiR0Z6ZEU1aGJXVTZJSHRjYmlBZ0lDQnlkV3hsY3pvZ1d5ZHlaWEYxYVhKbFpDY3NJQ2R0YVc1c1pXNW5kR2c2TXlkZFhHNGdJSDBzWEc0Z0lHVnRZV2xzT2lBblpXMWhhV3duTEZ4dUlDQmpiM1Z1ZEhKNU9pQjdYRzRnSUNBZ2NuVnNaWE02SUh0Y2JpQWdJQ0FnSUhKbGNYVnBjbVZrT2lCMGNuVmxMRnh1SUNBZ0lDQWdkbUZzZFdWT2IzUkZjWFZoYkhNNklDZENVaWNzWEc0Z0lDQWdmU3hjYmlBZ2ZTeGNiaUFnWm1sc1pUb2dlMXh1SUNBZ0lISjFiR1Z6T2lCN1hHNGdJQ0FnSUNCeVpYRjFhWEpsWkRvZ2RISjFaU3hjYmlBZ0lDQWdJR1Y0ZEdWdWMybHZiam9nV3lkd2JtY25MQ0FuYW5CbkoxMHNYRzRnSUNBZ2ZTeGNiaUFnZlN4Y2JpQWdjbVZ6ZFcxbE9pQW5jbVZ4ZFdseVpXUW5MRnh1SUNCblpXNWtaWEk2SUNkeVpYRjFhWEpsWkNjc1hHNGdJR05vWldOclltOTRPaUI3WEc0Z0lDQWdjblZzWlhNNklIdGNiaUFnSUNBZ0lISmxjWFZwY21Wa09pQjBjblZsTEZ4dUlDQWdJQ0FnYldsdVkyaGxZMnRsWkRvZ01seHVJQ0FnSUgxY2JpQWdmU3hjYm4wN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAvVmFsaWRhdGlvbk1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=