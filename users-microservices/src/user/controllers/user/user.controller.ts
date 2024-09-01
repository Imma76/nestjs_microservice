import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserMicroserviceController {

    @MessagePattern({ cmd: 'createUser' })
    createUser(@Payload() data: CreateUserDTO) {
        console.log(data);
        return data;
    }

    @EventPattern({ cmd: 'receivePayment' })
    receivePayment(@Payload() data: any) {
        console.log(data);
    }
}
