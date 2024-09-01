import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMicroserviceController } from './user/controllers/user/user.controller';
import { UserModule } from './user/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserMicroserviceController],
  providers: [AppService],
})
export class AppModule { }
