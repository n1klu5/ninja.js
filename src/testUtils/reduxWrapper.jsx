import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

export const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;