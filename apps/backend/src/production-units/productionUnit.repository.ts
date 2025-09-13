import { Injectable } from '@nestjs/common';
import { ProductionUnitModel } from '../../generated/prisma/models/ProductionUnit';
import { ProductionUnitDto } from './dto/productionUnit.dto';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class ProductionUnitRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveAllProductionUnit(): Promise<ProductionUnitModel[]> {
    return this.prisma.productionUnit.findMany();
  }

  async insertProductionUnit(
    productionUnit: ProductionUnitDto,
  ): Promise<ProductionUnitModel> {
    return this.prisma.productionUnit.create({
      data: productionUnit,
    });
  }

  async saveProductionUnit(
    name: string,
    newProductionUnit: ProductionUnitDto,
  ): Promise<void> {
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
