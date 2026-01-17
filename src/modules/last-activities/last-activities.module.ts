import { Module } from '@nestjs/common';
import { LastActivitiesService } from './last-activities.service';
import { LastActivitiesController } from './last-activities.controller';

@Module({
  controllers: [LastActivitiesController],
  providers: [LastActivitiesService],
})
export class LastActivitiesModule {}
