import {createSlice} from '@reduxjs/toolkit';
import {listMessagesByConversationId} from './listMessagesByConversationId';

type InitialState = {
  entity: {
    id: string;
    text: string;
  };
  messages: any;
};

const initialState: InitialState = {
  entity: {
    id: '',
    text: '',
  },
  messages: [],
};
export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(createMessage.fulfilled, (state, action) => {
    //   // if (action.payload && 'data' in action.payload) {
    //   //   state.entity = {...action.payload.data};
    //   // }
    //   // if (action.payload && 'tokens' in action.payload) {
    //   //   state.tokens.accessToken = {...action.payload.tokens.accessToken};
    //   // }
    // });
    builder.addCase(listMessagesByConversationId.fulfilled, (state, action) => {
      state.messages = action.payload.messages;
    });
    // builder.addCase(register.rejected, (state, action) => {});
  },
});

export default messagesSlice.reducer;
