import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductionUnitService } from './productionUnit.service';

@Controller('productionUnit')
export class ProductionUnitController {
  constructor(private readonly productionUnitService: ProductionUnitService) {}

  @Get()
  async getAllProductionUnits() {
    return this.productionUnitService.listAllProductionUnit();
  }

  @Post()
  async createProductionUnit(@Body() body) {
    return this.productionUnitService.addProductionUnit(body);
  }

  @Put(':name')
  async updateProductionUnit(@Param('name') name: string, @Body() body) {
    return this.productionUnitService.modifyProductionUnit(name, body);
  }

  @Delete(':name')
  async deleteProductionUnit(@Param('name') name: string) {
    return this.productionUnitService.deleteProductionUnit(name);
  }
}
