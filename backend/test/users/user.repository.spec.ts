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

            expect(await userRepository.retrieveAllUser()).toEqual(result);
            expect(mockPrismaService.user.findMany).toHaveBeenCalled();
        });
    });

    describe('insertUser', () => {
        it('should insert a user', async () => {
            const newUser: UserDto = {
                identityCard: '123456',
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                password: 'password'
            };

            mockPrismaService.user.create.mockResolvedValue(newUser);

            expect(await userRepository.insertUser(newUser)).toEqual(newUser);
            expect(mockPrismaService.user.create).toHaveBeenCalledWith({data: newUser});
        });
    });

    describe('saveUser', () => {
        it('should update a user', async () => {
            const dni = '123456';
            const user: UserDto = {
                identityCard: '987654321',
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                password: 'newpassword'
            };
            await userRepository.saveUser(dni, user);

            expect(mockPrismaService.user.update).toHaveBeenCalledWith({
                data: user,
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