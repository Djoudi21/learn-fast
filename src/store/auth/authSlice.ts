import {createSlice} from '@reduxjs/toolkit';
// import {logout} from './logout';
import {register} from './register';
import {CreatedUserResponse} from '../../use-cases/registerUseCase/types';
// import {login} from './login';

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
    // builder.addCase(logout.fulfilled, (state, action) => {
    //   state.tokens.accessToken = action.payload;
    // });
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.tokens.accessToken = action.payload;
    // });
    builder.addCase(register.fulfilled, (state, action) => {
      state.entity = {...action.payload.data};
      if (action.payload.data.tokens) {
        state.tokens = {...action.payload.data.tokens};
      }
    });
    builder.addCase(register.pending, (state, action) => {
      // state.tokens = action.payload;
      // console.log('pending', action);
    });
    builder.addCase(register.rejected, (state, action) => {
      // state.tokens = action.payload;
      // console.log(action.payload);
    });
  },
});

export default authSlice.reducer;
