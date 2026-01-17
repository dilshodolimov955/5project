import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMentorProfileDto } from './dto/create-mentor-profile.dto';
import { UpdateMentorProfileDto } from './dto/update-mentor-profile.dto';

@Injectable()
export class MentorProfilesService {
  constructor(private prisma: PrismaService) {}

  async create(createMentorProfileDto: CreateMentorProfileDto) {
    return this.prisma.mentorProfile.create({
      data: createMentorProfileDto,
    });
  }

  async findAll() {
    return this.prisma.mentorProfile.findMany({
      include: { user: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.mentorProfile.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  async update(id: number, updateMentorProfileDto: UpdateMentorProfileDto) {
    return this.prisma.mentorProfile.update({
      where: { id },
      data: updateMentorProfileDto,
    });
  }

  async remove(id: number) {
    return this.prisma.mentorProfile.delete({
      where: { id },
    });
  }
}