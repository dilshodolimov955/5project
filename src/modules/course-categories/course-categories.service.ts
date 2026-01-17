import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseCategoryDto } from './dto/create-course-category.dto';
import { UpdateCourseCategoryDto } from './dto/update-course-category.dto';

@Injectable()
export class CourseCategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseCategoryDto: CreateCourseCategoryDto) {
    return this.prisma.courseCategory.create({
      data: createCourseCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.courseCategory.findMany({
      include: { courses: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.courseCategory.findUnique({
      where: { id },
      include: { courses: true },
    });
  }

  async update(id: number, updateCourseCategoryDto: UpdateCourseCategoryDto) {
    return this.prisma.courseCategory.update({
      where: { id },
      data: updateCourseCategoryDto,
    });
  }

  async remove(id: number) {
    return this.prisma.courseCategory.delete({
      where: { id },
    });
  }
}
