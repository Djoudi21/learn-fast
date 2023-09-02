import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginUseCase} from '../../use-cases/loginUseCase/loginUseCase';
import {InMemoryAuthRepository} from '../../repositories/inMemoryAuthRepository';
import {User} from '../../use-cases/loginUseCase/types';

export const login = createAsyncThunk('auth/logout', async (user: User) => {
  console.log('login async thunk');
  const inMemoryAuthRepository = new InMemoryAuthRepository();
  const loginUseCase = new LoginUseCase(inMemoryAuthRepository);
  return await loginUseCase.login(user);
});
