import store from '../../store';
import { setRowsPerPage, setError, dataLoaded, search, changePage, reset } from './dataTable';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';

const rows = new RowsBuilder().build();

afterEach(async () => {
  store.dispatch(reset());
});

describe('dataTableSlice', () => {
  it('setRowsPerPage updates rowsPerPage value', async () => {
    const initialRowsPerPage = store.getState().dataTable.rowsPerPage;
    expect(initialRowsPerPage).toBe(40);
    store.dispatch(setRowsPerPage(10));
    const newRowsPerPage = store.getState().dataTable.rowsPerPage;
    expect(newRowsPerPage).toBe(10);
  });

  it('setRowsPerPage sets 0 for rowsPerPage value in undefined passed as action payload', async () => {
    const initialRowsPerPage = store.getState().dataTable.rowsPerPage;
    expect(initialRowsPerPage).toBe(40);
    store.dispatch(setRowsPerPage(undefined));
    const newRowsPerPage = store.getState().dataTable.rowsPerPage;
    expect(newRowsPerPage).toBe(0);
  });
  
  it('dataLoaded updates allRows, totalNumberOfPages value', async () => {
    const initialAllRows = store.getState().dataTable.allRows;
    expect(initialAllRows.length).toBe(0);
    store.dispatch(setRowsPerPage(2));
    store.dispatch(dataLoaded(rows));
    const { allRows: newAllRows, totalNumberOfPages } = store.getState().dataTable;
    expect(totalNumberOfPages).toBe(3);
    expect(newAllRows.length).toBe(5);
  });

  it('setError updates error value', async () => {
    const error = store.getState().dataTable.error;
    expect(error).toBe(undefined);
    const errorMessage = 'Sorry, there was an error';
    store.dispatch(setError(errorMessage));
    const newError = store.getState().dataTable.error;
    expect(newError).toBe(errorMessage);
  });

  it('changePage updates currentPageNumber value', async () => {
    const initialCurrentPageNumber = store.getState().dataTable.currentPageNumber;
    expect(initialCurrentPageNumber).toBe(0);
    store.dispatch(setRowsPerPage(2));
    store.dispatch(dataLoaded(rows));
    store.dispatch(changePage(3));
    const newCurrentPageNumber = store.getState().dataTable.currentPageNumber;
    expect(newCurrentPageNumber).toBe(3);
  });

  it('search update rows with ones that match searching phrase', async () => {
    const {
      rowsToRender: initialRowsToRender,
      foundRows: initialFoundRows,
      totalNumberOfPages: initialTotalNumberOfPages
    } = store.getState().dataTable;
    expect(initialRowsToRender.length).toBe(0);
    expect(initialFoundRows.length).toBe(0);
    expect(initialTotalNumberOfPages).toBe(0);
    store.dispatch(dataLoaded(rows));
    store.dispatch(search('k'));
    const {
      rowsToRender: newRowsToRender,
      foundRows: newFoundRows,
      totalNumberOfPages: newTotalNumberOfPages
    } = store.getState().dataTable;
    expect(newRowsToRender.length).toBe(2);
    expect(newFoundRows.length).toBe(2);
    expect(newTotalNumberOfPages).toBe(1);
  });
});
