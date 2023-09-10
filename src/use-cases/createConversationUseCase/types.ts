export type Message = {
  author: string;
  content: string;
};

export type Conversation = {};

export type CreatedConversationResponse = {
  data: {
    conversations: Conversation[];
  };
};
