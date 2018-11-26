webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(41);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.dom = exports.types = undefined;

var _dom = __webpack_require__(13);

var _dom2 = _interopRequireDefault(_dom);

var _get = __webpack_require__(42);

var _get2 = _interopRequireDefault(_get);

var _types = __webpack_require__(43);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.types = _types2.default;
exports.dom = _dom2.default;
exports.get = _get2.default;
exports.default = {
  types: _types2.default,
  dom: _dom2.default,
  get: _get2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _states = __webpack_require__(14);

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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateActions = exports.MessageActions = exports.ReplaceActions = exports.ErrorActions = undefined;

var _ErrorActions = __webpack_require__(8);

var _ErrorActions2 = _interopRequireDefault(_ErrorActions);

var _ReplaceActions = __webpack_require__(9);

var _ReplaceActions2 = _interopRequireDefault(_ReplaceActions);

var _MessageActions = __webpack_require__(3);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

var _ValidateActions = __webpack_require__(44);

var _ValidateActions2 = _interopRequireDefault(_ValidateActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ErrorActions = _ErrorActions2.default;
exports.ReplaceActions = _ReplaceActions2.default;
exports.MessageActions = _MessageActions2.default;
exports.ValidateActions = _ValidateActions2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReplaceActions = __webpack_require__(9);

var _ReplaceActions2 = _interopRequireDefault(_ReplaceActions);

var _MessageActions = __webpack_require__(3);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _patterns = __webpack_require__(10);

var _patterns2 = _interopRequireDefault(_patterns);

var _paramsUtils = __webpack_require__(1);

var _paramsUtils2 = _interopRequireDefault(_paramsUtils);

var _helpers = __webpack_require__(2);

var _helpers2 = _interopRequireDefault(_helpers);

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

          var map = (_map = {}, _defineProperty(_map, _helpers2.default.types.isString(params) || _helpers2.default.types.isNumber(params) || _helpers2.default.types.isBoolean(params), params), _defineProperty(_map, _helpers2.default.types.isArray(params), params[pureKey]), _defineProperty(_map, _helpers2.default.types.isObject(params), _helpers2.default.get(params, pureKey, current)), _map);

          return acc.replace(current, map.true || '');
        }, msg);
      }

      return msg;
    }
  }
};

exports.default = ReplaceActions;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = __webpack_require__(12);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  CORE: {
    msg: 'The validation #{method} has not been defined a message, please check out ' + _package2.default.repository.url + '#validator-method-octaformvalidatoradd',
    field: 'Field #{selector} was not found, please check out ' + _package2.default.repository.url + '#field-name-required',
    add: 'Add method accept only a list of object, please check out ' + _package2.default.repository.url + '#validator-method-octaformvalidatoradd',
    undefined: 'The validation #{method} is not defined, please check out ' + _package2.default.repository.url + '#validator-method-octaformvalidatoradd',
    entry: 'The entrypoint #{rules} has an invalid format, please check out ' + _package2.default.repository.url + '#validation-schema'
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"name":"octaform","alias":"Octaform","version":"1.1.1","description":"Octaform helps developers validate forms in an easy way, being completely agnostic to framework.","main":"index.js","homepage":"https://github.com/octaform/octaform#readme","author":"Christian Fortes","license":"MIT","bugs":"https://github.com/octaform/octaform/issues","engines":{"node":">=4.0.0"},"keywords":["form","forms","formjs","form validation","validation","react","angular","vue","javascript","vanilla"],"scripts":{"npm-publish":"npm run build:prod && npm publish dist","start":"NODE_ENV=development webpack --watch --config tools/config.dev.js","test":"jest -c test/jest/config.dev.json --watchAll","build:prod":"jest -c test/jest/config.prod.json && npm run clean && NODE_ENV=production webpack -p --progress --config tools/config.prod.js","build:dev":"jest -c test/jest/config.prod.json && npm run clean && NODE_ENV=development webpack --config tools/config.dev.js","clean":"rimraf dist","webpack":"node_modules/.bin/webpack"},"repository":{"type":"git","url":"https://github.com/octaform/octaform"},"dependencies":{},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^8.2.2","babel-jest":"^22.4.3","babel-loader":"^7.1.3","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-es2015":"^6.24.1","circular-dependency-plugin":"^4.4.0","copy-webpack-plugin":"^4.5.1","eslint":"^4.18.2","eslint-config-airbnb":"^16.1.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jest":"^21.15.0","eslint-plugin-jsx-a11y":"^6.0.3","generate-json-webpack-plugin":"^0.3.0","glob":"^7.1.2","jest":"^22.4.3","jsdom":"^11.7.0","rimraf":"^2.6.2","webpack":"^3.11.0","webpack-cli":"^2.0.9","webpack-merge":"^4.1.2"}}

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messages = __webpack_require__(11);

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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styles_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_App__ = __webpack_require__(25);





__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_App__["a" /* default */], null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RG9tIiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxPQUFPLG9CQUFQO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixrQkFBaEI7O0FBRUFELFNBQVNFLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRUMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvb2N0YWZvcm0tZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnLi9zY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cblJlYWN0RG9tLnJlbmRlcihcbiAgPEFwcCAvPiwgXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__octaform_additional_src__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__octaform_additional_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__octaform_additional_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octaform_additional_package_json__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__octaform_additional_package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__octaform_additional_package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octaform_src__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octaform_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__octaform_src__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octaform_package_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octaform_package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__octaform_package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Errors__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ValidationMap__ = __webpack_require__(50);
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

    _this.octaform = new __WEBPACK_IMPORTED_MODULE_3__octaform_src___default.a();
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

      var validate = this.octaform.validateAll(__WEBPACK_IMPORTED_MODULE_6__ValidationMap__["a" /* default */]);
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Errors__["a" /* default */], { errors: hasErrors })
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
              { className: 'col-6 col-version' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'package-version' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_4__octaform_package_json___default.a.alias,
                  ' ',
                  'v' + __WEBPACK_IMPORTED_MODULE_4__octaform_package_json___default.a.version
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_2__octaform_additional_package_json___default.a.alias,
                  ' ',
                  'v' + __WEBPACK_IMPORTED_MODULE_2__octaform_additional_package_json___default.a.version
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-6 col-button' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNjaGVtYSIsIk9jdGFmb3JtQWRkUGtnIiwiT2N0YWZvcm0iLCJPY3RhZm9ybVBrZyIsIkVycm9ycyIsIlZhbGlkYXRpb25NYXAiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaGFzRXJyb3JzIiwib2N0YWZvcm0iLCJ2YWxpZGF0b3IiLCJhZGQiLCJvblN1Ym1pdCIsImJpbmQiLCJvbkNoYW5nZSIsImhhc0ZpZWxkRXJyb3IiLCJ2YWxpZGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlQWxsIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2xhc3NFcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZWxlbSIsImdldEVsZW1lbnRzQnlOYW1lIiwiaXRlbSIsImZpZWxkIiwibmFtZSIsImxlbmd0aCIsImVsbSIsImZpcnN0TmFtZSIsInIiLCJsYXN0TmFtZSIsImVtYWlsIiwiY291bnRyeSIsImZpbGUiLCJnZW5kZXIiLCJjaGVja2JveCIsInJlc3VtZSIsImFsaWFzIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIscUNBQW5CO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQiw4Q0FBM0I7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDBCQUFyQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsbUNBQXhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsaUJBQTFCOztJQUVxQkMsRzs7O0FBQ25CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxH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Sy9DLGlDQUFlOEMsS0FBcEI7QUFBQTtBQUFBLHdCQUFnQzlDLGVBQWUrQztBQUEvQztBQUZGO0FBREYsYUFERjtBQVFFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkJBQVUsZ0JBRFo7QUFFRSx3QkFBSztBQUZQO0FBQUE7QUFBQTtBQURGO0FBUkY7QUF0SkY7QUFERixPQURGO0FBMktEOzs7O0VBaE84QmpELFM7O2VBQVpPLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9Qcm9qZWN0cy9vY3RhZm9ybS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMnO1xuaW1wb3J0IE9jdGFmb3JtQWRkUGtnIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvcGFja2FnZS5qc29uJztcbmltcG9ydCBPY3RhZm9ybSBmcm9tICcuLi8uLi8uLi8uLi9vY3RhZm9ybS9zcmMnO1xuaW1wb3J0IE9jdGFmb3JtUGtnIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uL0Vycm9ycyc7XG5pbXBvcnQgVmFsaWRhdGlvbk1hcCBmcm9tICcuL1ZhbGlkYXRpb25NYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3JzOiBbXSxcbiAgICB9XG5cbiAgICB0aGlzLm9jdGFmb3JtID0gbmV3IE9jdGFmb3JtKCk7XG4gICAgdGhpcy5vY3RhZm9ybS52YWxpZGF0b3IuYWRkKFNjaGVtYSk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFzRmllbGRFcnJvciA9IHRoaXMuaGFzRmllbGRFcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoKXtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHRoaXMub2N0YWZvcm0udmFsaWRhdGVBbGwoVmFsaWRhdGlvbk1hcCk7XG4gICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb246OicsIHZhbGlkYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGFzRXJyb3JzOiB2YWxpZGF0ZVxuICAgIH0sICgpID0+IHRoaXMuaGFzRmllbGRFcnJvcih2YWxpZGF0ZSkpO1xuICB9XG5cbiAgaGFzRmllbGRFcnJvcih2YWxpZGF0ZSl7XG4gICAgY29uc3QgY2xhc3NFcnJvciA9ICdpbnZhbGlkJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc0Vycm9yfWApXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzRXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICB2YWxpZGF0ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHRoaXNbaXRlbS5maWVsZF0ubmFtZSk7XG4gICAgICBpZihlbGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWxlbS5mb3JFYWNoKGVsbSA9PiBlbG0uY2xhc3NMaXN0LmFkZChjbGFzc0Vycm9yKSlcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzW2l0ZW0uZmllbGRdLmNsYXNzTGlzdC5hZGQoY2xhc3NFcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNFcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY29sLTYgZmlyc3RcIj5PY3RhZm9ybSBWYWxpZGF0ZSAtIERlbW88L2g0PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGV4dC1yaWdodCBsYXN0XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9vY3RhZm9ybS9vY3RhZm9ybVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJnaXRodWItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9pbWFnZXMvbW9kdWxlcy9sb2dvc19wYWdlL0dpdEh1Yi1NYXJrLnBuZ1wiIGFsdD1cIk9jdGFmb3JtIC0gR2l0aHViXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHshIWhhc0Vycm9ycy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxFcnJvcnMgZXJyb3JzPXtoYXNFcnJvcnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Rmlyc3QgbmFtZTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdnaXZlbi1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmZpcnN0TmFtZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5MYXN0IG5hbWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J2ZhbWlseS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmxhc3ROYW1lID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC03XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+RW1haWw6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZW1haWwgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC01XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Q291bnRyeTo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiIFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nY291bnRyeS1uYW1lJ1xuICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNvdW50cnkgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIGNvdW50cnk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlJcIj5CcmF6aWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVUFcIj5Va3JhaW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTXCI+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5VcGxvYWQgYSBmaWxlOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZmlsZSA9IHJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+R2VuZGVyOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyTWFsZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuZ2VuZGVyID0gcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz4gPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJNYWxlXCI+TWFsZTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiIFxuICAgICAgICAgICAgICAgIGlkPVwiZ2VuZGVyRmVtYWxlXCJcbiAgICAgICAgICAgICAgICByZWY9e3IgPT4gdGhpcy5nZW5kZXIgPSByfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPiA8bGFiZWwgaHRtbEZvcj1cImdlbmRlckZlbWFsZVwiPkZlbWFsZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkRvIHlvdSBoYXZlIGEgcG9ydGZvbGlvOjwvc3Ryb25nPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ5ZXNcIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5ZZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9cIlxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMuY2hlY2tib3ggPSByfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Obzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1heWJlXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17ciA9PiB0aGlzLmNoZWNrYm94ID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWF5YmU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5SZXN1bWU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlc3VtZVwiIFxuICAgICAgICAgICAgICAgICAgcmVmPXtyID0+IHRoaXMucmVzdW1lID0gcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtdmVyc2lvblwiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFja2FnZS12ZXJzaW9uXCI+XG4gICAgICAgICAgICAgICAgPGxpPntPY3RhZm9ybVBrZy5hbGlhc30ge2B2JHtPY3RhZm9ybVBrZy52ZXJzaW9ufWB9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e09jdGFmb3JtQWRkUGtnLmFsaWFzfSB7YHYke09jdGFmb3JtQWRkUGtnLnZlcnNpb259YH08L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5WYWxpZGF0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minchecked = exports.valueNotEquals = exports.required = exports.number = exports.maxsize = exports.minlength = exports.maxlength = exports.letter = exports.extension = exports.email = undefined;

var _email = __webpack_require__(27);

var _email2 = _interopRequireDefault(_email);

var _extension = __webpack_require__(28);

var _extension2 = _interopRequireDefault(_extension);

var _letter = __webpack_require__(29);

var _letter2 = _interopRequireDefault(_letter);

var _maxlength = __webpack_require__(30);

var _maxlength2 = _interopRequireDefault(_maxlength);

var _minlength = __webpack_require__(31);

var _minlength2 = _interopRequireDefault(_minlength);

var _maxsize = __webpack_require__(32);

var _maxsize2 = _interopRequireDefault(_maxsize);

var _number = __webpack_require__(33);

var _number2 = _interopRequireDefault(_number);

var _required = __webpack_require__(34);

var _required2 = _interopRequireDefault(_required);

var _valueNotEquals = __webpack_require__(35);

var _valueNotEquals2 = _interopRequireDefault(_valueNotEquals);

var _minchecked = __webpack_require__(36);

var _minchecked2 = _interopRequireDefault(_minchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.email = _email2.default;
exports.extension = _extension2.default;
exports.letter = _letter2.default;
exports.maxlength = _maxlength2.default;
exports.minlength = _minlength2.default;
exports.maxsize = _maxsize2.default;
exports.number = _number2.default;
exports.required = _required2.default;
exports.valueNotEquals = _valueNotEquals2.default;
exports.minchecked = _minchecked2.default;
exports.default = [_email2.default, _extension2.default, _letter2.default, _maxlength2.default, _minlength2.default, _maxsize2.default, _number2.default, _required2.default, _valueNotEquals2.default, _minchecked2.default];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'email',
  message: 'Please enter a valid email',
  fn: function fn(value) {
    return (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value) || false
    );
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'letter',
  message: 'Please enter only letters',
  fn: function fn(value) {
    return (/^[a-zA-Z]+$/.test(value)
    );
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'maxlength',
  message: 'Please enter no more than {0} characters',
  fn: function fn(value, element, param) {
    return value.length <= param;
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'minlength',
  message: 'Please enter at least {0} characters',
  fn: function fn(value, element, param) {
    return value.length >= param;
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'number',
  message: 'Please enter a valid number',
  fn: function fn(value) {
    return (/^\d+$/g.test(value)
    );
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'valueNotEquals',
  message: 'Value must be not equal to {0}',
  fn: function fn(value, element, param) {
    return param !== value;
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
/* 37 */
/***/ (function(module, exports) {

module.exports = {"name":"octaform-additional","alias":"Octaform Additional","version":"1.0.13","description":"Octaform Additional Validation - Presets validation to use with Octaform validate, this package contains validations such as email, extension, minlength, and others","main":"index.js","homepage":"https://github.com/octaform/octaform#readme","author":"Christian Fortes","license":"MIT","engines":{"node":">=4.0.0"},"keywords":["form","forms","formjs","form validation","validation","validations","react","angular","vue","javascript","vanilla","additional","additional validations"],"scripts":{"prepublish":"npm run build:prod","npm-publish":"npm publish dist --dry-run","start":"webpack --watch","test":"jest -c test/jest/config.dev.json --watchAll","build:prod":"jest -c test/jest/config.prod.json && npm run clean && npm run webpack -p --progress","build:dev":"jest -c test/jest/config.prod.json && npm run clean && npm run webpack","clean":"rimraf dist","webpack":"node_modules/.bin/webpack"},"repository":{"type":"git","url":"git+https://github.com/octaform/octaform-additional.git"},"bugs":{"url":"https://github.com/octaform/octaform-additional/issues"},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^8.2.2","babel-jest":"^22.4.3","babel-loader":"^7.1.3","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-es2015":"^6.24.1","circular-dependency-plugin":"^4.4.0","copy-webpack-plugin":"^4.6.0","eslint":"^4.18.2","eslint-config-airbnb":"^16.1.0","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jest":"^21.15.0","eslint-plugin-jsx-a11y":"^6.0.3","generate-json-webpack-plugin":"^0.3.1","glob":"^7.1.2","jest":"^22.4.3","rimraf":"^2.6.2","webpack":"^3.11.0","webpack-cli":"^2.0.9"}}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Validate = __webpack_require__(39);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rules = __webpack_require__(40);

var _Rules2 = _interopRequireDefault(_Rules);

var _helpers = __webpack_require__(2);

var _helpers2 = _interopRequireDefault(_helpers);

var _actions = __webpack_require__(7);

var _entries = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validate = {
  getAll: _actions.ValidateActions.getAll,
  apply: function apply() {
    var fieldMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = [];

    Object.keys(fieldMap).forEach(function (selector) {
      var fieldRulesMapper = fieldMap[selector];

      var fieldRulesEntryType = Object.assign({}, _helpers2.default.types.isString(fieldRulesMapper) && _entries.entryType.field.string(fieldRulesMapper), _helpers2.default.types.isObject(fieldRulesMapper) && _entries.entryType.field.object(fieldRulesMapper));

      if (!!Object.keys(fieldRulesEntryType).length) {
        var element = (0, _helpers.dom)(selector);
        _actions.MessageActions.setCustomFieldMsg(selector, fieldRulesEntryType.messages);

        if (!element.length) {
          _actions.ErrorActions.set('field', selector);
        }

        var fieldValue = fieldRulesEntryType.value || element.length && element[element.length - 1].value || '';

        var fieldRules = _helpers2.default.types.isArray(fieldRulesEntryType.rules) && _entries.entryType.rules.array(fieldRulesEntryType.rules) || _helpers2.default.types.isObject(fieldRulesEntryType.rules) && fieldRulesEntryType.rules || {};

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
        _actions.ErrorActions.set('entry', selector);
      }
    });

    Validate.isValid = !errors.length;

    return errors;
  }
};

exports.default = Validate;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _actions = __webpack_require__(7);

var _dom = __webpack_require__(13);

var _dom2 = _interopRequireDefault(_dom);

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
          var isValid = validate(field.value, field.element, params, _dom2.default);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGES = exports.PATTERNS = undefined;

var _patterns = __webpack_require__(10);

var _patterns2 = _interopRequireDefault(_patterns);

var _messages = __webpack_require__(11);

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PATTERNS = _patterns2.default;
exports.MESSAGES = _messages2.default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getNestedObject = function getNestedObject(obj, dotSeparatedKeys) {
  if ((arguments.length <= 2 ? 0 : arguments.length - 2) > 1 && typeof dotSeparatedKeys !== 'string') return undefined;
  if (typeof obj !== 'undefined' && typeof dotSeparatedKeys === 'string') {
    var pathArr = dotSeparatedKeys.split('.');
    pathArr.forEach(function (key, idx, arr) {
      if (typeof key === 'string' && key.includes('[')) {
        try {
          var pos = /\[([^)]+)\]/.exec(key)[1];
          var posLen = pos.length;
          arr.splice(idx + 1, 0, Number(pos));
          arr[idx] = key.slice(0, -2 - posLen);
        } catch (e) {
          console.error(e);
        }
      }
    });
    obj = pathArr.reduce(function (o, key) {
      return o && o[key] !== 'undefined' ? o[key] : undefined;
    }, obj);
  }
  return obj;
};

var getSchemaMatch = function getSchemaMatch(obj, objFromSchema) {
  var result = false;
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    for (var i = 0; i < obj.length; i += 1) {
      if (!getSchemaMatch(obj[i], objFromSchema[i])) {
        result = false;
        break;
      }
      result = true;
    }
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (var key in obj) {
      if (!getSchemaMatch(obj[key], objFromSchema[key])) {
        result = false;
        break;
      }
      result = true;
    }
  } else {
    return (typeof objFromSchema === 'undefined' ? 'undefined' : _typeof(objFromSchema)) === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
  }
  return result;
};

var buildSchema = function buildSchema(schemaObject) {
  if (Object.prototype.toString.call(schemaObject) === '[object Array]') {
    schemaObject.forEach(function (subObj) {
      return buildSchema(subObj);
    });
  } else if (Object.prototype.toString.call(schemaObject) === '[object Object]') {
    Object.keys(schemaObject).forEach(function (subObj) {
      return buildSchema(schemaObject[subObj]);
    });
  } else {
    return typeof schemaObject === 'undefined' ? 'undefined' : _typeof(schemaObject);
  }
  return schemaObject;
};

var convertSchemaAndGetMatch = function convertSchemaAndGetMatch(obj, schemaObject) {
  var objectFromSchema = buildSchema(schemaObject);
  if (getSchemaMatch(obj, objectFromSchema)) {
    return obj;
  }
  return -1;
};

var get = function get(obj, nestedKeys) {
  var input = obj;

  if (nestedKeys) {
    if (typeof nestedKeys === 'string') {
      input = getNestedObject(input, nestedKeys);
    } else {
      var checkSchema = convertSchemaAndGetMatch(input, nestedKeys);
      input = checkSchema !== -1 ? checkSchema : obj;
    }
  }

  return input;
};

exports.default = get;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Types = {
  is: function is(value) {
    return value && Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1];
  },
  isString: function isString(value) {
    return value && Types.is(value) === 'String';
  },
  isObject: function isObject(value) {
    return Types.is(value) === 'Object';
  },
  isNumber: function isNumber(value) {
    return Types.is(value) === 'Number';
  },
  isFunction: function isFunction(value) {
    return Types.is(value) === 'Function';
  },
  isBoolean: function isBoolean(value) {
    return Types.is(value) === 'Boolean';
  },
  isArray: function isArray(value) {
    return value && Array.isArray(value);
  }
};

exports.default = Types;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ErrorActions = __webpack_require__(8);

var _ErrorActions2 = _interopRequireDefault(_ErrorActions);

var _MessageActions = __webpack_require__(3);

var _MessageActions2 = _interopRequireDefault(_MessageActions);

var _helpers = __webpack_require__(2);

var _helpers2 = _interopRequireDefault(_helpers);

var _states = __webpack_require__(14);

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
    if (_helpers2.default.types.isArray(listOfValidations)) {
      listOfValidations.forEach(function (_ref) {
        var name = _ref.name,
            fn = _ref.fn,
            message = _ref.message;

        var hasParams = _helpers2.default.types.isString(name) && _helpers2.default.types.isFunction(fn) && _helpers2.default.types.isString(message);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entryType = undefined;

var _StringEntry = __webpack_require__(46);

var _StringEntry2 = _interopRequireDefault(_StringEntry);

var _ObjectEntry = __webpack_require__(47);

var _ObjectEntry2 = _interopRequireDefault(_ObjectEntry);

var _ArrayEntry = __webpack_require__(48);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paramsUtils = __webpack_require__(1);

var _paramsUtils2 = _interopRequireDefault(_paramsUtils);

var _rule = __webpack_require__(15);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extractRulesFromString
var StringEntry = function StringEntry(string) {
  var rules = _paramsUtils2.default.get.shortStringValidation(string);
  return _rule2.default.get({
    messages: {},
    rules: rules
  });
};

exports.default = StringEntry;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rule = __webpack_require__(15);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// extractRulesFromString
var ObjectEntry = function ObjectEntry(object) {
  return _rule2.default.get(object);
};

exports.default = ObjectEntry;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paramsUtils = __webpack_require__(1);

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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  firstName: {
    rules: {
      required: true,
      minlength: 4,
      letter: true
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
      extension: ['png', 'jpg'],
      maxsize: 500000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcC9WYWxpZGF0aW9uTWFwLmpzIl0sIm5hbWVzIjpbImZpcnN0TmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJsZXR0ZXIiLCJtZXNzYWdlcyIsImxhc3ROYW1lIiwiZW1haWwiLCJjb3VudHJ5IiwidmFsdWVOb3RFcXVhbHMiLCJmaWxlIiwiZXh0ZW5zaW9uIiwibWF4c2l6ZSIsInJlc3VtZSIsImdlbmRlciIsImNoZWNrYm94IiwibWluY2hlY2tlZCJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNiQSxhQUFXO0FBQ1RDLFdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMQyxpQkFBVyxDQUZOO0FBR0xDLGNBQVE7QUFISCxLQURFO0FBTVRDLGNBQVU7QUFDUkgsZ0JBQVU7QUFERjtBQU5ELEdBREU7QUFXYkksWUFBVTtBQUNSTCxXQUFPLENBQUMsVUFBRCxFQUFhLGFBQWI7QUFEQyxHQVhHO0FBY2JNLFNBQU8sT0FkTTtBQWViQyxXQUFTO0FBQ1BQLFdBQU87QUFDTEMsZ0JBQVUsSUFETDtBQUVMTyxzQkFBZ0I7QUFGWDtBQURBLEdBZkk7QUFxQmJDLFFBQU07QUFDSlQsV0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxTLGlCQUFXLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FGTjtBQUdMQyxlQUFTO0FBSEo7QUFESCxHQXJCTztBQTRCYkMsVUFBUSxVQTVCSztBQTZCYkMsVUFBUSxVQTdCSztBQThCYkMsWUFBVTtBQUNSZCxXQUFPO0FBQ0xDLGdCQUFVLElBREw7QUFFTGMsa0JBQVk7QUFGUDtBQURDO0FBOUJHLENBQWYiLCJmaWxlIjoiVmFsaWRhdGlvbk1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL29jdGFmb3JtLWRlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0TmFtZToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbmxlbmd0aDogNCxcbiAgICAgIGxldHRlcjogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIHJlcXVpcmVkOiAnRmlyc3QgTmFtZSBpcyByZXF1aXJlZCcsXG4gICAgfSxcbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICBydWxlczogWydyZXF1aXJlZCcsICdtaW5sZW5ndGg6MyddXG4gIH0sXG4gIGVtYWlsOiAnZW1haWwnLFxuICBjb3VudHJ5OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsdWVOb3RFcXVhbHM6ICdCUicsXG4gICAgfSxcbiAgfSxcbiAgZmlsZToge1xuICAgIHJ1bGVzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGV4dGVuc2lvbjogWydwbmcnLCAnanBnJ10sXG4gICAgICBtYXhzaXplOiA1MDAwMDBcbiAgICB9LFxuICB9LFxuICByZXN1bWU6ICdyZXF1aXJlZCcsXG4gIGdlbmRlcjogJ3JlcXVpcmVkJyxcbiAgY2hlY2tib3g6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5jaGVja2VkOiAyXG4gICAgfVxuICB9LFxufTtcbiJdfQ==

/***/ })
],[16]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvTWVzc2FnZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9FcnJvckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1JlcGxhY2VBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3N0YXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL21vZGVscy9ydWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvZXh0ZW5zaW9uLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heGxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWlubGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhzaXplLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy92YWx1ZU5vdEVxdWFscy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvbWluY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9wYWNrYWdlLmpzb24iLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2hlbHBlcnMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vb2N0YWZvcm0vc3JjL2VudHJpZXMvQXJyYXlFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL1ZhbGlkYXRpb25NYXAuanMiXSwibmFtZXMiOlsiZ2V0Iiwic2hvcnRTdHJpbmdWYWxpZGF0aW9uIiwic3RyaW5nIiwibWFwIiwiUEFUVEVSTlMiLCJTSE9SVF9SVUxFIiwiZXhlYyIsInNwcmVhZExpc3QiLCJNRVNTQUdFIiwiTElTVCIsInR5cGVzIiwiZG9tIiwiTWVzc2FnZUFjdGlvbnMiLCJnZXRBbGwiLCJTdGF0ZSIsIm1lc3NhZ2VzIiwic2V0IiwibmFtZSIsIm1zZyIsInZhbGlkYXRvciIsInNldEN1c3RvbUZpZWxkTXNnIiwiZmllbGQiLCJ1c2VyTWVzc2FnZXMiLCJmaWVsZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXlzIiwibGVuZ3RoIiwiRXJyb3JBY3Rpb25zIiwiUmVwbGFjZUFjdGlvbnMiLCJWYWxpZGF0ZUFjdGlvbnMiLCJ0eXBlIiwiYXJncyIsImVycm9yIiwibWVzc2FnZSIsImNvcmUiLCJFcnJvciIsInBhcmFtcyIsIm1hdGNoIiwiRVJST1IiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiaW5kZXgiLCJyZXBsYWNlIiwidmFsaWRhdGlvbiIsInNlYXJjaEl0ZW1zIiwiUEFSQU1TIiwibGlzdFBhcmFtcyIsInBhcmFtc1V0aWxzIiwidGV4dCIsImpvaW4iLCJwdXJlS2V5IiwiQlJBQ0VTIiwiSGVscGVycyIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0Jvb2xlYW4iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJ0cnVlIiwiU0VMRUNUT1IiLCJDT1JFIiwiUGFja2FnZSIsInJlcG9zaXRvcnkiLCJ1cmwiLCJhZGQiLCJ1bmRlZmluZWQiLCJlbnRyeSIsInNlbGVjdG9yIiwiZWxlbUJ5TmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJlbGVtQnlDbGFzcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlbGVtQnlJZCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbUJ5QWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJ2YWxpZGF0aW9ucyIsIk1FU1NBR0VTIiwicnVsZXMiLCJ2YWx1ZSIsImVtYWlsIiwiZXh0ZW5zaW9uIiwibGV0dGVyIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwibWF4c2l6ZSIsIm51bWJlciIsInJlcXVpcmVkIiwidmFsdWVOb3RFcXVhbHMiLCJtaW5jaGVja2VkIiwiZm4iLCJ0ZXN0IiwiZmlsZSIsImZpbGVzIiwic29tZSIsIml0ZW0iLCJmaWxlVHlwZSIsInNwbGl0IiwiaW5jbHVkZXMiLCJwdXNoIiwicGFyYW0iLCJzaXplIiwiZWxlbSIsImNoZWNrZWQiLCJxdGRDaGVja2VkIiwib3B0aW9uIiwiT2N0YWZvcm0iLCJWYWxpZGF0ZSIsInZhbGlkYXRlQWxsIiwiYXBwbHkiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmllbGRNYXAiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZmllbGRSdWxlc01hcHBlciIsImZpZWxkUnVsZXNFbnRyeVR5cGUiLCJlbnRyeVR5cGUiLCJvYmplY3QiLCJmaWVsZFZhbHVlIiwiZmllbGRSdWxlcyIsImFycmF5IiwidmFsaWQiLCJSdWxlcyIsImlzVmFsaWQiLCJlbnRyaWVzIiwia2V5IiwidmFsaWRhdGUiLCJ1c2VyTWVzc2FnZSIsInJlc3VsdCIsImdldE5lc3RlZE9iamVjdCIsIm9iaiIsImRvdFNlcGFyYXRlZEtleXMiLCJwYXRoQXJyIiwiaWR4IiwiYXJyIiwicG9zIiwicG9zTGVuIiwic3BsaWNlIiwiTnVtYmVyIiwic2xpY2UiLCJlIiwiY29uc29sZSIsIm8iLCJnZXRTY2hlbWFNYXRjaCIsIm9iakZyb21TY2hlbWEiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpIiwiYnVpbGRTY2hlbWEiLCJzY2hlbWFPYmplY3QiLCJzdWJPYmoiLCJjb252ZXJ0U2NoZW1hQW5kR2V0TWF0Y2giLCJvYmplY3RGcm9tU2NoZW1hIiwibmVzdGVkS2V5cyIsImlucHV0IiwiY2hlY2tTY2hlbWEiLCJUeXBlcyIsImlzIiwiaXNGdW5jdGlvbiIsImxpc3RPZlZhbGlkYXRpb25zIiwiaGFzUGFyYW1zIiwiT2JqZWN0RW50cnkiLCJTdHJpbmdFbnRyeSIsIkFycmF5RW50cnkiLCJydWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZTtBQUNiQSxPQUFLO0FBQ0hDLHlCQURHLGlDQUNtQkMsTUFEbkIsRUFDMkI7QUFBRTtBQUM5QixVQUFNQyxNQUFNQyxvQkFBU0MsVUFBVCxDQUFvQkMsSUFBcEIsQ0FBeUJKLE1BQXpCLENBQVo7O0FBRUEsYUFDRUMsMEJBQ0tBLElBQUksQ0FBSixDQURMLEVBQ2NBLElBQUksQ0FBSixDQURkLHdCQUVLRCxNQUZMLEVBRWMsSUFGZCxDQURGO0FBS0QsS0FURTtBQVVISyxjQVZHLHNCQVVRTCxNQVZSLEVBVWdCO0FBQUU7QUFDbkIsYUFBT0Usb0JBQVNJLE9BQVQsQ0FBaUJDLElBQWpCLENBQXNCSCxJQUF0QixDQUEyQkosTUFBM0IsQ0FBUDtBQUNEO0FBWkU7QUFEUSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBR0VRLEssR0FBQUEsZTtRQUNBQyxHLEdBQUFBLGE7UUFDQVgsRyxHQUFBQSxhO2tCQUdhO0FBQ2JVLHdCQURhO0FBRWJDLG9CQUZhO0FBR2JYO0FBSGEsQzs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7Ozs7OztBQUVBLElBQU1ZLGlCQUFpQjtBQUNyQkMsUUFEcUIsb0JBQ1o7QUFDUCxXQUFPQyxpQkFBTUMsUUFBYjtBQUNELEdBSG9CO0FBSXJCQyxLQUpxQixlQUlqQkMsSUFKaUIsRUFJWEMsR0FKVyxFQUlOO0FBQ2JKLHFCQUFNQyxRQUFOLENBQWVJLFNBQWYsQ0FBeUJGLElBQXpCLElBQWlDQyxHQUFqQztBQUNELEdBTm9CO0FBT3JCRSxtQkFQcUIsNkJBT0hD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QVRURVJOUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiB7XG4gICAgc2hvcnRTdHJpbmdWYWxpZGF0aW9uKHN0cmluZykgeyAvLyBtaW46MyAtIFNob3J0IHZhbGlkYXRpb25cbiAgICAgIGNvbnN0IG1hcCA9IFBBVFRFUk5TLlNIT1JUX1JVTEUuZXhlYyhzdHJpbmcpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBtYXAgP1xuICAgICAgICAgIHsgW21hcFsxXV06IG1hcFsyXSB9IDpcbiAgICAgICAgICB7IFtzdHJpbmddOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBzcHJlYWRMaXN0KHN0cmluZykgeyAvLyAuLi57fSAtIFRvIGFycmF5IHBhcmFtc1xuICAgICAgcmV0dXJuIFBBVFRFUk5TLk1FU1NBR0UuTElTVC5leGVjKHN0cmluZyk7XG4gICAgfSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3V0aWxzL3BhcmFtc1V0aWxzLmpzIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZ2V0IGZyb20gJy4vZ2V0JztcbmltcG9ydCB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHtcbiAgdHlwZXMsXG4gIGRvbSxcbiAgZ2V0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlcyxcbiAgZG9tLFxuICBnZXQsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2luZGV4LmpzIiwiaW1wb3J0IFN0YXRlIGZyb20gJy4uL3N0YXRlcyc7XG5cbmNvbnN0IE1lc3NhZ2VBY3Rpb25zID0ge1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIFN0YXRlLm1lc3NhZ2VzO1xuICB9LFxuICBzZXQobmFtZSwgbXNnKSB7XG4gICAgU3RhdGUubWVzc2FnZXMudmFsaWRhdG9yW25hbWVdID0gbXNnO1xuICB9LFxuICBzZXRDdXN0b21GaWVsZE1zZyhmaWVsZCwgdXNlck1lc3NhZ2VzKSB7XG4gICAgU3RhdGUubWVzc2FnZXMuZmllbGRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIFN0YXRlLm1lc3NhZ2VzLmZpZWxkcyxcbiAgICAgICghIU9iamVjdC5rZXlzKHVzZXJNZXNzYWdlcykubGVuZ3RoICYmIHsgW2ZpZWxkXTogdXNlck1lc3NhZ2VzIH0pLFxuICAgICk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9NZXNzYWdlQWN0aW9ucy5qcyIsImltcG9ydCBFcnJvckFjdGlvbnMgZnJvbSAnLi9FcnJvckFjdGlvbnMnO1xuaW1wb3J0IFJlcGxhY2VBY3Rpb25zIGZyb20gJy4vUmVwbGFjZUFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuaW1wb3J0IFZhbGlkYXRlQWN0aW9ucyBmcm9tICcuL1ZhbGlkYXRlQWN0aW9ucyc7XG5cbmV4cG9ydCB7XG4gIEVycm9yQWN0aW9ucyxcbiAgUmVwbGFjZUFjdGlvbnMsXG4gIE1lc3NhZ2VBY3Rpb25zLFxuICBWYWxpZGF0ZUFjdGlvbnMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlcGxhY2VBY3Rpb25zIGZyb20gJy4vUmVwbGFjZUFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuXG5jb25zdCBFcnJvckFjdGlvbnMgPSB7XG4gIHNldCh0eXBlLCAuLi5hcmdzKXtcbiAgICBjb25zdCBtZXNzYWdlcyA9IE1lc3NhZ2VBY3Rpb25zLmdldEFsbCgpO1xuICAgIGNvbnN0IGVycm9yID0gUmVwbGFjZUFjdGlvbnMubWVzc2FnZS5lcnJvcihcbiAgICAgIG1lc3NhZ2VzLmNvcmVbdHlwZV0sXG4gICAgICAuLi5hcmdzLFxuICAgICk7XG4gICAgXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQWN0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvYWN0aW9ucy9FcnJvckFjdGlvbnMuanMiLCJpbXBvcnQgUEFUVEVSTlMgZnJvbSAnLi4vY29uc3RhbnRzL3BhdHRlcm5zJztcbmltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgUmVwbGFjZUFjdGlvbnMgPSB7XG4gIG1lc3NhZ2U6IHtcbiAgICBlcnJvcihtc2cgPSAnJywgLi4uYXJncykge1xuICAgICAgY29uc3QgcGFyYW1zID0gKG1zZy5tYXRjaChQQVRURVJOUy5NRVNTQUdFLkVSUk9SKSB8fCBbXSk7XG4gICAgICByZXR1cm4gcGFyYW1zLnJlZHVjZSgoYWNjLCBjdXJyZW50LCBpbmRleCkgPT4gYWNjLnJlcGxhY2UoY3VycmVudCwgYXJnc1tpbmRleF0pLCBtc2cpO1xuICAgIH0sXG4gICAgdmFsaWRhdGlvbihtc2csIHBhcmFtcyl7XG4gICAgICBjb25zdCBzZWFyY2hJdGVtcyA9IG1zZy5tYXRjaChQQVRURVJOUy5NRVNTQUdFLlBBUkFNUyk7XG4gICAgICBjb25zdCBsaXN0UGFyYW1zID0gcGFyYW1zVXRpbHMuZ2V0LnNwcmVhZExpc3QobXNnKTtcblxuICAgICAgaWYgKGxpc3RQYXJhbXMpe1xuICAgICAgICBjb25zdCB0ZXh0ID0gcGFyYW1zLmpvaW4obGlzdFBhcmFtc1sxXSB8fCAnLCAnKTtcbiAgICAgICAgbXNnID0gbXNnLnJlcGxhY2UobGlzdFBhcmFtc1swXSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWFyY2hJdGVtcykge1xuICAgICAgICByZXR1cm4gc2VhcmNoSXRlbXMucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwdXJlS2V5ID0gY3VycmVudC5yZXBsYWNlKFBBVFRFUk5TLk1FU1NBR0UuQlJBQ0VTLCAnJyk7XG5cbiAgICAgICAgICBjb25zdCBtYXAgPSB7XG4gICAgICAgICAgICBbSGVscGVycy50eXBlcy5pc1N0cmluZyhwYXJhbXMpIHx8IEhlbHBlcnMudHlwZXMuaXNOdW1iZXIocGFyYW1zKSB8fCBIZWxwZXJzLnR5cGVzLmlzQm9vbGVhbihwYXJhbXMpXTogcGFyYW1zLFxuICAgICAgICAgICAgW0hlbHBlcnMudHlwZXMuaXNBcnJheShwYXJhbXMpXTogcGFyYW1zW3B1cmVLZXldLFxuICAgICAgICAgICAgW0hlbHBlcnMudHlwZXMuaXNPYmplY3QocGFyYW1zKV06IEhlbHBlcnMuZ2V0KHBhcmFtcywgcHVyZUtleSwgY3VycmVudCksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBhY2MucmVwbGFjZShjdXJyZW50LCAobWFwLnRydWUgfHwgJycpKTtcbiAgICAgICAgfSwgbXNnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1zZztcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbGFjZUFjdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2FjdGlvbnMvUmVwbGFjZUFjdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFTEVDVE9SOiAvKFxcdys6XFxbLio/XFxdKXwoXFx3KzpcXCguKj9cXCkpfChcXHcrKS9nLFxuICBTSE9SVF9SVUxFOiAvXihcXHcrKTooXFx3KykkL2csXG4gIE1FU1NBR0U6IHtcbiAgICBQQVJBTVM6IC9cXHsoLio/KVxcfS9nLFxuICAgIEJSQUNFUzogL1xce3xcXH0vZyxcbiAgICBFUlJPUjogLyNcXHsoLio/KVxcfS9nLFxuICAgIExJU1Q6IC9cXC5cXC5cXC5cXHsoLio/KVxcfS9nLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL3BhdHRlcm5zLmpzIiwiaW1wb3J0IFBhY2thZ2UgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDT1JFOiB7XG4gICAgbXNnOiBgVGhlIHZhbGlkYXRpb24gI3ttZXRob2R9IGhhcyBub3QgYmVlbiBkZWZpbmVkIGEgbWVzc2FnZSwgcGxlYXNlIGNoZWNrIG91dCAke1BhY2thZ2UucmVwb3NpdG9yeS51cmx9I3ZhbGlkYXRvci1tZXRob2Qtb2N0YWZvcm12YWxpZGF0b3JhZGRgLFxuICAgIGZpZWxkOiBgRmllbGQgI3tzZWxlY3Rvcn0gd2FzIG5vdCBmb3VuZCwgcGxlYXNlIGNoZWNrIG91dCAke1BhY2thZ2UucmVwb3NpdG9yeS51cmx9I2ZpZWxkLW5hbWUtcmVxdWlyZWRgLFxuICAgIGFkZDogYEFkZCBtZXRob2QgYWNjZXB0IG9ubHkgYSBsaXN0IG9mIG9iamVjdCwgcGxlYXNlIGNoZWNrIG91dCAke1BhY2thZ2UucmVwb3NpdG9yeS51cmx9I3ZhbGlkYXRvci1tZXRob2Qtb2N0YWZvcm12YWxpZGF0b3JhZGRgLFxuICAgIHVuZGVmaW5lZDogYFRoZSB2YWxpZGF0aW9uICN7bWV0aG9kfSBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGNoZWNrIG91dCAke1BhY2thZ2UucmVwb3NpdG9yeS51cmx9I3ZhbGlkYXRvci1tZXRob2Qtb2N0YWZvcm12YWxpZGF0b3JhZGRgLFxuICAgIGVudHJ5OiBgVGhlIGVudHJ5cG9pbnQgI3tydWxlc30gaGFzIGFuIGludmFsaWQgZm9ybWF0LCBwbGVhc2UgY2hlY2sgb3V0ICR7UGFja2FnZS5yZXBvc2l0b3J5LnVybH0jdmFsaWRhdGlvbi1zY2hlbWFgLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvY29uc3RhbnRzL21lc3NhZ2VzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJvY3RhZm9ybVwiLFwiYWxpYXNcIjpcIk9jdGFmb3JtXCIsXCJ2ZXJzaW9uXCI6XCIxLjEuMVwiLFwiZGVzY3JpcHRpb25cIjpcIk9jdGFmb3JtIGhlbHBzIGRldmVsb3BlcnMgdmFsaWRhdGUgZm9ybXMgaW4gYW4gZWFzeSB3YXksIGJlaW5nIGNvbXBsZXRlbHkgYWdub3N0aWMgdG8gZnJhbWV3b3JrLlwiLFwibWFpblwiOlwiaW5kZXguanNcIixcImhvbWVwYWdlXCI6XCJodHRwczovL2dpdGh1Yi5jb20vb2N0YWZvcm0vb2N0YWZvcm0jcmVhZG1lXCIsXCJhdXRob3JcIjpcIkNocmlzdGlhbiBGb3J0ZXNcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiYnVnc1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL29jdGFmb3JtL29jdGFmb3JtL2lzc3Vlc1wiLFwiZW5naW5lc1wiOntcIm5vZGVcIjpcIj49NC4wLjBcIn0sXCJrZXl3b3Jkc1wiOltcImZvcm1cIixcImZvcm1zXCIsXCJmb3JtanNcIixcImZvcm0gdmFsaWRhdGlvblwiLFwidmFsaWRhdGlvblwiLFwicmVhY3RcIixcImFuZ3VsYXJcIixcInZ1ZVwiLFwiamF2YXNjcmlwdFwiLFwidmFuaWxsYVwiXSxcInNjcmlwdHNcIjp7XCJucG0tcHVibGlzaFwiOlwibnBtIHJ1biBidWlsZDpwcm9kICYmIG5wbSBwdWJsaXNoIGRpc3RcIixcInN0YXJ0XCI6XCJOT0RFX0VOVj1kZXZlbG9wbWVudCB3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgdG9vbHMvY29uZmlnLmRldi5qc1wiLFwidGVzdFwiOlwiamVzdCAtYyB0ZXN0L2plc3QvY29uZmlnLmRldi5qc29uIC0td2F0Y2hBbGxcIixcImJ1aWxkOnByb2RcIjpcImplc3QgLWMgdGVzdC9qZXN0L2NvbmZpZy5wcm9kLmpzb24gJiYgbnBtIHJ1biBjbGVhbiAmJiBOT0RFX0VOVj1wcm9kdWN0aW9uIHdlYnBhY2sgLXAgLS1wcm9ncmVzcyAtLWNvbmZpZyB0b29scy9jb25maWcucHJvZC5qc1wiLFwiYnVpbGQ6ZGV2XCI6XCJqZXN0IC1jIHRlc3QvamVzdC9jb25maWcucHJvZC5qc29uICYmIG5wbSBydW4gY2xlYW4gJiYgTk9ERV9FTlY9ZGV2ZWxvcG1lbnQgd2VicGFjayAtLWNvbmZpZyB0b29scy9jb25maWcuZGV2LmpzXCIsXCJjbGVhblwiOlwicmltcmFmIGRpc3RcIixcIndlYnBhY2tcIjpcIm5vZGVfbW9kdWxlcy8uYmluL3dlYnBhY2tcIn0sXCJyZXBvc2l0b3J5XCI6e1widHlwZVwiOlwiZ2l0XCIsXCJ1cmxcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9vY3RhZm9ybS9vY3RhZm9ybVwifSxcImRlcGVuZGVuY2llc1wiOnt9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiYmFiZWwtY2xpXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1lc2xpbnRcIjpcIl44LjIuMlwiLFwiYmFiZWwtamVzdFwiOlwiXjIyLjQuM1wiLFwiYmFiZWwtbG9hZGVyXCI6XCJeNy4xLjNcIixcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6XCJeNi4yNC4xXCIsXCJjaXJjdWxhci1kZXBlbmRlbmN5LXBsdWdpblwiOlwiXjQuNC4wXCIsXCJjb3B5LXdlYnBhY2stcGx1Z2luXCI6XCJeNC41LjFcIixcImVzbGludFwiOlwiXjQuMTguMlwiLFwiZXNsaW50LWNvbmZpZy1haXJibmJcIjpcIl4xNi4xLjBcIixcImVzbGludC1sb2FkZXJcIjpcIl4yLjAuMFwiLFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjpcIl4yLjkuMFwiLFwiZXNsaW50LXBsdWdpbi1qZXN0XCI6XCJeMjEuMTUuMFwiLFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOlwiXjYuMC4zXCIsXCJnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luXCI6XCJeMC4zLjBcIixcImdsb2JcIjpcIl43LjEuMlwiLFwiamVzdFwiOlwiXjIyLjQuM1wiLFwianNkb21cIjpcIl4xMS43LjBcIixcInJpbXJhZlwiOlwiXjIuNi4yXCIsXCJ3ZWJwYWNrXCI6XCJeMy4xMS4wXCIsXCJ3ZWJwYWNrLWNsaVwiOlwiXjIuMC45XCIsXCJ3ZWJwYWNrLW1lcmdlXCI6XCJeNC4xLjJcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0vcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWxlbUJ5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHNlbGVjdG9yKTtcbiAgY29uc3QgZWxlbUJ5Q2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yKTtcbiAgY29uc3QgZWxlbUJ5SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gIGNvbnN0IGVsZW1CeUFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICBcbiAgY29uc3QgZWxlbWVudCA9IChcbiAgICAoKGVsZW1CeU5hbWUgJiYgZWxlbUJ5TmFtZS5sZW5ndGgpICYmIGVsZW1CeU5hbWUpIHx8XG4gICAgKChlbGVtQnlDbGFzcyAmJiBlbGVtQnlDbGFzcy5sZW5ndGgpICYmIGVsZW1CeUNsYXNzKSB8fFxuICAgIChlbGVtQnlJZCAmJiBbZWxlbUJ5SWRdKSB8fFxuICAgICgoZWxlbUJ5QWxsICYmIGVsZW1CeUFsbC5sZW5ndGgpICYmIGVsZW1CeUFsbClcbiAgKSB8fCBbXTtcbiAgXG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2RvbS5qcyIsImltcG9ydCBNRVNTQUdFUyBmcm9tICcuLi9jb25zdGFudHMvbWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRpb25zOiB7fSxcbiAgbWVzc2FnZXM6IHtcbiAgICBmaWVsZHM6IHt9LFxuICAgIGNvcmU6IE1FU1NBR0VTLkNPUkUsXG4gICAgdmFsaWRhdG9yOiB7fSxcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3N0YXRlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0KHsgcnVsZXMgPSB7fSwgbWVzc2FnZXMgPSB7fSwgdmFsdWUgfSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLihydWxlcyAmJiB7IHJ1bGVzIH0pLFxuICAgICAgLi4uKG1lc3NhZ2VzICYmIHsgbWVzc2FnZXMgfSksXG4gICAgICAuLi4odmFsdWUgJiYgeyB2YWx1ZSB9KSxcbiAgICB9O1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvbW9kZWxzL3J1bGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5SZWFjdERvbS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKU1pXRmpkQ0lzSWxKbFlXTjBSRzl0SWl3aVFYQndJaXdpY21WdVpHVnlJaXdpWkc5amRXMWxiblFpTENKblpYUkZiR1Z0Wlc1MFFubEpaQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVDBGQlQwRXNTMEZCVUN4TlFVRnJRaXhQUVVGc1FqdEJRVU5CTEU5QlFVOURMRkZCUVZBc1RVRkJjVUlzVjBGQmNrSTdRVUZEUVN4UFFVRlBMRzlDUVVGUU8wRkJRMEVzVDBGQlQwTXNSMEZCVUN4TlFVRm5RaXhyUWtGQmFFSTdPMEZCUlVGRUxGTkJRVk5GTEUxQlFWUXNRMEZEUlN4dlFrRkJReXhIUVVGRUxFOUJSRVlzUlVGRlJVTXNVMEZCVTBNc1kwRkJWQ3hEUVVGM1FpeE5RVUY0UWl4RFFVWkdJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5aFpHMXBiaTlFYjJOMWJXVnVkSE12VUhKdmFtVmpkSE12YjJOMFlXWnZjbTB0WkdWdGJ5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZENCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdVbVZoWTNSRWIyMGdabkp2YlNBbmNtVmhZM1F0Wkc5dEp6dGNibWx0Y0c5eWRDQW5MaTl6WTNOekwzTjBlV3hsY3k1elkzTnpKenRjYm1sdGNHOXlkQ0JCY0hBZ1puSnZiU0FuTGk5amIyMXdiMjVsYm5SekwwRndjQ2M3WEc1Y2JsSmxZV04wUkc5dExuSmxibVJsY2loY2JpQWdQRUZ3Y0NBdlBpd2dYRzRnSUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R5YjI5MEp5bGNiaWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uLy4uLy4uLy4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjJztcbmltcG9ydCBPY3RhZm9ybUFkZFBrZyBmcm9tICcuLi8uLi8uLi8uLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgT2N0YWZvcm0gZnJvbSAnLi4vLi4vLi4vLi4vb2N0YWZvcm0vc3JjJztcbmltcG9ydCBPY3RhZm9ybVBrZyBmcm9tICcuLi8uLi8uLi8uLi9vY3RhZm9ybS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IEVycm9ycyBmcm9tICcuLi9FcnJvcnMnO1xuaW1wb3J0IFZhbGlkYXRpb25NYXAgZnJvbSAnLi9WYWxpZGF0aW9uTWFwJztcblxudmFyIEFwcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBcHAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFwcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFzRXJyb3JzOiBbXVxuICAgIH07XG5cbiAgICBfdGhpcy5vY3RhZm9ybSA9IG5ldyBPY3RhZm9ybSgpO1xuICAgIF90aGlzLm9jdGFmb3JtLnZhbGlkYXRvci5hZGQoU2NoZW1hKTtcbiAgICBfdGhpcy5vblN1Ym1pdCA9IF90aGlzLm9uU3VibWl0LmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFzRmllbGRFcnJvciA9IF90aGlzLmhhc0ZpZWxkRXJyb3IuYmluZChfdGhpcyk7XG4gICAgX3RoaXMudmFsaWRhdGUgPSBfdGhpcy52YWxpZGF0ZS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogJ29uU3VibWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndmFsaWRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdmFsaWRhdGUgPSB0aGlzLm9jdGFmb3JtLnZhbGlkYXRlQWxsKFZhbGlkYXRpb25NYXApO1xuICAgICAgY29uc29sZS5sb2coJ1ZhbGlkYXRpb246OicsIHZhbGlkYXRlKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc0Vycm9yczogdmFsaWRhdGVcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYXNGaWVsZEVycm9yKHZhbGlkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc0ZpZWxkRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNGaWVsZEVycm9yKHZhbGlkYXRlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNsYXNzRXJyb3IgPSAnaW52YWxpZCc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzRXJyb3IpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzRXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShfdGhpczNbaXRlbS5maWVsZF0ubmFtZSk7XG4gICAgICAgIGlmIChlbGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBlbGVtLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzM1tpdGVtLmZpZWxkXS5jbGFzc0xpc3QuYWRkKGNsYXNzRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGhhc0Vycm9ycyA9IHRoaXMuc3RhdGUuaGFzRXJyb3JzO1xuXG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdjb250YWluZXInLCBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdCB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdoNCcsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNiBmaXJzdCcgfSxcbiAgICAgICAgICAgICAgICAnT2N0YWZvcm0gVmFsaWRhdGUgLSBEZW1vJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYgdGV4dC1yaWdodCBsYXN0JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vb2N0YWZvcm0vb2N0YWZvcm0nLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywgdGFyZ2V0OiAnX2JsYW5rJywgY2xhc3NOYW1lOiAnZ2l0aHViLWxpbmsnIH0sXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogJ2h0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2ltYWdlcy9tb2R1bGVzL2xvZ29zX3BhZ2UvR2l0SHViLU1hcmsucG5nJywgYWx0OiAnT2N0YWZvcm0gLSBHaXRodWInIH0pLFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAnR2l0aHViJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICEhaGFzRXJyb3JzLmxlbmd0aCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtMTInIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JzLCB7IGVycm9yczogaGFzRXJyb3JzIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdGaXJzdCBuYW1lOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2dpdmVuLW5hbWUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZmlyc3ROYW1lID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNicgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3Ryb25nJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICdMYXN0IG5hbWU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU6ICdmYW1pbHktbmFtZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5sYXN0TmFtZSA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3cnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC03JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0VtYWlsOidcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZW1haWwgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC01JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0NvdW50cnk6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogJ2NvdW50cnktbmFtZScsXG4gICAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuY291bnRyeSA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAnU2VsZWN0IGEgY291bnRyeSdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdCUicgfSxcbiAgICAgICAgICAgICAgICAgICdCcmF6aWwnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnVUEnIH0sXG4gICAgICAgICAgICAgICAgICAnVWtyYWluZSdcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdVUycgfSxcbiAgICAgICAgICAgICAgICAgICdVbml0ZWQgU3RhdGVzJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ1VwbG9hZCBhIGZpbGU6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZmlsZSA9IHI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02JyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzdHJvbmcnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgJ0dlbmRlcjonXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dlbmRlcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdtYWxlJyxcbiAgICAgICAgICAgICAgICBpZDogJ2dlbmRlck1hbGUnLFxuICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczQuZ2VuZGVyID0gcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGh0bWxGb3I6ICdnZW5kZXJNYWxlJyB9LFxuICAgICAgICAgICAgICAgICdNYWxlJ1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZW5kZXInLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmVtYWxlJyxcbiAgICAgICAgICAgICAgICBpZDogJ2dlbmRlckZlbWFsZScsXG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5nZW5kZXIgPSByO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgaHRtbEZvcjogJ2dlbmRlckZlbWFsZScgfSxcbiAgICAgICAgICAgICAgICAnRmVtYWxlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTYnIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRG8geW91IGhhdmUgYSBwb3J0Zm9saW86J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICd5ZXMnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LmNoZWNrYm94ID0gcjtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ1llcydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ25vJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja2JveCA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICdObydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ21heWJlJyxcbiAgICAgICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5jaGVja2JveCA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICdNYXliZSdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncm93JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29sLTEyJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgJ1Jlc3VtZTonXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXN1bWUnLFxuICAgICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlc3VtZSA9IHI7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3JvdycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbC02IGNvbC12ZXJzaW9uJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICd1bCcsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwYWNrYWdlLXZlcnNpb24nIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgT2N0YWZvcm1Qa2cuYWxpYXMsXG4gICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAndicgKyBPY3RhZm9ybVBrZy52ZXJzaW9uXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBPY3RhZm9ybUFkZFBrZy5hbGlhcyxcbiAgICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICAgICd2JyArIE9jdGFmb3JtQWRkUGtnLnZlcnNpb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdjb2wtNiBjb2wtYnV0dG9uJyB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnVmFsaWRhdGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcDtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMEZ3Y0M5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SlNaV0ZqZENJc0lrTnZiWEJ2Ym1WdWRDSXNJbE5qYUdWdFlTSXNJazlqZEdGbWIzSnRRV1JrVUd0bklpd2lUMk4wWVdadmNtMGlMQ0pQWTNSaFptOXliVkJyWnlJc0lrVnljbTl5Y3lJc0lsWmhiR2xrWVhScGIyNU5ZWEFpTENKQmNIQWlMQ0p3Y205d2N5SXNJbk4wWVhSbElpd2lhR0Z6UlhKeWIzSnpJaXdpYjJOMFlXWnZjbTBpTENKMllXeHBaR0YwYjNJaUxDSmhaR1FpTENKdmJsTjFZbTFwZENJc0ltSnBibVFpTENKdmJrTm9ZVzVuWlNJc0ltaGhjMFpwWld4a1JYSnliM0lpTENKMllXeHBaR0YwWlNJc0ltVWlMQ0p3Y21WMlpXNTBSR1ZtWVhWc2RDSXNJblpoYkdsa1lYUmxRV3hzSWl3aVkyOXVjMjlzWlNJc0lteHZaeUlzSW5ObGRGTjBZWFJsSWl3aVkyeGhjM05GY25KdmNpSXNJbVJ2WTNWdFpXNTBJaXdpY1hWbGNubFRaV3hsWTNSdmNrRnNiQ0lzSW1admNrVmhZMmdpTENKbGJHVnRaVzUwSWl3aVkyeGhjM05NYVhOMElpd2ljbVZ0YjNabElpd2laV3hsYlNJc0ltZGxkRVZzWlcxbGJuUnpRbmxPWVcxbElpd2lhWFJsYlNJc0ltWnBaV3hrSWl3aWJtRnRaU0lzSW14bGJtZDBhQ0lzSW1Wc2JTSXNJbVpwY25OMFRtRnRaU0lzSW5JaUxDSnNZWE4wVG1GdFpTSXNJbVZ0WVdsc0lpd2lZMjkxYm5SeWVTSXNJbVpwYkdVaUxDSm5aVzVrWlhJaUxDSmphR1ZqYTJKdmVDSXNJbkpsYzNWdFpTSXNJbUZzYVdGeklpd2lkbVZ5YzJsdmJpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3UVVGQlFTeFBRVUZQUVN4TFFVRlFMRWxCUVdkQ1F5eFRRVUZvUWl4UlFVRnBReXhQUVVGcVF6dEJRVU5CTEU5QlFVOURMRTFCUVZBc1RVRkJiVUlzY1VOQlFXNUNPMEZCUTBFc1QwRkJUME1zWTBGQlVDeE5RVUV5UWl3NFEwRkJNMEk3UVVGRFFTeFBRVUZQUXl4UlFVRlFMRTFCUVhGQ0xEQkNRVUZ5UWp0QlFVTkJMRTlCUVU5RExGZEJRVkFzVFVGQmQwSXNiVU5CUVhoQ08wRkJRMEVzVDBGQlQwTXNUVUZCVUN4TlFVRnRRaXhYUVVGdVFqdEJRVU5CTEU5QlFVOURMR0ZCUVZBc1RVRkJNRUlzYVVKQlFURkNPenRKUVVWeFFrTXNSenM3TzBGQlEyNUNMR1ZCUVZsRExFdEJRVm9zUlVGQmJVSTdRVUZCUVRzN1FVRkJRU3d3UjBGRFdFRXNTMEZFVnpzN1FVRkZha0lzVlVGQlMwTXNTMEZCVEN4SFFVRmhPMEZCUTFoRExHbENRVUZYTzBGQlJFRXNTMEZCWWpzN1FVRkpRU3hWUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVVsU0xGRkJRVW9zUlVGQmFFSTdRVUZEUVN4VlFVRkxVU3hSUVVGTUxFTkJRV05ETEZOQlFXUXNRMEZCZDBKRExFZEJRWGhDTEVOQlFUUkNXaXhOUVVFMVFqdEJRVU5CTEZWQlFVdGhMRkZCUVV3c1IwRkJaMElzVFVGQlMwRXNVVUZCVEN4RFFVRmpReXhKUVVGa0xFOUJRV2hDTzBGQlEwRXNWVUZCUzBNc1VVRkJUQ3hIUVVGblFpeE5RVUZMUVN4UlFVRk1MRU5CUVdORUxFbEJRV1FzVDBGQmFFSTdRVUZEUVN4VlFVRkxSU3hoUVVGTUxFZEJRWEZDTEUxQlFVdEJMR0ZCUVV3c1EwRkJiVUpHTEVsQlFXNUNMRTlCUVhKQ08wRkJRMEVzVlVGQlMwY3NVVUZCVEN4SFFVRm5RaXhOUVVGTFFTeFJRVUZNTEVOQlFXTklMRWxCUVdRc1QwRkJhRUk3UVVGWWFVSTdRVUZaYkVJN096czdOa0pCUlZGSkxFTXNSVUZCUlR0QlFVTlVRU3hSUVVGRlF5eGpRVUZHTzBGQlEwRXNWMEZCUzBZc1VVRkJURHRCUVVORU96czdLMEpCUlZNN1FVRkRVaXhYUVVGTFFTeFJRVUZNTzBGQlEwUTdPenNyUWtGRlZUdEJRVUZCT3p0QlFVTlVMRlZCUVUxQkxGZEJRVmNzUzBGQlMxQXNVVUZCVEN4RFFVRmpWU3hYUVVGa0xFTkJRVEJDWml4aFFVRXhRaXhEUVVGcVFqdEJRVU5CWjBJc1kwRkJVVU1zUjBGQlVpeERRVUZaTEdOQlFWb3NSVUZCTkVKTUxGRkJRVFZDT3p0QlFVVkJMRmRCUVV0TkxGRkJRVXdzUTBGQll6dEJRVU5hWkN4dFFrRkJWMUU3UVVGRVF5eFBRVUZrTEVWQlJVYzdRVUZCUVN4bFFVRk5MRTlCUVV0RUxHRkJRVXdzUTBGQmJVSkRMRkZCUVc1Q0xFTkJRVTQ3UVVGQlFTeFBRVVpJTzBGQlIwUTdPenRyUTBGRllVRXNVU3hGUVVGVE8wRkJRVUU3TzBGQlEzSkNMRlZCUVUxUExHRkJRV0VzVTBGQmJrSTdRVUZEUVVNc1pVRkJVME1zWjBKQlFWUXNUMEZCT0VKR0xGVkJRVGxDTEVWQlEwZEhMRTlCUkVnc1EwRkRWeXh0UWtGQlZ6dEJRVU5zUWtNc1owSkJRVkZETEZOQlFWSXNRMEZCYTBKRExFMUJRV3hDTEVOQlFYbENUaXhWUVVGNlFqdEJRVU5FTEU5QlNFZzdPMEZCUzBGUUxHVkJRVk5WTEU5QlFWUXNRMEZCYVVJc1owSkJRVkU3UVVGRGRrSXNXVUZCVFVrc1QwRkJUMDRzVTBGQlUwOHNhVUpCUVZRc1EwRkJNa0lzVDBGQlMwTXNTMEZCUzBNc1MwRkJWaXhGUVVGcFFrTXNTVUZCTlVNc1EwRkJZanRCUVVOQkxGbEJRVWRLTEV0QlFVdExMRTFCUVV3c1IwRkJZeXhEUVVGcVFpeEZRVUZ2UWp0QlFVTnNRa3dzWlVGQlMwb3NUMEZCVEN4RFFVRmhPMEZCUVVFc2JVSkJRVTlWTEVsQlFVbFNMRk5CUVVvc1EwRkJZMnBDTEVkQlFXUXNRMEZCYTBKWkxGVkJRV3hDTEVOQlFWQTdRVUZCUVN4WFFVRmlPMEZCUTBRc1UwRkdSQ3hOUVVWTE8wRkJRMGdzYVVKQlFVdFRMRXRCUVV0RExFdEJRVllzUlVGQmFVSk1MRk5CUVdwQ0xFTkJRVEpDYWtJc1IwRkJNMElzUTBGQkswSlpMRlZCUVM5Q08wRkJRMFE3UVVGRFJpeFBRVkJFTzBGQlVVUTdPenMyUWtGRlVUdEJRVUZCT3p0QlFVRkJMRlZCUTBObUxGTkJSRVFzUjBGRFpTeExRVUZMUkN4TFFVUndRaXhEUVVORFF5eFRRVVJFT3pzN1FVRkhVQ3hoUVVORk8wRkJRVUU3UVVGQlFUdEJRVU5GTzBGQlFVRTdRVUZCUVN4WlFVRk5MRmRCUVZVc1YwRkJhRUlzUlVGQk5FSXNWVUZCVlN4TFFVRkxTU3hSUVVFelF6dEJRVU5GTzBGQlFVRTdRVUZCUVN4alFVRkxMRmRCUVZVc1MwRkJaanRCUVVORk8wRkJRVUU3UVVGQlFTeG5Ra0ZCU3l4WFFVRlZMRkZCUVdZN1FVRkRSVHRCUVVGQk8wRkJRVUVzYTBKQlFVa3NWMEZCVlN4aFFVRmtPMEZCUVVFN1FVRkJRU3hsUVVSR08wRkJSMFU3UVVGQlFUdEJRVUZCTEd0Q1FVRkxMRmRCUVZVc2RVSkJRV1k3UVVGRFJUdEJRVUZCTzBGQlFVRXNiMEpCUVVjc1RVRkJTeXh6UTBGQlVpeEZRVUVyUXl4TFFVRkpMSEZDUVVGdVJDeEZRVUY1UlN4UlFVRlBMRkZCUVdoR0xFVkJRWGxHTEZkQlFWVXNZVUZCYmtjN1FVRkRSU3dyUTBGQlN5eExRVUZKTEhsRlFVRlVMRVZCUVcxR0xFdEJRVWtzYlVKQlFYWkdMRWRCUkVZN1FVRkZSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlJrWTdRVUZFUmp0QlFVaEdMR0ZCUkVZN1FVRlpSeXhoUVVGRExFTkJRVU5LTEZWQlFWVXlRaXhOUVVGYUxFbEJRME03UVVGQlFUdEJRVUZCTEdkQ1FVRkxMRmRCUVZVc1VVRkJaanRCUVVORkxHdERRVUZETEUxQlFVUXNTVUZCVVN4UlFVRlJNMElzVTBGQmFFSTdRVUZFUml4aFFXSktPMEZCYTBKRk8wRkJRVUU3UVVGQlFTeG5Ra0ZCVHl4WFFVRlZMRTlCUVdwQ08wRkJRMFU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVN4bFFVUkdPMEZCUlVVN1FVRkRSU3h6UWtGQlN5eE5RVVJRTzBGQlJVVXNjMEpCUVVzc1YwRkdVRHRCUVVkRkxEaENRVUZoTEZsQlNHWTdRVUZKUlN4eFFrRkJTenRCUVVGQkxIbENRVUZMTEU5QlFVczJRaXhUUVVGTUxFZEJRV2xDUXl4RFFVRjBRanRCUVVGQkxHbENRVXBRTzBGQlMwVXNNRUpCUVZVc1MwRkJTM2hDTzBGQlRHcENPMEZCUmtZc1lVRnNRa1k3UVVFMlFrVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVDBGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVU5GTEhOQ1FVRkxMRTFCUkZBN1FVRkZSU3h6UWtGQlN5eFZRVVpRTzBGQlIwVXNPRUpCUVdFc1lVRklaanRCUVVsRkxIRkNRVUZMTzBGQlFVRXNlVUpCUVVzc1QwRkJTM2xDTEZGQlFVd3NSMEZCWjBKRUxFTkJRWEpDTzBGQlFVRXNhVUpCU2xBN1FVRkxSU3d3UWtGQlZTeExRVUZMZUVJN1FVRk1ha0k3UVVGR1JqdEJRVGRDUml4WFFVUkdPMEZCTUVORk8wRkJRVUU3UVVGQlFTeGpRVUZMTEZkQlFWVXNTMEZCWmp0QlFVTkZPMEZCUVVFN1FVRkJRU3huUWtGQlR5eFhRVUZWTEU5QlFXcENPMEZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFTeGxRVVJHTzBGQlJVVTdRVUZEUlN4elFrRkJTeXhOUVVSUU8wRkJSVVVzYzBKQlFVc3NUMEZHVUR0QlFVZEZMRGhDUVVGaExFOUJTR1k3UVVGSlJTeHhRa0ZCU3p0QlFVRkJMSGxDUVVGTExFOUJRVXN3UWl4TFFVRk1MRWRCUVdGR0xFTkJRV3hDTzBGQlFVRXNhVUpCU2xBN1FVRkxSU3d3UWtGQlZTeExRVUZMZUVJN1FVRk1ha0k3UVVGR1JpeGhRVVJHTzBGQldVVTdRVUZCUVR0QlFVRkJMR2RDUVVGUExGZEJRVlVzVDBGQmFrSTdRVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxHVkJSRVk3UVVGRlJUdEJRVUZCTzBGQlFVRTdRVUZEUlN4M1FrRkJTeXhUUVVSUU8wRkJSVVVzWjBOQlFXRXNZMEZHWmp0QlFVZEZMSFZDUVVGTE8wRkJRVUVzTWtKQlFVc3NUMEZCU3pKQ0xFOUJRVXdzUjBGQlpVZ3NRMEZCY0VJN1FVRkJRU3h0UWtGSVVEdEJRVWxGTERSQ1FVRlZMRXRCUVV0NFFqdEJRVXBxUWp0QlFVMUZPMEZCUVVFN1FVRkJRU3h2UWtGQlVTeFBRVUZOTEVWQlFXUTdRVUZCUVR0QlFVRkJMR2xDUVU1R08wRkJUMFU3UVVGQlFUdEJRVUZCTEc5Q1FVRlJMRTlCUVUwc1NVRkJaRHRCUVVGQk8wRkJRVUVzYVVKQlVFWTdRVUZSUlR0QlFVRkJPMEZCUVVFc2IwSkJRVkVzVDBGQlRTeEpRVUZrTzBGQlFVRTdRVUZCUVN4cFFrRlNSanRCUVZORk8wRkJRVUU3UVVGQlFTeHZRa0ZCVVN4UFFVRk5MRWxCUVdRN1FVRkJRVHRCUVVGQk8wRkJWRVk3UVVGR1JpeGhRVnBHTzBGQk1rSkZPMEZCUVVFN1FVRkJRU3huUWtGQlR5eFhRVUZWTEZGQlFXcENPMEZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFTeGxRVVJHTzBGQlJVVTdRVUZEUlN4elFrRkJTeXhOUVVSUU8wRkJSVVVzYzBKQlFVc3NUVUZHVUR0QlFVZEZMSEZDUVVGTE8wRkJRVUVzZVVKQlFVc3NUMEZCU3pSQ0xFbEJRVXdzUjBGQldVb3NRMEZCYWtJN1FVRkJRU3hwUWtGSVVEdEJRVWxGTERCQ1FVRlZMRXRCUVV0NFFqdEJRVXBxUWp0QlFVWkdMR0ZCTTBKR08wRkJjVU5GTzBGQlFVRTdRVUZCUVN4blFrRkJTeXhYUVVGVkxFOUJRV1k3UVVGRFJUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJMR1ZCUkVZN1FVRkZSVHRCUVVORkxITkNRVUZMTEU5QlJGQTdRVUZGUlN4elFrRkJTeXhSUVVaUU8wRkJSMFVzZFVKQlFVMHNUVUZJVWp0QlFVbEZMRzlDUVVGSExGbEJTa3c3UVVGTFJTeHhRa0ZCU3p0QlFVRkJMSGxDUVVGTExFOUJRVXMyUWl4TlFVRk1MRWRCUVdOTUxFTkJRVzVDTzBGQlFVRXNhVUpCVEZBN1FVRk5SU3d3UWtGQlZTeExRVUZMZUVJN1FVRk9ha0lzWjBKQlJrWTdRVUZCUVR0QlFWTkxPMEZCUVVFN1FVRkJRU3hyUWtGQlR5eFRRVUZSTEZsQlFXWTdRVUZCUVR0QlFVRkJMR1ZCVkV3N1FVRlhSVHRCUVVORkxITkNRVUZMTEU5QlJGQTdRVUZGUlN4elFrRkJTeXhSUVVaUU8wRkJSMFVzZFVKQlFVMHNVVUZJVWp0QlFVbEZMRzlDUVVGSExHTkJTa3c3UVVGTFJTeHhRa0ZCU3p0QlFVRkJMSGxDUVVGTExFOUJRVXMyUWl4TlFVRk1MRWRCUVdOTUxFTkJRVzVDTzBGQlFVRXNhVUpCVEZBN1FVRk5SU3d3UWtGQlZTeExRVUZMZUVJN1FVRk9ha0lzWjBKQldFWTdRVUZCUVR0QlFXdENTenRCUVVGQk8wRkJRVUVzYTBKQlFVOHNVMEZCVVN4alFVRm1PMEZCUVVFN1FVRkJRVHRCUVd4Q1RDeGhRWEpEUmp0QlFUQkVSVHRCUVVGQk8wRkJRVUVzWjBKQlFVc3NWMEZCVlN4UFFVRm1PMEZCUTBVN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFTeGxRVVJHTzBGQlJVVTdRVUZCUVR0QlFVRkJMR3RDUVVGUExGZEJRVlVzVlVGQmFrSTdRVUZEUlR0QlFVTkZMSGRDUVVGTExGVkJSRkE3UVVGRlJTeDNRa0ZCU3l4VlFVWlFPMEZCUjBVc2VVSkJRVTBzUzBGSVVqdEJRVWxGTEhWQ1FVRkxPMEZCUVVFc01rSkJRVXNzVDBGQlN6aENMRkZCUVV3c1IwRkJaMEpPTEVOQlFYSkNPMEZCUVVFc2JVSkJTbEE3UVVGTFJTdzBRa0ZCVlN4TFFVRkxlRUk3UVVGTWFrSXNhMEpCUkVZN1FVRlJSVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlVrWXNaVUZHUmp0QlFXRkZPMEZCUVVFN1FVRkJRU3hyUWtGQlR5eFhRVUZWTEZWQlFXcENPMEZCUTBVN1FVRkRSU3gzUWtGQlN5eFZRVVJRTzBGQlJVVXNkMEpCUVVzc1ZVRkdVRHRCUVVkRkxIbENRVUZOTEVsQlNGSTdRVUZKUlN4MVFrRkJTenRCUVVGQkxESkNRVUZMTEU5QlFVczRRaXhSUVVGTUxFZEJRV2RDVGl4RFFVRnlRanRCUVVGQkxHMUNRVXBRTzBGQlMwVXNORUpCUVZVc1MwRkJTM2hDTzBGQlRHcENMR3RDUVVSR08wRkJVVVU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFWSkdMR1ZCWWtZN1FVRjNRa1U3UVVGQlFUdEJRVUZCTEd0Q1FVRlBMRmRCUVZVc1ZVRkJha0k3UVVGRFJUdEJRVU5GTEhkQ1FVRkxMRlZCUkZBN1FVRkZSU3gzUWtGQlN5eFZRVVpRTzBGQlIwVXNlVUpCUVUwc1QwRklVanRCUVVsRkxIVkNRVUZMTzBGQlFVRXNNa0pCUVVzc1QwRkJTemhDTEZGQlFVd3NSMEZCWjBKT0xFTkJRWEpDTzBGQlFVRXNiVUpCU2xBN1FVRkxSU3cwUWtGQlZTeExRVUZMZUVJN1FVRk1ha0lzYTBKQlJFWTdRVUZSUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJVa1k3UVVGNFFrWTdRVUV4UkVZc1YwRXhRMFk3UVVGNVNVVTdRVUZCUVR0QlFVRkJMR05CUVVzc1YwRkJWU3hMUVVGbU8wRkJRMFU3UVVGQlFUdEJRVUZCTEdkQ1FVRkxMRmRCUVZVc1VVRkJaanRCUVVORk8wRkJRVUU3UVVGQlFUdEJRVU5GTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc2FVSkJSRVk3UVVGRlJUdEJRVU5GTEhkQ1FVRkxMRkZCUkZBN1FVRkZSU3gxUWtGQlN6dEJRVUZCTERKQ1FVRkxMRTlCUVVzclFpeE5RVUZNTEVkQlFXTlFMRU5CUVc1Q08wRkJRVUVzYlVKQlJsQTdRVUZIUlN3MFFrRkJWU3hMUVVGTGVFSTdRVUZJYWtJN1FVRkdSanRCUVVSR08wRkJSRVlzVjBGNlNVWTdRVUZ6U2tVN1FVRkJRVHRCUVVGQkxHTkJRVXNzVjBGQlZTeExRVUZtTzBGQlEwVTdRVUZCUVR0QlFVRkJMR2RDUVVGTExGZEJRVlVzYlVKQlFXWTdRVUZEUlR0QlFVRkJPMEZCUVVFc2EwSkJRVWtzVjBGQlZTeHBRa0ZCWkR0QlFVTkZPMEZCUVVFN1FVRkJRVHRCUVVGTFdpdzRRa0ZCV1RSRExFdEJRV3BDTzBGQlFVRTdRVUZCUVN4M1FrRkJOa0kxUXl4WlFVRlpOa003UVVGQmVrTXNhVUpCUkVZN1FVRkZSVHRCUVVGQk8wRkJRVUU3UVVGQlN5OURMR2xEUVVGbE9FTXNTMEZCY0VJN1FVRkJRVHRCUVVGQkxIZENRVUZuUXpsRExHVkJRV1VyUXp0QlFVRXZRenRCUVVaR08wRkJSRVlzWVVGRVJqdEJRVkZGTzBGQlFVRTdRVUZCUVN4blFrRkJTeXhYUVVGVkxHdENRVUZtTzBGQlEwVTdRVUZCUVR0QlFVRkJPMEZCUTBVc05rSkJRVlVzWjBKQlJGbzdRVUZGUlN4M1FrRkJTenRCUVVaUU8wRkJRVUU3UVVGQlFUdEJRVVJHTzBGQlVrWTdRVUYwU2tZN1FVRkVSaXhQUVVSR08wRkJNa3RFT3pzN08wVkJhRTg0UW1wRUxGTTdPMlZCUVZwUExFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDJGa2JXbHVMMFJ2WTNWdFpXNTBjeTlRY205cVpXTjBjeTl2WTNSaFptOXliUzFrWlcxdklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lFTnZiWEJ2Ym1WdWRDQjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCVFkyaGxiV0VnWm5KdmJTQW5MaTR2TGk0dkxpNHZMaTR2YjJOMFlXWnZjbTB0WVdSa2FYUnBiMjVoYkM5emNtTW5PMXh1YVcxd2IzSjBJRTlqZEdGbWIzSnRRV1JrVUd0bklHWnliMjBnSnk0dUx5NHVMeTR1THk0dUwyOWpkR0ZtYjNKdExXRmtaR2wwYVc5dVlXd3ZjR0ZqYTJGblpTNXFjMjl1Snp0Y2JtbHRjRzl5ZENCUFkzUmhabTl5YlNCbWNtOXRJQ2N1TGk4dUxpOHVMaTh1TGk5dlkzUmhabTl5YlM5emNtTW5PMXh1YVcxd2IzSjBJRTlqZEdGbWIzSnRVR3RuSUdaeWIyMGdKeTR1THk0dUx5NHVMeTR1TDI5amRHRm1iM0p0TDNCaFkydGhaMlV1YW5OdmJpYzdYRzVwYlhCdmNuUWdSWEp5YjNKeklHWnliMjBnSnk0dUwwVnljbTl5Y3ljN1hHNXBiWEJ2Y25RZ1ZtRnNhV1JoZEdsdmJrMWhjQ0JtY205dElDY3VMMVpoYkdsa1lYUnBiMjVOWVhBbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCQmNIQWdaWGgwWlc1a2N5QkRiMjF3YjI1bGJuUWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdlMXh1SUNBZ0lDQWdhR0Z6UlhKeWIzSnpPaUJiWFN4Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtOWpkR0ZtYjNKdElEMGdibVYzSUU5amRHRm1iM0p0S0NrN1hHNGdJQ0FnZEdocGN5NXZZM1JoWm05eWJTNTJZV3hwWkdGMGIzSXVZV1JrS0ZOamFHVnRZU2s3WEc0Z0lDQWdkR2hwY3k1dmJsTjFZbTFwZENBOUlIUm9hWE11YjI1VGRXSnRhWFF1WW1sdVpDaDBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtOXVRMmhoYm1kbElEMGdkR2hwY3k1dmJrTm9ZVzVuWlM1aWFXNWtLSFJvYVhNcE8xeHVJQ0FnSUhSb2FYTXVhR0Z6Um1sbGJHUkZjbkp2Y2lBOUlIUm9hWE11YUdGelJtbGxiR1JGY25KdmNpNWlhVzVrS0hSb2FYTXBPMXh1SUNBZ0lIUm9hWE11ZG1Gc2FXUmhkR1VnUFNCMGFHbHpMblpoYkdsa1lYUmxMbUpwYm1Rb2RHaHBjeWs3WEc0Z0lIMWNibHh1SUNCdmJsTjFZbTFwZENobEtYdGNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZEdocGN5NTJZV3hwWkdGMFpTZ3BPMXh1SUNCOVhHNWNiaUFnYjI1RGFHRnVaMlVvS1h0Y2JpQWdJQ0IwYUdsekxuWmhiR2xrWVhSbEtDazdYRzRnSUgxY2JseHVJQ0IyWVd4cFpHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3hwWkdGMFpTQTlJSFJvYVhNdWIyTjBZV1p2Y20wdWRtRnNhV1JoZEdWQmJHd29WbUZzYVdSaGRHbHZiazFoY0NrN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb0oxWmhiR2xrWVhScGIyNDZPaWNzSUhaaGJHbGtZWFJsS1R0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9lMXh1SUNBZ0lDQWdhR0Z6UlhKeWIzSnpPaUIyWVd4cFpHRjBaVnh1SUNBZ0lIMHNJQ2dwSUQwK0lIUm9hWE11YUdGelJtbGxiR1JGY25KdmNpaDJZV3hwWkdGMFpTa3BPMXh1SUNCOVhHNWNiaUFnYUdGelJtbGxiR1JGY25KdmNpaDJZV3hwWkdGMFpTbDdYRzRnSUNBZ1kyOXVjM1FnWTJ4aGMzTkZjbkp2Y2lBOUlDZHBiblpoYkdsa0p6dGNiaUFnSUNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0dBdUpIdGpiR0Z6YzBWeWNtOXlmV0FwWEc0Z0lDQWdJQ0F1Wm05eVJXRmphQ2hsYkdWdFpXNTBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0dOc1lYTnpSWEp5YjNJcE8xeHVJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQjJZV3hwWkdGMFpTNW1iM0pGWVdOb0tHbDBaVzBnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWld4bGJTQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJ6UW5sT1lXMWxLSFJvYVhOYmFYUmxiUzVtYVdWc1pGMHVibUZ0WlNrN1hHNGdJQ0FnSUNCcFppaGxiR1Z0TG14bGJtZDBhQ0ErSURFcElIdGNiaUFnSUNBZ0lDQWdaV3hsYlM1bWIzSkZZV05vS0dWc2JTQTlQaUJsYkcwdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMwVnljbTl5S1NsY2JpQWdJQ0FnSUgxbGJITmxlMXh1SUNBZ0lDQWdJQ0IwYUdselcybDBaVzB1Wm1sbGJHUmRMbU5zWVhOelRHbHpkQzVoWkdRb1kyeGhjM05GY25KdmNpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qm9ZWE5GY25KdmNuTWdmU0E5SUhSb2FYTXVjM1JoZEdVN1hHNWNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnUEdScGRqNWNiaUFnSUNBZ0lDQWdQR1p2Y20wZ1kyeGhjM05PWVcxbFBWd2lZMjl1ZEdGcGJtVnlYQ0lnYjI1VGRXSnRhWFE5ZTNSb2FYTXViMjVUZFdKdGFYUjlQbHh1SUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpY205M1hDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMHhNbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YURRZ1kyeGhjM05PWVcxbFBWd2lZMjlzTFRZZ1ptbHljM1JjSWo1UFkzUmhabTl5YlNCV1lXeHBaR0YwWlNBdElFUmxiVzg4TDJnMFBseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXNMVFlnZEdWNGRDMXlhV2RvZENCc1lYTjBYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5dlkzUmhabTl5YlM5dlkzUmhabTl5YlZ3aUlISmxiRDFjSW01dmIzQmxibVZ5SUc1dmNtVm1aWEp5WlhKY0lpQjBZWEpuWlhROVhDSmZZbXhoYm10Y0lpQmpiR0Z6YzA1aGJXVTlYQ0puYVhSb2RXSXRiR2x1YTF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x0WnlCemNtTTlYQ0pvZEhSd2N6b3ZMMkZ6YzJWMGN5MWpaRzR1WjJsMGFIVmlMbU52YlM5cGJXRm5aWE12Ylc5a2RXeGxjeTlzYjJkdmMxOXdZV2RsTDBkcGRFaDFZaTFOWVhKckxuQnVaMXdpSUdGc2REMWNJazlqZEdGbWIzSnRJQzBnUjJsMGFIVmlYQ0lnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpjR0Z1UGtkcGRHaDFZand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIc2hJV2hoYzBWeWNtOXljeTVzWlc1bmRHZ2dKaVlnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52YkMweE1sd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhGY25KdmNuTWdaWEp5YjNKelBYdG9ZWE5GY25KdmNuTjlJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnS1gxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4aFltVnNJR05zWVhOelRtRnRaVDFjSW1OdmJDMDJYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSbWx5YzNRZ2JtRnRaVG84TDNOMGNtOXVaejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2x1Y0hWMElGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U5WENKMFpYaDBYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbVpwY25OMFRtRnRaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGIwTnZiWEJzWlhSbFBTZG5hWFpsYmkxdVlXMWxKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxtWnBjbk4wVG1GdFpTQTlJSEo5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGFHRnVaMlU5ZTNSb2FYTXViMjVEYUdGdVoyVjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOCtYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeGhZbVZzUGx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdGaVpXd2dZMnhoYzNOT1lXMWxQVndpWTI5c0xUWmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wY205dVp6NU1ZWE4wSUc1aGJXVTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpZEdWNGRGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0lteGhjM1JPWVcxbFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkWFJ2UTI5dGNHeGxkR1U5SjJaaGJXbHNlUzF1WVcxbEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG14aGMzUk9ZVzFsSUQwZ2NuMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnZia05vWVc1blpUMTdkR2hwY3k1dmJrTm9ZVzVuWlgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW5KdmQxd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUlcxaGFXdzZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpZEdWNGRGd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVOVhDSmxiV0ZwYkZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjFkRzlEYjIxd2JHVjBaVDBuWlcxaGFXd25YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVpXMWhhV3dnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlzWVdKbGJENWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeGhZbVZzSUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzAxWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUTI5MWJuUnllVG84TDNOMGNtOXVaejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE5sYkdWamRDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsUFZ3aVkyOTFiblJ5ZVZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjFkRzlEYjIxd2JHVjBaVDBuWTI5MWJuUnllUzF1WVcxbEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxaajE3Y2lBOVBpQjBhR2x6TG1OdmRXNTBjbmtnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEc5d2RHbHZiaUIyWVd4MVpUMWNJbHdpUGxObGJHVmpkQ0JoSUdOdmRXNTBjbms4TDI5d2RHbHZiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YjNCMGFXOXVJSFpoYkhWbFBWd2lRbEpjSWo1Q2NtRjZhV3c4TDI5d2RHbHZiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YjNCMGFXOXVJSFpoYkhWbFBWd2lWVUZjSWo1VmEzSmhhVzVsUEM5dmNIUnBiMjQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEc5d2RHbHZiaUIyWVd4MVpUMWNJbFZUWENJK1ZXNXBkR1ZrSUZOMFlYUmxjend2YjNCMGFXOXVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM05sYkdWamRENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmJHRmlaV3crWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhzWVdKbGJDQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ3dE1USmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wY205dVp6NVZjR3h2WVdRZ1lTQm1hV3hsT2p3dmMzUnliMjVuUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltWnBiR1ZjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpWm1sc1pWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZtUFh0eUlEMCtJSFJvYVhNdVptbHNaU0E5SUhKOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhoWW1Wc1BseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1OdmJDMDJYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEhKdmJtYytSMlZ1WkdWeU9qd3ZjM1J5YjI1blBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFXNXdkWFFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUMWNJbkpoWkdsdlhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlQxY0ltZGxibVJsY2x3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUFZ3aWJXRnNaVndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsa1BWd2laMlZ1WkdWeVRXRnNaVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVaMlZ1WkdWeUlEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YmtOb1lXNW5aVDE3ZEdocGN5NXZia05vWVc1blpYMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0x6NGdQR3hoWW1Wc0lHaDBiV3hHYjNJOVhDSm5aVzVrWlhKTllXeGxYQ0krVFdGc1pUd3ZiR0ZpWld3K1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHVjSFYwSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTlYQ0p5WVdScGIxd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVOVhDSm5aVzVrWlhKY0lpQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlQxY0ltWmxiV0ZzWlZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbGtQVndpWjJWdVpHVnlSbVZ0WVd4bFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV1k5ZTNJZ1BUNGdkR2hwY3k1blpXNWtaWElnUFNCeWZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXVRMmhoYm1kbFBYdDBhR2x6TG05dVEyaGhibWRsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGlBOGJHRmlaV3dnYUhSdGJFWnZjajFjSW1kbGJtUmxja1psYldGc1pWd2lQa1psYldGc1pUd3ZiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMnd0Tmx3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUnliMjVuUGtSdklIbHZkU0JvWVhabElHRWdjRzl5ZEdadmJHbHZPand2YzNSeWIyNW5QbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR0ZpWld3Z1kyeGhjM05PWVcxbFBWd2lZMmhsWTJ0aWIzaGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVc1d2RYUWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbFBWd2lZMmhsWTJ0aWIzaGNJaUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSNWNHVTlYQ0pqYUdWamEySnZlRndpSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1U5WENKNVpYTmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVZMmhsWTJ0aWIzZ2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiajVaWlhNOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hoWW1Wc0lHTnNZWE56VG1GdFpUMWNJbU5vWldOclltOTRYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdWNIVjBJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbU5vWldOclltOTRYQ0lnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxQVndpWTJobFkydGliM2hjSWlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUFZ3aWJtOWNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVZMmhsWTJ0aWIzZ2dQU0J5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyNURhR0Z1WjJVOWUzUm9hWE11YjI1RGFHRnVaMlY5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiajVPYnp3dmMzQmhiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzWVdKbGJENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c1lXSmxiQ0JqYkdGemMwNWhiV1U5WENKamFHVmphMkp2ZUZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U5WENKamFHVmphMkp2ZUZ3aUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlQxY0ltTm9aV05yWW05NFhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUMWNJbTFoZVdKbFhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWmoxN2NpQTlQaUIwYUdsekxtTm9aV05yWW05NElEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNCtUV0Y1WW1VOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmx4dUlDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWNtOTNYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzB4TWx3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHRmlaV3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMGNtOXVaejVTWlhOMWJXVTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFJsZUhSaGNtVmhJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUMWNJbkpsYzNWdFpWd2lJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WbVBYdHlJRDArSUhSb2FYTXVjbVZ6ZFcxbElEMGdjbjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5dVEyaGhibWRsUFh0MGFHbHpMbTl1UTJoaGJtZGxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdGaVpXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0luSnZkMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMnd0TmlCamIyd3RkbVZ5YzJsdmJsd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThkV3dnWTJ4aGMzTk9ZVzFsUFZ3aWNHRmphMkZuWlMxMlpYSnphVzl1WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQbnRQWTNSaFptOXliVkJyWnk1aGJHbGhjMzBnZTJCMkpIdFBZM1JoWm05eWJWQnJaeTUyWlhKemFXOXVmV0I5UEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2srZTA5amRHRm1iM0p0UVdSa1VHdG5MbUZzYVdGemZTQjdZSFlrZTA5amRHRm1iM0p0UVdSa1VHdG5MblpsY25OcGIyNTlZSDA4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzVnNQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZMjlzTFRZZ1kyOXNMV0oxZEhSdmJsd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThZblYwZEc5dUlGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMWNJbUoxZEhSdmJpMXdjbWx0WVhKNVhDSWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlQxY0luTjFZbTFwZEZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1V1lXeHBaR0YwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJKMWRIUnZiajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBOEwyWnZjbTArWEc0Z0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBcE8xeHVJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBlbWFpbCBmcm9tICcuL2VtYWlsJztcbmltcG9ydCBleHRlbnNpb24gZnJvbSAnLi9leHRlbnNpb24nO1xuaW1wb3J0IGxldHRlciBmcm9tICcuL2xldHRlcic7XG5pbXBvcnQgbWF4bGVuZ3RoIGZyb20gJy4vbWF4bGVuZ3RoJztcbmltcG9ydCBtaW5sZW5ndGggZnJvbSAnLi9taW5sZW5ndGgnO1xuaW1wb3J0IG1heHNpemUgZnJvbSAnLi9tYXhzaXplJztcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vcmVxdWlyZWQnO1xuaW1wb3J0IHZhbHVlTm90RXF1YWxzIGZyb20gJy4vdmFsdWVOb3RFcXVhbHMnO1xuaW1wb3J0IG1pbmNoZWNrZWQgZnJvbSAnLi9taW5jaGVja2VkJztcblxuZXhwb3J0IHtcbiAgZW1haWwsXG4gIGV4dGVuc2lvbixcbiAgbGV0dGVyLFxuICBtYXhsZW5ndGgsXG4gIG1pbmxlbmd0aCxcbiAgbWF4c2l6ZSxcbiAgbnVtYmVyLFxuICByZXF1aXJlZCxcbiAgdmFsdWVOb3RFcXVhbHMsXG4gIG1pbmNoZWNrZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIGVtYWlsLFxuICBleHRlbnNpb24sXG4gIGxldHRlcixcbiAgbWF4bGVuZ3RoLFxuICBtaW5sZW5ndGgsXG4gIG1heHNpemUsXG4gIG51bWJlcixcbiAgcmVxdWlyZWQsXG4gIHZhbHVlTm90RXF1YWxzLFxuICBtaW5jaGVja2VkLFxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2VtYWlsJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJyxcbiAgZm46ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAoL15bK2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw0fSQvaSkudGVzdCh2YWx1ZSkgfHwgZmFsc2U7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL2VtYWlsLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXh0ZW5zaW9uJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBjaG9vc2UgYSBmaWxlIHdpdGggYSB2YWxpZCBleHRlbnNpb246ICguLi57fSknLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbXMpID0+IHtcbiAgICBjb25zdCBmaWxlID0gQXJyYXkuZnJvbShlbGVtZW50WzBdLmZpbGVzKTtcbiAgICByZXR1cm4gZmlsZS5zb21lKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBmaWxlVHlwZSA9IChpdGVtLnR5cGUpLnNwbGl0KCcvJylbMV07XG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdqcGVnJyAmJiBwYXJhbXMuaW5jbHVkZXMoJ2pwZycpICYmICFwYXJhbXMuaW5jbHVkZXMoJ2pwZWcnKSkgcGFyYW1zLnB1c2goJ2pwZWcnKTtcbiAgICAgIHJldHVybiBwYXJhbXMuaW5jbHVkZXMoZmlsZVR5cGUpO1xuICAgIH0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9leHRlbnNpb24uanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdsZXR0ZXInLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIG9ubHkgbGV0dGVycycsXG4gIGZuOiAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKC9eW2EtekEtWl0rJC8pLnRlc3QodmFsdWUpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9sZXR0ZXIuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtYXhsZW5ndGgnLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycycsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZS5sZW5ndGggPD0gcGFyYW0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9tYXhsZW5ndGguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtaW5sZW5ndGgnLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzJyxcbiAgZm46ICh2YWx1ZSwgZWxlbWVudCwgcGFyYW0pID0+IHtcbiAgICByZXR1cm4gKHZhbHVlLmxlbmd0aCA+PSBwYXJhbSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21pbmxlbmd0aC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21heHNpemUnLFxuICBtZXNzYWdlOiAnRmlsZSBzaXplIG11c3Qgbm90IGV4Y2VlZCB7MH0gYnl0ZXMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBBcnJheS5mcm9tKGVsZW1lbnRbMF0uZmlsZXMpO1xuICAgIHJldHVybiBmaWxlLnNvbWUoaXRlbSA9PiAoaXRlbS5zaXplIDw9IHBhcmFtKSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21heHNpemUuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdudW1iZXInLFxuICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyJyxcbiAgZm46ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAvXlxcZCskL2cudGVzdCh2YWx1ZSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL251bWJlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3JlcXVpcmVkJyxcbiAgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuc29tZShlbGVtID0+IGVsZW0uY2hlY2tlZCk7XG4gICAgfVxuICAgIHJldHVybiAoISF2YWx1ZS5sZW5ndGggfHwgZmFsc2UpO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS1hZGRpdGlvbmFsL3NyYy9yZXF1aXJlZC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ZhbHVlTm90RXF1YWxzJyxcbiAgbWVzc2FnZTogJ1ZhbHVlIG11c3QgYmUgbm90IGVxdWFsIHRvIHswfScsXG4gIGZuOiAodmFsdWUsIGVsZW1lbnQsIHBhcmFtKSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtICE9PSB2YWx1ZTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9zcmMvdmFsdWVOb3RFcXVhbHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtaW5jaGVja2VkJyxcbiAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3QgezB9IG9wdGlvbnMnLFxuICBmbjogKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkgPT4ge1xuICAgIGNvbnN0IHF0ZENoZWNrZWQgPSBlbGVtZW50LnJlZHVjZSgoYWNjLCBvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24uY2hlY2tlZCkgYWNjKys7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApO1xuICAgIHJldHVybiAocXRkQ2hlY2tlZCA+PSBwYXJhbSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtLWFkZGl0aW9uYWwvc3JjL21pbmNoZWNrZWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcIm9jdGFmb3JtLWFkZGl0aW9uYWxcIixcImFsaWFzXCI6XCJPY3RhZm9ybSBBZGRpdGlvbmFsXCIsXCJ2ZXJzaW9uXCI6XCIxLjAuMTNcIixcImRlc2NyaXB0aW9uXCI6XCJPY3RhZm9ybSBBZGRpdGlvbmFsIFZhbGlkYXRpb24gLSBQcmVzZXRzIHZhbGlkYXRpb24gdG8gdXNlIHdpdGggT2N0YWZvcm0gdmFsaWRhdGUsIHRoaXMgcGFja2FnZSBjb250YWlucyB2YWxpZGF0aW9ucyBzdWNoIGFzIGVtYWlsLCBleHRlbnNpb24sIG1pbmxlbmd0aCwgYW5kIG90aGVyc1wiLFwibWFpblwiOlwiaW5kZXguanNcIixcImhvbWVwYWdlXCI6XCJodHRwczovL2dpdGh1Yi5jb20vb2N0YWZvcm0vb2N0YWZvcm0jcmVhZG1lXCIsXCJhdXRob3JcIjpcIkNocmlzdGlhbiBGb3J0ZXNcIixcImxpY2Vuc2VcIjpcIk1JVFwiLFwiZW5naW5lc1wiOntcIm5vZGVcIjpcIj49NC4wLjBcIn0sXCJrZXl3b3Jkc1wiOltcImZvcm1cIixcImZvcm1zXCIsXCJmb3JtanNcIixcImZvcm0gdmFsaWRhdGlvblwiLFwidmFsaWRhdGlvblwiLFwidmFsaWRhdGlvbnNcIixcInJlYWN0XCIsXCJhbmd1bGFyXCIsXCJ2dWVcIixcImphdmFzY3JpcHRcIixcInZhbmlsbGFcIixcImFkZGl0aW9uYWxcIixcImFkZGl0aW9uYWwgdmFsaWRhdGlvbnNcIl0sXCJzY3JpcHRzXCI6e1wicHJlcHVibGlzaFwiOlwibnBtIHJ1biBidWlsZDpwcm9kXCIsXCJucG0tcHVibGlzaFwiOlwibnBtIHB1Ymxpc2ggZGlzdCAtLWRyeS1ydW5cIixcInN0YXJ0XCI6XCJ3ZWJwYWNrIC0td2F0Y2hcIixcInRlc3RcIjpcImplc3QgLWMgdGVzdC9qZXN0L2NvbmZpZy5kZXYuanNvbiAtLXdhdGNoQWxsXCIsXCJidWlsZDpwcm9kXCI6XCJqZXN0IC1jIHRlc3QvamVzdC9jb25maWcucHJvZC5qc29uICYmIG5wbSBydW4gY2xlYW4gJiYgbnBtIHJ1biB3ZWJwYWNrIC1wIC0tcHJvZ3Jlc3NcIixcImJ1aWxkOmRldlwiOlwiamVzdCAtYyB0ZXN0L2plc3QvY29uZmlnLnByb2QuanNvbiAmJiBucG0gcnVuIGNsZWFuICYmIG5wbSBydW4gd2VicGFja1wiLFwiY2xlYW5cIjpcInJpbXJhZiBkaXN0XCIsXCJ3ZWJwYWNrXCI6XCJub2RlX21vZHVsZXMvLmJpbi93ZWJwYWNrXCJ9LFwicmVwb3NpdG9yeVwiOntcInR5cGVcIjpcImdpdFwiLFwidXJsXCI6XCJnaXQraHR0cHM6Ly9naXRodWIuY29tL29jdGFmb3JtL29jdGFmb3JtLWFkZGl0aW9uYWwuZ2l0XCJ9LFwiYnVnc1wiOntcInVybFwiOlwiaHR0cHM6Ly9naXRodWIuY29tL29jdGFmb3JtL29jdGFmb3JtLWFkZGl0aW9uYWwvaXNzdWVzXCJ9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiYmFiZWwtY2xpXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1jb3JlXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1lc2xpbnRcIjpcIl44LjIuMlwiLFwiYmFiZWwtamVzdFwiOlwiXjIyLjQuM1wiLFwiYmFiZWwtbG9hZGVyXCI6XCJeNy4xLjNcIixcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXCI6XCJeNi4yNi4wXCIsXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6XCJeNi4yNC4xXCIsXCJjaXJjdWxhci1kZXBlbmRlbmN5LXBsdWdpblwiOlwiXjQuNC4wXCIsXCJjb3B5LXdlYnBhY2stcGx1Z2luXCI6XCJeNC42LjBcIixcImVzbGludFwiOlwiXjQuMTguMlwiLFwiZXNsaW50LWNvbmZpZy1haXJibmJcIjpcIl4xNi4xLjBcIixcImVzbGludC1sb2FkZXJcIjpcIl4yLjAuMFwiLFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjpcIl4yLjkuMFwiLFwiZXNsaW50LXBsdWdpbi1qZXN0XCI6XCJeMjEuMTUuMFwiLFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOlwiXjYuMC4zXCIsXCJnZW5lcmF0ZS1qc29uLXdlYnBhY2stcGx1Z2luXCI6XCJeMC4zLjFcIixcImdsb2JcIjpcIl43LjEuMlwiLFwiamVzdFwiOlwiXjIyLjQuM1wiLFwicmltcmFmXCI6XCJeMi42LjJcIixcIndlYnBhY2tcIjpcIl4zLjExLjBcIixcIndlYnBhY2stY2xpXCI6XCJeMi4wLjlcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vb2N0YWZvcm0tYWRkaXRpb25hbC9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBWYWxpZGF0ZSBmcm9tICcuL3J1bGVzL1ZhbGlkYXRlJztcblxuY2xhc3MgT2N0YWZvcm0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IFZhbGlkYXRlLmdldEFsbCgpO1xuICAgIHRoaXMudmFsaWRhdGVBbGwgPSBWYWxpZGF0ZS5hcHBseTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9jdGFmb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9pbmRleC5qcyIsImltcG9ydCBSdWxlcyBmcm9tICcuL1J1bGVzJztcbmltcG9ydCBIZWxwZXJzLCB7IGRvbSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgRXJyb3JBY3Rpb25zLCBNZXNzYWdlQWN0aW9ucywgVmFsaWRhdGVBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBlbnRyeVR5cGUgfSBmcm9tICcuLi9lbnRyaWVzJztcblxuY29uc3QgVmFsaWRhdGUgPSB7XG4gIGdldEFsbDogVmFsaWRhdGVBY3Rpb25zLmdldEFsbCxcbiAgYXBwbHk6IChmaWVsZE1hcCA9IHt9KSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhmaWVsZE1hcClcbiAgICAgIC5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZFJ1bGVzTWFwcGVyID0gZmllbGRNYXBbc2VsZWN0b3JdO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZmllbGRSdWxlc0VudHJ5VHlwZSA9IHtcbiAgICAgICAgICAuLi4oSGVscGVycy50eXBlcy5pc1N0cmluZyhmaWVsZFJ1bGVzTWFwcGVyKSAmJiBlbnRyeVR5cGUuZmllbGQuc3RyaW5nKGZpZWxkUnVsZXNNYXBwZXIpKSxcbiAgICAgICAgICAuLi4oSGVscGVycy50eXBlcy5pc09iamVjdChmaWVsZFJ1bGVzTWFwcGVyKSAmJiBlbnRyeVR5cGUuZmllbGQub2JqZWN0KGZpZWxkUnVsZXNNYXBwZXIpKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoISFPYmplY3Qua2V5cyhmaWVsZFJ1bGVzRW50cnlUeXBlKS5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tKHNlbGVjdG9yKTtcbiAgICAgICAgICBNZXNzYWdlQWN0aW9ucy5zZXRDdXN0b21GaWVsZE1zZyhzZWxlY3RvciwgZmllbGRSdWxlc0VudHJ5VHlwZS5tZXNzYWdlcyk7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBFcnJvckFjdGlvbnMuc2V0KCdmaWVsZCcsIHNlbGVjdG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gKFxuICAgICAgICAgICAgZmllbGRSdWxlc0VudHJ5VHlwZS52YWx1ZSB8fCBcbiAgICAgICAgICAgIChlbGVtZW50Lmxlbmd0aCAmJiBlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMV0udmFsdWUpIHx8XG4gICAgICAgICAgICAoJycpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkUnVsZXMgPSAoXG4gICAgICAgICAgICAoSGVscGVycy50eXBlcy5pc0FycmF5KGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpICYmIGVudHJ5VHlwZS5ydWxlcy5hcnJheShmaWVsZFJ1bGVzRW50cnlUeXBlLnJ1bGVzKSkgfHxcbiAgICAgICAgICAgIChIZWxwZXJzLnR5cGVzLmlzT2JqZWN0KGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpICYmIGZpZWxkUnVsZXNFbnRyeVR5cGUucnVsZXMpIHx8XG4gICAgICAgICAgICB7fVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZCA9IHtcbiAgICAgICAgICAgIHJ1bGVzOiBmaWVsZFJ1bGVzLFxuICAgICAgICAgICAgbWVzc2FnZXM6IE1lc3NhZ2VBY3Rpb25zLmdldEFsbCgpLFxuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB2YWxpZCA9IFJ1bGVzLmFwcGx5KGZpZWxkLCBWYWxpZGF0ZUFjdGlvbnMuZ2V0QWxsKCkpO1xuICAgICAgICAgIGlmICh2YWxpZC5tZXNzYWdlcy5sZW5ndGgpIGVycm9ycy5wdXNoKHZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBFcnJvckFjdGlvbnMuc2V0KCdlbnRyeScsIHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBWYWxpZGF0ZS5pc1ZhbGlkID0gIWVycm9ycy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL3J1bGVzL1ZhbGlkYXRlLmpzIiwiaW1wb3J0IHsgUmVwbGFjZUFjdGlvbnMsIEVycm9yQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IGRvbSBmcm9tICcuLi9oZWxwZXJzL2RvbSc7XG5cbmNvbnN0IFJ1bGVzID0ge1xuICBhcHBseTogKGZpZWxkID0ge30sIHZhbGlkYXRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBlcnJvcnMgPSB7XG4gICAgICBmaWVsZDogKGZpZWxkLnNlbGVjdG9yIHx8ICcnKSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKGVycm9ycy5maWVsZCl7XG4gICAgICBPYmplY3RcbiAgICAgICAgLmVudHJpZXMoZmllbGQucnVsZXMgfHwge30pXG4gICAgICAgIC5mb3JFYWNoKChba2V5LCBwYXJhbXNdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0aW9uc1trZXldO1xuICAgICAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHZhbGlkYXRlKFxuICAgICAgICAgICAgICBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgZmllbGQuZWxlbWVudCxcbiAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICBkb20sXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSBmaWVsZC5tZXNzYWdlcy5maWVsZHNbZmllbGQuc2VsZWN0b3JdIHx8IHt9O1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gKHVzZXJNZXNzYWdlW2tleV0gfHwgZmllbGQubWVzc2FnZXMudmFsaWRhdG9yW2tleV0pO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBSZXBsYWNlQWN0aW9ucy5tZXNzYWdlLnZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgZXJyb3JzLm1lc3NhZ2VzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRXJyb3JBY3Rpb25zLnNldCgndW5kZWZpbmVkJywga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdWxlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvcnVsZXMvUnVsZXMuanMiLCJpbXBvcnQgUEFUVEVSTlMgZnJvbSAnLi9wYXR0ZXJucyc7XG5pbXBvcnQgTUVTU0FHRVMgZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmV4cG9ydCB7XG4gIFBBVFRFUk5TLFxuICBNRVNTQUdFUyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vb2N0YWZvcm0vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsImNvbnN0IGdldE5lc3RlZE9iamVjdCA9IChvYmosIGRvdFNlcGFyYXRlZEtleXMsIC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID4gMSAmJiB0eXBlb2YgZG90U2VwYXJhdGVkS2V5cyAhPT0gJ3N0cmluZycpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG90U2VwYXJhdGVkS2V5cyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBwYXRoQXJyID0gZG90U2VwYXJhdGVkS2V5cy5zcGxpdCgnLicpO1xuICAgIHBhdGhBcnIuZm9yRWFjaCgoa2V5LCBpZHgsIGFycikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcG9zID0gL1xcWyhbXildKylcXF0vLmV4ZWMoa2V5KVsxXTtcbiAgICAgICAgICBjb25zdCBwb3NMZW4gPSBwb3MubGVuZ3RoO1xuICAgICAgICAgIGFyci5zcGxpY2UoaWR4ICsgMSwgMCwgTnVtYmVyKHBvcykpO1xuICAgICAgICAgIGFycltpZHhdID0ga2V5LnNsaWNlKDAsICgtMiAtIHBvc0xlbikpO1xuICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSk7IH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYmogPSBwYXRoQXJyLnJlZHVjZSgobywga2V5KSA9PiAobyAmJiBvW2tleV0gIT09ICd1bmRlZmluZWQnID8gb1trZXldIDogdW5kZWZpbmVkKSwgb2JqKTtcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxuY29uc3QgZ2V0U2NoZW1hTWF0Y2ggPSAob2JqLCBvYmpGcm9tU2NoZW1hKSA9PiB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICghZ2V0U2NoZW1hTWF0Y2gob2JqW2ldLCBvYmpGcm9tU2NoZW1hW2ldKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghZ2V0U2NoZW1hTWF0Y2gob2JqW2tleV0sIG9iakZyb21TY2hlbWFba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmpGcm9tU2NoZW1hID09PSB0eXBlb2Ygb2JqO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBidWlsZFNjaGVtYSA9IChzY2hlbWFPYmplY3QpID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzY2hlbWFPYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgc2NoZW1hT2JqZWN0LmZvckVhY2goc3ViT2JqID0+IGJ1aWxkU2NoZW1hKHN1Yk9iaikpO1xuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzY2hlbWFPYmplY3QpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYU9iamVjdCkuZm9yRWFjaChzdWJPYmogPT4gYnVpbGRTY2hlbWEoc2NoZW1hT2JqZWN0W3N1Yk9ial0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIHNjaGVtYU9iamVjdDtcbiAgfVxuICByZXR1cm4gc2NoZW1hT2JqZWN0O1xufTtcblxuY29uc3QgY29udmVydFNjaGVtYUFuZEdldE1hdGNoID0gKG9iaiwgc2NoZW1hT2JqZWN0KSA9PiB7XG4gIGNvbnN0IG9iamVjdEZyb21TY2hlbWEgPSBidWlsZFNjaGVtYShzY2hlbWFPYmplY3QpO1xuICBpZiAoZ2V0U2NoZW1hTWF0Y2gob2JqLCBvYmplY3RGcm9tU2NoZW1hKSkgeyByZXR1cm4gb2JqOyB9XG4gIHJldHVybiAtMTtcbn07XG5cbmNvbnN0IGdldCA9IChvYmosIG5lc3RlZEtleXMpID0+IHtcbiAgbGV0IGlucHV0ID0gb2JqO1xuXG4gIGlmIChuZXN0ZWRLZXlzKSB7XG4gICAgaWYgKHR5cGVvZiBuZXN0ZWRLZXlzID09PSAnc3RyaW5nJykge1xuICAgICAgaW5wdXQgPSBnZXROZXN0ZWRPYmplY3QoaW5wdXQsIG5lc3RlZEtleXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjaGVja1NjaGVtYSA9IGNvbnZlcnRTY2hlbWFBbmRHZXRNYXRjaChpbnB1dCwgbmVzdGVkS2V5cyk7XG4gICAgICBpbnB1dCA9IChjaGVja1NjaGVtYSAhPT0gLTEgPyBjaGVja1NjaGVtYSA6IG9iaik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9oZWxwZXJzL2dldC5qcyIsImNvbnN0IFR5cGVzID0ge1xuICBpcyh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5tYXRjaCgvXlxcW29iamVjdFxccyguKilcXF0kLylbMV0pO1xuICB9LFxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgVHlwZXMuaXModmFsdWUpID09PSAnU3RyaW5nJyk7XG4gIH0sXG4gIGlzT2JqZWN0KHZhbHVlKXtcbiAgICByZXR1cm4gKFR5cGVzLmlzKHZhbHVlKSA9PT0gJ09iamVjdCcpO1xuICB9LFxuICBpc051bWJlcih2YWx1ZSl7XG4gICAgcmV0dXJuIChUeXBlcy5pcyh2YWx1ZSkgPT09ICdOdW1iZXInKTtcbiAgfSxcbiAgaXNGdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIChUeXBlcy5pcyh2YWx1ZSkgPT09ICdGdW5jdGlvbicpO1xuICB9LFxuICBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gKFR5cGVzLmlzKHZhbHVlKSA9PT0gJ0Jvb2xlYW4nKTtcbiAgfSxcbiAgaXNBcnJheSh2YWx1ZSl7XG4gICAgcmV0dXJuICh2YWx1ZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvaGVscGVycy90eXBlcy5qcyIsImltcG9ydCBFcnJvckFjdGlvbnMgZnJvbSAnLi9FcnJvckFjdGlvbnMnO1xuaW1wb3J0IE1lc3NhZ2VBY3Rpb25zIGZyb20gJy4vTWVzc2FnZUFjdGlvbnMnO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi4vc3RhdGVzJztcblxuY29uc3QgVmFsaWRhdGVBY3Rpb25zID0ge1xuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIFN0YXRlLnZhbGlkYXRpb25zO1xuICB9LFxuICBzZXQobmFtZSwgZm4pIHtcbiAgICBTdGF0ZS52YWxpZGF0aW9uc1tuYW1lXSA9IGZuO1xuICB9LFxuICBhZGQobGlzdE9mVmFsaWRhdGlvbnMpIHtcbiAgICBpZiAoSGVscGVycy50eXBlcy5pc0FycmF5KGxpc3RPZlZhbGlkYXRpb25zKSkge1xuICAgICAgbGlzdE9mVmFsaWRhdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCBmbiwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc1BhcmFtcyA9IChIZWxwZXJzLnR5cGVzLmlzU3RyaW5nKG5hbWUpICYmIEhlbHBlcnMudHlwZXMuaXNGdW5jdGlvbihmbikgJiYgSGVscGVycy50eXBlcy5pc1N0cmluZyhtZXNzYWdlKSk7XG5cbiAgICAgICAgaWYgKGhhc1BhcmFtcyAmJiBtZXNzYWdlKSB7XG4gICAgICAgICAgTWVzc2FnZUFjdGlvbnMuc2V0KG5hbWUsIG1lc3NhZ2UpO1xuICAgICAgICAgIFZhbGlkYXRlQWN0aW9ucy5zZXQobmFtZSwgZm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlKSBFcnJvckFjdGlvbnMuc2V0KCdtc2cnLCBuYW1lKTtcbiAgICAgICAgaWYgKCFoYXNQYXJhbXMpIEVycm9yQWN0aW9ucy5zZXQoJ2FkZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEVycm9yQWN0aW9ucy5zZXQoJ2FkZCcsIGxpc3RPZlZhbGlkYXRpb25zKTtcbiAgICB9XG4gIH0sXG59O1xuXG5TdGF0ZS52YWxpZGF0aW9ucyA9IHtcbiAgYWRkOiBWYWxpZGF0ZUFjdGlvbnMuYWRkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVBY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9hY3Rpb25zL1ZhbGlkYXRlQWN0aW9ucy5qcyIsImltcG9ydCBTdHJpbmdFbnRyeSBmcm9tICcuL1N0cmluZ0VudHJ5JztcbmltcG9ydCBPYmplY3RFbnRyeSBmcm9tICcuL09iamVjdEVudHJ5JztcbmltcG9ydCBBcnJheUVudHJ5IGZyb20gJy4vQXJyYXlFbnRyeSc7XG5cbmV4cG9ydCBjb25zdCBlbnRyeVR5cGUgPSB7XG4gIGZpZWxkOiB7XG4gICAgb2JqZWN0OiBPYmplY3RFbnRyeSxcbiAgICBzdHJpbmc6IFN0cmluZ0VudHJ5LFxuICB9LFxuICBydWxlczoge1xuICAgIGFycmF5OiBBcnJheUVudHJ5LFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9pbmRleC5qcyIsImltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5pbXBvcnQgcnVsZSBmcm9tICcuLi9tb2RlbHMvcnVsZSc7XG5cbi8vIGV4dHJhY3RSdWxlc0Zyb21TdHJpbmdcbmNvbnN0IFN0cmluZ0VudHJ5ID0gKHN0cmluZykgPT4ge1xuICBjb25zdCBydWxlcyA9IHBhcmFtc1V0aWxzLmdldC5zaG9ydFN0cmluZ1ZhbGlkYXRpb24oc3RyaW5nKTtcbiAgcmV0dXJuIHJ1bGUuZ2V0KHsgXG4gICAgbWVzc2FnZXM6IHt9LFxuICAgIHJ1bGVzLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0VudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL29jdGFmb3JtL3NyYy9lbnRyaWVzL1N0cmluZ0VudHJ5LmpzIiwiaW1wb3J0IHJ1bGUgZnJvbSAnLi4vbW9kZWxzL3J1bGUnO1xuXG4vLyBleHRyYWN0UnVsZXNGcm9tU3RyaW5nXG5jb25zdCBPYmplY3RFbnRyeSA9IChvYmplY3QpID0+IHtcbiAgcmV0dXJuIHJ1bGUuZ2V0KG9iamVjdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9PYmplY3RFbnRyeS5qcyIsImltcG9ydCBwYXJhbXNVdGlscyBmcm9tICcuLi91dGlscy9wYXJhbXNVdGlscyc7XG5cbi8vIGV4dHJhY3RSdWxlc0Zyb21BcnJheVxuY29uc3QgQXJyYXlFbnRyeSA9IChmaWVsZCA9IFtdKSA9PiB7XG4gIGNvbnN0IHJ1bGVzID0gZmllbGQucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCBydWxlcyA9IHBhcmFtc1V0aWxzLmdldC5zaG9ydFN0cmluZ1ZhbGlkYXRpb24oY3VycmVudCk7XG4gICAgcmV0dXJuIHsgLi4uYWNjLCAuLi5ydWxlcyB9O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9vY3RhZm9ybS9zcmMvZW50cmllcy9BcnJheUVudHJ5LmpzIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgRXJyb3JzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEVycm9ycywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXJyb3JzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFcnJvcnMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChFcnJvcnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFcnJvcnMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFcnJvcnMsIFt7XG4gICAga2V5OiAndW5pcXVlS2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pcXVlS2V5KCkge1xuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBlcnJvcnMgPSB0aGlzLnByb3BzLmVycm9ycztcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdlcnJvcnMnIH0sXG4gICAgICAgIGVycm9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5tZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICB7IGtleTogX3RoaXMyLnVuaXF1ZUtleSgpIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3N0cm9uZycsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAnRXJyb3I6J1xuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdpJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2ZpZWxkJyB9LFxuICAgICAgICAgICAgICAgIGl0ZW0uZmllbGQuc3BsaXQoLyg/IVthLXpdKSg/PVtBLVpdKS9nKS5qb2luKCctJykudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVycm9ycztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMFZ5Y205eWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKU1pXRmpkQ0lzSWtOdmJYQnZibVZ1ZENJc0lrVnljbTl5Y3lJc0lrMWhkR2dpTENKeVlXNWtiMjBpTENKMGIxTjBjbWx1WnlJc0luTjFZbk4wY21sdVp5SXNJbVZ5Y205eWN5SXNJbkJ5YjNCeklpd2liV0Z3SWl3aWFYUmxiU0lzSW0xbGMzTmhaMlZ6SWl3aWJXVnpjMkZuWlNJc0luVnVhWEYxWlV0bGVTSXNJbVpwWld4a0lpd2ljM0JzYVhRaUxDSnFiMmx1SWl3aWRHOU1iM2RsY2tOaGMyVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNVMEZCYUVJc1VVRkJhVU1zVDBGQmFrTTdPMGxCUlhGQ1F5eE5PenM3T3pzN096czdPenRuUTBGRFVqdEJRVU5VTEdGQlFVOURMRXRCUVV0RExFMUJRVXdzUjBGQlkwTXNVVUZCWkN4RFFVRjFRaXhGUVVGMlFpeEZRVUV5UWtNc1UwRkJNMElzUTBGQmNVTXNRMEZCY2tNc1JVRkJkME1zUlVGQmVFTXNRMEZCVUR0QlFVTkVPenM3TmtKQlJWRTdRVUZCUVRzN1FVRkJRU3hWUVVORFF5eE5RVVJFTEVkQlExa3NTMEZCUzBNc1MwRkVha0lzUTBGRFEwUXNUVUZFUkRzN08wRkJSMUFzWVVGRFJUdEJRVUZCTzBGQlFVRXNWVUZCU1N4WFFVRlZMRkZCUVdRN1FVRkRSMEVzWlVGQlQwVXNSMEZCVUN4RFFVRlhMR2RDUVVGUk8wRkJRMnhDTEdsQ1FVTkZReXhMUVVGTFF5eFJRVUZNTEVOQlFXTkdMRWRCUVdRc1EwRkJhMElzVlVGQlEwY3NUMEZCUkN4RlFVRmhPMEZCUXpkQ0xHMUNRVU5GTzBGQlFVRTdRVUZCUVN4blFrRkJTU3hMUVVGTExFOUJRVXRETEZOQlFVd3NSVUZCVkR0QlFVTkZPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzWlVGRVJqdEJRVVZGTzBGQlFVRTdRVUZCUVN4clFrRkJSeXhYUVVGVkxFOUJRV0k3UVVGRlNVZ3NjVUpCUVV0SkxFdEJRVXdzUTBGRFIwTXNTMEZFU0N4RFFVTlRMSEZDUVVSVUxFVkJSVWRETEVsQlJrZ3NRMEZGVVN4SFFVWlNMRVZCUjBkRExGZEJTRWc3UVVGR1NpeGxRVVpHTzBGQlZVVTdRVUZCUVR0QlFVRkJPMEZCUVU5TU8wRkJRVkE3UVVGV1JpeGhRVVJHTzBGQlkwUXNWMEZtUkN4RFFVUkdPMEZCYTBKRUxGTkJia0pCTzBGQlJFZ3NUMEZFUmp0QlFYZENSRHM3T3p0RlFXaERhVU5ZTEZNN08yVkJRV1pETEUwaUxDSm1hV3hsSWpvaVJYSnliM0p6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTloWkcxcGJpOUViMk4xYldWdWRITXZVSEp2YW1WamRITXZiMk4wWVdadmNtMHRaR1Z0YnlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ3dnZXlCRGIyMXdiMjVsYm5RZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRVZ5Y205eWN5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRDQjdYRzRnSUhWdWFYRjFaVXRsZVNncGUxeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSmhibVJ2YlNncExuUnZVM1J5YVc1bktETTJLUzV6ZFdKemRISnBibWNvTWl3Z01UVXBYRzRnSUgxY2JseHVJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qmxjbkp2Y25NZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdQSFZzSUdOc1lYTnpUbUZ0WlQxY0ltVnljbTl5YzF3aVBseHVJQ0FnSUNBZ0lDQjdaWEp5YjNKekxtMWhjQ2hwZEdWdElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdhWFJsYlM1dFpYTnpZV2RsY3k1dFlYQW9LRzFsYzNOaFoyVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ2EyVjVQWHQwYUdsekxuVnVhWEYxWlV0bGVTZ3BmVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRISnZibWMrUlhKeWIzSTZQQzl6ZEhKdmJtYytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjMDVoYldVOUoyWnBaV3hrSno1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbDBaVzB1Wm1sbGJHUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNXpjR3hwZENndktEOGhXMkV0ZWwwcEtEODlXMEV0V2wwcEwyY3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVhbTlwYmlnbkxTY3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVkRzlNYjNkbGNrTmhjMlVvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmo1N2JXVnpjMkZuWlgwOEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJSDBwZlZ4dUlDQWdJQ0FnUEM5MWJENWNiaUFnSUNBcE8xeHVJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FcnJvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3ROYW1lOiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWlubGVuZ3RoOiA0LFxuICAgICAgbGV0dGVyOiB0cnVlXG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgcmVxdWlyZWQ6ICdGaXJzdCBOYW1lIGlzIHJlcXVpcmVkJ1xuICAgIH1cbiAgfSxcbiAgbGFzdE5hbWU6IHtcbiAgICBydWxlczogWydyZXF1aXJlZCcsICdtaW5sZW5ndGg6MyddXG4gIH0sXG4gIGVtYWlsOiAnZW1haWwnLFxuICBjb3VudHJ5OiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsdWVOb3RFcXVhbHM6ICdCUidcbiAgICB9XG4gIH0sXG4gIGZpbGU6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBleHRlbnNpb246IFsncG5nJywgJ2pwZyddLFxuICAgICAgbWF4c2l6ZTogNTAwMDAwXG4gICAgfVxuICB9LFxuICByZXN1bWU6ICdyZXF1aXJlZCcsXG4gIGdlbmRlcjogJ3JlcXVpcmVkJyxcbiAgY2hlY2tib3g6IHtcbiAgICBydWxlczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5jaGVja2VkOiAyXG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpiMjF3YjI1bGJuUnpMMEZ3Y0M5V1lXeHBaR0YwYVc5dVRXRndMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBjbk4wVG1GdFpTSXNJbkoxYkdWeklpd2ljbVZ4ZFdseVpXUWlMQ0p0YVc1c1pXNW5kR2dpTENKc1pYUjBaWElpTENKdFpYTnpZV2RsY3lJc0lteGhjM1JPWVcxbElpd2laVzFoYVd3aUxDSmpiM1Z1ZEhKNUlpd2lkbUZzZFdWT2IzUkZjWFZoYkhNaUxDSm1hV3hsSWl3aVpYaDBaVzV6YVc5dUlpd2liV0Y0YzJsNlpTSXNJbkpsYzNWdFpTSXNJbWRsYm1SbGNpSXNJbU5vWldOclltOTRJaXdpYldsdVkyaGxZMnRsWkNKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1pVRkJaVHRCUVVOaVFTeGhRVUZYTzBGQlExUkRMRmRCUVU4N1FVRkRURU1zWjBKQlFWVXNTVUZFVER0QlFVVk1ReXhwUWtGQlZ5eERRVVpPTzBGQlIweERMR05CUVZFN1FVRklTQ3hMUVVSRk8wRkJUVlJETEdOQlFWVTdRVUZEVWtnc1owSkJRVlU3UVVGRVJqdEJRVTVFTEVkQlJFVTdRVUZYWWtrc1dVRkJWVHRCUVVOU1RDeFhRVUZQTEVOQlFVTXNWVUZCUkN4RlFVRmhMR0ZCUVdJN1FVRkVReXhIUVZoSE8wRkJZMkpOTEZOQlFVOHNUMEZrVFR0QlFXVmlReXhYUVVGVE8wRkJRMUJRTEZkQlFVODdRVUZEVEVNc1owSkJRVlVzU1VGRVREdEJRVVZNVHl4elFrRkJaMEk3UVVGR1dEdEJRVVJCTEVkQlprazdRVUZ4UW1KRExGRkJRVTA3UVVGRFNsUXNWMEZCVHp0QlFVTk1ReXhuUWtGQlZTeEpRVVJNTzBGQlJVeFRMR2xDUVVGWExFTkJRVU1zUzBGQlJDeEZRVUZSTEV0QlFWSXNRMEZHVGp0QlFVZE1ReXhsUVVGVE8wRkJTRW83UVVGRVNDeEhRWEpDVHp0QlFUUkNZa01zVlVGQlVTeFZRVFZDU3p0QlFUWkNZa01zVlVGQlVTeFZRVGRDU3p0QlFUaENZa01zV1VGQlZUdEJRVU5TWkN4WFFVRlBPMEZCUTB4RExHZENRVUZWTEVsQlJFdzdRVUZGVEdNc2EwSkJRVms3UVVGR1VEdEJRVVJETzBGQk9VSkhMRU5CUVdZaUxDSm1hV3hsSWpvaVZtRnNhV1JoZEdsdmJrMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZZV1J0YVc0dlJHOWpkVzFsYm5SekwxQnliMnBsWTNSekwyOWpkR0ZtYjNKdExXUmxiVzhpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBjbk4wVG1GdFpUb2dlMXh1SUNBZ0lISjFiR1Z6T2lCN1hHNGdJQ0FnSUNCeVpYRjFhWEpsWkRvZ2RISjFaU3hjYmlBZ0lDQWdJRzFwYm14bGJtZDBhRG9nTkN4Y2JpQWdJQ0FnSUd4bGRIUmxjam9nZEhKMVpWeHVJQ0FnSUgwc1hHNGdJQ0FnYldWemMyRm5aWE02SUh0Y2JpQWdJQ0FnSUhKbGNYVnBjbVZrT2lBblJtbHljM1FnVG1GdFpTQnBjeUJ5WlhGMWFYSmxaQ2NzWEc0Z0lDQWdmU3hjYmlBZ2ZTeGNiaUFnYkdGemRFNWhiV1U2SUh0Y2JpQWdJQ0J5ZFd4bGN6b2dXeWR5WlhGMWFYSmxaQ2NzSUNkdGFXNXNaVzVuZEdnNk15ZGRYRzRnSUgwc1hHNGdJR1Z0WVdsc09pQW5aVzFoYVd3bkxGeHVJQ0JqYjNWdWRISjVPaUI3WEc0Z0lDQWdjblZzWlhNNklIdGNiaUFnSUNBZ0lISmxjWFZwY21Wa09pQjBjblZsTEZ4dUlDQWdJQ0FnZG1Gc2RXVk9iM1JGY1hWaGJITTZJQ2RDVWljc1hHNGdJQ0FnZlN4Y2JpQWdmU3hjYmlBZ1ptbHNaVG9nZTF4dUlDQWdJSEoxYkdWek9pQjdYRzRnSUNBZ0lDQnlaWEYxYVhKbFpEb2dkSEoxWlN4Y2JpQWdJQ0FnSUdWNGRHVnVjMmx2YmpvZ1d5ZHdibWNuTENBbmFuQm5KMTBzWEc0Z0lDQWdJQ0J0WVhoemFYcGxPaUExTURBd01EQmNiaUFnSUNCOUxGeHVJQ0I5TEZ4dUlDQnlaWE4xYldVNklDZHlaWEYxYVhKbFpDY3NYRzRnSUdkbGJtUmxjam9nSjNKbGNYVnBjbVZrSnl4Y2JpQWdZMmhsWTJ0aWIzZzZJSHRjYmlBZ0lDQnlkV3hsY3pvZ2UxeHVJQ0FnSUNBZ2NtVnhkV2x5WldRNklIUnlkV1VzWEc0Z0lDQWdJQ0J0YVc1amFHVmphMlZrT2lBeVhHNGdJQ0FnZlZ4dUlDQjlMRnh1ZlR0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9BcHAvVmFsaWRhdGlvbk1hcC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==