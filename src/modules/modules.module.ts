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
import { LessonViewModule } from './lesson_view/lesson_view.module';
import { RatingModule } from './rating/rating.module';
import { LastAktivityModule } from './last-aktivity/last-aktivity.module';
import { ExamModule } from './exam/exam.module';
import { PurchasedCourseModule } from './purchased_course/purchased_course.module';

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
    LessonViewModule,
    RatingModule,
    LastAktivityModule,
    ExamModule,
    PurchasedCourseModule,
  ],
  providers: [JwtStrategy],
})
export class ModulesModule {}
