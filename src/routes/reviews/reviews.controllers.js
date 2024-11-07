const {
    getAllReviews,
    addReview,
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


module.exports = {
    httpGetAllReviews,
    httpAddReview
}