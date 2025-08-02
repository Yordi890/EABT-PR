import { Injectable } from '@nestjs/common';
import { Logger, createLogger, format, transports } from 'winston';
import { inspect } from 'util';

@Injectable()
export class LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),

        format.printf(({ level, message, timestamp }) => {
          return JSON.stringify({
            timestamp: timestamp,
            level: level.toUpperCase(),
            message: message,
          });
        }),
      ),
      transports: [
        // new transports.File({ filename: 'combined.log' }),
        new transports.Console(),
      ],
    });
  }

  log(obj) {
    // this.logger.info(message);
    const objString = inspect(obj, {
      showHidden: false,
      depth: null,
      // colors: true,
    }).replace(/\n/g, '');
    this.logger.info(objString);
  }

  error(message: string, trace: string) {
    this.logger.error(message, { trace });
  }

  warn(message: string) {
    this.logger.warn(message);
  }
}
