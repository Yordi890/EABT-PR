import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import GenericRepository from './generic.repository.js';
import GenericService from './generic.service.js';
import LoggerService from '../logger/logger.service.js';
import PrismaService from '../prisma/prisma.service.js';
import GenericController from './generic.controller.js';
import { PartialType } from '@nestjs/mapped-types';
import IGenericRepository from './interfaces/generic.repository.interface.js';

export interface GenericModuleConfig {
  name: string;
  routePrefix: string;
  modelName: string;
  idFieldName: string;
  idType?: Type<any>; // opcional: Number, String, etc.
  dto?: Type<any>; // la clase DTO (p. ej. UserDto)
  updateDto?: Type<any>; // opcional: si quieres controlar el DTO de update
  customService?: Type<any>;
}

@Module({})
export default class GenericModule {
  static forRoot(config: GenericModuleConfig): DynamicModule {
    const serviceToken = `${config.name.toUpperCase()}_SERVICE`;
    const repositoryToken = `${config.name.toUpperCase()}_REPOSITORY`;

    const providers: Provider[] = [
      {
        provide: repositoryToken,
        useFactory: (prisma: PrismaService): IGenericRepository<any, any, any> =>
          new GenericRepository(prisma, {
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

    // Si no pasas updateDto, lo generamos a partir del dto usando PartialType
    const createDto = config.dto;
    const updateDto = config.updateDto ?? (createDto ? PartialType(createDto) : undefined);
    const idType = config.idType ?? String;

    // Pasamos los DTOs y el idType a la fábrica del controlador dinámico
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
