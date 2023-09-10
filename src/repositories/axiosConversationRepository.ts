import axios from 'axios';
import {ConversationRepository} from './interfaces/ConversationRepository';

export class AxiosConversationRepository implements ConversationRepository {
  conversations: any = [];

  async createConversation(): Promise<any> {
    try {
      const response = await axios.post('http://127.0.0.1:3000/conversations');

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async listConversationsByUserId(userId: User['id']): Promise<any> {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/users/${userId}/conversations`,
      );

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
