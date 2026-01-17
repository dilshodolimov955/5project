import { Test, TestingModule } from '@nestjs/testing';
import { HomeworkSubmissionsService } from './homework-submissions.service';

describe('HomeworkSubmissionsService', () => {
  let service: HomeworkSubmissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeworkSubmissionsService],
    }).compile();

    service = module.get<HomeworkSubmissionsService>(HomeworkSubmissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
