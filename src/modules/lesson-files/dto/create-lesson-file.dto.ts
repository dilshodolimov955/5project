import { IsString, IsOptional } from 'class-validator';

export class CreateLessonFileDto {
  @IsString()
  file: string;

  @IsString()
  @IsOptional()
  note?: string;

  @IsString()
  lessonId: string;
}