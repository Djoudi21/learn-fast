import {Credentials} from '../loginUseCase/types';
import {AuthRepository} from '../../repositories/interfaces/AuthRepository';

export class RegisterUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async register(credentials: Credentials) {
    return await this.authRepository.register(credentials);
  }
}
