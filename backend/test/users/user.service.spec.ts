import {Test, TestingModule} from '@nestjs/testing';
import {UserService} from '../../src/user/user.service';
import {UserRepository} from '../../src/user/user.repository';
import {UserDto} from '../../src/user/dto/user.dto';
import {ConflictException, NotFoundException} from '@nestjs/common';
import {UserModel} from '../../generated/prisma/models/User';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library';

describe('UserService', () => {
    let userService: UserService;
    let userRepository: UserRepository;

    const mockUserRepository = {
        retrieveAllUser: jest.fn(),
        insertUser: jest.fn(),
        saveUser: jest.fn(),
        removeUser: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {provide: UserRepository, useValue: mockUserRepository},
            ],
        }).compile();

        userService = module.get<UserService>(UserService);
        userRepository = module.get<UserRepository>(UserRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('listAllUsers', () => {
        it('should return an array of users', async () => {
            const result: UserModel[] = [
                {
                    id: 1,
                    identityCard: '123456',
                    firstName: 'John',
                    lastName: 'Doe',
                    userName: 'johndoe',
                    password: 'password'
                },
            ];
            mockUserRepository.retrieveAllUser.mockResolvedValue(result);

            expect(await userService.listAllUsers()).toEqual(result);
            expect(mockUserRepository.retrieveAllUser).toHaveBeenCalled();
        });
    });

    describe('addUser', () => {
        it('should add a user', async () => {
            const userDto: UserDto = {
                identityCard: '123456',
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                password: 'password'
            };

            await userService.addUser(userDto);
            expect(mockUserRepository.insertUser).toHaveBeenCalledWith(userDto);
        });

        it('should throw ConflictException if user already exists',async () => {
            const userDto: UserDto = {
                identityCard: '123456',
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                password: 'password'
            };
           mockUserRepository.insertUser.mockRejectedValue(new PrismaClientKnownRequestError(
               "Not found", {code: 'P2002', clientVersion: '6.10.0'}));

            await expect(userService.addUser(userDto)).rejects.toThrow(ConflictException);
        });
    });

    describe('modifyUser', () => {
        it('should modify a user', async () => {
            const dni = '123456';
            const newUser: UserDto = {
                identityCard: '987654321',
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                password: 'newpassword'
            };

            await userService.modifyUser(dni, newUser);
            expect(mockUserRepository.saveUser).toHaveBeenCalledWith(dni, newUser);
        });


        it('should throw NotFoundException if user does not exist', async () => {
            const dni = '123456';
            const newUser: UserDto = {
                identityCard: '987654321',
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                password: 'newpassword'
            };
            mockUserRepository.saveUser.mockRejectedValue(new PrismaClientKnownRequestError(
                "Not found", {code: 'P2025', clientVersion: '6.10.0'}));

            await expect(userService.modifyUser(dni, newUser)).rejects.toThrow(NotFoundException);
        });
    });

    describe('deleteUser', () => {
        it('should delete a user', async () => {
            const dni = '123456';
            mockUserRepository.removeUser.mockResolvedValue(undefined);

            await userService.deleteUser(dni);
            expect(mockUserRepository.removeUser).toHaveBeenCalledWith(dni);
        });

        it('should throw NotFoundException if user does not exist', async () => {
            const dni = '123456';
            mockUserRepository.removeUser.mockRejectedValue(new PrismaClientKnownRequestError(
                "Not found", {code: 'P2025', clientVersion: '6.10.0'}));

            await expect(userService.deleteUser(dni)).rejects.toThrow(NotFoundException);
        });
    });
});