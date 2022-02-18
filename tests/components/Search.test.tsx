import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { App } from '../../client/src/components/App';

describe('Search', () => {
  it('component render check', () => {
    const { getByTestId } = render(<App />);
    const search = getByTestId('search');
    const searchField = getByTestId('searchField');
    const allBtn = getByTestId('allBtn');
    const activeBtn = getByTestId('activeBtn');
    const doneBtn = getByTestId('doneBtn');

    userEvent.type(searchField, 'Todo content');
    expect(searchField).toHaveValue('Todo content');

    expect(search).toBeInTheDocument();
    expect(searchField).toBeInTheDocument();
    expect(allBtn).toBeInTheDocument();
    expect(activeBtn).toBeInTheDocument();
    expect(doneBtn).toBeInTheDocument();
  });
});
