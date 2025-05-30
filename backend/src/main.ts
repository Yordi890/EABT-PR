import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
    .then(r => console.log("Server started successfully."))
    .catch(err => console.error("Server failed with error: %s", err));
