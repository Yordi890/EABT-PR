import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import {RequestMethod, ValidationPipe} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);

    const PORT = configService.get('PORT');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    app.setGlobalPrefix('api', {
        exclude: [
            {path: 'health', method: RequestMethod.GET},
            {path: '/', method: RequestMethod.GET},
        ],
    });
    await app.listen(PORT ?? 3000);
}

bootstrap()
    .then((r) => console.log(`Server started successfully`))
    .catch((err) => console.error('Server failed with error: %s', err));
