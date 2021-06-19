import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import Error from './Error';

afterEach(async () => {
  await cleanup();
});

describe('Error', () => {
  it('displays error', async () => {
    const errorMessage = 'Internal Server error';
    const { container } =  render(<Error error={errorMessage} />);
    const error = getByText(container, errorMessage);
    expect(error).toBeTruthy();
  });

  it('displays error element even when message is empty', async () => {
    const errorMessage = '';
    const { container } =  render(<Error error={errorMessage} />);
    const errorElement = container.querySelector('h4');
    expect(errorElement).toBeTruthy();
  });
})

