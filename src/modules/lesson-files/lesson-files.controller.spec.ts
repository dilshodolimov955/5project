import { Test, TestingModule } from '@nestjs/testing';
import { LessonFilesController } from './lesson-files.controller';

describe('LessonFilesController', () => {
  let controller: LessonFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonFilesController],
    }).compile();

    controller = module.get<LessonFilesController>(LessonFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
