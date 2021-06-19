import { searchText } from './searchText';
import { RowsBuilder } from '../../testUtils/dataBuilders/RowsBuilder';

const rows = new RowsBuilder().build();

describe('searchText', () => {
  test.each([
    ['k', rows, [{
      name1: 'Mads L. Klausen',
      email: 'MadsLKlausen@jourrapide.com',
      edit_path: 'http://google.com',
      per_id: 1
    }, {
      'edit_path': 'http://google.com',
      'email': 'AlfredKKrogh@armyspy.com',
      'name1': 'Alfred K. Krogh',
      'per_id': 2,
    }]],
    ['i', rows, [
      {
        name1: 'Mads L. Klausen',
        email: 'MadsLKlausen@jourrapide.com',
        edit_path: 'http://google.com',
        per_id: 1
      },
      {
        name1: 'Silas L. Bertelsen',
        email: 'SilasLBertelsen@armyspy.com',
        edit_path: 'http://google.com',
        per_id: 3
      },
      {
        name1: 'Mia A. Johnsen',
        email: 'MiaAJohnsen@dayrep.com',
        edit_path: 'http://google.com',
        per_id: 4
      },
      {
        name1: 'Alfred S. Schou',
        email: 'AlfredSSchou@jourrapide.com',
        edit_path: 'http://google.com',
        per_id: 5
      }
    ]],
    ['w', rows, []],
    ['', rows, []]
  ])(
    'given text %p and rows as arguments, finds rows',
    (text, rows, expectedRows) => {
      const fountRows = searchText(text, rows);
      expect(fountRows).toEqual(expectedRows);
    }
  );
});
