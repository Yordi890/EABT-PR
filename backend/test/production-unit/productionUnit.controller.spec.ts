import { Test, TestingModule } from '@nestjs/testing';
import { ProductionUnitController } from '../../src/production-unit/productionUnit.controller';
import { ProductionUnitService } from '../../src/production-unit/productionUnit.service';
import { ProductionUnitDto } from '../../src/production-unit/dto/productionUnit.dto';
import { ProductionUnitModel } from '../../generated/prisma/models/ProductionUnit';

describe('ProductionUnitController', () => {
  let productionUnitController: ProductionUnitController;
  let productionUnitService: ProductionUnitService;

  const mockProductionService = {
    listAllProductionUnit: jest.fn(),
    addProductionUnit: jest.fn(),
    modifyProductionUnit: jest.fn(),
    deleteProductionUnit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductionUnitController,
        { provide: ProductionUnitService, useValue: mockProductionService },
      ],
    }).compile();

    productionUnitController = module.get<ProductionUnitController>(
      ProductionUnitController,
    );
    productionUnitService = module.get<ProductionUnitService>(
      ProductionUnitService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllProductionUnits', () => {
    it('should return an array of production unit', async () => {
      const result: ProductionUnitModel[] = [
        { id: 1, name: 'Ceferino Lopez', address: 'Calle 5ta #8' },
      ];
      mockProductionService.listAllProductionUnit.mockResolvedValue(result);

      expect(await productionUnitController.getAllProductionUnits()).toEqual(
        result,
      );
      expect(mockProductionService.listAllProductionUnit).toHaveBeenCalled();
    });
  });

  describe('createProductionUnit', () => {
    it('should create a production unit', async () => {
      const productionUnit: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };

      await productionUnitController.createProductionUnit(productionUnit);
      expect(mockProductionService.addProductionUnit).toHaveBeenCalledWith(
        productionUnit,
      );
    });
  });

  describe('updateProductionUnit', () => {
    it('should update a production unit', async () => {
      const name: string = 'Augusto Lopez';
      const newProductionUnit: ProductionUnitDto = {
        name: 'Ceferino Lopez',
        address: 'Calle 5ta #8',
      };

      await productionUnitController.updateProductionUnit(
        name,
        newProductionUnit,
      );
      expect(mockProductionService.modifyProductionUnit).toHaveBeenCalledWith(
        name,
        newProductionUnit,
      );
    });
  });

  describe('deleteProductionUnit', () => {
    it('should delete a production unit', async () => {
      const name: string = 'Augusto Lopez';

      await productionUnitController.deleteProductionUnit(name);
      expect(mockProductionService.deleteProductionUnit).toHaveBeenCalledWith(
        name,
      );
    });
  });
});
