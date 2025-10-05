import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '../generated/prisma/internal/prismaNamespace.js';
import handlePrismaError from '../src/utils/prisma-handler.js';
import {
  ConflictException,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

describe('handlePrismaError', () => {
  it('should throw ConflictException for P2002 error code', () => {
    const error = new PrismaClientKnownRequestError('Already exists', {
      code: 'P2002',
      clientVersion: '2.0.0',
    });

    expect(() => handlePrismaError(error)).toThrow(ConflictException);
    expect(() => handlePrismaError(error)).toThrow(
      'A record with a duplicate unique value already exists',
    );
  });

  it('should throw NotFoundException for P2025 error code', () => {
    const error = new PrismaClientKnownRequestError('Does not exist', {
      code: 'P2025',
      clientVersion: '2.0.0',
    });

    expect(() => handlePrismaError(error)).toThrow(NotFoundException);
    expect(() => handlePrismaError(error)).toThrow('The requested record does not exist');
  });

  it('should throw BadRequestException for other Prisma known errors', () => {
    const error = new PrismaClientKnownRequestError('Some other error', {
      code: 'P9999',
      clientVersion: '2.0.0',
    });

    expect(() => handlePrismaError(error)).toThrow(BadRequestException);
    expect(() => handlePrismaError(error)).toThrow('Database error: Some other error');
  });

  it('should throw BadRequestException for Prisma validation error', () => {
    const error = new PrismaClientValidationError('Validation failed', { clientVersion: '2.0.0' });

    expect(() => handlePrismaError(error)).toThrow(BadRequestException);
    expect(() => handlePrismaError(error)).toThrow('Validation error in the query');
  });

  it('should throw InternalServerErrorException for non-Prisma errors', () => {
    const error = new Error('Random unexpected error');

    expect(() => handlePrismaError(error)).toThrow(InternalServerErrorException);
    expect(() => handlePrismaError(error)).toThrow('An unexpected database error occurred');
  });
});
