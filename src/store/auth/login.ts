import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/logout', async () => {
  console.log('login async thunk');
});
