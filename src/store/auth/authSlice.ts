import {createSlice} from '@reduxjs/toolkit';
import {register} from './register';
import {login} from './login';

type InitialState = {
  entity: {
    id: string;
    email: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  isLoggedIn: boolean;
};

const initialState: InitialState = {
  entity: {
    id: '',
    email: '',
  },
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  isLoggedIn: false,
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toto: state => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload && 'data' in action.payload) {
        state.entity = action.payload.data;
      }
      if (action.payload && 'tokens' in action.payload) {
        state.tokens.accessToken = action.payload.tokens.accessToken;
      }
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload && 'data' in action.payload) {
        state.entity = action.payload.data;
      }
    });
    // builder.addCase(register.rejected, (state, action) => {});
  },
});

export const {toto} = authSlice.actions;

export default authSlice.reducer;
