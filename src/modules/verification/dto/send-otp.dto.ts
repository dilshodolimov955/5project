import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { EVerificationTypes } from '../../common/types/verification.types';

export class SendOtpDto {
  @ApiProperty({ example: '+998992250038' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'register', enum: EVerificationTypes })
  @IsEnum(EVerificationTypes)
  type: EVerificationTypes;
}
