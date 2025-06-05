import {Injectable} from '@nestjs/common';
import {UserRepository} from "./user.repository";

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {
    }

    async createUser(data) {
        return this.userRepository.saveUser(data);
    }


    async findAll() {
        return this.userRepository.findAllUser();
    }

}
