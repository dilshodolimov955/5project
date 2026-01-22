import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VerificationService } from './verification.service';
import { IsPublic } from '../common/decorator/is-public.decorator';
import { SendOtpDto } from './dto/send-otp.dto';

@ApiTags('Verification')
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @IsPublic()
  @Post('send-otp')
  async sendOtp(@Body() dto: SendOtpDto) {
    return this.verificationService.sendOtp(dto.type, dto.phone);
  }
}
