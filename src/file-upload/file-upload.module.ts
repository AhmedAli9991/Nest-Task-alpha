import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileControlerController } from './file-controler/file-controler.controller';
import { FileServiceService } from './file-service/file-service.service';
import {DbServiceService} from '../common-services/db-service/db-service.service'

@Module({
    imports: [
        MulterModule.register({
          dest: './uploads',
        }),
      ],
      controllers: [FileControlerController],
      providers: [FileServiceService,DbServiceService]
})
export class FileUploadModule {}
