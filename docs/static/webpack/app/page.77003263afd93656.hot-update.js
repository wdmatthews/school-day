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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Card/Card.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Grid/Grid.mjs\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/core */ \"(app-pages-browser)/./node_modules/@mantine/core/esm/components/Text/Text.mjs\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction HomePage() {\n    const courses = [\n        {\n            name: \"Course 1\",\n            color: \"blue\",\n            start: 8 * 60 + 30,\n            end: 10 * 60 + 0\n        },\n        {\n            name: \"Course 2\",\n            color: \"red\",\n            start: 10 * 60 + 0,\n            end: 13 * 60 + 0\n        }\n    ];\n    const clockLabels = [];\n    const clockColors = [];\n    const clockSlices = [];\n    const dayStart = 8 * 60 + 30;\n    const dayEnd = 15 * 60 + 30;\n    const dayLength = dayEnd - dayStart;\n    courses.forEach((course)=>{\n        clockLabels.push(course.name);\n        clockColors.push(course.color);\n        clockSlices.push((course.end - course.start) / dayLength);\n    });\n    const clockData = {\n        labels: clockLabels,\n        datasets: [\n            {\n                label: \"Class Time\",\n                data: clockSlices,\n                backgroundColor: clockColors,\n                borderColor: \"transparent\",\n                borderWidth: 10\n            }\n        ]\n    };\n    const clockOptions = {\n        plugins: {\n            legend: {\n                display: false\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            m: \"md\",\n            p: \"md\",\n            radius: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                            data: clockData,\n                            options: clockOptions\n                        }, void 0, false, {\n                            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n                        span: {\n                            base: 6,\n                            md: 8\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                c: \"dimmed\",\n                                size: \"xs\",\n                                tt: \"uppercase\",\n                                fw: 700,\n                                children: \"Hi\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fw: 700,\n                                size: \"xl\",\n                                children: \"Hello\"\n                            }, void 0, false, {\n                                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/quantumtek/Desktop/Projects/school-day/app/page.tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpRDtBQUN3QjtBQUNuQztBQUV0Q0ksMkNBQU9BLENBQUNLLFFBQVEsQ0FBQ0osZ0RBQVVBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFFN0IsU0FBU0c7SUFDdEIsTUFBTUMsVUFBVTtRQUNkO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxPQUFPLElBQUksS0FBSztZQUNoQkMsS0FBSyxLQUFLLEtBQUs7UUFDakI7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTyxLQUFLLEtBQUs7WUFDakJDLEtBQUssS0FBSyxLQUFLO1FBQ2pCO0tBQ0Q7SUFFRCxNQUFNQyxjQUF1QixFQUFFO0lBQy9CLE1BQU1DLGNBQXVCLEVBQUU7SUFDL0IsTUFBTUMsY0FBdUIsRUFBRTtJQUMvQixNQUFNQyxXQUFXLElBQUksS0FBSztJQUMxQixNQUFNQyxTQUFTLEtBQUssS0FBSztJQUN6QixNQUFNQyxZQUFZRCxTQUFTRDtJQUUzQlIsUUFBUVcsT0FBTyxDQUFDQyxDQUFBQTtRQUNkUCxZQUFZUSxJQUFJLENBQUNELE9BQU9YLElBQUk7UUFDNUJLLFlBQVlPLElBQUksQ0FBQ0QsT0FBT1YsS0FBSztRQUM3QkssWUFBWU0sSUFBSSxDQUFDLENBQUNELE9BQU9SLEdBQUcsR0FBR1EsT0FBT1QsS0FBSyxJQUFJTztJQUNqRDtJQUVBLE1BQU1JLFlBQVk7UUFDaEJDLFFBQVFWO1FBQ1JXLFVBQVU7WUFDUjtnQkFDRUMsT0FBTztnQkFDUEMsTUFBTVg7Z0JBQ05ZLGlCQUFpQmI7Z0JBQ2pCYyxhQUFhO2dCQUNiQyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0lBQ0EsTUFBTUMsZUFBZTtRQUNuQkMsU0FBUztZQUNQQyxRQUFRO2dCQUNOQyxTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBRUEscUJBQVE7a0JBQ04sNEVBQUNsQywrQ0FBSUE7WUFBQ21DLEdBQUU7WUFBS0MsR0FBRTtZQUFLQyxRQUFPO3NCQUN6Qiw0RUFBQ3RDLCtDQUFJQTs7a0NBQ0gsOERBQUNBLCtDQUFJQSxDQUFDdUMsR0FBRzt3QkFBQ0MsTUFBTTs0QkFBRUMsTUFBTTs0QkFBR0MsSUFBSTt3QkFBRTtrQ0FDL0IsNEVBQUNuQyxnREFBR0E7NEJBQUNxQixNQUFNSjs0QkFBV21CLFNBQVNYOzs7Ozs7Ozs7OztrQ0FFakMsOERBQUNoQywrQ0FBSUEsQ0FBQ3VDLEdBQUc7d0JBQUNDLE1BQU07NEJBQUVDLE1BQU07NEJBQUdDLElBQUk7d0JBQUU7OzBDQUMvQiw4REFBQzNDLCtDQUFJQTtnQ0FBQzZDLEdBQUU7Z0NBQVNDLE1BQUs7Z0NBQUtDLElBQUc7Z0NBQVlDLElBQUk7MENBQUs7Ozs7OzswQ0FHbkQsOERBQUNoRCwrQ0FBSUE7Z0NBQUNnRCxJQUFJO2dDQUFLRixNQUFLOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7S0FsRXdCcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFRleHQsIEdyaWQsIENhcmQgfSBmcm9tICdAbWFudGluZS9jb3JlJztcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuXG5DaGFydEpTLnJlZ2lzdGVyKEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBjb3Vyc2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMScsXG4gICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgc3RhcnQ6IDggKiA2MCArIDMwLFxuICAgICAgZW5kOiAxMCAqIDYwICsgMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb3Vyc2UgMicsXG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBzdGFydDogMTAgKiA2MCArIDAsXG4gICAgICBlbmQ6IDEzICogNjAgKyAwLFxuICAgIH0sXG4gIF07XG4gIFxuICBjb25zdCBjbG9ja0xhYmVsczpzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjbG9ja0NvbG9yczpzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBjbG9ja1NsaWNlczpudW1iZXJbXSA9IFtdO1xuICBjb25zdCBkYXlTdGFydCA9IDggKiA2MCArIDMwO1xuICBjb25zdCBkYXlFbmQgPSAxNSAqIDYwICsgMzA7XG4gIGNvbnN0IGRheUxlbmd0aCA9IGRheUVuZCAtIGRheVN0YXJ0O1xuICBcbiAgY291cnNlcy5mb3JFYWNoKGNvdXJzZSA9PiB7XG4gICAgY2xvY2tMYWJlbHMucHVzaChjb3Vyc2UubmFtZSk7XG4gICAgY2xvY2tDb2xvcnMucHVzaChjb3Vyc2UuY29sb3IpO1xuICAgIGNsb2NrU2xpY2VzLnB1c2goKGNvdXJzZS5lbmQgLSBjb3Vyc2Uuc3RhcnQpIC8gZGF5TGVuZ3RoKTtcbiAgfSk7XG4gIFxuICBjb25zdCBjbG9ja0RhdGEgPSB7XG4gICAgbGFiZWxzOiBjbG9ja0xhYmVscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NsYXNzIFRpbWUnLFxuICAgICAgICBkYXRhOiBjbG9ja1NsaWNlcyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjbG9ja0NvbG9ycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxMCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgY2xvY2tPcHRpb25zID0ge1xuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgXG4gIHJldHVybiAoPD5cbiAgICA8Q2FyZCBtPVwibWRcIiBwPVwibWRcIiByYWRpdXM9XCJtZFwiPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkLkNvbCBzcGFuPXt7IGJhc2U6IDYsIG1kOiA0IH19PlxuICAgICAgICAgIDxQaWUgZGF0YT17Y2xvY2tEYXRhfSBvcHRpb25zPXtjbG9ja09wdGlvbnN9PjwvUGllPlxuICAgICAgICA8L0dyaWQuQ29sPlxuICAgICAgICA8R3JpZC5Db2wgc3Bhbj17eyBiYXNlOiA2LCBtZDogOCB9fT5cbiAgICAgICAgICA8VGV4dCBjPVwiZGltbWVkXCIgc2l6ZT1cInhzXCIgdHQ9XCJ1cHBlcmNhc2VcIiBmdz17NzAwfT5cbiAgICAgICAgICAgIEhpXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGZ3PXs3MDB9IHNpemU9XCJ4bFwiPlxuICAgICAgICAgICAgSGVsbG9cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvR3JpZC5Db2w+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9DYXJkPlxuICA8Lz4pO1xufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJHcmlkIiwiQ2FyZCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkFyY0VsZW1lbnQiLCJUb29sdGlwIiwiTGVnZW5kIiwiUGllIiwicmVnaXN0ZXIiLCJIb21lUGFnZSIsImNvdXJzZXMiLCJuYW1lIiwiY29sb3IiLCJzdGFydCIsImVuZCIsImNsb2NrTGFiZWxzIiwiY2xvY2tDb2xvcnMiLCJjbG9ja1NsaWNlcyIsImRheVN0YXJ0IiwiZGF5RW5kIiwiZGF5TGVuZ3RoIiwiZm9yRWFjaCIsImNvdXJzZSIsInB1c2giLCJjbG9ja0RhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJjbG9ja09wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsIm0iLCJwIiwicmFkaXVzIiwiQ29sIiwic3BhbiIsImJhc2UiLCJtZCIsIm9wdGlvbnMiLCJjIiwic2l6ZSIsInR0IiwiZnciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});