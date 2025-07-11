import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import { LandFileModel} from '../../generated/prisma/models/LandFile'
import {LandFileDto} from "./dto/land-file.dto";

@Injectable()
export class LandFileRepository {

    private fecha : Date = new Date();
    constructor(private readonly prismaService: PrismaService) {
    }

    async retrieveAllLandFiles(): Promise<LandFileModel[]> {
        return await this.prismaService.landFile.findMany();
    }

    async insertLandFile(landFile: LandFileDto): Promise<void> {
        await this.prismaService.landFile.create({data: landFile});
    }

    async saveLandFile(fileNumber: string, newlandFile: LandFileDto): Promise<void> {
        await this.prismaService.landFile.update({
            data: newlandFile,
            where: {
                fileNumber: fileNumber,
            }
        })
    }

    async removeLandFile(fileNumber : string): Promise<void> {
       await this.prismaService.landFile.delete({
           where: {
               fileNumber: fileNumber,
           }
       })
    }
}
