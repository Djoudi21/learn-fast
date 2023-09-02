import {createSlice} from '@reduxjs/toolkit';
import {register} from './register';
import {login} from './login';
import {logout} from './logout';
import {PURGE} from 'redux-persist';

type InitialState = {
  entity: {};
  tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  };
};

const initialState: InitialState = {
  entity: {},
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
    // builder.addCase(logout.fulfilled, (state, action) => {
    //   state.tokens.accessToken = action.payload;
    // });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.data.tokens) {
        state.tokens = {...action.payload.data.tokens};
      }
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.entity = {...action.payload.data};
      if (action.payload.data.tokens) {
        state.tokens = {...action.payload.data.tokens};
      }
    });
  },
});

export default authSlice.reducer;
