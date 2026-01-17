import { Module } from '@nestjs/common';
import { HomeworkSubmissionsController } from './homework-submissions.controller';
import { HomeworkSubmissionsService } from './homework-submissions.service';

@Module({
  controllers: [HomeworkSubmissionsController],
  providers: [HomeworkSubmissionsService]
})
export class HomeworkSubmissionsModule {}
