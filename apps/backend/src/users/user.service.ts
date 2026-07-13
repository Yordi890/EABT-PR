import { Injectable, Inject } from "@nestjs/common";
import GenericService from "../generic-crud/generic.service.js";
import { UserModel } from "../../generated/prisma/models/User.js";
import UserDto from "./dto/user.dto.js";
import LoggerService from "../logger/logger.service.js";
import { hash as bcryptHash } from "bcrypt";
import IGenericRepository from "../generic-crud/interfaces/generic.repository.interface.js";
import handlePrismaError from "../utils/prisma-handler.js";

@Injectable()
export default class UserService extends GenericService<
  UserModel,
  UserDto,
  string
> {
  constructor(
    @Inject("USER_REPOSITORY")
    repository: IGenericRepository<UserModel, UserDto, string>,
    logger: LoggerService,
  ) {
    super(repository, logger);
  }

  // Sobrescribimos el método create para encriptar la contraseña
  async create(item: UserDto): Promise<UserModel> {
    item.password = await bcryptHash(item.password, 10);

    try {
      const createdItem = await this.repository.create(item);
      this.logger.log("Elemento creado en usuarios", item);
      return createdItem;
    } catch (err) {
      handlePrismaError(err);
    }
  }

  // Puedes añadir métodos específicos para usuarios si es necesario
  async getUserByUsername(username: string): Promise<UserModel | null> {
    return this.repository.findByField("userName", username);
  }
}
