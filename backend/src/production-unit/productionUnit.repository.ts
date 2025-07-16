import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {ProductionUnitModel} from '../../generated/prisma/models/ProductionUnit';
import { ProductionUnitDto } from './dto/productionUnit.dto';

@Injectable()
export class ProductionUnitRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async retrieveAllProductionUnit(): Promise<ProductionUnitModel[]> {
    return await this.prismaService.productionUnit.findMany();
  }

  async insertProductionUnit(productionUnit: ProductionUnitDto): Promise<ProductionUnitModel> {
    return await this.prismaService.productionUnit.create({ data: productionUnit });
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
