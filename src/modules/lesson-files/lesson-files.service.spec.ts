import { Test, TestingModule } from '@nestjs/testing';
import { LessonFilesService } from './lesson-files.service';

describe('LessonFilesService', () => {
  let service: LessonFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonFilesService],
    }).compile();

    service = module.get<LessonFilesService>(LessonFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
