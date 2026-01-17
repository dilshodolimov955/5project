import { IsString, IsOptional } from 'class-validator';

export class CreateHomeworkDto {
  @IsString()
  task: string;

  @IsString()
  @IsOptional()
  file?: string;

  @IsString()
  lessonId: string;
}