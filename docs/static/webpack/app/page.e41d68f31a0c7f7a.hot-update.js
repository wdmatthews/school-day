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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction HomePage() {\n    _s();\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"#339af0\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"#ff6b6b\",\n            start: 10 * 60 + 4,\n            end: 13 * 60 + 0\n        },\n        {\n            name: \"Course 3\",\n            color: \"#fcc419\",\n            start: 13 * 60 + 4,\n            end: 15 * 60 + 30\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Length\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"#2e2e2e\",\n                borderWidth: 8\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    };\n    const currentCourseIndex = 1;\n    const currentCourse = courses[currentCourseIndex];\n    const nextCourse = courses[currentCourseIndex + 1];\n    let startHour = Math.floor(currentCourse.start / 60);\n    const startZone = startHour < 12 || startHour === 24 ? \"AM\" : \"PM\";\n    if (startHour > 12) startHour -= 12;\n    const startMinutes = currentCourse.start % 60;\n    let endHour = Math.floor(currentCourse.end / 60);\n    const endZone = endHour < 12 || endHour === 24 ? \"AM\" : \"PM\";\n    if (endHour > 12) endHour -= 12;\n    const endMinutes = currentCourse.end % 60;\n    const currentTime = 11 * 60 + 0;\n    const timeLeft = currentCourse.end - currentTime;\n    let nextHour = Math.floor(nextCourse.start / 60);\n    const nextZone = nextHour < 12 || nextHour === 24 ? \"AM\" : \"PM\";\n    if (nextHour > 12) nextHour -= 12;\n    const nextMinutes = nextCourse.start % 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            const handCanvasElem = document.getElementById(\"handCanvas\");\n            const handCanvas = handCanvasElem.getContext(\"2d\");\n            handCanvas.beginPath();\n            handCanvas.moveTo(handCanvasElem.width / 2, handCanvasElem.height / 2);\n            handCanvas.lineTo(0, 0);\n            handCanvas.closePath();\n            handCanvas.strokeStyle = \"white\";\n            handCanvas.lineWidth = 4;\n            handCanvas.lineCap = \"round\";\n            handCanvas.stroke();\n        }, 1000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                align: \"center\",\n                justify: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        pos: \"relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__.Pie, {\n                                data: clockData,\n                                options: clockOptions,\n                                style: {\n                                    marginLeft: \"auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                id: \"handCanvas\",\n                                style: {\n                                    position: \"absolute\",\n                                    left: 0,\n                                    top: 0,\n                                    width: \"100%\",\n                                    height: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                c: currentCourse.color,\n                                children: currentCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                children: [\n                                    startHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    startMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    startZone,\n                                    \"\\xa0- \",\n                                    endHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    endMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    endZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fw: 900,\n                                size: \"xl\",\n                                c: \"white\",\n                                tt: \"uppercase\",\n                                mt: \"md\",\n                                children: timeLeft\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fw: 900,\n                                size: \"xl\",\n                                c: \"white\",\n                                tt: \"uppercase\",\n                                mb: \"md\",\n                                children: \"minutes left\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                size: \"sm\",\n                                tt: \"uppercase\",\n                                fw: 700,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                fw: 700,\n                                size: \"lg\",\n                                c: nextCourse.color,\n                                children: nextCourse.name\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                children: [\n                                    \"at \",\n                                    nextHour.toFixed(0).padStart(2, \"0\"),\n                                    \":\",\n                                    nextMinutes.toFixed(0).padStart(2, \"0\"),\n                                    \" \",\n                                    nextZone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 102,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(HomePage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHO29DQUFLO29DQUFFNUMsV0FBVzJDLE9BQU8sQ0FBQyxHQUFHQyxRQUFRLENBQUMsR0FBRztvQ0FBSztvQ0FBRTdDOzs7Ozs7OzBDQUUxRiw4REFBQ2hELCtDQUFJQTtnQ0FBQ3lGLElBQUk7Z0NBQUtDLE1BQUs7Z0NBQUtDLEdBQUU7Z0NBQVFHLElBQUc7Z0NBQVlDLElBQUc7MENBQU01Qzs7Ozs7OzBDQUMzRCw4REFBQ25ELCtDQUFJQTtnQ0FBQ3lGLElBQUk7Z0NBQUtDLE1BQUs7Z0NBQUtDLEdBQUU7Z0NBQVFHLElBQUc7Z0NBQVlFLElBQUc7MENBQUs7Ozs7OzswQ0FDMUQsOERBQUNoRywrQ0FBSUE7Z0NBQUMwRixNQUFLO2dDQUFLSSxJQUFHO2dDQUFZTCxJQUFJOzBDQUFLOzs7Ozs7MENBR3hDLDhEQUFDekYsK0NBQUlBO2dDQUFDeUYsSUFBSTtnQ0FBS0MsTUFBSztnQ0FBS0MsR0FBR2xELFdBQVc1QixLQUFLOzBDQUN6QzRCLFdBQVc3QixJQUFJOzs7Ozs7MENBRWxCLDhEQUFDWiwrQ0FBSUE7O29DQUFDO29DQUNBb0QsU0FBU3dDLE9BQU8sQ0FBQyxHQUFHQyxRQUFRLENBQUMsR0FBRztvQ0FBSztvQ0FBRXZDLFlBQVlzQyxPQUFPLENBQUMsR0FBR0MsUUFBUSxDQUFDLEdBQUc7b0NBQUs7b0NBQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRztHQXpId0IzQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQsIEdyaWQsIENhcmQgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBjb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMScsXG4gICAgICBjb2xvcjogJyMzMzlhZjAnLFxuICAgICAgc3RhcnQ6IDggKiA2MCArIDMwLFxuICAgICAgZW5kOiAxMCAqIDYwICsgMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMicsXG4gICAgICBjb2xvcjogJyNmZjZiNmInLFxuICAgICAgc3RhcnQ6IDEwICogNjAgKyA0LFxuICAgICAgZW5kOiAxMyAqIDYwICsgMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMycsXG4gICAgICBjb2xvcjogJyNmY2M0MTknLFxuICAgICAgc3RhcnQ6IDEzICogNjAgKyA0LFxuICAgICAgZW5kOiAxNSAqIDYwICsgMzAsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGNvbnN0IGNsb2NrTGFiZWxzOnN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNsb2NrQ29sb3JzOnN0cmluZ1tdID0gW107XG4gIGNvbnN0IGNsb2NrU2xpY2VzOm51bWJlcltdID0gW107XG4gIGNvbnN0IGRheVN0YXJ0ID0gOCAqIDYwICsgMzA7XG4gIGNvbnN0IGRheUVuZCA9IDE1ICogNjAgKyAzMDtcbiAgY29uc3QgZGF5TGVuZ3RoID0gZGF5RW5kIC0gZGF5U3RhcnQ7XG4gIFxuICBjb3Vyc2VzLmZvckVhY2goY291cnNlID0+IHtcbiAgICBjbG9ja0xhYmVscy5wdXNoKGNvdXJzZS5uYW1lKTtcbiAgICBjbG9ja0NvbG9ycy5wdXNoKGNvdXJzZS5jb2xvcik7XG4gICAgY2xvY2tTbGljZXMucHVzaCgoY291cnNlLmVuZCAtIGNvdXJzZS5zdGFydCkgLyBkYXlMZW5ndGgpO1xuICB9KTtcbiAgXG4gIGNvbnN0IGNsb2NrRGF0YSA9IHtcbiAgICBsYWJlbHM6IGNsb2NrTGFiZWxzLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ2xhc3MgTGVuZ3RoJyxcbiAgICAgICAgZGF0YTogY2xvY2tTbGljZXMsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2xvY2tDb2xvcnMsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzJlMmUyZScsXG4gICAgICAgIGJvcmRlcldpZHRoOiA4LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBjbG9ja09wdGlvbnMgPSB7XG4gICAgcGx1Z2luczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIFxuICBjb25zdCBjdXJyZW50Q291cnNlSW5kZXggPSAxO1xuICBjb25zdCBjdXJyZW50Q291cnNlID0gY291cnNlc1tjdXJyZW50Q291cnNlSW5kZXhdO1xuICBjb25zdCBuZXh0Q291cnNlID0gY291cnNlc1tjdXJyZW50Q291cnNlSW5kZXggKyAxXTtcbiAgbGV0IHN0YXJ0SG91ciA9IE1hdGguZmxvb3IoY3VycmVudENvdXJzZS5zdGFydCAvIDYwKTtcbiAgY29uc3Qgc3RhcnRab25lID0gc3RhcnRIb3VyIDwgMTIgfHwgc3RhcnRIb3VyID09PSAyNCA/ICdBTScgOiAnUE0nO1xuICBpZiAoc3RhcnRIb3VyID4gMTIpIHN0YXJ0SG91ciAtPSAxMjtcbiAgY29uc3Qgc3RhcnRNaW51dGVzID0gY3VycmVudENvdXJzZS5zdGFydCAlIDYwO1xuICBsZXQgZW5kSG91ciA9IE1hdGguZmxvb3IoY3VycmVudENvdXJzZS5lbmQgLyA2MCk7XG4gIGNvbnN0IGVuZFpvbmUgPSBlbmRIb3VyIDwgMTIgfHwgZW5kSG91ciA9PT0gMjQgPyAnQU0nIDogJ1BNJztcbiAgaWYgKGVuZEhvdXIgPiAxMikgZW5kSG91ciAtPSAxMjtcbiAgY29uc3QgZW5kTWludXRlcyA9IGN1cnJlbnRDb3Vyc2UuZW5kICUgNjA7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gMTEgKiA2MCArIDA7XG4gIGNvbnN0IHRpbWVMZWZ0ID0gY3VycmVudENvdXJzZS5lbmQgLSBjdXJyZW50VGltZTtcbiAgbGV0IG5leHRIb3VyID0gTWF0aC5mbG9vcihuZXh0Q291cnNlLnN0YXJ0IC8gNjApO1xuICBjb25zdCBuZXh0Wm9uZSA9IG5leHRIb3VyIDwgMTIgfHwgbmV4dEhvdXIgPT09IDI0ID8gJ0FNJyA6ICdQTSc7XG4gIGlmIChuZXh0SG91ciA+IDEyKSBuZXh0SG91ciAtPSAxMjtcbiAgY29uc3QgbmV4dE1pbnV0ZXMgPSBuZXh0Q291cnNlLnN0YXJ0ICUgNjA7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaGFuZENhbnZhc0VsZW06SFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFuZENhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgY29uc3QgaGFuZENhbnZhcyA9IGhhbmRDYW52YXNFbGVtLmdldENvbnRleHQoXCIyZFwiKSE7XG4gICAgICBoYW5kQ2FudmFzLmJlZ2luUGF0aCgpO1xuICAgICAgaGFuZENhbnZhcy5tb3ZlVG8oaGFuZENhbnZhc0VsZW0ud2lkdGggLyAyLCBoYW5kQ2FudmFzRWxlbS5oZWlnaHQgLyAyKTtcbiAgICAgIGhhbmRDYW52YXMubGluZVRvKDAsIDApO1xuICAgICAgaGFuZENhbnZhcy5jbG9zZVBhdGgoKTtcbiAgICAgIGhhbmRDYW52YXMuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBoYW5kQ2FudmFzLmxpbmVXaWR0aCA9IDQ7XG4gICAgICBoYW5kQ2FudmFzLmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICBoYW5kQ2FudmFzLnN0cm9rZSgpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcbiAgXG4gIHJldHVybiAoPD5cbiAgICA8Q2FyZCBtPVwibWRcIiBwPVwibWRcIiByYWRpdXM9XCJtZFwiPlxuICAgICAgPEdyaWQgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkLkNvbCBzcGFuPXt7IGJhc2U6IDYsIG1kOiA0IH19IHBvcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPFBpZSBkYXRhPXtjbG9ja0RhdGF9IG9wdGlvbnM9e2Nsb2NrT3B0aW9uc30gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+PC9QaWU+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImhhbmRDYW52YXNcIiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAwLCB0b3A6IDAsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT48L2NhbnZhcz5cbiAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgPEdyaWQuQ29sIHNwYW49e3sgYmFzZTogNiwgbWQ6IDQgfX0+XG4gICAgICAgICAgPFRleHQgZnc9ezcwMH0gc2l6ZT1cInhsXCIgYz17Y3VycmVudENvdXJzZS5jb2xvcn0+XG4gICAgICAgICAgICB7Y3VycmVudENvdXJzZS5uYW1lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHtzdGFydEhvdXIudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfTp7c3RhcnRNaW51dGVzLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX0ge3N0YXJ0Wm9uZX1cbiAgICAgICAgICAgICZuYnNwOy0ge2VuZEhvdXIudG9GaXhlZCgwKS5wYWRTdGFydCgyLCAnMCcpfTp7ZW5kTWludXRlcy50b0ZpeGVkKDApLnBhZFN0YXJ0KDIsICcwJyl9IHtlbmRab25lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBmdz17OTAwfSBzaXplPVwieGxcIiBjPVwid2hpdGVcIiB0dD1cInVwcGVyY2FzZVwiIG10PVwibWRcIj57dGltZUxlZnR9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZ3PXs5MDB9IHNpemU9XCJ4bFwiIGM9XCJ3aGl0ZVwiIHR0PVwidXBwZXJjYXNlXCIgbWI9XCJtZFwiPm1pbnV0ZXMgbGVmdDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzaXplPVwic21cIiB0dD1cInVwcGVyY2FzZVwiIGZ3PXs3MDB9PlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBmdz17NzAwfSBzaXplPVwibGdcIiBjPXtuZXh0Q291cnNlLmNvbG9yfT5cbiAgICAgICAgICAgIHtuZXh0Q291cnNlLm5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgYXQge25leHRIb3VyLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX06e25leHRNaW51dGVzLnRvRml4ZWQoMCkucGFkU3RhcnQoMiwgJzAnKX0ge25leHRab25lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NhcmQ+XG4gIDwvPik7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJUZXh0IiwiR3JpZCIsIkNhcmQiLCJDaGFydCIsIkNoYXJ0SlMiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlBpZSIsInJlZ2lzdGVyIiwiSG9tZVBhZ2UiLCJjb3Vyc2VzIiwibmFtZSIsImNvbG9yIiwic3RhcnQiLCJlbmQiLCJjbG9ja0xhYmVscyIsImNsb2NrQ29sb3JzIiwiY2xvY2tTbGljZXMiLCJkYXlTdGFydCIsImRheUVuZCIsImRheUxlbmd0aCIsImZvckVhY2giLCJjb3Vyc2UiLCJwdXNoIiwiY2xvY2tEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY2xvY2tPcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsImN1cnJlbnRDb3Vyc2VJbmRleCIsImN1cnJlbnRDb3Vyc2UiLCJuZXh0Q291cnNlIiwic3RhcnRIb3VyIiwiTWF0aCIsImZsb29yIiwic3RhcnRab25lIiwic3RhcnRNaW51dGVzIiwiZW5kSG91ciIsImVuZFpvbmUiLCJlbmRNaW51dGVzIiwiY3VycmVudFRpbWUiLCJ0aW1lTGVmdCIsIm5leHRIb3VyIiwibmV4dFpvbmUiLCJuZXh0TWludXRlcyIsInNldFRpbWVvdXQiLCJoYW5kQ2FudmFzRWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kQ2FudmFzIiwiZ2V0Q29udGV4dCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwic3Ryb2tlIiwibSIsInAiLCJyYWRpdXMiLCJhbGlnbiIsImp1c3RpZnkiLCJDb2wiLCJzcGFuIiwiYmFzZSIsIm1kIiwicG9zIiwib3B0aW9ucyIsInN0eWxlIiwibWFyZ2luTGVmdCIsImNhbnZhcyIsImlkIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiZnciLCJzaXplIiwiYyIsInRvRml4ZWQiLCJwYWRTdGFydCIsInR0IiwibXQiLCJtYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});