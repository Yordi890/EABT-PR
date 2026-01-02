import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import PrismaService from '../prisma/prisma.service.js';
import IGenericRepository from './interfaces/generic.repository.interface.js';

/**
 * Configuración del repositorio genérico
 */
export interface GenericRepositoryConfig<T extends keyof PrismaClient> {
  modelName: T;
  idFieldName: string;
}

/**
 * GenericRepository tipado:
 * - TModel: tipo de entidad recuperada (ej: User)
 * - TCreateInput: tipo para create
 * - TUpdateInput: tipo para update
 * - TWhereUnique: tipo para whereUnique
 * - T: nombre del delegate en PrismaClient
 */
@Injectable()
export default class GenericRepository<
  TModel,
  TCreateInput,
  TUpdateInput,
  TWhereUnique,
  T extends keyof PrismaClient,
> implements IGenericRepository<TModel, TCreateInput, any>
{
  // Delegate tipado del modelo específico
  protected modelDelegate: PrismaClient[T];

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly config: GenericRepositoryConfig<T>,
  ) {
    // ✅ Convertimos PrismaService a PrismaClient para que TS acepte indexación con T
    const base = this.prisma as unknown as PrismaClient;
    this.modelDelegate = base[this.config.modelName];
  }

  async findAll(): Promise<TModel[]> {
    return (this.modelDelegate as any).findMany();
  }

  async findPaginated(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;

    const [data, total] = await Promise.all([
      (this.modelDelegate as any).findMany({
        skip,
        take: pageSize,
        orderBy: { [this.config.idFieldName]: 'asc' },
      }),
      (this.modelDelegate as any).count(),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    return {
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages,
      },
    };
  }

  async findByField(field: string, value: any): Promise<TModel | null> {
    return (this.modelDelegate as any).findFirst({
      where: { [field]: value },
    });
  }

  async findById(where: TWhereUnique): Promise<TModel | null> {
    return (this.modelDelegate as any).findUnique({ where });
  }

  async create(data: TCreateInput): Promise<TModel> {
    return (this.modelDelegate as any).create({ data });
  }

  async update(where: TWhereUnique, data: TUpdateInput): Promise<TModel> {
    return (this.modelDelegate as any).update({ where, data });
  }

  async updateById(id: any, item: Partial<any>): Promise<TModel> {
    return this.update(
      { [this.config.idFieldName]: id } as unknown as TWhereUnique,
      item as unknown as TUpdateInput,
    );
  }

  async delete(where: TWhereUnique): Promise<TModel> {
    return (this.modelDelegate as any).delete({ where });
  }

  async deleteById(id: any): Promise<void> {
    await this.delete({ [this.config.idFieldName]: id } as unknown as TWhereUnique);
  }

  async findByCriteria(criteria: any): Promise<TModel | null> {
    return (this.modelDelegate as any).findFirst({ where: criteria });
  }
}
