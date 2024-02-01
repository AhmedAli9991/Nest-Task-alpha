import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModuleModule } from './crud-module/crud-module.module';

@Module({
  imports: [CrudModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
