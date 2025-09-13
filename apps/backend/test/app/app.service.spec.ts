import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../src/app/app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should return "Server is running correctly!"', () => {
    expect(appService.isAlive()).toBe('Server is running correctly!');
  });
});
