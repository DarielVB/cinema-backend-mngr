const serverlessExpress = require('aws-serverless-express');
const app = require('../src/app').default;
const server = serverlessExpress.createServer(app);

exports.handler = (event, context) => {
    serverlessExpress.proxy(server, event, context);
};