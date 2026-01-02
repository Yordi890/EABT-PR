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

const modules: GenericModuleConfig[] = [
  {
    name: 'productionUnits',
    routePrefix: 'productionUnits',
    idFieldName: 'name',
    modelName: 'productionUnit', // debe coincidir con prisma.productionUnit
    dto: ProductionUnitDto,
  },
  {
    name: 'supply',
    routePrefix: 'supplies',
    idFieldName: 'name',
    modelName: 'supply', // prisma.supply
    dto: SupplyDto,
  },
  {
    name: 'landFile',
    routePrefix: 'landFiles',
    idFieldName: 'fileNumber',
    modelName: 'landFile', // prisma.landFile
    dto: LandFileDto,
  },
  {
    name: 'producers',
    routePrefix: 'producers',
    idFieldName: 'dni',
    modelName: 'producer', // prisma.producer
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
    ...modules.map(GenericModule.forRoot),
  ],
  providers: [ShutdownService],
})
export default class AppModule {}
