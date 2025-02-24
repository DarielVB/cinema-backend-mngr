const serverlessExpress = require('aws-serverless-express');
const app = require('../src/app').default;
const server = serverlessExpress.createServer(app);

console.log('Lambda function loaded');
console.log('DB_NAME:', process.env.dbname);
console.log('DB_HOST:', process.env.dbhost);
console.log('DB_PASSWORD:', process.env.dbpassword);

exports.handler = (event, context) => {
    console.log('evento: ', event);
    console.log('context: ', context);
    serverlessExpress.proxy(server, event, context);
};