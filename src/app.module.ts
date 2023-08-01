import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // URL 을 가져오고 함수를 실행한다. router 같은 역할.
  providers: [],
})
export class AppModule {}
