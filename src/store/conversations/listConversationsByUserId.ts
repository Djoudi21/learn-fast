import {createAsyncThunk} from '@reduxjs/toolkit';
import {ListConversationsUseCase} from '../../use-cases/listConversationsUseCase/listConversationsUseCase';
import {AxiosConversationRepository} from '../../repositories/axiosConversationRepository';

export const listConversationsByUserId = createAsyncThunk(
  'conversations/listConversationsByUserId',
  async (userId: User['id']) => {
    const axiosConversationRepository = new AxiosConversationRepository();
    const listConversationsUseCase = new ListConversationsUseCase(
      axiosConversationRepository,
    );
    return await listConversationsUseCase.listConversationsByUserId(userId);
  },
);
