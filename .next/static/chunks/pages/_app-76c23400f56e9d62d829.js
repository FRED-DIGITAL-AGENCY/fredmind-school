_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},Do4B:function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ve}));var r={};n.r(r),n.d(r,"addTrackers",(function(){return Z})),n.d(r,"initialize",(function(){return Q})),n.d(r,"ga",(function(){return W})),n.d(r,"set",(function(){return Y})),n.d(r,"send",(function(){return ee})),n.d(r,"pageview",(function(){return te})),n.d(r,"modalview",(function(){return ne})),n.d(r,"timing",(function(){return re})),n.d(r,"event",(function(){return oe})),n.d(r,"exception",(function(){return ie})),n.d(r,"plugin",(function(){return ae})),n.d(r,"outboundLink",(function(){return ce})),n.d(r,"testModeAPI",(function(){return ue})),n.d(r,"default",(function(){return le}));var o=n("q1tI"),i=n.n(o),a=n("nOHt"),c=n.n(a),u=n("17x9"),l=n.n(u);function f(e){console.warn("[react-ga]",e)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["to","target"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o=h(a);function a(){var e;d(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return k(w(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f="_blank"!==r,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=b(b({},y(e,p)),{},{target:n,href:t,onClick:this.handleClick});return"_blank"===n&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,i.a.createElement("a",r)}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.Component);k(P,"trackLink",(function(){f("ga tracking not enabled")})),P.propTypes={eventLabel:l.a.string.isRequired,target:l.a.string,to:l.a.string,onClick:l.a.func,trackerNames:l.a.arrayOf(l.a.string)},P.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function A(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(f("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function E(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function x(e){return E(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(S)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var T=!1;function D(e){console.info("[react-ga]",e)}var N=[],C={calls:N,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];N.push([].concat(t))},resetCalls:function(){N.length=0}},_=["category","action","label","value","nonInteraction","transport"];function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z="undefined"===typeof window||"undefined"===typeof document,B=!1,M=!0,F=!1,K=!0,U=!0,V=function(){var e;return F?C.ga.apply(C,arguments):!z&&(window.ga?(e=window).ga.apply(e,arguments):f("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function $(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(n=x(e)),t&&(n=A(n)),n}(e,M,U)}function H(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!K&&Array.isArray(e)||V.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){V.apply(void 0,J(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):f("ga command must be a string")}function X(e,t){e?t&&(t.debug&&!0===t.debug&&(B=!0),!1===t.titleCase&&(M=!1),!1===t.redactEmail&&(U=!1),t.useExistingGa)||(t&&t.gaOptions?V("create",e,t.gaOptions):V("create",e,"auto")):f("gaTrackingID is required in initialize()")}function Z(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===R(e)?X(e.trackingId,e):f("All configs must be an object")})):X(e,t),!0}function Q(e,t){if(t&&!0===t.testMode)F=!0;else{if(z)return;t&&!0===t.standardImplementation||function(e){if(!T){T=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}K=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Z(e,t)}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(V.apply(void 0,t),B&&(D("called ga('arguments');"),D("with arguments: ".concat(JSON.stringify(t))))),window.ga}function Y(e,t){e?"object"===R(e)?(0===Object.keys(e).length&&f("empty `fieldsObject` given to .set()"),H(t,"set",e),B&&(D("called ga('set', fieldsObject);"),D("with fieldsObject: ".concat(JSON.stringify(e))))):f("Expected `fieldsObject` arg to be an Object"):f("`fieldsObject` is required in .set()")}function ee(e,t){H(t,"send",e),B&&(D("called ga('send', fieldObject);"),D("with fieldObject: ".concat(JSON.stringify(e))),D("with trackers: ".concat(JSON.stringify(t))))}function te(e,t,n){if(e){var r=E(e);if(""!==r){var o={};if(n&&(o.title=n),H(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),B){D("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),D("with path: ".concat(r).concat(i))}}else f("path cannot be an empty string in .pageview()")}else f("path is required in .pageview()")}function ne(e,t){if(e){var n,r="/"===(n=E(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);H(t,"send","pageview",o),B&&(D("called ga('send', 'pageview', path);"),D("with path: ".concat(o)))}else f("modalName cannot be an empty string or a single / in .modalview()")}else f("modalName is required in .modalview(modalName)")}function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:$(t),timingVar:$(n),timingValue:r};o&&(a.timingLabel=$(o)),ee(a,i)}else f("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=q(e,_),u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:$(t),eventAction:$(n)};r&&(l.eventLabel=$(r)),"undefined"!==typeof o&&("number"!==typeof o?f("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?f("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?f("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&f("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),ee(l,u)}else f("args.category AND args.action are required in event()")}function ie(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=$(n)),"undefined"!==typeof r&&("boolean"!==typeof r?f("`args.fatal` must be a boolean."):o.exFatal=r),ee(o,t)}var ae={require:function(e,t,n){if(e){var r=E(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==R(t))return void f("Expected `options` arg to be an Object");0===Object.keys(t).length&&f("Empty `options` given to .require()"),W(o,r,t),B&&D("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else W(o,r),B&&D("called ga('require', '".concat(r,"');"))}else f("`name` cannot be an empty string in .require()")}else f("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)f("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)f("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(W(c,r,n),B&&(D("called ga('".concat(c,"');")),D('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(W(c,n),B&&(D("called ga('".concat(c,"');")),D("with payload: ".concat(JSON.stringify(n))))):(W(c),B&&D("called ga('".concat(c,"');")))}}};function ce(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:$(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},ee(r,n)}else f("args.label is required in outboundLink()");else f("hitCallback function is required")}var ue=C,le={initialize:Q,ga:W,set:Y,send:ee,pageview:te,modalview:ne,timing:re,event:oe,exception:ie,plugin:ae,outboundLink:ce,testModeAPI:C};function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}P.origTrackLink=P.trackLink,P.trackLink=ce;var ge=P,be=se(se({},r),{},{OutboundLink:ge}),ye=function(){console.log("Logging pageview for ".concat(window.location.pathname)),be.set({page:window.location.pathname}),be.pageview(window.location.pathname)},de=(n("a9/h"),n("Do4B"),i.a.createElement);function ve(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){console.log("GA init"),be.initialize("UA-xxxxxxxxx-1"),ye(),c.a.events.on("routeChangeComplete",ye)}),[]),de(t,n)}},"a9/h":function(e,t,n){}},[[0,0,2,1]]]);