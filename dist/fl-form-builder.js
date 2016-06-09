function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

var classCallCheck = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = (classCallCheck && typeof classCallCheck === 'object' && 'default' in classCallCheck ? classCallCheck['default'] : classCallCheck);

var _core = __commonjs(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var require$$0$2 = (_core && typeof _core === 'object' && 'default' in _core ? _core['default'] : _core);

var _fails = __commonjs(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var require$$0$4 = (_fails && typeof _fails === 'object' && 'default' in _fails ? _fails['default'] : _fails);

var _descriptors = __commonjs(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !require$$0$4(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$0$3 = (_descriptors && typeof _descriptors === 'object' && 'default' in _descriptors ? _descriptors['default'] : _descriptors);

var _isObject = __commonjs(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var require$$3$1 = (_isObject && typeof _isObject === 'object' && 'default' in _isObject ? _isObject['default'] : _isObject);

var _toPrimitive = __commonjs(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require$$3$1;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
});

var require$$3 = (_toPrimitive && typeof _toPrimitive === 'object' && 'default' in _toPrimitive ? _toPrimitive['default'] : _toPrimitive);

var _global = __commonjs(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var require$$3$2 = (_global && typeof _global === 'object' && 'default' in _global ? _global['default'] : _global);

var _domCreate = __commonjs(function (module) {
var isObject = require$$3$1
  , document = require$$3$2.document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var require$$1$2 = (_domCreate && typeof _domCreate === 'object' && 'default' in _domCreate ? _domCreate['default'] : _domCreate);

var _ie8DomDefine = __commonjs(function (module) {
module.exports = !require$$0$3 && !require$$0$4(function(){
  return Object.defineProperty(require$$1$2('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$1$1 = (_ie8DomDefine && typeof _ie8DomDefine === 'object' && 'default' in _ie8DomDefine ? _ie8DomDefine['default'] : _ie8DomDefine);

var _anObject = __commonjs(function (module) {
var isObject = require$$3$1;
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var require$$2 = (_anObject && typeof _anObject === 'object' && 'default' in _anObject ? _anObject['default'] : _anObject);

var _objectDp = __commonjs(function (module, exports) {
var anObject       = require$$2
  , IE8_DOM_DEFINE = require$$1$1
  , toPrimitive    = require$$3
  , dP             = Object.defineProperty;

exports.f = require$$0$3 ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
});

var require$$1 = (_objectDp && typeof _objectDp === 'object' && 'default' in _objectDp ? _objectDp['default'] : _objectDp);

var _propertyDesc = __commonjs(function (module) {
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
});

var require$$3$3 = (_propertyDesc && typeof _propertyDesc === 'object' && 'default' in _propertyDesc ? _propertyDesc['default'] : _propertyDesc);

var _hide = __commonjs(function (module) {
var dP         = require$$1
  , createDesc = require$$3$3;
module.exports = require$$0$3 ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var require$$1$3 = (_hide && typeof _hide === 'object' && 'default' in _hide ? _hide['default'] : _hide);

var _aFunction = __commonjs(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var require$$0$5 = (_aFunction && typeof _aFunction === 'object' && 'default' in _aFunction ? _aFunction['default'] : _aFunction);

var _ctx = __commonjs(function (module) {
// optional / simple context binding
var aFunction = require$$0$5;
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
});

var require$$1$4 = (_ctx && typeof _ctx === 'object' && 'default' in _ctx ? _ctx['default'] : _ctx);

var _export = __commonjs(function (module, exports) {
var global    = require$$3$2
  , core      = require$$0$2
  , ctx       = require$$1$4
  , hide      = require$$1$3
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
});

var require$$2$1 = (_export && typeof _export === 'object' && 'default' in _export ? _export['default'] : _export);

var es6_object_defineProperty = __commonjs(function (module) {
var $export = require$$2$1;
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require$$0$3, 'Object', {defineProperty: require$$1.f});
});

var defineProperty$1 = __commonjs(function (module) {
var $Object = require$$0$2.Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
});

var require$$0$1 = (defineProperty$1 && typeof defineProperty$1 === 'object' && 'default' in defineProperty$1 ? defineProperty$1['default'] : defineProperty$1);

var defineProperty = __commonjs(function (module) {
module.exports = { "default": require$$0$1, __esModule: true };
});

var require$$0 = (defineProperty && typeof defineProperty === 'object' && 'default' in defineProperty ? defineProperty['default'] : defineProperty);

var createClass = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _defineProperty = require$$0;

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = (createClass && typeof createClass === 'object' && 'default' in createClass ? createClass['default'] : createClass);

var _uid = __commonjs(function (module) {
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
});

var require$$4 = (_uid && typeof _uid === 'object' && 'default' in _uid ? _uid['default'] : _uid);

var _shared = __commonjs(function (module) {
var global = require$$3$2
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
});

var require$$1$5 = (_shared && typeof _shared === 'object' && 'default' in _shared ? _shared['default'] : _shared);

var _wks = __commonjs(function (module) {
var store      = require$$1$5('wks')
  , uid        = require$$4
  , Symbol     = require$$3$2.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var require$$0$9 = (_wks && typeof _wks === 'object' && 'default' in _wks ? _wks['default'] : _wks);

var _wksExt = __commonjs(function (module, exports) {
exports.f = require$$0$9;
});

var require$$0$8 = (_wksExt && typeof _wksExt === 'object' && 'default' in _wksExt ? _wksExt['default'] : _wksExt);

var _library = __commonjs(function (module) {
module.exports = true;
});

var require$$9 = (_library && typeof _library === 'object' && 'default' in _library ? _library['default'] : _library);

var _wksDefine = __commonjs(function (module) {
var global         = require$$3$2
  , core           = require$$0$2
  , LIBRARY        = require$$9
  , wksExt         = require$$0$8
  , defineProperty = require$$1.f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
});

var require$$17 = (_wksDefine && typeof _wksDefine === 'object' && 'default' in _wksDefine ? _wksDefine['default'] : _wksDefine);

var es7_symbol_observable = __commonjs(function (module) {
require$$17('observable');
});

var es7_symbol_asyncIterator = __commonjs(function (module) {
require$$17('asyncIterator');
});

var _objectGops = __commonjs(function (module, exports) {
exports.f = Object.getOwnPropertySymbols;
});

var require$$1$6 = (_objectGops && typeof _objectGops === 'object' && 'default' in _objectGops ? _objectGops['default'] : _objectGops);

var _objectPie = __commonjs(function (module, exports) {
exports.f = {}.propertyIsEnumerable;
});

var require$$0$10 = (_objectPie && typeof _objectPie === 'object' && 'default' in _objectPie ? _objectPie['default'] : _objectPie);

var _enumBugKeys = __commonjs(function (module) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
});

var require$$3$4 = (_enumBugKeys && typeof _enumBugKeys === 'object' && 'default' in _enumBugKeys ? _enumBugKeys['default'] : _enumBugKeys);

var _sharedKey = __commonjs(function (module) {
var shared = require$$1$5('keys')
  , uid    = require$$4;
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
});

var require$$0$12 = (_sharedKey && typeof _sharedKey === 'object' && 'default' in _sharedKey ? _sharedKey['default'] : _sharedKey);

var _toInteger = __commonjs(function (module) {
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
});

var require$$1$9 = (_toInteger && typeof _toInteger === 'object' && 'default' in _toInteger ? _toInteger['default'] : _toInteger);

var _toIndex = __commonjs(function (module) {
var toInteger = require$$1$9
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
});

var require$$0$13 = (_toIndex && typeof _toIndex === 'object' && 'default' in _toIndex ? _toIndex['default'] : _toIndex);

var _toLength = __commonjs(function (module) {
// 7.1.15 ToLength
var toInteger = require$$1$9
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
});

var require$$1$10 = (_toLength && typeof _toLength === 'object' && 'default' in _toLength ? _toLength['default'] : _toLength);

var _defined = __commonjs(function (module) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
});

var require$$0$14 = (_defined && typeof _defined === 'object' && 'default' in _defined ? _defined['default'] : _defined);

var _cof = __commonjs(function (module) {
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
});

var require$$0$15 = (_cof && typeof _cof === 'object' && 'default' in _cof ? _cof['default'] : _cof);

var _iobject = __commonjs(function (module) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require$$0$15;
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
});

var require$$1$11 = (_iobject && typeof _iobject === 'object' && 'default' in _iobject ? _iobject['default'] : _iobject);

var _toIobject = __commonjs(function (module) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require$$1$11
  , defined = require$$0$14;
module.exports = function(it){
  return IObject(defined(it));
};
});

var require$$2$2 = (_toIobject && typeof _toIobject === 'object' && 'default' in _toIobject ? _toIobject['default'] : _toIobject);

var _arrayIncludes = __commonjs(function (module) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require$$2$2
  , toLength  = require$$1$10
  , toIndex   = require$$0$13;
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
});

var require$$1$8 = (_arrayIncludes && typeof _arrayIncludes === 'object' && 'default' in _arrayIncludes ? _arrayIncludes['default'] : _arrayIncludes);

var _has = __commonjs(function (module) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
});

var require$$2$3 = (_has && typeof _has === 'object' && 'default' in _has ? _has['default'] : _has);

var _objectKeysInternal = __commonjs(function (module) {
var has          = require$$2$3
  , toIObject    = require$$2$2
  , arrayIndexOf = require$$1$8(false)
  , IE_PROTO     = require$$0$12('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
});

var require$$1$7 = (_objectKeysInternal && typeof _objectKeysInternal === 'object' && 'default' in _objectKeysInternal ? _objectKeysInternal['default'] : _objectKeysInternal);

var _objectGopn = __commonjs(function (module, exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require$$1$7
  , hiddenKeys = require$$3$4.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
});

var require$$0$11 = (_objectGopn && typeof _objectGopn === 'object' && 'default' in _objectGopn ? _objectGopn['default'] : _objectGopn);

var _objectKeys = __commonjs(function (module) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require$$1$7
  , enumBugKeys = require$$3$4;

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
});

var require$$1$12 = (_objectKeys && typeof _objectKeys === 'object' && 'default' in _objectKeys ? _objectKeys['default'] : _objectKeys);

var _objectGopd = __commonjs(function (module, exports) {
var pIE            = require$$0$10
  , createDesc     = require$$3$3
  , toIObject      = require$$2$2
  , toPrimitive    = require$$3
  , has            = require$$2$3
  , IE8_DOM_DEFINE = require$$1$1
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require$$0$3 ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
});

var require$$1$13 = (_objectGopd && typeof _objectGopd === 'object' && 'default' in _objectGopd ? _objectGopd['default'] : _objectGopd);

var _objectGopnExt = __commonjs(function (module) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require$$2$2
  , gOPN      = require$$0$11.f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
});

var require$$8 = (_objectGopnExt && typeof _objectGopnExt === 'object' && 'default' in _objectGopnExt ? _objectGopnExt['default'] : _objectGopnExt);

var _html = __commonjs(function (module) {
module.exports = require$$3$2.document && document.documentElement;
});

var require$$0$17 = (_html && typeof _html === 'object' && 'default' in _html ? _html['default'] : _html);

var _objectDps = __commonjs(function (module) {
var dP       = require$$1
  , anObject = require$$2
  , getKeys  = require$$1$12;

module.exports = require$$0$3 ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
});

var require$$4$1 = (_objectDps && typeof _objectDps === 'object' && 'default' in _objectDps ? _objectDps['default'] : _objectDps);

var _objectCreate = __commonjs(function (module) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require$$2
  , dPs         = require$$4$1
  , enumBugKeys = require$$3$4
  , IE_PROTO    = require$$0$12('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require$$1$2('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require$$0$17.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
});

var require$$0$16 = (_objectCreate && typeof _objectCreate === 'object' && 'default' in _objectCreate ? _objectCreate['default'] : _objectCreate);

var _isArray = __commonjs(function (module) {
// 7.2.2 IsArray(argument)
var cof = require$$0$15;
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
});

var require$$14 = (_isArray && typeof _isArray === 'object' && 'default' in _isArray ? _isArray['default'] : _isArray);

var _enumKeys = __commonjs(function (module) {
// all enumerable object keys, includes symbols
var getKeys = require$$1$12
  , gOPS    = require$$1$6
  , pIE     = require$$0$10;
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
});

var require$$15 = (_enumKeys && typeof _enumKeys === 'object' && 'default' in _enumKeys ? _enumKeys['default'] : _enumKeys);

var _keyof = __commonjs(function (module) {
var getKeys   = require$$1$12
  , toIObject = require$$2$2;
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
});

var require$$16 = (_keyof && typeof _keyof === 'object' && 'default' in _keyof ? _keyof['default'] : _keyof);

var _setToStringTag = __commonjs(function (module) {
var def = require$$1.f
  , has = require$$2$3
  , TAG = require$$0$9('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
});

var require$$2$4 = (_setToStringTag && typeof _setToStringTag === 'object' && 'default' in _setToStringTag ? _setToStringTag['default'] : _setToStringTag);

var _meta = __commonjs(function (module) {
var META     = require$$4('meta')
  , isObject = require$$3$1
  , has      = require$$2$3
  , setDesc  = require$$1.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require$$0$4(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var require$$24 = (_meta && typeof _meta === 'object' && 'default' in _meta ? _meta['default'] : _meta);

var _redefine = __commonjs(function (module) {
module.exports = require$$1$3;
});

var require$$7 = (_redefine && typeof _redefine === 'object' && 'default' in _redefine ? _redefine['default'] : _redefine);

var es6_symbol = __commonjs(function (module) {
'use strict';
// ECMAScript 6 symbols shim
var global         = require$$3$2
  , has            = require$$2$3
  , DESCRIPTORS    = require$$0$3
  , $export        = require$$2$1
  , redefine       = require$$7
  , META           = require$$24.KEY
  , $fails         = require$$0$4
  , shared         = require$$1$5
  , setToStringTag = require$$2$4
  , uid            = require$$4
  , wks            = require$$0$9
  , wksExt         = require$$0$8
  , wksDefine      = require$$17
  , keyOf          = require$$16
  , enumKeys       = require$$15
  , isArray        = require$$14
  , anObject       = require$$2
  , toIObject      = require$$2$2
  , toPrimitive    = require$$3
  , createDesc     = require$$3$3
  , _create        = require$$0$16
  , gOPNExt        = require$$8
  , $GOPD          = require$$1$13
  , $DP            = require$$1
  , $keys          = require$$1$12
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require$$0$11.f = gOPNExt.f = $getOwnPropertyNames;
  require$$0$10.f  = $propertyIsEnumerable;
  require$$1$6.f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require$$9){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require$$1$3($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
});

var index = __commonjs(function (module) {
module.exports = require$$0$2.Symbol;
});

var require$$0$7 = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

var symbol = __commonjs(function (module) {
module.exports = { "default": require$$0$7, __esModule: true };
});

var require$$0$6 = (symbol && typeof symbol === 'object' && 'default' in symbol ? symbol['default'] : symbol);

var _iterators = __commonjs(function (module) {
module.exports = {};
});

var require$$4$2 = (_iterators && typeof _iterators === 'object' && 'default' in _iterators ? _iterators['default'] : _iterators);

var _toObject = __commonjs(function (module) {
// 7.1.13 ToObject(argument)
var defined = require$$0$14;
module.exports = function(it){
  return Object(defined(it));
};
});

var require$$2$5 = (_toObject && typeof _toObject === 'object' && 'default' in _toObject ? _toObject['default'] : _toObject);

var _objectGpo = __commonjs(function (module) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require$$2$3
  , toObject    = require$$2$5
  , IE_PROTO    = require$$0$12('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
});

var require$$1$15 = (_objectGpo && typeof _objectGpo === 'object' && 'default' in _objectGpo ? _objectGpo['default'] : _objectGpo);

var _iterCreate = __commonjs(function (module) {
'use strict';
var create         = require$$0$16
  , descriptor     = require$$3$3
  , setToStringTag = require$$2$4
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require$$1$3(IteratorPrototype, require$$0$9('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
});

var require$$3$5 = (_iterCreate && typeof _iterCreate === 'object' && 'default' in _iterCreate ? _iterCreate['default'] : _iterCreate);

var _iterDefine = __commonjs(function (module) {
'use strict';
var LIBRARY        = require$$9
  , $export        = require$$2$1
  , redefine       = require$$7
  , hide           = require$$1$3
  , has            = require$$2$3
  , Iterators      = require$$4$2
  , $iterCreate    = require$$3$5
  , setToStringTag = require$$2$4
  , getPrototypeOf = require$$1$15
  , ITERATOR       = require$$0$9('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
});

var require$$0$19 = (_iterDefine && typeof _iterDefine === 'object' && 'default' in _iterDefine ? _iterDefine['default'] : _iterDefine);

var _iterStep = __commonjs(function (module) {
module.exports = function(done, value){
  return {value: value, done: !!done};
};
});

var require$$3$6 = (_iterStep && typeof _iterStep === 'object' && 'default' in _iterStep ? _iterStep['default'] : _iterStep);

var _addToUnscopables = __commonjs(function (module) {
module.exports = function(){ /* empty */ };
});

var require$$4$3 = (_addToUnscopables && typeof _addToUnscopables === 'object' && 'default' in _addToUnscopables ? _addToUnscopables['default'] : _addToUnscopables);

var es6_array_iterator = __commonjs(function (module) {
'use strict';
var addToUnscopables = require$$4$3
  , step             = require$$3$6
  , Iterators        = require$$4$2
  , toIObject        = require$$2$2;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require$$0$19(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
});

var web_dom_iterable = __commonjs(function (module) {
var global        = require$$3$2
  , hide          = require$$1$3
  , Iterators     = require$$4$2
  , TO_STRING_TAG = require$$0$9('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
});

var _stringAt = __commonjs(function (module) {
var toInteger = require$$1$9
  , defined   = require$$0$14;
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
});

var require$$1$16 = (_stringAt && typeof _stringAt === 'object' && 'default' in _stringAt ? _stringAt['default'] : _stringAt);

var es6_string_iterator = __commonjs(function (module) {
'use strict';
var $at  = require$$1$16(true);

// 21.1.3.27 String.prototype[@@iterator]()
require$$0$19(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
});

var iterator$1 = __commonjs(function (module) {
module.exports = require$$0$8.f('iterator');
});

var require$$0$18 = (iterator$1 && typeof iterator$1 === 'object' && 'default' in iterator$1 ? iterator$1['default'] : iterator$1);

var iterator = __commonjs(function (module) {
module.exports = { "default": require$$0$18, __esModule: true };
});

var require$$1$14 = (iterator && typeof iterator === 'object' && 'default' in iterator ? iterator['default'] : iterator);

var _typeof = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _iterator = require$$1$14;

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require$$0$6;

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof$1 = (_typeof && typeof _typeof === 'object' && 'default' in _typeof ? _typeof['default'] : _typeof);

var possibleConstructorReturn = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _typeof2 = _typeof$1;

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = (possibleConstructorReturn && typeof possibleConstructorReturn === 'object' && 'default' in possibleConstructorReturn ? possibleConstructorReturn['default'] : possibleConstructorReturn);

var es6_object_create = __commonjs(function (module) {
var $export = require$$2$1
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require$$0$16});
});

var create$1 = __commonjs(function (module) {
var $Object = require$$0$2.Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
});

var require$$0$20 = (create$1 && typeof create$1 === 'object' && 'default' in create$1 ? create$1['default'] : create$1);

var create = __commonjs(function (module) {
module.exports = { "default": require$$0$20, __esModule: true };
});

var require$$1$17 = (create && typeof create === 'object' && 'default' in create ? create['default'] : create);

var _setProto = __commonjs(function (module) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require$$3$1
  , anObject = require$$2;
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require$$1$4(Function.call, require$$1$13.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
});

var require$$0$22 = (_setProto && typeof _setProto === 'object' && 'default' in _setProto ? _setProto['default'] : _setProto);

var es6_object_setPrototypeOf = __commonjs(function (module) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require$$2$1;
$export($export.S, 'Object', {setPrototypeOf: require$$0$22.set});
});

var setPrototypeOf$1 = __commonjs(function (module) {
module.exports = require$$0$2.Object.setPrototypeOf;
});

var require$$0$21 = (setPrototypeOf$1 && typeof setPrototypeOf$1 === 'object' && 'default' in setPrototypeOf$1 ? setPrototypeOf$1['default'] : setPrototypeOf$1);

var setPrototypeOf = __commonjs(function (module) {
module.exports = { "default": require$$0$21, __esModule: true };
});

var require$$2$6 = (setPrototypeOf && typeof setPrototypeOf === 'object' && 'default' in setPrototypeOf ? setPrototypeOf['default'] : setPrototypeOf);

var inherits = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require$$2$6;

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require$$1$17;

var _create2 = _interopRequireDefault(_create);

var _typeof2 = _typeof$1;

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = (inherits && typeof inherits === 'object' && 'default' in inherits ? inherits['default'] : inherits);

// Bug checking function that will throw an error whenever
// the condition sent to it is evaluated to false
/**
 * Processes the message and outputs the correct message if the condition
 * is false. Otherwise it outputs null.
 * @api private
 * @method processCondition
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return {String | null}  - Error message if there is an error, nul otherwise.
 */
function processCondition(condition, errorMessage) {
  if (!condition) {
    var completeErrorMessage = '';
    var re = /at ([^\s]+)\s\(/g;
    var stackTrace = new Error().stack;
    var stackFunctions = [];

    var funcName = re.exec(stackTrace);
    while (funcName && funcName[1]) {
      stackFunctions.push(funcName[1]);
      funcName = re.exec(stackTrace);
    }

    // Number 0 is processCondition itself,
    // Number 1 is assert,
    // Number 2 is the caller function.
    if (stackFunctions[2]) {
      completeErrorMessage = stackFunctions[2] + ': ' + completeErrorMessage;
    }

    completeErrorMessage += errorMessage;
    return completeErrorMessage;
  }

  return null;
}

/**
 * Throws an error if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert(myDate !== undefined, "Date cannot be undefined.");
 * @api public
 * @method assert
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
function assert(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    throw new Error(error);
  }
}

/**
 * Logs a warning if the boolean passed to it evaluates to false.
 * To be used like this:
 * 		assert.warn(myDate !== undefined, "No date provided.");
 * @api public
 * @method warn
 * @param  {Boolean} condition - Result of the evaluated condition
 * @param  {String} errorMessage - Message explainig the error in case it is thrown
 * @return void
 */
assert.warn = function warn(condition, errorMessage) {
  var error = processCondition(condition, errorMessage);
  if (typeof error === 'string') {
    console.warn(error);
  }
};

/**
 * This class creates elements with an html counterpart.
 * HTML components are stored in this.html, and the main container
 * is this.html.container.
 * @abstract @class
 */

var ViewController = function () {
  function ViewController(modulePrefix) {
    _classCallCheck(this, ViewController);

    this.html = {};
    this.html.container = document.createElement('div');

    this.listeners = {};
    this.acceptEvents('destroy');

    this.modulePrefix = modulePrefix;
    this.cssPrefix = this.modulePrefix + '-' + this.constructor.name;
    this.html.container.classList.add(this.cssPrefix);
  }

  /**
   * Sets which events will be accepted.
   * @method acceptEvents
   * @param  {Array<String>} eventList
   * @return {void}
   */


  _createClass(ViewController, [{
    key: 'acceptEvents',
    value: function acceptEvents() {
      for (var _len = arguments.length, eventList = Array(_len), _key = 0; _key < _len; _key++) {
        eventList[_key] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = eventList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var eventName = _step.value;

          this.listeners[eventName] = new Set();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * @method on
     * @param  {function} fn
     * @param {String} event
     * @return {void}
     */

  }, {
    key: 'on',
    value: function on(event, fn) {
      assert(this.listeners[event], 'Trying to listen to invalid event: ' + event);
      this.listeners[event].add(fn);
    }

    /**
     * @method removeListener
     * @param  {String} event
     * @param  {Function} fn
     * @return {void}
     */

  }, {
    key: 'removeListener',
    value: function removeListener(event, fn) {
      assert(this.listeners[event], 'Trying to remove listener from invalid event: ' + event);
      this.listeners[event].delete(fn);
    }

    /**
     * @method trigger
     * @param  {String} event
     */

  }, {
    key: 'trigger',
    value: function trigger(event) {
      var _this = this;

      this.listeners[event].forEach(function (fn) {
        return fn(_this);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.html.container.remove();
      this.listeners = null;
      this.html = {};
    }
  }, {
    key: 'getHtmlContainer',
    value: function getHtmlContainer() {
      return this.html.container;
    }
  }]);

  return ViewController;
}();

var _objectSap = __commonjs(function (module) {
// most Object methods by ES6 should accept primitives
var $export = require$$2$1
  , core    = require$$0$2
  , fails   = require$$0$4;
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
});

var require$$0$25 = (_objectSap && typeof _objectSap === 'object' && 'default' in _objectSap ? _objectSap['default'] : _objectSap);

var es6_object_getOwnPropertyDescriptor = __commonjs(function (module) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require$$2$2
  , $getOwnPropertyDescriptor = require$$1$13.f;

require$$0$25('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
});

var getOwnPropertyDescriptor$1 = __commonjs(function (module) {
var $Object = require$$0$2.Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
});

var require$$0$24 = (getOwnPropertyDescriptor$1 && typeof getOwnPropertyDescriptor$1 === 'object' && 'default' in getOwnPropertyDescriptor$1 ? getOwnPropertyDescriptor$1['default'] : getOwnPropertyDescriptor$1);

var getOwnPropertyDescriptor = __commonjs(function (module) {
module.exports = { "default": require$$0$24, __esModule: true };
});

var require$$0$23 = (getOwnPropertyDescriptor && typeof getOwnPropertyDescriptor === 'object' && 'default' in getOwnPropertyDescriptor ? getOwnPropertyDescriptor['default'] : getOwnPropertyDescriptor);

var es6_object_getPrototypeOf = __commonjs(function (module) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require$$2$5
  , $getPrototypeOf = require$$1$15;

require$$0$25('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
});

var getPrototypeOf$1 = __commonjs(function (module) {
module.exports = require$$0$2.Object.getPrototypeOf;
});

var require$$0$26 = (getPrototypeOf$1 && typeof getPrototypeOf$1 === 'object' && 'default' in getPrototypeOf$1 ? getPrototypeOf$1['default'] : getPrototypeOf$1);

var getPrototypeOf = __commonjs(function (module) {
module.exports = { "default": require$$0$26, __esModule: true };
});

var require$$1$18 = (getPrototypeOf && typeof getPrototypeOf === 'object' && 'default' in getPrototypeOf ? getPrototypeOf['default'] : getPrototypeOf);

var get = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require$$1$18;

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require$$0$23;

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
});

var _get = (get && typeof get === 'object' && 'default' in get ? get['default'] : get);

function createSwitch(labelText, modulePrefix) {
  var cssPrefix = modulePrefix + '-ui-switch';

  var wrapper = document.createElement('label');
  wrapper.textContent = labelText;

  var switchElement = document.createElement('div');
  switchElement.classList.add(cssPrefix);

  var switchInput = document.createElement('input');
  switchInput.classList.add(cssPrefix + '-toggle');
  switchInput.classList.add(cssPrefix + '-toggle-round');
  switchInput.type = 'checkbox';
  switchInput.id = cssPrefix + '-' + Date.now();
  switchElement.appendChild(switchInput);

  var switchLabel = document.createElement('label');
  switchLabel.setAttribute('for', switchInput.id);
  switchElement.appendChild(switchLabel);

  wrapper.appendChild(switchElement);
  return wrapper;
}

/**
 * executes a callback when there is a click outside of a list of
 * elements
 * @method onClickOut
 * @param  {Array<HTMLElement>} elements
 * @param  {Function} callback
 * @return {Function} A function to cancel onClickOut
 */
function onClickOut(elements, callback) {
  var clickOutOfComponent = createClickOut(elements, callback);
  document.body.addEventListener('mousedown', clickOutOfComponent, true);

  return function cancelOnclickOut() {
    document.body.removeEventListener('mousedown', clickOutOfComponent, true);
  };
}

// Returns a function that will execute a callback if there is a click
// outside of the given element.
function createClickOut(elements, callback) {
  return function clickOutOfComponent(e) {
    if (clickIsWithinComponents(elements, e)) {
      return;
    }

    document.body.removeEventListener('mousedown', clickOutOfComponent, true);
    callback();
  };
}

function clickIsWithinComponents(elements, e) {
  var x = e.clientX;
  var y = e.clientY;
  var isInsideAnyElement = false;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      var elementBox = element.getBoundingClientRect();
      var top = elementBox.top;
      var bottom = elementBox.bottom;
      var right = elementBox.right;
      var left = elementBox.left;

      // If point is outside of the component
      if (x > left && right > x && bottom > y && y > top) {
        isInsideAnyElement = true;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return isInsideAnyElement;
}

function blinkRed(el, modulePrefix) {
  if (!el || !el.classList) {
    return;
  }

  var blickClass = modulePrefix + "-blink-red";
  el.classList.add(blickClass);
  setTimeout(function () {
    el.classList.remove(blickClass);
  }, 1500);
}

/**
 * @function throttle
 * @param  {integer}   FuncDelay
 * @param  {Function} callback
 * @return {Function}                  the throttled function
 */
function throttle(FuncDelay, callback) {
  var lastCall = +new Date();
  var delay = FuncDelay;
  var params = void 0;
  var context = {};
  var calledDuringDelay = false;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var now = +new Date();
    var diff = now - lastCall;
    var timeToEndOfDelay = void 0;

    params = args;

    if (diff > delay) {
      callback.apply(context, params); // Call function with latest parameters
      calledDuringDelay = false;
      lastCall = now;
    } else if (!calledDuringDelay) {
      // If it wasn't called yet, call it when there is enough delay.
      timeToEndOfDelay = delay - diff;

      setTimeout(function () {
        callback.apply(context, params); // Call function with latest parameters
      }, timeToEndOfDelay);

      calledDuringDelay = true;
      lastCall = now + timeToEndOfDelay;
    } // Otherwise do nothing.
  };
}

/**
 * Will take care of the dragging and reordering a list for one drag.
 * @function trackReorderDrag
 * @param  {event} paramE        The dragstart event, from which this should be called.
 * @param  {HTMLElement} paramEl       The main Element being dragged
 * @param  {Array<HTMLElement>} paramElements Array of elements to be tracked.
 * @return {void}
 */
function trackReorderDrag(paramE, paramEl, paramElements) {
  function setTranslation(el, val) {
    el.style.transform = 'translate3d(0, ' + val + 'px, 0)'; //  eslint-disable-line no-param-reassign
  }

  /**
   * @function resetElementsPositions
   * @param {Array[HTMLElement]} els Elements being tracked
   */
  function resetElementsPositions(els) {
    els.forEach(function (el) {
      setTranslation(el, 0);
    });
  }

  /**
   * @function calculateElementHeight
   * @param  {Array[HTMLElement]} els    Elements ordered by vertical position
   * @param  {Integer} elIndex
   * @return {void}
   */
  function calculateElementHeight(els, elIndex) {
    var spaceOccupied = void 0;

    // If not the last element
    if (elIndex < els.length - 1) {
      var elTop = els[elIndex].getBoundingClientRect().top;
      var nextElTop = els[elIndex + 1].getBoundingClientRect().top;
      spaceOccupied = nextElTop - elTop;
    } else {
      // let's estimate the general vertical distance between elements by
      // subtracting the size of the first element from the distance between
      // its top and the next element.
      var firstElSpaceOccupied = els[1].getBoundingClientRect().top - els[0].getBoundingClientRect().top;
      var verticalDistance = firstElSpaceOccupied - els[0].clientHeight;
      var height = els[elIndex].clientHeight;
      spaceOccupied = height + verticalDistance;
    }

    return spaceOccupied;
  }

  /**
   * @function createDragMover
   * @param  {Array[HTMLElements]} els         [description]
   * @param  {Array[Integer]} tops        Initial tops
   * @param  {Integer} targetIndex Index of element being dragged around
   * @return {function}             The function to translate elements in the
   *                                  list to make room for the dragged element
   */
  function createDragMover(els, tops, targetIndex) {
    var target = els[targetIndex];
    var targetInitialTop = tops[targetIndex];
    var targetHeight = calculateElementHeight(els, targetIndex);
    return function doDragMove() {
      var targetTop = target.getBoundingClientRect().top;
      var movedUp = targetTop < targetInitialTop;

      var i = void 0;
      for (i = 0; i < tops.length; i++) {
        if (i === targetIndex) {
          continue;
        } else if (!movedUp && targetTop > tops[i] && tops[i] > targetInitialTop) {
          setTranslation(els[i], -targetHeight);
        } else if (movedUp && targetTop < tops[i + 1] && tops[i] < targetInitialTop) {
          setTranslation(els[i], targetHeight);
        } else {
          setTranslation(els[i], 0);
        }
      }
    };
  }

  function createDragListener(els, tops, targetIndex, initialY) {
    var target = els[targetIndex];
    var doDragMove = createDragMover(els, tops, targetIndex);
    var shouldStopListening = void 0;
    function dragListener(e) {
      if (shouldStopListening) {
        return;
      }

      doDragMove();
      var newY = e.pageY;
      if (newY === 0) {
        return;
      } // correct weird behaviour when mouse goes up

      var diff = newY - initialY;
      setTranslation(target, diff);
    }

    dragListener.stop = function () {
      shouldStopListening = true;
    };

    return dragListener;
  }

  function getElementsCurrentTop(els) {
    var tops = [];
    els.forEach(function (el) {
      tops.push(el.getBoundingClientRect().top);
    });

    return tops;
  }

  // function adjustElementsToTops(els, tops) {
  //   const currentTops = getElementsCurrentTop(els);
  //   els.forEach(function (el, i) {
  //     const diff =  currentTops[i] - tops[i];
  //     setTranslation(el, diff);
  //   });
  // }

  function insertTargetInRightPlace(els, initialTops, targetIndex) {
    var target = els[targetIndex];
    var topsBeforeInsertion = getElementsCurrentTop(els);
    var targetTop = topsBeforeInsertion[targetIndex];
    var i = 0;

    // Pass by all elements that are above the target
    while (topsBeforeInsertion[i] && topsBeforeInsertion[i] < targetTop || i === targetIndex) {
      i++;
    }

    // Take away transitions from all elements and save them
    var initialTransitions = [];
    els.forEach(function (anEl) {
      initialTransitions.push(anEl.style.transition);
      anEl.style.transition = 'none'; // eslint-disable-line no-param-reassign
    });

    // Put everyone at translate3d(0,0,0) without transitions
    resetElementsPositions(els);

    // Add the element in the appropriate place. This will displace everyone else.
    var parent = els[i] ? els[i].parentElement : els[els.length - 1].parentElement;
    if (!parent || !parent.appendChild) {
      throw new Error('trackReorderDrag(): No parent found in element list.');
    } else if (els[i]) {
      parent.insertBefore(target, els[i]);
    } else {
      var lastEl = els[els.length - 1];
      parent.insertBefore(target, lastEl);
      parent.insertBefore(lastEl, target);
    }

    // Now let's translate it to where it was just before it was repositioned
    // All without transitions. It will seem like it never left that spot.
    var futureTop = target.getBoundingClientRect().top;
    var displacement = targetTop - futureTop;
    setTranslation(target, displacement);

    // Let's add a timeout to get the last place in the UI queue and let the
    // CSS renderer to process the fact that all these elements do not have
    // transitions and should appear wherever their coordinates say immediately.
    setTimeout(function () {
      // Restore all transitions
      els.forEach(function (anEl, k) {
        anEl.style.transition = initialTransitions[k]; // eslint-disable-line no-param-reassign
      });

      // Now transition the target can transition smoothly from where it
      // was dropped to its final position at translate value 0.
      setTranslation(target, 0);
    }, 15);

    //  adjustElementsToTops(els, topsBeforeInsertion);
  }

  function init(e, el, elements) {
    if ((typeof el === 'undefined' ? 'undefined' : _typeof$1(el)) !== 'object') {
      throw new Error('trackReorderDrag(): Invalid parameter');
    }

    // Reorder elements
    elements.sort(function (el1, el2) {
      return el1.getBoundingClientRect().top > el2.getBoundingClientRect().top;
    });

    // Set initial states
    var initialTops = [];
    elements.forEach(function (element) {
      initialTops.push(element.getBoundingClientRect().top);
    });

    var elIndex = elements.indexOf(el);

    // Create throttled drag listener
    var initialY = e.pageY;
    var dragListener = createDragListener(elements, initialTops, elIndex, initialY);
    var throttledDragListener = throttle(50, dragListener);

    // Listen to drags
    var eventTarget = e.target;
    eventTarget.addEventListener('drag', throttledDragListener);
    eventTarget.addEventListener('dragend', function dragEndListener() {
      dragListener.stop();
      insertTargetInRightPlace(elements, initialTops, elIndex);
      eventTarget.removeEventListener('drag', throttledDragListener);
      eventTarget.removeEventListener('dragend', dragEndListener);
    });
  }

  init(paramE, paramEl, paramElements);
}

var utils = {
  trackReorderDrag: trackReorderDrag,
  createSwitch: createSwitch,
  onClickOut: onClickOut,
  blinkRed: blinkRed
};

/**
 * @abstract @class FormComponent
 */

var FormComponent = function (_ViewController) {
  _inherits(FormComponent, _ViewController);

  _createClass(FormComponent, null, [{
    key: 'getInfo',
    value: function getInfo() {
      return {
        description: 'General Component',
        iconClass: undefined,
        name: this.name
      };
    }
  }]);

  function FormComponent(modulePrefix) {
    _classCallCheck(this, FormComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormComponent).call(this, modulePrefix));

    _this.cssPrefix = modulePrefix + '-FormComponent';
    _this.html.container.classList.add(modulePrefix + '-FormComponent');

    _this.editables = new Set();
    _this.isRequired = false;
    _this.isConfigVisible = false;
    _this.isDetroyed = false;
    _this.lastState = null;

    _this.acceptEvents('destroy', 'change');

    // Focused on config show
    _this.focusElement = null;
    _this.buildHtml();
    _this.setRequired(false);
    return _this;
  }

  _createClass(FormComponent, [{
    key: 'buildHtml',
    value: function buildHtml() {
      var _this2 = this;

      var frag = document.createDocumentFragment();

      // -- Content --
      this.html.content = document.createElement('div');
      this.html.content.classList.add(this.cssPrefix + '-content');
      frag.appendChild(this.html.content);

      this.html.title = document.createElement('h3');
      this.html.title.innerText = 'Add a title';
      this.addEditable(this.html.title);
      this.html.content.appendChild(this.html.title);

      // -- Configuration --
      this.html.configuration = document.createElement('div');
      var configurationCssClass = this.cssPrefix + '-configuration';
      this.html.configuration.classList.add(configurationCssClass);
      frag.appendChild(this.html.configuration);

      var configurationButtons = document.createElement('div');
      configurationButtons.classList.add(this.cssPrefix + '-configuration-buttons');
      this.html.configuration.appendChild(configurationButtons);

      this.html.requiredSwitch = utils.createSwitch('Required', this.modulePrefix);
      this.html.requiredSwitch.classList.add(configurationCssClass + '-switch-required');
      this.html.requiredSwitch.addEventListener('change', function (e) {
        var checked = e.target.checked;
        _this2.setRequired(checked);
      });
      configurationButtons.appendChild(this.html.requiredSwitch);

      var okBtn = document.createElement('button');
      okBtn.classList.add(configurationCssClass + '-btn-ok', 'btn', // Bootstrap
      'btn-sm', 'btn-default', 'glyphicon', // Font-awesome
      'glyphicon-ok');
      okBtn.type = 'button';
      okBtn.addEventListener('click', function () {
        _this2.configToggle();
      });
      configurationButtons.appendChild(okBtn);

      // -- Sidebar --
      this.html.sidebar = document.createElement('div');
      var sidebarCssClass = this.cssPrefix + '-sidebar';
      this.html.sidebar.classList.add(sidebarCssClass);
      frag.appendChild(this.html.sidebar);

      var deleteBtn = document.createElement('button');
      deleteBtn.classList.add('glyphicon', 'glyphicon-trash');
      deleteBtn.type = 'button';
      deleteBtn.addEventListener('click', function () {
        return _this2.destroy();
      });
      this.addSidebarButton(deleteBtn, 'delete');

      var showConfigBtn = document.createElement('button');
      showConfigBtn.type = 'button';
      showConfigBtn.classList.add('glyphicon', // Font-awesome
      'glyphicon-cog');
      showConfigBtn.title = 'Configure form group';
      this.addSidebarButton(showConfigBtn, 'config');

      showConfigBtn.addEventListener('click', function () {
        _this2.configToggle();
      });

      this.html.container.appendChild(frag);
    }
  }, {
    key: 'addSidebarButton',
    value: function addSidebarButton(button, elementName) {
      var className = elementName ? this.cssPrefix + '-sidebar-btn-' + elementName : this.cssPrefix + '-sidebar-btn';
      button.classList.add(className);
      this.html.sidebar.insertBefore(button, this.html.sidebar.children[0]);
    }

    /**
     * @method addEditable
     * @param  {HTMLElement} element
     */

  }, {
    key: 'addEditable',
    value: function addEditable(element) {
      element.classList.add(this.cssPrefix + '-editable');
      this.editables.add(element);
      if (this.isConfigVisible) {
        this.enableEditing(true);
      }
    }

    /**
     * @method enableEditing
     * @param  {Boolean} enable - Whether to enable editing or not.
     * @return {void}
     */

  }, {
    key: 'enableEditing',
    value: function enableEditing() {
      var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      this.editables.forEach(function (element) {
        element.setAttribute('contenteditable', enable);
      });
    }

    /**
     * @method configToggle
     * @param  {Boolean} forceState Optional parameter to force a state.
     * @return {void}
     */

  }, {
    key: 'configToggle',
    value: function configToggle() {
      var _this3 = this;

      var newState = arguments.length <= 0 || arguments[0] === undefined ? !this.isConfigVisible : arguments[0];

      this.isConfigVisible = newState;
      if (!newState) {
        // hide
        this.html.container.classList.remove(this.cssPrefix + '--configuration-visible');
        this.enableEditing(false);
        this.triggerChangeIfNeeded();
      } else {
        // show
        this.html.container.classList.add(this.cssPrefix + '--configuration-visible');
        this.enableEditing(true);

        // hide on clickOut
        utils.onClickOut([this.html.container, this.html.configuration], function () {
          if (_this3.isConfigVisible && !_this3.isDetroyed) {
            _this3.configToggle();
          }
        });
        this.focus();
      }
    }

    // Focus on the appropriate element

  }, {
    key: 'focus',
    value: function focus() {
      var _this4 = this;

      if (this.focusElement) {
        // NOTE: There is a bug that for some reason it doesn't focus if you just
        // call focus() straight away. setTimeout solves it.
        // see http:// goo.gl/UjKOk5
        setTimeout(function () {
          _this4.focusElement.focus();
        }, 15);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.isDetroyed) {
        return;
      }
      this.isDetroyed = true;
      this.trigger('destroy');
      _get(Object.getPrototypeOf(FormComponent.prototype), 'destroy', this).call(this);
    }

    /**
     * @method setRequired
     * @param  {Boolean} required
     */

  }, {
    key: 'setRequired',
    value: function setRequired(required) {
      this.isRequired = !!required;
      this.html.requiredSwitch = !!required;
    }

    /**
     * Exports the information of a component in one object
     * @method exportState
     * @return {[type]} [description]
     */

  }, {
    key: 'exportState',
    value: function exportState() {
      return {
        required: this.isRequired,
        title: this.html.title.textContent,
        type: this.constructor.name
      };
    }

    /**
     * Sets the component state the the options specified in the
     * state object
     * @method importState
     * @param  {Object} state
     * @return {void}
     */

  }, {
    key: 'importState',
    value: function importState(state) {
      assert(state.type === this.constructor.name, 'Importing incompatible state. Expected ' + this.constructor.name + ', got ' + state.type);
      this.html.title.textContent = state.title;
      this.setRequired(state.required);
    }

    /**
     * Triggers the change event if any change happened.
     * @method triggerChangeIfNeeded
     * @return {void}
     */

  }, {
    key: 'triggerChangeIfNeeded',
    value: function triggerChangeIfNeeded() {
      var currentState = this.exportState();
      var currStateJson = JSON.stringify(currentState);

      var lastStateJson = JSON.stringify(this.lastState);
      var changeHappened = lastStateJson !== currStateJson;
      if (changeHappened && this.lastState !== null) {
        this.trigger('change');
      }
      this.lastState = currentState;
    }
  }]);

  return FormComponent;
}(ViewController);

/**
 * @class ControlBar
 */

var ComponentsContainer = function (_ViewController) {
  _inherits(ComponentsContainer, _ViewController);

  function ComponentsContainer(modulePrefix) {
    _classCallCheck(this, ComponentsContainer);

    // This is kept in the order they appear on screen.

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentsContainer).call(this, modulePrefix));

    _this.components = [];

    // Used with component.ondestroy;
    // This must be here and not together with other class methods because
    // of the binding of 'this'
    _this.componentDestroyListener = function (component) {
      _this.deleteComponent(component);
      _this.trigger('change');
    };

    _this.acceptEvents('change');
    Object.preventExtensions(_this);
    return _this;
  }

  /**
   * @method addComponent
   * @param  {FormComponent} component
   * @param  {Boolean} showConfig
   */


  _createClass(ComponentsContainer, [{
    key: 'addComponent',
    value: function addComponent(component) {
      var _this2 = this;

      var showConfig = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      assert(component instanceof FormComponent, 'Invalid component being added. No an instance of Component.');
      this.components.push(component);
      this.html.container.appendChild(component.getHtmlContainer());
      component.on('destroy', this.componentDestroyListener);

      this.addDragButtonToComponent(component);
      component.configToggle(showConfig);
      component.on('change', function () {
        return _this2.trigger('change');
      });
    }
  }, {
    key: 'addDragButtonToComponent',
    value: function addDragButtonToComponent(component) {
      var _this3 = this;

      var dragBtn = document.createElement('button');
      dragBtn.type = 'button';
      dragBtn.title = 'Drag to reorder';
      dragBtn.setAttribute('draggable', true);
      dragBtn.classList.add('glyphicon', // Font-awesome
      'glyphicon-menu-hamburger');

      var draggingClass = this.modulePrefix + '--dragging';
      dragBtn.addEventListener('dragstart', function (e) {
        var container = component.getHtmlContainer();
        var containersArray = _this3.components.map(function (c) {
          return c.getHtmlContainer();
        });

        container.classList.add(draggingClass);
        e.dataTransfer.setDragImage(document.createElement('img'), 0, 0);

        // Take care of moving and reordering
        utils.trackReorderDrag(e, container, containersArray);
      });

      dragBtn.addEventListener('dragend', function () {
        var container = component.getHtmlContainer();
        setTimeout(function () {
          return container.classList.remove(draggingClass);
        }, 250);

        // Reorder components according to their position.
        var beforeReordering = JSON.stringify(_this3.components);
        _this3.components.sort(function (el1, el2) {
          return el1.getHtmlContainer().getBoundingClientRect().top > el2.getHtmlContainer().getBoundingClientRect().top;
        });

        // Trigger change if elements were reordered
        var afterReordering = JSON.stringify(_this3.components);
        if (beforeReordering !== afterReordering) {
          _this3.trigger('change');
        }
      });

      component.addSidebarButton(dragBtn);
    }
  }, {
    key: 'getAllComponents',
    value: function getAllComponents() {
      return Array.from(this.components);
    }
  }, {
    key: 'deleteComponent',
    value: function deleteComponent(component) {
      var componentIndex = this.components.indexOf(component);
      if (componentIndex === -1) {
        console.warn('Removing component not in container');
        return;
      }
      // Delete element from components array
      this.components.splice(componentIndex, 1);
      component.removeListener('destroy', this.componentDestroyListener);
      component.destroy();
    }
    /**
     * Deletes all components
     * @method deleteAllComponents
     * @return {void}
     */

  }, {
    key: 'deleteAllComponents',
    value: function deleteAllComponents() {
      // NOTE: we create a new array because deleteComponent modifies
      // 'this.components', so we would have problems as we are
      // iterating trough an array being modified.
      var components = Array.from(this.components);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var comp = _step.value;

          this.deleteComponent(comp);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Erases all components and inserts a new component group.
     * @method setComponents
     * @param  {Array<FormComponent>} components
     * @return {void}
     */

  }, {
    key: 'setComponents',
    value: function setComponents(components) {
      var _this4 = this;

      this.deleteAllComponents();
      components.forEach(function (comp) {
        return _this4.addComponent(comp, false);
      });
    }
  }]);

  return ComponentsContainer;
}(ViewController);

var OptionsComponent = function (_FormComponent) {
  _inherits(OptionsComponent, _FormComponent);

  function OptionsComponent(modulePrefix) {
    _classCallCheck(this, OptionsComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OptionsComponent).call(this, modulePrefix));

    _this.html.options = [];
    return _this;
  }

  /**
   * In addition to building the standard html structure, it adds
   * a field to add an option.
   * @method buildHtml
   * @return {[type]} [description]
   */


  _createClass(OptionsComponent, [{
    key: 'buildHtml',
    value: function buildHtml() {
      var _this2 = this;

      _get(Object.getPrototypeOf(OptionsComponent.prototype), 'buildHtml', this).call(this);

      var optionsConfig = document.createElement('div');
      var optionsConfigCssClass = this.cssPrefix + '-configuration-options';
      optionsConfig.classList.add(optionsConfigCssClass);

      if (this.html.configuration.children[0]) {
        this.html.configuration.insertBefore(optionsConfig, this.html.configuration.children[0]);
      } else {
        this.html.configuration.appendChild(optionsConfig);
      }

      var removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.title = 'Remove last option';
      removeBtn.classList.add('glyphicon-minus-sign', 'glyphicon', optionsConfigCssClass + '-btn-remove');
      removeBtn.addEventListener('click', function () {
        return _this2.removeOption();
      });
      optionsConfig.appendChild(removeBtn);

      var addBtn = document.createElement('button');
      addBtn.type = 'button';
      addBtn.title = 'Add new option';
      addBtn.classList.add('glyphicon-plus-sign', 'glyphicon', optionsConfigCssClass + '-btn-add');
      addBtn.addEventListener('click', function () {
        return _this2.submitOptionFromConfigBar();
      });
      optionsConfig.appendChild(addBtn);

      this.html.newOptionText = document.createElement('input');
      this.html.newOptionText.setAttribute('placeholder', 'Type a new option');
      this.html.newOptionText.setAttribute('type', 'text');
      this.html.newOptionText.classList.add(optionsConfigCssClass + '-input');
      this.focusElement = this.html.newOptionText;
      optionsConfig.appendChild(this.html.newOptionText);
      this.html.newOptionText.addEventListener('keypress', function (e) {
        if (e.which === 13) {
          var click = new Event('click');
          addBtn.dispatchEvent(click);
          e.preventDefault();
          return false; //  returning false will prevent the event from bubbling up.
        }
        return true;
      });

      this.focus();
    }
  }, {
    key: 'submitOptionFromConfigBar',
    value: function submitOptionFromConfigBar() {
      if (!this.html.newOptionText.value.trim()) {
        utils.blinkRed(this.html.newOptionText, this.modulePrefix);
        return;
      }
      this.addOption(this.html.newOptionText.value);
      this.html.newOptionText.value = '';
      this.triggerChangeIfNeeded();
    }

    /**
     * This method is supposed to be extended by subclasses and they will
     * define the optionType or change this method completely.
     * @method addOption
     * @param  {String} text
     * @param  {Stirng} optionType
     */

  }, {
    key: 'addOption',
    value: function addOption(text, optionType) {
      var newOption = document.createElement('div');
      newOption.classList.add(this.cssPrefix + '-option');

      var optionCheckbox = document.createElement('input');
      optionCheckbox.type = optionType;
      newOption.appendChild(optionCheckbox);

      var optionText = document.createElement('span');
      optionText.classList.add(this.cssPrefix + '-option-text');
      optionText.textContent = text;
      newOption.appendChild(optionText);

      this.html.options.push(newOption);
      this.html.content.appendChild(newOption);
      this.addEditable(optionText);
    }

    /**
     * Removes an option element
     * @method removeOption
     * @return {void}
     */

  }, {
    key: 'removeOption',
    value: function removeOption() {
      var optionToRemove = this.html.options.pop();
      if (optionToRemove) {
        optionToRemove.remove();
      }
    }

    /**
     * @override @method exportState
     * @return {Object}
     */

  }, {
    key: 'exportState',
    value: function exportState() {
      var output = _get(Object.getPrototypeOf(OptionsComponent.prototype), 'exportState', this).call(this);
      output.options = this.html.options.map(function (o) {
        return o.textContent;
      });
      return output;
    }

    /**
     * @override @method importState
     * @return {void}
     */

  }, {
    key: 'importState',
    value: function importState(state) {
      var _this3 = this;

      _get(Object.getPrototypeOf(OptionsComponent.prototype), 'importState', this).call(this, state);
      var optionCount = this.html.options.length;
      for (var i = 0; i < optionCount; i++) {
        this.removeOption();
      }
      state.options.forEach(function (o) {
        return _this3.addOption(o);
      });
    }
  }]);

  return OptionsComponent;
}(FormComponent);

var RadioBtns = function (_OptionsComponent) {
  _inherits(RadioBtns, _OptionsComponent);

  _createClass(RadioBtns, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(RadioBtns), 'getInfo', this).call(this);
      info.description = 'Radio Buttons';
      info.iconClass = 'glyphicon glyphicon-ok-circle';
      return info;
    }
  }]);

  function RadioBtns(modulePrefix) {
    _classCallCheck(this, RadioBtns);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioBtns).call(this, modulePrefix));

    Object.preventExtensions(_this);
    _this.addOption('Insert an option');
    return _this;
  }

  /**
   * @override @method addOption
   * @param  {String} text
   */


  _createClass(RadioBtns, [{
    key: 'addOption',
    value: function addOption(text) {
      _get(Object.getPrototypeOf(RadioBtns.prototype), 'addOption', this).call(this, text, 'radio');
    }
  }]);

  return RadioBtns;
}(OptionsComponent);

var Checkboxes = function (_OptionsComponent) {
  _inherits(Checkboxes, _OptionsComponent);

  _createClass(Checkboxes, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(Checkboxes), 'getInfo', this).call(this);
      info.description = 'Checkboxes';
      info.iconClass = 'glyphicon glyphicon-check';
      return info;
    }
  }]);

  function Checkboxes(modulePrefix) {
    _classCallCheck(this, Checkboxes);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkboxes).call(this, modulePrefix));

    Object.preventExtensions(_this);
    _this.addOption('Insert an option');
    return _this;
  }

  /**
   * @override @method addOption
   * @param  {String} text
   */


  _createClass(Checkboxes, [{
    key: 'addOption',
    value: function addOption(text) {
      _get(Object.getPrototypeOf(Checkboxes.prototype), 'addOption', this).call(this, text, 'checkbox');
    }
  }]);

  return Checkboxes;
}(OptionsComponent);

var Dropdown = function (_OptionsComponent) {
  _inherits(Dropdown, _OptionsComponent);

  _createClass(Dropdown, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(Dropdown), 'getInfo', this).call(this);
      info.description = 'Dropdown';
      info.iconClass = 'glyphicon glyphicon-collapse-down';
      return info;
    }
  }]);

  function Dropdown(modulePrefix) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, modulePrefix));

    Object.preventExtensions(_this);

    // Create placeholder
    _this.addOption('Select an option');
    _this.html.options[0].disabled = true;
    _this.html.options[0].selected = true;
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'buildHtml',
    value: function buildHtml() {
      _get(Object.getPrototypeOf(Dropdown.prototype), 'buildHtml', this).call(this);
      this.buildComponent();
      this.buildComponentSpecificConfiguration();
    }
  }, {
    key: 'buildComponent',
    value: function buildComponent() {
      var dropdown = document.createElement('select');
      dropdown.setAttribute('multiple', true);
      dropdown.classList.add(this.cssPrefix + '-' + this.constructor.name, 'form-control' // Bootstrap
      );

      this.html.dropdown = dropdown;
      this.focusElement = dropdown;
      this.html.content.appendChild(dropdown);
    }
  }, {
    key: 'buildComponentSpecificConfiguration',
    value: function buildComponentSpecificConfiguration() {
      var newOptionDisabledWrapper = document.createElement('label');

      var newOptionDisabled = document.createElement('input');
      newOptionDisabled.classList.add(this.cssPrefix + '-configuration-options-optionDisabled');
      newOptionDisabled.type = 'checkbox';
      newOptionDisabledWrapper.appendChild(newOptionDisabled);
      newOptionDisabledWrapper.appendChild(document.createTextNode('Divider'));

      var optionConfig = this.html.configuration.children[0];
      this.html.newOptionDisabled = newOptionDisabled;
      optionConfig.appendChild(newOptionDisabledWrapper);
    }
  }, {
    key: 'submitOptionFromConfigBar',
    value: function submitOptionFromConfigBar() {
      if (!this.html.newOptionText.value.trim()) {
        utils.blinkRed(this.html.newOptionText, this.modulePrefix);
        return;
      }
      this.addOption(this.html.newOptionText.value, this.html.newOptionDisabled.checked);
      this.html.newOptionDisabled.checked = false;
      this.html.newOptionText.value = '';
      this.triggerChangeIfNeeded();
    }
  }, {
    key: 'addOption',
    value: function addOption(text) {
      var disabled = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var newOption = document.createElement('option');
      if (disabled) {
        newOption.setAttribute('disabled', true);
      }
      newOption.textContent = text;

      this.html.options.push(newOption);
      this.html.dropdown.appendChild(newOption);
    }

    /**
     * @override @method enableEditing
     * @param  {Boolean} enable
     * @return {void}
     */

  }, {
    key: 'enableEditing',
    value: function enableEditing() {
      var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      _get(Object.getPrototypeOf(Dropdown.prototype), 'enableEditing', this).call(this, enable);
      if (!this.html.dropdown) {
        return;
      }
      if (enable) {
        this.html.dropdown.setAttribute('multiple', true);
      } else {
        this.html.dropdown.removeAttribute('multiple');
      }
    }

    /**
     * @override @method exportState
     * @return {Object}
     */

  }, {
    key: 'exportState',
    value: function exportState() {
      var output = _get(Object.getPrototypeOf(Dropdown.prototype), 'exportState', this).call(this);
      output.disabledIndexes = [];
      this.html.options.forEach(function (o, index) {
        if (o.hasAttribute('disabled')) {
          output.disabledIndexes.push(index);
        }
      });
      return output;
    }

    /**
     * @override @method importState
     * @return {void}
     */

  }, {
    key: 'importState',
    value: function importState(state) {
      _get(Object.getPrototypeOf(Dropdown.prototype), 'importState', this).call(this, state);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = state.disabledIndexes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var disabledIndex = _step.value;

          this.html.options[disabledIndex].setAttribute('disabled', true);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Dropdown;
}(OptionsComponent);

/**
 * @abstract @class TextComponent
 */

var TextComponent = function (_FormComponent) {
  _inherits(TextComponent, _FormComponent);

  function TextComponent(modulePrefix, tagName) {
    var fieldType = arguments.length <= 2 || arguments[2] === undefined ? 'text' : arguments[2];

    _classCallCheck(this, TextComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextComponent).call(this, modulePrefix));

    _this.fieldType = fieldType;
    _this.buildComponent(tagName, fieldType);

    _this.focus();
    return _this;
  }

  _createClass(TextComponent, [{
    key: 'buildComponent',
    value: function buildComponent(tagName, fieldType) {
      var textElement = document.createElement(tagName);
      textElement.type = fieldType;

      textElement.classList.add(this.cssPrefix + '-' + this.constructor.name, 'form-control' // Bootstrap
      );
      this.html.textElement = textElement;
      this.focusElement = textElement;
      this.html.content.appendChild(textElement);

      this.setPlaceholder('Insert a placeholder text');
    }

    /**
     * @override @method enableEditing
     * @param  {Boolean} enable
     * @return {void}
     */

  }, {
    key: 'enableEditing',
    value: function enableEditing() {
      var enable = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      _get(Object.getPrototypeOf(TextComponent.prototype), 'enableEditing', this).call(this, enable);
      if (!this.html.textElement) {
        return;
      }
      if (enable) {
        this.html.textElement.value = this.getPlaceholder();
        this.html.textElement.type = 'text';
        return;
      }
      if (this.html.textElement.value) {
        this.setPlaceholder(this.html.textElement.value);
      }
      this.html.textElement.type = this.fieldType;
      this.html.textElement.value = '';
    }
  }, {
    key: 'setPlaceholder',
    value: function setPlaceholder(text) {
      if (this.isConfigVisible) {
        this.html.textElement.value = text;
      }
      this.html.textElement.setAttribute('placeholder', text);
    }
  }, {
    key: 'getPlaceholder',
    value: function getPlaceholder() {
      return this.html.textElement.getAttribute('placeholder');
    }

    /**
     * @override @method exportState
     * @return {Object}
     */

  }, {
    key: 'exportState',
    value: function exportState() {
      var output = _get(Object.getPrototypeOf(TextComponent.prototype), 'exportState', this).call(this);
      output.placeholder = this.getPlaceholder();
      return output;
    }

    /**
     * @override @method importState
     * @param  {Object} state
     * @return {void}
     */

  }, {
    key: 'importState',
    value: function importState(state) {
      _get(Object.getPrototypeOf(TextComponent.prototype), 'importState', this).call(this, state);
      this.setPlaceholder(state.placeholder);
    }
  }]);

  return TextComponent;
}(FormComponent);

var TextBox = function (_TextComponent) {
  _inherits(TextBox, _TextComponent);

  _createClass(TextBox, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(TextBox), 'getInfo', this).call(this);
      info.description = 'Text Box';
      info.iconClass = 'glyphicon glyphicon-text-width';
      return info;
    }
  }]);

  function TextBox(modulePrefix) {
    _classCallCheck(this, TextBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextBox).call(this, modulePrefix, 'input', 'text'));
  }

  return TextBox;
}(TextComponent);

var TextArea = function (_TextComponent) {
  _inherits(TextArea, _TextComponent);

  _createClass(TextArea, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(TextArea), 'getInfo', this).call(this);
      info.description = 'Text Area';
      info.iconClass = 'glyphicon glyphicon-text-height';
      return info;
    }
  }]);

  function TextArea(modulePrefix) {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, modulePrefix, 'textarea'));
  }

  /**
   * @override @method buildComponent
   */


  _createClass(TextArea, [{
    key: 'buildComponent',
    value: function buildComponent() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = _get(Object.getPrototypeOf(TextArea.prototype), 'buildComponent', this)).call.apply(_get2, [this].concat(args));
      this.html.textElement.setAttribute('rows', 5);
    }
  }]);

  return TextArea;
}(TextComponent);

var EmailBox = function (_TextComponent) {
  _inherits(EmailBox, _TextComponent);

  _createClass(EmailBox, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(EmailBox), 'getInfo', this).call(this);
      info.description = 'Email Box';
      info.iconClass = 'glyphicon glyphicon-envelope';
      return info;
    }
  }]);

  function EmailBox(modulePrefix) {
    _classCallCheck(this, EmailBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmailBox).call(this, modulePrefix, 'input', 'email'));
  }

  return EmailBox;
}(TextComponent);

var TelephoneBox = function (_TextComponent) {
  _inherits(TelephoneBox, _TextComponent);

  _createClass(TelephoneBox, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(TelephoneBox), 'getInfo', this).call(this);
      info.description = 'Telephone Box';
      info.iconClass = 'glyphicon glyphicon-earphone';
      return info;
    }
  }]);

  function TelephoneBox(modulePrefix) {
    _classCallCheck(this, TelephoneBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TelephoneBox).call(this, modulePrefix, 'input', 'tel'));
  }

  return TelephoneBox;
}(TextComponent);

var NumberBox = function (_TextComponent) {
  _inherits(NumberBox, _TextComponent);

  _createClass(NumberBox, null, [{
    key: 'getInfo',
    value: function getInfo() {
      var info = _get(Object.getPrototypeOf(NumberBox), 'getInfo', this).call(this);
      info.description = 'Number Box';
      info.iconClass = 'glyphicon glyphicon-subscript';
      return info;
    }
  }]);

  function NumberBox(modulePrefix) {
    _classCallCheck(this, NumberBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberBox).call(this, modulePrefix, 'input', 'number'));
  }

  return NumberBox;
}(TextComponent);

/**
 * @class ControlBar
 */

var ComponentFabric = function () {
  function ComponentFabric(modulePrefix) {
    _classCallCheck(this, ComponentFabric);

    this.modulePrefix = modulePrefix;
    this.componentConstructors = [RadioBtns, Checkboxes, Dropdown, TextBox, EmailBox, TelephoneBox, NumberBox, TextArea];

    Object.preventExtensions(this);
  }

  /**
   * @method createComponent
   * @param  {String} componentName
   * @return {Component}
   */


  _createClass(ComponentFabric, [{
    key: 'createComponent',
    value: function createComponent(componentName) {
      var Comp = this.componentConstructors.find(function (c) {
        return c.getInfo().name === componentName;
      });
      assert(Comp, 'Invalid component: ' + componentName);
      return new Comp(this.modulePrefix);
    }

    /**
     * @method getComponentTypes
     * @return {Array<Object>}
     */

  }, {
    key: 'getComponentTypes',
    value: function getComponentTypes() {
      var types = this.componentConstructors.map(function (component) {
        return component.getInfo();
      });
      return types;
    }
  }]);

  return ComponentFabric;
}();

/**
 * @class ControlBar
 */

var ControlBar = function (_ViewController) {
  _inherits(ControlBar, _ViewController);

  function ControlBar(modulePrefix, moduleCoordinator) {
    _classCallCheck(this, ControlBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlBar).call(this, modulePrefix));

    _this.moduleCoordinator = moduleCoordinator;
    Object.preventExtensions(_this);
    _this.buildHtml();
    return _this;
  }

  _createClass(ControlBar, [{
    key: 'buildHtml',
    value: function buildHtml() {
      var _this2 = this;

      var frag = document.createDocumentFragment();

      // Create component buttons
      var componentTypes = this.moduleCoordinator.getComponentTypes();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var component = _step.value;

          var compBtn = document.createElement('button');
          compBtn.className = _this2.cssPrefix + '-button-component';
          compBtn.className += ' ' + component.iconClass;
          compBtn.classList.add('btn', 'btn-default'); // Bootstrap

          compBtn.value = component.name;
          compBtn.name = component.description;
          compBtn.title = component.description;
          compBtn.addEventListener('click', function () {
            _this2.moduleCoordinator.createComponent(component.name);
          });

          frag.appendChild(compBtn);
        };

        for (var _iterator = componentTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }

        // Create Save button
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var saveBtn = document.createElement('button');
      saveBtn.className = this.cssPrefix + '-button-save';
      saveBtn.classList.add('btn', 'btn-primary'); // Bootstrap
      saveBtn.textContent = 'Save';
      saveBtn.addEventListener('click', function () {
        return _this2.moduleCoordinator.save();
      });
      frag.appendChild(saveBtn);

      // Create Import button
      var undoBtn = document.createElement('button');
      undoBtn.className = this.cssPrefix + '-button-save';
      undoBtn.classList.add('btn', 'btn-default'); // Bootstrap
      undoBtn.textContent = 'Undo';
      undoBtn.addEventListener('click', function () {
        var undoSuccess = _this2.moduleCoordinator.popHistoryState();
        if (!undoSuccess) {
          utils.blinkRed(undoBtn, _this2.modulePrefix);
        }
      });
      frag.appendChild(undoBtn);

      this.html.container.appendChild(frag);
    }
  }]);

  return ControlBar;
}(ViewController);

var MAX_HISTORY_STATES = 5;
/**
 * This class takes care of storing forms in local storage
 * as well as sending it to the database, and keeping intermediate states
 * so as to add the undo function.
 * @class Storage
 */

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.currentState = null;
    this.history = [];
    Object.preventExtensions(this);
  }

  _createClass(Storage, [{
    key: 'saveContent',
    value: function saveContent(content) {
      console.warn('Not implemented.');
      console.log(content);
    }
  }, {
    key: 'pushHistoryState',
    value: function pushHistoryState(state) {
      assert(state, 'Invalid state being saved: ' + state);
      if (this.history.length > MAX_HISTORY_STATES) {
        this.history = this.history.slice(1);
      }
      if (this.currentState) {
        this.history.push(this.currentState);
      }
      this.currentState = state;
    }

    /**
     * @method popHistoryState
     * @return {Object} - A State object
     */

  }, {
    key: 'popHistoryState',
    value: function popHistoryState() {
      if (this.history.length > 0) {
        this.currentState = this.history.pop();
        return this.currentState;
      }
      return undefined;
    }
  }]);

  return Storage;
}();

/**
 * @class Coordinator
 */

var Coordinator = function () {
  function Coordinator(modulePrefix, xdiv) {
    _classCallCheck(this, Coordinator);

    this.storage = new Storage();
    this.componentFabric = new ComponentFabric(modulePrefix);

    this.componentsContainer = new ComponentsContainer(modulePrefix);
    this.componentsContainer.on('change', this.pushHistoryState.bind(this));

    this.controlBar = new ControlBar(modulePrefix, this);

    Object.preventExtensions(this);
    xdiv.appendChild(this.controlBar.getHtmlContainer());
    xdiv.appendChild(this.componentsContainer.getHtmlContainer());

    this.pushHistoryState();
  }

  _createClass(Coordinator, [{
    key: 'getComponentTypes',
    value: function getComponentTypes() {
      return this.componentFabric.getComponentTypes();
    }
  }, {
    key: 'createComponent',
    value: function createComponent(compName) {
      var newComponent = this.componentFabric.createComponent(compName);
      this.componentsContainer.addComponent(newComponent);
      this.pushHistoryState();
    }
  }, {
    key: 'save',
    value: function save() {
      var content = this.exportState();
      this.storage.saveContent(content);
    }

    /**
     * @method exportState
     * @return {Array<Object>} - each component is a state object for a FormComponent
     */

  }, {
    key: 'exportState',
    value: function exportState() {
      var components = this.componentsContainer.getAllComponents();
      var outcome = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var component = _step.value;

          outcome.push(component.exportState());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return outcome;
    }
  }, {
    key: 'importState',
    value: function importState() {
      var _this = this;

      var state = arguments.length <= 0 || arguments[0] === undefined ? this.exportState() : arguments[0];

      this.componentsContainer.deleteAllComponents();

      var components = [];
      state.forEach(function (componentState) {
        var component = _this.componentFabric.createComponent(componentState.type);
        component.importState(componentState);
        components.push(component);
      });

      this.componentsContainer.setComponents(components);
    }
  }, {
    key: 'pushHistoryState',
    value: function pushHistoryState() {
      var currentState = this.exportState();
      this.storage.pushHistoryState(currentState);
      console.log('Pushing state:');
      console.dir(currentState);
    }

    /**
     * Undo function
     * @method popHistoryState
     * @return {Boolean} success
     */

  }, {
    key: 'popHistoryState',
    value: function popHistoryState() {
      var lastState = this.storage.popHistoryState();
      console.log('Popping state:');
      console.dir(lastState);
      if (lastState) {
        this.importState(lastState);
        return true;
      }
      return false;
    }
  }]);

  return Coordinator;
}();

var MODULE_PREFIX = 'fl-fb';

xController(function (xdiv) {
  xdiv.classList.add(MODULE_PREFIX);
  var coordinator = new Coordinator(MODULE_PREFIX, xdiv);
  return coordinator;
});
//# sourceMappingURL=fl-form-builder.js.map
