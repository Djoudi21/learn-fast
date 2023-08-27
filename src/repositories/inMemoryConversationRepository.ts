import {ConversationRepository} from './interfaces/ConversationRepository';
import {
  Conversation,
  CreatedConversationResponse,
} from '../use-cases/createConversationUseCase/types';

export class inMemoryConversationRepository implements ConversationRepository {
  conversations: Conversation[] = [];

  createConversation(): Promise<CreatedConversationResponse> {
    const newConversation = {
      id: 1,
      messages: [],
    };

    this.conversations.push(newConversation);
    return Promise.resolve(newConversation);
  }
}
