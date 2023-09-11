import {
  Credentials,
  LoggedUserResponse,
} from '../../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  RequestErrorResponse,
} from '../../use-cases/registerUseCase/types';
import {CreatedUser} from '../../types';

export interface AuthRepository {
  users: CreatedUser[];

  login(
    credentials: Credentials,
  ): Promise<LoggedUserResponse | RequestErrorResponse | undefined>;

  logout(): Promise<any>;

  register(
    credentials: Credentials,
  ): Promise<CreatedUserResponse | RequestErrorResponse | undefined>;
}
