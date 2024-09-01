import {
    Body,
    Controller,
    Inject,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDTO } from 'src/dto/payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Post('')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createPaymentDto: CreatePaymentDTO) {
        //console.log(createPaymentDto);

        this.natsClient.emit({ cmd: 'createPayment' }, createPaymentDto);

        // this.natsClient.
    }
}
