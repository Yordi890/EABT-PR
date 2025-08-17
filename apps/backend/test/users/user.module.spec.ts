import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../src/users/user.module';
import { UserController } from '../../src/users/user.controller';
import { UserService } from '../../src/users/user.service';
import { UserRepository } from '../../src/users/user.repository';
import { PrismaModule } from '../../src/prisma/prisma.module';
import {LoggerService} from "../../src/logger/logger.service";
import {LoggerModule} from "../../src/logger/logger.module";

describe('UserModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [UserModule, PrismaModule , LoggerModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should contain the UserControler', () => {
    expect(module.get<UserController>(UserController)).toBeDefined();
  });

  it('should contain the UserService', () => {
    expect(module.get<UserService>(UserService)).toBeDefined();
  });

  it('should contain the UserRepository', () => {
    expect(module.get<UserRepository>(UserRepository)).toBeDefined();
  });

  it('should contain the LoggerService', () => {
    expect(module.get<LoggerService>(LoggerService)).toBeDefined();
  })
});
