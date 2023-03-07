import { Injectable } from '@nestjs/common';
import { MovieNotFound } from "src/Movie/dtos/MovieNotFound";
import { Movie } from "src/Movie/dtos/Movie";
import OMDB from "./OMDB.api";

@Injectable()
export default class OMDBService {
  constructor(private readonly omdbAPI: OMDB) {}

  async getMovieByTitle(title: string|undefined): Promise<Movie|MovieNotFound> {
    let url = this.omdbAPI.buildUrl();

    if (title) {
      url += `&t=${title}`;
    }

    const response = await fetch(url);
    
    const data = await response.json();

    return data;
  }
}