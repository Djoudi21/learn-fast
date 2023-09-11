export type CreatedUserResponse = {
  status: number;
  data: {
    email: string;
    id: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type RequestErrorResponse = {
  status: number;
  message: string;
};
