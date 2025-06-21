import { Injectable, NotFoundException } from '@nestjs/common';
import { SupplyDto } from './dto/supply.dto';
import { Supply as SupplyType } from '../../generated/prisma';
import { SupplyRepository } from './supply.repository';

@Injectable()
export class SupplyService {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async listAllSupply(): Promise<SupplyType[]> {
    return await this.supplyRepository.retrieveAllSupply();
  }

  async addSupply(newSupply: SupplyDto): Promise<void> {
    await this.supplyRepository.insertSupply(newSupply);
  }

  async modifySupply(name: string, newSupply: SupplyDto): Promise<void> {
    try {
      await this.supplyRepository.saveSupply(name, newSupply);
    } catch (err) {
      throw new NotFoundException("User doesn't exist");
    }
  }

  async deleteSupply(name: string): Promise<void> {
    try {
      await this.supplyRepository.removeSupply(name);
    } catch (err) {
      throw new NotFoundException("Supply doesn't exist");
    }
  }
}
