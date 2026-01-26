import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Injectable()
export class RatingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateRatingDto) {
    return this.prisma.rating.create({
      data: {
        rate: dto.rate,
        comment: dto.comment,
        userId: parseInt(userId),
        courseId: dto.courseId
      }
    })
  }

  async findAllByCourse(courseId: string) {
    return this.prisma.rating.findMany({
      where: { courseId },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            image: true
          }
        }
      },
      orderBy: { createdAt: 'desc' } })
  }

  async findOne(id: string) {
    const rating = await this.prisma.rating.findUnique({
      where: { id: parseInt(id) },
    })
    if (!rating) {
      throw new NotFoundException('Rating topilmadi')
    }

    return rating
  }

  async update(id: string, userId: string, dto: UpdateRatingDto) {
    const rating = await this.findOne(id);

    if (rating.userId !== parseInt(userId)) {
      throw new ForbiddenException('Siz faqat o‘z ratingingizni tahrirlaysiz');
    }
    return this.prisma.rating.update({ where: { id: parseInt(id) }, data: dto})
  }

  // DELETE
  async remove(id: string, userId: string) {
    const rating = await this.findOne(id)
    if (rating.userId !== parseInt(userId)) {
      throw new ForbiddenException("Siz faqat o‘z ratingingizni o‘chirasiz")
    }

  await this.prisma.rating.delete({ where: { id: parseInt(id) }})
  return "Rating o'chrildi"
  }
}