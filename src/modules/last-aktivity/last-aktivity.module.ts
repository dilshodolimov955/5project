import { Module } from '@nestjs/common';
import { LastAktivityService } from './last-aktivity.service';
import { LastAktivityController } from './last-aktivity.controller';

@Module({
  controllers: [LastAktivityController],
  providers: [LastAktivityService],
})
export class LastAktivityModule {}
