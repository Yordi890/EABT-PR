import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserModel } from '../../generated/prisma/models/User';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async retrieveAllUser(): Promise<UserModel[]> {
    return this.prismaService.user.findMany();
  }

  async insertUser(user: UserDto): Promise<UserModel> {
    return this.prismaService.user.create({ data: user });
  }

  async saveUser(dni: string, newUser: UserDto): Promise<void> {
    await this.prismaService.user.update({
      data: newUser,
      where: {
        identityCard: dni,
      },
    });
  }

  async removeUser(dni: string): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        identityCard: dni,
      },
    });
  }
}
