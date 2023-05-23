module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href
    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }
    resolvedAs = delBasePath(resolvedAs);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;
function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/images/banner.png":
/*!**************************************!*\
  !*** ./src/assets/images/banner.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-808fb01bab3fc6358d975b7287855427.png";

/***/ }),

/***/ "./src/assets/images/icons/award.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/award.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/bulb-2.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons/bulb-2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/bulb.png":
/*!******************************************!*\
  !*** ./src/assets/images/icons/bulb.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/check-circle-filled.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/icons/check-circle-filled.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgBpZVfTttAEMZnxqlUqaqUG9SRIFWfCAcoTS7QeG8ANwgnCJyA5gS0J3BSDlCXHqB+Q/yRYm7gB5CQkGeYMSbExiEQvjeP17+Z3fl2jFCj7v+wmX2AgNDrg0gHEPziVQyACUs2+dd2P+u+xSew0zAQjw5BoAnPCSFh5v0qmOYfts5/HwhRuBRmEvAJ6XDr/GhYzjODHQ0ReA9WkAD+OF7/vjsDds/CbdFs8AYhs4s+u3EO/HYxmdoWXgUQHgl5n7RpQRFK8YpbZNWtAPsVtd0AOZvMhe+dIYR9eJ1ihW1rIR1t4EE5kQIB0X8xSiDRbfW6J6Ff5wb0aIOAoVPOwiPt9n4tLOMevIemvKM/tcdkVqrGGD2J1t2egjcNUoTTHHYDqTTyyp7CCpF2KSlVCDIwg+s5xTnEKhPuRV9cIh89s1ZnEUzXxg1FxtWMBlUrBXDLvb/tfstilmTOIvU84csGskwEMajJ5ttZfT0Nd5EaG3quA1giQhhjdxo2JaPpi+7vs+VBYruhqOVSzb4Db9SDM/IuR2tuLMgjWFEGi4oxNrPN8ZpepTr/LYOpb81mj/CK8skDNJyb0ouU6oTZsQlTSrBodQ4m+wWwr8vuvWeeJYrzoXAN42jTpdXv7gAMkt+TqYfaqAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/icons/dart.png":
/*!******************************************!*\
  !*** ./src/assets/images/icons/dart.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/diamond.png":
/*!*********************************************!*\
  !*** ./src/assets/images/icons/diamond.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAvCAYAAAC2VQk9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASsSURBVHgBzZnLbtNKGMe/sR07cS51euip4ByknKPDAXZBLNjSN4A3oGJTKiRgxw7zBIUVO8QbpG8AOyQuCjsWsCgbJMQllUJJ1bQx802axElmPDcH8ZPaJPZ4Mv+Z8fxsh4AG1199v/Wt27sChhQLHnvd7x+CKfXQf/b40tJ91fJEteBm+8ctkiQPvu7tw8HhAEw4d7IOR/TQd586YILvufBHOYBBQu48uhg+UDnGUSm0+aLTxHD4vhoUwITVWsgaWPJdOBWVwYSo5LNXhyRbN192L6scIw240e40iOe3Rp+xkb6n1C+QPmZ1KRx/PlEtQbmo11El3wPXmUy4xHVaG887DdlxmS3FcG7iP6VvG+ntOqPoOg78u1Kb2366XmH7VOF8Z+QG/lNZSOE33G53IhoOR64xu09nFFeXSqw8r47VWkmlirnRS9GgIVvYVtGxwlb2wd+iL03R/qgUgIwaLXOiIg6hOlUlM6bZH7C2cuEG3Gzv3YMErkEG2KOl42WfB47QqSgEGbKpmjF6Ewhc22z37vF2zdU81AHEoEA1o/dx+vGm5ixY5mRGR6ie7yQZxDde/7g9u30q4AZdekc6UEE0ivVykf2pskzL1jhTXmn0UvD0MQ7IVkyXtEATHEWHTBqhs3ikOb1cmRtxE+fO6oMFnOiARJr1sR4O/ckoqk5NXj1/05AjdEcvxZQ+CC6x/aHrmmDIIEngc3cflisBXVgqYMPH3T340u3Bn3SFNQw44k2BHKx5QMIthxwZh0McuoxFYQArlZCFtWGFBusfHkFB82qJQxOc4pYXlf0PYNVRQw7pVXSHXojnwV/1KnhuDo1K4IMTnyExffsQLPFcZ2qxMQWnZS7haCbMNq4pfp/geXgZLPi+fwC9A/N7PQTvGavHdw0WPIv/I2v4ZjLRXbhK/++ABSar5wLq2IEuy8IYB4z/Ibv0AnQNLEIWXOuFwXZx2cEM8QWa5Zip2uLzZAcGND2BXTCA0HPQJiSGsziPd7HtLEOKudbE/5M3cAR3wJAg4wJchu+ZH0vbvM7aPgO3u2nBJ3SJVX6wk8bmHPJdw2NpW+OzZJu3SzifTPWBy7zj6E9TYz1guGFbuUhrNNGHiS4M9bBNdXA1q4C8qw30ERhMU4OpjTpYlxWSBjTRh8lVjaYe5nQgQqlWXX2gLnTuBDT1wDp8VgcilLtNVx86utDSA+pAMRyiNS909KFzTinrIUMHIrTXc1V9qOpCWQ8SHYgwvi5S0YeKLhT1INWBCPMLRwV9BIqPDSUo6UCEcUAVfajoQqIHZR2IsLo3kelDpguJHrR0IML6Bk6mjyxdBJ4nHhlNHYiwv0OFbH1knWPCc9RAByJyCYiI9CHSxXA750GzoQ5E5PL4Kg1PHzxdCPRgrAMRuY3gGI4+eFOx6M9ts9KBiNwD8vTB00Vh+vLMWgci8h9BmNfHrC5m3JeLDkQsJCDC9JFMplxaF8W0OnLSgYiFBUTogrFNf4thjkzrYjw9c9SBiIUGRO6fIfiL8cORLvCVTdecdSAid02IoPpoUV1cwV/XqB5y14EIiyetmriwTu/cGwkk0SJ08Ftwt91rxG+TBvxCfgLBQWUbAUFxHwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/icons/help.png":
/*!******************************************!*\
  !*** ./src/assets/images/icons/help.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/play.png":
/*!******************************************!*\
  !*** ./src/assets/images/icons/play.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgBrVWLcYMwDJVzHYARnA3IBGWDskHoBmwAnYBkglwnaDoByQRlA9iAbuBKrZworj8013enEwbp+UnIoCABY0yOjkyjDUqpI9wLJMvQGrTZ3OID7gUmF2gjExFxj1ajVWjaE99RTop0K9TtSHkiPhfx25hSq7KE5RWWomWF+zAT5ZeuqgXkVtR4UyX3kHCIJOQJ8h3HtvKmVasDxBYH43mBompqyXwplZOOkRJ7sTn5OkDec0y+gp/hJ5wgjDMejDX6FzTqYccbuC/5nf03sebFJySA5C26Ddor57056i2HXsHfQcmzWHtn/QFtigVI8JzS5GjOe8YqTp5NJlI88OIpQdqh65l0j7ZxSAmP7AebNLNlrkI7m/yyRhP4LtAY2qmhte3xnstoIAxSuPaotGgE12U375Hm+23oUIi40viOND/8/4+QCKrMguMrqulEfCWfK09CAdeRItBRP8N1+KlUmqCcryf4PXZRNbXouw8z9987/2rBJvJnCqyQfqpDLO8LQw0VkZPvoKMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/icons/rocket.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons/rocket.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/icons/trophy.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons/trophy.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAULSURBVHgB7VlNbBtVEJ7ZXdtx6iaOSBtAQnK5cUEJICQOkZwbNKlIDkgVQkpy4dxc4ZD0AFeSK5caCRCnOlVIWg6oLr1xiZGQEgkVtghBKgViNXbjn90d3uxm17tJ9sfx2qd+0mr3/ey8742/N2/eGsEHR3ffzSEp2+IxC30Fqhrpc5nprfJZrZLfa0ZLGYe+k2VQDpFyfq0Y8CY0f7x2Q07JX0Afobf0xeTURsGvXQl6OTGUKgNK0E9IsqEGtQcSBmUgQDQ9ghzcjPWtGfJrlJIKJC5loJ9o7VfBaGi+7b3xnzxoXT1AbwgPvWldPcBJDVfE1Y5/shnWxqFTMFn28MFD6BSI5viVdg2HOMzZJcXbGddT720sOl23P8qL233oBEx0WBDWn1nPfO8AykhmKTHxdckuN7ZmimKR5ewyS8KZDZF/wI4MWwpMNgZZkGvzEptGRRAml/sxB93CTXI4Bh1TmzABqQoCltsupxwV81mcK1VCDY1MWtdJZF5rP18Qz69+crpPbQfgSRHCcFCczQJqzhoyEB4rOuADCWjWrqwrGe5QCrcmFlTyEsDYnH8floV7Aoy/vwHYvwdRkJS1vLuMBpYl1MmTFYmdeLZd0tRAi09uA+wuiaRjH0LBfX77NAJZw/l1lQS9722CkpS+9n0JXAtPhJV5loVVGgiXBhP5/bPgEMZtTPboTwhHUrWfiKR8u55U5mpuHAbBV061WJX15KDpZZwoVDg/hSikgwj/91PU8Fa2xhRz27y6YMVgC8KRJb6bhNGAdfdbiPKyUzCMBxAF2Un/tuG3IBKoLU8PB6ZR12/y3SR8LIuS683c0ebMynGhDFHgXlz7P3ijwMhkJBOCsOmcxt2ZZbd3mVt67p7KD04Cf7Qxk0e5vatxkG6RMXXh5csqSNoBhJHl8MXS+OtLgOqOVc9h7ZWPhSxHAR4Jndd2A82AoV2p71VAHM3+8MyjoV2xCTvJD3tZaHnN6SR+ZAXlYl3dy4pCKXCgoTes2MqLzybLcOp2w2VBVLDIJjypgDguFWyyHsKMRlNZ4dXospKTknJR1/S1wMGY0KPPzw5vdhQ5ehxoAjTjjmQoRa8USLW160zg1NibV8cVlHiWrgMoqsmxDKAi56AHIE1XW3uHFUJvZuiWgsPkLAMcUhClW+46KSVOH6O9OX00954C6YanjggX09OnD6NnJvDp6a0CkbHoruNji15rQNzQDuuRyTJ8TxxMWteAEwVnt9OeCuOaAXGBbenCpguVILKMwO8SDOsLkHzfTj1RliBx+aLIOUJfDSXLB862d0mlhj51UrPQKWEbvJGI7dHcfTAhm3o+L2kS8dMk29KtMsHNgWZ1NUpa29GI7G0geUXk0PPnJe0myzGWw1aYV89N2AYTJ5JnFUWeV17IjKMS7fBtyuDfWtlo6XeievQkuhMik9i+nhOZ+gpIOB/Sda3+rLqafmddhS7QNWEbtP3hgiC9fOpcyNu60Ci6TsLdIDbCjIMP8gup1wdvpd7OANUNaP5chcZObXHk9sMCxAQFYkQ6Ozzf+vUQqr/ULOOpJFwcG2WpFCAmxCeJG9fzcPzRRWs0zTomfIwpXP2uBDEgzm9rzqJjoi6yjGWICR15WCyscZAlHvz0Xwn/UD7w5ZewdGa9bizhxLfRTjXQqYYlkcGRz8fBF0PmTpD3sckyGoGoFKAjYC/+pOnIZr//EOgazwn3Gs8J9xr/A8k/+l30dBCXAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/logo-white.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-white.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAAlCAYAAAD/Yl01AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHYWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0xN1QxMzozNDoyOSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMTdUMTQ6MDY6MjIrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMTdUMTQ6MDY6MjIrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmNmMzNzU4LWM4MTMtOTU0MS1iM2Q2LTQwYjY2ZThlZGZjZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjlmY2IxYmMwLWM1NWEtZDY0MS04NWEyLWU5YjA2MGM3YzMzMiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmViNTQwYjQ2LTc2OGQtODk0MS1hNThmLTNiN2M0ZTFkM2NkNSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkI4ODhBOTA0QzlFOTNEMTUxNzg2M0Y4N0M4MjIxRDc2PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxZjBlNzliLWEyNGItNDc0OS1iNTMyLWEwN2QwMjE2MWM4ODwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYzk5ZjA0ZC1kYTY4LWZkNDQtOGMzNi1hMjE0NTU0MjM4Zjc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjkwYTFjMGNhLTBhNWItMzE0NC04NWY0LTUwMmM3NTNjODBhMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6YmU0N2NmMTYtMzQ5NC0zNjRhLWJhZGUtNmFhZjAyNzkwODM5PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWI1NDBiNDYtNzY4ZC04OTQxLWE1OGYtM2I3YzRlMWQzY2Q1IiBzdEV2dDp3aGVuPSIyMDIzLTA1LTE3VDEzOjM0OjI5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBmNmMzNzU4LWM4MTMtOTU0MS1iM2Q2LTQwYjY2ZThlZGZjZCIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xN1QxNDowNjoyMiswMTowMCIgc3RFdnQ6c29mdHdh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"

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAAlCAYAAAD/Yl01AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGOmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0xN1QxMzozNDoyOSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMTdUMTQ6MDU6NDArMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMTdUMTQ6MDU6NDArMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMzhmM2QxLTE1MDMtODU0NS1iZmY4LTM2NjA5MDY2MWJhOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMjM4ZjNkMS0xNTAzLTg1NDUtYmZmOC0zNjYwOTA2NjFiYTkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMjM4ZjNkMS0xNTAzLTg1NDUtYmZmOC0zNjYwOTA2NjFiYTkiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5CODg4QTkwNEM5RTkzRDE1MTc4NjNGODdDODIyMUQ3NjwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiYzk5ZjA0ZC1kYTY4LWZkNDQtOGMzNi1hMjE0NTU0MjM4Zjc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjkwYTFjMGNhLTBhNWItMzE0NC04NWY0LTUwMmM3NTNjODBhMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6YmU0N2NmMTYtMzQ5NC0zNjRhLWJhZGUtNmFhZjAyNzkwODM5PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIzOGYzZDEtMTUwMy04NTQ1LWJmZjgtMzY2MDkwNjYxYmE5IiBzdEV2dDp3aGVuPSIyMDIzLTA1LTE3VDEzOjM0OjI5KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMCAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dn9CAQAABjRJREFUeJztnHuIVUUcxz93vddVM91UMoowRNMKM1ErygjZoLDCsjIrKwopkAwzevwRRoVmDyupKB+1mmHYA6Wi99MoNcsKMQnpQUk+ilxlM13dvf3xm9Oee+7Medxz7/Ve+n3gspw5M/ObM+d8Z37zm2Ez+XweRVGg4XA3QFFqBRWDohhUDIpiUDEoikHFoCgGFYOiGFQMimJQMSiKQcWgKIbs4W6ARyaT6QncCxyZpBiwAPgBuACYBBwMyd8J/AasA9YG8jYA04CRMW0fAh4D+gMzgH0R7fwV+Mb8djny5YBbgCGWe38B9xm7NsYANwLBIwUZoB2Yaa7nUdzHeeBuoA2YAFxCYd/kgPXAcxa744BrkL717K0FXgQagdlAX0ebvfx7gR+Bz4EtwWeo2imJfD5fEz/gKGCn6Ygkv/HmUWYnLPcZcLqvK3LA6gTl9yMf4FUJ7f6CfNSNltfR07TLZW+8pYzHshCbf/vy2fq4Exho7j8QUs9Qi92bLfmWIR95E7A9Qd+0A28AZ/oNVOsbrCU3qYPiUS0O+83fsBnBxjhktPM+sDzuUdeG/wUmYRAi3G+BUwP3OpF+sNEInOu41w84K8SmXwyuPvaePex5XgOOCLkfrCvpO80BFwFrgIcSlCsLtSSGUumVsvxCkrlmHhmgWwq7w4EPgcEJytzmSD8Ru2tVbkYgLmGlyQF3AvOrYOs/ambNEMEG7CN/Bpn2w9hnyvZCOjnIUOA8ZHp2sQnxazO+tHagFTg+wn4YA4C3EGHEoQ9wNuJb+7krRRuS8iDwMvBTFWzNAF4HPq2CrboRwziSuyMeM5FpNwsswu5OjAJWhdRxPuL72hjhSF8NtCCzx0nAdcAwS75hwE2mbXF4Ahjru84iC95q8g5wGuFBgyiuRwaTfkAzMNWSJ4cERaoihnpxk3qkKLsViTZtRqZeG1Fu0ihkFD/W9xsYWgK+Rka1VcBcZFH4pSPvlRTOOmGMBE7wXd8Rs1w5GUpXdKpUViL9sxS4FhGHjTEp7cSmXmaGFuCA77oDeBzYGKOs/yOb4sizlfCBYTkyM/nr+hlxWVw0Ba5bgcuQ0G6Q45ARsi2kPo8sMBl42FxPjlGmEswBXsK94I+iL4Uh5hXI4vmKQL40bmgi6kUMkwLXHcCbxBPDImAPErY82XJ/N/AJ4WLoZ0nbS/Lo1zbgd2Rm8TMAmZ3iiCEDXA48hTyPzfWqFh8jkbFycAj4AHk2/6BzdJnqj6Re3KQgnRSGC8MYAozGLgSAJcD3JbSh1J0g24K/N+GuYHD0HYvsyzQjIve3KSqgUCrrLWmDkI3SctFKcb/a9mMqQr2KoRsSWSmVg4iYHsG9joiigdL6b5QlrZVwcT9vSZsF3BpI242M1pVgDvC+JT1JaDiKwRSvneLMlmWhXtykFro210BGyk0p6tuG7D7/GTP/fOS4gL+/9hDuL9s28C515N1h6nPxHnA1hRtesyz5niT+cZKk9EGiXhuRWSktwf7phbjDQTG4onhlp17EMI2usy9J2UBhKBJkUdZEfDHcj6wRSqURmIg7fLrR1O9yCQYgAYN7IuzMA94upYEx6I4cJXkUmSXKRQY4BlhM8XuCdINeIupFDP2BP0osu4LiTs4CzwIXUhilcjEFeSn+Tbs8IjQXExGfugPZVBsdkjfq4+oNvEC4GDYjs2fcEG2pzEVmqVNS1rMEidD1QNY+vR351qS0E5t6EUMavkA+lODLawYuBl6NUcdCS9oB4JyQMsOJt7P8NOKCRbEd2S9xRY+WU701YLNpS9hp1ChcLqOfXYSfDCgr9bqATkJfYLrj3uIU9XqnPdPwLnB7zLxtwFeOe+2Iq1XpWcFjJ+WNIrmYSnWOfQD/DzFkkLM86yz3mpB4fbXpBJ5BXKk4bprHSkf6DuCjtI1KyAIqd0xiC7KhaYteVYxaEkMWd3u6xyjvWnzmEL/dNZLdQNdOchw7Hg1IiLdnVEZDJ/LRvoIcG59OsRAasLuu3h6Ey2XYRFdky3bE2r9p6Jo9vGd37XfYnnMC8E9IXdkQe0HagO+QUPcZiHtbVTL6v1YVRailmUFRDisqBkUxqBgUxaBiUBSDikFRDCoGRTGoGBTFoGJQFMO/QWgbppF0GdIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/video.png":
/*!*************************************!*\
  !*** ./src/assets/images/video.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video-822dfcff975867dcd4262ba0615c4bda.png";

/***/ }),

/***/ "./src/assets/images/widgets.png":
/*!***************************************!*\
  !*** ./src/assets/images/widgets.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/widgets-a8a8883c18420e8c65bab7e492427001.png";

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Accordion(_ref) {
  let {
      items
    } = _ref,
    props = _objectWithoutProperties(_ref, ["items"]);
  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_1__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_2__["single"], _shared__WEBPACK_IMPORTED_MODULE_2__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    key: item.title,
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: openIndexes.includes(index) ? 'open' : 'closed',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_2__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, item.contents)))));
}

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      openIndexes: [0]
    });
    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }
  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }
  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }
  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }
}
_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});


/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */


const AccordionButton = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    sx: styles.buttonToggle
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const styles = {
  buttonToggle: {
    display: 'flex',
    color: 'headingSecondary',
    cursor: 'pointer',
    border: 'none',
    fontSize: [16, 16, 16, 18, 20],
    fontWeight: 500,
    letterSpacing: -0.5,
    position: 'relative',
    paddingLeft: ['33px', '45px'],
    lineHeight: [1.5, 1.8],
    '& > span': {
      position: 'absolute',
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundColor: 'primary',
      top: ['2px', '6px'],
      left: [0, '13px'],
      '&.open:after': {
        opacity: 0
      },
      '&::before': {
        position: 'absolute',
        content: '""',
        height: '2px',
        width: 10,
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)'
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        height: 10,
        width: '2px',
        backgroundColor: 'white',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        transition: 'all 0.25s'
      }
    }
  }
};
const variants = {
  open: {
    height: 'auto',
    marginTop: 12
  },
  closed: {
    height: 0,
    marginTop: 0
  }
};
function AccordionContents(_ref2) {
  let {
      isOpen
    } = _ref2,
    props = _objectWithoutProperties(_ref2, ["isOpen"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    sx: {
      overflowY: 'hidden',
      fontSize: [1, 2],
      lineHeight: 2,
      color: '#343D48',
      paddingLeft: ['33px', '45px'],
      ' > div ': {
        paddingBottom: [1, 2]
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
      isOpen,
      children
    } = _ref3,
    rest = _objectWithoutProperties(_ref3, ["isOpen", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      overflow: 'hidden',
      padding: '17px 0',
      borderBottom: '1px solid #E5ECF4',
      '&:last-child': {
        borderBottom: '0px solid'
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/cards/feature.js":
/*!*****************************************!*\
  !*** ./src/components/cards/feature.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\cards\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


const Feature = ({
  feature
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.featureItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.value,
    style: {
      color: feature === null || feature === void 0 ? void 0 : feature.color
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, feature.value), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, feature.title));
};
/* harmony default export */ __webpack_exports__["default"] = (Feature);
const styles = {
  featureItem: {
    backgroundColor: '#fff',
    boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth: 300,
    flexDirection: 'column',
    padding: ['0 5px', '0 18px', '0 18px', '0 12px', '0 20px', '0 25px', '0 59px'],
    textAlign: 'center',
    minHeight: [150, 150, 150, 185, 240, 280, 320],
    width: ['auto', 'auto', 'auto', 177, 225, 258, 300]
  },
  value: {
    fontWeight: 700,
    fontSize: [30, 30, 30, 30, 50, 60, 72],
    lineHeight: [1.83, 0.76],
    letterSpacing: '-1.5px'
  },
  title: {
    fontSize: ['14px', '16px', '16px', '15px', '17px'],
    lineHeight: [1.62, 1.48],
    letterSpacing: '-0.2px',
    color: 'heading',
    mt: ['1px', '20px'],
    color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#0F2137', 0.7)
  }
};

/***/ }),

/***/ "./src/components/cards/ultimate-feature.js":
/*!**************************************************!*\
  !*** ./src/components/cards/ultimate-feature.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\cards\\ultimate-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */

const UltimateFeature = _ref => {
  let {
      data
    } = _ref,
    props = _objectWithoutProperties(_ref, ["data"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    sx: styles.feature
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("figure", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: data === null || data === void 0 ? void 0 : data.icon,
    alt: data === null || data === void 0 ? void 0 : data.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.description)));
};
/* harmony default export */ __webpack_exports__["default"] = (UltimateFeature);
const styles = {
  feature: {
    textAlign: ['center', 'center', 'center', 'center', 'left'],
    maxWidth: [230, 230, 230, 230, 'none'],
    margin: '0 auto',
    figure: {
      backgroundColor: 'white',
      boxShadow: '0px 8px 24px rgba(53, 95, 158, 0.1)',
      height: '90px',
      margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 30px', '0 0 40px'],
      width: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    },
    h4: {
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px'
    },
    p: {
      fontSize: 16,
      lineHeight: [1.6, 1.6, 1.6, 1.88],
      color: 'text'
    }
  }
};

/***/ }),

/***/ "./src/components/footer-widget.js":
/*!*****************************************!*\
  !*** ./src/components/footer-widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\footer-widget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */



const FooterWidget = ({
  title,
  items
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerWidget,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, items.map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: path,
    key: i,
    label: label,
    variant: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (FooterWidget);
const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading'
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      a: {
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.8)
      }
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: menuItems, footerNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerNav", function() { return footerNav; });
const menuItems = [{
  id: 1,
  title: 'Company',
  items: [{
    path: '#!',
    label: 'School'
  }, {
    path: '#!',
    label: 'Our Approach'
  }, {
    path: '#!',
    label: 'Resources'
  }, {
    path: '#!',
    label: 'Work with us'
  }]
}, {
  id: 2,
  title: 'About Us',
  items: [{
    path: '#!',
    label: 'Support Center'
  }, {
    path: '#!',
    label: 'Student Support'
  }, {
    path: '#!',
    label: 'About Us'
  }]
}, {
  id: 3,
  title: 'Our Information',
  items: [{
    path: '#!',
    label: 'Return Policy '
  }, {
    path: '#!',
    label: 'Privacy Policy'
  }, {
    path: '#!',
    label: 'Terms & Conditions'
  }, {
    path: '#!',
    label: 'Site Map'
  }, {
    path: '#!',
    label: 'Store Hours'
  }]
}, {
  id: 4,
  title: 'My Account',
  items: [{
    path: '#!',
    label: 'Press inquiries'
  }, {
    path: '#!',
    label: 'Social media '
  }, {
    path: '#!',
    label: 'directories'
  }, {
    path: '#!',
    label: 'Images & B-roll'
  }, {
    path: '#!',
    label: 'Permissions'
  }]
}, {
  id: 5,
  title: 'Policy',
  items: [{
    path: '#!',
    label: 'Application security'
  }, {
    path: '#!',
    label: 'Software principles'
  }, {
    path: '#!',
    label: 'Unwanted software policy'
  }, {
    path: '#!',
    label: 'Responsible supply chain'
  }]
}];
const footerNav = [{
  path: '#!',
  label: 'Home'
}, {
  path: '#!',
  label: 'School'
}, {
  path: '#!',
  label: 'Our Approach'
}, {
  path: '#!',
  label: 'Resources'
}, {
  path: '#!',
  label: 'Work with us'
}];

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_footer_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer-widget */ "./src/components/footer-widget.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */






function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "footer",
    variant: "layout.footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerTopInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_5__["menuItems"].map(({
    id,
    title,
    items
  }) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_footer_widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: id,
    title: title,
    items: items,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Copyright  ", new Date().getFullYear(), " Fredmind, Inc")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: styles.footerNav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_5__["footerNav"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    path: path,
    key: i,
    label: label,
    variant: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })))))));
}
const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(3, 1fr)', 'repeat(5, 1fr)']
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10
    }
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: Object(polished__WEBPACK_IMPORTED_MODULE_6__["rgba"])('#0F2137', 0.6),
      mt: ['18px', '18px', '7px']
    }
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px'
      }
    },
    a: {
      color: 'textSecondary'
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'ultimate-feature',
  label: 'School '
}, {
  path: 'pricing',
  label: 'Our Approach'
}, {
  path: 'pricing',
  label: ' Resources '
}, {
  path: 'faq',
  label: 'Work with Us'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */







function Header() {
  const {
    0: mobileMenu,
    1: setMobileMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.headerWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: true,
    top: 0,
    activeClass: "is-sticky",
    innerZ: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "header",
    variant: "layout.header",
    className: mobileMenu ? 'is-mobile-menu' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.headerInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isWhite: mobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.navbar,
    className: mobileMenu ? 'navbar active' : 'navbar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: styles.navList,
    className: mobileMenu ? 'active' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_6__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    path: path,
    label: label,
    onClick: closeMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primaryMd",
    sx: styles.explore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Enroll Now")), mobileMenu ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    sx: styles.closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__["GrClose"], {
    onClick: closeMobileMenu,
    color: "white",
    size: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["MenuButton"], {
    "aria-label": "Toggle Menu",
    onClick: openMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }))))));
}
const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    transition: '0.3s ease-in-out 0s',
    '.is-sticky': {
      header: {
        backgroundColor: '#fff',
        boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
        py: [12],
        '&.is-mobile-menu': {
          backgroundColor: 'text'
        }
      }
    }
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'text',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible'
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5
          },
          a: {
            color: 'white'
          }
        }
      }
    }
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: '0 20px'
    },
    '.active': {
      color: 'primary'
    }
  },
  explore: {
    display: ['block', 'block', 'block', 'block', 'none'],
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: '#fff'
    }
  }
};

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Image(_ref) {
  let {
      src
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["src"]);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */




function Layout({
  children
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link, LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMore", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ "react-icons/hi");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */




function NavLink(_ref) {
  let {
      path,
      label,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    to: path,
    spy: true,
    offset: -70,
    smooth: true,
    duration: 500,
    className: "nav-item",
    activeClass: "active"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), label);
}
function Link(_ref2) {
  let {
      path,
      label,
      children
    } = _ref2,
    rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), children ? children : label));
}
function LearnMore(_ref3) {
  let {
      path,
      label,
      children
    } = _ref3,
    rest = _objectWithoutProperties(_ref3, ["path", "label", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({
    sx: styles.learnMore
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), label !== null && label !== void 0 ? label : 'Learn More', " ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__["HiOutlineChevronRight"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  })));
}
const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px'
    },
    ':hover': {
      svg: {
        ml: '8px'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/logo-white.png */ "./src/assets/images/logo-white.png");
/* harmony import */ var assets_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */




function Logo({
  isWhite
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    sx: {
      variant: 'links.logo'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: isWhite ? assets_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4___default.a : assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "FREDMIND DIGITAL SCHOOL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/*! exports provided: default, CloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return CloseButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/gr */ "react-icons/gr");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\modal\\modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */




// import './modal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    zIndex: 100
  },
  content: {
    border: 0,
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    overflow: 'unset',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%'
  }
};
function Modal(_ref) {
  let {
      isOpen,
      closeModal,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, ["isOpen", "closeModal", "children"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => document.body.style.overflow = 'unset';
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    isOpen: isOpen,
    ariaHideApp: false,
    style: customStyles,
    closeTimeoutMS: 2000,
    onRequestClose: closeModal
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), children);
}
/* harmony default export */ __webpack_exports__["default"] = (Modal);
const CloseButton = _ref2 => {
  let {
      onClick,
      size,
      color
    } = _ref2,
    props = _objectWithoutProperties(_ref2, ["onClick", "size", "color"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", _extends({
    sx: styles.button,
    onClick: onClick
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_2__["GrClose"], {
    size: size !== null && size !== void 0 ? size : '24px',
    color: color !== null && color !== void 0 ? color : color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }));
};
const styles = {
  button: {
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    display: 'inline-flex',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: '-40px',
    path: {
      stroke: '#fff'
    }
  }
};

/***/ }),

/***/ "./src/components/responsive-iframe.js":
/*!*********************************************!*\
  !*** ./src/components/responsive-iframe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\responsive-iframe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */

const ResponsiveIframe = _ref => {
  let {
      src,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, ["src", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.videoContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, children ? children : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("iframe", _extends({
    src: src
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 30
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveIframe);
const styles = {
  videoContainer: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
    iframe: {
      border: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    }
  }
};

/***/ }),

/***/ "./src/components/section-heading.js":
/*!*******************************************!*\
  !*** ./src/components/section-heading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\section-heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */

const SectionHeading = _ref => {
  let {
      title,
      description
    } = _ref,
    props = _objectWithoutProperties(_ref, ["title", "description"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    sx: styles.heading
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, description));
};
/* harmony default export */ __webpack_exports__["default"] = (SectionHeading);
const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 580,
    margin: '0 auto 60px'
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: ['24px', '30px'],
    lineHeight: [1.25, 1.5],
    letterSpacing: 'heading'
  },
  description: {
    color: 'heading',
    fontSize: ['14px', '16px'],
    lineHeight: [1.85, 2.2],
    mt: '10px'
  }
};

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'Fredmind Digital School',
  author = 'Mobiverio, Inc',
  meta,
  title = 'Fredmind Digital School'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_ultimate_features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/ultimate-features */ "./src/sections/ultimate-features.js");
/* harmony import */ var sections_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/features */ "./src/sections/features.js");
/* harmony import */ var sections_intro_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/intro-video */ "./src/sections/intro-video.js");
/* harmony import */ var sections_useful_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/useful-features */ "./src/sections/useful-features.js");
/* harmony import */ var sections_widgets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/widgets */ "./src/sections/widgets.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











// import Pricing from 'sections/pricing';

function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Fredmind Digital School",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(sections_ultimate_features__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(sections_features__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(sections_intro_video__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(sections_useful_features__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(sections_widgets__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/banner.png */ "./src/assets/images/banner.png");
/* harmony import */ var assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


// import paypal from 'assets/images/paypal.png';
// import google from 'assets/images/google.png';
// import dropbox from 'assets/images/dropbox.png';

const Banner = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    id: "home",
    as: "section",
    variant: "section.banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Hey Aspiring techie OR Are you a Tech Enthusiast?"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Explore, Learn, and Excel with our tech programs. Our program is designed to equip you with the skills needed to succeed in today's fast-paced digital world. No degree or prior tech experience required."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Enrol Now")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.illustration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_images_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);
const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 0]
  },
  content: {
    maxWidth: [507, null, null, 324, 450]
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['24px', null, null, null, '40px', '20px', '40px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary'
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px']
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25]
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px']
      }
    }
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%']
    }
  }
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faq; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */



const faqs = [{
  title: 'How can I enroll?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "All you have to do is sign up here (link to school page) and follow the instructions!")
}, {
  title: 'I’m not sure what course to take, what do I do?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "We have created this guide to help you through this process. If you\u2019re still clueless , you can reach out to us here. school@fredminddigital.com")
}, {
  title: `What qualification do I need to get accepted?`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "No qualification is needed at all. Come as you are.")
}, {
  title: `How much is tuition?`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Tuition varies by course. Check out yours here.")
}, {
  title: `Can I start classes immediately after I enroll?
`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "We run a cohort-based program which means that you can totally sign up but classes won\u2019t start until the next cohort.")
}, {
  title: `Can I get a refund of my tuition fee?`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "No, you can\u2019t. You can only transfer your enrollment to another course within your   school")
}];
function Faq() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "faq",
    variant: "section.faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Do you have any quesiton",
    description: "Our support team ready to help you, please contact with them",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      display: 'flex',
      width: ['100%', null, null, '650px', '745px'],
      flexDirection: 'column',
      mx: 'auto',
      my: -4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: faqs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/sections/features.js":
/*!**********************************!*\
  !*** ./src/sections/features.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/feature */ "./src/components/cards/feature.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/check-circle-filled.png */ "./src/assets/images/icons/check-circle-filled.png");
/* harmony import */ var assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */







const data = [{
  id: 1,
  color: '#28D1DC',
  value: '80K+',
  title: 'We have more than customers'
}, {
  id: 2,
  color: '#FF753A',
  value: '150+',
  title: 'Free online tutorials videos available'
}, {
  id: 3,
  color: '#FA578E',
  value: '90+',
  title: 'Daily updated blog post maintain'
}, {
  id: 4,
  color: '#28DCB2',
  value: '& 3M',
  title: 'Job posted everyday`s with  qualification'
}];
const Features = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    variant: "section.features",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.leftContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item === null || item === void 0 ? void 0 : item.id,
    feature: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.rightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "Go from CLUELESS ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 35
      }
    }), "to TECH BRO!!!"),
    description: "Hear what our students have to say from their learning experience.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.explore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["LearnMore"], {
    path: "#!",
    label: "Join them",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Features);
const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: ['1.2fr 0.8fr', '1.2fr 0.8fr', '1.2fr 0.8fr', '1.1fr 0.9fr', '1.1fr 0.9fr', '1.1fr 0.9fr', '1.2fr 0.8fr'],
    alignItems: 'center'
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px']
      },
      ':last-of-type': {
        mt: ['-65px']
      }
    }
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, '-70px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'block']
      }
    },
    p: {
      mt: ['15px', '10px']
    }
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px'
    }
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px']
  }
};

/***/ }),

/***/ "./src/sections/intro-video.js":
/*!*************************************!*\
  !*** ./src/sections/intro-video.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_images_video_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/video.png */ "./src/assets/images/video.png");
/* harmony import */ var assets_images_video_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_video_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_icons_play_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/play.png */ "./src/assets/images/icons/play.png");
/* harmony import */ var assets_images_icons_play_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_play_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_modal_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var components_responsive_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/responsive-iframe */ "./src/components/responsive-iframe.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\intro-video.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */









const IntroVideo = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.section,
    variant: "section.introVideo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: "Equip Yourself for a World of Opportunities.",
    description: " We are a digital school shaping you for the future of work. Looking to kickstart your career in tech? We are just the right stop for you. Not only will we hold your hands through your learning phase, we will support you to the point you land your first job or internship. Our curriculum is gradual and project based. Through our courses in Marketing, Data, Engineering and Design, you will learn, work on projects to build your portfolio and become an attractive talent in the job market.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.explore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["LearnMore"], {
    path: "#!",
    label: "Learn More",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.videoWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_modal_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_modal_modal__WEBPACK_IMPORTED_MODULE_7__["CloseButton"], {
    onClick: () => setIsOpen(false),
    size: "24px",
    color: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_responsive_iframe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: "https://youtube.com",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_video_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "video-banner",
    alt: "video banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    sx: styles.playPause,
    onClick: () => setIsOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_icons_play_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), " Watch Full video"))));
};
/* harmony default export */ __webpack_exports__["default"] = (IntroVideo);
const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading'
    }
  },
  explore: {
    textAlign: ['center'],
    mb: [6]
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%']
    }
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0
    },
    img: {
      mr: '16px'
    }
  }
};

/***/ }),

/***/ "./src/sections/ultimate-features.js":
/*!*******************************************!*\
  !*** ./src/sections/ultimate-features.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/ultimate-feature */ "./src/components/cards/ultimate-feature.js");
/* harmony import */ var assets_images_icons_bulb_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/bulb.png */ "./src/assets/images/icons/bulb.png");
/* harmony import */ var assets_images_icons_bulb_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_bulb_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icons/dart.png */ "./src/assets/images/icons/dart.png");
/* harmony import */ var assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_icons_rocket_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/rocket.png */ "./src/assets/images/icons/rocket.png");
/* harmony import */ var assets_images_icons_rocket_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_rocket_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_icons_trophy_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/icons/trophy.png */ "./src/assets/images/icons/trophy.png");
/* harmony import */ var assets_images_icons_trophy_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_trophy_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\ultimate-features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */







const data = [{
  id: 1,
  icon: assets_images_icons_rocket_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Learn with Confidence',
  description: 'At our institution, we understand the importance of our students" reputations, which is why we"ve collaborated with certified industry professionals to review and certify all of our online courses and training.'
}, {
  id: 2,
  icon: assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Our Mission',
  description: 'Our mission is to equip Africans with the latest real-time standards and support them in reaching their full potential.'
}, {
  id: 3,
  icon: assets_images_icons_bulb_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Our Vision',
  description: 'We aspire to create the most extensive compilation of digital platform, resources and opportunities available, with the aim of benefiting the digital industry in Nigeria and across Africa.'
}, {
  id: 4,
  icon: assets_images_icons_trophy_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Award history',
  description: `Lorem`
}];
const UltimateFeatures = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "ultimate-feature",
    variant: "section.ultimateFeature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: "Our Community",
    description: "The tech industry is currently one of the most rapidly expanding sectors globally, and its dynamic and ever-changing landscape attracts a plethora of individuals seeking to enter this field.\nFredmind Digital School is an education platform focused on imparting high-demand skills and driven by a strong set of values. Its mission is to empower African millennials to overcome poverty, achieve career success, and live their dream lives. ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.features,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (UltimateFeatures);
const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80]
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']
  }
};

/***/ }),

/***/ "./src/sections/useful-features.js":
/*!*****************************************!*\
  !*** ./src/sections/useful-features.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/ultimate-feature */ "./src/components/cards/ultimate-feature.js");
/* harmony import */ var assets_images_icons_bulb_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/bulb-2.png */ "./src/assets/images/icons/bulb-2.png");
/* harmony import */ var assets_images_icons_bulb_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_bulb_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_icons_diamond_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icons/diamond.png */ "./src/assets/images/icons/diamond.png");
/* harmony import */ var assets_images_icons_diamond_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_diamond_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/help.png */ "./src/assets/images/icons/help.png");
/* harmony import */ var assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_icons_award_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/icons/award.png */ "./src/assets/images/icons/award.png");
/* harmony import */ var assets_images_icons_award_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_award_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\useful-features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */







const data = [{
  id: 1,
  icon: assets_images_icons_bulb_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Updated Curriculum ',
  description: `Our modules are well-structured with up-to-date information, and relevant course content to align with your learning goals.`
}, {
  id: 2,
  icon: assets_images_icons_diamond_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Stellar User Experience ',
  description: `The functionality of our learning platform helps you learn from anywhere. We offer a virtual-first, self paced program that runs in cohorts.`
}, {
  id: 3,
  icon: assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Expert Tutors',
  description: `Our instructors/facilitators are seasoned industry leaders with relevant industry experience, academic credentials, and a strong track record in teaching the subject matter.`
}, {
  id: 4,
  icon: assets_images_icons_award_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Progress Tracking',
  description: `Our course helps you assess your progress and provides you with real-time feedback through quizzes, assignments, or projects to gauge your understanding.`
}, {
  id: 5,
  icon: assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Support & Community',
  description: `You get to connect with fellow learners through discussion forums, group projects, networking events to foster collaboration.`
}];
const UsefulFeatures = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "useful-features",
    variant: "section.usefulFeatures",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: "Unlock your potential, Learn with Us",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.features,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    data: item,
    className: "feature-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (UsefulFeatures);
const styles = {
  heading: {
    marginBottom: 80
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 30px', '0 26px 0 0']
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/widgets.js":
/*!*********************************!*\
  !*** ./src/sections/widgets.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_widgets_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/widgets.png */ "./src/assets/images/widgets.png");
/* harmony import */ var assets_images_widgets_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_widgets_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/check-circle-filled.png */ "./src/assets/images/icons/check-circle-filled.png");
/* harmony import */ var assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\widgets.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */






const Widgets = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "widgets",
    variant: "section.widgets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.leftContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_widgets_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "widgets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.rightContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: "Work with Us!",
    description: "Want to shape the future of work with us?.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.listItem,
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "check icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }), "Hire our grads"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.listItem,
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "check icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }), "Train your in-house team"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.listItem,
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 14
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "check icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), "Sponsor an aspiring techie"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.explore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["LearnMore"], {
    path: "#!",
    label: "Let\u2019s Work",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Widgets);
const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center'
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px'
    }
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px'
    }
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px']
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    textSecondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    headingSecondary: '#343D48',
    // heading color
    background: '#FFFFFF',
    // body background color
    backgroundSecondary: '#F9FBFD',
    // secondary background color
    borderColor: '#F3F4F5',
    // border color
    primary: '#28DDB2',
    // primary button and link color
    secondary: '#EF9E48',
    // secondary color - can be used for hover states
    muted: '#7B8188',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    dark: '#10132D',
    link: '#4F96FF',
    // default link color

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 'normal',
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25
    // heading: 1.125,
  },

  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 4, 8, 12, 16, 32, 48, 64, 96, 128],
  sizes: {},
  breakpoints: ['480px', '640px', '768px', '1024px', '1200px', '1367px', '1440px'],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, null, '970px', '1140px', '1260px'],
      paddingLeft: [20, 30],
      paddingRight: [20, 30],
      m: '0 auto'
    },
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      padding: '20px 0',
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'text'
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center'
      // justifyContent: 'space-between',
    },

    main: {},
    footer: {
      backgroundColor: '#F9FAFC',
      pt: 6
    }
  },
  section: {
    banner: {},
    ultimateFeature: {
      pt: [0, 7, 7, 8, 8, 7, 7],
      pb: [7, 7, 7, 8, 9, 130, 150]
    },
    features: {
      backgroundColor: 'backgroundSecondary',
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 8]
    },
    introVideo: {
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 8]
    },
    usefulFeatures: {
      backgroundColor: 'backgroundSecondary',
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 150]
    },
    widgets: {
      backgroundColor: '#FFF7F5',
      pt: [7, 7, 7, 7, 8],
      pb: [7, 7, 7, 7, 6, 8]
    },
    pricing: {
      pt: [7, 7, 7, 7, 8],
      pb: [6, 6, 6, 8]
    },
    faq: {
      pt: [6, 6, 6, 8],
      pb: [7, 7, 7, 7, 150]
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    heroTitle: {
      fontSize: [4, null, null, 5, null, 5, 6],
      fontWeight: 700,
      letterSpacing: 'heading',
      lineHeight: [1.4, null, null, null, null, null, 1.57]
    }
  },
  links: {
    bold: {
      fontWeight: 'bold'
    },
    logo: {
      display: 'inline-flex',
      alignItems: 'flex-start'
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary'
    },
    nav: {
      display: ['none', null, 'inline-flex'],
      p: 2
      // transitionProperty: 'background-color',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: '.2s',
      // borderRadius: 2,
      // '&:hover': {
      //   bg: 'highlight',
      // },
      // '&.active': {
      //   color: 'primary',
      //   bg: 'highlight',
      // },
    },

    footer: {
      display: 'flex',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '14px',
      lineHeight: 2.5
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: ['block', null, null, null, 'none'],
      svg: {
        width: '32px'
      }
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.3s ease-in-out 0s',
      whiteSpace: 'nowrap'
    },
    primary: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      minHeight: ['50px', '50px', '50px', '50px', '50px'],
      padding: ['0 25px', '0 25px', '0 25px', '0 30px'],
      '&:hover': {
        bg: 'dark'
      }
    },
    primaryMd: {
      variant: 'buttons.primary',
      minHeight: '50px',
      px: '25px'
    },
    secondary: {
      cursor: 'pointer',
      fontFamily: 'body',
      color: 'text',
      bg: 'secondary',
      transition: '0.3s ease-in-out 0s'
    },
    muted: {
      variant: 'buttons.default',
      backgroundColor: '#EDF0F2',
      color: 'text',
      ':hover': {
        backgroundColor: 'primary',
        color: '#fff'
      }
    },
    white: {
      variant: 'buttons.default',
      backgroundColor: 'white',
      color: '#020718'
    },
    text: {
      variant: 'buttons.default',
      color: 'text'
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },

    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3]
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'borderColor',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    // h1-h6 Heading styles
    h1: {
      variant: 'text.heading',
      fontSize: 6
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "react-icons/hi":
/*!*********************************!*\
  !*** external "react-icons/hi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2F3YXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9idWxiLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1bGIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS1maWxsZWQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2RhcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2RpYW1vbmQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2hlbHAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3BsYXkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3JvY2tldC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdHJvcGh5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy92aWRlby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvd2lkZ2V0cy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3VsdGltYXRlLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jlc3BvbnNpdmUtaWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ludHJvLXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy91bHRpbWF0ZS1mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdXNlZnVsLWZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93aWRnZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImhhc0Jhc2VQYXRoIiwic3RhcnRzV2l0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJzZWFyY2hQYXJhbXMiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInJlc29sdmVkQXMiLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJqb2luIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGFyc2VkSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJpbmNsdWRlcyIsInNvbWUiLCJyZSIsInRlc3QiLCJQcm9taXNlIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJkZWNvZGVQYXJhbSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyYW1zIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInByZXBhcmVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsImVuY29kZVVSSSIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInVybFF1ZXJ5IiwicmVzdWx0IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJvcHRpb25hbCIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkFjY29yZGlvbiIsIl9yZWYiLCJpdGVtcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9fanN4IiwiQmFzZUFjY29yZGlvbiIsIl9leHRlbmRzIiwic3RhdGVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIkZyYWdtZW50IiwiaW5kZXgiLCJBY2NvcmRpb25JdGVtIiwidGl0bGUiLCJpc09wZW4iLCJBY2NvcmRpb25CdXR0b24iLCJjbGFzc05hbWUiLCJBY2NvcmRpb25Db250ZW50cyIsImNvbnRlbnRzIiwiX2RlZmluZVByb3BlcnR5IiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJsb2ciLCJnZXRTdGF0ZSIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJyZXN0IiwianN4Iiwic3giLCJzdHlsZXMiLCJidXR0b25Ub2dnbGUiLCJkaXNwbGF5IiwiY29sb3IiLCJjdXJzb3IiLCJib3JkZXIiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwicG9zaXRpb24iLCJwYWRkaW5nTGVmdCIsImxpbmVIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRvcCIsImxlZnQiLCJvcGFjaXR5IiwiY29udGVudCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ2YXJpYW50cyIsIm9wZW4iLCJtYXJnaW5Ub3AiLCJjbG9zZWQiLCJfcmVmMiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsIl9yZWYzIiwiY3NzIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwiX29iamVjdFNwcmVhZCIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkZlYXR1cmUiLCJmZWF0dXJlIiwiQm94IiwiZmVhdHVyZUl0ZW0iLCJUZXh0Iiwic3R5bGUiLCJib3hTaGFkb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwibWluSGVpZ2h0IiwibXQiLCJyZ2JhIiwiVWx0aW1hdGVGZWF0dXJlIiwiSW1hZ2UiLCJzcmMiLCJpY29uIiwiYWx0IiwiSGVhZGluZyIsImRlc2NyaXB0aW9uIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJmaWd1cmUiLCJoNCIsIm1hcmdpbkJvdHRvbSIsIkZvb3RlcldpZGdldCIsImZvb3RlcldpZGdldCIsImxhYmVsIiwidmFyaWFudCIsInVsIiwibGlzdFN0eWxlIiwiYSIsIm1lbnVJdGVtcyIsImlkIiwiZm9vdGVyTmF2IiwiRm9vdGVyIiwiQ29udGFpbmVyIiwiZm9vdGVyVG9wSW5uZXIiLCJmb290ZXJJbm5lciIsImNvcHlyaWdodCIsIkxvZ28iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnYXAiLCJtYiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJib3JkZXJUb3AiLCJwYiIsInNwYW4iLCJmbGV4V3JhcCIsIm1sIiwiSGVhZGVyIiwibW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJvcGVuTW9iaWxlTWVudSIsImNsb3NlTW9iaWxlTWVudSIsImhlYWRlcldyYXBwZXIiLCJTdGlja3kiLCJlbmFibGVkIiwiYWN0aXZlQ2xhc3MiLCJpbm5lcloiLCJoZWFkZXJJbm5lciIsImlzV2hpdGUiLCJGbGV4IiwibmF2YmFyIiwibmF2TGlzdCIsIk5hdkxpbmsiLCJCdXR0b24iLCJleHBsb3JlIiwiY2xvc2VCdXR0b24iLCJHckNsb3NlIiwic2l6ZSIsIk1lbnVCdXR0b24iLCJoZWFkZXIiLCJweSIsInZpc2liaWxpdHkiLCJmbGV4R3JvdyIsIm1hcmdpbkxlZnQiLCJib3R0b20iLCJzdHJva2UiLCJJbWciLCJMYXlvdXQiLCJNZW51TGluayIsInRvIiwic3B5Iiwib2Zmc2V0Iiwic21vb3RoIiwiZHVyYXRpb24iLCJOZXh0TGluayIsIkEiLCJMZWFybk1vcmUiLCJsZWFybk1vcmUiLCJIaU91dGxpbmVDaGV2cm9uUmlnaHQiLCJzdmciLCJsb2dvV2hpdGUiLCJsb2dvIiwiY3VzdG9tU3R5bGVzIiwib3ZlcmxheSIsInpJbmRleCIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJNb2RhbCIsImNsb3NlTW9kYWwiLCJSZWFjdE1vZGFsIiwiYXJpYUhpZGVBcHAiLCJjbG9zZVRpbWVvdXRNUyIsIm9uUmVxdWVzdENsb3NlIiwiQ2xvc2VCdXR0b24iLCJidXR0b24iLCJSZXNwb25zaXZlSWZyYW1lIiwidmlkZW9Db250YWluZXIiLCJwYWRkaW5nVG9wIiwiaWZyYW1lIiwiU2VjdGlvbkhlYWRpbmciLCJoZWFkaW5nIiwiU0VPIiwiYXV0aG9yIiwibWV0YSIsIm1ldGFEYXRhIiwiY29uY2F0IiwiSGVhZCIsImRlZmF1bHRQcm9wcyIsImxhbmciLCJJbmRleFBhZ2UiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJCYW5uZXIiLCJVbHRpbWF0ZUZlYXR1cmVzIiwiRmVhdHVyZXMiLCJJbnRyb1ZpZGVvIiwiVXNlZnVsRmVhdHVyZXMiLCJXaWRnZXRzIiwiRmFxIiwiY29udGVudFdyYXBwZXIiLCJ0ZXh0IiwiaWxsdXN0cmF0aW9uIiwiYmFubmVyIiwicHQiLCJjbGllbnRzIiwiaW1nIiwiZmFxcyIsIlNlY3Rpb25IZWFkZXIiLCJteCIsIm15IiwibGVmdENvbnRlbnQiLCJyaWdodENvbnRlbnQiLCJoMiIsImJyIiwibGlzdEl0ZW0iLCJtciIsInNldElzT3BlbiIsInNlY3Rpb24iLCJ2aWRlb1dyYXBwZXIiLCJhbGxvdyIsImFsbG93RnVsbFNjcmVlbiIsInZpZGVvQmFubmVyIiwicGxheVBhdXNlIiwiUGxheSIsIm91dGxpbmUiLCJyb2NrZXQiLCJkYXJ0IiwiYnVsYiIsInRyb3BoeSIsImZlYXR1cmVzIiwiZGlhbW9uZCIsImhlbHAiLCJhd2FyZCIsInB4IiwibWluV2lkdGgiLCJjaGVja0ZpbGxlZENpcmNsZSIsImNvbG9ycyIsInRleHRTZWNvbmRhcnkiLCJoZWFkaW5nU2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTZWNvbmRhcnkiLCJib3JkZXJDb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsImRhcmsiLCJsaW5rIiwibW9kZXMiLCJmb250cyIsIm1vbm9zcGFjZSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJzaXplcyIsImJyZWFrcG9pbnRzIiwibGF5b3V0IiwiY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwidG9vbGJhciIsIm1haW4iLCJmb290ZXIiLCJ1bHRpbWF0ZUZlYXR1cmUiLCJpbnRyb1ZpZGVvIiwidXNlZnVsRmVhdHVyZXMiLCJ3aWRnZXRzIiwicHJpY2luZyIsImZhcSIsImZvbnRGYW1pbHkiLCJoZXJvVGl0bGUiLCJsaW5rcyIsInRleHREZWNvcmF0aW9uIiwibmF2IiwiaW1hZ2VzIiwiYXZhdGFyIiwiYnV0dG9ucyIsIm1lbnUiLCJkZWZhdWx0Iiwid2hpdGVTcGFjZSIsImJnIiwicHJpbWFyeU1kIiwid2hpdGUiLCJjYXJkcyIsIm9mZmVyIiwiZmxleCIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJpbnB1dCIsInQiLCJiYWRnZXMiLCJyb290IiwiaDEiLCJoMyIsImg1IiwiaDYiLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQU9BO0FBc0JBLElBQUlBLGNBQUo7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsR0FBSixFQUFsQjtBQUNBLE1BQU1DLG9CQUFvQixHQUN4QixRQUFnQ0MsU0FBaEMsR0FBOEQsSUFEaEU7QUFFQSxNQUFNQyxVQUEyQyxHQUFHLEVBQXBEO0FBRUEsU0FBU0MsV0FBVCxHQUF5RDtFQUN2RDtFQUNBLElBQUlOLGNBQUosRUFBb0I7SUFDbEIsT0FBT0EsY0FBUDtFQUNELENBRUQ7RUFDQSxJQUFJLENBQUNHLG9CQUFMLEVBQTJCO0lBQ3pCLE9BQU9JLFNBQVA7RUFDRDtFQUVELE9BQVFQLGNBQWMsR0FBRyxJQUFJRyxvQkFBSixDQUN0QkssT0FBRCxJQUFhO0lBQ1hBLE9BQU8sQ0FBQ0MsT0FBUkQsQ0FBaUJFLEtBQUQsSUFBVztNQUN6QixJQUFJLENBQUNULFNBQVMsQ0FBQ1UsR0FBVlYsQ0FBY1MsS0FBSyxDQUFDRSxNQUFwQlgsQ0FBTCxFQUFrQztRQUNoQztNQUNEO01BRUQsTUFBTVksRUFBRSxHQUFHWixTQUFTLENBQUNhLEdBQVZiLENBQWNTLEtBQUssQ0FBQ0UsTUFBcEJYLENBQVg7TUFDQSxJQUFJUyxLQUFLLENBQUNLLGNBQU5MLElBQXdCQSxLQUFLLENBQUNNLGlCQUFOTixHQUEwQixDQUF0RCxFQUF5RDtRQUN2RFYsY0FBYyxDQUFDaUIsU0FBZmpCLENBQXlCVSxLQUFLLENBQUNFLE1BQS9CWjtRQUNBQyxTQUFTLENBQUNpQixNQUFWakIsQ0FBaUJTLEtBQUssQ0FBQ0UsTUFBdkJYO1FBQ0FZLEVBQUU7TUFDSDtJQUNGLENBWERMO0VBWUQsQ0Fkc0IsRUFldkI7SUFBRVcsVUFBVSxFQUFFO0VBQWQsQ0FmdUIsQ0FBekI7QUFpQkQ7QUFFRCxNQUFNQyxxQkFBcUIsR0FBRyxDQUFDQyxFQUFELEVBQWNSLEVBQWQsS0FBaUM7RUFDN0QsTUFBTVMsUUFBUSxHQUFHaEIsV0FBVyxFQUE1QjtFQUNBLElBQUksQ0FBQ2dCLFFBQUwsRUFBZTtJQUNiLE9BQU8sTUFBTSxDQUFFLENBQWY7RUFDRDtFQUVEQSxRQUFRLENBQUNDLE9BQVRELENBQWlCRCxFQUFqQkM7RUFDQXJCLFNBQVMsQ0FBQ3VCLEdBQVZ2QixDQUFjb0IsRUFBZHBCLEVBQWtCWSxFQUFsQlo7RUFDQSxPQUFPLE1BQU07SUFDWCxJQUFJO01BQ0ZxQixRQUFRLENBQUNMLFNBQVRLLENBQW1CRCxFQUFuQkM7SUFDRCxDQUFDLFFBQU9HLEdBQVAsRUFBWTtNQUNaQyxPQUFPLENBQUNDLEtBQVJELENBQWNELEdBQWRDO0lBQ0Q7SUFDRHpCLFNBQVMsQ0FBQ2lCLE1BQVZqQixDQUFpQm9CLEVBQWpCcEI7RUFDRCxDQVBEO0FBUUQsQ0FoQkQ7QUFrQkEsU0FBUzJCLFFBQVQsQ0FDRUMsTUFERixFQUVFQyxJQUZGLEVBR0VDLEVBSEYsRUFJRUMsT0FKRixFQUtRO0VBQ04sVUFBbUM7RUFDbkMsSUFBSSxDQUFDLHdCQUFXRixJQUFYLENBQUwsRUFBdUIsT0FDdkI7RUFDQTtFQUNBO0VBQ0E7RUFDQUQsTUFBTSxDQUFDRCxRQUFQQyxDQUFnQkMsSUFBaEJELEVBQXNCRSxFQUF0QkYsRUFBMEJHLE9BQTFCSCxFQUFtQ0ksS0FBbkNKLENBQTBDSixHQUFELElBQVM7SUFDaEQsVUFBMkM7TUFDekM7TUFDQSxNQUFNQSxHQUFOO0lBQ0Q7RUFDRixDQUxESSxFQU1BO0VBQ0F4QixVQUFVLENBQUN5QixJQUFJLEdBQUcsR0FBUEEsR0FBYUMsRUFBZCxDQUFWMUIsR0FBOEIsSUFBOUJBO0FBQ0Q7QUFFRCxTQUFTNkIsZUFBVCxDQUF5QkMsS0FBekIsRUFBa0Q7RUFDaEQsTUFBTTtJQUFFdkI7RUFBRixJQUFhdUIsS0FBSyxDQUFDQyxhQUF6QjtFQUNBLE9BQ0d4QixNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUF0QixJQUNBdUIsS0FBSyxDQUFDRSxPQUROLElBRUFGLEtBQUssQ0FBQ0csT0FGTixJQUdBSCxLQUFLLENBQUNJLFFBSE4sSUFJQUosS0FBSyxDQUFDSyxNQUpOO0VBSWdCO0VBQ2ZMLEtBQUssQ0FBQ00sV0FBTk4sSUFBcUJBLEtBQUssQ0FBQ00sV0FBTk4sQ0FBa0JPLEtBQWxCUCxLQUE0QixDQU5wRDtBQVFEO0FBRUQsU0FBU1EsV0FBVCxDQUNFQyxDQURGLEVBRUVmLE1BRkYsRUFHRUMsSUFIRixFQUlFQyxFQUpGLEVBS0VjLE9BTEYsRUFNRUMsT0FORixFQU9FQyxNQVBGLEVBUVE7RUFDTixNQUFNO0lBQUVDO0VBQUYsSUFBZUosQ0FBQyxDQUFDUixhQUF2QjtFQUVBLElBQUlZLFFBQVEsS0FBSyxHQUFiQSxLQUFxQmQsZUFBZSxDQUFDVSxDQUFELENBQWZWLElBQXNCLENBQUMsd0JBQVdKLElBQVgsQ0FBNUNrQixDQUFKLEVBQW1FO0lBQ2pFO0lBQ0E7RUFDRDtFQUVESixDQUFDLENBQUNLLGNBQUZMLEdBRUE7RUFDQSxJQUFJRyxNQUFNLElBQUksSUFBZCxFQUFvQjtJQUNsQkEsTUFBTSxHQUFHaEIsRUFBRSxDQUFDbUIsT0FBSG5CLENBQVcsR0FBWEEsSUFBa0IsQ0FBM0JnQjtFQUNELENBRUQ7RUFDQWxCLE1BQU0sQ0FBQ2dCLE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTmhCLENBQXFDQyxJQUFyQ0QsRUFBMkNFLEVBQTNDRixFQUErQztJQUFFaUI7RUFBRixDQUEvQ2pCLEVBQTREc0IsSUFBNUR0QixDQUNHdUIsT0FBRCxJQUFzQjtJQUNwQixJQUFJLENBQUNBLE9BQUwsRUFBYztJQUNkLElBQUlMLE1BQUosRUFBWTtNQUNWM0MsTUFBTSxDQUFDaUQsUUFBUGpELENBQWdCLENBQWhCQSxFQUFtQixDQUFuQkE7TUFDQWtELFFBQVEsQ0FBQ0MsSUFBVEQsQ0FBY0UsS0FBZEY7SUFDRDtFQUNGLENBUEh6QjtBQVNEO0FBRUQsU0FBUzRCLElBQVQsQ0FBY0MsS0FBZCxFQUF5RDtFQUN2RCxVQUEyQztJQUN6QyxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUlHO01BQ0QsT0FBTyxJQUFJQyxLQUFKLENBQ0osZ0NBQStCRCxJQUFJLENBQUNFLEdBQUksZ0JBQWVGLElBQUksQ0FBQ0csUUFBUyw2QkFBNEJILElBQUksQ0FBQ0ksTUFBTyxhQUE5RyxJQUNHLFFBQ0csU0FESCxHQUVHLEVBSE4sQ0FESyxDQUFQO0lBTUQsQ0FFRDtJQUNBLE1BQU1DLGtCQUFtRCxHQUFHO01BQzFEbkMsSUFBSSxFQUFFO0lBRG9ELENBQTVEO0lBR0EsTUFBTW9DLGFBQWtDLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FDekNGLGtCQUR5Q0UsQ0FBM0M7SUFHQSxhQUFhLENBQUMxRCxPQUFkLENBQXVCcUQsR0FBRCxJQUE0QjtNQUNoRCxJQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtRQUNsQixJQUNFSixLQUFLLENBQUNJLEdBQUQsQ0FBTEosSUFBYyxJQUFkQSxJQUNDLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBQXRCLElBQWtDLE9BQU9KLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBRjNELEVBR0U7VUFDQSxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsc0JBRlU7WUFHcEJDLE1BQU0sRUFBRU4sS0FBSyxDQUFDSSxHQUFELENBQUxKLEtBQWUsSUFBZkEsR0FBc0IsTUFBdEJBLEdBQStCLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRDtVQUgvQixDQUFELENBQXJCO1FBS0Q7TUFDRixDQVhELE1BV087UUFDTDtRQUNBO1FBQ0EsTUFBTU8sQ0FBUSxHQUFHUCxHQUFqQjtNQUNEO0lBQ0YsQ0FqQkQsRUFtQkE7SUFDQSxNQUFNUSxrQkFBbUQsR0FBRztNQUMxRHZDLEVBQUUsRUFBRSxJQURzRDtNQUUxRGMsT0FBTyxFQUFFLElBRmlEO01BRzFERSxNQUFNLEVBQUUsSUFIa0Q7TUFJMURELE9BQU8sRUFBRSxJQUppRDtNQUsxRHlCLFFBQVEsRUFBRSxJQUxnRDtNQU0xRDNDLFFBQVEsRUFBRTtJQU5nRCxDQUE1RDtJQVFBLE1BQU00QyxhQUFrQyxHQUFHTCxNQUFNLENBQUNDLElBQVBELENBQ3pDRyxrQkFEeUNILENBQTNDO0lBR0EsYUFBYSxDQUFDMUQsT0FBZCxDQUF1QnFELEdBQUQsSUFBNEI7TUFDaEQsSUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7UUFDaEIsSUFDRUosS0FBSyxDQUFDSSxHQUFELENBQUxKLElBQ0EsT0FBT0EsS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFEdEJKLElBRUEsT0FBT0EsS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFIeEIsRUFJRTtVQUNBLE1BQU1ILGVBQWUsQ0FBQztZQUNwQkcsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxzQkFGVTtZQUdwQkMsTUFBTSxFQUFFLE9BQU9OLEtBQUssQ0FBQ0ksR0FBRDtVQUhBLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBWkQsTUFZTyxJQUNMQSxHQUFHLEtBQUssU0FBUkEsSUFDQUEsR0FBRyxLQUFLLFFBRFJBLElBRUFBLEdBQUcsS0FBSyxTQUZSQSxJQUdBQSxHQUFHLEtBQUssVUFIUkEsSUFJQUEsR0FBRyxLQUFLLFVBTEgsRUFNTDtRQUNBLElBQUlKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMSixJQUFjLElBQWRBLElBQXNCLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFNBQWhELEVBQTJEO1VBQ3pELE1BQU1ILGVBQWUsQ0FBQztZQUNwQkcsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxXQUZVO1lBR3BCQyxNQUFNLEVBQUUsT0FBT04sS0FBSyxDQUFDSSxHQUFEO1VBSEEsQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FkTSxNQWNBO1FBQ0w7UUFDQTtRQUNBLE1BQU1PLENBQVEsR0FBR1AsR0FBakI7TUFDRDtJQUNGLENBaENELEVBa0NBO0lBQ0E7SUFDQSxNQUFNVyxTQUFTLEdBQUdDLGVBQU1DLE1BQU5ELENBQWEsS0FBYkEsQ0FBbEI7SUFDQSxJQUFJaEIsS0FBSyxDQUFDOUIsUUFBTjhCLElBQWtCLENBQUNlLFNBQVMsQ0FBQ0csT0FBakMsRUFBMEM7TUFDeENILFNBQVMsQ0FBQ0csT0FBVkgsR0FBb0IsSUFBcEJBO01BQ0EvQyxPQUFPLENBQUNtRCxJQUFSbkQsQ0FDRSxtS0FERkE7SUFHRDtFQUNGO0VBQ0QsTUFBTW9ELENBQUMsR0FBR3BCLEtBQUssQ0FBQzlCLFFBQU44QixLQUFtQixLQUE3QjtFQUVBLE1BQU0sQ0FBQ3FCLFFBQUQsRUFBV0MsV0FBWCxJQUEwQk4sZUFBTU8sUUFBTlAsRUFBaEM7RUFFQSxNQUFNN0MsTUFBTSxHQUFHLHlCQUFmO0VBQ0EsTUFBTXFELFFBQVEsR0FBSXJELE1BQU0sSUFBSUEsTUFBTSxDQUFDcUQsUUFBbEIsSUFBK0IsR0FBaEQ7RUFFQSxNQUFNO0lBQUVwRCxJQUFGO0lBQVFDO0VBQVIsSUFBZTJDLGVBQU1TLE9BQU5ULENBQWMsTUFBTTtJQUN2QyxNQUFNVSxZQUFZLEdBQUcseUJBQVlGLFFBQVosRUFBc0J4QixLQUFLLENBQUM1QixJQUE1QixDQUFyQjtJQUNBLE9BQU87TUFDTEEsSUFBSSxFQUFFc0QsWUFERDtNQUVMckQsRUFBRSxFQUFFMkIsS0FBSyxDQUFDM0IsRUFBTjJCLEdBQVcseUJBQVl3QixRQUFaLEVBQXNCeEIsS0FBSyxDQUFDM0IsRUFBNUIsQ0FBWDJCLEdBQTZDMEI7SUFGNUMsQ0FBUDtFQUlELENBTm9CVixFQU1sQixDQUFDUSxRQUFELEVBQVd4QixLQUFLLENBQUM1QixJQUFqQixFQUF1QjRCLEtBQUssQ0FBQzNCLEVBQTdCLENBTmtCMkMsQ0FBckI7RUFRQSxlQUFNVyxTQUFOLENBQWdCLE1BQU07SUFDcEIsSUFDRVAsQ0FBQyxJQUNEM0Usb0JBREEyRSxJQUVBQyxRQUZBRCxJQUdBQyxRQUFRLENBQUNPLE9BSFRSLElBSUEsd0JBQVdoRCxJQUFYLENBTEYsRUFNRTtNQUNBO01BQ0EsTUFBTXlELFlBQVksR0FBR2xGLFVBQVUsQ0FBQ3lCLElBQUksR0FBRyxHQUFQQSxHQUFhQyxFQUFkLENBQS9CO01BQ0EsSUFBSSxDQUFDd0QsWUFBTCxFQUFtQjtRQUNqQixPQUFPbkUscUJBQXFCLENBQUMyRCxRQUFELEVBQVcsTUFBTTtVQUMzQ25ELFFBQVEsQ0FBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLEVBQWYsQ0FBUkg7UUFDRCxDQUYyQixDQUE1QjtNQUdEO0lBQ0Y7RUFDRixDQWhCRCxFQWdCRyxDQUFDa0QsQ0FBRCxFQUFJQyxRQUFKLEVBQWNqRCxJQUFkLEVBQW9CQyxFQUFwQixFQUF3QkYsTUFBeEIsQ0FoQkg7RUFrQkEsSUFBSTtJQUFFMkQsUUFBRjtJQUFZM0MsT0FBWjtJQUFxQkMsT0FBckI7SUFBOEJDO0VBQTlCLElBQXlDVyxLQUE3QyxDQUNBO0VBQ0EsSUFBSSxPQUFPOEIsUUFBUCxLQUFvQixRQUF4QixFQUFrQztJQUNoQ0EsUUFBUSxnQkFBRyx3Q0FBSUEsUUFBSixDQUFYQTtFQUNELENBRUQ7RUFDQSxNQUFNQyxLQUFVLEdBQUdDLGdCQUFTQyxJQUFURCxDQUFjRixRQUFkRSxDQUFuQjtFQUNBLE1BQU1FLFVBS0wsR0FBRztJQUNGQyxHQUFHLEVBQUd4RSxFQUFELElBQWE7TUFDaEIsSUFBSUEsRUFBSixFQUFRMkQsV0FBVyxDQUFDM0QsRUFBRCxDQUFYMkQ7TUFFUixJQUFJUyxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQkEsSUFBc0NBLEtBQUssQ0FBQ0ksR0FBaEQsRUFBcUQ7UUFDbkQsSUFBSSxPQUFPSixLQUFLLENBQUNJLEdBQWIsS0FBcUIsVUFBekIsRUFBcUNKLEtBQUssQ0FBQ0ksR0FBTkosQ0FBVXBFLEVBQVZvRSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFDSSxHQUFiLEtBQXFCLFFBQXpCLEVBQW1DO1VBQ3RDSixLQUFLLENBQUNJLEdBQU5KLENBQVViLE9BQVZhLEdBQW9CcEUsRUFBcEJvRTtRQUNEO01BQ0Y7SUFDRixDQVZDO0lBV0ZLLE9BQU8sRUFBR2xELENBQUQsSUFBeUI7TUFDaEMsSUFBSTZDLEtBQUssQ0FBQy9CLEtBQU4rQixJQUFlLE9BQU9BLEtBQUssQ0FBQy9CLEtBQU4rQixDQUFZSyxPQUFuQixLQUErQixVQUFsRCxFQUE4RDtRQUM1REwsS0FBSyxDQUFDL0IsS0FBTitCLENBQVlLLE9BQVpMLENBQW9CN0MsQ0FBcEI2QztNQUNEO01BQ0QsSUFBSSxDQUFDN0MsQ0FBQyxDQUFDbUQsZ0JBQVAsRUFBeUI7UUFDdkJwRCxXQUFXLENBQUNDLENBQUQsRUFBSWYsTUFBSixFQUFZQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQmMsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxDQUFYSjtNQUNEO0lBQ0Y7RUFsQkMsQ0FMSjtFQTBCQSxJQUFJbUMsQ0FBSixFQUFPO0lBQ0xjLFVBQVUsQ0FBQ0ksWUFBWEosR0FBMkJoRCxDQUFELElBQXlCO01BQ2pELElBQUksQ0FBQyx3QkFBV2QsSUFBWCxDQUFMLEVBQXVCO01BQ3ZCLElBQUkyRCxLQUFLLENBQUMvQixLQUFOK0IsSUFBZSxPQUFPQSxLQUFLLENBQUMvQixLQUFOK0IsQ0FBWU8sWUFBbkIsS0FBb0MsVUFBdkQsRUFBbUU7UUFDakVQLEtBQUssQ0FBQy9CLEtBQU4rQixDQUFZTyxZQUFaUCxDQUF5QjdDLENBQXpCNkM7TUFDRDtNQUNEN0QsUUFBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtRQUFFa0UsUUFBUSxFQUFFO01BQVosQ0FBbkIsQ0FBUnJFO0lBQ0QsQ0FORGdFO0VBT0QsQ0FFRDtFQUNBO0VBQ0EsSUFBSWxDLEtBQUssQ0FBQ2EsUUFBTmIsSUFBbUIrQixLQUFLLENBQUNTLElBQU5ULEtBQWUsR0FBZkEsSUFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQUMvQixLQUFsQixDQUE3QyxFQUF3RTtJQUN0RWtDLFVBQVUsQ0FBQzlELElBQVg4RCxHQUFrQix5QkFBWTdELEVBQVosQ0FBbEI2RDtFQUNEO0VBRUQsb0JBQU9sQixlQUFNeUIsWUFBTnpCLENBQW1CZSxLQUFuQmYsRUFBMEJrQixVQUExQmxCLENBQVA7QUFDRDtlQUVjakIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7NENDalZmOzs7QUFHTyxTQUFTMkMsdUJBQVQsQ0FBaUNDLElBQWpDLEVBQXVEO0VBQzVELE9BQU9BLElBQUksQ0FBQ0MsUUFBTEQsQ0FBYyxHQUFkQSxLQUFzQkEsSUFBSSxLQUFLLEdBQS9CQSxHQUFxQ0EsSUFBSSxDQUFDRSxLQUFMRixDQUFXLENBQVhBLEVBQWMsQ0FBQyxDQUFmQSxDQUFyQ0EsR0FBeURBLElBQWhFO0FBQ0QsQ0FFRDs7OztBQUlPLE1BQU1HLDBCQUEwQixHQUFHQyxTQUNyQ0osU0FEcUNJLEdBVXRDTCx1QkFWRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFDQTs7O0FBQ0E7QUFtSEE7eUNBdEhBO0FBbUJBLE1BQU1NLGVBQW9DLEdBQUc7RUFDM0M3RSxNQUFNLEVBQUUsSUFEbUM7RUFDN0I7RUFDZDhFLGNBQWMsRUFBRSxFQUYyQjtFQUczQ0MsS0FBSyxDQUFDL0YsRUFBRCxFQUFpQjtJQUNwQixJQUFJLEtBQUtnQixNQUFULEVBQWlCLE9BQU9oQixFQUFFLEVBQVQ7SUFDakIsV0FBbUMsRUFFbEM7RUFDRjtBQVIwQyxDQUE3QyxDQVdBO0FBQ0EsTUFBTWdHLGlCQUFpQixHQUFHLENBQ3hCLFVBRHdCLEVBRXhCLE9BRndCLEVBR3hCLE9BSHdCLEVBSXhCLFFBSndCLEVBS3hCLFlBTHdCLEVBTXhCLFlBTndCLEVBT3hCLFVBUHdCLENBQTFCO0FBU0EsTUFBTUMsWUFBWSxHQUFHLENBQ25CLGtCQURtQixFQUVuQixxQkFGbUIsRUFHbkIscUJBSG1CLEVBSW5CLGtCQUptQixFQUtuQixpQkFMbUIsRUFNbkIsb0JBTm1CLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDdkIsTUFEdUIsRUFFdkIsU0FGdUIsRUFHdkIsUUFIdUIsRUFJdkIsTUFKdUIsRUFLdkIsVUFMdUIsRUFNdkIsZ0JBTnVCLENBQXpCLENBU0E7QUFDQTVDLE1BQU0sQ0FBQzZDLGNBQVA3QyxDQUFzQnVDLGVBQXRCdkMsRUFBdUMsUUFBdkNBLEVBQWlEO0VBQy9DckQsR0FBRyxHQUFHO0lBQ0osT0FBT21HLGlCQUFPQyxNQUFkO0VBQ0Q7QUFIOEMsQ0FBakQvQztBQU1BMEMsaUJBQWlCLENBQUNwRyxPQUFsQm9HLENBQTJCTSxLQUFELElBQVc7RUFDbkM7RUFDQTtFQUNBO0VBQ0E7RUFDQWhELE1BQU0sQ0FBQzZDLGNBQVA3QyxDQUFzQnVDLGVBQXRCdkMsRUFBdUNnRCxLQUF2Q2hELEVBQThDO0lBQzVDckQsR0FBRyxHQUFHO01BQ0osTUFBTWUsTUFBTSxHQUFHdUYsU0FBUyxFQUF4QjtNQUNBLE9BQU92RixNQUFNLENBQUNzRixLQUFELENBQWI7SUFDRDtFQUoyQyxDQUE5Q2hEO0FBTUQsQ0FYRDBDO0FBYUEsZ0JBQWdCLENBQUNwRyxPQUFqQixDQUEwQjBHLEtBQUQsSUFBVztFQUNsQztFQUNBO0VBQUVULGVBQUQsQ0FBeUJTLEtBQXpCLElBQWtDLENBQUMsR0FBR3ZELElBQUosS0FBb0I7SUFDckQsTUFBTS9CLE1BQU0sR0FBR3VGLFNBQVMsRUFBeEI7SUFDQSxPQUFPdkYsTUFBTSxDQUFDc0YsS0FBRCxDQUFOdEYsQ0FBYyxHQUFHK0IsSUFBakIvQixDQUFQO0VBQ0QsQ0FIQTtBQUlGLENBTkQ7QUFRQWlGLFlBQVksQ0FBQ3JHLE9BQWJxRyxDQUFzQjNFLEtBQUQsSUFBVztFQUM5QnVFLGVBQWUsQ0FBQ0UsS0FBaEJGLENBQXNCLE1BQU07SUFDMUJPLGlCQUFPQyxNQUFQRCxDQUFjSSxFQUFkSixDQUFpQjlFLEtBQWpCOEUsRUFBd0IsQ0FBQyxHQUFHckQsSUFBSixLQUFhO01BQ25DLE1BQU0wRCxVQUFVLEdBQUksS0FBSW5GLEtBQUssQ0FBQ29GLE1BQU5wRixDQUFhLENBQWJBLEVBQWdCcUYsV0FBaEJyRixFQUE4QixHQUFFQSxLQUFLLENBQUNzRixTQUFOdEYsQ0FDdEQsQ0FEc0RBLENBRXRELEVBRkY7TUFHQSxNQUFNdUYsZ0JBQWdCLEdBQUdoQixlQUF6QjtNQUNBLElBQUlnQixnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztRQUNoQyxJQUFJO1VBQ0ZJLGdCQUFnQixDQUFDSixVQUFELENBQWhCSSxDQUE2QixHQUFHOUQsSUFBaEM4RDtRQUNELENBQUMsUUFBT2pHLEdBQVAsRUFBWTtVQUNaQyxPQUFPLENBQUNDLEtBQVJELENBQWUsd0NBQXVDNEYsVUFBVyxFQUFqRTVGO1VBQ0FBLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBZSxHQUFFRCxHQUFHLENBQUNrRyxPQUFRLEtBQUlsRyxHQUFHLENBQUNtRyxLQUFNLEVBQTNDbEc7UUFDRDtNQUNGO0lBQ0YsQ0FiRHVGO0VBY0QsQ0FmRFA7QUFnQkQsQ0FqQkRJO0FBbUJBLFNBQVNNLFNBQVQsR0FBNkI7RUFDM0IsSUFBSSxDQUFDVixlQUFlLENBQUM3RSxNQUFyQixFQUE2QjtJQUMzQixNQUFNOEYsT0FBTyxHQUNYLGdDQUNBLHlFQUZGO0lBR0EsTUFBTSxJQUFJOUQsS0FBSixDQUFVOEQsT0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPakIsZUFBZSxDQUFDN0UsTUFBdkI7QUFDRCxDQUVEO2VBQ2U2RSxlLENBRWY7O0FBR08sU0FBU21CLFNBQVQsR0FBaUM7RUFDdEMsT0FBT25ELGVBQU1vRCxVQUFOcEQsQ0FBaUJxRCw0QkFBakJyRCxDQUFQO0FBQ0QsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDTyxNQUFNc0QsWUFBWSxHQUFHLENBQUMsR0FBR3BFLElBQUosS0FBaUM7RUFDM0Q4QyxlQUFlLENBQUM3RSxNQUFoQjZFLEdBQXlCLElBQUlPLGdCQUFKLENBQVcsR0FBR3JELElBQWQsQ0FBekI4QztFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxDQUErQmpHLE9BQS9CaUcsQ0FBd0M3RixFQUFELElBQVFBLEVBQUUsRUFBakQ2RjtFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxHQUFpQyxFQUFqQ0E7RUFFQSxPQUFPQSxlQUFlLENBQUM3RSxNQUF2QjtBQUNELENBTk0sQ0FRUDs7QUFDTyxTQUFTb0csd0JBQVQsQ0FBa0NwRyxNQUFsQyxFQUE4RDtFQUNuRSxNQUFNcUcsT0FBTyxHQUFHckcsTUFBaEI7RUFDQSxNQUFNc0csUUFBUSxHQUFHLEVBQWpCO0VBRUEsS0FBSyxNQUFNQyxRQUFYLElBQXVCdkIsaUJBQXZCLEVBQTBDO0lBQ3hDLElBQUksT0FBT3FCLE9BQU8sQ0FBQ0UsUUFBRCxDQUFkLEtBQTZCLFFBQWpDLEVBQTJDO01BQ3pDRCxRQUFRLENBQUNDLFFBQUQsQ0FBUkQsR0FBcUJoRSxNQUFNLENBQUNrRSxNQUFQbEUsQ0FBYyxFQUFkQSxFQUFrQitELE9BQU8sQ0FBQ0UsUUFBRCxDQUF6QmpFLENBQXJCZ0UsQ0FBMEQ7TUFDMUQ7SUFDRDtJQUVEQSxRQUFRLENBQUNDLFFBQUQsQ0FBUkQsR0FBcUJELE9BQU8sQ0FBQ0UsUUFBRCxDQUE1QkQ7RUFDRCxDQUVEO0VBQ0FBLFFBQVEsQ0FBQ2pCLE1BQVRpQixHQUFrQmxCLGlCQUFPQyxNQUF6QmlCO0VBRUFwQixnQkFBZ0IsQ0FBQ3RHLE9BQWpCc0csQ0FBMEJJLEtBQUQsSUFBVztJQUNsQ2dCLFFBQVEsQ0FBQ2hCLEtBQUQsQ0FBUmdCLEdBQWtCLENBQUMsR0FBR3ZFLElBQUosS0FBb0I7TUFDcEMsT0FBT3NFLE9BQU8sQ0FBQ2YsS0FBRCxDQUFQZSxDQUFlLEdBQUd0RSxJQUFsQnNFLENBQVA7SUFDRCxDQUZEQztFQUdELENBSkRwQjtFQU1BLE9BQU9vQixRQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS0Q7QUFFQTtBQVdlLFNBQVNHLFVBQVQsQ0FJYkMsaUJBSmEsRUFLK0I7RUFDNUMsU0FBU0MsaUJBQVQsQ0FBMkI5RSxLQUEzQixFQUF1QztJQUNyQyxvQkFBTyw2QkFBQyxpQkFBRDtNQUFtQixNQUFNLEVBQUU7SUFBM0IsR0FBNENBLEtBQTVDLEVBQVA7RUFDRDtFQUVELGlCQUFpQixDQUFDK0UsZUFBbEIsR0FBb0NGLGlCQUFpQixDQUFDRSxlQUN0RDtFQUFBO0VBQ0VELGlCQUFELENBQTJCRSxtQkFBM0IsR0FBa0RILGlCQUFELENBQTJCRyxtQkFBNUU7RUFDRCxVQUEyQztJQUN6QyxNQUFNQyxJQUFJLEdBQ1JKLGlCQUFpQixDQUFDSyxXQUFsQkwsSUFBaUNBLGlCQUFpQixDQUFDSSxJQUFuREosSUFBMkQsU0FEN0Q7SUFFQUMsaUJBQWlCLENBQUNJLFdBQWxCSixHQUFpQyxjQUFhRyxJQUFLLEdBQW5ESDtFQUNEO0VBRUQsT0FBT0EsaUJBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQWlELEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msd09BQXdPLFVBQVUsRUFBRTtBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozt1QkNyWkE7Ozs7OzswQkFBQSxDQVlBO0FBQ0E7QUFDQTtBQVVlLFNBQVNLLElBQVQsR0FBNkI7RUFDMUMsTUFBTUMsR0FBK0IsR0FBRzNFLE1BQU0sQ0FBQzRFLE1BQVA1RSxDQUFjLElBQWRBLENBQXhDO0VBRUEsT0FBTztJQUNMa0QsRUFBRSxDQUFDbkIsSUFBRCxFQUFlOEMsT0FBZixFQUFpQztNQUNqQztNQUFDLENBQUNGLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLEtBQWNBLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLEdBQVksRUFBMUJBLENBQUQsRUFBZ0NHLElBQWhDLENBQXFDRCxPQUFyQztJQUNGLENBSEk7SUFLTEUsR0FBRyxDQUFDaEQsSUFBRCxFQUFlOEMsT0FBZixFQUFpQztNQUNsQyxJQUFJRixHQUFHLENBQUM1QyxJQUFELENBQVAsRUFBZTtRQUNiNEMsR0FBRyxDQUFDNUMsSUFBRCxDQUFINEMsQ0FBVUssTUFBVkwsQ0FBaUJBLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLENBQVU1RixPQUFWNEYsQ0FBa0JFLE9BQWxCRixNQUErQixDQUFoREEsRUFBbUQsQ0FBbkRBO01BQ0Q7SUFDRixDQVRJO0lBV0xNLElBQUksQ0FBQ2xELElBQUQsRUFBZSxHQUFHbUQsSUFBbEIsRUFBK0I7TUFDakM7TUFDQTtNQUFDLENBQUNQLEdBQUcsQ0FBQzVDLElBQUQsQ0FBSDRDLElBQWEsRUFBZCxFQUFrQnZDLEtBQWxCLEdBQTBCK0MsR0FBMUIsQ0FBK0JOLE9BQUQsSUFBc0I7UUFDbkRBLE9BQU8sQ0FBQyxHQUFHSyxJQUFKLENBQVBMO01BQ0QsQ0FGQTtJQUdGO0VBaEJJLENBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtBQUtBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Q0ExQkEsNEJBQ0E7QUF1Q0EsTUFBTU8sUUFBUSxHQUFJOUMsTUFBRCxJQUFrRCxFQUFuRTtBQUVBLFNBQVMrQyxzQkFBVCxHQUFrQztFQUNoQyxPQUFPckYsTUFBTSxDQUFDa0UsTUFBUGxFLENBQWMsSUFBSU4sS0FBSixDQUFVLGlCQUFWLENBQWRNLEVBQTRDO0lBQ2pEc0YsU0FBUyxFQUFFO0VBRHNDLENBQTVDdEYsQ0FBUDtBQUdEO0FBRU0sU0FBU3VGLFdBQVQsQ0FBcUJyRCxJQUFyQixFQUE0QztFQUNqRCxPQUFPQSxJQUFJLEtBQUtrRCxRQUFUbEQsSUFBcUJBLElBQUksQ0FBQ3NELFVBQUx0RCxDQUFnQmtELFFBQVEsR0FBRyxHQUEzQmxELENBQTVCO0FBQ0Q7QUFFTSxTQUFTdUQsV0FBVCxDQUFxQnZELElBQXJCLEVBQTJDO0VBQ2hEO0VBQ0EsT0FBT2tELFFBQVEsSUFBSWxELElBQUksQ0FBQ3NELFVBQUx0RCxDQUFnQixHQUFoQkEsQ0FBWmtELEdBQ0hsRCxJQUFJLEtBQUssR0FBVEEsR0FDRSx3REFBMkJrRCxRQUEzQixDQURGbEQsR0FFRWtELFFBQVEsR0FBR2xELElBSFZrRCxHQUlIbEQsSUFKSjtBQUtEO0FBRU0sU0FBU3dELFdBQVQsQ0FBcUJ4RCxJQUFyQixFQUEyQztFQUNoRCxPQUFPQSxJQUFJLENBQUNFLEtBQUxGLENBQVdrRCxRQUFRLENBQUNPLE1BQXBCekQsS0FBK0IsR0FBdEM7QUFDRCxDQUVEOzs7QUFHTyxTQUFTMEQsVUFBVCxDQUFvQkMsR0FBcEIsRUFBMEM7RUFDL0MsSUFBSUEsR0FBRyxDQUFDTCxVQUFKSyxDQUFlLEdBQWZBLENBQUosRUFBeUIsT0FBTyxJQUFQO0VBQ3pCLElBQUk7SUFDRjtJQUNBLE1BQU1DLGNBQWMsR0FBRywrQkFBdkI7SUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsR0FBSixDQUFRSCxHQUFSLEVBQWFDLGNBQWIsQ0FBakI7SUFDQSxPQUFPQyxRQUFRLENBQUNFLE1BQVRGLEtBQW9CRCxjQUFwQkMsSUFBc0NSLFdBQVcsQ0FBQ1EsUUFBUSxDQUFDaEYsUUFBVixDQUF4RDtFQUNELENBQUMsUUFBT2IsQ0FBUCxFQUFVO0lBQ1YsT0FBTyxLQUFQO0VBQ0Q7QUFDRixDQUlEOzs7O0FBSU8sU0FBU2dHLFdBQVQsQ0FBcUJDLFdBQXJCLEVBQTBDeEksSUFBMUMsRUFBNkQ7RUFDbEU7RUFDQSxNQUFNeUksSUFBSSxHQUFHLElBQUlKLEdBQUosQ0FBUUcsV0FBUixFQUFxQixVQUFyQixDQUFiO0VBQ0EsTUFBTUUsV0FBVyxHQUNmLE9BQU8xSSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxpQ0FBcUJBLElBQXJCLENBRHBDO0VBRUEsSUFBSTtJQUNGLE1BQU0ySSxRQUFRLEdBQUcsSUFBSU4sR0FBSixDQUFRSyxXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtJQUNBRSxRQUFRLENBQUN2RixRQUFUdUYsR0FBb0Isd0RBQTJCQSxRQUFRLENBQUN2RixRQUFwQyxDQUFwQnVGLENBQ0E7SUFDQSxPQUFPQSxRQUFRLENBQUNMLE1BQVRLLEtBQW9CRixJQUFJLENBQUNILE1BQXpCSyxHQUNIQSxRQUFRLENBQUMzSSxJQUFUMkksQ0FBY2xFLEtBQWRrRSxDQUFvQkEsUUFBUSxDQUFDTCxNQUFUSyxDQUFnQlgsTUFBcENXLENBREdBLEdBRUhBLFFBQVEsQ0FBQzNJLElBRmI7RUFHRCxDQUFDLFFBQU91QyxDQUFQLEVBQVU7SUFDVixPQUFPbUcsV0FBUDtFQUNEO0FBQ0Y7QUFFRCxNQUFNRSxlQUFlLEdBQUdDLE1BQU0sQ0FBQyxpQkFBRCxDQUE5QjtBQUNPLFNBQVNDLGdCQUFULENBQTBCbkosR0FBMUIsRUFBNkM7RUFDbEQsT0FBTzBDLE1BQU0sQ0FBQzZDLGNBQVA3QyxDQUFzQjFDLEdBQXRCMEMsRUFBMkJ1RyxlQUEzQnZHLEVBQTRDLEVBQTVDQSxDQUFQO0FBQ0Q7QUFFRCxTQUFTMEcsWUFBVCxDQUFzQmhKLE1BQXRCLEVBQTBDbUksR0FBMUMsRUFBb0RqSSxFQUFwRCxFQUE2RDtFQUMzRDtFQUNBO0VBQ0EsT0FBTztJQUNMaUksR0FBRyxFQUFFSixXQUFXLENBQUNTLFdBQVcsQ0FBQ3hJLE1BQU0sQ0FBQ3FELFFBQVIsRUFBa0I4RSxHQUFsQixDQUFaLENBRFg7SUFFTGpJLEVBQUUsRUFBRUEsRUFBRSxHQUFHNkgsV0FBVyxDQUFDUyxXQUFXLENBQUN4SSxNQUFNLENBQUNxRCxRQUFSLEVBQWtCbkQsRUFBbEIsQ0FBWixDQUFkLEdBQW1EQTtFQUZwRCxDQUFQO0FBSUQ7QUFrREQsTUFBTStJLHVCQUF1QixHQUMzQnJFLFVBRUEsS0FIRjtBQUtBLFNBQVNzRSxVQUFULENBQW9CZixHQUFwQixFQUFpQ2dCLFFBQWpDLEVBQWlFO0VBQy9ELE9BQU8sS0FBSyxDQUFDaEIsR0FBRCxFQUFNO0lBQ2hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQWlCLFdBQVcsRUFBRTtFQVpHLENBQU4sQ0FBTCxDQWFKOUgsSUFiSSxDQWFFK0gsR0FBRCxJQUFTO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtNQUNYLElBQUlILFFBQVEsR0FBRyxDQUFYQSxJQUFnQkUsR0FBRyxDQUFDRSxNQUFKRixJQUFjLEdBQWxDLEVBQXVDO1FBQ3JDLE9BQU9ILFVBQVUsQ0FBQ2YsR0FBRCxFQUFNZ0IsUUFBUSxHQUFHLENBQWpCLENBQWpCO01BQ0Q7TUFDRCxNQUFNLElBQUluSCxLQUFKLENBQVcsNkJBQVgsQ0FBTjtJQUNEO0lBRUQsT0FBT3FILEdBQUcsQ0FBQ0csSUFBSkgsRUFBUDtFQUNELENBdEJNLENBQVA7QUF1QkQ7QUFFRCxTQUFTSSxhQUFULENBQXVCQyxRQUF2QixFQUF5Q0MsY0FBekMsRUFBa0U7RUFDaEUsT0FBTyxVQUFVLENBQUNELFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDdkosS0FBN0MsQ0FBb0RSLEdBQUQsSUFBZ0I7SUFDeEU7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDK0osY0FBTCxFQUFxQjtNQUNuQlosZ0JBQWdCLENBQUNuSixHQUFELENBQWhCbUo7SUFDRDtJQUNELE1BQU1uSixHQUFOO0VBQ0QsQ0FSTSxDQUFQO0FBU0Q7QUFFYyxNQUFNd0YsTUFBNkI7RUFPaEQ7O0FBUGdELElBT2hELENBSUE7RUFlQXdFLFdBQVcsQ0FDVHZHLFNBRFMsRUFFVHdHLE1BRlMsRUFHVDNKLEdBSFMsRUFJVDtJQUNFNEosWUFERjtJQUVFQyxVQUZGO0lBR0VDLEdBSEY7SUFJRUMsT0FKRjtJQUtFQyxTQUxGO0lBTUVDLGtCQU5GO0lBT0V2SyxHQVBGO0lBUUV3SyxZQVJGO0lBU0VDO0VBVEYsQ0FKUyxFQXlCVDtJQUFBLEtBbERGQyxLQWtERTtJQUFBLEtBakRGakgsUUFpREU7SUFBQSxLQWhERndHLEtBZ0RFO0lBQUEsS0EvQ0ZVLE1BK0NFO0lBQUEsS0E5Q0Y3QyxRQThDRTtJQUFBLEtBekNGOEMsVUF5Q0U7SUFBQSxLQXZDRkMsR0F1Q0UsR0F2Q2tDLEVBdUNsQztJQUFBLEtBdENGQyxHQXNDRTtJQUFBLEtBckNGQyxHQXFDRTtJQUFBLEtBcENGWixVQW9DRTtJQUFBLEtBbkNGYSxJQW1DRTtJQUFBLEtBbENGdkYsTUFrQ0U7SUFBQSxLQWpDRndGLFFBaUNFO0lBQUEsS0FoQ0ZDLEtBZ0NFO0lBQUEsS0EvQkZULFVBK0JFO0lBQUEsS0E5QkZVLGNBOEJFO0lBQUEsS0E3QkZDLFFBNkJFO0lBQUEsS0ErRkZDLFVBL0ZFLEdBK0ZZbEssQ0FBRCxJQUE0QjtNQUN2QyxNQUFNbUssS0FBSyxHQUFHbkssQ0FBQyxDQUFDbUssS0FBaEI7TUFFQSxJQUFJLENBQUNBLEtBQUwsRUFBWTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07VUFBRTdILFFBQUY7VUFBWXdHO1FBQVosSUFBc0IsSUFBNUI7UUFDQSxLQUFLc0IsV0FBTCxDQUNFLGNBREYsRUFFRSxpQ0FBcUI7VUFBRTlILFFBQVEsRUFBRTBFLFdBQVcsQ0FBQzFFLFFBQUQsQ0FBdkI7VUFBbUN3RztRQUFuQyxDQUFyQixDQUZGLEVBR0Usb0JBSEY7UUFLQTtNQUNEO01BRUQsSUFBSSxDQUFDcUIsS0FBSyxDQUFDRSxHQUFYLEVBQWdCO1FBQ2Q7TUFDRDtNQUVELE1BQU07UUFBRWpELEdBQUY7UUFBT2pJLEVBQVA7UUFBV0M7TUFBWCxJQUF1QitLLEtBQTdCO01BRUEsTUFBTTtRQUFFN0g7TUFBRixJQUFlLHdDQUFpQjhFLEdBQWpCLENBQXJCLENBRUE7TUFDQTtNQUNBLElBQUksS0FBSzJDLEtBQUwsSUFBYzVLLEVBQUUsS0FBSyxLQUFLcUssTUFBMUIsSUFBb0NsSCxRQUFRLEtBQUssS0FBS0EsUUFBMUQsRUFBb0U7UUFDbEU7TUFDRCxDQUVEO01BQ0E7TUFDQSxJQUFJLEtBQUt1SCxJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVNLEtBQVYsQ0FBbEIsRUFBb0M7UUFDbEM7TUFDRDtNQUVELEtBQUtHLE1BQUwsQ0FDRSxjQURGLEVBRUVsRCxHQUZGLEVBR0VqSSxFQUhGLEVBSUVvQyxNQUFNLENBQUNrRSxNQUFQbEUsQ0FBYyxFQUFkQSxFQUFrQm5DLE9BQWxCbUMsRUFBMkI7UUFDekJyQixPQUFPLEVBQUVkLE9BQU8sQ0FBQ2MsT0FBUmQsSUFBbUIsS0FBSzZLO01BRFIsQ0FBM0IxSSxDQUpGO0lBUUQsQ0FqSkMsQ0FDQTtJQUNBLEtBQUtnSSxLQUFMLEdBQWEscURBQXdCakgsU0FBeEIsQ0FBYixDQUVBO0lBQ0EsS0FBS21ILFVBQUwsR0FBa0IsRUFBbEIsQ0FDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJbkgsU0FBUSxLQUFLLFNBQWpCLEVBQTRCO01BQzFCLEtBQUttSCxVQUFMLENBQWdCLEtBQUtGLEtBQXJCLElBQThCO1FBQzVCSixTQUQ0QjtRQUU1Qm9CLFdBQVcsRUFBRW5CLGtCQUZlO1FBRzVCdEksS0FBSyxFQUFFaUksWUFIcUI7UUFJNUJsSyxHQUo0QjtRQUs1QjJMLE9BQU8sRUFBRXpCLFlBQVksSUFBSUEsWUFBWSxDQUFDeUIsT0FMVjtRQU01QkMsT0FBTyxFQUFFMUIsWUFBWSxJQUFJQSxZQUFZLENBQUMwQjtNQU5WLENBQTlCO0lBUUQ7SUFFRCxLQUFLaEIsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtNQUN6Qk4sU0FBUyxFQUFFRixHQURjO01BRXpCc0IsV0FBVyxFQUFFO0lBRlksQ0FBM0IsQ0FPQTtJQUNBO0lBQ0EsS0FBS2pHLE1BQUwsR0FBY0QsTUFBTSxDQUFDQyxNQUFyQjtJQUVBLEtBQUswRSxVQUFMLEdBQWtCQSxVQUFsQjtJQUNBLEtBQUsxRyxRQUFMLEdBQWdCQSxTQUFoQjtJQUNBLEtBQUt3RyxLQUFMLEdBQWFBLE1BQWIsQ0FDQTtJQUNBO0lBQ0EsS0FBS1UsTUFBTDtJQUNFO0lBQ0EsK0JBQWVsSCxTQUFmLEtBQTRCb0ksYUFBYSxDQUFDQyxVQUExQyxHQUF1RHJJLFNBQXZELEdBQWtFbkQsR0FGcEU7SUFHQSxLQUFLd0gsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLZ0QsR0FBTCxHQUFXTixZQUFYO0lBQ0EsS0FBS08sR0FBTCxHQUFXLElBQVg7SUFDQSxLQUFLRSxRQUFMLEdBQWdCWixPQUFoQixDQUNBO0lBQ0E7SUFDQSxLQUFLYSxLQUFMLEdBQWEsSUFBYjtJQUVBLEtBQUtULFVBQUwsR0FBa0JBLFVBQWxCO0lBRUEsV0FBbUMsRUEyQ2xDO0VBQ0Y7RUFzRERzQixNQUFNLEdBQVM7SUFDYnBOLE1BQU0sQ0FBQ3FOLFFBQVByTixDQUFnQm9OLE1BQWhCcE47RUFDRCxDQUVEOzs7RUFHQXNOLElBQUksR0FBRztJQUNMdE4sTUFBTSxDQUFDdU4sT0FBUHZOLENBQWVzTixJQUFmdE47RUFDRCxDQUVEOzs7Ozs7RUFNQTZJLElBQUksQ0FBQ2UsR0FBRCxFQUFXakksRUFBTyxHQUFHaUksR0FBckIsRUFBMEJoSSxPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQzdEO0lBQUMsQ0FBQztNQUFFZ0ksR0FBRjtNQUFPakk7SUFBUCxJQUFjOEksWUFBWSxDQUFDLElBQUQsRUFBT2IsR0FBUCxFQUFZakksRUFBWixDQUEzQjtJQUNELE9BQU8sS0FBS21MLE1BQUwsQ0FBWSxXQUFaLEVBQXlCbEQsR0FBekIsRUFBOEJqSSxFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBUDtFQUNELENBRUQ7Ozs7OztFQU1BYSxPQUFPLENBQUNtSCxHQUFELEVBQVdqSSxFQUFPLEdBQUdpSSxHQUFyQixFQUEwQmhJLE9BQTBCLEdBQUcsRUFBdkQsRUFBMkQ7SUFDaEU7SUFBQyxDQUFDO01BQUVnSSxHQUFGO01BQU9qSTtJQUFQLElBQWM4SSxZQUFZLENBQUMsSUFBRCxFQUFPYixHQUFQLEVBQVlqSSxFQUFaLENBQTNCO0lBQ0QsT0FBTyxLQUFLbUwsTUFBTCxDQUFZLGNBQVosRUFBNEJsRCxHQUE1QixFQUFpQ2pJLEVBQWpDLEVBQXFDQyxPQUFyQyxDQUFQO0VBQ0Q7RUFFRCxNQUFNa0wsTUFBTixDQUNFVSxNQURGLEVBRUU1RCxHQUZGLEVBR0VqSSxFQUhGLEVBSUVDLE9BSkYsRUFLb0I7SUFDbEIsSUFBSSxDQUFDK0gsVUFBVSxDQUFDQyxHQUFELENBQWYsRUFBc0I7TUFDcEI1SixNQUFNLENBQUNxTixRQUFQck4sQ0FBZ0IwQixJQUFoQjFCLEdBQXVCNEosR0FBdkI1SjtNQUNBLE9BQU8sS0FBUDtJQUNEO0lBRUQsSUFBSSxDQUFFNEIsT0FBRCxDQUFpQjZMLEVBQXRCLEVBQTBCO01BQ3hCLEtBQUtsQixLQUFMLEdBQWEsS0FBYjtJQUNELENBQ0Q7SUFDQSxJQUFJbUIsU0FBSixFQUFRO01BQ05DLFdBQVcsQ0FBQ0MsSUFBWkQsQ0FBaUIsYUFBakJBO0lBQ0Q7SUFFRCxJQUFJLEtBQUtuQixjQUFULEVBQXlCO01BQ3ZCLEtBQUtxQixrQkFBTCxDQUF3QixLQUFLckIsY0FBN0I7SUFDRDtJQUVELE1BQU1zQixTQUFTLEdBQUd4RSxXQUFXLENBQUMzSCxFQUFELENBQVgySCxHQUFrQkcsV0FBVyxDQUFDOUgsRUFBRCxDQUE3QjJILEdBQW9DM0gsRUFBdEQ7SUFDQSxLQUFLNkssY0FBTCxHQUFzQjdLLEVBQXRCLENBRUE7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBRUMsT0FBRCxDQUFpQjZMLEVBQWxCLElBQXdCLEtBQUtNLGVBQUwsQ0FBcUJELFNBQXJCLENBQTVCLEVBQTZEO01BQzNELEtBQUs5QixNQUFMLEdBQWM4QixTQUFkO01BQ0FqSCxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIsaUJBQW5CQSxFQUFzQ2xGLEVBQXRDa0YsRUFDQTtNQUNBLEtBQUsrRixXQUFMLENBQWlCWSxNQUFqQixFQUF5QjVELEdBQXpCLEVBQThCakksRUFBOUIsRUFBa0NDLE9BQWxDO01BQ0EsS0FBS29NLFlBQUwsQ0FBa0JGLFNBQWxCO01BQ0EsS0FBS0csTUFBTCxDQUFZLEtBQUtoQyxVQUFMLENBQWdCLEtBQUtGLEtBQXJCLENBQVo7TUFDQWxGLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixvQkFBbkJBLEVBQXlDbEYsRUFBekNrRjtNQUNBLE9BQU8sSUFBUDtJQUNELENBRUQ7SUFDQTtJQUNBO0lBQ0EsTUFBTXFILEtBQUssR0FBRyxNQUFNLEtBQUsxQyxVQUFMLENBQWdCMkMsV0FBaEIsRUFBcEI7SUFDQSxNQUFNO01BQUVDLFVBQVUsRUFBRUM7SUFBZCxJQUEyQixNQUFNLEtBQUs3QyxVQUFMLENBQWdCOEMscUJBQXZEO0lBRUEsSUFBSUMsTUFBTSxHQUFHLHdDQUFpQjNFLEdBQWpCLENBQWI7SUFFQSxJQUFJO01BQUU5RSxRQUFGO01BQVkwSjtJQUFaLElBQTZCRCxNQUFqQztJQUVBQSxNQUFNLEdBQUcsS0FBS0UsWUFBTCxDQUFrQkYsTUFBbEIsRUFBMEJMLEtBQTFCLENBQVRLO0lBRUEsSUFBSUEsTUFBTSxDQUFDekosUUFBUHlKLEtBQW9CekosUUFBeEIsRUFBa0M7TUFDaENBLFFBQVEsR0FBR3lKLE1BQU0sQ0FBQ3pKLFFBQWxCQTtNQUNBOEUsR0FBRyxHQUFHLGlDQUFxQjJFLE1BQXJCLENBQU4zRTtJQUNEO0lBRUQsTUFBTTBCLEtBQUssR0FBRyx5Q0FBdUJrRCxZQUF2QixDQUFkLENBRUE7SUFDQTtJQUNBO0lBQ0ExSixRQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0IyRSxXQUFXLENBQUMzRSxRQUFELENBQW5DLENBRGUsR0FFZkEsUUFGSkEsQ0FJQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDLEtBQUs0SixRQUFMLENBQWNaLFNBQWQsQ0FBTCxFQUErQjtNQUM3Qk4sTUFBTSxHQUFHLGNBQVRBO0lBQ0Q7SUFFRCxNQUFNekIsS0FBSyxHQUFHLHFEQUF3QmpILFFBQXhCLENBQWQ7SUFDQSxNQUFNO01BQUVwQyxPQUFPLEdBQUc7SUFBWixJQUFzQmQsT0FBNUIsQ0FFQTtJQUNBO0lBQ0EsSUFBSStNLFVBQVUsR0FBR2hOLEVBQWpCO0lBRUEsSUFBSTBFLElBQUosRUFBcUM7TUFDbkNzSSxVQUFVLEdBQUcsOEJBQ1hoTixFQURXLEVBRVh1TSxLQUZXLEVBR1gvRSxRQUhXLEVBSVhrRixRQUpXLEVBS1gvQyxLQUxXLEVBTVY1RyxDQUFELElBQWUsS0FBSytKLFlBQUwsQ0FBa0I7UUFBRTNKLFFBQVEsRUFBRUo7TUFBWixDQUFsQixFQUFtQ3dKLEtBQW5DLEVBQTBDcEosUUFOOUMsQ0FBYjZKO0lBUUQ7SUFDREEsVUFBVSxHQUFHbEYsV0FBVyxDQUFDa0YsVUFBRCxDQUF4QkE7SUFFQSxJQUFJLCtCQUFlNUMsS0FBZixDQUFKLEVBQTJCO01BQ3pCLE1BQU07UUFBRWpILFFBQVEsRUFBRThKO01BQVosSUFBMkIsd0NBQWlCRCxVQUFqQixDQUFqQztNQUNBLE1BQU1FLFVBQVUsR0FBRywrQkFBYzlDLEtBQWQsQ0FBbkI7TUFDQSxNQUFNK0MsVUFBVSxHQUFHLG1DQUFnQkQsVUFBaEIsRUFBNEJELFVBQTVCLENBQW5CO01BQ0EsSUFBSSxDQUFDRSxVQUFMLEVBQWlCO1FBQ2YsTUFBTUMsYUFBYSxHQUFHaEwsTUFBTSxDQUFDQyxJQUFQRCxDQUFZOEssVUFBVSxDQUFDRyxNQUF2QmpMLEVBQStCa0wsTUFBL0JsTCxDQUNuQm1MLEtBQUQsSUFBVyxDQUFDNUQsS0FBSyxDQUFDNEQsS0FBRCxDQURHbkwsQ0FBdEI7UUFJQSxJQUFJZ0wsYUFBYSxDQUFDckYsTUFBZHFGLEdBQXVCLENBQTNCLEVBQThCO1VBQzVCLFVBQTJDO1lBQ3pDek4sT0FBTyxDQUFDbUQsSUFBUm5ELENBQ0csNkRBQUQsR0FDRyxlQUFjeU4sYUFBYSxDQUFDSSxJQUFkSixDQUNiLElBRGFBLENBRWIsOEJBSk56TjtVQU1EO1VBRUQsTUFBTSxJQUFJbUMsS0FBSixDQUNILDhCQUE2Qm1MLFVBQVcsOENBQTZDN0MsS0FBTSxLQUE1RixHQUNHLCtEQUZDLENBQU47UUFJRDtNQUNGLENBcEJELE1Bb0JPO1FBQ0w7UUFDQWhJLE1BQU0sQ0FBQ2tFLE1BQVBsRSxDQUFjdUgsS0FBZHZILEVBQXFCK0ssVUFBckIvSztNQUNEO0lBQ0Y7SUFFRDhDLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixrQkFBbkJBLEVBQXVDbEYsRUFBdkNrRjtJQUVBLElBQUk7TUFDRixNQUFNdUksU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUN0QnRELEtBRHNCLEVBRXRCakgsUUFGc0IsRUFHdEJ3RyxLQUhzQixFQUl0QjNKLEVBSnNCLEVBS3RCZSxPQUxzQixDQUF4QjtNQU9BLElBQUk7UUFBRW5CO01BQUYsSUFBWTZOLFNBQWhCO01BRUF2SSxNQUFNLENBQUNDLE1BQVBELENBQWNtQyxJQUFkbkMsQ0FBbUIscUJBQW5CQSxFQUEwQ2xGLEVBQTFDa0Y7TUFDQSxLQUFLK0YsV0FBTCxDQUFpQlksTUFBakIsRUFBeUI1RCxHQUF6QixFQUE4QmpJLEVBQTlCLEVBQWtDQyxPQUFsQztNQUVBLFVBQTJDO1FBQ3pDLE1BQU0wTixPQUFZLEdBQUcsS0FBS3JELFVBQUwsQ0FBZ0IsT0FBaEIsRUFBeUJOLFNBQTlDO1FBQ0UzTCxNQUFELENBQWdCdVAsSUFBaEIsQ0FBcUJDLGFBQXJCLEdBQ0NGLE9BQU8sQ0FBQ2pILGVBQVJpSCxLQUE0QkEsT0FBTyxDQUFDaEgsbUJBQXBDZ0gsSUFDQSxDQUFFRixTQUFTLENBQUN6RCxTQUFYLENBQTZCdEQsZUFGL0I7TUFHRjtNQUVELE1BQU0sS0FBS2pILEdBQUwsQ0FBUzJLLEtBQVQsRUFBZ0JqSCxRQUFoQixFQUEyQndHLEtBQTNCLEVBQWtDd0MsU0FBbEMsRUFBNkNzQixTQUE3QyxFQUF3RHZOLEtBQXhELENBQ0hXLENBQUQsSUFBTztRQUNMLElBQUlBLENBQUMsQ0FBQzZHLFNBQU4sRUFBaUI5SCxLQUFLLEdBQUdBLEtBQUssSUFBSWlCLENBQWpCakIsQ0FBakIsS0FDSyxNQUFNaUIsQ0FBTjtNQUNOLENBSkcsQ0FBTjtNQU9BLElBQUlqQixLQUFKLEVBQVc7UUFDVHNGLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixrQkFBbkJBLEVBQXVDdEYsS0FBdkNzRixFQUE4Q2lILFNBQTlDakg7UUFDQSxNQUFNdEYsS0FBTjtNQUNEO01BRUQsSUFBSThFLEtBQUosRUFBMkMsRUFJMUM7TUFDRFEsTUFBTSxDQUFDQyxNQUFQRCxDQUFjbUMsSUFBZG5DLENBQW1CLHFCQUFuQkEsRUFBMENsRixFQUExQ2tGO01BRUEsT0FBTyxJQUFQO0lBQ0QsQ0FBQyxRQUFPeEYsR0FBUCxFQUFZO01BQ1osSUFBSUEsR0FBRyxDQUFDZ0ksU0FBUixFQUFtQjtRQUNqQixPQUFPLEtBQVA7TUFDRDtNQUNELE1BQU1oSSxHQUFOO0lBQ0Q7RUFDRjtFQUVEdUwsV0FBVyxDQUNUWSxNQURTLEVBRVQ1RCxHQUZTLEVBR1RqSSxFQUhTLEVBSVRDLE9BQTBCLEdBQUcsRUFKcEIsRUFLSDtJQUNOLFVBQTJDO01BQ3pDLElBQUksT0FBTzVCLE1BQU0sQ0FBQ3VOLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7UUFDekNqTSxPQUFPLENBQUNDLEtBQVJELENBQWUsMkNBQWZBO1FBQ0E7TUFDRDtNQUVELElBQUksT0FBT3RCLE1BQU0sQ0FBQ3VOLE9BQVB2TixDQUFld04sTUFBZnhOLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7UUFDakRzQixPQUFPLENBQUNDLEtBQVJELENBQWUsMkJBQTBCa00sTUFBTyxtQkFBaERsTTtRQUNBO01BQ0Q7SUFDRjtJQUVELElBQUlrTSxNQUFNLEtBQUssV0FBWEEsSUFBMEIseUJBQWE3TCxFQUEzQyxFQUErQztNQUM3QyxLQUFLOEssUUFBTCxHQUFnQjdLLE9BQU8sQ0FBQ2MsT0FBeEI7TUFDQSxNQUFNLENBQUM2SyxPQUFQLENBQWVDLE1BQWYsRUFDRTtRQUNFNUQsR0FERjtRQUVFakksRUFGRjtRQUdFQyxPQUhGO1FBSUVpTCxHQUFHLEVBQUU7TUFKUCxDQURGO01BT0U7TUFDQTtNQUNBO01BQ0EsRUFWRixFQVdFbEwsRUFYRjtJQWFEO0VBQ0Y7RUFFRCxNQUFNOE4sb0JBQU4sQ0FDRXBPLEdBREYsRUFFRXlELFFBRkYsRUFHRXdHLEtBSEYsRUFJRTNKLEVBSkYsRUFLRStOLGFBTEYsRUFNNkI7SUFDM0IsSUFBSXJPLEdBQUcsQ0FBQ2dJLFNBQVIsRUFBbUI7TUFDakI7TUFDQSxNQUFNaEksR0FBTjtJQUNEO0lBRUQsSUFBSWlKLGVBQWUsSUFBSWpKLEdBQW5CaUosSUFBMEJvRixhQUE5QixFQUE2QztNQUMzQzdJLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixrQkFBbkJBLEVBQXVDeEYsR0FBdkN3RixFQUE0Q2xGLEVBQTVDa0YsRUFFQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0E3RyxNQUFNLENBQUNxTixRQUFQck4sQ0FBZ0IwQixJQUFoQjFCLEdBQXVCMkIsRUFBdkIzQixDQUVBO01BQ0E7TUFDQSxNQUFNb0osc0JBQXNCLEVBQTVCO0lBQ0Q7SUFFRCxJQUFJO01BQ0YsTUFBTTtRQUFFdUcsSUFBSSxFQUFFaEUsU0FBUjtRQUFtQm9CO01BQW5CLElBQW1DLE1BQU0sS0FBSzZDLGNBQUwsQ0FDN0MsU0FENkMsQ0FBL0M7TUFHQSxNQUFNUixTQUEyQixHQUFHO1FBQ2xDekQsU0FEa0M7UUFFbENvQixXQUZrQztRQUdsQzFMLEdBSGtDO1FBSWxDRSxLQUFLLEVBQUVGO01BSjJCLENBQXBDO01BT0EsSUFBSTtRQUNGK04sU0FBUyxDQUFDOUwsS0FBVjhMLEdBQWtCLE1BQU0sS0FBSy9HLGVBQUwsQ0FBcUJzRCxTQUFyQixFQUFnQztVQUN0RHRLLEdBRHNEO1VBRXREeUQsUUFGc0Q7VUFHdER3RztRQUhzRCxDQUFoQyxDQUF4QjhEO01BS0QsQ0FBQyxRQUFPUyxNQUFQLEVBQWU7UUFDZnZPLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBYyx5Q0FBZEEsRUFBeUR1TyxNQUF6RHZPO1FBQ0E4TixTQUFTLENBQUM5TCxLQUFWOEwsR0FBa0IsRUFBbEJBO01BQ0Q7TUFFRCxPQUFPQSxTQUFQO0lBQ0QsQ0FBQyxRQUFPVSxZQUFQLEVBQXFCO01BQ3JCLE9BQU8sS0FBS0wsb0JBQUwsQ0FBMEJLLFlBQTFCLEVBQXdDaEwsUUFBeEMsRUFBa0R3RyxLQUFsRCxFQUF5RDNKLEVBQXpELEVBQTZELElBQTdELENBQVA7SUFDRDtFQUNGO0VBRUQsTUFBTTBOLFlBQU4sQ0FDRXRELEtBREYsRUFFRWpILFFBRkYsRUFHRXdHLEtBSEYsRUFJRTNKLEVBSkYsRUFLRWUsT0FBZ0IsR0FBRyxLQUxyQixFQU02QjtJQUMzQixJQUFJO01BQ0YsTUFBTXFOLGVBQWUsR0FBRyxLQUFLOUQsVUFBTCxDQUFnQkYsS0FBaEIsQ0FBeEI7TUFFQSxJQUFJckosT0FBTyxJQUFJcU4sZUFBWHJOLElBQThCLEtBQUtxSixLQUFMLEtBQWVBLEtBQWpELEVBQXdEO1FBQ3RELE9BQU9nRSxlQUFQO01BQ0Q7TUFFRCxNQUFNWCxTQUEyQixHQUFHVyxlQUFlLEdBQy9DQSxlQUQrQyxHQUUvQyxNQUFNLEtBQUtILGNBQUwsQ0FBb0I3RCxLQUFwQixFQUEyQmhKLElBQTNCLENBQWlDK0gsR0FBRCxLQUFVO1FBQzlDYSxTQUFTLEVBQUViLEdBQUcsQ0FBQzZFLElBRCtCO1FBRTlDNUMsV0FBVyxFQUFFakMsR0FBRyxDQUFDaUMsV0FGNkI7UUFHOUNDLE9BQU8sRUFBRWxDLEdBQUcsQ0FBQ2tGLEdBQUpsRixDQUFRa0MsT0FINkI7UUFJOUNDLE9BQU8sRUFBRW5DLEdBQUcsQ0FBQ2tGLEdBQUpsRixDQUFRbUM7TUFKNkIsQ0FBVixDQUFoQyxDQUZWO01BU0EsTUFBTTtRQUFFdEIsU0FBRjtRQUFhcUIsT0FBYjtRQUFzQkM7TUFBdEIsSUFBa0NtQyxTQUF4QztNQUVBLFVBQTJDO1FBQ3pDLE1BQU07VUFBRWE7UUFBRixJQUF5QkMsbUJBQU8sQ0FBQywwQkFBRCxDQUF0QztRQUNBLElBQUksQ0FBQ0Qsa0JBQWtCLENBQUN0RSxTQUFELENBQXZCLEVBQW9DO1VBQ2xDLE1BQU0sSUFBSWxJLEtBQUosQ0FDSCx5REFBd0RxQixRQUFTLEdBRDlELENBQU47UUFHRDtNQUNGO01BRUQsSUFBSXFHLFFBQUo7TUFFQSxJQUFJNkIsT0FBTyxJQUFJQyxPQUFmLEVBQXdCO1FBQ3RCOUIsUUFBUSxHQUFHLEtBQUtLLFVBQUwsQ0FBZ0IyRSxXQUFoQixDQUNULGlDQUFxQjtVQUFFckwsUUFBRjtVQUFZd0c7UUFBWixDQUFyQixDQURTLEVBRVQ3QixXQUFXLENBQUM5SCxFQUFELENBRkYsRUFHVHFMLE9BSFMsQ0FBWDdCO01BS0Q7TUFFRCxNQUFNN0gsS0FBSyxHQUFHLE1BQU0sS0FBSzhNLFFBQUwsQ0FBZ0MsTUFDbERwRCxPQUFPLEdBQ0gsS0FBS3FELGNBQUwsQ0FBb0JsRixRQUFwQixDQURHLEdBRUg4QixPQUFPLEdBQ1AsS0FBS3FELGNBQUwsQ0FBb0JuRixRQUFwQixDQURPLEdBRVAsS0FBSzlDLGVBQUwsQ0FDRXNELFNBREY7TUFFRTtNQUNBO1FBQ0U3RyxRQURGO1FBRUV3RyxLQUZGO1FBR0VVLE1BQU0sRUFBRXJLO01BSFYsQ0FIRixDQUxjLENBQXBCO01BZUF5TixTQUFTLENBQUM5TCxLQUFWOEwsR0FBa0I5TCxLQUFsQjhMO01BQ0EsS0FBS25ELFVBQUwsQ0FBZ0JGLEtBQWhCLElBQXlCcUQsU0FBekI7TUFDQSxPQUFPQSxTQUFQO0lBQ0QsQ0FBQyxRQUFPL04sR0FBUCxFQUFZO01BQ1osT0FBTyxLQUFLb08sb0JBQUwsQ0FBMEJwTyxHQUExQixFQUErQnlELFFBQS9CLEVBQXlDd0csS0FBekMsRUFBZ0QzSixFQUFoRCxDQUFQO0lBQ0Q7RUFDRjtFQUVEUCxHQUFHLENBQ0QySyxLQURDLEVBRURqSCxRQUZDLEVBR0R3RyxLQUhDLEVBSUQzSixFQUpDLEVBS0Q0TyxJQUxDLEVBTWM7SUFDZixLQUFLekUsVUFBTCxHQUFrQixLQUFsQjtJQUVBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtqSCxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUt3RyxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLVSxNQUFMLEdBQWNySyxFQUFkO0lBQ0EsT0FBTyxLQUFLc00sTUFBTCxDQUFZc0MsSUFBWixDQUFQO0VBQ0QsQ0FFRDs7OztFQUlBQyxjQUFjLENBQUMvUCxFQUFELEVBQTZCO0lBQ3pDLEtBQUs0TCxJQUFMLEdBQVk1TCxFQUFaO0VBQ0Q7RUFFRHNOLGVBQWUsQ0FBQ3BNLEVBQUQsRUFBc0I7SUFDbkMsSUFBSSxDQUFDLEtBQUtxSyxNQUFWLEVBQWtCLE9BQU8sS0FBUDtJQUNsQixNQUFNLENBQUN5RSxZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBSzFFLE1BQUwsQ0FBWTJFLEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7SUFDQSxNQUFNLENBQUNDLFlBQUQsRUFBZUMsT0FBZixJQUEwQmxQLEVBQUUsQ0FBQ2dQLEtBQUhoUCxDQUFTLEdBQVRBLENBQWhDLENBRUE7SUFDQSxJQUFJa1AsT0FBTyxJQUFJSixZQUFZLEtBQUtHLFlBQTVCQyxJQUE0Q0gsT0FBTyxLQUFLRyxPQUE1RCxFQUFxRTtNQUNuRSxPQUFPLElBQVA7SUFDRCxDQUVEO0lBQ0EsSUFBSUosWUFBWSxLQUFLRyxZQUFyQixFQUFtQztNQUNqQyxPQUFPLEtBQVA7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBT0YsT0FBTyxLQUFLRyxPQUFuQjtFQUNEO0VBRUQ3QyxZQUFZLENBQUNyTSxFQUFELEVBQW1CO0lBQzdCLE1BQU0sR0FBR21QLElBQUgsSUFBV25QLEVBQUUsQ0FBQ2dQLEtBQUhoUCxDQUFTLEdBQVRBLENBQWpCLENBQ0E7SUFDQSxJQUFJbVAsSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZjlRLE1BQU0sQ0FBQ2lELFFBQVBqRCxDQUFnQixDQUFoQkEsRUFBbUIsQ0FBbkJBO01BQ0E7SUFDRCxDQUVEO0lBQ0EsTUFBTStRLElBQUksR0FBRzdOLFFBQVEsQ0FBQzhOLGNBQVQ5TixDQUF3QjROLElBQXhCNU4sQ0FBYjtJQUNBLElBQUk2TixJQUFKLEVBQVU7TUFDUkEsSUFBSSxDQUFDRSxjQUFMRjtNQUNBO0lBQ0QsQ0FDRDtJQUNBO0lBQ0EsTUFBTUcsTUFBTSxHQUFHaE8sUUFBUSxDQUFDaU8saUJBQVRqTyxDQUEyQjROLElBQTNCNU4sRUFBaUMsQ0FBakNBLENBQWY7SUFDQSxJQUFJZ08sTUFBSixFQUFZO01BQ1ZBLE1BQU0sQ0FBQ0QsY0FBUEM7SUFDRDtFQUNGO0VBRUR4QyxRQUFRLENBQUMxQyxNQUFELEVBQTBCO0lBQ2hDLE9BQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7RUFDRDtFQUVEeUMsWUFBWSxDQUFDMkMsVUFBRCxFQUF3QmxELEtBQXhCLEVBQXlDO0lBQ25ELE1BQU07TUFBRXBKO0lBQUYsSUFBZXNNLFVBQXJCO0lBQ0EsTUFBTUMsYUFBYSxHQUFHLDhDQUFvQjVILFdBQVcsQ0FBQzNFLFFBQUQsQ0FBL0IsQ0FBdEI7SUFFQSxJQUFJdU0sYUFBYSxLQUFLLE1BQWxCQSxJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO01BQzNELE9BQU9ELFVBQVA7SUFDRCxDQUVEO0lBQ0EsSUFBSSxDQUFDbEQsS0FBSyxDQUFDb0QsUUFBTnBELENBQWVtRCxhQUFmbkQsQ0FBTCxFQUFxQztNQUNuQztNQUNBQSxLQUFLLENBQUNxRCxJQUFOckQsQ0FBWXlCLElBQUQsSUFBVTtRQUNuQixJQUNFLCtCQUFlQSxJQUFmLEtBQ0EsK0JBQWNBLElBQWQsRUFBb0I2QixFQUFwQixDQUF1QkMsSUFBdkIsQ0FBNEJKLGFBQTVCLENBRkYsRUFHRTtVQUNBRCxVQUFVLENBQUN0TSxRQUFYc00sR0FBc0I1SCxXQUFXLENBQUNtRyxJQUFELENBQWpDeUI7VUFDQSxPQUFPLElBQVA7UUFDRDtNQUNGLENBUkRsRDtJQVNEO0lBQ0QsT0FBT2tELFVBQVA7RUFDRCxDQUVEOzs7Ozs7RUFNQSxNQUFNNVAsUUFBTixDQUNFb0ksR0FERixFQUVFb0MsTUFBYyxHQUFHcEMsR0FGbkIsRUFHRWhJLE9BQXdCLEdBQUcsRUFIN0IsRUFJaUI7SUFDZixJQUFJMk0sTUFBTSxHQUFHLHdDQUFpQjNFLEdBQWpCLENBQWI7SUFFQSxJQUFJO01BQUU5RTtJQUFGLElBQWV5SixNQUFuQjtJQUVBLE1BQU1MLEtBQUssR0FBRyxNQUFNLEtBQUsxQyxVQUFMLENBQWdCMkMsV0FBaEIsRUFBcEI7SUFFQUksTUFBTSxHQUFHLEtBQUtFLFlBQUwsQ0FBa0JGLE1BQWxCLEVBQTBCTCxLQUExQixDQUFUSztJQUVBLElBQUlBLE1BQU0sQ0FBQ3pKLFFBQVB5SixLQUFvQnpKLFFBQXhCLEVBQWtDO01BQ2hDQSxRQUFRLEdBQUd5SixNQUFNLENBQUN6SixRQUFsQkE7TUFDQThFLEdBQUcsR0FBRyxpQ0FBcUIyRSxNQUFyQixDQUFOM0U7SUFDRCxDQUVEO0lBQ0EsVUFBMkM7TUFDekM7SUFDRDtJQUVELE1BQU1tQyxLQUFLLEdBQUcscURBQXdCakgsUUFBeEIsQ0FBZDtJQUNBLE1BQU00TSxPQUFPLENBQUNoSixHQUFSZ0osQ0FBWSxDQUNoQixLQUFLbEcsVUFBTCxDQUFnQm1HLFlBQWhCLENBQTZCL0gsR0FBN0IsRUFBa0NvQyxNQUFsQyxDQURnQixFQUVoQixLQUFLUixVQUFMLENBQWdCNUosT0FBTyxDQUFDaUUsUUFBUmpFLEdBQW1CLFVBQW5CQSxHQUFnQyxVQUFoRCxFQUE0RG1LLEtBQTVELENBRmdCLENBQVoyRixDQUFOO0VBSUQ7RUFFRCxNQUFNOUIsY0FBTixDQUFxQjdELEtBQXJCLEVBQTREO0lBQzFELElBQUkxQyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNdUksTUFBTSxHQUFJLEtBQUt4RixHQUFMLEdBQVcsTUFBTTtNQUMvQi9DLFNBQVMsR0FBRyxJQUFaQTtJQUNELENBRkQ7SUFJQSxNQUFNd0ksZUFBZSxHQUFHLE1BQU0sS0FBS3JHLFVBQUwsQ0FBZ0JzRyxRQUFoQixDQUF5Qi9GLEtBQXpCLENBQTlCO0lBRUEsSUFBSTFDLFNBQUosRUFBZTtNQUNiLE1BQU05SCxLQUFVLEdBQUcsSUFBSWtDLEtBQUosQ0FDaEIsd0NBQXVDc0ksS0FBTSxHQUQ3QixDQUFuQjtNQUdBeEssS0FBSyxDQUFDOEgsU0FBTjlILEdBQWtCLElBQWxCQTtNQUNBLE1BQU1BLEtBQU47SUFDRDtJQUVELElBQUlxUSxNQUFNLEtBQUssS0FBS3hGLEdBQXBCLEVBQXlCO01BQ3ZCLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7SUFFRCxPQUFPeUYsZUFBUDtFQUNEO0VBRUR6QixRQUFRLENBQUkyQixFQUFKLEVBQXNDO0lBQzVDLElBQUkxSSxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNdUksTUFBTSxHQUFHLE1BQU07TUFDbkJ2SSxTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBR0EsS0FBSytDLEdBQUwsR0FBV3dGLE1BQVg7SUFDQSxPQUFPRyxFQUFFLEdBQUdoUCxJQUFMZ1AsQ0FBV3hCLElBQUQsSUFBVTtNQUN6QixJQUFJcUIsTUFBTSxLQUFLLEtBQUt4RixHQUFwQixFQUF5QjtRQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtNQUNEO01BRUQsSUFBSS9DLFNBQUosRUFBZTtRQUNiLE1BQU1oSSxHQUFRLEdBQUcsSUFBSW9DLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBcEMsR0FBRyxDQUFDZ0ksU0FBSmhJLEdBQWdCLElBQWhCQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtNQUVELE9BQU9rUCxJQUFQO0lBQ0QsQ0FaTXdCLENBQVA7RUFhRDtFQUVEMUIsY0FBYyxDQUFDbEYsUUFBRCxFQUFvQztJQUNoRCxNQUFNO01BQUV6SixJQUFJLEVBQUVzUTtJQUFSLElBQXFCLElBQUlqSSxHQUFKLENBQVFvQixRQUFSLEVBQWtCbkwsTUFBTSxDQUFDcU4sUUFBUHJOLENBQWdCMEIsSUFBbEMsQ0FBM0I7SUFDQSxJQUFJMkUsS0FBSixFQUFpRSxFQUVoRTtJQUNELE9BQU82RSxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLb0IsS0FBaEIsQ0FBYnJCLENBQW9DbkksSUFBcENtSSxDQUEwQ3FGLElBQUQsSUFBVTtNQUN4RCxLQUFLckUsR0FBTCxDQUFTOEYsUUFBVCxJQUFxQnpCLElBQXJCO01BQ0EsT0FBT0EsSUFBUDtJQUNELENBSE1yRixDQUFQO0VBSUQ7RUFFRG9GLGNBQWMsQ0FBQ25GLFFBQUQsRUFBb0M7SUFDaEQsT0FBT0QsYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS29CLEtBQWhCLENBQXBCO0VBQ0Q7RUFFRGxFLGVBQWUsQ0FDYnNELFNBRGEsRUFFYnNHLEdBRmEsRUFHQztJQUNkLE1BQU07TUFBRXRHLFNBQVMsRUFBRUY7SUFBYixJQUFxQixLQUFLUSxVQUFMLENBQWdCLE9BQWhCLENBQTNCO0lBQ0EsTUFBTWlHLE9BQU8sR0FBRyxLQUFLNUYsUUFBTCxDQUFjYixHQUFkLENBQWhCO0lBQ0F3RyxHQUFHLENBQUNDLE9BQUpELEdBQWNDLE9BQWREO0lBQ0EsT0FBTyxnQ0FBNEN4RyxHQUE1QyxFQUFpRDtNQUN0RHlHLE9BRHNEO01BRXREdkcsU0FGc0Q7TUFHdERsSyxNQUFNLEVBQUUsSUFIOEM7TUFJdER3UTtJQUpzRCxDQUFqRCxDQUFQO0VBTUQ7RUFFRHBFLGtCQUFrQixDQUFDbE0sRUFBRCxFQUFtQjtJQUNuQyxJQUFJLEtBQUt5SyxHQUFULEVBQWM7TUFDWnZGLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBY21DLElBQWRuQyxDQUFtQixrQkFBbkJBLEVBQXVDdUMsc0JBQXNCLEVBQTdEdkMsRUFBaUVsRixFQUFqRWtGO01BQ0EsS0FBS3VGLEdBQUw7TUFDQSxLQUFLQSxHQUFMLEdBQVcsSUFBWDtJQUNEO0VBQ0Y7RUFFRDZCLE1BQU0sQ0FBQ3NDLElBQUQsRUFBd0M7SUFDNUMsT0FBTyxLQUFLcEUsR0FBTCxDQUFTb0UsSUFBVCxFQUFlLEtBQUt0RSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCTixTQUF4QyxDQUFQO0VBQ0Q7QUEvd0IrQzs7QUFBN0I5RSxNLENBd0JaQyxNLEdBQXNCLG9COzs7Ozs7Ozs7Ozs7Ozs7O0FDaE4vQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLE1BQU1xTCxnQkFBZ0IsR0FBRyx3QkFBekI7QUFFTyxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUFzQztFQUMzQyxJQUFJO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUFxQkYsTUFBekI7RUFDQSxJQUFJRyxRQUFRLEdBQUdILE1BQU0sQ0FBQ0csUUFBUEgsSUFBbUIsRUFBbEM7RUFDQSxJQUFJdk4sUUFBUSxHQUFHdU4sTUFBTSxDQUFDdk4sUUFBUHVOLElBQW1CLEVBQWxDO0VBQ0EsSUFBSXZCLElBQUksR0FBR3VCLE1BQU0sQ0FBQ3ZCLElBQVB1QixJQUFlLEVBQTFCO0VBQ0EsSUFBSS9HLEtBQUssR0FBRytHLE1BQU0sQ0FBQy9HLEtBQVArRyxJQUFnQixFQUE1QjtFQUNBLElBQUlJLElBQW9CLEdBQUcsS0FBM0I7RUFFQUgsSUFBSSxHQUFHQSxJQUFJLEdBQUdJLGtCQUFrQixDQUFDSixJQUFELENBQWxCSSxDQUF5QmpRLE9BQXpCaVEsQ0FBaUMsTUFBakNBLEVBQXlDLEdBQXpDQSxJQUFnRCxHQUFuRCxHQUF5RCxFQUFwRUo7RUFFQSxJQUFJRCxNQUFNLENBQUNJLElBQVgsRUFBaUI7SUFDZkEsSUFBSSxHQUFHSCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0ksSUFBckJBO0VBQ0QsQ0FGRCxNQUVPLElBQUlGLFFBQUosRUFBYztJQUNuQkUsSUFBSSxHQUFHSCxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFDelAsT0FBVHlQLENBQWlCLEdBQWpCQSxDQUFELEdBQTBCLElBQUdBLFFBQVMsR0FBdEMsR0FBMkNBLFFBQS9DLENBQVhFO0lBQ0EsSUFBSUosTUFBTSxDQUFDTSxJQUFYLEVBQWlCO01BQ2ZGLElBQUksSUFBSSxNQUFNSixNQUFNLENBQUNNLElBQXJCRjtJQUNEO0VBQ0Y7RUFFRCxJQUFJbkgsS0FBSyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBOUIsRUFBd0M7SUFDdENBLEtBQUssR0FBR3NILE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxzQkFBWkQsQ0FBbUN2SCxLQUFuQ3VILENBQUQsQ0FBZHZIO0VBQ0Q7RUFFRCxJQUFJeUgsTUFBTSxHQUFHVixNQUFNLENBQUNVLE1BQVBWLElBQWtCL0csS0FBSyxJQUFLLElBQUdBLEtBQU0sRUFBckMrRyxJQUEyQyxFQUF4RDtFQUVBLElBQUlHLFFBQVEsSUFBSUEsUUFBUSxDQUFDUSxNQUFUUixDQUFnQixDQUFDLENBQWpCQSxNQUF3QixHQUF4QyxFQUE2Q0EsUUFBUSxJQUFJLEdBQVpBO0VBRTdDLElBQ0VILE1BQU0sQ0FBQ1ksT0FBUFosSUFDQyxDQUFDLENBQUNHLFFBQUQsSUFBYUwsZ0JBQWdCLENBQUNWLElBQWpCVSxDQUFzQkssUUFBdEJMLENBQWQsS0FBa0RNLElBQUksS0FBSyxLQUY5RCxFQUdFO0lBQ0FBLElBQUksR0FBRyxRQUFRQSxJQUFJLElBQUksRUFBaEIsQ0FBUEE7SUFDQSxJQUFJM04sUUFBUSxJQUFJQSxRQUFRLENBQUMsQ0FBRCxDQUFSQSxLQUFnQixHQUFoQyxFQUFxQ0EsUUFBUSxHQUFHLE1BQU1BLFFBQWpCQTtFQUN0QyxDQU5ELE1BTU8sSUFBSSxDQUFDMk4sSUFBTCxFQUFXO0lBQ2hCQSxJQUFJLEdBQUcsRUFBUEE7RUFDRDtFQUVELElBQUkzQixJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFELENBQUpBLEtBQVksR0FBeEIsRUFBNkJBLElBQUksR0FBRyxNQUFNQSxJQUFiQTtFQUM3QixJQUFJaUMsTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBRCxDQUFOQSxLQUFjLEdBQTVCLEVBQWlDQSxNQUFNLEdBQUcsTUFBTUEsTUFBZkE7RUFFakNqTyxRQUFRLEdBQUdBLFFBQVEsQ0FBQ3JDLE9BQVRxQyxDQUFpQixPQUFqQkEsRUFBMEI0TixrQkFBMUI1TixDQUFYQTtFQUNBaU8sTUFBTSxHQUFHQSxNQUFNLENBQUN0USxPQUFQc1EsQ0FBZSxHQUFmQSxFQUFvQixLQUFwQkEsQ0FBVEE7RUFFQSxPQUFRLEdBQUVQLFFBQVMsR0FBRUMsSUFBSyxHQUFFM04sUUFBUyxHQUFFaU8sTUFBTyxHQUFFakMsSUFBSyxFQUFyRDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozt3Q0N4RUQ7QUFDQSxNQUFNb0MsVUFBVSxHQUFHLHNCQUFuQjtBQUVPLFNBQVNDLGNBQVQsQ0FBd0JwSCxLQUF4QixFQUFnRDtFQUNyRCxPQUFPbUgsVUFBVSxDQUFDekIsSUFBWHlCLENBQWdCbkgsS0FBaEJtSCxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xEO0FBRUEsTUFBTUUsVUFBVSxHQUFHLElBQUlySixHQUFKLENBQ2pCLE9BQWdDLFVBQWhDLEdBQTZDLFNBRDVCLENBQW5CLENBSUE7Ozs7OztBQU1PLFNBQVNzSixnQkFBVCxDQUEwQnpKLEdBQTFCLEVBQXVDTyxJQUF2QyxFQUFzRDtFQUMzRCxNQUFNbUosWUFBWSxHQUFHbkosSUFBSSxHQUFHLElBQUlKLEdBQUosQ0FBUUksSUFBUixFQUFjaUosVUFBZCxDQUFILEdBQStCQSxVQUF4RDtFQUNBLE1BQU07SUFDSnRPLFFBREk7SUFFSjBKLFlBRkk7SUFHSnVFLE1BSEk7SUFJSmpDLElBSkk7SUFLSnBQLElBTEk7SUFNSnNJLE1BTkk7SUFPSndJO0VBUEksSUFRRixJQUFJekksR0FBSixDQUFRSCxHQUFSLEVBQWEwSixZQUFiLENBUko7RUFTQSxJQUNFdEosTUFBTSxLQUFLb0osVUFBVSxDQUFDcEosTUFBdEJBLElBQ0N3SSxRQUFRLEtBQUssT0FBYkEsSUFBd0JBLFFBQVEsS0FBSyxRQUZ4QyxFQUdFO0lBQ0EsTUFBTSxJQUFJL08sS0FBSixDQUFVLGlDQUFWLENBQU47RUFDRDtFQUNELE9BQU87SUFDTHFCLFFBREs7SUFFTDBKLFlBRks7SUFHTHVFLE1BSEs7SUFJTGpDLElBSks7SUFLTHBQLElBQUksRUFBRUEsSUFBSSxDQUFDeUUsS0FBTHpFLENBQVcwUixVQUFVLENBQUNwSixNQUFYb0osQ0FBa0IxSixNQUE3QmhJO0VBTEQsQ0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTyxNQUFNNlIsY0FBYyxHQUFHO0VBQzVCQyxTQUFTLEVBQUUsS0FEaUI7RUFFNUJDLFNBQVMsRUFBRSxHQUZpQjtFQUc1QkMsTUFBTSxFQUFFQztBQUhvQixDQUF2Qjs7QUFNQSxNQUFNQyx5QkFBeUIsbUNBQ2pDTCxjQURvQztFQUV2Q00sTUFBTSxFQUFFO0FBRitCLEVBQWxDOztlQUtRLENBQUNDLFdBQVcsR0FBRyxLQUFmLEtBQXlCO0VBQ3RDLE9BQVE3TixJQUFELElBQWtCO0lBQ3ZCLE1BQU1qQyxJQUF3QixHQUFHLEVBQWpDO0lBQ0EsTUFBTStQLFlBQVksR0FBR0MsWUFBWSxDQUFDQSxZQUFiQSxDQUNuQi9OLElBRG1CK04sRUFFbkJoUSxJQUZtQmdRLEVBR25CRixXQUFXLEdBQUdGLHlCQUFILEdBQStCTCxjQUh2QlMsQ0FBckI7SUFLQSxNQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBQ0UsZ0JBQWJGLENBQ2RELFlBRGNDLEVBRWRoUSxJQUZjZ1EsRUFHZFQsY0FIY1MsQ0FBaEI7SUFNQSxPQUFPLENBQUNsUCxRQUFELEVBQXNDcVAsTUFBdEMsS0FBdUQ7TUFDNUQsTUFBTXJKLEdBQUcsR0FBR2hHLFFBQVEsSUFBSSxJQUFaQSxHQUFtQixLQUFuQkEsR0FBMkJtUCxPQUFPLENBQUNuUCxRQUFELENBQTlDO01BQ0EsSUFBSSxDQUFDZ0csR0FBTCxFQUFVO1FBQ1IsT0FBTyxLQUFQO01BQ0Q7TUFFRCxJQUFJZ0osV0FBSixFQUFpQjtRQUNmLEtBQUssTUFBTXBRLEdBQVgsSUFBa0JNLElBQWxCLEVBQXdCO1VBQ3RCO1VBQ0E7VUFDQSxJQUFJLE9BQU9OLEdBQUcsQ0FBQzZFLElBQVgsS0FBb0IsUUFBeEIsRUFBa0M7WUFDaEMsT0FBUXVDLEdBQUcsQ0FBQ3FKLE1BQUwsQ0FBb0J6USxHQUFHLENBQUM2RSxJQUF4QixDQUFQO1VBQ0Q7UUFDRjtNQUNGO01BRUQsdUNBQVk0TCxNQUFMLEdBQWdCckosR0FBRyxDQUFDcUosTUFBM0I7SUFDRCxDQWpCRDtFQWtCRCxDQS9CRDtBQWdDRCxDOztBQUVELFNBQVNSLFdBQVQsQ0FBcUJ6RSxLQUFyQixFQUFvQztFQUNsQyxJQUFJO0lBQ0YsT0FBT2tGLGtCQUFrQixDQUFDbEYsS0FBRCxDQUF6QjtFQUNELENBQUMsUUFBT2pMLENBQVAsRUFBVTtJQUNWLE1BQU01QyxHQUE4QixHQUFHLElBQUlvQyxLQUFKLENBQVUsd0JBQVYsQ0FBdkM7SUFDQXBDLEdBQUcsQ0FBQ2dULElBQUpoVCxHQUFXLGVBQVhBO0lBQ0EsTUFBTUEsR0FBTjtFQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUllLFNBQVNpVCxrQkFBVCxDQUNiQyxXQURhLEVBRWJKLE1BRmEsRUFHYjdJLEtBSGEsRUFJYmtKLG1CQUphLEVBS2JyTCxRQUxhLEVBTWI7RUFDQSxJQUFJc0wsaUJBS21DLEdBQUcsRUFMMUM7RUFPQSxJQUFJRixXQUFXLENBQUNoTCxVQUFaZ0wsQ0FBdUIsR0FBdkJBLENBQUosRUFBaUM7SUFDL0JFLGlCQUFpQixHQUFHLHdDQUFpQkYsV0FBakIsQ0FBcEJFO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsTUFBTTtNQUNKM1AsUUFESTtNQUVKMEosWUFGSTtNQUdKc0MsSUFISTtNQUlKeUIsUUFKSTtNQUtKSSxJQUxJO01BTUpILFFBTkk7TUFPSk8sTUFQSTtNQVFKclI7SUFSSSxJQVNGLElBQUlxSSxHQUFKLENBQVF3SyxXQUFSLENBVEo7SUFXQUUsaUJBQWlCLEdBQUc7TUFDbEIzUCxRQURrQjtNQUVsQjBKLFlBRmtCO01BR2xCc0MsSUFIa0I7TUFJbEIwQixRQUprQjtNQUtsQkQsUUFMa0I7TUFNbEJJLElBTmtCO01BT2xCSSxNQVBrQjtNQVFsQnJSO0lBUmtCLENBQXBCK1M7RUFVRDtFQUVEQSxpQkFBaUIsQ0FBQ25KLEtBQWxCbUosR0FBMEIseUNBQ3hCQSxpQkFBaUIsQ0FBQ2pHLFlBRE0sQ0FBMUJpRztFQUdBLE1BQU1DLFNBQVMsR0FBR0QsaUJBQWlCLENBQUNuSixLQUFwQztFQUNBLE1BQU1xSixRQUFRLEdBQUksR0FBRUYsaUJBQWlCLENBQUMzUCxRQUFVLEdBQzlDMlAsaUJBQWlCLENBQUMzRCxJQUFsQjJELElBQTBCLEVBQzNCLEVBRkQ7RUFHQSxNQUFNRyxpQkFBcUMsR0FBRyxFQUE5QztFQUNBWixZQUFZLENBQUNBLFlBQWJBLENBQTBCVyxRQUExQlgsRUFBb0NZLGlCQUFwQ1o7RUFFQSxNQUFNYSxjQUFjLEdBQUdELGlCQUFpQixDQUFDMUwsR0FBbEIwTCxDQUF1QmxSLEdBQUQsSUFBU0EsR0FBRyxDQUFDNkUsSUFBbkNxTSxDQUF2QjtFQUVBLElBQUlFLG1CQUFtQixHQUFHLFlBQVksQ0FBQ0MsT0FBYixDQUN4QkosUUFEd0I7RUFFeEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7SUFBRUssUUFBUSxFQUFFO0VBQVosQ0FSd0IsQ0FBMUI7RUFVQSxJQUFJQyxNQUFKLENBRUE7RUFDQSxLQUFLLE1BQU0sQ0FBQ3ZSLEdBQUQsRUFBTXdSLFVBQU4sQ0FBWCxJQUFnQ25SLE1BQU0sQ0FBQzNELE9BQVAyRCxDQUFlMlEsU0FBZjNRLENBQWhDLEVBQTJEO0lBQ3pELElBQUlvUixLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY0YsVUFBZEUsSUFBNEJGLFVBQVUsQ0FBQyxDQUFELENBQXRDRSxHQUE0Q0YsVUFBeEQ7SUFDQSxJQUFJQyxLQUFKLEVBQVc7TUFDVDtNQUNBO01BQ0FBLEtBQUssR0FBSSxJQUFHQSxLQUFNLEVBQWxCQTtNQUNBLE1BQU1HLGFBQWEsR0FBR3RCLFlBQVksQ0FBQ2UsT0FBYmYsQ0FBcUJtQixLQUFyQm5CLEVBQTRCO1FBQUVnQixRQUFRLEVBQUU7TUFBWixDQUE1QmhCLENBQXRCO01BQ0FtQixLQUFLLEdBQUdHLGFBQWEsQ0FBQ25CLE1BQUQsQ0FBYm1CLENBQXNCdEMsTUFBdEJzQyxDQUE2QixDQUE3QkEsQ0FBUkg7SUFDRDtJQUNEVCxTQUFTLENBQUNoUixHQUFELENBQVRnUixHQUFpQlMsS0FBakJUO0VBQ0QsQ0FFRDtFQUNBO0VBQ0EsTUFBTWEsU0FBUyxHQUFHeFIsTUFBTSxDQUFDQyxJQUFQRCxDQUFZb1EsTUFBWnBRLENBQWxCO0VBRUEsSUFDRXlRLG1CQUFtQixJQUNuQixDQUFDZSxTQUFTLENBQUNoRSxJQUFWZ0UsQ0FBZ0I3UixHQUFELElBQVNtUixjQUFjLENBQUN2RCxRQUFmdUQsQ0FBd0JuUixHQUF4Qm1SLENBQXhCVSxDQUZILEVBR0U7SUFDQSxLQUFLLE1BQU03UixHQUFYLElBQWtCNlIsU0FBbEIsRUFBNkI7TUFDM0IsSUFBSSxFQUFFN1IsR0FBRyxJQUFJZ1IsU0FBVCxDQUFKLEVBQXlCO1FBQ3ZCQSxTQUFTLENBQUNoUixHQUFELENBQVRnUixHQUFpQlAsTUFBTSxDQUFDelEsR0FBRCxDQUF2QmdSO01BQ0Q7SUFDRjtFQUNGO0VBRUQsTUFBTWMsaUJBQWlCLEdBQUdqQixXQUFXLENBQUNoTCxVQUFaZ0wsQ0FBdUIsR0FBdkJBLEtBQStCcEwsUUFBekQ7RUFFQSxJQUFJO0lBQ0Y4TCxNQUFNLEdBQUksR0FBRU8saUJBQWlCLEdBQUdyTSxRQUFILEdBQWMsRUFBRyxHQUFFc00sU0FBUyxDQUN2RFgsbUJBQW1CLENBQUNYLE1BQUQsQ0FEb0MsQ0FFdkQsRUFGRmM7SUFJQSxNQUFNLENBQUNuUSxRQUFELEVBQVdnTSxJQUFYLElBQW1CbUUsTUFBTSxDQUFDdEUsS0FBUHNFLENBQWEsR0FBYkEsQ0FBekI7SUFDQVIsaUJBQWlCLENBQUMzUCxRQUFsQjJQLEdBQTZCM1AsUUFBN0IyUDtJQUNBQSxpQkFBaUIsQ0FBQzNELElBQWxCMkQsR0FBMEIsR0FBRTNELElBQUksR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBRyxFQUF6RDJEO0lBQ0EsT0FBT0EsaUJBQWlCLENBQUMxQixNQUF6QjtJQUNBLE9BQU8wQixpQkFBaUIsQ0FBQ2pHLFlBQXpCO0VBQ0QsQ0FBQyxRQUFPbk4sR0FBUCxFQUFZO0lBQ1osSUFBSUEsR0FBRyxDQUFDa0csT0FBSmxHLENBQVlxVSxLQUFaclUsQ0FBa0IsOENBQWxCQSxDQUFKLEVBQXVFO01BQ3JFLE1BQU0sSUFBSW9DLEtBQUosQ0FDSCx3S0FERyxDQUFOO0lBR0Q7SUFDRCxNQUFNcEMsR0FBTjtFQUNELENBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQW9ULGlCQUFpQixDQUFDbkosS0FBbEJtSixtQ0FDS25KLEtBRHFCLEdBRXJCbUosaUJBQWlCLENBQUNuSixLQUZHLENBQTFCbUo7RUFLQSxPQUFPO0lBQ0xRLE1BREs7SUFFTFI7RUFGSyxDQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklNLFNBQVNrQixzQkFBVCxDQUNMbkgsWUFESyxFQUVXO0VBQ2hCLE1BQU1sRCxLQUFxQixHQUFHLEVBQTlCO0VBQ0FrRCxZQUFZLENBQUNuTyxPQUFibU8sQ0FBcUIsQ0FBQzJHLEtBQUQsRUFBUXpSLEdBQVIsS0FBZ0I7SUFDbkMsSUFBSSxPQUFPNEgsS0FBSyxDQUFDNUgsR0FBRCxDQUFaLEtBQXNCLFdBQTFCLEVBQXVDO01BQ3JDNEgsS0FBSyxDQUFDNUgsR0FBRCxDQUFMNEgsR0FBYTZKLEtBQWI3SjtJQUNELENBRkQsTUFFTyxJQUFJOEosS0FBSyxDQUFDQyxPQUFORCxDQUFjOUosS0FBSyxDQUFDNUgsR0FBRCxDQUFuQjBSLENBQUosRUFBK0I7TUFDcEM7TUFBRTlKLEtBQUssQ0FBQzVILEdBQUQsQ0FBTixDQUF5Qm1GLElBQXpCLENBQThCc00sS0FBOUI7SUFDRixDQUZNLE1BRUE7TUFDTDdKLEtBQUssQ0FBQzVILEdBQUQsQ0FBTDRILEdBQWEsQ0FBQ0EsS0FBSyxDQUFDNUgsR0FBRCxDQUFOLEVBQXVCeVIsS0FBdkIsQ0FBYjdKO0lBQ0Q7RUFDRixDQVJEa0Q7RUFTQSxPQUFPbEQsS0FBUDtBQUNEO0FBRU0sU0FBU3dILHNCQUFULENBQ0w4QyxRQURLLEVBRVk7RUFDakIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosRUFBZjtFQUNBL1IsTUFBTSxDQUFDM0QsT0FBUDJELENBQWU2UixRQUFmN1IsRUFBeUIxRCxPQUF6QjBELENBQWlDLENBQUMsQ0FBQ0wsR0FBRCxFQUFNeVIsS0FBTixDQUFELEtBQWtCO0lBQ2pELElBQUlDLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY0QsS0FBZEMsQ0FBSixFQUEwQjtNQUN4QkQsS0FBSyxDQUFDOVUsT0FBTjhVLENBQWVZLElBQUQsSUFBVUYsTUFBTSxDQUFDRyxNQUFQSCxDQUFjblMsR0FBZG1TLEVBQW1CRSxJQUFuQkYsQ0FBeEJWO0lBQ0QsQ0FGRCxNQUVPO01BQ0xVLE1BQU0sQ0FBQ3pVLEdBQVB5VSxDQUFXblMsR0FBWG1TLEVBQWdCVixLQUFoQlU7SUFDRDtFQUNGLENBTkQ5UjtFQU9BLE9BQU84UixNQUFQO0FBQ0Q7QUFFTSxTQUFTNU4sTUFBVCxDQUNMekgsTUFESyxFQUVMLEdBQUd5VixnQkFGRSxFQUdZO0VBQ2pCQSxnQkFBZ0IsQ0FBQzVWLE9BQWpCNFYsQ0FBMEJ6SCxZQUFELElBQWtCO0lBQ3pDNEcsS0FBSyxDQUFDYyxJQUFOZCxDQUFXNUcsWUFBWSxDQUFDeEssSUFBYndLLEVBQVg0RyxFQUFnQy9VLE9BQWhDK1UsQ0FBeUMxUixHQUFELElBQVNsRCxNQUFNLENBQUNNLE1BQVBOLENBQWNrRCxHQUFkbEQsQ0FBakQ0VTtJQUNBNUcsWUFBWSxDQUFDbk8sT0FBYm1PLENBQXFCLENBQUMyRyxLQUFELEVBQVF6UixHQUFSLEtBQWdCbEQsTUFBTSxDQUFDd1YsTUFBUHhWLENBQWNrRCxHQUFkbEQsRUFBbUIyVSxLQUFuQjNVLENBQXJDZ087RUFDRCxDQUhEeUg7RUFJQSxPQUFPelYsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFDQTs7Ozs7O0FBR0EsTUFBTTJWLGtCQUFrQixHQUFHLHdCQUFVLElBQVYsQ0FBM0I7QUFFZSxTQUFTQyxlQUFULENBQ2JwSyxNQURhLEVBRWJrQyxLQUZhLEVBR2IvRSxRQUhhLEVBSWJrRixRQUphLEVBS2IvQyxLQUxhLEVBTWJyQixXQU5hLEVBT2I7RUFDQSxJQUFJLENBQUNpRSxLQUFLLENBQUNvRCxRQUFOcEQsQ0FBZWxDLE1BQWZrQyxDQUFMLEVBQTZCO0lBQzNCLEtBQUssTUFBTW1JLE9BQVgsSUFBc0JoSSxRQUF0QixFQUFnQztNQUM5QixNQUFNNEYsT0FBTyxHQUFHa0Msa0JBQWtCLENBQUNFLE9BQU8sQ0FBQ0MsTUFBVCxDQUFsQztNQUNBLE1BQU1uQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ2pJLE1BQUQsQ0FBdEI7TUFFQSxJQUFJbUksTUFBSixFQUFZO1FBQ1YsSUFBSSxDQUFDa0MsT0FBTyxDQUFDOUIsV0FBYixFQUEwQjtVQUN4QjtVQUNBO1FBQ0Q7UUFDRCxNQUFNZ0MsT0FBTyxHQUFHLGlDQUNkRixPQUFPLENBQUM5QixXQURNLEVBRWRKLE1BRmMsRUFHZDdJLEtBSGMsRUFJZCxJQUpjLEVBS2QrSyxPQUFPLENBQUNsTixRQUFSa04sS0FBcUIsS0FBckJBLEdBQTZCLEVBQTdCQSxHQUFrQ2xOLFFBTHBCLENBQWhCO1FBT0E2QyxNQUFNLEdBQUd1SyxPQUFPLENBQUM5QixpQkFBUjhCLENBQTBCelIsUUFBbkNrSDtRQUNBakksTUFBTSxDQUFDa0UsTUFBUGxFLENBQWN1SCxLQUFkdkgsRUFBcUJ3UyxPQUFPLENBQUM5QixpQkFBUjhCLENBQTBCakwsS0FBL0N2SDtRQUVBLElBQUltSyxLQUFLLENBQUNvRCxRQUFOcEQsQ0FBZWxDLE1BQWZrQyxDQUFKLEVBQTRCO1VBQzFCO1VBQ0E7VUFDQTtRQUNELENBRUQ7UUFDQSxNQUFNbEosWUFBWSxHQUFHaUYsV0FBVyxDQUFDK0IsTUFBRCxDQUFoQztRQUVBLElBQUloSCxZQUFZLEtBQUtnSCxNQUFqQmhILElBQTJCa0osS0FBSyxDQUFDb0QsUUFBTnBELENBQWVsSixZQUFma0osQ0FBL0IsRUFBNkQ7VUFDM0Q7UUFDRDtNQUNGO0lBQ0Y7RUFDRjtFQUNELE9BQU9sQyxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pETSxTQUFTd0ssZUFBVCxDQUF5QjNILFVBQXpCLEVBQXVFO0VBQzVFLE1BQU07SUFBRTJDLEVBQUY7SUFBTXhDO0VBQU4sSUFBaUJILFVBQXZCO0VBQ0EsT0FBUS9KLFFBQUQsSUFBeUM7SUFDOUMsTUFBTWdLLFVBQVUsR0FBRzBDLEVBQUUsQ0FBQ2lGLElBQUhqRixDQUFRMU0sUUFBUjBNLENBQW5CO0lBQ0EsSUFBSSxDQUFDMUMsVUFBTCxFQUFpQjtNQUNmLE9BQU8sS0FBUDtJQUNEO0lBRUQsTUFBTTRFLE1BQU0sR0FBSXhFLEtBQUQsSUFBbUI7TUFDaEMsSUFBSTtRQUNGLE9BQU9rRixrQkFBa0IsQ0FBQ2xGLEtBQUQsQ0FBekI7TUFDRCxDQUFDLFFBQU9qTCxDQUFQLEVBQVU7UUFDVixNQUFNNUMsR0FBOEIsR0FBRyxJQUFJb0MsS0FBSixDQUNyQyx3QkFEcUMsQ0FBdkM7UUFHQXBDLEdBQUcsQ0FBQ2dULElBQUpoVCxHQUFXLGVBQVhBO1FBQ0EsTUFBTUEsR0FBTjtNQUNEO0lBQ0YsQ0FWRDtJQVdBLE1BQU04UyxNQUFrRCxHQUFHLEVBQTNEO0lBRUFwUSxNQUFNLENBQUNDLElBQVBELENBQVlpTCxNQUFaakwsRUFBb0IxRCxPQUFwQjBELENBQTZCMlMsUUFBRCxJQUFzQjtNQUNoRCxNQUFNQyxDQUFDLEdBQUczSCxNQUFNLENBQUMwSCxRQUFELENBQWhCO01BQ0EsTUFBTUUsQ0FBQyxHQUFHOUgsVUFBVSxDQUFDNkgsQ0FBQyxDQUFDRSxHQUFILENBQXBCO01BQ0EsSUFBSUQsQ0FBQyxLQUFLelcsU0FBVixFQUFxQjtRQUNuQmdVLE1BQU0sQ0FBQ3VDLFFBQUQsQ0FBTnZDLEdBQW1CLENBQUN5QyxDQUFDLENBQUM5VCxPQUFGOFQsQ0FBVSxHQUFWQSxDQUFELEdBQ2ZBLENBQUMsQ0FBQ2pHLEtBQUZpRyxDQUFRLEdBQVJBLEVBQWExTixHQUFiME4sQ0FBa0J0VyxLQUFELElBQVdvVCxNQUFNLENBQUNwVCxLQUFELENBQWxDc1csQ0FEZSxHQUVmRCxDQUFDLENBQUNHLE1BQUZILEdBQ0EsQ0FBQ2pELE1BQU0sQ0FBQ2tELENBQUQsQ0FBUCxDQURBRCxHQUVBakQsTUFBTSxDQUFDa0QsQ0FBRCxDQUpWekM7TUFLRDtJQUNGLENBVkRwUTtJQVdBLE9BQU9vUSxNQUFQO0VBQ0QsQ0EvQkQ7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3NDQzlCRDtBQUNBO0FBQ0EsU0FBUzRDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDO0VBQ2hDLE9BQU9BLEdBQUcsQ0FBQ3ZVLE9BQUp1VSxDQUFZLHNCQUFaQSxFQUFvQyxNQUFwQ0EsQ0FBUDtBQUNEO0FBRUQsU0FBU0MsY0FBVCxDQUF3Qi9ILEtBQXhCLEVBQXVDO0VBQ3JDLE1BQU1nSSxRQUFRLEdBQUdoSSxLQUFLLENBQUMzRixVQUFOMkYsQ0FBaUIsR0FBakJBLEtBQXlCQSxLQUFLLENBQUNoSixRQUFOZ0osQ0FBZSxHQUFmQSxDQUExQztFQUNBLElBQUlnSSxRQUFKLEVBQWM7SUFDWmhJLEtBQUssR0FBR0EsS0FBSyxDQUFDL0ksS0FBTitJLENBQVksQ0FBWkEsRUFBZSxDQUFDLENBQWhCQSxDQUFSQTtFQUNEO0VBQ0QsTUFBTTRILE1BQU0sR0FBRzVILEtBQUssQ0FBQzNGLFVBQU4yRixDQUFpQixLQUFqQkEsQ0FBZjtFQUNBLElBQUk0SCxNQUFKLEVBQVk7SUFDVjVILEtBQUssR0FBR0EsS0FBSyxDQUFDL0ksS0FBTitJLENBQVksQ0FBWkEsQ0FBUkE7RUFDRDtFQUNELE9BQU87SUFBRXhMLEdBQUcsRUFBRXdMLEtBQVA7SUFBYzRILE1BQWQ7SUFBc0JJO0VBQXRCLENBQVA7QUFDRDtBQUVNLFNBQVNDLGFBQVQsQ0FDTEMsZUFESyxFQU9MO0VBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUNELGVBQWUsQ0FBQzNVLE9BQWhCMlUsQ0FBd0IsS0FBeEJBLEVBQStCLEVBQS9CQSxLQUFzQyxHQUF2QyxFQUNkalIsS0FEYyxDQUNSLENBRFEsRUFFZHdLLEtBRmMsQ0FFUixHQUZRLENBQWpCO0VBSUEsTUFBTTNCLE1BQXNDLEdBQUcsRUFBL0M7RUFDQSxJQUFJc0ksVUFBVSxHQUFHLENBQWpCO0VBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FDaENuTyxHQUR3Qm1PLENBQ25CRyxPQUFELElBQWE7SUFDaEIsSUFBSUEsT0FBTyxDQUFDak8sVUFBUmlPLENBQW1CLEdBQW5CQSxLQUEyQkEsT0FBTyxDQUFDdFIsUUFBUnNSLENBQWlCLEdBQWpCQSxDQUEvQixFQUFzRDtNQUNwRCxNQUFNO1FBQUU5VCxHQUFGO1FBQU93VCxRQUFQO1FBQWlCSjtNQUFqQixJQUE0QkcsY0FBYyxDQUFDTyxPQUFPLENBQUNyUixLQUFScVIsQ0FBYyxDQUFkQSxFQUFpQixDQUFDLENBQWxCQSxDQUFELENBQWhEO01BQ0F4SSxNQUFNLENBQUN0TCxHQUFELENBQU5zTCxHQUFjO1FBQUU2SCxHQUFHLEVBQUVTLFVBQVUsRUFBakI7UUFBcUJSLE1BQXJCO1FBQTZCSTtNQUE3QixDQUFkbEk7TUFDQSxPQUFPOEgsTUFBTSxHQUFJSSxRQUFRLEdBQUcsYUFBSCxHQUFtQixRQUEvQixHQUEyQyxXQUF4RDtJQUNELENBSkQsTUFJTztNQUNMLE9BQVEsSUFBR0gsV0FBVyxDQUFDUyxPQUFELENBQVUsRUFBaEM7SUFDRDtFQUNGLENBVHdCSCxFQVV4QmxJLElBVndCa0ksQ0FVbkIsRUFWbUJBLENBQTNCLENBWUE7RUFDQTtFQUNBLFVBQW1DO0lBQ2pDLElBQUlJLGdCQUFnQixHQUFHLEVBQXZCO0lBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBekIsQ0FFQTtJQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNO01BQzVCLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxrQkFBcEIsRUFBd0NHLENBQUMsRUFBekMsRUFBNkM7UUFDM0NELFFBQVEsSUFBSWhGLE1BQU0sQ0FBQ2tGLFlBQVBsRixDQUFvQjZFLGdCQUFwQjdFLENBQVpnRjtRQUNBSCxnQkFBZ0I7UUFFaEIsSUFBSUEsZ0JBQWdCLEdBQUcsR0FBdkIsRUFBNEI7VUFDMUJDLGtCQUFrQjtVQUNsQkQsZ0JBQWdCLEdBQUcsRUFBbkJBO1FBQ0Q7TUFDRjtNQUNELE9BQU9HLFFBQVA7SUFDRCxDQWJEO0lBZUEsTUFBTUcsU0FBc0MsR0FBRyxFQUEvQztJQUVBLElBQUlDLHVCQUF1QixHQUFHWCxRQUFRLENBQ25Dbk8sR0FEMkJtTyxDQUN0QkcsT0FBRCxJQUFhO01BQ2hCLElBQUlBLE9BQU8sQ0FBQ2pPLFVBQVJpTyxDQUFtQixHQUFuQkEsS0FBMkJBLE9BQU8sQ0FBQ3RSLFFBQVJzUixDQUFpQixHQUFqQkEsQ0FBL0IsRUFBc0Q7UUFDcEQsTUFBTTtVQUFFOVQsR0FBRjtVQUFPd1QsUUFBUDtVQUFpQko7UUFBakIsSUFBNEJHLGNBQWMsQ0FBQ08sT0FBTyxDQUFDclIsS0FBUnFSLENBQWMsQ0FBZEEsRUFBaUIsQ0FBQyxDQUFsQkEsQ0FBRCxDQUFoRCxDQUNBO1FBQ0E7UUFDQSxJQUFJUyxVQUFVLEdBQUd2VSxHQUFHLENBQUNqQixPQUFKaUIsQ0FBWSxLQUFaQSxFQUFtQixFQUFuQkEsQ0FBakI7UUFDQSxJQUFJd1UsVUFBVSxHQUFHLEtBQWpCLENBRUE7UUFDQTtRQUNBLElBQUlELFVBQVUsQ0FBQ3ZPLE1BQVh1TyxLQUFzQixDQUF0QkEsSUFBMkJBLFVBQVUsQ0FBQ3ZPLE1BQVh1TyxHQUFvQixFQUFuRCxFQUF1RDtVQUNyREMsVUFBVSxHQUFHLElBQWJBO1FBQ0Q7UUFDRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSCxVQUFVLENBQUNqRixNQUFYaUYsQ0FBa0IsQ0FBbEJBLEVBQXFCLENBQXJCQSxDQUFELENBQVQsQ0FBVixFQUErQztVQUM3Q0MsVUFBVSxHQUFHLElBQWJBO1FBQ0Q7UUFFRCxJQUFJQSxVQUFKLEVBQWdCO1VBQ2RELFVBQVUsR0FBR04sZUFBZSxFQUE1Qk07UUFDRDtRQUVERixTQUFTLENBQUNFLFVBQUQsQ0FBVEYsR0FBd0JyVSxHQUF4QnFVO1FBQ0EsT0FBT2pCLE1BQU0sR0FDVEksUUFBUSxHQUNMLFVBQVNlLFVBQVcsU0FEZixHQUVMLE9BQU1BLFVBQVcsT0FIWCxHQUlSLE9BQU1BLFVBQVcsVUFKdEI7TUFLRCxDQTFCRCxNQTBCTztRQUNMLE9BQVEsSUFBR2xCLFdBQVcsQ0FBQ1MsT0FBRCxDQUFVLEVBQWhDO01BQ0Q7SUFDRixDQS9CMkJILEVBZ0MzQmxJLElBaEMyQmtJLENBZ0N0QixFQWhDc0JBLENBQTlCO0lBa0NBLE9BQU87TUFDTDdGLEVBQUUsRUFBRSxJQUFJNkcsTUFBSixDQUFZLElBQUdkLGtCQUFtQixTQUFsQyxDQURDO01BRUx2SSxNQUZLO01BR0wrSSxTQUhLO01BSUxPLFVBQVUsRUFBRyxJQUFHTix1QkFBd0I7SUFKbkMsQ0FBUDtFQU1EO0VBRUQsT0FBTztJQUNMeEcsRUFBRSxFQUFFLElBQUk2RyxNQUFKLENBQVksSUFBR2Qsa0JBQW1CLFNBQWxDLENBREM7SUFFTHZJO0VBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhELDZJQWtRQTs7O0FBR08sU0FBU3VKLFFBQVQsQ0FDTHhHLEVBREssRUFFRjtFQUNILElBQUl5RyxJQUFJLEdBQUcsS0FBWDtFQUNBLElBQUkzQyxNQUFKO0VBRUEsT0FBUSxDQUFDLEdBQUdyUyxJQUFKLEtBQW9CO0lBQzFCLElBQUksQ0FBQ2dWLElBQUwsRUFBVztNQUNUQSxJQUFJLEdBQUcsSUFBUEE7TUFDQTNDLE1BQU0sR0FBRzlELEVBQUUsQ0FBQyxHQUFHdk8sSUFBSixDQUFYcVM7SUFDRDtJQUNELE9BQU9BLE1BQVA7RUFDRCxDQU5EO0FBT0Q7QUFFTSxTQUFTNEMsaUJBQVQsR0FBNkI7RUFDbEMsTUFBTTtJQUFFakcsUUFBRjtJQUFZRCxRQUFaO0lBQXNCSTtFQUF0QixJQUErQjNTLE1BQU0sQ0FBQ3FOLFFBQTVDO0VBQ0EsT0FBUSxHQUFFbUYsUUFBUyxLQUFJRCxRQUFTLEdBQUVJLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDRDtBQUVNLFNBQVMrRixNQUFULEdBQWtCO0VBQ3ZCLE1BQU07SUFBRWhYO0VBQUYsSUFBVzFCLE1BQU0sQ0FBQ3FOLFFBQXhCO0VBQ0EsTUFBTXJELE1BQU0sR0FBR3lPLGlCQUFpQixFQUFoQztFQUNBLE9BQU8vVyxJQUFJLENBQUMyRixTQUFMM0YsQ0FBZXNJLE1BQU0sQ0FBQ04sTUFBdEJoSSxDQUFQO0FBQ0Q7QUFFTSxTQUFTaVgsY0FBVCxDQUEyQmhOLFNBQTNCLEVBQXdEO0VBQzdELE9BQU8sT0FBT0EsU0FBUCxLQUFxQixRQUFyQixHQUNIQSxTQURHLEdBRUhBLFNBQVMsQ0FBQ25ELFdBQVZtRCxJQUF5QkEsU0FBUyxDQUFDcEQsSUFBbkNvRCxJQUEyQyxTQUYvQztBQUdEO0FBRU0sU0FBU2lOLFNBQVQsQ0FBbUI5TixHQUFuQixFQUF3QztFQUM3QyxPQUFPQSxHQUFHLENBQUMrTixRQUFKL04sSUFBZ0JBLEdBQUcsQ0FBQ2dPLFdBQTNCO0FBQ0Q7QUFFTSxlQUFlQyxtQkFBZixDQUlMdE4sR0FKSyxFQUk2QndHLEdBSjdCLEVBSWtEO0VBQ3ZELFVBQTJDO0lBQUE7SUFDekMsc0JBQUl4RyxHQUFHLENBQUN1TixTQUFSLG1EQUFJdk4sZUFBZXBELGVBQW5CLEVBQW9DO01BQ2xDLE1BQU1kLE9BQU8sR0FBSSxJQUFHb1IsY0FBYyxDQUNoQ2xOLEdBRGdDLENBRWhDLDBKQUZGO01BR0EsTUFBTSxJQUFJaEksS0FBSixDQUFVOEQsT0FBVixDQUFOO0lBQ0Q7RUFDRixDQUNEO0VBQ0EsTUFBTXVELEdBQUcsR0FBR21ILEdBQUcsQ0FBQ25ILEdBQUptSCxJQUFZQSxHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQ0EsR0FBSkEsQ0FBUW5ILEdBQTNDO0VBRUEsSUFBSSxDQUFDVyxHQUFHLENBQUNwRCxlQUFULEVBQTBCO0lBQ3hCLElBQUk0SixHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQ3RHLFNBQW5CLEVBQThCO01BQzVCO01BQ0EsT0FBTztRQUNMc04sU0FBUyxFQUFFLE1BQU1GLG1CQUFtQixDQUFDOUcsR0FBRyxDQUFDdEcsU0FBTCxFQUFnQnNHLEdBQUcsQ0FBQ0EsR0FBcEI7TUFEL0IsQ0FBUDtJQUdEO0lBQ0QsT0FBTyxFQUFQO0VBQ0Q7RUFFRCxNQUFNM08sS0FBSyxHQUFHLE1BQU1tSSxHQUFHLENBQUNwRCxlQUFKb0QsQ0FBb0J3RyxHQUFwQnhHLENBQXBCO0VBRUEsSUFBSVgsR0FBRyxJQUFJOE4sU0FBUyxDQUFDOU4sR0FBRCxDQUFwQixFQUEyQjtJQUN6QixPQUFPeEgsS0FBUDtFQUNEO0VBRUQsSUFBSSxDQUFDQSxLQUFMLEVBQVk7SUFDVixNQUFNaUUsT0FBTyxHQUFJLElBQUdvUixjQUFjLENBQ2hDbE4sR0FEZ0MsQ0FFaEMsK0RBQThEbkksS0FBTSxZQUZ0RTtJQUdBLE1BQU0sSUFBSUcsS0FBSixDQUFVOEQsT0FBVixDQUFOO0VBQ0Q7RUFFRCxVQUEyQztJQUN6QyxJQUFJeEQsTUFBTSxDQUFDQyxJQUFQRCxDQUFZVCxLQUFaUyxFQUFtQjJGLE1BQW5CM0YsS0FBOEIsQ0FBOUJBLElBQW1DLENBQUNrTyxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO01BQy9DM1EsT0FBTyxDQUFDbUQsSUFBUm5ELENBQ0csR0FBRXFYLGNBQWMsQ0FDZmxOLEdBRGUsQ0FFZiw4S0FISm5LO0lBS0Q7RUFDRjtFQUVELE9BQU9nQyxLQUFQO0FBQ0Q7QUFFTSxNQUFNNFYsYUFBYSxHQUFHLENBQzNCLE1BRDJCLEVBRTNCLE1BRjJCLEVBRzNCLE1BSDJCLEVBSTNCLFVBSjJCLEVBSzNCLE1BTDJCLEVBTTNCLE1BTjJCLEVBTzNCLFVBUDJCLEVBUTNCLE1BUjJCLEVBUzNCLFVBVDJCLEVBVTNCLE9BVjJCLEVBVzNCLFFBWDJCLEVBWTNCLFNBWjJCLENBQXRCOztBQWVBLFNBQVNDLG9CQUFULENBQThCdlAsR0FBOUIsRUFBc0Q7RUFDM0QsVUFBNEM7SUFDMUMsSUFBSUEsR0FBRyxLQUFLLElBQVJBLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztNQUMzQzdGLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWTZGLEdBQVo3RixFQUFpQjFELE9BQWpCMEQsQ0FBMEJMLEdBQUQsSUFBUztRQUNoQyxJQUFJd1YsYUFBYSxDQUFDcFcsT0FBZG9XLENBQXNCeFYsR0FBdEJ3VixNQUErQixDQUFDLENBQXBDLEVBQXVDO1VBQ3JDNVgsT0FBTyxDQUFDbUQsSUFBUm5ELENBQ0cscURBQW9Eb0MsR0FBSSxFQUQzRHBDO1FBR0Q7TUFDRixDQU5EeUM7SUFPRDtFQUNGO0VBRUQsT0FBTywwQkFBVTZGLEdBQVYsQ0FBUDtBQUNEO0FBRU0sTUFBTXdQLEVBQUUsR0FBRyxPQUFPekwsV0FBUCxLQUF1QixXQUFsQzs7QUFDQSxNQUFNRCxFQUFFLEdBQ2IwTCxFQUFFLElBQ0YsT0FBT3pMLFdBQVcsQ0FBQ0MsSUFBbkIsS0FBNEIsVUFENUJ3TCxJQUVBLE9BQU96TCxXQUFXLENBQUMwTCxPQUFuQixLQUErQixVQUgxQjs7Ozs7Ozs7Ozs7OztBQ2pZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7OztBQ0E3QyxvRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsNDZFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNC9EOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsby9EOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHhCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdzVFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsb3REOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2xGOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ3FCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsdzlFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZzFEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNDVKOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsb3hJOzs7Ozs7Ozs7OztBQ0FqQyxtRjs7Ozs7Ozs7Ozs7QUNBQSxxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDdUI7QUFRL0I7QUFFSCxTQUFTQyxTQUFTQSxDQUFBQyxJQUFBLEVBQXNCO0VBQUEsSUFBckI7TUFBRUM7SUFBZ0IsQ0FBQyxHQUFBRCxJQUFBO0lBQVBqVyxLQUFLLEdBQUFtVyx3QkFBQSxDQUFBRixJQUFBO0VBQ2pELE9BQ0VHLEtBQUEsQ0FBQ0MsNkRBQWEsRUFBQUMsUUFBQTtJQUNaQyxZQUFZLEVBQUVDLCtEQUFlLENBQUNDLDhDQUFNLEVBQUVDLG9EQUFZO0VBQUUsR0FDaEQxVyxLQUFLO0lBQUEyVyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsSUFFUixDQUFDO0lBQUVDLFdBQVc7SUFBRUM7RUFBZ0IsQ0FBQyxLQUNoQ2QsS0FBQSxDQUFBcFYsNENBQUEsQ0FBQW1XLFFBQUEsUUFDR2pCLEtBQUssQ0FBQ3RRLEdBQUcsQ0FBQyxDQUFDNk0sSUFBSSxFQUFFMkUsS0FBSyxLQUNyQmhCLEtBQUEsQ0FBQ2lCLHFEQUFhO0lBQ1pqWCxHQUFHLEVBQUVxUyxJQUFJLENBQUM2RSxLQUFNO0lBQ2hCQyxNQUFNLEVBQUVOLFdBQVcsQ0FBQ2pKLFFBQVEsQ0FBQ29KLEtBQUssQ0FBRTtJQUFBVCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFcENaLEtBQUEsQ0FBQ29CLHVEQUFlO0lBQUNwVixPQUFPLEVBQUVBLENBQUEsS0FBTThVLGVBQWUsQ0FBQ0UsS0FBSyxDQUFFO0lBQUFULE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNyRFosS0FBQTtJQUNFcUIsU0FBUyxFQUFFUixXQUFXLENBQUNqSixRQUFRLENBQUNvSixLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUztJQUFBVCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDdEQsQ0FBQyxFQUNQdkUsSUFBSSxDQUFDNkUsS0FDUyxDQUFDLEVBQ2xCbEIsS0FBQSxDQUFDc0IseURBQWlCO0lBQUNILE1BQU0sRUFBRU4sV0FBVyxDQUFDakosUUFBUSxDQUFDb0osS0FBSyxDQUFFO0lBQUFULE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNwRHZFLElBQUksQ0FBQ2tGLFFBQ1csQ0FDTixDQUNoQixDQUNELENBRVMsQ0FBQztBQUVwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkMwQjtBQUUxQixNQUFNdEIsYUFBYSxTQUFTclYsNENBQUssQ0FBQ3FILFNBQVMsQ0FBQztFQUFBTixZQUFBLEdBQUE3SCxJQUFBO0lBQUEsU0FBQUEsSUFBQTtJQUFBMFgsZUFBQSxnQkFLbEM7TUFBRVgsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUFFLENBQUM7SUFBQVcsZUFBQSwwQkF5QlRSLEtBQUssSUFBSztNQUMzQixJQUFJLENBQUNTLGdCQUFnQixDQUFFeE8sS0FBSyxJQUFLO1FBQy9CLE1BQU15TyxPQUFPLEdBQUd6TyxLQUFLLENBQUM0TixXQUFXLENBQUNqSixRQUFRLENBQUNvSixLQUFLLENBQUM7UUFDakQsT0FBTztVQUNMNVUsSUFBSSxFQUFFc1YsT0FBTyxHQUFHLFNBQVMsR0FBRyxTQUFTO1VBQ3JDYixXQUFXLEVBQUVhLE9BQU8sR0FDaEJ6TyxLQUFLLENBQUM0TixXQUFXLENBQUN0TCxNQUFNLENBQUU0SSxDQUFDLElBQUtBLENBQUMsS0FBSzZDLEtBQUssQ0FBQyxHQUM1QyxDQUFDLEdBQUcvTixLQUFLLENBQUM0TixXQUFXLEVBQUVHLEtBQUs7UUFDbEMsQ0FBQztNQUNILENBQUMsQ0FBQztNQUNGcFosT0FBTyxDQUFDK1osR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0VBQUE7RUFuQ0RDLFFBQVFBLENBQUMzTyxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLEVBQUU7SUFDM0IsT0FBTztNQUNMNE4sV0FBVyxFQUNULElBQUksQ0FBQ2pYLEtBQUssQ0FBQ2lYLFdBQVcsS0FBS3BhLFNBQVMsR0FDaEN3TSxLQUFLLENBQUM0TixXQUFXLEdBQ2pCLElBQUksQ0FBQ2pYLEtBQUssQ0FBQ2lYO0lBQ25CLENBQUM7RUFDSDtFQUNBWSxnQkFBZ0JBLENBQUNJLE9BQU8sRUFBRUMsUUFBUSxHQUFHQSxDQUFBLEtBQU0sQ0FBQyxDQUFDLEVBQUU7SUFDN0MsSUFBSUMsVUFBVTtJQUNkLElBQUksQ0FBQ0MsUUFBUSxDQUNWL08sS0FBSyxJQUFLO01BQ1QsTUFBTWdQLFdBQVcsR0FBRyxJQUFJLENBQUNMLFFBQVEsQ0FBQzNPLEtBQUssQ0FBQztNQUN4QyxNQUFNaVAsYUFBYSxHQUNqQixPQUFPTCxPQUFPLEtBQUssVUFBVSxHQUFHQSxPQUFPLENBQUNJLFdBQVcsQ0FBQyxHQUFHSixPQUFPO01BQ2hFRSxVQUFVLEdBQUcsSUFBSSxDQUFDblksS0FBSyxDQUFDdVcsWUFBWSxDQUFDOEIsV0FBVyxFQUFFQyxhQUFhLENBQUM7TUFDaEUsT0FBT0gsVUFBVTtJQUNuQixDQUFDLEVBQ0QsTUFBTTtNQUNKLElBQUksQ0FBQ25ZLEtBQUssQ0FBQ3VZLGFBQWEsQ0FBQ0osVUFBVSxDQUFDO01BQ3BDRCxRQUFRLENBQUMsQ0FBQztJQUNaLENBQ0YsQ0FBQztFQUNIO0VBYUFNLE1BQU1BLENBQUEsRUFBRztJQUNQLE9BQU8sSUFBSSxDQUFDeFksS0FBSyxDQUFDOEIsUUFBUSxDQUFDO01BQ3pCbVYsV0FBVyxFQUFFLElBQUksQ0FBQ2UsUUFBUSxDQUFDLENBQUMsQ0FBQ2YsV0FBVztNQUN4Q0MsZUFBZSxFQUFFLElBQUksQ0FBQ0E7SUFDeEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRjtBQUFDVSxlQUFBLENBaERLdkIsYUFBYSxrQkFDSztFQUNwQkUsWUFBWSxFQUFFQSxDQUFDbE4sS0FBSyxFQUFFNE8sT0FBTyxLQUFLQSxPQUFPO0VBQ3pDTSxhQUFhLEVBQUVBLENBQUEsS0FBTSxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSDtBQUMrQjtBQUNRO0FBRWhDLE1BQU1mLGVBQWUsR0FBR3ZCLElBQUE7RUFBQSxJQUFDO01BQUVuVTtJQUFrQixDQUFDLEdBQUFtVSxJQUFBO0lBQU53QyxJQUFJLEdBQUF0Qyx3QkFBQSxDQUFBRixJQUFBO0VBQUEsT0FDakR5QyxvREFBQSxRQUFBcEMsUUFBQTtJQUFLcUMsRUFBRSxFQUFFQyxNQUFNLENBQUNDO0VBQWEsR0FBS0osSUFBSTtJQUFBOUIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBQ25DbFYsUUFDRSxDQUFDO0FBQUEsQ0FDUDtBQUVELE1BQU04VyxNQUFNLEdBQUc7RUFDYkMsWUFBWSxFQUFFO0lBQ1pDLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLEtBQUssRUFBRSxrQkFBa0I7SUFDekJDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQzlCQyxVQUFVLEVBQUUsR0FBRztJQUNmQyxhQUFhLEVBQUUsQ0FBQyxHQUFHO0lBQ25CQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUM3QkMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN0QixVQUFVLEVBQUU7TUFDVkYsUUFBUSxFQUFFLFVBQVU7TUFDcEJHLEtBQUssRUFBRSxFQUFFO01BQ1RDLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLFlBQVksRUFBRSxLQUFLO01BQ25CQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztNQUNuQkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztNQUNqQixjQUFjLEVBQUU7UUFDZEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNELFdBQVcsRUFBRTtRQUNYVCxRQUFRLEVBQUUsVUFBVTtRQUNwQlUsT0FBTyxFQUFFLElBQUk7UUFDYk4sTUFBTSxFQUFFLEtBQUs7UUFDYkQsS0FBSyxFQUFFLEVBQUU7UUFDVEcsZUFBZSxFQUFFLE9BQU87UUFDeEJDLEdBQUcsRUFBRSxLQUFLO1FBQ1ZDLElBQUksRUFBRSxLQUFLO1FBQ1hHLFNBQVMsRUFBRTtNQUNiLENBQUM7TUFDRCxVQUFVLEVBQUU7UUFDVlgsUUFBUSxFQUFFLFVBQVU7UUFDcEJVLE9BQU8sRUFBRSxJQUFJO1FBQ2JOLE1BQU0sRUFBRSxFQUFFO1FBQ1ZELEtBQUssRUFBRSxLQUFLO1FBQ1pHLGVBQWUsRUFBRSxPQUFPO1FBQ3hCQyxHQUFHLEVBQUUsS0FBSztRQUNWQyxJQUFJLEVBQUUsS0FBSztRQUNYRyxTQUFTLEVBQUUsd0JBQXdCO1FBQ25DQyxVQUFVLEVBQUU7TUFDZDtJQUNGO0VBQ0Y7QUFDRixDQUFDO0FBRUQsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLElBQUksRUFBRTtJQUNKVixNQUFNLEVBQUUsTUFBTTtJQUNkVyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUFFWixNQUFNLEVBQUUsQ0FBQztJQUFFVyxTQUFTLEVBQUU7RUFBRTtBQUNwQyxDQUFDO0FBQ00sU0FBUzFDLGlCQUFpQkEsQ0FBQTRDLEtBQUEsRUFBdUI7RUFBQSxJQUF0QjtNQUFFL0M7SUFBaUIsQ0FBQyxHQUFBK0MsS0FBQTtJQUFQdGEsS0FBSyxHQUFBbVcsd0JBQUEsQ0FBQW1FLEtBQUE7RUFDbEQsT0FDRTVCLG9EQUFBLENBQUM2QixvREFBTSxDQUFDQyxHQUFHLEVBQUFsRSxRQUFBO0lBQ1RtRSxPQUFPLEVBQUMsUUFBUTtJQUNoQkMsT0FBTyxFQUFFbkQsTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFTO0lBQ3BDMkMsUUFBUSxFQUFFQSxRQUFTO0lBQ25CdkIsRUFBRSxFQUFFO01BQ0ZnQyxTQUFTLEVBQUUsUUFBUTtNQUNuQnpCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDaEJLLFVBQVUsRUFBRSxDQUFDO01BQ2JSLEtBQUssRUFBRSxTQUFTO01BQ2hCTyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO01BQzdCLFNBQVMsRUFBRTtRQUNUc0IsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDdEI7SUFDRjtFQUFFLEdBQ0U1YSxLQUFLO0lBQUEyVyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFDVixDQUFDO0FBRU47QUFFTyxNQUFNSyxhQUFhLEdBQUd3RCxLQUFBO0VBQUEsSUFBQztNQUFFdEQsTUFBTTtNQUFFelY7SUFBa0IsQ0FBQyxHQUFBK1ksS0FBQTtJQUFOcEMsSUFBSSxHQUFBdEMsd0JBQUEsQ0FBQTBFLEtBQUE7RUFBQSxPQUN2RG5DLG9EQUFBLFFBQUFwQyxRQUFBO0lBQ0V3RSxHQUFHLEVBQUU7TUFDSEMsUUFBUSxFQUFFLFFBQVE7TUFDbEJDLE9BQU8sRUFBRSxRQUFRO01BQ2pCQyxZQUFZLEVBQUUsbUJBQW1CO01BQ2pDLGNBQWMsRUFBRTtRQUNkQSxZQUFZLEVBQUU7TUFDaEI7SUFDRjtFQUFFLEdBQ0V4QyxJQUFJO0lBQUE5QixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsSUFFUGxWLFFBQ0UsQ0FBQztBQUFBLENBQ1A7QUFFTSxNQUFNNFUsWUFBWSxHQUFHQSxDQUFDck4sS0FBSyxFQUFFNE8sT0FBTyxLQUN6Q0EsT0FBTyxDQUFDelYsSUFBSSxLQUFLLFNBQVMsSUFBSTZHLEtBQUssQ0FBQzROLFdBQVcsQ0FBQzdRLE1BQU0sR0FBRyxDQUFDLEdBQUE4VSxhQUFBLENBQUFBLGFBQUEsS0FDakRqRCxPQUFPO0VBQUVoQixXQUFXLEVBQUU1TixLQUFLLENBQUM0TjtBQUFXLEtBQzVDZ0IsT0FBTztBQUVOLE1BQU14QixNQUFNLEdBQUdBLENBQUNwTixLQUFLLEVBQUU0TyxPQUFPLEtBQ25DQSxPQUFPLENBQUN6VixJQUFJLEtBQUssU0FBUyxHQUFBMFksYUFBQSxDQUFBQSxhQUFBLEtBQ2pCakQsT0FBTztFQUFFaEIsV0FBVyxFQUFFZ0IsT0FBTyxDQUFDaEIsV0FBVyxDQUFDcFUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUFDLEtBQ3hEb1YsT0FBTztBQUVOLE1BQU16QixlQUFlLEdBQUdBLENBQUMsR0FBRzJFLFFBQVEsS0FBSyxDQUFDOVIsS0FBSyxFQUFFNE8sT0FBTyxLQUM3RGtELFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxLQUFLQSxPQUFPLENBQUNqUyxLQUFLLEVBQUVnUyxHQUFHLENBQUMsRUFBRXBELE9BQU8sQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhqRTtBQUMwQztBQUNWO0FBRWhDLE1BQU1zRCxPQUFPLEdBQUdBLENBQUM7RUFBRUM7QUFBUSxDQUFDLEtBQUs7RUFDL0IsT0FDRTlDLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUM4QyxXQUFZO0lBQUEvRSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUIwQixvREFBQSxDQUFDaUQsNkNBQUk7SUFBQ3RkLEVBQUUsRUFBQyxHQUFHO0lBQUNzYSxFQUFFLEVBQUVDLE1BQU0sQ0FBQy9HLEtBQU07SUFBQytKLEtBQUssRUFBRTtNQUFFN0MsS0FBSyxFQUFFeUMsT0FBTyxhQUFQQSxPQUFPLHVCQUFQQSxPQUFPLENBQUV6QztJQUFNLENBQUU7SUFBQXBDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3RHdFLE9BQU8sQ0FBQzNKLEtBQ0wsQ0FBQyxFQUNQNkcsb0RBQUEsQ0FBQ2lELDZDQUFJO0lBQUN0ZCxFQUFFLEVBQUMsR0FBRztJQUFDc2EsRUFBRSxFQUFFQyxNQUFNLENBQUN0QixLQUFNO0lBQUFYLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQndFLE9BQU8sQ0FBQ2xFLEtBQ0wsQ0FDSCxDQUFDO0FBRVYsQ0FBQztBQUVjaUUsc0VBQU8sRUFBQztBQUV2QixNQUFNM0MsTUFBTSxHQUFHO0VBQ2I4QyxXQUFXLEVBQUU7SUFDWC9CLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCa0MsU0FBUyxFQUFFLHdDQUF3QztJQUNuRG5DLFlBQVksRUFBRSxFQUFFO0lBQ2hCWixPQUFPLEVBQUUsTUFBTTtJQUNmZ0QsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLGNBQWMsRUFBRSxRQUFRO0lBQ3hCO0lBQ0FDLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCaEIsT0FBTyxFQUFFLENBQ1AsT0FBTyxFQUNQLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxDQUNUO0lBQ0RpQixTQUFTLEVBQUUsUUFBUTtJQUNuQkMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQzlDMUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztFQUNwRCxDQUFDO0VBQ0QzSCxLQUFLLEVBQUU7SUFDTHNILFVBQVUsRUFBRSxHQUFHO0lBQ2ZELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0Q0ssVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QkgsYUFBYSxFQUFFO0VBQ2pCLENBQUM7RUFDRDlCLEtBQUssRUFBRTtJQUNMNEIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUNsREssVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUN4QkgsYUFBYSxFQUFFLFFBQVE7SUFDdkJMLEtBQUssRUFBRSxTQUFTO0lBQ2hCb0QsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUNuQnBELEtBQUssRUFBRXFELHFEQUFJLENBQUMsU0FBUyxFQUFFLEdBQUc7RUFDNUI7QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEREO0FBQzBEO0FBRTFELE1BQU1DLGVBQWUsR0FBR3BHLElBQUEsSUFBd0I7RUFBQSxJQUF2QjtNQUFFaEo7SUFBZSxDQUFDLEdBQUFnSixJQUFBO0lBQVBqVyxLQUFLLEdBQUFtVyx3QkFBQSxDQUFBRixJQUFBO0VBQ3ZDLE9BQ0V5QyxvREFBQSxDQUFDK0MsNENBQUcsRUFBQW5GLFFBQUE7SUFBQ3FDLEVBQUUsRUFBRUMsTUFBTSxDQUFDNEM7RUFBUSxHQUFLeGIsS0FBSztJQUFBMlcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBQ2hDMEIsb0RBQUE7SUFBQS9CLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNFMEIsb0RBQUEsQ0FBQzRELDhDQUFLO0lBQUNDLEdBQUcsRUFBRXRQLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFdVAsSUFBSztJQUFDQyxHQUFHLEVBQUV4UCxJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRXFLLEtBQU07SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDckMsQ0FBQyxFQUNUMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUE5RSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRjBCLG9EQUFBLENBQUNnRSxnREFBTztJQUFDcmUsRUFBRSxFQUFDLElBQUk7SUFBQXNZLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFL0osSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUVxSyxLQUFlLENBQUMsRUFDeENvQixvREFBQSxDQUFDaUQsNkNBQUk7SUFBQ3RkLEVBQUUsRUFBQyxHQUFHO0lBQUFzWSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRS9KLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFMFAsV0FBa0IsQ0FDbkMsQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVjTiw4RUFBZSxFQUFDO0FBRS9CLE1BQU16RCxNQUFNLEdBQUc7RUFDYjRDLE9BQU8sRUFBRTtJQUNQUyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQzNEVyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDO0lBQ3RDQyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsTUFBTSxFQUFFO01BQ05uRCxlQUFlLEVBQUUsT0FBTztNQUN4QmtDLFNBQVMsRUFBRSxxQ0FBcUM7TUFDaERwQyxNQUFNLEVBQUUsTUFBTTtNQUNkb0QsTUFBTSxFQUFFLENBQ04sYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLFVBQVUsQ0FDWDtNQUNEckQsS0FBSyxFQUFFLE1BQU07TUFDYlYsT0FBTyxFQUFFLE1BQU07TUFDZmdELFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsUUFBUTtNQUN4QnJDLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBQ0RxRCxFQUFFLEVBQUU7TUFDRjdELFFBQVEsRUFBRSxNQUFNO01BQ2hCSyxVQUFVLEVBQUUsSUFBSTtNQUNoQlIsS0FBSyxFQUFFLFNBQVM7TUFDaEJpRSxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNENWIsQ0FBQyxFQUFFO01BQ0Q4WCxRQUFRLEVBQUUsRUFBRTtNQUNaSyxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7TUFDakNSLEtBQUssRUFBRTtJQUNUO0VBQ0Y7QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckREO0FBQzZDO0FBQ047QUFDUDtBQUVoQyxNQUFNa0UsWUFBWSxHQUFHQSxDQUFDO0VBQUUzRixLQUFLO0VBQUVwQjtBQUFNLENBQUMsS0FBSztFQUN6QyxPQUNFd0Msb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ3NFLFlBQWE7SUFBQXZHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQjBCLG9EQUFBLENBQUNnRSxnREFBTztJQUFDcmUsRUFBRSxFQUFDLElBQUk7SUFBQXNZLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFTSxLQUFlLENBQUMsRUFDbENvQixvREFBQTtJQUFBL0IsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0dkLEtBQUssQ0FBQ3RRLEdBQUcsQ0FBQyxDQUFDO0lBQUVqRCxJQUFJO0lBQUV3YTtFQUFNLENBQUMsRUFBRTVJLENBQUMsS0FDNUJtRSxvREFBQTtJQUFJdFksR0FBRyxFQUFFbVUsQ0FBRTtJQUFBb0MsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1QwQixvREFBQSxDQUFDM1ksb0RBQUk7SUFBQzRDLElBQUksRUFBRUEsSUFBSztJQUFDdkMsR0FBRyxFQUFFbVUsQ0FBRTtJQUFDNEksS0FBSyxFQUFFQSxLQUFNO0lBQUNDLE9BQU8sRUFBQyxRQUFRO0lBQUF6RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUN4RCxDQUNMLENBQ0MsQ0FDRCxDQUFDO0FBRVYsQ0FBQztBQUVjaUcsMkVBQVksRUFBQztBQUU1QixNQUFNckUsTUFBTSxHQUFHO0VBQ2JzRSxZQUFZLEVBQUU7SUFDWkgsRUFBRSxFQUFFO01BQ0ZoRSxLQUFLLEVBQUUsU0FBUztNQUNoQkcsUUFBUSxFQUFFLE1BQU07TUFDaEJDLFVBQVUsRUFBRSxHQUFHO01BQ2ZJLFVBQVUsRUFBRSxJQUFJO01BQ2hCSCxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNEaUUsRUFBRSxFQUFFO01BQ0ZDLFNBQVMsRUFBRSxNQUFNO01BQ2pCVCxNQUFNLEVBQUUsVUFBVTtNQUNsQjdCLE9BQU8sRUFBRSxDQUFDO01BQ1Z1QyxDQUFDLEVBQUU7UUFDRHhFLEtBQUssRUFBRXFELHFEQUFJLENBQUMsU0FBUyxFQUFFLEdBQUc7TUFDNUI7SUFDRjtFQUNGO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFBQTtBQUFBO0FBQU8sTUFBTW9CLFNBQVMsR0FBRyxDQUN2QjtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMbkcsS0FBSyxFQUFFLFNBQVM7RUFDaEJwQixLQUFLLEVBQUUsQ0FDTDtJQUNFdlQsSUFBSSxFQUFFLElBQUk7SUFDVndhLEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFeGEsSUFBSSxFQUFFLElBQUk7SUFDVndhLEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFeGEsSUFBSSxFQUFFLElBQUk7SUFDVndhLEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFeGEsSUFBSSxFQUFFLElBQUk7SUFDVndhLEtBQUssRUFBRTtFQUNULENBQUM7QUFFTCxDQUFDLEVBQ0Q7RUFDRU0sRUFBRSxFQUFFLENBQUM7RUFDTG5HLEtBQUssRUFBRSxVQUFVO0VBQ2pCcEIsS0FBSyxFQUFFLENBQ0w7SUFDRXZULElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDO0FBR0wsQ0FBQyxFQUNEO0VBQ0VNLEVBQUUsRUFBRSxDQUFDO0VBQ0xuRyxLQUFLLEVBQUUsaUJBQWlCO0VBQ3hCcEIsS0FBSyxFQUFFLENBQ0w7SUFDRXZULElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQ0Q7SUFDRXhhLElBQUksRUFBRSxJQUFJO0lBQ1Z3YSxLQUFLLEVBQUU7RUFDVCxDQUFDO0FBRUwsQ0FBQyxFQUNEO0VBQ0VNLEVBQUUsRUFBRSxDQUFDO0VBQ0xuRyxLQUFLLEVBQUUsWUFBWTtFQUNuQnBCLEtBQUssRUFBRSxDQUNMO0lBQ0V2VCxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQztBQUVMLENBQUMsRUFDRDtFQUNFTSxFQUFFLEVBQUUsQ0FBQztFQUNMbkcsS0FBSyxFQUFFLFFBQVE7RUFDZnBCLEtBQUssRUFBRSxDQUNMO0lBQ0V2VCxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQyxFQUNEO0lBQ0V4YSxJQUFJLEVBQUUsSUFBSTtJQUNWd2EsS0FBSyxFQUFFO0VBQ1QsQ0FBQztBQUVMLENBQUMsQ0FDRjtBQUVNLE1BQU1PLFNBQVMsR0FBRyxDQUN2QjtFQUNFL2EsSUFBSSxFQUFFLElBQUk7RUFDVndhLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFeGEsSUFBSSxFQUFFLElBQUk7RUFDVndhLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFeGEsSUFBSSxFQUFFLElBQUk7RUFDVndhLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFeGEsSUFBSSxFQUFFLElBQUk7RUFDVndhLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFeGEsSUFBSSxFQUFFLElBQUk7RUFDVndhLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUQ7QUFDcUQ7QUFDbEI7QUFDSTtBQUNhO0FBQ0M7QUFDckI7QUFFakIsU0FBU1EsTUFBTUEsQ0FBQSxFQUFHO0VBQy9CLE9BQ0VqRixvREFBQSxDQUFDK0MsNENBQUc7SUFBQ3BkLEVBQUUsRUFBQyxRQUFRO0lBQUMrZSxPQUFPLEVBQUMsZUFBZTtJQUFBekcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3RDMEIsb0RBQUEsQ0FBQ2tGLGtEQUFTO0lBQUFqSCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDUjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUNpRixjQUFlO0lBQUFsSCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDNUJ3RyxzREFBUyxDQUFDNVgsR0FBRyxDQUFDLENBQUM7SUFBRTZYLEVBQUU7SUFBRW5HLEtBQUs7SUFBRXBCO0VBQU0sQ0FBQyxLQUNsQ3dDLG9EQUFBLENBQUN1RSxnRUFBWTtJQUFDN2MsR0FBRyxFQUFFcWQsRUFBRztJQUFDbkcsS0FBSyxFQUFFQSxLQUFNO0lBQUNwQixLQUFLLEVBQUVBLEtBQU07SUFBQVMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDckQsQ0FDRSxDQUNJLENBQUMsRUFDWjBCLG9EQUFBLENBQUNrRixrREFBUztJQUFBakgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1IwQixvREFBQSxDQUFDK0MsNENBQUc7SUFBQzlDLEVBQUUsRUFBRUMsTUFBTSxDQUFDa0YsV0FBWTtJQUFBbkgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ21GLFNBQVU7SUFBQXBILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN4QjBCLG9EQUFBLENBQUNzRix1REFBSTtJQUFBckgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNSMEIsb0RBQUEsQ0FBQ2lELDZDQUFJO0lBQUN0ZCxFQUFFLEVBQUMsTUFBTTtJQUFBc1ksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGtCQUNELElBQUlpSCxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxrQkFDaEMsQ0FDSCxDQUFDLEVBRU54RixvREFBQSxDQUFDK0MsNENBQUc7SUFBQ3BkLEVBQUUsRUFBQyxJQUFJO0lBQUNzYSxFQUFFLEVBQUVDLE1BQU0sQ0FBQzhFLFNBQVU7SUFBQS9HLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMvQjBHLHNEQUFTLENBQUM5WCxHQUFHLENBQUMsQ0FBQztJQUFFakQsSUFBSTtJQUFFd2E7RUFBTSxDQUFDLEVBQUU1SSxDQUFDLEtBQ2hDbUUsb0RBQUE7SUFBSXRZLEdBQUcsRUFBRW1VLENBQUU7SUFBQW9DLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNUMEIsb0RBQUEsQ0FBQzNZLG9EQUFJO0lBQUM0QyxJQUFJLEVBQUVBLElBQUs7SUFBQ3ZDLEdBQUcsRUFBRW1VLENBQUU7SUFBQzRJLEtBQUssRUFBRUEsS0FBTTtJQUFDQyxPQUFPLEVBQUMsUUFBUTtJQUFBekcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDeEQsQ0FDTCxDQUNFLENBQ0YsQ0FDSSxDQUNSLENBQUM7QUFFVjtBQUVBLE1BQU00QixNQUFNLEdBQUc7RUFDYmlGLGNBQWMsRUFBRTtJQUNkTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNuQ0MsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1J0RixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDakJ1RixtQkFBbUIsRUFBRSxDQUNuQixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLElBQUksRUFDSixnQkFBZ0IsRUFDaEIsZ0JBQWdCO0VBRXBCLENBQUM7RUFDRFAsV0FBVyxFQUFFO0lBQ1hRLFNBQVMsRUFBRyxtQkFBa0I7SUFDOUJ4RixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUNoQ2dELFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxjQUFjLEVBQUUsZUFBZTtJQUMvQmYsT0FBTyxFQUFFLGFBQWE7SUFDdEIsMkNBQTJDLEVBQUU7TUFDM0N1RCxFQUFFLEVBQUU7SUFDTjtFQUNGLENBQUM7RUFDRFIsU0FBUyxFQUFFO0lBQ1RqRixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDakJnRCxVQUFVLEVBQUUsUUFBUTtJQUNwQkUsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUNsRHdDLElBQUksRUFBRTtNQUNKdEYsUUFBUSxFQUFFLE1BQU07TUFDaEJLLFVBQVUsRUFBRSxJQUFJO01BQ2hCUixLQUFLLEVBQUVxRCxxREFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7TUFDM0JELEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSztJQUM1QjtFQUNGLENBQUM7RUFDRHVCLFNBQVMsRUFBRTtJQUNUSixTQUFTLEVBQUUsTUFBTTtJQUNqQlQsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUM7SUFDckM3QixPQUFPLEVBQUUsQ0FBQztJQUNWbEMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pCMkYsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3ZDMUMsY0FBYyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUM7SUFDOUMsU0FBUyxFQUFFO01BQ1QyQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztNQUM1QiwyQ0FBMkMsRUFBRTtRQUMzQ04sRUFBRSxFQUFFO01BQ047SUFDRixDQUFDO0lBQ0RiLENBQUMsRUFBRTtNQUNEeEUsS0FBSyxFQUFFO0lBQ1Q7RUFDRjtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDM0ZEO0FBQWUsZ0VBQ2I7RUFDRXBXLElBQUksRUFBRSxNQUFNO0VBQ1p3YSxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRXhhLElBQUksRUFBRSxrQkFBa0I7RUFDeEJ3YSxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRXhhLElBQUksRUFBRSxTQUFTO0VBQ2Z3YSxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0E7RUFDQ3hhLElBQUksRUFBRSxTQUFTO0VBQ2Z3YSxLQUFLLEVBQUU7QUFDVCxDQUFDLEVBQ0Q7RUFDRXhhLElBQUksRUFBRSxLQUFLO0VBQ1h3YSxLQUFLLEVBQUU7QUFDVCxDQUFDLENBQ0YsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUN5RTtBQUN4QztBQUNRO0FBQ0g7QUFDSDtBQUNPO0FBQ0o7QUFFdkIsU0FBU3dCLE1BQU1BLENBQUEsRUFBRztFQUMvQixNQUFNO0lBQUEsR0FBQ0MsVUFBVTtJQUFBLEdBQUVDO0VBQWEsSUFBSXRkLHNEQUFRLENBQUMsS0FBSyxDQUFDO0VBRW5ELE1BQU11ZCxjQUFjLEdBQUdBLENBQUEsS0FBTTtJQUMzQkQsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDO0VBRUQsTUFBTUUsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJGLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdEIsQ0FBQztFQUVELE9BQ0VuRyxvREFBQSxDQUFDK0MsNENBQUc7SUFBQzlDLEVBQUUsRUFBRUMsTUFBTSxDQUFDb0csYUFBYztJQUFBckksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzVCMEIsb0RBQUEsQ0FBQ3VHLHVEQUFNO0lBQUNDLE9BQU8sRUFBRSxJQUFLO0lBQUN0RixHQUFHLEVBQUUsQ0FBRTtJQUFDdUYsV0FBVyxFQUFDLFdBQVc7SUFBQ0MsTUFBTSxFQUFFLEVBQUc7SUFBQXpJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNoRTBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUNGcGQsRUFBRSxFQUFDLFFBQVE7SUFDWCtlLE9BQU8sRUFBQyxlQUFlO0lBQ3ZCM0YsU0FBUyxFQUFFbUgsVUFBVSxHQUFHLGdCQUFnQixHQUFHLEVBQUc7SUFBQWpJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUU5QzBCLG9EQUFBLENBQUNrRixrREFBUztJQUFBakgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1IwQixvREFBQSxDQUFDK0MsNENBQUc7SUFBQzlDLEVBQUUsRUFBRUMsTUFBTSxDQUFDeUcsV0FBWTtJQUFBMUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCMEIsb0RBQUEsQ0FBQ3NGLHVEQUFJO0lBQUNzQixPQUFPLEVBQUVWLFVBQVc7SUFBQWpJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFFN0IwQixvREFBQSxDQUFDNkcsNkNBQUk7SUFDSGxoQixFQUFFLEVBQUMsS0FBSztJQUNSc2EsRUFBRSxFQUFFQyxNQUFNLENBQUM0RyxNQUFPO0lBQ2xCL0gsU0FBUyxFQUFFbUgsVUFBVSxHQUFHLGVBQWUsR0FBRyxRQUFTO0lBQUFqSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFbkQwQixvREFBQSxDQUFDK0MsNENBQUc7SUFDRnBkLEVBQUUsRUFBQyxJQUFJO0lBQ1BzYSxFQUFFLEVBQUVDLE1BQU0sQ0FBQzZHLE9BQVE7SUFDbkJoSSxTQUFTLEVBQUVtSCxVQUFVLEdBQUcsUUFBUSxHQUFHLEVBQUc7SUFBQWpJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVyQ3dHLG9EQUFTLENBQUM1WCxHQUFHLENBQUMsQ0FBQztJQUFFakQsSUFBSTtJQUFFd2E7RUFBTSxDQUFDLEVBQUU1SSxDQUFDLEtBQ2hDbUUsb0RBQUE7SUFBSXRZLEdBQUcsRUFBRW1VLENBQUU7SUFBQW9DLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNUMEIsb0RBQUEsQ0FBQ2dILHVEQUFPO0lBQ04vYyxJQUFJLEVBQUVBLElBQUs7SUFDWHdhLEtBQUssRUFBRUEsS0FBTTtJQUNiL2EsT0FBTyxFQUFFMmMsZUFBZ0I7SUFBQXBJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUMxQixDQUNDLENBQ0wsQ0FDRSxDQUFDLEVBQ04wQixvREFBQSxDQUFDaUgsK0NBQU07SUFBQ3ZDLE9BQU8sRUFBQyxXQUFXO0lBQUN6RSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2dILE9BQVE7SUFBQWpKLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxlQUV2QyxDQUNKLENBQUMsRUFFTjRILFVBQVUsR0FDVGxHLG9EQUFBLENBQUNpSCwrQ0FBTTtJQUFDdkMsT0FBTyxFQUFDLE1BQU07SUFBQ3pFLEVBQUUsRUFBRUMsTUFBTSxDQUFDaUgsV0FBWTtJQUFBbEosTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzVDMEIsb0RBQUEsQ0FBQ29ILHNEQUFPO0lBQ04xZCxPQUFPLEVBQUUyYyxlQUFnQjtJQUN6QmhHLEtBQUssRUFBQyxPQUFPO0lBQ2JnSCxJQUFJLEVBQUMsTUFBTTtJQUFBcEosTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1osQ0FDSyxDQUFDLEdBRVQwQixvREFBQSxDQUFDc0gsbURBQVU7SUFBQyxjQUFXLGFBQWE7SUFBQzVkLE9BQU8sRUFBRTBjLGNBQWU7SUFBQW5JLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBRTlELENBQ0ksQ0FDUixDQUNDLENBQ0wsQ0FBQztBQUVWO0FBRUEsTUFBTTRCLE1BQU0sR0FBRztFQUNib0csYUFBYSxFQUFFO0lBQ2JyRixlQUFlLEVBQUUsYUFBYTtJQUM5Qk0sVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxZQUFZLEVBQUU7TUFDWmdHLE1BQU0sRUFBRTtRQUNOdEcsZUFBZSxFQUFFLE1BQU07UUFDdkJrQyxTQUFTLEVBQUUsbUNBQW1DO1FBQzlDcUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ1Isa0JBQWtCLEVBQUU7VUFDbEJ2RyxlQUFlLEVBQUU7UUFDbkI7TUFDRjtJQUNGO0VBQ0YsQ0FBQztFQUNEMEYsV0FBVyxFQUFFO0lBQ1h2RyxPQUFPLEVBQUUsTUFBTTtJQUNmZ0QsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLGNBQWMsRUFBRSxlQUFlO0lBQy9CLDJDQUEyQyxFQUFFO01BQzNDLFNBQVMsRUFBRTtRQUNUMUMsUUFBUSxFQUFFLFVBQVU7UUFDcEJPLEdBQUcsRUFBRSxNQUFNO1FBQ1hELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCSCxLQUFLLEVBQUUsTUFBTTtRQUNiSyxJQUFJLEVBQUUsQ0FBQztRQUNQelksQ0FBQyxFQUFFLFdBQVc7UUFDZDBYLE9BQU8sRUFBRSxPQUFPO1FBQ2hCK0MsU0FBUyxFQUFFLGdDQUFnQztRQUMzQy9CLE9BQU8sRUFBRSxDQUFDO1FBQ1ZxRyxVQUFVLEVBQUUsUUFBUTtRQUNwQmpFLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0JqQyxVQUFVLEVBQUUseUJBQXlCO1FBQ3JDLFVBQVUsRUFBRTtVQUNWSCxPQUFPLEVBQUUsQ0FBQztVQUNWcUcsVUFBVSxFQUFFO1FBQ2QsQ0FBQztRQUNEOUMsRUFBRSxFQUFFO1VBQ0Z2RSxPQUFPLEVBQUUsT0FBTztVQUNoQixTQUFTLEVBQUU7WUFDVHNCLFNBQVMsRUFBRTtVQUNiLENBQUM7VUFDRG1ELENBQUMsRUFBRTtZQUNEeEUsS0FBSyxFQUFFO1VBQ1Q7UUFDRjtNQUNGO0lBQ0Y7RUFDRixDQUFDO0VBQ0R5RyxNQUFNLEVBQUU7SUFDTjFELFVBQVUsRUFBRSxRQUFRO0lBQ3BCc0UsUUFBUSxFQUFFLENBQUM7SUFDWHJFLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QwRCxPQUFPLEVBQUU7SUFDUDNHLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNqQndFLFNBQVMsRUFBRSxNQUFNO0lBQ2pCK0MsVUFBVSxFQUFFLE1BQU07SUFDbEJqZixDQUFDLEVBQUUsQ0FBQztJQUNKLFdBQVcsRUFBRTtNQUNYNFgsTUFBTSxFQUFFLFNBQVM7TUFDakJHLFVBQVUsRUFBRSxHQUFHO01BQ2Y2QixPQUFPLEVBQUUsQ0FBQztNQUNWNkIsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNELFNBQVMsRUFBRTtNQUNUOUQsS0FBSyxFQUFFO0lBQ1Q7RUFDRixDQUFDO0VBQ0Q2RyxPQUFPLEVBQUU7SUFDUDlHLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDckRPLFFBQVEsRUFBRSxVQUFVO0lBQ3BCaUgsTUFBTSxFQUFFLEVBQUU7SUFDVnpHLElBQUksRUFBRSxLQUFLO0lBQ1hHLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFDRDZGLFdBQVcsRUFBRTtJQUNYcEcsTUFBTSxFQUFFLE1BQU07SUFDZHVCLE9BQU8sRUFBRSxLQUFLO0lBQ2RrQixTQUFTLEVBQUUsTUFBTTtJQUNqQjFDLEtBQUssRUFBRSxNQUFNO0lBQ2JrRixFQUFFLEVBQUUsS0FBSztJQUNUL2IsSUFBSSxFQUFFO01BQ0o0ZCxNQUFNLEVBQUU7SUFDVjtFQUNGO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLeUI7QUFDYztBQUV6QixTQUFTakUsS0FBS0EsQ0FBQXJHLElBQUEsRUFBbUI7RUFBQSxJQUFsQjtNQUFFc0c7SUFBYSxDQUFDLEdBQUF0RyxJQUFBO0lBQU53QyxJQUFJLEdBQUF0Qyx3QkFBQSxDQUFBRixJQUFBO0VBQzFDLE9BQU9HLEtBQUEsQ0FBQ29LLDhDQUFHLEVBQUFsSyxRQUFBO0lBQUNpRyxHQUFHLEVBQUVBO0VBQUksR0FBSzlELElBQUk7SUFBQTlCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFHLENBQUM7QUFDcEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQytCO0FBQ0w7QUFDVztBQUNBO0FBQ3RCLFNBQVN5SixNQUFNQSxDQUFDO0VBQUUzZTtBQUFTLENBQUMsRUFBRTtFQUMzQyxPQUNFNFcsb0RBQUEsQ0FBQzFYLDRDQUFLLENBQUNtVyxRQUFRO0lBQUFSLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNiMEIsb0RBQUEsQ0FBQ2lHLHNEQUFNO0lBQUFoSSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ1YwQixvREFBQTtJQUNFQyxFQUFFLEVBQUU7TUFDRnlFLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFBQXpHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVEbFYsUUFDRyxDQUFDLEVBQ1A0VyxvREFBQSxDQUFDaUYsc0RBQU07SUFBQWhILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQ0ssQ0FBQztBQUVyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUMwQztBQUNNO0FBQ2Y7QUFDc0I7QUFFaEQsU0FBUzBJLE9BQU9BLENBQUF6SixJQUFBLEVBQXFDO0VBQUEsSUFBcEM7TUFBRXRULElBQUk7TUFBRXdhLEtBQUs7TUFBRXJiO0lBQWtCLENBQUMsR0FBQW1VLElBQUE7SUFBTndDLElBQUksR0FBQXRDLHdCQUFBLENBQUFGLElBQUE7RUFDdEQsT0FDRXlDLG9EQUFBLENBQUNnSSxpREFBUSxFQUFBcEssUUFBQTtJQUNQcUssRUFBRSxFQUFFaGUsSUFBSztJQUNUaWUsR0FBRyxFQUFFLElBQUs7SUFDVkMsTUFBTSxFQUFFLENBQUMsRUFBRztJQUNaQyxNQUFNLEVBQUUsSUFBSztJQUNiQyxRQUFRLEVBQUUsR0FBSTtJQUNkdEosU0FBUyxFQUFDLFVBQVU7SUFDcEIwSCxXQUFXLEVBQUM7RUFBUSxHQUNoQjFHLElBQUk7SUFBQTlCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxJQUVQbUcsS0FDTyxDQUFDO0FBRWY7QUFDTyxTQUFTcGQsSUFBSUEsQ0FBQXVhLEtBQUEsRUFBcUM7RUFBQSxJQUFwQztNQUFFM1gsSUFBSTtNQUFFd2EsS0FBSztNQUFFcmI7SUFBa0IsQ0FBQyxHQUFBd1ksS0FBQTtJQUFON0IsSUFBSSxHQUFBdEMsd0JBQUEsQ0FBQW1FLEtBQUE7RUFDbkQsT0FDRTVCLG9EQUFBLENBQUNzSSxnREFBUTtJQUFDNWlCLElBQUksRUFBRXVFLElBQUs7SUFBQWdVLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNuQjBCLG9EQUFBLENBQUN1SSw2Q0FBQyxFQUFBM0ssUUFBQSxLQUFLbUMsSUFBSTtJQUFBOUIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBQUdsVixRQUFRLEdBQUdBLFFBQVEsR0FBR3FiLEtBQVMsQ0FDckMsQ0FBQztBQUVmO0FBRU8sU0FBUytELFNBQVNBLENBQUFyRyxLQUFBLEVBQXFDO0VBQUEsSUFBcEM7TUFBRWxZLElBQUk7TUFBRXdhLEtBQUs7TUFBRXJiO0lBQWtCLENBQUMsR0FBQStZLEtBQUE7SUFBTnBDLElBQUksR0FBQXRDLHdCQUFBLENBQUEwRSxLQUFBO0VBQ3hELE9BQ0VuQyxvREFBQSxDQUFDc0ksZ0RBQVE7SUFBQzVpQixJQUFJLEVBQUV1RSxJQUFLO0lBQUFnVSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbkIwQixvREFBQSxDQUFDdUksNkNBQUMsRUFBQTNLLFFBQUE7SUFBQ3FDLEVBQUUsRUFBRUMsTUFBTSxDQUFDdUk7RUFBVSxHQUFLMUksSUFBSTtJQUFBOUIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBQzlCbUcsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxZQUFZLE9BQUV6RSxvREFBQSxDQUFDMEksb0VBQXFCO0lBQUF6SyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUMvQyxDQUNLLENBQUM7QUFFZjtBQUVBLE1BQU00QixNQUFNLEdBQUc7RUFDYnVJLFNBQVMsRUFBRTtJQUNUcEksS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLFNBQVM7SUFDakJHLFVBQVUsRUFBRSxHQUFHO0lBQ2ZMLE9BQU8sRUFBRSxhQUFhO0lBQ3RCZ0QsVUFBVSxFQUFFLFFBQVE7SUFDcEJ1RixHQUFHLEVBQUU7TUFDSHBILFVBQVUsRUFBRSxpQ0FBaUM7TUFDN0N5RSxFQUFFLEVBQUU7SUFDTixDQUFDO0lBQ0QsUUFBUSxFQUFFO01BQ1IyQyxHQUFHLEVBQUU7UUFDSDNDLEVBQUUsRUFBRTtNQUNOO0lBQ0Y7RUFDRjtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REQ7QUFDc0M7QUFDQztBQUNHO0FBQ1c7QUFFdEMsU0FBU1YsSUFBSUEsQ0FBQztFQUFFc0I7QUFBUSxDQUFDLEVBQUU7RUFDeEMsT0FDRTVHLG9EQUFBLENBQUMzWSxvREFBSTtJQUNINEMsSUFBSSxFQUFDLEdBQUc7SUFDUmdXLEVBQUUsRUFBRTtNQUNGeUUsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUFBekcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRUYwQixvREFBQSxDQUFDNEQsOENBQUs7SUFBQ0MsR0FBRyxFQUFFK0MsT0FBTyxHQUFHZ0MsbUVBQVMsR0FBR0MsNkRBQUs7SUFBQzlFLEdBQUcsRUFBQyx5QkFBeUI7SUFBQTlGLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQ25FLENBQUM7QUFFWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ29DO0FBQ0Y7QUFDTztBQUNKO0FBQ3JDOztBQUVBLE1BQU13SyxZQUFZLEdBQUc7RUFDbkJDLE9BQU8sRUFBRTtJQUNQOUgsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQytILE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDRDNILE9BQU8sRUFBRTtJQUNQZCxNQUFNLEVBQUUsQ0FBQztJQUNUK0IsT0FBTyxFQUFFLENBQUM7SUFDVnBCLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLElBQUksRUFBRSxLQUFLO0lBQ1g4SCxLQUFLLEVBQUUsTUFBTTtJQUNickIsTUFBTSxFQUFFLE1BQU07SUFDZHZGLFFBQVEsRUFBRSxPQUFPO0lBQ2pCNkcsV0FBVyxFQUFFLE1BQU07SUFDbkI1SCxTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDUixLQUFLLEVBQUU7RUFDVDtBQUNGLENBQUM7QUFFRCxTQUFTcUksS0FBS0EsQ0FBQTVMLElBQUEsRUFBNkM7RUFBQSxJQUE1QztNQUFFc0IsTUFBTTtNQUFFdUssVUFBVTtNQUFFaGdCO0lBQW1CLENBQUMsR0FBQW1VLElBQUE7SUFBUGpXLEtBQUssR0FBQW1XLHdCQUFBLENBQUFGLElBQUE7RUFDckR0VSx1REFBUyxDQUFDLE1BQU07SUFDZCxJQUFJNFYsTUFBTSxFQUFFO01BQ1YzWCxRQUFRLENBQUNDLElBQUksQ0FBQytiLEtBQUssQ0FBQ2IsUUFBUSxHQUFHLFFBQVE7SUFDekM7SUFDQSxPQUFPLE1BQU9uYixRQUFRLENBQUNDLElBQUksQ0FBQytiLEtBQUssQ0FBQ2IsUUFBUSxHQUFHLE9BQVE7RUFDdkQsQ0FBQyxDQUFDO0VBRUYsT0FDRXJDLG9EQUFBLENBQUNxSixrREFBVSxFQUFBekwsUUFBQTtJQUNUaUIsTUFBTSxFQUFFQSxNQUFPO0lBQ2Z5SyxXQUFXLEVBQUUsS0FBTTtJQUNuQnBHLEtBQUssRUFBRTRGLFlBQWE7SUFDcEJTLGNBQWMsRUFBRSxJQUFLO0lBQ3JCQyxjQUFjLEVBQUVKO0VBQVcsR0FDdkI5aEIsS0FBSztJQUFBMlcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBRVJsVixRQUNTLENBQUM7QUFFakI7QUFFZStmLG9FQUFLLEVBQUM7QUFFZCxNQUFNTSxXQUFXLEdBQUc3SCxLQUFBLElBQXdDO0VBQUEsSUFBdkM7TUFBRWxZLE9BQU87TUFBRTJkLElBQUk7TUFBRWhIO0lBQWdCLENBQUMsR0FBQXVCLEtBQUE7SUFBUHRhLEtBQUssR0FBQW1XLHdCQUFBLENBQUFtRSxLQUFBO0VBQzFELE9BQ0U1QixvREFBQSxXQUFBcEMsUUFBQTtJQUFRcUMsRUFBRSxFQUFFQyxNQUFNLENBQUN3SixNQUFPO0lBQUNoZ0IsT0FBTyxFQUFFQTtFQUFRLEdBQUtwQyxLQUFLO0lBQUEyVyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsSUFDcEQwQixvREFBQSxDQUFDb0gsc0RBQU87SUFBQ0MsSUFBSSxFQUFFQSxJQUFJLGFBQUpBLElBQUksY0FBSkEsSUFBSSxHQUFJLE1BQU87SUFBQ2hILEtBQUssRUFBRUEsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSUEsS0FBTTtJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDakQsQ0FBQztBQUViLENBQUM7QUFFRCxNQUFNNEIsTUFBTSxHQUFHO0VBQ2J3SixNQUFNLEVBQUU7SUFDTnBILE9BQU8sRUFBRSxDQUFDO0lBQ1YvQixNQUFNLEVBQUUsQ0FBQztJQUNUVSxlQUFlLEVBQUUsYUFBYTtJQUM5QjBHLFVBQVUsRUFBRSxNQUFNO0lBQ2xCdkgsT0FBTyxFQUFFLGFBQWE7SUFDdEJFLE1BQU0sRUFBRSxTQUFTO0lBQ2pCSyxRQUFRLEVBQUUsVUFBVTtJQUNwQnNJLEtBQUssRUFBRSxDQUFDO0lBQ1IvSCxHQUFHLEVBQUUsT0FBTztJQUNaalgsSUFBSSxFQUFFO01BQ0o0ZCxNQUFNLEVBQUU7SUFDVjtFQUNGO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRDtBQUNvQztBQUVwQyxNQUFNOEIsZ0JBQWdCLEdBQUdwTSxJQUFBLElBQWlDO0VBQUEsSUFBaEM7TUFBRXNHLEdBQUc7TUFBRXphO0lBQW1CLENBQUMsR0FBQW1VLElBQUE7SUFBUGpXLEtBQUssR0FBQW1XLHdCQUFBLENBQUFGLElBQUE7RUFDakQsT0FDRXlDLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUMwSixjQUFlO0lBQUEzTCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDNUJsVixRQUFRLEdBQUdBLFFBQVEsR0FBRzRXLG9EQUFBLFdBQUFwQyxRQUFBO0lBQVFpRyxHQUFHLEVBQUVBO0VBQUksR0FBS3ZjLEtBQUs7SUFBQTJXLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxFQUFVLENBQ3pELENBQUM7QUFFVixDQUFDO0FBRWNxTCwrRUFBZ0IsRUFBQztBQUVoQyxNQUFNekosTUFBTSxHQUFHO0VBQ2IwSixjQUFjLEVBQUU7SUFDZHZILFFBQVEsRUFBRSxRQUFRO0lBQ2xCd0gsVUFBVSxFQUFFLFFBQVE7SUFDcEJsSixRQUFRLEVBQUUsVUFBVTtJQUNwQm1KLE1BQU0sRUFBRTtNQUNOdkosTUFBTSxFQUFFLENBQUM7TUFDVFEsTUFBTSxFQUFFLE1BQU07TUFDZEksSUFBSSxFQUFFLENBQUM7TUFDUFIsUUFBUSxFQUFFLFVBQVU7TUFDcEJPLEdBQUcsRUFBRSxDQUFDO01BQ05KLEtBQUssRUFBRTtJQUNUO0VBQ0Y7QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JEO0FBQ21EO0FBRW5ELE1BQU1pSixjQUFjLEdBQUd4TSxJQUFBLElBQXNDO0VBQUEsSUFBckM7TUFBRXFCLEtBQUs7TUFBRXFGO0lBQXNCLENBQUMsR0FBQTFHLElBQUE7SUFBUGpXLEtBQUssR0FBQW1XLHdCQUFBLENBQUFGLElBQUE7RUFDcEQsT0FDRXlDLG9EQUFBLENBQUMrQyw0Q0FBRyxFQUFBbkYsUUFBQTtJQUFDcUMsRUFBRSxFQUFFQyxNQUFNLENBQUM4SjtFQUFRLEdBQUsxaUIsS0FBSztJQUFBMlcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLElBQ2hDMEIsb0RBQUEsQ0FBQ2dFLGdEQUFPO0lBQUMvRCxFQUFFLEVBQUVDLE1BQU0sQ0FBQ3RCLEtBQU07SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUVNLEtBQWUsQ0FBQyxFQUM1Q29CLG9EQUFBLENBQUNpRCw2Q0FBSTtJQUFDdGQsRUFBRSxFQUFDLEdBQUc7SUFBQ3NhLEVBQUUsRUFBRUMsTUFBTSxDQUFDK0QsV0FBWTtJQUFBaEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2pDMkYsV0FDRyxDQUNILENBQUM7QUFFVixDQUFDO0FBRWM4Riw2RUFBYyxFQUFDO0FBRTlCLE1BQU03SixNQUFNLEdBQUc7RUFDYjhKLE9BQU8sRUFBRTtJQUNQekcsU0FBUyxFQUFFLFFBQVE7SUFDbkJXLFFBQVEsRUFBRSxHQUFHO0lBQ2JDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDRHZGLEtBQUssRUFBRTtJQUNMeUIsS0FBSyxFQUFFLFNBQVM7SUFDaEJJLFVBQVUsRUFBRSxHQUFHO0lBQ2ZELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDMUJLLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7SUFDdkJILGFBQWEsRUFBRTtFQUNqQixDQUFDO0VBQ0R1RCxXQUFXLEVBQUU7SUFDWDVELEtBQUssRUFBRSxTQUFTO0lBQ2hCRyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQzFCSyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0lBQ3ZCNEMsRUFBRSxFQUFFO0VBQ047QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN5QjtBQUNHO0FBRWQsU0FBU3dHLEdBQUdBLENBQUM7RUFDMUJoRyxXQUFXLEdBQUcseUJBQXlCO0VBQ3ZDaUcsTUFBTSxHQUFHLGdCQUFnQjtFQUN6QkMsSUFBSTtFQUNKdkwsS0FBSyxHQUFHO0FBQ1YsQ0FBQyxFQUFFO0VBQ0QsTUFBTXdMLFFBQVEsR0FBRyxDQUNmO0lBQ0U3ZCxJQUFJLEVBQUcsYUFBWTtJQUNuQjhVLE9BQU8sRUFBRTRDO0VBQ1gsQ0FBQyxFQUNEO0lBQ0VqWSxRQUFRLEVBQUcsVUFBUztJQUNwQnFWLE9BQU8sRUFBRXpDO0VBQ1gsQ0FBQyxFQUNEO0lBQ0U1UyxRQUFRLEVBQUcsZ0JBQWU7SUFDMUJxVixPQUFPLEVBQUU0QztFQUNYLENBQUMsRUFDRDtJQUNFalksUUFBUSxFQUFHLFNBQVE7SUFDbkJxVixPQUFPLEVBQUc7RUFDWixDQUFDLEVBQ0Q7SUFDRTlVLElBQUksRUFBRyxjQUFhO0lBQ3BCOFUsT0FBTyxFQUFHO0VBQ1osQ0FBQyxFQUNEO0lBQ0U5VSxJQUFJLEVBQUcsaUJBQWdCO0lBQ3ZCOFUsT0FBTyxFQUFFNkk7RUFDWCxDQUFDLEVBQ0Q7SUFDRTNkLElBQUksRUFBRyxlQUFjO0lBQ3JCOFUsT0FBTyxFQUFFekM7RUFDWCxDQUFDLEVBQ0Q7SUFDRXJTLElBQUksRUFBRyxxQkFBb0I7SUFDM0I4VSxPQUFPLEVBQUU0QztFQUNYLENBQUMsQ0FDRixDQUFDb0csTUFBTSxDQUFDRixJQUFJLENBQUM7RUFDZCxPQUNFek0sS0FBQSxDQUFDNE0sZ0RBQUk7SUFBQXJNLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNIWixLQUFBO0lBQUFPLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFRTSxLQUFhLENBQUMsRUFDckJ3TCxRQUFRLENBQUNsZCxHQUFHLENBQUMsQ0FBQztJQUFFWCxJQUFJO0lBQUU4VTtFQUFRLENBQUMsRUFBRXhGLENBQUMsS0FDakM2QixLQUFBO0lBQU1oVyxHQUFHLEVBQUVtVSxDQUFFO0lBQUN0UCxJQUFJLEVBQUVBLElBQUs7SUFBQzhVLE9BQU8sRUFBRUEsT0FBUTtJQUFBcEQsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDOUMsQ0FDRyxDQUFDO0FBRVg7QUFFQTJMLEdBQUcsQ0FBQ00sWUFBWSxHQUFHO0VBQ2pCQyxJQUFJLEVBQUcsSUFBRztFQUNWTCxJQUFJLEVBQUUsRUFBRTtFQUNSbEcsV0FBVyxFQUFHO0FBQ2hCLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekR5QjtBQUNlO0FBQ2Y7QUFDTztBQUNNO0FBQ0Y7QUFDcUI7QUFDakI7QUFDSztBQUNRO0FBQ2Y7QUFDdkM7QUFDK0I7QUFFaEIsU0FBU3dHLFNBQVNBLENBQUEsRUFBRztFQUNsQyxPQUNFL00sS0FBQSxDQUFDZ04sc0RBQWE7SUFBQ0MsS0FBSyxFQUFFQSw2Q0FBTTtJQUFBMU0sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCWixLQUFBLENBQUNxSyx5REFBTTtJQUFBOUosTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0xaLEtBQUEsQ0FBQ3VNLHNEQUFHO0lBQUNyTCxLQUFLLEVBQUMseUJBQXlCO0lBQUFYLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDdkNaLEtBQUEsQ0FBQ2tOLHVEQUFNO0lBQUEzTSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ1ZaLEtBQUEsQ0FBQ21OLGtFQUFnQjtJQUFBNU0sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNwQlosS0FBQSxDQUFDb04seURBQVE7SUFBQTdNLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDWlosS0FBQSxDQUFDcU4sNERBQVU7SUFBQTlNLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDZFosS0FBQSxDQUFDc04sZ0VBQWM7SUFBQS9NLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDbEJaLEtBQUEsQ0FBQ3VOLHlEQUFPO0lBQUFoTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBRVhaLEtBQUEsQ0FBQ3dOLHFEQUFHO0lBQUFqTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNBLENBQ0ssQ0FBQztBQUVwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQzZFO0FBQy9CO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNc00sTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsT0FDRTVLLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDZ0MsRUFBRSxFQUFDLE1BQU07SUFBQ3BmLEVBQUUsRUFBQyxTQUFTO0lBQUMrZSxPQUFPLEVBQUMsZ0JBQWdCO0lBQUF6RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbEQwQixvREFBQSxDQUFDa0Ysa0RBQVM7SUFBQWpILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2lMLGNBQWU7SUFBQWxOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUNtQixPQUFRO0lBQUFwRCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdEIwQixvREFBQSxDQUFDZ0UsZ0RBQU87SUFBQy9ELEVBQUUsRUFBRUMsTUFBTSxDQUFDdEIsS0FBTTtJQUFBWCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsc0RBR2pCLENBQUMsRUFDVjBCLG9EQUFBLENBQUNpRCw2Q0FBSTtJQUFDdGQsRUFBRSxFQUFDLEdBQUc7SUFBQ3NhLEVBQUUsRUFBRUMsTUFBTSxDQUFDa0wsSUFBSztJQUFBbk4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLCtNQUl2QixDQUFDLEVBQ1AwQixvREFBQSxDQUFDaUgsK0NBQU07SUFBQ3ZDLE9BQU8sRUFBQyxTQUFTO0lBQUN6RSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ3dKLE1BQU87SUFBQXpMLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxjQUVwQyxDQU1MLENBQUMsRUFDTjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUNtTCxZQUFhO0lBQUFwTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0IwQixvREFBQSxDQUFDNEQsOENBQUs7SUFBQ0MsR0FBRyxFQUFFeUgsK0RBQU87SUFBQ3ZILEdBQUcsRUFBQyxRQUFRO0lBQUE5RixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUMvQixDQUNGLENBQ0ksQ0FDUixDQUFDO0FBRVYsQ0FBQztBQUVjc00scUVBQU0sRUFBQztBQUV0QixNQUFNMUssTUFBTSxHQUFHO0VBQ2JpTCxjQUFjLEVBQUU7SUFDZC9LLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDM0N1RixtQkFBbUIsRUFBRSxnQkFBZ0I7SUFDckN2QyxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsY0FBYyxFQUFFLFFBQVE7SUFDeEJHLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ2xEK0gsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUN4QyxDQUFDO0VBQ0RsSyxPQUFPLEVBQUU7SUFDUDZDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHO0VBQ3RDLENBQUM7RUFDRHRGLEtBQUssRUFBRTtJQUNMNkIsVUFBVSxFQUFFLE1BQU07SUFDbEJELFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUM1REssVUFBVSxFQUFFLElBQUk7SUFDaEJILGFBQWEsRUFBRSxNQUFNO0lBQ3JCTCxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBQ0QrSyxJQUFJLEVBQUU7SUFDSjVLLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQzFESyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNoRFIsS0FBSyxFQUFFLGVBQWU7SUFDdEJvRCxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtFQUNyQixDQUFDO0VBQ0RpRyxNQUFNLEVBQUU7SUFDTnRKLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDekJxRCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtFQUN6QixDQUFDO0VBQ0QrSCxPQUFPLEVBQUU7SUFDUHBMLE9BQU8sRUFBRSxNQUFNO0lBQ2ZnRCxVQUFVLEVBQUUsUUFBUTtJQUNwQkssRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUM1Q2dJLEdBQUcsRUFBRTtNQUNIdkgsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO01BQzFDLE9BQU8sRUFBRTtRQUNQOEIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtNQUNyQztJQUNGO0VBQ0YsQ0FBQztFQUNEcUYsWUFBWSxFQUFFO0lBQ1pqTCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzNCcUQsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkJpQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QitGLEdBQUcsRUFBRTtNQUNIdkgsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUNqRTtFQUNGO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGRDtBQUMrQztBQUNRO0FBQ0E7QUFDdkQsTUFBTXdILElBQUksR0FBRyxDQUNYO0VBQ0U5TSxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCSyxRQUFRLEVBQ05lLG9EQUFBO0lBQUEvQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMEZBR0s7QUFFVCxDQUFDLEVBQ0Q7RUFDRU0sS0FBSyxFQUFFLGlEQUFpRDtFQUN4REssUUFBUSxFQUNOZSxvREFBQTtJQUFBL0IsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDBKQUVLO0FBRVQsQ0FBQyxFQUNEO0VBQ0VNLEtBQUssRUFBRywrQ0FBOEM7RUFDdERLLFFBQVEsRUFDTmUsb0RBQUE7SUFBQS9CLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx3REFFSztBQUVULENBQUMsRUFDRDtFQUNFTSxLQUFLLEVBQUcsc0JBQXFCO0VBQzdCSyxRQUFRLEVBQ05lLG9EQUFBO0lBQUEvQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsb0RBR0s7QUFFVCxDQUFDLEVBQ0Q7RUFDRU0sS0FBSyxFQUFHO0FBQ1osQ0FBQztFQUNHSyxRQUFRLEVBQ05lLG9EQUFBO0lBQUEvQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsK0hBSUs7QUFFVCxDQUFDLEVBRUQ7RUFDRU0sS0FBSyxFQUFHLHVDQUFzQztFQUM5Q0ssUUFBUSxFQUNOZSxvREFBQTtJQUFBL0IsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLHFHQUdLO0FBRVQsQ0FBQyxDQUNGO0FBQ2MsU0FBUzRNLEdBQUdBLENBQUEsRUFBRztFQUM1QixPQUNFbEwsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUNwZCxFQUFFLEVBQUMsU0FBUztJQUFDb2YsRUFBRSxFQUFDLEtBQUs7SUFBQ0wsT0FBTyxFQUFDLGFBQWE7SUFBQXpHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM5QzBCLG9EQUFBLENBQUNrRixrREFBUztJQUFBakgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1IwQixvREFBQSxDQUFDMkwsa0VBQWE7SUFDWi9NLEtBQUssRUFBQywwQkFBMEI7SUFDaENxRixXQUFXLEVBQUMsOERBQThEO0lBQUFoRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDM0UsQ0FBQyxFQUNGMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQ0Y5QyxFQUFFLEVBQUU7TUFDRkcsT0FBTyxFQUFFLE1BQU07TUFDZlUsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztNQUM3Q3dDLGFBQWEsRUFBRSxRQUFRO01BQ3ZCc0ksRUFBRSxFQUFFLE1BQU07TUFDVkMsRUFBRSxFQUFFLENBQUM7SUFDUCxDQUFFO0lBQUE1TixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FFRjBCLG9EQUFBLENBQUMxQyxzRUFBUztJQUFDRSxLQUFLLEVBQUVrTyxJQUFLO0lBQUF6TixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUN0QixDQUNJLENBQ1IsQ0FBQztBQUVWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ3FEO0FBQ0c7QUFDVDtBQUNIO0FBQ1A7QUFFdUM7QUFDM0M7QUFFakMsTUFBTS9KLElBQUksR0FBRyxDQUNYO0VBQ0V3USxFQUFFLEVBQUUsQ0FBQztFQUNMMUUsS0FBSyxFQUFFLFNBQVM7RUFDaEJsSCxLQUFLLEVBQUUsTUFBTTtFQUNieUYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VtRyxFQUFFLEVBQUUsQ0FBQztFQUNMMUUsS0FBSyxFQUFFLFNBQVM7RUFDaEJsSCxLQUFLLEVBQUUsTUFBTTtFQUNieUYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VtRyxFQUFFLEVBQUUsQ0FBQztFQUNMMUUsS0FBSyxFQUFFLFNBQVM7RUFDaEJsSCxLQUFLLEVBQUUsS0FBSztFQUNaeUYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VtRyxFQUFFLEVBQUUsQ0FBQztFQUNMMUUsS0FBSyxFQUFFLFNBQVM7RUFDaEJsSCxLQUFLLEVBQUUsTUFBTTtFQUNieUYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxDQUNGO0FBRUQsTUFBTWtNLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0VBQ3JCLE9BQ0U5SyxvREFBQSxDQUFDK0MsNENBQUc7SUFBQ3BkLEVBQUUsRUFBQyxTQUFTO0lBQUMrZSxPQUFPLEVBQUMsa0JBQWtCO0lBQUF6RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUMwQixvREFBQSxDQUFDa0Ysa0RBQVM7SUFBQWpILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2lMLGNBQWU7SUFBQWxOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUM0TCxXQUFZO0lBQUE3TixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekIvSixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRXJILEdBQUcsQ0FBRTZNLElBQUksSUFDZGlHLG9EQUFBLENBQUM2QyxnRUFBTztJQUFDbmIsR0FBRyxFQUFFcVMsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUVnTCxFQUFHO0lBQUNqQyxPQUFPLEVBQUUvSSxJQUFLO0lBQUFrRSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUN6QyxDQUNFLENBQUMsRUFDTjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUM2TCxZQUFhO0lBQUE5TixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0IwQixvREFBQSxDQUFDK0osa0VBQWM7SUFDYjlKLEVBQUUsRUFBRUMsTUFBTSxDQUFDOEosT0FBUTtJQUNuQnBMLEtBQUssRUFDSG9CLG9EQUFBLENBQUN2Qiw4Q0FBUTtNQUFBUixNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsd0JBQ1MwQixvREFBQTtNQUFBL0IsTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUssQ0FBQyxrQkFFZCxDQUNYO0lBQ0QyRixXQUFXLEVBQUMsb0VBQW9FO0lBQUFoRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDakYsQ0FBQyxFQVNGMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2dILE9BQVE7SUFBQWpKLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0QjBCLG9EQUFBLENBQUN3SSx5REFBUztJQUFDdmUsSUFBSSxFQUFDLElBQUk7SUFBQ3dhLEtBQUssRUFBQyxXQUFXO0lBQUF4RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNyQyxDQUNGLENBQ0YsQ0FDSSxDQUNSLENBQUM7QUFFVixDQUFDO0FBRWN3TSx1RUFBUSxFQUFDO0FBRXhCLE1BQU01SyxNQUFNLEdBQUc7RUFDYmlMLGNBQWMsRUFBRTtJQUNkMUYsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztJQUN0Q3JGLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ2pDa0QsYUFBYSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDO0lBQzVEcUMsbUJBQW1CLEVBQUUsQ0FDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUNkO0lBQ0R2QyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0QwSSxXQUFXLEVBQUU7SUFDWHJHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQzdCckYsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUN6QnVGLG1CQUFtQixFQUFFLGdCQUFnQjtJQUNyQ3ZDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLE9BQU8sRUFBRTtNQUNQLGdCQUFnQixFQUFFO1FBQ2hCSyxFQUFFLEVBQUUsQ0FBQyxNQUFNO01BQ2IsQ0FBQztNQUNELGVBQWUsRUFBRTtRQUNmQSxFQUFFLEVBQUUsQ0FBQyxPQUFPO01BQ2Q7SUFDRjtFQUNGLENBQUM7RUFDRHNJLFlBQVksRUFBRTtJQUNaO0VBQUEsQ0FDRDtFQUNEL0IsT0FBTyxFQUFFO0lBQ1B6RyxTQUFTLEVBQUUsTUFBTTtJQUNqQm1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNaakMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7SUFDbkJ1SSxFQUFFLEVBQUU7TUFDRnhMLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO01BQzFESyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO01BQ3ZCSCxhQUFhLEVBQUUsUUFBUTtNQUN2QnVMLEVBQUUsRUFBRTtRQUNGN0wsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTztNQUMzQztJQUNGLENBQUM7SUFDRDFYLENBQUMsRUFBRTtNQUNEK2EsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07SUFDckI7RUFDRixDQUFDO0VBQ0R5SSxRQUFRLEVBQUU7SUFDUnpMLFVBQVUsRUFBRSxHQUFHO0lBQ2ZELFFBQVEsRUFBRSxFQUFFO0lBQ1pLLFVBQVUsRUFBRSxJQUFJO0lBQ2hCVCxPQUFPLEVBQUUsTUFBTTtJQUNmZ0QsVUFBVSxFQUFFLFFBQVE7SUFDcEJxSSxHQUFHLEVBQUU7TUFDSFUsRUFBRSxFQUFFO0lBQ047RUFDRixDQUFDO0VBQ0RqRixPQUFPLEVBQUU7SUFDUHpELEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO0VBQzdDO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJRDtBQUNpQztBQUNzQjtBQUNDO0FBQ25CO0FBQ087QUFDTTtBQUNGO0FBQ1k7QUFDQTtBQUU1RCxNQUFNc0gsVUFBVSxHQUFHQSxDQUFBLEtBQU07RUFDdkIsTUFBTTtJQUFBLEdBQUNsTSxNQUFNO0lBQUEsR0FBRXVOO0VBQVMsSUFBSXZqQixzREFBUSxDQUFDLEtBQUssQ0FBQztFQUUzQyxPQUNFbVgsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUNwZCxFQUFFLEVBQUMsU0FBUztJQUFDc2EsRUFBRSxFQUFFQyxNQUFNLENBQUNtTSxPQUFRO0lBQUMzSCxPQUFPLEVBQUMsb0JBQW9CO0lBQUF6RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDaEUwQixvREFBQSxDQUFDa0Ysa0RBQVM7SUFBQWpILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSMEIsb0RBQUEsQ0FBQytKLGtFQUFjO0lBQ2I5SixFQUFFLEVBQUVDLE1BQU0sQ0FBQzhKLE9BQVE7SUFDbkJwTCxLQUFLLEVBQUMsOENBQThDO0lBQ3BEcUYsV0FBVyxFQUFDLDJlQUM2TTtJQUFBaEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQzFOLENBQUMsRUFDRjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUNnSCxPQUFRO0lBQUFqSixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdEIwQixvREFBQSxDQUFDd0kseURBQVM7SUFBQ3ZlLElBQUksRUFBQyxJQUFJO0lBQUN3YSxLQUFLLEVBQUMsWUFBWTtJQUFBeEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDdEMsQ0FBQyxFQUNOMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ29NLFlBQWE7SUFBQXJPLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQjBCLG9EQUFBLENBQUNtSiw4REFBSztJQUFDdEssTUFBTSxFQUFFQSxNQUFPO0lBQUFaLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNwQjBCLG9EQUFBLENBQUN5SixrRUFBVztJQUNWL2YsT0FBTyxFQUFFQSxDQUFBLEtBQU0waUIsU0FBUyxDQUFDLEtBQUssQ0FBRTtJQUNoQy9FLElBQUksRUFBQyxNQUFNO0lBQ1hoSCxLQUFLLEVBQUMsTUFBTTtJQUFBcEMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2IsQ0FBQyxFQUNGMEIsb0RBQUEsQ0FBQzJKLG9FQUFnQjtJQUNmOUYsR0FBRyxFQUFDLHFCQUFxQjtJQUN6QjBJLEtBQUssRUFBQyxzQkFBc0I7SUFDNUJDLGVBQWU7SUFBQXZPLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNoQixDQUNJLENBQUMsRUFFUjBCLG9EQUFBLENBQUM0RCx3REFBSztJQUNKQyxHQUFHLEVBQUU0SSw4REFBWTtJQUNqQjFOLFNBQVMsRUFBQyxjQUFjO0lBQ3hCZ0YsR0FBRyxFQUFDLGNBQWM7SUFBQTlGLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNuQixDQUFDLEVBQ0YwQixvREFBQSxDQUFDaUgsK0NBQU07SUFDTHZDLE9BQU8sRUFBQyxNQUFNO0lBQ2R6RSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ3dNLFNBQVU7SUFDckJoakIsT0FBTyxFQUFFQSxDQUFBLEtBQU0waUIsU0FBUyxDQUFDLElBQUksQ0FBRTtJQUFBbk8sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRS9CMEIsb0RBQUEsQ0FBQzRELHdEQUFLO0lBQUNDLEdBQUcsRUFBRThJLG1FQUFLO0lBQUM1SSxHQUFHLEVBQUMsTUFBTTtJQUFBOUYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxxQkFDekIsQ0FDTCxDQUNJLENBQ1IsQ0FBQztBQUVWLENBQUM7QUFFY3lNLHlFQUFVLEVBQUM7QUFFMUIsTUFBTTdLLE1BQU0sR0FBRztFQUNiOEosT0FBTyxFQUFFO0lBQ1A5RixRQUFRLEVBQUUsT0FBTztJQUNqQndCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNQc0csRUFBRSxFQUFFO01BQ0Z0TCxhQUFhLEVBQUU7SUFDakI7RUFDRixDQUFDO0VBQ0R3RyxPQUFPLEVBQUU7SUFDUDNELFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUNyQm1DLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDUixDQUFDO0VBQ0Q0RyxZQUFZLEVBQUU7SUFDWi9JLFNBQVMsRUFBRSxRQUFRO0lBQ25CNUMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsZUFBZSxFQUFFO01BQ2Z1RCxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNO0lBQ2xFO0VBQ0YsQ0FBQztFQUNEd0ksU0FBUyxFQUFFO0lBQ1RyTSxLQUFLLEVBQUUsT0FBTztJQUNkSSxVQUFVLEVBQUUsR0FBRztJQUNmRSxRQUFRLEVBQUUsVUFBVTtJQUNwQjJCLE9BQU8sRUFBRSxLQUFLO0lBQ2RzRixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQzdCekcsSUFBSSxFQUFFLEtBQUs7SUFDWEcsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixRQUFRLEVBQUU7TUFDUnNMLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDRG5CLEdBQUcsRUFBRTtNQUNIVSxFQUFFLEVBQUU7SUFDTjtFQUNGO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkQ7QUFDK0M7QUFDUztBQUNRO0FBRWhCO0FBQ0E7QUFDSTtBQUNBO0FBRXBELE1BQU01WCxJQUFJLEdBQUcsQ0FDWDtFQUNFd1EsRUFBRSxFQUFFLENBQUM7RUFDTGpCLElBQUksRUFBRStJLHFFQUFNO0VBQ1pqTyxLQUFLLEVBQUUsdUJBQXVCO0VBQzlCcUYsV0FBVyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0VjLEVBQUUsRUFBRSxDQUFDO0VBQ0xqQixJQUFJLEVBQUVnSixtRUFBSTtFQUNWbE8sS0FBSyxFQUFFLGFBQWE7RUFDcEJxRixXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRWMsRUFBRSxFQUFFLENBQUM7RUFDSmpCLElBQUksRUFBRWlKLG1FQUFJO0VBQ1huTyxLQUFLLEVBQUUsWUFBWTtFQUNuQnFGLFdBQVcsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNFYyxFQUFFLEVBQUUsQ0FBQztFQUNMakIsSUFBSSxFQUFFa0oscUVBQU07RUFDWnBPLEtBQUssRUFBRSxlQUFlO0VBQ3RCcUYsV0FBVyxFQUFHO0FBQ2hCLENBQUMsQ0FDRjtBQUVELE1BQU00RyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNO0VBQzdCLE9BQ0U3SyxvREFBQSxDQUFDK0MsNENBQUc7SUFBQ3BkLEVBQUUsRUFBQyxTQUFTO0lBQUNvZixFQUFFLEVBQUMsa0JBQWtCO0lBQUNMLE9BQU8sRUFBQyx5QkFBeUI7SUFBQXpHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN2RTBCLG9EQUFBLENBQUNrRixrREFBUztJQUFBakgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1IwQixvREFBQSxDQUFDK0osa0VBQWM7SUFDYjlKLEVBQUUsRUFBRUMsTUFBTSxDQUFDOEosT0FBUTtJQUNuQnBMLEtBQUssRUFBQyxlQUFlO0lBQ3JCcUYsV0FBVyxFQUFDLHdiQUdyQjtJQUFBaEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ1EsQ0FBQyxFQUNGMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQytNLFFBQVM7SUFBQWhQLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0Qi9KLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFckgsR0FBRyxDQUFFNk0sSUFBSSxJQUNkaUcsb0RBQUEsQ0FBQzJELHlFQUFlO0lBQUNqYyxHQUFHLEVBQUVxUyxJQUFJLENBQUNnTCxFQUFHO0lBQUN4USxJQUFJLEVBQUV3RixJQUFLO0lBQUFrRSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUM3QyxDQUNFLENBQ0ksQ0FDUixDQUFDO0FBRVYsQ0FBQztBQUVjdU0sK0VBQWdCLEVBQUM7QUFFaEMsTUFBTTNLLE1BQU0sR0FBRztFQUNiOEosT0FBTyxFQUFFO0lBQ1AxRixZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQy9CLENBQUM7RUFDRDJJLFFBQVEsRUFBRTtJQUNSeEgsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdENyRixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ3pCdUYsbUJBQW1CLEVBQUUsQ0FDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQjtFQUVwQjtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVEO0FBQytDO0FBQ1M7QUFDUTtBQUVkO0FBQ0k7QUFDTjtBQUNFO0FBRWxELE1BQU1wUixJQUFJLEdBQUcsQ0FDWDtFQUNFd1EsRUFBRSxFQUFFLENBQUM7RUFDTGpCLElBQUksRUFBRWlKLHFFQUFJO0VBQ1ZuTyxLQUFLLEVBQUUscUJBQXFCO0VBQzVCcUYsV0FBVyxFQUFHO0FBQ2hCLENBQUMsRUFDRDtFQUNFYyxFQUFFLEVBQUUsQ0FBQztFQUNMakIsSUFBSSxFQUFFb0osc0VBQU87RUFDYnRPLEtBQUssRUFBRSwwQkFBMEI7RUFDakNxRixXQUFXLEVBQUc7QUFDaEIsQ0FBQyxFQUNEO0VBQ0VjLEVBQUUsRUFBRSxDQUFDO0VBQ0xqQixJQUFJLEVBQUVxSixtRUFBSTtFQUNWdk8sS0FBSyxFQUFFLGVBQWU7RUFDdEJxRixXQUFXLEVBQUc7QUFDaEIsQ0FBQyxFQUNEO0VBQ0VjLEVBQUUsRUFBRSxDQUFDO0VBQ0xqQixJQUFJLEVBQUVzSixvRUFBSztFQUNYeE8sS0FBSyxFQUFFLG1CQUFtQjtFQUMxQnFGLFdBQVcsRUFBRztBQUNoQixDQUFDLEVBQ0M7RUFDQWMsRUFBRSxFQUFFLENBQUM7RUFDTGpCLElBQUksRUFBRXFKLG1FQUFJO0VBQ1Z2TyxLQUFLLEVBQUUscUJBQXFCO0VBQzVCcUYsV0FBVyxFQUFHO0FBQ2hCLENBQUMsQ0FDRjtBQUVELE1BQU0rRyxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUMzQixPQUNFaEwsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUNwZCxFQUFFLEVBQUMsU0FBUztJQUFDb2YsRUFBRSxFQUFDLGlCQUFpQjtJQUFDTCxPQUFPLEVBQUMsd0JBQXdCO0lBQUF6RyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckUwQixvREFBQSxDQUFDa0Ysa0RBQVM7SUFBQWpILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNSMEIsb0RBQUEsQ0FBQytKLGtFQUFjO0lBQ2I5SixFQUFFLEVBQUVDLE1BQU0sQ0FBQzhKLE9BQVE7SUFDbkJwTCxLQUFLLEVBQUMsc0NBQXNDO0lBQzVDcUYsV0FBVyxFQUFDLDJJQUEySTtJQUFBaEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3hKLENBQUMsRUFDRjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUMrTSxRQUFTO0lBQUFoUCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdEIvSixJQUFJLGFBQUpBLElBQUksdUJBQUpBLElBQUksQ0FBRXJILEdBQUcsQ0FBRTZNLElBQUksSUFDZGlHLG9EQUFBLENBQUMyRCx5RUFBZTtJQUNkamMsR0FBRyxFQUFFcVMsSUFBSSxDQUFDZ0wsRUFBRztJQUNieFEsSUFBSSxFQUFFd0YsSUFBSztJQUNYZ0YsU0FBUyxFQUFDLGNBQWM7SUFBQWQsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3pCLENBQ0YsQ0FDRSxDQUNJLENBQ1IsQ0FBQztBQUVWLENBQUM7QUFFYzBNLDZFQUFjLEVBQUM7QUFFOUIsTUFBTTlLLE1BQU0sR0FBRztFQUNiOEosT0FBTyxFQUFFO0lBQ1AxRixZQUFZLEVBQUU7RUFDaEIsQ0FBQztFQUNEMkksUUFBUSxFQUFFO0lBQ1J4SCxHQUFHLEVBQUUsRUFBRTtJQUNQckYsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pCdUYsbUJBQW1CLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztJQUMzRSxlQUFlLEVBQUU7TUFDZnZGLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7TUFDckRpTixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO01BQ2ZuSixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7TUFDbEJFLE1BQU0sRUFBRTtRQUNOa0osUUFBUSxFQUFFLE1BQU07UUFDaEIxUyxDQUFDLEVBQUUsQ0FDRCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsWUFBWTtNQUVoQjtJQUNGO0VBQ0Y7QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGRDtBQUNxRDtBQUNHO0FBQ1o7QUFDUDtBQUVVO0FBQzZCO0FBRTVFLE1BQU1xUSxPQUFPLEdBQUdBLENBQUEsS0FBTTtFQUNwQixPQUNFakwsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUNwZCxFQUFFLEVBQUMsU0FBUztJQUFDb2YsRUFBRSxFQUFDLFNBQVM7SUFBQ0wsT0FBTyxFQUFDLGlCQUFpQjtJQUFBekcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3REMEIsb0RBQUEsQ0FBQ2tGLGtEQUFTO0lBQUFqSCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDUjBCLG9EQUFBLENBQUMrQyw0Q0FBRztJQUFDOUMsRUFBRSxFQUFFQyxNQUFNLENBQUNpTCxjQUFlO0lBQUFsTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0IwQixvREFBQSxDQUFDK0MsNENBQUc7SUFBQzlDLEVBQUUsRUFBRUMsTUFBTSxDQUFDNEwsV0FBWTtJQUFBN04sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCMEIsb0RBQUEsQ0FBQzRELHdEQUFLO0lBQUNDLEdBQUcsRUFBRXlILGdFQUFPO0lBQUN2SCxHQUFHLEVBQUMsU0FBUztJQUFBOUYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDaEMsQ0FBQyxFQUNOMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQzZMLFlBQWE7SUFBQTlOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQjBCLG9EQUFBLENBQUMrSixrRUFBYztJQUNiOUosRUFBRSxFQUFFQyxNQUFNLENBQUM4SixPQUFRO0lBQ25CcEwsS0FBSyxFQUFDLGVBQWU7SUFDckJxRixXQUFXLEVBQUMsNENBQTRDO0lBQUFoRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDekQsQ0FBQyxFQUNGMEIsb0RBQUEsQ0FBQ2lELDZDQUFJO0lBQUNoRCxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2dNLFFBQVM7SUFBQ3ZtQixFQUFFLEVBQUMsR0FBRztJQUFBc1ksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQy9CMEIsb0RBQUEsQ0FBQzRELHdEQUFLO0lBQUNDLEdBQUcsRUFBRTBKLGtGQUFrQjtJQUFDeEosR0FBRyxFQUFDLFlBQVk7SUFBQTlGLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsa0JBRTlDLENBQUMsRUFDUDBCLG9EQUFBLENBQUNpRCw2Q0FBSTtJQUFDaEQsRUFBRSxFQUFFQyxNQUFNLENBQUNnTSxRQUFTO0lBQUN2bUIsRUFBRSxFQUFDLEdBQUc7SUFBQXNZLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMvQjBCLG9EQUFBLENBQUM0RCx3REFBSztJQUFDQyxHQUFHLEVBQUUwSixrRkFBa0I7SUFBQ3hKLEdBQUcsRUFBQyxZQUFZO0lBQUE5RixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLDRCQUc5QyxDQUFDLEVBQ04wQixvREFBQSxDQUFDaUQsNkNBQUk7SUFBQ2hELEVBQUUsRUFBRUMsTUFBTSxDQUFDZ00sUUFBUztJQUFDdm1CLEVBQUUsRUFBQyxHQUFHO0lBQUFzWSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDaEMwQixvREFBQSxDQUFDNEQsd0RBQUs7SUFBQ0MsR0FBRyxFQUFFMEosa0ZBQWtCO0lBQUN4SixHQUFHLEVBQUMsWUFBWTtJQUFBOUYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyw4QkFHOUMsQ0FBQyxFQUNQMEIsb0RBQUEsQ0FBQytDLDRDQUFHO0lBQUM5QyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ2dILE9BQVE7SUFBQWpKLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0QjBCLG9EQUFBLENBQUN3SSx5REFBUztJQUFDdmUsSUFBSSxFQUFDLElBQUk7SUFBQ3dhLEtBQUssRUFBQyxpQkFBWTtJQUFBeEcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDdEMsQ0FDRixDQUNGLENBQ0ksQ0FDUixDQUFDO0FBRVYsQ0FBQztBQUVjMk0sc0VBQU8sRUFBQztBQUV2QixNQUFNL0ssTUFBTSxHQUFHO0VBQ2JpTCxjQUFjLEVBQUU7SUFDZDFGLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQzFCckYsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDbkN1RixtQkFBbUIsRUFBRSxTQUFTO0lBQzlCdkMsVUFBVSxFQUFFO0VBQ2QsQ0FBQztFQUNENEcsT0FBTyxFQUFFO0lBQ1B6RyxTQUFTLEVBQUUsTUFBTTtJQUNqQm1DLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNaakMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUN6QnVJLEVBQUUsRUFBRTtNQUNGeEwsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7TUFDMURLLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7TUFDdkJILGFBQWEsRUFBRTtJQUNqQjtFQUNGLENBQUM7RUFDRHdMLFFBQVEsRUFBRTtJQUNSekwsVUFBVSxFQUFFLEdBQUc7SUFDZkQsUUFBUSxFQUFFLEVBQUU7SUFDWkssVUFBVSxFQUFFLElBQUk7SUFDaEJULE9BQU8sRUFBRSxNQUFNO0lBQ2ZnRCxVQUFVLEVBQUUsUUFBUTtJQUNwQnFJLEdBQUcsRUFBRTtNQUNIVSxFQUFFLEVBQUU7SUFDTjtFQUNGLENBQUM7RUFDRGpGLE9BQU8sRUFBRTtJQUNQekQsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07RUFDN0M7QUFDRixDQUFDLEM7Ozs7Ozs7Ozs7OztBQy9FRDtBQUFlO0VBQ2I7RUFDQStKLE1BQU0sRUFBRTtJQUNOcEMsSUFBSSxFQUFFLFNBQVM7SUFBRTtJQUNqQnFDLGFBQWEsRUFBRSxTQUFTO0lBQUU7SUFDMUJ6RCxPQUFPLEVBQUUsU0FBUztJQUFFO0lBQ3BCMEQsZ0JBQWdCLEVBQUUsU0FBUztJQUFFO0lBQzdCQyxVQUFVLEVBQUUsU0FBUztJQUFFO0lBQ3ZCQyxtQkFBbUIsRUFBRSxTQUFTO0lBQUU7SUFDaENDLFdBQVcsRUFBRSxTQUFTO0lBQUU7SUFDeEJDLE9BQU8sRUFBRSxTQUFTO0lBQUU7SUFDcEJDLFNBQVMsRUFBRSxTQUFTO0lBQUU7SUFDdEJDLEtBQUssRUFBRSxTQUFTO0lBQUU7SUFDbEJDLE1BQU0sRUFBRSxNQUFNO0lBQUU7SUFDaEJDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLElBQUksRUFBRSxTQUFTO0lBQUU7O0lBRWpCO0lBQ0FDLEtBQUssRUFBRTtNQUNMRixJQUFJLEVBQUU7UUFDSjlDLElBQUksRUFBRSxNQUFNO1FBQ1p1QyxVQUFVLEVBQUUsTUFBTTtRQUNsQkcsT0FBTyxFQUFFLE1BQU07UUFDZkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLEtBQUssRUFBRTtNQUNUO0lBQ0Y7RUFDRixDQUFDO0VBQ0RLLEtBQUssRUFBRTtJQUNMbG5CLElBQUksRUFBRSxTQUFTO0lBQ2Y7SUFDQTtJQUNBNmlCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCO0lBQ0FzRSxTQUFTLEVBQUU7RUFDYixDQUFDO0VBQ0RDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDM0NDLFdBQVcsRUFBRTtJQUNYcm5CLElBQUksRUFBRSxRQUFRO0lBQ2Q7SUFDQTZpQixPQUFPLEVBQUUsR0FBRztJQUNaO0lBQ0F5RSxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYdm5CLElBQUksRUFBRSxHQUFHO0lBQ1Q7SUFDQTZpQixPQUFPLEVBQUU7SUFDVDtFQUNGLENBQUM7O0VBQ0QyRSxjQUFjLEVBQUU7SUFDZHhuQixJQUFJLEVBQUUsUUFBUTtJQUNkeW5CLElBQUksRUFBRSxPQUFPO0lBQ2I1RSxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q2RSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7RUFDN0NDLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVEMsV0FBVyxFQUFFLENBQ1gsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxDQUNUO0VBQ0Q7RUFDQUMsTUFBTSxFQUFFO0lBQ05DLFNBQVMsRUFBRTtNQUNUL0ssUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO01BQ2pFdEQsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztNQUNyQnNPLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7TUFDdEJ0VSxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0QyTSxNQUFNLEVBQUU7TUFDTjVHLFFBQVEsRUFBRSxPQUFPO01BQ2pCUSxJQUFJLEVBQUUsQ0FBQztNQUNQOEgsS0FBSyxFQUFFLENBQUM7TUFDUjNHLE9BQU8sRUFBRSxRQUFRO01BQ2pCZixVQUFVLEVBQUUseUJBQXlCO01BQ3JDLGtCQUFrQixFQUFFO1FBQ2xCTixlQUFlLEVBQUU7TUFDbkI7SUFDRixDQUFDO0lBQ0RrTyxPQUFPLEVBQUU7TUFDUC9PLE9BQU8sRUFBRSxNQUFNO01BQ2ZnRCxVQUFVLEVBQUU7TUFDWjtJQUNGLENBQUM7O0lBQ0RnTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ1JDLE1BQU0sRUFBRTtNQUNOcE8sZUFBZSxFQUFFLFNBQVM7TUFDMUJzSyxFQUFFLEVBQUU7SUFDTjtFQUNGLENBQUM7RUFDRGMsT0FBTyxFQUFFO0lBQ1BmLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDVmdFLGVBQWUsRUFBRTtNQUNmL0QsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ3pCMUYsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUM5QixDQUFDO0lBQ0RvSCxRQUFRLEVBQUU7TUFDUmhNLGVBQWUsRUFBRSxxQkFBcUI7TUFDdENzSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ25CMUYsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNEMEosVUFBVSxFQUFFO01BQ1ZoRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ25CMUYsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNEMkosY0FBYyxFQUFFO01BQ2R2TyxlQUFlLEVBQUUscUJBQXFCO01BQ3RDc0ssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNuQjFGLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3RCLENBQUM7SUFDRDRKLE9BQU8sRUFBRTtNQUNQeE8sZUFBZSxFQUFFLFNBQVM7TUFDMUJzSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ25CMUYsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRDZKLE9BQU8sRUFBRTtNQUNQbkUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNuQjFGLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNEOEosR0FBRyxFQUFFO01BQ0hwRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDaEIxRixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN0QjtFQUNGLENBQUM7RUFDRHVGLElBQUksRUFBRTtJQUNKcEIsT0FBTyxFQUFFO01BQ1A0RixVQUFVLEVBQUUsU0FBUztNQUNyQi9PLFVBQVUsRUFBRSxTQUFTO01BQ3JCSixVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQ0RvUCxTQUFTLEVBQUU7TUFDVHJQLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN4Q0MsVUFBVSxFQUFFLEdBQUc7TUFDZkMsYUFBYSxFQUFFLFNBQVM7TUFDeEJHLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDdEQ7RUFDRixDQUFDO0VBQ0RpUCxLQUFLLEVBQUU7SUFDTHJCLElBQUksRUFBRTtNQUNKaE8sVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEb0ksSUFBSSxFQUFFO01BQ0p6SSxPQUFPLEVBQUUsYUFBYTtNQUN0QmdELFVBQVUsRUFBRTtJQUNkLENBQUM7SUFDRHFGLFNBQVMsRUFBRTtNQUNUckksT0FBTyxFQUFFLGFBQWE7TUFDdEJnRCxVQUFVLEVBQUUsUUFBUTtNQUNwQjJNLGNBQWMsRUFBRSxNQUFNO01BQ3RCdFAsVUFBVSxFQUFFLEdBQUc7TUFDZkosS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEMlAsR0FBRyxFQUFFO01BQ0g1UCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQztNQUN0QzFYLENBQUMsRUFBRTtNQUNIO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDRixDQUFDOztJQUNEMm1CLE1BQU0sRUFBRTtNQUNOalAsT0FBTyxFQUFFLE1BQU07TUFDZmlOLEVBQUUsRUFBRSxDQUFDO01BQ0xoTixLQUFLLEVBQUUsU0FBUztNQUNoQjBQLGNBQWMsRUFBRSxNQUFNO01BQ3RCdlAsUUFBUSxFQUFFLE1BQU07TUFDaEJLLFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQztFQUNEb1AsTUFBTSxFQUFFO0lBQ05DLE1BQU0sRUFBRTtNQUNOcFAsS0FBSyxFQUFFLEVBQUU7TUFDVEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsWUFBWSxFQUFFO0lBQ2hCO0VBQ0YsQ0FBQztFQUNEO0VBQ0FtUCxPQUFPLEVBQUU7SUFDUEMsSUFBSSxFQUFFO01BQ0poUSxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO01BQzVDdUksR0FBRyxFQUFFO1FBQ0g3SCxLQUFLLEVBQUU7TUFDVDtJQUNGLENBQUM7SUFBRTtJQUNIO0lBQ0F1UCxPQUFPLEVBQUU7TUFDUHBQLGVBQWUsRUFBRSxhQUFhO01BQzlCMk8sVUFBVSxFQUFFLE1BQU07TUFDbEJuUCxVQUFVLEVBQUUsTUFBTTtNQUNsQk8sWUFBWSxFQUFFLEtBQUs7TUFDbkJWLE1BQU0sRUFBRSxTQUFTO01BQ2pCRixPQUFPLEVBQUUsYUFBYTtNQUN0QmdELFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsUUFBUTtNQUN4QjlCLFVBQVUsRUFBRSxxQkFBcUI7TUFDakMrTyxVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQ0R4QyxPQUFPLEVBQUU7TUFDUHBKLE9BQU8sRUFBRSxpQkFBaUI7TUFDMUJyRSxLQUFLLEVBQUUsT0FBTztNQUNka1EsRUFBRSxFQUFFLFNBQVM7TUFDYi9NLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7TUFDbkRsQixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7TUFDakQsU0FBUyxFQUFFO1FBQ1RpTyxFQUFFLEVBQUU7TUFDTjtJQUNGLENBQUM7SUFDREMsU0FBUyxFQUFFO01BQ1Q5TCxPQUFPLEVBQUUsaUJBQWlCO01BQzFCbEIsU0FBUyxFQUFFLE1BQU07TUFDakI2SixFQUFFLEVBQUU7SUFDTixDQUFDO0lBQ0RVLFNBQVMsRUFBRTtNQUNUek4sTUFBTSxFQUFFLFNBQVM7TUFDakJzUCxVQUFVLEVBQUUsTUFBTTtNQUNsQnZQLEtBQUssRUFBRSxNQUFNO01BQ2JrUSxFQUFFLEVBQUUsV0FBVztNQUNmaFAsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEeU0sS0FBSyxFQUFFO01BQ0x0SixPQUFPLEVBQUUsaUJBQWlCO01BQzFCekQsZUFBZSxFQUFFLFNBQVM7TUFDMUJaLEtBQUssRUFBRSxNQUFNO01BQ2IsUUFBUSxFQUFFO1FBQ1JZLGVBQWUsRUFBRSxTQUFTO1FBQzFCWixLQUFLLEVBQUU7TUFDVDtJQUNGLENBQUM7SUFDRG9RLEtBQUssRUFBRTtNQUNML0wsT0FBTyxFQUFFLGlCQUFpQjtNQUMxQnpELGVBQWUsRUFBRSxPQUFPO01BQ3hCWixLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0QrSyxJQUFJLEVBQUU7TUFDSjFHLE9BQU8sRUFBRSxpQkFBaUI7TUFDMUJyRSxLQUFLLEVBQUU7SUFDVDtFQUNGLENBQUM7RUFDRHFRLEtBQUssRUFBRTtJQUNMNUMsT0FBTyxFQUFFO01BQ1B4TCxPQUFPLEVBQUUsQ0FBQztNQUNWdEIsWUFBWSxFQUFFO01BQ2Q7SUFDRixDQUFDOztJQUNEMlAsS0FBSyxFQUFFO01BQ0x2USxPQUFPLEVBQUUsTUFBTTtNQUNma0QsYUFBYSxFQUFFLFFBQVE7TUFDdkJELGNBQWMsRUFBRSxRQUFRO01BQ3hCRCxVQUFVLEVBQUUsUUFBUTtNQUNwQndOLElBQUksRUFBRSxDQUFDLHNCQUFzQixFQUFFLFNBQVMsQ0FBQztNQUN6Q3BOLFNBQVMsRUFBRSxHQUFHO01BQ2Q1SSxDQUFDLEVBQUUsQ0FBQztNQUNKK1MsVUFBVSxFQUFFLFNBQVM7TUFDckJwTixNQUFNLEVBQUUsbUJBQW1CO01BQzNCUyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNENlAsV0FBVyxFQUFFO01BQ1h6USxPQUFPLEVBQUUsTUFBTTtNQUNmZ0QsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztNQUNwQ0UsYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztNQUNoQzVhLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1Y7RUFDRixDQUFDO0VBQ0Rvb0IsS0FBSyxFQUFFO0lBQ0xyTSxLQUFLLEVBQUU7TUFDTGpFLFFBQVEsRUFBRSxDQUFDO01BQ1hDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFDRHNRLEtBQUssRUFBRTtNQUNML1AsWUFBWSxFQUFFLENBQUM7TUFDZjZNLFdBQVcsRUFBRSxhQUFhO01BQzFCOU0sTUFBTSxFQUFFLEVBQUU7TUFDVixTQUFTLEVBQUU7UUFDVDhNLFdBQVcsRUFBRSxTQUFTO1FBQ3RCMUssU0FBUyxFQUFHNk4sQ0FBQyxJQUFNLGFBQVlBLENBQUMsQ0FBQ3hELE1BQU0sQ0FBQ00sT0FBUSxFQUFDO1FBQ2pEbEIsT0FBTyxFQUFFO01BQ1g7SUFDRjtFQUNGLENBQUM7RUFFRHFFLE1BQU0sRUFBRTtJQUNObkQsT0FBTyxFQUFFO01BQ1B6TixLQUFLLEVBQUUsWUFBWTtNQUNuQmtRLEVBQUUsRUFBRSxTQUFTO01BQ2J2UCxZQUFZLEVBQUUsRUFBRTtNQUNoQnRZLENBQUMsRUFBRSxVQUFVO01BQ2I4WCxRQUFRLEVBQUUsQ0FBQztNQUNYRSxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNEa00sT0FBTyxFQUFFO01BQ1B2TSxLQUFLLEVBQUUsU0FBUztNQUNoQmtRLEVBQUUsRUFBRSxhQUFhO01BQ2pCcE4sU0FBUyxFQUFFO0lBQ2I7RUFDRixDQUFDO0VBRURqRCxNQUFNLEVBQUU7SUFDTjtJQUNBZ1IsSUFBSSxFQUFFO01BQ0p0QixVQUFVLEVBQUUsTUFBTTtNQUNsQi9PLFVBQVUsRUFBRSxNQUFNO01BQ2xCSixVQUFVLEVBQUU7SUFDZCxDQUFDO0lBQ0Q7SUFDQTBRLEVBQUUsRUFBRTtNQUNGek0sT0FBTyxFQUFFLGNBQWM7TUFDdkJsRSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0R3TCxFQUFFLEVBQUU7TUFDRnRILE9BQU8sRUFBRSxjQUFjO01BQ3ZCbEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNENFEsRUFBRSxFQUFFO01BQ0YxTSxPQUFPLEVBQUUsY0FBYztNQUN2QmxFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRDZELEVBQUUsRUFBRTtNQUNGSyxPQUFPLEVBQUUsY0FBYztNQUN2QmxFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDRDZRLEVBQUUsRUFBRTtNQUNGM00sT0FBTyxFQUFFLGNBQWM7TUFDdkJsRSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0Q4USxFQUFFLEVBQUU7TUFDRjVNLE9BQU8sRUFBRSxjQUFjO01BQ3ZCbEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEO0lBQ0ErUSxFQUFFLEVBQUU7TUFDRmhSLE1BQU0sRUFBRSxDQUFDO01BQ1RnQyxZQUFZLEVBQUUsV0FBVztNQUN6QnNMLFdBQVcsRUFBRTtJQUNmLENBQUM7SUFDRDtJQUNBbEosRUFBRSxFQUFFO01BQ0ZDLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDRDRNLE1BQU0sRUFBRTtNQUNOalIsTUFBTSxFQUFFLGNBQWM7TUFDdEJrUixJQUFJLEVBQUUscUNBQXFDO01BQzNDQyxRQUFRLEVBQUUsdUJBQXVCO01BQ2pDM1EsTUFBTSxFQUFFLGdCQUFnQjtNQUN4Qm9ELE1BQU0sRUFBRSxpQkFBaUI7TUFDekI5QixRQUFRLEVBQUUsbUJBQW1CO01BQzdCQyxPQUFPLEVBQUUsY0FBYztNQUN2QjNCLFFBQVEsRUFBRSxxQkFBcUI7TUFDL0JHLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJ3UCxVQUFVLEVBQUU7SUFDZDtFQUNGO0FBQ0YsQ0FBQyxFOzs7Ozs7Ozs7OztBQzNXRCwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLTgwOGZiMDFiYWIzZmM2MzU4ZDk3NWI3Mjg3ODU1NDI3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQXdDQVlBQUFCdVpVamNBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYlBTVVJCVkhnQnJWbGRhQnhWRkQ1M1p2L3lWMWZCV2hCa0l2UkJiY2t1V0gwcHVFVWZmTkw2MXRaQ1VyQlFyWkRtVlpCbThja1hUYUcxZlZFVGFOTlZxbzJDb0tCMGduMkl0cERXNXFrdGRpcUlwa3JaTm9uWlpIZm1lczdkbit6T3ZUTjdaemRmbU96cy9UdmYvZTY1NS80c2cwMEFueitZdy84Wk1ObEx3RmtHazlMNFBWM05aVVY4ZDRDQkF5NmZ4WGViWmFldlFaZGcwQ0g0L040MHhQcEh3V1BITmtocW0zWEFjL01BSG5haTRFQUhpRXk4TzhLU2VleUFkNEpsejAxQVJFUWl6dWNQWk1Bd0wrS2JCWnNLNmtCNVR4VDFEZDJDL1BxYncwajYwdWFURnExYllNVG0rVzhIOStyVzBGS2NYejk0SEQvR1E4dDRIUGg2QmJ5MUNyb3V2cnRlTmNOZ3dHSW1HQWw4VW5IUXNEYkNoczVOdFN2VmxqaVNIc1dQUUIva1pSZmM1VFh3VnN2QU9ZZFFZNHlCMFJNSGN5Q0ZuUWtiN1Bia1E0bnorWDAwaEhlVWVhaXF1MVFTcER0QmJFdEtkQ0FBUmZBcTJUQ2ZEK3kyaUI1Ry9KSXlyK0pCK2Q1U3g2UUpsWWNsV01jMnFDMEYwSGJzWWxqOTRQRXlNT1FwSnFJZy9lL3loZzhIZ01YN2dQVnNEUzFEYmliYVVwUFBvSnVPQjdhdmJEREFSY2c5U09sMnBBbUozS2ZBVnhlaC9NdDdiY3V5dUFtSnJRT3FMSFNaMkNETFRoYjlHV3JGVGZPNEtwbDhXb2UwOGVUTFFtM2pzWjNpYVFjeHdkRjFGRUNYcVJ4VDJnQmxTMFpPU3NMaDFQWHAyUFlEalhkeiszNnRPaFVTUmVreWJGaFZYaUplMnpCWi9uUlNXd2QxdFJ2Zk5WVVhObFpVd25DcnlzbG5SMUZTV3IyRTJ2K3RndzZhMWE1RFYzV3lRZk5JQnM5SWRxUXlESWI4U1I2dWlFR2c2QUU5VHdBYkdBUmp5NkF5a3BEaXNXZmVBdS8rQWs3WWU4QWYvcTV1akVpanYwTlNvcFVEM3lLb0lpNzFqcSsxRWpldDE4QkVsNEI0Zjl1UXQxSG5kZkUwMnFRT1lOVHhuRy9CWFp4cnBMdWxNc1Q4eEExREVsTW1MZzRCUHVLK1NNTG9iOHZUMEEyb3cvUjRUYVJWdG1xcEVxY1dIeGZ4VzFYTk45c3J6amZnM2pvUDNhS0NiYmlvZUF0YzVYNG5uSGdrbzdlbnV5SXZTR01ibmNKSFBGVlVGV0tHZWkvV0tmbHVTUk5haU5lV1ZwazhMc21CSklpOGY3aEQwSTQwU3lodFNZZHJsYXM0VXFFUTRnU0tEcnBvVjlaSUt1SUZBNDI5aWdlelVxR2U4Sk9MYmtnVWJXR3NEMjByb1NEdUtqZ3A2czVJalptR1dva0dHZjNReUhDeENteW5OeEUwbjJ5cHJGd21SdjRrRFUzSWFRVkFRZHk3ZndNNFBuNkV4WDg2RmNuZ0RzdWV0YVd5VXNNNFFYRlRNNFZkR20xT0o4Vk5QT3pTeXRhU2prUllySytGTUVVYXIwYWFWbGdUOXk5MWR4SUxEMjRUZUhtbHBSMnpQeWxHVm9FWlZXTEErRmR3WHhBYmxRby8yZ3VlL3lCUkkrMG5YSWY3NTAvaWFlNEFQYnk4Y1U0aHdvRWo2cmtuVk1tQmgyVlVmY0t2dWtoSDB1WEZwWllUUFExLzRNYkpiOUJYbGtqSEgrOFBVanZQaHM2T0s5dUJRT0lqZFBvZ1daUjdsL0kveTFxbm9UQ0VrMGJmSGpvWEdJSUNsM3p5OVk5KzZKa0pNMmhpRk9nVTVOTnhQR2NHS0ExSHBnYnMwUHBCR2JrRGh6TTMvMHFjb1NISlBPVksrUlMyS0w2TE1Jbks2NnBQY1RxT2M4WHNTNG9MSWhWTy9aaUNuMi9HTTlhT0YyZWRoVjhkVlpuZzRNd1Q0bDVqOG5KMTBnenZWcDgzaWJpUjdCZkU2VFpMWE1HaC96ZDJsSFFGaHlzdnJiNGhjYnFCcWN0SnVIQTFXZXNscDBPN3JTcW5WRHkzNzUwUmxHT2svdjNhSHpFSVVyNE9NUUtvSnJtUGVOQVZ4SVBLbWpReW1CZWtjQjJrOVBSY1MzU3hyQjI3N2pvTFY2UzlDcE5KSDdIUThlZ0d5L0xuN2Q1ZWhxT3ZsR0RiSTkxTlNqLytmbURBKzEvM3d1MUZwWTVGV0kwUDJqTVRMWXVpWW1ZWWRCMWdxVnE0ZkNzT1k5Tjk4UDBOblZ2WDlsZ3VNZUVhaHovckR5Sk5TRVB2dW5TMzBxSjRUZTA3b0FGU2ZYaDNTYmhQMUJFZ3dsOWRUY0NGSzBsWVh0TzY2UzdpSk1yYWhUTk9QYUYxY2hwNGc4VkJDelM4SDM3WEs5N0poVDU0WTJVS25YZ0lwYkJBanYxb0dMZkwzSnNkS3d5TTBweUppRFFLK2psKzdxa25OTHFiMi84MjNxY1lGNkVUY0ppMEM2Y09OYjdTVFMra2F1UkxSWmFkS1c3WWVSZTNFM3dVT2dGbmUrekNTWnRlbTdwdWZBeWR3Y0ZBbm05T3FCRlZIZ1B4em1RYzFzdkQyTm5vUDN3eFRoeXo5Q3BtaEQvOFJRTG5ZM2JodEsxYjNMazJWN0tlZldFTngvcFZpSTV0MXM3bkh6Z0xWK2VxaWpPOHQrQ1F4MC8wUlZaVHluQ3FlZUxIMWlBWGN1ekNKNU1RRWZZWHB5WnkrNDlTOU1vb0M2QkxOTjdKUHZmU1ZZNHNYWGR1UWR3K2Z6cjBkOGJjdnFNMlZzaEpHUzRiZzA3QnNTN2o4aThlWXI1VS9UZ01tdmNxTEs4MDhPWEpHZWdRZ2h4WExlZHVYcWUrRm5HMUVUMEQ0WEFQdFp6Z2hkb2JzVG9NRVc2eW1sUm5MSzlySUF5aURZODNuWEQweGRBbTNxUTZHcXRNd21ZaGxaZ1Fxa2RRbTJCQ0JPRCsrQzc5WkJzbC9MV0RDSS9QN2NKYkltOEt3MXhSdDk3L0FNYk84RHhyazNrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQXZDQVlBQUFDRzJSZ2NBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBV01TVVJCVkhnQjFWamRUeHhWRlAvTjdGSmcyVmJhc3JTV0xhd0NrUThsZkJRVGpkR1NHRTNVMVBKZ29vbUo4QmNvejJxZ2lacjRKTHo2WWtscWZGQmo4VUd0THhCOU1FcUJ0VWFndEkyN2EybFVGbHlxZkMwdzR6bDM5b3U1ZDloWkNnLyt5TUtkYzg4OTg1dmZQWFB1V1RRVUFITUs1VEJ3bm9aUFFVTXJUSVJvWEo2YVRwQXRRcllJalVlUXhKajJtQmk3Z3ViR3lSekhXZWg0bllabmMyN3NCaGVKMEFVM2hIWWxJaFFBK2ttRk4zQnZ5RXZJa1lqNUUwbnZ3UmMwREdGL0VLRUg2dFU2TWFhYTFGVkdVdUkxSWpHNmp5UWdZdWtZRmJFVmtCUXhyMUl5YWtJSk5mUmlvTFFKT0hRYUtBb0FuaU9XZlhNQjJMNExyTjhFa3JldHNXTU05R2h0R0hZa1FteERKTjhVVkFuSkJNcmE2ZE5HcTRxUkYydlR3RDgvT0JGS1lCdGQycU1JcTRsTTREZW90b09mL09pNTdOTzdCWk5ZK2hMWVdwRG5OSVMxZHJTbEwvVWNFajJPSkk2L1ZEZ0pCcS9odGQ2QVBHZWlsY3JDUUpaWGxvaXNCZ2NLdk9wdUszYURzUUhFTDZtMktVRlNQRUQ1a3RCVEpIcWdVb09mNWw1Sk1EaS95cDlWelpSalM5dzd0VFdhNHBYaU4yTXYyK0dFUTBFcnBoMGV2Q2lJaU9wcGl0SzlFNzRtN0R0OHpiS043czBjZEpLbVZacGtKYmhPN0RkWUZWMngxY1NCdDBZbVVoVEFnYUc0VnJiUktjNUU1T0sxbjdsaGgwb1J6U0tpbUpDZDQ0c212djl4RzI3QnZyekdUV3pCVDJrMU55VFR4QzhHUHZ4NEM2dHJKdkpoZFEzQzl5cXRjUXVkZmlLUzFaQ0pOTlpadFMvMjc4djBHblpheHJJbmdaUHZBcFZ2WlcyK1RrUlhlc1F3VktYb01qWVY1WjRLbTVjT3VZaWt5OFl0eWJNNnFNTlhTcjFnTkk2R2xsZUFrb2ZwOHdnOS9qZzlUZ2xsV3RZV2kzd2wxalRVS3dUZlVoSUo2L0JtVDhBTVdKSGs3eklaZXNMWjhEZkF5bmQwZmh5ajAvVUtzUHdKOFBkSE8yd3o0YS9ScUNLUmJoWHNJQTVlcnZQbUpIVk45cUsyT2kzVmtwcWdaaVhzM2N0eXNCeGI5TGFKamhZRmtaVkoyV1pTazUwK2E2ZzNHSkVjdUord3ljaUtjQ0xHbDV3VGx0OFVubStzc3hGaEpUaW1IWnJWSUZuZVhtcHUrU1MwSTNGbHh4dlVsSko3K29iejJ4Q2R0MGhXSE04eGNvekZUMVh1RWY3YWtTSEMwbERTRGtsdXZLZkxZNW5MaW1PYVNOall2TE1pTXpjTjhxRnRyTXBSaEdPb2NzUEFjTHF6ejNwN01TZ1kyc0Z5OHRPa0FqWFdVOExlY0NiQytaRkoxTFFTcWkyaGUxRkhQNUMreUJBUnFteWpXeG1kbTJFT3VQcXIyUHVGSmNPeHNNMlNJcHhMN0l1RlM5WmFaVXgwNVY3dXlDalJ6QnJvVXk1a1JaYS9SWFhwWnlKaFk5SGxuUldZeGpPelZwbzFIZnRjK0RwMjhuUVArNWN0cjkySDVCcWtYcktjS1Bhcll0UlVMb3Eva2JrSk5OeDNiY2RjYks2RmZqK0I2cFNQQTRrTGZBKzdXWG5XaUwwenhUWkY3SE8ra2cxQkp2Wm5oYlJ1SmxhRm1oTng0YU5BZ21QbTVrVmVJb0xNR1Z5bTJTNWFQR3lmYTZpWkZ6ZTFJNTQ0UW1yRTVXQlV0Q2duMmtSTUJ6Z1NFV1RhS0xQUGlPYTJGemwxcHJweUFmSGx3MWhkeng3cFBJNytkUnlOTlhmc1lYb3BSbGUrL3dqc1NpUkRxSU1LSHUxdCtyb3BkYk9aMkttTUQ1TklrOHlBazdKREZNdTg4TUlsT01IK0dEM2R2N0ZWTERvNm45K0gyVHZOQ0ZSNFVPWXZ3L1dGQm9SQ1IrQS9Hc1JpTWdqVDlDUUNqMDhPdW82UEF2RGVPMFA4dlZqcWNWdmFtMVh1WXk4ODkzUVhYTUxWMW1TaEpYQkFjTDAxak9ud2RmQXI0QTV1L2ZaQUpCaTZINFlobjd6Qm1sT1N6VEFQa0VoeFNURjBYVTRydjk4djJYUlBRZWxYR0pGYnN4R29KQzg2VktUd1BrQkZxbXVyRXBvbVArbUQ5U0haV1R0QVJjcjhwVDlybW43ZWJ2Y2ZMcE44RGRNWVJnRW82UFY5OCsyK0FkTTBodkw1VVo0T25YdittWXNvQUlYcGw4TEF3QWZsc2Jub2xBa3p4TmROclE5WndUUTlYRnQzb3F1N3U3dmdlbE5nUVVzVDZVc2trOG5oemVRbWNqOGI2MnNqZXlIQjhHQ1B1RFk5UHRiUzJIbVVORzBJbkt4WXB5MTduN2NPLzNmOEJ4NDc5SnhwbTFPcUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQTBDQVlBQUFEMTlBcktBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBV0ZTVVJCVkhnQjdWclBieHRGRlA1bWQ1TlNrWlFnRGhRcGFWM0VCVnFSbUpaQ1RuVXZVQkFINTRDRTBwVFdWeTVwNEE5byt3L1E1c0FSMVNrdElIRm91ZkJEcW9pNVFLVzIyQkVpNmkwYk5VZ1JGYW9ocUVscWV4L3Y3VHFKblhoM1pydXhKVkEvYVpMMTVzM01OMisrZVRQekhLQk5vSmtUYzFMUUpsaG9BNmo0WG9wLytvVm1SL2VpRFdnTDhVN2dNZkgvRGFoNFBFK2xzV20wQ1FxaEhmTUNzNTN6L0RpbFhyNThEUjBFell5Tk03TU1hazVPcGZQbFZqWk9lSFVuQlVLV0g3STBjL3lVR3J3eUJaTk9pMzE5V09IaVZGUCtpNnJqcW1IWGhTR1k5Qm4rZFpiN1pxeEtueTJkcGpTTjVQblh5ZnFuVVBKMHN6OER4em9DOHJJZ05kU3lNVVVsS0ZYQVNtVlNEUys2aUNJZFlFb05YajZGRUVRUzMwTGV3MUdWdmx4b0lteXJNK3lkRE9KQW9ZRFZTcTV4QUZRY3kzS291QW9EMGdKdFZQRWI4RERKajZ3MXI3elIwWjd6c05SMGJOSitaYTdUM1RYSGJaeHBlRnMySmUzelFrejRHcWJlcTQ5RXVDVURsdEJxZFNSTVBxSFY0aGdIcEh1bVEzWDg2SEJoTGFWVnVsdzJyUkJ2QS9KNkw3YUJ0Q0RsejJJTUdCT25Zci9vTVl0MmdhVkh0L2VjTmpVM2tnb1ZkNmZnZFJYNXNRL3RSWmtsczg5RU1tWWU5N3JFMiswbURiK1A2aTRqcjV0NS9QYkFmWFNHdU1ESTYxcVAwNjBCMFhXblNNUHZxL0trZGkwWlNJVXk2RFFzZmVUU0U3Y3dpRTdEd2hHZGlSUGNEMjJlR3RVZ0I4OVY2Yy96L2lPcEZEb04ydURpbjJHQWhoa2cxbjd0R2g5cm5kTTh3dkhtbWhaWEdDMHgrUkprYzlEaG1YZUJwWitCM21GZzkwU3c1QmZPQWc5bUFRbi84djZQVDRQUzl5Ync1MWU2RmxNQjZkR2hob05YSGR3NDJZTk0zTXVEckUxeUlMZE9XaUNyTzNweDlyd09QRGNSRUxwempDZHdGM2Y5Y2ZBMzkwTjIwTi9CQUY3OExualdFL2NqaW5EZ205UVVINGYzTnYyTmFGSi9yTDA5SUxtUlZLU1JlRnpJaWtkMWRqTEkrWStpN2ZqZ3BWNVpTRWVabUd4QUphMkZ5RVFJNmZBVXk2VDh2ZDdPVS9NNkV6MXhULzJvdFhtNEFPem8xNXFobHdmM3p3MjlIWGtGblltZU9OVUtNTUhTaldpdjc5d1BMTThHR3RmMnlUY2tEZlEzb01PLzgxMlJDam83bjVSRWp6Q0l0eC84QmkxRTM5S25CbWFIckJyT2FXMUV1MUVlbHpENGw0RytTVTNDQUViRTFhc0xCYTNYUlFJN0JvTG8wZ283WHdya0ZBVmlieCs4bTRjQnpHOUF5c2xoNDBMYkd1SjFJYmdaUGNPQmxLSlJSc1VaZ1NHTWlhdTBuOVNaaURTU2lDR1MyQXpSdHk0TUVuSnhFa2V4N3B6MWFjeUZHcXh0KzVzaDc1WWpGMlpPSGJvYks4M25tQmpWYzNsWjFLcWN5L3N5ejRrZ3ZwVXJPVU0wSHdYV1FwM292UEU1WE45bGVEUWlhMmc5VjBsMHpTVGRwNzlJQkdteEMwRWVKVGduKzR1MVpoOXRXVUc4M2lnWGlkL3lybVhqN0dscHkwZFhKc2hWcWp6bktrOGlDZkV0dWJ6MEYrdlRxUTY3SmQ1VnQycGVkTjdUSUplK04xcnZscDQ2MXlnUGxmNHNMMzNVUDJuSlI2U1p4ekk4ck9sMTBpRnBNZnFsWHhKRW1mVVhJbzBEUHdFekI0TFBjaUtVRTJKelZIRjV2ZXhyMlY1RXJySVJFUjZYUENHNTBPWHlObTlPb20zWklidjdneUlEMlJvS1F6ZTA1bHhsMVEyMXd6YmcrdFRCKzhzVmEyT2h5dkYxZFNFWWhPeW05NXFQdSsvc3Y3Y3ZUdWhyaFcwaGZ2RHQ5K2VVeVUycGpsdmZYRXJjcjQyRXlJeCtNTzVZMWpHbnkzbUNDMHpLODBPdnpidS8zaXdoQVl6aWVCUVUxQVdudXdzeGNaRkxIZ21RbURoQm5mT3F0WEVDR1NlTmJOdWVRRUw4WnpXZXVBSFJPSG04czhhQWJhc0xQMXo1SkpIWEUzK3pMQnEzTElVNGhRakdlZkF3Sk5lNFI3bEs1ZUY1Sm1PczhlN3U3aHdTWWxzMGZ1aXRFOU9jdE1rWUdSTkt0NzY5bEVaQ2JNcy9JVlRKenZIOEZ5amloc1F6NG9wTlZWbUp2UzNZRm8rdllTaDdxczllOVlwS05VY1lJVjFidHRLbFF0NzRXelVkRXUrY2pWaThVMXA1OW9YMDE3ejhua1pBZmtVUjNhaVJQVks2bmwvRU51SmZxOUFjSHBWbWNsTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhpU1VSQlZIZ0JwWlZmVHR0QUVNWm54cWxVcWFxVUc5U1JJRldmQ0Fjb1RTN1FlRzhBTndnbkNKeUE1Z1MwSjNCU0RsQ1hIcUIrUS95UlltN2dCNUNRa0dlWU1TYkV4aUVRdmplUDE3K1ozZmwyakZDajd2K3dtWDJBZ05EcmcwZ0hFUHppVlF5QUNVczIrZGQyUCt1K3hTZXcwekFRanc1Qm9BblBDU0ZoNXYwcW1PWWZ0czUvSHdoUnVCUm1FdkFKNlhEci9HaFl6ak9ESFEwUmVBOVdrQUQrT0Y3L3Zqc0Rkcy9DYmRGczhBWWhzNHMrdTNFTy9IWXhtZG9XWGdVUUhnbDVuN1JwUVJGSzhZcGJaTld0QVBzVnRkMEFPWnZNaGUrZElZUjllSjFpaFcxcklSMXQ0RUU1a1FJQjBYOHhTaURSYmZXNko2RmY1d2IwYUlPQW9WUE93aVB0OW40dExPTWV2SWVtdktNL3RjZGtWcXJHR0QySjF0MmVnamNOVW9UVEhIWURxVFR5eXA3Q0NwRjJLU2xWQ0RJd2crczV4VG5FS2hQdVJWOWNJaDg5czFabkVVelh4ZzFGeHRXTUJsVXJCWERMdmIvdGZzdGlsbVRPSXZVODRjc0dza3dFTWFqSjV0dFpmVDBOZDVFYUczcXVBMWdpUWhoamR4bzJKYVBwaSs3dnMrVkJZcnVocU9WU3piNERiOVNETS9JdVIydHVMTWdqV0ZFR2k0b3hOclBOOFpwZXBUci9MWU9wYjgxbWovQ0s4c2tETkp5YjBvdVU2b1Rac1FsVFNyQm9kUTRtK3dXd3I4dnV2V2VlSllyem9YQU40MmpUcGRYdjdnQU1rdCtUcVlmYXFBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEUUFBQUEwQ0FZQUFBREZlQnZyQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWJCU1VSQlZIZ0IzVnBOYkJOSEZINjcza1FDTjlRcWxBTUM1QW9KRGozRUhDbzE0ZUkweVpHZkhpcm9xYzRQRjlRcUlOVlNUeVRBSldwU2xSeVFxUGhKT0JWT0NYQnFBVFVjSUwwbE9WUVZTQkZ1aVhwQUlRb3B6aUcxUFoxdjdVM1dPMjkzWjUxRVN2aWt4UFo2ZG5lK2ZlOTk3ODBiRy9RT1FHUXlDYktzVVRLTXBFbGJFSkpBVW5SMlp2QStuVDZSb0xxNjMvQ1doRmd3YUlzQlpHd0NRaVRuQzJMa3kzOFdVKzN4K3RTM083ZE5VYUhRc3FVSXVjbmtTNEt5ci9JMHMxekVWMVBMeS8rMWpJK1BMV3dabC9NamM2QStSai92MlRFRk1oaTNKUWdGa1JuWUhhY1BMQ01qdXJ2UFlxeEZteHhoWk9LbWpCb2hjbFFzam1IODVyZVFIcGtXWTJRa2grR2JtcEMwVGlvS0dXQk5MaWRPbjA3SkM2WXBGbXVrVWlrdEUxdENIazY0aGlCUWMvSTRidnhZamhzM3JsMmIwcjZCWlNXaWtBRWl5M1lsSy9mSUMyYVFtU2txUUU2SUVaa3pibmtuNDhXTFRHZm0rN21sWVYweTl1VkpFeXRFaUtBbUNWb1BnRml4ZUlHYkdDcUErbnE3QWtqcGtnRzBDRW5YZ2tYNmFMMklWTTNBZHNjTHhzMmJJODRoTnhuNU4vWFRub2FoWk14WUlOUE1oYmxzSUNIYktySFlqL0ttR2Rwb2xLMTFyaVczUUc0eVRnV2dleGxmUWhYOUg1VTNTbEVZZHUwaU9uaVFhUDkrb20zYlZvL1B6UkhOenBaZlg3NE12Y3hpU2VTK21GM0U1R3NpQTdBcTUwNW12bWR1MzA3VTJrcDA1QWpSenAwVWl0ZXZpWjQ4SVpxWUtCUDBBR3IyM2F0OHN2S3hKaktBWWlIYnplcnFKbjNKT0VUYTJzcnZhOEc5ZTBTUEhoRXRMZGtmdmRMY3Z6dWUyMUVxSHBhQkg1bVFtbGd0cTllWHpMNTlST2ZQRXgwN1Zqc1pBT2ZqT3RKVnVUeXp3elNTZHV6V2dDb0wyWXNtMHh4bVJ6WTNFNTA4dVRZaUh1VHpTNVR0K0pwbTNyeXR6ak9yT0dkY3YzNlpJbURsN01DNEFabU9EZ29GWEFpeFVuRWwyNkkrRDhBbWsrMmptWmtjSFhqL1BScG9NTDFrZ0FXWmdEK0s0bnFyb2hDTDhhNkdnSWRsZ2tnZ0hwNCtaWVBkUGgvQ2dZZFNFWThxTWdlU05ERFFSL0VmQmprbFJESkhJdThqVGRpUHhMYU9aYjFnUi9UMys2c1lpQ0RBSFlzRUFaYVNRcEwvckZVbEU5OWV0dXpGaTl5MUlsbXBMQXFtbVdhL1BYclVuOHl3RExYYnQvWElBSEpjZnV5dWpKbHZWRElBN2dQMVZPRllTUXRsUW5BM0wzQURxQkdITzNmS0xoWUJLMnIyNWw4Wk13M1ZaQno0cDRJZTBvVHByRG1VYnc0ZDRzK0FtejE4U0ZHZ1NIT0RRZkhmSjlTQlRvNVRrYkNYS2hxd3BMdnhBOXZiMVdQd2N6OHl6bVFPSHk2L2h5cytmMDc1WDM2bDdKOS9xK3NaeEY1VGsyb1JDTWo5KytyMWhVakwvNkZyS1ZNV25zZVZvM0Mzdlh2VjBjK2UrU3VaazNBaDFmZ3NYL09mTmxIMnJWREpBQ0RNUFJ5Y2k5clFDOE5vSkEyWWxWVm1OVkJrY25qd2dOZ0paTE9LZUNqU25QeFF6VE4rY1loQ1YwV2FOR0N5OGNOWkIwOFVsYk1YaUxVd01oQ0E5amIxWEhjU2RnTlc5a0lJcmJXWXlTNmpPWlA3bGY5SW1DNndaS0JtaUMwTzgvUHFNVjdwTkFtdEZSN3kwOU4vOEhuR3J3Yk01Mms5b2QvMThac1FSTUxsY3MzTm4xQnZiNVlhR3ordXpqT2NtR3dBVEx2cDRJV2ZrbkdBOG5rQVVrclNuSnpreitmaWhTZXZXZm9ZaGpvUXdlb0ZMTVFsV3lSYWJyejNldFBUNm5HL2FweVAxeHhwQUJaUzc4UThkUnVjbkVLbEJnYjhTZUg0NENELzFKRkVPZkFXK29zMFlFa0xJZnQrcFV3Q3BMd1dRYTNsV2pwWGpVZWxuRXFWVlE5Q2dVbkpTc0ZPbnB3MHc0VlRUSkdDYTNIcGdXaWN0QWdWQ21PeW1sV1h1eHdodUFjcWNCU25YbURTU0pTNlJTc2VEaGVYWFBJR0RHT2NOR0JXT3BEcVlNNFN6a1E4dVNjeW5DWUxCeTdXcEhEcDlzU2RQUFJZK2NhdjFnS3dIT2VyNG5EZ1ladzZ4WCtIb3BTTEg4TVlJazJVQ1JVS2FFU29haGVrWUpnVWlIRlZCUWU0SzVieWZyMEozQWNWT0FlRWhTWldteVRkM1gzeWhWL29vWkwyUzZ5T2dNQ2FuTndpRHFHT1FYMDhlTU9sUzd4MVpJdll1SEZEbzBOVGhydnJrNmowRmRTYUNYWFltVE1VQ25mWEI1UEh3OUJwZTJFNXo0bEp5RTREaCtxK1hGZlhDZW12byt4SWtNcGsxclV2WnhNUFdzNlhTaDN1WFFrZHFLM2dycTdMa2hTL2h2ZForOVFFV1BMS0ZmOHFYb2doNldyYXpSRUhmRy9ic3B6dERCNVltYnI2YkpIZzlQSDhFcTQ5Q2R2VmF1cHRzOXNwbFgyaHljQXRSNUJCd0NQWXVRTFRDMWdFcmhWRXhMNTU5TGh4STNoL0NMOXdDcktVQTVERHNoMHJYYmVNUTdWQUJDV1EzdklCdjlmNXZGWXlRT2lXWkdCTXJTZUV1Q1V0YzdZV04zTkRiNDhWdXhLRzBWdlRybmZveFFVSWRFZ0IwRTZlUVlpeUN3NFh6TWdKOUxDZG9xZ0FFWlEwc2twWnExWGNxT1YzQ2ttN0YyNmFjRU90YnFZSEtETHZyamNSQjVFSnViRkNMaFk3YnJlWjBCSnp1eVVVQ3l0aXJMbUt4V201dlQxbVhMMmFvdzNFLzZQUmdvL0lLbDRtQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGdBQUFBdkNBWUFBQUMyVlFrOUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFTc1NVUkJWSGdCelpuTGJ0TktHTWUvc1IwN2NTNTFldWlwNEJ5a25LUERBWFpCTE5qU040QTNvR0pUS2lSZ3h3N3pCSVVWTzhRYnBHOEFPeVF1Q2pzV3NDZ2JKTVFsbFVKSjFiUXg4MDJheEVsbVBEY0g4WlBhSlBaNE12K1o4ZnhzaDRBRzExOTl2L1d0MjdzQ2hoUUxIbnZkN3grQ0tmWFFmL2I0MHRKOTFmSkV0ZUJtKzhjdGtpUVB2dTd0dzhIaEFFdzRkN0lPUi9UUWQ1ODZZSUx2dWZCSE9ZQkJRdTQ4dWhnK1VEbkdVU20wK2FMVHhIRDR2aG9Vd0lUVldzZ2FXUEpkT0JXVndZU281TE5YaHlSYk4xOTJMNnNjSXcyNDBlNDBpT2UzUnAreGtiNm4xQytRUG1aMUtSeC9QbEV0UWJtbzExRWwzd1BYbVV5NHhIVmFHODg3RGRseG1TM0ZjRzdpUDZWdkcrbnRPcVBvT2c3OHUxS2IyMzY2WG1IN1ZPRjhaK1FHL2xOWlNPRTMzRzUzSWhvT1I2NHh1MDluRkZlWFNxdzhyNDdWV2ttbGlyblJTOUdnSVZ2WVZ0R3h3bGIyd2QraUwwM1IvcWdVZ0l3YUxYT2lJZzZoT2xVbE02YlpIN0MyY3VFRzNHenYzWU1FcmtFRzJLT2w0MldmQjQ3UXFTZ0VHYktwbWpGNkV3aGMyMnozN3ZGMnpkVTgxQUhFb0VBMW8vZHgrdkdtNWl4WTVtUkdSNmllN3lRWnhEZGUvN2c5dTMwcTRBWmRla2M2VUVFMGl2VnlrZjJwc2t6TDFqaFRYbW4wVXZEME1RN0lWa3lYdEVBVEhFV0hUQnFoczNpa09iMWNtUnR4RStmTzZvTUZuT2lBUkpyMXNSNE8vY2tvcWs1TlhqMS8wNUFqZEVjdnhaUStDQzZ4L2FIcm1tRElJRW5nYzNjZmxpc0JYVmdxWU1QSDNUMzQwdTNCbjNTRk5RdzQ0azJCSEt4NVFNSXRoeHdaaDBNY3VveEZZUUFybFpDRnRXR0ZCdXNmSGtGQjgycUpReE9jNHBZWGxmMFBZTlZSUXc3cFZYU0hYb2pud1YvMUtuaHVEbzFLNElNVG55RXhmZnNRTFBGY1oycXhNUVduWlM3aGFDYk1OcTRwZnAvZ2VYZ1pMUGkrZndDOUEvTjdQUVR2R2F2SGR3MFdQSXYvSTJ2NFpqTFJYYmhLLysrQUJTYXI1d0xxMklFdXk4SVlCNHovSWJ2MEFuUU5MRUlXWE91RndYWngyY0VNOFFXYTVaaXAydUx6WkFjR05EMkJYVENBMEhQUUppU0dzemlQZDdIdExFT0t1ZGJFLzVNM2NBUjN3SkFnNHdKY2h1K1pIMHZidk03YVBnTzN1Mm5CSjNTSlZYNndrOGJtSFBKZHcyTnBXK096Wkp1M1N6aWZUUFdCeTd6ajZFOVRZejFndUdGYnVVaHJOTkdIaVM0TTliQk5kWEExcTRDOHF3MzBFUmhNVTRPcGpUcFlseFdTQmpUUmg4bFZqYVllNW5RZ1FxbFdYWDJnTG5UdUJEVDF3RHA4VmdjaWxMdE5WeDg2dXREU0ErcEFNUnlpTlM5MDlLRnpUaW5ySVVNSElyVFhjMVY5cU9wQ1dROFNIWWd3dmk1UzBZZUtMaFQxSU5XQkNQTUxSd1Y5QklxUERTVW82VUNFY1VBVmZham9RcUlIWlIySXNMbzNrZWxEcGd1SkhyUjBJTUw2Qms2bWp5eGRCSjRuSGhsTkhZaXd2ME9GYkgxa25XUENjOVJBQnlKeUNZaUk5Q0hTeFhBNzUwR3pvUTVFNVBMNEtnMVBIenhkQ1BSZ3JBTVJ1WTNnR0k0K2VGT3g2TTl0czlLQmlOd0Q4dlRCMDBWaCt2TE1XZ2NpOGg5Qm1OZkhyQzVtM0plTERrUXNKQ0RDOUpGTXBseGFGOFcwT25MU2dZaUZCVVRvZ3JGTmY0dGhqa3pyWWp3OWM5U0JpSVVHUk82ZklmaUw4Y09STHZDVlRkZWNkU0FpZDAySW9QcG9VVjFjd1YvWHFCNXkxNEVJaXlldG1yaXdUdS9jR3drazBTSjA4RnR3dDkxcnhHK1RCdnhDZmdMQlFXVWJBVUZ4SHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURNQUFBQXpDQVlBQUFBNm9UQXFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZFBTVVJCVkhnQjNWcE5iQnRGRkg3N1o3dE5hWjJVdEUxS3FkTURsQitwU1VWRVMxRzdRUVVKQ1NuT0RaQ2dxWkFRRW9lbTRvQ0FRNUlMMStSU2dUaVFGQTV3UVUwRkVvZ2kyYTFVdFJMUWhCK0p3c1V1YWVNMGFSSlg2WS9YM3QzaHZiSFgySTd0bmJVZFMvQko0NS9kMlpuOTlyMTVNKytibFdDZDhkU0xyMFVBSkIyQVJYLzY5dk0rV0VkSTBDQ3dvWEFRSU5BTklCL0JmL2dOV0NROHhvSUYzU1h4Znh4L1lHRy80SGRVR3Y4eUNnMUMzV1RZME1zNk5qT01wYnY0eGoxaENxODlpOFFtb1E3SVVDTm1GeGYxeE1KSzVHN3ZjK2hHb05kQmhCQk9QYkp2Z3RxYlRTenFVQ004azBra0VpSHFWQU10b21rKzNYNnlGeG9CYy85aFVGVk5WMVUxTW5keitVd00rd0dQOEVSbWZtbmxCRk1EMDlpaDd2UDVRWlpsTUVON3NUd0s5Y0FPUGdpWngvYURvaWpnOXdVQUgxSTRvQVppaWNXVllTL3RDSkdKeFdKQnNnYlkwcmhmOHdjVlJTMDZuenI0UE5TRCszcC8wWDhpNWRQNHd4cmhWb3F0Q0xtd0t4bHlLMy9MbG1rbFp3MUpXaHN6eURvc3NCRnFoZG0xMXJMVWo2YjZ5UFhDL2hZMkxlSjJWY2tRRWFiNEk5aGdTQzJ4UmlHSVNPcEFiZFl4dWc5eE42c0VkR2xRRlMza3gvdHdJMVNSRExtV0NKSDhUZFhvYWlMWEZSR3E0bklWeWZnM2Jaa1FKVUlnNjNnTkJOYU9YVmdlRnFxYko5VEN6bFNzVSs0Z1JSRUpwTEFvRVFKakRPNGNmZ21DOFQrZFF6TjRGQXRjSzZpRlQxWGFsMTNlQU54NytpaDRBUkd5bWFYUHpTOE5kZTdZT2w1NmZzMW9wbkVDR0JZcG1wUWI3T1ZnV1Jaa3JFelN0dXpUMno0WmlXdkxzNVBTK0ZTeVV2M2MwaWM4OTk0cEhTUFdNWHBvaXZDRFk1QktHMG5EVFBWMGRYVEVvUnFaK2NXVk00cWloU2s4dWphTDFqQ3RESkdKR3BaMHZLdWpOUTRla1Vpc2hKakt4aFJaUVUvUWhCNGdmM2htT3RxNXJhMW80VnAwSlMwbGFBYW1pY3NOUkNTZE1jQzI3ZEdkMjdlT1FKMjRjWE5wQkswMExPb1IxSGNtaytuYjFkRWVkWTRWQlFBMDl6QTlIVGM0UkpobG4yd0VFUUsxWTJGN3ZGMXMzdzEwbitnOVJTdUVQQmsyOUVwNHk5ZWY2YjZGRzY0TmtXdVJSY29Od25yd0VMWkg3WnBteHJXdTc5cGZzUG5jVjNwMjFaNUZ3YWlUK2pmOGRobW9VTWhNSFhnQjBqMkgxalJDL21yWjlsU2pMRklLYW5kdVlmbUliSmw2YVZDUVV2ZEFqVjJGd09Wem9QNGJOWTloaWZMenpoRTI5T3BLNlRLZVptYWFPKzczOWVkbmFTT2RncFFKWGJVTWRsRmtnd0pNMHpxUXhnK1JDRnc2QjM0a1FiOUxrSlRHdjJqTms4a2xXSkZxSFhCUys1NkIxU2Q2SjNkdWF6ME82NHpyQzB2akxkZGpKelpkK0tiUUNoWEEraWhqZGV5b3U5VG1EVDVBNWV5bjU2RUo2UGg0SkM0djN4S3NUVmt1UkhNQmdHWmxVYVNtb0FtUWwxY254V3N6ZnY5T05Bc0pYaFd0TnJNM0V0TDRKUFV6STFaYjd1YWZ1VXREWWhkeFphV0o0QXFPU0QwZXVPU3NyaVVzUmx5RDVpSXVXQzlFUEdSbkJmdmZoNlRMcERUQy93SXNLbWNsVTBsMFVPK0dwa0lTZGY4NDhjZ0ZBQ1pJSmhzMW1nY21PbVhFNmNNSnpZSWhrSFZuRTZ2MUJ4c2FESXFQWjNhYlBoMHl3bEVxMDdZbkRFMUJ5a3MvM0JpT203bk82cVNOSlY5L0J4YmUvS0FwcmpiLy9xa2pxLzJEdkY4QlJPa2p0OUFrazZaanBmTU4xOE5RQ2pKUUU4dUtmSlh6NzBiQzBTR2NqRmRPM29JTmtiTjhmVWkvUzVCZk5mT0ZKaTBkY09VODQvZ29QWTNVd2FPUTJidS81RHBVR1JVdGlLbmdCUDVadDQwanB2ckh0SUtNbDlLUHV3TnY4T1cvZHZVS3BnTS9nREwvdDFNNzcxV0YyYy9vM2Q0K3J1cFhNeTBKSFRaVGRKS2pPdHBiUjZIQm9IWmxTUzRycUpCM3BMdWY1WVhJcUJlL2c0Mi9YanJ0bkM5U0RqRERpNkNnUVBJUFZBZkRKQzJyQVRReWRlYTdERGFNaTRnYXRtMmhEbEdzMEJUZE5hYkVvNVRmdTBQaUtyMmt5R05ldHgwcWdkb1JKVUxJbUZ6aUdpMitxeEtRZFRUYzlCRVQ1VmkyVWRPYU1tempaQzFCZ1E5MkpUQ0Izb0F5bHdmZExKT2U2dHplTmxCNHZJeWlXWngvaTRBYTU0b05zeWM3UDN6N1BDVndib3FtM2JacjhPWmJJN3RCa2djcHFJaUlqdnphbk14VlRvY29lN2ZYVWN0VlZXV01UTzRGNnBVTG1GWlBPbitqa05XYmJ4ZFUyWjFMY2ZsY1JmT1d2ZWR4WVJtWWdFb21tS1paVm5pczJBcTVHMjMzaVlpQ0RqWi9ORklRTXQxQklzbnE4WGZGNjZOTG03WTExZG5lT2xEdWZNV3daV2pTQUQ2QnVHV1pJQUpsZnRZVEVRSk5nbVdrbzdLZys2RDdNZTVBUldXb0lwbXUxdGFrWkVsOU9NQ0ZDQVV1ZlErMWdQUXdOMUQvcUN2SERWdnE2K3BxclRnV3EwNG9IVGpBSEVMVlFqWXRNWHd6RjZFV1ZCRDI4aURYeWhOeEVSNWROMmlKRUxwY2oybVpVelQ0eW9uYTdpSmRaVGlTYXltb0h6N1lMVE5xM0pONlJCUlVvYTF6Y3JuTzlqWWFRNk1VRmt2ZGpoYUI5WUMwNDBKUXFEY3lSdExLbUNkcGhxL21Xb1h3OUZJREQ0Y1kzek5vSmRLY1ViRUg3WS9wY2l0WlR5RExxdkdydVNXS3dUZVNEQk42dkM2VlBMOXVRbTVIb1JHdDFJY2RSN1dmRzZQV3lyLy95TmRhdElIRXJWR0RNTitJdDVvR2FUc0VmOWFZZ2ZMWHRtaHlIYTMzZGEyR3ZXOUd5RzM4NkRudE9vUWxDTVhTYnp6M1RXbnUrU3lKMUV5akpOK0draW1IWnI0SitBL1dhSG9OSUtSNTlBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFXQ0FZQUFBREV0R3c3QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUdHU1VSQlZIZ0JyVldMY1lNd0RKVnpIWUFSbkEzSUJHV0Rza0hvQm13QW5ZQmtnbHduYURvQnlRUmxBOWlBYnVCS3Jad29yajgwMTNlbkV3YnArVW5Jb0NBQlkweU9qa3lqRFVxcEk5d0xKTXZRR3JUWjNPSUQ3Z1VtRjJnakV4RnhqMWFqVldqYUU5OVJUb3AwSzlUdFNIa2lQaGZ4MjVoU3E3S0U1UldXb21XRit6QVQ1WmV1cWdYa1Z0UjRVeVgza0hDSUpPUUo4aDNIdHZLbVZhc0R4QllINDNtQm9tcHF5WHdwbFpPT2tSSjdzVG41T2tEZWMweStncC9oSjV3Z2pETWVqRFg2RnpUcVljY2J1Qy81bmYwM3NlYkZKeVNBNUMyNkRkb3I1NzA1NmkySFhzSGZRY216V0h0bi9RRnRpZ1ZJOEp6UzVHak9lOFlxVHA1TkpsSTg4T0lwUWRxaDY1bDBqN1p4U0FtUDdBZWJOTE5scmtJN20veXlSaFA0THRBWTJxbWh0ZTN4bnN0b0lBeFN1UGFvdEdnRTEyVTM3NUhtKzIzb1VJaTQwdmlPTkQvOC80K1FDS3JNZ3VNcnF1bEVmQ1dmSzA5Q0FkZVJJdEJSUDhOMStLbFVtcUNjcnlmNFBYWlJOYlhvdXc4ejk5ODcvMnJCSnZKbkNxeVFmcXBETE84TFF3MFZrWlB2b0tNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYndTVVJCVkhnQnpabFpiQk5IR01mL3N6NVM1M1JJVDhwaGVxZ2txRURVU2dWQjFlUUJ4RnNJQ0ZRUUFsTWVlQVJlRUljcUVxa3FDQWtWSkhqb21kQkt0RHkwbUFlRUVFaUVvMjJrSGh4dENkQ0RCVVM0WXJBSjhiWGVuWDZ6d2VuRzNzTjJIT2hQc25aMlpuYjMvODE4ODgxaGh2OFJQTGdoUUpjbXVGM1R3SGtBSE5QMUFzWUN3eXR5bWZMa2dRZjMxekU4WVpTN1BVM3VyUWRhRUhrNFAwZW9EYkZJQk5IZUcyZmRlQUx3SzJmODZlcnlOUnhZeXpuMzh3b3ZXRFQvdG53a1hpVDlqOVdBakhDRmhKTWIrSWZ5WDZnRjY3MmYxenNNNGdVQkZ4NFQ4VHM5UWU3ekhpYmg4K2oycWVHbEROSTUyZkVkV2VKMVJyMEg0amQ3QWk0UDY0QVluSnliMXVFdlBVY21lWUZFeXZJOVp1SUZvOW9EeWR1WDVrc2VkcGlTazIwcmVraUdxa0w2NTdacHNaVjRnWVJSUWdsZjJzSmMvSURSMSszUVp0VUR0UlU1K1hiaUNYbFVlaUFWdnRSQnd0Y1c5QkQxQWg4N0J0SXZmdzlsT1lnWHlDWHRBUkZsVW4wWGo1UDRJSXBBakFWMXpqUTluWWQ0d2RXUzlZQVFyMVQ3amxOeWhsMjl5eXJEZVkzaFFsckNEUnJUYWM1UVoyaEdZWVF5RUVIazVLOXdRZ09PbEN3SzZlSXpVNzhKUXZnaFJjS2ZhdTZFVmNjNGxwZHBlTlhGb1NhaVVHYzlpN0srYVVnZVBBYzdtSXF1a3ZUQW9NOWpubFc1RVA1VjBvVjczSHkyamRNODBFMDkwcGNZd0pUWWRUM1BQZmw1U0hXVjBLN2RCNCtiaDljVXc4WVJHeUNpamQyQVBaZG0rRHJsL0puTHNTUjIzNHZoYlhjS0V5VlZ6M05OR0FQUDdGZkF4QUR2RzhnMlJKN1FIV29ma1FHcDhNVTExUExiN09yc29aYVBjK1lvL21TMFgwOWY0MjRzODhhSHlvUjQwUnZldVExd2pSOERWbE1PNWlXREZDMjA0Ni9mRGhhOUd0Vm5XSzkweGk3T0MzLy9LT0hLVzN5R3d4Vmh2U2ZzNEVnM1Y5VXY2aW9xaklxSTQvS3k0MDZUMUhVdC81WTNjbDcxd0FGWmlCZUp2S1BRbzgyRytJRldreXVvQ1FKT3o4UzVkWm1WZUVHVU96cEdleVpoYXdDSkZydWpGbkFXcER1OXRiVTNYZ2FxZk1nSG40VU9PL0dDR21aak9iVStOV0JYNXNiVUFCNWM2NGRVc1lXaUc2M2I5WnpCQWxxcmFIT21JbC9HUzdsQ25NUUxwcm9VeXpJT2JXOXQvVUk1YzU5amdPNHFMcGVZVVFQWlpXS2E1N1dWeUJjeE1kV1JFZUZIWXlFZjhSTW9oTm9NWURtZGtIWWFNNlI4eGZPeHRZUHVVeURMdlpwK3pVZThZTk5UdG5YYWF4dGJJOGFNSVFQc3hBdlU1VTBvQnRFTGI2bjkrWWt2NjhjeVQ5eXF1TE95dnJVek8xTjNJU2Z4b3VVTGNSMGpZbTJ6Sk5rTDFlZkRoOGtxWE5OeTV3WGhOaC83SXJhdW94Z2lqeEhtSkY0TTNQVHF1VVVab0MvTStudUg1WjFLZS9XZm9JYkd4MVJKY1p5MEtDaTFWalMwaHN6SzNMYmlpZGpyRStBcGtYaUJFT3NrMkFoRm5mYktob1VocTNLM0hpR044ZnJScVpkSTlybVpmMzg0UEgxeGZ3eitxdktjaDFsQ2dYVHFBdGhOT2hMcHZVY3psMEo1S1NSbVRxUWw4VE1ZS1JyNDN1cjZoVzEyZFFaZFNKS2FhSHQvRmtwTVpwMDdoMGI1K3g5czY2Q0RoS0FRdjd4bDlqQWpwTk05a0k2ZTF3VWJFVHVwQjVHN3FOcTlCQ09DNFd6bDVOWkc1Mm9XYkdqYkduQzcySlhNdmRFSTZkZzV1RWg4TnNadFlQVVhLMUEwSkY2Sm96azdaSnBodVpqenVOa1c0MzJFM09qTGc2ZWhIUHJaVWJ6MGRIRVJTNmNBOGZxM3pETGIydHI4d25XeTh5ZmRqS0w4WkU5Ty9ld05lTEVHQ0o4dlJMekFjakZIWTF0bWh1ajBRa3JEZ3I1RVRqMnowd09KTmg2RlFvZTh1Nm9iRmhSMkZBUHJIb2lvS204V1JvaDdmMXJEMGp1NU02VFYwWWQzVGowS2dtTmRWUkhpQlpaallGdmJSbGtZNFZPNXZPcFdYRGZDaUpYNHNwWnBoYmlRcktob3JHeG8zWWtpY2R3NVBGaTl1YU1xUFh3ODJJa3ZhNW1PZktBOVN5Z2R4OHBDL04wTVd3UDRlNXVDTktsMUdQT3N4S3Z6cHFCMjhadHdnc2RTK25sUDZ0akZ3TmdmdnJ1S0VXSy9wV1REUTZtVitOQXpGZmdqL0FEcm96SFUxWlJidms2OWVBdnh6NytIRm41STd5N05xYWJsVzZqMWhmaEE1dDVNZkZ4aTJET3VCaWRxZmVpTHhyRjlYemZDWkVRMld0OUR4SFlmeDhEMkk0UGlpYVJYaTZJRVdMb1FYN1g1U3NZQU0vSDNQQktKOSt0WEkwL1grTEIrNlF5OUo0UzdwSTcyME8rQ25qWWdqLzB4TkFrbHdIeFBMSHpmUmp4TmNudDNUUFMvRTVPa1FQYXptWjdZM0VoTHJHL1BETFg0c09mWmY1dnlrV0x1UWt4cUVSY1Q4UkdOWStXTDNhRmczS1Uxa3hUWjVPbXVSYi9maXVDVFU2YmlCVFFubW01T2lzRnlER1NKajFDcnR5ZkxNR2xjZDZoVFpIelQyU2t6cGhxTjZHSU16ZnYzZnRiOFdreXhESTNVK3AyVHVrTXlTb1NwQ3lVR0h1NGk4ZUljS0VJTGxCTkpIMzIwSzVRalNoanhiakRZTE1IajM5ZjU2Vms0STVleTlRV2o4azk5Nzh6NVppZFRrU1JIWXlsYlgxRHlQL211Tk0wM095K05hR2swbDFxOG9PUUd1Qk01LzlMbzRzZjlGTXJIeFFxbTVBYlEzR2JzZ1ZFVnIzOFBKU1pWcHNkNEdZOUJ2T0JmM2hWM3hScmdlN3dBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFVTFNVUkJWSGdCN1ZsTmJCdFZFSjdaWGR0eDZpYU9TQnRBUW5LNWNVRUpJQ1FPa1p3Yk5LbElEa2dWUWtweTRkeGM0WkQwQUZlU0s1Y2FDUkNuT2xWSVdnNm9McjF4aVpHUUVna1Z0Z2hCS2dWaU5YYmpuOTBkM3V4bTE3dEo5c2Z4MnFkKzBtcjMvZXk4NzQyL04yL2VHc0VIUjNmZnpTRXAyK0l4QzMwRnFocnBjNW5wcmZKWnJaTGZhMFpMR1llK2syVlFEcEZ5ZnEwWThDWTBmN3gyUTA3SlgwQWZvYmYweGVUVVJzR3ZYUWw2T1RHVUtnTkswRTlJc3FFR3RRY1NCbVVnUURROWdoemNqUFd0R2ZKcmxKSUtKQzVsb0o5bzdWZkJhR2krN2IzeG56eG9YVDFBYndnUHZXbGRQY0JKRFZmRTFZNS9zaG5XeHFGVE1GbjI4TUZENkJTSTV2aVZkZzJIT016WkpjWGJHZGRUNzIwc09sMjNQOHFMMjMzb0JFeDBXQkRXbjFuUGZPOEF5a2htS1RIeGRja3VON1ptaW1LUjVld3lTOEtaRFpGL3dJNE1Xd3BNTmdaWmtHdnpFcHRHUlJBbWwvc3hCOTNDVFhJNEJoMVRtekFCcVFvQ2x0c3VweHdWODFtY0sxVkNEWTFNV3RkSlpGNXJQMThRejY5K2NycFBiUWZnU1JIQ2NGQ2N6UUpxemhveUVCNHJPdUFEQ1dqV3Jxd3JHZTVRQ3JjbUZsVHlFc0RZbkg4ZmxvVjdBb3kvdndIWXZ3ZFJrSlMxdkx1TUJwWWwxTW1URlltZGVMWmQwdFJBaTA5dUErd3VpYVJqSDBMQmZYNzdOQUpady9sMWxRUzk3MjJDa3BTKzluMEpYQXRQaEpWNWxvVlZHZ2lYQmhQNS9iUGdFTVp0VFBib1R3aEhVcldmaUtSOHU1NVU1bXB1SEFiQlYwNjFXSlgxNUtEcFpad29WRGcvaFNpa2d3ai85MVBVOEZhMnhoUnoyN3k2WU1WZ0M4S1JKYjZiaE5HQWRmZGJpUEt5VXpDTUJ4QUYyVW4vdHVHM0lCS29MVThQQjZaUjEyL3kzU1I4TEl1UzY4M2MwZWJNeW5HaERGSGdYbHo3UDNpandNaGtKQk9Dc09tY3h0MlpaYmQzbVZ0NjdwN0tEMDRDZjdReGswZTV2YXR4a0c2Uk1YWGg1Y3NxU05vQmhKSGw4TVhTK090TGdPcU9WYzloN1pXUGhTeEhBUjRKbmRkMkE4MkFvVjJwNzFWQUhNMys4TXlqb1YyeENUdkpEM3RaYUhuTjZTUitaQVhsWWwzZHk0cENLWENnb1RlczJNcUx6eWJMY09wMncyVkJWTERJSmp5cGdEZ3VGV3l5SHNLTVJsTlo0ZFhvc3BLVGtuSlIxL1Mxd01HWTBLUFB6dzV2ZGhRNWVoeG9BalRqam1Rb1JhOFVTTFcxNjB6ZzFOaWJWOGNWbEhpV3JnTW9xc214REtBaTU2QUhJRTFYVzN1SEZVSnZadWlXZ3NQa0xBTWNVaENsVys0NktTVk9INk85T1gwMDk1NEM2WWFuamdnWDA5T25ENk5uSnZEcDZhMENrYkhvcnVOamkxNXJRTnpRRHV1UnlUSjhUeHhNV3RlQUV3Vm50OU9lQ3VPYUFYR0JiZW5DcGd1VklMS013TzhTRE9zTGtIemZUajFSbGlCeCthTElPVUpmRFNYTEI4NjJkMG1saGo1MVVyUFFLV0VidkpHSTdkSGNmVEFobTNvK0wya1M4ZE1rMjlLdE1zSE5nV1oxTlVwYTI5R0k3RzBnZVVYazBQUG5KZTBteXpHV3cxYVlWODlOMkFZVEo1Sm5GVVdlVjE3SWpLTVM3ZkJ0eXVEZld0bG82WGVpZXZRa3VoTWlrOWkrbmhPWitncElPQi9TZGEzK3JMcWFmbWRkaFM3UU5XRWJ0UDNoZ2lDOWZPcGN5TnU2MENpNlRzTGRJRGJDaklNUDhndXAxd2R2cGQ3T0FOVU5hUDVjaGNaT2JYSGs5c01DeEFRRllrUTZPenpmK3ZVUXFyL1VMT09wSkZ3Y0cyV3BGQ0FteENlSkc5ZnpjUHpSUldzMHpUb21mSXdwWFAydUJERWd6bTlyenFKam9pNnlqR1dJQ1IxNVdDeXNjWkFsSHZ6MFh3bi9VRDd3NVpld2RHYTliaXpoeExmUlRqWFFxWVlsa2NHUno4ZkJGMFBtVHBEM3Nja3lHb0dvRktBallDLytwT25JWnIvL0VPZ2F6d24zR3M4Sjl4ci9BOGsvK2wzMGRCQ1hBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNTUFBQUFsQ0FZQUFBRC9ZbDAxQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUhZV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ055NHhMV013TURBZ056a3VZVGczTXpGaU9Td2dNakF5TVM4d09TOHdPUzB3TURvek56b3pPQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEE2UTNKbFlYUmxSR0YwWlQwaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2VHMXdPazF2WkdsbWVVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFk2TWpJck1ERTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFk2TWpJck1ERTZNREFpSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklpQndhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQU0l6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pCbU5tTXpOelU0TFdNNE1UTXRPVFUwTVMxaU0yUTJMVFF3WWpZMlpUaGxaR1pqWkNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaVlXUnZZbVU2Wkc5amFXUTZjR2h2ZEc5emFHOXdPamxtWTJJeFltTXdMV00xTldFdFpEWTBNUzA0TldFeUxXVTVZakEyTUdNM1l6TXpNaUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPbVZpTlRRd1lqUTJMVGMyT0dRdE9EazBNUzFoTlRobUxUTmlOMk0wWlRGa00yTmtOU0krSUR4d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeHlaR1k2UW1GblBpQThjbVJtT214cFBrSTRPRGhCT1RBMFF6bEZPVE5FTVRVeE56ZzJNMFk0TjBNNE1qSXhSRGMyUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qTXhaakJsTnpsaUxXRXlOR0l0TkRjME9TMWlOVE15TFdFd04yUXdNakUyTVdNNE9Ed3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBpWXprNVpqQTBaQzFrWVRZNExXWmtORFF0T0dNek5pMWhNakUwTlRVME1qTTRaamM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPamt3WVRGak1HTmhMVEJoTldJdE16RTBOQzA0TldZMExUVXdNbU0zTlROak9EQmhNend2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZZbVUwTjJObU1UWXRNelE1TkMwek5qUmhMV0poWkdVdE5tRmhaakF5Tnprd09ETTVQQzl5WkdZNmJHaytJRHd2Y21SbU9rSmhaejRnUEM5d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeDRiWEJOVFRwSWFYTjBiM0o1UGlBOGNtUm1PbE5sY1Q0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbU55WldGMFpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV0kxTkRCaU5EWXROelk0WkMwNE9UUXhMV0UxT0dZdE0ySTNZelJsTVdRelkyUTFJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESXpMVEExTFRFM1ZERXpPak0wT2pJNUt6QXhPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ01qTXVNQ0FvVjJsdVpHOTNjeWtpTHo0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbk5oZG1Wa0lpQnpkRVYyZERwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qQm1ObU16TnpVNExXTTRNVE10T1RVME1TMWlNMlEyTFRRd1lqWTJaVGhsWkdaalpDSWdjM1JGZG5RNmQyaGxiajBpTWpBeU15MHdOUzB4TjFReE5Eb3dOam95TWlzd01Ub3dNQ0lnYzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJekxqQWdLRmRwYm1SdmQzTXBJaUJ6ZEVWMmREcGphR0Z1WjJWa1BTSXZJaTgrSUR3dmNtUm1PbE5sY1Q0Z1BDOTRiWEJOVFRwSWFYTjBiM0o1UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG5DOGZvWUFBQWIwU1VSQlZIaWM3WnhwakJSRkZJQy92V1k1NUpCbDhWb3ZGTVNnUnZpQkpxaEl2STBHUVJPamFEQUdCUktSK0lkRXZKV1lvQ0JCbzBLTW9qR0FHQk0xUk1VREFxS2lHRUVPTWJDaWNxckF3aTZIc092dWxqOWVkYWEzdHJxbWUyYlluVW5xU3pvOVZMOVhWVk5UcjkrclY3V1VLS1h3ZUR4UTJ0a2Q4SGdLQlc4TUhvL0dHNFBIby9IRzRQRm92REY0UEJwdkRCNlB4aHVEeDZQeHh1RHhhTW83dXdNaExnWnVCbEpBU3diWkN1QUlNQmM0Q293SHpnUWFJK1RMZ2NQQUw4QzNXaWZNTGNBdzRIaU1kbmNCYndJM0FNTWpkRXIwZlRld0Z0amdxSE80cml0Y1Q0bnU4N3ZBN3hGNnc0Q2JnR1pBaGZRcWdVWEFyOENwd0RqYWpta2w4Qkd3RHJnSXVEMVVSL0J5ZkIvWWFyUlhEVXdFV2tPeVN2ZHhCekFDdUlibzhTZ0Y5aUxqc1piTXYzSEhvNVFxbE9zZXBWU1RpaytkVXFxUDF0MFFRNzVGS2JWZktUVmZLVFhBYUh0K2duYlhhSjFYWThqK3E1VGFvcFI2VmlsVm8remZlNXBEZjFxRURrcXBlUTY5VVZwbXFMS1A2UVA2K2RnSS9UY3M3UTJPa0IyaG56L242RTlBbzFMcVQ2WFVIS1hVUUVzYm5Yb1ZVcGhVaXJ4NTQxSkIrbzJZaWxsL0ZYQWY4RFBpaFFLU2VNaHk0KzZpS3pBUWVFSzNPY0VpVStiUXZ6ZWl2RHN3eXFFWDloUzJNUTNhalByOXg5TjJmRnl5Z1JkMGZZK0FGSEEyOEREaUxSK0xvZE5oRkpJeHRCQWQ1dGhJa2Y0aE1vVTNKdDJBaFVCUC9lK21CTHJCNUVxaUEyS0ljNEdwUm5telEyY1FjTG1sZkNSd2lrT3ZOWFMzalduUXBpdFVtWU9NazFsblZGdi9PZXF5VVFsTUIxNUtxSGZDS0NSamlLSUIrTnR5L1VadWNXY3ZZSXJqZVhORXU5djE4MnpIYmdad1JRTDV1eXhsZDJUWmRoTE9CMTdwZ0hZZVFkWTFuVTRoTGFDam1BcThSZHIxZy9TN0JMY25XWUZNdkdiZ1V1QkpvSWNoRTd4MWJmVnNCUVpieWdNak1Pc0MrSXYwbSs0ODRHN1MzaWZNODhCVjltNjNZd3d3amZTaXZ4cTROYVp1cnR5UExKQlhrUGJDU1RpTWpFY0RjQTZ5V0QvRElqY2RlSTlra1VIZUtRYlBVSWRNNkpiUTFZaUVScTd6NTl1QXBjQlh3RXhnbFVVbVdHdllQRXdwMEFVSml5b1F0NTRpSFJiWUpzY2UzZFpNWUJKaWhKc3RjbGNDbHpqNkhxWUd5WFlGakFiNnhOVE5CL1AwL1ZBV3VvZUFwNEhaaUJjZUFueHRrYXNCcnMrbWMvbWtHSXhoTWpBTGVBMTRIWW03TDR5aEY1NnNWVUIvaTh3QmZiY3R3UHNENjRHTndDWmtVbThtN1Uxc2htZ3VWdjhBSG8zbzM5Q0ljaHQzaGo2UFRxQ1hEd1lpaGwyWGhXNFpiZGMyKzVERnMyMmROQ1NMK3ZOS01ZUkpJL1FWNWxNa2orNWlGSkpIQjNuem5HNlJXYWp2dG94TENwa0lKbDB5dEd1eUhObWJxREhLYmNZWnhZMjYzVkxnMm9UdDU0TVppQ2MrQXB5VVkxM3JnWitBeTR6eWMzT3NOMmVLd1Joc3hNa2VWZWtyaXMrQmovWG5KSC91RjVWVmlhSVppWjFOWEtGT3NMRVZwQ3U3SWh0endXWmN3Q0VreERzNVlaOWNOQUFIa1JnL29BZGlFSlY1Yk1QRTlWdDFDTVVRSnRub2xsa2trbnJFSTR6SlVqL0pYZ2hBYnlTM2JyTEhvVk1MZkdPVVRRRWVOOHFXSTFtMWZOS0VaSGgyR09YVkpQL3VOa3FBQ3l6bHUvTlFkMDRVZzJkWURIeHZsSzJMb2Fld0wzSW5JWm1MVE94RTFpc3R1cDR5WGVkR2g0NXRJVDRadS9HNmptalVBMS9RTmp3Y2FjZ2NCejVESm00K3FRWitRSXp2d3h6clVyVDNpaE94dnh3MjVkaFd6aFNETVN3QWxtU2h0eFJ4OWVaaSsycmlHY00rMG1HVURadFhyVUFtZmlOd0ZqQVdTWXVhMUFFckhYWDNRN0pmZS9WbkcxdDBIVTg1NnNrR0JaeUduRjlhU2Z2MVdoSktrZjd2Uk01SjNRYThIQ0c3TklkMjhrSXhHSU5ycDlYRmV1VEEyWHlqZkFKaVhKOWswSzlCOWpoYVNYdVlMa2o0OEE1d3pLSXpBRmtjSGtNMnJXeDdFU0NaTWRzNklxQUg0djFXSWJsNUcwdVFVQ3ZPVVpTa0JKNXNISktvNkpwbFBWV0loenVDSEtUc0d5RzNHRW1GZHlyRllBelowaE40RzVuUXBuZVlTV1pqNkljc0drMjJFRzBNbGNnUkNoYzdpSDQ3aG1sQ3dxQW9ZL2dTbVdSeHpnUWxKVWdvYkVjOHp3dFoxbE9PdkNCY0hBV2V5YkwrdkZLc0MrZzQ5TmIzNlpabmc1QllQaHVDemFkc3hxNFdPZWE4UDROYzRJbVdZRDhEVlFlc0p2YzBaeHhlUkhhZ1R3UU53SFZrVHBOM0NJVmtEQ25zcWJzNDZUemJrWWZ1K3I0STJmd3ltVTE2NzZHNzVYa1VnV3pTak5ZSHlINkJtZjJ4N1Z2MFJzNU83VVhDUFpNZmtZTnhmVWtiZlpnZzYxT0dlMHh0SVphWnZnVjRrT2lVY2lDYk5KUmFocVNMVnlmVU8yRVVVcGhVai93aGkva0RIV2d2Mm81YTJxZjlndFNnUXJ6QVhPTjVOK1FRM0N3dHV5dG1QNFBKdkNlRGprTGVlR3VRY09lN0NMbDlsbm9Pa3Y0K0M1QUZiWmdnQWRDSzdJcjNNcDRINjVIanVNZTAzdEsyb3YwZlA5VUNEMkZQQmdTeS8xanFNdG1HR1BJeUNtREJiRktpL0g4djZmRUFoUlVtZVR5ZGlqY0dqMGZqamNIajBYaGo4SGcwM2hnOEhvMDNCbzlINDQzQjQ5RjRZL0I0Tk40WVBCN04vNFd0M2RBMnZud0tBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNTUFBQUFsQ0FZQUFBRC9ZbDAxQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUdPbWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ055NHhMV013TURBZ056a3VZVGczTXpGaU9Td2dNakF5TVM4d09TOHdPUzB3TURvek56b3pPQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEE2UTNKbFlYUmxSR0YwWlQwaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2VHMXdPazF2WkdsbWVVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFU2TkRBck1ERTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFU2TkRBck1ERTZNREFpSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklpQndhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQU0l6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pFeU16aG1NMlF4TFRFMU1ETXRPRFUwTlMxaVptWTRMVE0yTmpBNU1EWTJNV0poT1NJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1qTTRaak5rTVMweE5UQXpMVGcxTkRVdFltWm1PQzB6TmpZd09UQTJOakZpWVRraUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1qTTRaak5rTVMweE5UQXpMVGcxTkRVdFltWm1PQzB6TmpZd09UQTJOakZpWVRraVBpQThjR2h2ZEc5emFHOXdPa1J2WTNWdFpXNTBRVzVqWlhOMGIzSnpQaUE4Y21SbU9rSmhaejRnUEhKa1pqcHNhVDVDT0RnNFFUa3dORU01UlRrelJERTFNVGM0TmpOR09EZERPREl5TVVRM05qd3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBpWXprNVpqQTBaQzFrWVRZNExXWmtORFF0T0dNek5pMWhNakUwTlRVME1qTTRaamM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPamt3WVRGak1HTmhMVEJoTldJdE16RTBOQzA0TldZMExUVXdNbU0zTlROak9EQmhNend2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZZbVUwTjJObU1UWXRNelE1TkMwek5qUmhMV0poWkdVdE5tRmhaakF5Tnprd09ETTVQQzl5WkdZNmJHaytJRHd2Y21SbU9rSmhaejRnUEM5d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeDRiWEJOVFRwSWFYTjBiM0o1UGlBOGNtUm1PbE5sY1Q0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbU55WldGMFpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVEl6T0dZelpERXRNVFV3TXkwNE5UUTFMV0ptWmpndE16WTJNRGt3TmpZeFltRTVJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESXpMVEExTFRFM1ZERXpPak0wT2pJNUt6QXhPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ01qTXVNQ0FvVjJsdVpHOTNjeWtpTHo0Z1BDOXlaR1k2VTJWeFBpQThMM2h0Y0UxTk9raHBjM1J2Y25rK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K2RuOUNBUUFBQmpSSlJFRlVlSnp0bkh1SVZVVWN4ejkzdmRkVk05MVVNb293Uk5NS00xRXJ5Z2pab0xEQ3NqSXJLd29wa0F3emV2d1JSb1ZtRHl1cEtCKzFtbUhZQTZXaTk5TW9OY3NLTVFucFFVaytpbHhsTTEzZHZmM3htOU9lZSs3TWVkeHo3L1ZlK24zZ3NwdzVNL09iTStkOFozN3ptMkV6K1h3ZVJWR2c0WEEzUUZGcUJSV0RvaGhVRElwaVVERW9pa0hGb0NnR0ZZT2lHRlFNaW1KUU1TaUtRY1dnS0liczRXNkFSeWFUNlFuY0N4eVpwQml3QVBnQnVBQ1lCQndNeWQ4Si9BYXNBOVlHOGpZQTA0Q1JNVzBmQWg0RCtnTXpnSDBSN2Z3VitNYjhkam55NVlCYmdDR1dlMzhCOXhtN05zWUFOd0xCSXdVWm9CMllhYTduVWR6SGVlQnVvQTJZQUZ4Q1lkL2tnUFhBY3hhNzQ0QnJrTDcxN0swRlhnUWFnZGxBWDBlYnZmeDdnUitCejRFdHdXZW8yaW1KZkQ1ZkV6L2dLR0NuNllna3YvSG1VV1luTFBjWmNMcXZLM0xBNmdUbDl5TWY0RlVKN2Y2Q2ZOU05sdGZSMDdUTFpXKzhwWXpIc2hDYmYvdnkyZnE0RXhobzdqOFFVczlRaTkyYkxmbVdJUjk1RTdBOVFkKzBBMjhBWi9vTlZPc2JyQ1UzcVlQaVVTME8rODNmc0JuQnhqaGt0UE0rc0R6dVVkZUcvd1VtWVJBaTNHK0JVd1AzT3BGK3NORUluT3U0MXc4NEs4U21Yd3l1UHZhZVBleDVYZ09PQ0xrZnJDdnBPODBCRndGcmdJY1NsQ3NMdFNTR1V1bVZzdnhDa3JsbUhobWdXd3E3dzRFUGdjRUp5dHptU0Q4UnUydFZia1lnTG1HbHlRRjNBdk9yWU9zL2FtYk5FTUVHN0NOL0JwbjJ3OWhueXZaQ09qbklVT0E4WkhwMnNRbnhhek8rdEhhZ0ZUZyt3bjRZQTRDM0VHSEVvUTl3TnVKYis3a3JSUnVTOGlEd012QlRGV3pOQUY0SFBxMkNyYm9Sd3ppU3V5TWVNNUZwTndzc3d1NU9qQUpXaGRSeFB1TDcyaGpoU0Y4TnRDQ3p4MG5BZGNBd1M3NWh3RTJtYlhGNEFoanJ1ODRpQzk1cThnNXdHdUZCZ3lpdVJ3YVRma0F6TU5XU0o0Y0VSYW9paG5weGszcWtLTHNWaVRadFJxWmVHMUZ1MGloa0ZEL1c5eHNZV2dLK1JrYTFWY0JjWkZINHBTUHZsUlRPT21HTUJFN3dYZDhSczF3NUdVcFhkS3BVVmlMOXN4UzRGaEdIalRFcDdjU21YbWFHRnVDQTc3b0RlQnpZR0tPcy95T2I0c2l6bGZDQllUa3lNL25yK2hseFdWdzBCYTViZ2N1UTBHNlE0NUFSc2kya1BvOHNNQmw0MkZ4UGpsR21Fc3dCWHNLOTRJK2lMNFVoNWhYSTR2bUtRTDQwYm1naTZrVU1rd0xYSGNDYnhCUERJbUFQRXJZODJYSi9OL0FKNFdMb1owbmJTL0xvMXpiZ2QyUm04VE1BbVozaWlDRURYQTQ4aFR5UHpmV3FGaDhqa2JGeWNBajRBSGsyLzZCemRKbnFqNlJlM0tRZ25SU0dDOE1ZQW96R0xnU0FKY0QzSmJTaDFKMGcyNEsvTitHdVlIRDBIWXZzeXpRakl2ZTNLU3FnVUNyckxXbURrSTNTY3RGS2NiL2E5bU1xUXIyS29Sc1NXU21WZzRpWUhzRzlqb2lpZ2RMNmI1UWxyWlZ3Y1Q5dlNac0YzQnBJMjQyTTFwVmdEdkMrSlQxSmFEaUt3UlN2bmVMTWxtV2hYdHlrRnJvMjEwQkd5azBwNnR1RzdENy9HVFAvZk9TNGdMKy85aER1TDlzMjhDNTE1TjFoNm5QeEhuQTFoUnRlc3l6NW5pVCtjWktrOUVHaVhodVJXU2t0d2Y3cGhiakRRVEc0b25obHAxN0VNSTJ1c3k5SjJVQmhLQkprVWRaRWZESGNqNndSU3FVUm1JZzdmTHJSMU85eUNRWWdBWU43SXV6TUE5NHVwWUV4Nkk0Y0pYa1VtU1hLUlFZNEJsaE04WHVDZElOZUl1cEZEUDJCUDBvc3U0TGlUczRDendJWFVoaWxjakVGZVNuK1RiczhJalFYRXhHZnVnUFpWQnNka2pmcTQrb052RUM0R0RZanMyZmNFRzJwekVWbXFWTlMxck1FaWREMVFOWSt2UjM1MXFTMEU1dDZFVU1hdmtBK2xPRExhd1l1Qmw2TlVjZENTOW9CNEp5UU1zT0p0N1A4Tk9LQ1JiRWQyUzl4UlkrV1U3MDFZTE5wUzlocDFDaGNMcU9mWFlTZkRDZ3I5YnFBVGtKZllMcmozdUlVOVhxblBkUHdMbkI3ekx4dHdGZU9lKzJJcTFYcFdjRmpKK1dOSXJtWVNuV09mUUQvRHpGa2tMTTg2eXozbXBCNGZiWHBCSjVCWEtrNGJwckhTa2Y2RHVDanRJMUt5QUlxZDB4aUM3S2hhWXRlVll4YUVrTVdkM3U2eHlqdlduem1FTC9kTlpMZFFOZE9jaHc3SGcxSWlMZG5WRVpESi9MUnZvSWNHNTlPc1JBYXNMdXUzaDZFeTJYWVJGZGt5M2JFMnI5cDZKbzl2R2QzN1hmWW5uTUM4RTlJWGRrUWUwSGFnTytRVVBjWmlIdGJWVEw2djFZVlJhaWxtVUZSRGlzcUJrVXhxQmdVeGFCaVVCU0Rpa0ZSRENvR1JUR29HQlRGb0dKUUZNTy9RV2dicHBGMEdkSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdmlkZW8tODIyZGZjZmY5NzU4NjdkY2Q0MjYyYmEwNjE1YzRiZGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dpZGdldHMtYThhODg4M2MxODQyMGU4YzY1YmFiN2U0OTI0MjcwMDEucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcbmltcG9ydCB7XG4gIEFjY29yZGlvbkJ1dHRvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uQ29udGVudHMsXG4gIHNpbmdsZSxcbiAgcHJldmVudENsb3NlLFxuICBjb21iaW5lUmVkdWNlcnMsXG59IGZyb20gJy4vc2hhcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZUFjY29yZGlvblxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQmFzZUFjY29yZGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbkluZGV4ZXM6XG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXG4gICAgfTtcbiAgfVxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgICBsZXQgYWxsQ2hhbmdlcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdiBzeD17c3R5bGVzLmJ1dHRvblRvZ2dsZX0gey4uLnJlc3R9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvblRvZ2dsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogJ2hlYWRpbmdTZWNvbmRhcnknLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiBbMTYsIDE2LCAxNiwgMTgsIDIwXSxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogLTAuNSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgJzQ1cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCAxLjhdLFxuICAgICcmID4gc3Bhbic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IDIwLFxuICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIHRvcDogWycycHgnLCAnNnB4J10sXG4gICAgICBsZWZ0OiBbMCwgJzEzcHgnXSxcbiAgICAgICcmLm9wZW46YWZ0ZXInOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcbiAgICAgIH0sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgIHdpZHRoOiAnMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIG9wZW46IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICB9LFxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIHN4PXt7XG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIsXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBbJzMzcHgnLCAnNDVweCddLFxuICAgICAgICAnID4gZGl2ICc6IHtcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBbMSwgMl0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6ICcxN3B4IDAnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFNUVDRjQnLFxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkJyxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBzdGF0ZS5vcGVuSW5kZXhlcyB9XG4gICAgOiBjaGFuZ2VzO1xuXG5leHBvcnQgY29uc3Qgc2luZ2xlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxuICAgIDogY2hhbmdlcztcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICByZWR1Y2Vycy5yZWR1Y2UoKGFjYywgcmVkdWNlcikgPT4gcmVkdWNlcihzdGF0ZSwgYWNjKSwgY2hhbmdlcyk7XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgRmVhdHVyZSA9ICh7IGZlYXR1cmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlSXRlbX0+XG4gICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnZhbHVlfSBzdHlsZT17eyBjb2xvcjogZmVhdHVyZT8uY29sb3IgfX0+XG4gICAgICAgIHtmZWF0dXJlLnZhbHVlfVxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmZWF0dXJlSXRlbToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGJveFNoYWRvdzogJzBweCAyNXB4IDEwMHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDgpJyxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgLy8gbWF4V2lkdGg6IDMwMCxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwYWRkaW5nOiBbXG4gICAgICAnMCA1cHgnLFxuICAgICAgJzAgMThweCcsXG4gICAgICAnMCAxOHB4JyxcbiAgICAgICcwIDEycHgnLFxuICAgICAgJzAgMjBweCcsXG4gICAgICAnMCAyNXB4JyxcbiAgICAgICcwIDU5cHgnLFxuICAgIF0sXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6IFsxNTAsIDE1MCwgMTUwLCAxODUsIDI0MCwgMjgwLCAzMjBdLFxuICAgIHdpZHRoOiBbJ2F1dG8nLCAnYXV0bycsICdhdXRvJywgMTc3LCAyMjUsIDI1OCwgMzAwXSxcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IFszMCwgMzAsIDMwLCAzMCwgNTAsIDYwLCA3Ml0sXG4gICAgbGluZUhlaWdodDogWzEuODMsIDAuNzZdLFxuICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE1cHgnLCAnMTdweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjYyLCAxLjQ4XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIG10OiBbJzFweCcsICcyMHB4J10sXG4gICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjcpLFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBVbHRpbWF0ZUZlYXR1cmUgPSAoeyBkYXRhLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmV9IHsuLi5wcm9wc30+XG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhPy5pY29ufSBhbHQ9e2RhdGE/LnRpdGxlfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8Qm94PlxuICAgICAgICA8SGVhZGluZyBhcz1cImg0XCI+e2RhdGE/LnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e2RhdGE/LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWx0aW1hdGVGZWF0dXJlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZlYXR1cmU6IHtcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2NlbnRlcicsICdjZW50ZXInLCAnY2VudGVyJywgJ2xlZnQnXSxcbiAgICBtYXhXaWR0aDogWzIzMCwgMjMwLCAyMzAsIDIzMCwgJ25vbmUnXSxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIGZpZ3VyZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDhweCAyNHB4IHJnYmEoNTMsIDk1LCAxNTgsIDAuMSknLFxuICAgICAgaGVpZ2h0OiAnOTBweCcsXG4gICAgICBtYXJnaW46IFtcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgMCA0MHB4JyxcbiAgICAgIF0sXG4gICAgICB3aWR0aDogJzkwcHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI4LFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgbGluZUhlaWdodDogWzEuNiwgMS42LCAxLjYsIDEuODhdLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IEZvb3RlcldpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICA8TGluayBwYXRoPXtwYXRofSBrZXk9e2l9IGxhYmVsPXtsYWJlbH0gdmFyaWFudD1cImZvb3RlclwiIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyV2lkZ2V0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3RlcldpZGdldDoge1xuICAgIGg0OiB7XG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBtYXJnaW46ICcyOHB4IDAgMCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYToge1xuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuOCksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnQ29tcGFueScsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTY2hvb2wnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdPdXIgQXBwcm9hY2gnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdSZXNvdXJjZXMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdXb3JrIHdpdGggdXMnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1N0dWRlbnQgU3VwcG9ydCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0Fib3V0IFVzJyxcbiAgICAgIH0sXG4gICAgIFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ091ciBJbmZvcm1hdGlvbicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdSZXR1cm4gUG9saWN5ICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU2l0ZSBNYXAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdG9yZSBIb3VycycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ015IEFjY291bnQnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUHJlc3MgaW5xdWlyaWVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU29jaWFsIG1lZGlhICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ2RpcmVjdG9yaWVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2VzICYgQi1yb2xsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6ICdQb2xpY3knLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnQXBwbGljYXRpb24gc2VjdXJpdHknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTb2Z0d2FyZSBwcmluY2lwbGVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVW53YW50ZWQgc29mdHdhcmUgcG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUmVzcG9uc2libGUgc3VwcGx5IGNoYWluJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJOYXYgPSBbXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnU2Nob29sJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdPdXIgQXBwcm9hY2gnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJyMhJyxcbiAgICBsYWJlbDogJ1Jlc291cmNlcycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnV29yayB3aXRoIHVzJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgRm9vdGVyV2lkZ2V0IGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyLXdpZGdldCc7XG5pbXBvcnQgeyBtZW51SXRlbXMsIGZvb3Rlck5hdiB9IGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJmb290ZXJcIiB2YXJpYW50PVwibGF5b3V0LmZvb3RlclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3RlclRvcElubmVyfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcbiAgICAgICAgICAgIDxGb290ZXJXaWRnZXQga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVySW5uZXJ9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEZyZWRtaW5kLCBJbmNcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMuZm9vdGVyTmF2fT5cbiAgICAgICAgICAgIHtmb290ZXJOYXYubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0ga2V5PXtpfSBsYWJlbD17bGFiZWx9IHZhcmlhbnQ9XCJmb290ZXJcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyVG9wSW5uZXI6IHtcbiAgICBnYXA6IFs1MCwgbnVsbCwgbnVsbCwgbnVsbCwgMTcsIDUwXSxcbiAgICBtYjogWzUwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxuICAgICAgJ3JlcGVhdCg1LCAxZnIpJyxcbiAgICBdLFxuICB9LFxuICBmb290ZXJJbm5lcjoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAjRDlFMEU3YCxcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHBhZGRpbmc6ICczNXB4IDAgNDBweCcsXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpJzoge1xuICAgICAgcGI6IDEwLFxuICAgIH0sXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHNwYW46IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI5LFxuICAgICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjYpLFxuICAgICAgbXQ6IFsnMThweCcsICcxOHB4JywgJzdweCddLFxuICAgIH0sXG4gIH0sXG4gIGZvb3Rlck5hdjoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG1hcmdpbjogWycxNXB4IDAgMCcsICcxNXB4IDAgMCcsICcwJ10sXG4gICAgcGFkZGluZzogMCxcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgJ2ZsZXgtc3RhcnQnXSxcbiAgICAnbGkgKyBsaSc6IHtcbiAgICAgIG1sOiBbJzE4cHgnLCAnMThweCcsICcyMHB4J10sXG4gICAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCknOiB7XG4gICAgICAgIG1iOiAnMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBsYWJlbDogJ0hvbWUnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3VsdGltYXRlLWZlYXR1cmUnLFxuICAgIGxhYmVsOiAnU2Nob29sICcsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJpY2luZycsXG4gICAgbGFiZWw6ICdPdXIgQXBwcm9hY2gnLFxuICB9LFxuICAge1xuICAgIHBhdGg6ICdwcmljaW5nJyxcbiAgICBsYWJlbDogJyBSZXNvdXJjZXMgJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdmYXEnLFxuICAgIGxhYmVsOiAnV29yayB3aXRoIFVzJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIE1lbnVCdXR0b24sIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvcGVuTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVNZW51KHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVNZW51KGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkZXJXcmFwcGVyfT5cbiAgICAgIDxTdGlja3kgZW5hYmxlZD17dHJ1ZX0gdG9wPXswfSBhY3RpdmVDbGFzcz1cImlzLXN0aWNreVwiIGlubmVyWj17MTB9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsYXlvdXQuaGVhZGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e21vYmlsZU1lbnUgPyAnaXMtbW9iaWxlLW1lbnUnIDogJyd9XG4gICAgICAgID5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcklubmVyfT5cbiAgICAgICAgICAgICAgPExvZ28gaXNXaGl0ZT17bW9iaWxlTWVudX0gLz5cblxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdmJhcn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vYmlsZU1lbnUgPyAnbmF2YmFyIGFjdGl2ZScgOiAnbmF2YmFyJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGFzPVwidWxcIlxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5uYXZMaXN0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2JpbGVNZW51ID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2JpbGVNZW51fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5TWRcIiBzeD17c3R5bGVzLmV4cGxvcmV9PlxuICAgICAgICAgICAgICAgICBFbnJvbGwgTm93XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICB7bW9iaWxlTWVudSA/IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgc3g9e3N0eWxlcy5jbG9zZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICA8R3JDbG9zZVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vYmlsZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFyaWEtbGFiZWw9XCJUb2dnbGUgTWVudVwiIG9uQ2xpY2s9e29wZW5Nb2JpbGVNZW51fSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TdGlja3k+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyV3JhcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgJy5pcy1zdGlja3knOiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJveFNoYWRvdzogJzAgNnB4IDEzcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXG4gICAgICAgIHB5OiBbMTJdLFxuICAgICAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVySW5uZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICAnLm5hdmJhcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZXh0JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcDogJzIwcHggMzBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGJveFNoYWRvdzogJzAgNnB4IDEzcHggcmdiYSgzOCw3OCwxMTgsMC4xKScsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNzdweCknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgIH0sXG4gICAgICAgIHVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAnbGkgKyBsaSc6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG5hdmJhcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbmF2TGlzdDoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBwOiAwLFxuICAgICcubmF2LWl0ZW0nOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBtYXJnaW46ICcwIDIwcHgnLFxuICAgIH0sXG4gICAgJy5hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ25vbmUnXSxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDQwLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICB9LFxuICBjbG9zZUJ1dHRvbjoge1xuICAgIGhlaWdodDogJzMycHgnLFxuICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgIG1pbkhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnMzJweCcsXG4gICAgbWw6ICczcHgnLFxuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayBhcyBNZW51TGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxNZW51TGlua1xuICAgICAgdG89e3BhdGh9XG4gICAgICBzcHk9e3RydWV9XG4gICAgICBvZmZzZXQ9ey03MH1cbiAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9NZW51TGluaz5cbiAgKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExlYXJuTW9yZSh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPEEgc3g9e3N0eWxlcy5sZWFybk1vcmV9IHsuLi5yZXN0fT5cbiAgICAgICAge2xhYmVsID8/ICdMZWFybiBNb3JlJ30gPEhpT3V0bGluZUNoZXZyb25SaWdodCAvPlxuICAgICAgPC9BPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbGVhcm5Nb3JlOiB7XG4gICAgY29sb3I6ICdsaW5rJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBzdmc6IHtcbiAgICAgIHRyYW5zaXRpb246ICdtYXJnaW4tbGVmdCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICAgIG1sOiAnM3B4JyxcbiAgICB9LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBzdmc6IHtcbiAgICAgICAgbWw6ICc4cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IGxvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgbG9nb1doaXRlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby13aGl0ZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgaXNXaGl0ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHBhdGg9XCIvXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlIHNyYz17aXNXaGl0ZSA/IGxvZ29XaGl0ZSA6IGxvZ299IGFsdD1cIkZSRURNSU5EIERJR0lUQUwgU0NIT09MXCIgLz5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbi8vIGltcG9ydCAnLi9tb2RhbC5tb2R1bGUuY3NzJztcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjc1KScsXG4gICAgekluZGV4OiAxMDAsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICd1bnNldCcsXG4gICAgbWFyZ2luUmlnaHQ6ICctNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiAnNzAlJyxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIE1vZGFsKHsgaXNPcGVuLCBjbG9zZU1vZGFsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IChkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0Jyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0TW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgIGNsb3NlVGltZW91dE1TPXsyMDAwfVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmVhY3RNb2RhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ1dHRvbiA9ICh7IG9uQ2xpY2ssIHNpemUsIGNvbG9yLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBzeD17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17b25DbGlja30gey4uLnByb3BzfT5cbiAgICAgIDxHckNsb3NlIHNpemU9e3NpemUgPz8gJzI0cHgnfSBjb2xvcj17Y29sb3IgPz8gY29sb3J9IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvbjoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICB0b3A6ICctNDBweCcsXG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBSZXNwb25zaXZlSWZyYW1lID0gKHsgc3JjLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy52aWRlb0NvbnRhaW5lcn0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IDxpZnJhbWUgc3JjPXtzcmN9IHsuLi5wcm9wc30+PC9pZnJhbWU+fVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZUlmcmFtZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICB2aWRlb0NvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBpZnJhbWU6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IFNlY3Rpb25IZWFkaW5nID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9IHsuLi5wcm9wc30+XG4gICAgICA8SGVhZGluZyBzeD17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkaW5nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRpbmc6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1heFdpZHRoOiA1ODAsXG4gICAgbWFyZ2luOiAnMCBhdXRvIDYwcHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiBbJzI0cHgnLCAnMzBweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjVdLFxuICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTZweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCAyLjJdLFxuICAgIG10OiAnMTBweCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XG4gIGRlc2NyaXB0aW9uID0gJ0ZyZWRtaW5kIERpZ2l0YWwgU2Nob29sJyxcbiAgYXV0aG9yID0gJ01vYml2ZXJpbywgSW5jJyxcbiAgbWV0YSxcbiAgdGl0bGUgPSAnRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2wnLFxufSkge1xuICBjb25zdCBtZXRhRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxuICAgICAgY29udGVudDogYXV0aG9yLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICBdLmNvbmNhdChtZXRhKTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICkpfVxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZzogYGVuYCxcbiAgbWV0YTogW10sXG4gIGRlc2NyaXB0aW9uOiBgYCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xuaW1wb3J0IFVsdGltYXRlRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZXMnO1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJ3NlY3Rpb25zL2ZlYXR1cmVzJztcbmltcG9ydCBJbnRyb1ZpZGVvIGZyb20gJ3NlY3Rpb25zL2ludHJvLXZpZGVvJztcbmltcG9ydCBVc2VmdWxGZWF0dXJlcyBmcm9tICdzZWN0aW9ucy91c2VmdWwtZmVhdHVyZXMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnc2VjdGlvbnMvd2lkZ2V0cyc7XG4vLyBpbXBvcnQgUHJpY2luZyBmcm9tICdzZWN0aW9ucy9wcmljaW5nJztcbmltcG9ydCBGYXEgZnJvbSAnc2VjdGlvbnMvZmFxJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U0VPIHRpdGxlPVwiRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2xcIiAvPlxuICAgICAgICA8QmFubmVyIC8+XG4gICAgICAgIDxVbHRpbWF0ZUZlYXR1cmVzIC8+XG4gICAgICAgIDxGZWF0dXJlcyAvPlxuICAgICAgICA8SW50cm9WaWRlbyAvPlxuICAgICAgICA8VXNlZnVsRmVhdHVyZXMgLz5cbiAgICAgICAgPFdpZGdldHMgLz5cbiAgICAgICAgey8qIDxQcmljaW5nIC8+ICovfVxuICAgICAgICA8RmFxIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgYmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZyc7XG4vLyBpbXBvcnQgcGF5cGFsIGZyb20gJ2Fzc2V0cy9pbWFnZXMvcGF5cGFsLnBuZyc7XG4vLyBpbXBvcnQgZ29vZ2xlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvZ29vZ2xlLnBuZyc7XG4vLyBpbXBvcnQgZHJvcGJveCBmcm9tICdhc3NldHMvaW1hZ2VzL2Ryb3Bib3gucG5nJztcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggaWQ9XCJob21lXCIgYXM9XCJzZWN0aW9uXCIgdmFyaWFudD1cInNlY3Rpb24uYmFubmVyXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIEhleSBBc3BpcmluZyB0ZWNoaWUgT1IgQXJlIHlvdSBhIFRlY2ggRW50aHVzaWFzdD9cblxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgRXhwbG9yZSwgTGVhcm4sIGFuZCBFeGNlbCB3aXRoIG91ciB0ZWNoIHByb2dyYW1zLiBPdXIgcHJvZ3JhbSBpcyBkZXNpZ25lZCB0byBlcXVpcCB5b3Ugd2l0aCB0aGUgc2tpbGxzIG5lZWRlZCB0byBzdWNjZWVkIGluIHRvZGF5J3MgZmFzdC1wYWNlZCBkaWdpdGFsIHdvcmxkLiBObyBkZWdyZWUgb3IgcHJpb3IgdGVjaCBleHBlcmllbmNlIHJlcXVpcmVkLlxuXG5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzeD17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgIEVucm9sIE5vd1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7LyogPEJveCBzeD17c3R5bGVzLmNsaWVudHN9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwYXlwYWx9IGFsdD1cInBheXBhbFwiIC8+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2dvb2dsZX0gYWx0PVwiZ29vZ2xlXCIgLz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZHJvcGJveH0gYWx0PVwiZHJvcGJveFwiIC8+XG4gICAgICAgICAgICA8L0JveD4gKi99XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmlsbHVzdHJhdGlvbn0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJ9IGFsdD1cImJhbm5lclwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGVudFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgMWZyKScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDB2aCddLFxuICAgIHB0OiBbMTAwLCBudWxsLCBudWxsLCAxMjAsIDEzMCwgMTIwLCAwXSxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIG1heFdpZHRoOiBbNTA3LCBudWxsLCBudWxsLCAzMjQsIDQ1MF0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCcsICcyMHB4JywgJzQwcHgnXSxcbiAgICBsaW5lSGVpZ2h0OiAxLjMzLFxuICAgIGxldHRlclNwYWNpbmc6ICctMXB4JyxcbiAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgZm9udFNpemU6IFsnMTRweCcsICcxNHB4JywgJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE4cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgMS44NSwgMS44NSwgMS44NSwgMS44NSwgMi4zM10sXG4gICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgICBtdDogWycxNHB4JywgJzE5cHgnXSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZGlzcGxheTogWydub25lJywgJ2ZsZXgnXSxcbiAgICBtdDogWzQ1LCA0NSwgNDUsIDI1LCAyNV0sXG4gIH0sXG4gIGNsaWVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6IFsnMjBweCcsICc0NXB4JywgJzQ1cHgnLCAnMzBweCcsICc0NXB4J10sXG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogWyc4MHB4JywgJzEwMCUnLCAnMTAwJScsICcxMDAlJ10sXG4gICAgICAnKyBpbWcnOiB7XG4gICAgICAgIG1sOiBbJzE0cHgnLCAnMjhweCcsICcyOHB4JywgJzIwcHgnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaWxsdXN0cmF0aW9uOiB7XG4gICAgZGlzcGxheTogWydibG9jaycsICdibG9jayddLFxuICAgIG10OiBbJzMwcHgnLCAnMzBweCcsIDBdLFxuICAgIG1iOiBbJzYwcHgnLCAnNjBweCcsIDBdLFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzEwMCUnLCAnMTAwJScsICc5MCUnLCAnOTAlJywgJzEwMCUnXSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmNvbnN0IGZhcXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0hvdyBjYW4gSSBlbnJvbGw/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgIEFsbCB5b3UgaGF2ZSB0byBkbyBpcyBzaWduIHVwIGhlcmUgKGxpbmsgdG8gc2Nob29sIHBhZ2UpIGFuZCBmb2xsb3cgdGhlIGluc3RydWN0aW9ucyFcblxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSeKAmW0gbm90IHN1cmUgd2hhdCBjb3Vyc2UgdG8gdGFrZSwgd2hhdCBkbyBJIGRvPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgV2UgaGF2ZSBjcmVhdGVkIHRoaXMgZ3VpZGUgdG8gaGVscCB5b3UgdGhyb3VnaCB0aGlzIHByb2Nlc3MuIElmIHlvdeKAmXJlIHN0aWxsIGNsdWVsZXNzICwgeW91IGNhbiByZWFjaCBvdXQgdG8gdXMgaGVyZS4gc2Nob29sQGZyZWRtaW5kZGlnaXRhbC5jb21cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogYFdoYXQgcXVhbGlmaWNhdGlvbiBkbyBJIG5lZWQgdG8gZ2V0IGFjY2VwdGVkP2AsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICBObyBxdWFsaWZpY2F0aW9uIGlzIG5lZWRlZCBhdCBhbGwuIENvbWUgYXMgeW91IGFyZS5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogYEhvdyBtdWNoIGlzIHR1aXRpb24/YCxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgIFR1aXRpb24gdmFyaWVzIGJ5IGNvdXJzZS4gQ2hlY2sgb3V0IHlvdXJzIGhlcmUuXG5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogYENhbiBJIHN0YXJ0IGNsYXNzZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgSSBlbnJvbGw/XG5gLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICBXZSBydW4gYSBjb2hvcnQtYmFzZWQgcHJvZ3JhbSB3aGljaCBtZWFucyB0aGF0IHlvdSBjYW4gdG90YWxseSBzaWduIHVwIGJ1dCBjbGFzc2VzIHdvbuKAmXQgc3RhcnQgdW50aWwgdGhlIG5leHQgY29ob3J0LlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIFxuICB7XG4gICAgdGl0bGU6IGBDYW4gSSBnZXQgYSByZWZ1bmQgb2YgbXkgdHVpdGlvbiBmZWU/YCxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgIE5vLCB5b3UgY2Fu4oCZdC4gWW91IGNhbiBvbmx5IHRyYW5zZmVyIHlvdXIgZW5yb2xsbWVudCB0byBhbm90aGVyIGNvdXJzZSB3aXRoaW4geW91ciAgIHNjaG9vbFxuXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhcSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiZmFxXCIgdmFyaWFudD1cInNlY3Rpb24uZmFxXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHRpdGxlPVwiRG8geW91IGhhdmUgYW55IHF1ZXNpdG9uXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk91ciBzdXBwb3J0IHRlYW0gcmVhZHkgdG8gaGVscCB5b3UsIHBsZWFzZSBjb250YWN0IHdpdGggdGhlbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc2NTBweCcsICc3NDVweCddLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBteDogJ2F1dG8nLFxuICAgICAgICAgICAgbXk6IC00LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXtmYXFzfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmVhdHVyZSc7XG5pbXBvcnQgeyBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuXG5pbXBvcnQgY2hlY2tGaWxsZWRDaXJjbGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jaGVjay1jaXJjbGUtZmlsbGVkLnBuZyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGNvbG9yOiAnIzI4RDFEQycsXG4gICAgdmFsdWU6ICc4MEsrJyxcbiAgICB0aXRsZTogJ1dlIGhhdmUgbW9yZSB0aGFuIGN1c3RvbWVycycsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBjb2xvcjogJyNGRjc1M0EnLFxuICAgIHZhbHVlOiAnMTUwKycsXG4gICAgdGl0bGU6ICdGcmVlIG9ubGluZSB0dXRvcmlhbHMgdmlkZW9zIGF2YWlsYWJsZScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBjb2xvcjogJyNGQTU3OEUnLFxuICAgIHZhbHVlOiAnOTArJyxcbiAgICB0aXRsZTogJ0RhaWx5IHVwZGF0ZWQgYmxvZyBwb3N0IG1haW50YWluJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGNvbG9yOiAnIzI4RENCMicsXG4gICAgdmFsdWU6ICcmIDNNJyxcbiAgICB0aXRsZTogJ0pvYiBwb3N0ZWQgZXZlcnlkYXlgcyB3aXRoICBxdWFsaWZpY2F0aW9uJyxcbiAgfSxcbl07XG5cbmNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgdmFyaWFudD1cInNlY3Rpb24uZmVhdHVyZXNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxlZnRDb250ZW50fT5cbiAgICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEZlYXR1cmUga2V5PXtpdGVtPy5pZH0gZmVhdHVyZT17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgR28gZnJvbSBDTFVFTEVTUyA8YnIgLz5cbiAgICAgICAgICAgICAgICB0byBURUNIIEJSTyEhIVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIZWFyIHdoYXQgb3VyIHN0dWRlbnRzIGhhdmUgdG8gc2F5IGZyb20gdGhlaXIgbGVhcm5pbmcgZXhwZXJpZW5jZS5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8VGV4dCBzeD17c3R5bGVzLmxpc3RJdGVtfSBhcz1cInBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hlY2tGaWxsZWRDaXJjbGV9IGFsdD1cImNoZWNrIGljb25cIiAvPlxuICAgICAgICAgICAgICBVbmxpbWl0ZWQgZGVzaWduIHBvc3NpYmlsaXR5XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmxpc3RJdGVtfSBhcz1cInBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hlY2tGaWxsZWRDaXJjbGV9IGFsdD1cImNoZWNrIGljb25cIiAvPlxuICAgICAgICAgICAgICBDb21wbGV0ZWx5IHJlc3BvbnNpdmUgZmVhdHVyZXNcbiAgICAgICAgICAgIDwvVGV4dD4gKi99XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD1cIiMhXCIgbGFiZWw9XCJKb2luIHRoZW1cIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGdhcDogWzMwLCAzMCwgMzAsIDMwLCA0MCwgNjAsIDcwLCAxMjBdLFxuICAgIGRpc3BsYXk6IFsnZmxleCcsICdmbGV4JywgJ2dyaWQnXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3Vuc2V0J10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJzEuMmZyIDAuOGZyJyxcbiAgICAgICcxLjJmciAwLjhmcicsXG4gICAgICAnMS4yZnIgMC44ZnInLFxuICAgICAgJzEuMWZyIDAuOWZyJyxcbiAgICAgICcxLjFmciAwLjlmcicsXG4gICAgICAnMS4xZnIgMC45ZnInLFxuICAgICAgJzEuMmZyIDAuOGZyJyxcbiAgICBdLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBsZWZ0Q29udGVudDoge1xuICAgIGdhcDogWzIwLCAyMCwgMjAsIDIwLCAzMCwgNDVdLFxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgJz4gZGl2Jzoge1xuICAgICAgJzpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICBtdDogWyc2NXB4J10sXG4gICAgICB9LFxuICAgICAgJzpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgIG10OiBbJy02NXB4J10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJpZ2h0Q29udGVudDoge1xuICAgIC8vIG1sOiBbJzEyMHB4J10sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtYjogWycyMHB4J10sXG4gICAgbXQ6IFswLCAwLCAnLTcwcHgnXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFsnMjhweCcsICcyOHB4JywgJzI4cHgnLCAnMjhweCcsICczNnB4JywgJzQwcHgnXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjVdLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBicjoge1xuICAgICAgICBkaXNwbGF5OiBbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ2Jsb2NrJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgbXQ6IFsnMTVweCcsICcxMHB4J10sXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGxpbmVIZWlnaHQ6IDIuODEsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGltZzoge1xuICAgICAgbXI6ICcxMHB4JyxcbiAgICB9LFxuICB9LFxuICBleHBsb3JlOiB7XG4gICAgbXQ6IFsnMjBweCcsICcyMHB4JywgJzIwcHgnLCAnMjBweCcsICc0MHB4J10sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgeyBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IHZpZGVvQmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvdmlkZW8ucG5nJztcbmltcG9ydCBQbGF5IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGxheS5wbmcnO1xuaW1wb3J0IE1vZGFsLCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgUmVzcG9uc2l2ZUlmcmFtZSBmcm9tICdjb21wb25lbnRzL3Jlc3BvbnNpdmUtaWZyYW1lJztcblxuY29uc3QgSW50cm9WaWRlbyA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zZWN0aW9ufSB2YXJpYW50PVwic2VjdGlvbi5pbnRyb1ZpZGVvXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCJFcXVpcCBZb3Vyc2VsZiBmb3IgYSBXb3JsZCBvZiBPcHBvcnR1bml0aWVzLlwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCIgV2UgYXJlIGEgZGlnaXRhbCBzY2hvb2wgc2hhcGluZyB5b3UgZm9yIHRoZSBmdXR1cmUgb2Ygd29yay4gTG9va2luZyB0byBraWNrc3RhcnQgeW91ciBjYXJlZXIgaW4gdGVjaD8gV2UgYXJlIGp1c3QgdGhlIHJpZ2h0IHN0b3AgZm9yIHlvdS4gTm90IG9ubHkgd2lsbCB3ZSBob2xkIHlvdXIgaGFuZHMgdGhyb3VnaCB5b3VyIGxlYXJuaW5nIHBoYXNlLCB3ZSB3aWxsIHN1cHBvcnQgeW91IHRvIHRoZSBwb2ludCB5b3UgbGFuZCB5b3VyIGZpcnN0IGpvYiBvciBpbnRlcm5zaGlwLlxuICAgICAgICAgIE91ciBjdXJyaWN1bHVtIGlzIGdyYWR1YWwgYW5kIHByb2plY3QgYmFzZWQuIFRocm91Z2ggb3VyIGNvdXJzZXMgaW4gTWFya2V0aW5nLCBEYXRhLCBFbmdpbmVlcmluZyBhbmQgRGVzaWduLCB5b3Ugd2lsbCBsZWFybiwgd29yayBvbiBwcm9qZWN0cyB0byBidWlsZCB5b3VyIHBvcnRmb2xpbyBhbmQgYmVjb21lIGFuIGF0dHJhY3RpdmUgdGFsZW50IGluIHRoZSBqb2IgbWFya2V0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5leHBsb3JlfT5cbiAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9XCIjIVwiIGxhYmVsPVwiTGVhcm4gTW9yZVwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudmlkZW9XcmFwcGVyfT5cbiAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUlmcmFtZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3lvdXR1YmUuY29tXCJcbiAgICAgICAgICAgICAgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3ZpZGVvQmFubmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYmFubmVyXCJcbiAgICAgICAgICAgIGFsdD1cInZpZGVvIGJhbm5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICBzeD17c3R5bGVzLnBsYXlQYXVzZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQbGF5fSBhbHQ9XCJwbGF5XCIgLz4gV2F0Y2ggRnVsbCB2aWRlb1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm9WaWRlbztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgbWF4V2lkdGg6ICc2MjBweCcsXG4gICAgbWI6IFs1XSxcbiAgICBoMjoge1xuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJ10sXG4gICAgbWI6IFs2XSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnLnZpZGVvLWJhbm5lcic6IHtcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJywgJzEwMCUnLCAnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIH0sXG4gIH0sXG4gIHBsYXlQYXVzZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICBib3R0b206IFs0MCwgNDAsIDQwLCA3MCwgMTAwXSxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICAnOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogMCxcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbXI6ICcxNnB4JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgVWx0aW1hdGVGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvdWx0aW1hdGUtZmVhdHVyZSc7XG5cbmltcG9ydCBidWxiIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVsYi5wbmcnO1xuaW1wb3J0IGRhcnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9kYXJ0LnBuZyc7XG5pbXBvcnQgcm9ja2V0IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvcm9ja2V0LnBuZyc7XG5pbXBvcnQgdHJvcGh5IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvdHJvcGh5LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiByb2NrZXQsXG4gICAgdGl0bGU6ICdMZWFybiB3aXRoIENvbmZpZGVuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXQgb3VyIGluc3RpdHV0aW9uLCB3ZSB1bmRlcnN0YW5kIHRoZSBpbXBvcnRhbmNlIG9mIG91ciBzdHVkZW50c1wiIHJlcHV0YXRpb25zLCB3aGljaCBpcyB3aHkgd2VcInZlIGNvbGxhYm9yYXRlZCB3aXRoIGNlcnRpZmllZCBpbmR1c3RyeSBwcm9mZXNzaW9uYWxzIHRvIHJldmlldyBhbmQgY2VydGlmeSBhbGwgb2Ygb3VyIG9ubGluZSBjb3Vyc2VzIGFuZCB0cmFpbmluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogZGFydCxcbiAgICB0aXRsZTogJ091ciBNaXNzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ091ciBtaXNzaW9uIGlzIHRvIGVxdWlwIEFmcmljYW5zIHdpdGggdGhlIGxhdGVzdCByZWFsLXRpbWUgc3RhbmRhcmRzIGFuZCBzdXBwb3J0IHRoZW0gaW4gcmVhY2hpbmcgdGhlaXIgZnVsbCBwb3RlbnRpYWwuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgICBpY29uOiBidWxiLFxuICAgIHRpdGxlOiAnT3VyIFZpc2lvbicsXG4gICAgZGVzY3JpcHRpb246ICdXZSBhc3BpcmUgdG8gY3JlYXRlIHRoZSBtb3N0IGV4dGVuc2l2ZSBjb21waWxhdGlvbiBvZiBkaWdpdGFsIHBsYXRmb3JtLCByZXNvdXJjZXMgYW5kIG9wcG9ydHVuaXRpZXMgYXZhaWxhYmxlLCB3aXRoIHRoZSBhaW0gb2YgYmVuZWZpdGluZyB0aGUgZGlnaXRhbCBpbmR1c3RyeSBpbiBOaWdlcmlhIGFuZCBhY3Jvc3MgQWZyaWNhLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiB0cm9waHksXG4gICAgdGl0bGU6ICdBd2FyZCBoaXN0b3J5JyxcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtYCxcbiAgfSxcbl07XG5cbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInVsdGltYXRlLWZlYXR1cmVcIiB2YXJpYW50PVwic2VjdGlvbi51bHRpbWF0ZUZlYXR1cmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIk91ciBDb21tdW5pdHlcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRlY2ggaW5kdXN0cnkgaXMgY3VycmVudGx5IG9uZSBvZiB0aGUgbW9zdCByYXBpZGx5IGV4cGFuZGluZyBzZWN0b3JzIGdsb2JhbGx5LCBhbmQgaXRzIGR5bmFtaWMgYW5kIGV2ZXItY2hhbmdpbmcgbGFuZHNjYXBlIGF0dHJhY3RzIGEgcGxldGhvcmEgb2YgaW5kaXZpZHVhbHMgc2Vla2luZyB0byBlbnRlciB0aGlzIGZpZWxkLlxuRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2wgaXMgYW4gZWR1Y2F0aW9uIHBsYXRmb3JtIGZvY3VzZWQgb24gaW1wYXJ0aW5nIGhpZ2gtZGVtYW5kIHNraWxscyBhbmQgZHJpdmVuIGJ5IGEgc3Ryb25nIHNldCBvZiB2YWx1ZXMuIEl0cyBtaXNzaW9uIGlzIHRvIGVtcG93ZXIgQWZyaWNhbiBtaWxsZW5uaWFscyB0byBvdmVyY29tZSBwb3ZlcnR5LCBhY2hpZXZlIGNhcmVlciBzdWNjZXNzLCBhbmQgbGl2ZSB0aGVpciBkcmVhbSBsaXZlcy5cblxuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VWx0aW1hdGVGZWF0dXJlIGtleT17aXRlbS5pZH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1hcmdpbkJvdHRvbTogWzYwLCA2MCwgNjAsIDgwXSxcbiAgfSxcbiAgZmVhdHVyZXM6IHtcbiAgICBnYXA6IFsnMzVweCA2MHB4JywgNjAsIDYwLCA0MCwgMzAsIDYwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlJztcblxuaW1wb3J0IGJ1bGIgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9idWxiLTIucG5nJztcbmltcG9ydCBkaWFtb25kIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGlhbW9uZC5wbmcnO1xuaW1wb3J0IGhlbHAgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9oZWxwLnBuZyc7XG5pbXBvcnQgYXdhcmQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9hd2FyZC5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogYnVsYixcbiAgICB0aXRsZTogJ1VwZGF0ZWQgQ3VycmljdWx1bSAnLFxuICAgIGRlc2NyaXB0aW9uOiBgT3VyIG1vZHVsZXMgYXJlIHdlbGwtc3RydWN0dXJlZCB3aXRoIHVwLXRvLWRhdGUgaW5mb3JtYXRpb24sIGFuZCByZWxldmFudCBjb3Vyc2UgY29udGVudCB0byBhbGlnbiB3aXRoIHlvdXIgbGVhcm5pbmcgZ29hbHMuYCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb246IGRpYW1vbmQsXG4gICAgdGl0bGU6ICdTdGVsbGFyIFVzZXIgRXhwZXJpZW5jZSAnLFxuICAgIGRlc2NyaXB0aW9uOiBgVGhlIGZ1bmN0aW9uYWxpdHkgb2Ygb3VyIGxlYXJuaW5nIHBsYXRmb3JtIGhlbHBzIHlvdSBsZWFybiBmcm9tIGFueXdoZXJlLiBXZSBvZmZlciBhIHZpcnR1YWwtZmlyc3QsIHNlbGYgcGFjZWQgcHJvZ3JhbSB0aGF0IHJ1bnMgaW4gY29ob3J0cy5gLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogaGVscCxcbiAgICB0aXRsZTogJ0V4cGVydCBUdXRvcnMnLFxuICAgIGRlc2NyaXB0aW9uOiBgT3VyIGluc3RydWN0b3JzL2ZhY2lsaXRhdG9ycyBhcmUgc2Vhc29uZWQgaW5kdXN0cnkgbGVhZGVycyB3aXRoIHJlbGV2YW50IGluZHVzdHJ5IGV4cGVyaWVuY2UsIGFjYWRlbWljIGNyZWRlbnRpYWxzLCBhbmQgYSBzdHJvbmcgdHJhY2sgcmVjb3JkIGluIHRlYWNoaW5nIHRoZSBzdWJqZWN0IG1hdHRlci5gLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaWNvbjogYXdhcmQsXG4gICAgdGl0bGU6ICdQcm9ncmVzcyBUcmFja2luZycsXG4gICAgZGVzY3JpcHRpb246IGBPdXIgY291cnNlIGhlbHBzIHlvdSBhc3Nlc3MgeW91ciBwcm9ncmVzcyBhbmQgcHJvdmlkZXMgeW91IHdpdGggcmVhbC10aW1lIGZlZWRiYWNrIHRocm91Z2ggcXVpenplcywgYXNzaWdubWVudHMsIG9yIHByb2plY3RzIHRvIGdhdWdlIHlvdXIgdW5kZXJzdGFuZGluZy5gLFxuICB9LFxuICAgIHtcbiAgICBpZDogNSxcbiAgICBpY29uOiBoZWxwLFxuICAgIHRpdGxlOiAnU3VwcG9ydCAmIENvbW11bml0eScsXG4gICAgZGVzY3JpcHRpb246IGBZb3UgZ2V0IHRvIGNvbm5lY3Qgd2l0aCBmZWxsb3cgbGVhcm5lcnMgdGhyb3VnaCBkaXNjdXNzaW9uIGZvcnVtcywgZ3JvdXAgcHJvamVjdHMsIG5ldHdvcmtpbmcgZXZlbnRzIHRvIGZvc3RlciBjb2xsYWJvcmF0aW9uLmAsXG4gIH0sXG5dO1xuXG5jb25zdCBVc2VmdWxGZWF0dXJlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidXNlZnVsLWZlYXR1cmVzXCIgdmFyaWFudD1cInNlY3Rpb24udXNlZnVsRmVhdHVyZXNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIlVubG9jayB5b3VyIHBvdGVudGlhbCwgTGVhcm4gd2l0aCBVc1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJGb2N1cyBvbmx5IG9uIHRoZSBtZWFuaW5nLCB3ZSB0YWtlIGNhcmUgb2YgdGhlIGRlc2lnbi4gQXMgc29vbiBhcyB0aGUgbWVldGluZyBlbmQgeW91IGNhbiBleHBvcnQgaW4gb25lIGNsaWNrIGludG8geW91ciBwcmVmZXJyZWQgZm9ybWF0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlc30+XG4gICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFVsdGltYXRlRmVhdHVyZVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmUtaXRlbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlZnVsRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1hcmdpbkJvdHRvbTogODAsXG4gIH0sXG4gIGZlYXR1cmVzOiB7XG4gICAgZ2FwOiA2MCxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLCAxZnIpJywgJ3JlcGVhdCgxLCAxZnIpJywgJ3JlcGVhdCgyLCAxZnIpJ10sXG4gICAgJy5mZWF0dXJlLWl0ZW0nOiB7XG4gICAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2ZsZXgnXSxcbiAgICAgIHB4OiBbJzE1cHgnLCAwXSxcbiAgICAgIG1heFdpZHRoOiBbJ25vbmUnXSxcbiAgICAgIGZpZ3VyZToge1xuICAgICAgICBtaW5XaWR0aDogJzkwcHgnLFxuICAgICAgICBtOiBbXG4gICAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgICAnMCBhdXRvIDMwcHgnLFxuICAgICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgICAnMCAyNnB4IDAgMCcsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCB7IExlYXJuTW9yZSB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5cbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy93aWRnZXRzLnBuZyc7XG5pbXBvcnQgY2hlY2tGaWxsZWRDaXJjbGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jaGVjay1jaXJjbGUtZmlsbGVkLnBuZyc7XG5cbmNvbnN0IFdpZGdldHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cIndpZGdldHNcIiB2YXJpYW50PVwic2VjdGlvbi53aWRnZXRzXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sZWZ0Q29udGVudH0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJ9IGFsdD1cIndpZGdldHNcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yaWdodENvbnRlbnR9PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICAgICAgdGl0bGU9XCJXb3JrIHdpdGggVXMhXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYW50IHRvIHNoYXBlIHRoZSBmdXR1cmUgb2Ygd29yayB3aXRoIHVzPy5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMubGlzdEl0ZW19IGFzPVwicFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGVja0ZpbGxlZENpcmNsZX0gYWx0PVwiY2hlY2sgaWNvblwiIC8+XG4gICAgICAgICAgIEhpcmUgb3VyIGdyYWRzXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmxpc3RJdGVtfSBhcz1cInBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hlY2tGaWxsZWRDaXJjbGV9IGFsdD1cImNoZWNrIGljb25cIiAvPlxuICAgICAgICAgICAgVHJhaW4geW91ciBpbi1ob3VzZSB0ZWFtXG5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmxpc3RJdGVtfSBhcz1cInBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2hlY2tGaWxsZWRDaXJjbGV9IGFsdD1cImNoZWNrIGljb25cIiAvPlxuICAgICAgICAgU3BvbnNvciBhbiBhc3BpcmluZyB0ZWNoaWVcblxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmV4cGxvcmV9PlxuICAgICAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9XCIjIVwiIGxhYmVsPVwiTGV04oCZcyBXb3JrXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGdhcDogWzAsIDAsIDAsIDAsIDEwLCAxMDBdLFxuICAgIGRpc3BsYXk6IFsnYmxvY2snLCAnYmxvY2snLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG1iOiBbJzIwcHgnXSxcbiAgICBtdDogWzAsIDAsIDAsIDAsICctNzBweCddLFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgJzI0cHgnLCAnMjRweCcsICcyOHB4JywgJzMycHgnLCAnNDBweCddLFxuICAgICAgbGluZUhlaWdodDogWzEuNDUsIDEuNV0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbGluZUhlaWdodDogMi44MSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaW1nOiB7XG4gICAgICBtcjogJzEwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICBtdDogWycyMHB4JywgJzIwcHgnLCAnMjBweCcsICcyMHB4JywgJzQwcHgnXSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxuICAgIHRleHRTZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxuICAgIGhlYWRpbmdTZWNvbmRhcnk6ICcjMzQzRDQ4JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJvcmRlckNvbG9yOiAnI0YzRjRGNScsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjMjhEREIyJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICBzZWNvbmRhcnk6ICcjRUY5RTQ4JywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXG4gICAgZGFyazogJyMxMDEzMkQnLFxuICAgIGxpbms6ICcjNEY5NkZGJywgLy8gZGVmYXVsdCBsaW5rIGNvbG9yXG5cbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnRE0gU2FucycsXG4gICAgLy8gYm9keTpcbiAgICAvLyAgICdzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICAgaGVhZGluZzogJ0RNIFNhbnMnLFxuICAgIC8vIGhlYWRpbmc6ICdCcmVlIFNlcmlmJyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJyxcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICAvLyBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIC8vIGhlYWRpbmc6IDcwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS41LFxuICAgIC8vIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1LFxuICAgIC8vIGhlYWRpbmc6IDEuMTI1LFxuICB9LFxuICBsZXR0ZXJTcGFjaW5nczoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGNhcHM6ICcwLjJlbScsXG4gICAgaGVhZGluZzogJy0wLjVweCcsXG4gIH0sXG4gIHNwYWNlOiBbMCwgNCwgOCwgMTIsIDE2LCAzMiwgNDgsIDY0LCA5NiwgMTI4XSxcbiAgc2l6ZXM6IHt9LFxuICBicmVha3BvaW50czogW1xuICAgICc0ODBweCcsXG4gICAgJzY0MHB4JyxcbiAgICAnNzY4cHgnLFxuICAgICcxMDI0cHgnLFxuICAgICcxMjAwcHgnLFxuICAgICcxMzY3cHgnLFxuICAgICcxNDQwcHgnLFxuICBdLFxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXG4gIGxheW91dDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsICc5NzBweCcsICcxMTQwcHgnLCAnMTI2MHB4J10sXG4gICAgICBwYWRkaW5nTGVmdDogWzIwLCAzMF0sXG4gICAgICBwYWRkaW5nUmlnaHQ6IFsyMCwgMzBdLFxuICAgICAgbTogJzAgYXV0bycsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgcGFkZGluZzogJzIwcHggMCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXG4gICAgICBwdDogNixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgYmFubmVyOiB7fSxcbiAgICB1bHRpbWF0ZUZlYXR1cmU6IHtcbiAgICAgIHB0OiBbMCwgNywgNywgOCwgOCwgNywgN10sXG4gICAgICBwYjogWzcsIDcsIDcsIDgsIDksIDEzMCwgMTUwXSxcbiAgICB9LFxuICAgIGZlYXR1cmVzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kU2Vjb25kYXJ5JyxcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzcsIDcsIDcsIDcsIDhdLFxuICAgIH0sXG4gICAgaW50cm9WaWRlbzoge1xuICAgICAgcHQ6IFs3LCA3LCA3LCA3LCA4XSxcbiAgICAgIHBiOiBbNywgNywgNywgNywgOF0sXG4gICAgfSxcbiAgICB1c2VmdWxGZWF0dXJlczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZFNlY29uZGFyeScsXG4gICAgICBwdDogWzcsIDcsIDcsIDcsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCAxNTBdLFxuICAgIH0sXG4gICAgd2lkZ2V0czoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRjdGNScsXG4gICAgICBwdDogWzcsIDcsIDcsIDcsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCA2LCA4XSxcbiAgICB9LFxuICAgIHByaWNpbmc6IHtcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzYsIDYsIDYsIDhdLFxuICAgIH0sXG4gICAgZmFxOiB7XG4gICAgICBwdDogWzYsIDYsIDYsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCAxNTBdLFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgbnVsbCwgNSwgbnVsbCwgNSwgNl0sXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU3XSxcbiAgICB9LFxuICB9LFxuICBsaW5rczoge1xuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbiAgICBsZWFybk1vcmU6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWZsZXgnXSxcbiAgICAgIHA6IDIsXG4gICAgICAvLyB0cmFuc2l0aW9uUHJvcGVydHk6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgIC8vIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2Utb3V0JyxcbiAgICAgIC8vIHRyYW5zaXRpb25EdXJhdGlvbjogJy4ycycsXG4gICAgICAvLyBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAvLyAnJjpob3Zlcic6IHtcbiAgICAgIC8vICAgYmc6ICdoaWdobGlnaHQnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vICcmLmFjdGl2ZSc6IHtcbiAgICAgIC8vICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIC8vICAgYmc6ICdoaWdobGlnaHQnLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAyLjUsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VzOiB7XG4gICAgYXZhdGFyOiB7XG4gICAgICB3aWR0aDogNDgsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcbiAgICB9LFxuICB9LFxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xuICBidXR0b25zOiB7XG4gICAgbWVudToge1xuICAgICAgZGlzcGxheTogWydibG9jaycsIG51bGwsIG51bGwsIG51bGwsICdub25lJ10sXG4gICAgICBzdmc6IHtcbiAgICAgICAgd2lkdGg6ICczMnB4JyxcbiAgICAgIH0sXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXG4gICAgZGVmYXVsdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIG1pbkhlaWdodDogWyc1MHB4JywgJzUwcHgnLCAnNTBweCcsICc1MHB4JywgJzUwcHgnXSxcbiAgICAgIHBhZGRpbmc6IFsnMCAyNXB4JywgJzAgMjVweCcsICcwIDI1cHgnLCAnMCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmc6ICdkYXJrJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5TWQ6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLnByaW1hcnknLFxuICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXG4gICAgICBweDogJzI1cHgnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBiZzogJ3NlY29uZGFyeScsXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMEYyJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aGl0ZToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBjb2xvcjogJyMwMjA3MTgnLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgIC8vIGJveFNoYWRvdzogJzAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgfSxcbiAgICBvZmZlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxuICAgICAgbWluSGVpZ2h0OiAxMzAsXG4gICAgICBtOiAyLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIH0sXG4gICAgZmVhdHVyZUNhcmQ6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdyddLFxuICAgICAgcDogWzAsIDNdLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyQ29sb3InLFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYmFkZ2VzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGJnOiAnIzI4QTVGRicsXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgICAgcDogJzNweCAxMXB4JyxcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxuICAgIH0sXG4gIH0sXG5cbiAgc3R5bGVzOiB7XG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgIH0sXG4gICAgLy8gaDEtaDYgSGVhZGluZyBzdHlsZXNcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNixcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1LFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDQsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMyxcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvbGlzaGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2dyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2hpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=