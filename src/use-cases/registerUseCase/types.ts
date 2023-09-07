export type CreatedUserResponse = {
  status: number;
  data: {
    email: string;
    id: string;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
};

export type AxiosErrorResponse = {
  status: number;
  message: string;
};
