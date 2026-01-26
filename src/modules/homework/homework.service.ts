import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { UpdateHomeworkDto } from './dto/update-homework.dto';

@Injectable()
export class HomeworkService {
  constructor(private prisma: PrismaService) {}

  async create(createHomeworkDto: CreateHomeworkDto, userId: string) {
    try {
      const homework = await this.prisma.homework.create({
        data: {
          task: createHomeworkDto.task,
          file: createHomeworkDto.file,
          lessonId: createHomeworkDto.lessonId,
        },
        include: {
          lesson: true,
        },
      });
      return homework;
    } catch (error) {
      throw new BadRequestException('Vazifani yaratishda xato yuz berdi');
    }
  }

  async findAll() {
    try {
      const homeworks = await this.prisma.homework.findMany({
        include: {
          lesson: true,
          submissions: true,
        },
      });
      return homeworks;
    } catch (error) {
      throw new BadRequestException('Vazifalarni olishda xato yuz berdi');
    }
  }

  async findOne(id: string) {
    try {
      const homework = await this.prisma.homework.findUnique({
        where: { id: parseInt(id) },
        include: {
          lesson: true,
          submissions: true,
        },
      });
      if (!homework) {
        throw new NotFoundException('Vazifa topilmadi');
      }
      return homework;
    } catch (error) {
      throw new BadRequestException('Vazifani olishda xato yuz berdi');
    }
  }

  async update(
    id: string,
    updateHomeworkDto: UpdateHomeworkDto,
    userId: string,
  ) {
    try {
      const homework = await this.prisma.homework.update({
        where: { id: parseInt(id) },
        data: {
          task: updateHomeworkDto.task,
          file: updateHomeworkDto.file,
          lessonId: updateHomeworkDto.lessonId,
        },
        include: {
          lesson: true,
        },
      });
      return homework;
    } catch (error) {
      throw new BadRequestException('Vazifani yangilashda xato yuz berdi');
    }
  }

  async remove(id: string, userId: string) {
    try {
      await this.prisma.homework.delete({
        where: { id: parseInt(id) },
      });
      return { message: "Vazifa o'chirildi" };
    } catch (error) {
      throw new BadRequestException("Vazifani o'chirishda xato yuz berdi");
    }
  }
}
