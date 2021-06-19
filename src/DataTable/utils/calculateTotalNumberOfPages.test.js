import { calculateTotalNumberOfPages } from './calculateTotalNumberOfPages';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';

const rows = new RowsBuilder().build();

describe('calculateTotalNumberOfPages', () => {
  test.each([
    [rows, 3, 2],
    [[], 3, 0],
    [rows, 0, 0],
  ])(
    'given rows and rowsPerPage - %p as arguments, returns %p',
    (rowsArg, rowsPerPage, expectedResult) => {
      const total = calculateTotalNumberOfPages(rowsArg, rowsPerPage);
      expect(total).toEqual(expectedResult);
    }
  );
});
