import { Module } from '@nestjs/common';
import { UserControlerController } from './user-controler/user-controler.controller';
import { UserServiceService } from './user-service/user-service.service';
import {DbServiceService} from '../common-services/db-service/db-service.service'
import {JwtServiceService} from '../common-services/jwt-service/jwt-service.service'
@Module({
  controllers: [UserControlerController],
  providers: [UserServiceService,DbServiceService,JwtServiceService]
})
export class UserModuleModule {}
