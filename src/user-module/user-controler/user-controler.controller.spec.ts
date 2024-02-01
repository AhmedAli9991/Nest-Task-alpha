import { Test, TestingModule } from '@nestjs/testing';
import { UserControlerController } from './crud-controler.controller';

describe('UserControlerController', () => {
  let controller: UserControlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserControlerController],
    }).compile();

    controller = module.get<UserControlerController>(UserControlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
