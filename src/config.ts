export default {
    DB_NAME: 'postgres',
    DB_PASSWORD: process.env.dbname || 'password',
    DB_HOST: process.env.dbhost || 'localhost',
};