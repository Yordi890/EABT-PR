import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from '../../generated/prisma/models/User';
import { UserDto } from './dto/user.dto';
import { ApiBody, ApiCreatedResponse, ApiParam, ApiResponse, ApiSchema } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'All users listed' })
  async getAllUsers(): Promise<UserModel[]> {
    return await this.userService.listAllUsers();
  }

  /**
   * Create a user
   *
   * @param user UserDto usuario para guardar en la base de datos
   * */
  @Post()
  @HttpCode(201)
  @ApiBody({
    description: 'El usuario que se va a crear',
    type: UserDto,
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserDto,
    example: {
      identityCard: '123123',
    },
  })
  async createUser(@Body() user: UserDto): Promise<void> {
    await this.userService.addUser(user);
  }

  @Put(':dni')
  @HttpCode(204)
  async updateUser(@Param('dni') dni: string, @Body() newUser: UserDto): Promise<void> {
    await this.userService.modifyUser(dni, newUser);
  }

  @Delete(':dni')
  @HttpCode(204)
  async deleteUser(@Param('dni') dni: string): Promise<void> {
    await this.userService.deleteUser(dni);
  }
}
