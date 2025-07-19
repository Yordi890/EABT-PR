import { Injectable } from '@nestjs/common';
import { LandFileRepository } from './land-file.repository';
import { LandFileModel } from '../../generated/prisma/models/LandFile';
import { LandFileDto } from './dto/land-file.dto';
import prismaHandler from '../utils/prisma-handler';

@Injectable()
export class LandFileService {
  constructor(private readonly landFileRepository: LandFileRepository) {}

  async listAllLandFile(): Promise<LandFileModel[]> {
    return await this.landFileRepository.retrieveAllLandFiles();
  }

  async addLandFile(landFile: LandFileDto): Promise<void> {
    try {
      await this.landFileRepository.insertLandFile(landFile);
    } catch (error) {
      prismaHandler(error);
    }
  }

  async modifyLandFile(
    fileNumber: string,
    newLandFile: LandFileDto,
  ): Promise<void> {
    try {
      await this.landFileRepository.saveLandFile(fileNumber, newLandFile);
    } catch (error) {
      prismaHandler(error);
    }
  }

  async deleteLandFile(fileNumber: string): Promise<void> {
    try {
      await this.landFileRepository.removeLandFile(fileNumber);
    } catch (error) {
      prismaHandler(error);
    }
  }
}
