import { Test, TestingModule } from '@nestjs/testing';
import { ProductionUnitModule } from '../../src/production-unit/productionUnit.module';
import { ProductionUnitController } from '../../src/production-unit/productionUnit.controller';
import { ProductionUnitService } from '../../src/production-unit/productionUnit.service';
import { ProductionUnitRepository } from '../../src/production-unit/productionUnit.repository';
import { PrismaModule } from '../../src/prisma/prisma.module';

describe('ProductionUnitModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ProductionUnitModule, PrismaModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should contain the ProductionUnitController', () => {
    const productionUnitController = module.get<ProductionUnitController>(
      ProductionUnitController,
    );
    expect(productionUnitController).toBeDefined();
  });

  it('should contain the ProductionUnitService', () => {
    expect(
      module.get<ProductionUnitService>(ProductionUnitService),
    ).toBeDefined();
  });

  it('should contain the ProductionUnitRepository', () => {
    expect(
      module.get<ProductionUnitRepository>(ProductionUnitRepository),
    ).toBeDefined();
  });
});
