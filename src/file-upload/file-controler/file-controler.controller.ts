// file.controller.ts

import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileServiceService } from '../file-service/file-service.service';
import { multerOptions, SUPPORTED_FILES } from '../upload';
import {AuthGuard} from '../../common-services/auth-guard/auth-guard.service'

@Controller('file')
export class FileControlerController {
  constructor(private fileConversionService: FileServiceService) {}
 // @Post("file")
    // @UseGuards(AuthGuard)
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file: Express.Multer.File) {
    //     console.log(file);
    // }

  @Post('upload')
// @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async uploadFile(@UploadedFile() file,@Body() User ) {
    
    const res1 = await this.fileConversionService.fileinfo({name :User.name,description:User.description})
    const response = await this.fileConversionService.convertExcelToCSV(file.path);
    
    return response;
  }
}

