import { IsNotEmpty, IsString } from 'class-validator';
import { ApiSchema } from '@nestjs/swagger';

@ApiSchema({ description: 'Usado para la creación de un usuario' })
export default class UserDto {
  @IsString()
  @IsNotEmpty()
  identityCard!: string;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsString()
  @IsNotEmpty()
  userName!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
