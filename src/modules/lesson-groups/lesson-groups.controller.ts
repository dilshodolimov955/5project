import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonGroupsService } from './lesson-groups.service';
import { CreateLessonGroupDto } from './dto/create-lesson-group.dto';
import { UpdateLessonGroupDto } from './dto/update-lesson-group.dto';

@Controller('lesson-groups')
export class LessonGroupsController {
  constructor(private readonly lessonGroupsService: LessonGroupsService) {}

  @Post()
  create(@Body() createLessonGroupDto: CreateLessonGroupDto) {
    return this.lessonGroupsService.create(createLessonGroupDto);
  }

  @Get()
  findAll() {
    return this.lessonGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonGroupDto: UpdateLessonGroupDto) {
    return this.lessonGroupsService.update(+id, updateLessonGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonGroupsService.remove(+id);
  }
}
