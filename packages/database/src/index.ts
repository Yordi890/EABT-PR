import { PrismaClient } from "../generated/prisma/client";

export { PrismaClient } from "../generated/prisma/client";
export * from "../generated/prisma/models";
export * from "../generated/prisma/client";
export * from "../generated/prisma/enums";
export const prismaClient = new PrismaClient();
