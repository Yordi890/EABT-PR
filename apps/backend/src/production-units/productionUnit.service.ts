import { Injectable } from '@nestjs/common';
import { ProductionUnitRepository } from './productionUnit.repository';
import { ProductionUnit as ProductionUnitModel } from '@repo/db';
import { ProductionUnitDto } from './dto/productionUnit.dto';
import prismaHandler from '../utils/prisma-handler';
import { LoggerService } from '../logger/logger.service';

/**
 * Servicio para gestionar operaciones relacionadas con las unidades de producción.
 * Proporciona métodos para listar, agregar, modificar y eliminar unidades de producción.
 */
@Injectable()
export class ProductionUnitService {
  /**
   * Constructor de la clase ProductionUnitService.
   * @param productionUnitRepository - Repositorio de unidades de producción para acceder a la base de datos.
   * @param logger - Servicio de logging para registrar eventos y errores.
   */
  constructor(
    private readonly productionUnitRepository: ProductionUnitRepository,
    private readonly logger: LoggerService,
  ) {}

  /**
   * Lista todas las unidades de producción disponibles.
   * @returns Una promesa que resuelve con una lista de unidades de producción.
   */
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

  /**
   * Añade una nueva unidad de producción.
   * @param productionUnit - Datos de la unidad de producción a añadir.
   * @returns Una promesa que resuelve cuando la unidad de producción ha sido añadida.
   */
  async addProductionUnit(productionUnit: ProductionUnitDto): Promise<void> {
    this.logger.log(`Intentando crear unidad de producción con nombre: ${productionUnit.name}`);
    try {
      const productionUnitCreated: ProductionUnitModel =
        await this.productionUnitRepository.insertProductionUnit(productionUnit);
      this.logger.log('Unidad de producción creada exitosamente', productionUnitCreated);
    } catch (error) {
      this.logger.error(`Error al crear unidad de producción con nombre: ${productionUnit.name}`);
      prismaHandler(error);
    }
  }

  /**
   * Modifica una unidad de producción existente.
   * @param name - Nombre de la unidad de producción a modificar.
   * @param newProductionUnit - Nuevos datos de la unidad de producción.
   * @returns Una promesa que resuelve cuando la unidad de producción ha sido modificada.
   */
  async modifyProductionUnit(name: string, newProductionUnit: ProductionUnitDto): Promise<void> {
    this.logger.log(`Intentando modificar unidad de producción con nombre: ${name}`);
    try {
      await this.productionUnitRepository.saveProductionUnit(name, newProductionUnit);
      this.logger.log(`Unidad de producción modificada exitosamente con nombre: ${name}`);
    } catch (error) {
      this.logger.error(`Error al modificar unidad de producción con nombre: ${name}`);
      prismaHandler(error);
    }
  }

  /**
   * Elimina una unidad de producción.
   * @param name - Nombre de la unidad de producción a eliminar.
   * @returns Una promesa que resuelve cuando la unidad de producción ha sido eliminada.
   */
  async deleteProductionUnit(name: string): Promise<void> {
    this.logger.log(`Intentando eliminar unidad de producción con nombre: ${name}`);
    try {
      await this.productionUnitRepository.removeProductionUnit(name);
      this.logger.log(`Unidad de producción eliminada exitosamente con nombre: ${name}`);
    } catch (error) {
      this.logger.error(`Error al eliminar unidad de producción con nombre: ${name}`);
      prismaHandler(error);
    }
  }
}
