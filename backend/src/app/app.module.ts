import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductionUnitModule } from '../production-unit/productionUnit.module';
import { SupplyModule } from '../supply/supply.module';
import { LandFileModule } from '../land-file/land-file.module';
import { ConfigModule } from '@nestjs/config';
import { ProducerModule } from '../producer/producer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
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
