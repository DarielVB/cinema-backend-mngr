const serverless = require('serverless-http');
const app = require('../src/app').default;

module.exports.handler = serverless(app);