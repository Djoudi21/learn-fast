import {ConversationRepository} from '../../repositories/interfaces/ConversationRepository';

export class CreateConversationUseCase {
  private conversationRepository: ConversationRepository;
  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository;
  }

  execute() {
    return this.conversationRepository.createConversation();
  }
}
