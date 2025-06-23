import {IsDate, IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";

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
    issueDate: Date;

    @IsDateString()
    @IsNotEmpty()
    expirationDate: Date;

}