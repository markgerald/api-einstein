import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/solve')
  async solve(@Body() appDto: AppDto) {
    return this.appService.getTwoArrayUniqueSum(appDto);
  }
}
