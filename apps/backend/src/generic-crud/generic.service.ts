import { Global, Injectable, NotFoundException } from '@nestjs/common';
import LoggerService from '../logger/logger.service.js';
import IGenericRepository from './interfaces/generic.repository.interface.js';
import handlePrismaError from '../utils/prisma-handler.js';

@Global()
@Injectable()
export default class GenericService<TModel, TDto, TId = string> {
  constructor(
    protected readonly repository: IGenericRepository<TModel, TDto, TId>,
    protected readonly logger: LoggerService,
  ) {}

  /**
   * Hook que se ejecuta antes de crear un elemento
   */
  protected async beforeCreate(item: TDto): Promise<TDto> {
    return item;
  }

  /**
   * Hook que se ejecuta después de crear un elemento
   */
  protected async afterCreate(item: TModel): Promise<void> {}

  async listAll(): Promise<TModel[]> {
    try {
      this.logger.log('Listando elementos');
      return await this.repository.findAll();
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async findByField(field: string, value: any): Promise<TModel | null> {
    try {
      return await this.repository.findByField(field, value);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async getById(id: TId): Promise<TModel | null> {
    this.logger.log(`Obteniendo elemento con ID: ${id}`);

    let item: TModel | null;
    try {
      item = await this.repository.findById(id);
    } catch (error) {
      handlePrismaError(error);
    }

    if (!item) throw new NotFoundException(`Elemento con ID ${id} no encontrado`);
    return item;
  }

  async create(item: TDto): Promise<TModel> {
    try {
      item = await this.beforeCreate(item);
      const createdItem = await this.repository.create(item);

      this.logger.log('Elemento creado', createdItem);
      await this.afterCreate(createdItem);

      return createdItem;
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async update(id: TId, item: Partial<TDto>): Promise<TModel> {
    try {
      this.logger.log(`Actualizando elemento con ID: ${id}`);
      return await this.repository.updateById(id, item);
    } catch (error) {
      handlePrismaError(error);
    }
  }

  async delete(id: TId): Promise<void> {
    try {
      this.logger.log(`Eliminando elemento con ID: ${id}`);
      await this.repository.deleteById(id);
    } catch (error) {
      handlePrismaError(error);
    }
  }
}
