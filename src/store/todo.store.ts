import { makeAutoObservable } from 'mobx';
import { ITodos } from '@src/interfaces';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  todos: ITodos[] = [];
  renderTodos: ITodos[] = [];
  title = '';
  query = '';
  sortType = 'all';

  setTitle = (value: string) => {
    this.title = value;
  };

  setQuery = (value: string) => {
    this.query = value;
  };

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

  statusFilter = () => {
    if (this.sortType === 'active') {
      this.renderTodos = this.todos.filter((todo) => !todo.status);
    } else if (this.sortType === 'done') {
      this.renderTodos = this.todos.filter((todo) => todo.status);
    } else {
      this.renderTodos = this.todos;
    }
  };

  searchFilter = (value: string) => {
    const reg = new RegExp(value, 'gi');

    this.renderTodos = this.renderTodos.filter((todo) => todo.title.match(reg));
  };

  todoFilter = (value: string) => {
    this.statusFilter();
    this.searchFilter(value);
  };

  setTodos = (value: ITodos) => {
    this.todos.unshift(value);
    this.renderTodos = this.todos;
    this.title = '';
  };

  get done() {
    return this.todos.filter((todo) => todo.status).length;
  }

  get active() {
    return this.todos.filter((todo) => !todo.status).length;
  }
}

const TodoStore = new Store();
export { TodoStore };
