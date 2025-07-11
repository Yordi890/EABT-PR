import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {UserRepository} from './user.repository';
import {UserModel} from '../../generated/prisma/models/User';
import {UserDto} from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }

    async listAllUsers(): Promise<UserModel[]> {
        return await this.userRepository.retrieveAllUser();
    }

    async addUser(user: UserDto): Promise<void> {
        try {
            await this.userRepository.insertUser(user);
        } catch (err) {
            throw new ConflictException("User already exist");
        }
    }

    async modifyUser(dni: string, newUser: UserDto): Promise<void> {
        try {
            await this.userRepository.saveUser(dni, newUser);
        } catch (err) {
            throw new NotFoundException("User doesn't exist");
        }
    }

    async deleteUser(dni: string): Promise<void> {
        try {
            await this.userRepository.removeUser(dni);
        } catch (err) {
            throw new NotFoundException("User doesn't exist");
        }
    }
}
