import {
  Body,
  Controller,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

  @Post('')
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO);

    return this.natsClient.send({ cmd: 'createUser' }, createUserDTO);

    // this.natsClient.
  }
}
