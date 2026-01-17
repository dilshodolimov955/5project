import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateMentorProfileDto {
  @IsString()
  @IsOptional()
  about?: string;

  @IsString()
  @IsOptional()
  job?: string;

  @IsInt()
  experience: number;

  @IsString()
  @IsOptional()
  telegram?: string;

  @IsString()
  @IsOptional()
  instagram?: string;

  @IsString()
  @IsOptional()
  linkedin?: string;

  @IsString()
  @IsOptional()
  facebook?: string;

  @IsString()
  @IsOptional()
  github?: string;

  @IsString()
  @IsOptional()
  website?: string;

  @IsInt()
  userId: number;
}