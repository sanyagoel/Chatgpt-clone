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

eval("//require('dotenv').config();\r\n\r\nasync function fetchRes(){\r\n    const message = document.getElementById('question').value;\r\n    const question = document.getElementById('userques');\r\n    const answer = document.getElementById('answer');\r\n    console.log(message);\r\n    question.innerHTML += `${message}`\r\n    const url = `https://chat-gpt-3-5-turbo2.p.rapidapi.com/?question=${message}`;\r\n    const options = {\r\n      method: 'GET',\r\n      headers: {\r\n        'x-rapidapi-key': \"af31327e2amsh2819ab3673e35a7p1e40b2jsneba1b2d99dd1\"  ,\r\n        'x-rapidapi-host': \"chat-gpt-3-5-turbo2.p.rapidapi.com\"\r\n      }\r\n    };\r\n    \r\n    try {\r\n        const response = await fetch(url, options);\r\n        const result = await response.json();\r\n        answer.innerHTML += `${result.answer} \\n`\r\n        console.log(result.answer);\r\n    } catch (error) {\r\n        console.error(error);\r\n    }\r\n}\r\n\r\nwindow.fetchRes = fetchRes;\r\n\r\n\n\n//# sourceURL=webpack://chatgpt-clone/./public/admin.js?");

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