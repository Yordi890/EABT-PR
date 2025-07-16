import { Injectable } from '@nestjs/common';
import {ProductionUnitRepository} from './productionUnit.repository';
import {ProductionUnitModel} from '../../generated/prisma/models/ProductionUnit';
import {ProductionUnitDto} from './dto/productionUnit.dto';
import prismaHandler from "../utils/prisma-handler";

@Injectable()
export class ProductionUnitService {
    constructor(
        private readonly productionUnitRepository: ProductionUnitRepository,
    ) {
    }

    async listAllProductionUnit(): Promise<ProductionUnitModel[]> {
        return this.productionUnitRepository.retrieveAllProductionUnit();
    }

    async addProductionUnit(productionUnit: ProductionUnitDto): Promise<void> {
        try {
            await this.productionUnitRepository.insertProductionUnit(productionUnit);
        } catch (error) {
            prismaHandler(error);
        }
    }

    async modifyProductionUnit(
        name: string,
        newProductionUnit: ProductionUnitDto,
    ): Promise<void> {
        try {
            await this.productionUnitRepository.saveProductionUnit(
                name,
                newProductionUnit,
            );
        } catch (error) {
            prismaHandler(error);
        }
    }

    async deleteProductionUnit(name: string): Promise<void> {
        try {
            await this.productionUnitRepository.removeProductionUnit(name);
        } catch (error) {
            prismaHandler(error);
        }
    }
}
