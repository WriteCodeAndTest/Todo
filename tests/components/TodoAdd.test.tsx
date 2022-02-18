import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { App } from '../../client/src/components/App';

describe('TodoApp', () => {
  it('component render check', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('todoAdd')).toBeInTheDocument();
    expect(getByTestId('todoAddField')).toBeInTheDocument();
    expect(getByTestId('todoAddBtn')).toBeInTheDocument();
  });

  it('check component operation', () => {
    const { getByTestId } = render(<App />);

    const todoAdd = getByTestId('todoAdd');
    const todoAddField = getByTestId('todoAddField');
    const todoAddBtn = getByTestId('todoAddBtn');

    userEvent.type(todoAddField, 'Todo this');
    expect(todoAddField).toHaveValue('Todo this');

    userEvent.click(todoAddBtn);
    expect(todoAddField).toHaveValue();

    expect(todoAdd).toBeInTheDocument();
    expect(todoAddField).toBeInTheDocument();
    expect(todoAddBtn).toBeInTheDocument();
  });
});
