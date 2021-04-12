import Todo from './todo.model'

export interface IBindTodoListChanged {
    (todos: Todo[]): void;
}
    
// creo que no era necesario, pero lo he realizado para practicar,
// suponiendo que en un futuro podamos tener otro servicio diferente para 
// el origen de datos
export interface IService {
    getTodos(): Todo[];
    setBindTodoListChanged(callback: IBindTodoListChanged);
    addTodo(text: String);
    editTodo(id: String, updatedText: String);
    deleteTodo(_id: String);
    toggleTodo(_id: String);
}


export interface IBindAddTodo {
    (todoText: String): void;
}
export interface IBindDeleteTodo {
    (todoText: String): void;
}
export interface IBindEditTodo {
    (id: String, todoText: String): void;
}
export interface IBindToggleTodo {
    (id: String): void;
}

export interface ITodoView {
    displayTodos(todos: Todo[]): void;
    bindAddTodo(handler: IBindAddTodo);
    bindDeleteTodo(handler: IBindDeleteTodo)
    bindEditTodo(handler: IBindEditTodo)
    bindToggleTodo(handler: IBindToggleTodo)
}