// Libraries
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Row from './Row'

const Table = () => {
  const rowsToRender = useSelector((state) => state.dataTable.rowsToRender);

  return (
    <table>
      <tbody>
        {rowsToRender.map(row => <Row key={row.per_id} row={row} />)}
      </tbody>
    </table>
  );
}

export default Table;
