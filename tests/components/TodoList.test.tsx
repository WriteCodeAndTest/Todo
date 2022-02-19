import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';
import { TodoList } from '../../client/src/components/TodoList';
import { TodoStore } from '../../client/src/store';

afterEach(cleanup);

describe('TodoList', () => {
  it('component render check', () => {
    TodoStore.setTodosTest({
      title: 'Test',
      data: new Date().toLocaleDateString(),
      status: false,
      mark: false,
      id: '123',
    });

    const { getByTestId } = render(<TodoList />);

    expect(getByTestId('todoList')).toBeInTheDocument();
    expect(getByTestId('deleteBtn')).toBeInTheDocument();
    expect(getByTestId('markBtn')).toBeInTheDocument();
  });

  it('check component operation', () => {
    const { getByTestId } = render(<TodoList />);

    const todoItem = getByTestId('todoItem');
    const deleteBtn = getByTestId('deleteBtn');
    const markBtn = getByTestId('markBtn');

    userEvent.click(todoItem);
    expect(TodoStore.renderTodos[0].status).toBeTruthy();

    userEvent.click(markBtn);
    expect(TodoStore.renderTodos[0].mark).toBeTruthy();

    userEvent.click(deleteBtn);
    expect(TodoStore.renderTodos).toHaveLength(0);
  });
});
