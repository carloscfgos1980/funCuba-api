const {
    getAllReviews,
    getReview,
    addReview,
    deleteReview
} = require('../../models/reviews.model');

async function httpGetAllReviews(req, res) {
return res.status(200).json(await getAllReviews());
};

async function httpAddReview(req, res) {
    const review = req.body
    console.log(review)
    const {name, country, feedId, type, rate, comment} = review;
    if(!name || !country || !feedId || !type || !rate || !comment){
        res.status(400);
        throw new Error('All fields are mandatory!')
    }
    await addReview(review);
    return res.status(201).json(review)
};

async function httpGetReview(req, res) {

}

async function httpDeleteReview(req, res) {}





module.exports = {
    httpGetAllReviews,
    httpGetReview,
    httpAddReview,
    httpDeleteReview
}