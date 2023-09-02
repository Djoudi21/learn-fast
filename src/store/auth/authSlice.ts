import {createSlice} from '@reduxjs/toolkit';
// import {logout} from './logout';
import {register} from './register';
// import {login} from './login';

type initialState = {
  tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  };
};

const initialState = {
  tokens: {
    accessToken: null,
    refreshToken: null,
  },
};
export const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(logout.fulfilled, (state, action) => {
    //   state.tokens.accessToken = action.payload;
    // });
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.tokens.accessToken = action.payload;
    // });
    builder.addCase(register.fulfilled, (state, action) => {
      // state.tokens = action.payload;
      // console.log('fulfilled', action);
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

// Action creators are generated for each case reducer function
// export const {setTokens} = authSlice.actions;

export default authSlice.reducer;
