import {Injectable} from '@nestjs/common';
import {LandFileRepository} from "./land-file.repository";
import {LandFileModel} from '../../generated/prisma/models/LandFile'
import {LandFileDto} from "./dto/land-file.dto";

@Injectable()
export class LandFileService {
    constructor(private readonly landFileRepository: LandFileRepository) {
    }

    async listAllLandFile(): Promise<LandFileModel[]> {
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
