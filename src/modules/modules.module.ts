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
import { JwtStrategy } from '@/common/strategies/jwt.strategy';
import { LessonModule } from './lesson/lesson.module';
import { AssignedCourseModule } from './assigned_course/assigned_course.module';
import { CommonModule } from '@/common/common.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    CommonModule,
    UsersModule,
    HomeworkModule,
    MentorProfileModule,
    CourseModule,
    CourseCategoryModule,
    LessonGroupModule,
    ProfileModule,
    LessonModule,
    AssignedCourseModule,
  ],
  providers: [JwtStrategy],
})
export class ModulesModule {}