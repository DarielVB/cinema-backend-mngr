import { sequelizePostgreSQL } from "../database/database";
import { IMovie } from "../model/movies/movies.interface";
import { Movie } from "../model/movies/movies.model";
import { Genre } from "../model/genre/genre.model";

export const movieRepository = sequelizePostgreSQL.getRepository(Movie);
export const genreRepository = sequelizePostgreSQL.getRepository(Genre);

const getMovies = async () => {
    console.log('Trying to get movies');
    return await movieRepository.findAll({
        include: [{
            model: genreRepository,
            attributes: ['name'],
            through: { attributes: [] }
        }]
    });
}

const createMovie = async (movie: IMovie) => {
    console.log('Trying to create movie');
    const movieObject = {
        name: movie.name,
        duration: movie.duration,
        classificationId: movie.classificationId
    };
    return await movieRepository.create(movieObject);
}

const MovieRepository = {
    getMovies,
    createMovie
}

export default MovieRepository;