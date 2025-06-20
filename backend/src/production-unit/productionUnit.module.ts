import { Module } from '@nestjs/common';
import { ProductionUnitService } from './productionUnit.service';
import { ProductionUnitController } from './productionUnit.controller';
import { ProductionUnitRepository } from './productionUnit.repository';

@Module({
  controllers: [ProductionUnitController],
  providers: [ProductionUnitService, ProductionUnitRepository],
})
export class ProductionUnitModule {}
