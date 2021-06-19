import React from 'react';
import { cleanup, render, getByText, getByPlaceholderText, waitFor } from '@testing-library/react';
import DataTable from './index';
import { Wrapper } from '../testUtils/reduxWrapper';

afterEach(async () => {
  await cleanup();
});

describe('DataTable', () => {
  it('show loading on start and displays table after data loaded', async () => {
    const { container } =  render(<DataTable />, { wrapper: Wrapper });

    const loadingElement = getByText(container, 'Loading, please wait ...');
    expect(loadingElement).toBeTruthy();

    await waitFor(() => getByPlaceholderText(container, 'Søg brugere'));
    
    const searchElement = getByPlaceholderText(container, 'Søg brugere');
    expect(searchElement).toBeTruthy();
    const tableElement = container.querySelector('table');
    expect(tableElement).toBeTruthy();
  });
})

