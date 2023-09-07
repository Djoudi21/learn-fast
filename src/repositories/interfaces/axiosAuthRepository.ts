import {AuthRepository} from './AuthRepository';
import {
  Credentials,
  LoggedUserResponse,
} from '../../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  AxiosErrorResponse,
} from '../../use-cases/registerUseCase/types';
import {CreatedUser} from '../../types';
import axios from 'axios';

export class AxiosAuthRepository implements AuthRepository {
  users: CreatedUser[] = [];

  async login(
    credentials: Credentials,
  ): Promise<LoggedUserResponse | AxiosErrorResponse | undefined> {
    try {
      const response = await axios.post('http://127.0.0.1:3000/login', {
        data: credentials,
      });

      if (response.status === 200) {
        return response.data as LoggedUserResponse;
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout(): Promise<any> {
    return Promise.resolve();
  }

  async register(
    credentials: Credentials,
  ): Promise<CreatedUserResponse | AxiosErrorResponse | undefined> {
    try {
      const response = await axios.post('http://127.0.0.1:3000/register', {
        data: credentials,
      });

      if (response.status === 200) {
        return response.data as CreatedUserResponse;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
