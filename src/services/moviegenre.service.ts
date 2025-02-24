import { IMovieGenre } from "../model/movieGenre/movieGenre.interface";
import MovieGenreRepository from "../repositories/moviegenre.repository";

export default class MovieGenreService {
    public static async getMovieGenres() {
        return await MovieGenreRepository.getMovieGenres();
    }
    
    public static async createMovieGenre(movieGenre: IMovieGenre) {
        return await MovieGenreRepository.createMovieGenre(movieGenre);
    }
}