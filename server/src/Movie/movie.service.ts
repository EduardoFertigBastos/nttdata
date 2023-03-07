import { Injectable } from '@nestjs/common';
import OMDBService from 'src/APIs/OMDB/OMDB.service';

interface FindInApiProps{
  title?: string;
}

@Injectable()
export class MovieService {
  constructor(private readonly omdbService: OMDBService) {}
  
  async findInApi({ title }: FindInApiProps) {
    const data = await this.omdbService.getMovieByTitle(title);
    
    return data;
  }
}
