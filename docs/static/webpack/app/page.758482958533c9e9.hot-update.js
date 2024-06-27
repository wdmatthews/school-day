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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction HomePage() {\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"#339af0\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"#ff6b6b\",\n            start: 10 * 60 + 0,\n            end: 13 * 60 + 0\n        },\n        {\n            name: \"Course 3\",\n            color: \"#fcc419\",\n            start: 13 * 60 + 0,\n            end: 15 * 60 + 30\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Length\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"#2e2e2e\",\n                borderWidth: 10\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            },\n            tooltip: {\n                enabled: false\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                            data: clockData,\n                            options: clockOptions\n                        }, void 0, false, {\n                            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 8\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                c: \"dimmed\",\n                                size: \"xs\",\n                                tt: \"uppercase\",\n                                fw: 700,\n                                children: \"Hi\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                children: \"Hello\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpRDtBQUN3QjtBQUNuQztBQUV0Q0ksMkNBQU9BLENBQUNLLFFBQVEsQ0FBQ0osZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFFN0IsU0FBU0c7SUFDdEIsTUFBTUMsVUFBVTtRQUNkO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxPQUFPLElBQUksS0FBSztZQUNoQkMsS0FBSyxLQUFLLEtBQUs7UUFDakI7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTyxLQUFLLEtBQUs7WUFDakJDLEtBQUssS0FBSyxLQUFLO1FBQ2pCO1FBQ0E7WUFDRUgsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE9BQU8sS0FBSyxLQUFLO1lBQ2pCQyxLQUFLLEtBQUssS0FBSztRQUNqQjtLQUNEO0lBRUQsTUFBTUMsY0FBdUIsRUFBRTtJQUMvQixNQUFNQyxjQUF1QixFQUFFO0lBQy9CLE1BQU1DLGNBQXVCLEVBQUU7SUFDL0IsTUFBTUMsV0FBVyxJQUFJLEtBQUs7SUFDMUIsTUFBTUMsU0FBUyxLQUFLLEtBQUs7SUFDekIsTUFBTUMsWUFBWUQsU0FBU0Q7SUFFM0JSLFFBQVFXLE9BQU8sQ0FBQ0MsQ0FBQUE7UUFDZFAsWUFBWVEsSUFBSSxDQUFDRCxPQUFPWCxJQUFJO1FBQzVCSyxZQUFZTyxJQUFJLENBQUNELE9BQU9WLEtBQUs7UUFDN0JLLFlBQVlNLElBQUksQ0FBQyxDQUFDRCxPQUFPUixHQUFHLEdBQUdRLE9BQU9ULEtBQUssSUFBSU87SUFDakQ7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCQyxRQUFRVjtRQUNSVyxVQUFVO1lBQ1I7Z0JBQ0VDLE9BQU87Z0JBQ1BDLE1BQU1YO2dCQUNOWSxpQkFBaUJiO2dCQUNqQmMsYUFBYTtnQkFDYkMsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtJQUNBLE1BQU1DLGVBQWU7UUFDbkJDLFNBQVM7WUFDUEMsUUFBUTtnQkFDTkMsU0FBUztZQUNYO1lBQ0FDLFNBQVM7Z0JBQ1BDLFNBQVM7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxxQkFBUTtrQkFDTiw0RUFBQ3BDLCtDQUFJQTtZQUFDcUMsR0FBRTtZQUFLQyxHQUFFO1lBQUtDLFFBQU87c0JBQ3pCLDRFQUFDeEMsK0NBQUlBOztrQ0FDSCw4REFBQ0EsK0NBQUlBLENBQUN5QyxHQUFHO3dCQUFDQyxNQUFNOzRCQUFFQyxNQUFNOzRCQUFHQyxJQUFJO3dCQUFFO2tDQUMvQiw0RUFBQ3JDLGdEQUFHQTs0QkFBQ3FCLE1BQU1KOzRCQUFXcUIsU0FBU2I7Ozs7Ozs7Ozs7O2tDQUVqQyw4REFBQ2hDLCtDQUFJQSxDQUFDeUMsR0FBRzt3QkFBQ0MsTUFBTTs0QkFBRUMsTUFBTTs0QkFBR0MsSUFBSTt3QkFBRTs7MENBQy9CLDhEQUFDN0MsK0NBQUlBO2dDQUFDK0MsR0FBRTtnQ0FBU0MsTUFBSztnQ0FBS0MsSUFBRztnQ0FBWUMsSUFBSTswQ0FBSzs7Ozs7OzBDQUduRCw4REFBQ2xELCtDQUFJQTtnQ0FBQ2tELElBQUk7Z0NBQUtGLE1BQUs7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uQztLQTNFd0J0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgVGV4dCwgR3JpZCwgQ2FyZCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgeyBQaWUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvdXJzZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAxJyxcbiAgICAgIGNvbG9yOiAnIzMzOWFmMCcsXG4gICAgICBzdGFydDogOCAqIDYwICsgMzAsXG4gICAgICBlbmQ6IDEwICogNjAgKyAwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAyJyxcbiAgICAgIGNvbG9yOiAnI2ZmNmI2YicsXG4gICAgICBzdGFydDogMTAgKiA2MCArIDAsXG4gICAgICBlbmQ6IDEzICogNjAgKyAwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvdXJzZSAzJyxcbiAgICAgIGNvbG9yOiAnI2ZjYzQxOScsXG4gICAgICBzdGFydDogMTMgKiA2MCArIDAsXG4gICAgICBlbmQ6IDE1ICogNjAgKyAzMCxcbiAgICB9LFxuICBdO1xuICBcbiAgY29uc3QgY2xvY2tMYWJlbHM6c3RyaW5nW10gPSBbXTtcbiAgY29uc3QgY2xvY2tDb2xvcnM6c3RyaW5nW10gPSBbXTtcbiAgY29uc3QgY2xvY2tTbGljZXM6bnVtYmVyW10gPSBbXTtcbiAgY29uc3QgZGF5U3RhcnQgPSA4ICogNjAgKyAzMDtcbiAgY29uc3QgZGF5RW5kID0gMTUgKiA2MCArIDMwO1xuICBjb25zdCBkYXlMZW5ndGggPSBkYXlFbmQgLSBkYXlTdGFydDtcbiAgXG4gIGNvdXJzZXMuZm9yRWFjaChjb3Vyc2UgPT4ge1xuICAgIGNsb2NrTGFiZWxzLnB1c2goY291cnNlLm5hbWUpO1xuICAgIGNsb2NrQ29sb3JzLnB1c2goY291cnNlLmNvbG9yKTtcbiAgICBjbG9ja1NsaWNlcy5wdXNoKChjb3Vyc2UuZW5kIC0gY291cnNlLnN0YXJ0KSAvIGRheUxlbmd0aCk7XG4gIH0pO1xuICBcbiAgY29uc3QgY2xvY2tEYXRhID0ge1xuICAgIGxhYmVsczogY2xvY2tMYWJlbHMsXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDbGFzcyBMZW5ndGgnLFxuICAgICAgICBkYXRhOiBjbG9ja1NsaWNlcyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjbG9ja0NvbG9ycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMmUyZTJlJyxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEwLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBjbG9ja09wdGlvbnMgPSB7XG4gICAgcGx1Z2luczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIFxuICByZXR1cm4gKDw+XG4gICAgPENhcmQgbT1cIm1kXCIgcD1cIm1kXCIgcmFkaXVzPVwibWRcIj5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17eyBiYXNlOiA2LCBtZDogNCB9fT5cbiAgICAgICAgICA8UGllIGRhdGE9e2Nsb2NrRGF0YX0gb3B0aW9ucz17Y2xvY2tPcHRpb25zfT48L1BpZT5cbiAgICAgICAgPC9HcmlkLkNvbD5cbiAgICAgICAgPEdyaWQuQ29sIHNwYW49e3sgYmFzZTogNiwgbWQ6IDggfX0+XG4gICAgICAgICAgPFRleHQgYz1cImRpbW1lZFwiIHNpemU9XCJ4c1wiIHR0PVwidXBwZXJjYXNlXCIgZnc9ezcwMH0+XG4gICAgICAgICAgICBIaVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBmdz17NzAwfSBzaXplPVwieGxcIj5cbiAgICAgICAgICAgIEhlbGxvXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ2FyZD5cbiAgPC8+KTtcbn1cbiJdLCJuYW1lcyI6WyJUZXh0IiwiR3JpZCIsIkNhcmQiLCJDaGFydCIsIkNoYXJ0SlMiLCJBcmNFbGVtZW50IiwiVG9vbHRpcCIsIkxlZ2VuZCIsIlBpZSIsInJlZ2lzdGVyIiwiSG9tZVBhZ2UiLCJjb3Vyc2VzIiwibmFtZSIsImNvbG9yIiwic3RhcnQiLCJlbmQiLCJjbG9ja0xhYmVscyIsImNsb2NrQ29sb3JzIiwiY2xvY2tTbGljZXMiLCJkYXlTdGFydCIsImRheUVuZCIsImRheUxlbmd0aCIsImZvckVhY2giLCJjb3Vyc2UiLCJwdXNoIiwiY2xvY2tEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiY2xvY2tPcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJ0b29sdGlwIiwiZW5hYmxlZCIsIm0iLCJwIiwicmFkaXVzIiwiQ29sIiwic3BhbiIsImJhc2UiLCJtZCIsIm9wdGlvbnMiLCJjIiwic2l6ZSIsInR0IiwiZnciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});