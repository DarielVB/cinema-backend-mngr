import { sequelizePostgreSQL } from "../database/database";
import { IMovieGenre } from "../model/movieGenre/movieGenre.interface";
import { MovieGenre } from "../model/movieGenre/movieGenre.model";

export const movieGenreRepository = sequelizePostgreSQL.getRepository(MovieGenre);

const getMovieGenres = async () => {
    console.log('Trying to get movie genres');
    return await movieGenreRepository.findAll();
}

const createMovieGenre = async (movieGenre: IMovieGenre) => {
    console.log('Trying to create movie genre');
    const movieGenreObject = {
        movieId: movieGenre.movieId,
        genreId: movieGenre.genreId
    };
    return await movieGenreRepository.create(movieGenreObject);
}

const MovieGenreRepository = {
    getMovieGenres,
    createMovieGenre,
}

export default MovieGenreRepository;