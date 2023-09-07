export type Credentials = {password: string; email: string};

export type LoggedUserResponse = {
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
