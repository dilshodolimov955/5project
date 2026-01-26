import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/common/decorator/is-public.decorator';
import { SendOtpDto } from './dto/send-otp.dto';
import { CreateVerificationDto } from './dto/register.dto';
import { VerificationService } from './verification.service';

@ApiTags('Verification')
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @IsPublic()
  @Post('send-otp')
  async sendOtp(@Body() dto: SendOtpDto) {
    return this.verificationService.sendOtp(dto.type, dto.phone);
  }

  @IsPublic()
  @Post('verify-otp')
  async verifyOtp(@Body() dto: CreateVerificationDto) {
    return this.verificationService.verifyOtp(dto);
  }
}
