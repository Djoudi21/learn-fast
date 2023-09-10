import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosConversationRepository} from '../../repositories/axiosConversationRepository';
import {CreateConversationUseCase} from '../../use-cases/createConversationUseCase/createConversationUseCase';

export const createConversation = createAsyncThunk(
  'conversations/createConversation',
  async () => {
    const axiosConversationRepository = new AxiosConversationRepository();
    const createConversationUseCase = new CreateConversationUseCase(
      axiosConversationRepository,
    );
    return await createConversationUseCase.execute();
  },
);
