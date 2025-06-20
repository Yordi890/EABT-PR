import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isAlive(): string {
    return 'Server is running correctly!';
  }
}
