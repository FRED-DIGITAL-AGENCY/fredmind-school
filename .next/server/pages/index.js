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

/***/ "./src/assets/images/dropbox.png":
/*!***************************************!*\
  !*** ./src/assets/images/dropbox.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/google.png":
/*!**************************************!*\
  !*** ./src/assets/images/google.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "./src/assets/images/paypal.png":
/*!**************************************!*\
  !*** ./src/assets/images/paypal.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAcCAYAAACXkxr4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0xN1QxMzozNDoyOSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMTdUMTQ6MTI6MjkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMTdUMTQ6MTI6MjkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MGE5NTBiLTk0MWQtMWU0NS1iNDU3LWRiYTc2OGQxMjFkZCIgeG1wTU06RG9jdW1lbnRJRD0i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"

/***/ }),

/***/ "./src/assets/images/video.png":
/*!*************************************!*\
  !*** ./src/assets/images/video.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/video-94f36036167581b7fa43c3eacf2b4cd4.png";

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

/***/ "./src/components/cards/price-table.js":
/*!*********************************************!*\
  !*** ./src/components/cards/price-table.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\components\\cards\\price-table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */



const PriceTable = ({
  price,
  isMonthly
}) => {
  var _price$amount, _price$features;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.priceTable,
    className: `priceCard ${price.isRecommended ? 'recommended' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, (price === null || price === void 0 ? void 0 : price.isRecommended) && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    sx: styles.recommended,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Recommended"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, price.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, price.subtitle)), (price === null || price === void 0 ? void 0 : price.amount) !== 0 && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceAmount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.priceLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Starting from"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.priceAmount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, price === null || price === void 0 ? void 0 : (_price$amount = price.amount) === null || _price$amount === void 0 ? void 0 : _price$amount.toFixed(0), "/mo"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: styles.list,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, price === null || price === void 0 ? void 0 : (_price$features = price.features) === null || _price$features === void 0 ? void 0 : _price$features.map(feat => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: feat.id,
    className: !feat.isAvailable ? 'unavailable' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, feat.isAvailable ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdCheckmarkCircle"], {
    color: "#3FDBB1",
    size: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosCloseCircle"], {
    color: "#CED7E1",
    size: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, feat.title)))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      textAlign: 'center'
    },
    className: "priceButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.button,
    variant: "primaryMd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, price.buttonText)));
};
/* harmony default export */ __webpack_exports__["default"] = (PriceTable);
const styles = {
  priceTable: {
    border: `1px solid #F3F4F5`,
    borderRadius: 10,
    position: 'relative',
    padding: ['30px 20px', null, null, '55px 20px', null],
    '&.recommended': {
      backgroundColor: '#fff',
      borderColor: 'primary',
      borderWidth: '2.5px',
      color: 'text',
      '@media only screen and (max-width: 767px)': {
        pt: 65
      },
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text'
        },
        '.price-value': {
          color: 'primary'
        }
      }
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.31,
    letterSpacing: '-0.55px'
  },
  subtitle: {
    mt: '6px'
  },
  priceLabel: {},
  priceAmount: {
    color: 'primary',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: 1.39,
    textAlign: 'right',
    letterSpacing: 'heading'
  },
  recommended: {
    backgroundColor: 'secondary',
    minHeight: '31px',
    alignItems: 'center',
    display: 'inline-flex',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0 8px',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
    position: 'absolute',
    top: 17,
    left: [20, null, null, null, 40]
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [35, null, null, 50],
    maxWidth: 340,
    li: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 16,
      lineHeight: 1.62,
      '+ li ': {
        mt: 30
      },
      svg: {
        mr: '13px',
        mt: '5px'
      }
    },
    '.unavailable': {
      opacity: 0.5
    }
  },
  button: {
    backgroundColor: '#FCF2E8',
    color: 'secondary',
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: [35, null, null, 70],
    ':hover': {
      backgroundColor: 'secondary',
      color: '#fff'
    }
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
    label: 'About'
  }, {
    path: '#!',
    label: 'Affiliate'
  }, {
    path: '#!',
    label: 'Careers & Culture    '
  }, {
    path: '#!',
    label: 'Blog'
  }, {
    path: '#!',
    label: 'Press'
  }]
}, {
  id: 2,
  title: 'About Us',
  items: [{
    path: '#!',
    label: 'Support Center'
  }, {
    path: '#!',
    label: 'Customer Support'
  }, {
    path: '#!',
    label: 'About Us'
  }, {
    path: '#!',
    label: 'Copyright'
  }, {
    path: '#!',
    label: 'Popular Campaign'
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
  label: 'Advertise'
}, {
  path: '#!',
  label: 'Supports'
}, {
  path: '#!',
  label: 'Marketing'
}, {
  path: '#!',
  label: 'FAQ'
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
  }, "Copyright by ", new Date().getFullYear(), " RedQ, Inc")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
  label: 'About'
}, {
  path: 'pricing',
  label: 'Pricing'
}, {
  path: 'faq',
  label: 'Faq'
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
  }, "Explore Now")), mobileMenu ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
/* harmony import */ var sections_pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/pricing */ "./src/sections/pricing.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













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
  }), __jsx(sections_pricing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
/* harmony import */ var assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/paypal.png */ "./src/assets/images/paypal.png");
/* harmony import */ var assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_google_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/google.png */ "./src/assets/images/google.png");
/* harmony import */ var assets_images_google_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_google_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_dropbox_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/dropbox.png */ "./src/assets/images/dropbox.png");
/* harmony import */ var assets_images_dropbox_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_dropbox_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */





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
  }, "Hey Tech"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Welcome to school. We Teach Tech & Digital Skills Here"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Enrol Now"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.clients,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "paypal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_images_google_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_images_dropbox_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "dropbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
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
  title: 'How to contact with riders emergency ?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.")
}, {
  title: 'App installation failed, how to update system information?',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much \u2013 when the mud dries it acts as protection from the sunburns and insects.")
}, {
  title: `Website response taking time, how to improve?`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.")
}, {
  title: `New update fixed all bug and issues`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "If you\u2019re looking to hunt a unicorn, but don\u2019t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.")
}];
function Faq() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "faq",
    variant: "section.faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Do you have any quesiton",
    description: "Our support team ready to help you, please contact with them",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 57,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: faqs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
    }, "Smart Jackpots ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 34
      }
    }), "that you may love this anytime & anywhere"),
    description: "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.listItem,
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "check icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), "Unlimited design possibility"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.listItem,
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_images_icons_check_circle_filled_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "check icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), "Completely responsive features"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.explore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["LearnMore"], {
    path: "#!",
    label: "Explore More",
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
    title: "   Equip Yourself for a World of Opportunities.",
    description: " Grab Your Seat & Get a Chilled Drink. Let\u2019s Learn and Earn. We have Been Waiting for You You are at the right place. Let\u2019s Talk A \u201Chold-my-hand\u201D, step-by-step process to learn in-demand high income skill from beginner  to Mastery, even if it is your first time. No degree or prior tech experience required.",
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
      lineNumber: 26,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["LearnMore"], {
    path: "#!",
    label: "Explore More",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.videoWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_modal_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_modal_modal__WEBPACK_IMPORTED_MODULE_7__["CloseButton"], {
    onClick: () => setIsOpen(false),
    size: "24px",
    color: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_responsive_iframe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: "https://youtube.com",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_video_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "video-banner",
    alt: "video banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    sx: styles.playPause,
    onClick: () => setIsOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_icons_play_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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

/***/ "./src/sections/pricing.js":
/*!*********************************!*\
  !*** ./src/sections/pricing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_price_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/price-table */ "./src/components/cards/price-table.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\pricing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** @jsx jsx */






const monthly = [{
  id: 1,
  title: 'Free Plan',
  subtitle: 'For Small teams or office',
  amount: 0,
  isRecommended: false,
  buttonText: 'Start free trail',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'Ultimate access to all course, exercises and assessments'
  }, {
    id: 2,
    isAvailable: true,
    title: `Free access for all kind of exercise corrections with downloads.`
  }, {
    id: 3,
    isAvailable: true,
    title: `Total assessment corrections with free download access system`
  }, {
    id: 4,
    isAvailable: false,
    title: `Unlimited download of courses on the mobile app contents`
  }, {
    id: 5,
    isAvailable: false,
    title: `Download and print courses and exercises in PDF`
  }]
}, {
  id: 2,
  title: 'Premium',
  subtitle: 'For startup enterprise',
  amount: 89.99,
  isRecommended: true,
  buttonText: 'Subscribe Now',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'Ultimate access to all course, exercises and assessments'
  }, {
    id: 2,
    isAvailable: true,
    title: `Free access for all kind of exercise corrections with downloads.`
  }, {
    id: 3,
    isAvailable: true,
    title: `Total assessment corrections with free download access system`
  }, {
    id: 4,
    isAvailable: true,
    title: `Unlimited download of courses on the mobile app contents`
  }, {
    id: 5,
    isAvailable: true,
    title: `Download and print courses and exercises in PDF`
  }]
}];
const annual = [{
  id: 1,
  title: 'Free Plan',
  subtitle: 'For Small teams or office',
  amount: 0,
  isRecommended: false,
  buttonText: 'Start free trail',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'Ultimate access to all course, exercises and assessments'
  }, {
    id: 2,
    isAvailable: true,
    title: `Free access for all kind of exercise corrections with downloads.`
  }, {
    id: 3,
    isAvailable: true,
    title: `Total assessment corrections with free download access system`
  }, {
    id: 4,
    isAvailable: false,
    title: `Unlimited download of courses on the mobile app contents`
  }, {
    id: 5,
    isAvailable: false,
    title: `Download and print courses and exercises in PDF`
  }]
}, {
  id: 2,
  title: 'Premium',
  subtitle: 'For startup enterprise',
  amount: 89.99 * 12 - 10,
  isRecommended: true,
  buttonText: 'Subscribe Now',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'Ultimate access to all course, exercises and assessments'
  }, {
    id: 2,
    isAvailable: true,
    title: `Free access for all kind of exercise corrections with downloads.`
  }, {
    id: 3,
    isAvailable: true,
    title: `Total assessment corrections with free download access system`
  }, {
    id: 4,
    isAvailable: true,
    title: `Unlimited download of courses on the mobile app contents`
  }, {
    id: 5,
    isAvailable: true,
    title: `Download and print courses and exercises in PDF`
  }]
}];
const Pricing = () => {
  const {
    0: plan,
    1: setPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    active: 'monthly',
    pricingPlan: monthly
  });
  const handlePlan = plan => {
    if (plan === 'monthly') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'monthly',
        pricingPlan: monthly
      }));
    }
    if (plan === 'annual') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'annual',
        pricingPlan: annual
      }));
    }
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "section",
    id: "pricing",
    sx: styles.section,
    variant: "section.pricing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    title: "What deal suit you perfect",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.priceSwitcher,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "span",
    className: "discount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Save 20%"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "text",
    onClick: () => handlePlan('monthly'),
    className: `${plan.active === 'monthly' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, "Monthly Plan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "text",
    onClick: () => handlePlan('annual'),
    className: `${plan.active === 'annual' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, "Annual Plan")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.priceWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, plan.pricingPlan.map((price, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_cards_price_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    price: price,
    key: `${plan.active}-${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Pricing);
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  heading: {
    mb: [60, null, null, 50]
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${Object(polished__WEBPACK_IMPORTED_MODULE_5__["rgba"])('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px'
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text'
      },
      ':focus': {
        outline: '0 none'
      }
    }
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: ['repeat(1, 340px)', 'repeat(1, 340px)', 'repeat(1, 340px)', 'repeat(2,1fr)', 'repeat(2, 430px)', 'repeat(2, 440px)', 'repeat(2, 480px)'],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`
      }
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
  title: 'Fast Performance',
  description: `Let’s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world.`
}, {
  id: 2,
  icon: assets_images_icons_diamond_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Pro Subscription',
  description: `We believe it’s important for everyone to have access to software – especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers.`
}, {
  id: 3,
  icon: assets_images_icons_help_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Partnership deal',
  description: `Let’s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world.`
}, {
  id: 4,
  icon: assets_images_icons_award_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Customer Support',
  description: `We believe it’s important for everyone to have access to software – especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers.`
}];
const UsefulFeatures = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "useful-features",
    variant: "section.usefulFeatures",
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
    title: "Amazing useful features",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.",
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    data: item,
    className: "feature-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
    title: "Ultimate widgets of collection that will be used anywhere",
    description: "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
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
  }), "Unlimited design possibility"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
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
  }), "Completely responsive features"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.explore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["LearnMore"], {
    path: "#!",
    label: "Explore More",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

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

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Ryb3Bib3gucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYXdhcmQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1bGItMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVsYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stY2lyY2xlLWZpbGxlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGFydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGlhbW9uZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaGVscC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcm9ja2V0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy90cm9waHkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdmlkZW8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3dpZGdldHMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9wcmljZS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci13aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNwb25zaXZlLWlmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9pbnRyby12aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3VzZWZ1bC1mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9oaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInVzZVN0YXRlIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwidXNlRWZmZWN0IiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJtYXAiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJoYXNCYXNlUGF0aCIsInN0YXJ0c1dpdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwic2VhcmNoUGFyYW1zIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJyZXNvbHZlZEFzIiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiam9pbiIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhcnNlZEhyZWYiLCJjbGVhblBhdGhuYW1lIiwiaW5jbHVkZXMiLCJzb21lIiwicmUiLCJ0ZXN0IiwiUHJvbWlzZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiZGVjb2RlUGFyYW0iLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInBhcmFtcyIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJlbmNvZGVVUkkiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJ1cmxRdWVyeSIsInJlc3VsdCIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwib3B0aW9uYWwiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJBY2NvcmRpb24iLCJfcmVmIiwiaXRlbXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfX2pzeCIsIkJhc2VBY2NvcmRpb24iLCJfZXh0ZW5kcyIsInN0YXRlUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJGcmFnbWVudCIsImluZGV4IiwiQWNjb3JkaW9uSXRlbSIsInRpdGxlIiwiaXNPcGVuIiwiQWNjb3JkaW9uQnV0dG9uIiwiY2xhc3NOYW1lIiwiQWNjb3JkaW9uQ29udGVudHMiLCJjb250ZW50cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwibG9nIiwiZ2V0U3RhdGUiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwicmVzdCIsImpzeCIsInN4Iiwic3R5bGVzIiwiYnV0dG9uVG9nZ2xlIiwiZGlzcGxheSIsImNvbG9yIiwiY3Vyc29yIiwiYm9yZGVyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJsZWZ0Iiwib3BhY2l0eSIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidmFyaWFudHMiLCJvcGVuIiwibWFyZ2luVG9wIiwiY2xvc2VkIiwiX3JlZjIiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJfcmVmMyIsImNzcyIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsIl9vYmplY3RTcHJlYWQiLCJyZWR1Y2VycyIsInJlZHVjZSIsImFjYyIsInJlZHVjZXIiLCJGZWF0dXJlIiwiZmVhdHVyZSIsIkJveCIsImZlYXR1cmVJdGVtIiwiVGV4dCIsInN0eWxlIiwiYm94U2hhZG93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIm1pbkhlaWdodCIsIm10IiwicmdiYSIsIlByaWNlVGFibGUiLCJwcmljZSIsImlzTW9udGhseSIsIl9wcmljZSRhbW91bnQiLCJfcHJpY2UkZmVhdHVyZXMiLCJwcmljZVRhYmxlIiwiaXNSZWNvbW1lbmRlZCIsInJlY29tbWVuZGVkIiwiaGVhZGVyIiwiSGVhZGluZyIsInN1YnRpdGxlIiwiYW1vdW50IiwicHJpY2VMYWJlbCIsInByaWNlQW1vdW50IiwidG9GaXhlZCIsImxpc3QiLCJmZWF0dXJlcyIsImZlYXQiLCJpZCIsImlzQXZhaWxhYmxlIiwiSW9NZENoZWNrbWFya0NpcmNsZSIsInNpemUiLCJJb0lvc0Nsb3NlQ2lyY2xlIiwiQnV0dG9uIiwiYnV0dG9uIiwidmFyaWFudCIsImJ1dHRvblRleHQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwicHQiLCJmb290ZXIiLCJsaXN0U3R5bGUiLCJtYXhXaWR0aCIsImxpIiwic3ZnIiwibXIiLCJwYWRkaW5nUmlnaHQiLCJVbHRpbWF0ZUZlYXR1cmUiLCJJbWFnZSIsInNyYyIsImljb24iLCJhbHQiLCJkZXNjcmlwdGlvbiIsIm1hcmdpbiIsImZpZ3VyZSIsImg0IiwibWFyZ2luQm90dG9tIiwiRm9vdGVyV2lkZ2V0IiwiZm9vdGVyV2lkZ2V0IiwibGFiZWwiLCJ1bCIsImEiLCJtZW51SXRlbXMiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJDb250YWluZXIiLCJmb290ZXJUb3BJbm5lciIsImZvb3RlcklubmVyIiwiY29weXJpZ2h0IiwiTG9nbyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdhcCIsIm1iIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImJvcmRlclRvcCIsInBiIiwic3BhbiIsImZsZXhXcmFwIiwibWwiLCJIZWFkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsIm9wZW5Nb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwiaGVhZGVyV3JhcHBlciIsIlN0aWNreSIsImVuYWJsZWQiLCJhY3RpdmVDbGFzcyIsImlubmVyWiIsImhlYWRlcklubmVyIiwiaXNXaGl0ZSIsIkZsZXgiLCJuYXZiYXIiLCJuYXZMaXN0IiwiTmF2TGluayIsImV4cGxvcmUiLCJjbG9zZUJ1dHRvbiIsIkdyQ2xvc2UiLCJNZW51QnV0dG9uIiwicHkiLCJ2aXNpYmlsaXR5IiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwiYm90dG9tIiwic3Ryb2tlIiwiSW1nIiwiTGF5b3V0IiwiTWVudUxpbmsiLCJ0byIsInNweSIsIm9mZnNldCIsInNtb290aCIsImR1cmF0aW9uIiwiTmV4dExpbmsiLCJBIiwiTGVhcm5Nb3JlIiwibGVhcm5Nb3JlIiwiSGlPdXRsaW5lQ2hldnJvblJpZ2h0IiwibG9nb1doaXRlIiwibG9nbyIsImN1c3RvbVN0eWxlcyIsIm92ZXJsYXkiLCJ6SW5kZXgiLCJyaWdodCIsIm1hcmdpblJpZ2h0IiwiTW9kYWwiLCJjbG9zZU1vZGFsIiwiUmVhY3RNb2RhbCIsImFyaWFIaWRlQXBwIiwiY2xvc2VUaW1lb3V0TVMiLCJvblJlcXVlc3RDbG9zZSIsIkNsb3NlQnV0dG9uIiwiUmVzcG9uc2l2ZUlmcmFtZSIsInZpZGVvQ29udGFpbmVyIiwicGFkZGluZ1RvcCIsImlmcmFtZSIsIlNlY3Rpb25IZWFkaW5nIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsImNvbmNhdCIsIkhlYWQiLCJkZWZhdWx0UHJvcHMiLCJsYW5nIiwiSW5kZXhQYWdlIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiQmFubmVyIiwiVWx0aW1hdGVGZWF0dXJlcyIsIkZlYXR1cmVzIiwiSW50cm9WaWRlbyIsIlVzZWZ1bEZlYXR1cmVzIiwiV2lkZ2V0cyIsIlByaWNpbmciLCJGYXEiLCJjb250ZW50V3JhcHBlciIsInRleHQiLCJjbGllbnRzIiwicGF5cGFsIiwiZ29vZ2xlIiwiZHJvcGJveCIsImlsbHVzdHJhdGlvbiIsImJhbm5lciIsImltZyIsImZhcXMiLCJTZWN0aW9uSGVhZGVyIiwibXgiLCJteSIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwibGlzdEl0ZW0iLCJjaGVja0ZpbGxlZENpcmNsZSIsImgyIiwiYnIiLCJzZXRJc09wZW4iLCJzZWN0aW9uIiwidmlkZW9XcmFwcGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJ2aWRlb0Jhbm5lciIsInBsYXlQYXVzZSIsIlBsYXkiLCJvdXRsaW5lIiwibW9udGhseSIsImFubnVhbCIsInBsYW4iLCJzZXRQbGFuIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJoYW5kbGVQbGFuIiwicHJpY2VTd2l0Y2hlciIsIkdyaWQiLCJwcmljZVdyYXBwZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwidGV4dFRyYW5zZm9ybSIsInB4IiwiYW5pbWF0aW9uIiwicm9ja2V0IiwiZGFydCIsImJ1bGIiLCJ0cm9waHkiLCJkaWFtb25kIiwiaGVscCIsImF3YXJkIiwibWluV2lkdGgiLCJjb2xvcnMiLCJ0ZXh0U2Vjb25kYXJ5IiwiaGVhZGluZ1NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2Vjb25kYXJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm11dGVkIiwiYWNjZW50IiwiZGFyayIsImxpbmsiLCJtb2RlcyIsImZvbnRzIiwibW9ub3NwYWNlIiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsInNpemVzIiwiYnJlYWtwb2ludHMiLCJsYXlvdXQiLCJjb250YWluZXIiLCJ0b29sYmFyIiwibWFpbiIsInVsdGltYXRlRmVhdHVyZSIsImludHJvVmlkZW8iLCJ1c2VmdWxGZWF0dXJlcyIsIndpZGdldHMiLCJwcmljaW5nIiwiZmFxIiwiZm9udEZhbWlseSIsImhlcm9UaXRsZSIsImxpbmtzIiwidGV4dERlY29yYXRpb24iLCJuYXYiLCJpbWFnZXMiLCJhdmF0YXIiLCJidXR0b25zIiwibWVudSIsImRlZmF1bHQiLCJ3aGl0ZVNwYWNlIiwiYmciLCJwcmltYXJ5TWQiLCJ3aGl0ZSIsImNhcmRzIiwib2ZmZXIiLCJmbGV4IiwiZmVhdHVyZUNhcmQiLCJmb3JtcyIsImlucHV0IiwidCIsImJhZGdlcyIsInJvb3QiLCJoMSIsImgzIiwiaDUiLCJoNiIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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RUFBRSxXQUFXO01BQ3pCK0MsV0FBVyxFQUFFO0lBQ2YsQ0FBQztJQUNEO0lBQ0F1QixFQUFFLEVBQUU7TUFDRm5CLFNBQVMsRUFBRTtJQUNiLENBQUM7SUFDRHNPLE1BQU0sRUFBRTtNQUNOelQsTUFBTSxFQUFFLGNBQWM7TUFDdEIwVCxJQUFJLEVBQUUscUNBQXFDO01BQzNDQyxRQUFRLEVBQUUsdUJBQXVCO01BQ2pDblQsTUFBTSxFQUFFLGdCQUFnQjtNQUN4QnVGLE1BQU0sRUFBRSxpQkFBaUI7TUFDekJqRSxRQUFRLEVBQUUsbUJBQW1CO01BQzdCQyxPQUFPLEVBQUUsY0FBYztNQUN2QjNCLFFBQVEsRUFBRSxxQkFBcUI7TUFDL0JHLEtBQUssRUFBRSxnQkFBZ0I7TUFDdkJnUyxVQUFVLEVBQUU7SUFDZDtFQUNGO0FBQ0YsQ0FBQyxFOzs7Ozs7Ozs7OztBQzNXRCwwQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLTgwOGZiMDFiYWIzZmM2MzU4ZDk3NWI3Mjg3ODU1NDI3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhzQUFBQVlDQVlBQUFEYXA0S0xBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBaTVTVVJCVkhnQjdWbGRVaHRIRU82ZTFRKzh4T1FFWHA4Z2tFcENxRHdZbVRnVlFhV01Ub0E0Z2VFRXlDY3duQUQ1Qk9Da2JMbVNnT1NIQk9Pa2duSUNyMDlnSlMrUmhIWW0zYk0vbWwzTkNpa21aZXppcXhLc2RxZG5SdE4vWC9jaVdIQndjRFkzTzlmZkFRWExxaWNyNWZLU0J4UGlXZlBsZmFtZ3FwUy90N2F5VklkclhCbGcrc2JUbjAvWGhZQjlCVEEzSENWcTVkTG5EOFpOOU9PUHY4ejd1ZnhEQUxVYzMxUlloNzcvWUJwanVjYi9oMWpaamNhSkMwVm5QNkdzSkR6dzVXYjU3bExMdkJsRkFhVmdLMHRPS3ZuZzJzdmZQYlN5T2ZTQ1VyV0VOMmZCOE5ZZmZqcFp6am1DREFUY0MrVUFXOUR6Tno5MEw5ZG5JcHdOdmxZZy8xeGQrWElYcmdpd2NmUmlIeENyMHdncHdEYjYvalk0b2dsVFFnNEdDMnZmZk5WTzMzOTY5T3NXeldzMU5sK0pkdjVjdHQ4SFEya2NuVlFwN2UwSDM3QlZ2dk5GQ2E0SWN1V1ZMemRwZzY4UnhmMUpQRnNwdGRjVGhWcmw3aGNka3R1a0g3WURrM28yK3B1a2FNLzZsTlpIUU5mMlRIRDhLUW82eUpmWEhPQXRJUGhQZVdXcHBsQXVVTmg1TkdZczUrd1NoYVd0U21taEU4clZ1MWhZQU1ySldVS2twdzRaeURaYmVMbjBsa3BDVlNXbE53K2FaeGVubTJ1TUlCZGRoSXFva3JlMlJyeVZsTmtWTTd1VnU0R1NUWVNLcnpXYUozVlFPcXpIY29od1NBYTB2WHBuT2lWTGloNUNxa085TklvNUVISWRRV3lFajkxWjJlY3dXZUV2T215Q2N4dEJkYjVkV2R4bXdqZ3pON2lQVXM0cnhEbFp6RlhYdnZyME5ZK05ucEh4MFh3cU5CajBhS010NkE0ZW1SSGpDVlVYd3NuZjEzdFE2dkhxMTR1SFFZam1mS3pjNEZ4SWJvSkl3NXlJQ093NnkxR3E2cUNDOWpnNVhSRWhiQ2lFZWIxTUtET1EvcVB2UW9Lc3E1OXdmL3JNL1BNOU16MXF3bDF3ZHFMdi9CdlF0aGdwenFYTjFSQ2NtdzZlYjM5VEdzMnhXWGg2OUdLTGpHV0RjM3FhdVk5RDQvakZLenA0VjI5Y3ljMDBlNmQ1ZHhFeC9uRVVVVDVtUTN0NmZGS1BEYUVuYjdIbmcyRndzcGgzV2RtTjV1OGJxUHpkTWFuS0l6NVJpUTRzSko4QkowRWlwV3dVU3Rhc2t1aFV5NlhQZEZSTTUyeEUxYzZzVkF3NWhqYkdHK2NIWXlvaUNtNnd5MGF0MXpwKzJUVEdlaHhsbzZpYjRtTDZtYkJOMk8zTWRBU0tOM3p0ZDBVSHBvQVFRdkYvaGVwU1EyMVBGR3VjRXFMdkJkbGRUNCtSQmVSRGRkUDN0WlVydng0cFdxY1dJTzlpSGpHRTYrUnlUVDAyQlZMV1BDdDZLRWNwelFBYmtUMjFxR1ZXZExCdnZkWll1Wm1QZWc5VGl2YlNjdVR0VzArT1RtcDgzY1Y4eFhqR0VVOTdjbUJ3QnVsR1dXSWpHRkUyaDVEWkcvMVhnVFhTd2tYeHF0SDhiUWN1QUljVnRqUUtGN3NVSXVkUk9BZEVxUFp0aC9kZndKdVZpY1BDK2ZRWVFaN1BCOHRwZ0d0Ny92VDcrRmZRUDRqaE1UOVp2Yk80b0preXlsdVJFYkV4aEFhVEFQK2VwTnppTGVZaDBYT1dJK096ZWkrbnNuK3djRXR6RnBJeitZMHB4NUVrb1NBYXgrTmpPVG5rVXc2UldUWVM3Y1hVKzRoRkFrT29obWs0dU1kOEtlUktzYkpaS2F3c0ZIQXdFdXJJcWh2SHA2OXNpdVBRODZ4NSt0RFA1YzVHd2s5SXFQUUdMZ0hFMW1QUHBnaHl3ekpFSzJTTlNDU2xnUnAvZ3R2R3ZyZ3haQkJGdnZhVjNJdStPNGdiOXNWbGdtQnkvV3dTV2xMQVBac1ljNVlvdE9yMTlKNkdFWVVNVkJ1dEk5Q0lWRlN5eFhzUDBIVm10a3lqakNLYlRwV0dBUWswK2g2VWZzdzZYeXViQ1FRV3hkbTRYS0VuSUM5L2RuVDZNRkk2VytQTWpmN1ptTzZabHVNTmtOekJaWGw1TnRTZmFjYWZHM1FURWNES0kzem5NSjZCRHZMSkwzL2NOQi96SWRzcUNjcWZMVk51WkY1V21rVk9xY0ZqWTh3bitpK0tUNkk3VXZuUDB6STZzaG5ybVpFdGJVQWh2QzdrdDgwYmdoTTVoOTZKdW1jUWhBcFZkQTQ0M0ljRXhwMVFicDJOaFZrdVhBS2s5RitQM0ZOcVlpSnBRdVQ5c2J4RUdWekJ4RUFtY3JBTEU4S01VQm53N0lMeXIrZ3lIZGt3L2R1cFVqQWppcGJocHNxNE9ubDBRYXozTUYvaVVvVGtOak0zTmlyWWN0RGVQWnNFUVZSSWs1ZUxJWlNUK01FMklpWFBuY1E5bmVjbmdNTmxZUWkwR01Td3ZFdXRsekFNWXZtamNHMXlYQjNGYzhpaDR2bHMyQW1UZzFWVlYwWUc0cVlLRXhVU09JUnM2S1pLdDVQZm5vWCtEdWR3NkVPTEtUMTMxYktFektiS05DWGNDR1p5aVZ4S2IrWmFrNGoxODNrdk1VMHFyRE1jUjhWejgzN1RIa0Z3RzB5Z1VxQ3lLczdUM0VKT1A2ZUlNRzlMWFFLZDI4TnZnZElVRENOVjhua0FuaWNraXRIczdlaCtXRzVHYTdhSDgrQ091WDVNMERpM3JKWVdLelp2WldXeVVnZDBiZVJvbmNPWjdtTmY3Ykt4d0lpM1lVc3oyQ2xmQmdnSkx2TUIvbnhQNlVMWGpHYU5TOUZsMG01Y29EZ2puOUdMbXg4TXhlbUdoK0VWMUlpeEd6ekptUWVuWHg0WjdObVdaL1Y4bFBJaXVZak1taEdLVW85ZUQzMm9HMUxMWEFGRmN0cHphUjR6MWNiR1hrQ3pBZWIxc0ZBaUxoRTBwR2c4eThVeTZjMXhDNVNaWjhBMGc5RGIrN3RZNDY2VkxVZnJneUxMa2hLV2pkTENVeElxLzdsRjZvZ2RYb3MvZWFvT1VpOXFQR0pVazZjZGhwOFk3L0s4ejQ1UDMxQjBVc3hYSnB4Ykd6ZEhOSlpOeTlIaDF5MHludlpHSnJZa1E0N3lKa1ZtdmFoNUZCQkh3eWpadUVNNS9wL3dhaTdMNkZ4MVNXeXBwLzhSaGRoaFdZNUpOVjlibXlyYXkrOHNWVmxaRXZLM2RkM05CQ3NibW5GelhVMmh2YzVLMXpuOWtzRTFLMGVZYVEwb0xFODJ6YnhxSWFRZUdYWWxZMjdQNERXdUtjdHpac2xSbmY4b2tyT3R4OHBKM0tFWFJXWVl0c2x4bE9XMEd6U0tqR2dYR2dCZjJ1cHZUa001R0FPMkhKWFZJclFocUtzcEJKMU03ZEcwemw3V0swN0JaWVNZT2JUa1VqcFJjU2hSZW5xY3pNN2pITEZvWHkwbHFTK09PWjFyRlJFbzZ2ZDVFdnpuUFRGYnI1UVdPMlBrYTlTWklrOFY5eVFHMFkwTy9qazFESGVKaTNqUk9NZVg3WE1IQXNQdzVXR1pDR2xhRHBWOHJOODFwSDVQZUdZTFhPa0U3d09jbTlFZWZWQ3YrWDNCYWxRNkZtQlpHc1I2TFZXWHM0SHpXOG1JREtMQWVZUUwwQmgyWk55THhrWXZQdDc2N2RZVlFLSTNUc2FtVTlSN0RuSFJnR1FPejRSbTZ0OFN3ZnNRRlAyaDRrSmxNNkljUG82cFQvT0c2eHJ2QnJscEJwY0Q1bGluMEY1VDZOemoxNWlySDZpU3cyWk1TMzlSa3phT3JqYitCWisyQXNRTGprYlNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGVUFBQUFjQ0FZQUFBQVFvdlArQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQXpOU1VSQlZIZ0I3Vmw1ZEZUVkdmL3VmVzltc2djQ0NTaDRCQlZ0MlVTSUVNSTZFRXhJZ09KQzZxRUZXUVNyYmJFVmUrb3B4eHFsaTZmSGVxekxPV0pSN0ZHa3BpcFVJQXRKR0NBUW1CQldVY0JBRVFocXlFcTJ5Y3k4ZDI5Lzk4MWtJVTRvS3YzREhMK1RtY3k5NzM3ZnZkL3ZmdmRiN21NVWdzckt5bXlWamVidEpFMG5rN3FUTVRrVTNYMFprWlRFTGpKbWZpSklMNUxjWDlSY1dmRkpabWFtU1QyQTh2ZnNTZkI3N1VucXQ4YmxGMmxUN2p6RUdEUG9heExyMnJGK1MzSHZ1SEQ3Q3Nib1BrbjBBM1RwSVJrWjh3UGhJOFRrMnZobzdZM0V4RVEvZmNjcFozdnBGRWJ5QTZ2QldJNC9tajgwSnpHeGhiNG04YzZOYlJEYU85eFdES2l6QU9od0NnQXFnWHdsSTNZQ2ZTZGhxelVTWHlBYkhpV1NwRmVyRzhTSG16YnR2SUcrNHlRWVFTZUtVeCtBRzlYYUdNYnBHMUM3Rlc3WlhqekdrUEpGV09Dd3RqNVk2OGRTc3ZXQ3M4T2F4bXFaMTh0eDdQdGdwakY0dUJDZzNoUllqT3dYSGExL293WDBSTEpBTFNyYWM3TlBhditBaFFZQWxmSnpXT2JxdmpIYTY5MGM2eTM1K1VlZWt6YlBZNEw0TU5KYWZ6bmRPYm1LdmllTExPc3ltRzBGQlMwVWZyS0ZjL2E3aHBxelYvU1RxYW0zTnplRWllZjhodSt4bVpNbVZkUDMxRTU2cnF0c29wRG1BMVpMa3BkeHR2cFMxV2R2WDAxRXoweE85dUNmaDc2bnkwaVg1RWZFNDVGV2kxRXQ1L0xkLzFlS2xKMmRyZlVaZUd0LzB5OGpESWUzTWowcHFlSHI4RzkwSGVybElHOVVVNVduUGpQVDJYUzFmQWlxYk9QR29yaXczbEhoNUttdFNrOVA5OUszb0RWcnltelgzK0pMc1BuSms1WTJ2ZzdBeWM3UFdaNnJOQStUcGdZbmZ5RjlldEt2NlJxU0FqSzJ6NkFKZ3VTRENIeXpNWHV2NENPMWNSOUxKdC9TL2ZaMzdycHI5T2RkZWJFZXZuVmIyVkJORXdzWnQxSzhRV1NsZ1V6ZzJYSDQvYmVKMi82Wk5uWFVXUVJZMlpVL0I3R0NrYllJcnUwbmFBNjJaSkpzQlA5bUtmaWJtazVwSkVVTXVtdGlIT2JUdFY1OWdpWmxnUVVNbzAwTkZMa2cwem5jMnJ4c2x5c3F5Z3pMWUp3dlEzTXlQalpMSE1seitIckRadFBmbkRFcDhienEwN0c0OWxTSWFXeFhkK0NVbEpTRTE3UnF0OXAwb2RFVlNCcDZjMlAxbVZQSzJoVW91VVh1dXdIb0h3REZiVjIwVm5KR0FwaG5ETjFJMmx4VTh1anM2Y2tYTGdObHg1N1IzR1o3Q1Q4VDVXWDVzdVJNQlZVcG55YnBtMWk0KzhBajZEelhtWGRyb2Z0V2pIc1o2RGlwRXkvbWkwYmN1Sjh4Y2FjUU5BQTdGSUh1aWtxdjkxbGI2SlFjaG5ITUhrdE52MEFXdEJMTnZwMGVxUTIrRWRDdU1neHp4SmJpbzh0blRScFpwNlRFdFEvaCttbnFodXE4K20wNnlRSnA4TDUwQldJa1RqbmlmamdSUHl0elhPNjdvYjNLS2lJc0tCaVY0K3NnY2tEc3Zyd1J5bzJIa3BGbzM2c3p2YysvQy9mZC82T1VwRW9sSm0rSGV5SnNlU040K2lncnhOZ3ZwSkFIQUdZZElPM1BKZDBKSzFkV24rSDNHWVhiZHU3THVHdEtVcm1hSjMrbmU3QmhValprM3g1Y1ZpMEV1QUh3UmZ5T3gybFY4dzZocTZDc3JDd2UwN2ZwdDZna242WkFzZVRIWnBZUjR4OWgzZUhZN0xIb0hRSmc3OVA4bnJqc3ZKSjVYQjJsZGt3Tnk2Uy9GV0dTU0lmZHl5RThqa3UycWcxUTBEN1RFTXVOR0w3RXZTdDNPY0JhRExCK2ovbWJnNXdUN1NUbXFsOHUxeG1IRkxRTXlYaHY2NG1VRjZRUUsxcUpGcm1MY3hjNWhMRVk1LzlKVEdieFFzNGdJZmxQczF5dWdLbVoyakpPYkdSd1BWVlFjYVVXRnI2b3FmcnMwaWpkdGdqZGo0T241bXIwU1p6Z1ZDZHNtYXJQbFdRQXVjRVVjcWw3Vjg3REF4TWlIMFQzUTVqRmNsMFlNRGJXb2MvVXNXdVZtUGw2MVNtWWJ3VCtIUWdsM0s1SDFCcSs1azJzQTZRT0lDV0xocHcwQ3ZnWnN4bUZYWVRHNXlLVEdLcE1ESXY2akROendld1p5YWM2dUxJcTRHLy9GaDAveU00a1F3VW5IVkxUVnU3ZWZlS2R4dGJLd2NUWlBDeVN3NkpxWVAxelUxT1NPcTByUzdtSmwzTUtTK3RneE92VXZBQjljYkxkdGliUGRTQkNTR05wUUVkcTBobDdiTWJVcFBXZGZHNFYxclJ1Mjg0RERvejdLK1NIVXpjVUZlN2dyTmwrTDRCVGJnSjZpdDFoTi9WL0tHM3c0TmJDUW5lZnMxODJqOWM0ellQK2NXbzJUQkFGMlFzNVJwN3BCRTVhZHhQTW1EVHNmSHlzOWtoRGRlVGlyaC9wRlUrMFJVQUlyUXR6TkVxdXlkdncyeDVrMzVubTdBeG9nSlRmOVF0ekd3QU5XQnl4WHBkYWFtNFdqSTFGTTh5U1IzS2YyVXJsb2RZVXJsRVJSZ1JkRmgvQURmc0EwL0FqMzVZQm9CalZTNTkvVzljZ3B0cndnVVdZNzRvWmhPRzVaR2VNRDJGdDVUeGo3L2crL1ZUTGNlMzlzWit6MXhBODEwTHd3dUJwTkdGd3hVenl0M1ZZU1FHT1lycFNBcE9rNVJlVkpLZE9UeTc1NmhSTUppWlN5R0lnZDhmK0RCTENBcEF6N1ppaDYxN3U1LzBvZUdHRFFGVkszWkREaURncGJLMEsxRGpzaUFQUnZEOG5jWFA3WFE5ang1dWF6amFINHEyaTVxWm9pamhKMXNXUDVGNi9HQXhGKzRBcExNaDhLalYxd3NWUXZCa3A0OHB6dDd1UkNjREhka1BTeisxU054UGEycHp4MmFZZSt3d3c2NmUyR3l0VWwwcUhnRitoWGRQWHBVd2VmVUp0R0hlRTY0V1l2RDRnUlVZSnBpM0pLUzkzMEZYU0Z0eHFNU0htQjV1SStPWlJVVmZuRlNTTVRvdnA5b2paRTRRdGNHY1RXQUhuV0Nnalg5dHpQTERGeDhlelVMd09tdzA2ZElSc25kbDhTR0hNanJ4UmhuVTNMNjQzZFFweFMzZVovREFoQ1pWUld4c25ieFltN0JmNEtUOFNRanpCYkhKUlJibTJhc2FVTWNmYlRnUjNKbzg1QmM2bklOOExxOUN3eUNXOG92YTVuRjBINCtsL0VLSjFQeTNDOFJJaW5SVVVZSkxudU03ZW5UMTdOcW9zZGhvcnRvQmxVc3d0T1g4K0pMQytldDlVeXllUjVaTmFoTlJQYWR4VzFxNEkwUVNmUFM0dUZHOWtxKzA2REVnTWp2TVlEdk1UcUh0S3lRa3lEOG5iZlhoWUtON2FCamtXSVBTbUs1REgxRHc0K0tjRDRpMGttNkRyR3RqTGhOTGljYU15VXNZL1AzTnkwdEhseThjWUNLNWhxc2hRNHl4ZllSZnNmWUJjRU9CVG1UVXRaYWJ4bC94ODkrRHVKdHhTVUhvVDNQanpZTGszNkhOVTh2aGE2cFN4bjZrZDA1aDlQNDU5c0lSbEkrcFBmcG5STm1rYjVSODVFaW1FWEFEVUxjQVJXVCtPNEpjdXRFamZSL0NsWHdhQkdXRjRQUE82enE4dTB2MWNQZ3B0KzFtOGpJNlpobFpiMzl4eUZNMjJ5QjR0dk40RmFteG4zdXhqeCt5U3pFd0VuaWk2QXZHR1poTmFIWUowNitSQVA2K04rRnN6VXlic3pjcnF5SnJXNStaR3Q0cXExVnNMOTA4UDZCR2tuSnlEOFN6Y3Z3Wkt6S0ZBWXE1SVdkcDJBTDJMY1ZGQlFvTWtjNkRPK0hpa05OT2dTZkI0eVZha0RpOUpYODJUYlNWZ1ZwYmtTWlBkY09Sc2NSRFlab0QyaW1HS0F1SmFDM0FmcEpGY2dlZmpBaUxrUlJ5bG1XbVR4eC9NenBaYVROOVM1SWFFbElzY0FhWEVtMGpXM3pNRXE3TnA0anJPK1ZLc2E1YTFWa2FOT0hnL1MzV08zYUEyZEd1QmV6NXhzVGJnZHBTTmlIOGh4WG9MYnpLcUpPTjRnOEVlQU0rOFlKcWtxS0tWdFl5d1VXUmkxNHJLMmhscS9oQzRPQVA5N0l5US9tY2xPWTV3bkg5c0Rvb005amd5blZFV1hvei84VExMeVhYdEhRUndWb1B6ZnZyS2piL2FHY3ZTdXZvaEFDL1gyQVN0VGdrazd1MmtxaHFOc3cyd3V0SEJMdVdmdm9ERmVvSytLU2JZNzRkK2YyNEtNNTROWHRMUSt6bXVnWkZoRWV0bG9DUzBZTWZmQll5clI1NFZEMEQ2dGErTTJEclJLbjZWbmg2NFN5Z29LNHMxR28yWGNURG1CMDRSMWk1Rk5mU3FoaEFFTXBuQUZHd2QxQzJvcWt6Tkx5cE5OcGw4Rnd3RGd6UEN2WWh6a0tIODkwRG9GeHVVMHdJUC9IQklSNTJ6dldRS01NVkRtVXdCUVYzSG9iaVJGM0VjOXFHeWVYRnZjZTRPVkI0aWxLeThYV1hYa1drK0E0WTVXR2w4RjFrQWs0N2k4M3pHdEhFYktPaTcya2k1QjZQRzh4VG1tQS9lQVpjdFFGcUNQc1hYcTQzVloxOUJldWJyL0Z6NU9LOVorUnY0cENWUStzYk9JSUszSHEydDJOd01iRzZ2ZGxETmlCRUlsTmtCVUZtZXY1SC9mTTZjd091VXJRVWxJeGpYL2dTK3FXaDJkUnM0bld3dnJQVEptYzdFM2QxR3Z6eFVSREpDdjBPYTRnNzRsYUVCNnhCSUlYa3QvcDNFeGNMaEZwLy80RDNkcEN5ZHFhQ2dJTmJQb3laenBrL0ZVVlExZXdScy9uTlVUWHV4UGR2MzcvRWV6OHB5aG56QjVzSkZocCtISjV1Q3owQVJNRXFnME9CTVlnMnNGRWU1b0NraGZIL204T0crYm5nQmJQaDRBRHNUemRFQU1RcUtuMGEyc3RsUDVtazcxemNIZlhLRnI5RS8xTlpiaEhGVEgyTXhDM2JSd1pPT09wMGRMLzV3UHpGQVk5cDBlQmdudHY4V3F6YkJoUW8yZHFkZEdJWFRwaVgvUjdrZlJqMlVyRnNsd3pHa0taSk90TG1VenBUbjJwc0NFL2tBSUVURCtnNm5PY2ZkUWRlSWV1UjdwWndpOTdRb0dmNGkwL2phR0M5TjZmcGNYVWZDOHRXbFR6RHJJRGRkUTlLcEJ4SU9ZQXFjNGlJVldIRnYram9DOENwMDcyRGU2QWFmb3pWQkp6RUwyY0xqRk5DL1FRcnROYnFHMUNOQjVhYm43NEtIcTR2MzBRQVhsMFVxbjJaSHBLMjVVUmVJL0l6ajRraXFlbDM1dnkxZVIyczVYVVBxc1Q2MUFNV0pYNWN2d0NKblVQQnlwZ3Mxd1orKzExQlZ1ekl6TTYyV3JpSDFXRkFWNWVlWDNpQTBPWSs0dkFlcWprVGVpZ3R4VVkzTTVRQUpjMk9EMTc4cE0vM2F2MXIvTDVINTB3RUQrS2I2QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzRBQUFBd0NBWUFBQUJ1WlVqY0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFiUFNVUkJWSGdCclZsZGFCeFZGRDUzWnYveVYxZkJXaEJrSXZSQmJja3VXSDBwdUVVZmZOTDYxdFpDVXJCUXJaRG1WWkJtOGNrWFRhRzFmVkVUYU5OVnFvMkNvS0IwZ24ySXRwRFc1cWt0ZGlxSXBrclpOb25aWkhmbWVzN2RuK3pPdlRON1p6ZGZtT3pzL1R2Zi9lNjU1LzRzZzAwQW56K1l3LzhaTU5sTHdGa0drOUw0UFYzTlpVVjhkNENCQXk2ZnhYZWJaYWV2UVpkZzBDSDQvTjQweFBwSHdXUEhOa2hxbTNYQWMvTUFIbmFpNEVBSGlFeThPOEtTZWV5QWQ0Smx6MDFBUkVRaXp1Y1BaTUF3TCtLYkJac0s2a0I1VHhUMURkMkMvUHFidzBqNjB1YVRGcTFiWU1UbStXOEg5K3JXMEZLY1h6OTRIRC9HUTh0NEhQaDZCYnkxQ3JvdXZydGVOY05nd0dJbUdBbDhVbkhRc0RiQ2hzNU50U3ZWbGppU0hzV1BRQi9rWlJmYzVUWHdWc3ZBT1lkUVk0eUIwUk1IY3lDRm5Ra2I3UGJrUTRueitYMDBoSGVVZWFpcXUxUVNwRHRCYkV0S2RDQUFSZkFxMlRDZkQreTJpQjVHL0pJeXIrSkIrZDVTeDZRSmxZY2xXTWMycUMwRjBIYnNZbGo5NFBFeU1PUXBKcUlnL2UveWhnOEhnTVg3Z1BWc0RTMURiaWJhVXBQUG9KdU9CN2F2YkREQVJjZzlTT2wycEFtSjNLZkFWeGVoL010N2JjdXl1QW1KclFPcUxIU1oyQ0RMVGhiOUdXckZUZk80S3BsOFdvZTA4ZVRMUW0zanNaM2lhUWN4d2RGMUZFQ1hxUnhUMmdCbFMwWk9Tc0xoMVBYcDJQWURqWGR6KzM2dE9oVVNSZWt5YkZoVlhpSmUyekJaL25SU1d3ZDF0UnZmTlZVWE5sWlV3bkNyeXNsblIxRlNXcjJFMnYrdGd3NmExYTVEVjNXeVFmTklCczlJZHFReURJYjhTUjZ1aUVHZzZBRTlUd0FiR0FSank2QXlrcERpc1dmZUF1LytBazdZZThBZi9xNXVqRWlqdjBOU29wVUQzeUtvSWk3MWpxKzFFamV0MThCRWw0QjRmOXVRdDFIbmRmRTAycVFPWU5UeG5HL0JYWnhycEx1bE1zVDh4QTFERWxNbUxnNEJQdUsrU01Mb2I4dlQwQTJvdy9SNFRhUlZ0bXFwRXFjV0h4ZnhXMVhOTjlzcnpqZmczam9QM2FLQ2JiaW9lQXRjNVg0bm5IZ2tvN2VudXlJdlNHTWJuY0pIUEZWVUZXS0dlaS9XS2ZsdVNSTmFpTmVXVnBrOExzbUJKSWk4ZjdoRDBJNDBTeWh0U1lkcmxhczRVcUVRNGdTS0RycG9WOVpJS3VJRkE0MjlpZ2V6VXFHZThKT0xia2dVYldHc0QyMHJvU0R1S2pncDZzNUlqWm1HV29rR0dmM1F5SEN4Q215bk54RTBuMnlwckZ3bVJ2NGtEVTNJYVFWQVFkeTdmd000UG42RXhYODZGY25nRHN1ZXRhV3lVc000UVhGVE00VmRHbTFPSjhWTlBPelN5dGFTamtSWXJLK0ZNRVVhcjBhYVZsZ1Q5eTkxZHhJTEQyNFRlSG1scFIyelB5bEdWb0VaVldMQStGZHdYeEFibFFvLzJndWUveUJSSSswblhJZjc1MC9pYWU0QVBieThjVTRod29FajZya25WTW1CaDJWVWZjS3Z1a2hIMHVYRnBaWVRQUTEvNE1iSmI5Qlhsa2pISCs4UFVqdlBoczZPSzl1QlFPSWpkUG9nV1pSN2wvSS95MXFub1RDRWswYmZIam9YR0lJQ2wzenk5WTkrNkprSk0yaGlGT2dVNU5OeFBHY0dLQTFIcGdiczBQcEJHYmtEaHpNMy8wcWNvU0hKUE9WSytSUzJLTDZMTUluSzY2cFBjVHFPYzhYc1M0b0xJaFZPL1ppQ24yL0dNOWFPRjJlZGhWOGRWWm5nNE13VDRsNWo4bkoxMGd6dlZwODNpYmlSN0JmRTZUWkxYTUdoL3pkMmxIUUZoeXN2cmI0aGNicUJxY3RKdUhBMVdlc2xwME83clNxblZEeTM3NTBSbEdPay92M2FIekVJVXI0T01RS29Kcm1QZU5BVnhJUEttalF5bUJla2NCMms5UFJjUzNTeHJCMjc3am9MVjZTOUNwTkpIN0hROGVnR3kvTG43ZDVlaHFPdmxHRGJJOTFOU2ovK2ZtREErMS8zd3UxRnBZNUZXSTBQMmpNVExZdWlZbVlZZEIxZ3FWcTRmQ3NPWTlOOThQME5uVnZYOWxndU1lRWFoei9yRHlKTlNFUHZ1blMzMHFKNFRlMDdvQUZTZlhoM1NiaFAxQkVnd2w5ZFRjQ0ZLMGxZWHRPNjZTN2lKTXJhaFROT1BhRjFjaHA0ZzhWQkN6UzhIMzdYSzk3SmhUNTRZMlVLblhnSXBiQkFqdjFvR0xmTDNKc2RLd3lNMHB5SmlEUUsramwrN3Frbk5McWIyLzgyM3FjWUY2RVRjSmkwQzZjT05iN1NUUytrYXVSTFJaYWRLVzdZZVJlM0Uzd1VPZ0ZuZSt6Q1NadGVtN3B1ZkF5ZHdjRkFubTlPcUJGVkhnUHh6bVFjMXN2RDJObm9QM3d4VGh5ejlDcG1oRC84UlFMblkzYmh0SzFiM0xrMlY3S2VmV0VOeC9wVmlJNXQxczduSHpnTFYrZXFpak84dCtDUXgwLzBSVlpUeW5DcWVlTEgxaUFYY3V6Q0o1TVFFZllYcHlaeSs0OVM5TW9vQzZCTE5ON0pQdmZTVlk0c1hYZHVRZHcrZnpyMGQ4YmN2cU0yVnNoSkdTNGJnMDdCc1M3ajhpOGVZcjVVL1RnTW12Y3FMSzgwOE9YSkdlZ1FnaHhYTGVkdVhxZStGbkcxRVQwRDRYQVB0WnpnaGRvYnNUb01FVzZ5bWxSbkxLOXJJQXlpRFk4M25YRDB4ZEFtM3FRNkdxdE13bVlobFpnUXFrZFFtMkJDQk9EKytDNzlaQnNsL0xXRENJL1A3Y0piSW04S3cxeFJ0OTcvQU1iTzhEeHJrM2tBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBdkNBWUFBQUNHMlJnY0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFXTVNVUkJWSGdCMVZqZFR4eFZGUC9ON0ZKZzJWYmFzclNXTGF3Q2tROGxmQlFUamRHU0dFM1UxUEpnb29tSjhCY296MnFnaVpyNEpMejZZa2xxZkZCajhVR3RMeEI5TUVxQnRVYWd0STI3YTJsVUZseXFmQzB3NHpsMzlvdTVkOWhaQ2cvK3lNS2RjODg5ODV2ZlBYUHVXVFFVQUhNSzVUQndub1pQUVVNclRJUm9YSjZhVHBBdFFyWUlqVWVReEpqMm1CaTdndWJHeVJ6SFdlaDRuWVpuYzI3c0JoZUowQVUzaEhZbEloUUEra21GTjNCdnlFdklrWWo1RTBudndSYzBER0YvRUtFSDZ0VTZNYWFhMUZWR1V1STFJakc2anlRZ1l1a1lGYkVWa0JReHIxSXlha0lKTmZSaW9MUUpPSFFhS0FvQW5pT1dmWE1CMkw0THJOOEVrcmV0c1dNTTlHaHRHSFlrUW14REpOOFVWQW5KQk1yYTZkTkdxNHFSRjJ2VHdEOC9PQkZLWUJ0ZDJxTUlxNGxNNERlb3RvT2YvT2k1N05PN0JaTlkraExZV3BEbk5JUzFkclNsTC9VY0VqMk9KSTYvVkRnSkJxL2h0ZDZBUEdlaWxjckNRSlpYbG9pc0JnY0t2T3B1SzNhRHNRSEVMNm0yS1VGU1BFRDVrdEJUSkhxZ1VvT2Y1bDVKTURpL3lwOVZ6WlJqUzl3N3RUV2E0cFhpTjJNdjIrR0VRMEVycGgwZXZDaUlpT3BwaXRLOUU3NG03RHQ4emJLTjdzMGNkSkttVlpwa0piaE83RGRZRlYyeDFjU0J0MFltVWhUQWdhRzRWcmJSS2M1RTVPSzFuN2xoaDBvUnpTS2ltSkNkNDRzbXZ2OXhHMjdCdnJ6R1RXekJUMmsxTnlUVHhDOEdQdng0QzZ0ckp2SmhkUTNDOXlxdGNRdWRmaUtTMVpDSk5OWlp0Uy8yNzh2MEduWmF4ckluZ1pQdkFwVnZaVzIrVGtSWGVzUXdWS1hvTWpZVjVaNEttNWNPdVlpa3k4WXR5Yk02cU1OWFNyMWdOSTZHbGxlQWtvZnA4d2c5L2pnOVRnbGxXdFlXaTN3bDFqVFVLd1RmVWhJSjYvQm1UOEFNV0pIazd6SVplc0xaOERmQXluZDBmaHlqMC9VS3NQd0o4UGRITzJ3ejRhL1JxQ0tSYmhYc0lBNWVydlBtSkhWTjlxSzJPaTNWa3BxZ1ppWHMzY3R5c0J4YjlMYUpqaFlGa1pWSjJXWlNrNTArYTZnM0dKRWN1Sit3eWNpS2NDTEdsNXdUbHQ4VW5tK3NzeEZoSlRpbUhaclZJRm5lWG1wdStTUzBJM0ZseHh2VWxKSjcrb2J6MnhDZHQwaFdITTh4Y296RlQxWHVFZjdha1NIQzBsRFNEa2x1dktmTFk1bkxpbU9hU05qWXZMTWlNemNOOHFGdHJNcFJoR09vY3NQQWNMcXp6M3A3TVNnWTJzRnk4dE9rQWpYV1U4TGVjQ2JDK1pGSjFMUVNxaTJoZTFGSFA1Qyt5QkFScW15ald4bWRtMkVPdVBxcjJQdUZKY094c00yU0lweEw3SXVGUzlaYVpVeDA1Vjd1eUNqUnpCcm9VeTVrUlphL1JYWHBaeUpoWTlIbG5SV1l4ak96VnBvMUhmdGMrRHAyOG5RUCs1Y3RyOTJINUJxa1hyS2NLUGFyWXRSVUxvcS9rYmtKTk54M2JjZGNiSzZGZmorQjZwU1BBNGtMZkErN1dYbldpTDB6eFRaRjdITytrZzFCSnZabmhiUnVKbGFGbWhOeDRhTkFnbVBtNWtWZUlvTE1HVnltMlM1YVBHeWZhNmlaRnplMUk1NDRRbXJFNVdCVXRDZ24ya1JNQnpnU0VXVGFLTFBQaU9hMkZ6bDFwcnB5QWZIbHcxaGR6eDdwUEk3K2RSeU5OWGZzWVhvcFJsZSsvd2pzU2lSRHFJTUtIdTF0K3JvcGRiT1oyS21NRDVOSWs4eUFrN0pERk11ODhNSWxPTUgrR0QzZHY3RlZMRG82bjkrSDJUdk5DRlI0VU9ZdncvV0ZCb1JDUitBL0dzUmlNZ2pUOUNRQ2owOE91bzZQQXZEZU8wUDh2VmpxY1Z2YW0xWHVZeTg4OTNRWFhNTFYxbVNoSlhCQWNMMDFqT253ZGZBcjRBNXUvZlpBSkJpNkg0WWhuN3pCbWxPU3pUQVBrRWh4U1RGMFhVNHJ2OTh2MlhSUFFlbFhHSkZic3hHb0pDODZWS1R3UGtCRnFtdXJFcG9tUCttRDlTSFpXVHRBUmNyOHBUOXJtbjdlYnZjZkxwTjhEZE1ZUmdFbzZQVjk4KzIrQWRNMGh2TDVVWjRPblh2K21Zc29BSVhwbDhMQXdBZmxzYm5vbEFrenhOZE5yUTlad1RROVhGdDNvcXU3dTd2Z2VsTmdRVXNUNlVza2s4bmh6ZVFtY2o4YjYyc2pleUhCOEdDUHVEWTlQdGJTMkhtVU5HMEluS3hZcHkxN243Y08vM2Y4Qng0NzlKeHBtMU9xQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzRBQUFBMENBWUFBQUQxOUFyS0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFXRlNVUkJWSGdCN1ZyUGJ4dEZGUDVtZDVOU2taUWdEaFFwYVYzRUJWcVJtSlpDVG5VdlVCQUg1NENFMHBUV1Z5NXA0QTlvK3cvUTVzQVIxU2t0SUhGb3VmQkRxb2k1UUtXMjJCRWk2aTBiTlVnUkZhb2hxRWxxZXgvdjdUcUpuWGgzWnJ1eEpWQS9hWkwxNXMzTU4yKytlVFB6SEtCTm9Ka1RjMUxRSmxob0E2ajRYb3AvK29WbVIvZWlEV2dMOFU3Z01mSC9EYWg0UEUrbHNXbTBDUXFoSGZNQ3M1M3ovRGlsWHI1OERSMEV6WXlOTTdNTWFrNU9wZlBsVmpaT2VIVW5CVUtXSDdJMGMveVVHcnd5QlpOT2kzMTlXT0hpVkZQK2k2cmpxbUhYaFNHWTlCbitkWmI3WnF4S255MmRwalNONVBuWHlmcW5VUEowc3o4RHh6b0M4cklnTmRTeU1VVWxLRlhBU21WU0RTKzZpQ0lkWUVvTlhqNkZFRVFTMzBMZXcxR1Z2bHhvSW15ck0reWRET0pBb1lEVlNxNXhBRlFjeTNLb3VBb0QwZ0p0VlBFYjhEREpqNncxcjd6UjBaN3pzTlIwYk5KK1phN1QzVFhIYlp4cGVGczJKZTN6UWt6NEdxYmVxNDlFdUNVRGx0QnFkU1JNUHFIVjRoZ0hwSHVtUTNYODZIQmhMYVZWdWx3MnJSQnZBL0o2TDdhQnRDRGx6MklNR0JPbllyL29NWXQyZ2FWSHQvZWNOalUza2dvVmQ2ZmdkUlg1c1EvdFJaa2xzODlFTW1ZZTk3ckUyKzBtRGIrUDZpNGpyNXQ1L1BiQWZYU0d1TURJNjFxUDA2MEIwWFduU01QdnEvS2tkaTBaU0lVeTZEUXNmZVRTRTdjd2lFN0R3aEdkaVJQY0QyMmVHdFVnQjg5VjZjL3ovaU9wRkRvTjJ1RGluMkdBaGhrZzFuN3RHaDlybmRNOHd2SG1taFpYR0MweCtSSmtjOURobVhlQnBaK0IzbUZnOTBTdzVCZk9BZzltQVFuLzh2NlBUNFBTOXlidzUxZTZGbE1CNmRHaGhvTlhIZHc0MllOTTNNdURyRTF5SUxkT1dpQ3JPM3B4OXJ3T1BEY1JFTHB6akNkd0YzZjljZkEzOTBOMjBOL0JBRjc4TG5qV0UvY2ppbkRnbTlRVUg0ZjNOdjJOYUZKL3JMMDlJTG1SVktTUmVGeklpa2QxZGpMSStZK2k3ZmpncFY1WlNFZVptR3hBSmEyRnlFUUk2ZkFVeTZUOHZkN09VL002RXoxeFQvMm90WG00QU96bzE1cWhsd2YzencyOUhYa0ZuWW1lT05VS01NSFNqV2l2Nzl3UExNOEdHdGYyeVRja0RmUTNvTU8vODEyUkNqbzduNVJFanpDSXR4LzhCaTFFMzlLbkJtYUhyQnJPYVcxRXUxRWVsekQ0bDRHK1NVM0NBRWJFMWFzTEJhM1hSUUk3Qm9MbzBnbzdYd3JrRkFWaWJ4KzhtNGNCekc5QXlzbGg0MExiR3VKMUliZ1pQY09CbEtKUlJzVVpnU0dNaWF1MG45U1ppRFNTaUNHUzJBelJ0eTRNRW5KeEVrZXg3cHoxYWN5RkdxeHQrNXNoNzVZakYyWk9IYm9iSzgzbm1CalZjM2xaMUtxY3kvc3l6NGtndnBVck9VTTBId1hXUXAzb3ZQRTVYTjlsZURRaWEyZzlWMGwwelNUZHA3OUlCR214QzBFZUpUZ24rNHUxWmg5dFdVRzgzaWdYaWQveXJtWGo3R2xweTBkWEpzaFZxanpuS2s4aUNmRXR1YnowRit2VHFRNjdKZDVWdDJwZWRON1RJSmUrTjFydmxwNDYxeWdQbGY0c0wzM1VQMm5KUjZTWnh6SThyT2wxMGlGcE1mcWxYeEpFbWZVWElvMERQd0V6QjRMUGNpS1VFMkp6VkhGNXZleHIyVjVFcnJJUkVSNlhQQ0c1ME9YeU5tOU9vbTNaSWJ2N2d5SUQyUm9LUXplMDVseGwxUTIxd3piZyt0VEIrOHNWYTJPaHl2RjFkU0VZaE95bTk1cVB1Ky9zdjdjdlR1aHJoVzBoZnZEdDkrZVV5VTJwamx2ZlhFcmNyNDJFeUl4K01PNVkxakdueTNtQ0Mweks4ME92emJ1LzNpd2hBWXppZUJRVTFBV251d3N4Y1pGTEhnbVFtRGhCbmZPcXRYRUNHU2VOYk51ZVFFTDhaeldldUFIUk9IbThzOGFBYmFzTFAxejVKSkhYRTMrekxCcTNMSVU0aFFqR2VmQXdKTmU0UjdsSzVlRjVKbU9zOGU3dTdod1NZbHMwZnVpdEU5T2N0TWtZR1JOS3Q3NjlsRVpDYk1zL0lWVEp6dkg4RnlqaWhzUXo0b3BOVlZtSnZTM1lGbyt2WVNoN3FzOWU5WXBLTlVjWUlWMWJ0dEtsUXQ3NFd6VWRFdStjalZpOFUxcDU5b1gwMTd6OG5rWkFma1VSM2FpUlBWSzZubC9FTnVKZnE5QWNIcFZtY2xNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSGlTVVJCVkhnQnBaVmZUdHRBRU1abnhxbFVxYXFVRzlTUklGV2ZDQWNvVFM3UWVHOEFOd2duQ0p5QTVnUzBKM0JTRGxDWEhxQitRL3lSWW03Z0I1Q1FrR2VZTVNiRXhpRVF2amVQMTcrWjNmbDJqRkNqN3Yrd21YMkFnTkRyZzBnSEVQemlWUXlBQ1VzMitkZDJQK3UreFNldzB6QVFqdzVCb0FuUENTRmg1djBxbU9ZZnRzNS9Id2hSdUJSbUV2QUo2WERyL0doWXpqT0RIUTBSZUE5V2tBRCtPRjcvdmpzRGRzL0NiZEZzOEFZaHM0cyt1M0VPL0hZeG1kb1dYZ1VRSGdsNW43UnBRUkZLOFlwYlpOV3RBUHNWdGQwQU9adk1oZStkSVlSOWVKMWloVzFySVIxdDRFRTVrUUlCMFg4eFNpRFJiZlc2SjZGZjV3YjBhSU9Bb1ZQT3dpUHQ5bjR0TE9NZXZJZW12S00vdGNka1ZxckdHRDJKMXQyZWdqY05Vb1RUSEhZRHFUVHl5cDdDQ3BGMktTbFZDREl3ZytzNXhUbkVLaFB1UlY5Y0loODlzMVpuRVV6WHhnMUZ4dFdNQmxVckJYREx2Yi90ZnN0aWxtVE9JdlU4NGNzR3Nrd0VNYWpKNXR0WmZUME5kNUVhRzNxdUExZ2lRaGhqZHhvMkphUHBpKzd2cytWQllydWhxT1ZTemI0RGI5U0RNL0l1UjJ0dUxNZ2pXRkVHaTRveE5yUE44WnBlcFRyL0xZT3BiODFtai9DSzhza0ROSnliMG91VTZvVFpzUWxUU3JCb2RRNG0rd1d3cjh2dXZXZWVKWXJ6b1hBTjQyalRwZFh2N2dBTWt0K1RxWWZhcUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURRQUFBQTBDQVlBQUFERmVCdnJBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYkJTVVJCVkhnQjNWcE5iQk5IRkg2NzNrUUNOOVFxbEFNQzVBb0pEajNFSENvMTRlSTB5WkdmSGlyb3FjNFBGOVFxSU5WU1R5VEFKV3BTbFJ5UXFQaEpPQlZPQ1hCcUFUVWNJTDBsT1ZRVlNCRnVpWHBBSVFvcHppRzFQWjF2N1UzV08yOTNaNTFFU3Zpa3hQWjZkbmUrZmU5OTc4MGJHL1FPUUdReUNiS3NVVEtNcEVsYkVKSkFVblIyWnZBK25UNlJvTHE2My9DV2hGZ3dhSXNCWkd3Q1FpVG5DMkxreTM4V1UrM3grdFMzTzdkTlVhSFFzcVVJdWNua1M0S3lyL0kwczF6RVYxUEx5LysxakkrUExXd1psL01qYzZBK1JqL3YyVEVGTWhpM0pRZ0ZrUm5ZSGFjUExDTWp1cnZQWXF4Rm14eGhaT0ttakJvaGNsUXNqbUg4NXJlUUhwa1dZMlFraCtHYm1wQzBUaW9LR1dCTkxpZE9uMDdKQzZZcEZtdWtVaWt0RTF0Q0hrNjRoaUJRYy9JNGJ2eFlqaHMzcmwyYjByNkJaU1dpa0FFaXkzWWxLL2ZJQzJhUW1Ta3FRRTZJRVpremJua240OFdMVEdmbSs3bWxZVjB5OXVWSkV5dEVpS0FtQ1ZvUGdGaXhlSUdiR0NxQStucTdBa2pwa2dHMENFblhna1g2YUwySVZNM0Fkc2NMeHMyYkk4NGhOeG41Ti9YVG5vYWhaTXhZSU5QTWhibHNJQ0hiS3JIWWovS21HZHBvbEsxMXJpVzNRRzR5VGdXZ2V4bGZRaFg5SDVVM1NsRVlkdTBpT25pUWFQOStvbTNiVm8vUHpSSE56cFpmWDc0TXZjeGlTZVMrbUYzRTVHc2lBN0FxNTA1bXZtZHUzMDdVMmtwMDVBalJ6cDBVaXRldmlaNDhJWnFZS0JQMEFHcjIzYXQ4c3ZLeEpqS0FZaUhiemVycUpuM0pPRVRhMnNydmE4RzllMFNQSGhFdExka2Z2ZExjdnp1ZTIxRXFIcGFCSDVtUW1sZ3RxOWVYekw1OVJPZlBFeDA3VmpzWkFPZmpPdEpWdVR5end6U1NkdXpXZ0NvTDJZc20weHhtUnpZM0U1MDh1VFlpSHVUelM1VHQrSnBtM3J5dHpqT3JPR2RjdjM2WkltRGw3TUM0QVptT0Rnb0ZYQWl4VW5FbDI2SStEOEFtaysyam1aa2NIWGovUFJwb01MMWtnQVdaZ0QrSzRucXJvaENMOGE2R2dJZGxna2dnSHA0K1pZUGRQaC9DZ1lkU0VZOHFNZ2VTTkREUVIvRWZCamtsUkRKSEl1OGpUZGlQeExhT1piMWdSL1QzKzZzWWlDREFIWXNFQVphU1FwTC9yRlVsRTk5ZXR1ekZpOXkxSWxtcExBcW1tV2EvUFhyVW44eXdETFhidC9YSUFISmNmdXl1akpsdlZESUE3Z1AxVk9GWVNRdGxRbkEzTDNBRHFCR0hPM2ZLTGhZQksycjI1bDhaTXczVlpCejRwNEllMG9UcHJEbVVidzRkNHMrQW16MThTRkdnU0hPRFFmSGZKOVNCVG81VGtiQ1hLaHF3cEx2eEE5dmIxV1B3Y3o4eXptUU9IeTYvaHlzK2YwNzVYMzZsN0o5L3Erc1p4RjVUazJvUkNNajkrK3IxaFVqTC82RnJLVk1XbnNlVm8zQzN2WHZWMGMrZStTdVprM0FoMWZnc1gvT2ZObEgyclZESkFDRE1QUnljaTlyUUM4Tm9KQTJZbFZWbU5WQmtjbmp3Z05nSlpMT0tlQ2pTblB4UXpUTitjWWhDVjBXYU5HQ3k4Y05aQjA4VWxiTVhpTFV3TWhDQTlqYjFYSGNTZGdOVzlrSUlyYldZeVM2ak9aUDdsZjlJbUM2d1pLQm1pQzBPOC9QcU1WN3BOQW10RlI3eTA5Ti84SG5HcndiTTUyazlvZC8xOFpzUVJNTGxjczNObjFCdmI1WWFHeit1empPY21Hd0FUTHZwNElXZmtuR0E4bmtBVWtyU25Kemt6K2ZpaFNldldmb1loam9Rd2VvRkxNUWxXeVJhYnJ6M2V0UFQ2bkcvYXB5UDF4eHBBQlpTNzhROGRSdWNuRUtsQmdiOFNlSDQ0Q0QvMUpGRU9mQVcrb3MwWUVrTElmdCtwVXdDcEx3V1FhM2xXanBYalVlbG5FcVZWUTlDZ1VuSlNzRk9ucHcwdzRWVFRKR0NhM0hwZ1dpY3RBZ1ZDbU95bWxXWHV4d2h1QWNxY0JTblhtRFNTSlM2UlNzZURoZVhYUElHREdPY05HQldPcERxWU00U3prUTh1U2N5bkNZTEJ5N1dwSERwOXNTZFBQUlkrY2F2MWdLd0hPZXI0bkRnWVp3NnhYK0hvcFNMSDhNWUlrMlVDUlVLYUVTb2FoZWtZSmdVaUhGVkJRZTRLNWJ5ZnIwSjNBY1ZPQWVFaFNaV215VGQzWDN5aFYvb29aTDJTNnlPZ01DYW5Od2lEcUdPUVgwOGVNT2xTN3gxWkl2WXVIRkRvME5UaHJ2cms2ajBGZFNhQ1hYWW1UTVVDbmZYQjVQSHc5QnBlMkU1ejRsSnlFNERoK3ErWEZmWENlbXZvK3hJa01wazFyVXZaeE1QV3M2WFNoM3VYUWtkcUszZ3JxN0xraFMvaHZkWis5UUVXUExLRmY4cVhvZ2g2V3JhelJFSGZHL2JzcHp0REI1WW1icjZiSkhnOVBIOEVxNDlDZHZWYXVwdHM5c3BsWDJoeWNBdFI1QkJ3Q1BZdVFMVEMxZ0VyaFZFeEw1NTlMaHhJM2gvQ0w5d0NyS1VBNUREc2gwclhiZU1RN1ZBQkNXUTN2SUJ2OWY1dkZZeVFPaVdaR0JNclNlRXVDVXRjN1lXTjNORGI0OFZ1eEtHMFZ2VHJuZm94UVVJZEVnQjBFNmVRWWl5Q3c0WHpNZ0o5TENkb3FnQUVaUTBza3BacTFYY3FPVjNDa203RjI2YWNFT3RicVlIS0RMdnJqY1JCNUVKdWJGQ0xoWTdicmVaMEJKenV5VVVDeXRpckxtS3hXbTV2VDFtWEwyYW93M0UvNlBSZ28vSUtsNG1BQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEZ0FBQUF2Q0FZQUFBQzJWUWs5QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVNzU1VSQlZIZ0J6Wm5MYnROS0dNZS9zUjA3Y1M1MWV1aXA0QnlrbktQREFYWkJMTmpTTjRBM29HSlRLaVJneHc3ekJJVVZPOFFicEc4QU95UXVDanNXc0NnYkpNUWxsVUpKMWJReDgwMmF4RWxtUERjSDhaUGFKUFo0TXYrWjhmeHNoNEFHMTE5OXYvV3QyN3NDaGhRTEhudmQ3eCtDS2ZYUWYvYjQwdEo5MWZKRXRlQm0rOGN0a2lRUHZ1N3R3OEhoQUV3NGQ3SU9SL1RRZDU4NllJTHZ1ZkJIT1lCQlF1NDh1aGcrVURuR1VTbTArYUxUeEhENHZob1V3SVRWV3NnYVdQSmRPQldWd1lTbzVMTlhoeVJiTjE5Mkw2c2NJdzI0MGU0MGlPZTNScCt4a2I2bjFDK1FQbVoxS1J4L1BsRXRRYm1vMTFFbDN3UFhtVXk0eEhWYUc4ODdEZGx4bVMzRmNHN2lQNlZ2RytudE9xUG9PZzc4dTFLYjIzNjZYbUg3Vk9GOForUUcvbE5aU09FMzNHNTNJaG9PUjY0eHUwOW5GRmVYU3F3OHI0N1ZXa21saXJuUlM5R2dJVnZZVnRHeHdsYjJ3ZCtpTDAzUi9xZ1VnSXdhTFhPaUlnNmhPbFVsTTZiWkg3QzJjdUVHM0d6djNZTUVya0VHMktPbDQyV2ZCNDdRcVNnRUdiS3BtakY2RXdoYzIyejM3dkYyemRVODFBSEVvRUExby9keCt2R201aXhZNW1SR1I2aWU3eVFaeERkZS83Zzl1MzBxNEFaZGVrYzZVRUUwaXZWeWtmMnBza3pMMWpoVFhtbjBVdkQwTVE3SVZreVh0RUFUSEVXSFRCcWhzM2lrT2IxY21SdHhFK2ZPNm9NRm5PaUFSSnIxc1I0Ty9ja29xazVOWGoxLzA1QWpkRWN2eFpRK0NDNngvYUhybW1ESUlFbmdjM2NmbGlzQlhWZ3FZTVBIM1QzNDB1M0JuM1NGTlF3NDRrMkJIS3g1UU1JdGh4d1poME1jdW94RllRQXJsWkNGdFdHRkJ1c2ZIa0ZCODJxSlF4T2M0cFlYbGYwUFlOVlJRdzdwVlhTSFhvam53Vi8xS25odURvMUs0SU1UbnlFeGZmc1FMUEZjWjJxeE1RV25aUzdoYUNiTU5xNHBmcC9nZVhnWkxQaStmd0M5QS9ON1BRVHZHYXZIZHcwV1BJdi9JMnY0WmpMUlhiaEsvKytBQlNhcjV3THEySUV1eThJWUI0ei9JYnYwQW5RTkxFSVdYT3VGd1haeDJjRU04UVdhNVppcDJ1THpaQWNHTkQyQlhUQ0EwSFBRSmlTR3N6aVBkN0h0TEVPS3VkYkUvNU0zY0FSM3dKQWc0d0pjaHUrWkgwdmJ2TTdhUGdPM3UybkJKM1NKVlg2d2s4Ym1IUEpkdzJOcFcrT3paSnUzU3ppZlRQV0J5N3pqNkU5VFl6MWd1R0ZidVVock5OR0hpUzRNOWJCTmRYQTFxNEM4cXczMEVSaE1VNE9walRwWWx4V1NCalRSaDhsVmphWWU1blFnUXFsV1hYMmdMblR1QkRUMXdEcDhWZ2NpbEx0TlZ4ODZ1dERTQStwQU1SeWlOUzkwOUtGelRpbnJJVU1ISXJUWGMxVjlxT3BDV1E4U0hZZ3d2aTVTMFllS0xoVDFJTldCQ1BNTFJ3VjlCSXFQRFNVbzZVQ0VjVUFWZmFqb1FxSUhaUjJJc0xvM2tlbERwZ3VKSHJSMElNTDZCazZtanl4ZEJKNG5IaGxOSFlpd3YwT0ZiSDFrbldQQ2M5UkFCeUp5Q1lpSTlDSFN4WEE3NTBHem9RNUU1UEw0S2cxUEh6eGRDUFJnckFNUnVZM2dHSTQrZUZPeDZNOXRzOUtCaU53RDh2VEIwMFZoK3ZMTVdnY2k4aDlCbU5mSHJDNW0zSmVMRGtRc0pDREM5SkZNcGx4YUY4VzBPbkxTZ1lpRkJVVG9nckZOZjR0aGprenJZanc5YzlTQmlJVUdSTzZmSWZpTDhjT1JMdkNWVGRlY2RTQWlkMDJJb1Bwb1VWMWN3Vi9YcUI1eTE0RUlpeWV0bXJpd1R1L2NHd2trMFNKMDhGdHd0OTFyeEcrVEJ2eENmZ0xCUVdVYkFVRnhId0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRE1BQUFBekNBWUFBQUE2b1RBcUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFkUFNVUkJWSGdCM1ZwTmJCdEZGSDc3Wjd0TmFaMlV0RTFLcWRNRGxCK3BTVVZFUzFHN1FRVUpDU25PRFpDZ3FaQVFFb2VtNG9DQVE1SUwxK1JTZ1RpUUZBNXdRVTBGRW9naTJhMVV0UkxRaEIrSndzVXVhZU0wYVJKWDZZL1gzdDNodmJIWDJJN3RuYlVkUy9CSjQ1L2QyWm45OXIxNU0rK2JsV0NkOGRTTHIwVUFKQjJBUlgvNjl2TStXRWRJMENDd29YQVFJTkFOSUIvQmYvZ05XQ1E4eG9JRjNTWHhmeHgvWUdHLzRIZFVHdjh5Q2cxQzNXVFkwTXM2TmpPTXBidjR4ajFoQ3E4OWk4UW1vUTdJVUNObUZ4ZjF4TUpLNUc3dmMraEdvTmRCaEJCT1BiSnZndHFiVFN6cVVDTThrMGtrRWlIcVZBTXRvbWsrM1g2eUZ4b0JjLzloVUZWTlYxVTFNbmR6K1V3TSt3R1A4RVJtZm1ubEJGTUQwOWloN3ZQNVFaWmxNRU43c1R3SzljQU9QZ2laeC9hRG9pamc5d1VBSDFJNG9BWmlpY1dWWVMvdENKR0p4V0pCc2diWTByaGY4d2NWUlMwNm56cjRQTlNEKzNwLzBYOGk1ZFA0d3hyaFZvcXRDTG13S3hseUszL0xsbWtsWncxSldoc3p5RG9zc0JGcWhkbTExckxVajZiNnlQWEMvaFkyTGVKMlZja1FFYWI0STloZ1NDMnhSaUdJU09wQWJkWXh1Zzl4TjZzRWRHbFFGUzNreC90d0kxU1JETG1XQ0pIOFRkWG9haUxYRlJHcTRuSVZ5ZmczYlprUUpVSWc2M2dOQk5hT1hWZ2VGcXFiSjlUQ3psU3NVKzRnUlJFSnBMQW9FUUpqRE80Y2ZnbUM4VCtkUXpONEZBdGNLNmlGVDFYYWwxM2VBTng3K2loNEFSR3ltYVhQelM4TmRlN1lPbDU2ZnMxb3BuRUNHQllwbXBRYjdPVmdXUlprckV6U3R1elQyejRaaVd2THM1UFMrRlN5VXYzYzBpYzg5OTRwSFNQV01YcG9pdkNEWTVCS0cwbkRUUFYwZFhURW9ScVorY1dWTTRxaWhTazh1amFMMWpDdERKR0pHcFowdkt1ak5RNGVrVWlzaEpqS3hoUlpRVS9RaEI0Z2YzaG1PdHE1cmExbzRWcDBKUzBsYUFhbWljc05SQ1NkTWNDMjdkR2QyN2VPUUoyNGNYTnBCSzAwTE9vUjFIY21rK25iMWRFZWRZNFZCUUEwOXpBOUhUYzRSSmhsbjJ3RUVRSzFZMkY3dkYxczN3MTBuK2c5UlN1RVBCazI5RXA0eTllZjZiNkZHNjROa1d1UlJjb053bnJ3RUxaSDdacG14cld1NzlwZnNQbmNWM3AyMVo1RndhaVQramY4ZGhtb1VNaE1IWGdCMGoySDFqUkMvbXJaOWxTakxGSUthbmR1WWZtSWJKbDZhVkNRVXZkQWpWMkZ3T1Z6b1A0Yk5ZOWhpZkx6emhFMjlPcEs2VEtlWm1hYU8rNzM5ZWRuYVNPZGdwUUpYYlVNZGxGa2d3Sk0wenFReGcrUkNGdzZCMzRrUWI5TGtKVEd2MmpOazhrbFdKRnFIWEJTKzU2QjFTZDZKM2R1YXowTzY0enJDMHZqTGRkakp6WmQrS2JRQ2hYQStpaGpkZXlvdTlUbURUNUE1ZXluNTZFSjZQaDRKQzR2M3hLc1RWa3VSSE1CZ0dabFVhU21vQW1RbDFjbnhXc3pmdjlPTkFzSlhoV3ROck0zRXRMNEpQVXpJMVpiN3VhZnVVdERZaGR4WmFXSjRBcU9TRDBldU9Tc3JpVXNSbHlENWlJdVdDOUVQR1JuQmZ2Zmg2VExwRFRDL3dJc0ttY2xVMGwwVU8rR3BrSVNkZjg0OGNnRkFDWklKaHMxbWdjbU9tWEU2Y01KellJaGtIVm5FNnYxQnhzYURJcVBaM2FiUGgweXdsRXEwN1luREUxQnlrcy8zQmlPbTduTzZxU05KVjkvQnhiZS9LQXByamIvL3FranEvMkR2RjhCUk9ranQ5QWtrNlpqcGZNTjE4TlFDakpRRTh1S2ZKWHo3MGJDMFNHY2pGZE8zb0lOa2JOOGZVaS9TNUJmTmZPRkppMGRjT1U4NC9nb1BZM1V3YU9RMmJ1LzVEcFVHUlV0aUtuZ0JQNVp0NDBqcHZySHRJS01sOUtQdXdOdjhPVy9kdlVLcGdNL2dETC90MU03NzFXRjJjL28zZDQrcnVwWE15MEpIVFpUZEpLak90cGJSNkhCb0habFNTNHJxSkIzcEx1ZjVZWElxQmUvZzQyL1hqcnRuQzlTRGpERGk2Q2dRUElQVkFmREpDMnJBVFF5ZGVhN0REYU1pNGdhdG0yaERsR3MwQlRkTmFiRW81VGZ1MFBpS3Iya3lHTmV0eDBxZ2RvUkpVTEltRnppR2kyK3F4S1FkVFRjOUJFVDVWaTJVZE9hTW16alpDMUJnUTkySlRDQjNvQXlsd2ZkTEpPZTZ0emVObEI0dkl5aVdaeC9pNEFhNTRvTnN5YzdQM3o3UENWd2JvcW0zYlpyOE9aYkk3dEJrZ2NwcUlpSWp2emFuTXhWVG9jb2U3ZlhVY3RWVldXTVRPNEY2cFVMbUZaUE9uK2prTldiYnhkVTJaMUxjZmxjUmZPV3ZlZHhZUm1ZZ0VvbW1LWlpWbmlzMkFxNUcyMzNpWWlDRGpaL05GSVFNdDFCSXNucThYZkY2Nk5MbTdZMTFkbmVPbER1Zk1Xd1pXalNBRDZCdUdXWklBSmxmdFlURVFKTmdtV2tvN0tnKzZEN01lNUFSV1dvSXBtdTF0YWtaRWw5T01DRkNBVXVmUSsxZ1BRd04xRC9xQ3ZIRFZ2cTYrcHFyVGdXcTA0b0hUakFIRUxWUWpZdE1Yd3pGNkVXVkJEMjhpRFh5aE54RVI1ZE4yaUpFTHBjajJtWlV6VDR5b25hN2lKZFpUaVNheW1vSHo3WUxUTnEzSk42UkJSVW9hMXpjcm5POWpZYVE2TVVGa3ZkamhhQjlZQzA0MEpRcURjeVJ0TEttQ2RwaHEvbVdvWHc5RklERDRjWTN6Tm9KZEtjVWJFSDdZL3BjaXRaVHlETHF2R3J1U1dLd1RlU0RCTjZ2QzZWUEw5dVFtNUhvUkd0MUljZFI3V2ZHNlBXeXIvL3lOZGF0SUhFclZHRE1OK0l0NW9HYVRzRWY5YVlnZkxYdG1oeUhhMzNkYTJHdlc5R3lHMzg2RG50T29RbENNWFNienozVFdudStTeUoxRXlqSk4rR2tpbUhacjRKK0EvV2FIb05JS1I1OUFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJZQUFBQVdDQVlBQUFERXRHdzdBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBR0dTVVJCVkhnQnJWV0xjWU13REpWekhZQVJuQTNJQkdXRHNrSG9CbXdBbllCa2dsd25hRG9CeVFSbEE5aUFidUJLclp3b3JqODAxM2VuRXdicCtVbklvQ0FCWTB5T2preWpEVXFwSTl3TEpNdlFHclRaM09JRDdnVW1GMmdqRXhGeGoxYWpWV2phRTk5UlRvcDBLOVR0U0hraVBoZngyNWhTcTdLRTVSV1dvbVdGK3pBVDVaZXVxZ1hrVnRSNFV5WDNrSENJSk9RSjhoM0h0dkttVmFzRHhCWUg0M21Cb21wcXlYd3BsWk9Pa1JKN3NUbjVPa0RlYzB5K2dwL2hKNXdnakRNZWpEWDZGelRxWWNjYnVDLzVuZjAzc2ViRkp5U0E1QzI2RGRvcjU3MDU2aTJIWHNIZlFjbXpXSHRuL1FGdGlnVkk4SnpTNUdqT2U4WXFUcDVOSmxJODhPSXBRZHFoNjVsMGo3WnhTQW1QN0FlYk5MTmxya0k3bS95eVJoUDRMdEFZMnFtaHRlM3huc3RvSUF4U3VQYW90R2dFMTJVMzc1SG0rMjNvVUlpNDB2aU9ORC84LzQrUUNLck1ndU1ycXVsRWZDV2ZLMDlDQWRlUkl0QlJQOE4xK0tsVW1xQ2NyeWY0UFhaUk5iWG91dzh6OTk4Ny8yckJKdkpuQ3F5UWZxcERMTzhMUXcwVmtaUHZvS01BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFid1NVUkJWSGdCelpsWmJCTkhHTWYvc3o1UzUzUklUOHBoZXFna3FFRFVTZ1ZCMWVRQnhGc0lDRlFRQWxNZWVBUmVFSWNxRXFrcUNBa1ZKSGpvbWRCS3REeTBtQWVFRUVpRW8yMmtIaHh0Q2RDREJVUzRZckFKOGJYZW5YNnp3ZW5HM3NOMkhPaFBzbloyWm5iMy84MTg4ODFoaHY4UlBMZ2hRSmNtdUYzVHdIa0FITlAxQXNZQ3d5dHltZkxrZ1FmMzF6RThZWlM3UFUzdXJRZGFFSGs0UDBlb0RiRklCTkhlRzJmZGVBTHdLMmY4NmVyeU5SeFl5em4zOHdvdldEVC90bndrWGlUOWo5V0FqSENGaEpNYitJZnlYNmdGNjcyZjF6c000Z1VCRng0VDhUczlRZTd6SGliaDgrajJxZUdsRE5JNTJmRWRXZUoxUnIwSDRqZDdBaTRQNjRBWW5KeWIxdUV2UFVjbWVZRkV5dkk5WnVJRm85b0R5ZHVYNWtzZWRwaVNrMjByZWtpR3FrTDY1N1pwc1pWNGdZUlJRZ2xmMnNKYy9JRFIxKzNRWnRVRHRSVTUrWGJpQ1hsVWVpQVZ2dFJCd3RjVzlCRDFBaDg3QnRJdmZ3OWxPWWdYeUNYdEFSRmxVbjBYajVQNElJcEFqQVYxempROW5ZZDR3ZFdTOVlBUXIxVDdqbE55aGwyOXl5ckRlWTNoUWxyQ0RSclRhYzVRWjJoR1lZUXlFRUhrNUs5d1FnT09sQ3dLNmVJelU3OEpRdmdoUmNLZmF1NkVWY2M0bHBkcGVOWEZvU2FpVUdjOWk3SythVWdlUEFjN21JcXVrdlRBb005am5sVzVFUDVWMG9WNzNIeTJqZE04MEUwOTBwY1l3SlRZZFQzUFBmbDVTSFdWMEs3ZEI0K2JoOWNVdzhZUkd5Q2lqZDJBUFpkbStEcmwvSm5Mc1NSMjM0dmhiWGNLRXlWVnozTk5HQVBQN0ZmQXhBRHZHOGcyUko3UUhXb2ZrUUdwOE1VMTFQTGI3T3Jzb1phUGMrWW8vbVMwWDA5ZjQyNHM4OGFIeW9SNDBSdmV1UTF3alI4RFZsTU81aVdERkMyMDQ2L2ZEaGE5R3RWbldLOTB4aTdPQzMvL0tPSEtXM3lHd3hWaHZTZnM0RWczVjlVdjZpb3FqSXFJNC9LeTQwNlQxSFV0LzVZM2NsNzF3QUZaaUJlSnZLUFFvODJHK0lGV2t5dW9DUUpPejhTNWRabVZlRUdVT3pwR2V5Wmhhd0NKRnJ1akZuQVdwRHU5dGJVM1hnYXFmTWdIbjRVT08vR0NHbVpqT2JVK05XQlg1c2JVQUI1YzY0ZFVzWVdpRzYzYjlaekJBbHFyYUhPbUlsL0dTN2xDbk1RTHByb1V5eklPYlc5dC9VSTVjNTlqZ080cUxwZVlVUVBaWldLYTU3V1Z5QmN4TWRXUkVlRkhZeUVmOFJNb2hOb01ZRG1ka0hZYU02Ujh4Zk94dFlQdVV5REx2WnArelVlOFlOTlR0blhhYXh0Ykk4YU1JUVBzeEF2VTVVMG9CdEVMYjZuOStZa3Y2OGN5VDl5cXVMT3l2clV6TzFOM0lTZnhvdVVMY1IwalltMnpKTmtMMWVmRGg4a3FYTk55NXdYaE5oLzdJcmF1b3hnaWp4SG1KRjRNM1BUcXVVVVpvQy9NK251SDVaMUtlL1dmb0liR3gxUkpjWnkwS0NpMVZqUzBoc3pLM0xiaWlkanJFK0Fwa1hpQkVPc2syQWhGbmZiS2hvVWhxM0szSGlHTjhmclJxWmRJOXJtWmYzODRQSDF4Znd6K3F2S2NoMWxDZ1hUcUF0aE5PaExwdlVjemwwSjVLU1JtVHFRbDhUTVlLUnI0M3VyNmhXMTJkUVpkU0pLYWFIdC9Ga3BNWnAwN2gwYjUreDlzNjZDRGhLQVF2N3hsOWpBanBOTTlrSTZlMXdVYkVUdXBCNUc3cU5xOUJDT0M0V3psNU5aRzUyb1diR2piR25DNzJKWE12ZEVJNmRnNXVFaDhOc1p0WVBVWEsxQTBKRjZKb3prN1pKcGh1Wmp6dU5rVzQzMkUzT2pMZzZlaEhQclpVYnowZEhFUlM2Y0E4ZnEzekRMYjJ0cjh3bld5OHlmZGpLTDhaRTlPL2V3TmVMRUdDSjh2Ukx6QWNqRkhZMXRtaHVqMFFrckRncjVFVGoyejB3T0pOaDZGUW9lOHU2b2JGaFIyRkFQckhvaW9LbThXUm9oN2YxckQwanU1TTZUVjBZZDNUajBLZ21OZFZSSGlCWlpqWUZ2YlJsa1k0Vk81dk9wV1hEZkNpSlg0c3BacGhiaVFyS2hvckd4bzNZa2ljZHc1UEZpOXVhTXFQWHc4MklrdmE1bU9mS0E5U3lnZHg4cEMvTjBNV3dQNGU1dUNOS2wxR1BPc3hLdnpwcUIyOFp0d2dzZFMrbmxQNnRqRndOZ2Z2cnVLRVdLL3BXVERRNm1WK05BekZmZ2ovQURyb3pIVTFaUmJ2azY5ZUF2eHo3K0hGbjVJN3k3TnFhYmxXNmoxaGZoQTV0NU1mRnhpMkRPdUJpZHFmZWlMeHJGOVh6ZkNaRVEyV3Q5RHhIWWZ4OEQySTRQaWlhUlhpNklFV0xvUVg3WDVTc1lBTS9IM1BCS0o5K3RYSTAvWCtMQis2UXk5SjRTN3BJNzIwTytDbmpZZ2ovMHhOQWtsd0h4UExIemZSanhOY250M1RQUy9FNU9rUVBhem1aN1kzRWhMckcvUERMWDRzT2ZaZjV2eWtXTHVRa3hxRVJjVDhSR05ZK1dMM2FGZzNLVTFreFRaNU9tdVJiL2ZpdUNUVTZiaUJUUW5tbTVPaXNGeURHU0pqMUNydHlmTE1HbGNkNmhUWkh6VDJTa3pwaHFONkdJTXpmdjNmdGI4V2t5eERJM1UrcDJUdWtNeVNvU3BDeVVHSHU0aThlSWNLRUlMbEJOSkgzMjBLNVFqU2hqeGJqRFlMTUhqMzlmNTZWazRJNWV5OVFXajhrOTk3OHo1WmlkVGtTUkhZeWxiWDFEeVAvbXVOTTAzT3krTmFHazBsMXE4b09RR3VCTTUvOUxvNHNmOUZNckh4UXFtNUFiUTNHYnNnVkVWcjM4UEpTWlZwc2Q0R1k5QnZPQmYzaFYzeFJyZ2U3d0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDd0FBQUFzQ0FZQUFBQWVoRm9CQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVVMU1VSQlZIZ0I3VmxOYkJ0VkVKN1pYZHR4NmlhT1NCdEFRbks1Y1VFSklDUU9rWndiTktsSURrZ1ZRa3B5NGR4YzRaRDBBRmVTSzVjYUNSQ25PbFZJV2c2b0xyMXhpWkdRRWdrVnRnaEJLZ1ZpTlhiam45MGQzdXhtMTd0SjlzZngycWQrMG1yMy9leTg3NDIvTjIvZUdzRUhSM2ZmelNFcDIrSXhDMzBGcWhycGM1bnByZkpaclpMZmEwWkxHWWUrazJWUURwRnlmcTBZOENZMGY3eDJRMDdKWDBBZm9iZjB4ZVRVUnNHdlhRbDZPVEdVS2dOSzBFOUlzcUVHdFFjU0JtVWdRRFE5Z2h6Y2pQV3RHZkpybEpJS0pDNWxvSjlvN1ZmQmFHaSs3YjN4bnp4b1hUMUFid2dQdldsZFBjQkpEVmZFMVk1L3Nobld4cUZUTUZuMjhNRkQ2QlNJNXZpVmRnMkhPTXpaSmNYYkdkZFQ3MjBzT2wyM1A4cUwyMzNvQkV4MFdCRFduMW5QZk84QXlraG1LVEh4ZGNrdU43Wm1pbUtSNWV3eVM4S1pEWkYvd0k0TVd3cE1OZ1paa0d2ekVwdEdSUkFtbC9zeEI5M0NUWEk0QmgxVG16QUJxUW9DbHRzdXB4d1Y4MW1jSzFWQ0RZMU1XdGRKWkY1clAxOFF6NjkrY3JwUGJRZmdTUkhDY0ZDY3pRSnF6aG95RUI0ck91QURDV2pXcnF3ckdlNVFDcmNtRmxUeUVzRFluSDhmbG9WN0FveS92d0hZdndkUmtKUzF2THVNQnBZbDFNbVRGWW1kZUxaZDB0UkFpMDl1QSt3dWlhUmpIMExCZlg3N05BSlp3L2wxbFFTOTcyMkNrcFMrOW4wSlhBdFBoSlY1bG9WVkdnaVhCaFA1L2JQZ0VNWnRUUGJvVHdoSFVyV2ZpS1I4dTU1VTVtcHVIQWJCVjA2MVdKWDE1S0RwWlp3b1ZEZy9oU2lrZ3dqLzkxUFU4RmEyeGhSejI3eTZZTVZnQzhLUkpiNmJoTkdBZGZkYmlQS3lVekNNQnhBRjJVbi90dUczSUJLb0xVOFBCNlpSMTIveTNTUjhMSXVTNjgzYzBlYk15bkdoREZIZ1hsejdQM2lqd01oa0pCT0NzT21jeHQyWlpiZDNtVnQ2N3A3S0QwNENmN1F4azBlNXZhdHhrRzZSTVhYaDVjc3FTTm9CaEpIbDhNWFMrT3RMZ09xT1ZjOWg3WldQaFN4SEFSNEpuZGQyQTgyQW9WMnA3MVZBSE0zKzhNeWpvVjJ4Q1R2SkQzdFphSG5ONlNSK1pBWGxZbDNkeTRwQ0tYQ2dvVGVzMk1xTHp5YkxjT3AydzJWQlZMRElKanlwZ0RndUZXeXlIc0tNUmxOWjRkWG9zcEtUa25KUjEvUzF3TUdZMEtQUHp3NXZkaFE1ZWh4b0FqVGpqbVFvUmE4VVNMVzE2MHpnMU5pYlY4Y1ZsSGlXcmdNb3FzbXhES0FpNTZBSElFMVhXM3VIRlVKdlp1aVdnc1BrTEFNY1VoQ2xXKzQ2S1NWT0g2TzlPWDAwOTU0QzZZYW5qZ2dYMDlPbkQ2Tm5KdkRwNmEwQ2tiSG9ydU5qaTE1clFOelFEdXVSeVRKOFR4eE1XdGVBRXdWbnQ5T2VDdU9hQVhHQmJlbkNwZ3VWSUxLTXdPOFNET3NMa0h6ZlRqMVJsaUJ4K2FMSU9VSmZEU1hMQjg2MmQwbWxoajUxVXJQUUtXRWJ2SkdJN2RIY2ZUQWhtM28rTDJrUzhkTWsyOUt0TXNITmdXWjFOVXBhMjlHSTdHMGdlVVhrMFBQbkplMG15ekdXdzFhWVY4OU4yQVlUSjVKbkZVV2VWMTdJaktNUzdmQnR5dURmV3RsbzZYZWlldlFrdWhNaWs5aStuaE9aK2dwSU9CL1NkYTMrckxxYWZtZGRoUzdRTldFYnRQM2hnaUM5Zk9wY3lOdTYwQ2k2VHNMZElEYkNqSU1QOGd1cDF3ZHZwZDdPQU5VTmFQNWNoY1pPYlhIazlzTUN4QVFGWWtRNk96emYrdlVRcXIvVUxPT3BKRndjRzJXcEZDQW14Q2VKRzlmemNQelJSV3MwelRvbWZJd3BYUDJ1QkRFZ3ptOXJ6cUpqb2k2eWpHV0lDUjE1V0N5c2NaQWxIdnowWHduL1VEN3c1WmV3ZEdhOWJpemh4TGZSVGpYUXFZWWxrY0dSejhmQkYwUG1UcEQzc2NreUdvR29GS0FqWUMvK3BPbklaci8vRU9nYXp3bjNHczhKOXhyL0E4ay8rbDMwZEJDWEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1NQUFBQWxDQVlBQUFEL1lsMDFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBSFlXbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0Z1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTnk0eExXTXdNREFnTnprdVlUZzNNekZpT1N3Z01qQXlNUzh3T1M4d09TMHdNRG96Tnpvek9DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cGtZejBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJWc1pXMWxiblJ6THpFdU1TOGlJSGh0Ykc1ek9uQm9iM1J2YzJodmNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzl3YUc5MGIzTm9iM0F2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBSWFowUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZGZG1WdWRDTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXpMakFnS0ZkcGJtUnZkM01wSWlCNGJYQTZRM0psWVhSbFJHRjBaVDBpTWpBeU15MHdOUzB4TjFReE16b3pORG95T1Nzd01Ub3dNQ0lnZUcxd09rMXZaR2xtZVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1EWTZNaklyTURFNk1EQWlJSGh0Y0RwTlpYUmhaR0YwWVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1EWTZNaklyTURFNk1EQWlJR1JqT21admNtMWhkRDBpYVcxaFoyVXZjRzVuSWlCd2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBTSXpJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakJtTm1Nek56VTRMV000TVRNdE9UVTBNUzFpTTJRMkxUUXdZalkyWlRobFpHWmpaQ0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qbG1ZMkl4WW1Nd0xXTTFOV0V0WkRZME1TMDROV0V5TFdVNVlqQTJNR00zWXpNek1pSWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09tVmlOVFF3WWpRMkxUYzJPR1F0T0RrME1TMWhOVGhtTFROaU4yTTBaVEZrTTJOa05TSStJRHh3YUc5MGIzTm9iM0E2Ukc5amRXMWxiblJCYm1ObGMzUnZjbk0rSUR4eVpHWTZRbUZuUGlBOGNtUm1PbXhwUGtJNE9EaEJPVEEwUXpsRk9UTkVNVFV4TnpnMk0wWTROME00TWpJeFJEYzJQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytZV1J2WW1VNlpHOWphV1E2Y0dodmRHOXphRzl3T2pNeFpqQmxOemxpTFdFeU5HSXRORGMwT1MxaU5UTXlMV0V3TjJRd01qRTJNV000T0R3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG1Ga2IySmxPbVJ2WTJsa09uQm9iM1J2YzJodmNEcGlZems1WmpBMFpDMWtZVFk0TFdaa05EUXRPR016TmkxaE1qRTBOVFUwTWpNNFpqYzhMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qa3dZVEZqTUdOaExUQmhOV0l0TXpFME5DMDROV1kwTFRVd01tTTNOVE5qT0RCaE16d3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNlltVTBOMk5tTVRZdE16UTVOQzB6TmpSaExXSmhaR1V0Tm1GaFpqQXlOemt3T0RNNVBDOXlaR1k2YkdrK0lEd3ZjbVJtT2tKaFp6NGdQQzl3YUc5MGIzTm9iM0E2Ukc5amRXMWxiblJCYm1ObGMzUnZjbk0rSUR4NGJYQk5UVHBJYVhOMGIzSjVQaUE4Y21SbU9sTmxjVDRnUEhKa1pqcHNhU0J6ZEVWMmREcGhZM1JwYjI0OUltTnlaV0YwWldRaUlITjBSWFowT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXSTFOREJpTkRZdE56WTRaQzA0T1RReExXRTFPR1l0TTJJM1l6UmxNV1F6WTJRMUlpQnpkRVYyZERwM2FHVnVQU0l5TURJekxUQTFMVEUzVkRFek9qTTBPakk1S3pBeE9qQXdJaUJ6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnTWpNdU1DQW9WMmx1Wkc5M2N5a2lMejRnUEhKa1pqcHNhU0J6ZEVWMmREcGhZM1JwYjI0OUluTmhkbVZrSWlCemRFVjJkRHBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pCbU5tTXpOelU0TFdNNE1UTXRPVFUwTVMxaU0yUTJMVFF3WWpZMlpUaGxaR1pqWkNJZ2MzUkZkblE2ZDJobGJqMGlNakF5TXkwd05TMHhOMVF4TkRvd05qb3lNaXN3TVRvd01DSWdjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQnpkRVYyZERwamFHRnVaMlZrUFNJdklpOCtJRHd2Y21SbU9sTmxjVDRnUEM5NGJYQk5UVHBJYVhOMGIzSjVQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbkM4Zm9ZQUFBYjBTVVJCVkhpYzdaeHBqQlJGRklDL3ZXWTU1SkJsOFZvdkZNU2dSdmlCSnFoSXZJMEdRUk9qYURBR0JSS1IrSWRFdkpXWW9DQkJvMEtNb2pHQUdCTTFSTVVEQXFLaUdFRU9NYkNpY3FyQXdpNkhzT3Z1bGo5ZWRhYTN0cnFtZTJiWW5VbnFTem85Vkw5WFZWTlRyOStyVjdXVUtLWHdlRHhRMnRrZDhIZ0tCVzhNSG8vR0c0UEhvL0hHNFBGb3ZERjRQQnB2REI2UHhodUR4NlB4eHVEeGFNbzd1d01oTGdadUJsSkFTd2JaQ3VBSU1CYzRDb3dIemdRYUkrVExnY1BBTDhDM1dpZk1MY0F3NEhpTWRuY0Jid0kzQU1NamRFcjBmVGV3RnRqZ3FITzRyaXRjVDRudTg3dkE3eEY2dzRDYmdHWkFoZlFxZ1VYQXI4Q3B3RGpham1rbDhCR3dEcmdJdUQxVVIvQnlmQi9ZYXJSWERVd0VXa095U3ZkeEJ6QUN1SWJvOFNnRjlpTGpzWmJNdjNISG81UXFsT3NlcFZTVGlrK2RVcXFQMXQwUVE3NUZLYlZmS1RWZktUWEFhSHQrZ25iWGFKMVhZOGorcTVUYW9wUjZWaWxWbyt6ZmU1cERmMXFFRGtxcGVRNjlVVnBtcUxLUDZRUDYrZGdJL1RjczdRMk9rQjJobnovbjZFOUFvMUxxVDZYVUhLWFVRRXNiblhvVlVwaFVpcng1NDFKQitvMllpbGwvRlhBZjhEUGloUUtTZU1oeTQrNmlLekFRZUVLM09jRWlVK2JRdnplaXZEc3d5cUVYOWhTMk1RM2FqUHI5eDlOMmZGeXlnUmQwZlkrQUZIQTI4RERpTFIrTG9kTmhGSkl4dEJBZDV0aElrZjRoTW9VM0p0MkFoVUJQL2UrbUJMckI1RXFpQTJLSWM0R3BSbm16UTJjUWNMbWxmQ1J3aWtPdk5YUzNqV25RcGl0VW1ZT01rMWxuVkZ2L09lcXlVUWxNQjE1S3FIZkNLQ1JqaUtJQitOdHkvVVp1Y1djdllJcmplWE5FdTl2MTgyekhiZ1p3UlFMNXV5eGxkMlRaZGhMT0IxN3BnSFllUWRZMW5VNGhMYUNqbUFxOFJkcjFnL1M3QkxjbldZRk12R2JnVXVCSm9JY2hFN3gxYmZWc0JRWmJ5Z01qTU9zQytJdjBtKzQ4NEc3UzNpZk04OEJWOW02M1l3d3dqZlNpdnhxNE5hWnVydHlQTEpCWGtQYkNTVGlNakVjRGNBNnlXRC9ESWpjZGVJOWtrVUhlS1FiUFVJZE02SmJRMVlpRVJxN3o1OXVBcGNCWHdFeGdsVVVtV0d2WVBFd3AwQVVKaXlvUXQ1NGlIUmJZSnNjZTNkWk1ZQkppaEpzdGNsY0Nsemo2SHFZR3lYWUZqQWI2eE5UTkIvUDAvVkFXdW9lQXA0SFppQmNlQW54dGthc0JycyttYy9ta0dJeGhNakFMZUExNEhZbTdMNHloRjU2c1ZVQi9pOHdCZmJjdHdQc0Q2NEdOd0Naa1VtOG03VTFzaG1ndVZ2OEFIbzNvMzlDSWNodDNoajZQVHFDWER3WWlobDJYaFc0WmJkYzIrNURGczIyZE5DU0wrdk5LTVlSSkkvUVY1bE1rais1aUZKSkhCM256bkc2UldhanZ0b3hMQ3BrSUpsMHl0R3V5SE5tYnFESEtiY1laeFkyNjNWTGcyb1R0NTRNWmlDYytBcHlVWTEzcmdaK0F5NHp5YzNPc04yZUt3UmhzeE1rZVZla3JpcytCai9YbkpIL3VGNVZWaWFJWmlaMU5YS0ZPc0xFVnBDdTdJaHR6d1daY3dDRWt4RHM1WVo5Y05BQUhrUmcvb0FkaUVKVjViTVBFOVZ0MUNNVVFKdG5vbGxra2tuckVJNHpKVWovSlhnaEFieVMzYnJMSG9WTUxmR09VVFFFZU44cVdJMW0xZk5LRVpIaDJHT1hWSlAvdU5rcUFDeXpsdS9OUWQwNFVnMmRZREh4dmxLMkxvYWV3TDNJbklabUxUT3hFMWlzdHVwNHlYZWRHaDQ1dElUNFp1L0c2am1qVUExL1FOandjYWNnY0J6NURKbTQrcVFaK1FJenZ3eHpyVXJUM2loT3h2eHcyNWRoV3poU0RNU3dBbG1TaHR4Ung5ZVppKzJyaUdjTSswbUdVRFp0WHJVQW1maU53RmpBV1NZdWExQUVySFhYM1E3SmZlL1ZuRzF0MEhVODU2c2tHQlp5R25GOWFTZnYxV2hKS2tmN3ZSTTVKM1FhOEhDRzdOSWQyOGtJeEdJTnJwOVhGZXVUQTJYeWpmQUppWEo5azBLOUI5amhhU1h1WUxrajQ4QTV3ektJekFGa2NIa00ycld4N0VTQ1pNZHM2SXFBSDR2MVdJYmw1RzB1UVVDdk9VWlNrQko1c0hKS282SnBsUFZXSWh6dUNIS1RzR3lHM0dFbUZkeXJGWUF6WjBoTjRHNW5RcG5lWVNXWmo2SWNzR2syMkVHME1sY2dSQ2hjN2lINDdobWxDd3FBb1kvZ1NtV1J4emdRbEpVZ29iRWM4end0WjFsT092Q0JjSEFXZXliTCt2RktzQytnNDlOYjM2WlpuZzVCWVBodUN6YWRzeHE0V09lYThQNE5jNEltV1lEOERWUWVzSnZjMFp4eGVSSGFnVHdRTndIVmtUcE4zQ0lWa0RDbnNxYnM0NlR6YmtZZnUrcjRJMmZ3eW1VMTY3Nkc3NVhrVWdXelNqTllIeUg2Qm1mMng3VnYwUnM1TzdVWENQWk1ma1lOeGZVa2JmWmdnNjFPR2UweHRJWmFadmdWNGtPaVVjaUNiTkpSYWhxU0xWeWZVTzJFVVVwaFVqL3doaS9rREhXZ3YybzVhMnFmOWd0U2dRcnpBWE9ONU4rUVEzQ3d0dXl0bVA0UEp2Q2VEamtMZWVHdVFjT2U3Q0xsOWxub09rdjQrQzVBRmJaZ2dBZENLN0lyM01wNEg2NUhqdU1lMDN0SzJvdjBmUDlVQ0QyRlBCZ1N5LzFqcU10bUdHUEl5Q21EQmJGS2kvSDh2NmZFQWhSVW1lVHlkaWpjR2owZmpqY0hqMFhoajhIZzAzaGc4SG8wM0JvOUg0NDNCNDlGNFkvQjROTjRZUEI3Ti80V3QzZEEydm53S0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1NQUFBQWxDQVlBQUFEL1lsMDFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBR09tbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0Z1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTnk0eExXTXdNREFnTnprdVlUZzNNekZpT1N3Z01qQXlNUzh3T1M4d09TMHdNRG96Tnpvek9DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cGtZejBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJWc1pXMWxiblJ6THpFdU1TOGlJSGh0Ykc1ek9uQm9iM1J2YzJodmNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzl3YUc5MGIzTm9iM0F2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBSWFowUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZGZG1WdWRDTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXpMakFnS0ZkcGJtUnZkM01wSWlCNGJYQTZRM0psWVhSbFJHRjBaVDBpTWpBeU15MHdOUzB4TjFReE16b3pORG95T1Nzd01Ub3dNQ0lnZUcxd09rMXZaR2xtZVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1EVTZOREFyTURFNk1EQWlJSGh0Y0RwTlpYUmhaR0YwWVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1EVTZOREFyTURFNk1EQWlJR1JqT21admNtMWhkRDBpYVcxaFoyVXZjRzVuSWlCd2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBTSXpJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakV5TXpobU0yUXhMVEUxTURNdE9EVTBOUzFpWm1ZNExUTTJOakE1TURZMk1XSmhPU0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG94TWpNNFpqTmtNUzB4TlRBekxUZzFORFV0WW1abU9DMHpOall3T1RBMk5qRmlZVGtpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG94TWpNNFpqTmtNUzB4TlRBekxUZzFORFV0WW1abU9DMHpOall3T1RBMk5qRmlZVGtpUGlBOGNHaHZkRzl6YUc5d09rUnZZM1Z0Wlc1MFFXNWpaWE4wYjNKelBpQThjbVJtT2tKaFp6NGdQSEprWmpwc2FUNUNPRGc0UVRrd05FTTVSVGt6UkRFMU1UYzROak5HT0RkRE9ESXlNVVEzTmp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG1Ga2IySmxPbVJ2WTJsa09uQm9iM1J2YzJodmNEcGlZems1WmpBMFpDMWtZVFk0TFdaa05EUXRPR016TmkxaE1qRTBOVFUwTWpNNFpqYzhMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qa3dZVEZqTUdOaExUQmhOV0l0TXpFME5DMDROV1kwTFRVd01tTTNOVE5qT0RCaE16d3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNlltVTBOMk5tTVRZdE16UTVOQzB6TmpSaExXSmhaR1V0Tm1GaFpqQXlOemt3T0RNNVBDOXlaR1k2YkdrK0lEd3ZjbVJtT2tKaFp6NGdQQzl3YUc5MGIzTm9iM0E2Ukc5amRXMWxiblJCYm1ObGMzUnZjbk0rSUR4NGJYQk5UVHBJYVhOMGIzSjVQaUE4Y21SbU9sTmxjVDRnUEhKa1pqcHNhU0J6ZEVWMmREcGhZM1JwYjI0OUltTnlaV0YwWldRaUlITjBSWFowT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1USXpPR1l6WkRFdE1UVXdNeTA0TlRRMUxXSm1aamd0TXpZMk1Ea3dOall4WW1FNUlpQnpkRVYyZERwM2FHVnVQU0l5TURJekxUQTFMVEUzVkRFek9qTTBPakk1S3pBeE9qQXdJaUJ6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnTWpNdU1DQW9WMmx1Wkc5M2N5a2lMejRnUEM5eVpHWTZVMlZ4UGlBOEwzaHRjRTFOT2tocGMzUnZjbmsrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrZG45Q0FRQUFCalJKUkVGVWVKenRuSHVJVlVVY3h6OTN2ZGRWTTkxVU1vb3dSTk1LTTFFcnlnalpvTERDc2pJckt3b3BrQXd6ZXZ3UlJvVm1EeXVwS0IrMW1tSFlBNldpOTlNb05jc0tNUW5wUVVrK2lseGxNMTNkdmYzeG05T2VlKzdNZWR4ejcvVmUrbjNnc3B3NU0vT2JNK2Q4WjM3em0yRXorWHdlUlZHZzRYQTNRRkZxQlJXRG9oaFVESXBpVURFb2lrSEZvQ2dHRllPaUdGUU1pbUpRTVNpS1FjV2dLSWJzNFc2QVJ5YVQ2UW5jQ3h5WnBCaXdBUGdCdUFDWUJCd015ZDhKL0Fhc0E5WUc4allBMDRDUk1XMGZBaDREK2dNemdIMFI3ZndWK01iOGRqbnk1WUJiZ0NHV2UzOEI5eG03TnNZQU53TEJJd1Vab0IyWWFhN25VZHpIZWVCdW9BMllBRnhDWWQva2dQWEFjeGE3NDRCcmtMNzE3SzBGWGdRYWdkbEFYMGVidmZ4N2dSK0J6NEV0d1dlbzJpbUpmRDVmRXovZ0tHQ242WWdrdi9IbVVXWW5MUGNaY0xxdkszTEE2Z1RsOXlNZjRGVUo3ZjZDZk5TTmx0ZlIwN1RMWlcrOHBZekhzaENiZi92eTJmcTRFeGhvN2o4UVVzOVFpOTJiTGZtV0lSOTVFN0E5UWQrMEEyOEFaL29OVk9zYnJDVTNxWVBpVVMwTys4M2ZzQm5CeGpoa3RQTStzRHp1VWRlRy93VW1ZUkFpM0crQlV3UDNPcEYrc05FSW5PdTQxdzg0SzhTbVh3eXVQdmFlUGV4NVhnT09DTGtmckN2cE84MEJGd0ZyZ0ljU2xDc0x0U1NHVXVtVnN2eENrcmxtSGhtZ1d3cTd3NEVQZ2NFSnl0em1TRDhSdTJ0VmJrWWdMbUdseVFGM0F2T3JZT3MvYW1iTkVNRUc3Q04vQnBuMnc5aG55dlpDT2puSVVPQThaSHAyc1FueGF6Tyt0SGFnRlRnK3duNFlBNEMzRUdIRW9ROXdOdUpiKzdrclJSdVM4aUR3TXZCVEZXek5BRjRIUHEyQ3Jib1J3emlTdXlNZU01RnBOd3Nzd3U1T2pBSldoZFJ4UHVMNzJoamhTRjhOdENDengwbkFkY0F3Uzc1aHdFMm1iWEY0QWhqcnU4NGlDOTVxOGc1d0d1RkJneWl1UndhVGZrQXpNTldTSjRjRVJhb2lobnB4azNxa0tMc1ZpVFp0UnFaZUcxRnUwaWhrRkQvVzl4c1lXZ0srUmthMVZjQmNaRkg0cFNQdmxSVE9PbUdNQkU3d1hkOFJzMXc1R1VwWGRLcFVWaUw5c3hTNEZoR0hqVEVwN2NTbVhtYUdGdUNBNzdvRGVCellHS09zL3lPYjRzaXpsZkNCWVRreU0vbnIraGx4V1Z3MEJhNWJnY3VRMEc2UTQ1QVJzaTJrUG84c01CbDQyRnhQamxHbUVzd0JYc0s5NEkraUw0VWg1aFhJNHZtS1FMNDBibWdpNmtVTWt3TFhIY0NieEJQREltQVBFclk4MlhKL04vQUo0V0xvWjBuYlMvTG8xemJnZDJSbThUTUFtWjNpaUNFRFhBNDhoVHlQemZXcUZoOGprYkZ5Y0FqNEFIazIvNkJ6ZEpucWo2UmUzS1FnblJTR0M4TVlBb3pHTGdTQUpjRDNKYlNoMUowZzI0Sy9OK0d1WUhEMEhZdnN5elFqSXZlM0tTcWdVQ3JyTFdtRGtJM1NjdEZLY2IvYTltTXFRcjJLb1JzU1dTbVZnNGlZSHNHOWpvaWlnZEw2YjVRbHJaVndjVDl2U1pzRjNCcEkyNDJNMXBWZ0R2QytKVDFKYURpS3dSU3ZuZUxNbG1XaFh0eWtGcm8yMTBCR3lrMHA2dHVHN0Q3L0dUUC9mT1M0Z0wrLzloRHVMOXMyOEM1MTVOMWg2blB4SG5BMWhSdGVzeXo1bmlUK2NaS2s5RUdpWGh1UldTa3R3ZjdwaGJqRFFURzRvbmhscDE3RU1JMnVzeTlKMlVCaEtCSmtVZFpFZkRIY2o2d1JTcVVSbUlnN2ZMclIxTzl5Q1FZZ0FZTjdJdXpNQTk0dXBZRXg2STRjSlhrVW1TWEtSUVk0QmxoTThYdUNkSU5lSXVwRkRQMkJQMG9zdTRMaVRzNEN6d0lYVWhpbGNqRUZlU24rVGJzOElqUVhFeEdmdWdQWlZCc2RramZxNCtvTnZFQzRHRFlqczJmY0VHMnB6RVZtcVZOUzFyTUVpZEQxUU5ZK3ZSMzUxcVMwRTV0NkVVTWF2a0ErbE9ETGF3WXVCbDZOVWNkQ1M5b0I0SnlRTXNPSnQ3UDhOT0tDUmJFZDJTOXhSWStXVTcwMVlMTnBTOWhwMUNoY0xxT2ZYWVNmRENncjlicUFUa0pmWUxyajN1SVU5WHFuUGRQd0xuQjd6THh0d0ZlT2UrMklxMVhwV2NGakorV05Jcm1ZU25XT2ZRRC9EekZra0xNODZ5ejNtcEI0ZmJYcEJKNUJYS2s0YnBySFNrZjZEdUNqdEkxS3lBSXFkMHhpQzdLaGFZdGVWWXhhRWtNV2QzdTZ4eWp2V256bUVML2ROWkxkUU5kT2NodzdIZzFJaUxkblZFWkRKL0xSdm9JY0c1OU9zUkFhc0x1dTNoNkV5MlhZUkZka3kzYkUycjlwNkpvOXZHZDM3WGZZbm5NQzhFOUlYZGtRZTBIYWdPK1FVUGNaaUh0YlZUTDZ2MVlWUmFpbG1VRlJEaXNxQmtVeHFCZ1V4YUJpVUJTRGlrRlJEQ29HUlRHb0dCVEZvR0pRRk1PL1FXZ2JwcEYwR2RJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdRQUFBQWNDQVlBQUFDWGt4cjRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRTdtbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0Z1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTnk0eExXTXdNREFnTnprdVlUZzNNekZpT1N3Z01qQXlNUzh3T1M4d09TMHdNRG96Tnpvek9DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cGtZejBpYUhSMGNEb3ZMM0IxY213dWIzSm5MMlJqTDJWc1pXMWxiblJ6THpFdU1TOGlJSGh0Ykc1ek9uQm9iM1J2YzJodmNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzl3YUc5MGIzTm9iM0F2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBSWFowUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZGZG1WdWRDTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXpMakFnS0ZkcGJtUnZkM01wSWlCNGJYQTZRM0psWVhSbFJHRjBaVDBpTWpBeU15MHdOUzB4TjFReE16b3pORG95T1Nzd01Ub3dNQ0lnZUcxd09rMXZaR2xtZVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1USTZNamtyTURFNk1EQWlJSGh0Y0RwTlpYUmhaR0YwWVVSaGRHVTlJakl3TWpNdE1EVXRNVGRVTVRRNk1USTZNamtyTURFNk1EQWlJR1JqT21admNtMWhkRDBpYVcxaFoyVXZjRzVuSWlCd2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBTSXpJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamMwTUdFNU5UQmlMVGswTVdRdE1XVTBOUzFpTkRVM0xXUmlZVGMyT0dReE1qRmtaQ0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8zTkRCaE9UVXdZaTA1TkRGa0xURmxORFV0WWpRMU55MWtZbUUzTmpoa01USXhaR1FpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8zTkRCaE9UVXdZaTA1TkRGa0xURmxORFV0WWpRMU55MWtZbUUzTmpoa01USXhaR1FpUGlBOGVHMXdUVTA2U0dsemRHOXllVDRnUEhKa1pqcFRaWEUrSUR4eVpHWTZiR2tnYzNSRmRuUTZZV04wYVc5dVBTSmpjbVZoZEdWa0lpQnpkRVYyZERwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qYzBNR0U1TlRCaUxUazBNV1F0TVdVME5TMWlORFUzTFdSaVlUYzJPR1F4TWpGa1pDSWdjM1JGZG5RNmQyaGxiajBpTWpBeU15MHdOUzB4TjFReE16b3pORG95T1Nzd01Ub3dNQ0lnYzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJekxqQWdLRmRwYm1SdmQzTXBJaTgrSUR3dmNtUm1PbE5sY1Q0Z1BDOTRiWEJOVFRwSWFYTjBiM0o1UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG1MRjZDZ0FBQXhVU1VSQlZHaUI3VnA1ZEpUVkZmOTk3MXRtenpaam9tRnB3QURCa2dTU2tHV3dJUVF3QWZXVUphaEJRMEJRc0ZXV3FNVVNiS1dBUmNPUlFnVkVreEtRZlduYVNqRkkySGNOd1lSb0ZpWUVVRkRHRUVJeVcrYWIrVjcvQ044d1JJUU05Qnc1eC96TytjN012SGZ2ZlcvdTc3MTM3MzB6REtVVW5iaC9RSDd1Q1hUaVpuUVNjcCtoazVEN0RKMkUzR2Y0dnhOU1ZWV2xyS3VyNnlUNkxzSGRxNEc2dWpyeTJhNWQ2VVZGUmFQUG5Uc1hKanFkQXNNUUtUZ2syRHhreUpCOTQ1NTZha3RNVEV6ai8yT3l2d2hRU3UvNmVYUHVtODgvRkJKeVRLMVVVait0bGhxQ2d1Z0RlajE5UUsrbmdmNytWSzFVMHFDQWdGT1p6enp6MTZxcUt1VzlqUFZMZWU1YThja25udmc3VDlpNlFIOS8rbUJ3OEU4K2hxQWdLckFzamVqVDU5TVRKMDRFK3pyT0w0MUlobExmQzhNUjZla3I5KzdaTTZ4YnQyNFhXSmFWTGw2OEdDb0l3aU9TSk1IdGRvTXdERmlPZzh2bGdyKy9Qd0lEQTNIaC9Ibm9EWWI5MjR1S1J2ZnYzNy9wZHZaWHJsZ3hjc3VXTGVQTzFwME5GMTB1amhBaUJRY0htd2NNR0hCcStveFhsa1ZIdCtuWDFkVVJpOFdpalk2T2JyN1RuRTBtRTFkY1hKeE9KWWs4SEI1dUdqbHk1TmZlL1lXclY2ZTBXQ3hhZzhIUWtKbVplYnlqdmlncEtRay9WMThmNXBZa0VoMFZYWkdZbFBoOVIzVnZDVjhablArWCtjOEpISGRHbzFMUkpVdVdqS0tVNHM5Lyt0UEUySmlZN1duRGg2OTZOblA4d2xHLy9lMlNoUGo0emVQR2pzMzc2cXV2MUJVVkZkb3VEejEwUktOUzBVRkc0L3JiMlI5a05LNEhVTSt6SEZYd0F1VlpqbktFcFFRTUJVRFhyVnRucEpUaVAvLytUOVNESVNISGRCcnQ2VFdGYTVMdk5PL2w3NzgvRWdBRlFPTUhEdHpzM1hmdzRNR3VCRXc5QUJyUnU4OHVYL3lSbFpVMVQ3Yjd6cUpGVDkzckR2RXBxSmQrVVdwWXZ2ejkzd2Y0KzRkYmJEWjA2ZExsV3dCNGE5Njh3cmZtelN1OG5TNGhyS1JXcTFGMjhtVE0yalZya2lka1p4OXNML1BFNDQ4dlAzTDBxTkZmNXhkbXNWaWdOeGlPUHhnU1lpYUVTQzB0TGRyTFpuTndaR1JrSlFCczNyenA2ZTh2WDA0RWdLMWJ0anc5SVh2Q1FRQjROU2RuZW5sNWVUUWhSRnE2Yk5rcmZmdjJkUUNBSUNpY0xFTkFDSUZhcmJGNWo4dHhuRXVuMDRYWjdYYW8xV3BiKzNuZERvSWdpQXphR0dFNXp1V0w3cTNnRXlGSGp4NHhObDI5bWhnUUVBQkNTR1dydzZIc2lGNWxaYVdXRUVZQ0FFRVFJajc4OE1PcDdRa3BLeXNMMnI5dmY0cE9vdzJ6MisybWlaTW1ydm5qbkRsdlAvend3NUlzVTFwYWFvaUtpbW9HZ0ZHalJ4Y1ZGeGVuT3h3TzVhZ3hvN2ZMTWdjUEhCcGNXbFk2QmdBYUdocm1BZmdXQU5ScXRVMCtuam1PdmNseEtwWEtBWVlCcFJRc3kvcmtWRkVVZVFadGxEaGJuUjN5eCszZ0V5SDc5dTBiSWdnQzdIWTdVbE5UOXo2WGxYVzRJM3I5K3ZXelRIcisrZFdMOC9LUzFXbzF6dGJWOWF5dHFSVjY5K250bEdYV3IxOC8zbXEzUGFMZ0JjVEd4WlhtRnhRc2FHOG5MaTZ1UVg2ZmtaRlJHaFFVTk01cXRhcWZmUExKU3JsZFVBZ09udVVnQ0FwY3VYTEZnT3VFVUVvOXRSSERNRGZaL1NrU1RDWVR4ekNNNUwwbzJvTjQyZUo1M2dtMExSeFJGRG1EM3REWXEzY3Y1MC9wM3RLZUw4TFYxZFVSZ2lCQUZFWDBpWWlvOFVWM1NHcnFYcVd5YlFFNW5jN0U4eGZPZC9mdVAxbGFPcEJuMnhLQmlaTW1ycjZUdmJtNWM2ZGtabVp1ZlBHRkZ6NWF2SGh4eGhkZmZHRjRiUGp3ajZxcnFoNVJxVlRnT0JZdlRaMjJLaWd3OE5TR0RSdU1MRXRjRE1PQVlSaFlyVloxVFUyTklOc3ltVXpob0JRTXcwQk9jUVlaamV1TmlVbkhIaDAwNk1pQi9RZkNaRmxqWXRKR2c5NXdzbWVQSHZzQVFLUFJ0RkJRYU5RYWZMeDJiWGIzYnQwT3BTUVBQakJzNk5EdkJpY25IL2puOW4vRytPS25EdStRNnVwcXBkVnExY3FyaS9QeHZPUjUzc215TENpbGNMbGNhSC9jMld4Mk5jTXdVQ2dVNk4yN2Q2M2Mvc2MzM3BqVzFOUVVJRWtTWVZuT3BkRnFMSGw1ZVN0RWw4aVp6ZVo0QUtDU3RQWFVxVlBZWFZJQ2pVb05udWRCS2NWbDgrVjRDc0JxdFI0SjhBOEFBS2hVS256OWRkWDR3YjlKRHBlL2k5dnRKZ0JBQ1BHcytHdlhyZ1UwTmpiR2NSd0hTWkk4QzdlcHFTbmdhbU5qak9SMmY5blc0dkVIVGxlZWZnSUFXTUtDNTNrME5qWW12dlRTdEpVOWUvWk02ei9nOXBtbGpBNFRFaEVSNFZBcGxRNjdyUzNtaWFMbzAzRW5Pa1hCNFhCQXFWU0NFQUs5WG45VDlTNXYvTGFnZXlPd0xsdTZiSWJOWVk4Z1lDQ0JRdUNGMnJ5OHZCVTZQNTFGbG1GWmRteFNZbExKdEtuVGZsZGNYSnoyZzltY1FnakJ1SEhqRUtUWFgweUlqemVhVEhYREthWDVETU5BZERyUmRLMHBYdFluWUtEVDZVQXBCU0ZFam5WT2p1UEFjUncwV28xbkxFS0lkTDNkWlRLWk9LZlRLVEJnNEhBNE1HellzRTluNWVTODRYYTcyZGRmZlczTGhRc1h3czAvL0JCZmVySTByditBL2lVZDhaTlBUdTNXdmZzRnM5a01oVUtCejArY1NBQ3dvcU82bXpadGZNYnRkb05TQ29XZytGeXIwOTFVT3pEWGc3NGt1ZUZ5dVR6ek1oZ01EVmV2WGdVaEJHNjNHeXFWcWhrQXFQdEdUTERaYk9ySXFNam1sUitzWEpReU9LWHZ0OTk4QTBFUThJZlpzL3ZFeHNiV0FrQjVlWVVlQUVSUlJFaEl5UDdIMHRKMlNaSkVHSWFSR2hzYjlaL3QydlVhdkVveTcvck1lNGQ0SVk1bFdWSGVaYTNPVm1Sa1pCU01HREdpQWdDT0h6dVd2L0R0dHhjQndEY1h2dWwrQy8xYndxY1lrcENRZUVKME9zSHpQQTRmT3BUOGFrN085STdvRlJVVjlkKzhhVk9tUnFPQnkrV0MzcUJ2aUl5TXRIakxzQnpuQWdWYW5VNmNxVDNUVzI0djJidG55Q2M3ZHZUUTZyUkgzVzYzWndXM3Rqb0VCbTA3cTdXMTFYUDhNUXdqTVdoenFDUkpIbUlkRHJzL3d6Qm9iVzFGajU0OXpxNzhZT1dpVlIrdWV2dURWUjhzbXBNN1p5RUFVRkRQOGVWTmdzMXFVM3NjZG4xOEFOQnF0VzNISXlnWU1HQVk0cGI3QW9PQ3pQTDhtcHViL1RyaUo4QkhRbEtHcE93VlhTN1RvRUdQSXZmTk44TUs4dk1ucHozMjJLcC9GQlNrbHBlWC8yalE3ZHUzeDJSblRaZy9iZXJVVlN6TDlpZUV3RzYzVjJlT2YzWmplOW0rRVJGVlRyY0lsckJZdTNaTmx0emVxMWN2MStDVXdlZDRqbmRSU2oyTDJOc3gzdS9sYklxNW5zYmVrR25McEJpRytkR0tkM2pGc3hzWkdPTjU0ZmhieDB1WHl3VktieVJna2lTeFh2UHd6SlhqdVE1bldqNFJNbno0Y05Nem1aa2JkcGZzUnRldVhURXJKeWRxOSs3ZEwwNmVNcVdnZU9lbkk3MWx5OHZML1NaUG1yUjYyN2F0YzBGcFBNZHhhRzF0UlhCSWlEbDNidTY2OXJhZm56ejVIMHBCVWF0UUtIRDQwT0hrM0RtNUw4cDk5ZlZueWZWdjZYR21RcWwwVUxRVlpFcWwwaUhMaXFLVFl4Z0NTWkxRMHRMU1JXNVhxVlRYWklMYXA3a2VmYThZSXRkTmJwY2JBaTk0SE9wMW5KWmFMQlplRkYyNXpIWHliSGFiVnBiNzdydnZ3dVNDTVRRMDlGSUhYZXo3OWZ1YzNOeUZodzhmZm5UaC9QbXAvOTI1RTFGUlViaDQ2ZElyTDcvODhnNXZ1ZWpvNkdhOXdkRFEwdHdNUWdoRVVRUUZ2bHk2Yk5rcnQ3SnJOQm92RFIwMnRPUy9PM2NLZmxwZCtMdnZ2RE43dzRiMW1ZRUJnVTEyaDBQWjFOU1V6UEc4aHhDMzIrMlp1M3pNQUlEQjhFQ0RXM0tERjNpOE1YdjJaekd4c1plenM3TkhDSUpnbFdXOGF4TGdKaWQ3N0d1MVdvc2tTUkFFQVRObnpsaWFaRFFlcVNpdmlMNTA2Vklvei9NQTJuYXZUS0JhcmNieTk1ZS85VlZsNVVDV1pjVWRuK3pJMG1xMGFMRmF6blhyMnZYYkRqdjRidTVieXNyS0FycUVoaDdwMDZzWFhiWjBLUzFjWFpoeXV1SzAxbHVtOXN3WnJtZVBIbnNlME90cGdKOGY5ZGZweXZNL3loOTJKOXREVTFNTEFOU3pJSlFqTE9VSlMzbVdvd0xIVXdDMHkwT2hSeWlseUptVk14M1g3NUJlZisyMTM4bjZhd3JYSkFPb0Z6aWVjb1NsQUdoZVhoNWQ5L0U2ZVVQOTZDN3J3SUVEM2VXN012a3U2MjlMbG93Q1VLL2dCWThkQUZTdFZGRUdvRXBCVVVNcHhaVEpVK2FpN1RObEdlS1JVL0FDQlVBVDR1TTMrK0xidS9xQmFzQ0FBVTBsZS9ZTW5UVno1cExwTTJha0E5aTM0NU1ka2YwaSsza3E1bDdoNFM2cnhhSnRibTZ1allpSXFGNzA3cnV6MDlQVHErOWt1MlRQbnNtYk5tNU0zTFI1ODlPMU5UVVIxNjVkODJOWlZnb05EYjJVbHBhMmEyeEd4allBR0JnLzhQT3hZOGE4SjBrU2lZMk5MWlAxSjJSUE9HaXoyVjdLTDhpZi9NTmw4NE1xdGNyMjYwZCtQU3NnTUtCeDdKZ3hyMU1BVVpHUnA3M0hEQWtKK1g3OHM4OHVzTnR0NnU2Lyt0VjVBSmd4YythL0pFa2loWVdGMlZjYXJoaFVhcFV0S1NucCtITlpXUjl2MzdZdHcyNjNxd0FnSVNIKytOV21xNHNURWhKT2hJV0ZuVnV4Zk1YdjYweW1jSlpscFNTajhlaUNCUXR5ZlhMdXZkNU9idDI2TlM1ajdOaThtcG9hb1gxZjlvUUo4NWE4OTk2b2U3SGYrWHRJSjM1V2RQNFo0VDVESnlIM0dmNEhOVDlrQzRwb1pLNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdmlkZW8tOTRmMzYwMzYxNjc1ODFiN2ZhNDNjM2VhY2YyYjRjZDQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3dpZGdldHMtYThhODg4M2MxODQyMGU4YzY1YmFiN2U0OTI0MjcwMDEucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcbmltcG9ydCB7XG4gIEFjY29yZGlvbkJ1dHRvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uQ29udGVudHMsXG4gIHNpbmdsZSxcbiAgcHJldmVudENsb3NlLFxuICBjb21iaW5lUmVkdWNlcnMsXG59IGZyb20gJy4vc2hhcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZUFjY29yZGlvblxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQmFzZUFjY29yZGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbkluZGV4ZXM6XG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXG4gICAgfTtcbiAgfVxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgICBsZXQgYWxsQ2hhbmdlcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdiBzeD17c3R5bGVzLmJ1dHRvblRvZ2dsZX0gey4uLnJlc3R9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvblRvZ2dsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogJ2hlYWRpbmdTZWNvbmRhcnknLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGZvbnRTaXplOiBbMTYsIDE2LCAxNiwgMTgsIDIwXSxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGV0dGVyU3BhY2luZzogLTAuNSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgJzQ1cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCAxLjhdLFxuICAgICcmID4gc3Bhbic6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6IDIwLFxuICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIHRvcDogWycycHgnLCAnNnB4J10sXG4gICAgICBsZWZ0OiBbMCwgJzEzcHgnXSxcbiAgICAgICcmLm9wZW46YWZ0ZXInOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSAsIC01MCUpJyxcbiAgICAgIH0sXG4gICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgIHdpZHRoOiAnMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIG9wZW46IHtcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICB9LFxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIHN4PXt7XG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXG4gICAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIsXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBbJzMzcHgnLCAnNDVweCddLFxuICAgICAgICAnID4gZGl2ICc6IHtcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBbMSwgMl0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6ICcxN3B4IDAnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNFNUVDRjQnLFxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkJyxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBzdGF0ZS5vcGVuSW5kZXhlcyB9XG4gICAgOiBjaGFuZ2VzO1xuXG5leHBvcnQgY29uc3Qgc2luZ2xlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxuICAgIDogY2hhbmdlcztcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICByZWR1Y2Vycy5yZWR1Y2UoKGFjYywgcmVkdWNlcikgPT4gcmVkdWNlcihzdGF0ZSwgYWNjKSwgY2hhbmdlcyk7XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgRmVhdHVyZSA9ICh7IGZlYXR1cmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlSXRlbX0+XG4gICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnZhbHVlfSBzdHlsZT17eyBjb2xvcjogZmVhdHVyZT8uY29sb3IgfX0+XG4gICAgICAgIHtmZWF0dXJlLnZhbHVlfVxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmZWF0dXJlSXRlbToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGJveFNoYWRvdzogJzBweCAyNXB4IDEwMHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDgpJyxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgLy8gbWF4V2lkdGg6IDMwMCxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwYWRkaW5nOiBbXG4gICAgICAnMCA1cHgnLFxuICAgICAgJzAgMThweCcsXG4gICAgICAnMCAxOHB4JyxcbiAgICAgICcwIDEycHgnLFxuICAgICAgJzAgMjBweCcsXG4gICAgICAnMCAyNXB4JyxcbiAgICAgICcwIDU5cHgnLFxuICAgIF0sXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6IFsxNTAsIDE1MCwgMTUwLCAxODUsIDI0MCwgMjgwLCAzMjBdLFxuICAgIHdpZHRoOiBbJ2F1dG8nLCAnYXV0bycsICdhdXRvJywgMTc3LCAyMjUsIDI1OCwgMzAwXSxcbiAgfSxcbiAgdmFsdWU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IFszMCwgMzAsIDMwLCAzMCwgNTAsIDYwLCA3Ml0sXG4gICAgbGluZUhlaWdodDogWzEuODMsIDAuNzZdLFxuICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE1cHgnLCAnMTdweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjYyLCAxLjQ4XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIG10OiBbJzFweCcsICcyMHB4J10sXG4gICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjcpLFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IElvTWRDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBJb0lvc0Nsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5jb25zdCBQcmljZVRhYmxlID0gKHsgcHJpY2UsIGlzTW9udGhseSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3N0eWxlcy5wcmljZVRhYmxlfVxuICAgICAgY2xhc3NOYW1lPXtgcHJpY2VDYXJkICR7cHJpY2UuaXNSZWNvbW1lbmRlZCA/ICdyZWNvbW1lbmRlZCcgOiAnJ31gfVxuICAgID5cbiAgICAgIHtwcmljZT8uaXNSZWNvbW1lbmRlZCAmJiAoXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHN4PXtzdHlsZXMucmVjb21tZW5kZWR9PlxuICAgICAgICAgIFJlY29tbWVuZGVkXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwcmljZUhlYWRlclwiPlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIHtwcmljZS50aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICB7cHJpY2Uuc3VidGl0bGV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAge3ByaWNlPy5hbW91bnQgIT09IDAgJiYgKFxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicHJpY2VBbW91bnRcIj5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMucHJpY2VMYWJlbH0+XG4gICAgICAgICAgICAgIFN0YXJ0aW5nIGZyb21cbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5wcmljZUFtb3VudH0+XG4gICAgICAgICAgICAgIHtwcmljZT8uYW1vdW50Py50b0ZpeGVkKDApfVxuICAgICAgICAgICAgICAvbW9cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBhcz1cInVsXCIgc3g9e3N0eWxlcy5saXN0fT5cbiAgICAgICAge3ByaWNlPy5mZWF0dXJlcz8ubWFwKChmZWF0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17ZmVhdC5pZH0gY2xhc3NOYW1lPXshZmVhdC5pc0F2YWlsYWJsZSA/ICd1bmF2YWlsYWJsZScgOiAnJ30+XG4gICAgICAgICAgICB7ZmVhdC5pc0F2YWlsYWJsZSA/IChcbiAgICAgICAgICAgICAgPElvTWRDaGVja21hcmtDaXJjbGUgY29sb3I9XCIjM0ZEQkIxXCIgc2l6ZT1cIjMwcHhcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPElvSW9zQ2xvc2VDaXJjbGUgY29sb3I9XCIjQ0VEN0UxXCIgc2l6ZT1cIjMwcHhcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzcGFuPntmZWF0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNsYXNzTmFtZT1cInByaWNlQnV0dG9uXCI+XG4gICAgICAgIDxCdXR0b24gc3g9e3N0eWxlcy5idXR0b259IHZhcmlhbnQ9XCJwcmltYXJ5TWRcIj5cbiAgICAgICAgICB7cHJpY2UuYnV0dG9uVGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFibGU7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcHJpY2VUYWJsZToge1xuICAgIGJvcmRlcjogYDFweCBzb2xpZCAjRjNGNEY1YCxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6IFsnMzBweCAyMHB4JywgbnVsbCwgbnVsbCwgJzU1cHggMjBweCcsIG51bGxdLFxuICAgICcmLnJlY29tbWVuZGVkJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyV2lkdGg6ICcyLjVweCcsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpJzoge1xuICAgICAgICBwdDogNjUsXG4gICAgICB9LFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMEYwRjUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwIDAgMTBweCAxMHB4JyxcbiAgICAgICAgJy5wcmljZS1sYWJlbCc6IHtcbiAgICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICAnLnByaWNlLXZhbHVlJzoge1xuICAgICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBmb250U2l6ZTogMjIsXG4gICAgbGluZUhlaWdodDogMS4zMSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgbXQ6ICc2cHgnLFxuICB9LFxuICBwcmljZUxhYmVsOiB7fSxcbiAgcHJpY2VBbW91bnQ6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogJzI2cHgnLFxuICAgIGxpbmVIZWlnaHQ6IDEuMzksXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgfSxcbiAgcmVjb21tZW5kZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzZWNvbmRhcnknLFxuICAgIG1pbkhlaWdodDogJzMxcHgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4xNHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMTcsXG4gICAgbGVmdDogWzIwLCBudWxsLCBudWxsLCBudWxsLCA0MF0sXG4gIH0sXG4gIGxpc3Q6IHtcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG10OiBbMzUsIG51bGwsIG51bGwsIDUwXSxcbiAgICBtYXhXaWR0aDogMzQwLFxuICAgIGxpOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYyLFxuICAgICAgJysgbGkgJzoge1xuICAgICAgICBtdDogMzAsXG4gICAgICB9LFxuICAgICAgc3ZnOiB7XG4gICAgICAgIG1yOiAnMTNweCcsXG4gICAgICAgIG10OiAnNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnLnVuYXZhaWxhYmxlJzoge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGQ0YyRTgnLFxuICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICBwYWRkaW5nTGVmdDogNDUsXG4gICAgcGFkZGluZ1JpZ2h0OiA0NSxcbiAgICBtYXJnaW5Ub3A6IFszNSwgbnVsbCwgbnVsbCwgNzBdLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBVbHRpbWF0ZUZlYXR1cmUgPSAoeyBkYXRhLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmV9IHsuLi5wcm9wc30+XG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhPy5pY29ufSBhbHQ9e2RhdGE/LnRpdGxlfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8Qm94PlxuICAgICAgICA8SGVhZGluZyBhcz1cImg0XCI+e2RhdGE/LnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e2RhdGE/LmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWx0aW1hdGVGZWF0dXJlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZlYXR1cmU6IHtcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2NlbnRlcicsICdjZW50ZXInLCAnY2VudGVyJywgJ2xlZnQnXSxcbiAgICBtYXhXaWR0aDogWzIzMCwgMjMwLCAyMzAsIDIzMCwgJ25vbmUnXSxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIGZpZ3VyZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDhweCAyNHB4IHJnYmEoNTMsIDk1LCAxNTgsIDAuMSknLFxuICAgICAgaGVpZ2h0OiAnOTBweCcsXG4gICAgICBtYXJnaW46IFtcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgJzAgMCA0MHB4JyxcbiAgICAgIF0sXG4gICAgICB3aWR0aDogJzkwcHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIH0sXG4gICAgaDQ6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI4LFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgbGluZUhlaWdodDogWzEuNiwgMS42LCAxLjYsIDEuODhdLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IEZvb3RlcldpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XG4gICAgICA8SGVhZGluZyBhcz1cImg0XCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICA8TGluayBwYXRoPXtwYXRofSBrZXk9e2l9IGxhYmVsPXtsYWJlbH0gdmFyaWFudD1cImZvb3RlclwiIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyV2lkZ2V0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3RlcldpZGdldDoge1xuICAgIGg0OiB7XG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBtYXJnaW46ICcyOHB4IDAgMCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYToge1xuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuOCksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnQ29tcGFueScsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdBYm91dCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0FmZmlsaWF0ZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0NhcmVlcnMgJiBDdWx0dXJlICAgICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0Jsb2cnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdQcmVzcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fib3V0IFVzJyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1N1cHBvcnQgQ2VudGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0Fib3V0IFVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnQ29weXJpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUG9wdWxhciBDYW1wYWlnbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ091ciBJbmZvcm1hdGlvbicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdSZXR1cm4gUG9saWN5ICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVGVybXMgJiBDb25kaXRpb25zJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU2l0ZSBNYXAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdG9yZSBIb3VycycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ015IEFjY291bnQnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUHJlc3MgaW5xdWlyaWVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU29jaWFsIG1lZGlhICcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ2RpcmVjdG9yaWVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnSW1hZ2VzICYgQi1yb2xsJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUGVybWlzc2lvbnMnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6ICdQb2xpY3knLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnQXBwbGljYXRpb24gc2VjdXJpdHknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTb2Z0d2FyZSBwcmluY2lwbGVzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnVW53YW50ZWQgc29mdHdhcmUgcG9saWN5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUmVzcG9uc2libGUgc3VwcGx5IGNoYWluJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmb290ZXJOYXYgPSBbXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnQWR2ZXJ0aXNlJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdTdXBwb3J0cycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnTWFya2V0aW5nJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcjIScsXG4gICAgbGFiZWw6ICdGQVEnLFxuICB9LFxuXTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIFRleHQsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBGb290ZXJXaWRnZXQgZnJvbSAnY29tcG9uZW50cy9mb290ZXItd2lkZ2V0JztcbmltcG9ydCB7IG1lbnVJdGVtcywgZm9vdGVyTmF2IH0gZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cImZvb3RlclwiIHZhcmlhbnQ9XCJsYXlvdXQuZm9vdGVyXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyVG9wSW5uZXJ9PlxuICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGlkLCB0aXRsZSwgaXRlbXMgfSkgPT4gKFxuICAgICAgICAgICAgPEZvb3RlcldpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJJbm5lcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvcHlyaWdodH0+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+XG4gICAgICAgICAgICAgIENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBSZWRRLCBJbmNcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMuZm9vdGVyTmF2fT5cbiAgICAgICAgICAgIHtmb290ZXJOYXYubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0ga2V5PXtpfSBsYWJlbD17bGFiZWx9IHZhcmlhbnQ9XCJmb290ZXJcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyVG9wSW5uZXI6IHtcbiAgICBnYXA6IFs1MCwgbnVsbCwgbnVsbCwgbnVsbCwgMTcsIDUwXSxcbiAgICBtYjogWzUwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxuICAgICAgJ3JlcGVhdCg1LCAxZnIpJyxcbiAgICBdLFxuICB9LFxuICBmb290ZXJJbm5lcjoge1xuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAjRDlFMEU3YCxcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHBhZGRpbmc6ICczNXB4IDAgNDBweCcsXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpJzoge1xuICAgICAgcGI6IDEwLFxuICAgIH0sXG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgbnVsbCwgJ3JvdyddLFxuICAgIHNwYW46IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI5LFxuICAgICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjYpLFxuICAgICAgbXQ6IFsnMThweCcsICcxOHB4JywgJzdweCddLFxuICAgIH0sXG4gIH0sXG4gIGZvb3Rlck5hdjoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG1hcmdpbjogWycxNXB4IDAgMCcsICcxNXB4IDAgMCcsICcwJ10sXG4gICAgcGFkZGluZzogMCxcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgJ2ZsZXgtc3RhcnQnXSxcbiAgICAnbGkgKyBsaSc6IHtcbiAgICAgIG1sOiBbJzE4cHgnLCAnMThweCcsICcyMHB4J10sXG4gICAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCknOiB7XG4gICAgICAgIG1iOiAnMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYToge1xuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6ICdob21lJyxcbiAgICBsYWJlbDogJ0hvbWUnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3VsdGltYXRlLWZlYXR1cmUnLFxuICAgIGxhYmVsOiAnQWJvdXQnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3ByaWNpbmcnLFxuICAgIGxhYmVsOiAnUHJpY2luZycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZmFxJyxcbiAgICBsYWJlbDogJ0ZhcScsXG4gIH0sXG5dO1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBNZW51QnV0dG9uLCBGbGV4LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyQ2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9ncic7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbbW9iaWxlTWVudSwgc2V0TW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb3Blbk1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudShmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGVyV3JhcHBlcn0+XG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e3RydWV9IHRvcD17MH0gYWN0aXZlQ2xhc3M9XCJpcy1zdGlja3lcIiBpbm5lclo9ezEwfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgICAgICB2YXJpYW50PVwibGF5b3V0LmhlYWRlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPXttb2JpbGVNZW51ID8gJ2lzLW1vYmlsZS1tZW51JyA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkZXJJbm5lcn0+XG4gICAgICAgICAgICAgIDxMb2dvIGlzV2hpdGU9e21vYmlsZU1lbnV9IC8+XG5cbiAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5uYXZiYXJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2JpbGVNZW51ID8gJ25hdmJhciBhY3RpdmUnIDogJ25hdmJhcid9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBhcz1cInVsXCJcbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2TGlzdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9iaWxlTWVudSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9iaWxlTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeU1kXCIgc3g9e3N0eWxlcy5leHBsb3JlfT5cbiAgICAgICAgICAgICAgICAgIEV4cGxvcmUgTm93XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICB7bW9iaWxlTWVudSA/IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgc3g9e3N0eWxlcy5jbG9zZUJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICA8R3JDbG9zZVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vYmlsZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFyaWEtbGFiZWw9XCJUb2dnbGUgTWVudVwiIG9uQ2xpY2s9e29wZW5Nb2JpbGVNZW51fSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TdGlja3k+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyV3JhcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgJy5pcy1zdGlja3knOiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJveFNoYWRvdzogJzAgNnB4IDEzcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXG4gICAgICAgIHB5OiBbMTJdLFxuICAgICAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVySW5uZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICAnLm5hdmJhcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZXh0JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcDogJzIwcHggMzBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIGJveFNoYWRvdzogJzAgNnB4IDEzcHggcmdiYSgzOCw3OCwxMTgsMC4xKScsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNzdweCknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICAgIH0sXG4gICAgICAgIHVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAnbGkgKyBsaSc6IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG5hdmJhcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbmF2TGlzdDoge1xuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBwOiAwLFxuICAgICcubmF2LWl0ZW0nOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBtYXJnaW46ICcwIDIwcHgnLFxuICAgIH0sXG4gICAgJy5hY3RpdmUnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ25vbmUnXSxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IDQwLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICB9LFxuICBjbG9zZUJ1dHRvbjoge1xuICAgIGhlaWdodDogJzMycHgnLFxuICAgIHBhZGRpbmc6ICc0cHgnLFxuICAgIG1pbkhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnMzJweCcsXG4gICAgbWw6ICczcHgnLFxuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayBhcyBNZW51TGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2hpJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxNZW51TGlua1xuICAgICAgdG89e3BhdGh9XG4gICAgICBzcHk9e3RydWV9XG4gICAgICBvZmZzZXQ9ey03MH1cbiAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9NZW51TGluaz5cbiAgKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExlYXJuTW9yZSh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPEEgc3g9e3N0eWxlcy5sZWFybk1vcmV9IHsuLi5yZXN0fT5cbiAgICAgICAge2xhYmVsID8/ICdMZWFybiBNb3JlJ30gPEhpT3V0bGluZUNoZXZyb25SaWdodCAvPlxuICAgICAgPC9BPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbGVhcm5Nb3JlOiB7XG4gICAgY29sb3I6ICdsaW5rJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBzdmc6IHtcbiAgICAgIHRyYW5zaXRpb246ICdtYXJnaW4tbGVmdCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICAgIG1sOiAnM3B4JyxcbiAgICB9LFxuICAgICc6aG92ZXInOiB7XG4gICAgICBzdmc6IHtcbiAgICAgICAgbWw6ICc4cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IGxvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgbG9nb1doaXRlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby13aGl0ZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgaXNXaGl0ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHBhdGg9XCIvXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlIHNyYz17aXNXaGl0ZSA/IGxvZ29XaGl0ZSA6IGxvZ299IGFsdD1cIkZSRURNSU5EIERJR0lUQUwgU0NIT09MXCIgLz5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR3JDbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2dyJztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbi8vIGltcG9ydCAnLi9tb2RhbC5tb2R1bGUuY3NzJztcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBvdmVybGF5OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjc1KScsXG4gICAgekluZGV4OiAxMDAsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBib3JkZXI6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgb3ZlcmZsb3c6ICd1bnNldCcsXG4gICAgbWFyZ2luUmlnaHQ6ICctNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiAnNzAlJyxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIE1vZGFsKHsgaXNPcGVuLCBjbG9zZU1vZGFsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IChkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0Jyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0TW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgIGNsb3NlVGltZW91dE1TPXsyMDAwfVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmVhY3RNb2RhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cbmV4cG9ydCBjb25zdCBDbG9zZUJ1dHRvbiA9ICh7IG9uQ2xpY2ssIHNpemUsIGNvbG9yLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBzeD17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17b25DbGlja30gey4uLnByb3BzfT5cbiAgICAgIDxHckNsb3NlIHNpemU9e3NpemUgPz8gJzI0cHgnfSBjb2xvcj17Y29sb3IgPz8gY29sb3J9IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvbjoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICB0b3A6ICctNDBweCcsXG4gICAgcGF0aDoge1xuICAgICAgc3Ryb2tlOiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBSZXNwb25zaXZlSWZyYW1lID0gKHsgc3JjLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy52aWRlb0NvbnRhaW5lcn0+XG4gICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IDxpZnJhbWUgc3JjPXtzcmN9IHsuLi5wcm9wc30+PC9pZnJhbWU+fVxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZUlmcmFtZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICB2aWRlb0NvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBpZnJhbWU6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IFNlY3Rpb25IZWFkaW5nID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9IHsuLi5wcm9wc30+XG4gICAgICA8SGVhZGluZyBzeD17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkaW5nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRpbmc6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG1heFdpZHRoOiA1ODAsXG4gICAgbWFyZ2luOiAnMCBhdXRvIDYwcHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiBbJzI0cHgnLCAnMzBweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjVdLFxuICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTZweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCAyLjJdLFxuICAgIG10OiAnMTBweCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XG4gIGRlc2NyaXB0aW9uID0gJ0ZyZWRtaW5kIERpZ2l0YWwgU2Nob29sJyxcbiAgYXV0aG9yID0gJ01vYml2ZXJpbywgSW5jJyxcbiAgbWV0YSxcbiAgdGl0bGUgPSAnRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2wnLFxufSkge1xuICBjb25zdCBtZXRhRGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxuICAgICAgY29udGVudDogYXV0aG9yLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICBdLmNvbmNhdChtZXRhKTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cbiAgICAgICkpfVxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZzogYGVuYCxcbiAgbWV0YTogW10sXG4gIGRlc2NyaXB0aW9uOiBgYCxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xuaW1wb3J0IFVsdGltYXRlRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZXMnO1xuaW1wb3J0IEZlYXR1cmVzIGZyb20gJ3NlY3Rpb25zL2ZlYXR1cmVzJztcbmltcG9ydCBJbnRyb1ZpZGVvIGZyb20gJ3NlY3Rpb25zL2ludHJvLXZpZGVvJztcbmltcG9ydCBVc2VmdWxGZWF0dXJlcyBmcm9tICdzZWN0aW9ucy91c2VmdWwtZmVhdHVyZXMnO1xuaW1wb3J0IFdpZGdldHMgZnJvbSAnc2VjdGlvbnMvd2lkZ2V0cyc7XG5pbXBvcnQgUHJpY2luZyBmcm9tICdzZWN0aW9ucy9wcmljaW5nJztcbmltcG9ydCBGYXEgZnJvbSAnc2VjdGlvbnMvZmFxJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8U0VPIHRpdGxlPVwiRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2xcIiAvPlxuICAgICAgICA8QmFubmVyIC8+XG4gICAgICAgIDxVbHRpbWF0ZUZlYXR1cmVzIC8+XG4gICAgICAgIDxGZWF0dXJlcyAvPlxuICAgICAgICA8SW50cm9WaWRlbyAvPlxuICAgICAgICA8VXNlZnVsRmVhdHVyZXMgLz5cbiAgICAgICAgPFdpZGdldHMgLz5cbiAgICAgICAgPFByaWNpbmcgLz5cbiAgICAgICAgPEZhcSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCdXR0b24sIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IGJhbm5lciBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci5wbmcnO1xuaW1wb3J0IHBheXBhbCBmcm9tICdhc3NldHMvaW1hZ2VzL3BheXBhbC5wbmcnO1xuaW1wb3J0IGdvb2dsZSBmcm9tICdhc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmcnO1xuaW1wb3J0IGRyb3Bib3ggZnJvbSAnYXNzZXRzL2ltYWdlcy9kcm9wYm94LnBuZyc7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGlkPVwiaG9tZVwiIGFzPVwic2VjdGlvblwiIHZhcmlhbnQ9XCJzZWN0aW9uLmJhbm5lclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIEhleSBUZWNoIFxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICBXZWxjb21lIHRvIHNjaG9vbC4gV2UgVGVhY2ggVGVjaCAmIERpZ2l0YWwgU2tpbGxzIEhlcmVcbiAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzeD17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgIEVucm9sIE5vd1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2xpZW50c30+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BheXBhbH0gYWx0PVwicGF5cGFsXCIgLz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17Z29vZ2xlfSBhbHQ9XCJnb29nbGVcIiAvPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtkcm9wYm94fSBhbHQ9XCJkcm9wYm94XCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFubmVyfSBhbHQ9XCJiYW5uZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRlbnRXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsICdmbGV4JywgJ2dyaWQnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIDFmciknLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5IZWlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwdmgnXSxcbiAgICBwdDogWzEwMCwgbnVsbCwgbnVsbCwgMTIwLCAxMzAsIDEyMCwgMF0sXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBtYXhXaWR0aDogWzUwNywgbnVsbCwgbnVsbCwgMzI0LCA0NTBdLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQycHgnLCAnNDBweCcsICc2MHB4J10sXG4gICAgbGluZUhlaWdodDogMS4zMyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTFweCcsXG4gICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTRweCcsICcxNHB4JywgJzE2cHgnLCAnMTZweCcsICcxOHB4J10sXG4gICAgbGluZUhlaWdodDogWzEuODUsIDEuODUsIDEuODUsIDEuODUsIDEuODUsIDIuMzNdLFxuICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXG4gICAgbXQ6IFsnMTRweCcsICcxOXB4J10sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGRpc3BsYXk6IFsnbm9uZScsICdmbGV4J10sXG4gICAgbXQ6IFs0NSwgNDUsIDQ1LCAyNSwgMjVdLFxuICB9LFxuICBjbGllbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiBbJzIwcHgnLCAnNDVweCcsICc0NXB4JywgJzMwcHgnLCAnNDVweCddLFxuICAgIGltZzoge1xuICAgICAgbWF4V2lkdGg6IFsnODBweCcsICcxMDAlJywgJzEwMCUnLCAnMTAwJSddLFxuICAgICAgJysgaW1nJzoge1xuICAgICAgICBtbDogWycxNHB4JywgJzI4cHgnLCAnMjhweCcsICcyMHB4J10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGlsbHVzdHJhdGlvbjoge1xuICAgIGRpc3BsYXk6IFsnYmxvY2snLCAnYmxvY2snXSxcbiAgICBtdDogWyczMHB4JywgJzMwcHgnLCAwXSxcbiAgICBtYjogWyc2MHB4JywgJzYwcHgnLCAwXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJywgJzEwMCUnLCAnOTAlJywgJzkwJScsICcxMDAlJ10sXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XG5jb25zdCBmYXFzID0gW1xuICB7XG4gICAgdGl0bGU6ICdIb3cgdG8gY29udGFjdCB3aXRoIHJpZGVycyBlbWVyZ2VuY3kgPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIEdldCB5b3VyIHdlYnNpdGUgYWRzIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcbiAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gd2hpY2hcbiAgICAgICAgZ3VpZGVsaW5lcyBldmVyIHdpdGggbXVsdGlwbGUgZmVhdHVyZXMuXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBcHAgaW5zdGFsbGF0aW9uIGZhaWxlZCwgaG93IHRvIHVwZGF0ZSBzeXN0ZW0gaW5mb3JtYXRpb24/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgUmhpbm8gc2tpbiBtYXliZSB0aGljayBidXQgaXQgY2FuIGJlIHF1aXRlIHNlbnNpdGl2ZSB0byBzdW5idXJucyBhbmRcbiAgICAgICAgaW5zZWN0IGJpdGVzIHdoaWNoIGlzIHdoeSB0aGV5IGxpa2Ugd2FsbG93IHNvIG11Y2gg4oCTIHdoZW4gdGhlIG11ZCBkcmllc1xuICAgICAgICBpdCBhY3RzIGFzIHByb3RlY3Rpb24gZnJvbSB0aGUgc3VuYnVybnMgYW5kIGluc2VjdHMuXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBXZWJzaXRlIHJlc3BvbnNlIHRha2luZyB0aW1lLCBob3cgdG8gaW1wcm92ZT9gLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tXG4gICAgICAgIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYVxuICAgICAgICBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZVxuICAgICAgICBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXRcbiAgICAgICAgdGhlIGhvbWUuXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBOZXcgdXBkYXRlIGZpeGVkIGFsbCBidWcgYW5kIGlzc3Vlc2AsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIElmIHlvdeKAmXJlIGxvb2tpbmcgdG8gaHVudCBhIHVuaWNvcm4sIGJ1dCBkb27igJl0IGtub3cgd2hlcmUgdG8gYmVnaW4sIHRyeVxuICAgICAgICBMYWtlIFN1cGVyaW9yIFN0YXRlIFVuaXZlcnNpdHkgaW4gU2F1bHQgU3RlLiBNYXJpZSwgTWljaGlnYW4uIFNpbmNlXG4gICAgICAgIDE5NzEsIHRoZSB1bml2ZXJzaXR5IGhhcyBpc3N1ZWQgcGVybWl0cyB0byB1bmljb3JuIHF1ZXN0ZXJzLlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImZhcVwiIHZhcmlhbnQ9XCJzZWN0aW9uLmZhcVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICB0aXRsZT1cIkRvIHlvdSBoYXZlIGFueSBxdWVzaXRvblwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJPdXIgc3VwcG9ydCB0ZWFtIHJlYWR5IHRvIGhlbHAgeW91LCBwbGVhc2UgY29udGFjdCB3aXRoIHRoZW1cIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnNjUwcHgnLCAnNzQ1cHgnXSxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgbXg6ICdhdXRvJyxcbiAgICAgICAgICAgIG15OiAtNCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFjY29yZGlvbiBpdGVtcz17ZmFxc30gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUnO1xuaW1wb3J0IHsgTGVhcm5Nb3JlIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcblxuaW1wb3J0IGNoZWNrRmlsbGVkQ2lyY2xlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stY2lyY2xlLWZpbGxlZC5wbmcnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBjb2xvcjogJyMyOEQxREMnLFxuICAgIHZhbHVlOiAnODBLKycsXG4gICAgdGl0bGU6ICdXZSBoYXZlIG1vcmUgdGhhbiBjdXN0b21lcnMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgY29sb3I6ICcjRkY3NTNBJyxcbiAgICB2YWx1ZTogJzE1MCsnLFxuICAgIHRpdGxlOiAnRnJlZSBvbmxpbmUgdHV0b3JpYWxzIHZpZGVvcyBhdmFpbGFibGUnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgY29sb3I6ICcjRkE1NzhFJyxcbiAgICB2YWx1ZTogJzkwKycsXG4gICAgdGl0bGU6ICdEYWlseSB1cGRhdGVkIGJsb2cgcG9zdCBtYWludGFpbicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBjb2xvcjogJyMyOERDQjInLFxuICAgIHZhbHVlOiAnJiAzTScsXG4gICAgdGl0bGU6ICdKb2IgcG9zdGVkIGV2ZXJ5ZGF5YHMgd2l0aCAgcXVhbGlmaWNhdGlvbicsXG4gIH0sXG5dO1xuXG5jb25zdCBGZWF0dXJlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHZhcmlhbnQ9XCJzZWN0aW9uLmZlYXR1cmVzXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudFdyYXBwZXJ9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sZWZ0Q29udGVudH0+XG4gICAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxGZWF0dXJlIGtleT17aXRlbT8uaWR9IGZlYXR1cmU9e2l0ZW19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICBTbWFydCBKYWNrcG90cyA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIHRoYXQgeW91IG1heSBsb3ZlIHRoaXMgYW55dGltZSAmYW1wOyBhbnl3aGVyZVxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5saXN0SXRlbX0gYXM9XCJwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NoZWNrRmlsbGVkQ2lyY2xlfSBhbHQ9XCJjaGVjayBpY29uXCIgLz5cbiAgICAgICAgICAgICAgVW5saW1pdGVkIGRlc2lnbiBwb3NzaWJpbGl0eVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5saXN0SXRlbX0gYXM9XCJwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NoZWNrRmlsbGVkQ2lyY2xlfSBhbHQ9XCJjaGVjayBpY29uXCIgLz5cbiAgICAgICAgICAgICAgQ29tcGxldGVseSByZXNwb25zaXZlIGZlYXR1cmVzXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD1cIiMhXCIgbGFiZWw9XCJFeHBsb3JlIE1vcmVcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGdhcDogWzMwLCAzMCwgMzAsIDMwLCA0MCwgNjAsIDcwLCAxMjBdLFxuICAgIGRpc3BsYXk6IFsnZmxleCcsICdmbGV4JywgJ2dyaWQnXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3Vuc2V0J10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJzEuMmZyIDAuOGZyJyxcbiAgICAgICcxLjJmciAwLjhmcicsXG4gICAgICAnMS4yZnIgMC44ZnInLFxuICAgICAgJzEuMWZyIDAuOWZyJyxcbiAgICAgICcxLjFmciAwLjlmcicsXG4gICAgICAnMS4xZnIgMC45ZnInLFxuICAgICAgJzEuMmZyIDAuOGZyJyxcbiAgICBdLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBsZWZ0Q29udGVudDoge1xuICAgIGdhcDogWzIwLCAyMCwgMjAsIDIwLCAzMCwgNDVdLFxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgJz4gZGl2Jzoge1xuICAgICAgJzpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICBtdDogWyc2NXB4J10sXG4gICAgICB9LFxuICAgICAgJzpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgIG10OiBbJy02NXB4J10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJpZ2h0Q29udGVudDoge1xuICAgIC8vIG1sOiBbJzEyMHB4J10sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtYjogWycyMHB4J10sXG4gICAgbXQ6IFswLCAwLCAnLTcwcHgnXSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6IFsnMjhweCcsICcyOHB4JywgJzI4cHgnLCAnMjhweCcsICczNnB4JywgJzQwcHgnXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjVdLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBicjoge1xuICAgICAgICBkaXNwbGF5OiBbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ2Jsb2NrJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgbXQ6IFsnMTVweCcsICcxMHB4J10sXG4gICAgfSxcbiAgfSxcbiAgbGlzdEl0ZW06IHtcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGxpbmVIZWlnaHQ6IDIuODEsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGltZzoge1xuICAgICAgbXI6ICcxMHB4JyxcbiAgICB9LFxuICB9LFxuICBleHBsb3JlOiB7XG4gICAgbXQ6IFsnMjBweCcsICcyMHB4JywgJzIwcHgnLCAnMjBweCcsICc0MHB4J10sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5pbXBvcnQgeyBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IHZpZGVvQmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvdmlkZW8ucG5nJztcbmltcG9ydCBQbGF5IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGxheS5wbmcnO1xuaW1wb3J0IE1vZGFsLCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgUmVzcG9uc2l2ZUlmcmFtZSBmcm9tICdjb21wb25lbnRzL3Jlc3BvbnNpdmUtaWZyYW1lJztcblxuY29uc3QgSW50cm9WaWRlbyA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zZWN0aW9ufSB2YXJpYW50PVwic2VjdGlvbi5pbnRyb1ZpZGVvXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCIgICBFcXVpcCBZb3Vyc2VsZiBmb3IgYSBXb3JsZCBvZiBPcHBvcnR1bml0aWVzLlwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCIgR3JhYiBZb3VyIFNlYXQgJiBHZXQgYSBDaGlsbGVkIERyaW5rLiBMZXTigJlzIExlYXJuIGFuZCBFYXJuLiBXZSBoYXZlIEJlZW4gV2FpdGluZyBmb3IgWW91XG4gICAgICAgICAgICBZb3UgYXJlIGF0IHRoZSByaWdodCBwbGFjZS4gTGV04oCZcyBUYWxrXG4gICAgICAgICAgICBBIOKAnGhvbGQtbXktaGFuZOKAnSwgc3RlcC1ieS1zdGVwIHByb2Nlc3MgdG8gbGVhcm4gaW4tZGVtYW5kIGhpZ2ggaW5jb21lIHNraWxsIGZyb20gYmVnaW5uZXIgXG4gICAgICAgICAgICB0byBNYXN0ZXJ5LCBldmVuIGlmIGl0IGlzIHlvdXIgZmlyc3QgdGltZS4gTm8gZGVncmVlIG9yIHByaW9yIHRlY2ggZXhwZXJpZW5jZSByZXF1aXJlZC5cIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgPExlYXJuTW9yZSBwYXRoPVwiIyFcIiBsYWJlbD1cIkV4cGxvcmUgTW9yZVwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudmlkZW9XcmFwcGVyfT5cbiAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIHNpemU9XCIyNHB4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUlmcmFtZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3lvdXR1YmUuY29tXCJcbiAgICAgICAgICAgICAgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3ZpZGVvQmFubmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tYmFubmVyXCJcbiAgICAgICAgICAgIGFsdD1cInZpZGVvIGJhbm5lclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICBzeD17c3R5bGVzLnBsYXlQYXVzZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQbGF5fSBhbHQ9XCJwbGF5XCIgLz4gV2F0Y2ggRnVsbCB2aWRlb1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm9WaWRlbztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgbWF4V2lkdGg6ICc2MjBweCcsXG4gICAgbWI6IFs1XSxcbiAgICBoMjoge1xuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJ10sXG4gICAgbWI6IFs2XSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnLnZpZGVvLWJhbm5lcic6IHtcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnMTAwJScsICcxMDAlJywgJzEwMCUnLCAnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIH0sXG4gIH0sXG4gIHBsYXlQYXVzZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICBib3R0b206IFs0MCwgNDAsIDQwLCA3MCwgMTAwXSxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICAnOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogMCxcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgbXI6ICcxNnB4JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGpzeCwgQm94LCBHcmlkLCBDb250YWluZXIsIEZsZXgsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgUHJpY2VUYWJsZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3ByaWNlLXRhYmxlJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IG1vbnRobHkgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0ZyZWUgUGxhbicsXG4gICAgc3VidGl0bGU6ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcbiAgICBhbW91bnQ6IDAsXG4gICAgaXNSZWNvbW1lbmRlZDogZmFsc2UsXG4gICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLmAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICB0aXRsZTogYFVubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIHRpdGxlOiBgRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREZgLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdQcmVtaXVtJyxcbiAgICBzdWJ0aXRsZTogJ0ZvciBzdGFydHVwIGVudGVycHJpc2UnLFxuICAgIGFtb3VudDogODkuOTksXG4gICAgaXNSZWNvbW1lbmRlZDogdHJ1ZSxcbiAgICBidXR0b25UZXh0OiAnU3Vic2NyaWJlIE5vdycsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50c2AsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREZgLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbmNvbnN0IGFubnVhbCA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnRnJlZSBQbGFuJyxcbiAgICBzdWJ0aXRsZTogJ0ZvciBTbWFsbCB0ZWFtcyBvciBvZmZpY2UnLFxuICAgIGFtb3VudDogMCxcbiAgICBpc1JlY29tbWVuZGVkOiBmYWxzZSxcbiAgICBidXR0b25UZXh0OiAnU3RhcnQgZnJlZSB0cmFpbCcsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIHRpdGxlOiBgVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHNgLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6IGBEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERmAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ1ByZW1pdW0nLFxuICAgIHN1YnRpdGxlOiAnRm9yIHN0YXJ0dXAgZW50ZXJwcmlzZScsXG4gICAgYW1vdW50OiA4OS45OSAqIDEyIC0gMTAsXG4gICAgaXNSZWNvbW1lbmRlZDogdHJ1ZSxcbiAgICBidXR0b25UZXh0OiAnU3Vic2NyaWJlIE5vdycsXG4gICAgZmVhdHVyZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IGBVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50c2AsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREZgLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuY29uc3QgUHJpY2luZyA9ICgpID0+IHtcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoe1xuICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgIHByaWNpbmdQbGFuOiBtb250aGx5LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVQbGFuID0gKHBsYW4pID0+IHtcbiAgICBpZiAocGxhbiA9PT0gJ21vbnRobHknKSB7XG4gICAgICBzZXRQbGFuKHtcbiAgICAgICAgLi4ucGxhbixcbiAgICAgICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgICAgIHByaWNpbmdQbGFuOiBtb250aGx5LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwbGFuID09PSAnYW5udWFsJykge1xuICAgICAgc2V0UGxhbih7XG4gICAgICAgIC4uLnBsYW4sXG4gICAgICAgIGFjdGl2ZTogJ2FubnVhbCcsXG4gICAgICAgIHByaWNpbmdQbGFuOiBhbm51YWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJzZWN0aW9uXCJcbiAgICAgIGlkPVwicHJpY2luZ1wiXG4gICAgICBzeD17c3R5bGVzLnNlY3Rpb259XG4gICAgICB2YXJpYW50PVwic2VjdGlvbi5wcmljaW5nXCJcbiAgICA+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCJXaGF0IGRlYWwgc3VpdCB5b3UgcGVyZmVjdFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJGb2N1cyBvbmx5IG9uIHRoZSBtZWFuaW5nLCB3ZSB0YWtlIGNhcmUgb2YgdGhlIGRlc2lnbi4gQXMgc29vbiBhcyB0aGUgbWVldGluZyBlbmQgeW91IGNhbiBleHBvcnQgaW4gb25lIGNsaWNrIGludG8geW91ciBwcmVmZXJyZWQgZm9ybWF0LlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMucHJpY2VTd2l0Y2hlcn0+XG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY2xhc3NOYW1lPVwiZGlzY291bnRcIj5cbiAgICAgICAgICAgIFNhdmUgMjAlXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYW4oJ21vbnRobHknKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGxhbi5hY3RpdmUgPT09ICdtb250aGx5JyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNb250aGx5IFBsYW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGFuKCdhbm51YWwnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGxhbi5hY3RpdmUgPT09ICdhbm51YWwnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFubnVhbCBQbGFuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5wcmljZVdyYXBwZXJ9PlxuICAgICAgICAgIHtwbGFuLnByaWNpbmdQbGFuLm1hcCgocHJpY2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJpY2VUYWJsZSBwcmljZT17cHJpY2V9IGtleT17YCR7cGxhbi5hY3RpdmV9LSR7aW5kZXh9YH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgbWI6IFs2MCwgbnVsbCwgbnVsbCwgNTBdLFxuICB9LFxuICBwcmljZVN3aXRjaGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjhGQicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtyZ2JhKCcjZmZmJywgMC4yKX1gLFxuICAgIG1hcmdpbjogWycwIGF1dG8gNDBweCcsIG51bGwsIG51bGwsICcwIGF1dG8gNTBweCddLFxuICAgIG1heFdpZHRoOiAzMDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcDogMixcbiAgICAnLmRpc2NvdW50Jzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBtaW5IZWlnaHQ6IDI1LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3Vuc2V0JyxcbiAgICAgIGJvcmRlclJhZGl1czogMjUsXG4gICAgICByaWdodDogMzgsXG4gICAgICB0b3A6ICctMTdweCcsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgICAgcHg6ICcyNXB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICB9LFxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogJzAgbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHByaWNlV3JhcHBlcjoge1xuICAgIGdhcDogMzAsXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMzQwcHgpJyxcbiAgICAgICdyZXBlYXQoMSwgMzQwcHgpJyxcbiAgICAgICdyZXBlYXQoMSwgMzQwcHgpJyxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgICdyZXBlYXQoMiwgNDMwcHgpJyxcbiAgICAgICdyZXBlYXQoMiwgNDQwcHgpJyxcbiAgICAgICdyZXBlYXQoMiwgNDgwcHgpJyxcbiAgICBdLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnLnByaWNlQ2FyZCc6IHtcbiAgICAgICcucHJpY2VIZWFkZXInOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGxpbmVhcmAsXG4gICAgICB9LFxuICAgICAgJ3VsID4gbGknOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICAgICcucHJpY2VBbW91bnQnOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjlzIGxpbmVhcmAsXG4gICAgICB9LFxuICAgICAgJy5wcmljZUJ1dHRvbic6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGxpbmVhcmAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlJztcblxuaW1wb3J0IGJ1bGIgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9idWxiLnBuZyc7XG5pbXBvcnQgZGFydCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2RhcnQucG5nJztcbmltcG9ydCByb2NrZXQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9yb2NrZXQucG5nJztcbmltcG9ydCB0cm9waHkgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy90cm9waHkucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGljb246IHJvY2tldCxcbiAgICB0aXRsZTogJ0xlYXJuIHdpdGggQ29uZmlkZW5jZScsXG4gICAgZGVzY3JpcHRpb246ICdBdCBvdXIgaW5zdGl0dXRpb24sIHdlIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2Ygb3VyIHN0dWRlbnRzXCIgcmVwdXRhdGlvbnMsIHdoaWNoIGlzIHdoeSB3ZVwidmUgY29sbGFib3JhdGVkIHdpdGggY2VydGlmaWVkIGluZHVzdHJ5IHByb2Zlc3Npb25hbHMgdG8gcmV2aWV3IGFuZCBjZXJ0aWZ5IGFsbCBvZiBvdXIgb25saW5lIGNvdXJzZXMgYW5kIHRyYWluaW5nLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpY29uOiBkYXJ0LFxuICAgIHRpdGxlOiAnT3VyIE1pc3Npb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnT3VyIG1pc3Npb24gaXMgdG8gZXF1aXAgQWZyaWNhbnMgd2l0aCB0aGUgbGF0ZXN0IHJlYWwtdGltZSBzdGFuZGFyZHMgYW5kIHN1cHBvcnQgdGhlbSBpbiByZWFjaGluZyB0aGVpciBmdWxsIHBvdGVudGlhbC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgIGljb246IGJ1bGIsXG4gICAgdGl0bGU6ICdPdXIgVmlzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ1dlIGFzcGlyZSB0byBjcmVhdGUgdGhlIG1vc3QgZXh0ZW5zaXZlIGNvbXBpbGF0aW9uIG9mIGRpZ2l0YWwgcGxhdGZvcm0sIHJlc291cmNlcyBhbmQgb3Bwb3J0dW5pdGllcyBhdmFpbGFibGUsIHdpdGggdGhlIGFpbSBvZiBiZW5lZml0aW5nIHRoZSBkaWdpdGFsIGluZHVzdHJ5IGluIE5pZ2VyaWEgYW5kIGFjcm9zcyBBZnJpY2EuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGljb246IHRyb3BoeSxcbiAgICB0aXRsZTogJ0F3YXJkIGhpc3RvcnknLFxuICAgIGRlc2NyaXB0aW9uOiBgTG9yZW1gLFxuICB9LFxuXTtcblxuY29uc3QgVWx0aW1hdGVGZWF0dXJlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidWx0aW1hdGUtZmVhdHVyZVwiIHZhcmlhbnQ9XCJzZWN0aW9uLnVsdGltYXRlRmVhdHVyZVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiT3VyIENvbW11bml0eVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgdGVjaCBpbmR1c3RyeSBpcyBjdXJyZW50bHkgb25lIG9mIHRoZSBtb3N0IHJhcGlkbHkgZXhwYW5kaW5nIHNlY3RvcnMgZ2xvYmFsbHksIGFuZCBpdHMgZHluYW1pYyBhbmQgZXZlci1jaGFuZ2luZyBsYW5kc2NhcGUgYXR0cmFjdHMgYSBwbGV0aG9yYSBvZiBpbmRpdmlkdWFscyBzZWVraW5nIHRvIGVudGVyIHRoaXMgZmllbGQuXG5GcmVkbWluZCBEaWdpdGFsIFNjaG9vbCBpcyBhbiBlZHVjYXRpb24gcGxhdGZvcm0gZm9jdXNlZCBvbiBpbXBhcnRpbmcgaGlnaC1kZW1hbmQgc2tpbGxzIGFuZCBkcml2ZW4gYnkgYSBzdHJvbmcgc2V0IG9mIHZhbHVlcy4gSXRzIG1pc3Npb24gaXMgdG8gZW1wb3dlciBBZnJpY2FuIG1pbGxlbm5pYWxzIHRvIG92ZXJjb21lIHBvdmVydHksIGFjaGlldmUgY2FyZWVyIHN1Y2Nlc3MsIGFuZCBsaXZlIHRoZWlyIGRyZWFtIGxpdmVzLlxuXG5cIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZXN9PlxuICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxVbHRpbWF0ZUZlYXR1cmUga2V5PXtpdGVtLmlkfSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVWx0aW1hdGVGZWF0dXJlcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgbWFyZ2luQm90dG9tOiBbNjAsIDYwLCA2MCwgODBdLFxuICB9LFxuICBmZWF0dXJlczoge1xuICAgIGdhcDogWyczNXB4IDYwcHgnLCA2MCwgNjAsIDQwLCAzMCwgNjBdLFxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoNCwgMWZyKScsXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IFVsdGltYXRlRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3VsdGltYXRlLWZlYXR1cmUnO1xuXG5pbXBvcnQgYnVsYiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2J1bGItMi5wbmcnO1xuaW1wb3J0IGRpYW1vbmQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9kaWFtb25kLnBuZyc7XG5pbXBvcnQgaGVscCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2hlbHAucG5nJztcbmltcG9ydCBhd2FyZCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2F3YXJkLnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiBidWxiLFxuICAgIHRpdGxlOiAnRmFzdCBQZXJmb3JtYW5jZScsXG4gICAgZGVzY3JpcHRpb246IGBMZXTigJlzIGp1c3QgZ2V0IHRoaXMgb3V0IG9mIHRoZSB3YXkgLSB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIGtpdCB2ZXJzaW9uIG9mIEVkdWZsb3cuIEJ1aWx0IGJ5IGVkdWNhdG9ycywgd2UgYmVsaWV2ZSBpbiBlcXVhdGluZyBlZHVjYXRpb24gZm9yIGFsbC4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC5gLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogZGlhbW9uZCxcbiAgICB0aXRsZTogJ1BybyBTdWJzY3JpcHRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiBgV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgdG9vbHMuIEVkdWZsb3cgaXMgYnVpbHQgd2l0aCBXQ0FHIHN0YW5kYXJkcyBpbiBtaW5kIGFuZCBjYW4gZWFzaWx5IGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuYCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGljb246IGhlbHAsXG4gICAgdGl0bGU6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbiAgICBkZXNjcmlwdGlvbjogYExldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1Zmxvdy4gQnVpbHQgYnkgZWR1Y2F0b3JzLCB3ZSBiZWxpZXZlIGluIGVxdWF0aW5nIGVkdWNhdGlvbiBmb3IgYWxsLiBQYWlkIHN1YnNjcmlwdGlvbnMgYWxsb3cgdXMgdG8gY29udGludWUgaGVscGluZyBsZWFybmVycyBhcm91bmQgdGhlIHdvcmxkLmAsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiBhd2FyZCxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIGRlc2NyaXB0aW9uOiBgV2UgYmVsaWV2ZSBpdOKAmXMgaW1wb3J0YW50IGZvciBldmVyeW9uZSB0byBoYXZlIGFjY2VzcyB0byBzb2Z0d2FyZSDigJMgZXNwZWNpYWxseSB3aGVuIGl0IGNvbWVzIHRvIGRpZ2l0YWwgbGVhcm5pbmcgdG9vbHMuIEVkdWZsb3cgaXMgYnVpbHQgd2l0aCBXQ0FHIHN0YW5kYXJkcyBpbiBtaW5kIGFuZCBjYW4gZWFzaWx5IGJlIG5hdmlnYXRlZCBieSBrZXlib2FyZCBhbmQgc2NyZWVuIHJlYWRlcnMuYCxcbiAgfSxcbl07XG5cbmNvbnN0IFVzZWZ1bEZlYXR1cmVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ1c2VmdWwtZmVhdHVyZXNcIiB2YXJpYW50PVwic2VjdGlvbi51c2VmdWxGZWF0dXJlc1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiQW1hemluZyB1c2VmdWwgZmVhdHVyZXNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRm9jdXMgb25seSBvbiB0aGUgbWVhbmluZywgd2UgdGFrZSBjYXJlIG9mIHRoZSBkZXNpZ24uIEFzIHNvb24gYXMgdGhlIG1lZXRpbmcgZW5kIHlvdSBjYW4gZXhwb3J0IGluIG9uZSBjbGljayBpbnRvIHlvdXIgcHJlZmVycmVkIGZvcm1hdC5cIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZXN9PlxuICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxVbHRpbWF0ZUZlYXR1cmVcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlLWl0ZW1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZWZ1bEZlYXR1cmVzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRpbmc6IHtcbiAgICBtYXJnaW5Cb3R0b206IDgwLFxuICB9LFxuICBmZWF0dXJlczoge1xuICAgIGdhcDogNjAsXG4gICAgZGlzcGxheTogWydncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMSwgMWZyKScsICdyZXBlYXQoMSwgMWZyKScsICdyZXBlYXQoMiwgMWZyKSddLFxuICAgICcuZmVhdHVyZS1pdGVtJzoge1xuICAgICAgZGlzcGxheTogWydibG9jaycsICdibG9jaycsICdibG9jaycsICdibG9jaycsICdmbGV4J10sXG4gICAgICBweDogWycxNXB4JywgMF0sXG4gICAgICBtYXhXaWR0aDogWydub25lJ10sXG4gICAgICBmaWd1cmU6IHtcbiAgICAgICAgbWluV2lkdGg6ICc5MHB4JyxcbiAgICAgICAgbTogW1xuICAgICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgICAnMCBhdXRvIDMwcHgnLFxuICAgICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICAgJzAgMjZweCAwIDAnLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgeyBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuXG5pbXBvcnQgYmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvd2lkZ2V0cy5wbmcnO1xuaW1wb3J0IGNoZWNrRmlsbGVkQ2lyY2xlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stY2lyY2xlLWZpbGxlZC5wbmcnO1xuXG5jb25zdCBXaWRnZXRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ3aWRnZXRzXCIgdmFyaWFudD1cInNlY3Rpb24ud2lkZ2V0c1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubGVmdENvbnRlbnR9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YmFubmVyfSBhbHQ9XCJ3aWRnZXRzXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmlnaHRDb250ZW50fT5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgICAgIHRpdGxlPVwiVWx0aW1hdGUgd2lkZ2V0cyBvZiBjb2xsZWN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFueXdoZXJlXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5saXN0SXRlbX0gYXM9XCJwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NoZWNrRmlsbGVkQ2lyY2xlfSBhbHQ9XCJjaGVjayBpY29uXCIgLz5cbiAgICAgICAgICAgICAgVW5saW1pdGVkIGRlc2lnbiBwb3NzaWJpbGl0eVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5saXN0SXRlbX0gYXM9XCJwXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NoZWNrRmlsbGVkQ2lyY2xlfSBhbHQ9XCJjaGVjayBpY29uXCIgLz5cbiAgICAgICAgICAgICAgQ29tcGxldGVseSByZXNwb25zaXZlIGZlYXR1cmVzXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD1cIiMhXCIgbGFiZWw9XCJFeHBsb3JlIE1vcmVcIiAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRlbnRXcmFwcGVyOiB7XG4gICAgZ2FwOiBbMCwgMCwgMCwgMCwgMTAsIDEwMF0sXG4gICAgZGlzcGxheTogWydibG9jaycsICdibG9jaycsICdncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWI6IFsnMjBweCddLFxuICAgIG10OiBbMCwgMCwgMCwgMCwgJy03MHB4J10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCAnMjRweCcsICcyNHB4JywgJzI4cHgnLCAnMzJweCcsICc0MHB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40NSwgMS41XSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgIH0sXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBsaW5lSGVpZ2h0OiAyLjgxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBpbWc6IHtcbiAgICAgIG1yOiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbiAgZXhwbG9yZToge1xuICAgIG10OiBbJzIwcHgnLCAnMjBweCcsICcyMHB4JywgJzIwcHgnLCAnNDBweCddLFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXG4gICAgdGV4dFNlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXG4gICAgaGVhZGluZ1NlY29uZGFyeTogJyMzNDNENDgnLCAvLyBoZWFkaW5nIGNvbG9yXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcbiAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYm9yZGVyQ29sb3I6ICcjRjNGNEY1JywgLy8gYm9yZGVyIGNvbG9yXG4gICAgcHJpbWFyeTogJyMyOEREQjInLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxuICAgIHNlY29uZGFyeTogJyNFRjlFNDgnLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXG4gICAgbXV0ZWQ6ICcjN0I4MTg4JywgLy8gbXV0ZWQgY29sb3JcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcbiAgICBkYXJrOiAnIzEwMTMyRCcsXG4gICAgbGluazogJyM0Rjk2RkYnLCAvLyBkZWZhdWx0IGxpbmsgY29sb3JcblxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB7XG4gICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxuICAgICAgICBtdXRlZDogJyMxMTEnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6ICdETSBTYW5zJyxcbiAgICAvLyBib2R5OlxuICAgIC8vICAgJ3N5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWFkaW5nOiAnRE0gU2FucycsXG4gICAgLy8gaGVhZGluZzogJ0JyZWUgU2VyaWYnLFxuICAgIG1vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnLFxuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjRdLFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIC8vIGJvZHk6IDQwMCxcbiAgICBoZWFkaW5nOiA1MDAsXG4gICAgLy8gaGVhZGluZzogNzAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjUsXG4gICAgLy8gYm9keTogMS41LFxuICAgIGhlYWRpbmc6IDEuMjUsXG4gICAgLy8gaGVhZGluZzogMS4xMjUsXG4gIH0sXG4gIGxldHRlclNwYWNpbmdzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgY2FwczogJzAuMmVtJyxcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcbiAgfSxcbiAgc3BhY2U6IFswLCA0LCA4LCAxMiwgMTYsIDMyLCA0OCwgNjQsIDk2LCAxMjhdLFxuICBzaXplczoge30sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgJzQ4MHB4JyxcbiAgICAnNjQwcHgnLFxuICAgICc3NjhweCcsXG4gICAgJzEwMjRweCcsXG4gICAgJzEyMDBweCcsXG4gICAgJzEzNjdweCcsXG4gICAgJzE0NDBweCcsXG4gIF0sXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcbiAgbGF5b3V0OiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzk3MHB4JywgJzExNDBweCcsICcxMjYwcHgnXSxcbiAgICAgIHBhZGRpbmdMZWZ0OiBbMjAsIDMwXSxcbiAgICAgIHBhZGRpbmdSaWdodDogWzIwLCAzMF0sXG4gICAgICBtOiAnMCBhdXRvJyxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBwYWRkaW5nOiAnMjBweCAwJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndGV4dCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgbWFpbjoge30sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcbiAgICAgIHB0OiA2LFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBiYW5uZXI6IHt9LFxuICAgIHVsdGltYXRlRmVhdHVyZToge1xuICAgICAgcHQ6IFswLCA3LCA3LCA4LCA4LCA3LCA3XSxcbiAgICAgIHBiOiBbNywgNywgNywgOCwgOSwgMTMwLCAxNTBdLFxuICAgIH0sXG4gICAgZmVhdHVyZXM6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmRTZWNvbmRhcnknLFxuICAgICAgcHQ6IFs3LCA3LCA3LCA3LCA4XSxcbiAgICAgIHBiOiBbNywgNywgNywgNywgOF0sXG4gICAgfSxcbiAgICBpbnRyb1ZpZGVvOiB7XG4gICAgICBwdDogWzcsIDcsIDcsIDcsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCA4XSxcbiAgICB9LFxuICAgIHVzZWZ1bEZlYXR1cmVzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kU2Vjb25kYXJ5JyxcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzcsIDcsIDcsIDcsIDE1MF0sXG4gICAgfSxcbiAgICB3aWRnZXRzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGN0Y1JyxcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzcsIDcsIDcsIDcsIDYsIDhdLFxuICAgIH0sXG4gICAgcHJpY2luZzoge1xuICAgICAgcHQ6IFs3LCA3LCA3LCA3LCA4XSxcbiAgICAgIHBiOiBbNiwgNiwgNiwgOF0sXG4gICAgfSxcbiAgICBmYXE6IHtcbiAgICAgIHB0OiBbNiwgNiwgNiwgOF0sXG4gICAgICBwYjogWzcsIDcsIDcsIDcsIDE1MF0sXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGhlYWRpbmc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIGhlcm9UaXRsZToge1xuICAgICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCA1LCBudWxsLCA1LCA2XSxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTddLFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgYm9sZDoge1xuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB9LFxuICAgIGxlYXJuTW9yZToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtZmxleCddLFxuICAgICAgcDogMixcbiAgICAgIC8vIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgLy8gdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1vdXQnLFxuICAgICAgLy8gdHJhbnNpdGlvbkR1cmF0aW9uOiAnLjJzJyxcbiAgICAgIC8vIGJvcmRlclJhZGl1czogMixcbiAgICAgIC8vICcmOmhvdmVyJzoge1xuICAgICAgLy8gICBiZzogJ2hpZ2hsaWdodCcsXG4gICAgICAvLyB9LFxuICAgICAgLy8gJyYuYWN0aXZlJzoge1xuICAgICAgLy8gICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgLy8gICBiZzogJ2hpZ2hsaWdodCcsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDIuNSxcbiAgICB9LFxuICB9LFxuICBpbWFnZXM6IHtcbiAgICBhdmF0YXI6IHtcbiAgICAgIHdpZHRoOiA0OCxcbiAgICAgIGhlaWdodDogNDgsXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxuICAgIH0sXG4gIH0sXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXG4gIGJ1dHRvbnM6IHtcbiAgICBtZW51OiB7XG4gICAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICAgIHN2Zzoge1xuICAgICAgICB3aWR0aDogJzMycHgnLFxuICAgICAgfSxcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcbiAgICBkZWZhdWx0OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHQnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgbWluSGVpZ2h0OiBbJzUwcHgnLCAnNTBweCcsICc1MHB4JywgJzUwcHgnLCAnNTBweCddLFxuICAgICAgcGFkZGluZzogWycwIDI1cHgnLCAnMCAyNXB4JywgJzAgMjVweCcsICcwIDMwcHgnXSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiZzogJ2RhcmsnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByaW1hcnlNZDoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMucHJpbWFyeScsXG4gICAgICBtaW5IZWlnaHQ6ICc1MHB4JyxcbiAgICAgIHB4OiAnMjVweCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcbiAgICAgIHRyYW5zaXRpb246ICcwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFREYwRjInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdoaXRlOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAnIzAyMDcxOCcsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgfSxcbiAgfSxcbiAgY2FyZHM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgLy8gYm94U2hhZG93OiAnMCAwIDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICB9LFxuICAgIG9mZmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcbiAgICAgIG06IDIsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgfSxcbiAgICBmZWF0dXJlQ2FyZDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogWydjZW50ZXInLCAnZmxleC1zdGFydCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93J10sXG4gICAgICBwOiBbMCwgM10sXG4gICAgfSxcbiAgfSxcbiAgZm9ybXM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJDb2xvcicsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBiYWRnZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgYmc6ICcjMjhBNUZGJyxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBwOiAnM3B4IDExcHgnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgfSxcbiAgICAvLyBoMS1oNiBIZWFkaW5nIHN0eWxlc1xuICAgIGgxOiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA2LFxuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDUsXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNCxcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAzLFxuICAgIH0sXG4gICAgaDU6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDIsXG4gICAgfSxcbiAgICBoNjoge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMSxcbiAgICB9LFxuICAgIC8vIERpdmlkZXIgc3R5bGVzXG4gICAgaHI6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxuICAgIH0sXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSxcbiAgICBzck9ubHk6IHtcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9nclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9oaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9