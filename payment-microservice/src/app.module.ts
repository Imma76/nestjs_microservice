import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './module/payment.module';
import { NatsClientModule } from './nats/nats';

@Module({
  imports: [NatsClientModule, PaymentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
