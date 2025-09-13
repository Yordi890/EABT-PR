import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LandFileDto {
  @IsString()
  @IsNotEmpty()
  producerdni: string;

  @IsString()
  @IsNotEmpty()
  fileNumber: string;

  @IsNumber()
  area: number;

  @IsString()
  @IsNotEmpty()
  propertyType: string;

  @IsDateString()
  @IsNotEmpty()
  issueDate: string;

  @IsDateString()
  @IsNotEmpty()
  expirationDate: string;
}
