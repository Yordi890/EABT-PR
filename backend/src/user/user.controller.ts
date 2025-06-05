import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserType } from '../../generated/prisma'; // Importa el tipo User correctamente

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // Endpoint para crear un nuevo usuario
  @Post()
  async createUser(@Body() body: { identityCard: string; firstName: string; lastName: string; userName: string; password: string }): Promise<UserType> {
    return this.userService.createUser(body);
  }

  // Endpoint para buscar todos los usuarios
  @Get()
  async findAll(): Promise<UserType[]> {
    return this.userService.findAll();
  }
}
