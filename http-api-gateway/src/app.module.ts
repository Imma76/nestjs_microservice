import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NatsClientModule } from './nats/nats';
import { PaymentController } from './payments/controller/payment/payment.controller';
import { PaymentModule } from './payments/payment/payment.module';
import { UserController } from './user/controllers/user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [NatsClientModule, UserModule, PaymentModule],

  controllers: [AppController, UserController, PaymentController],
  providers: [AppService],
})
export class AppModule { }
