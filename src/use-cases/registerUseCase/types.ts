export type CreatedUserResponse = {
  status: number;
  data: {
    email: string;
    id: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type AxiosErrorResponse = {
  status: number;
  message: string;
};
