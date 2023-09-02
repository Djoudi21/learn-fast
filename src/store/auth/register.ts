import {createAsyncThunk} from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async () => {
  console.log('register async thunk');
});
