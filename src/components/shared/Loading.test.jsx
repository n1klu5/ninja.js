import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import Loading from './Loading';

afterEach(async () => {
  await cleanup();
});

describe('Loading', () => {
  it('displays loading message', async () => {
    const message = 'Loading, please wait ...';
    const { container } =  render(<Loading />);
    const messageText = getByText(container, message);
    expect(messageText).toBeTruthy();
  });
})

