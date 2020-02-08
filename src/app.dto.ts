import { IsArray, IsNumber } from 'class-validator';

export class AppDto {
    @IsArray()
    A: any;

    @IsNumber()
    K: number;
}
