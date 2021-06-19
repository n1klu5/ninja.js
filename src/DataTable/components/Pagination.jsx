import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { changePage } from '../slices/dataTable'

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPageNumber, totalNumberOfPages, rowsPerPage } = useSelector((state) => ({
      currentPageNumber: state.dataTable.currentPageNumber,
      totalNumberOfPages: state.dataTable.totalNumberOfPages,
      rowsPerPage: state.dataTable.rowsPerPage
  }));

  const previousPageDisabled = useMemo(() => {
    return currentPageNumber === 0;
  }, [currentPageNumber]);
  
  const renderesCurrentPageNumber = useMemo(() => {
    return totalNumberOfPages === 0 ? 0 : currentPageNumber + 1;
  }, [currentPageNumber, totalNumberOfPages]);
  
  const nextPageDisabled = useMemo(() => {
    return renderesCurrentPageNumber === totalNumberOfPages;
  }, [renderesCurrentPageNumber, totalNumberOfPages]);

  const previousPage = useCallback(() => {
    const newPage = Math.max(0, currentPageNumber - 1);
    onChange(newPage);
  }, [currentPageNumber]);

  const nextPage = useCallback(() => {
    const newPage = Math.min(totalNumberOfPages, currentPageNumber + 1);
    onChange(newPage);
  }, [currentPageNumber, totalNumberOfPages]);

  const onChange = useCallback((newPage) => {
    dispatch(changePage(newPage));
  }, [dispatch]);

  const onChangePage = useCallback((event) => {
    const value = event.target.value;
    const receivedPageNumber = parseInt(value, 10) - 1;
    const newPageNumber = Math.min(Math.max(0, receivedPageNumber), totalNumberOfPages - 1);
    onChange(newPageNumber);
  }, [onChange, totalNumberOfPages]);

  return (
    <p class="pagination">
      <span className="mr-1">
        {`Varer, pr. side ${rowsPerPage}, Nuværende side `}
      </span>
      <input
        data-testid="current-number"
        class="page-number"
        type="number"
        min="1"
        max={totalNumberOfPages}
        value={renderesCurrentPageNumber}
        onInput={onChangePage} />
      <span className="mr-1">
        {` af i alt ${totalNumberOfPages}`}
      </span>
      <button
        className="button mr-1"
        onClick={previousPage}
        disabled={previousPageDisabled}
      >
        {'Tidligere'}
      </button>
      <button
        className="button"
        onClick={nextPage}
        disabled={nextPageDisabled}
      >
        {'Næste'}
      </button>
    </p>
  )
}

export default Pagination
