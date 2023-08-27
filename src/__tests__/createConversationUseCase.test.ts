import {CreateConversationUseCase} from '../use-cases/createConversationUseCase/createConversationUseCase';
import {inMemoryConversationRepository} from '../repositories/inMemoryConversationRepository';

describe('create conversation use case', () => {
  let conversationRepository: inMemoryConversationRepository;
  let createConversationUseCase: CreateConversationUseCase;
  beforeEach(() => {
    conversationRepository = new inMemoryConversationRepository();
    createConversationUseCase = new CreateConversationUseCase(
      conversationRepository,
    );
  });
  it('should create a conversation', async () => {
    const response = await createConversationUseCase.execute();
    expect(conversationRepository.conversations).toHaveLength(1);
    expect(response).toHaveProperty('id');
  });
});
