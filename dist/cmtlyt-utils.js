/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cmtlyt"] = factory();
	else
		root["cmtlyt"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/ajax.js":
/*!********************!*\
  !*** ./js/ajax.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\nfunction axios({\r\n\tmethod,\r\n\turl,\r\n\tparams,\r\n\tdata\r\n}) {\r\n\treturn new Promise((resolve, reject) => {\r\n\t\tmethod = method.toUpperCase();\r\n\t\tconst xhr = new XMLHttpRequest();\r\n\t\tlet str = '';\r\n\t\tfor (let k in params) str += `${k}=${params[k]}&`;\r\n\t\tstr = str.slice(0, -1);\r\n\t\txhr.open(method, url + '?' + str);\r\n\t\tif (method == 'POST' || method == 'PUT' || method == 'DELETE') {\r\n\t\t\txhr.setRequestHeader('Content-type', 'application/json');\r\n\t\t\txhr.send(JSON.stringify(data));\r\n\t\t} else xhr.send();\r\n\t\txhr.responseType = 'json';\r\n\t\txhr.onreadystatechange = function() {\r\n\t\t\tif (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 300) resolve({\r\n\t\t\t\tstatus: xhr.status,\r\n\t\t\t\tmessage: xhr.statusText,\r\n\t\t\t\tbody: xhr.response\r\n\t\t\t});\r\n\t\t\telse reject(new Error('请求失败,失败的状态码为:' + xhr.status));\r\n\t\t}\r\n\t});\r\n}\r\naxios.get = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\tmethod: 'GET',\r\n\t\turl: url\r\n\t}));\r\n}\naxios.post = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\tmethod: 'POST',\r\n\t\turl: url\r\n\t}));\r\n}\naxios.put = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\tmethod: 'PUT',\r\n\t\turl: url\r\n\t}));\r\n}\naxios.delete = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\tmethod: 'DELETE',\r\n\t\turl: url\r\n\t}));\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/ajax.js?");

/***/ }),

/***/ "./js/array.js":
/*!*********************!*\
  !*** ./js/array.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some),\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3),\n/* harmony export */   \"concat\": () => (/* binding */ concat),\n/* harmony export */   \"slice\": () => (/* binding */ slice),\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2),\n/* harmony export */   \"chunk\": () => (/* binding */ chunk),\n/* harmony export */   \"difference\": () => (/* binding */ difference),\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll),\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/**\r\n * 遍历数组并返回一个新数组\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction map(arr, callback) {\r\n\tlet result = [];\r\n\tfor (let i = 0; i < arr.length; i++) result.push(callback(arr[i], i));\r\n\treturn result;\r\n}\r\n/**\r\n * 循环数组执行响应事件\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n * @param {*} initValue\r\n */\r\nfunction reduce(arr, callback, intiValue) {\r\n\tlet result = initValue;\r\n\tfor (let i = 0; i < arr.length; i++) result = callback(result, arr[i]);\r\n\treturn result;\r\n}\r\n/**\r\n * 返回满足条件的数组\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction filter(arr, callback) {\r\n\tlet result = [];\r\n\tfor (let i = 0; i < arr.length; i++) callback(arr[i], i) && result.push(arr[i]);\r\n\treturn result;\r\n}\r\n/**\r\n * 返回满足条件的元素\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction find(arr, callback) {\r\n\tfor (let i = 0; i < arr.length; i++)\r\n\t\tif (callback(arr[i], i)) return arr[i];\r\n\treturn undefined;\r\n}\r\n/**\r\n * 返回满足条件的元素的下标\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction findIndex(arr, callback) {\r\n\tfor (let i = 0; i < arr.length; i++)\r\n\t\tif (callback(arr[i], i)) return i;\r\n\treturn -1;\r\n}\r\n/**\r\n * 判断列表中是否每个元素都满足条件\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction every(arr, callback) {\r\n\tfor (let i = 0; i < arr.length; i++)\r\n\t\tif (!callback(arr[i], i)) return false;\r\n\treturn true;\r\n}\r\n/**\r\n * 判断列表中是否有满足条件的元素\r\n * @param {Array} arr\r\n * @param {Function} callback\r\n */\r\nfunction some(arr, callback) {\r\n\tfor (let i = 0; i < arr.length; i++)\r\n\t\tif (callback(arr[i], i)) return true;\r\n\treturn false;\r\n}\r\n/**\r\n * 数组去重\r\n * @param {Array} arr\r\n */\r\nfunction unique1(arr) {\r\n\tconst result = [];\r\n\tarr.forEach(item => {\r\n\t\tif (result.indexOf(item) == -1) result.push(item)\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 数组去重\r\n * @param {Array} arr\r\n */\r\nfunction unique2(arr) {\r\n\tconst result = [];\r\n\tconst obj = {};\r\n\tarr.forEach(item => {\r\n\t\tif (!obj[item]) {\r\n\t\t\tobj[item] = true;\r\n\t\t\tresult.push(item);\r\n\t\t}\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 数组去重\r\n * @param {Array} arr\r\n */\r\nfunction unique3(arr) {\r\n\treturn [...new Set(arr)];\r\n}\r\n/**\r\n * 数组合并\r\n * @param {Array} arr\r\n * @param {...any} args\r\n */\r\nfunction concat(arr, ...args) {\r\n\tconst result = [...arr];\r\n\targs.forEach(item => {\r\n\t\tif (Array.isArray(item)) result.push(...item);\r\n\t\telse result.push(item);\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 数组切片\r\n * @param {Array} arr\r\n * @param {Number} begin\r\n * @param {Number} end\r\n */\r\nfunction slice(arr, begin, end) {\r\n\tif (arr.length === 0 || begin >= arr.length) return [];\r\n\tbegin = begin || 0;\r\n\tend = end || arr.length;\r\n\tif (end < 1) end = arr.length - end;\r\n\telse if (end < begin) end = arr.length;\r\n\tconst result = [];\r\n\tfor (let i = begin; i < end; i++) result.push(arr[i]);\r\n\treturn result;\r\n}\r\n/**\r\n * 数组扁平化\r\n * @param {Array} arr\r\n */\r\nfunction flatten1(arr) {\r\n\tlet result = [];\r\n\tarr.forEach(item => {\r\n\t\tif (!Array.isArray(item)) result = result.concat(item);\r\n\t\telse result = result.concat(flatten1(item));\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 数组扁平化\r\n * @param {Array} arr\r\n */\r\nfunction flatten2(arr) {\r\n\tlet result = [...arr];\r\n\twhile (result.some(item => Array.isArray(item))) result = [].concat(...result);\r\n\treturn result;\r\n}\r\n/**\r\n * 数组分块\r\n * @param {Array} arr\r\n * @param {Number} size\r\n */\r\nfunction chunk(arr, size = 1) {\r\n\tif (arr.length === 0) return [];\r\n\tlet result = [];\r\n\tlet tmp = [];\r\n\tarr.forEach(item => {\r\n\t\tif (tmp.length == 0) result.push(tmp);\r\n\t\ttmp.push(item);\r\n\t\tif (tmp.length == size) tmp = [];\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 数组差集\r\n * @param {Array} arr1\r\n * @param {Array} arr2\r\n */\r\nfunction difference(arr1, arr2 = []) {\r\n\tif (arr1.length === 0) return [];\r\n\tif (arr2.length === 0) return arr1.slice();\r\n\treturn arr1.filter(item => !arr2.includes(item));\r\n}\r\n/**\r\n * 删除数组元素\r\n * 返回删除元素组成的数组\r\n * @param {Array} arr\r\n * @param {...any} args\r\n */\r\nfunction pull(arr, ...args) {\r\n\tconst result = [];\r\n\tfor (let i = 0; i < arr.length; i++) {\r\n\t\tif (args.includes(arr[i])) {\r\n\t\t\tresult.push(arr[i]);\r\n\t\t\tarr.splice(i--, 1);\r\n\t\t}\r\n\t}\r\n\treturn result;\r\n}\r\n/**\r\n * 删除数组元素\r\n * 返回删除元素组成的数组\r\n * @param {Array} arr\r\n * @param {Array} values\r\n */\r\nfunction pullAll(arr, values) {\r\n\treturn pull(arr, ...values);\r\n}\r\n/**\r\n * 返回前几个数组元素构成的子数组\r\n * @param {Array} arr\r\n * @param {Number} size\r\n */\r\nfunction drop(arr, size) {\r\n\treturn arr.filter((value, index) => index >= size);\r\n}\r\n/**\r\n * 返回后几个数组元素构成的子数组\r\n * @param {Array} arr\r\n * @param {Number} size\r\n */\r\nfunction dropRight(arr, size) {\r\n\treturn arr.filter((value, index) => index < arr.length - size);\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/array.js?");

/***/ }),

/***/ "./js/dom.js":
/*!*******************!*\
  !*** ./js/dom.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener),\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus),\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n/**\r\n * 为el对象绑定事件 \r\n */\r\nfunction addEventListener(el, type, fn, selector) {\r\n\tif (typeof el === 'string') el = document.querySelector(el);\r\n\tif (!selector) el.addEventListener(type, fn);\r\n\telse el.addEventListener(type, function(e) {\r\n\t\tconst target = e.target;\r\n\t\tif (target.matches(selector)) fn.call(target, e);\r\n\t});\r\n}\r\n/**\r\n * 事件总线\r\n */\r\nconst eventBus = {\r\n\tcallbacks: {}\r\n};\r\n// 绑定事件\r\neventBus.on = function(type, callback) {\r\n\tif (this.callbacks[type]) this.callbacks[type].push(callback);\r\n\telse this.callbacks[type] = [callback];\r\n}\r\n// 执行事件\r\neventBus.emit = function(type, data) {\r\n\tif (this.callbacks[type] && this.callbacks[type].length > 0)\r\n\t\tthis.callbacks[type].forEach(callback => callback(data));\r\n}\r\n// 取消绑定事件\r\neventBus.off = function(eventName) {\r\n\tif (eventName) delete this.callbacks[eventName];\r\n\telse this.callbacks = {};\r\n}\r\n/**\r\n * 消息订阅与发布 \r\n */\r\nconst PubSub = {\r\n\tid: 1,\r\n\tcallbacks: {}\r\n};\r\n// 订阅\r\nPubSub.subscribe = function(channel, callback) {\r\n\tlet token = 'token_' + this.id++;\r\n\tif (this.callbacks[channel]) this.callbacks[channel][token] = callback;\r\n\telse this.callbacks[channel] = {\r\n\t\t[token]: callback\r\n\t};\r\n}\r\n// 发布\r\nPubSub.publish = function(channel, data) {\r\n\tif (this.callbacks[channel])\r\n\t\tObject.values(this.callbacks[channel]).forEach(callback => callback(data));\r\n}\r\n// 取消订阅\r\nPubSub.unsubscribe = function(flag) {\r\n\tif (!flag) this.callbacks = {};\r\n\telse if (typeof flag == 'string') {\r\n\t\tif (flag.indexOf('token_') == 0) {\r\n\t\t\tlet callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag));\r\n\t\t\tif (callbackObj) delete callbackObj[flag];\r\n\t\t} else delete this.callbacks[flag];\r\n\t}\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/dom.js?");

/***/ }),

/***/ "./js/function.js":
/*!************************!*\
  !*** ./js/function.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call),\n/* harmony export */   \"apply\": () => (/* binding */ apply),\n/* harmony export */   \"bind\": () => (/* binding */ bind),\n/* harmony export */   \"throttle\": () => (/* binding */ throttle),\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/**\r\n * 用指定的this调用函数\r\n * @param {Function} Fn\r\n * @param {Object} obj\r\n * @param {...any} args\r\n */\r\nfunction call(Fn, obj, ...args) {\r\n\tif (obj == undefined || obj == null) obj = globalThis;\r\n\tobj.temp = Fn;\r\n\tlet result = obj.temp(...args);\r\n\tdelete obj.temp;\r\n\treturn result;\r\n}\r\n/**\r\n * 用指定的this调用函数\r\n * @param {Function} Fn\r\n * @param {Object} obj\r\n * @param {Array} args\r\n */\r\nfunction apply(Fn, obj, args) {\r\n\tif (obj == undefined || obj == null) obj = globalThis;\r\n\tobj.temp = Fn;\r\n\tlet result = obj.temp(...args);\r\n\tdelete obj.temp;\r\n\treturn result;\r\n}\r\n/**\r\n * 创建指定this的函数当不调用\r\n * @param {Function} Fn\r\n * @param {Object} obj\r\n * @param {...any} args\r\n */\r\nfunction bind(Fn, obj, ...args) {\r\n\treturn (...args2) => call(Fn, obj, ...args, ...args2);\r\n}\r\n/**\r\n * 节流\r\n * @param {Function} callback\r\n * @param {Number} wait\r\n */\r\nfunction throttle(callback, wait) {\r\n\tlet start = 0;\r\n\treturn function(e) {\r\n\t\tlet now = Date.now();\r\n\t\tif (now - start >= wait) {\r\n\t\t\tcallback.call(this, e);\r\n\t\t\tstart = now;\r\n\t\t}\r\n\t}\r\n}\r\n/**\r\n * 防抖\r\n * @param {Function} callback\r\n * @param {Number} time\r\n */\r\nfunction debounce(callback, time) {\r\n\tlet timeId = null;\r\n\treturn function(e) {\r\n\t\ttimeId && clearTimeout(timeId);\r\n\t\ttimeId = setTimeout(() => {\r\n\t\t\tcallback.call(this, e);\r\n\t\t\ttimeId = null;\r\n\t\t}, time);\r\n\t}\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/function.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_0__.axios),\n/* harmony export */   \"reversString\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_1__.reversString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_1__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_1__.truncate),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.addEventListener),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.eventBus),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.PubSub),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_3__.call),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_3__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_3__.bind),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_3__.throttle),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.newInstance),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.myInstanceOf),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.mergeObject),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.deepClone4),\n/* harmony export */   \"deepClone5\": () => (/* reexport safe */ _object__WEBPACK_IMPORTED_MODULE_4__.deepClone5),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.unique3),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.slice),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.flatten2),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.chunk),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.difference),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.pullAll),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array__WEBPACK_IMPORTED_MODULE_5__.dropRight)\n/* harmony export */ });\n/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ \"./js/ajax.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ \"./js/string.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./js/dom.js\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function */ \"./js/function.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ \"./js/object.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array */ \"./js/array.js\");\n\r\n\r\n\r\n\r\n\n\n\n//# sourceURL=webpack://cmtlyt/./js/index.js?");

/***/ }),

/***/ "./js/object.js":
/*!**********************!*\
  !*** ./js/object.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance),\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf),\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject),\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2),\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4),\n/* harmony export */   \"deepClone5\": () => (/* binding */ deepClone5)\n/* harmony export */ });\n/**\r\n * 创建实例\r\n * @param {Function} Fn\r\n * @param {...any} args\r\n */\r\nfunction newInstance(Fn, ...args) {\r\n\tconst obj = {};\r\n\tconst result = Fn.call(obj, ...args);\r\n\tobj.__proto__ = Fn.prototype;\r\n\treturn result instanceof Object ? result : obj;\r\n}\r\n/**\r\n * 判断原型\r\n * @param {Object} obj\r\n * @param {object} Fn\r\n */\r\nfunction myInstanceOf(obj, Fn) {\r\n\tlet prototype = Fn.prototype;\r\n\tlet proto = obj.__proto__;\r\n\twhile (proto) {\r\n\t\tif (prototype == proto) return true;\r\n\t\tproto = proto.__proto__;\r\n\t}\r\n\treturn false;\r\n}\r\n/**\r\n * 合并对象\r\n * @param {...Object} objs\r\n */\r\nfunction mergeObject(...objs) {\r\n\tlet result = {};\r\n\tobjs.forEach(obj => {\r\n\t\tObject.keys(obj).forEach(key => {\r\n\t\t\tif (result.hasOwnProperty(key)) result[key] = [].concat(result[key], obj[key]);\r\n\t\t\telse result[key] = obj[key];\r\n\t\t});\r\n\t});\r\n\treturn result;\r\n}\r\n/**\r\n * 浅拷贝1\r\n * @param {*} target\r\n */\r\nfunction clone1(target) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tif (Array.isArray(target)) return [...target];\r\n\t\telse return {\r\n\t\t\t...target\r\n\t\t};\r\n\t} else return target;\r\n}\r\n/**\r\n * 浅拷贝2\r\n * @param {*} target\r\n */\r\nfunction clone2(target) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tconst result = Array.isArray(target) ? [] : {};\r\n\t\tfor (let key in target)\r\n\t\t\tif (target.hasOwnProperty(key)) result[key] = target[key];\r\n\t\treturn result;\r\n\t} else return target;\r\n}\r\n/**\r\n * 深拷贝1\r\n * 不能克隆方法\r\n * 不能克隆循环引用的数据\r\n * @param {*} target\r\n */\r\nfunction deepClone1(target) {\r\n\tlet str = JSON.stringify(target);\r\n\treturn JSON.parse(str);\r\n}\r\n/**\r\n * 深拷贝2\r\n * 不能克隆循环引用的数据\r\n * @param {*} target\r\n */\r\nfunction deepClone2(target) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tconst result = Array.isArray(target) ? [] : {};\r\n\t\tfor (let key in target)\r\n\t\t\tif (target.hasOwnProperty(key)) result[key] = deepClone2(target[key]);\r\n\t\treturn result;\r\n\t} else return target;\r\n}\r\n/**\r\n * 深拷贝3\r\n * 不能克隆循环引用的数据\r\n * @param {*} target\r\n */\r\nfunction deepClone3(target) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tconst result = Array.isArray(target) ? [] : {};\r\n\t\tfor (let key in target)\r\n\t\t\tif (target.hasOwnProperty(key)) result[key] = deepClone2(target[key]);\r\n\t\treturn result;\r\n\t} else return target;\r\n}\r\n/**\r\n * 深拷贝4\r\n * @param {*} target\r\n */\r\nfunction deepClone4(target, map = new Map()) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tlet cache = map.get(target);\r\n\t\tif (cache) return cache;\r\n\t\tconst result = Array.isArray(target) ? [] : {};\r\n\t\tmap.set(target, result);\r\n\t\tfor (let key in target)\r\n\t\t\tif (target.hasOwnProperty(key)) result[key] = deepClone2(target[key], map);\r\n\t\treturn result;\r\n\t} else return target;\r\n}\r\n/**\r\n * 深拷贝5\r\n * @param {*} target\r\n */\r\nfunction deepClone5(target, map = new Map()) {\r\n\tif (typeof target == 'object' && target != null) {\r\n\t\tlet cache = map.get(target);\r\n\t\tif (cache) return cache;\r\n\t\tlet isArray = Array.isArray(target);\r\n\t\tconst result = isArray ? [] : {};\r\n\t\tmap.set(target, result);\r\n\t\tif (isArray) target.forEach((item, index) => result[index] = deepClone5(item, map));\r\n\t\telse Object.keys(target).forEach(key => result[key] = deepClone5(target[key], map));\r\n\t\treturn result;\r\n\t} else return target;\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/object.js?");

/***/ }),

/***/ "./js/string.js":
/*!**********************!*\
  !*** ./js/string.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reversString\": () => (/* binding */ reversString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n/**\r\n * 字符串倒序\r\n * @param {String} str\r\n */\r\nfunction reversString(str) {\r\n\treturn [...str].reverse().join('');\r\n}\r\n/**\r\n * 字符串是否回文\r\n * @param {String} str\r\n */\r\nfunction palindrome(str) {\r\n\treturn reversString(str) == str;\r\n}\r\n/**\r\n * 截取字符串\r\n * @param {String} str\r\n * @param {Number} num\r\n */\r\nfunction truncate(str, num) {\r\n\treturn str.slice(0, size) + '...';\r\n}\n\n\n//# sourceURL=webpack://cmtlyt/./js/string.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});