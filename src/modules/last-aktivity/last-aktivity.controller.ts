import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LastAktivityService } from './last-aktivity.service';
import { CreateLastAktivityDto } from './dto/create-last-aktivity.dto';
import { UpdateLastAktivityDto } from './dto/update-last-aktivity.dto';

@Controller('last-aktivity')
export class LastAktivityController {
  constructor(private readonly lastAktivityService: LastAktivityService) {}

  @Post()
  create(@Body() createLastAktivityDto: CreateLastAktivityDto) {
    return this.lastAktivityService.create(createLastAktivityDto);
  }

  @Get()
  findAll() {
    return this.lastAktivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lastAktivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLastAktivityDto: UpdateLastAktivityDto) {
    return this.lastAktivityService.update(+id, updateLastAktivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lastAktivityService.remove(+id);
  }
}
