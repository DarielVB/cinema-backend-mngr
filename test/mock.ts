import sinon from 'sinon';
import { movieRepository } from '../src/repositories/movie.repository';
import { Movie } from '../src/model/movies/movies.model';

export class MockMovies {
    public static getMoviesSuccess(sandbox: sinon.SinonSandbox){
        const movies = [
            {
                id: 1,
                name: 'The Lord of the Rings: The Fellowship of the Ring',
                duration: 178,
                classificationId: 1
            },
            {
                id: 2,
                name: 'The Lord of the Rings: The Two Towers',
                duration: 179,
                classificationId: 1
            },
            {
                id: 3,
                name: 'The Lord of the Rings: The Return of the King',
                duration: 201,
                classificationId: 1
            }
        ] as Movie[];
        sandbox
            .stub(movieRepository, 'findAll')
            .returns(Promise.resolve(movies) as Promise<Movie[]>);
    }
}
