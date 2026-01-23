import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateHomeworkDto {
  @ApiProperty({ example: 'Complete the exercises' })
  @IsString()
  task: string;

  @ApiProperty({ example: 'file.pdf', required: false })
  @IsOptional()
  @IsString()
  file?: string;

  @ApiProperty({ example: 'lesson-uuid' })
  @IsString()
  lessonId: string;
}