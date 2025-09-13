import { Module } from '@nestjs/common';
import { SupplyService } from './supply.service';
import { SupplyController } from './supply.controller';
import { SupplyRepository } from './supply.repository';

@Module({
  controllers: [SupplyController],
  providers: [SupplyService, SupplyRepository],
})
export class SupplyModule {}
