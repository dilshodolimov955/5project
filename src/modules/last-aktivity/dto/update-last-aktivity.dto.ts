import { PartialType } from '@nestjs/swagger';
import { CreateLastAktivityDto } from './create-last-aktivity.dto';

export class UpdateLastAktivityDto extends PartialType(CreateLastAktivityDto) {}
