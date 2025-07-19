import { Test, TestingModule } from '@nestjs/testing';
import { SupplyService } from '../../src/supply/supply.service';
import { SupplyRepository } from '../../src/supply/supply.repository';
import { SupplyDto } from '../../src/supply/dto/supply.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { SupplyModel } from '../../generated/prisma/models/Supply';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

describe('SupplyService', () => {
  let supplyService: SupplyService;
  let supplyRepository: SupplyRepository;

  const mockSupplyRepository = {
    retrieveAllSupply: jest.fn(),
    insertSupply: jest.fn(),
    saveSupply: jest.fn(),
    removeSupply: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SupplyService,
        { provide: SupplyRepository, useValue: mockSupplyRepository },
      ],
    }).compile();

    supplyService = module.get<SupplyService>(SupplyService);
    supplyRepository = module.get<SupplyRepository>(SupplyRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('listAllSupply', () => {
    it('should return an array of supplies', async () => {
      const result: SupplyModel[] = [
        {
          id: 1,
          name: 'abono',
          quantity: 3,
          unit: 'kg',
          price: 20.0,
        },
      ];
      mockSupplyRepository.retrieveAllSupply.mockResolvedValue(result);

      expect(await supplyService.listAllSupply()).toEqual(result);
      expect(mockSupplyRepository.retrieveAllSupply).toHaveBeenCalled();
    });
  });

  describe('addSupply', () => {
    it('should add a supply', async () => {
      const supplyDto: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      await supplyService.addSupply(supplyDto);
      expect(mockSupplyRepository.insertSupply).toHaveBeenCalledWith(supplyDto);
    });

    it('should throw ConflictException if supply already exists', async () => {
      const supplyDto: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      mockSupplyRepository.insertSupply.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2002',
          clientVersion: '6.10.0',
        }),
      );

      await expect(supplyService.addSupply(supplyDto)).rejects.toThrow(
        ConflictException,
      );
    });
  });

  describe('modifySupply', () => {
    it('should modify a supply', async () => {
      const name = 'pesticida';
      const newSupply: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      await supplyService.modifySupply(name, newSupply);
      expect(mockSupplyRepository.saveSupply).toHaveBeenCalledWith(
        name,
        newSupply,
      );
    });

    it('should throw NotFoundException if supply does not exist', async () => {
      const name = 'pesticida';
      const newSupply: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      mockSupplyRepository.saveSupply.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2025',
          clientVersion: '6.10.0',
        }),
      );

      await expect(supplyService.modifySupply(name, newSupply)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('deleteSupply', () => {
    it('should delete a supply', async () => {
      const name = 'abono';
      mockSupplyRepository.removeSupply.mockResolvedValue(undefined);

      await supplyService.deleteSupply(name);
      expect(mockSupplyRepository.removeSupply).toHaveBeenCalledWith(name);
    });

    it('should throw NotFoundException if supply does not exist', async () => {
      const name = 'abono';

      mockSupplyRepository.removeSupply.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2025',
          clientVersion: '6.10.0',
        }),
      );

      await expect(supplyService.deleteSupply(name)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
