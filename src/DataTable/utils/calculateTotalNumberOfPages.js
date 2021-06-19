export const calculateTotalNumberOfPages = (rows, rowsPerPage) => {
  if (!rows || !rowsPerPage) return 0;
  return Math.ceil(rows.length / rowsPerPage);
}