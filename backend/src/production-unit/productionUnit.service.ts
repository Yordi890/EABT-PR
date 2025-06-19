import {Injectable} from '@nestjs/common';
import {ProductionUnitRepository} from "./productionUnit.repository";

@Injectable()
export class ProductionUnitService {

    constructor(private readonly productionUnitRepository: ProductionUnitRepository) {
    }

    async listAllProductionUnit() {
        return this.productionUnitRepository.retrieveAllProductionUnit();
    }

    async addProductionUnit(data) {
        return this.productionUnitRepository.insertProductionUnit(data);
    }

    async modifyProductionUnit(name, data) {
        return this.productionUnitRepository.saveProductionUnit(name, data);
    }

    async deleteProductionUnit(name: string) {
        return this.productionUnitRepository.removeProductionUnit(name);
    }

}
