import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { TodoItem } from '../../client/src/components/TodoItem';

const handleClickDel = jest.fn();
const handleClickMark = jest.fn();
const handleClickStatus = jest.fn();

const renderComponent = () =>
  render(
    <TodoItem
      id="1"
      title="To do this"
      status={false}
      mark={false}
      count="1"
      handleClickDel={handleClickDel}
      handleClickMark={handleClickMark}
      handleClickStatus={handleClickStatus}
    />,
  );

describe('TodoItem', () => {
  it('component render check', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('todoItem')).toBeInTheDocument();
    expect(getByTestId('deleteBtn')).toBeInTheDocument();
    expect(getByTestId('markBtn')).toBeInTheDocument();
  });

  it('check component operation', () => {
    const { getByTestId } = renderComponent();

    const todoItem = getByTestId('todoItem');
    const deleteBtn = getByTestId('deleteBtn');
    const markBtn = getByTestId('markBtn');

    userEvent.click(todoItem);
    expect(handleClickStatus).toHaveBeenCalledTimes(1);

    userEvent.click(deleteBtn);
    expect(handleClickDel).toHaveBeenCalledTimes(1);

    userEvent.click(markBtn);
    expect(handleClickMark).toHaveBeenCalledTimes(1);
  });
});
