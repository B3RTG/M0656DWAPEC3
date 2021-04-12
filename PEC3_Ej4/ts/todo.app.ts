import TodoController from './todo.controller'
import TodoService from './todo.service'
import TodoView from './todo.views'

const app: TodoController = new TodoController(new TodoService(), new TodoView());

console.log(app);