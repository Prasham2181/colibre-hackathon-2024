const serverlessHttp = require('serverless-http');
const { app } = require('./app');

exports.handler = serverlessHttp(app);
