import { Module } from '@nestjs/common';
import { LessonViewsController } from './lesson-views.controller';
import { LessonViewsService } from './lesson-views.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LessonViewsController],
  providers: [LessonViewsService],
  exports: [LessonViewsService],
})
export class LessonViewsModule {}
