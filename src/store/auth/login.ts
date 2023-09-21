import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginUseCase} from '../../use-cases/loginUseCase/loginUseCase';
import {AxiosAuthRepository} from '../../repositories/axiosAuthRepository';
import {Credentials} from '../../use-cases/loginUseCase/types';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    const axiosAuthRepository = new AxiosAuthRepository();
    const loginUseCase = new LoginUseCase(axiosAuthRepository);
    try {
      return await loginUseCase.login(credentials);
    } catch (e) {}
  },
);
