
      import { createRequire } from 'module';
      const require = createRequire(import.meta.url);
    
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module) {
    "use strict";
    module.exports = __require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    "use strict";
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports, module) {
    "use strict";
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    module.exports = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var root = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root && root === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }
      };
      return channel;
    };
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = /* @__PURE__ */ Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }
        };
        return channel;
      }
    ) : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module.exports = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var getSideChannel = require_side_channel();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var overflowChannel = getSideChannel();
    var markOverflow = function markOverflow2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
      return obj;
    };
    var isOverflow = function isOverflow2(obj) {
      return overflowChannel.has(obj);
    };
    var getMaxIndex = function getMaxIndex2(obj) {
      return overflowChannel.get(obj);
    };
    var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
    };
    var hexTable = (function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
      }
      return array;
    })();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted[compacted.length] = obj[j];
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          var nextIndex = target.length;
          if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) {
            return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
          }
          target[nextIndex] = source;
        } else if (target && typeof target === "object") {
          if (isOverflow(target)) {
            var newIndex = getMaxIndex(target) + 1;
            target[newIndex] = source;
            setMaxIndex(target, newIndex);
          } else if (options && options.strictMerge) {
            return [target, source];
          } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        if (isOverflow(source)) {
          var sourceKeys = Object.keys(source);
          var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
          for (var m = 0; m < sourceKeys.length; m++) {
            var oldKey = parseInt(sourceKeys[m], 10);
            result[oldKey + 1] = source[sourceKeys[m]];
          }
          return markOverflow(result, getMaxIndex(source) + 1);
        }
        var combined = [target].concat(source);
        if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
          return markOverflow(arrayToObject(combined, options), combined.length - 1);
        }
        return combined;
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target[target.length] = item;
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        if (isOverflow(source) && !isOverflow(acc)) {
          markOverflow(acc, getMaxIndex(source));
        }
        if (isOverflow(acc)) {
          var keyNum = parseInt(key, 10);
          if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
            setMaxIndex(acc, keyNum);
          }
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, defaultDecoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue[queue.length] = { obj, prop: key };
            refs[refs.length] = val;
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b, arrayLimit, plainObjects) {
      if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
      }
      var result = [].concat(a, b);
      if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
      }
      return result;
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped[mapped.length] = fn(val[i]);
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isOverflow,
      isRegExp,
      markOverflow,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        pushToArray(keys, stringify(
          value,
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictMerge: true,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          if (key !== null) {
            val = utils.maybeMap(
              parseArrayValue(
                part.slice(pos + 1),
                options,
                isArray(obj[key]) ? obj[key].length : 0
              ),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
              }
            );
          }
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        if (options.comma && isArray(val) && val.length > options.arrayLimit) {
          if (options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          val = utils.combine([], val, options.arrayLimit, options.plainObjects);
        }
        if (key !== null) {
          var existing = has.call(obj, key);
          if (existing && (options.duplicates === "combine" || part.indexOf("[]=") > -1)) {
            obj[key] = utils.combine(
              obj[key],
              val,
              options.arrayLimit,
              options.plainObjects
            );
          } else if (!existing || options.duplicates === "last") {
            obj[key] = val;
          }
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          if (utils.isOverflow(leaf)) {
            obj = leaf;
          } else {
            obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
              [],
              leaf,
              options.arrayLimit,
              options.plainObjects
            );
          }
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (isValidArrayIndex && index < options.arrayLimit) {
            obj = [];
            obj[index] = leaf;
          } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          } else if (isValidArrayIndex) {
            obj[index] = leaf;
            utils.markOverflow(obj, index);
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var splitKeyIntoSegments = function splitKeyIntoSegments2(givenKey, options) {
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        return [key];
      }
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys[keys.length] = parent;
      }
      var i = 0;
      while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys[keys.length] = segment[1];
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys[keys.length] = "[" + key.slice(segment.index) + "]";
      }
      return keys;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var keys = splitKeyIntoSegments(givenKey, options);
      if (!keys) {
        return;
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults.strictMerge,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return Math.round(ms2 / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms2 / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms2 / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms2 / s) + "s";
      }
      return ms2 + "ms";
    }
    function fmtLong(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return plural(ms2, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms2, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms2, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms2, msAbs, s, "second");
      }
      return ms2 + " ms";
    }
    function plural(ms2, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// src/app.ts
var import_qs = __toESM(require_lib(), 1);
import { toNodeHandler } from "better-auth/node";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import path3 from "path";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// src/generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.4.2",
  "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
  "activeProvider": "postgresql",
  "inlineSchema": 'model Admin {\n  id            String    @id @default(uuid(7))\n  name          String\n  email         String    @unique\n  profilePhoto  String?\n  contactNumber String?\n  isDeleted     Boolean   @default(false)\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  deletedAt     DateTime?\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([email])\n  @@index([isDeleted])\n  @@map("admins")\n}\n\nmodel User {\n  id                 String     @id\n  name               String\n  email              String\n  emailVerified      Boolean    @default(false)\n  role               Role       @default(TOURIST)\n  status             UserStatus @default(ACTIVE)\n  needPasswordChange Boolean    @default(false)\n  isDeleted          Boolean    @default(false)\n  deletedAt          DateTime?\n  image              String?\n  createdAt          DateTime   @default(now())\n  updatedAt          DateTime   @updatedAt\n  sessions           Session[]\n  accounts           Account[]\n  tourist            Tourist?\n  moderator          Moderator?\n  admin              Admin?\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum Role {\n  SUPER_ADMIN\n  ADMIN\n  MODERATOR\n  TOURIST\n}\n\nenum UserStatus {\n  ACTIVE\n  BLOCKED\n  DELETED\n}\n\nenum Gender {\n  MALE\n  FEMALE\n  OTHER\n}\n\nenum PaymentStatus {\n  PAID\n  UNPAID\n}\n\nmodel Moderator {\n  id String @id @default(uuid(7))\n\n  name          String\n  email         String    @unique\n  profilePhoto  String?\n  contactNumber String?\n  address       String?\n  isDeleted     Boolean   @default(false)\n  deletedAt     DateTime?\n\n  registrationNumber  String @unique\n  experience          Int    @default(0)\n  gender              Gender @default(MALE)\n  appointmentFee      Float\n  qualification       String\n  currentWorkingPlace String\n  designation         String\n  averageRating       Float  @default(0.0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  //relations\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)\n\n  // reviews         Review[]\n\n  @@index([email], name: "idx_moderator_email")\n  @@index([isDeleted], name: "idx_moderator_isDeleted")\n  @@map("moderator")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../src/generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel Tourist {\n  id String @id @default(uuid(7))\n\n  name          String\n  email         String    @unique\n  profilePhoto  String?\n  contactNumber String?\n  address       String?\n  isDeleted     Boolean   @default(false)\n  deletedAt     DateTime?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n\n  //relations\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  //   appointments      Appointment[]\n  //   prescriptions     Prescription[]\n  //   medicalReports    MedicalReport[]\n  //   reviews           Review[]\n  //   patientHealthData PatientHealthData?\n\n  @@index([email], name: "idx_tourist_email")\n  @@index([isDeleted], name: "idx_tourist_isDeleted")\n  @@map("tourist")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Admin":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"contactNumber","kind":"scalar","type":"String"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AdminToUser"}],"dbName":"admins"},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"needPasswordChange","kind":"scalar","type":"Boolean"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"tourist","kind":"object","type":"Tourist","relationName":"TouristToUser"},{"name":"moderator","kind":"object","type":"Moderator","relationName":"ModeratorToUser"},{"name":"admin","kind":"object","type":"Admin","relationName":"AdminToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Moderator":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"contactNumber","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"registrationNumber","kind":"scalar","type":"String"},{"name":"experience","kind":"scalar","type":"Int"},{"name":"gender","kind":"enum","type":"Gender"},{"name":"appointmentFee","kind":"scalar","type":"Float"},{"name":"qualification","kind":"scalar","type":"String"},{"name":"currentWorkingPlace","kind":"scalar","type":"String"},{"name":"designation","kind":"scalar","type":"String"},{"name":"averageRating","kind":"scalar","type":"Float"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ModeratorToUser"}],"dbName":"moderator"},"Tourist":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"contactNumber","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"TouristToUser"}],"dbName":"tourist"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","user","sessions","accounts","tourist","moderator","admin","_count","Admin.findUnique","Admin.findUniqueOrThrow","Admin.findFirst","Admin.findFirstOrThrow","Admin.findMany","data","Admin.createOne","Admin.createMany","Admin.createManyAndReturn","Admin.updateOne","Admin.updateMany","Admin.updateManyAndReturn","create","update","Admin.upsertOne","Admin.deleteOne","Admin.deleteMany","having","_min","_max","Admin.groupBy","Admin.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Moderator.findUnique","Moderator.findUniqueOrThrow","Moderator.findFirst","Moderator.findFirstOrThrow","Moderator.findMany","Moderator.createOne","Moderator.createMany","Moderator.createManyAndReturn","Moderator.updateOne","Moderator.updateMany","Moderator.updateManyAndReturn","Moderator.upsertOne","Moderator.deleteOne","Moderator.deleteMany","_avg","_sum","Moderator.groupBy","Moderator.aggregate","Tourist.findUnique","Tourist.findUniqueOrThrow","Tourist.findFirst","Tourist.findFirstOrThrow","Tourist.findMany","Tourist.createOne","Tourist.createMany","Tourist.createManyAndReturn","Tourist.updateOne","Tourist.updateMany","Tourist.updateManyAndReturn","Tourist.upsertOne","Tourist.deleteOne","Tourist.deleteMany","Tourist.groupBy","Tourist.aggregate","AND","OR","NOT","id","name","email","profilePhoto","contactNumber","address","isDeleted","deletedAt","createdAt","updatedAt","userId","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","registrationNumber","experience","Gender","gender","appointmentFee","qualification","currentWorkingPlace","designation","averageRating","identifier","value","expiresAt","accountId","providerId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","emailVerified","Role","role","UserStatus","status","needPasswordChange","image","every","some","none","is","isNot","connectOrCreate","upsert","disconnect","delete","connect","createMany","set","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "8QI8cA4DAADPAQAgggEAAPEBADCDAQAADwAQhAEAAPEBADCFAQEAAAABhgEBAMoBACGHAQEAAAABiAEBAMsBACGJAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAAAAAQEAAAABACAMAwAAzwEAIIIBAADzAQAwgwEAAAMAEIQBAADzAQAwhQEBAMoBACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGmAUAAzgEAIbABAQDKAQAhsQEBAMsBACGyAQEAywEAIQMDAAD_AQAgsQEAAPQBACCyAQAA9AEAIAwDAADPAQAgggEAAPMBADCDAQAAAwAQhAEAAPMBADCFAQEAAAABjQFAAM4BACGOAUAAzgEAIY8BAQDKAQAhpgFAAM4BACGwAQEAAAABsQEBAMsBACGyAQEAywEAIQMAAAADACABAAAEADACAAAFACARAwAAzwEAIIIBAADyAQAwgwEAAAcAEIQBAADyAQAwhQEBAMoBACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGnAQEAygEAIagBAQDKAQAhqQEBAMsBACGqAQEAywEAIasBAQDLAQAhrAFAAM0BACGtAUAAzQEAIa4BAQDLAQAhrwEBAMsBACEIAwAA_wEAIKkBAAD0AQAgqgEAAPQBACCrAQAA9AEAIKwBAAD0AQAgrQEAAPQBACCuAQAA9AEAIK8BAAD0AQAgEQMAAM8BACCCAQAA8gEAMIMBAAAHABCEAQAA8gEAMIUBAQAAAAGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGnAQEAygEAIagBAQDKAQAhqQEBAMsBACGqAQEAywEAIasBAQDLAQAhrAFAAM0BACGtAUAAzQEAIa4BAQDLAQAhrwEBAMsBACEDAAAABwAgAQAACAAwAgAACQAgDwMAAM8BACCCAQAAyQEAMIMBAAALABCEAQAAyQEAMIUBAQDKAQAhhgEBAMoBACGHAQEAygEAIYgBAQDLAQAhiQEBAMsBACGKAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACEBAAAACwAgFwMAAM8BACCCAQAA2QEAMIMBAAANABCEAQAA2QEAMIUBAQDKAQAhhgEBAMoBACGHAQEAygEAIYgBAQDLAQAhiQEBAMsBACGKAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGbAQEAygEAIZwBAgDaAQAhngEAANsBngEinwEIANwBACGgAQEAygEAIaEBAQDKAQAhogEBAMoBACGjAQgA3AEAIQEAAAANACAOAwAAzwEAIIIBAADxAQAwgwEAAA8AEIQBAADxAQAwhQEBAMoBACGGAQEAygEAIYcBAQDKAQAhiAEBAMsBACGJAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACEBAAAADwAgAQAAAAMAIAEAAAAHACABAAAAAQAgBAMAAP8BACCIAQAA9AEAIIkBAAD0AQAgjAEAAPQBACADAAAADwAgAQAAFAAwAgAAAQAgAwAAAA8AIAEAABQAMAIAAAEAIAMAAAAPACABAAAUADACAAABACALAwAA1gIAIIUBAQAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAGJAQEAAAABiwEgAAAAAYwBQAAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAEBDwAAGAAgCoUBAQAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAGJAQEAAAABiwEgAAAAAYwBQAAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAEBDwAAGgAwAQ8AABoAMAsDAADVAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiAEBAPkBACGJAQEA-QEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhjwEBAPgBACECAAAAAQAgDwAAHQAgCoUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYgBAQD5AQAhiQEBAPkBACGLASAA-gEAIYwBQAD7AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhAgAAAA8AIA8AAB8AIAIAAAAPACAPAAAfACADAAAAAQAgFgAAGAAgFwAAHQAgAQAAAAEAIAEAAAAPACAGCQAA0gIAIBwAANQCACAdAADTAgAgiAEAAPQBACCJAQAA9AEAIIwBAAD0AQAgDYIBAADwAQAwgwEAACYAEIQBAADwAQAwhQEBALgBACGGAQEAuAEAIYcBAQC4AQAhiAEBALkBACGJAQEAuQEAIYsBIAC6AQAhjAFAALsBACGNAUAAvAEAIY4BQAC8AQAhjwEBALgBACEDAAAADwAgAQAAJQAwGwAAJgAgAwAAAA8AIAEAABQAMAIAAAEAIBQEAADrAQAgBQAA7AEAIAYAAO0BACAHAADuAQAgCAAA7wEAIIIBAADoAQAwgwEAACwAEIQBAADoAQAwhQEBAAAAAYYBAQDKAQAhhwEBAAAAAYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhswEgAMwBACG1AQAA6QG1ASK3AQAA6gG3ASK4ASAAzAEAIbkBAQDLAQAhAQAAACkAIAEAAAApACAUBAAA6wEAIAUAAOwBACAGAADtAQAgBwAA7gEAIAgAAO8BACCCAQAA6AEAMIMBAAAsABCEAQAA6AEAMIUBAQDKAQAhhgEBAMoBACGHAQEAygEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhswEgAMwBACG1AQAA6QG1ASK3AQAA6gG3ASK4ASAAzAEAIbkBAQDLAQAhBwQAAM0CACAFAADOAgAgBgAAzwIAIAcAANACACAIAADRAgAgjAEAAPQBACC5AQAA9AEAIAMAAAAsACABAAAtADACAAApACADAAAALAAgAQAALQAwAgAAKQAgAwAAACwAIAEAAC0AMAIAACkAIBEEAADIAgAgBQAAyQIAIAYAAMoCACAHAADLAgAgCAAAzAIAIIUBAQAAAAGGAQEAAAABhwEBAAAAAYsBIAAAAAGMAUAAAAABjQFAAAAAAY4BQAAAAAGzASAAAAABtQEAAAC1AQK3AQAAALcBArgBIAAAAAG5AQEAAAABAQ8AADEAIAyFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQEPAAAzADABDwAAMwAwEQQAAJwCACAFAACdAgAgBgAAngIAIAcAAJ8CACAIAACgAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACECAAAAKQAgDwAANgAgDIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhAgAAACwAIA8AADgAIAIAAAAsACAPAAA4ACADAAAAKQAgFgAAMQAgFwAANgAgAQAAACkAIAEAAAAsACAFCQAAlwIAIBwAAJkCACAdAACYAgAgjAEAAPQBACC5AQAA9AEAIA-CAQAA4QEAMIMBAAA_ABCEAQAA4QEAMIUBAQC4AQAhhgEBALgBACGHAQEAuAEAIYsBIAC6AQAhjAFAALsBACGNAUAAvAEAIY4BQAC8AQAhswEgALoBACG1AQAA4gG1ASK3AQAA4wG3ASK4ASAAugEAIbkBAQC5AQAhAwAAACwAIAEAAD4AMBsAAD8AIAMAAAAsACABAAAtADACAAApACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAkDAACWAgAghQEBAAAAAY0BQAAAAAGOAUAAAAABjwEBAAAAAaYBQAAAAAGwAQEAAAABsQEBAAAAAbIBAQAAAAEBDwAARwAgCIUBAQAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAGmAUAAAAABsAEBAAAAAbEBAQAAAAGyAQEAAAABAQ8AAEkAMAEPAABJADAJAwAAlQIAIIUBAQD4AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhpgFAAPwBACGwAQEA-AEAIbEBAQD5AQAhsgEBAPkBACECAAAABQAgDwAATAAgCIUBAQD4AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhpgFAAPwBACGwAQEA-AEAIbEBAQD5AQAhsgEBAPkBACECAAAAAwAgDwAATgAgAgAAAAMAIA8AAE4AIAMAAAAFACAWAABHACAXAABMACABAAAABQAgAQAAAAMAIAUJAACSAgAgHAAAlAIAIB0AAJMCACCxAQAA9AEAILIBAAD0AQAgC4IBAADgAQAwgwEAAFUAEIQBAADgAQAwhQEBALgBACGNAUAAvAEAIY4BQAC8AQAhjwEBALgBACGmAUAAvAEAIbABAQC4AQAhsQEBALkBACGyAQEAuQEAIQMAAAADACABAABUADAbAABVACADAAAAAwAgAQAABAAwAgAABQAgAQAAAAkAIAEAAAAJACADAAAABwAgAQAACAAwAgAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACAOAwAAkQIAIIUBAQAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAGnAQEAAAABqAEBAAAAAakBAQAAAAGqAQEAAAABqwEBAAAAAawBQAAAAAGtAUAAAAABrgEBAAAAAa8BAQAAAAEBDwAAXQAgDYUBAQAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAGnAQEAAAABqAEBAAAAAakBAQAAAAGqAQEAAAABqwEBAAAAAawBQAAAAAGtAUAAAAABrgEBAAAAAa8BAQAAAAEBDwAAXwAwAQ8AAF8AMA4DAACQAgAghQEBAPgBACGNAUAA_AEAIY4BQAD8AQAhjwEBAPgBACGnAQEA-AEAIagBAQD4AQAhqQEBAPkBACGqAQEA-QEAIasBAQD5AQAhrAFAAPsBACGtAUAA-wEAIa4BAQD5AQAhrwEBAPkBACECAAAACQAgDwAAYgAgDYUBAQD4AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhpwEBAPgBACGoAQEA-AEAIakBAQD5AQAhqgEBAPkBACGrAQEA-QEAIawBQAD7AQAhrQFAAPsBACGuAQEA-QEAIa8BAQD5AQAhAgAAAAcAIA8AAGQAIAIAAAAHACAPAABkACADAAAACQAgFgAAXQAgFwAAYgAgAQAAAAkAIAEAAAAHACAKCQAAjQIAIBwAAI8CACAdAACOAgAgqQEAAPQBACCqAQAA9AEAIKsBAAD0AQAgrAEAAPQBACCtAQAA9AEAIK4BAAD0AQAgrwEAAPQBACAQggEAAN8BADCDAQAAawAQhAEAAN8BADCFAQEAuAEAIY0BQAC8AQAhjgFAALwBACGPAQEAuAEAIacBAQC4AQAhqAEBALgBACGpAQEAuQEAIaoBAQC5AQAhqwEBALkBACGsAUAAuwEAIa0BQAC7AQAhrgEBALkBACGvAQEAuQEAIQMAAAAHACABAABqADAbAABrACADAAAABwAgAQAACAAwAgAACQAgCYIBAADeAQAwgwEAAHEAEIQBAADeAQAwhQEBAAAAAY0BQADOAQAhjgFAAM4BACGkAQEAygEAIaUBAQDKAQAhpgFAAM4BACEBAAAAbgAgAQAAAG4AIAmCAQAA3gEAMIMBAABxABCEAQAA3gEAMIUBAQDKAQAhjQFAAM4BACGOAUAAzgEAIaQBAQDKAQAhpQEBAMoBACGmAUAAzgEAIQADAAAAcQAgAQAAcgAwAgAAbgAgAwAAAHEAIAEAAHIAMAIAAG4AIAMAAABxACABAAByADACAABuACAGhQEBAAAAAY0BQAAAAAGOAUAAAAABpAEBAAAAAaUBAQAAAAGmAUAAAAABAQ8AAHYAIAaFAQEAAAABjQFAAAAAAY4BQAAAAAGkAQEAAAABpQEBAAAAAaYBQAAAAAEBDwAAeAAwAQ8AAHgAMAaFAQEA-AEAIY0BQAD8AQAhjgFAAPwBACGkAQEA-AEAIaUBAQD4AQAhpgFAAPwBACECAAAAbgAgDwAAewAgBoUBAQD4AQAhjQFAAPwBACGOAUAA_AEAIaQBAQD4AQAhpQEBAPgBACGmAUAA_AEAIQIAAABxACAPAAB9ACACAAAAcQAgDwAAfQAgAwAAAG4AIBYAAHYAIBcAAHsAIAEAAABuACABAAAAcQAgAwkAAIoCACAcAACMAgAgHQAAiwIAIAmCAQAA3QEAMIMBAACEAQAQhAEAAN0BADCFAQEAuAEAIY0BQAC8AQAhjgFAALwBACGkAQEAuAEAIaUBAQC4AQAhpgFAALwBACEDAAAAcQAgAQAAgwEAMBsAAIQBACADAAAAcQAgAQAAcgAwAgAAbgAgFwMAAM8BACCCAQAA2QEAMIMBAAANABCEAQAA2QEAMIUBAQAAAAGGAQEAygEAIYcBAQAAAAGIAQEAywEAIYkBAQDLAQAhigEBAMsBACGLASAAzAEAIYwBQADNAQAhjQFAAM4BACGOAUAAzgEAIY8BAQAAAAGbAQEAAAABnAECANoBACGeAQAA2wGeASKfAQgA3AEAIaABAQDKAQAhoQEBAMoBACGiAQEAygEAIaMBCADcAQAhAQAAAIcBACABAAAAhwEAIAUDAAD_AQAgiAEAAPQBACCJAQAA9AEAIIoBAAD0AQAgjAEAAPQBACADAAAADQAgAQAAigEAMAIAAIcBACADAAAADQAgAQAAigEAMAIAAIcBACADAAAADQAgAQAAigEAMAIAAIcBACAUAwAAiQIAIIUBAQAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAGJAQEAAAABigEBAAAAAYsBIAAAAAGMAUAAAAABjQFAAAAAAY4BQAAAAAGPAQEAAAABmwEBAAAAAZwBAgAAAAGeAQAAAJ4BAp8BCAAAAAGgAQEAAAABoQEBAAAAAaIBAQAAAAGjAQgAAAABAQ8AAI4BACAThQEBAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAYkBAQAAAAGKAQEAAAABiwEgAAAAAYwBQAAAAAGNAUAAAAABjgFAAAAAAY8BAQAAAAGbAQEAAAABnAECAAAAAZ4BAAAAngECnwEIAAAAAaABAQAAAAGhAQEAAAABogEBAAAAAaMBCAAAAAEBDwAAkAEAMAEPAACQAQAwFAMAAIgCACCFAQEA-AEAIYYBAQD4AQAhhwEBAPgBACGIAQEA-QEAIYkBAQD5AQAhigEBAPkBACGLASAA-gEAIYwBQAD7AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhmwEBAPgBACGcAQIAhQIAIZ4BAACGAp4BIp8BCACHAgAhoAEBAPgBACGhAQEA-AEAIaIBAQD4AQAhowEIAIcCACECAAAAhwEAIA8AAJMBACAThQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiAEBAPkBACGJAQEA-QEAIYoBAQD5AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGPAQEA-AEAIZsBAQD4AQAhnAECAIUCACGeAQAAhgKeASKfAQgAhwIAIaABAQD4AQAhoQEBAPgBACGiAQEA-AEAIaMBCACHAgAhAgAAAA0AIA8AAJUBACACAAAADQAgDwAAlQEAIAMAAACHAQAgFgAAjgEAIBcAAJMBACABAAAAhwEAIAEAAAANACAJCQAAgAIAIBwAAIMCACAdAACCAgAgbgAAgQIAIG8AAIQCACCIAQAA9AEAIIkBAAD0AQAgigEAAPQBACCMAQAA9AEAIBaCAQAA0AEAMIMBAACcAQAQhAEAANABADCFAQEAuAEAIYYBAQC4AQAhhwEBALgBACGIAQEAuQEAIYkBAQC5AQAhigEBALkBACGLASAAugEAIYwBQAC7AQAhjQFAALwBACGOAUAAvAEAIY8BAQC4AQAhmwEBALgBACGcAQIA0QEAIZ4BAADSAZ4BIp8BCADTAQAhoAEBALgBACGhAQEAuAEAIaIBAQC4AQAhowEIANMBACEDAAAADQAgAQAAmwEAMBsAAJwBACADAAAADQAgAQAAigEAMAIAAIcBACAPAwAAzwEAIIIBAADJAQAwgwEAAAsAEIQBAADJAQAwhQEBAAAAAYYBAQDKAQAhhwEBAAAAAYgBAQDLAQAhiQEBAMsBACGKAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAAAAAQEAAACfAQAgAQAAAJ8BACAFAwAA_wEAIIgBAAD0AQAgiQEAAPQBACCKAQAA9AEAIIwBAAD0AQAgAwAAAAsAIAEAAKIBADACAACfAQAgAwAAAAsAIAEAAKIBADACAACfAQAgAwAAAAsAIAEAAKIBADACAACfAQAgDAMAAP4BACCFAQEAAAABhgEBAAAAAYcBAQAAAAGIAQEAAAABiQEBAAAAAYoBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABjwEBAAAAAQEPAACmAQAgC4UBAQAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAGJAQEAAAABigEBAAAAAYsBIAAAAAGMAUAAAAABjQFAAAAAAY4BQAAAAAGPAQEAAAABAQ8AAKgBADABDwAAqAEAMAwDAAD9AQAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiAEBAPkBACGJAQEA-QEAIYoBAQD5AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGPAQEA-AEAIQIAAACfAQAgDwAAqwEAIAuFAQEA-AEAIYYBAQD4AQAhhwEBAPgBACGIAQEA-QEAIYkBAQD5AQAhigEBAPkBACGLASAA-gEAIYwBQAD7AQAhjQFAAPwBACGOAUAA_AEAIY8BAQD4AQAhAgAAAAsAIA8AAK0BACACAAAACwAgDwAArQEAIAMAAACfAQAgFgAApgEAIBcAAKsBACABAAAAnwEAIAEAAAALACAHCQAA9QEAIBwAAPcBACAdAAD2AQAgiAEAAPQBACCJAQAA9AEAIIoBAAD0AQAgjAEAAPQBACAOggEAALcBADCDAQAAtAEAEIQBAAC3AQAwhQEBALgBACGGAQEAuAEAIYcBAQC4AQAhiAEBALkBACGJAQEAuQEAIYoBAQC5AQAhiwEgALoBACGMAUAAuwEAIY0BQAC8AQAhjgFAALwBACGPAQEAuAEAIQMAAAALACABAACzAQAwGwAAtAEAIAMAAAALACABAACiAQAwAgAAnwEAIA6CAQAAtwEAMIMBAAC0AQAQhAEAALcBADCFAQEAuAEAIYYBAQC4AQAhhwEBALgBACGIAQEAuQEAIYkBAQC5AQAhigEBALkBACGLASAAugEAIYwBQAC7AQAhjQFAALwBACGOAUAAvAEAIY8BAQC4AQAhDgkAAL4BACAcAADIAQAgHQAAyAEAIJABAQAAAAGRAQEAAAAEkgEBAAAABJMBAQAAAAGUAQEAAAABlQEBAAAAAZYBAQAAAAGXAQEAxwEAIZgBAQAAAAGZAQEAAAABmgEBAAAAAQ4JAADBAQAgHAAAxgEAIB0AAMYBACCQAQEAAAABkQEBAAAABZIBAQAAAAWTAQEAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwEBAMUBACGYAQEAAAABmQEBAAAAAZoBAQAAAAEFCQAAvgEAIBwAAMQBACAdAADEAQAgkAEgAAAAAZcBIADDAQAhCwkAAMEBACAcAADCAQAgHQAAwgEAIJABQAAAAAGRAUAAAAAFkgFAAAAABZMBQAAAAAGUAUAAAAABlQFAAAAAAZYBQAAAAAGXAUAAwAEAIQsJAAC-AQAgHAAAvwEAIB0AAL8BACCQAUAAAAABkQFAAAAABJIBQAAAAASTAUAAAAABlAFAAAAAAZUBQAAAAAGWAUAAAAABlwFAAL0BACELCQAAvgEAIBwAAL8BACAdAAC_AQAgkAFAAAAAAZEBQAAAAASSAUAAAAAEkwFAAAAAAZQBQAAAAAGVAUAAAAABlgFAAAAAAZcBQAC9AQAhCJABAgAAAAGRAQIAAAAEkgECAAAABJMBAgAAAAGUAQIAAAABlQECAAAAAZYBAgAAAAGXAQIAvgEAIQiQAUAAAAABkQFAAAAABJIBQAAAAASTAUAAAAABlAFAAAAAAZUBQAAAAAGWAUAAAAABlwFAAL8BACELCQAAwQEAIBwAAMIBACAdAADCAQAgkAFAAAAAAZEBQAAAAAWSAUAAAAAFkwFAAAAAAZQBQAAAAAGVAUAAAAABlgFAAAAAAZcBQADAAQAhCJABAgAAAAGRAQIAAAAFkgECAAAABZMBAgAAAAGUAQIAAAABlQECAAAAAZYBAgAAAAGXAQIAwQEAIQiQAUAAAAABkQFAAAAABZIBQAAAAAWTAUAAAAABlAFAAAAAAZUBQAAAAAGWAUAAAAABlwFAAMIBACEFCQAAvgEAIBwAAMQBACAdAADEAQAgkAEgAAAAAZcBIADDAQAhApABIAAAAAGXASAAxAEAIQ4JAADBAQAgHAAAxgEAIB0AAMYBACCQAQEAAAABkQEBAAAABZIBAQAAAAWTAQEAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwEBAMUBACGYAQEAAAABmQEBAAAAAZoBAQAAAAELkAEBAAAAAZEBAQAAAAWSAQEAAAAFkwEBAAAAAZQBAQAAAAGVAQEAAAABlgEBAAAAAZcBAQDGAQAhmAEBAAAAAZkBAQAAAAGaAQEAAAABDgkAAL4BACAcAADIAQAgHQAAyAEAIJABAQAAAAGRAQEAAAAEkgEBAAAABJMBAQAAAAGUAQEAAAABlQEBAAAAAZYBAQAAAAGXAQEAxwEAIZgBAQAAAAGZAQEAAAABmgEBAAAAAQuQAQEAAAABkQEBAAAABJIBAQAAAASTAQEAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwEBAMgBACGYAQEAAAABmQEBAAAAAZoBAQAAAAEPAwAAzwEAIIIBAADJAQAwgwEAAAsAEIQBAADJAQAwhQEBAMoBACGGAQEAygEAIYcBAQDKAQAhiAEBAMsBACGJAQEAywEAIYoBAQDLAQAhiwEgAMwBACGMAUAAzQEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIQuQAQEAAAABkQEBAAAABJIBAQAAAASTAQEAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwEBAMgBACGYAQEAAAABmQEBAAAAAZoBAQAAAAELkAEBAAAAAZEBAQAAAAWSAQEAAAAFkwEBAAAAAZQBAQAAAAGVAQEAAAABlgEBAAAAAZcBAQDGAQAhmAEBAAAAAZkBAQAAAAGaAQEAAAABApABIAAAAAGXASAAxAEAIQiQAUAAAAABkQFAAAAABZIBQAAAAAWTAUAAAAABlAFAAAAAAZUBQAAAAAGWAUAAAAABlwFAAMIBACEIkAFAAAAAAZEBQAAAAASSAUAAAAAEkwFAAAAAAZQBQAAAAAGVAUAAAAABlgFAAAAAAZcBQAC_AQAhFgQAAOsBACAFAADsAQAgBgAA7QEAIAcAAO4BACAIAADvAQAgggEAAOgBADCDAQAALAAQhAEAAOgBADCFAQEAygEAIYYBAQDKAQAhhwEBAMoBACGLASAAzAEAIYwBQADNAQAhjQFAAM4BACGOAUAAzgEAIbMBIADMAQAhtQEAAOkBtQEitwEAAOoBtwEiuAEgAMwBACG5AQEAywEAIb0BAAAsACC-AQAALAAgFoIBAADQAQAwgwEAAJwBABCEAQAA0AEAMIUBAQC4AQAhhgEBALgBACGHAQEAuAEAIYgBAQC5AQAhiQEBALkBACGKAQEAuQEAIYsBIAC6AQAhjAFAALsBACGNAUAAvAEAIY4BQAC8AQAhjwEBALgBACGbAQEAuAEAIZwBAgDRAQAhngEAANIBngEinwEIANMBACGgAQEAuAEAIaEBAQC4AQAhogEBALgBACGjAQgA0wEAIQ0JAAC-AQAgHAAAvgEAIB0AAL4BACBuAADVAQAgbwAAvgEAIJABAgAAAAGRAQIAAAAEkgECAAAABJMBAgAAAAGUAQIAAAABlQECAAAAAZYBAgAAAAGXAQIA2AEAIQcJAAC-AQAgHAAA1wEAIB0AANcBACCQAQAAAJ4BApEBAAAAngEIkgEAAACeAQiXAQAA1gGeASINCQAAvgEAIBwAANUBACAdAADVAQAgbgAA1QEAIG8AANUBACCQAQgAAAABkQEIAAAABJIBCAAAAASTAQgAAAABlAEIAAAAAZUBCAAAAAGWAQgAAAABlwEIANQBACENCQAAvgEAIBwAANUBACAdAADVAQAgbgAA1QEAIG8AANUBACCQAQgAAAABkQEIAAAABJIBCAAAAASTAQgAAAABlAEIAAAAAZUBCAAAAAGWAQgAAAABlwEIANQBACEIkAEIAAAAAZEBCAAAAASSAQgAAAAEkwEIAAAAAZQBCAAAAAGVAQgAAAABlgEIAAAAAZcBCADVAQAhBwkAAL4BACAcAADXAQAgHQAA1wEAIJABAAAAngECkQEAAACeAQiSAQAAAJ4BCJcBAADWAZ4BIgSQAQAAAJ4BApEBAAAAngEIkgEAAACeAQiXAQAA1wGeASINCQAAvgEAIBwAAL4BACAdAAC-AQAgbgAA1QEAIG8AAL4BACCQAQIAAAABkQECAAAABJIBAgAAAASTAQIAAAABlAECAAAAAZUBAgAAAAGWAQIAAAABlwECANgBACEXAwAAzwEAIIIBAADZAQAwgwEAAA0AEIQBAADZAQAwhQEBAMoBACGGAQEAygEAIYcBAQDKAQAhiAEBAMsBACGJAQEAywEAIYoBAQDLAQAhiwEgAMwBACGMAUAAzQEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIZsBAQDKAQAhnAECANoBACGeAQAA2wGeASKfAQgA3AEAIaABAQDKAQAhoQEBAMoBACGiAQEAygEAIaMBCADcAQAhCJABAgAAAAGRAQIAAAAEkgECAAAABJMBAgAAAAGUAQIAAAABlQECAAAAAZYBAgAAAAGXAQIAvgEAIQSQAQAAAJ4BApEBAAAAngEIkgEAAACeAQiXAQAA1wGeASIIkAEIAAAAAZEBCAAAAASSAQgAAAAEkwEIAAAAAZQBCAAAAAGVAQgAAAABlgEIAAAAAZcBCADVAQAhCYIBAADdAQAwgwEAAIQBABCEAQAA3QEAMIUBAQC4AQAhjQFAALwBACGOAUAAvAEAIaQBAQC4AQAhpQEBALgBACGmAUAAvAEAIQmCAQAA3gEAMIMBAABxABCEAQAA3gEAMIUBAQDKAQAhjQFAAM4BACGOAUAAzgEAIaQBAQDKAQAhpQEBAMoBACGmAUAAzgEAIRCCAQAA3wEAMIMBAABrABCEAQAA3wEAMIUBAQC4AQAhjQFAALwBACGOAUAAvAEAIY8BAQC4AQAhpwEBALgBACGoAQEAuAEAIakBAQC5AQAhqgEBALkBACGrAQEAuQEAIawBQAC7AQAhrQFAALsBACGuAQEAuQEAIa8BAQC5AQAhC4IBAADgAQAwgwEAAFUAEIQBAADgAQAwhQEBALgBACGNAUAAvAEAIY4BQAC8AQAhjwEBALgBACGmAUAAvAEAIbABAQC4AQAhsQEBALkBACGyAQEAuQEAIQ-CAQAA4QEAMIMBAAA_ABCEAQAA4QEAMIUBAQC4AQAhhgEBALgBACGHAQEAuAEAIYsBIAC6AQAhjAFAALsBACGNAUAAvAEAIY4BQAC8AQAhswEgALoBACG1AQAA4gG1ASK3AQAA4wG3ASK4ASAAugEAIbkBAQC5AQAhBwkAAL4BACAcAADnAQAgHQAA5wEAIJABAAAAtQECkQEAAAC1AQiSAQAAALUBCJcBAADmAbUBIgcJAAC-AQAgHAAA5QEAIB0AAOUBACCQAQAAALcBApEBAAAAtwEIkgEAAAC3AQiXAQAA5AG3ASIHCQAAvgEAIBwAAOUBACAdAADlAQAgkAEAAAC3AQKRAQAAALcBCJIBAAAAtwEIlwEAAOQBtwEiBJABAAAAtwECkQEAAAC3AQiSAQAAALcBCJcBAADlAbcBIgcJAAC-AQAgHAAA5wEAIB0AAOcBACCQAQAAALUBApEBAAAAtQEIkgEAAAC1AQiXAQAA5gG1ASIEkAEAAAC1AQKRAQAAALUBCJIBAAAAtQEIlwEAAOcBtQEiFAQAAOsBACAFAADsAQAgBgAA7QEAIAcAAO4BACAIAADvAQAgggEAAOgBADCDAQAALAAQhAEAAOgBADCFAQEAygEAIYYBAQDKAQAhhwEBAMoBACGLASAAzAEAIYwBQADNAQAhjQFAAM4BACGOAUAAzgEAIbMBIADMAQAhtQEAAOkBtQEitwEAAOoBtwEiuAEgAMwBACG5AQEAywEAIQSQAQAAALUBApEBAAAAtQEIkgEAAAC1AQiXAQAA5wG1ASIEkAEAAAC3AQKRAQAAALcBCJIBAAAAtwEIlwEAAOUBtwEiA7oBAAADACC7AQAAAwAgvAEAAAMAIAO6AQAABwAguwEAAAcAILwBAAAHACARAwAAzwEAIIIBAADJAQAwgwEAAAsAEIQBAADJAQAwhQEBAMoBACGGAQEAygEAIYcBAQDKAQAhiAEBAMsBACGJAQEAywEAIYoBAQDLAQAhiwEgAMwBACGMAUAAzQEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIb0BAAALACC-AQAACwAgGQMAAM8BACCCAQAA2QEAMIMBAAANABCEAQAA2QEAMIUBAQDKAQAhhgEBAMoBACGHAQEAygEAIYgBAQDLAQAhiQEBAMsBACGKAQEAywEAIYsBIADMAQAhjAFAAM0BACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGbAQEAygEAIZwBAgDaAQAhngEAANsBngEinwEIANwBACGgAQEAygEAIaEBAQDKAQAhogEBAMoBACGjAQgA3AEAIb0BAAANACC-AQAADQAgEAMAAM8BACCCAQAA8QEAMIMBAAAPABCEAQAA8QEAMIUBAQDKAQAhhgEBAMoBACGHAQEAygEAIYgBAQDLAQAhiQEBAMsBACGLASAAzAEAIYwBQADNAQAhjQFAAM4BACGOAUAAzgEAIY8BAQDKAQAhvQEAAA8AIL4BAAAPACANggEAAPABADCDAQAAJgAQhAEAAPABADCFAQEAuAEAIYYBAQC4AQAhhwEBALgBACGIAQEAuQEAIYkBAQC5AQAhiwEgALoBACGMAUAAuwEAIY0BQAC8AQAhjgFAALwBACGPAQEAuAEAIQ4DAADPAQAgggEAAPEBADCDAQAADwAQhAEAAPEBADCFAQEAygEAIYYBAQDKAQAhhwEBAMoBACGIAQEAywEAIYkBAQDLAQAhiwEgAMwBACGMAUAAzQEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIREDAADPAQAgggEAAPIBADCDAQAABwAQhAEAAPIBADCFAQEAygEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIacBAQDKAQAhqAEBAMoBACGpAQEAywEAIaoBAQDLAQAhqwEBAMsBACGsAUAAzQEAIa0BQADNAQAhrgEBAMsBACGvAQEAywEAIQwDAADPAQAgggEAAPMBADCDAQAAAwAQhAEAAPMBADCFAQEAygEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIaYBQADOAQAhsAEBAMoBACGxAQEAywEAIbIBAQDLAQAhAAAAAAHFAQEAAAABAcUBAQAAAAEBxQEgAAAAAQHFAUAAAAABAcUBQAAAAAEFFgAA7QIAIBcAAPACACC_AQAA7gIAIMABAADvAgAgwwEAACkAIAMWAADtAgAgvwEAAO4CACDDAQAAKQAgBwQAAM0CACAFAADOAgAgBgAAzwIAIAcAANACACAIAADRAgAgjAEAAPQBACC5AQAA9AEAIAAAAAAABcUBAgAAAAHIAQIAAAAByQECAAAAAcoBAgAAAAHLAQIAAAABAcUBAAAAngECBcUBCAAAAAHIAQgAAAAByQEIAAAAAcoBCAAAAAHLAQgAAAABBRYAAOgCACAXAADrAgAgvwEAAOkCACDAAQAA6gIAIMMBAAApACADFgAA6AIAIL8BAADpAgAgwwEAACkAIAAAAAAAAAUWAADjAgAgFwAA5gIAIL8BAADkAgAgwAEAAOUCACDDAQAAKQAgAxYAAOMCACC_AQAA5AIAIMMBAAApACAAAAAFFgAA3gIAIBcAAOECACC_AQAA3wIAIMABAADgAgAgwwEAACkAIAMWAADeAgAgvwEAAN8CACDDAQAAKQAgAAAAAcUBAAAAtQECAcUBAAAAtwECCxYAALwCADAXAADBAgAwvwEAAL0CADDAAQAAvgIAMMEBAADAAgAwwgEAAMACADDDAQAAwAIAMMQBAAC_AgAgxQEAAMACADDGAQAAwgIAMMcBAADDAgAwCxYAALACADAXAAC1AgAwvwEAALECADDAAQAAsgIAMMEBAAC0AgAwwgEAALQCADDDAQAAtAIAMMQBAACzAgAgxQEAALQCADDGAQAAtgIAMMcBAAC3AgAwBxYAAKsCACAXAACuAgAgvwEAAKwCACDAAQAArQIAIMEBAAALACDCAQAACwAgwwEAAJ8BACAHFgAApgIAIBcAAKkCACC_AQAApwIAIMABAACoAgAgwQEAAA0AIMIBAAANACDDAQAAhwEAIAcWAAChAgAgFwAApAIAIL8BAACiAgAgwAEAAKMCACDBAQAADwAgwgEAAA8AIMMBAAABACAJhQEBAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAYkBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABAgAAAAEAIBYAAKECACADAAAADwAgFgAAoQIAIBcAAKUCACALAAAADwAgDwAApQIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYgBAQD5AQAhiQEBAPkBACGLASAA-gEAIYwBQAD7AQAhjQFAAPwBACGOAUAA_AEAIQmFAQEA-AEAIYYBAQD4AQAhhwEBAPgBACGIAQEA-QEAIYkBAQD5AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACEShQEBAAAAAYYBAQAAAAGHAQEAAAABiAEBAAAAAYkBAQAAAAGKAQEAAAABiwEgAAAAAYwBQAAAAAGNAUAAAAABjgFAAAAAAZsBAQAAAAGcAQIAAAABngEAAACeAQKfAQgAAAABoAEBAAAAAaEBAQAAAAGiAQEAAAABowEIAAAAAQIAAACHAQAgFgAApgIAIAMAAAANACAWAACmAgAgFwAAqgIAIBQAAAANACAPAACqAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiAEBAPkBACGJAQEA-QEAIYoBAQD5AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGbAQEA-AEAIZwBAgCFAgAhngEAAIYCngEinwEIAIcCACGgAQEA-AEAIaEBAQD4AQAhogEBAPgBACGjAQgAhwIAIRKFAQEA-AEAIYYBAQD4AQAhhwEBAPgBACGIAQEA-QEAIYkBAQD5AQAhigEBAPkBACGLASAA-gEAIYwBQAD7AQAhjQFAAPwBACGOAUAA_AEAIZsBAQD4AQAhnAECAIUCACGeAQAAhgKeASKfAQgAhwIAIaABAQD4AQAhoQEBAPgBACGiAQEA-AEAIaMBCACHAgAhCoUBAQAAAAGGAQEAAAABhwEBAAAAAYgBAQAAAAGJAQEAAAABigEBAAAAAYsBIAAAAAGMAUAAAAABjQFAAAAAAY4BQAAAAAECAAAAnwEAIBYAAKsCACADAAAACwAgFgAAqwIAIBcAAK8CACAMAAAACwAgDwAArwIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYgBAQD5AQAhiQEBAPkBACGKAQEA-QEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhCoUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYgBAQD5AQAhiQEBAPkBACGKAQEA-QEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhDIUBAQAAAAGNAUAAAAABjgFAAAAAAacBAQAAAAGoAQEAAAABqQEBAAAAAaoBAQAAAAGrAQEAAAABrAFAAAAAAa0BQAAAAAGuAQEAAAABrwEBAAAAAQIAAAAJACAWAAC7AgAgAwAAAAkAIBYAALsCACAXAAC6AgAgAQ8AAN0CADARAwAAzwEAIIIBAADyAQAwgwEAAAcAEIQBAADyAQAwhQEBAAAAAY0BQADOAQAhjgFAAM4BACGPAQEAygEAIacBAQDKAQAhqAEBAMoBACGpAQEAywEAIaoBAQDLAQAhqwEBAMsBACGsAUAAzQEAIa0BQADNAQAhrgEBAMsBACGvAQEAywEAIQIAAAAJACAPAAC6AgAgAgAAALgCACAPAAC5AgAgEIIBAAC3AgAwgwEAALgCABCEAQAAtwIAMIUBAQDKAQAhjQFAAM4BACGOAUAAzgEAIY8BAQDKAQAhpwEBAMoBACGoAQEAygEAIakBAQDLAQAhqgEBAMsBACGrAQEAywEAIawBQADNAQAhrQFAAM0BACGuAQEAywEAIa8BAQDLAQAhEIIBAAC3AgAwgwEAALgCABCEAQAAtwIAMIUBAQDKAQAhjQFAAM4BACGOAUAAzgEAIY8BAQDKAQAhpwEBAMoBACGoAQEAygEAIakBAQDLAQAhqgEBAMsBACGrAQEAywEAIawBQADNAQAhrQFAAM0BACGuAQEAywEAIa8BAQDLAQAhDIUBAQD4AQAhjQFAAPwBACGOAUAA_AEAIacBAQD4AQAhqAEBAPgBACGpAQEA-QEAIaoBAQD5AQAhqwEBAPkBACGsAUAA-wEAIa0BQAD7AQAhrgEBAPkBACGvAQEA-QEAIQyFAQEA-AEAIY0BQAD8AQAhjgFAAPwBACGnAQEA-AEAIagBAQD4AQAhqQEBAPkBACGqAQEA-QEAIasBAQD5AQAhrAFAAPsBACGtAUAA-wEAIa4BAQD5AQAhrwEBAPkBACEMhQEBAAAAAY0BQAAAAAGOAUAAAAABpwEBAAAAAagBAQAAAAGpAQEAAAABqgEBAAAAAasBAQAAAAGsAUAAAAABrQFAAAAAAa4BAQAAAAGvAQEAAAABB4UBAQAAAAGNAUAAAAABjgFAAAAAAaYBQAAAAAGwAQEAAAABsQEBAAAAAbIBAQAAAAECAAAABQAgFgAAxwIAIAMAAAAFACAWAADHAgAgFwAAxgIAIAEPAADcAgAwDAMAAM8BACCCAQAA8wEAMIMBAAADABCEAQAA8wEAMIUBAQAAAAGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGmAUAAzgEAIbABAQAAAAGxAQEAywEAIbIBAQDLAQAhAgAAAAUAIA8AAMYCACACAAAAxAIAIA8AAMUCACALggEAAMMCADCDAQAAxAIAEIQBAADDAgAwhQEBAMoBACGNAUAAzgEAIY4BQADOAQAhjwEBAMoBACGmAUAAzgEAIbABAQDKAQAhsQEBAMsBACGyAQEAywEAIQuCAQAAwwIAMIMBAADEAgAQhAEAAMMCADCFAQEAygEAIY0BQADOAQAhjgFAAM4BACGPAQEAygEAIaYBQADOAQAhsAEBAMoBACGxAQEAywEAIbIBAQDLAQAhB4UBAQD4AQAhjQFAAPwBACGOAUAA_AEAIaYBQAD8AQAhsAEBAPgBACGxAQEA-QEAIbIBAQD5AQAhB4UBAQD4AQAhjQFAAPwBACGOAUAA_AEAIaYBQAD8AQAhsAEBAPgBACGxAQEA-QEAIbIBAQD5AQAhB4UBAQAAAAGNAUAAAAABjgFAAAAAAaYBQAAAAAGwAQEAAAABsQEBAAAAAbIBAQAAAAEEFgAAvAIAML8BAAC9AgAwwwEAAMACADDEAQAAvwIAIAQWAACwAgAwvwEAALECADDDAQAAtAIAMMQBAACzAgAgAxYAAKsCACC_AQAArAIAIMMBAACfAQAgAxYAAKYCACC_AQAApwIAIMMBAACHAQAgAxYAAKECACC_AQAAogIAIMMBAAABACAAAAUDAAD_AQAgiAEAAPQBACCJAQAA9AEAIIoBAAD0AQAgjAEAAPQBACAFAwAA_wEAIIgBAAD0AQAgiQEAAPQBACCKAQAA9AEAIIwBAAD0AQAgBAMAAP8BACCIAQAA9AEAIIkBAAD0AQAgjAEAAPQBACAAAAAFFgAA1wIAIBcAANoCACC_AQAA2AIAIMABAADZAgAgwwEAACkAIAMWAADXAgAgvwEAANgCACDDAQAAKQAgEAQAAMgCACAFAADJAgAgBgAAygIAIAcAAMsCACCFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQIAAAApACAWAADXAgAgAwAAACwAIBYAANcCACAXAADbAgAgEgAAACwAIAQAAJwCACAFAACdAgAgBgAAngIAIAcAAJ8CACAPAADbAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACEQBAAAnAIAIAUAAJ0CACAGAACeAgAgBwAAnwIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhB4UBAQAAAAGNAUAAAAABjgFAAAAAAaYBQAAAAAGwAQEAAAABsQEBAAAAAbIBAQAAAAEMhQEBAAAAAY0BQAAAAAGOAUAAAAABpwEBAAAAAagBAQAAAAGpAQEAAAABqgEBAAAAAasBAQAAAAGsAUAAAAABrQFAAAAAAa4BAQAAAAGvAQEAAAABEAUAAMkCACAGAADKAgAgBwAAywIAIAgAAMwCACCFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQIAAAApACAWAADeAgAgAwAAACwAIBYAAN4CACAXAADiAgAgEgAAACwAIAUAAJ0CACAGAACeAgAgBwAAnwIAIAgAAKACACAPAADiAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACEQBQAAnQIAIAYAAJ4CACAHAACfAgAgCAAAoAIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhEAQAAMgCACAGAADKAgAgBwAAywIAIAgAAMwCACCFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQIAAAApACAWAADjAgAgAwAAACwAIBYAAOMCACAXAADnAgAgEgAAACwAIAQAAJwCACAGAACeAgAgBwAAnwIAIAgAAKACACAPAADnAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACEQBAAAnAIAIAYAAJ4CACAHAACfAgAgCAAAoAIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhEAQAAMgCACAFAADJAgAgBgAAygIAIAgAAMwCACCFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQIAAAApACAWAADoAgAgAwAAACwAIBYAAOgCACAXAADsAgAgEgAAACwAIAQAAJwCACAFAACdAgAgBgAAngIAIAgAAKACACAPAADsAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACEQBAAAnAIAIAUAAJ0CACAGAACeAgAgCAAAoAIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhEAQAAMgCACAFAADJAgAgBwAAywIAIAgAAMwCACCFAQEAAAABhgEBAAAAAYcBAQAAAAGLASAAAAABjAFAAAAAAY0BQAAAAAGOAUAAAAABswEgAAAAAbUBAAAAtQECtwEAAAC3AQK4ASAAAAABuQEBAAAAAQIAAAApACAWAADtAgAgAwAAACwAIBYAAO0CACAXAADxAgAgEgAAACwAIAQAAJwCACAFAACdAgAgBwAAnwIAIAgAAKACACAPAADxAgAghQEBAPgBACGGAQEA-AEAIYcBAQD4AQAhiwEgAPoBACGMAUAA-wEAIY0BQAD8AQAhjgFAAPwBACGzASAA-gEAIbUBAACaArUBIrcBAACbArcBIrgBIAD6AQAhuQEBAPkBACEQBAAAnAIAIAUAAJ0CACAHAACfAgAgCAAAoAIAIIUBAQD4AQAhhgEBAPgBACGHAQEA-AEAIYsBIAD6AQAhjAFAAPsBACGNAUAA_AEAIY4BQAD8AQAhswEgAPoBACG1AQAAmgK1ASK3AQAAmwK3ASK4ASAA-gEAIbkBAQD5AQAhAQMAAgYEBgMFCgQGDAUHDgYIEAEJAAcBAwACAQMAAgEDAAIBAwACAgQRAAUSAAABAwACAQMAAgMJAAwcAA0dAA4AAAADCQAMHAANHQAOAAADCQATHAAUHQAVAAAAAwkAExwAFB0AFQEDAAIBAwACAwkAGhwAGx0AHAAAAAMJABocABsdABwBAwACAQMAAgMJACEcACIdACMAAAADCQAhHAAiHQAjAAAAAwkAKRwAKh0AKwAAAAMJACkcACodACsBAwACAQMAAgUJADAcADMdADRuADFvADIAAAAAAAUJADAcADMdADRuADFvADIBAwACAQMAAgMJADkcADodADsAAAADCQA5HAA6HQA7CgIBCxMBDBUBDRYBDhcBEBkBERsIEhwJEx4BFCAIFSEKGCIBGSMBGiQIHicLHygPICoCISsCIi4CIy8CJDACJTICJjQIJzUQKDcCKTkIKjoRKzsCLDwCLT0ILkASL0EWMEIDMUMDMkQDM0UDNEYDNUgDNkoIN0sXOE0DOU8IOlAYO1EDPFIDPVMIPlYZP1cdQFgEQVkEQloEQ1sERFwERV4ERmAIR2EeSGMESWUISmYfS2cETGgETWkITmwgT20kUG8lUXAlUnMlU3QlVHUlVXclVnkIV3omWHwlWX4IWn8nW4ABJVyBASVdggEIXoUBKF-GASxgiAEGYYkBBmKLAQZjjAEGZI0BBmWPAQZmkQEIZ5IBLWiUAQZplgEIapcBLmuYAQZsmQEGbZoBCHCdAS9xngE1cqABBXOhAQV0owEFdaQBBXalAQV3pwEFeKkBCHmqATZ6rAEFe64BCHyvATd9sAEFfrEBBX-yAQiAAbUBOIEBtgE8"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/enums.ts
var Role = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  MODERATOR: "MODERATOR",
  TOURIST: "TOURIST"
};
var UserStatus = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
  DELETED: "DELETED"
};

// src/generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/lib/auth.ts
import { bearer, emailOTP } from "better-auth/plugins";

// src/app/config/env.ts
import dotenv from "dotenv";
import status from "http-status";

// src/app/errorHelpers/AppError.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var AppError_default = AppError;

// src/app/config/env.ts
dotenv.config();
var loadEnvVariables = () => {
  const requireEnvVariable = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "ACCESS_TOKEN_SECRET",
    "REFRESH_TOKEN_SECRET",
    "ACCESS_TOKEN_EXPIRES_IN",
    "REFRESH_TOKEN_EXPIRES_IN",
    "BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN",
    "BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE",
    "EMAIL_SENDER_SMTP_USER",
    "EMAIL_SENDER_SMTP_PASS",
    "EMAIL_SENDER_SMTP_HOST",
    "EMAIL_SENDER_SMTP_PORT",
    "EMAIL_SENDER_SMTP_FROM",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_CALLBACK_URL",
    "FRONTEND_URL",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET"
    // 'STRIPE_SECRET_KEY',
    // 'STRIPE_WEBHOOK_SECRET',
    // 'SUPER_ADMIN_EMAIL',
    // 'SUPER_ADMIN_PASSWORD',
  ];
  requireEnvVariable.forEach((variable) => {
    if (!process.env[variable]) {
      throw new AppError_default(status.INTERNAL_SERVER_ERROR, `Environment variable ${variable} is required but not set in .env file.`);
    }
  });
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN: process.env.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE: process.env.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE,
    EMAIL_SENDER: {
      SMTP_USER: process.env.EMAIL_SENDER_SMTP_USER,
      SMTP_PASS: process.env.EMAIL_SENDER_SMTP_PASS,
      SMTP_HOST: process.env.EMAIL_SENDER_SMTP_HOST,
      SMTP_PORT: process.env.EMAIL_SENDER_SMTP_PORT,
      SMTP_FROM: process.env.EMAIL_SENDER_SMTP_FROM
    },
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    CLOUDINARY: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    }
    // STRIPE: {
    //     STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY as string,
    //     STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET as string,
    // },
    // SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL as string,
    // SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD as string,
  };
};
var envVars = loadEnvVariables();

// src/app/utils/email.ts
import ejs from "ejs";
import status2 from "http-status";
import nodemailer from "nodemailer";
import path2 from "path";
var transporter = nodemailer.createTransport({
  host: envVars.EMAIL_SENDER.SMTP_HOST,
  secure: true,
  auth: {
    user: envVars.EMAIL_SENDER.SMTP_USER,
    pass: envVars.EMAIL_SENDER.SMTP_PASS
  },
  port: Number(envVars.EMAIL_SENDER.SMTP_PORT)
});
var sendEmail = async ({ subject, templateData, templateName, to, attachments }) => {
  try {
    const templatePath = path2.resolve(process.cwd(), `src/app/templates/${templateName}.ejs`);
    const html = await ejs.renderFile(templatePath, templateData);
    const info = await transporter.sendMail({
      from: envVars.EMAIL_SENDER.SMTP_FROM,
      to,
      subject,
      html,
      attachments: attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
        contentType: attachment.contentType
      }))
    });
    console.log(`Email sent to ${to} : ${info.messageId}`);
  } catch (error) {
    console.log("Email Sending Error", error.message);
    throw new AppError_default(status2.INTERNAL_SERVER_ERROR, "Failed to send email");
  }
};

// src/lib/auth.ts
var auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
    // or "mysql", "postgresql", ...etc
  }),
  baseURL: process.env.FRONTEND_URL,
  trustedOrigins: [process.env.FRONTEND_URL],
  //...other options
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      prompt: "select_account"
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: Role.TOURIST
      },
      status: {
        type: "string",
        required: true,
        defaultValue: UserStatus.ACTIVE
      },
      needPasswordChange: {
        type: "boolean",
        required: true,
        defaultValue: false
      },
      isDeleted: {
        type: "boolean",
        required: true,
        defaultValue: false
      },
      deletedAt: {
        type: "date",
        required: false,
        defaultValue: null
      }
    }
  },
  plugins: [
    bearer(),
    emailOTP({
      overrideDefaultEmailVerification: true,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          const user = await prisma.user.findUnique({
            where: {
              email
            }
          });
          if (!user) {
            console.error(`User with email ${email} not found. Cannot send verification OTP.`);
            return;
          }
          if (user && user.role === Role.SUPER_ADMIN) {
            console.log(`User with email ${email} is a super admin. Skipping sending verification OTP.`);
            return;
          }
          if (user && !user.emailVerified) {
            sendEmail({
              to: email,
              subject: "Verify your email",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        } else if (type === "forget-password") {
          const user = await prisma.user.findUnique({
            where: {
              email
            }
          });
          if (user) {
            sendEmail({
              to: email,
              subject: "Password Reset OTP",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        }
      },
      expiresIn: 2 * 60,
      // 2 minutes in seconds
      otpLength: 6
    })
  ],
  session: {
    expiresIn: 60 * 60 * 60 * 24,
    // 1 day in seconds
    updateAge: 60 * 60 * 60 * 24,
    // 1 day in seconds
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 60 * 24
      // 1 day in seconds
    }
  },
  redirectURLs: {
    signIn: `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success`
  },
  // trustedOrigins: [process.env.BETTER_AUTH_URL || "http://localhost:5000", envVars.FRONTEND_URL],
  // account: { skipStateCookieCheck: true }, // solved redirect issue
  advanced: {
    cookies: {
      session_token: {
        name: "session_token",
        // Force this exact name
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          partitioned: true
        }
      },
      state: {
        name: "session_token",
        // Force this exact name
        attributes: {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          partitioned: true
        }
      }
    }
  }
  // plugins: [oAuthProxy()],
});

// src/app/routes/index.ts
import { Router as Router2 } from "express";

// src/app/modules/auth/auth.route.ts
import { Router } from "express";

// src/app/modules/auth/auth.controller.ts
var import_ms = __toESM(require_ms(), 1);
import status4 from "http-status";

// src/app/utils/cookie.ts
var setCookie = (res, key, value, options) => {
  res.cookie(key, value, options);
};
var getCookie = (req, key) => {
  return req.cookies[key];
};
var clearCookie = (res, key, options) => {
  res.clearCookie(key, options);
};
var CookieUtils = {
  setCookie,
  getCookie,
  clearCookie
};

// src/app/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (payload, secret, { expiresIn }) => {
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      success: true,
      data: decoded
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      error
    };
  }
};
var decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};
var jwtUtils = {
  createToken,
  verifyToken,
  decodeToken
};

// src/app/utils/token.ts
var getAccessToken = (payload) => {
  const accessToken = jwtUtils.createToken(
    payload,
    envVars.ACCESS_TOKEN_SECRET,
    { expiresIn: envVars.ACCESS_TOKEN_EXPIRES_IN }
  );
  return accessToken;
};
var getRefreshToken = (payload) => {
  const refreshToken = jwtUtils.createToken(
    payload,
    envVars.REFRESH_TOKEN_SECRET,
    { expiresIn: envVars.REFRESH_TOKEN_EXPIRES_IN }
  );
  return refreshToken;
};
var setAccessTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //1 day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var setRefreshTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "refreshToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //7d
    maxAge: 60 * 60 * 24 * 1e3 * 7
  });
};
var setBetterAuthSessionCookie = (res, token) => {
  CookieUtils.setCookie(res, "better-auth.session_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //1 day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var tokenUtils = {
  getAccessToken,
  getRefreshToken,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setBetterAuthSessionCookie
};

// src/app/modules/auth/auth.service.ts
import status3 from "http-status";
var registerTourist = async (payload) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password
      //default values
      // needsPasswordChange: false,
      // role: Role.PATIENT
    }
  });
  if (!data.user) {
    throw new AppError_default(status3.BAD_REQUEST, "Failed to register patient");
  }
  try {
    const tourist = await prisma.$transaction(async (tx) => {
      const touristTx = await tx.tourist.create({
        data: {
          userId: data.user.id,
          name: payload.name,
          email: payload.email
        }
      });
      return touristTx;
    });
    const accessToken = tokenUtils.getAccessToken({
      userId: data.user.id,
      role: data.user.role,
      name: data.user.name,
      email: data.user.email,
      status: data.user.status,
      isDeleted: data.user.isDeleted,
      emailVerified: data.user.emailVerified
    });
    const refreshToken = tokenUtils.getRefreshToken({
      userId: data.user.id,
      role: data.user.role,
      name: data.user.name,
      email: data.user.email,
      status: data.user.status,
      isDeleted: data.user.isDeleted,
      emailVerified: data.user.emailVerified
    });
    return {
      ...data,
      accessToken,
      refreshToken,
      tourist
    };
  } catch (error) {
    console.log("Transaction error : ", error);
    await prisma.user.delete({
      where: {
        id: data.user.id
      }
    });
    throw error;
  }
};
var loginUser = async (payload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password
    }
  });
  if (data.user.status === UserStatus.BLOCKED) {
    throw new AppError_default(status3.FORBIDDEN, "User is blocked");
  }
  if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User is deleted");
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  return {
    ...data,
    accessToken,
    refreshToken
  };
};
var getMe = async (user) => {
  const isUserExists = await prisma.user.findUnique({
    where: {
      id: user.userId
    },
    include: {
      tourist: {
        include: {
          // appointments : true,
          // reviews : true,
          // prescriptions : true,
          // medicalReports : true,
          // patientHealthData : true,
        }
      },
      moderator: {
        include: {
          // specialties : true,
          // appointments : true,
          // reviews : true,
          // prescriptions : true,
        }
      },
      admin: true
    }
  });
  if (!isUserExists) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  return isUserExists;
};
var getNewToken = async (refreshToken, sessionToken) => {
  const isSessionTokenExists = await prisma.session.findUnique({
    where: {
      token: sessionToken
    },
    include: {
      user: true
    }
  });
  if (!isSessionTokenExists) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid session token");
  }
  const verifiedRefreshToken = jwtUtils.verifyToken(refreshToken, envVars.REFRESH_TOKEN_SECRET);
  if (!verifiedRefreshToken.success && verifiedRefreshToken.error) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid refresh token");
  }
  const data = verifiedRefreshToken.data;
  const newAccessToken = tokenUtils.getAccessToken({
    userId: data.userId,
    role: data.role,
    name: data.name,
    email: data.email,
    status: data.status,
    isDeleted: data.isDeleted,
    emailVerified: data.emailVerified
  });
  const newRefreshToken = tokenUtils.getRefreshToken({
    userId: data.userId,
    role: data.role,
    name: data.name,
    email: data.email,
    status: data.status,
    isDeleted: data.isDeleted,
    emailVerified: data.emailVerified
  });
  const { token } = await prisma.session.update({
    where: {
      token: sessionToken
    },
    data: {
      token: sessionToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 60 * 24 * 1e3),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
    sessionToken: token
  };
};
var changePassword = async (payload, sessionToken) => {
  const session = await auth.api.getSession({
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  if (!session) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid session token");
  }
  const { currentPassword, newPassword } = payload;
  const result = await auth.api.changePassword({
    body: {
      currentPassword,
      newPassword,
      revokeOtherSessions: true
    },
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  if (session.user.needPasswordChange) {
    await prisma.user.update({
      where: {
        id: session.user.id
      },
      data: {
        needPasswordChange: false
      }
    });
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name,
    email: session.user.email,
    status: session.user.status,
    isDeleted: session.user.isDeleted,
    emailVerified: session.user.emailVerified
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name,
    email: session.user.email,
    status: session.user.status,
    isDeleted: session.user.isDeleted,
    emailVerified: session.user.emailVerified
  });
  return {
    ...result,
    accessToken,
    refreshToken
  };
};
var logoutUser = async (sessionToken) => {
  const result = await auth.api.signOut({
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  return result;
};
var verifyEmail = async (email, otp) => {
  const result = await auth.api.verifyEmailOTP({
    body: {
      email,
      otp
    }
  });
  if (result.status && !result.user.emailVerified) {
    await prisma.user.update({
      where: {
        email
      },
      data: {
        emailVerified: true
      }
    });
  }
};
var forgetPassword = async (email) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(status3.BAD_REQUEST, "Email not verified");
  }
  if (isUserExist.isDeleted || isUserExist.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  await auth.api.requestPasswordResetEmailOTP({
    body: {
      email
    }
  });
};
var resetPassword = async (email, otp, newPassword) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(status3.BAD_REQUEST, "Email not verified");
  }
  if (isUserExist.isDeleted || isUserExist.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  await auth.api.resetPasswordEmailOTP({
    body: {
      email,
      otp,
      password: newPassword
    }
  });
  if (isUserExist.needPasswordChange) {
    await prisma.user.update({
      where: {
        id: isUserExist.id
      },
      data: {
        needPasswordChange: false
      }
    });
  }
  await prisma.session.deleteMany({
    where: {
      userId: isUserExist.id
    }
  });
};
var googleLoginSuccess = async (session) => {
  const isPatientExists = await prisma.tourist.findUnique({
    where: {
      userId: session.user.id
    }
  });
  if (!isPatientExists) {
    await prisma.tourist.create({
      data: {
        userId: session.user.id,
        name: session.user.name,
        email: session.user.email
      }
    });
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name
  });
  return {
    accessToken,
    refreshToken
  };
};
var AuthService = {
  registerTourist,
  loginUser,
  getMe,
  getNewToken,
  changePassword,
  logoutUser,
  verifyEmail,
  forgetPassword,
  resetPassword,
  googleLoginSuccess
};

// src/app/shared/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// src/app/shared/sendResponse.ts
var sendResponse = (res, responseData) => {
  const { httpStatusCode, success, message, data, meta } = responseData;
  res.status(httpStatusCode).json({
    success,
    message,
    data,
    meta
  });
};

// src/app/modules/auth/auth.controller.ts
var registerTourist2 = catchAsync(
  async (req, res) => {
    const maxAge = (0, import_ms.default)(envVars.ACCESS_TOKEN_EXPIRES_IN);
    console.log({ maxAge });
    const payload = req.body;
    console.log(payload);
    const result = await AuthService.registerTourist(payload);
    const { accessToken, refreshToken, token, ...rest } = result;
    tokenUtils.setAccessTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, refreshToken);
    tokenUtils.setBetterAuthSessionCookie(res, token);
    sendResponse(res, {
      httpStatusCode: status4.CREATED,
      success: true,
      message: "Patient registered successfully",
      data: {
        token,
        accessToken,
        refreshToken,
        ...rest
      }
    });
  }
);
var loginUser2 = catchAsync(
  async (req, res) => {
    const payload = req.body;
    const result = await AuthService.loginUser(payload);
    const { accessToken, refreshToken, token, ...rest } = result;
    tokenUtils.setAccessTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, refreshToken);
    tokenUtils.setBetterAuthSessionCookie(res, token);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "User logged in successfully",
      data: {
        token,
        accessToken,
        refreshToken,
        ...rest
      }
    });
  }
);
var getMe2 = catchAsync(
  async (req, res) => {
    const user = req.user;
    console.log({ user });
    const result = await AuthService.getMe(user);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "User profile fetched successfully",
      data: result
    });
  }
);
var getNewToken2 = catchAsync(
  async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const betterAuthSessionToken = req.cookies["better-auth.session_token"];
    if (!refreshToken) {
      throw new AppError_default(status4.UNAUTHORIZED, "Refresh token is missing");
    }
    const result = await AuthService.getNewToken(refreshToken, betterAuthSessionToken);
    const { accessToken, refreshToken: newRefreshToken, sessionToken } = result;
    tokenUtils.setAccessTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, newRefreshToken);
    tokenUtils.setBetterAuthSessionCookie(res, sessionToken);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "New tokens generated successfully",
      data: {
        accessToken,
        refreshToken: newRefreshToken,
        sessionToken
      }
    });
  }
);
var changePassword2 = catchAsync(
  async (req, res) => {
    const payload = req.body;
    const betterAuthSessionToken = req.cookies["better-auth.session_token"];
    const result = await AuthService.changePassword(payload, betterAuthSessionToken);
    const { accessToken, refreshToken, token } = result;
    tokenUtils.setAccessTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, refreshToken);
    tokenUtils.setBetterAuthSessionCookie(res, token);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "Password changed successfully",
      data: result
    });
  }
);
var logoutUser2 = catchAsync(
  async (req, res) => {
    const betterAuthSessionToken = req.cookies["better-auth.session_token"];
    const result = await AuthService.logoutUser(betterAuthSessionToken);
    CookieUtils.clearCookie(res, "accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    CookieUtils.clearCookie(res, "refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    CookieUtils.clearCookie(res, "better-auth.session_token", {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "User logged out successfully",
      data: result
    });
  }
);
var verifyEmail2 = catchAsync(
  async (req, res) => {
    const { email, otp } = req.body;
    await AuthService.verifyEmail(email, otp);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "Email verified successfully"
    });
  }
);
var forgetPassword2 = catchAsync(
  async (req, res) => {
    const { email } = req.body;
    await AuthService.forgetPassword(email);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "Password reset OTP sent to email successfully"
    });
  }
);
var resetPassword2 = catchAsync(
  async (req, res) => {
    const { email, otp, newPassword } = req.body;
    await AuthService.resetPassword(email, otp, newPassword);
    sendResponse(res, {
      httpStatusCode: status4.OK,
      success: true,
      message: "Password reset successfully"
    });
  }
);
var googleLogin = catchAsync((req, res) => {
  const redirectPath = req.query.redirect || "/dashboard";
  const encodedRedirectPath = encodeURIComponent(redirectPath);
  const callbackURL = `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success?redirect=${encodedRedirectPath}`;
  res.render("googleRedirect", {
    callbackURL,
    betterAuthUrl: envVars.BETTER_AUTH_URL
  });
});
var googleLoginSuccess2 = catchAsync(async (req, res) => {
  const redirectPath = req.query.redirect || "/dashboard";
  const sessionToken = req.cookies["better-auth.session_token"];
  if (!sessionToken) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=oauth_failed`);
  }
  const session = await auth.api.getSession({
    headers: {
      "Cookie": `better-auth.session_token=${sessionToken}`
    }
  });
  if (!session) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_session_found`);
  }
  if (session && !session.user) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_user_found`);
  }
  const result = await AuthService.googleLoginSuccess(session);
  const { accessToken, refreshToken } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  const isValidRedirectPath = redirectPath.startsWith("/") && !redirectPath.startsWith("//");
  const finalRedirectPath = isValidRedirectPath ? redirectPath : "/dashboard";
  res.redirect(`${envVars.FRONTEND_URL}${finalRedirectPath}`);
});
var handleOAuthError = catchAsync((req, res) => {
  const error = req.query.error || "oauth_failed";
  res.redirect(`${envVars.FRONTEND_URL}/login?error=${error}`);
});
var AuthController = {
  registerTourist: registerTourist2,
  loginUser: loginUser2,
  getMe: getMe2,
  getNewToken: getNewToken2,
  changePassword: changePassword2,
  logoutUser: logoutUser2,
  verifyEmail: verifyEmail2,
  forgetPassword: forgetPassword2,
  resetPassword: resetPassword2,
  googleLogin,
  googleLoginSuccess: googleLoginSuccess2,
  handleOAuthError
};

// src/app/middleware/auth.ts
var checkAuth = (...authRoles) => async (req, res, next) => {
  try {
    const sessionToken = req.cookies["__Secure-session_token"] || req.cookies["session_token"];
    if (!sessionToken) {
      throw new Error("Unauthorized access! No session token provided.");
    }
    next();
  } catch (error) {
    next(error);
  }
};

// src/app/modules/auth/auth.route.ts
var router = Router();
router.post("/register", AuthController.registerTourist);
router.post("/login", AuthController.loginUser);
router.get("/me", checkAuth(Role.ADMIN, Role.MODERATOR, Role.TOURIST, Role.SUPER_ADMIN), AuthController.getMe);
router.post("/refresh-token", AuthController.getNewToken);
router.post("/change-password", checkAuth(Role.ADMIN, Role.MODERATOR, Role.TOURIST, Role.SUPER_ADMIN), AuthController.changePassword);
router.post("/logout", checkAuth(Role.ADMIN, Role.MODERATOR, Role.TOURIST, Role.SUPER_ADMIN), AuthController.logoutUser);
router.post("/verify-email", AuthController.verifyEmail);
router.post("/forget-password", AuthController.forgetPassword);
router.post("/reset-password", AuthController.resetPassword);
router.get("/login/google", AuthController.googleLogin);
router.get("/google/success", AuthController.googleLoginSuccess);
router.get("/oauth/error", AuthController.handleOAuthError);
var AuthRoutes = router;

// src/app/routes/index.ts
var router2 = Router2();
router2.use("/auth", AuthRoutes);
var IndexRoutes = router2;

// src/app.ts
var app = express();
app.set("query parser", (str) => import_qs.default.parse(str));
app.set("view engine", "ejs");
app.set("views", path3.resolve(process.cwd(), `src/app/templates`));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
    // methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    // allowedHeaders: [["Content-Type", "Authorization", "Cookie"],
  })
);
app.use("/api/auth", toNodeHandler(auth));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", IndexRoutes);
app.get("/", async (req, res) => {
  res.status(201).json({
    success: true,
    message: "API is working"
  });
});
var app_default = app;

// src/server.ts
var bootstrap = async () => {
  try {
    await prisma.$connect();
    app_default.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
bootstrap();
//# sourceMappingURL=server.js.map