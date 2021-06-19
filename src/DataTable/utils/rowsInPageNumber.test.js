import { rowsInPageNumber } from './rowsInPageNumber';

describe('rowsInPageNumber', () => {
  test.each([
    [1, 4, 4, 8],
    [0, 4, 0, 4],
    [4, 0, 0, 0],
    [3, 4, 12, 16],
  ])(
    'given pageNumber %p and rowsPerPage - %p as arguments, returns %p',
    (rowsArg, rowsPerPage, expectedSTart, expectedEnd) => {
      const [start, end] = rowsInPageNumber(rowsArg, rowsPerPage);
      expect(start).toEqual(expectedSTart);
      expect(end).toEqual(expectedEnd);
    }
  );
});
