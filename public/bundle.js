/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/admin.js":
/*!*************************!*\
  !*** ./public/admin.js ***!
  \*************************/
/***/ (() => {

eval("// require('dotenv').config();\r\n\r\n\r\nasync function fetchRes(){\r\n    let message = document.getElementById('question').value;\r\n    document.getElementById('question').value = '';\r\n    let container = document.getElementById('container');\r\n   \r\n    console.log(message);\r\n    container.innerHTML += `<li class=\"userques\">${message}</li>`\r\n    const url = 'https://infinite-gpt.p.rapidapi.com/infinite-gpt';\r\nconst options = {\r\n  method: 'POST',\r\n  headers: {\r\n    'x-rapidapi-key': \"af31327e2amsh2819ab3673e35a7p1e40b2jsneba1b2d99dd1\",\r\n    'x-rapidapi-host': \"infinite-gpt.p.rapidapi.com\",\r\n    'Content-Type': 'application/json'\r\n  },\r\n  body: JSON.stringify({\r\n    query: `${message}`,\r\n    sysMsg: 'You are a friendly Chatbot.'\r\n  })\r\n};\r\n\r\ntry {\r\n    const response = await fetch(url, options);\r\n    const result = await response.json();\r\n    console.log(result);\r\n\r\n    container.innerHTML += `<li class=\"answer\">${result.msg} </li>`\r\n    container.scrollTo(0, container.scrollHeight);\r\n\r\n} catch (error) {\r\n\tconsole.error(error);\r\n}    \r\n\r\n}\r\n\r\nwindow.fetchRes = fetchRes;\r\n\r\n\n\n//# sourceURL=webpack://chatgpt-clone/./public/admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/admin.js"]();
/******/ 	
/******/ })()
;