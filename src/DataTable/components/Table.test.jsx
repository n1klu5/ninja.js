import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import Table from './Table';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';
import { Wrapper } from '../../testUtils/reduxWrapper';
import store from '../../store';
import { dataLoaded } from '../slices/dataTable';

const rows = new RowsBuilder().build();

afterEach(async () => {
  await cleanup();
});

describe('Table', () => {
  it('displays data', async () => {
    store.dispatch(dataLoaded(rows));
    const { container } =  render(<Table />, { wrapper: Wrapper });
    const row = getByText(container, rows[0].name1);
    expect(row).toBeTruthy();
  });

  it('displays <table /> element if no data', async () => {
    const { container } =  render(<Table />, { wrapper: Wrapper });
    const tableElement = container.querySelector('table');
    expect(tableElement).toBeTruthy();
  });
})

