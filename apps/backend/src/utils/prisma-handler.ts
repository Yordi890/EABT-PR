import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '../../generated/prisma/internal/prismaNamespace.js';

import {
  InternalServerErrorException,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

/**
 * Función centralizada para manejar errores de Prisma
 */
export default function handlePrismaError(error: any): never {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint failed
        throw new ConflictException('A record with a duplicate unique value already exists');
      case 'P2025': // Record not found
        throw new NotFoundException('The requested record does not exist');
      default:
        throw new BadRequestException(`Database error: ${error.message}`);
    }
  }

  if (error instanceof PrismaClientValidationError) {
    throw new BadRequestException('Validation error in the query');
  }

  throw new InternalServerErrorException('An unexpected database error occurred');
}
