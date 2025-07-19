import { Test, TestingModule } from '@nestjs/testing';
import { ProductionUnitService } from '../../src/production-unit/productionUnit.service';
import { ProductionUnitRepository } from '../../src/production-unit/productionUnit.repository';
import { ProductionUnitDto } from '../../src/production-unit/dto/productionUnit.dto';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { ProductionUnitModel } from '../../generated/prisma/models/ProductionUnit';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

describe('ProductionUnitService', () => {
  let productionUnitService: ProductionUnitService;
  let productionUnitRepository: ProductionUnitRepository;

  const mockProductionUnitRepository = {
    retrieveAllProductionUnit: jest.fn(),
    insertProductionUnit: jest.fn(),
    saveProductionUnit: jest.fn(),
    removeProductionUnit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductionUnitService,
        {
          provide: ProductionUnitRepository,
          useValue: mockProductionUnitRepository,
        },
      ],
    }).compile();

    productionUnitService = module.get<ProductionUnitService>(
      ProductionUnitService,
    );
    productionUnitRepository = module.get<ProductionUnitRepository>(
      ProductionUnitRepository,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('listAllProductionUnits', () => {
    it('should return an array of production units', async () => {
      const result: ProductionUnitModel[] = [
        {
          id: 1,
          name: 'Ceferino Lopez',
          address: 'Calle 5ta #8',
        },
      ];
      mockProductionUnitRepository.retrieveAllProductionUnit.mockResolvedValue(
        result,
      );

      expect(await productionUnitService.listAllProductionUnit()).toEqual(
        result,
      );
      expect(
        mockProductionUnitRepository.retrieveAllProductionUnit,
      ).toHaveBeenCalled();
    });
  });

  describe('addProductionUnit', () => {
    it('should add a production unit', async () => {
      const productionUnitDto: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };

      await productionUnitService.addProductionUnit(productionUnitDto);
      expect(
        mockProductionUnitRepository.insertProductionUnit,
      ).toHaveBeenCalledWith(productionUnitDto);
    });

    it('should throw ConflictException if production unit already exists', async () => {
      const productionUnitDto: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };
      mockProductionUnitRepository.insertProductionUnit.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2002',
          clientVersion: '6.10.0',
        }),
      );

      await expect(
        productionUnitService.addProductionUnit(productionUnitDto),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('modifyProductionUnit', () => {
    it('should modify a production unit', async () => {
      const name = 'Production Unit 1';
      const newProductionUnit: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };

      await productionUnitService.modifyProductionUnit(name, newProductionUnit);
      expect(
        mockProductionUnitRepository.saveProductionUnit,
      ).toHaveBeenCalledWith(name, newProductionUnit);
    });

    it('should throw NotFoundException if production unit does not exist', async () => {
      const name = 'Production Unit 1';
      const newProductionUnit: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };
      mockProductionUnitRepository.saveProductionUnit.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2025',
          clientVersion: '6.10.0',
        }),
      );

      await expect(
        productionUnitService.modifyProductionUnit(name, newProductionUnit),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('deleteProductionUnit', () => {
    it('should delete a production unit', async () => {
      const name = 'Augusto Lopez';
      mockProductionUnitRepository.removeProductionUnit.mockResolvedValue(
        undefined,
      );

      await productionUnitService.deleteProductionUnit(name);
      expect(
        mockProductionUnitRepository.removeProductionUnit,
      ).toHaveBeenCalledWith(name);
    });

    it('should throw NotFoundException if production unit does not exist', async () => {
      const name = 'Augusto Lopez';

      mockProductionUnitRepository.removeProductionUnit.mockRejectedValue(
        new PrismaClientKnownRequestError('Not found', {
          code: 'P2025',
          clientVersion: '6.10.0',
        }),
      );

      await expect(
        productionUnitService.deleteProductionUnit(name),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
