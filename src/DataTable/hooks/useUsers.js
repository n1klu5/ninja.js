import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadUsers } from '../../api/users';

// Actions
import { dataLoaded, setError } from '../slices/dataTable';

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const users = await loadUsers();
        dispatch(dataLoaded(users));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return isLoading;
}