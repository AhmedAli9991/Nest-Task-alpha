import { Test, TestingModule } from '@nestjs/testing';
import { FileControlerController } from './/file-controler.controller';

describe('FileControlerController', () => {
  let controller: FileControlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileControlerController],
    }).compile();

    controller = module.get<FileControlerController>(FileControlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
