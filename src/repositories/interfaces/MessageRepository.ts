import {Conversation} from '../../use-cases/listConversationsUseCase/types';
import {CreateMessageReqBody} from '../../use-cases/createMessageUseCase/types';

export interface MessageRepository {
  listMessagesByConversationId: (
    conversationId: Conversation['id'],
  ) => Promise<any>;

  createMessage: (data: CreateMessageReqBody) => Promise<any>;
}
