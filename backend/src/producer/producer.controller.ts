import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpCode,
} from '@nestjs/common';

import {ProducerService} from './producer.service';
import {ProducerModel} from 'generated/prisma/models/Producer'

@Controller('producer')
export class ProducerController {
    constructor(private readonly producerService: ProducerService) {
    }


    @Get()
    async getAllProducers(): Promise<ProducerModel[]> {
        return await this.producerService.listAllProducers();
    }

    @Post()
    @HttpCode(201)
    async createProducer(@Body() producer): Promise<void> {
        await this.producerService.addProducer(producer);
    }

    @Put(':dni')
    @HttpCode(204)
    async updateProducer(@Param('dni') dni, @Body() newProducer): Promise<void> {
       await this.producerService.modifyProducer(dni, newProducer);
    }

    @Delete(':dni')
    @HttpCode(204)
    async deleteProducer(@Param('dni') dni: string): Promise<void> {
        await this.producerService.deleteProducer(dni);
    }
}
