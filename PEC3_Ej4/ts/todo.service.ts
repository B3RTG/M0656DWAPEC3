import Todo from './todo.model'
import { IBindTodoListChanged, IService } from './todo.interfaces'

export default class TodoService implements IService {

  private todos: Todo[];
  private bindTodoListChanged: IBindTodoListChanged;

  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      todo => new Todo(todo)
    );
  }

  // PUBLICOS
  getTodos() : Todo[]
  {
    return this.todos;  
  }
  
  /**
   * setter for function on todo list changed
   * @param callback of type IBindTodoListChanged
   */
  setBindTodoListChanged(callback: IBindTodoListChanged) {
    this.bindTodoListChanged = callback;
  }

  addTodo(text: String) {
    this.todos.push(new Todo({ text }));
    this.commit(this.todos);
  }

  editTodo(id: String, updatedText: String) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this.commit(this.todos);
  }

  deleteTodo(_id: String) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this.commit(this.todos);
  }

  toggleTodo(_id: String) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this.commit(this.todos);
  }

  //PRIVADOS
  private commit(todos: Todo[]) {
    this.bindTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

}

