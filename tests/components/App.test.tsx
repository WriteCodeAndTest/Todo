import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../../src/components/App';

it('Test', () => {
  const { getByTestId } = render(<App />);
  screen.debug();
  expect(getByTestId('wrapper')).toHaveTextContent('Test test');
});
