import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './controllers/user/user.controller';
import { NatsClientModule } from 'src/nats/nats';

@Module({
  imports: [NatsClientModule],
  controllers: [UserController],
})
export class UserModule {}
