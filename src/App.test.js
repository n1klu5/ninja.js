import React from 'react';
import { cleanup, render, waitFor, getByPlaceholderText } from '@testing-library/react';
import App from './App';
import { Wrapper } from './testUtils/reduxWrapper';

afterEach(async () => {
  await cleanup();
});

describe('App', () => {
  it('renders without crashing', async () => {
    const { container } =  render(<App />, { wrapper: Wrapper });
    
    const app = container.querySelector('.container.mt-3');
    expect(app).toBeTruthy();

    await waitFor(() => getByPlaceholderText(container, 'Søg brugere'));
  });
})

