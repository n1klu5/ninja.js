import { renderHook } from '@testing-library/react-hooks';
import { cleanup } from '@testing-library/react';

import { Wrapper } from '../../testUtils/reduxWrapper';
import { useUsers } from './useUsers';
import store from '../../store';

jest.mock('../../api/users', () => {
  return {
    loadUsers: () =>
      Promise.resolve([{
        'name1': 'Eømilie T. Lassen',
        'email': 'EmilieTLassen@rhyta.com',
        'edit_path': 'http://google.com',
        'per_id': 6
      }]),
  };
});

afterEach(async () => {
  await cleanup();
});

describe('useUsers', () => {
  it('channg result with time', async () => {
    const { result, waitForNextUpdate  } = renderHook(() =>
      useUsers(), { wrapper: Wrapper }
    );
    expect(result.current).toBe(true);
    await waitForNextUpdate();
    expect(result.current).toBe(false);
    const state = store.getState().dataTable;
    expect(state.allRows.length).toBe(1);
  });
})