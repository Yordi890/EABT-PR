import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from '../../src/user/user.module';
import { UserController } from '../../src/user/user.controller';
import { UserService } from '../../src/user/user.service';
import { UserRepository } from '../../src/user/user.repository';
import { PrismaModule } from '../../src/prisma/prisma.module';

describe('UserModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [UserModule, PrismaModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should contain the UserControler', () => {
    const userController = module.get<UserController>(UserController);
    expect(userController).toBeDefined();
  });

  it('should contain the UserService', () => {
    expect(module.get<UserService>(UserService)).toBeDefined();
  });

  it('should contain the UserRepository', () => {
    expect(module.get<UserRepository>(UserRepository)).toBeDefined();
  });
});
