import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserModel } from '../../generated/prisma/models/User';
import { UserDto } from './dto/user.dto';
import prismaHandler from '../utils/prisma-handler';
import { LoggerService } from '../logger/logger.service';

/**
 * Servicio para gestionar operaciones relacionadas con los usuarios.
 * Proporciona métodos para listar, agregar, modificar y eliminar usuarios.
 */
@Injectable()
export class UserService {
  /**
   * Constructor de la clase UserService.
   * @param userRepository - Repositorio de usuarios para acceder a la base de datos.
   * @param logger - Servicio de logging para registrar eventos y errores.
   */
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger: LoggerService,
  ) {}

  /**
   * Lista todos los usuarios disponibles.
   * @returns Una promesa que resuelve con una lista de usuarios.
   */
  async listAllUsers(): Promise<UserModel[]> {
    this.logger.log('Intentando listar todos los usuarios');
    try {
      const users: UserModel[] = await this.userRepository.retrieveAllUser();
      this.logger.log('Usuarios listados exitosamente');
      return users;
    } catch (error) {
      this.logger.error('Error al listar usuarios');
      prismaHandler(error);
      return [];
    }
  }

  /**
   * Añade un nuevo usuario.
   * @param user - Datos del usuario a añadir.
   * @returns Una promesa que resuelve cuando el usuario ha sido añadido.
   */
  async addUser(user: UserDto): Promise<void> {
    this.logger.log(`Intentando crear usuario con DNI: ${user.identityCard}`);
    try {
      const userCreated: UserModel = await this.userRepository.insertUser(user);
      this.logger.log('Usuario creado', userCreated);
    } catch (error) {
      this.logger.error(`Error al crear usuario con DNI: ${user.identityCard}`);
      prismaHandler(error);
    }
  }

  /**
   * Modifica un usuario existente.
   * @param dni - DNI del usuario a modificar.
   * @param newUser - Nuevos datos del usuario.
   * @returns Una promesa que resuelve cuando el usuario ha sido modificado.
   */
  async modifyUser(dni: string, newUser: UserDto): Promise<void> {
    this.logger.log(`Intentando modificar usuario con DNI: ${dni}`);
    try {
      await this.userRepository.saveUser(dni, newUser);
      this.logger.log(`Usuario modificado exitosamente con DNI: ${dni}`);
    } catch (error) {
      this.logger.error(`Error al modificar usuario con DNI: ${dni}`);
      prismaHandler(error);
    }
  }

  /**
   * Elimina un usuario.
   * @param dni - DNI del usuario a eliminar.
   * @returns Una promesa que resuelve cuando el usuario ha sido eliminado.
   */
  async deleteUser(dni: string): Promise<void> {
    this.logger.log(`Intentando eliminar usuario con DNI: ${dni}`);
    try {
      await this.userRepository.removeUser(dni);
      this.logger.log(`Usuario eliminado exitosamente con DNI: ${dni}`);
    } catch (error) {
      this.logger.error(`Error al eliminar usuario con DNI: ${dni}`);
      prismaHandler(error);
    }
  }
}
