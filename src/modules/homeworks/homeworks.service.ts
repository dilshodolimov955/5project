import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { UpdateHomeworkDto } from './dto/update-homework.dto';

@Injectable()
export class HomeworksService {
  constructor(private prisma: PrismaService) {}

  async create(createHomeworkDto: CreateHomeworkDto) {
    return this.prisma.homework.create({
      data: createHomeworkDto,
      include: { lesson: true, submissions: true },
    });
  }

  async findAll() {
    return this.prisma.homework.findMany({
      include: { lesson: true, submissions: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.homework.findUnique({
      where: { id },
      include: { lesson: true, submissions: true },
    });
  }

  async update(id: number, updateHomeworkDto: UpdateHomeworkDto) {
    return this.prisma.homework.update({
      where: { id },
      data: updateHomeworkDto,
      include: { lesson: true, submissions: true },
    });
  }

  async remove(id: number) {
    return this.prisma.homework.delete({
      where: { id },
    });
  }
}
