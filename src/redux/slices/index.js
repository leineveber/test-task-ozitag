import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fetchUser from './fetchUser';

const fetchUserConfig = {
  key: 'fetchUser',
  storage,
  blacklist: ['error'],
};

const rootReducer = combineReducers({
  fetchUser: persistReducer(fetchUserConfig, fetchUser),
});

export default rootReducer;
