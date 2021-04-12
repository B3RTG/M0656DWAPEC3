define("todo.model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Todo {
        constructor({ text, complete = false }) {
            this.id = this.uuidv4();
            this.text = text;
            this.complete = complete;
        }
        uuidv4() {
            return ([1e7, 1e3, 4e3, 8e3, 1e11].join('-')).replace(/[018]/g, c => (parseInt(c, 2) ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c, 2) / 4)))).toString(16));
        }
    }
    exports.default = Todo;
});
define("todo.interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("todo.service", ["require", "exports", "todo.model"], function (require, exports, todo_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TodoService {
        constructor() {
            this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(todo => new todo_model_1.default(todo));
        }
        getTodos() {
            return this.todos;
        }
        setBindTodoListChanged(callback) {
            this.bindTodoListChanged = callback;
        }
        addTodo(text) {
            this.todos.push(new todo_model_1.default({ text }));
            this.commit(this.todos);
        }
        editTodo(id, updatedText) {
            this.todos = this.todos.map(todo => todo.id === id
                ? new todo_model_1.default(Object.assign(Object.assign({}, todo), { text: updatedText }))
                : todo);
            this.commit(this.todos);
        }
        deleteTodo(_id) {
            this.todos = this.todos.filter(({ id }) => id !== _id);
            this.commit(this.todos);
        }
        toggleTodo(_id) {
            this.todos = this.todos.map(todo => todo.id === _id ? new todo_model_1.default(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
            this.commit(this.todos);
        }
        commit(todos) {
            this.bindTodoListChanged(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
    exports.default = TodoService;
});
define("todo.views", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TodoView {
        constructor() {
            this.app = this.getElement("#root");
            this.form = this.createElement("form");
            this.input = this.createElement("input");
            this.input.type = "text";
            this.input.placeholder = "Add todo";
            this.input.name = "todo";
            this.submitButton = this.createElement("button");
            this.submitButton.textContent = "Submit";
            this.form.append(this.input, this.submitButton);
            this.title = this.createElement("h1");
            this.title.textContent = "Todos";
            this.todoList = this.createElement("ul", "todo-list");
            this.app.append(this.title, this.form, this.todoList);
            this.temporaryTodoText = "";
            this.initLocalListeners();
        }
        get todoText() {
            return this.input.value;
        }
        createElement(tag, className) {
            const element = document.createElement(tag);
            if (className)
                element.classList.add(className);
            return element;
        }
        getElement(selector) {
            const element = document.querySelector(selector);
            return element;
        }
        resetInput() {
            this.input.value = "";
        }
        initLocalListeners() {
            this.todoList.addEventListener("input", event => {
                if (event.target.className === "editable") {
                    this.temporaryTodoText = event.target.innerText;
                }
            });
        }
        displayTodos(todos) {
            while (this.todoList.firstChild) {
                this.todoList.removeChild(this.todoList.firstChild);
            }
            if (todos.length === 0) {
                const p = this.createElement("p");
                p.textContent = "Nothing to do! Add a task?";
                this.todoList.append(p);
            }
            else {
                todos.forEach(todo => {
                    const li = this.createElement("li");
                    li.id = todo.id;
                    const checkbox = this.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.checked = todo.complete;
                    const span = this.createElement("span");
                    span.contentEditable = true;
                    span.classList.add("editable");
                    if (todo.complete) {
                        const strike = this.createElement("s");
                        strike.textContent = todo.text;
                        span.append(strike);
                    }
                    else {
                        span.textContent = todo.text;
                    }
                    const deleteButton = this.createElement("button", "delete");
                    deleteButton.textContent = "Delete";
                    li.append(checkbox, span, deleteButton);
                    this.todoList.append(li);
                });
            }
            console.log(todos);
        }
        bindAddTodo(handler) {
            this.form.addEventListener("submit", event => {
                event.preventDefault();
                if (this.todoText) {
                    handler(this.todoText);
                    this.resetInput();
                }
            });
        }
        bindDeleteTodo(handler) {
            this.todoList.addEventListener("click", event => {
                if (event.target.className === "delete") {
                    const id = event.target.parentElement.id;
                    handler(id);
                }
            });
        }
        bindEditTodo(handler) {
            this.todoList.addEventListener("focusout", event => {
                if (this.temporaryTodoText) {
                    const id = event.target.parentElement.id;
                    handler(id, this.temporaryTodoText);
                    this.temporaryTodoText = "";
                }
            });
        }
        bindToggleTodo(handler) {
            this.todoList.addEventListener("change", event => {
                if (event.target.type === "checkbox") {
                    const id = event.target.parentElement.id;
                    handler(id);
                }
            });
        }
    }
    exports.default = TodoView;
});
define("todo.controller", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TodoController {
        constructor(service, view) {
            this.onTodoListChanged = todos => {
                this.view.displayTodos(todos);
            };
            this.handleAddTodo = todoText => {
                this.service.addTodo(todoText);
            };
            this.handleEditTodo = (id, todoText) => {
                this.service.editTodo(id, todoText);
            };
            this.handleDeleteTodo = id => {
                this.service.deleteTodo(id);
            };
            this.handleToggleTodo = id => {
                this.service.toggleTodo(id);
            };
            this.service = service;
            this.view = view;
            this.service.setBindTodoListChanged(this.onTodoListChanged);
            this.view.bindAddTodo(this.handleAddTodo);
            this.view.bindEditTodo(this.handleEditTodo);
            this.view.bindDeleteTodo(this.handleDeleteTodo);
            this.view.bindToggleTodo(this.handleToggleTodo);
            this.onTodoListChanged(this.service.getTodos());
        }
    }
    exports.default = TodoController;
});
define("todo.app", ["require", "exports", "todo.controller", "todo.service", "todo.views"], function (require, exports, todo_controller_1, todo_service_1, todo_views_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const app = new todo_controller_1.default(new todo_service_1.default(), new todo_views_1.default());
});
