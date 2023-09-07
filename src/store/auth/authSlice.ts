import {createSlice} from '@reduxjs/toolkit';
import {register} from './register';
import {login} from './login';

type InitialState = {
  entity: {
    id: string;
    email: string;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
};

const initialState: InitialState = {
  entity: {
    id: '',
    email: '',
    tokens: {
      accessToken: '',
      refreshToken: '',
    },
  },
};
export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload && 'data' in action.payload) {
        state.entity = {...action.payload.data};
      }
    });
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload && 'data' in action.payload) {
        state.entity = {...action.payload.data};
      }
    });
    // builder.addCase(register.rejected, (state, action) => {});
  },
});

export default authSlice.reducer;
