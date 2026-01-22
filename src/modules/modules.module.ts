import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HomeworkModule } from './homework/homework.module';
import { MentorProfileModule } from './mentor_profile/mentor_profile.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { CourseCategoryModule } from './course_category/course_category.module';
import { LessonGroupModule } from './lesson_group/lesson_group.module';
import { ProfileModule } from './profile/profile.module';
import { CourseModule } from './courses/course.module';
import { JwtStrategy } from './common/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    UsersModule,
    HomeworkModule,
    MentorProfileModule,
    CourseModule,
    CourseCategoryModule,
    LessonGroupModule,
    ProfileModule,
  ],
  providers: [JwtStrategy],
})
export class ModulesModule {}