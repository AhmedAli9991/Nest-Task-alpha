import { Module } from '@nestjs/common';
import { CrudControlerController } from './crud-controler/crud-controler.controller';
import { CrudServiceService } from './crud-service/crud-service.service';

@Module({
  controllers: [CrudControlerController],
  providers: [CrudServiceService]
})
export class CrudModuleModule {}
