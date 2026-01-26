import { ApiProperty } from '@nestjs/swagger';

export class Profile {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ required: false })
  image?: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  mentorProfile?: any;

  @ApiProperty({ required: false, type: [Object] })
  courses?: any[];

  @ApiProperty({ required: false, type: [Object] })
  ratings?: any[];

  @ApiProperty({ required: false, type: [Object] })
  lessonViews?: any[];
}
