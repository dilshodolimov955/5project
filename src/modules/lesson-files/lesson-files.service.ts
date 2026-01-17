import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonFileDto } from './dto/create-lesson-file.dto';
import { UpdateLessonFileDto } from './dto/update-lesson-file.dto';

@Injectable()
export class LessonFilesService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonFileDto: CreateLessonFileDto) {
    return this.prisma.lessonFile.create({
      data: createLessonFileDto,
      include: { lesson: true },
    });
  }

  async findAll() {
    return this.prisma.lessonFile.findMany({
      include: { lesson: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.lessonFile.findUnique({
      where: { id },
      include: { lesson: true },
    });
  }

  async update(id: number, updateLessonFileDto: UpdateLessonFileDto) {
    return this.prisma.lessonFile.update({
      where: { id },
      data: updateLessonFileDto,
      include: { lesson: true },
    });
  }

  async remove(id: number) {
    return this.prisma.lessonFile.delete({
      where: { id },
    });
  }
}
