import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/loginDto.js';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { GenericService } from '../generic-crud/generic.service.js';
import { UserModel } from '../../generated/prisma/models/User.js';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: GenericService<UserModel, any, string>,
    private readonly jwtService: JwtService,
  ) {}

  async login({ userName, password }: LoginDto) {
    const user = await this.userService.findByField('userName', userName);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.identityCard, userName: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
