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
  title: 'Learn with Confidence',
  description: 'At our institution, we understand the importance of our students" reputations, which is why we"ve collaborated with certified industry professionals to review and certify all of our online courses and training. Our comprehensive courses are designed to provide detailed tutorials that can be easily understood by beginners, with direct access to tutors available for further support and clarification.'
}, {
  id: 2,
  icon: assets_images_icons_dart_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Our Mission',
  description: 'Our mission is to equip Africans with the latest real-time standards and support them in reaching their full potential.'
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
    description: "The tech industry is currently one of the most rapidly expanding sectors globally, and its dynamic and ever-changing landscape attracts a plethora of individuals seeking to enter this field.\nFredmind Digital School is an education platform focused on imparting high-demand skills and driven by a strong set of values. Its mission is to empower African millennials to overcome poverty, achieve career success, and live their dream lives. ",
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
      lineNumber: 50,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_ultimate_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      data: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmVzLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImljb24iLCJidWxiIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhcnQiLCJyb2NrZXQiLCJ0cm9waHkiLCJVbHRpbWF0ZUZlYXR1cmVzIiwianN4IiwiQm94IiwiYXMiLCJ2YXJpYW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRhaW5lciIsIlNlY3Rpb25IZWFkaW5nIiwic3giLCJzdHlsZXMiLCJoZWFkaW5nIiwiZmVhdHVyZXMiLCJtYXAiLCJpdGVtIiwiVWx0aW1hdGVGZWF0dXJlIiwia2V5IiwiX2MiLCJtYXJnaW5Cb3R0b20iLCJnYXAiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQytDO0FBQ1M7QUFDUTtBQUVoQjtBQUNBO0FBQ0k7QUFDQTtBQUVwRCxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUVDLG1FQUFJO0VBQ1ZDLEtBQUssRUFBRSx1QkFBdUI7RUFDOUJDLFdBQVcsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUVJLG1FQUFJO0VBQ1ZGLEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRUosRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFSyxxRUFBTTtFQUNaSCxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRUosRUFBRSxFQUFFLENBQUM7RUFDTEMsSUFBSSxFQUFFTSxxRUFBTTtFQUNaSixLQUFLLEVBQUUsZUFBZTtFQUN0QkMsV0FBVztBQUNiLENBQUMsQ0FDRjtBQUVELElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztFQUM3QixPQUNFQyxvREFBQSxDQUFDQyw0Q0FBRztJQUFDQyxFQUFFLEVBQUMsU0FBUztJQUFDWCxFQUFFLEVBQUMsa0JBQWtCO0lBQUNZLE9BQU8sRUFBQyx5QkFBeUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkVWLG9EQUFBLENBQUNXLGtEQUFTO0lBQUFQLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1JWLG9EQUFBLENBQUNZLGtFQUFjO0lBQ2JDLEVBQUUsRUFBRUMsTUFBTSxDQUFDQyxPQUFRO0lBQ25CckIsS0FBSyxFQUFDLGVBQWU7SUFDckJDLFdBQVcsRUFBQyx3YkFHckI7SUFBQVMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDUSxDQUFDLEVBQ0ZWLG9EQUFBLENBQUNDLDRDQUFHO0lBQUNZLEVBQUUsRUFBRUMsTUFBTSxDQUFDRSxRQUFTO0lBQUFaLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3RCcEIsSUFBSSxhQUFKQSxJQUFJLHVCQUFKQSxJQUFJLENBQUUyQixHQUFHLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQ2RsQixvREFBQSxDQUFDbUIseUVBQWU7TUFBQ0MsR0FBRyxFQUFFRixJQUFJLENBQUMzQixFQUFHO01BQUNELElBQUksRUFBRTRCLElBQUs7TUFBQWQsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUFDO0VBQUEsQ0FDOUMsQ0FDRSxDQUNJLENBQ1IsQ0FBQztBQUVWLENBQUM7QUFBQ1csRUFBQSxHQXBCSXRCLGdCQUFnQjtBQXNCUEEsK0VBQWdCLEVBQUM7QUFFaEMsSUFBTWUsTUFBTSxHQUFHO0VBQ2JDLE9BQU8sRUFBRTtJQUNQTyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0VBQy9CLENBQUM7RUFDRE4sUUFBUSxFQUFFO0lBQ1JPLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3RDQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ3pCQyxtQkFBbUIsRUFBRSxDQUNuQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZ0JBQWdCO0VBRXBCO0FBQ0YsQ0FBQztBQUFDLElBQUFKLEVBQUE7QUFBQUssWUFBQSxDQUFBTCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhODYzYzIzYmM5M2MyNjBiNmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xuaW1wb3J0IFVsdGltYXRlRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3VsdGltYXRlLWZlYXR1cmUnO1xuXG5pbXBvcnQgYnVsYiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2J1bGIucG5nJztcbmltcG9ydCBkYXJ0IGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZGFydC5wbmcnO1xuaW1wb3J0IHJvY2tldCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3JvY2tldC5wbmcnO1xuaW1wb3J0IHRyb3BoeSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3Ryb3BoeS5wbmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogYnVsYixcbiAgICB0aXRsZTogJ0xlYXJuIHdpdGggQ29uZmlkZW5jZScsXG4gICAgZGVzY3JpcHRpb246ICdBdCBvdXIgaW5zdGl0dXRpb24sIHdlIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2Ygb3VyIHN0dWRlbnRzXCIgcmVwdXRhdGlvbnMsIHdoaWNoIGlzIHdoeSB3ZVwidmUgY29sbGFib3JhdGVkIHdpdGggY2VydGlmaWVkIGluZHVzdHJ5IHByb2Zlc3Npb25hbHMgdG8gcmV2aWV3IGFuZCBjZXJ0aWZ5IGFsbCBvZiBvdXIgb25saW5lIGNvdXJzZXMgYW5kIHRyYWluaW5nLiBPdXIgY29tcHJlaGVuc2l2ZSBjb3Vyc2VzIGFyZSBkZXNpZ25lZCB0byBwcm92aWRlIGRldGFpbGVkIHR1dG9yaWFscyB0aGF0IGNhbiBiZSBlYXNpbHkgdW5kZXJzdG9vZCBieSBiZWdpbm5lcnMsIHdpdGggZGlyZWN0IGFjY2VzcyB0byB0dXRvcnMgYXZhaWxhYmxlIGZvciBmdXJ0aGVyIHN1cHBvcnQgYW5kIGNsYXJpZmljYXRpb24uJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGljb246IGRhcnQsXG4gICAgdGl0bGU6ICdPdXIgTWlzc2lvbicsXG4gICAgZGVzY3JpcHRpb246ICdPdXIgbWlzc2lvbiBpcyB0byBlcXVpcCBBZnJpY2FucyB3aXRoIHRoZSBsYXRlc3QgcmVhbC10aW1lIHN0YW5kYXJkcyBhbmQgc3VwcG9ydCB0aGVtIGluIHJlYWNoaW5nIHRoZWlyIGZ1bGwgcG90ZW50aWFsLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpY29uOiByb2NrZXQsXG4gICAgdGl0bGU6ICdCb29zdCBQZXJmb3JtYW5jZScsXG4gICAgZGVzY3JpcHRpb246ICdDaG9vc2UgdGhlIHJpZ2h0IHRvbmUgYW5kIGZhc3QgZm9ybWFsaXR5IGxldmVsLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpY29uOiB0cm9waHksXG4gICAgdGl0bGU6ICdBd2FyZCBoaXN0b3J5JyxcbiAgICBkZXNjcmlwdGlvbjogYEtlZXAgc2VjdXJlIHdpdGggZmx1ZW50IDItZmFjdG9yIGF1dGhlbnRpY2F0aW9uIGZ1bGwgYWN0aXZpdHkuYCxcbiAgfSxcbl07XG5cbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInVsdGltYXRlLWZlYXR1cmVcIiB2YXJpYW50PVwic2VjdGlvbi51bHRpbWF0ZUZlYXR1cmVcIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cbiAgICAgICAgICB0aXRsZT1cIk91ciBDb21tdW5pdHlcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRlY2ggaW5kdXN0cnkgaXMgY3VycmVudGx5IG9uZSBvZiB0aGUgbW9zdCByYXBpZGx5IGV4cGFuZGluZyBzZWN0b3JzIGdsb2JhbGx5LCBhbmQgaXRzIGR5bmFtaWMgYW5kIGV2ZXItY2hhbmdpbmcgbGFuZHNjYXBlIGF0dHJhY3RzIGEgcGxldGhvcmEgb2YgaW5kaXZpZHVhbHMgc2Vla2luZyB0byBlbnRlciB0aGlzIGZpZWxkLlxuRnJlZG1pbmQgRGlnaXRhbCBTY2hvb2wgaXMgYW4gZWR1Y2F0aW9uIHBsYXRmb3JtIGZvY3VzZWQgb24gaW1wYXJ0aW5nIGhpZ2gtZGVtYW5kIHNraWxscyBhbmQgZHJpdmVuIGJ5IGEgc3Ryb25nIHNldCBvZiB2YWx1ZXMuIEl0cyBtaXNzaW9uIGlzIHRvIGVtcG93ZXIgQWZyaWNhbiBtaWxsZW5uaWFscyB0byBvdmVyY29tZSBwb3ZlcnR5LCBhY2hpZXZlIGNhcmVlciBzdWNjZXNzLCBhbmQgbGl2ZSB0aGVpciBkcmVhbSBsaXZlcy5cblxuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8VWx0aW1hdGVGZWF0dXJlIGtleT17aXRlbS5pZH0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGluZzoge1xuICAgIG1hcmdpbkJvdHRvbTogWzYwLCA2MCwgNjAsIDgwXSxcbiAgfSxcbiAgZmVhdHVyZXM6IHtcbiAgICBnYXA6IFsnMzVweCA2MHB4JywgNjAsIDYwLCA0MCwgMzAsIDYwXSxcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxuICAgIF0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==