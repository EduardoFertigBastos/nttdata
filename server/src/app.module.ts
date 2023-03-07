import { Module } from '@nestjs/common';
import { MovieController } from './Movie/movie.controller';
import { MovieService } from './Movie/movie.service';
import OMDB from './APIs/OMDB/OMDB.api';
import OMDBService from './APIs/OMDB/OMDB.service';

@Module({
  imports: [],
  controllers: [
    MovieController
  ],
  providers: [
    MovieService,
    OMDBService,
    OMDB
  ],
})
export class AppModule {}
