import {Conversation} from '../../use-cases/listConversationsUseCase/types';

export interface MessageRepository {
  listMessagesByConversationId: (
    conversationId: Conversation['id'],
  ) => Promise<any>;
}
