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

/***/ "./ts/todo.app.ts":
/*!************************!*\
  !*** ./ts/todo.app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.controller */ \"./ts/todo.controller.ts\");\n/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ \"./ts/todo.service.ts\");\n/* harmony import */ var _todo_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.views */ \"./ts/todo.views.ts\");\n\r\n\r\n\r\nconst app = new _todo_controller__WEBPACK_IMPORTED_MODULE_0__.default(new _todo_service__WEBPACK_IMPORTED_MODULE_1__.default(), new _todo_views__WEBPACK_IMPORTED_MODULE_2__.default());\r\nconsole.log(app);\r\n\n\n//# sourceURL=webpack://PEC3_Ej4/./ts/todo.app.ts?");

/***/ }),

/***/ "./ts/todo.controller.ts":
/*!*******************************!*\
  !*** ./ts/todo.controller.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoController)\n/* harmony export */ });\nclass TodoController {\r\n    constructor(service, view) {\r\n        this.onTodoListChanged = todos => {\r\n            this.view.displayTodos(todos);\r\n        };\r\n        this.handleAddTodo = todoText => {\r\n            this.service.addTodo(todoText);\r\n        };\r\n        this.handleEditTodo = (id, todoText) => {\r\n            this.service.editTodo(id, todoText);\r\n        };\r\n        this.handleDeleteTodo = id => {\r\n            this.service.deleteTodo(id);\r\n        };\r\n        this.handleToggleTodo = id => {\r\n            this.service.toggleTodo(id);\r\n        };\r\n        this.service = service;\r\n        this.view = view;\r\n        this.service.setBindTodoListChanged(this.onTodoListChanged);\r\n        this.view.bindAddTodo(this.handleAddTodo);\r\n        this.view.bindEditTodo(this.handleEditTodo);\r\n        this.view.bindDeleteTodo(this.handleDeleteTodo);\r\n        this.view.bindToggleTodo(this.handleToggleTodo);\r\n        this.onTodoListChanged(this.service.getTodos());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://PEC3_Ej4/./ts/todo.controller.ts?");

/***/ }),

/***/ "./ts/todo.model.ts":
/*!**************************!*\
  !*** ./ts/todo.model.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n    constructor({ text, complete = false }) {\r\n        this.id = this.uuidv4();\r\n        this.text = text;\r\n        this.complete = complete;\r\n    }\r\n    uuidv4() {\r\n        return ([1e7, 1e3, 4e3, 8e3, 1e11].join('-')).replace(/[018]/g, c => (parseInt(c, 2) ^\r\n            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c, 2) / 4)))).toString(16));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://PEC3_Ej4/./ts/todo.model.ts?");

/***/ }),

/***/ "./ts/todo.service.ts":
/*!****************************!*\
  !*** ./ts/todo.service.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoService)\n/* harmony export */ });\n/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.model */ \"./ts/todo.model.ts\");\n\r\nclass TodoService {\r\n    constructor() {\r\n        this.todos = (JSON.parse(localStorage.getItem(\"todos\")) || []).map(todo => new _todo_model__WEBPACK_IMPORTED_MODULE_0__.default(todo));\r\n    }\r\n    getTodos() {\r\n        return this.todos;\r\n    }\r\n    setBindTodoListChanged(callback) {\r\n        this.bindTodoListChanged = callback;\r\n    }\r\n    addTodo(text) {\r\n        this.todos.push(new _todo_model__WEBPACK_IMPORTED_MODULE_0__.default({ text }));\r\n        this.commit(this.todos);\r\n    }\r\n    editTodo(id, updatedText) {\r\n        this.todos = this.todos.map(todo => todo.id === id\r\n            ? new _todo_model__WEBPACK_IMPORTED_MODULE_0__.default(Object.assign(Object.assign({}, todo), { text: updatedText }))\r\n            : todo);\r\n        this.commit(this.todos);\r\n    }\r\n    deleteTodo(_id) {\r\n        this.todos = this.todos.filter(({ id }) => id !== _id);\r\n        this.commit(this.todos);\r\n    }\r\n    toggleTodo(_id) {\r\n        this.todos = this.todos.map(todo => todo.id === _id ? new _todo_model__WEBPACK_IMPORTED_MODULE_0__.default(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);\r\n        this.commit(this.todos);\r\n    }\r\n    commit(todos) {\r\n        this.bindTodoListChanged(todos);\r\n        localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://PEC3_Ej4/./ts/todo.service.ts?");

/***/ }),

/***/ "./ts/todo.views.ts":
/*!**************************!*\
  !*** ./ts/todo.views.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoView)\n/* harmony export */ });\nclass TodoView {\r\n    constructor() {\r\n        this.app = this.getElement(\"#root\");\r\n        this.form = this.createElement(\"form\");\r\n        this.input = this.createElement(\"input\");\r\n        this.input.type = \"text\";\r\n        this.input.placeholder = \"Add todo\";\r\n        this.input.name = \"todo\";\r\n        this.submitButton = this.createElement(\"button\");\r\n        this.submitButton.textContent = \"Submit\";\r\n        this.form.append(this.input, this.submitButton);\r\n        this.title = this.createElement(\"h1\");\r\n        this.title.textContent = \"Todos\";\r\n        this.todoList = this.createElement(\"ul\", \"todo-list\");\r\n        this.app.append(this.title, this.form, this.todoList);\r\n        this.temporaryTodoText = \"\";\r\n        this.initLocalListeners();\r\n    }\r\n    get todoText() {\r\n        return this.input.value;\r\n    }\r\n    createElement(tag, className) {\r\n        const element = document.createElement(tag);\r\n        if (className)\r\n            element.classList.add(className);\r\n        return element;\r\n    }\r\n    getElement(selector) {\r\n        const element = document.querySelector(selector);\r\n        return element;\r\n    }\r\n    resetInput() {\r\n        this.input.value = \"\";\r\n    }\r\n    initLocalListeners() {\r\n        this.todoList.addEventListener(\"input\", event => {\r\n            if (event.target.className === \"editable\") {\r\n                this.temporaryTodoText = event.target.innerText;\r\n            }\r\n        });\r\n    }\r\n    displayTodos(todos) {\r\n        while (this.todoList.firstChild) {\r\n            this.todoList.removeChild(this.todoList.firstChild);\r\n        }\r\n        if (todos.length === 0) {\r\n            const p = this.createElement(\"p\");\r\n            p.textContent = \"Nothing to do! Add a task?\";\r\n            this.todoList.append(p);\r\n        }\r\n        else {\r\n            todos.forEach(todo => {\r\n                const li = this.createElement(\"li\");\r\n                li.id = todo.id;\r\n                const checkbox = this.createElement(\"input\");\r\n                checkbox.type = \"checkbox\";\r\n                checkbox.checked = todo.complete;\r\n                const span = this.createElement(\"span\");\r\n                span.contentEditable = true;\r\n                span.classList.add(\"editable\");\r\n                if (todo.complete) {\r\n                    const strike = this.createElement(\"s\");\r\n                    strike.textContent = todo.text;\r\n                    span.append(strike);\r\n                }\r\n                else {\r\n                    span.textContent = todo.text;\r\n                }\r\n                const deleteButton = this.createElement(\"button\", \"delete\");\r\n                deleteButton.textContent = \"Delete\";\r\n                li.append(checkbox, span, deleteButton);\r\n                this.todoList.append(li);\r\n            });\r\n        }\r\n        console.log(todos);\r\n    }\r\n    bindAddTodo(handler) {\r\n        this.form.addEventListener(\"submit\", event => {\r\n            event.preventDefault();\r\n            if (this.todoText) {\r\n                handler(this.todoText);\r\n                this.resetInput();\r\n            }\r\n        });\r\n    }\r\n    bindDeleteTodo(handler) {\r\n        this.todoList.addEventListener(\"click\", event => {\r\n            if (event.target.className === \"delete\") {\r\n                const id = event.target.parentElement.id;\r\n                handler(id);\r\n            }\r\n        });\r\n    }\r\n    bindEditTodo(handler) {\r\n        this.todoList.addEventListener(\"focusout\", event => {\r\n            if (this.temporaryTodoText) {\r\n                const id = event.target.parentElement.id;\r\n                handler(id, this.temporaryTodoText);\r\n                this.temporaryTodoText = \"\";\r\n            }\r\n        });\r\n    }\r\n    bindToggleTodo(handler) {\r\n        this.todoList.addEventListener(\"change\", event => {\r\n            if (event.target.type === \"checkbox\") {\r\n                const id = event.target.parentElement.id;\r\n                handler(id);\r\n            }\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://PEC3_Ej4/./ts/todo.views.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/todo.app.ts");
/******/ 	
/******/ })()
;