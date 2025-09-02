import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConsoleLogger, RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger(),
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  const configService: ConfigService = app.get(ConfigService);

  const PORT: number | undefined = configService.get('PORT');

  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: '/', method: RequestMethod.GET },
    ],
  });

  const config = new DocumentBuilder()
    .addGlobalResponse({
      status: 500,
      description: 'Internal server error',
    })
    .setTitle('NestJS Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  fs.writeFileSync(
    path.resolve(__dirname, '../../../../packages/openapi/openapi.yaml'),
    yaml.stringify(document),
    'utf8',
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(PORT ?? 3000);
}

bootstrap();
