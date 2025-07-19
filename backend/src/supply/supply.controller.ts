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
import { SupplyService } from './supply.service';
import { SupplyDto } from './dto/supply.dto';
import { SupplyModel } from '../../generated/prisma/models/Supply';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Get()
  async getAllSupply(): Promise<SupplyModel[]> {
    return await this.supplyService.listAllSupply();
  }

  @Post()
  @HttpCode(201)
  async createSupply(@Body() supply: SupplyDto): Promise<void> {
    await this.supplyService.addSupply(supply);
  }

  @Put(':name')
  @HttpCode(204)
  async updateSupply(
    @Param('name') name: string,
    @Body() newSupply: SupplyDto,
  ): Promise<void> {
    await this.supplyService.modifySupply(name, newSupply);
  }

  @Delete(':name')
  @HttpCode(204)
  async deleteSupply(@Param('name') name: string): Promise<void> {
    await this.supplyService.deleteSupply(name);
  }
}
