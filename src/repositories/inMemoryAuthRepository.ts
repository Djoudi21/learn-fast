import {AuthRepository} from './interfaces/AuthRepository';
import {Credentials} from '../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  AxiosErrorResponse,
} from '../use-cases/registerUseCase/types';
import {CreatedUser} from '../types';

export class InMemoryAuthRepository implements AuthRepository {
  users: CreatedUser[] = [];

  login(credentials: Credentials): Promise<any> {
    const isEmailValid: CreatedUser | undefined = this.users.find(
      el => el.email === credentials.email,
    );

    const isPasswordValid: CreatedUser | undefined = this.users.find(
      el => el.password === credentials.password,
    );

    if (!isEmailValid) {
      throw new Error('Email is invalid');
    }

    if (!isPasswordValid) {
      throw new Error('Password is invalid');
    }
    const response = {
      tokens: {
        accessToken: `accessToken${JSON.stringify(credentials)}`,
        refreshToken: `refreshToken${JSON.stringify(credentials)}`,
      },
    };
    return Promise.resolve(response);
  }

  logout(): Promise<any> {
    return Promise.resolve();
  }

  register(
    credentials: Credentials,
  ): Promise<CreatedUserResponse | AxiosErrorResponse> {
    if (!credentials.password.length) {
      throw new Error('wrong password');
    }
    if (!credentials.email.includes('@')) {
      throw new Error('wrong email');
    }
    const existingUser = this.users.find(el => el.email === credentials.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    const userWithId: CreatedUser = {
      ...credentials,
      id: String(this.users.length + 1),
    };
    this.users.push(userWithId);

    const response: CreatedUserResponse = {
      status: 201,
      data: {
        id: userWithId.id,
        email: userWithId.email,
        tokens: {
          accessToken: `${userWithId.email}`,
          refreshToken: '',
        },
      },
    };
    return Promise.resolve(response);
  }
}
