import { Test, TestingModule } from '@nestjs/testing';
import { SupplyModule } from '../../src/supply/supply.module';
import { SupplyController } from '../../src/supply/supply.controller';
import { SupplyService } from '../../src/supply/supply.service';
import { SupplyRepository } from '../../src/supply/supply.repository';
import { PrismaModule } from "../../src/prisma/prisma.module";

describe('SupplyModule', () => {
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [SupplyModule, PrismaModule],
        }).compile();
    });

    it('should be defined', () => {
        expect(module).toBeDefined();
    });

    it('should contain the SupplyController', () => {
        const supplyController = module.get<SupplyController>(SupplyController);
        expect(supplyController).toBeDefined();
    });

    it('should contain the SupplyService', () => {
        expect(module.get<SupplyService>(SupplyService)).toBeDefined();
    });

    it('should contain the SupplyRepository', () => {
        expect(module.get<SupplyRepository>(SupplyRepository)).toBeDefined();
    });
});
