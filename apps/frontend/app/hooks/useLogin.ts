import { useMutation } from "@tanstack/react-query";
import { login } from "../services/auth.api";
import type { LoginResponse } from "../schemas/auth.schema";

export const useLogin = (
  onSuccess: (data: LoginResponse) => Promise<void>,
  onError: (msg: string) => void,
) => {
  return useMutation({
    mutationFn: login,

    onSuccess: async (data) => {
      await onSuccess(data);
    },

    onError: (err: Error) => {
      onError(err.message);
    },
  });
};
