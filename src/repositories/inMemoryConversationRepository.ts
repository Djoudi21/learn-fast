import {ConversationRepository} from './interfaces/ConversationRepository';
import {
  Conversation,
  CreatedConversationResponse,
} from '../use-cases/createConversationUseCase/types';
import {User} from '../types';

export class inMemoryConversationRepository implements ConversationRepository {
  conversations: Conversation[] = [];

  createConversation(): Promise<CreatedConversationResponse> {
    const newConversation = {
      id: 1,
      participants: [
        {
          id: 1,
          email: '',
        },
      ],
    };
    this.conversations.push(newConversation);

    const response = {
      data: {
        conversations: this.conversations,
      },
    };

    return Promise.resolve(response);
  }

  listConversationsByUserId(
    userId: User['id'],
  ): Promise<CreatedConversationResponse> {
    const conversations = [
      {
        id: 1,
        participants: [
          {
            id: userId,
            email: '',
          },
        ],
      },
    ];
    const response = {
      data: {
        conversations,
      },
    };
    return Promise.resolve(response);
  }
}
