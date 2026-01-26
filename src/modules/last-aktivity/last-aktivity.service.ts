import { Injectable } from '@nestjs/common';
import { CreateLastAktivityDto } from './dto/create-last-aktivity.dto';
import { UpdateLastAktivityDto } from './dto/update-last-aktivity.dto';

@Injectable()
export class LastAktivityService {
  create(createLastAktivityDto: CreateLastAktivityDto) {
    return 'This action adds a new lastAktivity';
  }

  findAll() {
    return `This action returns all lastAktivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lastAktivity`;
  }

  update(id: number, updateLastAktivityDto: UpdateLastAktivityDto) {
    return `This action updates a #${id} lastAktivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} lastAktivity`;
  }
}
