import { Test, TestingModule } from '@nestjs/testing';
import { SupplyController } from '../../src/supply/supply.controller';
import { SupplyService } from '../../src/supply/supply.service';
import { SupplyModel } from '../../generated/prisma/models/Supply';
import { SupplyDto } from '../../src/supply/dto/supply.dto';

describe('SupplyController', () => {
  let supplyController: SupplyController;
  let supplyService: SupplyService;

  const mockSupplyService = {
    listAllSupply: jest.fn(),
    addSupply: jest.fn(),
    modifySupply: jest.fn(),
    deleteSupply: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SupplyController,
        { provide: SupplyService, useValue: mockSupplyService },
      ],
    }).compile();

    supplyController = module.get<SupplyController>(SupplyController);
    supplyService = module.get<SupplyService>(SupplyService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllSupply', () => {
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

      mockSupplyService.listAllSupply.mockResolvedValue(result);

      expect(await supplyController.getAllSupply()).toEqual(result);
      expect(mockSupplyService.listAllSupply).toHaveBeenCalled();
    });
  });

  describe('createSupply', () => {
    it('should create a supply', async () => {
      const supply: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      await supplyController.createSupply(supply);
      expect(mockSupplyService.addSupply).toHaveBeenCalledWith(supply);
    });
  });

  describe('updateSupply', () => {
    it('should update a supply', async () => {
      const name: string = 'Supply 1';
      const newSupply: SupplyDto = {
        name: 'abono',
        quantity: 3,
        unit: 'kg',
        price: 20.0,
      };

      await supplyController.updateSupply(name, newSupply);
      expect(mockSupplyService.modifySupply).toHaveBeenCalledWith(
        name,
        newSupply,
      );
    });
  });

  describe('deleteSupply', () => {
    it('should delete a supply', async () => {
      const name: string = 'abono';

      await supplyController.deleteSupply(name);
      expect(mockSupplyService.deleteSupply).toHaveBeenCalledWith(name);
    });
  });
});
