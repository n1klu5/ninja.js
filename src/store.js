import { configureStore } from '@reduxjs/toolkit';
import dataTableReducer from './DataTable/slices/dataTable';

export default configureStore({
  reducer: {
    dataTable: dataTableReducer,
  },
})
