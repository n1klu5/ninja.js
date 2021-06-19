import React from 'react';
import { cleanup, render, getByPlaceholderText } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import { Wrapper } from '../../testUtils/reduxWrapper';
import store from '../../store';
import { dataLoaded } from '../slices/dataTable';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';

const rows = new RowsBuilder().build();

afterEach(async () => {
  await cleanup();
});

describe('Search', () => {
  it('renders \'search\' input', async () => {
    store.dispatch(dataLoaded(rows));
    const { container } =  render(<Search />, { wrapper: Wrapper });
    const searchElement = getByPlaceholderText(container, 'Søg brugere');
    expect(searchElement).toBeTruthy();
  });

  it('triggers searching after user input', async () => {
    store.dispatch(dataLoaded(rows));
    const { container } =  render(<Search />, { wrapper: Wrapper });
    userEvent.type(getByPlaceholderText(container, 'Søg brugere'), 'k');
    const state = store.getState().dataTable;
    expect(state.foundRows.length).toBe(2);
  });
})

