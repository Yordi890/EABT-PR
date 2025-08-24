"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.SupplyContractScalarFieldEnum = exports.ContractScalarFieldEnum = exports.SupplyScalarFieldEnum = exports.LandFileScalarFieldEnum = exports.ProducerScalarFieldEnum = exports.ProductionUnitScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = exports.validator = void 0;
const runtime = __importStar(require("@prisma/client/runtime/library"));
exports.validator = runtime.Public.validator;
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "6.14.0",
    engine: "717184b7b35ea05dfa71a3236b7af656013e1e49"
};
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    ProductionUnit: 'ProductionUnit',
    Producer: 'Producer',
    LandFile: 'LandFile',
    Supply: 'Supply',
    Contract: 'Contract',
    SupplyContract: 'SupplyContract'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    identityCard: 'identityCard',
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    password: 'password'
};
exports.ProductionUnitScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address: 'address'
};
exports.ProducerScalarFieldEnum = {
    id: 'id',
    dni: 'dni',
    code: 'code',
    firstName: 'firstName',
    lastName1: 'lastName1',
    lastName2: 'lastName2',
    phone: 'phone',
    productionUnitName: 'productionUnitName',
    cupCard: 'cupCard',
    mlcCard: 'mlcCard'
};
exports.LandFileScalarFieldEnum = {
    id: 'id',
    producerdni: 'producerdni',
    fileNumber: 'fileNumber',
    area: 'area',
    propertyType: 'propertyType',
    issueDate: 'issueDate',
    expirationDate: 'expirationDate'
};
exports.SupplyScalarFieldEnum = {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    price: 'price'
};
exports.ContractScalarFieldEnum = {
    id: 'id',
    number: 'number',
    creationDate: 'creationDate',
    producerId: 'producerId',
    plantingArea: 'plantingArea',
    seedlingQuantity: 'seedlingQuantity',
    plantingType: 'plantingType',
    tobaccoType: 'tobaccoType'
};
exports.SupplyContractScalarFieldEnum = {
    id: 'id',
    contractId: 'contractId',
    supplyId: 'supplyId',
    quantdatety: 'quantdatety'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map