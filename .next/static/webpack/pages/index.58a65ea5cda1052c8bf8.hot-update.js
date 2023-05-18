webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/ultimate-features.js":
/*!*******************************************!*\
  !*** ./src/sections/ultimate-features.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
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
var _this = undefined,
  _jsxFileName = "C:\\xampp\\htdocs\\Fred . Engineering . Projects\\010-saas-classic-next\\src\\sections\\ultimate-features.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */







var data = [{
  id: 1,
  icon: assets_images_icons_bulb_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: 'Fast Performance',
  description: 'See where you’re making and spending money in real.'
}, {
  id: 2,
  icon: assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Best Strategy',
  description: 'Send money with three clicks by wire, check, or ACH.'
}, {
  id: 3,
  icon: assets_images_icons_rocket_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Boost Performance',
  description: 'Choose the right tone and fast formality level.'
}, {
  id: 4,
  icon: assets_images_icons_trophy_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Award history',
  description: "Keep secure with fluent 2-factor authentication full activity."
}];
var UltimateFeatures = function UltimateFeatures() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "ultimate-feature",
    variant: "section.ultimateFeature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    title: "Our Community",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.features,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      data: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    });
  }))));
};
_c = UltimateFeatures;
/* harmony default export */ __webpack_exports__["default"] = (UltimateFeatures);
var styles = {
  heading: {
    marginBottom: [60, 60, 60, 80]
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']
  }
};
var _c;
$RefreshReg$(_c, "UltimateFeatures");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmVzLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImljb24iLCJidWxiIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhcnQiLCJyb2NrZXQiLCJ0cm9waHkiLCJVbHRpbWF0ZUZlYXR1cmVzIiwianN4IiwiQm94IiwiYXMiLCJ2YXJpYW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRhaW5lciIsIlNlY3Rpb25IZWFkaW5nIiwic3giLCJzdHlsZXMiLCJoZWFkaW5nIiwiZmVhdHVyZXMiLCJtYXAiLCJpdGVtIiwiVWx0aW1hdGVGZWF0dXJlIiwia2V5IiwiX2MiLCJtYXJnaW5Cb3R0b20iLCJnYXAiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytDO0FBQ1M7QUFDUTtBQUVoQjtBQUNBO0FBQ0k7QUFDQTtBQUVwRCxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUVDLG1FQUFJO0VBQ1ZDLEtBQUssRUFBRSxrQkFBa0I7RUFDekJDLFdBQVcsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUVJLG1FQUFJO0VBQ1ZGLEtBQUssRUFBRSxlQUFlO0VBQ3RCQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRUosRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFSyxxRUFBTTtFQUNaSCxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRUosRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFTSxxRUFBTTtFQUNaSixLQUFLLEVBQUUsZUFBZTtFQUN0QkMsV0FBVztBQUNiLENBQUMsQ0FDRjtBQUVELElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztFQUM3QixPQUNFQyxvREFBQSxDQUFDQyw0Q0FBRztJQUFDQyxFQUFFLEVBQUMsU0FBUztJQUFDWCxFQUFFLEVBQUMsa0JBQWtCO0lBQUNZLE9BQU8sRUFBQyx5QkFBeUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkVWLG9EQUFBLENBQUNXLGtEQUFTO0lBQUFQLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1JWLG9EQUFBLENBQUNZLGtFQUFjO0lBQ2JDLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxPQUFRO0lBQ25CckIsS0FBSyxFQUFDLGVBQWU7SUFDckJDLFdBQVcsRUFBQywySUFBMkk7SUFBQVMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDeEosQ0FBQyxFQUNGVixvREFBQSxDQUFDQyw0Q0FBRztJQUFDWSxFQUFFLEVBQUVDLE1BQU0sQ0FBQ0UsUUFBUztJQUFBWixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0QnBCLElBQUksYUFBSkEsSUFBSSx1QkFBSkEsSUFBSSxDQUFFMkIsR0FBRyxDQUFDLFVBQUNDLElBQUk7SUFBQSxPQUNkbEIsb0RBQUEsQ0FBQ21CLHlFQUFlO01BQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDM0IsRUFBRztNQUFDRCxJQUFJLEVBQUU0QixJQUFLO01BQUFkLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBQztFQUFBLENBQzlDLENBQ0UsQ0FDSSxDQUNSLENBQUM7QUFFVixDQUFDO0FBQUNXLEVBQUEsR0FqQkl0QixnQkFBZ0I7QUFtQlBBLCtFQUFnQixFQUFDO0FBRWhDLElBQU1lLE1BQU0sR0FBRztFQUNiQyxPQUFPLEVBQUU7SUFDUE8sWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtFQUMvQixDQUFDO0VBQ0ROLFFBQVEsRUFBRTtJQUNSTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0Q0MsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUN6QkMsbUJBQW1CLEVBQUUsQ0FDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQjtFQUVwQjtBQUNGLENBQUM7QUFBQyxJQUFBSixFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OGE2NWVhNWNkYTEwNTJjOGJmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy91bHRpbWF0ZS1mZWF0dXJlJztcblxuaW1wb3J0IGJ1bGIgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9idWxiLnBuZyc7XG5pbXBvcnQgZGFydCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2RhcnQucG5nJztcbmltcG9ydCByb2NrZXQgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9yb2NrZXQucG5nJztcbmltcG9ydCB0cm9waHkgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy90cm9waHkucG5nJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGljb246IGJ1bGIsXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlZSB3aGVyZSB5b3XigJlyZSBtYWtpbmcgYW5kIHNwZW5kaW5nIG1vbmV5IGluIHJlYWwuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb246IGRhcnQsXG4gICAgdGl0bGU6ICdCZXN0IFN0cmF0ZWd5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbW9uZXkgd2l0aCB0aHJlZSBjbGlja3MgYnkgd2lyZSwgY2hlY2ssIG9yIEFDSC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogcm9ja2V0LFxuICAgIHRpdGxlOiAnQm9vc3QgUGVyZm9ybWFuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hvb3NlIHRoZSByaWdodCB0b25lIGFuZCBmYXN0IGZvcm1hbGl0eSBsZXZlbC4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaWNvbjogdHJvcGh5LFxuICAgIHRpdGxlOiAnQXdhcmQgaGlzdG9yeScsXG4gICAgZGVzY3JpcHRpb246IGBLZWVwIHNlY3VyZSB3aXRoIGZsdWVudCAyLWZhY3RvciBhdXRoZW50aWNhdGlvbiBmdWxsIGFjdGl2aXR5LmAsXG4gIH0sXG5dO1xuXG5jb25zdCBVbHRpbWF0ZUZlYXR1cmVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ1bHRpbWF0ZS1mZWF0dXJlXCIgdmFyaWFudD1cInNlY3Rpb24udWx0aW1hdGVGZWF0dXJlXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XG4gICAgICAgICAgdGl0bGU9XCJPdXIgQ29tbXVuaXR5XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZvY3VzIG9ubHkgb24gdGhlIG1lYW5pbmcsIHdlIHRha2UgY2FyZSBvZiB0aGUgZGVzaWduLiBBcyBzb29uIGFzIHRoZSBtZWV0aW5nIGVuZCB5b3UgY2FuIGV4cG9ydCBpbiBvbmUgY2xpY2sgaW50byB5b3VyIHByZWZlcnJlZCBmb3JtYXQuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VWx0aW1hdGVGZWF0dXJlIGtleT17aXRlbS5pZH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1hcmdpbkJvdHRvbTogWzYwLCA2MCwgNjAsIDgwXSxcbiAgfSxcbiAgZmVhdHVyZXM6IHtcbiAgICBnYXA6IFsnMzVweCA2MHB4JywgNjAsIDYwLCA0MCwgMzAsIDYwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==