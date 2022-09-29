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
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"sql_query\": () => (/* binding */ sql_query)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PWD,\n        database: process.env.DB_SCHEMA,\n        insecureAuth: true\n    }\n});\nasync function sql_query(query_string, values = []) {\n    try {\n        const results = await db.query(query_string, values);\n        await db.end();\n        return results;\n    } catch (e) {\n        throw Error(e.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxFQUFFLEdBQUdELHVEQUFLLENBQUU7SUFDckJFLE1BQU0sRUFBRTtRQUNKQyxJQUFJLEVBQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPO1FBQzlCQyxJQUFJLEVBQU9ILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPO1FBQzlCQyxRQUFRLEVBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxNQUFNO1FBQzdCQyxRQUFRLEVBQUdQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxTQUFTO1FBQ2hDQyxZQUFZLEVBQUcsSUFBSTtLQUN0QjtDQUNKLENBQUM7QUFFSyxlQUFlQyxTQUFTLENBQUNDLFlBQVksRUFBQ0MsTUFBTSxHQUFHLEVBQUUsRUFBRTtJQUN0RCxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1oQixFQUFFLENBQUNpQixLQUFLLENBQUNILFlBQVksRUFBRUMsTUFBTSxDQUFDO1FBQ3BELE1BQU1mLEVBQUUsQ0FBQ2tCLEdBQUcsRUFBRTtRQUNkLE9BQU9GLE9BQU87SUFDbEIsRUFBRSxPQUFPRyxDQUFDLEVBQUU7UUFDUixNQUFNQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBTyxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1keW5hbWljLWNvbXBvbmVudC8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gbXlzcWwgKHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGhvc3QgICAgIDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgICAgICB1c2VyICAgICA6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICAgICAgcGFzc3dvcmQgOiBwcm9jZXNzLmVudi5EQl9QV0QsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBwcm9jZXNzLmVudi5EQl9TQ0hFTUEsXHJcbiAgICAgICAgaW5zZWN1cmVBdXRoIDogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNxbF9xdWVyeShxdWVyeV9zdHJpbmcsdmFsdWVzID0gW10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGRiLnF1ZXJ5KHF1ZXJ5X3N0cmluZywgdmFsdWVzKVxyXG4gICAgICAgIGF3YWl0IGRiLmVuZCgpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihlLm1lc3NhZ2UpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNvbmZpZyIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QV0QiLCJkYXRhYmFzZSIsIkRCX1NDSEVNQSIsImluc2VjdXJlQXV0aCIsInNxbF9xdWVyeSIsInF1ZXJ5X3N0cmluZyIsInZhbHVlcyIsInJlc3VsdHMiLCJxdWVyeSIsImVuZCIsImUiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/data.ts":
/*!***************************!*\
  !*** ./pages/api/data.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\nasync function handler(req, res) {\n    try {\n        const results = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.sql_query)(\"SELECT * FROM STUDENT\", []);\n        res.status(200).json(results);\n    } catch (e) {\n        res.status(500).json({\n            message: e.message\n        });\n        console.log(e.message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUd6QixlQUFlQyxPQUFPLENBQUVDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUc7SUFDbEYsSUFBSTtRQUNELE1BQU1DLE9BQU8sR0FBRyxNQUFNSixrREFBUyxDQUMzQix1QkFBdUIsRUFDdkIsRUFBRSxDQUFDO1FBQ0hHLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQztJQUNwQyxFQUFFLE9BQU9HLENBQUMsRUFBRTtRQUNUSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVFLE9BQU8sRUFBRSxDQUFFLENBQVdBLE9BQU87U0FBRSxDQUFDLENBQUM7UUFDeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUUsQ0FBV0YsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWR5bmFtaWMtY29tcG9uZW50Ly4vcGFnZXMvYXBpL2RhdGEudHM/ZWQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcWxfcXVlcnkgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCJcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoIHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlICkge1xyXG4gdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzcWxfcXVlcnkgKFxyXG4gICAgICAgICdTRUxFQ1QgKiBGUk9NIFNUVURFTlQnICxcclxuICAgICAgICBbXSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzKVxyXG4gfSBjYXRjaCAoZSkge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAoZSBhcyBFcnJvcikubWVzc2FnZSB9KTtcclxuICAgIGNvbnNvbGUubG9nKChlIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuIH1cclxufSJdLCJuYW1lcyI6WyJzcWxfcXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzdWx0cyIsInN0YXR1cyIsImpzb24iLCJlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/data.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/data.ts"));
module.exports = __webpack_exports__;

})();