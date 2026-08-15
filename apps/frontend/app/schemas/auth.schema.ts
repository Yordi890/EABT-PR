import { z } from "zod";

export const loginResponseSchema = z.object({
  access_token: z.string(),
  user: z.object({
    id: z.string(),
    userName: z.string(),
  }),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;
