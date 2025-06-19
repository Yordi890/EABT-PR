import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private readonly prismaService: PrismaService) {
    }

    async retrieveAllUser() {
        return this.prismaService.user.findMany();
    }

    async insertUser(data) {
        return this.prismaService.user.create({data: data});
    }

    async saveUser(dni, data) {
        return this.prismaService.user.update({
            data: data,
            where: {identityCard: dni}
        });
    }

    async removeUser(dni) {
        return this.prismaService.user.delete(
            {
                where: {identityCard: dni},
            }
        );
    }
}