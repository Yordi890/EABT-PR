import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module.js';
import { RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  app.enableShutdownHooks();

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: '/', method: RequestMethod.GET },
    ],
  });

  if (configService.get<string>('NODE_ENV') === 'development') {
    const { stringify } = await import('yaml');
    const { resolve, dirname } = await import('path');
    const { writeFileSync } = await import('fs');
    const { fileURLToPath } = await import('url');

    const document: OpenAPIObject = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .addGlobalResponse({
          status: 500,
          description: 'Internal server error',
        })
        .setTitle('NestJS Swagger')
        .setDescription('API description')
        .setVersion('1.0')
        .build(),
    );
    SwaggerModule.setup('swagger', app, document);

    writeFileSync(
      resolve(dirname(fileURLToPath(import.meta.url)), '../../../../packages/openapi/openapi.yaml'),
      stringify(document),
      'utf8',
    );
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(configService.get('PORT') ?? 3000);
}

bootstrap();
