import { Test, TestingModule } from '@nestjs/testing';
import { LessonViewsService } from './lesson-views.service';

describe('LessonViewsService', () => {
  let service: LessonViewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonViewsService],
    }).compile();

    service = module.get<LessonViewsService>(LessonViewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
