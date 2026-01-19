import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RedisService } from '../common/redis/redis.service';
import { SmsService } from '../common/services/sms.services';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'your-secret-key',
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    RedisService,
    SmsService,
    ConfigService,
  ],
  exports: [UsersService, JwtModule],
})
export class UsersModule {}