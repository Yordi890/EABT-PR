import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../../src/user/user.controller';
import { UserService } from '../../src/user/user.service';
import { UserModel } from '../../generated/prisma/models/User';
import { UserDto } from '../../src/user/dto/user.dto';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  const mockUserService = {
    listAllUsers: jest.fn(),
    addUser: jest.fn(),
    modifyUser: jest.fn(),
    deleteUser: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserController,
        { provide: UserService, useValue: mockUserService },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllUsers', () => {
    it('should return an array of users ', async () => {
      const result: UserModel[] = [
        {
          id: 1,
          identityCard: '123456',
          firstName: 'John',
          lastName: 'Doe',
          userName: 'johndoe',
          password: 'password',
        },
      ];

      mockUserService.listAllUsers.mockResolvedValue(result);

      expect(await userController.getAllUsers()).toEqual(result);
      expect(mockUserService.listAllUsers).toHaveBeenCalled();
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const user: UserDto = {
        identityCard: '123456',
        firstName: 'John',
        lastName: 'Doe',
        userName: 'johndoe',
        password: 'password',
      };

      await userController.createUser(user);
      expect(mockUserService.addUser).toHaveBeenCalledWith(user);
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const dni: string = '123456';
      const newUser: UserDto = {
        identityCard: '987654321',
        firstName: 'Jane',
        lastName: 'Doe',
        userName: 'janedoe',
        password: 'newpassword',
      };

      await userController.updateUser(dni, newUser);
      expect(mockUserService.modifyUser).toHaveBeenCalledWith(dni, newUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const dni: string = '12345678';

      await userController.deleteUser(dni);
      expect(mockUserService.deleteUser).toHaveBeenCalledWith(dni);
    });
  });
});
