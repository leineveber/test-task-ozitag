import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk('users/fetch', async ({ url, query, options }) => {
  const response = await fetch(`${url}${query}`, { ...options });
  const data = await response.json();

  return data;
});

export default fetchUser;
