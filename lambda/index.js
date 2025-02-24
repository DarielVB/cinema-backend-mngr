const serverlessExpress = require('aws-serverless-express');
const app = require('../src/app').default;
const server = serverlessExpress.createServer(app);

console.log('Lambda function loaded');
exports.handler = (event, context) => {
    console.log('evento: ', event);
    console.log('context: ', context);
    serverlessExpress.proxy(server, event, context);
};