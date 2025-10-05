import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { IGenericRepository } from './interfaces/generic.repository.interface.js';

export interface GenericRepositoryConfig {
  modelName: string; // Nombre del modelo en Prisma (user, supply, etc.)
  idFieldName: string; // Campo identificador (identityCard, name, etc.)
}

@Injectable()
export class GenericRepository<TModel, TDto, TId = string>
  implements IGenericRepository<TModel, TDto, TId>
{
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly config: GenericRepositoryConfig,
  ) {}

  async findAll(): Promise<TModel[]> {
    return this.prisma[this.config.modelName].findMany();
  }

  async findByField(field: string, value: any): Promise<TModel | null> {
    return this.prisma[this.config.modelName].findUnique({
      where: {
        [field]: value,
      },
    });
  }

  async findById(id: TId): Promise<TModel | null> {
    return this.prisma[this.config.modelName].findUnique({
      where: {
        [this.config.idFieldName]: id,
      },
    });
  }

  async create(item: TDto): Promise<TModel> {
    return this.prisma[this.config.modelName].create({ data: item });
  }

  async updateById(id: TId, item: Partial<TDto>): Promise<TModel> {
    return this.prisma[this.config.modelName].update({
      where: { [this.config.idFieldName]: id },
      data: item,
    });
  }

  async deleteById(id: TId): Promise<void> {
    await this.prisma[this.config.modelName].delete({
      where: { [this.config.idFieldName]: id },
    });
  }

  async findByCriteria(criteria: any): Promise<TModel | null> {
    return this.prisma[this.config.modelName].findFirst({
      where: criteria,
    });
  }
}
