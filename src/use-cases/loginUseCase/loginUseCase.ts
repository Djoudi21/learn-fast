import {AuthRepository} from '../../repositories/interfaces/AuthRepository';
import {Credentials} from './types';

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(credentials: Credentials) {
    return this.authRepository.login(credentials);
  }
}
