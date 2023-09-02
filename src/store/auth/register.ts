import {createAsyncThunk} from '@reduxjs/toolkit';
import {RegisterUseCase} from '../../use-cases/registerUseCase/registerUseCase';
import {InMemoryAuthRepository} from '../../repositories/inMemoryAuthRepository';
import {LoginUseCase} from '../../use-cases/loginUseCase/loginUseCase';

export const register = createAsyncThunk('auth/register', async user => {
  console.log('register async thunk', user);
  const inMemoryAuthRepository = new InMemoryAuthRepository();
  const registerUseCase = new RegisterUseCase(inMemoryAuthRepository);
  const loginUseCase = new LoginUseCase(inMemoryAuthRepository);
  await registerUseCase.register(user);
  const res = await loginUseCase.login(user);
  console.log(res);
});
