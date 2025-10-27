import { Injectable } from '@nestjs/common';
import PrismaService from '../prisma/prisma.service.js';
import IGenericRepository from './interfaces/generic.repository.interface.js';

export interface GenericRepositoryConfig {
  modelName: string; // Nombre del modelo en Prisma (user, supply, etc.)
  idFieldName: string; // Campo identificador (identityCard, name, etc.)
}

@Injectable()
export default class GenericRepository<TModel, TDto, TId = string>
  implements IGenericRepository<TModel, TDto, TId>
{
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly config: GenericRepositoryConfig,
  ) {}

  async findAll(): Promise<TModel[]> {
    return this.prisma[this.config.modelName].findMany();
  }

  async findPaginated(page: number) {
    const pageSize = 10; // Tamaño de página fijo
    const skip = (page - 1) * pageSize; // Calcula cuántos registros saltar

    const [users, total] = await Promise.all([
      this.prisma[this.config.modelName].findMany({
        skip, // Saltar los primeros `skip` registros
        take: pageSize, // Tomar solo 10 registros
        orderBy: { id: 'asc' }, // Ordenar por ID (ascendente)
      }),
      this.prisma.user.count(), // Contar el total de registros
    ]);

    const totalPages = Math.ceil(total / pageSize); // Calcula el total de páginas

    return {
      data: users, // Registros de la página actual
      meta: {
        total, // Total de registros en la base de datos
        page, // Página actual
        pageSize, // Tamaño de página fijo (10)
        totalPages, // Total de páginas disponibles
      },
    };
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
