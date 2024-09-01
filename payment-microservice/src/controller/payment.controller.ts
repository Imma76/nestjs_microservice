import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDTO } from 'src/dto/payment.dto';

@Controller()
export class PaymentMicroserviceController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @EventPattern({ cmd: 'createPayment' })
    createPayment(@Payload() createPaymentDto: CreatePaymentDTO) {
        console.log(createPaymentDto);
        this.natsClient.emit({ cmd: 'receivePayment' }, createPaymentDto);
        // return createPaymentDto;
    }
}
