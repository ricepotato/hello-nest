import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  getSayHello(): string {
    return '[GET] Hello everyone';
  }

  postSayHello(): string {
    return '[POST] Hello everyone';
  }
}
