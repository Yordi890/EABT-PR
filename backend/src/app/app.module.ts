import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from '../user/user.module';
import {PrismaModule} from "../prisma/prisma.module";
import {ProductionUnitModule} from "../production-unit/productionUnit.module";

@Module({
    imports: [PrismaModule, UserModule, ProductionUnitModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
