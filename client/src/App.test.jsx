import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders home component', () => {
  render(<App />);
  const buyElements = screen.getAllByText(/BUY NOW/i);
  expect(buyElements).toHaveLength(3);
});
