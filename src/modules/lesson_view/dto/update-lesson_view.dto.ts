import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateLessonViewDto {
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  view?: boolean;
}