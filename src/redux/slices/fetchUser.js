/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import fetchUser from '../thunk/fetchUser';

const initialState = {
  access: null,
  profile: null,
  error: null,
};

const fetchUserSlice = createSlice({
  name: 'fetchUser',
  initialState,
  reducers: {
    clearData(state) {
      state.access = null;
      state.profile = null;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      if (action.payload.data) {
        state[action.meta.arg.mode] = action.payload.data;
      } else {
        state.error = action.payload;
      }
    },
  },
});

export const { clearData } = fetchUserSlice.actions;
export default fetchUserSlice.reducer;
