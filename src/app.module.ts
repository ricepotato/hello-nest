import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // URL 을 가져오고 함수를 실행한다. router 같은 역할.
  providers: [AppService],
})
export class AppModule {}
