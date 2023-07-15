const router = require('express').Router();
const{
    getReactions,
    getSingleReaction,
    updateReaction,
    createReaction,
    deleteReaction,
} = require('../../controllers/ReactionController');

router.route('/').get(getReactions).post(createReaction);

router
    .route('/:reactionId')
    .get(getSingleReaction)
    .get(getSingleReaction)
    .put(updateReaction)
    .get(getSingleReaction)
    .delete(deleteReaction);

module.exports = router;
