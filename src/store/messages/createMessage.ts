import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosMessageRepository} from '../../repositories/axiosMessageRepository';
import {CreateMessageUseCase} from '../../use-cases/createMessageUseCase/createMessageUseCase';
import {CreateMessageReqBody} from '../../use-cases/createMessageUseCase/types';

export const createMessage = createAsyncThunk(
  'messages/createMessage',
  async (data: CreateMessageReqBody): Promise<any> => {
    const axiosMessageRepository = new AxiosMessageRepository();
    const createMessageUseCase = new CreateMessageUseCase(
      axiosMessageRepository,
    );
    try {
      const response = await createMessageUseCase.execute(data);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
