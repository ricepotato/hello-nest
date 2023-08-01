import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') // 데코레이터 사이에 공백 없어야 함.
  getSayHello(): string {
    return this.appService.getSayHello();
  }

  @Post('/hello')
  postSayHello(): string {
    return this.appService.postSayHello();
  }
}
