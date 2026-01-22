import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { EVerificationTypes } from '../common/types/verification.types';
import { generateOtp } from '../common/core/random';
import { RedisService } from '../common/redis/redis.service';
import { SmsService } from '../common/services/sms.services';
import { CreateVerificationDto } from './dto/register.dto';

@Injectable()
export class VerificationService {
  constructor(
    private redis: RedisService,
    private sms: SmsService,
  ) {}

  async sendOtp(type: EVerificationTypes, phone: string) {
    const otp = generateOtp();
    const key = `${type}_${phone}`;
    await this.redis.set(key, otp, 600);

    let message = '';
    if (type === EVerificationTypes.REGISTER) {
      message = `Fixoo platformasidan ro'yxatdan o'tish uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;
    } else if (type === EVerificationTypes.RESET_PASSWORD) {
      message = `Fixoo platformasida parolingizni tiklash uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;
    } else if (type === EVerificationTypes.EDIT_PHONE) {
      message = `Fixoo platformasida telefoningizni o'zgartirish uchun tasdiqlash kodi: ${otp}. Kodni hech kimga bermang!`;
    }

    await this.sms.sendSMS(message, phone);
    return {
      message: 'OTP SMS orqali yuborildi',
      success: true,
    };
  }

  async verifyOtp(dto: CreateVerificationDto) {
    const key = `${dto.type}_${dto.phone}`;
    const storedOtp = await this.redis.get(key);

    if (!storedOtp || storedOtp !== dto.otp) {
      throw new HttpException(
        "OTP noto'g'ri yoki muddati tugagan",
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      message: 'OTP muvaffaqiyatli tasdiqlandi',
      type: dto.type,
      phone: dto.phone,
      success: true,
    };
  }

  async deleteOtp(type: EVerificationTypes, phone: string) {
    const key = `${type}_${phone}`;
    await this.redis.delete(key);
  }
}
