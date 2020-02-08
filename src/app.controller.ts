import {Body, Controller, Get, Post, Request} from '@nestjs/common';
import { AppService } from './app.service';
import {AppDto} from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/api/solve')
  async solve(@Body() appDto: AppDto) {
    return appDto;
  }
}
