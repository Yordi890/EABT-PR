import { Injectable } from '@nestjs/common';
import { ProducerModel } from '../../generated/prisma/models/Producer';
import { ProducerDto } from './dto/producer.dto';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class ProducerRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveAllProducers(): Promise<ProducerModel[]> {
    return this.prisma.producer.findMany();
  }

  async insertProducer(producer: ProducerDto): Promise<void> {
    await this.prisma.producer.create({ data: producer });
  }

  async saveProducer(dni: string, newProducer: ProducerDto): Promise<void> {
    await this.prisma.producer.update({
      data: newProducer,
      where: {
        dni: dni,
      },
    });
  }

  async removeProducer(dni: string): Promise<void> {
    await this.prisma.producer.delete({
      where: {
        dni: dni,
      },
    });
  }
}
