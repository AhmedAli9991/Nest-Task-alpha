import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { JwtModule } from '@nestjs/jwt';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [UserModuleModule,FileUploadModule, JwtModule.register({
      global: true,
      secret: 'mysecret',
      signOptions: { expiresIn: '600s' },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
