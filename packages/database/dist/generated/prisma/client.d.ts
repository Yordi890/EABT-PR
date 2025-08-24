/**
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model ProductionUnit
 *
 */
export type ProductionUnit = Prisma.ProductionUnitModel;
/**
 * Model Producer
 *
 */
export type Producer = Prisma.ProducerModel;
/**
 * Model LandFile
 *
 */
export type LandFile = Prisma.LandFileModel;
/**
 * Model Supply
 *
 */
export type Supply = Prisma.SupplyModel;
/**
 * Model Contract
 *
 */
export type Contract = Prisma.ContractModel;
/**
 * Model SupplyContract
 *
 */
export type SupplyContract = Prisma.SupplyContractModel;
//# sourceMappingURL=client.d.ts.map