import {createAsyncThunk} from '@reduxjs/toolkit';
import {InMemoryAuthRepository} from '../../repositories/inMemoryAuthRepository';
import {LogoutUseCase} from '../../use-cases/logoutUseCase/logoutUseCase';

export const logout = createAsyncThunk('auth/logout', async () => {
  const inMemoryAuthRepository = new InMemoryAuthRepository();
  const logoutUseCase = new LogoutUseCase(inMemoryAuthRepository);
  return await logoutUseCase.logout();
});
