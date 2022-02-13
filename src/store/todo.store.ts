import { makeAutoObservable } from 'mobx';
import { ITodos } from '@src/interfaces';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  todos: ITodos[] = [];

  renderTodos: ITodos[] = [];

  title = '';

  setTitle = (value: string) => {
    this.title = value;
  };

  query = '';

  setQuery = (value: string) => {
    this.query = value;
  };

  sortType = 'all';

  setSortType = (value: string) => {
    this.sortType = value;
  };

  deleteTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.renderTodos = this.todos;
  };

  markTodo = (id: string) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, mark: !todo.mark } : todo,
    );
    this.renderTodos = this.todos;
  };

  setStatus = (id: string) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo,
    );
    this.renderTodos = this.todos;
  };

  searchRequest = (value: string) => {
    const reg = new RegExp(value, 'gi');

    if (this.sortType === 'active') {
      this.renderTodos = this.todos
        .filter((todo) => !todo.status)
        .filter((todo) => todo.title.match(reg));
    } else if (this.sortType === 'done') {
      this.renderTodos = this.todos
        .filter((todo) => todo.status)
        .filter((todo) => todo.title.match(reg));
    } else {
      this.renderTodos = this.todos.filter((todo) => todo.title.match(reg));
    }
  };

  setTodos = (value: ITodos) => {
    this.todos.unshift(value);
    this.renderTodos = this.todos;
    this.title = '';
  };
}

const TodoStore = new Store();
export { TodoStore };
