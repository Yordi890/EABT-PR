import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpCode,
} from '@nestjs/common';
import {LandFileService} from './land-file.service';
import {LandFileModel} from '../../generated/prisma/models/LandFile'
import {LandFileDto} from "./dto/land-file.dto";

@Controller('landFile')
export class LandFileController {
    constructor(private readonly landFileService: LandFileService) {
    }

    @Get()
    async getAllLandFiles(): Promise<LandFileModel[]> {
        return await this.landFileService.listAllLandFile();
    }

    @Post()
    @HttpCode(201)
    async createLandFile(@Body() landFile: LandFileDto): Promise<void> {
        await this.landFileService.addLandFile(landFile);
    }

    @Put(':fileNumber')
    @HttpCode(204)
    async updateLandFile(@Param('fileNumber') fileNumber, @Body() newlandFile: LandFileDto): Promise<void> {
        await this.landFileService.modifyLandFile(fileNumber, newlandFile);
    }

    @Delete(':fileNumber')
    @HttpCode(204)
    async deleteLandFile(@Param('fileNumber') fileNumber: string): Promise<void> {
        await this.landFileService.deleteLandFile(fileNumber);
    }

}
