import { Injectable } from '@nestjs/common';
import { SupplyDto } from './dto/supply.dto';
import { Supply as SupplyModel } from '@repo/db';
import { SupplyRepository } from './supply.repository';
import prismaHandler from '../utils/prisma-handler';

@Injectable()
export class SupplyService {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async listAllSupply(): Promise<SupplyModel[]> {
    return await this.supplyRepository.retrieveAllSupply();
  }

  async addSupply(newSupply: SupplyDto): Promise<void> {
    try {
      await this.supplyRepository.insertSupply(newSupply);
    } catch (error) {
      prismaHandler(error);
    }
  }

  async modifySupply(name: string, newSupply: SupplyDto): Promise<void> {
    try {
      await this.supplyRepository.saveSupply(name, newSupply);
    } catch (error) {
      prismaHandler(error);
    }
  }

  async deleteSupply(name: string): Promise<void> {
    try {
      await this.supplyRepository.removeSupply(name);
    } catch (error) {
      prismaHandler(error);
    }
  }
}
