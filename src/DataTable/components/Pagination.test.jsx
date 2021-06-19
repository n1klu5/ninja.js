import React from 'react';
import { cleanup, render, getByText, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';
import { Wrapper } from '../../testUtils/reduxWrapper';
import store from '../../store';
import { changePage, dataLoaded, setRowsPerPage, reset } from '../slices/dataTable';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';

const rows = new RowsBuilder().build();

afterEach(async () => {
  store.dispatch(reset());
  await cleanup();
});

describe('Pagination', () => {
  it('renders next & previous buttons', async () => {
    store.dispatch(setRowsPerPage(2));
    store.dispatch(dataLoaded(rows));
    store.dispatch(changePage(1));
    const { container } =  render(<Pagination />, { wrapper: Wrapper });

    const buttonsElements = container.querySelectorAll('button');
    expect(buttonsElements.length).toBe(2);
  });

  it('change page on user button click', async () => {
    store.dispatch(setRowsPerPage(2));
    store.dispatch(dataLoaded(rows));
    const { container } =  render(<Pagination />, { wrapper: Wrapper });
    userEvent.click(getByText(container, 'Næste'));
    const currentPageNumber = store.getState().dataTable.currentPageNumber;
    expect(currentPageNumber).toBe(1);
  });

  it('change page on user input', async () => {
    store.dispatch(setRowsPerPage(2));
    store.dispatch(dataLoaded(rows));
    const { container } =  render(<Pagination />, { wrapper: Wrapper });
    const input = getByTestId(container, 'current-number');
    userEvent.type(input, '{selectall}2');
    expect(input.value).toBe('2');
    const currentPageNumber = store.getState().dataTable.currentPageNumber;
    expect(currentPageNumber).toBe(1);
  });
})

