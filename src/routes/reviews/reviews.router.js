const express = require('express');

const {
    httpGetAllReviews,
    httpGetReview,
    httpAddReview,
    httpDeleteReview
} = require('./reviews.controllers');

const reviewRouter = express.Router();

reviewRouter.get('/', httpGetAllReviews);
reviewRouter.post('/', httpAddReview);
reviewRouter.get('/:id', httpGetReview);
reviewRouter.delete('/:id', httpDeleteReview);

module.exports = reviewRouter;