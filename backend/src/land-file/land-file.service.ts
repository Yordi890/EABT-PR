import {Injectable} from '@nestjs/common';
import {LandFileRepository} from "./land-file.repository";
import {LandFile as LandFileType} from '../../generated/prisma'
import {LandFileDto} from "./dto/land-file.dto";

@Injectable()
export class LandFileService {
    constructor(private readonly landFileRepository: LandFileRepository) {
    }

    async listAllLandFile(): Promise<LandFileType[]> {
        return await this.landFileRepository.retrieveAllLandFiles();
    }

    async addLandFile(landFile: LandFileDto): Promise<void> {
        await this.landFileRepository.insertLandFile(landFile);
    }

    async modifyLandFile(fileNumber: string, newLandFile: LandFileDto): Promise<void> {
        await this.landFileRepository.saveLandFile(fileNumber, newLandFile);
    }

    async deleteLandFile(fileNumber: string): Promise<void> {
        await this.landFileRepository.removeLandFile(fileNumber);
    }

}
