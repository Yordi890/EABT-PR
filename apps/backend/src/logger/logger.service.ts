import { Injectable } from '@nestjs/common';
import { createLogger, format, transports, Logger as WinstonLogger } from 'winston';
import { inspect } from 'util';

@Injectable()
export class LoggerService {
  private readonly winstonLogger: WinstonLogger;

  constructor() {
    this.winstonLogger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.printf(({ level, message, timestamp }) => {
          return JSON.stringify({
            timestamp,
            level: level.toUpperCase(),
            message,
          });
        }),
      ),
      transports: [new transports.Console()],
    });
  }

  private formatMessage(message: string, obj?: any): string {
    if (!obj) return message;
    const objString = inspect(obj, { depth: null, showHidden: false }).replace(/\n/g, '');
    return `${message} ${objString}`;
  }

  log(message: string, obj?: any, context?: string) {
    const formattedMessage = this.formatMessage(message, obj);
    this.winstonLogger.info(formattedMessage);
  }

  error(message: string, trace?: string, context?: string) {
    this.winstonLogger.error(this.formatMessage(message, trace));
  }

  warn(message: string, obj?: any, context?: string) {
    const formattedMessage = this.formatMessage(message, obj);
    this.winstonLogger.warn(formattedMessage);
  }

  debug(message: string, obj?: any, context?: string) {
    const formattedMessage = this.formatMessage(message, obj);
    this.winstonLogger.debug(formattedMessage);
  }
}
