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
    .get(getReactions)
    .get(getSingleReaction)
    .put(updateReaction)
    .put(createReaction)
    .delete(deleteReaction);

module.exports = router;
