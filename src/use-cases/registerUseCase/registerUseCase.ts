import {User} from '../loginUseCase/types';
import {AuthRepository} from '../../repositories/interfaces/AuthRepository';

export class RegisterUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async register(user: User) {
    if (!user.email.includes('@')) {
      throw new Error('wrong email');
    }

    return await this.authRepository.register(user);
  }
}
