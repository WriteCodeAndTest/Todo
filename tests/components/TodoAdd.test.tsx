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

    expect(todoAddBtn).toBeDisabled();

    userEvent.type(todoAddField, 'Press Enter');
    expect(todoAddField).toHaveValue('Press Enter');

    expect(todoAddBtn).not.toBeDisabled();

    userEvent.type(todoAddField, '{enter}');
    expect(todoAddField).not.toHaveValue('Press Enter');

    userEvent.type(todoAddField, 'Click on button');
    expect(todoAddField).toHaveValue('Click on button');

    expect(todoAddBtn).not.toBeDisabled();

    userEvent.click(todoAddBtn);
    expect(todoAddField).not.toHaveValue('Click on button');

    expect(todoAdd).toBeInTheDocument();
    expect(todoAddField).toBeInTheDocument();
    expect(todoAddBtn).toBeInTheDocument();
  });
});
