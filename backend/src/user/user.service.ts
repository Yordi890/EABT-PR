import {Injectable} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {UserModel} from '../../generated/prisma/models/User';
import {UserDto} from './dto/user.dto';
import prismaHandler from "../utils/prisma-handler";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }

    async listAllUsers(): Promise<UserModel[]> {
        return await this.userRepository.retrieveAllUser();
    }

    // TODO Generar un log del usuario creado
    async addUser(user: UserDto): Promise<void> {
        try {
            const userCreated: UserModel = await this.userRepository.insertUser(user);
        } catch (error) {
            prismaHandler(error);
        }
    }

    async modifyUser(dni: string, newUser: UserDto): Promise<void> {
        try {
            await this.userRepository.saveUser(dni, newUser);
        }catch(error) {
            prismaHandler(error);
        }
    }

    async deleteUser(dni: string): Promise<void> {
        try {
            await this.userRepository.removeUser(dni);
        } catch (error) {
            prismaHandler(error);
        }
    }
}
