import { makeAutoObservable } from 'mobx';
import { ITodos } from '@src/interfaces';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  todos: ITodos[] = [];

  title = '';

  setTitle = (value: string) => {
    this.title = value;
  };

  setTodos = (value: ITodos) => {
    this.todos.push(value);
  };
}

const TodoStore = new Store();
export { TodoStore };
