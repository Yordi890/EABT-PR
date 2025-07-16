import {Test, TestingModule} from '@nestjs/testing';
import {SupplyRepository} from "../../src/supply/supply.repository";
import {PrismaService} from "../../src/prisma/prisma.service";
import {SupplyDto} from "../../src/supply/dto/supply.dto";

describe("SupplyRepository", () => {
    let supplyRepository: SupplyRepository;
    let prismaService: PrismaService;

    const mockPrismaService = {
        supply: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                SupplyRepository,
                {provide: PrismaService, useValue: mockPrismaService},
            ]
        }).compile();

        supplyRepository = module.get<SupplyRepository>(SupplyRepository);
        prismaService = module.get<PrismaService>(PrismaService);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('retrieveSupply', () => {
        it('should return an array of supplies', async () => {
            const result = [{
                name: "abono",
                quantity: 3,
                unit: "kg",
                price: 20.0
            }]

            mockPrismaService.supply.findMany.mockResolvedValue(result);

            expect(await supplyRepository.retrieveAllSupply()).toEqual(result);
            expect(mockPrismaService.supply.findMany).toHaveBeenCalled();
        })
    })

    describe('insertSupply', () => {
        it('should insert a supply', async () => {
            const newSupply: SupplyDto = {
                name: "abono",
                quantity: 3,
                unit: "kg",
                price: 20.0
            }
            mockPrismaService.supply.create.mockResolvedValue(newSupply);

            expect(await supplyRepository.insertSupply(newSupply)).toEqual(newSupply);
            expect(mockPrismaService.supply.create).toHaveBeenCalledWith({data: newSupply});
        })
    })

    describe('saveSupply', () => {
        it('should update a supply', async () => {
            const name: string = 'abono';

            const newSupply: SupplyDto = {
                name: "abono",
                quantity: 3,
                unit: "kg",
                price: 20.0
            }

            await supplyRepository.saveSupply(name, newSupply);
            expect(mockPrismaService.supply.update).toHaveBeenCalledWith({
                data: newSupply,
                where: {name: name},
            });
        })
    })

    describe('removeSupply', () => {
        it('should delete a supply', async () => {
            const name = 'abono';

            await supplyRepository.removeSupply(name);
            expect(mockPrismaService.supply.delete).toHaveBeenCalledWith({
                    where: {name: name},
                }
            );
        })
    })
})
