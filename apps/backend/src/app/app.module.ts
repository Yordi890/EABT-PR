import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import PrismaModule from '../prisma/prisma.module.js';
import LoggerModule from '../logger/logger.module.js';
import UserModule from '../users/user.module.js';
import AuthModule from '../auth/auth.module.js';
import HealthModule from '../health/health.module.js';
import GenericModule, { type GenericModuleConfig } from '../generic-crud/generic.module.js';
import ShutdownService from './app.service.js';

import { SupplyDto, LandFileDto, ProducerDto, ProductionUnitDto } from '../dtos/index.js';

const generics: GenericModuleConfig[] = [
  {
    name: 'productionUnits',
    routePrefix: 'productionUnits',
    idFieldName: 'name',
    modelName: 'productionUnit',
    dto: ProductionUnitDto,
  },
  {
    name: 'supply',
    routePrefix: 'supplies',
    idFieldName: 'name',
    modelName: 'supply',
    dto: SupplyDto,
  },
  {
    name: 'landFile',
    routePrefix: 'landFiles',
    idFieldName: 'fieldNumber',
    modelName: 'landFile',
    dto: LandFileDto,
  },
  {
    name: 'producers',
    routePrefix: 'producers',
    idFieldName: 'dni',
    modelName: 'producer',
    dto: ProducerDto,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    PrismaModule,
    UserModule,
    AuthModule,
    LoggerModule,
    ...generics.map(GenericModule.forRoot),
  ],
  providers: [ShutdownService],
})
export default class AppModule {}
