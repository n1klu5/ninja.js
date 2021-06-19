// Library
import { createSlice } from '@reduxjs/toolkit';

// Utils
import { calculateTotalNumberOfPages } from '../utils/calculateTotalNumberOfPages';
import { searchText } from '../utils/searchText';
import { rowsInPageNumber } from '../utils/rowsInPageNumber';

const initialState = {
  rowsPerPage: 40,
  foundRows: [],
  rowsToRender: [],
  allRows: [],
  currentPageNumber: 0,
  totalNumberOfPages: 0,
  error: undefined
};

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload ?? 0;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    search: (state, action) => {
      const text = action.payload;  
      const rowsFound = searchText(text, state.allRows);

      state.currentPageNumber = 0;

      modifyRows(state, rowsFound.length ? rowsFound : state.allRows);
    },
    dataLoaded: (state, action) => {
      const rows = action.payload;
      state.allRows = rows;
      modifyRows(state, rows)
    },
    changePage: (state, action) => {
      const newPage = action.payload;
      state.currentPageNumber = newPage;
      state.rowsToRender = state.foundRows.slice(...rowsInPageNumber(newPage, state.rowsPerPage));
    },
    reset: () => initialState
  },
});

const modifyRows = (state, rows) => {
  state.rowsToRender = rows.slice(...rowsInPageNumber(state.currentPageNumber, state.rowsPerPage));
  state.foundRows = rows;
  state.totalNumberOfPages = calculateTotalNumberOfPages(rows, state.rowsPerPage);
}

// Action creators are generated for each case reducer function
export const { setRowsPerPage, search, changePage, setError, dataLoaded, reset } = dataTableSlice.actions

export default dataTableSlice.reducer