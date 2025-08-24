import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaModule } from '../prisma/prisma.module';
import { LoggerModule } from '../logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../users/user.module';
import { ProductionUnitModule } from '../production-units/productionUnit.module';
import { SupplyModule } from '../supplies/supply.module';
import { LandFileModule } from '../land-files/land-file.module';
import { ProducerModule } from '../producers/producer.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // PrismaModule,
    AuthModule,
    LoggerModule,
    UserModule,
    ProductionUnitModule,
    SupplyModule,
    LandFileModule,
    ProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
