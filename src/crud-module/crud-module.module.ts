import { Module } from '@nestjs/common';
import { CrudControlerController } from './crud-controler/crud-controler.controller';
import { CrudServiceService } from './crud-service/crud-service.service';
import {DbServiceService} from '../common-services/db-service/db-service.service'
@Module({
  controllers: [CrudControlerController],
  providers: [CrudServiceService,DbServiceService]
})
export class CrudModuleModule {}
