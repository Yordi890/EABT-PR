import { Module } from '@nestjs/common';
import { LandFileService } from './land-file.service';
import { LandFileController } from './land-file.controller';
import {LandFileRepository} from "./land-file.repository";

@Module({
  controllers: [LandFileController],
  providers: [LandFileService, LandFileRepository],
})
export class LandFileModule {}
