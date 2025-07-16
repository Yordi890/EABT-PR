import {Injectable} from '@nestjs/common';
import {ProducerRepository} from "./producer.repository";
import {ProducerModel} from '../../generated/prisma/models/Producer';
import prismaHandler from "../utils/prisma-handler";

@Injectable()
export class ProducerService {

    constructor(private readonly producerRepository: ProducerRepository) {
    }

    async listAllProducers(): Promise<ProducerModel[]> {
        return await this.producerRepository.retrieveAllProducers();
    }

    async addProducer(producer): Promise<void> {
        try {
            await this.producerRepository.insertProducer(producer);
        } catch (error) {
            prismaHandler(error);
        }
    }


    async modifyProducer(dni: string, producer): Promise<void> {
        try {
            await this.producerRepository.saveProducer(dni, producer);
        } catch (error) {
            prismaHandler(error);
        }
    }

    async deleteProducer(dni: string): Promise<void> {
        try {
            await this.producerRepository.removeProducer(dni);
        } catch (error) {
            prismaHandler(error);
        }
    }

}
