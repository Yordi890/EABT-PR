// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";

interface LoginCredentials {
  username: string;
  password: string;
}

interface BackendResponse {
  access_token: string;
  user: { id: string; userName: string };
}

export const useLogin = (
  onSuccess: (data: BackendResponse) => void,
  onError: (msg: string) => void,
) => {
  return useMutation({
    mutationFn: async (data: LoginCredentials) => {
      const res = await fetch("http://localhost:3005/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: data.username,
          password: data.password,
        }),
      });

      if (!res.ok) throw new Error("Usuario o contraseña incorrectos");

      return await res.json();
    },
    onSuccess,
    onError: (err: any) => {
      onError(err.message);
    },
  });
};
