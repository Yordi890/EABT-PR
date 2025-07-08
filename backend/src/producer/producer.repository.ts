import {Injectable} from "@nestjs/common";
import {PrismaService} from '../prisma/prisma.service';
import {ProducerModel} from '../../generated/prisma/models/Producer';

@Injectable()
export class ProducerRepository {

    constructor(private readonly prismaService: PrismaService) {
    }


    async retrieveAllProducers(): Promise<ProducerModel[]> {
        return await this.prismaService.producer.findMany();
    }


    async insertProducer(producer): Promise<void> {
        await this.prismaService.producer.create({data: producer});
    }

    async saveProducer(dni: string, newProducer): Promise<void> {
        await this.prismaService.producer.update({
            data: newProducer,
            where: {
                dni: dni,
            },
        });
    }

    async removeProducer(dni: string): Promise<void> {
        await this.prismaService.producer.delete({
            where: {
                dni: dni,
            },
        });
    }
}