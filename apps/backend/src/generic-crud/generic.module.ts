import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';

import GenericRepository from './generic.repository.js';
import GenericService from './generic.service.js';
import LoggerService from '../logger/logger.service.js';
import PrismaService from '../prisma/prisma.service.js';
import GenericController from './generic.controller.js';

import { PartialType } from '@nestjs/mapped-types';
import IGenericRepository from './interfaces/generic.repository.interface.js';

// type ModelNameLower = Uncapitalize<(typeof Prisma.ModelName)[keyof typeof Prisma.ModelName]>;
type ValuesOf<T> = T[keyof T];
type ModelNameLower = Uncapitalize<ValuesOf<typeof Prisma.ModelName>>;

export interface GenericModuleConfig<T extends ModelNameLower = ModelNameLower> {
  name: string;
  routePrefix: string;
  modelName: T;
  idFieldName: string;

  idType?: Type<any>;
  dto?: any;
  updateDto?: any;
  customService?: Type<any>;
}

@Module({})
export default class GenericModule {
  static forRoot<T extends ModelNameLower = ModelNameLower>(
    config: GenericModuleConfig<T>,
  ): DynamicModule {
    const serviceToken = `${config.name.toUpperCase()}_SERVICE`;
    const repositoryToken = `${config.name.toUpperCase()}_REPOSITORY`;

    const providers: Provider[] = [
      {
        provide: repositoryToken,
        // El tipo en tiempo de compilación: IGenericRepository<any, any, any>
        useFactory: (prisma: PrismaService): IGenericRepository<any, any, any> =>
          // Pasamos el parámetro de tipo T para que el repositorio tenga
          // modelDelegate: PrismaClient[T] en su tipado.
          new GenericRepository<any, any, any, any, T>(prisma, {
            modelName: config.modelName,
            idFieldName: config.idFieldName,
          }),
        inject: [PrismaService],
      },
    ];

    if (config.customService) {
      providers.push({
        provide: serviceToken,
        useClass: config.customService,
      });
    } else {
      providers.push({
        provide: serviceToken,
        useFactory: (repository: IGenericRepository<any, any, any>, logger: LoggerService) =>
          new GenericService(repository, logger),
        inject: [repositoryToken, LoggerService],
      });
    }

    const createDto = config.dto;
    const updateDto = config.updateDto ?? (createDto ? PartialType(createDto) : undefined);

    const idType = config.idType ?? String;

    const ControllerClass = GenericController(
      config.routePrefix,
      serviceToken,
      createDto,
      updateDto,
      idType,
    );

    return {
      module: GenericModule,
      providers,
      controllers: [ControllerClass],
      exports: providers,
    };
  }
}
