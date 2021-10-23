import axios from "../axios/axios";
import { AuthResponse } from "../types/Auth.types";

type AuthProps = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: AuthProps) => {
  const { data } = await axios.post<AuthProps, AuthResponse>("/", {
    email,
    password,
  });

  return data;
};
