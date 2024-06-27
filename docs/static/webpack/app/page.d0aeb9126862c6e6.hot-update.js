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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction HomePage() {\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"#339af0\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"#ff6b6b\",\n            start: 10 * 60 + 4,\n            end: 13 * 60 + 0\n        },\n        {\n            name: \"Course 3\",\n            color: \"#fcc419\",\n            start: 13 * 60 + 4,\n            end: 15 * 60 + 30\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Length\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"#2e2e2e\",\n                borderWidth: 8\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    };\n    const currentCourseIndex = 1;\n    const currentCourse = courses[currentCourseIndex];\n    const nextCourse = courses[currentCourseIndex + 1];\n    let startHour = Math.floor(currentCourse.start / 60);\n    const startZone = startHour < 12 || startHour === 24 ? \"AM\" : \"PM\";\n    if (startHour > 12) startHour -= 12;\n    const startMinutes = currentCourse.start % 60;\n    let endHour = Math.floor(currentCourse.end / 60);\n    const endZone = endHour < 12 || endHour === 24 ? \"AM\" : \"PM\";\n    if (endHour > 12) endHour -= 12;\n    const endMinutes = currentCourse.end % 60;\n    const currentTime = 11 * 60 + 0;\n    const timeLeft = currentCourse.end - currentTime;\n    let nextHour = Math.floor(nextCourse.start / 60);\n    const nextZone = nextHour < 12 || nextHour === 24 ? \"AM\" : \"PM\";\n    if (nextHour > 12) nextHour -= 12;\n    const nextMinutes = nextCourse.start % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                align: \"center\",\n                justify: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        pos: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                            data: clockData,\n                            options: clockOptions,\n                            style: {\n                                marginLeft: \"auto\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                c: currentCourse.color,\n                                children: currentCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    startHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    startMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    startZone,\n                                    \"\\xa0- \",\n                                    endHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    endMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    endZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 900,\n                                size: \"xl\",\n                                c: \"white\",\n                                tt: \"uppercase\",\n                                mt: \"md\",\n                                children: timeLeft\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 900,\n                                size: \"xl\",\n                                c: \"white\",\n                                tt: \"uppercase\",\n                                mb: \"md\",\n                                children: \"minutes left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                size: \"sm\",\n                                tt: \"uppercase\",\n                                fw: 700,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"lg\",\n                                c: nextCourse.color,\n                                children: nextCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                children: [\n                                    \"at \",\n                                    nextHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    nextMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    nextZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 86,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWiwrQ0FBSUE7O29DQUFDO29DQUNBb0QsU0FBU21CLE9BQU8sQ0FBQyxHQUFHQyxRQUFRLENBQUMsR0FBRztvQ0FBSztvQ0FBRWxCLFlBQVlpQixPQUFPLENBQUMsR0FBR0MsUUFBUSxDQUFDLEdBQUc7b0NBQUs7b0NBQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRztLQTFHd0IzQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgVGV4dCwgR3JpZCwgQ2FyZCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgeyBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvdXJzZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAxJyxcbiAgICAgIGNvbG9yOiAnIzMzOWFmMCcsXG4gICAgICBzdGFydDogOCAqIDYwICsgMzAsXG4gICAgICBlbmQ6IDEwICogNjAgKyAwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAyJyxcbiAgICAgIGNvbG9yOiAnI2ZmNmI2YicsXG4gICAgICBzdGFydDogMTAgKiA2MCArIDQsXG4gICAgICBlbmQ6IDEzICogNjAgKyAwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAzJyxcbiAgICAgIGNvbG9yOiAnI2ZjYzQxOScsXG4gICAgICBzdGFydDogMTMgKiA2MCArIDQsXG4gICAgICBlbmQ6IDE1ICogNjAgKyAzMCxcbiAgICB9LFxuICBdO1xuICBcbiAgY29uc3QgY2xvY2tMYWJlbHM6c3RyaW5nW10gPSBbXTtcbiAgY29uc3QgY2xvY2tDb2xvcnM6c3RyaW5nW10gPSBbXTtcbiAgY29uc3QgY2xvY2tTbGljZXM6bnVtYmVyW10gPSBbXTtcbiAgY29uc3QgZGF5U3RhcnQgPSA4ICogNjAgKyAzMDtcbiAgY29uc3QgZGF5RW5kID0gMTUgKiA2MCArIDMwO1xuICBjb25zdCBkYXlMZW5ndGggPSBkYXlFbmQgLSBkYXlTdGFydDtcbiAgXG4gIGNvdXJzZXMuZm9yRWFjaChjb3Vyc2UgPT4ge1xuICAgIGNsb2NrTGFiZWxzLnB1c2goY291cnNlLm5hbWUpO1xuICAgIGNsb2NrQ29sb3JzLnB1c2goY291cnNlLmNvbG9yKTtcbiAgICBjbG9ja1NsaWNlcy5wdXNoKChjb3Vyc2UuZW5kIC0gY291cnNlLnN0YXJ0KSAvIGRheUxlbmd0aCk7XG4gIH0pO1xuICBcbiAgY29uc3QgY2xvY2tEYXRhID0ge1xuICAgIGxhYmVsczogY2xvY2tMYWJlbHMsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDbGFzcyBMZW5ndGgnLFxuICAgICAgICBkYXRhOiBjbG9ja1NsaWNlcyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjbG9ja0NvbG9ycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMmUyZTJlJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDgsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGNsb2NrT3B0aW9ucyA9IHtcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgXG4gIGNvbnN0IGN1cnJlbnRDb3Vyc2VJbmRleCA9IDE7XG4gIGNvbnN0IGN1cnJlbnRDb3Vyc2UgPSBjb3Vyc2VzW2N1cnJlbnRDb3Vyc2VJbmRleF07XG4gIGNvbnN0IG5leHRDb3Vyc2UgPSBjb3Vyc2VzW2N1cnJlbnRDb3Vyc2VJbmRleCArIDFdO1xuICBsZXQgc3RhcnRIb3VyID0gTWF0aC5mbG9vcihjdXJyZW50Q291cnNlLnN0YXJ0IC8gNjApO1xuICBjb25zdCBzdGFydFpvbmUgPSBzdGFydEhvdXIgPCAxMiB8fCBzdGFydEhvdXIgPT09IDI0ID8gJ0FNJyA6ICdQTSc7XG4gIGlmIChzdGFydEhvdXIgPiAxMikgc3RhcnRIb3VyIC09IDEyO1xuICBjb25zdCBzdGFydE1pbnV0ZXMgPSBjdXJyZW50Q291cnNlLnN0YXJ0ICUgNjA7XG4gIGxldCBlbmRIb3VyID0gTWF0aC5mbG9vcihjdXJyZW50Q291cnNlLmVuZCAvIDYwKTtcbiAgY29uc3QgZW5kWm9uZSA9IGVuZEhvdXIgPCAxMiB8fCBlbmRIb3VyID09PSAyNCA/ICdBTScgOiAnUE0nO1xuICBpZiAoZW5kSG91ciA+IDEyKSBlbmRIb3VyIC09IDEyO1xuICBjb25zdCBlbmRNaW51dGVzID0gY3VycmVudENvdXJzZS5lbmQgJSA2MDtcbiAgY29uc3QgY3VycmVudFRpbWUgPSAxMSAqIDYwICsgMDtcbiAgY29uc3QgdGltZUxlZnQgPSBjdXJyZW50Q291cnNlLmVuZCAtIGN1cnJlbnRUaW1lO1xuICBsZXQgbmV4dEhvdXIgPSBNYXRoLmZsb29yKG5leHRDb3Vyc2Uuc3RhcnQgLyA2MCk7XG4gIGNvbnN0IG5leHRab25lID0gbmV4dEhvdXIgPCAxMiB8fCBuZXh0SG91ciA9PT0gMjQgPyAnQU0nIDogJ1BNJztcbiAgaWYgKG5leHRIb3VyID4gMTIpIG5leHRIb3VyIC09IDEyO1xuICBjb25zdCBuZXh0TWludXRlcyA9IG5leHRDb3Vyc2Uuc3RhcnQgJSA2MDtcbiAgXG4gIHJldHVybiAoPD5cbiAgICA8Q2FyZCBtPVwibWRcIiBwPVwibWRcIiByYWRpdXM9XCJtZFwiPlxuICAgICAgPEdyaWQgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkLkNvbCBzcGFuPXt7IGJhc2U6IDYsIG1kOiA0IH19IHBvcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPFBpZSBkYXRhPXtjbG9ja0RhdGF9IG9wdGlvbnM9e2Nsb2NrT3B0aW9uc30gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+PC9QaWU+XG4gICAgICAgICAgey8qIDxjYW52YXMgc3R5bGU9e30+PC9jYW52YXM+ICovfVxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17eyBiYXNlOiA2LCBtZDogNCB9fT5cbiAgICAgICAgICA8VGV4dCBmdz17NzAwfSBzaXplPVwieGxcIiBjPXtjdXJyZW50Q291cnNlLmNvbG9yfT5cbiAgICAgICAgICAgIHtjdXJyZW50Q291cnNlLm5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAge3N0YXJ0SG91ci50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9OntzdGFydE1pbnV0ZXMudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfSB7c3RhcnRab25lfVxuICAgICAgICAgICAgJm5ic3A7LSB7ZW5kSG91ci50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9OntlbmRNaW51dGVzLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX0ge2VuZFpvbmV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZ3PXs5MDB9IHNpemU9XCJ4bFwiIGM9XCJ3aGl0ZVwiIHR0PVwidXBwZXJjYXNlXCIgbXQ9XCJtZFwiPnt0aW1lTGVmdH08L1RleHQ+XG4gICAgICAgICAgPFRleHQgZnc9ezkwMH0gc2l6ZT1cInhsXCIgYz1cIndoaXRlXCIgdHQ9XCJ1cHBlcmNhc2VcIiBtYj1cIm1kXCI+bWludXRlcyBsZWZ0PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IHNpemU9XCJzbVwiIHR0PVwidXBwZXJjYXNlXCIgZnc9ezcwMH0+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZ3PXs3MDB9IHNpemU9XCJsZ1wiIGM9e25leHRDb3Vyc2UuY29sb3J9PlxuICAgICAgICAgICAge25leHRDb3Vyc2UubmFtZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBhdCB7bmV4dEhvdXIudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfTp7bmV4dE1pbnV0ZXMudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfSB7bmV4dFpvbmV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ2FyZD5cbiAgPC8+KTtcbn1cbiJdLCJuYW1lcyI6WyJUZXh0IiwiR3JpZCIsIkNhcmQiLCJDaGFydCIsIkNoYXJ0SlMiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlBpZSIsInJlZ2lzdGVyIiwiSG9tZVBhZ2UiLCJjb3Vyc2VzIiwibmFtZSIsImNvbG9yIiwic3RhcnQiLCJlbmQiLCJjbG9ja0xhYmVscyIsImNsb2NrQ29sb3JzIiwiY2xvY2tTbGljZXMiLCJkYXlTdGFydCIsImRheUVuZCIsImRheUxlbmd0aCIsImZvckVhY2giLCJjb3Vyc2UiLCJwdXNoIiwiY2xvY2tEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY2xvY2tPcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsImN1cnJlbnRDb3Vyc2VJbmRleCIsImN1cnJlbnRDb3Vyc2UiLCJuZXh0Q291cnNlIiwic3RhcnRIb3VyIiwiTWF0aCIsImZsb29yIiwic3RhcnRab25lIiwic3RhcnRNaW51dGVzIiwiZW5kSG91ciIsImVuZFpvbmUiLCJlbmRNaW51dGVzIiwiY3VycmVudFRpbWUiLCJ0aW1lTGVmdCIsIm5leHRIb3VyIiwibmV4dFpvbmUiLCJuZXh0TWludXRlcyIsIm0iLCJwIiwicmFkaXVzIiwiYWxpZ24iLCJqdXN0aWZ5IiwiQ29sIiwic3BhbiIsImJhc2UiLCJtZCIsInBvcyIsIm9wdGlvbnMiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJmdyIsInNpemUiLCJjIiwidG9GaXhlZCIsInBhZFN0YXJ0IiwidHQiLCJtdCIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});