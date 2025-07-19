import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProducerModel } from '../../generated/prisma/models/Producer';
import { ProducerDto } from './dto/producer.dto';

@Injectable()
export class ProducerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async retrieveAllProducers(): Promise<ProducerModel[]> {
    return this.prismaService.producer.findMany();
  }

  async insertProducer(producer: ProducerDto): Promise<void> {
    await this.prismaService.producer.create({ data: producer });
  }

  async saveProducer(dni: string, newProducer: ProducerDto): Promise<void> {
    await this.prismaService.producer.update({
      data: newProducer,
      where: {
        dni: dni,
      },
    });
  }

  async removeProducer(dni: string): Promise<void> {
    await this.prismaService.producer.delete({
      where: {
        dni: dni,
      },
    });
  }
}
