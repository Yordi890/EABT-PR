import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library'
import {ConflictException, NotFoundException} from "@nestjs/common";

export default function prismaHandler(error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P2002' :
                throw new ConflictException("Already exist");
            case 'P2003' :
                throw new ConflictException("Can't delete it"); //TODO ver cual sera la excepcion correcta
            case 'P2025':
                throw new NotFoundException("Doesn't exist");
            default:
                throw new Error(`A database error occurred ${error.message}`);
        }
    }
    // TODO Lo del error del validation error
    throw error;
}