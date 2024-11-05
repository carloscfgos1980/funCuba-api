const express = require('express');
const reviewsRouter = require('./reviews/reviews.router')
// const launchesRouter = require('./launches/launches.router')

const api = express();

api.use('/reviews', reviewsRouter);
// api.use('/launches', launchesRouter);

module.exports = api;