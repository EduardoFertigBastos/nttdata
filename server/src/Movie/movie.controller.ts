import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { SearchMoviesQuery } from './dtos/SearchMoviesQuery';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  async findInApi(
    @Query() 
    query: SearchMoviesQuery
  ) {
    const { title } = query;

    return await this.movieService.findInApi({ title });
  }
}
