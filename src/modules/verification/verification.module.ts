import { Module } from '@nestjs/common';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';
import { RedisModule } from '../common/redis/redis.module';
import { SmsService } from '../common/services/sms.services';

@Module({
  imports: [RedisModule],
  controllers: [VerificationController],
  providers: [VerificationService, SmsService],
  exports: [VerificationService],
})
export class VerificationModule {}
