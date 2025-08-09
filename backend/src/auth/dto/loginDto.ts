import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  @IsString()
  userName: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  @IsString()
  password: string;
}
