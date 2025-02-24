import { sequelizePostgreSQL } from "../database/database";
import { Movie } from "../model/movies/movies.model";

export const movieRepository = sequelizePostgreSQL.getRepository(Movie);

const getMovies = async () => {
    return await movieRepository.findAll();
}

const MovieRepository = {
    getMovies
}

export default MovieRepository;