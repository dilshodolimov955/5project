import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonViewsService } from './lesson-views.service';
import { CreateLessonViewDto } from './dto/create-lesson-view.dto';
import { UpdateLessonViewDto } from './dto/update-lesson-view.dto';

@Controller('lesson-views')
export class LessonViewsController {
  constructor(private readonly lessonViewsService: LessonViewsService) {}

  @Post()
  create(@Body() createLessonViewDto: CreateLessonViewDto) {
    return this.lessonViewsService.create(createLessonViewDto);
  }

  @Get()
  findAll() {
    return this.lessonViewsService.findAll();
  }

  @Get(':lessonId/:userId')
  findOne(@Param('lessonId') lessonId: string, @Param('userId') userId: string) {
    return this.lessonViewsService.findOne(lessonId, +userId);
  }

  @Patch(':lessonId/:userId')
  update(@Param('lessonId') lessonId: string, @Param('userId') userId: string, @Body() updateLessonViewDto: UpdateLessonViewDto) {
    return this.lessonViewsService.update(lessonId, +userId, updateLessonViewDto);
  }

  @Delete(':lessonId/:userId')
  remove(@Param('lessonId') lessonId: string, @Param('userId') userId: string) {
    return this.lessonViewsService.remove(lessonId, +userId);
  }
}
