import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonViewDto } from './dto/create-lesson-view.dto';
import { UpdateLessonViewDto } from './dto/update-lesson-view.dto';

@Injectable()
export class LessonViewsService {
  constructor(private prisma: PrismaService) {}

  async create(createLessonViewDto: CreateLessonViewDto) {
    return this.prisma.lessonView.create({
      data: createLessonViewDto,
      include: { lesson: true, user: true },
    });
  }

  async findAll() {
    return this.prisma.lessonView.findMany({
      include: { lesson: true, user: true },
    });
  }

  async findOne(lessonId: string, userId: number) {
    return this.prisma.lessonView.findUnique({
      where: { lessonId_userId: { lessonId, userId } },
      include: { lesson: true, user: true },
    });
  }

  async update(lessonId: string, userId: number, updateLessonViewDto: UpdateLessonViewDto) {
    return this.prisma.lessonView.update({
      where: { lessonId_userId: { lessonId, userId } },
      data: updateLessonViewDto,
      include: { lesson: true, user: true },
    });
  }

  async remove(lessonId: string, userId: number) {
    return this.prisma.lessonView.delete({
      where: { lessonId_userId: { lessonId, userId } },
    });
  }
}
