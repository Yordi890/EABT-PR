import { DynamicModule } from '@nestjs/common';
import { jest } from '@jest/globals';
import { GenericModule, GenericModuleConfig } from '../../src/generic-crud/generic.module.js';
import { GenericRepository } from '../../src/generic-crud/generic.repository.js';
import { GenericService } from '../../src/generic-crud/generic.service.js';
import { LoggerService } from '../../src/logger/logger.service.js';
import { PrismaService } from '../../src/prisma/prisma.service.js';

class TestDto {
  field1: string;
  field2: number;
}

describe('GenericModule', () => {
  const config: GenericModuleConfig = {
    name: 'tests',
    routePrefix: 'tests',
    modelName: 'test',
    idFieldName: 'id',
    dto: TestDto,
  };

  let dynamicModule: DynamicModule;

  beforeAll(() => {
    dynamicModule = GenericModule.forRoot(config);
  });

  it('should create a DynamicModule', () => {
    expect(dynamicModule).toBeDefined();
    expect(dynamicModule.module).toBe(GenericModule);
  });

  it('should provide repository and service providers', () => {
    expect(dynamicModule.providers).toBeDefined();

    const repoProvider = dynamicModule.providers!.find(
      (p) => (p as any).provide === 'TESTS_REPOSITORY',
    );
    const serviceProvider = dynamicModule.providers!.find(
      (p) => (p as any).provide === 'TESTS_SERVICE',
    );

    expect(repoProvider).toBeDefined();
    expect(serviceProvider).toBeDefined();

    // Comprobamos que la fábrica de repository es una función
    expect(typeof (repoProvider as any).useFactory).toBe('function');

    // Comprobamos que la fábrica de service es una función
    expect(typeof (serviceProvider as any).useFactory).toBe('function');
  });

  it('should create a controller class with correct metadata', () => {
    const ControllerClass = dynamicModule.controllers![0];

    expect(ControllerClass).toBeDefined();
    expect(typeof ControllerClass).toBe('function');
    expect(ControllerClass.name).toBe('TESTSController');

    const proto = ControllerClass.prototype;

    // Metadata para DTOs y idType
    const createMetadata = Reflect.getMetadata('design:paramtypes', proto, 'create');
    const updateMetadata = Reflect.getMetadata('design:paramtypes', proto, 'update');
    const idMetadataGet = Reflect.getMetadata('design:paramtypes', proto, 'getOne');
    const idMetadataDelete = Reflect.getMetadata('design:paramtypes', proto, 'delete');

    // Verificaciones de que los parámetros existen
    expect(createMetadata?.[0]).toBeDefined();
    expect(updateMetadata?.[0]).toBeDefined();
    expect(updateMetadata?.[1]).toBeDefined();
    expect(idMetadataGet?.[0]).toBeDefined();
    expect(idMetadataDelete?.[0]).toBeDefined();

    // Verificación de tipos
    expect(createMetadata?.[0].name).toBe('TestDto'); // DTO original
    expect(typeof updateMetadata?.[1]).toBe('function'); // clase parcial, no dependemos del nombre exacto
    expect(idMetadataGet?.[0].name).toBe('String'); // idType por defecto
    expect(idMetadataDelete?.[0].name).toBe('String');
  });
});
