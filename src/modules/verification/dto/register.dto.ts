import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { EVerificationTypes } from '@/common/types/verification.types';

export class CreateVerificationDto {
  @ApiProperty({ example: '+998992250038' })
  @IsString()
  phone: string;

  @ApiProperty({
    example: EVerificationTypes.REGISTER,
    enum: EVerificationTypes,
  })
  @IsEnum(EVerificationTypes)
  type: EVerificationTypes;

  @ApiProperty({ example: '000000' })
  @IsString()
  otp: string;
}
