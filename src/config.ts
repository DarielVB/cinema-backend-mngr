export default {
    DB_NAME: process.env.dbname || 'postgres',
    DB_PASSWORD: process.env.dbpassword || 'password',
    DB_HOST: process.env.dbhost || 'localhost',
};