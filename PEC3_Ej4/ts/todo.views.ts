import Todo from './todo.model'
import { IBindAddTodo, IBindDeleteTodo, IBindEditTodo, IBindToggleTodo, ITodoView } from './todo.interfaces'

export default class TodoView implements ITodoView {

    private app: HTMLDivElement;
    private form: HTMLFormElement;
    private input: HTMLInputElement;
    private submitButton: HTMLButtonElement;
    private title: HTMLHeadElement;
    private todoList: HTMLUListElement;
    private temporaryTodoText: String;

    constructor() {
        this.app = this.getElement("#root") as HTMLDivElement;
        
        this.form = this.createElement("form") as HTMLFormElement;
        this.input = this.createElement("input") as HTMLInputElement;
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button") as HTMLButtonElement;
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";

        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this.temporaryTodoText = "";
        this.initLocalListeners();
    }


    /************************************
     *          PRIVADOS 
     * **********************************/ 
    get todoText() {
        return this.input.value;
    }
      
    private createElement(tag: any, className?: String) : any {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    private getElement(selector: any) : HTMLElement {
        const element = document.querySelector(selector);
        return element;
    }

    private resetInput(): void {
        this.input.value = "";
    }

    private initLocalListeners(): void {
        this.todoList.addEventListener("input", event => {
          if ((event.target as HTMLElement).className === "editable") {
            this.temporaryTodoText = (event.target as HTMLElement).innerText;
          }
        });
    }

    /************************************
     *          PUBLICOS 
     * **********************************/ 
    displayTodos(todos: Todo[]): void {
        // Delete all nodes
        while (this.todoList.firstChild) {
          this.todoList.removeChild(this.todoList.firstChild);
        }
    
        // Show default message
        if (todos.length === 0) {
          const p = this.createElement("p");
          p.textContent = "Nothing to do! Add a task?";
          this.todoList.append(p);
        } else {
          // Create nodes
          todos.forEach(todo => {
            const li: any = this.createElement("li");
            li.id = todo.id;
    
            const checkbox :HTMLInputElement = this.createElement("input") as HTMLInputElement;
            checkbox.type = "checkbox";
            checkbox.checked = todo.complete;
    
            const span = this.createElement("span");
            span.contentEditable = true;
            span.classList.add("editable");
    
            if (todo.complete) {
              const strike = this.createElement("s");
              strike.textContent = todo.text;
              span.append(strike);
            } else {
              span.textContent = todo.text;
            }
    
            const deleteButton = this.createElement("button", "delete") as HTMLButtonElement;
            deleteButton.textContent = "Delete";
            li.append(checkbox, span, deleteButton);
    
            // Append nodes
            this.todoList.append(li);
          });
        }
    
        // Debugging
        console.log(todos);
    }

    bindAddTodo(handler: IBindAddTodo) {
        this.form.addEventListener("submit", event => {
          event.preventDefault();
    
          if (this.todoText) {
            handler(this.todoText);
            this.resetInput();
          }
        });
    }
    
    bindDeleteTodo(handler: IBindDeleteTodo) {
        this.todoList.addEventListener("click", event => {
          if ((event.target as HTMLElement).className === "delete") {
            const id = (event.target as HTMLElement).parentElement.id;
    
            handler(id);
          }
        });
    }
    
    bindEditTodo(handler: IBindEditTodo) {
        this.todoList.addEventListener("focusout", event => {
          if (this.temporaryTodoText) {
            const id = (event.target as HTMLElement).parentElement.id;
    
            handler(id, this.temporaryTodoText);
            this.temporaryTodoText = "";
          }
        });
    }
    
    bindToggleTodo(handler: IBindToggleTodo) {
        this.todoList.addEventListener("change", event => {
          if ((event.target as HTMLInputElement).type === "checkbox") {
            const id = (event.target as HTMLElement).parentElement.id;
                
            handler(id);
          }
        });
    }
}