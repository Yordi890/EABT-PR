import { Test, TestingModule } from '@nestjs/testing';
import { jest } from '@jest/globals';
import { GenericController } from '../../src/generic-crud/generic.controller.js';
import { NotFoundException } from '@nestjs/common';

//
// DTOs de ejemplo (solo para fijar metadata y darle realismo al test)
//
class CreateUserDto {
  name!: string;
  email!: string;
}
class UpdateUserDto {
  name?: string;
  email?: string;
}

describe('GenericController (factory)', () => {
  let controller: any;
  let mockService: any;
  const SERVICE_TOKEN = 'USER_SERVICE';

  beforeEach(async () => {
    // Mock del servicio que inyecta el controller.
    // Los métodos coinciden con la API que el controller va a llamar.
    mockService = {
      listAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    // Creamos la clase del controller dinámicamente usando tu fábrica.
    // Pasamos DTOs para que la factory fije metadata (opcional, pero útil para probar metadata).
    const UsersControllerClass = GenericController(
      'users', // routePrefix (no relevante para unit tests)
      SERVICE_TOKEN, // token que usaremos para inyectar el servicio mock
      CreateUserDto, // createDto (opcional)
      UpdateUserDto, // updateDto (opcional)
      String, // idType
    );

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersControllerClass],
      providers: [
        // Inyectamos el mock en el token esperado por el controller
        { provide: SERVICE_TOKEN, useValue: mockService },
      ],
    }).compile();

    // Recuperamos la instancia del controller (la clase devuelta por la factory)
    controller = module.get(UsersControllerClass);
    jest.clearAllMocks();
  });

  describe('metadata', () => {
    it('should have param metadata for create and update when DTOs provided', () => {
      const UsersControllerClass = controller.constructor;

      const createParamTypes = Reflect.getMetadata(
        'design:paramtypes',
        UsersControllerClass.prototype,
        'create',
      );
      expect(createParamTypes).toBeDefined();
      // tu factory define un array [CreateDto] para 'create'
      expect(createParamTypes[0]).toBe(CreateUserDto);

      const updateParamTypes = Reflect.getMetadata(
        'design:paramtypes',
        UsersControllerClass.prototype,
        'update',
      );
      expect(updateParamTypes).toBeDefined();
      // para update tu factory definió [idType, updateDto]
      expect(updateParamTypes[0]).toBe(String);
      expect(updateParamTypes[1]).toBe(UpdateUserDto);
    });
  });

  describe('getAll', () => {
    it('calls service.listAll and returns its result', async () => {
      const items = [
        { id: '1', name: 'A' },
        { id: '2', name: 'B' },
      ];
      mockService.listAll.mockResolvedValue(items);

      const res = await controller.getAll();

      expect(mockService.listAll).toHaveBeenCalledTimes(1);
      expect(res).toBe(items);
    });
  });

  describe('getOne', () => {
    it('calls service.getById with the id and returns result', async () => {
      const item = { id: '123', name: 'X' };
      mockService.getById.mockResolvedValue(item);

      const res = await controller.getOne('123');

      expect(mockService.getById).toHaveBeenCalledWith('123');
      expect(res).toBe(item);
    });

    it('propagates errors from service.getById (e.g. NotFoundException)', async () => {
      mockService.getById.mockRejectedValue(new NotFoundException('nope'));

      await expect(controller.getOne('not-exists')).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('calls service.create with DTO and returns created item', async () => {
      const dto = { name: 'New', email: 'a@b.com' };
      const created = { id: '1', ...dto };
      mockService.create.mockResolvedValue(created);

      const res = await controller.create(dto);

      expect(mockService.create).toHaveBeenCalledWith(dto);
      expect(res).toBe(created);
    });
  });

  describe('update', () => {
    it('calls service.update with id and partial dto and returns updated', async () => {
      const partial = { name: 'Changed' };
      const updated = { id: '1', ...partial };
      mockService.update.mockResolvedValue(updated);

      const res = await controller.update('1', partial);

      expect(mockService.update).toHaveBeenCalledWith('1', partial);
      expect(res).toBe(updated);
    });

    it('propagates errors from service.update', async () => {
      mockService.update.mockRejectedValue(new NotFoundException('nope'));

      await expect(controller.update('nope', { name: 'x' })).rejects.toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('calls service.delete with id and returns its result', async () => {
      mockService.delete.mockResolvedValue({ success: true });
      const res = await controller.delete('1');

      expect(mockService.delete).toHaveBeenCalledWith('1');
      expect(res).toEqual({ success: true });
    });

    it('propagates errors from service.delete', async () => {
      mockService.delete.mockRejectedValue(new NotFoundException('nope'));

      await expect(controller.delete('nope')).rejects.toThrow(NotFoundException);
    });
  });
});
