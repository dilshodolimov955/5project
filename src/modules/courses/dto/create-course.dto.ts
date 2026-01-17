import { IsString, IsDecimal, IsEnum, IsOptional, IsBoolean, IsInt } from 'class-validator';
import { CourseLevel } from '@prisma/client';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsString()
  about: string;

  @IsDecimal()
  price: number;

  @IsString()
  banner: string;

  @IsString()
  @IsOptional()
  introVideo?: string;

  @IsEnum(CourseLevel)
  level: CourseLevel;

  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @IsInt()
  categoryId: number;

  @IsInt()
  mentorId: number;
}
