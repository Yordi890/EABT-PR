import { IsNotEmpty, IsString } from 'class-validator';

export class ProductionUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
