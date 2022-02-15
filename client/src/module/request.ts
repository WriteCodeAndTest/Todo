import { axiosInstance } from '@src/utils';
import { ITodos, ITodosRequest } from '@src/interfaces';

const createTodo = async (query: string, todo: ITodos) => {
  try {
    const todoResponse = await axiosInstance({
      url: `${query}`,
      method: 'post',
      data: todo,
    });

    console.log(todoResponse);
  } catch (e: any) {
    console.log(e.message);
  }
};

const getAllTodos = async (query: string) => {
  try {
    const response = await axiosInstance({
      url: `${query}`,
      headers: { 'Content-Type': 'applicatoin/json' },
    });

    console.log(response);
  } catch (e: any) {
    console.log(e.message);
  }
};

const updateTodo = async (query: string, data: ITodosRequest) => {
  try {
    const response = await axiosInstance({
      url: `${query}`,
      method: 'put',
      data,
    });

    console.log(response);
  } catch (e: any) {
    console.log(e.message);
  }
};

const deleteTodo = async (query: string, id: string) => {
  try {
    const response = await axiosInstance({
      url: `${query}/${id}`,
      method: 'delete',
    });

    console.log(response);
  } catch (e: any) {
    console.log(e.message);
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
