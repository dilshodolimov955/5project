import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateHomeworkDto {
  @ApiProperty({ example: 'Updated task', required: false })
  @IsOptional()
  @IsString()
  task?: string;

  @ApiProperty({ example: 'updated-file.pdf', required: false })
  @IsOptional()
  @IsString()
  file?: string;

  @ApiProperty({ example: 'lesson-uuid', required: false })
  @IsOptional()
  @IsString()
  lessonId?: string;
}
