import {createAsyncThunk} from '@reduxjs/toolkit';

export const logout = createAsyncThunk('auth/logout', async () => {
  console.log('logout async thunk');
});
