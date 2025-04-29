const express = require('express');
const router = express.Router({ mergeParams: true });
const { isLoggedIn, catchAsync, validateReview, isReviewAuthor } = require('../utils/middleware');
// The './' tells node.js not to look in the 'node-modules' folder as it would automatically do, but instead look in the current directory
const reviews = require('../controllers/reviews');

router.route('/')
    .get(reviews.renderReviewForm)
    .post(isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;