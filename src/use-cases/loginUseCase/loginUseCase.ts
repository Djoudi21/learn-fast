import {AuthRepository} from '../../repositories/interfaces/AuthRepository';
import {User} from './types';

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(user: User) {
    return this.authRepository.login(user);
  }
}
