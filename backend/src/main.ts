import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then((r) => console.log('Server started successfully.'))
  .catch((err) => console.error('Server failed with error: %s', err));
