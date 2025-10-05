import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { LoggerModule } from '../logger/logger.module.js';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../users/user.module.js';
import { ProductionUnitModule } from '../production-units/productionUnit.module.js';
import { SupplyModule } from '../supplies/supply.module.js';
import { LandFileModule } from '../land-files/land-file.module.js';
import { ProducerModule } from '../producers/producer.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { HealthModule } from '../health/health.module.js';
import { ShutdownService } from './app.service.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    PrismaModule,
    UserModule,
    AuthModule,
    LoggerModule,
    ProductionUnitModule,
    SupplyModule,
    LandFileModule,
    ProducerModule,
  ],
  controllers: [],
  providers: [ShutdownService],
})
export class AppModule {}
