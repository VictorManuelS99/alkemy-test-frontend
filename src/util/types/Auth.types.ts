export type AuthUser = {
  email: string;
  password: string;
};

export type AuthResponse = {
  data: { token: string };
};
