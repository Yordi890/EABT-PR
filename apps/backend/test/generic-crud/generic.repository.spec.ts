import { Test, TestingModule } from '@nestjs/testing';
import { jest } from '@jest/globals';
import { GenericRepository } from '../../src/generic-crud/generic.repository.js';
import { PrismaService } from '../../src/prisma/prisma.service.js';

describe('GenericRepository', () => {
  let repository: GenericRepository<any, any, string>;
  let prismaMock: any;

  beforeEach(async () => {
    prismaMock = {
      user: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        findFirst: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
        {
          provide: GenericRepository,
          useFactory: (prisma: PrismaService) =>
            new GenericRepository(prisma, {
              modelName: 'user',
              idFieldName: 'identityCard',
            }),
          inject: [PrismaService],
        },
      ],
    }).compile();

    repository = module.get<GenericRepository<any, any, string>>(GenericRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all users', async () => {
    const result = [{ identityCard: '123', firstName: 'John' }];
    prismaMock.user.findMany.mockResolvedValue(result);

    expect(await repository.findAll()).toEqual(result);
    expect(prismaMock.user.findMany).toHaveBeenCalled();
  });

  it('should create a user', async () => {
    const dto = { identityCard: '123', firstName: 'Jane' };
    const created = { ...dto, id: 1 };
    prismaMock.user.create.mockResolvedValue(created);

    expect(await repository.create(dto)).toEqual(created);
    expect(prismaMock.user.create).toHaveBeenCalledWith({ data: dto });
  });

  it('should find a user by id', async () => {
    const user = { identityCard: '123', firstName: 'John' };
    prismaMock.user.findUnique.mockResolvedValue(user);

    expect(await repository.findById('123')).toEqual(user);
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: { identityCard: '123' },
    });
  });

  it('should find a user by field', async () => {
    const user = { identityCard: '123', firstName: 'John' };
    prismaMock.user.findUnique.mockResolvedValue(user);

    expect(await repository.findByField('firstName', 'John')).toEqual(user);
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: { firstName: 'John' },
    });
  });

  it('should update a user by id', async () => {
    const updated = { identityCard: '123', firstName: 'Jane' };
    prismaMock.user.update.mockResolvedValue(updated);

    expect(await repository.updateById('123', { firstName: 'Jane' })).toEqual(updated);
    expect(prismaMock.user.update).toHaveBeenCalledWith({
      where: { identityCard: '123' },
      data: { firstName: 'Jane' },
    });
  });

  it('should delete a user by id', async () => {
    prismaMock.user.delete.mockResolvedValue(undefined);

    await repository.deleteById('123');
    expect(prismaMock.user.delete).toHaveBeenCalledWith({
      where: { identityCard: '123' },
    });
  });

  it('should find by criteria', async () => {
    const user = { identityCard: '123', firstName: 'Jane' };
    prismaMock.user.findFirst.mockResolvedValue(user);

    expect(await repository.findByCriteria({ firstName: 'Jane' })).toEqual(user);
    expect(prismaMock.user.findFirst).toHaveBeenCalledWith({
      where: { firstName: 'Jane' },
    });
  });
});
