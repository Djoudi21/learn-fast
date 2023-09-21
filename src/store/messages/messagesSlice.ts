import {createSlice} from '@reduxjs/toolkit';
import {listMessagesByConversationId} from './listMessagesByConversationId';
import {createMessage} from './createMessage';

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
    builder.addCase(listMessagesByConversationId.fulfilled, (state, action) => {
      state.messages = action.payload.messages;
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      state.messages = [...state.messages, action.payload.response];
    });
    builder.addCase(createMessage.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default messagesSlice.reducer;
