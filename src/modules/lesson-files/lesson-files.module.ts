import { Module } from '@nestjs/common';
import { LessonFilesController } from './lesson-files.controller';
import { LessonFilesService } from './lesson-files.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LessonFilesController],
  providers: [LessonFilesService],
  exports: [LessonFilesService],
})
export class LessonFilesModule {}
