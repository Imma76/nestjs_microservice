import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMicroserviceController } from './user/controllers/user/user.controller';
import { UserModule } from './user/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'mysql',
      port: 5432,
      username: 'postgres',
      password: 'ami',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController, UserMicroserviceController],
  providers: [AppService],
})
export class AppModule { }
