import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class SupplyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  unit: string;

  @IsPositive()
  @IsNumber()
  price: number;
}
