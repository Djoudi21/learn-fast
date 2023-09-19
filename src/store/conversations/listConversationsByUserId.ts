import {createAsyncThunk} from '@reduxjs/toolkit';
import {ListConversationsUseCase} from '../../use-cases/listConversationsUseCase/listConversationsUseCase';
import {AxiosConversationRepository} from '../../repositories/axiosConversationRepository';
import {User} from '../../types';

export const listConversationsByUserId = createAsyncThunk(
  'conversations/listConversationsByUserId',
  async (userId: User['id']) => {
    const axiosConversationRepository = new AxiosConversationRepository();
    const listConversationsUseCase = new ListConversationsUseCase(
      axiosConversationRepository,
    );
    try {
      const response = await listConversationsUseCase.listConversationsByUserId(
        userId,
      );
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
