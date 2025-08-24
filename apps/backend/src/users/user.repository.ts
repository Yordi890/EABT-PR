import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@repo/db';
import { UserDto } from './dto/user.dto';
import { PrismaClient } from '@repo/db';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveUserByUsername(userName: string): Promise<UserModel | null> {
    return this.prisma.user.findFirst({
      where: {
        userName,
      },
    });
  }

  async retrieveAllUser(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async insertUser(user: UserDto): Promise<UserModel> {
    return this.prisma.user.create({ data: user });
  }

  async saveUser(dni: string, newUser: UserDto): Promise<void> {
    await this.prisma.user.update({
      data: newUser,
      where: {
        identityCard: dni,
      },
    });
  }

  async removeUser(dni: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        identityCard: dni,
      },
    });
  }
}
