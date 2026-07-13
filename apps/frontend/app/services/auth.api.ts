import { client } from "./client";
import { loginResponseSchema, type LoginResponse } from "../schemas/auth.schema";

type LoginCredentials = {
  username: string;
  password: string;
};

export async function login(data: LoginCredentials): Promise<LoginResponse> {
  const json = await client<unknown>("http://localhost:3005/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      userName: data.username,
      password: data.password,
    }),
  });

  return loginResponseSchema.parse(json);
}
