import {createAsyncThunk} from '@reduxjs/toolkit';
import {RegisterUseCase} from '../../use-cases/registerUseCase/registerUseCase';
import {InMemoryAuthRepository} from '../../repositories/inMemoryAuthRepository';
import {User} from '../../use-cases/loginUseCase/types';

export const register = createAsyncThunk(
  'auth/register',
  async (user: User) => {
    console.log('register async thunk', user);
    const inMemoryAuthRepository = new InMemoryAuthRepository();
    const registerUseCase = new RegisterUseCase(inMemoryAuthRepository);
    return await registerUseCase.register(user);
  },
);
