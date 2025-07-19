import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class ProducerDto {
  @IsNotEmpty()
  @IsString()
  dni: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName1: string;

  @IsNotEmpty()
  @IsString()
  lastName2: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  productionUnitName: string;

  @IsNotEmpty()
  @IsString()
  cupCard: string;

  @IsNotEmpty()
  @IsString()
  mlcCard: string;
}
