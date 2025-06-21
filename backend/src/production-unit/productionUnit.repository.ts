import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductionUnit as ProductionUnitType } from '../../generated/prisma';
import { ProductionUnitDto } from './dto/productionUnit.dto';

@Injectable()
export class ProductionUnitRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async retrieveAllProductionUnit(): Promise<ProductionUnitType[]> {
    return await this.prismaService.productionUnit.findMany();
  }

  async insertProductionUnit(productionUnit: ProductionUnitDto): Promise<void> {
    await this.prismaService.productionUnit.create({ data: productionUnit });
  }

  async saveProductionUnit(
    name: string,
    newProductionUnit: ProductionUnitDto,
  ): Promise<void> {
    await this.prismaService.productionUnit.update({
      data: newProductionUnit,
      where: {
        name: name,
      },
    });
  }

  async removeProductionUnit(name: string): Promise<void> {
    await this.prismaService.productionUnit.delete({
      where: {
        name: name,
      },
    });
  }
}
