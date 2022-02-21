import { makeAutoObservable } from 'mobx';
import { ITodos, IState } from '@src/interfaces';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '@src/module';
import { delay } from '@utils/delay.utils';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  isLoading = false;
  requestError = null;
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

  deleteTodo = async (id: string) => {
    try {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.renderTodos = this.todos;
      await deleteTodo(id);
    } catch (e: any) {
      this.requestError = e;
    }
  };

  markTodo = async (id: string) => {
    let currentMark;
    try {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          currentMark = !todo.mark;
          return { ...todo, mark: currentMark };
        }
        return todo;
      });

      this.renderTodos = this.todos;
      await updateTodo({ _id: id, mark: currentMark });
      this.todoFilter(this.query);
    } catch (e: any) {
      this.requestError = e;
    }
  };

  setStatus = async (id: string) => {
    let currentStatus;
    try {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          currentStatus = !todo.status;
          return { ...todo, status: currentStatus };
        }
        return todo;
      });

      this.renderTodos = this.todos;
      this.todoFilter(this.query);
      await updateTodo({ _id: id, status: currentStatus });
    } catch (e: any) {
      this.requestError = e;
    }
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

  setTodos = async (value: IState) => {
    try {
      const result = await createTodo(value);
      if (!result) return console.log('Server error');

      if (result.status === 200) {
        const { data } = result;
        this.todos.push({ ...data, id: data._id });
        this.renderTodos = this.todos;
        this.todoFilter(this.query);
      }
      this.title = '';
    } catch (e: any) {
      this.requestError = e;
    }
  };

  setTodosTest = async (value: ITodos) => {
    this.todos.push(value);
    this.renderTodos = this.todos;
  };

  getTodos = async () => {
    try {
      this.isLoading = true;

      const result = await getAllTodos();
      await delay(1000);

      if (!result) return console.log('Server error');

      if (result.status === 200) {
        this.todos = result.data.map((todo: ITodos) => ({
          ...todo,
          id: todo._id,
        }));
        this.renderTodos = this.todos;
      }
    } catch (e: any) {
      this.requestError = e;
    } finally {
      this.isLoading = false;
    }
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
