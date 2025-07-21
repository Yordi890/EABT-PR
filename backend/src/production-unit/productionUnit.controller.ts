import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { ProductionUnitService } from './productionUnit.service';
import { ProductionUnitDto } from './dto/productionUnit.dto';
import { ProductionUnitModel } from '../../generated/prisma/models/ProductionUnit';

@Controller('productionUnit')
export class ProductionUnitController {
  constructor(private readonly productionUnitService: ProductionUnitService) {}

  @Get()
  async getAllProductionUnits(): Promise<ProductionUnitModel[]> {
    return await this.productionUnitService.listAllProductionUnit();
  }

  @Post()
  @HttpCode(201)
  async createProductionUnit(
    @Body() productionUnit: ProductionUnitDto,
  ): Promise<void> {
    await this.productionUnitService.addProductionUnit(productionUnit);
  }

  @Put(':name')
  @HttpCode(204)
  async updateProductionUnit(
    @Param('name') name: string,
    @Body() newProductionUnit: ProductionUnitDto,
  ): Promise<void> {
    await this.productionUnitService.modifyProductionUnit(
      name,
      newProductionUnit,
    );
  }

  @Delete(':name')
  @HttpCode(204)
  async deleteProductionUnit(@Param('name') name: string): Promise<void> {
    await this.productionUnitService.deleteProductionUnit(name);
  }
}
