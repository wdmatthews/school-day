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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction HomePage() {\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"#339af0\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"#ff6b6b\",\n            start: 10 * 60 + 4,\n            end: 13 * 60 + 0\n        },\n        {\n            name: \"Course 3\",\n            color: \"#fcc419\",\n            start: 13 * 60 + 4,\n            end: 15 * 60 + 30\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Length\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"#2e2e2e\",\n                borderWidth: 10\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    };\n    const currentCourseIndex = 0;\n    const currentCourse = courses[currentCourseIndex];\n    const nextCourse = courses[currentCourseIndex + 1];\n    let startHour = Math.floor(currentCourse.start / 60);\n    const startZone = startHour < 12 || startHour === 24 ? \"AM\" : \"PM\";\n    if (startHour > 12) startHour -= 12;\n    const startMinutes = currentCourse.start % 60;\n    let endHour = Math.floor(currentCourse.end / 60);\n    const endZone = endHour < 12 || endHour === 24 ? \"AM\" : \"PM\";\n    if (endHour > 12) endHour -= 12;\n    const endMinutes = currentCourse.end % 60;\n    const currentTime = 9 * 60 + 0;\n    const timeLeft = currentCourse.end - currentTime;\n    let nextHour = Math.floor(nextCourse.start / 60);\n    const nextZone = nextHour < 12 || nextHour === 24 ? \"AM\" : \"PM\";\n    if (nextHour > 12) nextHour -= 12;\n    const nextMinutes = nextCourse.start % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                            data: clockData,\n                            options: clockOptions\n                        }, void 0, false, {\n                            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 8\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                c: currentCourse.color,\n                                children: currentCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    startHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    startMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    startZone,\n                                    \"\\xa0- \",\n                                    endHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    endMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    endZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    timeLeft,\n                                    \" minutes left\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                size: \"sm\",\n                                tt: \"uppercase\",\n                                fw: 700,\n                                mt: \"md\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"lg\",\n                                c: nextCourse.color,\n                                children: nextCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"at \",\n                                    nextHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    nextMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    nextZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 86,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFRleHQsIEdyaWQsIENhcmQgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBjb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMScsXG4gICAgICBjb2xvcjogJyMzMzlhZjAnLFxuICAgICAgc3RhcnQ6IDggKiA2MCArIDMwLFxuICAgICAgZW5kOiAxMCAqIDYwICsgMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMicsXG4gICAgICBjb2xvcjogJyNmZjZiNmInLFxuICAgICAgc3RhcnQ6IDEwICogNjAgKyA0LFxuICAgICAgZW5kOiAxMyAqIDYwICsgMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMycsXG4gICAgICBjb2xvcjogJyNmY2M0MTknLFxuICAgICAgc3RhcnQ6IDEzICogNjAgKyA0LFxuICAgICAgZW5kOiAxNSAqIDYwICsgMzAsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGNsb2NrTGFiZWxzOnN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNsb2NrQ29sb3JzOnN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNsb2NrU2xpY2VzOm51bWJlcltdID0gW107XG4gIGNvbnN0IGRheVN0YXJ0ID0gOCAqIDYwICsgMzA7XG4gIGNvbnN0IGRheUVuZCA9IDE1ICogNjAgKyAzMDtcbiAgY29uc3QgZGF5TGVuZ3RoID0gZGF5RW5kIC0gZGF5U3RhcnQ7XG4gIFxuICBjb3Vyc2VzLmZvckVhY2goY291cnNlID0+IHtcbiAgICBjbG9ja0xhYmVscy5wdXNoKGNvdXJzZS5uYW1lKTtcbiAgICBjbG9ja0NvbG9ycy5wdXNoKGNvdXJzZS5jb2xvcik7XG4gICAgY2xvY2tTbGljZXMucHVzaCgoY291cnNlLmVuZCAtIGNvdXJzZS5zdGFydCkgLyBkYXlMZW5ndGgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNsb2NrRGF0YSA9IHtcbiAgICBsYWJlbHM6IGNsb2NrTGFiZWxzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ2xhc3MgTGVuZ3RoJyxcbiAgICAgICAgZGF0YTogY2xvY2tTbGljZXMsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2xvY2tDb2xvcnMsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzJlMmUyZScsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgY2xvY2tPcHRpb25zID0ge1xuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICBcbiAgY29uc3QgY3VycmVudENvdXJzZUluZGV4ID0gMDtcbiAgY29uc3QgY3VycmVudENvdXJzZSA9IGNvdXJzZXNbY3VycmVudENvdXJzZUluZGV4XTtcbiAgY29uc3QgbmV4dENvdXJzZSA9IGNvdXJzZXNbY3VycmVudENvdXJzZUluZGV4ICsgMV07XG4gIGxldCBzdGFydEhvdXIgPSBNYXRoLmZsb29yKGN1cnJlbnRDb3Vyc2Uuc3RhcnQgLyA2MCk7XG4gIGNvbnN0IHN0YXJ0Wm9uZSA9IHN0YXJ0SG91ciA8IDEyIHx8IHN0YXJ0SG91ciA9PT0gMjQgPyAnQU0nIDogJ1BNJztcbiAgaWYgKHN0YXJ0SG91ciA+IDEyKSBzdGFydEhvdXIgLT0gMTI7XG4gIGNvbnN0IHN0YXJ0TWludXRlcyA9IGN1cnJlbnRDb3Vyc2Uuc3RhcnQgJSA2MDtcbiAgbGV0IGVuZEhvdXIgPSBNYXRoLmZsb29yKGN1cnJlbnRDb3Vyc2UuZW5kIC8gNjApO1xuICBjb25zdCBlbmRab25lID0gZW5kSG91ciA8IDEyIHx8IGVuZEhvdXIgPT09IDI0ID8gJ0FNJyA6ICdQTSc7XG4gIGlmIChlbmRIb3VyID4gMTIpIGVuZEhvdXIgLT0gMTI7XG4gIGNvbnN0IGVuZE1pbnV0ZXMgPSBjdXJyZW50Q291cnNlLmVuZCAlIDYwO1xuICBjb25zdCBjdXJyZW50VGltZSA9IDkgKiA2MCArIDA7XG4gIGNvbnN0IHRpbWVMZWZ0ID0gY3VycmVudENvdXJzZS5lbmQgLSBjdXJyZW50VGltZTtcbiAgbGV0IG5leHRIb3VyID0gTWF0aC5mbG9vcihuZXh0Q291cnNlLnN0YXJ0IC8gNjApO1xuICBjb25zdCBuZXh0Wm9uZSA9IG5leHRIb3VyIDwgMTIgfHwgbmV4dEhvdXIgPT09IDI0ID8gJ0FNJyA6ICdQTSc7XG4gIGlmIChuZXh0SG91ciA+IDEyKSBuZXh0SG91ciAtPSAxMjtcbiAgY29uc3QgbmV4dE1pbnV0ZXMgPSBuZXh0Q291cnNlLnN0YXJ0ICUgNjA7XG4gIFxuICByZXR1cm4gKDw+XG4gICAgPENhcmQgbT1cIm1kXCIgcD1cIm1kXCIgcmFkaXVzPVwibWRcIj5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17eyBiYXNlOiA2LCBtZDogNCB9fT5cbiAgICAgICAgICA8UGllIGRhdGE9e2Nsb2NrRGF0YX0gb3B0aW9ucz17Y2xvY2tPcHRpb25zfT48L1BpZT5cbiAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgPEdyaWQuQ29sIHNwYW49e3sgYmFzZTogNiwgbWQ6IDggfX0+XG4gICAgICAgICAgPFRleHQgZnc9ezcwMH0gc2l6ZT1cInhsXCIgYz17Y3VycmVudENvdXJzZS5jb2xvcn0+XG4gICAgICAgICAgICB7Y3VycmVudENvdXJzZS5uYW1lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHtzdGFydEhvdXIudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfTp7c3RhcnRNaW51dGVzLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX0ge3N0YXJ0Wm9uZX1cbiAgICAgICAgICAgICZuYnNwOy0ge2VuZEhvdXIudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfTp7ZW5kTWludXRlcy50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9IHtlbmRab25lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD57dGltZUxlZnR9IG1pbnV0ZXMgbGVmdDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzaXplPVwic21cIiB0dD1cInVwcGVyY2FzZVwiIGZ3PXs3MDB9IG10PVwibWRcIj5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZnc9ezcwMH0gc2l6ZT1cImxnXCIgYz17bmV4dENvdXJzZS5jb2xvcn0+XG4gICAgICAgICAgICB7bmV4dENvdXJzZS5uYW1lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIGF0IHtuZXh0SG91ci50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9OntuZXh0TWludXRlcy50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9IHtuZXh0Wm9uZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYXJkPlxuICA8Lz4pO1xufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJHcmlkIiwiQ2FyZCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiUGllIiwicmVnaXN0ZXIiLCJIb21lUGFnZSIsImNvdXJzZXMiLCJuYW1lIiwiY29sb3IiLCJzdGFydCIsImVuZCIsImNsb2NrTGFiZWxzIiwiY2xvY2tDb2xvcnMiLCJjbG9ja1NsaWNlcyIsImRheVN0YXJ0IiwiZGF5RW5kIiwiZGF5TGVuZ3RoIiwiZm9yRWFjaCIsImNvdXJzZSIsInB1c2giLCJjbG9ja0RhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJjbG9ja09wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInRvb2x0aXAiLCJlbmFibGVkIiwiY3VycmVudENvdXJzZUluZGV4IiwiY3VycmVudENvdXJzZSIsIm5leHRDb3Vyc2UiLCJzdGFydEhvdXIiLCJNYXRoIiwiZmxvb3IiLCJzdGFydFpvbmUiLCJzdGFydE1pbnV0ZXMiLCJlbmRIb3VyIiwiZW5kWm9uZSIsImVuZE1pbnV0ZXMiLCJjdXJyZW50VGltZSIsInRpbWVMZWZ0IiwibmV4dEhvdXIiLCJuZXh0Wm9uZSIsIm5leHRNaW51dGVzIiwibSIsInAiLCJyYWRpdXMiLCJDb2wiLCJzcGFuIiwiYmFzZSIsIm1kIiwib3B0aW9ucyIsImZ3Iiwic2l6ZSIsImMiLCJ0b0ZpeGVkIiwicGFkU3RhcnQiLCJ0dCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});