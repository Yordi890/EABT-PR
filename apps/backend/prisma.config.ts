import path from 'node:path';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: path.join(__dirname, 'prisma', 'schema.prisma'), // Ruta relativa al archivo de esquema
  migrations: {
    path: path.join(__dirname, 'db', 'migrations'),
  },
});
