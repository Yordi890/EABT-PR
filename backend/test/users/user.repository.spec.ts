import {Test, TestingModule} from '@nestjs/testing';
import {UserRepository} from '../../src/user/user.repository';
import {PrismaService} from '../../src/prisma/prisma.service';
import {UserDto} from '../../src/user/dto/user.dto';

describe('UserRepository', () => {
    let userRepository: UserRepository;
    let prismaService: PrismaService;

    const mockPrismaService = {
        user: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserRepository,
                {provide: PrismaService, useValue: mockPrismaService},
            ],
        }).compile();

        userRepository = module.get<UserRepository>(UserRepository);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('retrieveAllUser', () => {
        it('should return an array of users', async () => {
            const result = [{
                id: 1,
                identityCard: '123456',
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                password: 'password'
            }];
            mockPrismaService.user.findMany.mockResolvedValue(result);

            expect(await userRepository.retrieveAllUser()).toBe(result);
            expect(mockPrismaService.user.findMany).toHaveBeenCalled();
        });
    });

    describe('insertUser', () => {
        it('should insert a user', async () => {
            const userDto: UserDto = {
                identityCard: '123456',
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                password: 'password'
            };
            await userRepository.insertUser(userDto);

            expect(mockPrismaService.user.create).toHaveBeenCalledWith({data: userDto});
        });
    });

    describe('saveUser', () => {
        it('should update a user', async () => {
            const dni = '123456';
            const newUser: UserDto = {
                identityCard: '987654321',
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                password: 'newpassword'
            };
            await userRepository.saveUser(dni, newUser);

            expect(mockPrismaService.user.update).toHaveBeenCalledWith({
                data: newUser,
                where: {identityCard: dni},
            });
        });
    });

    describe('removeUser', () => {
        it('should remove a user', async () => {
            const dni = '123456';
            await userRepository.removeUser(dni);

            expect(mockPrismaService.user.delete).toHaveBeenCalledWith({
                where: {identityCard: dni},
            });
        });
    });
});