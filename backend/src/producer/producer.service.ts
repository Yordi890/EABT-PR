import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {ProducerRepository} from "./producer.repository";
import {ProducerModel} from '../../generated/prisma/models/Producer';

@Injectable()
export class ProducerService {

    constructor(private readonly producerRepository: ProducerRepository) {
    }

    async listAllProducers(): Promise<ProducerModel[]> {
        return await this.producerRepository.retrieveAllProducers();
    }

    async addProducer(producer): Promise<void> {
        await this.producerRepository.insertProducer(producer);
    }


    async modifyProducer(dni: string, producer): Promise<void> {
        try {
            await this.producerRepository.saveProducer(dni, producer);
        } catch (err) {
            throw new NotFoundException("Producer doesn't exist");
        }
    }

    async deleteProducer(dni: string): Promise<void> {
        try {
            await this.producerRepository.removeProducer(dni);
        } catch (err) {
            throw new NotFoundException("Producer doesn't exist");
        }
    }

}
