import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import { Movie } from '../model/movies/movies.model';
import { Classification } from '../model/classification/classification.model';
import { Genre } from '../model/genre/genre.model';
import { MovieGenre } from '../model/movieGenre/movieGenre.model';
import { Room } from '../model/room/room.model';
import { Showtime } from '../model/showtimes/showtimes.model';

export const sequelizePostgreSQL = new Sequelize({
    database: config.DB_NAME,
    dialect: 'postgres',
    dialectOptions: { connectTimeout: 29000 },
    host: config.DB_HOST,
    models: [
        Movie,
        Classification,
        Genre,
        MovieGenre,
        Room,
        Showtime
    ],
    password: config.DB_PASSWORD,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    port: +5432,
    repositoryMode: true,
    username: 'postgres',
    logging: true,
});