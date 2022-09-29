"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/student";
exports.ids = ["pages/student"];
exports.modules = {

/***/ "./pages/student.tsx":
/*!***************************!*\
  !*** ./pages/student.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async ()=>{\n    const res = await fetch(`http://localhost:3000/api/data`);\n    const cards = await res.json();\n    console.log(cards);\n    return {\n        props: {\n            cards\n        }\n    };\n};\nfunction Student({ cards  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: cards.map((cards)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"F:\\\\work\\\\next-dynamic-component\\\\pages\\\\student.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"F:\\\\work\\\\next-dynamic-component\\\\pages\\\\student.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFRTyxNQUFNQSxjQUFjLEdBQUcsVUFBWTtJQUN0QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN6RCxNQUFNQyxLQUFLLEdBQVksTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7SUFDbEIsT0FBTztRQUNISSxLQUFLLEVBQUU7WUFDSEosS0FBSztTQUNSO0tBQ0o7QUFDTCxDQUFDO0FBRUQsU0FBU0ssT0FBTyxDQUFDLEVBQUVMLEtBQUssR0FBc0QsRUFBRTtJQUM1RSxxQkFDSSw4REFBQ00sSUFBRTtrQkFBRU4sS0FBSyxDQUFDTyxHQUFHLENBQUNQLENBQUFBLEtBQUssR0FBSTtZQUNwQixxQkFDSSw4REFBQ1EsR0FBQzs7OztvQkFBSyxDQUNWO1FBQ0wsQ0FBQyxDQUFDOzs7OztZQUFNLENBQ1g7QUFDTCxDQUFDO0FBRUQsaUVBQWVILE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWR5bmFtaWMtY29tcG9uZW50Ly4vcGFnZXMvc3R1ZGVudC50c3g/NjViMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxudHlwZSBDYXJkcyA9IHtcclxuICAgIGlkIDogc3RyaW5nXHJcbiAgICBuYW1lIDogc3RyaW5nXHJcbiAgICBncmFkZSA6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYClcclxuICAgIGNvbnN0IGNhcmRzOiBDYXJkc1tdID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coY2FyZHMpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNhcmRzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0dWRlbnQoeyBjYXJkcyB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aDE+e2NhcmRzLm1hcChjYXJkcyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJjYXJkcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJTdHVkZW50IiwiaDEiLCJtYXAiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/student.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/student.tsx"));
module.exports = __webpack_exports__;

})();