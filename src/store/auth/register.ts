import {createAsyncThunk} from '@reduxjs/toolkit';
import {RegisterUseCase} from '../../use-cases/registerUseCase/registerUseCase';
import {Credentials} from '../../use-cases/loginUseCase/types';
import {AxiosAuthRepository} from '../../repositories/axiosAuthRepository';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: Credentials) => {
    const axiosAuthRepository = new AxiosAuthRepository();
    const registerUseCase = new RegisterUseCase(axiosAuthRepository);
    return await registerUseCase.register(credentials);
  },
);
