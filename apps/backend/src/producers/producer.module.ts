import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';
import { ProducerRepository } from './producer.repository';

@Module({
  controllers: [ProducerController],
  providers: [ProducerService, ProducerRepository],
})
export class ProducerModule {}
