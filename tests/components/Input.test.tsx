import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Input } from '../../client/src/components/Input';

const handleKey = jest.fn();
const handleChange = jest.fn();

describe('Input', () => {
  it('component render check', () => {
    const { getByTestId } = render(
      <Input
        placeholder="What needs to be done?"
        name="todoAdd"
        type="text"
        handleKey={handleKey}
        handleChange={handleChange}
        value="value"
        testid="todoAddField"
      />,
    );
    const input = getByTestId('todoAddField');

    expect(input).toBeInTheDocument();
  });

  it('check component operation', () => {
    const { getByTestId } = render(
      <Input
        placeholder="What needs to be done?"
        name="todoAdd"
        type="text"
        handleKey={handleKey}
        handleChange={handleChange}
        value="value"
        testid="todoAddField"
      />,
    );
    const input = getByTestId('todoAddField');

    userEvent.type(input, 'test');
    expect(handleChange).toHaveBeenCalledTimes(4);

    userEvent.type(input, '{enter}');
    expect(handleChange).toHaveBeenCalled();
  });
});
