const serverlessExpress = require('aws-serverless-express');
const app = require('../src/app').default;
const server = serverlessExpress.createServer(app);

console.log('Lambda function loaded');
exports.handler = (event, context) => {
    console.log(event);
    console.log(context);
    serverlessExpress.proxy(server, event, context);
};