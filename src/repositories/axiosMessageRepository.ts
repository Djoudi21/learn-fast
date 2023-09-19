import {MessageRepository} from './interfaces/MessageRepository';
import {Conversation} from '../use-cases/listConversationsUseCase/types';
import axios from 'axios';

export class AxiosMessageRepository implements MessageRepository {
  async listMessagesByConversationId(
    conversationId: Conversation['id'],
  ): Promise<any> {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/conversations/${conversationId}/messages`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return Promise.resolve(undefined);
  }
}
