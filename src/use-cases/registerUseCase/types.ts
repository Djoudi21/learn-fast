export type CreatedUserResponse = {
  status: 201;
  data: {
    email: string;
    id: number;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
};
export type ErrorResponse = {
  data: {
    error: string;
    tokens: null;
  };
};
