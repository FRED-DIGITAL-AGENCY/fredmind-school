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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAcCAYAAACXkxr4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0xN1QxMzozNDoyOSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMTdUMTQ6MTI6MjkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMTdUMTQ6MTI6MjkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MGE5NTBiLTk0MWQtMWU0NS1iNDU3LWRiYTc2OGQxMjFkZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NDBhOTUwYi05NDFkLTFlNDUtYjQ1Ny1kYmE3NjhkMTIxZGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NDBhOTUwYi05NDFkLTFlNDUtYjQ1Ny1kYmE3NjhkMTIxZGQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MGE5NTBiLTk0MWQtMWU0NS1iNDU3LWRiYTc2OGQxMjFkZCIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0xN1QxMzozNDoyOSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmLF6CgAAAxUSURBVGiB7Vp5dJTVFf9971tmzzZjomFpwADBkgSSkGWwIQQwAfWUJahBQ0BQsFWWqMUSbKWARcORQgVEkxKQfWnaSjFI2HcNwYRoFiYEUFDGEEIyW+ab+V7/CN8wRIQM9Bw5x/zO+c7MvHfvfW/u7713730zDKUUnbh/QH7uCXTiZnQScp+hk5D7DJ2E3Gf4vxNSVVWlrKur6yT6LsHdq4G6ujry2a5d6UVFRaPPnTsXJjqdAsMQKTgk2DxkyJB94556aktMTEzj/2OyvwhQSu/6eXPum88/FBJyTK1UUj+tlhqCgugDej19QK+ngf7+VK1U0qCAgFOZzzzz16qqKuW9jPVLee5a8cknnvg7T9i6QH9/+mBw8E8+hqAgKrAsjejT59MTJ04E+zrOL41IhlLfC8MR6ekr9+7ZM6xbt24XWJaVLl68GCoIwiOSJMHtdoMwDFiOg8vlgr+/PwIDA3Hh/HnoDYb924uKRvfv37/pdvZXrlgxcsuWLePO1p0NF10ujhAiBQcHmwcMGHBq+oxXlkVHt+nX1dURi8WijY6Obr7TnE0mE1dcXJxOJYk8HB5uGjly5Nfe/YWrV6e0WCxag8HQkJmZebyjvigpKQk/V18f5pYkEh0VXZGYlPh9R3VvCV8ZnP+X+c8JHHdGo1LRJUuWjKKU4s9/+tPE2JiY7WnDh696NnP8wlG//e2ShPj4zePGjs376quv1BUVFdouDz10RKNS0UFG4/rb2R9kNK4HUM+zHFXwAuVZjnKEpQQMBUDXrVtnpJTiP//+T9SDISHHdBrt6TWFa5LvNO/l778/EgAFQOMHDtzs3Xfw4MGuBEw9ABrRu88uX/yRlZU1T7b7zqJFT93rDvEpqJd+UWpYvvz93wf4+4dbbDZ06dLlWwB4a968wrfmzSu8nS4hrKRWq1F28mTM2jVrkidkZx9sL/PE448vP3L0qNFf5xdmsVigNxiOPxgSYiaESC0tLdrLZnNwZGRkJQBs3rzp6e8vX04EgK1btjw9IXvCQQB4NSdnenl5eTQhRFq6bNkrffv2dQCAICicLENACIFarbF5j8txnEun04XZ7Xao1Wpb+3ndDoIgiAzaGGE5zuWL7q3gEyFHjx4xNl29mhgQEABCSGWrw6HsiF5lZaWWEEYCAEEQIj788MOp7QkpKysL2r9vf4pOow2z2+2miZMmrvnjnDlvP/zww5IsU1paaoiKimoGgFGjRxcVFxenOxwO5agxo7fLMgcPHBpcWlY6BgAaGhrmAfgWANRqtU0+njmOvclxKpXKAYYBpRQsy/rkVFEUeQZtlDhbnR3yx+3gEyH79u0bIggC7HY7UlNT9z6XlXW4I3r9+vWzTHr++dWL8/KS1Wo1ztbV9aytqRV69+ntlGXWr18/3mq3PaLgBcTGxZXmFxQsaG8nLi6uQX6fkZFRGhQUNM5qtaqffPLJSrldUAgOnuUgCApcuXLFgOuEUEo9tRHDMDfZ/SkSTCYTxzCM5L0o2oN42eJ53gm0LRxRFDmD3tDYq3cv50/p3tKeL8LV1dURgiBAFEX0iYio8UV3SGrqXqWybQE5nc7E8xfOd/fuP1laOpBn2xKBiZMmrr6Tvbm5c6dkZmZufPGFFz5avHhxxhdffGF4bPjwj6qrqh5RqVTgOBYvTZ22Kigw8NSGDRuMLEtcDMOAYRhYrVZ1TU2NINsymUzhoBQMw0BOcQYZjeuNiUnHHh006MiB/QfCZFljYtJGg95wsmePHvsAQKPRtFBQaNQafLx2bXb3bt0OpSQPPjBs6NDvBicnH/jn9n/G+OKnDu+Q6upqpdVq1cqri/PxvOR53smyLCilcLlcaH/c2Wx2NcMwUCgU6N27d63c/sc33pjW1NQUIEkSYVnOpdFqLHl5eStEl8iZzeZ4AKCStPXUqVPYXVICjUoNnudBKcVl8+V4CsBqtR4J8A8AAKhUKnz9ddX4wb9JDpe/i9vtJgBACPGs+GvXrgU0NjbGcRwHSZI8C7epqSngamNjjOR2f9nW4vEHTleefgIAWMKC53k0NjYmvvTStJU9e/ZM6z/g9pmljA4TEhER4VAplQ67rS3miaLo03EnOkXB4XBAqVSCEAK9Xn9T9S5v/LageyOwLlu6bIbNYY8gYCCBQuCF2ry8vBU6P51FlmFZdmxSYlLJtKnTfldcXJz2g9mcQgjBuHHjEKTXX0yIjzeaTHXDKaX5DMNAdDrRdK0pXtYnYKDT6UApBSFEjnVOjuPAcRw0Wo1nLEKIdL3dZTKZOKfTKTBg4HA4MGzYsE9n5eS84Xa72ddffW3LhQsXws0//BBferI0rv+A/iUd8ZNPTu3WvfsFs9kMhUKBz0+cSACwoqO6mzZtfMbtdoNSCoWg+Fyr091UOzDXg74kueFyuTzzMhgMDVevXgUhBG63GyqVqhkAqPtGTLDZbOrIqMjmlR+sXJQyOKXvt998A0EQ8IfZs/vExsbWAkB5eYUeAERRREhIyP7H0tJ2SZJEGIaRGhsb9Z/t2vUavEoy7/rMe4d4IY5lWVHeZa3OVmRkZBSMGDGiAgCOHzuWv/DttxcBwDcXvul+C/1bwqcYkpCQeEJ0OsHzPA4fOpT8ak7O9I7oFRUV9d+8aVOmRqOBy+WC3qBviIyMtHjLsBznAgVanU6cqT3TW24v2btnyCc7dvTQ6rRH3W63ZwW3tjoEBm07q7W11XP8MQwjMWhzqCRJHmIdDrs/wzBobW1Fj549zq78YOWiVR+uevuDVR8smpM7ZyEAUFDP8eVNgs1qU3scdn18ANBqtW3HIygYMGAY4pb7AoOCzPL8mpub/TriJ8BHQlKGpOwVXS7ToEGPIvfNN8MK8vMnpz322Kp/FBSklpeX/2jQ7du3x2RnTZg/berUVSzL9ieEwG63V2eOf3Zje9m+ERFVTrcIlrBYu3ZNltzeq1cv1+CUwed4jndRSj2L2Nsx3u/lbIq5nsbekGnLpBiG+dGKd3jFsxsZGON54fhbx0uXywVKbyRgkiSxXvPwzJXjuQ5nWj4RMnz4cNMzmZkbdpfsRteuXTErJydq9+7dL06eMqWgeOenI71ly8vL/SZPmrR627atc0FpPMdxaG1tRXBIiDl3bu669rafnzz5H0pBUatQKHD40OHk3Dm5L8p99fVnyfVv6XGmQql0ULQVZEql0iHLiqKTYxgCSZLQ0tLSRW5XqVTXZILap7kefa8YItdNbpcbAi94HOp1nJZaLBZeFF25zHXybHabVpb77rvvwuSCMTQ09FIHXez79fuc3NyFhw8ffnTh/Pmp/925E1FRUbh46dIrL7/88g5vuejo6Ga9wdDQ0twMQghEUQQFvly6bNkrt7JrNBovDR02tOS/O3cKflpd+LvvvDN7w4b1mYEBgU12h0PZ1NSUzPG8hxC32+2Zu3zMAIDB8ECDW3KDF3i8MXv2ZzGxsZezs7NHCIJglWW8axLgJid77Gu1WoskSRAEATNnzliaZDQeqSiviL506VIoz/MA2navTKBarcby95e/9VVl5UCWZcUdn+zI0mq0aLFaznXr2vXbDjv4bu5bysrKArqEhh7p06sXXbZ0KS1cXZhyuuK01lum9swZrmePHnse0OtpgJ8f9dfpyvM/yh92J9tDU1MLANSzIJQjLOUJS3mWowLHUwC0y0OhRyilyJmVMx3X75Bef+2138n6awrXJAOoFziecoSlAGheXh5d9/E6eUP96C7rwIED3eW7Mvku629LlowCUK/gBY8dAFStVFEGoEpBUUMpxZTJU+ai7TNlGeKRU/ACBUAT4uM3++Lbu/qBasCAAU0le/YMnTVz5pLpM2akA9i345Mdkf0i+3kq5l7h4S6rxaJtbm6ujYiIqF707ruz09PTq+9ku2TPnsmbNm5M3LR589O1NTUR165d82NZVgoNDb2Ulpa2a2xGxjYAGBg/8POxY8a8J0kSiY2NLZP1J2RPOGiz2V7KL8if/MNl84Mqtcr260d+PSsgMKBx7Jgxr1MAUZGRp73HDAkJ+X78s88usNtt6u6/+tV5AJgxc+a/JEkihYWF2VcarhhUapUtKSnp+HNZWR9v37Ytw263qwAgISH++NWmq4sTEhJOhIWFnVuxfMXv60ymcJZlpSSj8eiCBQtyfXLuvd5Obt26NS5j7Ni8mpoaoX1f9oQJ85a8996oe7Hf+XtIJ35WdP4Z4T5DJyH3Gf4HNT9kC4poZK4AAAAASUVORK5CYII="

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
  }, "Hey Tech Bro & Sis"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Ryb3Bib3gucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2dvb2dsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYXdhcmQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1bGItMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVsYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hlY2stY2lyY2xlLWZpbGxlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGFydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGlhbW9uZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaGVscC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcm9ja2V0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy90cm9waHkucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdmlkZW8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3dpZGdldHMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9wcmljZS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci13aWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZXNwb25zaXZlLWlmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9pbnRyby12aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3VzZWZ1bC1mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvd2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZ3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9oaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInVzZVN0YXRlIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwidXNlRWZmZWN0IiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJtYXAiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJoYXNCYXNlUGF0aCIsInN0YXJ0c1dpdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwic2VhcmNoUGFyYW1zIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJyZXNvbHZlZEFzIiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiam9pbiIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhcnNlZEhyZWYiLCJjbGVhblBhdGhuYW1lIiwiaW5jbHVkZXMiLCJzb21lIiwicmUiLCJ0ZXN0IiwiUHJvbWlzZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiZGVjb2RlIiwiZGVjb2RlUGFyYW0iLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInBhcmFtcyIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJlbmNvZGVVUkkiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJ1cmxRdWVyeSIsInJlc3VsdCIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwib3B0aW9uYWwiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJBY2NvcmRpb24iLCJfcmVmIiwiaXRlbXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfX2pzeCIsIkJhc2VBY2NvcmRpb24iLCJfZXh0ZW5kcyIsInN0YXRlUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJGcmFnbWVudCIsImluZGV4IiwiQWNjb3JkaW9uSXRlbSIsInRpdGxlIiwiaXNPcGVuIiwiQWNjb3JkaW9uQnV0dG9uIiwiY2xhc3NOYW1lIiwiQWNjb3JkaW9uQ29udGVudHMiLCJjb250ZW50cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwibG9nIiwiZ2V0U3RhdGUiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwicmVzdCIsImpzeCIsInN4Iiwic3R5bGVzIiwiYnV0dG9uVG9nZ2xlIiwiZGlzcGxheSIsImNvbG9yIiwiY3Vyc29yIiwiYm9yZGVyIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJsZWZ0Iiwib3BhY2l0eSIsImNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwidmFyaWFudHMiLCJvcGVuIiwibWFyZ2luVG9wIiwiY2xvc2VkIiwiX3JlZjIiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJfcmVmMyIsImNzcyIsIm92ZXJmbG93IiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsIl9vYmplY3RTcHJlYWQiLCJyZWR1Y2VycyIsInJlZHVjZSIsImFjYyIsInJlZHVjZXIiLCJGZWF0dXJlIiwiZmVhdHVyZSIsIkJveCIsImZlYXR1cmVJdGVtIiwiVGV4dCIsInN0eWxlIiwiYm94U2hhZG93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIm1pbkhlaWdodCIsIm10IiwicmdiYSIsIlByaWNlVGFibGUiLCJwcmljZSIsImlzTW9udGhseSIsIl9wcmljZSRhbW91bnQiLCJfcHJpY2UkZmVhdHVyZXMiLCJwcmljZVRhYmxlIiwiaXNSZWNvbW1lbmRlZCIsInJlY29tbWVuZGVkIiwiaGVhZGVyIiwiSGVhZGluZyIsInN1YnRpdGxlIiwiYW1vdW50IiwicHJpY2VMYWJlbCIsInByaWNlQW1vdW50IiwidG9GaXhlZCIsImxpc3QiLCJmZWF0dXJlcyIsImZlYXQiLCJpZCIsImlzQXZhaWxhYmxlIiwiSW9NZENoZWNrbWFya0NpcmNsZSIsInNpemUiLCJJb0lvc0Nsb3NlQ2lyY2xlIiwiQnV0dG9uIiwiYnV0dG9uIiwidmFyaWFudCIsImJ1dHRvblRleHQiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwicHQiLCJmb290ZXIiLCJsaXN0U3R5bGUiLCJtYXhXaWR0aCIsImxpIiwic3ZnIiwibXIiLCJwYWRkaW5nUmlnaHQiLCJVbHRpbWF0ZUZlYXR1cmUiLCJJbWFnZSIsInNyYyIsImljb24iLCJhbHQiLCJkZXNjcmlwdGlvbiIsIm1hcmdpbiIsImZpZ3VyZSIsImg0IiwibWFyZ2luQm90dG9tIiwiRm9vdGVyV2lkZ2V0IiwiZm9vdGVyV2lkZ2V0IiwibGFiZWwiLCJ1bCIsImEiLCJtZW51SXRlbXMiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJDb250YWluZXIiLCJmb290ZXJUb3BJbm5lciIsImZvb3RlcklubmVyIiwiY29weXJpZ2h0IiwiTG9nbyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdhcCIsIm1iIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImJvcmRlclRvcCIsInBiIiwic3BhbiIsImZsZXhXcmFwIiwibWwiLCJIZWFkZXIiLCJtb2JpbGVNZW51Iiwic2V0TW9iaWxlTWVudSIsIm9wZW5Nb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwiaGVhZGVyV3JhcHBlciIsIlN0aWNreSIsImVuYWJsZWQiLCJhY3RpdmVDbGFzcyIsImlubmVyWiIsImhlYWRlcklubmVyIiwiaXNXaGl0ZSIsIkZsZXgiLCJuYXZiYXIiLCJuYXZMaXN0IiwiTmF2TGluayIsImV4cGxvcmUiLCJjbG9zZUJ1dHRvbiIsIkdyQ2xvc2UiLCJNZW51QnV0dG9uIiwicHkiLCJ2aXNpYmlsaXR5IiwiZmxleEdyb3ciLCJtYXJnaW5MZWZ0IiwiYm90dG9tIiwic3Ryb2tlIiwiSW1nIiwiTGF5b3V0IiwiTWVudUxpbmsiLCJ0byIsInNweSIsIm9mZnNldCIsInNtb290aCIsImR1cmF0aW9uIiwiTmV4dExpbmsiLCJBIiwiTGVhcm5Nb3JlIiwibGVhcm5Nb3JlIiwiSGlPdXRsaW5lQ2hldnJvblJpZ2h0IiwibG9nb1doaXRlIiwibG9nbyIsImN1c3RvbVN0eWxlcyIsIm92ZXJsYXkiLCJ6SW5kZXgiLCJyaWdodCIsIm1hcmdpblJpZ2h0IiwiTW9kYWwiLCJjbG9zZU1vZGFsIiwiUmVhY3RNb2RhbCIsImFyaWFIaWRlQXBwIiwiY2xvc2VUaW1lb3V0TVMiLCJvblJlcXVlc3RDbG9zZSIsIkNsb3NlQnV0dG9uIiwiUmVzcG9uc2l2ZUlmcmFtZSIsInZpZGVvQ29udGFpbmVyIiwicGFkZGluZ1RvcCIsImlmcmFtZSIsIlNlY3Rpb25IZWFkaW5nIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsImNvbmNhdCIsIkhlYWQiLCJkZWZhdWx0UHJvcHMiLCJsYW5nIiwiSW5kZXhQYWdlIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiQmFubmVyIiwiVWx0aW1hdGVGZWF0dXJlcyIsIkZlYXR1cmVzIiwiSW50cm9WaWRlbyIsIlVzZWZ1bEZlYXR1cmVzIiwiV2lkZ2V0cyIsIlByaWNpbmciLCJGYXEiLCJjb250ZW50V3JhcHBlciIsInRleHQiLCJjbGllbnRzIiwicGF5cGFsIiwiZ29vZ2xlIiwiZHJvcGJveCIsImlsbHVzdHJhdGlvbiIsImJhbm5lciIsImltZyIsImZhcXMiLCJTZWN0aW9uSGVhZGVyIiwibXgiLCJteSIsImxlZnRDb250ZW50IiwicmlnaHRDb250ZW50IiwibGlzdEl0ZW0iLCJjaGVja0ZpbGxlZENpcmNsZSIsImgyIiwiYnIiLCJzZXRJc09wZW4iLCJzZWN0aW9uIiwidmlkZW9XcmFwcGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJ2aWRlb0Jhbm5lciIsInBsYXlQYXVzZSIsIlBsYXkiLCJvdXRsaW5lIiwibW9udGhseSIsImFubnVhbCIsInBsYW4iLCJzZXRQbGFuIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJoYW5kbGVQbGFuIiwicHJpY2VTd2l0Y2hlciIsIkdyaWQiLCJwcmljZVdyYXBwZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwidGV4dFRyYW5zZm9ybSIsInB4IiwiYW5pbWF0aW9uIiwicm9ja2V0IiwiZGFydCIsImJ1bGIiLCJ0cm9waHkiLCJkaWFtb25kIiwiaGVscCIsImF3YXJkIiwibWluV2lkdGgiLCJjb2xvcnMiLCJ0ZXh0U2Vjb25kYXJ5IiwiaGVhZGluZ1NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2Vjb25kYXJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm11dGVkIiwiYWNjZW50IiwiZGFyayIsImxpbmsiLCJtb2RlcyIsImZvbnRzIiwibW9ub3NwYWNlIiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsInNpemVzIiwiYnJlYWtwb2ludHMiLCJsYXlvdXQiLCJjb250YWluZXIiLCJ0b29sYmFyIiwibWFpbiIsInVsdGltYXRlRmVhdHVyZSIsImludHJvVmlkZW8iLCJ1c2VmdWxGZWF0dXJlcyIsIndpZGdldHMiLCJwcmljaW5nIiwiZmFxIiwiZm9udEZhbWlseSIsImhlcm9UaXRsZSIsImxpbmtzIiwidGV4dERlY29yYXRpb24iLCJuYXYiLCJpbWFnZXMiLCJhdmF0YXIiLCJidXR0b25zIiwibWVudSIsImRlZmF1bHQiLCJ3aGl0ZVNwYWNlIiwiYmciLCJwcmltYXJ5TWQiLCJ3aGl0ZSIsImNhcmRzIiwib2ZmZXIiLCJmbGV4IiwiZmVhdHVyZUNhcmQiLCJmb3JtcyIsImlucHV0IiwidCIsImJhZGdlcyIsInJvb3QiLCJoMSIsImgzIiwiaDUiLCJoNiIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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LEVBQUUsV0FBVztNQUN6QitDLFdBQVcsRUFBRTtJQUNmLENBQUM7SUFDRDtJQUNBdUIsRUFBRSxFQUFFO01BQ0ZuQixTQUFTLEVBQUU7SUFDYixDQUFDO0lBQ0RzTyxNQUFNLEVBQUU7TUFDTnpULE1BQU0sRUFBRSxjQUFjO01BQ3RCMFQsSUFBSSxFQUFFLHFDQUFxQztNQUMzQ0MsUUFBUSxFQUFFLHVCQUF1QjtNQUNqQ25ULE1BQU0sRUFBRSxnQkFBZ0I7TUFDeEJ1RixNQUFNLEVBQUUsaUJBQWlCO01BQ3pCakUsUUFBUSxFQUFFLG1CQUFtQjtNQUM3QkMsT0FBTyxFQUFFLGNBQWM7TUFDdkIzQixRQUFRLEVBQUUscUJBQXFCO01BQy9CRyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCZ1MsVUFBVSxFQUFFO0lBQ2Q7RUFDRjtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7QUMzV0QsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci04MDhmYjAxYmFiM2ZjNjM1OGQ5NzViNzI4Nzg1NTQyNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIc0FBQUFZQ0FZQUFBRGFwNEtMQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWk1U1VSQlZIZ0I3VmxkVWh0SEVPNmUxUSs4eE9RRVhwOGdrRXBDcUR3WW1UZ1ZRYVdNVG9BNGdlRUV5Q2N3bkFENUJPQ2tiTG1TZ09TSEJPT2tnbklDcjA5Z0pTK1JoSFltM2JNL21sM05DaWttWmV6aXF4S3NkcWRuUnROL1gvY2lXSEJ3Y0RZM085ZmZBUVhMcWljcjVmS1NCeFBpV2ZQbGZhbWdxcFMvdDdheVZJZHJYQmxnK3NiVG4wL1hoWUI5QlRBM0hDVnE1ZExuRDhaTjlPT1B2OHo3dWZ4REFMVWMzMVJZaDc3L1lCcGp1Y2IvaDFqWmpjYUpDMFZuUDZHc0pEenc1V2I1N2xMTHZCbEZBYVZnSzB0T0t2bmcyc3ZmUGJTeU9mU0NVcldFTjJmQjhOWWZmanBaemptQ0RBVGNDK1VBVzlEek56OTBMOWRuSXB3TnZsWWcvMXhkK1hJWHJnaXdjZlJpSHhDcjB3Z3B3RGI2L2pZNG9nbFRRZzRHQzJ2ZmZOVk8zMzk2OU9zV3pXczFObCtKZHY1Y3R0OEhRMmtjblZRcDdlMEgzN0JWdnZORkNhNEljdVdWTHpkcGc2OFJ4ZjFKUEZzcHRkY1RoVnJsN2hjZGt0dWtIN1lEazNvMitwdWthTS82bE5aSFFOZjJUSEQ4S1FvNnlKZlhIT0F0SVBoUGVXV3BwbEF1VU5oNU5HWXM1K3dTaGFXdFNtbWhFOHJWdTFoWUFNckpXVUtrcHc0WnlEWmJlTG4wbGtwQ1ZTV2xOdythWnhlbm0ydU1JQmRkaElxb2tyZTJScnlWbE5rVk03dVZ1NEdTVFlTS3J6V2FKM1ZRT3F6SGNvaHdTQWEwdlhwbk9pVkxpaDVDcWtPOU5JbzVFSElkUVd5RWo5MVoyZWN3V2VFdk9teUNjeHRCZGI1ZFdkeG13amd6TjdpUFVzNHJ4RGxaekZYWHZ2cjBOWStObnBIeDBYd3FOQmowYUtNdDZBNGVtUkhqQ1ZVWHdzbmYxM3RRNnZIcTE0dUhRWWptZkt6YzRGeElib0pJdzV5SUNPdzZ5MUdxNnFDQzlqZzVYUkVoYkNpRWViMU1LRE9RL3FQdlFvS3NxNTl3Zi9yTS9QTTlNejFxd2wxd2RxTHYvQnZRdGhncHpxWE4xUkNjbXc2ZWIzOVRHczJ4V1hoNjlHS0xqR1dEYzNxYXVZOUQ0L2pGS3pwNFYyOWN5YzAwZTZkNWR4RXgvbkVVVVQ1bVEzdDZmRktQRGFFbmI3SG5nMkZ3c3BoM1dkbU41dThicVB6ZE1hbktJejVSaVE0c0pKOEJKMEVpcFd3VVN0YXNrdWhVeTZYUGRGUk01MnhFMWM2c1ZBdzVoamJHRytjSFl5b2lDbTZ3eTBhdDF6cCsyVFRHZWh4bG82aWI0bUw2bWJCTjJPM01kQVNLTjN6dGQwVUhwb0FRUXZGL2hlcFNRMjFQRkd1Y0VxTHZCZGxkVDQrUkJlUkRkZFAzdFpVcnZ4NHBXcWNXSU85aUhqR0U2K1J5VFQwMkJWTFdQQ3Q2S0VjcHpRQWJrVDIxcUdWV2RMQnZ2ZFpZdVptUGVnOVRpdmJTY3VUdFcwK09UbXA4M2NWOHhYakdFVTk3Y21Cd0J1bEdXV0lqR0ZFMmg1RFpHLzFYZ1RYU3drWHhxdEg4YlFjdUFJY1Z0alFLRjdzVUl1ZFJPQWRFcVBadGgvZGZ3SnVWaWNQQytmUVlRWjdQQjh0cGdHdDcvdlQ3K0ZmUVA0amhNVDladmJPNG9Ka3l5bHVSRWJFeGhBYVRBUCtlcE56aUxlWWgwWE9XSStPemVpK25zbit3Y0V0ekZwSXorWTBweDVFa29TQWF4K05qT1Rua1V3NlJXVFlTN2NYVSs0aEZBa09vaG1rNHVNZDhLZVJLc2JKWkthd3NGSEF3RXVySXFodkhwNjlzaXVQUTg2eDUrdERQNWM1R3drOUlxUFFHTGdIRTFtUFBwZ2h5d3pKRUsyU05TQ1NsZ1JwL2d0dkd2cmd4WkJCRnZ2YVYzSXUrTzRnYjlzVmxnbUJ5L1d3U1dsTEFQWnNZYzVZb3RPcjE5SjZHRVlVTVZCdXRJOUNJVkZTeXhYc1AwSFZtdGt5ampDS2JUcFdHQVFrMCtoNlVmc3c2WHl1YkNRUVd4ZG00WEtFbklDOS9kblQ2TUZJNlcrUE1qZjdabU82Wmx1TU5rTnpCWlhsNU50U2ZhY2FmRzNRVEVjREtJM3puTUo2QkR2TEpMMy9jTkIveklkc3FDY3FmTFZOdVpGNVdta1ZPcWNGalk4d24raStLVDZJN1V2blAwekk2c2hucm1aRXRiVUFodkM3a3Q4MGJnaE01aDk2SnVtY1FoQXBWZEE0NDNJY0V4cDFRYnAyTmhWa3VYQUtrOUYrUDNGTnFZaUpwUXVUOXNieEVHVnpCeEVBbWNyQUxFOEtNVUJudzdJTHlyK2d5SGRrdy9kdXBVakFqaXBiaHBzcTRPbmwwUWF6M01GL2lVb1RrTmpNM05pclljdERlUFpzRVFWUklrNWVMSVpTVCtNRTJJaVhQbmNROW5lY25nTU5sWVFpMEdNU3d2RXV0bHpBTVl2bWpjRzF5WEIzRmM4aWg0dmxzMkFtVGcxVlZWMFlHNHFZS0V4VVNPSVJzNktaS3Q1UGZub1grRHVkdzZFT0xLVDEzMWJLRXpLYktOQ1hjQ0daeWlWeEtiK1phazRqMTgza3ZNVTBxckRNY1I4Vno4MzdUSGtGd0cweWdVcUN5S3M3VDNFSk9QNmVJTUc5TFhRS2QyOE52Z2RJVURDTlY4bmtBbmlja2l0SHM3ZWgrV0c1R2E3YUg4K0NPdVg1TTBEaTNySllXS3padlpXV3lVZ2QwYmVSb25jT1o3bU5mN2JLeHdJaTNZVXN6MkNsZkJnZ0pMdk1CL254UDZVTFhqR2FOUzlGbDBtNWNvRGdqbjlHTG14OE14ZW1HaCtFVjFJaXhHenpKbVFlblh4NFo3Tm1XWi9WOGxQSWl1WWpNbWhHS1VvOWVEMzJvRzFMTFhBRkZjdHB6YVI0ejFjYkdYa0N6QWViMXNGQWlMaEUwcEdnOHk4VXk2YzF4QzVTWlo4QTBnOURiKzd0WTQ2NlZMVWZyZ3lMTGtoS1dqZExDVXhJcS83bEY2b2dkWG9zL2Vhb09VaTlxUEdKVWs2Y2RocDhZNy9LOHo0NVAzMUIwVXN4WEpweGJHemRITkpaTnk5SGgxeTB5bnZaR0pyWWtRNDd5SmtWbXZhaDVGQkJId3lqWnVFTTUvcC93YWk3TDZGeDFTV3lwcC84UmhkaGhXWTVKTlY5Ym15cmF5KzhzVlZsWkV2SzNkZDNOQkNzYm1uRnpYVTJodmM1SzF6bjlrc0UxSzBlWWFRMG9MRTgyemJ4cUlhUWVHWFlsWTI3UDREV3VLY3R6WnNsUm5mOG9rck90eDhwSjNLRVhSV1lZdHNseGxPVzBHelNLakdnWEdnQmYydXB2VGtNNUdBTzJISlhWSXJRaHFLc3BCSjFNN2RHMHpsN1dLMDdCWllTWU9iVGtVanBSY1NoUmVucWN6TTdqSExGb1h5MGxxUytPT1oxckZSRW82dmQ1RXZ6blBURmJyNVFXTzJQa2E5U1pJazhWOXlRRzBZME8vamsxREhlSmkzalJPTWVYN1hNSEFzUHc1V0daQ0dsYURwVjhyTjgxcEg1UGVHWUxYT2tFN3dPY205RWVmVkN2K1gzQmFsUTZGbUJaR3NSNkxWV1hzNEh6VzhtSURLTEFlWVFMMEJoMlpOeUx4a1l2UHQ3NjdkWVZRS0kzVHNhbVU5UjdEbkhSZ0dRT3o0Um02dDhTd2ZzUUZQMmg0a0psTTZJY1BvNnBUL09HNnhydkJybHBCcGNENWxpbjBGNVQ2TnpqMTVpckg2aVN3MlpNUzM5Umt6YU9yamIrQlorMkFzUUxqa2JTQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRlVBQUFBY0NBWUFBQUFRb3ZQK0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUF6TlNVUkJWSGdCN1ZsNWRGVFZHZi91Zlc5bXNnY0NDU2g0QkJWdDJVU0lFTUk2RUV4SWdPSkM2cUVGV1FTcmJiRVZlK29weHhxbGk2ZkhlcXpMT1dKUjdGR2twaXBVSUF0SkdDQVFtQkJXVWNCQUVRaHF5RXEyeWN5OGQyOS85ODFrSVU0b0t2M0RITCtUbWN5OTczN2Z2ZC92ZnZkYjdtTVVnc3JLeW15VmplYnRKRTBuazdxVE1Ua1UzWDBaa1pURUxqSm1maUpJTDVMY1g5UmNXZkZKWm1hbVNUMkE4dmZzU2ZCNzdVbnF0OGJsRjJsVDdqekVHRFBvYXhMcjJyRitTM0h2dUhEN0NzYm9Qa24wQTNUcElSa1o4d1BoSThUazJ2aG83WTNFeEVRL2ZjY3BaM3ZwRkVieUE2dkJXSTQvbWo4MEp6R3hoYjRtOGM2TmJSRGFPOXhXREtpekFPaHdDZ0FxZ1h3bEkzWUNmU2RocXpVU1h5QWJIaVdTcEZlckc4U0htemJ0dklHKzR5UVlRU2VLVXgrQUc5WGFHTWJwRzFDN0ZXN1pYanpHa1BKRldPQ3d0ajVZNjhkU3N2V0NzOE9heG1xWjE4dHg3UHRncGpGNHVCQ2czaFJZak93WEhhMS9vd1gwUkxKQUxTcmFjN05QYXYrQWhRWUFsZkp6V09icXZqSGE2OTBjNnkzNStVZWVremJQWTRMNE1OSmFmem5kT2JtS3ZpZUxMT3N5bUcwRkJTMFVmcktGYy9hN2hwcXpWL1NUcWFtM056ZUVpZWY4aHUreG1aTW1WZFAzMUU1NnJxdHNvcERtQTFaTGtwZHh0dnBTMVdkdlgwMUV6MHhPOXVDZmg3Nm55MGlYNUVmRTQ1RldpMUV0NS9MZC8xZUtsSjJkcmZVWmVHdC8weThqREllM01qMHBxZUhyOEc5MEhlcmxJRzlVVTVXblBqUFQyWFMxZkFpcWJPUEdvcml3M2xIaDVLbXRTazlQOTlLM29EVnJ5bXpYMytKTHNQbkprNVkydmc3QXljN1BXWjZyTkErVHBnWW5meUY5ZXRLdjZScVNBaksyejZBSmd1U0RDSHl6TVh1djRDTzFjUjlMSnQvUy9mWjM3cnByOU9kZGViRWV2blZiMlZCTkV3c1p0MUs4UVdTbGdVemcyWEg0L2JlSjIvNlpOblhVV1FSWTJaVS9CN0dDa2JZSXJ1MG5hQTYyWkpKc0JQOW1LZmlibWs1cEpFVU11bXRpSE9iVHRWNTlnaVpsZ1FVTW8wME5GTGtnMHpuYzJyeHNseXNxeWd6TFlKd3ZRM015UGpaTEhNbHorSHJEWnRQZm5ERXA4YnpxMDdHNDlsU0lhV3hYZCtDVWxKU0UxN1JxdDlwMG9kRVZTQnA2YzJQMW1WUEsyaFVvdVVYdXV3SG9Id0RGYlYyMFZuSkdBcGhuRE4xSTJseFU4dWpzNmNrWExnTmx4NTdSM0daN0NUOFQ1V1g1c3VSTUJWVXBueWJwbTFpNCs4QWo2RHpYbVhkcm9mdFdqSHNaNkRpcEV5L21pMGJjdUo4eGNhY1FOQUE3RklIdWlrcXY5MWxiNkpRY2huSE1Ia3ROdjBBV3RCTE52cDBlcVEyK0VkQ3VNZ3h6eEpiaW84dG5UUnBacDZURXRRL2grbW5xaHVxOCttMDZ5UUpwOEw1MEJXSWtUam5pZmpnUlB5dHpYTzY3b2IzS0tpSXNLQmlWNCtzZ2NrRHN2cndSeW8ySGtwRm8zNnN6dmMrL0MvZmQvNk9VcEVvbEptK0hleUpzZVNONCtpZ3J4Tmd2cEpBSEFHWWRJTzNQSmQwSksxZFduK0gzR1lYYmR1N0x1R3RLVXJtYUozK25lN0JoVWpaazN4NWNWaTBFdUFId1JmeU94MmxWOHc2aHE2Q3NyQ3dlMDdmcHQ2Z2tuNlpBc2VUSFpwWVI0eDloM2VIWTdMSG9IUUpnNzlQOG5yanN2Sko1WEIybGRrd055NlMvRldHU1NJZmR5eUU4amt1MnFnMVEwRDdURU11TkdMN0V2U3QzT2NCYURMQitqL21iZzV3VDdTVG1xbDh1MXhtSEZMUU15WGh2NjRtVUY2UVFLMXFKRnJtTGN4YzVoTEVZNS85SlRHYnhRczRnSWZsUHMxeXVnS21aMmpKT2JHUndQVlZRY2FVV0ZyNm9xZnJzMGlqZHRnamRqNE9uNW1yMFNaemdWQ2RzbWFyUGxXUUF1Y0VVY3FsN1Y4N0RBeE1pSDBUM1E1akZjbDBZTURiV29jL1VzV3VWbVBsNjFTbVlid1QrSFFnbDNLNUgxQnErNWsyc0E2UU9JQ1dMaHB3MEN2Z1pzeG1GWFlURzV5S1RHS3BNREl2NmpETnp3ZXdaeWFjNnVMSXE0Ry8vRmgwL3lNNGtRd1VuSFZMVFZ1N2VmZUtkeHRiS3djVFpQQ3lTdzZKcVlQMXpVMU9TT3EwclM3bUpsM01LUyt0Z3hPdlV2QUI5Y2JMZHRpYlBkU0JDU0dOcFFFZHEwaGw3Yk1iVXBQV2RmRzRWMXJSdTI4NEREb3o3SytTSFV6Y1VGZTdnck5sK0w0QlRiZ0o2aXQxaE4vVi9LRzN3NE5iQ1FuZWZzMTgyajljNHpZUCtjV28yVEJBRjJRczVScDdwQkU1YWR4UE1tRFRzZkh5czlraERkZVRpcmgvcEZVKzBSVUFJclF0ek5FcXV5ZHZ3Mng1azM1bm03QXhvZ0pUZjlRdHpHd0FOV0J5eFhwZGFhbTRXakkxRk04eVNSM0tmMlVybG9kWVVybEVSUmdSZEZoL0FEZnNBMC9BajM1WUJvQmpWUzU5L1c5Y2dwdHJ3Z1VXWTc0b1poT0c1WkdlTUQyRnQ1VHhqNy9nKy9WVExjZTM5c1orejF4QTgxMEx3d3VCcE5HRnd4VXp5dDNWWVNRR09ZcnBTQXBPazVSZVZKS2RPVHk3NTZoUk1KaVpTeUdJZ2Q4ZitEQkxDQXBBejdaaWg2MTd1NS8wb2VHR0RRRlZLM1pERGlEZ3BiSzBLMURqc2lBUFJ2RDhuY1hQN1hROWp4NXVhemphSDRxMmk1cVpvaWpoSjFzV1A1RjYvR0F4Ris0QXBMTWg4S2pWMXdzVlF2QmtwNDhwenQ3dVJDY0RIZGtQU3orMVNOeFBhMnB6eDJhWWUrd3d3NjZlMkd5dFVsMHFIZ0YraFhkUFhwVXdlZlVKdEdIZUU2NFdZdkQ0Z1JVWUpwaTNKS1M5MzBGWFNGdHhxTVNIbUI1dUkrT1pSVVZmbkZTU01Ub3ZwOW9qWkU0UXRjR2NUV0FIbldDZ2pYOXR6UExERng4ZXpVTHdPbXcwNmRJUnNuZGw4U0dITWpyeFJoblUzTDY0M2RRcHhTM2VaL0RBaENaVlJXeHNuYnhZbTdCZjRLVDhTUWp6QmJISlJSYm0yYXNhVU1jZmJUZ1IzSm84NUJjNm5JTjhMcTlDd3lDVzhvdmE1bkYwSDQrbC9FS0oxUHkzQzhSSWluUlVVWUpMbnVNN2VuVDE3TnFvc2Rob3J0b0JsVXN3dE9YOCtKTEMrZXQ5VXl5ZVI1Wk5haE5SUGFkeFcxcTRJMFFTZlBTNHVGRzlrcSswNkRFZ01qdk1ZRHZNVHFIdEt5UWt5RDhuYmZYaFlLTjdhQmprV0lQU21LNURIMUR3NCtLY0Q0aTBrbTZEckd0akxoTkxpY2FNeVVzWS9QM055MHRIbHk4Y1lDSzVocXNoUTR5eGZZUmZzZllCY0VPQlRtVFV0WmFieGwveDg5K0R1SnR4U1VIb1QzUGp6WUxrMzZITlU4dmhhNnBTeG42a2QwNWg5UDQ1OXNJUmxJK3BQZnBuUk5ta2I1Ujg1RWltRVhBRFVMY0FSV1QrTzRKY3V0RWpmUi9DbFh3YUJHV0Y0UFBPNnpxOHUwdjFjUGdwdCsxbThqSTZaaGxaYjM5eHlGTTIyeUI0dHZONEZhbXhuM3V4angreVN6RXdFbmlpNkF2R0daaE5hSFlKMDYrUkFQNitOK0ZzelV5YnN6Y3JxeUpyVzUrWkd0NHFxMVZzTDkwOFA2Qkdrbkp5RDhTemN2d1pLektGQVlxNUlXZHAyQUwyTGNWRkJRb01rYzZETytIaWtOTk9nU2ZCNHlWYWtEaTlKWDgyVGJTVmdWcGJrU1pQZGNPUnNjUkRZWm9EMmltR0tBdUphQzNBZnBKRmNnZWZqQWlMa1JSeWxtV21UeHgvTXpwWmFUTjlTNUlhRWxJc2NBYVhFbTBqVzN6TUVxN05wNGpyTytWS3NhNWExVmthTk9IZy9TM1dPM2FBMmRHdUJlejV4c1RiZ2RwU05pSDhoeFhvTGJ6S3FKT040ZzhFZUFNKzhZSnFrcUtLVnRZeXdVV1JpMTRySzJobHEvaEM0T0FQOTdJeVEvbWNsT1k1d25IOXNEb29NOWpneW5WRVdYb3ovOFRMTHlYWHRIUVJ3Vm9QemZ2cktqYi9hR2N2U3V2b2hBQy9YMkFTdFRna2s3dTJrcWhxTnN3Mnd1dEhCTHVXZnZvREZlb0srS1NiWTc0ZCtmMjRLTTU0Tlh0TFErem11Z1pGaEVldGxvQ1MwWU1mZkJZeXJSNTRWRDBENnRhK00yRHJSS242Vm5oNjRTeWdvSzRzMUdvMlhjVERtQjA0UjFpNUZOZlNxaGhBRU1wbkFGR3dkMUMyb3Frek5MeXBOTnBsOEZ3d0RnelBDdlloemtLSDg5MERvRnh1VTB3SVAvSEJJUjUyenZXUUtNTVZEbVV3QlFWM0hvYmlSRjNFYzlxR3llWEZ2Y2U0T1ZCNGlsS3k4WFdYWGtXaytBNFk1V0dsOEYxa0FrNDdpODN6R3RIRWJLT2k3MmtpNUI2UEc4eFRtbUEvZUFaY3RRRnFDUHNYWHE0M1ZaMTlCZXVici9GejVPSzlaK1J2NHBDVlErc2JPSUlLM0hxMnQyTndNYkc2dmRsRE5pQkVJbE5rQlVGbWV2NUgvZk02Y3dPdVVyUVVsSXhqWC9nUytxV2gyZFJzNG5Xd3ZyUFRKbWM3RTNkMUd2enhVUkRKQ3YwT2E0Zzc0bGFFQjZ4QklJWGt0L3AzRXhjTGhGcC8vNEQzZHBDeWRxYUNnSU5iUG95Wnpway9GVVZRMWV3UnMvbk5VVFh1eFBkdjM3L0VlejhweWhuekI1c0pGaHArSEo1dUN6MEFSTUVxZzBPQk1ZZzJzRkVlNW9Da2hmSC9tOE9HK2JuZ0JiUGg0QURzVHpkRUFNUXFLbjBhMnN0bFA1bWs3MXpjSGZYS0ZyOUUvMU5aYmhIRlRIMk14QzNiUndaT09PcDBkTC81d1B6RkFZOXAwZUJnbnR2OFdxemJCaFFvMmRxZGRHSVhUcGlYL1I3a2ZSajJVckZzbHd6R2tLWkpPdExtVXpwVG4ycHNDRS9rQUlFVEQrZzZuT2NmZFFkZUlldVI3cFp3aTk3UW9HZjRpMC9qYUdDOU42ZnBjWFVmQzh0V2xUekRySURkZFE5S3BCeElPWUFxYzRpSVZXSEZ2K2pvQzhDcDA3MkRlNkFhZm96VkJKekVMMmNMakZOQy9RUXJ0TmJxRzFDTkI1YWJuNzRLSHE0djMwUUFYbDBVcW4yWkhwSzI1VVJlSS9Jemo0a2lxZWwzNXZ5MWVSMnM1WFVQcXNUNjFBTVdKWDVjdndDSm5VUEJ5cGdzMXdaKysxMUJWdXpJek02MldyaUgxV0ZBVjVlZVgzaUEwT1krNHZBZXFqa1RlaWd0eFVZM001UUFKYzJPRDE3OHBNLzNhdjFyL0w1SDUwd0VEK0tiNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQXdDQVlBQUFCdVpVamNBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYlBTVVJCVkhnQnJWbGRhQnhWRkQ1M1p2L3lWMWZCV2hCa0l2UkJiY2t1V0gwcHVFVWZmTkw2MXRaQ1VyQlFyWkRtVlpCbThja1hUYUcxZlZFVGFOTlZxbzJDb0tCMGduMkl0cERXNXFrdGRpcUlwa3JaTm9uWlpIZm1lczdkbit6T3ZUTjdaemRmbU96cy9UdmYvZTY1NS80c2cwMEFueitZdy84Wk1ObEx3RmtHazlMNFBWM05aVVY4ZDRDQkF5NmZ4WGViWmFldlFaZGcwQ0g0L040MHhQcEh3V1BITmtocW0zWEFjL01BSG5haTRFQUhpRXk4TzhLU2VleUFkNEpsejAxQVJFUWl6dWNQWk1Bd0wrS2JCWnNLNmtCNVR4VDFEZDJDL1BxYncwajYwdWFURnExYllNVG0rVzhIOStyVzBGS2NYejk0SEQvR1E4dDRIUGg2QmJ5MUNyb3V2cnRlTmNOZ3dHSW1HQWw4VW5IUXNEYkNoczVOdFN2VmxqaVNIc1dQUUIva1pSZmM1VFh3VnN2QU9ZZFFZNHlCMFJNSGN5Q0ZuUWtiN1Bia1E0bnorWDAwaEhlVWVhaXF1MVFTcER0QmJFdEtkQ0FBUmZBcTJUQ2ZEK3kyaUI1Ry9KSXlyK0pCK2Q1U3g2UUpsWWNsV01jMnFDMEYwSGJzWWxqOTRQRXlNT1FwSnFJZy9lL3loZzhIZ01YN2dQVnNEUzFEYmliYVVwUFBvSnVPQjdhdmJEREFSY2c5U09sMnBBbUozS2ZBVnhlaC9NdDdiY3V5dUFtSnJRT3FMSFNaMkNETFRoYjlHV3JGVGZPNEtwbDhXb2UwOGVUTFFtM2pzWjNpYVFjeHdkRjFGRUNYcVJ4VDJnQmxTMFpPU3NMaDFQWHAyUFlEalhkeiszNnRPaFVTUmVreWJGaFZYaUplMnpCWi9uUlNXd2QxdFJ2Zk5WVVhObFpVd25DcnlzbG5SMUZTV3IyRTJ2K3RndzZhMWE1RFYzV3lRZk5JQnM5SWRxUXlESWI4U1I2dWlFR2c2QUU5VHdBYkdBUmp5NkF5a3BEaXNXZmVBdS8rQWs3WWU4QWYvcTV1akVpanYwTlNvcFVEM3lLb0lpNzFqcSsxRWpldDE4QkVsNEI0Zjl1UXQxSG5kZkUwMnFRT1lOVHhuRy9CWFp4cnBMdWxNc1Q4eEExREVsTW1MZzRCUHVLK1NNTG9iOHZUMEEyb3cvUjRUYVJWdG1xcEVxY1dIeGZ4VzFYTk45c3J6amZnM2pvUDNhS0NiYmlvZUF0YzVYNG5uSGdrbzdlbnV5SXZTR01ibmNKSFBGVlVGV0tHZWkvV0tmbHVTUk5haU5lV1ZwazhMc21CSklpOGY3aEQwSTQwU3lodFNZZHJsYXM0VXFFUTRnU0tEcnBvVjlaSUt1SUZBNDI5aWdlelVxR2U4Sk9MYmtnVWJXR3NEMjByb1NEdUtqZ3A2czVJalptR1dva0dHZjNReUhDeENteW5OeEUwbjJ5cHJGd21SdjRrRFUzSWFRVkFRZHk3ZndNNFBuNkV4WDg2RmNuZ0RzdWV0YVd5VXNNNFFYRlRNNFZkR20xT0o4Vk5QT3pTeXRhU2prUllySytGTUVVYXIwYWFWbGdUOXk5MWR4SUxEMjRUZUhtbHBSMnpQeWxHVm9FWlZXTEErRmR3WHhBYmxRby8yZ3VlL3lCUkkrMG5YSWY3NTAvaWFlNEFQYnk4Y1U0aHdvRWo2cmtuVk1tQmgyVlVmY0t2dWtoSDB1WEZwWllUUFExLzRNYkpiOUJYbGtqSEgrOFBVanZQaHM2T0s5dUJRT0lqZFBvZ1daUjdsL0kveTFxbm9UQ0VrMGJmSGpvWEdJSUNsM3p5OVk5KzZKa0pNMmhpRk9nVTVOTnhQR2NHS0ExSHBnYnMwUHBCR2JrRGh6TTMvMHFjb1NISlBPVksrUlMyS0w2TE1Jbks2NnBQY1RxT2M4WHNTNG9MSWhWTy9aaUNuMi9HTTlhT0YyZWRoVjhkVlpuZzRNd1Q0bDVqOG5KMTBnenZWcDgzaWJpUjdCZkU2VFpMWE1HaC96ZDJsSFFGaHlzdnJiNGhjYnFCcWN0SnVIQTFXZXNscDBPN3JTcW5WRHkzNzUwUmxHT2svdjNhSHpFSVVyNE9NUUtvSnJtUGVOQVZ4SVBLbWpReW1CZWtjQjJrOVBSY1MzU3hyQjI3N2pvTFY2UzlDcE5KSDdIUThlZ0d5L0xuN2Q1ZWhxT3ZsR0RiSTkxTlNqLytmbURBKzEvM3d1MUZwWTVGV0kwUDJqTVRMWXVpWW1ZWWRCMWdxVnE0ZkNzT1k5Tjk4UDBOblZ2WDlsZ3VNZUVhaHovckR5Sk5TRVB2dW5TMzBxSjRUZTA3b0FGU2ZYaDNTYmhQMUJFZ3dsOWRUY0NGSzBsWVh0TzY2UzdpSk1yYWhUTk9QYUYxY2hwNGc4VkJDelM4SDM3WEs5N0poVDU0WTJVS25YZ0lwYkJBanYxb0dMZkwzSnNkS3d5TTBweUppRFFLK2psKzdxa25OTHFiMi84MjNxY1lGNkVUY0ppMEM2Y09OYjdTVFMra2F1UkxSWmFkS1c3WWVSZTNFM3dVT2dGbmUrekNTWnRlbTdwdWZBeWR3Y0ZBbm05T3FCRlZIZ1B4em1RYzFzdkQyTm5vUDN3eFRoeXo5Q3BtaEQvOFJRTG5ZM2JodEsxYjNMazJWN0tlZldFTngvcFZpSTV0MXM3bkh6Z0xWK2VxaWpPOHQrQ1F4MC8wUlZaVHluQ3FlZUxIMWlBWGN1ekNKNU1RRWZZWHB5WnkrNDlTOU1vb0M2QkxOTjdKUHZmU1ZZNHNYWGR1UWR3K2Z6cjBkOGJjdnFNMlZzaEpHUzRiZzA3QnNTN2o4aThlWXI1VS9UZ01tdmNxTEs4MDhPWEpHZWdRZ2h4WExlZHVYcWUrRm5HMUVUMEQ0WEFQdFp6Z2hkb2JzVG9NRVc2eW1sUm5MSzlySUF5aURZODNuWEQweGRBbTNxUTZHcXRNd21ZaGxaZ1Fxa2RRbTJCQ0JPRCsrQzc5WkJzbC9MV0RDSS9QN2NKYkltOEt3MXhSdDk3L0FNYk84RHhyazNrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQXZDQVlBQUFDRzJSZ2NBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBV01TVVJCVkhnQjFWamRUeHhWRlAvTjdGSmcyVmJhc3JTV0xhd0NrUThsZkJRVGpkR1NHRTNVMVBKZ29vbUo4QmNvejJxZ2lacjRKTHo2WWtscWZGQmo4VUd0THhCOU1FcUJ0VWFndEkyN2EybFVGbHlxZkMwdzR6bDM5b3U1ZDloWkNnLyt5TUtkYzg4OTg1dmZQWFB1V1RRVUFITUs1VEJ3bm9aUFFVTXJUSVJvWEo2YVRwQXRRcllJalVlUXhKajJtQmk3Z3ViR3lSekhXZWg0bllabmMyN3NCaGVKMEFVM2hIWWxJaFFBK2ttRk4zQnZ5RXZJa1lqNUUwbnZ3UmMwREdGL0VLRUg2dFU2TWFhYTFGVkdVdUkxSWpHNmp5UWdZdWtZRmJFVmtCUXhyMUl5YWtJSk5mUmlvTFFKT0hRYUtBb0FuaU9XZlhNQjJMNExyTjhFa3JldHNXTU05R2h0R0hZa1FteERKTjhVVkFuSkJNcmE2ZE5HcTRxUkYydlR3RDgvT0JGS1lCdGQycU1JcTRsTTREZW90b09mL09pNTdOTzdCWk5ZK2hMWVdwRG5OSVMxZHJTbEwvVWNFajJPSkk2L1ZEZ0pCcS9odGQ2QVBHZWlsY3JDUUpaWGxvaXNCZ2NLdk9wdUszYURzUUhFTDZtMktVRlNQRUQ1a3RCVEpIcWdVb09mNWw1Sk1EaS95cDlWelpSalM5dzd0VFdhNHBYaU4yTXYyK0dFUTBFcnBoMGV2Q2lJaU9wcGl0SzlFNzRtN0R0OHpiS043czBjZEpLbVZacGtKYmhPN0RkWUZWMngxY1NCdDBZbVVoVEFnYUc0VnJiUktjNUU1T0sxbjdsaGgwb1J6U0tpbUpDZDQ0c212djl4RzI3QnZyekdUV3pCVDJrMU55VFR4QzhHUHZ4NEM2dHJKdkpoZFEzQzl5cXRjUXVkZmlLUzFaQ0pOTlpadFMvMjc4djBHblpheHJJbmdaUHZBcFZ2WlcyK1RrUlhlc1F3VktYb01qWVY1WjRLbTVjT3VZaWt5OFl0eWJNNnFNTlhTcjFnTkk2R2xsZUFrb2ZwOHdnOS9qZzlUZ2xsV3RZV2kzd2wxalRVS3dUZlVoSUo2L0JtVDhBTVdKSGs3eklaZXNMWjhEZkF5bmQwZmh5ajAvVUtzUHdKOFBkSE8yd3o0YS9ScUNLUmJoWHNJQTVlcnZQbUpIVk45cUsyT2kzVmtwcWdaaVhzM2N0eXNCeGI5TGFKamhZRmtaVkoyV1pTazUwK2E2ZzNHSkVjdUord3ljaUtjQ0xHbDV3VGx0OFVubStzc3hGaEpUaW1IWnJWSUZuZVhtcHUrU1MwSTNGbHh4dlVsSko3K29iejJ4Q2R0MGhXSE04eGNvekZUMVh1RWY3YWtTSEMwbERTRGtsdXZLZkxZNW5MaW1PYVNOall2TE1pTXpjTjhxRnRyTXBSaEdPb2NzUEFjTHF6ejNwN01TZ1kyc0Z5OHRPa0FqWFdVOExlY0NiQytaRkoxTFFTcWkyaGUxRkhQNUMreUJBUnFteWpXeG1kbTJFT3VQcXIyUHVGSmNPeHNNMlNJcHhMN0l1RlM5WmFaVXgwNVY3dXlDalJ6QnJvVXk1a1JaYS9SWFhwWnlKaFk5SGxuUldZeGpPelZwbzFIZnRjK0RwMjhuUVArNWN0cjkySDVCcWtYcktjS1Bhcll0UlVMb3Eva2JrSk5OeDNiY2RjYks2RmZqK0I2cFNQQTRrTGZBKzdXWG5XaUwwenhUWkY3SE8ra2cxQkp2Wm5oYlJ1SmxhRm1oTng0YU5BZ21QbTVrVmVJb0xNR1Z5bTJTNWFQR3lmYTZpWkZ6ZTFJNTQ0UW1yRTVXQlV0Q2duMmtSTUJ6Z1NFV1RhS0xQUGlPYTJGemwxcHJweUFmSGx3MWhkeng3cFBJNytkUnlOTlhmc1lYb3BSbGUrL3dqc1NpUkRxSU1LSHUxdCtyb3BkYk9aMkttTUQ1TklrOHlBazdKREZNdTg4TUlsT01IK0dEM2R2N0ZWTERvNm45K0gyVHZOQ0ZSNFVPWXZ3L1dGQm9SQ1IrQS9Hc1JpTWdqVDlDUUNqMDhPdW82UEF2RGVPMFA4dlZqcWNWdmFtMVh1WXk4ODkzUVhYTUxWMW1TaEpYQkFjTDAxak9ud2RmQXI0QTV1L2ZaQUpCaTZINFlobjd6Qm1sT1N6VEFQa0VoeFNURjBYVTRydjk4djJYUlBRZWxYR0pGYnN4R29KQzg2VktUd1BrQkZxbXVyRXBvbVArbUQ5U0haV1R0QVJjcjhwVDlybW43ZWJ2Y2ZMcE44RGRNWVJnRW82UFY5OCsyK0FkTTBodkw1VVo0T25YdittWXNvQUlYcGw4TEF3QWZsc2Jub2xBa3p4TmROclE5WndUUTlYRnQzb3F1N3U3dmdlbE5nUVVzVDZVc2trOG5oemVRbWNqOGI2MnNqZXlIQjhHQ1B1RFk5UHRiUzJIbVVORzBJbkt4WXB5MTduN2NPLzNmOEJ4NDc5SnhwbTFPcUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQTBDQVlBQUFEMTlBcktBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBV0ZTVVJCVkhnQjdWclBieHRGRlA1bWQ1TlNrWlFnRGhRcGFWM0VCVnFSbUpaQ1RuVXZVQkFINTRDRTBwVFdWeTVwNEE5byt3L1E1c0FSMVNrdElIRm91ZkJEcW9pNVFLVzIyQkVpNmkwYk5VZ1JGYW9ocUVscWV4L3Y3VHFKblhoM1pydXhKVkEvYVpMMTVzM01OMisrZVRQekhLQk5vSmtUYzFMUUpsaG9BNmo0WG9wLytvVm1SL2VpRFdnTDhVN2dNZkgvRGFoNFBFK2xzV20wQ1FxaEhmTUNzNTN6L0RpbFhyNThEUjBFell5Tk03TU1hazVPcGZQbFZqWk9lSFVuQlVLV0g3STBjL3lVR3J3eUJaTk9pMzE5V09IaVZGUCtpNnJqcW1IWGhTR1k5Qm4rZFpiN1pxeEtueTJkcGpTTjVQblh5ZnFuVVBKMHN6OER4em9DOHJJZ05kU3lNVVVsS0ZYQVNtVlNEUys2aUNJZFlFb05YajZGRUVRUzMwTGV3MUdWdmx4b0lteXJNK3lkRE9KQW9ZRFZTcTV4QUZRY3kzS291QW9EMGdKdFZQRWI4RERKajZ3MXI3elIwWjd6c05SMGJOSitaYTdUM1RYSGJaeHBlRnMySmUzelFrejRHcWJlcTQ5RXVDVURsdEJxZFNSTVBxSFY0aGdIcEh1bVEzWDg2SEJoTGFWVnVsdzJyUkJ2QS9KNkw3YUJ0Q0RsejJJTUdCT25Zci9vTVl0MmdhVkh0L2VjTmpVM2tnb1ZkNmZnZFJYNXNRL3RSWmtsczg5RU1tWWU5N3JFMiswbURiK1A2aTRqcjV0NS9QYkFmWFNHdU1ESTYxcVAwNjBCMFhXblNNUHZxL0trZGkwWlNJVXk2RFFzZmVUU0U3Y3dpRTdEd2hHZGlSUGNEMjJlR3RVZ0I4OVY2Yy96L2lPcEZEb04ydURpbjJHQWhoa2cxbjd0R2g5cm5kTTh3dkhtbWhaWEdDMHgrUkprYzlEaG1YZUJwWitCM21GZzkwU3c1QmZPQWc5bUFRbi84djZQVDRQUzl5Ync1MWU2RmxNQjZkR2hob05YSGR3NDJZTk0zTXVEckUxeUlMZE9XaUNyTzNweDlyd09QRGNSRUxwempDZHdGM2Y5Y2ZBMzkwTjIwTi9CQUY3OExualdFL2NqaW5EZ205UVVINGYzTnYyTmFGSi9yTDA5SUxtUlZLU1JlRnpJaWtkMWRqTEkrWStpN2ZqZ3BWNVpTRWVabUd4QUphMkZ5RVFJNmZBVXk2VDh2ZDdPVS9NNkV6MXhULzJvdFhtNEFPem8xNXFobHdmM3p3MjlIWGtGblltZU9OVUtNTUhTaldpdjc5d1BMTThHR3RmMnlUY2tEZlEzb01PLzgxMlJDam83bjVSRWp6Q0l0eC84QmkxRTM5S25CbWFIckJyT2FXMUV1MUVlbHpENGw0RytTVTNDQUViRTFhc0xCYTNYUlFJN0JvTG8wZ283WHdya0ZBVmlieCs4bTRjQnpHOUF5c2xoNDBMYkd1SjFJYmdaUGNPQmxLSlJSc1VaZ1NHTWlhdTBuOVNaaURTU2lDR1MyQXpSdHk0TUVuSnhFa2V4N3B6MWFjeUZHcXh0KzVzaDc1WWpGMlpPSGJvYks4M25tQmpWYzNsWjFLcWN5L3N5ejRrZ3ZwVXJPVU0wSHdYV1FwM292UEU1WE45bGVEUWlhMmc5VjBsMHpTVGRwNzlJQkdteEMwRWVKVGduKzR1MVpoOXRXVUc4M2lnWGlkL3lybVhqN0dscHkwZFhKc2hWcWp6bktrOGlDZkV0dWJ6MEYrdlRxUTY3SmQ1VnQycGVkTjdUSUplK04xcnZscDQ2MXlnUGxmNHNMMzNVUDJuSlI2U1p4ekk4ck9sMTBpRnBNZnFsWHhKRW1mVVhJbzBEUHdFekI0TFBjaUtVRTJKelZIRjV2ZXhyMlY1RXJySVJFUjZYUENHNTBPWHlObTlPb20zWklidjdneUlEMlJvS1F6ZTA1bHhsMVEyMXd6YmcrdFRCKzhzVmEyT2h5dkYxZFNFWWhPeW05NXFQdSsvc3Y3Y3ZUdWhyaFcwaGZ2RHQ5K2VVeVUycGpsdmZYRXJjcjQyRXlJeCtNTzVZMWpHbnkzbUNDMHpLODBPdnpidS8zaXdoQVl6aWVCUVUxQVdudXdzeGNaRkxIZ21RbURoQm5mT3F0WEVDR1NlTmJOdWVRRUw4WnpXZXVBSFJPSG04czhhQWJhc0xQMXo1SkpIWEUzK3pMQnEzTElVNGhRakdlZkF3Sk5lNFI3bEs1ZUY1Sm1PczhlN3U3aHdTWWxzMGZ1aXRFOU9jdE1rWUdSTkt0NzY5bEVaQ2JNcy9JVlRKenZIOEZ5amloc1F6NG9wTlZWbUp2UzNZRm8rdllTaDdxczllOVlwS05VY1lJVjFidHRLbFF0NzRXelVkRXUrY2pWaThVMXA1OW9YMDE3ejhua1pBZmtVUjNhaVJQVks2bmwvRU51SmZxOUFjSHBWbWNsTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhpU1VSQlZIZ0JwWlZmVHR0QUVNWm54cWxVcWFxVUc5U1JJRldmQ0Fjb1RTN1FlRzhBTndnbkNKeUE1Z1MwSjNCU0RsQ1hIcUIrUS95UlltN2dCNUNRa0dlWU1TYkV4aUVRdmplUDE3K1ozZmwyakZDajd2K3dtWDJBZ05EcmcwZ0hFUHppVlF5QUNVczIrZGQyUCt1K3hTZXcwekFRanc1Qm9BblBDU0ZoNXYwcW1PWWZ0czUvSHdoUnVCUm1FdkFKNlhEci9HaFl6ak9ESFEwUmVBOVdrQUQrT0Y3L3Zqc0Rkcy9DYmRGczhBWWhzNHMrdTNFTy9IWXhtZG9XWGdVUUhnbDVuN1JwUVJGSzhZcGJaTld0QVBzVnRkMEFPWnZNaGUrZElZUjllSjFpaFcxcklSMXQ0RUU1a1FJQjBYOHhTaURSYmZXNko2RmY1d2IwYUlPQW9WUE93aVB0OW40dExPTWV2SWVtdktNL3RjZGtWcXJHR0QySjF0MmVnamNOVW9UVEhIWURxVFR5eXA3Q0NwRjJLU2xWQ0RJd2crczV4VG5FS2hQdVJWOWNJaDg5czFabkVVelh4ZzFGeHRXTUJsVXJCWERMdmIvdGZzdGlsbVRPSXZVODRjc0dza3dFTWFqSjV0dFpmVDBOZDVFYUczcXVBMWdpUWhoamR4bzJKYVBwaSs3dnMrVkJZcnVocU9WU3piNERiOVNETS9JdVIydHVMTWdqV0ZFR2k0b3hOclBOOFpwZXBUci9MWU9wYjgxbWovQ0s4c2tETkp5YjBvdVU2b1Rac1FsVFNyQm9kUTRtK3dXd3I4dnV2V2VlSllyem9YQU40MmpUcGRYdjdnQU1rdCtUcVlmYXFBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEUUFBQUEwQ0FZQUFBREZlQnZyQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQWJCU1VSQlZIZ0IzVnBOYkJOSEZINjcza1FDTjlRcWxBTUM1QW9KRGozRUhDbzE0ZUkweVpHZkhpcm9xYzRQRjlRcUlOVlNUeVRBSldwU2xSeVFxUGhKT0JWT0NYQnFBVFVjSUwwbE9WUVZTQkZ1aVhwQUlRb3B6aUcxUFoxdjdVM1dPMjkzWjUxRVN2aWt4UFo2ZG5lK2ZlOTk3ODBiRy9RT1FHUXlDYktzVVRLTXBFbGJFSkpBVW5SMlp2QStuVDZSb0xxNjMvQ1doRmd3YUlzQlpHd0NRaVRuQzJMa3kzOFdVKzN4K3RTM083ZE5VYUhRc3FVSXVjbmtTNEt5ci9JMHMxekVWMVBMeS8rMWpJK1BMV3dabC9NamM2QStSai92MlRFRk1oaTNKUWdGa1JuWUhhY1BMQ01qdXJ2UFlxeEZteHhoWk9LbWpCb2hjbFFzam1IODVyZVFIcGtXWTJRa2grR2JtcEMwVGlvS0dXQk5MaWRPbjA3SkM2WXBGbXVrVWlrdEUxdENIazY0aGlCUWMvSTRidnhZamhzM3JsMmIwcjZCWlNXaWtBRWl5M1lsSy9mSUMyYVFtU2txUUU2SUVaa3pibmtuNDhXTFRHZm0rN21sWVYweTl1VkpFeXRFaUtBbUNWb1BnRml4ZUlHYkdDcUErbnE3QWtqcGtnRzBDRW5YZ2tYNmFMMklWTTNBZHNjTHhzMmJJODRoTnhuNU4vWFRub2FoWk14WUlOUE1oYmxzSUNIYktySFlqL0ttR2Rwb2xLMTFyaVczUUc0eVRnV2dleGxmUWhYOUg1VTNTbEVZZHUwaU9uaVFhUDkrb20zYlZvL1B6UkhOenBaZlg3NE12Y3hpU2VTK21GM0U1R3NpQTdBcTUwNW12bWR1MzA3VTJrcDA1QWpSenAwVWl0ZXZpWjQ4SVpxWUtCUDBBR3IyM2F0OHN2S3hKaktBWWlIYnplcnFKbjNKT0VUYTJzcnZhOEc5ZTBTUEhoRXRMZGtmdmRMY3Z6dWUyMUVxSHBhQkg1bVFtbGd0cTllWHpMNTlST2ZQRXgwN1Zqc1pBT2ZqT3RKVnVUeXp3elNTZHV6V2dDb0wyWXNtMHh4bVJ6WTNFNTA4dVRZaUh1VHpTNVR0K0pwbTNyeXR6ak9yT0dkY3YzNlpJbURsN01DNEFabU9EZ29GWEFpeFVuRWwyNkkrRDhBbWsrMmptWmtjSFhqL1BScG9NTDFrZ0FXWmdEK0s0bnFyb2hDTDhhNkdnSWRsZ2tnZ0hwNCtaWVBkUGgvQ2dZZFNFWThxTWdlU05ERFFSL0VmQmprbFJESkhJdThqVGRpUHhMYU9aYjFnUi9UMys2c1lpQ0RBSFlzRUFaYVNRcEwvckZVbEU5OWV0dXpGaTl5MUlsbXBMQXFtbVdhL1BYclVuOHl3RExYYnQvWElBSEpjZnV5dWpKbHZWRElBN2dQMVZPRllTUXRsUW5BM0wzQURxQkdITzNmS0xoWUJLMnIyNWw4Wk13M1ZaQno0cDRJZTBvVHByRG1VYnc0ZDRzK0FtejE4U0ZHZ1NIT0RRZkhmSjlTQlRvNVRrYkNYS2hxd3BMdnhBOXZiMVdQd2N6OHl6bVFPSHk2L2h5cytmMDc1WDM2bDdKOS9xK3NaeEY1VGsyb1JDTWo5KytyMWhVakwvNkZyS1ZNV25zZVZvM0Mzdlh2VjBjK2UrU3VaazNBaDFmZ3NYL09mTmxIMnJWREpBQ0RNUFJ5Y2k5clFDOE5vSkEyWWxWVm1OVkJrY25qd2dOZ0paTE9LZUNqU25QeFF6VE4rY1loQ1YwV2FOR0N5OGNOWkIwOFVsYk1YaUxVd01oQ0E5amIxWEhjU2RnTlc5a0lJcmJXWXlTNmpPWlA3bGY5SW1DNndaS0JtaUMwTzgvUHFNVjdwTkFtdEZSN3kwOU4vOEhuR3J3Yk01Mms5b2QvMThac1FSTUxsY3MzTm4xQnZiNVlhR3ordXpqT2NtR3dBVEx2cDRJV2ZrbkdBOG5rQVVrclNuSnpreitmaWhTZXZXZm9ZaGpvUXdlb0ZMTVFsV3lSYWJyejNldFBUNm5HL2FweVAxeHhwQUJaUzc4UThkUnVjbkVLbEJnYjhTZUg0NENELzFKRkVPZkFXK29zMFlFa0xJZnQrcFV3Q3BMd1dRYTNsV2pwWGpVZWxuRXFWVlE5Q2dVbkpTc0ZPbnB3MHc0VlRUSkdDYTNIcGdXaWN0QWdWQ21PeW1sV1h1eHdodUFjcWNCU25YbURTU0pTNlJTc2VEaGVYWFBJR0RHT2NOR0JXT3BEcVlNNFN6a1E4dVNjeW5DWUxCeTdXcEhEcDlzU2RQUFJZK2NhdjFnS3dIT2VyNG5EZ1ladzZ4WCtIb3BTTEg4TVlJazJVQ1JVS2FFU29haGVrWUpnVWlIRlZCUWU0SzVieWZyMEozQWNWT0FlRWhTWldteVRkM1gzeWhWL29vWkwyUzZ5T2dNQ2FuTndpRHFHT1FYMDhlTU9sUzd4MVpJdll1SEZEbzBOVGhydnJrNmowRmRTYUNYWFltVE1VQ25mWEI1UEh3OUJwZTJFNXo0bEp5RTREaCtxK1hGZlhDZW12byt4SWtNcGsxclV2WnhNUFdzNlhTaDN1WFFrZHFLM2dycTdMa2hTL2h2ZForOVFFV1BMS0ZmOHFYb2doNldyYXpSRUhmRy9ic3B6dERCNVltYnI2YkpIZzlQSDhFcTQ5Q2R2VmF1cHRzOXNwbFgyaHljQXRSNUJCd0NQWXVRTFRDMWdFcmhWRXhMNTU5TGh4STNoL0NMOXdDcktVQTVERHNoMHJYYmVNUTdWQUJDV1EzdklCdjlmNXZGWXlRT2lXWkdCTXJTZUV1Q1V0YzdZV04zTkRiNDhWdXhLRzBWdlRybmZveFFVSWRFZ0IwRTZlUVlpeUN3NFh6TWdKOUxDZG9xZ0FFWlEwc2twWnExWGNxT1YzQ2ttN0YyNmFjRU90YnFZSEtETHZyamNSQjVFSnViRkNMaFk3YnJlWjBCSnp1eVVVQ3l0aXJMbUt4V201dlQxbVhMMmFvdzNFLzZQUmdvL0lLbDRtQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGdBQUFBdkNBWUFBQUMyVlFrOUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFTc1NVUkJWSGdCelpuTGJ0TktHTWUvc1IwN2NTNTFldWlwNEJ5a25LUERBWFpCTE5qU040QTNvR0pUS2lSZ3h3N3pCSVVWTzhRYnBHOEFPeVF1Q2pzV3NDZ2JKTVFsbFVKSjFiUXg4MDJheEVsbVBEY0g4WlBhSlBaNE12K1o4ZnhzaDRBRzExOTl2L1d0MjdzQ2hoUUxIbnZkN3grQ0tmWFFmL2I0MHRKOTFmSkV0ZUJtKzhjdGtpUVB2dTd0dzhIaEFFdzRkN0lPUi9UUWQ1ODZZSUx2dWZCSE9ZQkJRdTQ4dWhnK1VEbkdVU20wK2FMVHhIRDR2aG9Vd0lUVldzZ2FXUEpkT0JXVndZU281TE5YaHlSYk4xOTJMNnNjSXcyNDBlNDBpT2UzUnAreGtiNm4xQytRUG1aMUtSeC9QbEV0UWJtbzExRWwzd1BYbVV5NHhIVmFHODg3RGRseG1TM0ZjRzdpUDZWdkcrbnRPcVBvT2c3OHUxS2IyMzY2WG1IN1ZPRjhaK1FHL2xOWlNPRTMzRzUzSWhvT1I2NHh1MDluRkZlWFNxdzhyNDdWV2ttbGlyblJTOUdnSVZ2WVZ0R3h3bGIyd2QraUwwM1IvcWdVZ0l3YUxYT2lJZzZoT2xVbE02YlpIN0MyY3VFRzNHenYzWU1FcmtFRzJLT2w0MldmQjQ3UXFTZ0VHYktwbWpGNkV3aGMyMnozN3ZGMnpkVTgxQUhFb0VBMW8vZHgrdkdtNWl4WTVtUkdSNmllN3lRWnhEZGUvN2c5dTMwcTRBWmRla2M2VUVFMGl2VnlrZjJwc2t6TDFqaFRYbW4wVXZEME1RN0lWa3lYdEVBVEhFV0hUQnFoczNpa09iMWNtUnR4RStmTzZvTUZuT2lBUkpyMXNSNE8vY2tvcWs1TlhqMS8wNUFqZEVjdnhaUStDQzZ4L2FIcm1tRElJRW5nYzNjZmxpc0JYVmdxWU1QSDNUMzQwdTNCbjNTRk5RdzQ0azJCSEt4NVFNSXRoeHdaaDBNY3VveEZZUUFybFpDRnRXR0ZCdXNmSGtGQjgycUpReE9jNHBZWGxmMFBZTlZSUXc3cFZYU0hYb2pud1YvMUtuaHVEbzFLNElNVG55RXhmZnNRTFBGY1oycXhNUVduWlM3aGFDYk1OcTRwZnAvZ2VYZ1pMUGkrZndDOUEvTjdQUVR2R2F2SGR3MFdQSXYvSTJ2NFpqTFJYYmhLLysrQUJTYXI1d0xxMklFdXk4SVlCNHovSWJ2MEFuUU5MRUlXWE91RndYWngyY0VNOFFXYTVaaXAydUx6WkFjR05EMkJYVENBMEhQUUppU0dzemlQZDdIdExFT0t1ZGJFLzVNM2NBUjN3SkFnNHdKY2h1K1pIMHZidk03YVBnTzN1Mm5CSjNTSlZYNndrOGJtSFBKZHcyTnBXK096Wkp1M1N6aWZUUFdCeTd6ajZFOVRZejFndUdGYnVVaHJOTkdIaVM0TTliQk5kWEExcTRDOHF3MzBFUmhNVTRPcGpUcFlseFdTQmpUUmg4bFZqYVllNW5RZ1FxbFdYWDJnTG5UdUJEVDF3RHA4VmdjaWxMdE5WeDg2dXREU0ErcEFNUnlpTlM5MDlLRnpUaW5ySVVNSElyVFhjMVY5cU9wQ1dROFNIWWd3dmk1UzBZZUtMaFQxSU5XQkNQTUxSd1Y5QklxUERTVW82VUNFY1VBVmZham9RcUlIWlIySXNMbzNrZWxEcGd1SkhyUjBJTUw2Qms2bWp5eGRCSjRuSGhsTkhZaXd2ME9GYkgxa25XUENjOVJBQnlKeUNZaUk5Q0hTeFhBNzUwR3pvUTVFNVBMNEtnMVBIenhkQ1BSZ3JBTVJ1WTNnR0k0K2VGT3g2TTl0czlLQmlOd0Q4dlRCMDBWaCt2TE1XZ2NpOGg5Qm1OZkhyQzVtM0plTERrUXNKQ0RDOUpGTXBseGFGOFcwT25MU2dZaUZCVVRvZ3JGTmY0dGhqa3pyWWp3OWM5U0JpSVVHUk82ZklmaUw4Y09STHZDVlRkZWNkU0FpZDAySW9QcG9VVjFjd1YvWHFCNXkxNEVJaXlldG1yaXdUdS9jR3drazBTSjA4RnR3dDkxcnhHK1RCdnhDZmdMQlFXVWJBVUZ4SHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURNQUFBQXpDQVlBQUFBNm9UQXFBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZFBTVVJCVkhnQjNWcE5iQnRGRkg3N1o3dE5hWjJVdEUxS3FkTURsQitwU1VWRVMxRzdRUVVKQ1NuT0RaQ2dxWkFRRW9lbTRvQ0FRNUlMMStSU2dUaVFGQTV3UVUwRkVvZ2kyYTFVdFJMUWhCK0p3c1V1YWVNMGFSSlg2WS9YM3QzaHZiSFgySTd0bmJVZFMvQko0NS9kMlpuOTlyMTVNKytibFdDZDhkU0xyMFVBSkIyQVJYLzY5dk0rV0VkSTBDQ3dvWEFRSU5BTklCL0JmL2dOV0NROHhvSUYzU1h4Znh4L1lHRy80SGRVR3Y4eUNnMUMzV1RZME1zNk5qT01wYnY0eGoxaENxODlpOFFtb1E3SVVDTm1GeGYxeE1KSzVHN3ZjK2hHb05kQmhCQk9QYkp2Z3RxYlRTenFVQ004azBra0VpSHFWQU10b21rKzNYNnlGeG9CYy85aFVGVk5WMVUxTW5keitVd00rd0dQOEVSbWZtbmxCRk1EMDlpaDd2UDVRWlpsTUVON3NUd0s5Y0FPUGdpWngvYURvaWpnOXdVQUgxSTRvQVppaWNXVllTL3RDSkdKeFdKQnNnYlkwcmhmOHdjVlJTMDZuenI0UE5TRCszcC8wWDhpNWRQNHd4cmhWb3F0Q0xtd0t4bHlLMy9MbG1rbFp3MUpXaHN6eURvc3NCRnFoZG0xMXJMVWo2YjZ5UFhDL2hZMkxlSjJWY2tRRWFiNEk5aGdTQzJ4UmlHSVNPcEFiZFl4dWc5eE42c0VkR2xRRlMza3gvdHdJMVNSRExtV0NKSDhUZFhvYWlMWEZSR3E0bklWeWZnM2Jaa1FKVUlnNjNnTkJOYU9YVmdlRnFxYko5VEN6bFNzVSs0Z1JSRUpwTEFvRVFKakRPNGNmZ21DOFQrZFF6TjRGQXRjSzZpRlQxWGFsMTNlQU54NytpaDRBUkd5bWFYUHpTOE5kZTdZT2w1NmZzMW9wbkVDR0JZcG1wUWI3T1ZnV1Jaa3JFelN0dXpUMno0WmlXdkxzNVBTK0ZTeVV2M2MwaWM4OTk0cEhTUFdNWHBvaXZDRFk1QktHMG5EVFBWMGRYVEVvUnFaK2NXVk00cWloU2s4dWphTDFqQ3RESkdKR3BaMHZLdWpOUTRla1Vpc2hKakt4aFJaUVUvUWhCNGdmM2htT3RxNXJhMW80VnAwSlMwbGFBYW1pY3NOUkNTZE1jQzI3ZEdkMjdlT1FKMjRjWE5wQkswMExPb1IxSGNtaytuYjFkRWVkWTRWQlFBMDl6QTlIVGM0UkpobG4yd0VFUUsxWTJGN3ZGMXMzdzEwbitnOVJTdUVQQmsyOUVwNHk5ZWY2YjZGRzY0TmtXdVJSY29Od25yd0VMWkg3WnBteHJXdTc5cGZzUG5jVjNwMjFaNUZ3YWlUK2pmOGRobW9VTWhNSFhnQjBqMkgxalJDL21yWjlsU2pMRklLYW5kdVlmbUliSmw2YVZDUVV2ZEFqVjJGd09Wem9QNGJOWTloaWZMenpoRTI5T3BLNlRLZVptYWFPKzczOWVkbmFTT2RncFFKWGJVTWRsRmtnd0pNMHpxUXhnK1JDRnc2QjM0a1FiOUxrSlRHdjJqTms4a2xXSkZxSFhCUys1NkIxU2Q2SjNkdWF6ME82NHpyQzB2akxkZGpKelpkK0tiUUNoWEEraWhqZGV5b3U5VG1EVDVBNWV5bjU2RUo2UGg0SkM0djN4S3NUVmt1UkhNQmdHWmxVYVNtb0FtUWwxY254V3N6ZnY5T05Bc0pYaFd0TnJNM0V0TDRKUFV6STFaYjd1YWZ1VXREWWhkeFphV0o0QXFPU0QwZXVPU3NyaVVzUmx5RDVpSXVXQzlFUEdSbkJmdmZoNlRMcERUQy93SXNLbWNsVTBsMFVPK0dwa0lTZGY4NDhjZ0ZBQ1pJSmhzMW1nY21PbVhFNmNNSnpZSWhrSFZuRTZ2MUJ4c2FESXFQWjNhYlBoMHl3bEVxMDdZbkRFMUJ5a3MvM0JpT203bk82cVNOSlY5L0J4YmUvS0FwcmpiLy9xa2pxLzJEdkY4QlJPa2p0OUFrazZaanBmTU4xOE5RQ2pKUUU4dUtmSlh6NzBiQzBTR2NqRmRPM29JTmtiTjhmVWkvUzVCZk5mT0ZKaTBkY09VODQvZ29QWTNVd2FPUTJidS81RHBVR1JVdGlLbmdCUDVadDQwanB2ckh0SUtNbDlLUHV3TnY4T1cvZHZVS3BnTS9nREwvdDFNNzcxV0YyYy9vM2Q0K3J1cFhNeTBKSFRaVGRKS2pPdHBiUjZIQm9IWmxTUzRycUpCM3BMdWY1WVhJcUJlL2c0Mi9YanJ0bkM5U0RqRERpNkNnUVBJUFZBZkRKQzJyQVRReWRlYTdERGFNaTRnYXRtMmhEbEdzMEJUZE5hYkVvNVRmdTBQaUtyMmt5R05ldHgwcWdkb1JKVUxJbUZ6aUdpMitxeEtRZFRUYzlCRVQ1VmkyVWRPYU1tempaQzFCZ1E5MkpUQ0Izb0F5bHdmZExKT2U2dHplTmxCNHZJeWlXWngvaTRBYTU0b05zeWM3UDN6N1BDVndib3FtM2JacjhPWmJJN3RCa2djcHFJaUlqdnphbk14VlRvY29lN2ZYVWN0VlZXV01UTzRGNnBVTG1GWlBPbitqa05XYmJ4ZFUyWjFMY2ZsY1JmT1d2ZWR4WVJtWWdFb21tS1paVm5pczJBcTVHMjMzaVlpQ0RqWi9ORklRTXQxQklzbnE4WGZGNjZOTG03WTExZG5lT2xEdWZNV3daV2pTQUQ2QnVHV1pJQUpsZnRZVEVRSk5nbVdrbzdLZys2RDdNZTVBUldXb0lwbXUxdGFrWkVsOU9NQ0ZDQVV1ZlErMWdQUXdOMUQvcUN2SERWdnE2K3BxclRnV3EwNG9IVGpBSEVMVlFqWXRNWHd6RjZFV1ZCRDI4aURYeWhOeEVSNWROMmlKRUxwY2oybVpVelQ0eW9uYTdpSmRaVGlTYXltb0h6N1lMVE5xM0pONlJCUlVvYTF6Y3JuTzlqWWFRNk1VRmt2ZGpoYUI5WUMwNDBKUXFEY3lSdExLbUNkcGhxL21Xb1h3OUZJREQ0Y1kzek5vSmRLY1ViRUg3WS9wY2l0WlR5RExxdkdydVNXS3dUZVNEQk42dkM2VlBMOXVRbTVIb1JHdDFJY2RSN1dmRzZQV3lyLy95TmRhdElIRXJWR0RNTitJdDVvR2FUc0VmOWFZZ2ZMWHRtaHlIYTMzZGEyR3ZXOUd5RzM4NkRudE9vUWxDTVhTYnp6M1RXbnUrU3lKMUV5akpOK0draW1IWnI0SitBL1dhSG9OSUtSNTlBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCWUFBQUFXQ0FZQUFBREV0R3c3QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUdHU1VSQlZIZ0JyVldMY1lNd0RKVnpIWUFSbkEzSUJHV0Rza0hvQm13QW5ZQmtnbHduYURvQnlRUmxBOWlBYnVCS3Jad29yajgwMTNlbkV3YnArVW5Jb0NBQlkweU9qa3lqRFVxcEk5d0xKTXZRR3JUWjNPSUQ3Z1VtRjJnakV4RnhqMWFqVldqYUU5OVJUb3AwSzlUdFNIa2lQaGZ4MjVoU3E3S0U1UldXb21XRit6QVQ1WmV1cWdYa1Z0UjRVeVgza0hDSUpPUUo4aDNIdHZLbVZhc0R4QllINDNtQm9tcHF5WHdwbFpPT2tSSjdzVG41T2tEZWMweStncC9oSjV3Z2pETWVqRFg2RnpUcVljY2J1Qy81bmYwM3NlYkZKeVNBNUMyNkRkb3I1NzA1NmkySFhzSGZRY216V0h0bi9RRnRpZ1ZJOEp6UzVHak9lOFlxVHA1TkpsSTg4T0lwUWRxaDY1bDBqN1p4U0FtUDdBZWJOTE5scmtJN20veXlSaFA0THRBWTJxbWh0ZTN4bnN0b0lBeFN1UGFvdEdnRTEyVTM3NUhtKzIzb1VJaTQwdmlPTkQvOC80K1FDS3JNZ3VNcnF1bEVmQ1dmSzA5Q0FkZVJJdEJSUDhOMStLbFVtcUNjcnlmNFBYWlJOYlhvdXc4ejk5ODcvMnJCSnZKbkNxeVFmcXBETE84TFF3MFZrWlB2b0tNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBYndTVVJCVkhnQnpabFpiQk5IR01mL3N6NVM1M1JJVDhwaGVxZ2txRURVU2dWQjFlUUJ4RnNJQ0ZRUUFsTWVlQVJlRUljcUVxa3FDQWtWSkhqb21kQkt0RHkwbUFlRUVFaUVvMjJrSGh4dENkQ0RCVVM0WXJBSjhiWGVuWDZ6d2VuRzNzTjJIT2hQc25aMlpuYjMvODE4ODgxaGh2OFJQTGdoUUpjbXVGM1R3SGtBSE5QMUFzWUN3eXR5bWZMa2dRZjMxekU4WVpTN1BVM3VyUWRhRUhrNFAwZW9EYkZJQk5IZUcyZmRlQUx3SzJmODZlcnlOUnhZeXpuMzh3b3ZXRFQvdG53a1hpVDlqOVdBakhDRmhKTWIrSWZ5WDZnRjY3MmYxenNNNGdVQkZ4NFQ4VHM5UWU3ekhpYmg4K2oycWVHbEROSTUyZkVkV2VKMVJyMEg0amQ3QWk0UDY0QVluSnliMXVFdlBVY21lWUZFeXZJOVp1SUZvOW9EeWR1WDVrc2VkcGlTazIwcmVraUdxa0w2NTdacHNaVjRnWVJSUWdsZjJzSmMvSURSMSszUVp0VUR0UlU1K1hiaUNYbFVlaUFWdnRSQnd0Y1c5QkQxQWg4N0J0SXZmdzlsT1lnWHlDWHRBUkZsVW4wWGo1UDRJSXBBakFWMXpqUTluWWQ0d2RXUzlZQVFyMVQ3amxOeWhsMjl5eXJEZVkzaFFsckNEUnJUYWM1UVoyaEdZWVF5RUVIazVLOXdRZ09PbEN3SzZlSXpVNzhKUXZnaFJjS2ZhdTZFVmNjNGxwZHBlTlhGb1NhaVVHYzlpN0srYVVnZVBBYzdtSXF1a3ZUQW9NOWpubFc1RVA1VjBvVjczSHkyamRNODBFMDkwcGNZd0pUWWRUM1BQZmw1U0hXVjBLN2RCNCtiaDljVXc4WVJHeUNpamQyQVBaZG0rRHJsL0puTHNTUjIzNHZoYlhjS0V5VlZ6M05OR0FQUDdGZkF4QUR2RzhnMlJKN1FIV29ma1FHcDhNVTExUExiN09yc29aYVBjK1lvL21TMFgwOWY0MjRzODhhSHlvUjQwUnZldVExd2pSOERWbE1PNWlXREZDMjA0Ni9mRGhhOUd0Vm5XSzkweGk3T0MzLy9LT0hLVzN5R3d4Vmh2U2ZzNEVnM1Y5VXY2aW9xaklxSTQvS3k0MDZUMUhVdC81WTNjbDcxd0FGWmlCZUp2S1BRbzgyRytJRldreXVvQ1FKT3o4UzVkWm1WZUVHVU96cEdleVpoYXdDSkZydWpGbkFXcER1OXRiVTNYZ2FxZk1nSG40VU9PL0dDR21aak9iVStOV0JYNXNiVUFCNWM2NGRVc1lXaUc2M2I5WnpCQWxxcmFIT21JbC9HUzdsQ25NUUxwcm9VeXpJT2JXOXQvVUk1YzU5amdPNHFMcGVZVVFQWlpXS2E1N1dWeUJjeE1kV1JFZUZIWXlFZjhSTW9oTm9NWURtZGtIWWFNNlI4eGZPeHRZUHVVeURMdlpwK3pVZThZTk5UdG5YYWF4dGJJOGFNSVFQc3hBdlU1VTBvQnRFTGI2bjkrWWt2NjhjeVQ5eXF1TE95dnJVek8xTjNJU2Z4b3VVTGNSMGpZbTJ6Sk5rTDFlZkRoOGtxWE5OeTV3WGhOaC83SXJhdW94Z2lqeEhtSkY0TTNQVHF1VVVab0MvTStudUg1WjFLZS9XZm9JYkd4MVJKY1p5MEtDaTFWalMwaHN6SzNMYmlpZGpyRStBcGtYaUJFT3NrMkFoRm5mYktob1VocTNLM0hpR044ZnJScVpkSTlybVpmMzg0UEgxeGZ3eitxdktjaDFsQ2dYVHFBdGhOT2hMcHZVY3psMEo1S1NSbVRxUWw4VE1ZS1JyNDN1cjZoVzEyZFFaZFNKS2FhSHQvRmtwTVpwMDdoMGI1K3g5czY2Q0RoS0FRdjd4bDlqQWpwTk05a0k2ZTF3VWJFVHVwQjVHN3FOcTlCQ09DNFd6bDVOWkc1Mm9XYkdqYkduQzcySlhNdmRFSTZkZzV1RWg4TnNadFlQVVhLMUEwSkY2Sm96azdaSnBodVpqenVOa1c0MzJFM09qTGc2ZWhIUHJaVWJ6MGRIRVJTNmNBOGZxM3pETGIydHI4d25XeTh5ZmRqS0w4WkU5Ty9ld05lTEVHQ0o4dlJMekFjakZIWTF0bWh1ajBRa3JEZ3I1RVRqMnowd09KTmg2RlFvZTh1Nm9iRmhSMkZBUHJIb2lvS204V1JvaDdmMXJEMGp1NU02VFYwWWQzVGowS2dtTmRWUkhpQlpaallGdmJSbGtZNFZPNXZPcFdYRGZDaUpYNHNwWnBoYmlRcktob3JHeG8zWWtpY2R3NVBGaTl1YU1xUFh3ODJJa3ZhNW1PZktBOVN5Z2R4OHBDL04wTVd3UDRlNXVDTktsMUdQT3N4S3Z6cHFCMjhadHdnc2RTK25sUDZ0akZ3TmdmdnJ1S0VXSy9wV1REUTZtVitOQXpGZmdqL0FEcm96SFUxWlJidms2OWVBdnh6NytIRm41STd5N05xYWJsVzZqMWhmaEE1dDVNZkZ4aTJET3VCaWRxZmVpTHhyRjlYemZDWkVRMld0OUR4SFlmeDhEMkk0UGlpYVJYaTZJRVdMb1FYN1g1U3NZQU0vSDNQQktKOSt0WEkwL1grTEIrNlF5OUo0UzdwSTcyME8rQ25qWWdqLzB4TkFrbHdIeFBMSHpmUmp4TmNudDNUUFMvRTVPa1FQYXptWjdZM0VoTHJHL1BETFg0c09mWmY1dnlrV0x1UWt4cUVSY1Q4UkdOWStXTDNhRmczS1Uxa3hUWjVPbXVSYi9maXVDVFU2YmlCVFFubW01T2lzRnlER1NKajFDcnR5ZkxNR2xjZDZoVFpIelQyU2t6cGhxTjZHSU16ZnYzZnRiOFdreXhESTNVK3AyVHVrTXlTb1NwQ3lVR0h1NGk4ZUljS0VJTGxCTkpIMzIwSzVRalNoanhiakRZTE1IajM5ZjU2Vms0STVleTlRV2o4azk5Nzh6NVppZFRrU1JIWXlsYlgxRHlQL211Tk0wM095K05hR2swbDFxOG9PUUd1Qk01LzlMbzRzZjlGTXJIeFFxbTVBYlEzR2JzZ1ZFVnIzOFBKU1pWcHNkNEdZOUJ2T0JmM2hWM3hScmdlN3dBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFVTFNVUkJWSGdCN1ZsTmJCdFZFSjdaWGR0eDZpYU9TQnRBUW5LNWNVRUpJQ1FPa1p3Yk5LbElEa2dWUWtweTRkeGM0WkQwQUZlU0s1Y2FDUkNuT2xWSVdnNm9McjF4aVpHUUVna1Z0Z2hCS2dWaU5YYmpuOTBkM3V4bTE3dEo5c2Z4MnFkKzBtcjMvZXk4NzQyL04yL2VHc0VIUjNmZnpTRXAyK0l4QzMwRnFocnBjNW5wcmZKWnJaTGZhMFpMR1llK2syVlFEcEZ5ZnEwWThDWTBmN3gyUTA3SlgwQWZvYmYweGVUVVJzR3ZYUWw2T1RHVUtnTkswRTlJc3FFR3RRY1NCbVVnUURROWdoemNqUFd0R2ZKcmxKSUtKQzVsb0o5bzdWZkJhR2krN2IzeG56eG9YVDFBYndnUHZXbGRQY0JKRFZmRTFZNS9zaG5XeHFGVE1GbjI4TUZENkJTSTV2aVZkZzJIT016WkpjWGJHZGRUNzIwc09sMjNQOHFMMjMzb0JFeDBXQkRXbjFuUGZPOEF5a2htS1RIeGRja3VON1ptaW1LUjVld3lTOEtaRFpGL3dJNE1Xd3BNTmdaWmtHdnpFcHRHUlJBbWwvc3hCOTNDVFhJNEJoMVRtekFCcVFvQ2x0c3VweHdWODFtY0sxVkNEWTFNV3RkSlpGNXJQMThRejY5K2NycFBiUWZnU1JIQ2NGQ2N6UUpxemhveUVCNHJPdUFEQ1dqV3Jxd3JHZTVRQ3JjbUZsVHlFc0RZbkg4ZmxvVjdBb3kvdndIWXZ3ZFJrSlMxdkx1TUJwWWwxTW1URlltZGVMWmQwdFJBaTA5dUErd3VpYVJqSDBMQmZYNzdOQUpady9sMWxRUzk3MjJDa3BTKzluMEpYQXRQaEpWNWxvVlZHZ2lYQmhQNS9iUGdFTVp0VFBib1R3aEhVcldmaUtSOHU1NVU1bXB1SEFiQlYwNjFXSlgxNUtEcFpad29WRGcvaFNpa2d3ai85MVBVOEZhMnhoUnoyN3k2WU1WZ0M4S1JKYjZiaE5HQWRmZGJpUEt5VXpDTUJ4QUYyVW4vdHVHM0lCS29MVThQQjZaUjEyL3kzU1I4TEl1UzY4M2MwZWJNeW5HaERGSGdYbHo3UDNpandNaGtKQk9Dc09tY3h0MlpaYmQzbVZ0NjdwN0tEMDRDZjdReGswZTV2YXR4a0c2Uk1YWGg1Y3NxU05vQmhKSGw4TVhTK090TGdPcU9WYzloN1pXUGhTeEhBUjRKbmRkMkE4MkFvVjJwNzFWQUhNMys4TXlqb1YyeENUdkpEM3RaYUhuTjZTUitaQVhsWWwzZHk0cENLWENnb1RlczJNcUx6eWJMY09wMncyVkJWTERJSmp5cGdEZ3VGV3l5SHNLTVJsTlo0ZFhvc3BLVGtuSlIxL1Mxd01HWTBLUFB6dzV2ZGhRNWVoeG9BalRqam1Rb1JhOFVTTFcxNjB6ZzFOaWJWOGNWbEhpV3JnTW9xc214REtBaTU2QUhJRTFYVzN1SEZVSnZadWlXZ3NQa0xBTWNVaENsVys0NktTVk9INk85T1gwMDk1NEM2WWFuamdnWDA5T25ENk5uSnZEcDZhMENrYkhvcnVOamkxNXJRTnpRRHV1UnlUSjhUeHhNV3RlQUV3Vm50OU9lQ3VPYUFYR0JiZW5DcGd1VklMS013TzhTRE9zTGtIemZUajFSbGlCeCthTElPVUpmRFNYTEI4NjJkMG1saGo1MVVyUFFLV0VidkpHSTdkSGNmVEFobTNvK0wya1M4ZE1rMjlLdE1zSE5nV1oxTlVwYTI5R0k3RzBnZVVYazBQUG5KZTBteXpHV3cxYVlWODlOMkFZVEo1Sm5GVVdlVjE3SWpLTVM3ZkJ0eXVEZld0bG82WGVpZXZRa3VoTWlrOWkrbmhPWitncElPQi9TZGEzK3JMcWFmbWRkaFM3UU5XRWJ0UDNoZ2lDOWZPcGN5TnU2MENpNlRzTGRJRGJDaklNUDhndXAxd2R2cGQ3T0FOVU5hUDVjaGNaT2JYSGs5c01DeEFRRllrUTZPenpmK3ZVUXFyL1VMT09wSkZ3Y0cyV3BGQ0FteENlSkc5ZnpjUHpSUldzMHpUb21mSXdwWFAydUJERWd6bTlyenFKam9pNnlqR1dJQ1IxNVdDeXNjWkFsSHZ6MFh3bi9VRDd3NVpld2RHYTliaXpoeExmUlRqWFFxWVlsa2NHUno4ZkJGMFBtVHBEM3Nja3lHb0dvRktBallDLytwT25JWnIvL0VPZ2F6d24zR3M4Sjl4ci9BOGsvK2wzMGRCQ1hBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNTUFBQUFsQ0FZQUFBRC9ZbDAxQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUhZV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ055NHhMV013TURBZ056a3VZVGczTXpGaU9Td2dNakF5TVM4d09TOHdPUzB3TURvek56b3pPQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEE2UTNKbFlYUmxSR0YwWlQwaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2VHMXdPazF2WkdsbWVVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFk2TWpJck1ERTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFk2TWpJck1ERTZNREFpSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklpQndhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQU0l6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pCbU5tTXpOelU0TFdNNE1UTXRPVFUwTVMxaU0yUTJMVFF3WWpZMlpUaGxaR1pqWkNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaVlXUnZZbVU2Wkc5amFXUTZjR2h2ZEc5emFHOXdPamxtWTJJeFltTXdMV00xTldFdFpEWTBNUzA0TldFeUxXVTVZakEyTUdNM1l6TXpNaUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPbVZpTlRRd1lqUTJMVGMyT0dRdE9EazBNUzFoTlRobUxUTmlOMk0wWlRGa00yTmtOU0krSUR4d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeHlaR1k2UW1GblBpQThjbVJtT214cFBrSTRPRGhCT1RBMFF6bEZPVE5FTVRVeE56ZzJNMFk0TjBNNE1qSXhSRGMyUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qTXhaakJsTnpsaUxXRXlOR0l0TkRjME9TMWlOVE15TFdFd04yUXdNakUyTVdNNE9Ed3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBpWXprNVpqQTBaQzFrWVRZNExXWmtORFF0T0dNek5pMWhNakUwTlRVME1qTTRaamM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPamt3WVRGak1HTmhMVEJoTldJdE16RTBOQzA0TldZMExUVXdNbU0zTlROak9EQmhNend2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZZbVUwTjJObU1UWXRNelE1TkMwek5qUmhMV0poWkdVdE5tRmhaakF5Tnprd09ETTVQQzl5WkdZNmJHaytJRHd2Y21SbU9rSmhaejRnUEM5d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeDRiWEJOVFRwSWFYTjBiM0o1UGlBOGNtUm1PbE5sY1Q0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbU55WldGMFpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV0kxTkRCaU5EWXROelk0WkMwNE9UUXhMV0UxT0dZdE0ySTNZelJsTVdRelkyUTFJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESXpMVEExTFRFM1ZERXpPak0wT2pJNUt6QXhPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ01qTXVNQ0FvVjJsdVpHOTNjeWtpTHo0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbk5oZG1Wa0lpQnpkRVYyZERwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qQm1ObU16TnpVNExXTTRNVE10T1RVME1TMWlNMlEyTFRRd1lqWTJaVGhsWkdaalpDSWdjM1JGZG5RNmQyaGxiajBpTWpBeU15MHdOUzB4TjFReE5Eb3dOam95TWlzd01Ub3dNQ0lnYzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJekxqQWdLRmRwYm1SdmQzTXBJaUJ6ZEVWMmREcGphR0Z1WjJWa1BTSXZJaTgrSUR3dmNtUm1PbE5sY1Q0Z1BDOTRiWEJOVFRwSWFYTjBiM0o1UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG5DOGZvWUFBQWIwU1VSQlZIaWM3WnhwakJSRkZJQy92V1k1NUpCbDhWb3ZGTVNnUnZpQkpxaEl2STBHUVJPamFEQUdCUktSK0lkRXZKV1lvQ0JCbzBLTW9qR0FHQk0xUk1VREFxS2lHRUVPTWJDaWNxckF3aTZIc092dWxqOWVkYWEzdHJxbWUyYlluVW5xU3pvOVZMOVhWVk5UcjkrclY3V1VLS1h3ZUR4UTJ0a2Q4SGdLQlc4TUhvL0dHNFBIby9IRzRQRm92REY0UEJwdkRCNlB4aHVEeDZQeHh1RHhhTW83dXdNaExnWnVCbEpBU3diWkN1QUlNQmM0Q293SHpnUWFJK1RMZ2NQQUw4QzNXaWZNTGNBdzRIaU1kbmNCYndJM0FNTWpkRXIwZlRld0Z0amdxSE80cml0Y1Q0bnU4N3ZBN3hGNnc0Q2JnR1pBaGZRcWdVWEFyOENwd0RqYWpta2w4Qkd3RHJnSXVEMVVSL0J5ZkIvWWFyUlhEVXdFV2tPeVN2ZHhCekFDdUlibzhTZ0Y5aUxqc1piTXYzSEhvNVFxbE9zZXBWU1RpaytkVXFxUDF0MFFRNzVGS2JWZktUVmZLVFhBYUh0K2duYlhhSjFYWThqK3E1VGFvcFI2VmlsVm8remZlNXBEZjFxRURrcXBlUTY5VVZwbXFMS1A2UVA2K2RnSS9UY3M3UTJPa0IyaG56L242RTlBbzFMcVQ2WFVIS1hVUUVzYm5Yb1ZVcGhVaXJ4NTQxSkIrbzJZaWxsL0ZYQWY4RFBpaFFLU2VNaHk0KzZpS3pBUWVFSzNPY0VpVStiUXZ6ZWl2RHN3eXFFWDloUzJNUTNhalByOXg5TjJmRnl5Z1JkMGZZK0FGSEEyOEREaUxSK0xvZE5oRkpJeHRCQWQ1dGhJa2Y0aE1vVTNKdDJBaFVCUC9lK21CTHJCNUVxaUEyS0ljNEdwUm5telEyY1FjTG1sZkNSd2lrT3ZOWFMzalduUXBpdFVtWU9NazFsblZGdi9PZXF5VVFsTUIxNUtxSGZDS0NSamlLSUIrTnR5L1VadWNXY3ZZSXJqZVhORXU5djE4MnpIYmdad1JRTDV1eXhsZDJUWmRoTE9CMTdwZ0hZZVFkWTFuVTRoTGFDam1BcThSZHIxZy9TN0JMY25XWUZNdkdiZ1V1QkpvSWNoRTd4MWJmVnNCUVpieWdNak1Pc0MrSXYwbSs0ODRHN1MzaWZNODhCVjltNjNZd3d3amZTaXZ4cTROYVp1cnR5UExKQlhrUGJDU1RpTWpFY0RjQTZ5V0QvRElqY2RlSTlra1VIZUtRYlBVSWRNNkpiUTFZaUVScTd6NTl1QXBjQlh3RXhnbFVVbVdHdllQRXdwMEFVSml5b1F0NTRpSFJiWUpzY2UzZFpNWUJKaWhKc3RjbGNDbHpqNkhxWUd5WFlGakFiNnhOVE5CL1AwL1ZBV3VvZUFwNEhaaUJjZUFueHRrYXNCcnMrbWMvbWtHSXhoTWpBTGVBMTRIWW03TDR5aEY1NnNWVUIvaTh3QmZiY3R3UHNENjRHTndDWmtVbThtN1Uxc2htZ3VWdjhBSG8zbzM5Q0ljaHQzaGo2UFRxQ1hEd1lpaGwyWGhXNFpiZGMyKzVERnMyMmROQ1NMK3ZOS01ZUkpJL1FWNWxNa2orNWlGSkpIQjNuem5HNlJXYWp2dG94TENwa0lKbDB5dEd1eUhObWJxREhLYmNZWnhZMjYzVkxnMm9UdDU0TVppQ2MrQXB5VVkxM3JnWitBeTR6eWMzT3NOMmVLd1Joc3hNa2VWZWtyaXMrQmovWG5KSC91RjVWVmlhSVppWjFOWEtGT3NMRVZwQ3U3SWh0endXWmN3Q0VreERzNVlaOWNOQUFIa1JnL29BZGlFSlY1Yk1QRTlWdDFDTVVRSnRub2xsa2trbnJFSTR6SlVqL0pYZ2hBYnlTM2JyTEhvVk1MZkdPVVRRRWVOOHFXSTFtMWZOS0VaSGgyR09YVkpQL3VOa3FBQ3l6bHUvTlFkMDRVZzJkWURIeHZsSzJMb2Fld0wzSW5JWm1MVE94RTFpc3R1cDR5WGVkR2g0NXRJVDRadS9HNmptalVBMS9RTmp3Y2FjZ2NCejVESm00K3FRWitRSXp2d3h6clVyVDNpaE94dnh3MjVkaFd6aFNETVN3QWxtU2h0eFJ4OWVaaSsycmlHY00rMG1HVURadFhyVUFtZmlOd0ZqQVdTWXVhMUFFckhYWDNRN0pmZS9WbkcxdDBIVTg1NnNrR0JaeUduRjlhU2Z2MVdoSktrZjd2Uk01SjNRYThIQ0c3TklkMjhrSXhHSU5ycDlYRmV1VEEyWHlqZkFKaVhKOWswSzlCOWpoYVNYdVlMa2o0OEE1d3pLSXpBRmtjSGtNMnJXeDdFU0NaTWRzNklxQUg0djFXSWJsNUcwdVFVQ3ZPVVpTa0JKNXNISktvNkpwbFBWV0loenVDSEtUc0d5RzNHRW1GZHlyRllBelowaE40RzVuUXBuZVlTV1pqNkljc0drMjJFRzBNbGNnUkNoYzdpSDQ3aG1sQ3dxQW9ZL2dTbVdSeHpnUWxKVWdvYkVjOHp3dFoxbE9PdkNCY0hBV2V5YkwrdkZLc0MrZzQ5TmIzNlpabmc1QllQaHVDemFkc3hxNFdPZWE4UDROYzRJbVdZRDhEVlFlc0p2YzBaeHhlUkhhZ1R3UU53SFZrVHBOM0NJVmtEQ25zcWJzNDZUemJrWWZ1K3I0STJmd3ltVTE2NzZHNzVYa1VnV3pTak5ZSHlINkJtZjJ4N1Z2MFJzNU83VVhDUFpNZmtZTnhmVWtiZlpnZzYxT0dlMHh0SVphWnZnVjRrT2lVY2lDYk5KUmFocVNMVnlmVU8yRVVVcGhVai93aGkva0RIV2d2Mm81YTJxZjlndFNnUXJ6QVhPTjVOK1FRM0N3dHV5dG1QNFBKdkNlRGprTGVlR3VRY09lN0NMbDlsbm9Pa3Y0K0M1QUZiWmdnQWRDSzdJcjNNcDRINjVIanVNZTAzdEsyb3YwZlA5VUNEMkZQQmdTeS8xanFNdG1HR1BJeUNtREJiRktpL0g4djZmRUFoUlVtZVR5ZGlqY0dqMGZqamNIajBYaGo4SGcwM2hnOEhvMDNCbzlINDQzQjQ5RjRZL0I0Tk40WVBCN04vNFd0M2RBMnZud0tBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNTUFBQUFsQ0FZQUFBRC9ZbDAxQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUdPbWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ055NHhMV013TURBZ056a3VZVGczTXpGaU9Td2dNakF5TVM4d09TOHdPUzB3TURvek56b3pPQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEE2UTNKbFlYUmxSR0YwWlQwaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2VHMXdPazF2WkdsbWVVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFU2TkRBck1ERTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNRFU2TkRBck1ERTZNREFpSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklpQndhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQU0l6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pFeU16aG1NMlF4TFRFMU1ETXRPRFUwTlMxaVptWTRMVE0yTmpBNU1EWTJNV0poT1NJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1qTTRaak5rTVMweE5UQXpMVGcxTkRVdFltWm1PQzB6TmpZd09UQTJOakZpWVRraUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE1qTTRaak5rTVMweE5UQXpMVGcxTkRVdFltWm1PQzB6TmpZd09UQTJOakZpWVRraVBpQThjR2h2ZEc5emFHOXdPa1J2WTNWdFpXNTBRVzVqWlhOMGIzSnpQaUE4Y21SbU9rSmhaejRnUEhKa1pqcHNhVDVDT0RnNFFUa3dORU01UlRrelJERTFNVGM0TmpOR09EZERPREl5TVVRM05qd3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBpWXprNVpqQTBaQzFrWVRZNExXWmtORFF0T0dNek5pMWhNakUwTlRVME1qTTRaamM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPamt3WVRGak1HTmhMVEJoTldJdE16RTBOQzA0TldZMExUVXdNbU0zTlROak9EQmhNend2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZZbVUwTjJObU1UWXRNelE1TkMwek5qUmhMV0poWkdVdE5tRmhaakF5Tnprd09ETTVQQzl5WkdZNmJHaytJRHd2Y21SbU9rSmhaejRnUEM5d2FHOTBiM05vYjNBNlJHOWpkVzFsYm5SQmJtTmxjM1J2Y25NK0lEeDRiWEJOVFRwSWFYTjBiM0o1UGlBOGNtUm1PbE5sY1Q0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbU55WldGMFpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNVEl6T0dZelpERXRNVFV3TXkwNE5UUTFMV0ptWmpndE16WTJNRGt3TmpZeFltRTVJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ESXpMVEExTFRFM1ZERXpPak0wT2pJNUt6QXhPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ01qTXVNQ0FvVjJsdVpHOTNjeWtpTHo0Z1BDOXlaR1k2VTJWeFBpQThMM2h0Y0UxTk9raHBjM1J2Y25rK0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K2RuOUNBUUFBQmpSSlJFRlVlSnp0bkh1SVZVVWN4ejkzdmRkVk05MVVNb293Uk5NS00xRXJ5Z2pab0xEQ3NqSXJLd29wa0F3emV2d1JSb1ZtRHl1cEtCKzFtbUhZQTZXaTk5TW9OY3NLTVFucFFVaytpbHhsTTEzZHZmM3htOU9lZSs3TWVkeHo3L1ZlK24zZ3NwdzVNL09iTStkOFozN3ptMkV6K1h3ZVJWR2c0WEEzUUZGcUJSV0RvaGhVRElwaVVERW9pa0hGb0NnR0ZZT2lHRlFNaW1KUU1TaUtRY1dnS0liczRXNkFSeWFUNlFuY0N4eVpwQml3QVBnQnVBQ1lCQndNeWQ4Si9BYXNBOVlHOGpZQTA0Q1JNVzBmQWg0RCtnTXpnSDBSN2Z3VitNYjhkam55NVlCYmdDR1dlMzhCOXhtN05zWUFOd0xCSXdVWm9CMllhYTduVWR6SGVlQnVvQTJZQUZ4Q1lkL2tnUFhBY3hhNzQ0QnJrTDcxN0swRlhnUWFnZGxBWDBlYnZmeDdnUitCejRFdHdXZW8yaW1KZkQ1ZkV6L2dLR0NuNllna3YvSG1VV1luTFBjWmNMcXZLM0xBNmdUbDl5TWY0RlVKN2Y2Q2ZOU05sdGZSMDdUTFpXKzhwWXpIc2hDYmYvdnkyZnE0RXhobzdqOFFVczlRaTkyYkxmbVdJUjk1RTdBOVFkKzBBMjhBWi9vTlZPc2JyQ1UzcVlQaVVTME8rODNmc0JuQnhqaGt0UE0rc0R6dVVkZUcvd1VtWVJBaTNHK0JVd1AzT3BGK3NORUluT3U0MXc4NEs4U21Yd3l1UHZhZVBleDVYZ09PQ0xrZnJDdnBPODBCRndGcmdJY1NsQ3NMdFNTR1V1bVZzdnhDa3JsbUhobWdXd3E3dzRFUGdjRUp5dHptU0Q4UnUydFZia1lnTG1HbHlRRjNBdk9yWU9zL2FtYk5FTUVHN0NOL0JwbjJ3OWhueXZaQ09qbklVT0E4WkhwMnNRbnhhek8rdEhhZ0ZUZyt3bjRZQTRDM0VHSEVvUTl3TnVKYis3a3JSUnVTOGlEd012QlRGV3pOQUY0SFBxMkNyYm9Sd3ppU3V5TWVNNUZwTndzc3d1NU9qQUpXaGRSeFB1TDcyaGpoU0Y4TnRDQ3p4MG5BZGNBd1M3NWh3RTJtYlhGNEFoanJ1ODRpQzk1cThnNXdHdUZCZ3lpdVJ3YVRma0F6TU5XU0o0Y0VSYW9paG5weGszcWtLTHNWaVRadFJxWmVHMUZ1MGloa0ZEL1c5eHNZV2dLK1JrYTFWY0JjWkZINHBTUHZsUlRPT21HTUJFN3dYZDhSczF3NUdVcFhkS3BVVmlMOXN4UzRGaEdIalRFcDdjU21YbWFHRnVDQTc3b0RlQnpZR0tPcy95T2I0c2l6bGZDQllUa3lNL25yK2hseFdWdzBCYTViZ2N1UTBHNlE0NUFSc2kya1BvOHNNQmw0MkZ4UGpsR21Fc3dCWHNLOTRJK2lMNFVoNWhYSTR2bUtRTDQwYm1naTZrVU1rd0xYSGNDYnhCUERJbUFQRXJZODJYSi9OL0FKNFdMb1owbmJTL0xvMXpiZ2QyUm04VE1BbVozaWlDRURYQTQ4aFR5UHpmV3FGaDhqa2JGeWNBajRBSGsyLzZCemRKbnFqNlJlM0tRZ25SU0dDOE1ZQW96R0xnU0FKY0QzSmJTaDFKMGcyNEsvTitHdVlIRDBIWXZzeXpRakl2ZTNLU3FnVUNyckxXbURrSTNTY3RGS2NiL2E5bU1xUXIyS29Sc1NXU21WZzRpWUhzRzlqb2lpZ2RMNmI1UWxyWlZ3Y1Q5dlNac0YzQnBJMjQyTTFwVmdEdkMrSlQxSmFEaUt3UlN2bmVMTWxtV2hYdHlrRnJvMjEwQkd5azBwNnR1RzdENy9HVFAvZk9TNGdMKy85aER1TDlzMjhDNTE1TjFoNm5QeEhuQTFoUnRlc3l6NW5pVCtjWktrOUVHaVhodVJXU2t0d2Y3cGhiakRRVEc0b25obHAxN0VNSTJ1c3k5SjJVQmhLQkprVWRaRWZESGNqNndSU3FVUm1JZzdmTHJSMU85eUNRWWdBWU43SXV6TUE5NHVwWUV4Nkk0Y0pYa1VtU1hLUlFZNEJsaE04WHVDZElOZUl1cEZEUDJCUDBvc3U0TGlUczRDendJWFVoaWxjakVGZVNuK1RiczhJalFYRXhHZnVnUFpWQnNka2pmcTQrb052RUM0R0RZanMyZmNFRzJwekVWbXFWTlMxck1FaWREMVFOWSt2UjM1MXFTMEU1dDZFVU1hdmtBK2xPRExhd1l1Qmw2TlVjZENTOW9CNEp5UU1zT0p0N1A4Tk9LQ1JiRWQyUzl4UlkrV1U3MDFZTE5wUzlocDFDaGNMcU9mWFlTZkRDZ3I5YnFBVGtKZllMcmozdUlVOVhxblBkUHdMbkI3ekx4dHdGZU9lKzJJcTFYcFdjRmpKK1dOSXJtWVNuV09mUUQvRHpGa2tMTTg2eXozbXBCNGZiWHBCSjVCWEtrNGJwckhTa2Y2RHVDanRJMUt5QUlxZDB4aUM3S2hhWXRlVll4YUVrTVdkM3U2eHlqdlduem1FTC9kTlpMZFFOZE9jaHc3SGcxSWlMZG5WRVpESi9MUnZvSWNHNTlPc1JBYXNMdXUzaDZFeTJYWVJGZGt5M2JFMnI5cDZKbzl2R2QzN1hmWW5uTUM4RTlJWGRrUWUwSGFnTytRVVBjWmlIdGJWVEw2djFZVlJhaWxtVUZSRGlzcUJrVXhxQmdVeGFCaVVCU0Rpa0ZSRENvR1JUR29HQlRGb0dKUUZNTy9RV2dicHBGMEdkSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHUUFBQUFjQ0FZQUFBQ1hreHI0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUU3bWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ055NHhMV013TURBZ056a3VZVGczTXpGaU9Td2dNakF5TVM4d09TOHdPUzB3TURvek56b3pPQ0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenBrWXowaWFIUjBjRG92TDNCMWNtd3ViM0puTDJSakwyVnNaVzFsYm5Sekx6RXVNUzhpSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJREl6TGpBZ0tGZHBibVJ2ZDNNcElpQjRiWEE2UTNKbFlYUmxSR0YwWlQwaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2VHMXdPazF2WkdsbWVVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNVEk2TWprck1ERTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01qTXRNRFV0TVRkVU1UUTZNVEk2TWprck1ERTZNREFpSUdSak9tWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklpQndhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQU0l6SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pjME1HRTVOVEJpTFRrME1XUXRNV1UwTlMxaU5EVTNMV1JpWVRjMk9HUXhNakZrWkNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM05EQmhPVFV3WWkwNU5ERmtMVEZsTkRVdFlqUTFOeTFrWW1FM05qaGtNVEl4WkdRaUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvM05EQmhPVFV3WWkwNU5ERmtMVEZsTkRVdFlqUTFOeTFrWW1FM05qaGtNVEl4WkdRaVBpQThlRzF3VFUwNlNHbHpkRzl5ZVQ0Z1BISmtaanBUWlhFK0lEeHlaR1k2YkdrZ2MzUkZkblE2WVdOMGFXOXVQU0pqY21WaGRHVmtJaUJ6ZEVWMmREcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamMwTUdFNU5UQmlMVGswTVdRdE1XVTBOUzFpTkRVM0xXUmlZVGMyT0dReE1qRmtaQ0lnYzNSRmRuUTZkMmhsYmowaU1qQXlNeTB3TlMweE4xUXhNem96TkRveU9Tc3dNVG93TUNJZ2MzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWREMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lESXpMakFnS0ZkcGJtUnZkM01wSWk4K0lEd3ZjbVJtT2xObGNUNGdQQzk0YlhCTlRUcElhWE4wYjNKNVBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BtTEY2Q2dBQUF4VVNVUkJWR2lCN1ZwNWRKVFZGZjk5NzF0bXp6WmpvbUZwd0FEQmtnU1NrR1d3SVFRd0FmV1VKYWhCUTBCUXNGV1dxTVVTYktXQVJjT1JRZ1ZFa3hLUWZXbmFTakZJMkhjTndZUm9GaVlFVUZER0VFSXlXK2FiK1Y3L0NOOHdSSVFNOUJ3NXgvek8rYzdNdkhmdmZXL3U3NzEzNzMwekRLVVVuYmgvUUg3dUNYVGlablFTY3AraGs1RDdESjJFM0dmNHZ4TlNWVldsckt1cjZ5VDZMc0hkcTRHNnVqcnkyYTVkNlVWRlJhUFBuVHNYSmpxZEFzTVFLVGdrMkR4a3lKQjk0NTU2YWt0TVRFemovMk95dndoUVN1LzZlWFB1bTg4L0ZCSnlUSzFVVWordGxocUNndWdEZWoxOVFLK25nZjcrVksxVTBxQ0FnRk9aenp6ejE2cXFLdVc5alBWTGVlNWE4Y2tubnZnN1Q5aTZRSDkvK21CdzhFOCtocUFnS3JBc2plalQ1OU1USjA0RSt6ck9MNDFJaGxMZkM4TVI2ZWtyOSs3Wk02eGJ0MjRYV0phVkxsNjhHQ29Jd2lPU0pNSHRkb013REZpT2c4dmxncisvUHdJREEzSGgvSG5vRFliOTI0dUtSdmZ2MzcvcGR2WlhybGd4Y3N1V0xlUE8xcDBORjEwdWpoQWlCUWNIbXdjTUdIQnErb3hYbGtWSHQrblgxZFVSaThXaWpZNk9icjdUbkUwbUUxZGNYSnhPSllrOEhCNXVHamx5NU5mZS9ZV3JWNmUwV0N4YWc4SFFrSm1aZWJ5anZpZ3BLUWsvVjE4ZjVwWWtFaDBWWFpHWWxQaDlSM1Z2Q1Y4Wm5QK1grYzhKSEhkR28xTFJKVXVXaktLVTRzOS8rdFBFMkppWTdXbkRoNjk2Tm5QOHdsRy8vZTJTaFBqNHplUEdqczM3NnF1djFCVVZGZG91RHoxMFJLTlMwVUZHNC9yYjJSOWtOSzRIVU0rekhGWHdBdVZaam5LRXBRUU1CVURYclZ0bnBKVGlQLy8rVDlTRElTSEhkQnJ0NlRXRmE1THZOTy9sNzc4L0VnQUZRT01IRHR6czNYZnc0TUd1QkV3OUFCclJ1ODh1WC95UmxaVTFUN2I3enFKRlQ5M3JEdkVwcUpkK1VXcFl2dno5M3dmNCs0ZGJiRFowNmRMbFd3QjRhOTY4d3JmbXpTdThuUzRocktSV3ExRjI4bVRNMmpWcmtpZGtaeDlzTC9QRTQ0OHZQM0wwcU5GZjV4ZG1zVmlnTnhpT1B4Z1NZaWFFU0MwdExkckxabk53WkdSa0pRQnMzcnpwNmU4dlgwNEVnSzFidGp3OUlYdkNRUUI0TlNkbmVubDVlVFFoUkZxNmJOa3JmZnYyZFFDQUlDaWNMRU5BQ0lGYXJiRjVqOHR4bkV1bjA0WFo3WGFvMVdwYiszbmREb0lnaUF6YUdHRTV6dVdMN3EzZ0V5RkhqeDR4TmwyOW1oZ1FFQUJDU0dXcnc2SHNpRjVsWmFXV0VFWUNBRUVRSWo3ODhNT3A3UWtwS3lzTDJyOXZmNHBPb3cyejIrMm1pWk1tcnZuam5EbHZQL3p3dzVJc1UxcGFhb2lLaW1vR2dGR2pSeGNWRnhlbk94d081YWd4bzdmTE1nY1BIQnBjV2xZNkJnQWFHaHJtQWZnV0FOUnF0VTArbmptT3ZjbHhLcFhLQVlZQnBSUXN5L3JrVkZFVWVRWnRsRGhiblIzeXgrM2dFeUg3OXUwYklnZ0M3SFk3VWxOVDl6NlhsWFc0STNyOSt2V3pUSHIrK2RXTDgvS1MxV28xenRiVjlheXRxUlY2OStudGxHWFdyMTgvM21xM1BhTGdCY1RHeFpYbUZ4UXNhRzhuTGk2dVFYNmZrWkZSR2hRVU5NNXF0YXFmZlBMSlNybGRVQWdPbnVVZ0NBcGN1WExGZ091RVVFbzl0UkhETURmWi9Ta1NUQ1lUeHpDTTVMMG8yb040MmVKNTNnbTBMUnhSRkRtRDN0RFlxM2N2NTAvcDN0S2VMOExWMWRVUmdpQkFGRVgwaVlpbzhVVjNTR3JxWHFXeWJRRTVuYzdFOHhmT2QvZnVQMWxhT3BCbjJ4S0JpWk1tcnI2VHZibTVjNmRrWm1adWZQR0ZGejVhdkhoeHhoZGZmR0Y0YlBqd2o2cXJxaDVScVZUZ09CWXZUWjIyS2lndzhOU0dEUnVNTEV0Y0RNT0FZUmhZclZaMVRVMk5JTnN5bVV6aG9CUU13MEJPY1FZWmpldU5pVW5ISGgwMDZNaUIvUWZDWkZsall0SkdnOTV3c21lUEh2c0FRS1BSdEZCUWFOUWFmTHgyYlhiM2J0ME9wU1FQUGpCczZORHZCaWNuSC9qbjluL0crT0tuRHUrUTZ1cHFwZFZxMWNxcmkvUHh2T1I1M3NteUxDaWxjTGxjYUgvYzJXeDJOY013VUNnVTZOMjdkNjNjL3NjMzNwalcxTlFVSUVrU1lWbk9wZEZxTEhsNWVTdEVsOGlaemVaNEFLQ1N0UFhVcVZQWVhWSUNqVW9ObnVkQktjVmw4K1Y0Q3NCcXRSNEo4QThBQUtoVUtuejlkZFg0d2I5SkRwZS9pOXZ0SmdCQUNQR3MrR3ZYcmdVME5qYkdjUndIU1pJOEM3ZXBxU25nYW1OampPUjJmOW5XNHZFSFRsZWVmZ0lBV01LQzUzazBOalltdnZUU3RKVTllL1pNNnovZzlwbWxqQTRURWhFUjRWQXBsUTY3clMzbWlhTG8wM0VuT2tYQjRYQkFxVlNDRUFLOVhuOVQ5UzV2L0xhZ2V5T3dMbHU2YkliTllZOGdZQ0NCUXVDRjJyeTh2QlU2UDUxRmxtRlpkbXhTWWxMSnRLblRmbGRjWEp6Mmc5bWNRZ2pCdUhIakVLVFhYMHlJanplYVRIWERLYVg1RE1OQWREclJkSzBwWHRZbllLRFQ2VUFwQlNGRWpuVk9qdVBBY1J3MFdvMW5MRUtJZEwzZFpUS1pPS2ZUS1RCZzRIQTRNR3pZc0U5bjVlUzg0WGE3MmRkZmZXM0xoUXNYd3MwLy9CQmZlckkwcnYrQS9pVWQ4Wk5QVHUzV3Zmc0ZzOWtNaFVLQnowK2NTQUN3b3FPNm16WnRmTWJ0ZG9OU0NvV2crRnlyMDkxVU96RFhnNzRrdWVGeXVUenpNaGdNRFZldlhnVWhCRzYzR3lxVnFoa0FxUHRHVExEWmJPcklxTWptbFIrc1hKUXlPS1h2dDk5OEEwRVE4SWZacy92RXhzYldBa0I1ZVlVZUFFUlJSRWhJeVA3SDB0SjJTWkpFR0lhUkdoc2I5Wi90MnZVYXZFb3k3L3JNZTRkNElZNWxXVkhlWmEzT1ZtUmtaQlNNR0RHaUFnQ09IenVXdi9EdHR4Y0J3RGNYdnVsK0MvMWJ3cWNZa3BDUWVFSjBPc0h6UEE0Zk9wVDhhazdPOUk3b0ZSVVY5ZCs4YVZPbVJxT0J5K1dDM3FCdmlJeU10SGpMc0J6bkFnVmFuVTZjcVQzVFcyNHYyYnRueUNjN2R2VFE2clJIM1c2M1p3VzN0am9FQm0wN3E3VzExWFA4TVF3ak1XaHpxQ1JKSG1JZERycy93ekJvYlcxRmo1NDl6cTc4WU9XaVZSK3VldnVEVlI4c21wTTdaeUVBVUZEUDhlVk5nczFxVTNzY2RuMThBTkJxdFczSEl5Z1lNR0FZNHBiN0FvT0N6UEw4bXB1Yi9UcmlKOEJIUWxLR3BPd1ZYUzdUb0VHUEl2Zk5OOE1LOHZNbnB6MzIyS3AvRkJTa2xwZVgvMmpRN2R1M3gyUm5UWmcvYmVyVVZTekw5aWVFd0c2M1YyZU9mM1pqZTltK0VSRlZUcmNJbHJCWXUzWk5sdHplcTFjdjErQ1V3ZWQ0am5kUlNqMkwyTnN4M3UvbGJJcTVuc2Jla0duTHBCaUcrZEdLZDNqRnN4c1pHT041NGZoYngwdVh5d1ZLYnlSZ2tpU3hYdlB3ekpYanVRNW5XajRSTW56NGNOTXptWmtiZHBmc1J0ZXVYVEVySnlkcTkrN2RMMDZlTXFXZ2VPZW5JNzFseTh2TC9TWlBtclI2MjdhdGMwRnBQTWR4YUcxdFJYQklpRGwzYnU2NjlyYWZueno1SDBwQlVhdFFLSEQ0ME9IazNEbTVMOHA5OWZWbnlmVnY2WEdtUXFsMFVMUVZaRXFsMGlITGlxS1RZeGdDU1pMUTB0TFNSVzVYcVZUWFpJTGFwN2tlZmE4WUl0ZE5icGNiQWk5NEhPcDFuSlphTEJaZUZGMjV6SFh5YkhhYlZwYjc3cnZ2d3VTQ01UUTA5RklIWGV6NzlmdWMzTnlGaHc4ZmZuVGgvUG1wLzkyNUUxRlJVYmg0NmRJckw3Lzg4ZzV2dWVqbzZHYTl3ZERRMHR3TVFnaEVVUVFGdmx5NmJOa3J0N0pyTkJvdkRSMDJ0T1MvTzNjS2ZscGQrTHZ2dkRON3c0YjFtWUVCZ1UxMmgwUFoxTlNVelBHOGh4QzMyKzJadTN6TUFJREI4RUNEVzNLREYzaThNWHYyWnpHeHNaZXpzN05IQ0lKZ2xXVzhheExnSmlkNzdHdTFXb3NrU1JBRUFUTm56bGlhWkRRZXFTaXZpTDUwNlZJb3ovTUEybmF2VEtCYXJjYnk5NWUvOVZWbDVVQ1daY1Vkbit6STBtcTBhTEZhem5YcjJ2WGJEanY0YnU1YnlzcktBcnFFaGg3cDA2c1hYYlowS1MxY1haaHl1dUswMWx1bTlzd1pybWVQSG5zZTBPdHBnSjhmOWRmcHl2TS95aDkySjl0RFUxTUxBTlN6SUpRakxPVUpTM21Xb3dMSFV3QzB5ME9oUnlpbHlKbVZNeDNYNzVCZWYrMjEzOG42YXdyWEpBT29GemllY29TbEFHaGVYaDVkOS9FNmVVUDk2Qzdyd0lFRDNlVzdNdmt1NjI5TGxvd0NVSy9nQlk4ZEFGU3RWRkVHb0VwQlVVTXB4WlRKVSthaTdUTmxHZUtSVS9BQ0JVQVQ0dU0zKytMYnUvcUJhc0NBQVUwbGUvWU1uVFZ6NXBMcE0yYWtBOWkzNDVNZGtmMGkrM2txNWw3aDRTNnJ4YUp0Ym02dWpZaUlxRjcwN3J1ejA5UFRxKzlrdTJUUG5zbWJObTVNM0xSNTg5TzFOVFVSMTY1ZDgyTlpWZ29ORGIyVWxwYTJhMnhHeGpZQUdCZy84UE94WThhOEowa1NpWTJOTFpQMUoyUlBPR2l6MlY3S0w4aWYvTU5sODRNcXRjcjI2MGQrUFNzZ01LQng3Smd4cjFNQVVaR1JwNzNIREFrSitYNzhzODh1c050dDZ1Ni8rdFY1QUpneGMrYS9KRWtpaFlXRjJWY2FyaGhVYXBVdEtTbnArSE5aV1I5djM3WXR3MjYzcXdBZ0lTSCsrTldtcTRzVEVoSk9oSVdGblZ1eGZNWHY2MHltY0pabHBTU2o4ZWlDQlF0eWZYTHV2ZDVPYnQyNk5TNWo3Tmk4bXBvYW9YMWY5b1FKODVhODk5Nm9lN0hmK1h0SUozNVdkUDRaNFQ1REp5SDNHZjRITlQ5a0M0cG9aSzRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3ZpZGVvLTk0ZjM2MDM2MTY3NTgxYjdmYTQzYzNlYWNmMmI0Y2Q0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aWRnZXRzLWE4YTg4ODNjMTg0MjBlOGM2NWJhYjdlNDkyNDI3MDAxLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XG5pbXBvcnQge1xuICBBY2NvcmRpb25CdXR0b24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxuICBzaW5nbGUsXG4gIHByZXZlbnRDbG9zZSxcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tICcuL3NoYXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJhc2VBY2NvcmRpb25cbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ29wZW4nIDogJ2Nsb3NlZCd9XG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50cyBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX0+XG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHN9XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Jhc2VBY2NvcmRpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5JbmRleGVzOlxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxuICAgIH07XG4gIH1cbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgbGV0IGFsbENoYW5nZXM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXYgc3g9e3N0eWxlcy5idXR0b25Ub2dnbGV9IHsuLi5yZXN0fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b25Ub2dnbGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgY29sb3I6ICdoZWFkaW5nU2Vjb25kYXJ5JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBmb250U2l6ZTogWzE2LCAxNiwgMTYsIDE4LCAyMF0sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxldHRlclNwYWNpbmc6IC0wLjUsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ0xlZnQ6IFsnMzNweCcsICc0NXB4J10sXG4gICAgbGluZUhlaWdodDogWzEuNSwgMS44XSxcbiAgICAnJiA+IHNwYW4nOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAyMCxcbiAgICAgIGhlaWdodDogMjAsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICB0b3A6IFsnMnB4JywgJzZweCddLFxuICAgICAgbGVmdDogWzAsICcxM3B4J10sXG4gICAgICAnJi5vcGVuOmFmdGVyJzoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUgLCAtNTAlKScsXG4gICAgICB9LFxuICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICB3aWR0aDogJzJweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlICwgLTUwJSknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBvcGVuOiB7XG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgfSxcbiAgY2xvc2VkOiB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwIH0sXG59O1xuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBzeD17e1xuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgICBsaW5lSGVpZ2h0OiAyLFxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgICBwYWRkaW5nTGVmdDogWyczM3B4JywgJzQ1cHgnXSxcbiAgICAgICAgJyA+IGRpdiAnOiB7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogWzEsIDJdLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAnMTdweCAwJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRTVFQ0Y0JyxcbiAgICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogJzBweCBzb2xpZCcsXG4gICAgICB9LFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cbiAgY2hhbmdlcy50eXBlID09PSAnY2xvc2luZycgJiYgc3RhdGUub3BlbkluZGV4ZXMubGVuZ3RoIDwgMlxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxuICAgIDogY2hhbmdlcztcblxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IGNoYW5nZXMub3BlbkluZGV4ZXMuc2xpY2UoLTEpIH1cbiAgICA6IGNoYW5nZXM7XG5cbmV4cG9ydCBjb25zdCBjb21iaW5lUmVkdWNlcnMgPSAoLi4ucmVkdWNlcnMpID0+IChzdGF0ZSwgY2hhbmdlcykgPT5cbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IEZlYXR1cmUgPSAoeyBmZWF0dXJlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZUl0ZW19PlxuICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy52YWx1ZX0gc3R5bGU9e3sgY29sb3I6IGZlYXR1cmU/LmNvbG9yIH19PlxuICAgICAgICB7ZmVhdHVyZS52YWx1ZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMudGl0bGV9PlxuICAgICAgICB7ZmVhdHVyZS50aXRsZX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZmVhdHVyZUl0ZW06IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3hTaGFkb3c6ICcwcHggMjVweCAxMDBweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA4KScsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIC8vIG1heFdpZHRoOiAzMDAsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcGFkZGluZzogW1xuICAgICAgJzAgNXB4JyxcbiAgICAgICcwIDE4cHgnLFxuICAgICAgJzAgMThweCcsXG4gICAgICAnMCAxMnB4JyxcbiAgICAgICcwIDIwcHgnLFxuICAgICAgJzAgMjVweCcsXG4gICAgICAnMCA1OXB4JyxcbiAgICBdLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWluSGVpZ2h0OiBbMTUwLCAxNTAsIDE1MCwgMTg1LCAyNDAsIDI4MCwgMzIwXSxcbiAgICB3aWR0aDogWydhdXRvJywgJ2F1dG8nLCAnYXV0bycsIDE3NywgMjI1LCAyNTgsIDMwMF0sXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGZvbnRTaXplOiBbMzAsIDMwLCAzMCwgMzAsIDUwLCA2MCwgNzJdLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjgzLCAwLjc2XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWycxNHB4JywgJzE2cHgnLCAnMTZweCcsICcxNXB4JywgJzE3cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS42MiwgMS40OF0sXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjJweCcsXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICBtdDogWycxcHgnLCAnMjBweCddLFxuICAgIGNvbG9yOiByZ2JhKCcjMEYyMTM3JywgMC43KSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBCdXR0b24sIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBJb01kQ2hlY2ttYXJrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgSW9Jb3NDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuY29uc3QgUHJpY2VUYWJsZSA9ICh7IHByaWNlLCBpc01vbnRobHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXtzdHlsZXMucHJpY2VUYWJsZX1cbiAgICAgIGNsYXNzTmFtZT17YHByaWNlQ2FyZCAke3ByaWNlLmlzUmVjb21tZW5kZWQgPyAncmVjb21tZW5kZWQnIDogJyd9YH1cbiAgICA+XG4gICAgICB7cHJpY2U/LmlzUmVjb21tZW5kZWQgJiYgKFxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBzeD17c3R5bGVzLnJlY29tbWVuZGVkfT5cbiAgICAgICAgICBSZWNvbW1lbmRlZFxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicHJpY2VIZWFkZXJcIj5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICB7cHJpY2UudGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAge3ByaWNlLnN1YnRpdGxlfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtwcmljZT8uYW1vdW50ICE9PSAwICYmIChcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInByaWNlQW1vdW50XCI+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnByaWNlTGFiZWx9PlxuICAgICAgICAgICAgICBTdGFydGluZyBmcm9tXG4gICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMucHJpY2VBbW91bnR9PlxuICAgICAgICAgICAgICB7cHJpY2U/LmFtb3VudD8udG9GaXhlZCgwKX1cbiAgICAgICAgICAgICAgL21vXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMubGlzdH0+XG4gICAgICAgIHtwcmljZT8uZmVhdHVyZXM/Lm1hcCgoZmVhdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2ZlYXQuaWR9IGNsYXNzTmFtZT17IWZlYXQuaXNBdmFpbGFibGUgPyAndW5hdmFpbGFibGUnIDogJyd9PlxuICAgICAgICAgICAge2ZlYXQuaXNBdmFpbGFibGUgPyAoXG4gICAgICAgICAgICAgIDxJb01kQ2hlY2ttYXJrQ2lyY2xlIGNvbG9yPVwiIzNGREJCMVwiIHNpemU9XCIzMHB4XCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJb0lvc0Nsb3NlQ2lyY2xlIGNvbG9yPVwiI0NFRDdFMVwiIHNpemU9XCIzMHB4XCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3Bhbj57ZmVhdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjbGFzc05hbWU9XCJwcmljZUJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSB2YXJpYW50PVwicHJpbWFyeU1kXCI+XG4gICAgICAgICAge3ByaWNlLmJ1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhYmxlO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNlVGFibGU6IHtcbiAgICBib3JkZXI6IGAxcHggc29saWQgI0YzRjRGNWAsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiBbJzMwcHggMjBweCcsIG51bGwsIG51bGwsICc1NXB4IDIwcHgnLCBudWxsXSxcbiAgICAnJi5yZWNvbW1lbmRlZCc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlcldpZHRoOiAnMi41cHgnLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSc6IHtcbiAgICAgICAgcHQ6IDY1LFxuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjBGMEY1JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAwIDEwcHggMTBweCcsXG4gICAgICAgICcucHJpY2UtbGFiZWwnOiB7XG4gICAgICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgICAgfSxcbiAgICAgICAgJy5wcmljZS12YWx1ZSc6IHtcbiAgICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IDIyLFxuICAgIGxpbmVIZWlnaHQ6IDEuMzEsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIG10OiAnNnB4JyxcbiAgfSxcbiAgcHJpY2VMYWJlbDoge30sXG4gIHByaWNlQW1vdW50OiB7XG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICcyNnB4JyxcbiAgICBsaW5lSGVpZ2h0OiAxLjM5LFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gIH0sXG4gIHJlY29tbWVuZGVkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICBtaW5IZWlnaHQ6ICczMXB4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTRweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDE3LFxuICAgIGxlZnQ6IFsyMCwgbnVsbCwgbnVsbCwgbnVsbCwgNDBdLFxuICB9LFxuICBsaXN0OiB7XG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgcGFkZGluZzogMCxcbiAgICBtdDogWzM1LCBudWxsLCBudWxsLCA1MF0sXG4gICAgbWF4V2lkdGg6IDM0MCxcbiAgICBsaToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgbGluZUhlaWdodDogMS42MixcbiAgICAgICcrIGxpICc6IHtcbiAgICAgICAgbXQ6IDMwLFxuICAgICAgfSxcbiAgICAgIHN2Zzoge1xuICAgICAgICBtcjogJzEzcHgnLFxuICAgICAgICBtdDogJzVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy51bmF2YWlsYWJsZSc6IHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkNGMkU4JyxcbiAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgcGFkZGluZ0xlZnQ6IDQ1LFxuICAgIHBhZGRpbmdSaWdodDogNDUsXG4gICAgbWFyZ2luVG9wOiBbMzUsIG51bGwsIG51bGwsIDcwXSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBJbWFnZSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcblxuY29uc3QgVWx0aW1hdGVGZWF0dXJlID0gKHsgZGF0YSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlfSB7Li4ucHJvcHN9PlxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPEltYWdlIHNyYz17ZGF0YT8uaWNvbn0gYWx0PXtkYXRhPy50aXRsZX0gLz5cbiAgICAgIDwvZmlndXJlPlxuICAgICAgPEJveD5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiPntkYXRhPy50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGFzPVwicFwiPntkYXRhPy5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmZWF0dXJlOiB7XG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsICdjZW50ZXInLCAnY2VudGVyJywgJ2NlbnRlcicsICdsZWZ0J10sXG4gICAgbWF4V2lkdGg6IFsyMzAsIDIzMCwgMjMwLCAyMzAsICdub25lJ10sXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBmaWd1cmU6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGJveFNoYWRvdzogJzBweCA4cHggMjRweCByZ2JhKDUzLCA5NSwgMTU4LCAwLjEpJyxcbiAgICAgIGhlaWdodDogJzkwcHgnLFxuICAgICAgbWFyZ2luOiBbXG4gICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICcwIDAgNDBweCcsXG4gICAgICBdLFxuICAgICAgd2lkdGg6ICc5MHB4JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgbGluZUhlaWdodDogMS4yOCxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjYsIDEuNiwgMS42LCAxLjg4XSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBGb290ZXJXaWRnZXQgPSAoeyB0aXRsZSwgaXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJXaWRnZXR9PlxuICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiPnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0ga2V5PXtpfSBsYWJlbD17bGFiZWx9IHZhcmlhbnQ9XCJmb290ZXJcIiAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldpZGdldDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXJXaWRnZXQ6IHtcbiAgICBoNDoge1xuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY4LFxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAnMjhweCAwIDAnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGE6IHtcbiAgICAgICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjgpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnQWJvdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdBZmZpbGlhdGUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdDYXJlZXJzICYgQ3VsdHVyZSAgICAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdCbG9nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUHJlc3MnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdTdXBwb3J0IENlbnRlcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdBYm91dCBVcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0NvcHlyaWdodCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1BvcHVsYXIgQ2FtcGFpZ24nLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdPdXIgSW5mb3JtYXRpb24nLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnUmV0dXJuIFBvbGljeSAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdQcml2YWN5IFBvbGljeScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1Rlcm1zICYgQ29uZGl0aW9ucycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1NpdGUgTWFwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU3RvcmUgSG91cnMnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdNeSBBY2NvdW50JyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1ByZXNzIGlucXVpcmllcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1NvY2lhbCBtZWRpYSAnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJyMhJyxcbiAgICAgICAgbGFiZWw6ICdkaXJlY3RvcmllcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0ltYWdlcyAmIEItcm9sbCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1Blcm1pc3Npb25zJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiAnUG9saWN5JyxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ0FwcGxpY2F0aW9uIHNlY3VyaXR5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcjIScsXG4gICAgICAgIGxhYmVsOiAnU29mdHdhcmUgcHJpbmNpcGxlcycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1Vud2FudGVkIHNvZnR3YXJlIHBvbGljeScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnIyEnLFxuICAgICAgICBsYWJlbDogJ1Jlc3BvbnNpYmxlIHN1cHBseSBjaGFpbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyTmF2ID0gW1xuICB7XG4gICAgcGF0aDogJyMhJyxcbiAgICBsYWJlbDogJ0hvbWUnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJyMhJyxcbiAgICBsYWJlbDogJ0FkdmVydGlzZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnU3VwcG9ydHMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJyMhJyxcbiAgICBsYWJlbDogJ01hcmtldGluZycsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnIyEnLFxuICAgIGxhYmVsOiAnRkFRJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgRm9vdGVyV2lkZ2V0IGZyb20gJ2NvbXBvbmVudHMvZm9vdGVyLXdpZGdldCc7XG5pbXBvcnQgeyBtZW51SXRlbXMsIGZvb3Rlck5hdiB9IGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJmb290ZXJcIiB2YXJpYW50PVwibGF5b3V0LmZvb3RlclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3RlclRvcElubmVyfT5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcbiAgICAgICAgICAgIDxGb290ZXJXaWRnZXQga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVySW5uZXJ9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPlxuICAgICAgICAgICAgICBDb3B5cmlnaHQgYnkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmVkUSwgSW5jXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94IGFzPVwidWxcIiBzeD17c3R5bGVzLmZvb3Rlck5hdn0+XG4gICAgICAgICAgICB7Zm9vdGVyTmF2Lm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9e3BhdGh9IGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3RlclRvcElubmVyOiB7XG4gICAgZ2FwOiBbNTAsIG51bGwsIG51bGwsIG51bGwsIDE3LCA1MF0sXG4gICAgbWI6IFs1MF0sXG4gICAgZGlzcGxheTogWydncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoNSwgMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgZm9vdGVySW5uZXI6IHtcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgI0Q5RTBFN2AsXG4gICAgZGlzcGxheTogWydibG9jaycsIG51bGwsICdmbGV4J10sXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nOiAnMzVweCAwIDQwcHgnLFxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSc6IHtcbiAgICAgIHBiOiAxMCxcbiAgICB9LFxuICB9LFxuICBjb3B5cmlnaHQ6IHtcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsIG51bGwsICdyb3cnXSxcbiAgICBzcGFuOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgbGluZUhlaWdodDogMS4yOSxcbiAgICAgIGNvbG9yOiByZ2JhKCcjMEYyMTM3JywgMC42KSxcbiAgICAgIG10OiBbJzE4cHgnLCAnMThweCcsICc3cHgnXSxcbiAgICB9LFxuICB9LFxuICBmb290ZXJOYXY6IHtcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBtYXJnaW46IFsnMTVweCAwIDAnLCAnMTVweCAwIDAnLCAnMCddLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgZGlzcGxheTogWydmbGV4J10sXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICd1bnNldCddLFxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsICdmbGV4LXN0YXJ0J10sXG4gICAgJ2xpICsgbGknOiB7XG4gICAgICBtbDogWycxOHB4JywgJzE4cHgnLCAnMjBweCddLFxuICAgICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpJzoge1xuICAgICAgICBtYjogJzEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBwYXRoOiAnaG9tZScsXG4gICAgbGFiZWw6ICdIb21lJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd1bHRpbWF0ZS1mZWF0dXJlJyxcbiAgICBsYWJlbDogJ0Fib3V0JyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcmljaW5nJyxcbiAgICBsYWJlbDogJ1ByaWNpbmcnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2ZhcScsXG4gICAgbGFiZWw6ICdGYXEnLFxuICB9LFxuXTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgTWVudUJ1dHRvbiwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHckNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvZ3InO1xuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW21vYmlsZU1lbnUsIHNldE1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5Nb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU1lbnUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU1lbnUoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxuICAgICAgPFN0aWNreSBlbmFibGVkPXt0cnVlfSB0b3A9ezB9IGFjdGl2ZUNsYXNzPVwiaXMtc3RpY2t5XCIgaW5uZXJaPXsxMH0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgICAgdmFyaWFudD1cImxheW91dC5oZWFkZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT17bW9iaWxlTWVudSA/ICdpcy1tb2JpbGUtbWVudScgOiAnJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGVySW5uZXJ9PlxuICAgICAgICAgICAgICA8TG9nbyBpc1doaXRlPXttb2JpbGVNZW51fSAvPlxuXG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgYXM9XCJuYXZcIlxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2YmFyfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9iaWxlTWVudSA/ICduYXZiYXIgYWN0aXZlJyA6ICduYXZiYXInfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgYXM9XCJ1bFwiXG4gICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdkxpc3R9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vYmlsZU1lbnUgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vYmlsZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlNZFwiIHN4PXtzdHlsZXMuZXhwbG9yZX0+XG4gICAgICAgICAgICAgICAgICBFeHBsb3JlIE5vd1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAge21vYmlsZU1lbnUgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIHN4PXtzdHlsZXMuY2xvc2VCdXR0b259PlxuICAgICAgICAgICAgICAgICAgPEdyQ2xvc2VcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2JpbGVNZW51fVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbiBhcmlhLWxhYmVsPVwiVG9nZ2xlIE1lbnVcIiBvbkNsaWNrPXtvcGVuTW9iaWxlTWVudX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU3RpY2t5PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcldyYXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICcuaXMtc3RpY2t5Jzoge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDZweCAxM3B4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgICAgICBweTogWzEyXSxcbiAgICAgICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlcklubmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgJy5uYXZiYXInOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndGV4dCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHA6ICcyMHB4IDMwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDZweCAxM3B4IHJnYmEoMzgsNzgsMTE4LDAuMSknLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtIDc3cHgpJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcbiAgICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICB9LFxuICAgICAgICB1bDoge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgJ2xpICsgbGknOiB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBuYXZiYXI6IHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4R3JvdzogMSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIG5hdkxpc3Q6IHtcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgcDogMCxcbiAgICAnLm5hdi1pdGVtJzoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbWFyZ2luOiAnMCAyMHB4JyxcbiAgICB9LFxuICAgICcuYWN0aXZlJzoge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICB9LFxuICB9LFxuICBleHBsb3JlOiB7XG4gICAgZGlzcGxheTogWydibG9jaycsICdibG9jaycsICdibG9jaycsICdibG9jaycsICdub25lJ10sXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiA0MCxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgfSxcbiAgY2xvc2VCdXR0b246IHtcbiAgICBoZWlnaHQ6ICczMnB4JyxcbiAgICBwYWRkaW5nOiAnNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJzMycHgnLFxuICAgIG1sOiAnM3B4JyxcbiAgICBwYXRoOiB7XG4gICAgICBzdHJva2U6ICcjZmZmJyxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHsgc3JjLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpblxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgYXMgTWVudUxpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBIaU91dGxpbmVDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9oaSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUxpbmtcbiAgICAgIHRvPXtwYXRofVxuICAgICAgc3B5PXt0cnVlfVxuICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICBzbW9vdGg9e3RydWV9XG4gICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxuICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvTWVudUxpbms+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPEEgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9BPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMZWFybk1vcmUoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxBIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSB7Li4ucmVzdH0+XG4gICAgICAgIHtsYWJlbCA/PyAnTGVhcm4gTW9yZSd9IDxIaU91dGxpbmVDaGV2cm9uUmlnaHQgLz5cbiAgICAgIDwvQT5cbiAgICA8L05leHRMaW5rPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxlYXJuTW9yZToge1xuICAgIGNvbG9yOiAnbGluaycsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgc3ZnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnbWFyZ2luLWxlZnQgMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgICBtbDogJzNweCcsXG4gICAgfSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgc3ZnOiB7XG4gICAgICAgIG1sOiAnOHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBsb2dvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IGxvZ29XaGl0ZSBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IGlzV2hpdGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBwYXRoPVwiL1wiXG4gICAgICBzeD17e1xuICAgICAgICB2YXJpYW50OiAnbGlua3MubG9nbycsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbWFnZSBzcmM9e2lzV2hpdGUgPyBsb2dvV2hpdGUgOiBsb2dvfSBhbHQ9XCJGUkVETUlORCBESUdJVEFMIFNDSE9PTFwiIC8+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyQ2xvc2UgfSBmcm9tICdyZWFjdC1pY29ucy9ncic7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG4vLyBpbXBvcnQgJy4vbW9kYWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgb3ZlcmxheToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC43NSknLFxuICAgIHpJbmRleDogMTAwLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAndW5zZXQnLFxuICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogJzcwJScsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBNb2RhbCh7IGlzT3BlbiwgY2xvc2VNb2RhbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiAoZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCcpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1vZGFsXG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICBjbG9zZVRpbWVvdXRNUz17MjAwMH1cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1JlYWN0TW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VCdXR0b24gPSAoeyBvbkNsaWNrLCBzaXplLCBjb2xvciwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gc3g9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5wcm9wc30+XG4gICAgICA8R3JDbG9zZSBzaXplPXtzaXplID8/ICcyNHB4J30gY29sb3I9e2NvbG9yID8/IGNvbG9yfSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b246IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcmlnaHQ6IDAsXG4gICAgdG9wOiAnLTQwcHgnLFxuICAgIHBhdGg6IHtcbiAgICAgIHN0cm9rZTogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcblxuY29uc3QgUmVzcG9uc2l2ZUlmcmFtZSA9ICh7IHNyYywgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMudmlkZW9Db250YWluZXJ9PlxuICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiA8aWZyYW1lIHNyYz17c3JjfSB7Li4ucHJvcHN9PjwvaWZyYW1lPn1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVJZnJhbWU7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdmlkZW9Db250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaWZyYW1lOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBTZWN0aW9uSGVhZGluZyA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nfSB7Li4ucHJvcHN9PlxuICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGluZztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXhXaWR0aDogNTgwLFxuICAgIG1hcmdpbjogJzAgYXV0byA2MHB4JyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogWycyNHB4JywgJzMwcHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS41XSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICBmb250U2l6ZTogWycxNHB4JywgJzE2cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgMi4yXSxcbiAgICBtdDogJzEwcHgnLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xuICBkZXNjcmlwdGlvbiA9ICdGcmVkbWluZCBEaWdpdGFsIFNjaG9vbCcsXG4gIGF1dGhvciA9ICdNb2JpdmVyaW8sIEluYycsXG4gIG1ldGEsXG4gIHRpdGxlID0gJ0ZyZWRtaW5kIERpZ2l0YWwgU2Nob29sJyxcbn0pIHtcbiAgY29uc3QgbWV0YURhdGEgPSBbXG4gICAge1xuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgXS5jb25jYXQobWV0YSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4gICAgICApKX1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblNFTy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhbmc6IGBlbmAsXG4gIG1ldGE6IFtdLFxuICBkZXNjcmlwdGlvbjogYGAsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmVzIGZyb20gJ3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmVzJztcbmltcG9ydCBGZWF0dXJlcyBmcm9tICdzZWN0aW9ucy9mZWF0dXJlcyc7XG5pbXBvcnQgSW50cm9WaWRlbyBmcm9tICdzZWN0aW9ucy9pbnRyby12aWRlbyc7XG5pbXBvcnQgVXNlZnVsRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdXNlZnVsLWZlYXR1cmVzJztcbmltcG9ydCBXaWRnZXRzIGZyb20gJ3NlY3Rpb25zL3dpZGdldHMnO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnc2VjdGlvbnMvcHJpY2luZyc7XG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPFNFTyB0aXRsZT1cIkZyZWRtaW5kIERpZ2l0YWwgU2Nob29sXCIgLz5cbiAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICA8VWx0aW1hdGVGZWF0dXJlcyAvPlxuICAgICAgICA8RmVhdHVyZXMgLz5cbiAgICAgICAgPEludHJvVmlkZW8gLz5cbiAgICAgICAgPFVzZWZ1bEZlYXR1cmVzIC8+XG4gICAgICAgIDxXaWRnZXRzIC8+XG4gICAgICAgIDxQcmljaW5nIC8+XG4gICAgICAgIDxGYXEgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nJztcbmltcG9ydCBwYXlwYWwgZnJvbSAnYXNzZXRzL2ltYWdlcy9wYXlwYWwucG5nJztcbmltcG9ydCBnb29nbGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9nb29nbGUucG5nJztcbmltcG9ydCBkcm9wYm94IGZyb20gJ2Fzc2V0cy9pbWFnZXMvZHJvcGJveC5wbmcnO1xuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBpZD1cImhvbWVcIiBhcz1cInNlY3Rpb25cIiB2YXJpYW50PVwic2VjdGlvbi5iYW5uZXJcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICBIZXkgVGVjaCBCcm8gJiBTaXNcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgV2VsY29tZSB0byBzY2hvb2wuIFdlIFRlYWNoIFRlY2ggJiBEaWdpdGFsIFNraWxscyBIZXJlXG4gICAgICAgICBcblxuXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgICBFbnJvbCBOb3dcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNsaWVudHN9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwYXlwYWx9IGFsdD1cInBheXBhbFwiIC8+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2dvb2dsZX0gYWx0PVwiZ29vZ2xlXCIgLz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZHJvcGJveH0gYWx0PVwiZHJvcGJveFwiIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jhbm5lcn0gYWx0PVwiYmFubmVyXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCAnZmxleCcsICdncmlkJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCAxZnIpJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMHZoJ10sXG4gICAgcHQ6IFsxMDAsIG51bGwsIG51bGwsIDEyMCwgMTMwLCAxMjAsIDBdLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgbWF4V2lkdGg6IFs1MDcsIG51bGwsIG51bGwsIDMyNCwgNDUwXSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICc0MnB4JywgJzQwcHgnLCAnNjBweCddLFxuICAgIGxpbmVIZWlnaHQ6IDEuMzMsXG4gICAgbGV0dGVyU3BhY2luZzogJy0xcHgnLFxuICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBmb250U2l6ZTogWycxNHB4JywgJzE0cHgnLCAnMTRweCcsICcxNnB4JywgJzE2cHgnLCAnMThweCddLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCAxLjg1LCAxLjg1LCAxLjg1LCAxLjg1LCAyLjMzXSxcbiAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxuICAgIG10OiBbJzE0cHgnLCAnMTlweCddLFxuICB9LFxuICBidXR0b246IHtcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnZmxleCddLFxuICAgIG10OiBbNDUsIDQ1LCA0NSwgMjUsIDI1XSxcbiAgfSxcbiAgY2xpZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogWycyMHB4JywgJzQ1cHgnLCAnNDVweCcsICczMHB4JywgJzQ1cHgnXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbJzgwcHgnLCAnMTAwJScsICcxMDAlJywgJzEwMCUnXSxcbiAgICAgICcrIGltZyc6IHtcbiAgICAgICAgbWw6IFsnMTRweCcsICcyOHB4JywgJzI4cHgnLCAnMjBweCddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbGx1c3RyYXRpb246IHtcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgJ2Jsb2NrJ10sXG4gICAgbXQ6IFsnMzBweCcsICczMHB4JywgMF0sXG4gICAgbWI6IFsnNjBweCcsICc2MHB4JywgMF0sXG4gICAgaW1nOiB7XG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJScsICcxMDAlJywgJzkwJScsICc5MCUnLCAnMTAwJSddLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdjb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuY29uc3QgZmFxcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnSG93IHRvIGNvbnRhY3Qgd2l0aCByaWRlcnMgZW1lcmdlbmN5ID8nLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBHZXQgeW91ciB3ZWJzaXRlIGFkcyB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXG4gICAgICAgIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIHdoaWNoXG4gICAgICAgIGd1aWRlbGluZXMgZXZlciB3aXRoIG11bHRpcGxlIGZlYXR1cmVzLlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQXBwIGluc3RhbGxhdGlvbiBmYWlsZWQsIGhvdyB0byB1cGRhdGUgc3lzdGVtIGluZm9ybWF0aW9uPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIFJoaW5vIHNraW4gbWF5YmUgdGhpY2sgYnV0IGl0IGNhbiBiZSBxdWl0ZSBzZW5zaXRpdmUgdG8gc3VuYnVybnMgYW5kXG4gICAgICAgIGluc2VjdCBiaXRlcyB3aGljaCBpcyB3aHkgdGhleSBsaWtlIHdhbGxvdyBzbyBtdWNoIOKAkyB3aGVuIHRoZSBtdWQgZHJpZXNcbiAgICAgICAgaXQgYWN0cyBhcyBwcm90ZWN0aW9uIGZyb20gdGhlIHN1bmJ1cm5zIGFuZCBpbnNlY3RzLlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgV2Vic2l0ZSByZXNwb25zZSB0YWtpbmcgdGltZSwgaG93IHRvIGltcHJvdmU/YCxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbVxuICAgICAgICBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGFcbiAgICAgICAgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWVcbiAgICAgICAgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0XG4gICAgICAgIHRoZSBob21lLlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgTmV3IHVwZGF0ZSBmaXhlZCBhbGwgYnVnIGFuZCBpc3N1ZXNgLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBJZiB5b3XigJlyZSBsb29raW5nIHRvIGh1bnQgYSB1bmljb3JuLCBidXQgZG9u4oCZdCBrbm93IHdoZXJlIHRvIGJlZ2luLCB0cnlcbiAgICAgICAgTGFrZSBTdXBlcmlvciBTdGF0ZSBVbml2ZXJzaXR5IGluIFNhdWx0IFN0ZS4gTWFyaWUsIE1pY2hpZ2FuLiBTaW5jZVxuICAgICAgICAxOTcxLCB0aGUgdW5pdmVyc2l0eSBoYXMgaXNzdWVkIHBlcm1pdHMgdG8gdW5pY29ybiBxdWVzdGVycy5cbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJmYXFcIiB2YXJpYW50PVwic2VjdGlvbi5mYXFcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgdGl0bGU9XCJEbyB5b3UgaGF2ZSBhbnkgcXVlc2l0b25cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiT3VyIHN1cHBvcnQgdGVhbSByZWFkeSB0byBoZWxwIHlvdSwgcGxlYXNlIGNvbnRhY3Qgd2l0aCB0aGVtXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzY1MHB4JywgJzc0NXB4J10sXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIG14OiAnYXV0bycsXG4gICAgICAgICAgICBteTogLTQsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2ZhcXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9mZWF0dXJlJztcbmltcG9ydCB7IExlYXJuTW9yZSB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5cbmltcG9ydCBjaGVja0ZpbGxlZENpcmNsZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS1maWxsZWQucG5nJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgY29sb3I6ICcjMjhEMURDJyxcbiAgICB2YWx1ZTogJzgwSysnLFxuICAgIHRpdGxlOiAnV2UgaGF2ZSBtb3JlIHRoYW4gY3VzdG9tZXJzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGNvbG9yOiAnI0ZGNzUzQScsXG4gICAgdmFsdWU6ICcxNTArJyxcbiAgICB0aXRsZTogJ0ZyZWUgb25saW5lIHR1dG9yaWFscyB2aWRlb3MgYXZhaWxhYmxlJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGNvbG9yOiAnI0ZBNTc4RScsXG4gICAgdmFsdWU6ICc5MCsnLFxuICAgIHRpdGxlOiAnRGFpbHkgdXBkYXRlZCBibG9nIHBvc3QgbWFpbnRhaW4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgY29sb3I6ICcjMjhEQ0IyJyxcbiAgICB2YWx1ZTogJyYgM00nLFxuICAgIHRpdGxlOiAnSm9iIHBvc3RlZCBldmVyeWRheWBzIHdpdGggIHF1YWxpZmljYXRpb24nLFxuICB9LFxuXTtcblxuY29uc3QgRmVhdHVyZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiB2YXJpYW50PVwic2VjdGlvbi5mZWF0dXJlc1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubGVmdENvbnRlbnR9PlxuICAgICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8RmVhdHVyZSBrZXk9e2l0ZW0/LmlkfSBmZWF0dXJlPXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgU21hcnQgSmFja3BvdHMgPGJyIC8+XG4gICAgICAgICAgICAgICAgICB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJmFtcDsgYW55d2hlcmVcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMubGlzdEl0ZW19IGFzPVwicFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGVja0ZpbGxlZENpcmNsZX0gYWx0PVwiY2hlY2sgaWNvblwiIC8+XG4gICAgICAgICAgICAgIFVubGltaXRlZCBkZXNpZ24gcG9zc2liaWxpdHlcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMubGlzdEl0ZW19IGFzPVwicFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGVja0ZpbGxlZENpcmNsZX0gYWx0PVwiY2hlY2sgaWNvblwiIC8+XG4gICAgICAgICAgICAgIENvbXBsZXRlbHkgcmVzcG9uc2l2ZSBmZWF0dXJlc1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmV4cGxvcmV9PlxuICAgICAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9XCIjIVwiIGxhYmVsPVwiRXhwbG9yZSBNb3JlXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGVudFdyYXBwZXI6IHtcbiAgICBnYXA6IFszMCwgMzAsIDMwLCAzMCwgNDAsIDYwLCA3MCwgMTIwXSxcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCAnZmxleCcsICdncmlkJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4tcmV2ZXJzZScsICdjb2x1bW4tcmV2ZXJzZScsICd1bnNldCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICcxLjJmciAwLjhmcicsXG4gICAgICAnMS4yZnIgMC44ZnInLFxuICAgICAgJzEuMmZyIDAuOGZyJyxcbiAgICAgICcxLjFmciAwLjlmcicsXG4gICAgICAnMS4xZnIgMC45ZnInLFxuICAgICAgJzEuMWZyIDAuOWZyJyxcbiAgICAgICcxLjJmciAwLjhmcicsXG4gICAgXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgbGVmdENvbnRlbnQ6IHtcbiAgICBnYXA6IFsyMCwgMjAsIDIwLCAyMCwgMzAsIDQ1XSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgMWZyKScsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICc+IGRpdic6IHtcbiAgICAgICc6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgbXQ6IFsnNjVweCddLFxuICAgICAgfSxcbiAgICAgICc6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICBtdDogWyctNjVweCddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByaWdodENvbnRlbnQ6IHtcbiAgICAvLyBtbDogWycxMjBweCddLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWI6IFsnMjBweCddLFxuICAgIG10OiBbMCwgMCwgJy03MHB4J10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI4cHgnLCAnMjhweCcsICcyOHB4JywgJzI4cHgnLCAnMzZweCcsICc0MHB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS41XSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgICAgYnI6IHtcbiAgICAgICAgZGlzcGxheTogWydub25lJywgJ25vbmUnLCAnbm9uZScsICdibG9jayddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIG10OiBbJzE1cHgnLCAnMTBweCddLFxuICAgIH0sXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBsaW5lSGVpZ2h0OiAyLjgxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBpbWc6IHtcbiAgICAgIG1yOiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbiAgZXhwbG9yZToge1xuICAgIG10OiBbJzIwcHgnLCAnMjBweCcsICcyMHB4JywgJzIwcHgnLCAnNDBweCddLFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IHsgTGVhcm5Nb3JlIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB2aWRlb0Jhbm5lciBmcm9tICdhc3NldHMvaW1hZ2VzL3ZpZGVvLnBuZyc7XG5pbXBvcnQgUGxheSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3BsYXkucG5nJztcbmltcG9ydCBNb2RhbCwgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvbW9kYWwvbW9kYWwnO1xuaW1wb3J0IFJlc3BvbnNpdmVJZnJhbWUgZnJvbSAnY29tcG9uZW50cy9yZXNwb25zaXZlLWlmcmFtZSc7XG5cbmNvbnN0IEludHJvVmlkZW8gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0gdmFyaWFudD1cInNlY3Rpb24uaW50cm9WaWRlb1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiICAgRXF1aXAgWW91cnNlbGYgZm9yIGEgV29ybGQgb2YgT3Bwb3J0dW5pdGllcy5cIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiIEdyYWIgWW91ciBTZWF0ICYgR2V0IGEgQ2hpbGxlZCBEcmluay4gTGV04oCZcyBMZWFybiBhbmQgRWFybi4gV2UgaGF2ZSBCZWVuIFdhaXRpbmcgZm9yIFlvdVxuICAgICAgICAgICAgWW91IGFyZSBhdCB0aGUgcmlnaHQgcGxhY2UuIExldOKAmXMgVGFsa1xuICAgICAgICAgICAgQSDigJxob2xkLW15LWhhbmTigJ0sIHN0ZXAtYnktc3RlcCBwcm9jZXNzIHRvIGxlYXJuIGluLWRlbWFuZCBoaWdoIGluY29tZSBza2lsbCBmcm9tIGJlZ2lubmVyIFxuICAgICAgICAgICAgdG8gTWFzdGVyeSwgZXZlbiBpZiBpdCBpcyB5b3VyIGZpcnN0IHRpbWUuIE5vIGRlZ3JlZSBvciBwcmlvciB0ZWNoIGV4cGVyaWVuY2UgcmVxdWlyZWQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmV4cGxvcmV9PlxuICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD1cIiMhXCIgbGFiZWw9XCJFeHBsb3JlIE1vcmVcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnZpZGVvV3JhcHBlcn0+XG4gICAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBzaXplPVwiMjRweFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlc3BvbnNpdmVJZnJhbWVcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiXG4gICAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXt2aWRlb0Jhbm5lcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLWJhbm5lclwiXG4gICAgICAgICAgICBhbHQ9XCJ2aWRlbyBiYW5uZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgc3g9e3N0eWxlcy5wbGF5UGF1c2V9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17UGxheX0gYWx0PVwicGxheVwiIC8+IFdhdGNoIEZ1bGwgdmlkZW9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvVmlkZW87XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1heFdpZHRoOiAnNjIwcHgnLFxuICAgIG1iOiBbNV0sXG4gICAgaDI6IHtcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICB9LFxuICB9LFxuICBleHBsb3JlOiB7XG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlciddLFxuICAgIG1iOiBbNl0sXG4gIH0sXG4gIHZpZGVvV3JhcHBlcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJy52aWRlby1iYW5uZXInOiB7XG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgJzEwMCUnLCAnMTAwJScsICcxMDAlJywgJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICB9LFxuICB9LFxuICBwbGF5UGF1c2U6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcGFkZGluZzogJzBweCcsXG4gICAgYm90dG9tOiBbNDAsIDQwLCA0MCwgNzAsIDEwMF0sXG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgJzpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIG1yOiAnMTZweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBqc3gsIEJveCwgR3JpZCwgQ29udGFpbmVyLCBGbGV4LCBUZXh0LCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IFByaWNlVGFibGUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9wcmljZS10YWJsZSc7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xuXG5jb25zdCBtb250aGx5ID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdGcmVlIFBsYW4nLFxuICAgIHN1YnRpdGxlOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXG4gICAgYW1vdW50OiAwLFxuICAgIGlzUmVjb21tZW5kZWQ6IGZhbHNlLFxuICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcbiAgICBmZWF0dXJlczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogYEZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy5gLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogYFRvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW1gLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgICAgdGl0bGU6IGBVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50c2AsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICB0aXRsZTogYERvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnUHJlbWl1bScsXG4gICAgc3VidGl0bGU6ICdGb3Igc3RhcnR1cCBlbnRlcnByaXNlJyxcbiAgICBhbW91bnQ6IDg5Ljk5LFxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXG4gICAgYnV0dG9uVGV4dDogJ1N1YnNjcmliZSBOb3cnLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLmAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHNgLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogYERvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5jb25zdCBhbm51YWwgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0ZyZWUgUGxhbicsXG4gICAgc3VidGl0bGU6ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcbiAgICBhbW91bnQ6IDAsXG4gICAgaXNSZWNvbW1lbmRlZDogZmFsc2UsXG4gICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLmAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxuICAgICAgICB0aXRsZTogYFVubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UsXG4gICAgICAgIHRpdGxlOiBgRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREZgLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdQcmVtaXVtJyxcbiAgICBzdWJ0aXRsZTogJ0ZvciBzdGFydHVwIGVudGVycHJpc2UnLFxuICAgIGFtb3VudDogODkuOTkgKiAxMiAtIDEwLFxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXG4gICAgYnV0dG9uVGV4dDogJ1N1YnNjcmliZSBOb3cnLFxuICAgIGZlYXR1cmVzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLmAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXG4gICAgICAgIHRpdGxlOiBgVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHNgLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICB0aXRsZTogYERvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKHtcbiAgICBhY3RpdmU6ICdtb250aGx5JyxcbiAgICBwcmljaW5nUGxhbjogbW9udGhseSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlUGxhbiA9IChwbGFuKSA9PiB7XG4gICAgaWYgKHBsYW4gPT09ICdtb250aGx5Jykge1xuICAgICAgc2V0UGxhbih7XG4gICAgICAgIC4uLnBsYW4sXG4gICAgICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgICAgICBwcmljaW5nUGxhbjogbW9udGhseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocGxhbiA9PT0gJ2FubnVhbCcpIHtcbiAgICAgIHNldFBsYW4oe1xuICAgICAgICAuLi5wbGFuLFxuICAgICAgICBhY3RpdmU6ICdhbm51YWwnLFxuICAgICAgICBwcmljaW5nUGxhbjogYW5udWFsLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwic2VjdGlvblwiXG4gICAgICBpZD1cInByaWNpbmdcIlxuICAgICAgc3g9e3N0eWxlcy5zZWN0aW9ufVxuICAgICAgdmFyaWFudD1cInNlY3Rpb24ucHJpY2luZ1wiXG4gICAgPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgIHRpdGxlPVwiV2hhdCBkZWFsIHN1aXQgeW91IHBlcmZlY3RcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRm9jdXMgb25seSBvbiB0aGUgbWVhbmluZywgd2UgdGFrZSBjYXJlIG9mIHRoZSBkZXNpZ24uIEFzIHNvb24gYXMgdGhlIG1lZXRpbmcgZW5kIHlvdSBjYW4gZXhwb3J0IGluIG9uZSBjbGljayBpbnRvIHlvdXIgcHJlZmVycmVkIGZvcm1hdC5cIlxuICAgICAgICAvPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLnByaWNlU3dpdGNoZXJ9PlxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+XG4gICAgICAgICAgICBTYXZlIDIwJVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGFuKCdtb250aGx5Jyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BsYW4uYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTW9udGhseSBQbGFuXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGxhbignYW5udWFsJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BsYW4uYWN0aXZlID09PSAnYW5udWFsJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbm51YWwgUGxhblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMucHJpY2VXcmFwcGVyfT5cbiAgICAgICAgICB7cGxhbi5wcmljaW5nUGxhbi5tYXAoKHByaWNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByaWNlVGFibGUgcHJpY2U9e3ByaWNlfSBrZXk9e2Ake3BsYW4uYWN0aXZlfS0ke2luZGV4fWB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1iOiBbNjAsIG51bGwsIG51bGwsIDUwXSxcbiAgfSxcbiAgcHJpY2VTd2l0Y2hlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7cmdiYSgnI2ZmZicsIDAuMil9YCxcbiAgICBtYXJnaW46IFsnMCBhdXRvIDQwcHgnLCBudWxsLCBudWxsLCAnMCBhdXRvIDUwcHgnXSxcbiAgICBtYXhXaWR0aDogMzAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHA6IDIsXG4gICAgJy5kaXNjb3VudCc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgbWluSGVpZ2h0OiAyNSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1bnNldCcsXG4gICAgICBib3JkZXJSYWRpdXM6IDI1LFxuICAgICAgcmlnaHQ6IDM4LFxuICAgICAgdG9wOiAnLTE3cHgnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgIHB4OiAnMjVweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6ICcwIG5vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwcmljZVdyYXBwZXI6IHtcbiAgICBnYXA6IDMwLFxuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsIDM0MHB4KScsXG4gICAgICAncmVwZWF0KDEsIDM0MHB4KScsXG4gICAgICAncmVwZWF0KDEsIDM0MHB4KScsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICAncmVwZWF0KDIsIDQzMHB4KScsXG4gICAgICAncmVwZWF0KDIsIDQ0MHB4KScsXG4gICAgICAncmVwZWF0KDIsIDQ4MHB4KScsXG4gICAgXSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJy5wcmljZUNhcmQnOiB7XG4gICAgICAnLnByaWNlSGVhZGVyJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgbGluZWFyYCxcbiAgICAgIH0sXG4gICAgICAnLnByaWNlQW1vdW50Jzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC45cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICAgICcucHJpY2VCdXR0b24nOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XG5pbXBvcnQgVWx0aW1hdGVGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvdWx0aW1hdGUtZmVhdHVyZSc7XG5cbmltcG9ydCBidWxiIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVsYi5wbmcnO1xuaW1wb3J0IGRhcnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9kYXJ0LnBuZyc7XG5pbXBvcnQgcm9ja2V0IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvcm9ja2V0LnBuZyc7XG5pbXBvcnQgdHJvcGh5IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvdHJvcGh5LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiByb2NrZXQsXG4gICAgdGl0bGU6ICdMZWFybiB3aXRoIENvbmZpZGVuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQXQgb3VyIGluc3RpdHV0aW9uLCB3ZSB1bmRlcnN0YW5kIHRoZSBpbXBvcnRhbmNlIG9mIG91ciBzdHVkZW50c1wiIHJlcHV0YXRpb25zLCB3aGljaCBpcyB3aHkgd2VcInZlIGNvbGxhYm9yYXRlZCB3aXRoIGNlcnRpZmllZCBpbmR1c3RyeSBwcm9mZXNzaW9uYWxzIHRvIHJldmlldyBhbmQgY2VydGlmeSBhbGwgb2Ygb3VyIG9ubGluZSBjb3Vyc2VzIGFuZCB0cmFpbmluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogZGFydCxcbiAgICB0aXRsZTogJ091ciBNaXNzaW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ091ciBtaXNzaW9uIGlzIHRvIGVxdWlwIEFmcmljYW5zIHdpdGggdGhlIGxhdGVzdCByZWFsLXRpbWUgc3RhbmRhcmRzIGFuZCBzdXBwb3J0IHRoZW0gaW4gcmVhY2hpbmcgdGhlaXIgZnVsbCBwb3RlbnRpYWwuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgICBpY29uOiBidWxiLFxuICAgIHRpdGxlOiAnT3VyIFZpc2lvbicsXG4gICAgZGVzY3JpcHRpb246ICdXZSBhc3BpcmUgdG8gY3JlYXRlIHRoZSBtb3N0IGV4dGVuc2l2ZSBjb21waWxhdGlvbiBvZiBkaWdpdGFsIHBsYXRmb3JtLCByZXNvdXJjZXMgYW5kIG9wcG9ydHVuaXRpZXMgYXZhaWxhYmxlLCB3aXRoIHRoZSBhaW0gb2YgYmVuZWZpdGluZyB0aGUgZGlnaXRhbCBpbmR1c3RyeSBpbiBOaWdlcmlhIGFuZCBhY3Jvc3MgQWZyaWNhLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiB0cm9waHksXG4gICAgdGl0bGU6ICdBd2FyZCBoaXN0b3J5JyxcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtYCxcbiAgfSxcbl07XG5cbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInVsdGltYXRlLWZlYXR1cmVcIiB2YXJpYW50PVwic2VjdGlvbi51bHRpbWF0ZUZlYXR1cmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIk91ciBDb21tdW5pdHlcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRlY2ggaW5kdXN0cnkgaXMgY3VycmVudGx5IG9uZSBvZiB0aGUgbW9zdCByYXBpZGx5IGV4cGFuZGluZyBzZWN0b3JzIGdsb2JhbGx5LCBhbmQgaXRzIGR5bmFtaWMgYW5kIGV2ZXItY2hhbmdpbmcgbGFuZHNjYXBlIGF0dHJhY3RzIGEgcGxldGhvcmEgb2YgaW5kaXZpZHVhbHMgc2Vla2luZyB0byBlbnRlciB0aGlzIGZpZWxkLlxuRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2wgaXMgYW4gZWR1Y2F0aW9uIHBsYXRmb3JtIGZvY3VzZWQgb24gaW1wYXJ0aW5nIGhpZ2gtZGVtYW5kIHNraWxscyBhbmQgZHJpdmVuIGJ5IGEgc3Ryb25nIHNldCBvZiB2YWx1ZXMuIEl0cyBtaXNzaW9uIGlzIHRvIGVtcG93ZXIgQWZyaWNhbiBtaWxsZW5uaWFscyB0byBvdmVyY29tZSBwb3ZlcnR5LCBhY2hpZXZlIGNhcmVlciBzdWNjZXNzLCBhbmQgbGl2ZSB0aGVpciBkcmVhbSBsaXZlcy5cblxuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VWx0aW1hdGVGZWF0dXJlIGtleT17aXRlbS5pZH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1hcmdpbkJvdHRvbTogWzYwLCA2MCwgNjAsIDgwXSxcbiAgfSxcbiAgZmVhdHVyZXM6IHtcbiAgICBnYXA6IFsnMzVweCA2MHB4JywgNjAsIDYwLCA0MCwgMzAsIDYwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlJztcblxuaW1wb3J0IGJ1bGIgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9idWxiLTIucG5nJztcbmltcG9ydCBkaWFtb25kIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGlhbW9uZC5wbmcnO1xuaW1wb3J0IGhlbHAgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9oZWxwLnBuZyc7XG5pbXBvcnQgYXdhcmQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9hd2FyZC5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogYnVsYixcbiAgICB0aXRsZTogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiBgTGV04oCZcyBqdXN0IGdldCB0aGlzIG91dCBvZiB0aGUgd2F5IC0gdGhlcmUgd2lsbCBhbHdheXMgYmUgYSBraXQgdmVyc2lvbiBvZiBFZHVmbG93LiBCdWlsdCBieSBlZHVjYXRvcnMsIHdlIGJlbGlldmUgaW4gZXF1YXRpbmcgZWR1Y2F0aW9uIGZvciBhbGwuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuYCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb246IGRpYW1vbmQsXG4gICAgdGl0bGU6ICdQcm8gU3Vic2NyaXB0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogYFdlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIHRvb2xzLiBFZHVmbG93IGlzIGJ1aWx0IHdpdGggV0NBRyBzdGFuZGFyZHMgaW4gbWluZCBhbmQgY2FuIGVhc2lseSBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLmAsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpY29uOiBoZWxwLFxuICAgIHRpdGxlOiAnUGFydG5lcnNoaXAgZGVhbCcsXG4gICAgZGVzY3JpcHRpb246IGBMZXTigJlzIGp1c3QgZ2V0IHRoaXMgb3V0IG9mIHRoZSB3YXkgLSB0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIGtpdCB2ZXJzaW9uIG9mIEVkdWZsb3cuIEJ1aWx0IGJ5IGVkdWNhdG9ycywgd2UgYmVsaWV2ZSBpbiBlcXVhdGluZyBlZHVjYXRpb24gZm9yIGFsbC4gUGFpZCBzdWJzY3JpcHRpb25zIGFsbG93IHVzIHRvIGNvbnRpbnVlIGhlbHBpbmcgbGVhcm5lcnMgYXJvdW5kIHRoZSB3b3JsZC5gLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaWNvbjogYXdhcmQsXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcbiAgICBkZXNjcmlwdGlvbjogYFdlIGJlbGlldmUgaXTigJlzIGltcG9ydGFudCBmb3IgZXZlcnlvbmUgdG8gaGF2ZSBhY2Nlc3MgdG8gc29mdHdhcmUg4oCTIGVzcGVjaWFsbHkgd2hlbiBpdCBjb21lcyB0byBkaWdpdGFsIGxlYXJuaW5nIHRvb2xzLiBFZHVmbG93IGlzIGJ1aWx0IHdpdGggV0NBRyBzdGFuZGFyZHMgaW4gbWluZCBhbmQgY2FuIGVhc2lseSBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLmAsXG4gIH0sXG5dO1xuXG5jb25zdCBVc2VmdWxGZWF0dXJlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidXNlZnVsLWZlYXR1cmVzXCIgdmFyaWFudD1cInNlY3Rpb24udXNlZnVsRmVhdHVyZXNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIkFtYXppbmcgdXNlZnVsIGZlYXR1cmVzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZvY3VzIG9ubHkgb24gdGhlIG1lYW5pbmcsIHdlIHRha2UgY2FyZSBvZiB0aGUgZGVzaWduLiBBcyBzb29uIGFzIHRoZSBtZWV0aW5nIGVuZCB5b3UgY2FuIGV4cG9ydCBpbiBvbmUgY2xpY2sgaW50byB5b3VyIHByZWZlcnJlZCBmb3JtYXQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VWx0aW1hdGVGZWF0dXJlXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgZGF0YT17aXRlbX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VmdWxGZWF0dXJlcztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkaW5nOiB7XG4gICAgbWFyZ2luQm90dG9tOiA4MCxcbiAgfSxcbiAgZmVhdHVyZXM6IHtcbiAgICBnYXA6IDYwLFxuICAgIGRpc3BsYXk6IFsnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCAncmVwZWF0KDEsIDFmciknLCAncmVwZWF0KDIsIDFmciknXSxcbiAgICAnLmZlYXR1cmUtaXRlbSc6IHtcbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnZmxleCddLFxuICAgICAgcHg6IFsnMTVweCcsIDBdLFxuICAgICAgbWF4V2lkdGg6IFsnbm9uZSddLFxuICAgICAgZmlndXJlOiB7XG4gICAgICAgIG1pbldpZHRoOiAnOTBweCcsXG4gICAgICAgIG06IFtcbiAgICAgICAgICAnMCBhdXRvIDMwcHgnLFxuICAgICAgICAgICcwIGF1dG8gMzBweCcsXG4gICAgICAgICAgJzAgYXV0byAzMHB4JyxcbiAgICAgICAgICAnMCBhdXRvIDMwcHgnLFxuICAgICAgICAgICcwIDI2cHggMCAwJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IHsgTGVhcm5Nb3JlIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcblxuaW1wb3J0IGJhbm5lciBmcm9tICdhc3NldHMvaW1hZ2VzL3dpZGdldHMucG5nJztcbmltcG9ydCBjaGVja0ZpbGxlZENpcmNsZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLWNpcmNsZS1maWxsZWQucG5nJztcblxuY29uc3QgV2lkZ2V0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwid2lkZ2V0c1wiIHZhcmlhbnQ9XCJzZWN0aW9uLndpZGdldHNcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50V3JhcHBlcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxlZnRDb250ZW50fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jhbm5lcn0gYWx0PVwid2lkZ2V0c1wiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJpZ2h0Q29udGVudH0+XG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICAgICAgICB0aXRsZT1cIlVsdGltYXRlIHdpZGdldHMgb2YgY29sbGVjdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCBhbnl3aGVyZVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMubGlzdEl0ZW19IGFzPVwicFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGVja0ZpbGxlZENpcmNsZX0gYWx0PVwiY2hlY2sgaWNvblwiIC8+XG4gICAgICAgICAgICAgIFVubGltaXRlZCBkZXNpZ24gcG9zc2liaWxpdHlcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMubGlzdEl0ZW19IGFzPVwicFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGVja0ZpbGxlZENpcmNsZX0gYWx0PVwiY2hlY2sgaWNvblwiIC8+XG4gICAgICAgICAgICAgIENvbXBsZXRlbHkgcmVzcG9uc2l2ZSBmZWF0dXJlc1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmV4cGxvcmV9PlxuICAgICAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9XCIjIVwiIGxhYmVsPVwiRXhwbG9yZSBNb3JlXCIgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250ZW50V3JhcHBlcjoge1xuICAgIGdhcDogWzAsIDAsIDAsIDAsIDEwLCAxMDBdLFxuICAgIGRpc3BsYXk6IFsnYmxvY2snLCAnYmxvY2snLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG1iOiBbJzIwcHgnXSxcbiAgICBtdDogWzAsIDAsIDAsIDAsICctNzBweCddLFxuICAgIGgyOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgJzI0cHgnLCAnMjRweCcsICcyOHB4JywgJzMycHgnLCAnNDBweCddLFxuICAgICAgbGluZUhlaWdodDogWzEuNDUsIDEuNV0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbGluZUhlaWdodDogMi44MSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgaW1nOiB7XG4gICAgICBtcjogJzEwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGV4cGxvcmU6IHtcbiAgICBtdDogWycyMHB4JywgJzIwcHgnLCAnMjBweCcsICcyMHB4JywgJzQwcHgnXSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxuICAgIHRleHRTZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxuICAgIGhlYWRpbmdTZWNvbmRhcnk6ICcjMzQzRDQ4JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJvcmRlckNvbG9yOiAnI0YzRjRGNScsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjMjhEREIyJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICBzZWNvbmRhcnk6ICcjRUY5RTQ4JywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXG4gICAgZGFyazogJyMxMDEzMkQnLFxuICAgIGxpbms6ICcjNEY5NkZGJywgLy8gZGVmYXVsdCBsaW5rIGNvbG9yXG5cbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnRE0gU2FucycsXG4gICAgLy8gYm9keTpcbiAgICAvLyAgICdzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICAgaGVhZGluZzogJ0RNIFNhbnMnLFxuICAgIC8vIGhlYWRpbmc6ICdCcmVlIFNlcmlmJyxcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJyxcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICAvLyBib2R5OiA0MDAsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIC8vIGhlYWRpbmc6IDcwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS41LFxuICAgIC8vIGJvZHk6IDEuNSxcbiAgICBoZWFkaW5nOiAxLjI1LFxuICAgIC8vIGhlYWRpbmc6IDEuMTI1LFxuICB9LFxuICBsZXR0ZXJTcGFjaW5nczoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGNhcHM6ICcwLjJlbScsXG4gICAgaGVhZGluZzogJy0wLjVweCcsXG4gIH0sXG4gIHNwYWNlOiBbMCwgNCwgOCwgMTIsIDE2LCAzMiwgNDgsIDY0LCA5NiwgMTI4XSxcbiAgc2l6ZXM6IHt9LFxuICBicmVha3BvaW50czogW1xuICAgICc0ODBweCcsXG4gICAgJzY0MHB4JyxcbiAgICAnNzY4cHgnLFxuICAgICcxMDI0cHgnLFxuICAgICcxMjAwcHgnLFxuICAgICcxMzY3cHgnLFxuICAgICcxNDQwcHgnLFxuICBdLFxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXG4gIGxheW91dDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsICc5NzBweCcsICcxMTQwcHgnLCAnMTI2MHB4J10sXG4gICAgICBwYWRkaW5nTGVmdDogWzIwLCAzMF0sXG4gICAgICBwYWRkaW5nUmlnaHQ6IFsyMCwgMzBdLFxuICAgICAgbTogJzAgYXV0bycsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgcGFkZGluZzogJzIwcHggMCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXG4gICAgICBwdDogNixcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgYmFubmVyOiB7fSxcbiAgICB1bHRpbWF0ZUZlYXR1cmU6IHtcbiAgICAgIHB0OiBbMCwgNywgNywgOCwgOCwgNywgN10sXG4gICAgICBwYjogWzcsIDcsIDcsIDgsIDksIDEzMCwgMTUwXSxcbiAgICB9LFxuICAgIGZlYXR1cmVzOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kU2Vjb25kYXJ5JyxcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzcsIDcsIDcsIDcsIDhdLFxuICAgIH0sXG4gICAgaW50cm9WaWRlbzoge1xuICAgICAgcHQ6IFs3LCA3LCA3LCA3LCA4XSxcbiAgICAgIHBiOiBbNywgNywgNywgNywgOF0sXG4gICAgfSxcbiAgICB1c2VmdWxGZWF0dXJlczoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZFNlY29uZGFyeScsXG4gICAgICBwdDogWzcsIDcsIDcsIDcsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCAxNTBdLFxuICAgIH0sXG4gICAgd2lkZ2V0czoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRjdGNScsXG4gICAgICBwdDogWzcsIDcsIDcsIDcsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCA2LCA4XSxcbiAgICB9LFxuICAgIHByaWNpbmc6IHtcbiAgICAgIHB0OiBbNywgNywgNywgNywgOF0sXG4gICAgICBwYjogWzYsIDYsIDYsIDhdLFxuICAgIH0sXG4gICAgZmFxOiB7XG4gICAgICBwdDogWzYsIDYsIDYsIDhdLFxuICAgICAgcGI6IFs3LCA3LCA3LCA3LCAxNTBdLFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgbnVsbCwgNSwgbnVsbCwgNSwgNl0sXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU3XSxcbiAgICB9LFxuICB9LFxuICBsaW5rczoge1xuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbiAgICBsZWFybk1vcmU6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWZsZXgnXSxcbiAgICAgIHA6IDIsXG4gICAgICAvLyB0cmFuc2l0aW9uUHJvcGVydHk6ICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgIC8vIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2Utb3V0JyxcbiAgICAgIC8vIHRyYW5zaXRpb25EdXJhdGlvbjogJy4ycycsXG4gICAgICAvLyBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAvLyAnJjpob3Zlcic6IHtcbiAgICAgIC8vICAgYmc6ICdoaWdobGlnaHQnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vICcmLmFjdGl2ZSc6IHtcbiAgICAgIC8vICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIC8vICAgYmc6ICdoaWdobGlnaHQnLFxuICAgICAgLy8gfSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAyLjUsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VzOiB7XG4gICAgYXZhdGFyOiB7XG4gICAgICB3aWR0aDogNDgsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcbiAgICB9LFxuICB9LFxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xuICBidXR0b25zOiB7XG4gICAgbWVudToge1xuICAgICAgZGlzcGxheTogWydibG9jaycsIG51bGwsIG51bGwsIG51bGwsICdub25lJ10sXG4gICAgICBzdmc6IHtcbiAgICAgICAgd2lkdGg6ICczMnB4JyxcbiAgICAgIH0sXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXG4gICAgLy8geW91IGNhbiByZWZlcmVuY2Ugb3RoZXIgdmFsdWVzIGRlZmluZWQgaW4gdGhlIHRoZW1lXG4gICAgZGVmYXVsdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZS1pbi1vdXQgMHMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIG1pbkhlaWdodDogWyc1MHB4JywgJzUwcHgnLCAnNTBweCcsICc1MHB4JywgJzUwcHgnXSxcbiAgICAgIHBhZGRpbmc6IFsnMCAyNXB4JywgJzAgMjVweCcsICcwIDI1cHgnLCAnMCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmc6ICdkYXJrJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5TWQ6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLnByaW1hcnknLFxuICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXG4gICAgICBweDogJzI1cHgnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBiZzogJ3NlY29uZGFyeScsXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMEYyJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aGl0ZToge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBjb2xvcjogJyMwMjA3MTgnLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgIC8vIGJveFNoYWRvdzogJzAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgfSxcbiAgICBvZmZlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxuICAgICAgbWluSGVpZ2h0OiAxMzAsXG4gICAgICBtOiAyLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIH0sXG4gICAgZmVhdHVyZUNhcmQ6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdyddLFxuICAgICAgcDogWzAsIDNdLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyQ29sb3InLFxuICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYmFkZ2VzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGJnOiAnIzI4QTVGRicsXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgICAgcDogJzNweCAxMXB4JyxcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgfSxcbiAgICBvdXRsaW5lOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxuICAgIH0sXG4gIH0sXG5cbiAgc3R5bGVzOiB7XG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgIH0sXG4gICAgLy8gaDEtaDYgSGVhZGluZyBzdHlsZXNcbiAgICBoMToge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNixcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA1LFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDQsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogMyxcbiAgICB9LFxuICAgIGg1OiB7XG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZ3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==