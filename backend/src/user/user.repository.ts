import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) {
    }


    async saveUser(data) {
        return this.prismaService.user.create({data: data});
    }

    /**
    * Solo una prueba
    * */
    async findAllUser(){
        return this.prismaService.user.findMany();
    }

}