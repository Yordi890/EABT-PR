import { Module } from '@nestjs/common';
import { GenericModule } from '../generic-crud/generic.module.js';
import { SupplyDto } from './dto/supply.dto.js';

@Module({
  imports: [
    GenericModule.forRoot({
      name: 'supply',
      routePrefix: 'supplies',
      idFieldName: 'name',
      modelName: 'supply',
      dto: SupplyDto,
    }),
  ],
})
export class SupplyModule {}
