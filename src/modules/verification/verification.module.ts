import { Module } from '@nestjs/common';
import { RedisModule } from 'src/common/redis/redis.module';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';
import { SmsService } from '@/common/services/sms.services';

@Module({
  imports: [RedisModule],
  controllers: [VerificationController],
  providers: [VerificationService, SmsService],
  exports: [VerificationService],
})
export class VerificationModule {}
