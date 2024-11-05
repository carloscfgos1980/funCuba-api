const Review = require('./reviews.mongo');

async function getAllReviews(){
    return await Review.find({}, {
        '_id':0, '__v':0
    }).sort({createdAt:-1})
}

async function getReview() {
    console.log('get review')

}

async function addReview(review) {
    console.log('add review')

    await Review.create(review);
}

async function deleteReview() {

}


  module.exports = {
    getAllReviews,
    getReview,
    addReview,
    deleteReview
  }