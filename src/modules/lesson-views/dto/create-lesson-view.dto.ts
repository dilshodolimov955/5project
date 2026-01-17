import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateLessonViewDto {
  @IsString()
  lessonId: string;

  @IsInt()
  userId: number;

  @IsBoolean()
  view: boolean;
}