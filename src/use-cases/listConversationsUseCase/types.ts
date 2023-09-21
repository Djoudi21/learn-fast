export type Conversation = {
  id: string | number;
  participants: Participant[];
};

type Participant = {
  id: string;
  email: string;
};
