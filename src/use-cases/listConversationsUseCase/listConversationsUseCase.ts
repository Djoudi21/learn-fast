import {ConversationRepository} from '../../repositories/interfaces/ConversationRepository';
import {User} from '../../types';

export class ListConversationsUseCase {
  conversationRepository: ConversationRepository;

  constructor(conversationRepository: ConversationRepository) {
    this.conversationRepository = conversationRepository;
  }

  async listConversationsByUserId(userId: User['id']) {
    return this.conversationRepository.listConversationsByUserId(userId);
  }
}
