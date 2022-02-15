import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../../client/src/components/App';

describe('TodoApp', () => {
  it('Render TodoApp component', () => {
    const { getByTestId } = render(<App />);
    // screen.debug();
    expect(getByTestId('todoAdd')).toBeInTheDocument();
    expect(getByTestId('todoAddField')).toBeInTheDocument();
    expect(getByTestId('todoAddbtn')).toBeInTheDocument();
  });
});
