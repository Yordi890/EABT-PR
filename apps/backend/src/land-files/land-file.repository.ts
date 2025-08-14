import { Injectable } from '@nestjs/common';
import { LandFileModel } from '../../generated/prisma/models/LandFile';
import { LandFileDto } from './dto/land-file.dto';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class LandFileRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async retrieveAllLandFiles(): Promise<LandFileModel[]> {
    return this.prisma.landFile.findMany();
  }

  async insertLandFile(landFile: LandFileDto): Promise<void> {
    await this.prisma.landFile.create({ data: landFile });
  }

  async saveLandFile(
    fileNumber: string,
    newlandFile: LandFileDto,
  ): Promise<void> {
    await this.prisma.landFile.update({
      data: newlandFile,
      where: {
        fileNumber: fileNumber,
      },
    });
  }

  async removeLandFile(fileNumber: string): Promise<void> {
    await this.prisma.landFile.delete({
      where: {
        fileNumber: fileNumber,
      },
    });
  }
}
