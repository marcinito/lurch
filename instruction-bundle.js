/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/instructionStyle.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/instructionStyle.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./stylesImage/smok2.png */ \"./src/stylesImage/smok2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./stylesImage/instruction/spaceButton.png */ \"./src/stylesImage/instruction/spaceButton.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: skyblue;\\n  width: 100%;\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: 70% 0;\\n  background-size: 300%;\\n}\\n\\n.container {\\n  width: 85%;\\n  height: 99vh;\\n  border: 10px solid black;\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n  background-image: linear-gradient(black, gray);\\n  border-left: 5px groove white;\\n  border-right: 5px groove white;\\n  border-top: 5px groove white;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n.container ::-webkit-scrollbar {\\n  width: 10px;\\n}\\n.container ::-webkit-scrollbar-track {\\n  background: #f1f1f1;\\n}\\n.container ::-webkit-scrollbar-thumb {\\n  background: #888;\\n}\\n.container ::-webkit-scrollbar-thumb:hover {\\n  background: #555;\\n}\\n.container .logo {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: 0 5px 5px -2px black, 0 10px 5px -2px black;\\n  height: 20%;\\n}\\n.container .logo .img1 {\\n  width: 60%;\\n  height: 60%;\\n}\\n.container .logo .img2 {\\n  height: 55%;\\n}\\n.container .containerInstruction {\\n  width: 100%;\\n  height: 80%;\\n  overflow: scroll;\\n  overflow-x: hidden;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  animation: entryEffect 0.3s linear;\\n}\\n.container .containerInstruction .movement1 {\\n  margin-top: 50px;\\n  width: 90%;\\n  height: 300px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container .containerInstruction .movement1 .title {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 20px;\\n}\\n.container .containerInstruction .movement1 .title h1 {\\n  color: aquamarine;\\n  -webkit-text-stroke: 1px magenta;\\n}\\n.container .containerInstruction .movement1 .title img {\\n  width: 4%;\\n  height: 100%;\\n}\\n.container .containerInstruction .movement1 .describe {\\n  display: flex;\\n}\\n.container .containerInstruction .movement1 .describe img {\\n  height: 60%;\\n  width: 50%;\\n}\\n.container .containerInstruction .movement1 .describe p {\\n  font-size: 25px;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: brown;\\n  text-shadow: 3px 3px gainsboro;\\n}\\n.container .containerInstruction .drop {\\n  margin-top: 50px;\\n  width: 90%;\\n  height: 300px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container .containerInstruction .drop .title {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 20px;\\n}\\n.container .containerInstruction .drop .title h1 {\\n  color: gold;\\n  -webkit-text-stroke: 1px red;\\n}\\n.container .containerInstruction .drop .title img {\\n  width: 4%;\\n  height: 100%;\\n}\\n.container .containerInstruction .drop .describe {\\n  display: flex;\\n}\\n.container .containerInstruction .drop .describe .sprites {\\n  height: 100%;\\n  width: 50%;\\n}\\n.container .containerInstruction .drop .describe p {\\n  font-size: 25px;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: green;\\n  text-shadow: 3px 3px beige;\\n}\\n.container .containerInstruction .drop .describe span {\\n  font-size: 45px;\\n  font-family: \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Geneva, Verdana, sans-serif;\\n  color: red;\\n}\\n.container .containerInstruction .takeItem {\\n  margin-top: 50px;\\n  width: 90%;\\n  height: 300px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container .containerInstruction .takeItem .title {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 20px;\\n}\\n.container .containerInstruction .takeItem .title h1 {\\n  color: silver;\\n  -webkit-text-stroke: 1px red;\\n}\\n.container .containerInstruction .takeItem .title img {\\n  width: 4%;\\n  height: 100%;\\n}\\n.container .containerInstruction .takeItem .describe {\\n  display: flex;\\n}\\n.container .containerInstruction .takeItem .describe .sprites {\\n  height: 100%;\\n  width: 50%;\\n}\\n.container .containerInstruction .takeItem .describe p {\\n  font-size: 25px;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: seashell;\\n  text-shadow: 3px 3px grey;\\n}\\n.container .containerInstruction .takeItem .describe span {\\n  font-size: 45px;\\n  font-family: \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Geneva, Verdana, sans-serif;\\n  color: red;\\n}\\n.container .containerInstruction .useItem {\\n  margin-top: 50px;\\n  width: 90%;\\n  height: 300px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 10%;\\n}\\n.container .containerInstruction .useItem .title {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 20px;\\n}\\n.container .containerInstruction .useItem .title h1 {\\n  color: silver;\\n  -webkit-text-stroke: 1px red;\\n}\\n.container .containerInstruction .useItem .title img {\\n  width: 4%;\\n  height: 100%;\\n}\\n.container .containerInstruction .useItem .describe {\\n  display: flex;\\n}\\n.container .containerInstruction .useItem .describe .sprites {\\n  height: 100%;\\n  width: 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 100% 300%;\\n}\\n.container .containerInstruction .useItem .describe p {\\n  font-size: 25px;\\n  font-family: \\\"Trebuchet MS\\\", \\\"Lucida Sans Unicode\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans\\\", Arial, sans-serif;\\n  color: seashell;\\n  text-shadow: 3px 3px grey;\\n}\\n.container .containerInstruction .useItem .describe span {\\n  font-size: 45px;\\n  font-family: \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Geneva, Verdana, sans-serif;\\n  color: red;\\n}\\n\\n.primaryTable {\\n  font-family: monospace;\\n  padding-top: 3%;\\n  padding-bottom: 3%;\\n}\\n.primaryTable td, .primaryTable tr {\\n  border: 1px solid white;\\n  border-collapse: collapse;\\n}\\n.primaryTable .thMovement {\\n  border: 1px solid white;\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: pink;\\n}\\n.primaryTable .thMovement img {\\n  width: 20%;\\n}\\n.primaryTable .tdMovement {\\n  width: 50%;\\n  height: 40px;\\n  color: darkblue;\\n  text-align: center;\\n  background-color: pink;\\n}\\n.primaryTable .tdMovement span {\\n  font-size: 15px;\\n  color: green;\\n  -webkit-text-stroke: 1px red;\\n}\\n.primaryTable .tdMovement .secondTable {\\n  width: 100%;\\n  height: 100%;\\n}\\n.primaryTable .tdMovement .secondTable table {\\n  width: 100%;\\n  border-collapse: collapse;\\n  height: 100%;\\n}\\n.primaryTable .tdMovement .secondTable th {\\n  border: 1px solid white;\\n  height: 33.3%;\\n  color: gray;\\n  -webkit-text-stroke: 0.3px brown;\\n}\\n.primaryTable .tdMovement .secondTable td {\\n  border: 1px solid white;\\n  height: 33.3%;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: pink;\\n  -webkit-text-stroke: 1px darkblue;\\n}\\n.primaryTable .thAttack {\\n  border-right: 1px solid white;\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: skyblue;\\n}\\n.primaryTable .thAttack img {\\n  width: 40%;\\n}\\n.primaryTable .tdAttack {\\n  border-right: 1px solid white;\\n  width: 50%;\\n  height: 40px;\\n  text-align: center;\\n  background-color: skyblue;\\n  color: darkgreen;\\n  font-weight: 18px;\\n  padding: 1px;\\n  -webkit-text-stroke: 0.4px red;\\n}\\n.primaryTable .tdAttack .secondTable {\\n  width: 100%;\\n  height: 100%;\\n}\\n.primaryTable .tdAttack .secondTable table {\\n  width: 100%;\\n  border-collapse: collapse;\\n  height: 100%;\\n}\\n.primaryTable .tdAttack .secondTable th {\\n  border: 1px solid white;\\n  height: 33.3%;\\n  color: gray;\\n  -webkit-text-stroke: 0.3px brown;\\n}\\n.primaryTable .tdAttack .secondTable td {\\n  border: 1px solid white;\\n  height: 33.3%;\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: pink;\\n  -webkit-text-stroke: 1px darkblue;\\n}\\n.primaryTable .thDrop {\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: plum;\\n}\\n.primaryTable .thDrop img {\\n  width: 40%;\\n}\\n.primaryTable .tdDrop {\\n  width: 50%;\\n  height: 40px;\\n  text-align: center;\\n  background-color: plum;\\n  color: black;\\n  font-weight: 18px;\\n  padding: 1px;\\n  -webkit-text-stroke: 0.1px gold;\\n}\\n.primaryTable .tdDrop span {\\n  font-size: 30px;\\n  font-weight: bold;\\n  color: red;\\n  -webkit-text-stroke: 1px blue;\\n  text-shadow: 1px 1px black;\\n}\\n.primaryTable .tdDrop .secondTable {\\n  width: 100%;\\n  height: 100%;\\n}\\n.primaryTable .tdDrop .secondTable table {\\n  width: 100%;\\n  border-collapse: collapse;\\n  border: 1px solid white;\\n  height: 100%;\\n}\\n.primaryTable .tdDrop .secondTable th {\\n  border: 1px solid white;\\n  height: 33.3%;\\n  color: slategray;\\n  -webkit-text-stroke: 0.3px brown;\\n  font-size: 25px;\\n}\\n.primaryTable .tdDrop .secondTable td {\\n  font-size: 30px;\\n  font-weight: bold;\\n  color: red;\\n  -webkit-text-stroke: 1px blue;\\n  text-shadow: 1px 1px black;\\n}\\n.primaryTable .thtakeItem {\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: #999900;\\n}\\n.primaryTable .thtakeItem img {\\n  width: 40%;\\n}\\n.primaryTable .tdtakeItem {\\n  width: 50%;\\n  height: 40px;\\n  text-align: center;\\n  background-color: #999900;\\n  color: black;\\n  font-size: 25px;\\n  padding: 1px;\\n  -webkit-text-stroke: 0.1px gold;\\n}\\n.primaryTable .thbuildWall {\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: salmon;\\n}\\n.primaryTable .thbuildWall img {\\n  width: 40%;\\n}\\n.primaryTable .tdbuildWall {\\n  width: 50%;\\n  height: 40px;\\n  text-align: center;\\n  background-color: salmon;\\n  color: black;\\n  font-size: 25px;\\n  padding: 1px;\\n  -webkit-text-stroke: 0.1px gold;\\n}\\n.primaryTable .tdbuildWall span {\\n  font-size: 22px;\\n  color: orange;\\n  -webkit-text-stroke: 0.5px darkgreen;\\n  text-shadow: 1px 1px black;\\n}\\n.primaryTable .thuseItem {\\n  height: 100px;\\n  width: 20%;\\n  font-size: 30px;\\n  background-color: skyblue;\\n}\\n.primaryTable .thuseItem img {\\n  width: 40%;\\n}\\n.primaryTable .thuseItem div {\\n  position: relative;\\n  width: 70%;\\n  height: 30%;\\n  border: 2px double black;\\n  left: 50%;\\n  font-size: 10px;\\n  text-align: center;\\n  transform: translate(-50%, 0);\\n  background-color: bisque;\\n}\\n.primaryTable .tduseItem {\\n  width: 50%;\\n  height: 40px;\\n  text-align: center;\\n  background-color: skyblue;\\n  color: black;\\n  font-size: 25px;\\n  padding: 1px;\\n  -webkit-text-stroke: 0.1px gold;\\n}\\n.primaryTable .tduseItem span {\\n  font-size: 22px;\\n  color: orange;\\n  -webkit-text-stroke: 0.5px darkgreen;\\n  text-shadow: 1px 1px black;\\n}\\n\\n@keyframes entryEffect {\\n  0% {\\n    transform: translateY(1500px);\\n  }\\n  100% {\\n    transform: translateY(0%);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gra/./src/instructionStyle.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://gra/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://gra/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gra/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/instructionStyle.scss":
/*!***********************************!*\
  !*** ./src/instructionStyle.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_instructionStyle_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./instructionStyle.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/instructionStyle.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_instructionStyle_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_instructionStyle_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_instructionStyle_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_instructionStyle_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gra/./src/instructionStyle.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gra/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/instruction.js":
/*!****************************!*\
  !*** ./src/instruction.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instructionStyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructionStyle.scss */ \"./src/instructionStyle.scss\");\n\r\nconsole.log(\"instruction\")\n\n//# sourceURL=webpack://gra/./src/instruction.js?");

/***/ }),

/***/ "./src/stylesImage/instruction/spaceButton.png":
/*!*****************************************************!*\
  !*** ./src/stylesImage/instruction/spaceButton.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e7772961adc34ac7c5f7.png\";\n\n//# sourceURL=webpack://gra/./src/stylesImage/instruction/spaceButton.png?");

/***/ }),

/***/ "./src/stylesImage/smok2.png":
/*!***********************************!*\
  !*** ./src/stylesImage/smok2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdb0e0e5e12f51081ff2.png\";\n\n//# sourceURL=webpack://gra/./src/stylesImage/smok2.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"instruction": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/instruction.js");
/******/ 	
/******/ })()
;