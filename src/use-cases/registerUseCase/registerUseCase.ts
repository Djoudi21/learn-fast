import {Credentials} from '../loginUseCase/types';
import {AuthRepository} from '../../repositories/interfaces/AuthRepository';

export class RegisterUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async register(credentials: Credentials) {
    if (!credentials.email.includes('@')) {
      throw new Error('wrong email');
    }

    return await this.authRepository.register(credentials);
  }
}
