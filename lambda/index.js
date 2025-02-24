const serverlessExpress = require('aws-serverless-express');
const { default: config } = require('../src/config');
const app = require('../src/app').default;
const server = serverlessExpress.createServer(app);

exports.handler = (event, context) => {
    console.log('Lambda function loaded');
    console.log('DB_NAME:', config.DB_NAME);
    console.log('DB_HOST:', config.DB_HOST);
    console.log('DB_PASSWORD:', config.DB_PASSWORD);
    serverlessExpress.proxy(server, event, context);
};