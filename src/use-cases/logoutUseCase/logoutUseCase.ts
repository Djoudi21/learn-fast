import {AuthRepository} from '../../repositories/interfaces/AuthRepository';

export class LogoutUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async logout() {
    return this.authRepository.logout();
  }
}
