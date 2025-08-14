import {Global, Module} from '@nestjs/common';
import {PrismaClient} from '../../generated/prisma/client'

@Global()
@Module({
    providers: [PrismaClient],
    exports: [PrismaClient],
})
export class PrismaModule {
}
