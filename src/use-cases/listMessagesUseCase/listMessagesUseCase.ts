import {MessageRepository} from '../../repositories/interfaces/MessageRepository';
import {Conversation} from '../listConversationsUseCase/types';

export class ListMessagesUseCase {
  messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  async listMessagesByConversationId(conversationId: Conversation['id']) {
    return this.messageRepository.listMessagesByConversationId(conversationId);
  }
}
