'use strict';

const serverless = require('serverless-http');
const middy = require('middy')
const { cors } = require('middy/middlewares')

const app = require('./app');

const serverlessApp = serverless(app);

const handler = middy(serverlessApp)
  // Adds CORS headers to responses
  .use(cors({
    // specifiy extra headers that are OK
    headers: "authorization"
  }));

module.exports = { handler };
