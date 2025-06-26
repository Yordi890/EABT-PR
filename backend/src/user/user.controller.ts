import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from '../../generated/prisma/models/User'
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.listAllUsers();
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() user: UserDto): Promise<void> {
    await this.userService.addUser(user);
  }

  @Put(':dni')
  @HttpCode(204)
  async updateUser(
    @Param('dni') dni: string,
    @Body() newUser: UserDto,
  ): Promise<void> {
    await this.userService.modifyUser(dni, newUser);
  }

  @Delete(':dni')
  @HttpCode(204)
  async deleteUser(@Param('dni') dni: string): Promise<void> {
    await this.userService.deleteUser(dni);
  }
}
