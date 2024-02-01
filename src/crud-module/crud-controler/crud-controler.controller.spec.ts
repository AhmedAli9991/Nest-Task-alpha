import { Test, TestingModule } from '@nestjs/testing';
import { CrudControlerController } from './crud-controler.controller';

describe('CrudControlerController', () => {
  let controller: CrudControlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudControlerController],
    }).compile();

    controller = module.get<CrudControlerController>(CrudControlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
