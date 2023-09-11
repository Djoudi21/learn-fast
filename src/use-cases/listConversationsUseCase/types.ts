export type Conversation = {
  id: string;
  participants: Participant[];
};

type Participant = {
  id: string;
  email: string;
};
