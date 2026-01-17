import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({
      data: createCourseDto,
      include: {
        category: true,
        mentor: true,
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      include: {
        category: true,
        mentor: true,
        groups: true,
        assigned: true,
        purchased: true,
        ratings: true,
        questions: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
      include: {
        category: true,
        mentor: true,
        groups: {
          include: {
            lessons: true,
            exams: true,
          },
        },
        assigned: true,
        purchased: true,
        ratings: true,
        questions: true,
      },
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
