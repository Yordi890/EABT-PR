import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductionUnitRepository {
    constructor(private readonly prismaService: PrismaService) {
    }

    async retrieveAllProductionUnit() {
        return this.prismaService.productionUnit.findMany();
    }

    async insertProductionUnit(data) {
        return this.prismaService.productionUnit.create(data);
    }

    async saveProductionUnit(name, data) {
        return this.prismaService.productionUnit.update({
            data: data,
            where: {name: name}
        });
    }

    async removeProductionUnit(name) {
        return this.prismaService.productionUnit.delete(
            {
                where: {name: name}
            }
        )
    }


}