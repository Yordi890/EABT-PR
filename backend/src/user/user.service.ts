import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User as UserType } from '../../generated/prisma';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async listAllUsers(): Promise<UserType[]> {
    return this.userRepository.retrieveAllUser();
  }

  async addUser(user: UserDto): Promise<void> {
    await this.userRepository.insertUser(user);
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
