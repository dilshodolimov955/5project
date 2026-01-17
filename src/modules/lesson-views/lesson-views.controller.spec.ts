import { Test, TestingModule } from '@nestjs/testing';
import { LessonViewsController } from './lesson-views.controller';

describe('LessonViewsController', () => {
  let controller: LessonViewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonViewsController],
    }).compile();

    controller = module.get<LessonViewsController>(LessonViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
