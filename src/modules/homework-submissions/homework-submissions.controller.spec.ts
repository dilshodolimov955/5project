import { Test, TestingModule } from '@nestjs/testing';
import { HomeworkSubmissionsController } from './homework-submissions.controller';

describe('HomeworkSubmissionsController', () => {
  let controller: HomeworkSubmissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeworkSubmissionsController],
    }).compile();

    controller = module.get<HomeworkSubmissionsController>(HomeworkSubmissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
