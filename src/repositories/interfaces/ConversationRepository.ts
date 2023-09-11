import {
  Conversation,
  CreatedConversationResponse,
} from '../../use-cases/createConversationUseCase/types';
import {User} from '../../types';

export interface ConversationRepository {
  conversations: Conversation[];
  createConversation: () => Promise<CreatedConversationResponse>;
  listConversationsByUserId: (
    userId: User['id'],
  ) => Promise<CreatedConversationResponse>;
}
