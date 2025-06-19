import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {UserService} from './user.service';
import {User as UserType} from '../../generated/prisma'; // Importa el tipo User correctamente

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    // Endpoint para listar todos los usuarios
    @Get()
    async getAllUsers(): Promise<UserType[]> {
        return this.userService.listAllUsers();
    }

    // Endpoint para crear un nuevo usuario
    // TODO Ver si esta destructuración es realmente necesaria
    @Post()
    async createUser(@Body() body: {
        identityCard: string;
        firstName: string;
        lastName: string;
        userName: string;
        password: string
    }): Promise<UserType> {
        return this.userService.addUser(body);
    }

    @Put(':dni')
    async updateUser(@Param('dni') dni: string, @Body() body) {
        return this.userService.modifyUser(dni, body);
    }

    @Delete(':dni')
    async deleteUser(@Param('dni') dni: string) {
        return this.userService.deleteUser(dni);
    }
}
