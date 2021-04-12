import { IService, ITodoView, IBindTodoListChanged, IBindEditTodo, IBindDeleteTodo, IBindToggleTodo, IBindAddTodo } from './todo.interfaces';
import TodoService from './todo.service'
import TodoView from './todo.views'

export default class TodoController {
    private service: IService;
    private view: ITodoView;

    constructor(service: IService, view: ITodoView) {
        this.service = service;
        this.view = view;
    
        // Explicit this binding
        this.service.setBindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
    
        // Display initial todos
        this.onTodoListChanged(this.service.getTodos());
      }
    
      onTodoListChanged: IBindTodoListChanged = todos => {
        this.view.displayTodos(todos);
      };
    
      handleAddTodo: IBindAddTodo = todoText => {
        this.service.addTodo(todoText);
      };
    
      handleEditTodo: IBindEditTodo = (id, todoText) => {
        this.service.editTodo(id, todoText);
      };
    
      handleDeleteTodo: IBindDeleteTodo = id => {
        this.service.deleteTodo(id);
      };
    
      handleToggleTodo: IBindToggleTodo = id => {
        this.service.toggleTodo(id);
      };
}
  