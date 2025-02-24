export default {
    DB_NAME: process.env.dbname || 'postgres',
    DB_PASSWORD: process.env.dbpassword || 'password',
    DB_HOST: process.env.dbhost || 'asgsafgasg',
    AWS_ACCESS_KEY_ID_lambda: process.env.AWS_ACCESS_KEY_ID_lambda || 'accesskey',
    AWS_SECRET_ACCESS_KEY_lambda: process.env.AWS_SECRET_ACCESS_KEY_lambda || 'secretkey',
};