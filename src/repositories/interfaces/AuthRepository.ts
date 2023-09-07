import {
  Credentials,
  LoggedUserResponse,
} from '../../use-cases/loginUseCase/types';
import {
  CreatedUserResponse,
  AxiosErrorResponse,
} from '../../use-cases/registerUseCase/types';
import {CreatedUser} from '../../types';

export interface AuthRepository {
  users: CreatedUser[];

  login(
    credentials: Credentials,
  ): Promise<LoggedUserResponse | AxiosErrorResponse | undefined>;

  logout(): Promise<any>;

  register(
    credentials: Credentials,
  ): Promise<CreatedUserResponse | AxiosErrorResponse | undefined>;
}
