import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app/app.module';
import { AppController } from '../../src/app/app.controller';
import { AppService } from '../../src/app/app.service';
import { UserModule } from '../../src/user/user.module';
import { ProductionUnitModule } from '../../src/production-unit/productionUnit.module';
import { SupplyModule } from '../../src/supply/supply.module';
import { LandFileModule } from '../../src/land-file/land-file.module';
import { PrismaModule } from '../../src/prisma/prisma.module';
import { ProducerModule } from '../../src/producer/producer.module';
import { ConfigModule } from '@nestjs/config';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        AppModule,
        ConfigModule,
        PrismaModule,
        UserModule,
        ProductionUnitModule,
        SupplyModule,
        LandFileModule,
        ProducerModule,
      ],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should contain the AppController', () => {
    const appController = module.get<AppController>(AppController);
    expect(appController).toBeDefined();
  });

  it('should contain the AppService', () => {
    const appService = module.get<AppService>(AppService);
    expect(appService).toBeDefined();
  });
});
