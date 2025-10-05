import { Injectable, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class ShutdownService implements OnApplicationShutdown {
  async onApplicationShutdown(signal?: string) {
    console.log(`Aplicación cerrándose por señal: ${signal}`);
    // Aquí puedes cerrar colas, sockets, caches, etc.
  }
}
