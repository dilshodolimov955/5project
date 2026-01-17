import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LastActivitiesService } from './last-activities.service';
import { CreateLastActivityDto } from './dto/create-last-activity.dto';
import { UpdateLastActivityDto } from './dto/update-last-activity.dto';

@Controller('last-activities')
export class LastActivitiesController {
  constructor(private readonly lastActivitiesService: LastActivitiesService) {}

  @Post()
  create(@Body() createLastActivityDto: CreateLastActivityDto) {
    return this.lastActivitiesService.create(createLastActivityDto);
  }

  @Get()
  findAll() {
    return this.lastActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lastActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLastActivityDto: UpdateLastActivityDto) {
    return this.lastActivitiesService.update(+id, updateLastActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lastActivitiesService.remove(+id);
  }
}
