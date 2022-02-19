import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Btn } from '../../client/src/components/Btn';

const handleClick = jest.fn();

describe('Btn', () => {
  it('component render check', () => {
    const { getByTestId } = render(
      <Btn
        type="submit"
        styleBtn="manageBtn"
        handleClick={handleClick}
        testid="todoAddBtn"
      />,
    );
    const btn = getByTestId('todoAddBtn');

    expect(btn).toBeInTheDocument();
  });

  it('check Btn operation', () => {
    const { getByTestId } = render(
      <Btn
        type="button"
        styleBtn="manageBtn"
        handleClick={handleClick}
        testid="todoAddBtn"
      />,
    );
    const btn = getByTestId('todoAddBtn');

    userEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it('check disabled Btn', () => {
    const { getByTestId } = render(
      <Btn
        type="button"
        styleBtn="manageBtn"
        handleClick={handleClick}
        isDisabled
        testid="todoAddBtn"
      />,
    );
    const btn = getByTestId('todoAddBtn');
    expect(btn).toBeDisabled();
  });
});
