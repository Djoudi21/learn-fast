import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosMessageRepository} from '../../repositories/axiosMessageRepository';
import {ListMessagesUseCase} from '../../use-cases/listMessagesUseCase/listMessagesUseCase';
import {Conversation} from '../../use-cases/listConversationsUseCase/types';

export const listMessagesByConversationId = createAsyncThunk(
  'messages/listMessagesByConversationId',
  async (conversationId: Conversation['id']) => {
    const axiosMessageRepository = new AxiosMessageRepository();
    const listMessagesUseCase = new ListMessagesUseCase(axiosMessageRepository);
    try {
      const response = await listMessagesUseCase.listMessagesByConversationId(
        conversationId,
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
