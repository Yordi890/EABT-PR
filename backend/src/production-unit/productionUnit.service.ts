import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {ProductionUnitRepository} from './productionUnit.repository';
import {ProductionUnit as ProductionUnitType} from '../../generated/prisma';
import {ProductionUnitDto} from './dto/productionUnit.dto';

@Injectable()
export class ProductionUnitService {
    constructor(
        private readonly productionUnitRepository: ProductionUnitRepository,
    ) {
    }

    async listAllProductionUnit(): Promise<ProductionUnitType[]> {
        return this.productionUnitRepository.retrieveAllProductionUnit();
    }

    async addProductionUnit(productionUnit: ProductionUnitDto): Promise<void> {
        try {
            await this.productionUnitRepository.insertProductionUnit(productionUnit);
        } catch (err) {
            throw new ConflictException("Production Unit already exist");
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
        } catch (err) {
            throw new NotFoundException("User doesn't exist");
        }
    }

    async deleteProductionUnit(name: string): Promise<void> {
        try {
            await this.productionUnitRepository.removeProductionUnit(name);
        } catch (err) {
            throw new NotFoundException("Production unit doesn't exist");
        }
    }
}
