import {Test, TestingModule} from '@nestjs/testing';
import {ProductionUnitRepository} from "../../src/production-unit/productionUnit.repository";
import {PrismaService} from '../../src/prisma/prisma.service';
import {ProductionUnitDto} from "../../src/production-unit/dto/productionUnit.dto";

describe('ProductionUnitRepository Tests', () => {
    let productionUnitRepository: ProductionUnitRepository;
    let prismaService: PrismaService;


    const mockPrismaService = {
        productionUnit: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
    }

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                ProductionUnitRepository,
                {provide: PrismaService, useValue: mockPrismaService},
            ]
        }).compile();

        productionUnitRepository = module.get<ProductionUnitRepository>(ProductionUnitRepository);
        prismaService = module.get<PrismaService>(PrismaService);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('retrieveAllProductionUnit', () => {
        it('should return an array of production unit', async () => {

            const result = [
                {id: 1, name: 'Ceferino Lopez', address: 'Calle 5ta #8'}
            ]

            mockPrismaService.productionUnit.findMany.mockResolvedValue(result);

            expect(await productionUnitRepository.retrieveAllProductionUnit()).toEqual(result);
            expect(mockPrismaService.productionUnit.findMany).toHaveBeenCalled();
        });
    })

    describe('insertProductionUnit', () => {
        it('should insert a production unit', async () => {
            const productionUnit = {name: 'Ceferino Lopez', address: 'Calle 5ta #8'}

            mockPrismaService.productionUnit.create.mockResolvedValue(productionUnit);

            expect(await productionUnitRepository.insertProductionUnit(productionUnit)).toEqual(productionUnit);
            expect(mockPrismaService.productionUnit.create).toHaveBeenCalledWith({data: productionUnit});
        })
    })

    describe('saveProductionUnit', () => {
        it('should update a production unit', async () => {
            const name: string = "Rafael Loynaz";
            const productionUnit = {name: 'Ceferino Lopez', address: 'Calle 5ta #8'}


            await productionUnitRepository.saveProductionUnit(name, productionUnit);
            expect(mockPrismaService.productionUnit.update).toHaveBeenCalledWith({
                data: productionUnit,
                where: {name: name},
            })
        })
    })

    describe('removeProductionUnit', () => {
        it('should remove a production unit', async () => {
            const name: string = "Ceferino Lopez";

            await productionUnitRepository.removeProductionUnit(name);
            expect(mockPrismaService.productionUnit.delete).toHaveBeenCalledWith({
                where: {name: name},
            })
        })
    })

})
