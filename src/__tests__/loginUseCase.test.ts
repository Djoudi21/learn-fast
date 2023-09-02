import {InMemoryAuthRepository} from '../repositories/inMemoryAuthRepository';
import {AuthRepository} from '../repositories/interfaces/AuthRepository';
import {LoginUseCase} from '../use-cases/loginUseCase/loginUseCase';

describe('login use case', () => {
  let authRepository: AuthRepository;
  let loginUseCase: LoginUseCase;
  beforeEach(() => {
    authRepository = new InMemoryAuthRepository();
    loginUseCase = new LoginUseCase(authRepository);
  });
  it('should login a user with valid credentials', async () => {
    // ARRANGE
    const user = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    authRepository.users.push(user);
    // ACT
    const response = await loginUseCase.login(user);
    const tokens = response.tokens;

    // ASSERT
    expect(tokens).toBeDefined();
    expect(tokens).toHaveProperty('accessToken');
    expect(tokens).toHaveProperty('refreshToken');
  });
  it('should not login a user with invalid email', async () => {
    // ARRANGE
    const validUser = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    authRepository.users.push(validUser);
    const invalidUser = {
      email: 'invalid email',
      password: 'validpassword',
    };

    try {
      // ACT
      await loginUseCase.login(invalidUser);
    } catch (error) {
      // ASSERT
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Email is invalid');
    }
  });
  it('should not login a user with invalid password', async () => {
    // ARRANGE
    const validUser = {
      email: 'valid@email.com',
      password: 'validpassword',
    };
    authRepository.users.push(validUser);
    const invalidUser = {
      email: 'valid@email.com',
      password: 'invalidpassword',
    };

    try {
      // ACT
      await loginUseCase.login(invalidUser);
    } catch (error) {
      // ASSERT
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Password is invalid');
    }
  });
});
