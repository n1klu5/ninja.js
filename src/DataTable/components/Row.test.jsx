import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import Row from './Row';
import { RowBuilder } from '../../testUtils/dataBuilders/RowBuilder';

const row = new RowBuilder().build();

const Wrapper = ({ children }) => <table><tbody>{children}</tbody></table>

afterEach(async () => {
  await cleanup();
});

describe('Row', () => {
  it('displays row with data', async () => {
    const { container } = render(<Row row={row} />, { wrapper: Wrapper });
    const rowName = getByText(container, row.name1);
    expect(rowName).toBeTruthy();
  });

  it('throws error if no data passed to row element', async () => {
    expect(() => render(<Row row={undefined} />, { wrapper: Wrapper }))
      .toThrow('Cannot read property \'edit_path\' of undefined');
  });
})

