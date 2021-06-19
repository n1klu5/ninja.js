import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import {  search } from '../slices/dataTable'

const Search = () => {
  const dispatch = useDispatch();

  const onSearch = useCallback((event) => {
    const text = event.target.value;
    dispatch(search(text));
  }, [dispatch]);

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch} />
    </div>
  )
}

export default Search
