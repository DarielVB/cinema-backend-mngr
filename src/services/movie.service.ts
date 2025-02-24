import MovieRepository from "../repositories/movie.repository";

export default class MovieService {
  public static async getMovies() {
    return await MovieRepository.getMovies();
  }
}