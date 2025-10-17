import { Controller, Body, Post, UnauthorizedException } from '@nestjs/common';
import AuthService from './auth.service.js';
import LoginDto from './dto/loginDto.js';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: LoginDto) {
    const user = await this.authService.validateUser(data);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.authService.login(user);
  }
}
