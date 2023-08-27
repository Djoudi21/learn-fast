export type Message = {
  author: string;
  content: string;
};

export type Conversation = {
  messages?: Message[];
};

export type CreatedConversationResponse = Conversation & {
  id: number;
};
