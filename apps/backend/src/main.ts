import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConsoleLogger, RequestMethod, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule, OpenAPIObject } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger(),
  });

  const configService: ConfigService = app.get(ConfigService);

  const PORT: number | undefined = configService.get('PORT');

  // console.log("Este es el hash de turbo " + configService.get('TURBO_HASH'));

  const config = new DocumentBuilder()
    .setTitle('NestJS Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // const yamlPath = path.resolve(__dirname, '../../../../packages/openapi/openapi.yaml');
  //fs.mkdirSync(path.dirname(yamlPath), { recursive: true });
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

  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: '/', method: RequestMethod.GET },
    ],
  });
  await app.listen(PORT ?? 3000);
}

bootstrap();
