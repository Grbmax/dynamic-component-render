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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async ()=>{\n    const res = await fetch(`http://localhost:3000/api/data`);\n    const cards = await res.json();\n    console.log(cards);\n    return {\n        props: {\n            cards\n        }\n    };\n};\nfunction Student({ cards  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: cards.map((cards)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: cards.id\n            }, void 0, false, {\n                fileName: \"F:\\\\work\\\\next-dynamic-component\\\\pages\\\\student.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"F:\\\\work\\\\next-dynamic-component\\\\pages\\\\student.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFRTyxNQUFNQSxjQUFjLEdBQUcsVUFBWTtJQUN0QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN6RCxNQUFNQyxLQUFLLEdBQVksTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7SUFDbEIsT0FBTztRQUNISSxLQUFLLEVBQUU7WUFDSEosS0FBSztTQUNSO0tBQ0o7QUFDTCxDQUFDO0FBRUQsU0FBU0ssT0FBTyxDQUFDLEVBQUVMLEtBQUssR0FBc0QsRUFBRTtJQUM1RSxxQkFDSSw4REFBQ00sSUFBRTtrQkFBRU4sS0FBSyxDQUFDTyxHQUFHLENBQUNQLENBQUFBLEtBQUssR0FBSTtZQUNwQixxQkFDSSw4REFBQ1EsR0FBQzswQkFBRVIsS0FBSyxDQUFDUyxFQUFFOzs7OztvQkFBSyxDQUNwQjtRQUNMLENBQUMsQ0FBQzs7Ozs7WUFBTSxDQUNYO0FBQ0wsQ0FBQztBQUVELGlFQUFlSixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1keW5hbWljLWNvbXBvbmVudC8uL3BhZ2VzL3N0dWRlbnQudHN4PzY1YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbnR5cGUgQ2FyZHMgPSB7XHJcbiAgICBpZCA6IHN0cmluZ1xyXG4gICAgbmFtZSA6IHN0cmluZ1xyXG4gICAgZ3JhZGUgOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWApXHJcbiAgICBjb25zdCBjYXJkczogQ2FyZHNbXSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGNhcmRzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjYXJkcyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTdHVkZW50KHsgY2FyZHMgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGgxPntjYXJkcy5tYXAoY2FyZHMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHA+e2NhcmRzLmlkfTwvcD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfTwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQiXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImNhcmRzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIlN0dWRlbnQiLCJoMSIsIm1hcCIsInAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/student.tsx\n");

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