export const rowsInPageNumber = (pageNumber, rowsPerPage) => {
  const startIndex = pageNumber * rowsPerPage;
  return [startIndex, startIndex + rowsPerPage];
}
