// Libraries
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { } from 'react-redux';

// Actions
import { setRowsPerPage } from './slices/dataTable';

// Hooks
import { useUsers } from './hooks/useUsers';

// Components
import Pagination from './components/Pagination';
import Table from './components/Table';
import Search from './components/Search';
import Error from '../components/shared/Error';
import Loading from '../components/shared/Loading';

const DataTable = ({ rowsPerPage }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.dataTable.error);

  useEffect(() => {
    dispatch(setRowsPerPage(rowsPerPage));
  }, []);

  const isLoading = useUsers();

  return (
    isLoading ?
      <Loading />
      :
      <div>
        {error ? <Error error={error} /> : undefined}
        <Search />
        <Table />
        <Pagination />
      </div>
  );
}

export default DataTable;
