import { Module } from '@nestjs/common';
import { LessonGroupsService } from './lesson-groups.service';
import { LessonGroupsController } from './lesson-groups.controller';

@Module({
  controllers: [LessonGroupsController],
  providers: [LessonGroupsService],
})
export class LessonGroupsModule {}
