import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from 'src/controller/payment.controller';
import { NatsClientModule } from 'src/nats/nats';

@Module({
    imports: [NatsClientModule],
    controllers: [PaymentMicroserviceController],
})
export class PaymentModule { }
