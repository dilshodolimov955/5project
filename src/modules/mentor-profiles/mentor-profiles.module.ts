import { Module } from '@nestjs/common';
import { MentorProfilesService } from './mentor-profiles.service';
import { MentorProfilesController } from './mentor-profiles.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MentorProfilesController],
  providers: [MentorProfilesService],
  exports: [MentorProfilesService],
})
export class MentorProfilesModule {}