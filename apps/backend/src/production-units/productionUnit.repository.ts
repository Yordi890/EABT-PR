import { Injectable } from '@nestjs/common';
import { ProductionUnit as ProductionUnitModel } from '@repo/db';
import { ProductionUnitDto } from './dto/productionUnit.dto';
import { PrismaClient } from '@repo/db';

@Injectable()
export class ProductionUnitRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveAllProductionUnit(): Promise<ProductionUnitModel[]> {
    return this.prisma.productionUnit.findMany();
  }

  async insertProductionUnit(productionUnit: ProductionUnitDto): Promise<ProductionUnitModel> {
    return this.prisma.productionUnit.create({
      data: productionUnit,
    });
  }

  async saveProductionUnit(name: string, newProductionUnit: ProductionUnitDto): Promise<void> {
    await this.prisma.productionUnit.update({
      data: newProductionUnit,
      where: {
        name: name,
      },
    });
  }

  async removeProductionUnit(name: string): Promise<void> {
    await this.prisma.productionUnit.delete({
      where: {
        name: name,
      },
    });
  }
}
