import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { LoginDto } from './dto/loginDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ userName, password }: LoginDto) {
    const user = await this.userService.getUserByUsername(userName);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.identityCard, userName: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
