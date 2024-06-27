"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction HomePage() {\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"#339af0\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"#ff6b6b\",\n            start: 10 * 60 + 0,\n            end: 13 * 60 + 0\n        },\n        {\n            name: \"Course 3\",\n            color: \"#fcc419\",\n            start: 13 * 60 + 0,\n            end: 15 * 60 + 30\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Length\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"#2e2e2e\",\n                borderWidth: 10\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    };\n    const currentCourseIndex = 0;\n    const currentCourse = courses[currentCourseIndex];\n    let startHour = Math.floor(currentCourse.start / 60);\n    if (startHour > 12) startHour -= 12;\n    const startMinutes = currentCourse.start % 60;\n    let endHour = Math.floor(currentCourse.end / 60);\n    if (endHour > 12) endHour -= 12;\n    const endMinutes = currentCourse.end % 60;\n    const currentTime = 9 * 60 + 30;\n    const timeLeft = currentCourse.end - currentTime;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                            data: clockData,\n                            options: clockOptions\n                        }, void 0, false, {\n                            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 8\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                children: currentCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    startHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    startMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \"\\xa0- \",\n                                    endHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    endMinutes.toFixed(0).padStart(2, \"0\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    timeLeft,\n                                    \" minutes left\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 79,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHO29DQUFLO29DQUN6RWYsUUFBUWMsT0FBTyxDQUFDLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO29DQUFLO29DQUFFZCxXQUFXYSxPQUFPLENBQUMsR0FBR0MsUUFBUSxDQUFDLEdBQUc7Ozs7Ozs7MENBRW5GLDhEQUFDNUQsK0NBQUlBOztvQ0FBRWdEO29DQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCO0tBeEZ3QnRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBUZXh0LCBHcmlkLCBDYXJkIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCB7IFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihBcmNFbGVtZW50LCBUb29sdGlwLCBMZWdlbmQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgY291cnNlcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ291cnNlIDEnLFxuICAgICAgY29sb3I6ICcjMzM5YWYwJyxcbiAgICAgIHN0YXJ0OiA4ICogNjAgKyAzMCxcbiAgICAgIGVuZDogMTAgKiA2MCArIDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ291cnNlIDInLFxuICAgICAgY29sb3I6ICcjZmY2YjZiJyxcbiAgICAgIHN0YXJ0OiAxMCAqIDYwICsgMCxcbiAgICAgIGVuZDogMTMgKiA2MCArIDAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ291cnNlIDMnLFxuICAgICAgY29sb3I6ICcjZmNjNDE5JyxcbiAgICAgIHN0YXJ0OiAxMyAqIDYwICsgMCxcbiAgICAgIGVuZDogMTUgKiA2MCArIDMwLFxuICAgIH0sXG4gIF07XG4gIFxuICBjb25zdCBjbG9ja0xhYmVsczpzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjbG9ja0NvbG9yczpzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjbG9ja1NsaWNlczpudW1iZXJbXSA9IFtdO1xuICBjb25zdCBkYXlTdGFydCA9IDggKiA2MCArIDMwO1xuICBjb25zdCBkYXlFbmQgPSAxNSAqIDYwICsgMzA7XG4gIGNvbnN0IGRheUxlbmd0aCA9IGRheUVuZCAtIGRheVN0YXJ0O1xuICBcbiAgY291cnNlcy5mb3JFYWNoKGNvdXJzZSA9PiB7XG4gICAgY2xvY2tMYWJlbHMucHVzaChjb3Vyc2UubmFtZSk7XG4gICAgY2xvY2tDb2xvcnMucHVzaChjb3Vyc2UuY29sb3IpO1xuICAgIGNsb2NrU2xpY2VzLnB1c2goKGNvdXJzZS5lbmQgLSBjb3Vyc2Uuc3RhcnQpIC8gZGF5TGVuZ3RoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBjbG9ja0RhdGEgPSB7XG4gICAgbGFiZWxzOiBjbG9ja0xhYmVscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NsYXNzIExlbmd0aCcsXG4gICAgICAgIGRhdGE6IGNsb2NrU2xpY2VzLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNsb2NrQ29sb3JzLFxuICAgICAgICBib3JkZXJDb2xvcjogJyMyZTJlMmUnLFxuICAgICAgICBib3JkZXJXaWR0aDogMTAsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGNsb2NrT3B0aW9ucyA9IHtcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgXG4gIGNvbnN0IGN1cnJlbnRDb3Vyc2VJbmRleCA9IDA7XG4gIGNvbnN0IGN1cnJlbnRDb3Vyc2UgPSBjb3Vyc2VzW2N1cnJlbnRDb3Vyc2VJbmRleF07XG4gIGxldCBzdGFydEhvdXIgPSBNYXRoLmZsb29yKGN1cnJlbnRDb3Vyc2Uuc3RhcnQgLyA2MCk7XG4gIGlmIChzdGFydEhvdXIgPiAxMikgc3RhcnRIb3VyIC09IDEyO1xuICBjb25zdCBzdGFydE1pbnV0ZXMgPSBjdXJyZW50Q291cnNlLnN0YXJ0ICUgNjA7XG4gIGxldCBlbmRIb3VyID0gTWF0aC5mbG9vcihjdXJyZW50Q291cnNlLmVuZCAvIDYwKTtcbiAgaWYgKGVuZEhvdXIgPiAxMikgZW5kSG91ciAtPSAxMjtcbiAgY29uc3QgZW5kTWludXRlcyA9IGN1cnJlbnRDb3Vyc2UuZW5kICUgNjA7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gOSAqIDYwICsgMzA7XG4gIGNvbnN0IHRpbWVMZWZ0ID0gY3VycmVudENvdXJzZS5lbmQgLSBjdXJyZW50VGltZTtcbiAgXG4gIHJldHVybiAoPD5cbiAgICA8Q2FyZCBtPVwibWRcIiBwPVwibWRcIiByYWRpdXM9XCJtZFwiPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkLkNvbCBzcGFuPXt7IGJhc2U6IDYsIG1kOiA0IH19PlxuICAgICAgICAgIDxQaWUgZGF0YT17Y2xvY2tEYXRhfSBvcHRpb25zPXtjbG9ja09wdGlvbnN9PjwvUGllPlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17eyBiYXNlOiA2LCBtZDogOCB9fT5cbiAgICAgICAgICA8VGV4dCBmdz17NzAwfSBzaXplPVwieGxcIj5cbiAgICAgICAgICAgIHtjdXJyZW50Q291cnNlLm5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge3N0YXJ0SG91ci50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9OntzdGFydE1pbnV0ZXMudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfVxuICAgICAgICAgICAgJm5ic3A7LSB7ZW5kSG91ci50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9OntlbmRNaW51dGVzLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+e3RpbWVMZWZ0fSBtaW51dGVzIGxlZnQ8L1RleHQ+XG4gICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYXJkPlxuICA8Lz4pO1xufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJHcmlkIiwiQ2FyZCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiUGllIiwicmVnaXN0ZXIiLCJIb21lUGFnZSIsImNvdXJzZXMiLCJuYW1lIiwiY29sb3IiLCJzdGFydCIsImVuZCIsImNsb2NrTGFiZWxzIiwiY2xvY2tDb2xvcnMiLCJjbG9ja1NsaWNlcyIsImRheVN0YXJ0IiwiZGF5RW5kIiwiZGF5TGVuZ3RoIiwiZm9yRWFjaCIsImNvdXJzZSIsInB1c2giLCJjbG9ja0RhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJjbG9ja09wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInRvb2x0aXAiLCJlbmFibGVkIiwiY3VycmVudENvdXJzZUluZGV4IiwiY3VycmVudENvdXJzZSIsInN0YXJ0SG91ciIsIk1hdGgiLCJmbG9vciIsInN0YXJ0TWludXRlcyIsImVuZEhvdXIiLCJlbmRNaW51dGVzIiwiY3VycmVudFRpbWUiLCJ0aW1lTGVmdCIsIm0iLCJwIiwicmFkaXVzIiwiQ29sIiwic3BhbiIsImJhc2UiLCJtZCIsIm9wdGlvbnMiLCJmdyIsInNpemUiLCJ0b0ZpeGVkIiwicGFkU3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});