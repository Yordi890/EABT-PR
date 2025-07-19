import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProductionUnitDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
