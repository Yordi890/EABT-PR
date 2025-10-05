import { Test, TestingModule } from '@nestjs/testing';
import { jest } from '@jest/globals';
import { GenericService } from '../../src/generic-crud/generic.service.js';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { LoggerService } from '../../src/logger/logger.service.js';

describe('GenericService', () => {
  let service: GenericService<any, any, string>;
  let repositoryMock: any;

  const fakeLogger: LoggerService = {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  } as unknown as LoggerService;

  beforeEach(async () => {
    repositoryMock = {
      findAll: jest.fn(),
      findByField: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      updateById: jest.fn(),
      deleteById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: GenericService,
          useFactory: () => new GenericService(repositoryMock, fakeLogger),
        },
      ],
    }).compile();

    service = module.get<GenericService<any, any, string>>(GenericService);
    jest.clearAllMocks();
  });

  // ========================= listAll =========================
  describe('listAll', () => {
    it('should return all items', async () => {
      const items = [{ id: 1 }, { id: 2 }];
      repositoryMock.findAll.mockResolvedValue(items);

      const result = await service.listAll();
      expect(result).toEqual(items);
    });

    it('should throw error if findAll fails', async () => {
      const error = new InternalServerErrorException();
      repositoryMock.findAll.mockRejectedValueOnce(error);

      await expect(service.listAll()).rejects.toThrow(InternalServerErrorException);
    });
  });

  // ========================= findByField =========================
  describe('findByField', () => {
    it('should return the correct item', async () => {
      const item = { id: 1 };
      repositoryMock.findByField.mockResolvedValue(item);

      const result = await service.findByField('name', 'Test');
      expect(result).toEqual(item);
    });

    it('should throw error if findByField fails', async () => {
      const error = new InternalServerErrorException();
      repositoryMock.findByField.mockRejectedValueOnce(error);

      await expect(service.findByField('name', 'Test')).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  // ========================= getById =========================
  describe('getById', () => {
    it('should return the item by id', async () => {
      const item = { id: '123' };
      repositoryMock.findById.mockResolvedValue(item);

      const result = await service.getById('123');
      expect(result).toEqual(item);
    });

    it('should throw NotFoundException if item not found', async () => {
      repositoryMock.findById.mockResolvedValue(null);

      await expect(service.getById('123')).rejects.toThrow(NotFoundException);
    });

    it('should throw error if repository fails', async () => {
      const error = new InternalServerErrorException();
      repositoryMock.findById.mockRejectedValueOnce(error);

      await expect(service.getById('123')).rejects.toThrow(InternalServerErrorException);
    });
  });

  // ========================= update =========================
  describe('update', () => {
    it('should update an item successfully', async () => {
      const updated = { id: '123', name: 'Updated' };
      repositoryMock.updateById.mockResolvedValue(updated);

      const result = await service.update('123', { name: 'Updated' });
      expect(result).toEqual(updated);
      expect(repositoryMock.updateById).toHaveBeenCalledWith('123', { name: 'Updated' });
    });

    it('should throw error if update fails', async () => {
      const error = new InternalServerErrorException();
      repositoryMock.updateById.mockRejectedValueOnce(error);

      await expect(service.update('123', { name: 'Updated' })).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });

  // ========================= delete =========================
  describe('delete', () => {
    it('should delete an item successfully', async () => {
      repositoryMock.deleteById.mockResolvedValue(undefined);

      await service.delete('123');
      expect(repositoryMock.deleteById).toHaveBeenCalledWith('123');
    });

    it('should throw error if delete fails', async () => {
      const error = new InternalServerErrorException();
      repositoryMock.deleteById.mockRejectedValueOnce(error);

      await expect(service.delete('123')).rejects.toThrow(InternalServerErrorException);
    });
  });
});
