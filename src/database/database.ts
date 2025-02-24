import { Sequelize } from 'sequelize-typescript';
import config from '../config';
import { Movie } from '../model/movies/movies.model';
import { Classification } from '../model/classification/classification.model';

export const sequelizePostgreSQL = new Sequelize({
    database: config.DB_NAME,
    dialect: 'postgres',
    dialectOptions: { connectTimeout: 29000 },
    host: config.DB_HOST,
    models: [
        Movie,
        Classification,
    ],
    password: config.DB_PASSWORD,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    port: +5432,
    repositoryMode: true,
    username: 'postgres',
    logging: true,
});