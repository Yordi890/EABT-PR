import { Inject, Injectable } from '@nestjs/common';
import LoginDto from './dto/loginDto.js';
import { compare as bcryptCompare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import GenericService from '../generic-crud/generic.service.js';
import { UserModel } from '../../generated/prisma/models/User.js';

@Injectable()
export default class AuthService {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: GenericService<UserModel, any, string>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ userName, password }: LoginDto) {
    const user = await this.userService.findByField('userName', userName);
    if (!user) return null;
    const isValid = await bcryptCompare(password, user.password);
    if (!isValid) return null;
    return user;
  }

  async login(user: UserModel) {
    const payload = { sub: user.identityCard, userName: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.identityCard,
        userName: user.userName,
      },
    };
  }
}
