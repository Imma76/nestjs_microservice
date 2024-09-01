import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats/nats';
import { PaymentController } from '../controller/payment/payment.controller';

@Module({
    imports: [NatsClientModule],
    controllers: [PaymentController],
})
export class PaymentModule { }
