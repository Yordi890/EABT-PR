import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async listAllUsers() {
    return this.userRepository.retrieveAllUser();
  }

  async addUser(data) {
    return this.userRepository.insertUser(data);
  }

  async modifyUser(dni, data) {
    return this.userRepository.saveUser(dni, data);
  }

  async deleteUser(dni) {
    return this.userRepository.removeUser(dni);
  }
}
