import { Module } from '@nestjs/common';
import { UserMicroserviceController } from '../controllers/user/user.controller';

@Module({
    controllers: [UserMicroserviceController]
})
export class UserModule { }
