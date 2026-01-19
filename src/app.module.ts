import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ModulesModule } from './modules/modules.module';
import { RedisModule } from './modules/common/redis/redis.module';

@Module({
  imports: [PrismaModule, ModulesModule, RedisModule],
})
export class AppModule {}
