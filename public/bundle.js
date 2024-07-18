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

eval("// require('dotenv').config();\r\n\r\n\r\nasync function addquestion(button){\r\n  let message = button.querySelector('p').textContent;\r\n  fetchRes(message);\r\n}\r\n\r\n\r\nasync function copyClipboard(button){\r\n  let answer = button.closest('.answer').querySelector('p').textContent;\r\n  navigator.clipboard.writeText(answer);\r\n}\r\n\r\nasync function toSpeech(button){\r\n  const speechSynth = window.speechSynthesis;\r\n  let answer = button.closest('.answer').querySelector('p').textContent;\r\n  console.log(answer);\r\n\r\n  if(!speechSynth.speaking && answer.trim().length){\r\n    const newUtter = new SpeechSynthesisUtterance(answer);\r\n    speechSynth.speak(newUtter); \r\n\r\n    \r\n  button.addEventListener('click',matres);\r\n\r\n  function matres(){\r\n      speechSynth.cancel();\r\n      button.removeEventListener('click',matres); // Remove the event listener after canceling speech\r\n    \r\n  }\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\nasync function fetchRes(message){\r\n  // if(message===undefined){\r\n  //   message = document.getElementById('question').value;\r\n  // }\r\n  let homeOptions = document.getElementById('homeOptions');\r\n    homeOptions.innerHTML = '';\r\n  let remove = document.getElementById('removed');\r\n  if(remove){\r\n    remove.remove();\r\n\r\n  }\r\n    document.getElementById('question').value = '';\r\n    let container = document.getElementById('container');\r\n    console.log(message);\r\n    container.innerHTML += `<li class=\"userques\">${message}</li>`\r\n    container.innerHTML += `<li>                </li>`\r\n\r\n\r\n    const url = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';\r\n\r\nconst options = {\r\n  method: 'POST',\r\n  headers: {\r\n    'x-rapidapi-key': \"af31327e2amsh2819ab3673e35a7p1e40b2jsneba1b2d99dd1\",\r\n    'x-rapidapi-host': \"cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com\",\r\n    'Content-Type': 'application/json'\r\n  },\r\n  body: JSON.stringify({\r\n    messages: [\r\n      {\r\n        role: 'user',\r\n        content: `${message}`\r\n      }\r\n    ],\r\n    model: 'gpt-4-turbo-2024-04-09',\r\n    max_tokens: 100,\r\n    temperature: 0.9\r\n  }\r\n)\r\n\r\n};\r\n\r\ntry {\r\n    const response = await fetch(url, options);\r\n    const result = await response.json();\r\n    console.log(result.choices[0].message.content);\r\n\r\n    container.innerHTML += `<li class=\"answer\">\r\n    <div class=\"logocontainer\">\r\n        <img class=\"logochatgpt\" src=\"../images/logo.png\"/>\r\n        <p>${result.choices[0].message.content}</p>\r\n    </div>\r\n    <button class=\"answerbuttons\" onClick=copyClipboard(this)><img src=\"../images/logocopy2.png\"/></button>\r\n    <button class=\"answerbuttons2\" onClick=toSpeech(this)><img src=\"../images/file.png\"/></button>\r\n</li>\r\n`\r\n    container.scrollTo(0, container.scrollHeight);\r\n\r\n} catch (error) {\r\n\tconsole.error(error);\r\n}    \r\n\r\n}\r\n\r\nwindow.fetchRes = fetchRes;\r\nwindow.copyClipboard = copyClipboard;\r\nwindow.toSpeech = toSpeech;\r\nwindow.addquestion = addquestion;\n\n//# sourceURL=webpack://chatgpt-clone/./public/admin.js?");

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