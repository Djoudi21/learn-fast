import {User} from '../../types';

export type Message = {
  author: string;
  content: string;
};

export type Participant = User;

export type Conversation = {
  id: string | number;
  participants: Participant[];
};

export type CreatedConversationResponse = {
  data: {
    conversations: Conversation[];
  };
};
