import { Injectable } from '@nestjs/common';
import { ProductionUnitRepository } from './productionUnit.repository';
import { ProductionUnitModel } from '../../generated/prisma/models/ProductionUnit';
import { ProductionUnitDto } from './dto/productionUnit.dto';
import prismaHandler from '../utils/prisma-handler';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class ProductionUnitService {
  constructor(
    private readonly productionUnitRepository: ProductionUnitRepository,
    private readonly logger: LoggerService,
  ) {}

  async listAllProductionUnit(): Promise<ProductionUnitModel[]> {
    this.logger.log('Intentando listar todas las unidades de producción');

    try {
      const productionUnits: ProductionUnitModel[] =
        await this.productionUnitRepository.retrieveAllProductionUnit();

      this.logger.log('Unidades de producción listadas exitosamente');

      return productionUnits;
    } catch (error) {
      this.logger.error('Error al listar unidades de producción');
      prismaHandler(error);
      return [];
    }
  }

  async addProductionUnit(productionUnit: ProductionUnitDto): Promise<void> {
    this.logger.log(
      `Intentando crear unidad de producción con nombre: ${productionUnit.name}`,
    );
    try {
      const productionUnitCreated: ProductionUnitModel =
        await this.productionUnitRepository.insertProductionUnit(
          productionUnit,
        );
      this.logger.log(
        'Unidad de producción creada exitosamente',
        productionUnitCreated,
      );
    } catch (error) {
      this.logger.error(
        `Error al crear unidad de producción con nombre: ${productionUnit.name}`,
      );
      prismaHandler(error);
    }
  }

  async modifyProductionUnit(
    name: string,
    newProductionUnit: ProductionUnitDto,
  ): Promise<void> {
    this.logger.log(
      `Intentando modificar unidad de producción con nombre: ${name}`,
    );
    try {
      await this.productionUnitRepository.saveProductionUnit(
        name,
        newProductionUnit,
      );
      this.logger.log(
        `Unidad de producción modificada exitosamente con nombre: ${name}`,
      );
    } catch (error) {
      this.logger.error(
        `Error al modificar unidad de producción con nombre: ${name}`,
      );
      prismaHandler(error);
    }
  }

  async deleteProductionUnit(name: string): Promise<void> {
    this.logger.log(
      `Intentando eliminar unidad de producción con nombre: ${name}`,
    );
    try {
      await this.productionUnitRepository.removeProductionUnit(name);
      this.logger.log(
        `Unidad de producción eliminada exitosamente con nombre: ${name}`,
      );
    } catch (error) {
      this.logger.error(
        `Error al eliminar unidad de producción con nombre: ${name}`,
      );
      prismaHandler(error);
    }
  }
}
