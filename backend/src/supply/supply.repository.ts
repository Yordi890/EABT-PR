import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupplyModel} from '../../generated/prisma/models/Supply';
import { SupplyDto } from './dto/supply.dto';

@Injectable()
export class SupplyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async retrieveAllSupply(): Promise<SupplyModel[]> {
    return this.prismaService.supply.findMany();
  }

  async insertSupply(supply: SupplyDto): Promise<void> {
    await this.prismaService.supply.create({
      data: supply,
    });
  }

  async saveSupply(name: string, newSupply: SupplyDto): Promise<void> {
    await this.prismaService.supply.update({
      data: newSupply,
      where: {
        name: name,
      },
    });
  }

  async removeSupply(name: string): Promise<void> {
    await this.prismaService.supply.delete({
      where: {
        name: name,
      },
    });
  }
}
