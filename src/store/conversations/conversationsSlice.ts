import {createSlice} from '@reduxjs/toolkit';
import {createConversation} from './createConversation';
import {listConversationsByUserId} from './listConversationsByUserId';

type InitialState = {
  entity: {
    id: string;
    title: string;
  };
  conversations: any;
};

const initialState: InitialState = {
  entity: {
    id: '',
    title: '',
  },
  conversations: [],
};
export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createConversation.fulfilled, (state, action) => {
      // if (action.payload && 'data' in action.payload) {
      //   state.entity = {...action.payload.data};
      // }
      // if (action.payload && 'tokens' in action.payload) {
      //   state.tokens.accessToken = {...action.payload.tokens.accessToken};
      // }
    });
    builder.addCase(listConversationsByUserId.fulfilled, (state, action) => {
      state.conversations = action.payload.conversations;
    });
    // builder.addCase(register.rejected, (state, action) => {});
  },
});

export default conversationsSlice.reducer;
