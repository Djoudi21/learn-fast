import {User} from '../../types';
import {Conversation} from '../listConversationsUseCase/types';

export type CreateMessageReqBody = {
  userId: User['id'];
  userInput: string;
  conversationId: Conversation['id'];
};
