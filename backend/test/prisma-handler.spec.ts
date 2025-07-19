import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prismaHandler from '../src/utils/prisma-handler';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('prismaHandler', () => {
  it('should throw ConflictException with the correct message for P2002 error code', () => {
    const error = new PrismaClientKnownRequestError('Already exists', {
      code: 'P2002',
      clientVersion: '2.0.0',
    });

    expect(() => prismaHandler(error)).toThrowError(
      new ConflictException('Already exist'),
    );
  });

  it('should throw NotFoundException with the correct message for P2025 error code', () => {
    const error = new PrismaClientKnownRequestError("Doesn't exist", {
      code: 'P2025',
      clientVersion: '2.0.0',
    });

    expect(() => prismaHandler(error)).toThrowError(
      new NotFoundException("Doesn't exist"),
    );
  });

  it('should throw a generic error for other error codes', () => {
    const error = new PrismaClientKnownRequestError('Some other error', {
      code: 'P9999',
      clientVersion: '2.0.0',
    });

    expect(() => prismaHandler(error)).toThrowError(
      new Error('A database error occurred Some other error'),
    );
  });

  it('should throw the original error if it is not a PrismaClientKnownRequestError', () => {
    const error = new Error('Some unexpected error');

    expect(() => prismaHandler(error)).toThrowError(error);
  });
});
