import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
