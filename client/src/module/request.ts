import { axiosInstance } from './axiosInstance';
import { ITodosRequest } from '@src/interfaces';

const createTodo = async (todo: ITodosRequest) => {
  try {
    const todoResponse = await axiosInstance({
      method: 'post',
      data: todo,
    });

    return todoResponse;
  } catch (e: any) {
    console.log(e.message);
  }
};

const getAllTodos = async () => {
  try {
    const response = await axiosInstance({
      headers: { 'Content-Type': 'applicatoin/json' },
    });

    return response;
  } catch (e: any) {
    console.log(e.message);
  }
};

const updateTodo = async (data: ITodosRequest) => {
  try {
    await axiosInstance({
      method: 'put',
      data,
    });
  } catch (e: any) {
    console.log(e.message);
  }
};

const deleteTodo = async (id: string) => {
  try {
    await axiosInstance({
      url: `${id}`,
      method: 'delete',
    });
  } catch (e: any) {
    console.log(e.message);
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
