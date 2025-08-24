import { Injectable } from '@nestjs/common';
import { Supply as SupplyModel } from '@repo/db';
import { SupplyDto } from './dto/supply.dto';
import { PrismaClient } from '@repo/db';

@Injectable()
export class SupplyRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveAllSupply(): Promise<SupplyModel[]> {
    return this.prisma.supply.findMany();
  }

  async insertSupply(supply: SupplyDto): Promise<SupplyModel> {
    return this.prisma.supply.create({
      data: supply,
    });
  }

  async saveSupply(name: string, newSupply: SupplyDto): Promise<void> {
    await this.prisma.supply.update({
      data: newSupply,
      where: {
        name: name,
      },
    });
  }

  async removeSupply(name: string): Promise<void> {
    await this.prisma.supply.delete({
      where: {
        name: name,
      },
    });
  }
}
