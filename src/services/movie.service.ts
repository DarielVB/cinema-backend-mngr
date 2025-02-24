import { IMovie } from "../model/movies/movies.interface";
import MovieRepository from "../repositories/movie.repository";

export default class MovieService {
  public static async getMovies() {
    return await MovieRepository.getMovies();
  }

  public static async createMovie(movie: IMovie) {
    return await MovieRepository.createMovie(movie);
  }
}