import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VerificationModule } from './verification/verification.module';
import { MentorProfilesModule } from './mentor-profiles/mentor-profiles.module';
import { CoursesModule } from './courses/courses.module';
import { AssignedCoursesModule } from './assigned-courses/assigned-courses.module';
import { PurchasedCoursesModule } from './purchased-courses/purchased-courses.module';
import { RatingsModule } from './ratings/ratings.module';
import { LastActivitiesModule } from './last-activities/last-activities.module';
import { LessonGroupsModule } from './lesson-groups/lesson-groups.module';
import { LessonsModule } from './lessons/lessons.module';
import { LessonViewsModule } from './lesson-views/lesson-views.module';
import { LessonFilesModule } from './lesson-files/lesson-files.module';
import { HomeworksModule } from './homeworks/homeworks.module';
import { HomeworkSubmissionsModule } from './homework-submissions/homework-submissions.module';
import { ExamsModule } from './exams/exams.module';
import { ExamResultsModule } from './exam-results/exam-results.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionAnswersModule } from './question-answers/question-answers.module';

@Module({
  imports: [UsersModule, VerificationModule, MentorProfilesModule, CoursesModule, AssignedCoursesModule, PurchasedCoursesModule, RatingsModule, LastActivitiesModule, LessonGroupsModule, LessonsModule, LessonViewsModule, LessonFilesModule, HomeworksModule, HomeworkSubmissionsModule, ExamsModule, ExamResultsModule, QuestionsModule, QuestionAnswersModule]
})
export class ModulesModule {}
