import { Module } from '@nestjs/common';
import GenericModule from '../generic-crud/generic.module.js';
import UserService from './user.service.js';
import UserDto from './dto/user.dto.js';

@Module({
  imports: [
    GenericModule.forRoot({
      name: 'user',
      routePrefix: 'users',
      modelName: 'user',
      idFieldName: 'identityCard',
      dto: UserDto,
      customService: UserService,
    }),
  ],
  providers: [],
  exports: [GenericModule],
})
export default class UserModule {}
